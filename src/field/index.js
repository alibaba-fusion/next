import ReactDOM from 'react-dom';
import { log, func } from '../util';
import Validate from '../validate';

import {
    getValueFromEvent,
    getErrorStrs,
    getParams,
    setIn,
    getIn,
    deleteIn,
    mapValidateRules,
} from './utils';

const initMeta = {
    state: '',
    valueName: 'value',
    trigger: 'onChange',
};

class Field {
    constructor(com, options = {}) {
        if (!com) {
            log.warning(
                '`this` is missing in `Field`, you should use like `new Field(this)`'
            );
        }

        this.com = com;
        this.fieldsMeta = {};
        this.cachedBind = {};
        this.instance = {};
        // holds constructor values. Used for setting field defaults on init if no other value or initValue is passed.
        // Also used caching values when using `parseName: true` before a field is initialized
        this.values = Object.assign({}, options.values);

        this.options = Object.assign(
            {
                parseName: false,
                forceUpdate: false,
                scrollToFirstError: true,
                first: false,
                onChange: func.noop,
                autoUnmount: true,
                autoValidate: true,
            },
            options
        );

        [
            'init',
            'getValue',
            'getValues',
            'setValue',
            'setValues',
            'getError',
            'getErrors',
            'setError',
            'setErrors',
            'validate',
            'getState',
            'reset',
            'resetToDefault',
            'remove',
            'spliceArray',
        ].forEach(m => {
            this[m] = this[m].bind(this);
        });
    }

    setOptions(options) {
        Object.assign(this.options, options);
    }

    /**
     * Controlled Component
     * @param {String} name
     * @param {Object} fieldOption
     * @returns {Object} {value, onChange}
     */
    init(name, fieldOption = {}, rprops) {
        const {
            initValue,
            valueName = 'value',
            trigger = 'onChange',
            rules = [],
            props = {},
            getValueFromEvent = null,
            autoValidate = true,
        } = fieldOption;
        const { parseName } = this.options;

        const originalProps = Object.assign({}, props, rprops);
        const defaultValueName = `default${valueName[0].toUpperCase()}${valueName.slice(
            1
        )}`;
        let defaultValue;
        if (typeof initValue !== 'undefined') {
            defaultValue = initValue;
        } else if (typeof originalProps[defaultValueName] !== 'undefined') {
            // here use typeof, in case of defaultValue={0}
            defaultValue = originalProps[defaultValueName];
        }

        // get field from this.fieldsMeta or new one
        const field = this._getInitMeta(name);
        Object.assign(field, {
            valueName,
            initValue: defaultValue,
            disabled:
                'disabled' in originalProps ? originalProps.disabled : false,
            getValueFromEvent,
            rules: Array.isArray(rules) ? rules : [rules],
            ref: originalProps.ref,
        });

        // Controlled Component, should alwasy equal props.value
        if (valueName in originalProps) {
            field.value = originalProps[valueName];

            // When rerendering set the values from props.value
            if (parseName) {
                this.values = setIn(this.values, name, field.value);
            } else {
                this.values[name] = field.value;
            }
        }

        /**
         * first init field (value not in field)
         * should get field.value from this.values or defaultValue
         */
        if (!('value' in field)) {
            if (parseName) {
                const cachedValue = getIn(this.values, name);
                if (typeof cachedValue !== 'undefined') {
                    field.value = cachedValue;
                } else {
                    field.value = defaultValue;
                    this.values = setIn(this.values, name, field.value);
                }
            } else {
                const cachedValue = this.values[name];
                if (typeof cachedValue !== 'undefined') {
                    field.value = cachedValue;
                } else if (typeof defaultValue !== 'undefined') {
                    field.value = defaultValue;
                    this.values[name] = field.value;
                }
            }
        }

        // Component props
        const inputProps = {
            'data-meta': 'Field',
            id: name,
            ref: this._getCacheBind(name, `${name}__ref`, this._saveRef),
            [valueName]: field.value,
        };

        let rulesMap = {};

        if (this.options.autoValidate && autoValidate !== false) {
            // trigger map
            rulesMap = mapValidateRules(field.rules, trigger);

            // validate hook
            for (const action in rulesMap) {
                if (action === trigger) {
                    continue;
                }

                const actionRule = rulesMap[action];
                inputProps[action] = (...args) => {
                    this._validate(name, actionRule, action);
                    this._callPropsEvent(action, originalProps, ...args);
                    this._reRender();
                };
            }
        }

        // onChange hack
        inputProps[trigger] = (...args) => {
            this._callOnChange(name, rulesMap[trigger], trigger, ...args);
            this._callPropsEvent(trigger, originalProps, ...args);
            this.options.onChange(name, field.value);
            this._reRender();
        };

        delete originalProps[defaultValueName];

        return Object.assign({}, originalProps, inputProps);
    }

    /**
     * event on props
     * props.onChange props.onBlur
     */
    _callPropsEvent(action, props, ...args) {
        action in props &&
            typeof props[action] === 'function' &&
            props[action](...args);
    }

    _getInitMeta(name) {
        if (!(name in this.fieldsMeta)) {
            this.fieldsMeta[name] = Object.assign({}, initMeta);
        }

        return this.fieldsMeta[name];
    }

    /**
     * update field.value and validate
     */
    _callOnChange(name, rule, trigger, ...others) {
        const e = others[0];
        const field = this._get(name);

        if (!field) {
            return;
        }

        field.value = field.getValueFromEvent
            ? field.getValueFromEvent.apply(this, others)
            : getValueFromEvent(e);

        if (this.options.parseName) {
            this.values = setIn(this.values, name, field.value);
        } else {
            this.values[name] = field.value;
        }

        this._resetError(name);

        // validate while onChange
        rule && this._validate(name, rule, trigger);
    }

    /**
     * ref must always be the same function, or if not it will be triggerd every time.
     * @param {String} name name of component
     * @param {String} action key to find ref
     * @param {Function} fn saveRef
     */
    _getCacheBind(name, action, fn) {
        const cache = (this.cachedBind[name] = this.cachedBind[name] || {});
        if (!cache[action]) {
            cache[action] = fn.bind(this, name);
        }
        return cache[action];
    }

    _setCache(name, action, hander) {
        const cache = (this.cachedBind[name] = this.cachedBind[name] || {});
        cache[action] = hander;
    }

    _getCache(name, action) {
        const cache = this.cachedBind[name] || {};
        return cache[action];
    }

    /**
     * NOTE: saveRef is async function. it will be called after render
     * @param {String} name name of component
     * @param {Function} component ref
     */
    _saveRef(name, component) {
        const key = `${name}_field`;
        const autoUnmount = this.options.autoUnmount;

        if (!component && autoUnmount) {
            // component with same name (eg: type ? <A name="n"/>:<B name="n"/>)
            // while type changed, B will render before A unmount. so we should cached value for B
            // step: render -> B mount -> 1. _saveRef(A, null) -> 2. _saveRef(B, ref) -> render
            // 1. _saveRef(A, null)
            const cache = this.fieldsMeta[name];
            this._setCache(name, key, cache);
            // after destroy, delete data
            delete this.instance[name];
            this.remove(name);
            return;
        }

        // 2. _saveRef(B, ref) (eg: same name but different compoent may be here)
        if (autoUnmount && !this.fieldsMeta[name]) {
            this.fieldsMeta[name] = this._getCache(name, key);
            this.setValue(
                name,
                this.fieldsMeta[name] && this.fieldsMeta[name].value,
                false
            );
        }

        // only one time here
        const field = this._get(name);
        if (field) {
            const ref = field.ref;
            if (ref) {
                if (typeof ref === 'string') {
                    throw new Error(`can not set string ref for ${name}`);
                }
                ref(component);
            }

            this.instance[name] = component;
        }
    }

    /**
     * validate one Component
     * @param {String} name name of Component
     * @param {Array} rule
     * @param {String} trigger onChange/onBlur/onItemClick/...
     */
    _validate(name, rule, trigger) {
        const field = this._get(name);
        const value = field.value;

        field.state = 'loading';

        let validate = this._getCache(name, trigger);
        validate && validate.abort();

        validate = new Validate({
            [name]: rule,
        });
        this._setCache(name, trigger, validate);

        validate.validate(
            {
                [name]: value,
            },
            errors => {
                if (errors && errors.length) {
                    field.errors = getErrorStrs(errors);
                    field.state = 'error';
                } else {
                    field.errors = [];
                    field.state = 'success';
                }

                this._reRender();
            }
        );
    }

    getValue(name) {
        if (this.options.parseName) {
            return getIn(this.values, name);
        }
        return this.values[name];
    }

    /**
     * 1. get values by names.
     * 2. If no names passed, return shallow copy of `field.values`
     * @param {Array} names
     */
    getValues(names) {
        const allValues = {};

        if (names && names.length) {
            names.forEach(name => {
                allValues[name] = this.getValue(name);
            });
        } else {
            Object.assign(allValues, this.values);
        }

        return allValues;
    }

    setValue(name, value, reRender = true) {
        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].value = value;
        }
        if (this.options.parseName) {
            this.values = setIn(this.values, name, value);
        } else {
            this.values[name] = value;
        }
        reRender && this._reRender();
    }

    setValues(fieldsValue = {}, reRender = true) {
        if (!this.options.parseName) {
            Object.keys(fieldsValue).forEach(name => {
                this.setValue(name, fieldsValue[name], false);
            });
        } else {
            // NOTE: this is a shallow merge
            // Ex. we have two values a.b.c=1 ; a.b.d=2, and use setValues({a:{b:{c:3}}}) , then because of shallow merge a.b.d will be lost, we will get only {a:{b:{c:3}}}
            this.values = Object.assign({}, this.values, fieldsValue);
            const fields = this.getNames();
            fields.forEach(name => {
                const value = getIn(this.values, name);
                if (value !== undefined) {
                    // copy over values that are in this.values
                    this.fieldsMeta[name].value = value;
                } else {
                    // if no value then copy values from fieldsMeta to keep initialized component data
                    this.values = setIn(
                        this.values,
                        name,
                        this.fieldsMeta[name].value
                    );
                }
            });
        }
        reRender && this._reRender();
    }

    setError(name, errors) {
        const err = Array.isArray(errors) ? errors : errors ? [errors] : [];
        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].errors = err;
        } else {
            this.fieldsMeta[name] = {
                errors: err,
            };
        }

        if (
            this.fieldsMeta[name].errors &&
            this.fieldsMeta[name].errors.length > 0
        ) {
            this.fieldsMeta[name].state = 'error';
        } else {
            this.fieldsMeta[name].state = '';
        }

        this._reRender();
    }

    setErrors(fieldsErrors = {}) {
        Object.keys(fieldsErrors).forEach(name => {
            this.setError(name, fieldsErrors[name]);
        });
    }

    getError(name) {
        const field = this._get(name);
        if (field && field.errors && field.errors.length) {
            return field.errors;
        }

        return null;
    }

    getErrors(names) {
        const fields = names || this.getNames();
        const allErrors = {};
        fields.forEach(f => {
            allErrors[f] = this.getError(f);
        });
        return allErrors;
    }

    getState(name) {
        const field = this._get(name);

        if (field && field.state) {
            return field.state;
        }

        return '';
    }

    /**
     * Get errors using `getErrors` and format to match the structure of errors returned in field.validate
     * @param {Array} fieldNames
     * @return {Object || null} map of inputs and their errors
     */
    formatGetErrors(fieldNames) {
        const errors = this.getErrors(fieldNames);
        let formattedErrors = null;
        for (const field in errors) {
            if (errors.hasOwnProperty(field) && errors[field]) {
                const errorsObj = errors[field];
                if (!formattedErrors) {
                    formattedErrors = {};
                }
                formattedErrors[field] = { errors: errorsObj };
            }
        }
        return formattedErrors;
    }

    /**
     * validate by trigger
     * @param {Array} ns names
     * @param {Function} cb callback after validate
     */
    validate(ns, cb) {
        const { names, callback } = getParams(ns, cb);
        const fieldNames = names || this.getNames();

        const descriptor = {};
        const values = {};

        let hasRule = false;
        for (let i = 0; i < fieldNames.length; i++) {
            const name = fieldNames[i];
            const field = this._get(name);

            if (!field) {
                continue;
            }

            if (field.rules && field.rules.length) {
                descriptor[name] = field.rules;
                values[name] = this.getValue(name);
                hasRule = true;

                // clear error
                field.errors = [];
                field.state = '';
            }
        }

        if (!hasRule) {
            const errors = this.formatGetErrors(fieldNames);
            callback &&
                callback(errors, this.getValues(names ? fieldNames : []));
            return;
        }

        const validate = new Validate(descriptor, {
            first: this.options.first,
        });

        validate.validate(values, errors => {
            let errorsGroup = null;
            if (errors && errors.length) {
                errorsGroup = {};
                errors.forEach(e => {
                    const fieldName = e.field;
                    if (!errorsGroup[fieldName]) {
                        errorsGroup[fieldName] = {
                            errors: [],
                        };
                    }
                    const fieldErrors = errorsGroup[fieldName].errors;
                    fieldErrors.push(e.message);
                });
            }
            if (errorsGroup) {
                // update error in every Field
                Object.keys(errorsGroup).forEach(i => {
                    const field = this._get(i);
                    field.errors = getErrorStrs(errorsGroup[i].errors);
                    field.state = 'error';
                });
            }

            const formattedGetErrors = this.formatGetErrors(fieldNames);

            if (formattedGetErrors) {
                errorsGroup = Object.assign(
                    {},
                    formattedGetErrors,
                    errorsGroup
                );
            }

            // update to success which has no error
            for (let i = 0; i < fieldNames.length; i++) {
                const name = fieldNames[i];
                const field = this._get(name);
                if (field.rules && !(errorsGroup && name in errorsGroup)) {
                    field.state = 'success';
                }
            }

            // eslint-disable-next-line callback-return
            callback &&
                callback(errorsGroup, this.getValues(names ? fieldNames : []));
            this._reRender();

            if (errorsGroup && this.options.scrollToFirstError) {
                let firstNode;
                let firstTop;
                for (const i in errorsGroup) {
                    if (errorsGroup.hasOwnProperty(i)) {
                        const instance = this.instance[i];
                        const node = ReactDOM.findDOMNode(instance);
                        if (!node) {
                            return;
                        }
                        const top = node.offsetTop;
                        if (firstTop === undefined || firstTop > top) {
                            firstTop = top;
                            firstNode = node;
                        }
                    }
                }

                if (firstNode) {
                    if (
                        typeof this.options.scrollToFirstError === 'number' &&
                        window &&
                        typeof window.scrollTo === 'function'
                    ) {
                        const offsetLeft =
                            document &&
                            document.body &&
                            document.body.offsetLeft
                                ? document.body.offsetLeft
                                : 0;
                        window.scrollTo(
                            offsetLeft,
                            firstTop + this.options.scrollToFirstError
                        );
                    } else if (firstNode.scrollIntoViewIfNeeded) {
                        firstNode.scrollIntoViewIfNeeded(true);
                    }
                }
            }
        });
    }

    _reset(ns, backToDefault) {
        if (typeof ns === 'string') {
            ns = [ns];
        }
        let changed = false;

        const names = ns || Object.keys(this.fieldsMeta);

        if (!ns) {
            this.values = {};
        }
        names.forEach(name => {
            const field = this._get(name);
            if (field) {
                changed = true;

                field.value = backToDefault ? field.initValue : undefined;
                field.state = '';

                delete field.errors;
                delete field.rules;
                delete field.rulesMap;

                if (this.options.parseName) {
                    this.values = setIn(this.values, name, field.value);
                } else {
                    this.values[name] = field.value;
                }
            }
        });

        if (changed) {
            this._reRender();
        }
    }

    reset(ns, backToDefault = false) {
        if (ns === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        } else {
            this._reset(ns, false);
        }
    }

    resetToDefault(ns) {
        this._reset(ns, true);
    }

    // deprecated. TODO: remove in 2.0 version
    isValidating(name) {
        log.deprecated('isValidating', 'getState', 'Field');
        return this.getState(name) === 'loading';
    }

    getNames() {
        const fieldsMeta = this.fieldsMeta;
        return fieldsMeta
            ? Object.keys(fieldsMeta).filter(() => {
                  return true;
              })
            : [];
    }

    remove(ns) {
        if (typeof ns === 'string') {
            ns = [ns];
        }
        if (!ns) {
            this.values = {};
        }

        const names = ns || Object.keys(this.fieldsMeta);
        names.forEach(name => {
            if (name in this.fieldsMeta) {
                delete this.fieldsMeta[name];
            }
            if (this.options.parseName) {
                this.values = deleteIn(this.values, name);
            } else {
                delete this.values[name];
            }
        });
    }

    /**
     * splice in a Array
     * @param {String} keyMatch like name.{index}
     * @param {Number} startIndex index
     */
    spliceArray(keyMatch, startIndex) {
        if (keyMatch.indexOf('{index}') === -1) {
            log.warning('{index} not find in key');
            return;
        }

        // regex to match field names in the same target array
        const reg = keyMatch.replace('{index}', '(\\d+)');
        const keyReg = new RegExp(`^${reg}$`);

        let list = [];
        const names = this.getNames();
        names.forEach(n => {
            // is name in the target array?
            const ret = keyReg.exec(n);
            if (ret) {
                const index = parseInt(ret[1]);
                if (index > startIndex) {
                    list.push({
                        index,
                        name: n,
                    });
                }
            }
        });

        list = list.sort((a, b) => a.index < b.index);

        // should be continuous array
        if (list.length > 0 && list[0].index === startIndex + 1) {
            list.forEach(l => {
                const n = keyMatch.replace('{index}', l.index - 1);
                const v = this.getValue(l.name);
                this.setValue(n, v, false);
            });
            this.remove(list[list.length - 1].name);

            let parentName = keyMatch.replace('.{index}', '');
            parentName = parentName.replace('[{index}]', '');
            const parent = this.getValue(parentName);

            if (parent) {
                // if parseName=true then parent is an Array object but does not know an element was removed
                // this manually decrements the array length
                parent.length--;
            }
        }
    }

    _resetError(name) {
        const field = this._get(name);
        delete field.errors; //清空错误
        field.state = '';
    }

    //trigger rerender
    _reRender() {
        if (this.com) {
            if (!this.options.forceUpdate && this.com.setState) {
                this.com.setState({});
            } else if (this.com.forceUpdate) {
                this.com.forceUpdate(); //forceUpdate 对性能有较大的影响，成指数上升
            }
        }
    }

    _get(name) {
        return name in this.fieldsMeta ? this.fieldsMeta[name] : null;
    }
}

export default Field;
