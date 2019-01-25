import ReactDOM from 'react-dom';
import {log, func} from '../util';
import Validate from '../validate';

import {
    getValueFromEvent,
    getErrorStrs,
    getParams,
    setIn,
    getIn,
    mapValidateRules
} from './utils';

const initMeta = {
    state: '',
    valueName: 'value',
    trigger: 'onChange'
};

class Field {
    constructor(com, options = {}) {
        if (!com) {
            log.warning('`this` is missing in `Field`, you should use like `new Field(this)`');
        }

        this.com = com;
        this.fieldsMeta = {};
        this.cachedBind = {};
        this.instance = {};

        this.options = Object.assign({
            parseName: false,
            forceUpdate: false,
            scrollToFirstError: true,
            first: false,
            onChange: func.noop,
            autoUnmount: true
        }, options);

        ['init', 'getValue', 'getValues', 'setValue', 'setValues', 'getError', 'setError', 'setErrors', 'validate', 'getState', 'reset', 'resetToDefault', 'remove'].forEach((m) => {
            this[m] = this[m].bind(this);
        });

        if (options.values) {
            this.setValues(options.values, false);
        }
    }

    setOptions(options) {
        Object.assign(this.options, options);
    }

    /**
     * Control Component
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
            getValueFromEvent = null
        } = fieldOption;
        const originalProps = Object.assign({}, props, rprops);
        const defaultValueName = `default${valueName[0].toUpperCase()}${valueName.slice(1)}`;

        const field = this._getInitMeta(name);
        const defaultValue = typeof initValue !== 'undefined' ? initValue : originalProps[defaultValueName];

        Object.assign(field, {
            valueName,
            initValue: defaultValue,
            disabled: 'disabled' in originalProps ? originalProps.disabled : false,
            getValueFromEvent,
            rules: Array.isArray(rules) ? rules : [rules],
            ref: originalProps.ref
        });

        // Control Component
        if (valueName in originalProps) {
            field.value = originalProps[valueName];
        }

        if (!('value' in field)) {
            field.value = defaultValue;
        }

        // Component props
        const inputProps = {
            'data-meta': 'Field',
            id: name,
            ref: this._getCacheBind(name, `${name}__ref`, this._saveRef),
            [valueName]: field.value
        };

        // trigger map
        const rulesMap = mapValidateRules(field.rules, trigger);

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
        (action in props) && typeof props[action] === 'function' && props[action](...args);
    }

    _getInitMeta(name) {
        if (!(name in this.fieldsMeta)) {
            this.fieldsMeta[name] = Object.assign({}, initMeta);
        }

        return this.fieldsMeta[name];
    }

    _callOnChange(name, rule, trigger, ...others) {
        const e = others[0];
        const field = this._get(name);

        if (!field) {
            return;
        }

        field.value = field.getValueFromEvent ? field.getValueFromEvent.apply(this, others) : getValueFromEvent(e);

        this._resetError(name);
        rule && this._validate(name, rule, trigger);
    }

    /**
     * ref must always be the same function, or if not it will be triggerd every time.
     * @param {String} name name of component
     * @param {String} action key to find ref
     * @param {Function} fn saveRef
     */
    _getCacheBind(name, action, fn) {
        const cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
            cache[action] = fn.bind(this, name);
        }
        return cache[action];
    }

    _setCache(name, action, hander) {
        const cache = this.cachedBind[name] = this.cachedBind[name] || {};
        cache[action] = hander;
    }

    _getCache(name, action) {
        const cache = this.cachedBind[name] || {};
        return cache[action];
    }

    /**
     * saveRef is async function. it will be called after render
     * @param {String} name name of component
     * @param {Function} component ref
     */
    _saveRef(name, component) {
        const key = `${name}_field`;
        const autoUnmount = this.options.autoUnmount;
        if (!component && autoUnmount) {
            // component with same name(eg: type? <A name="n"/>:<B name="n"/>)
            // while type change to true B will render before A unmount.
            const cache = this.fieldsMeta[name];
            this._setCache(name, key, cache);
            // after destroy, delete data
            delete this.fieldsMeta[name];
            delete this.instance[name];
            return;
        }

        // after _saveRef(name, null) and before rerender. (eg: same name but different compoent may be here)
        if (autoUnmount && !this.fieldsMeta[name]) {
            this.fieldsMeta[name] = this._getCache(name, key);
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

        validate = new Validate({[name]: rule});
        this._setCache(name, trigger, validate);

        validate.validate({
            [name]: value
        }, (errors) => {

            if (errors && errors.length) {
                field.errors = getErrorStrs(errors);
                field.state = 'error';
            } else {
                field.errors = [];
                field.state = 'success';
            }

            this._reRender();
        });
    }

    getValue(name) {
        const field = this._get(name);

        if (field && 'value' in field) {
            return field.value;
        }

        return undefined;
    }

    /**
     * 1. get values by names.
     * 2. ignore disabled value.
     * @param {Array} names
     */
    getValues(names) {
        const fields = names || this.getNames();
        let allValues = {};

        fields.forEach((f) => {
            if (f.disabled) {
                return;
            }
            if (!this.options.parseName) {
                allValues[f] = this.getValue(f);
            } else {
                allValues = setIn(allValues, f, this.getValue(f));
            }
        });
        return allValues;
    }

    setValue(name, value, reRender = true) {
        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].value = value;
        } else {
            // if not exist, then new one
            this.fieldsMeta[name] = {
                value
            };
        }
        reRender && this._reRender();
    }

    setValues(fieldsValue = {}, reRender = true) {
        if (!this.options.parseName) {
            Object.keys(fieldsValue).forEach((name) => {
                this.setValue(name, fieldsValue[name], false);
            });
        } else {
            const fields = this.getNames();
            fields.forEach((name) => {
                const value = getIn(fieldsValue, name);
                if (value !== undefined) {
                    this.setValue(name, value, false);
                }
            });
        }
        reRender && this._reRender();
    }

    setError(name, errors) {
        const err = Array.isArray(errors) ? errors : (errors ? [errors] : []);
        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].errors = err;
        } else {
            this.fieldsMeta[name] = {
                errors: err
            };
        }

        if (this.fieldsMeta[name].errors && this.fieldsMeta[name].errors.length > 0) {
            this.fieldsMeta[name].state = 'error';
        } else {
            this.fieldsMeta[name].state = '';
        }

        this._reRender();
    }

    setErrors(fieldsErrors = {}) {
        Object.keys(fieldsErrors).forEach((name) => {
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
        fields.forEach((f) => {
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
     * validate by trigger
     * @param {Array} ns names
     * @param {Function} cb callback after validate
     */
    validate(ns, cb) {
        const {names, callback} = getParams(ns, cb);
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
            callback && callback(null, this.getValues(fieldNames));
            return;
        }

        const validate = new Validate(descriptor, {first: this.options.first});

        validate.validate(values, (errors) => {
            let errorsGroup = null;
            if (errors && errors.length) {
                errorsGroup = {};
                errors.forEach((e) => {
                    const fieldName = e.field;
                    if (!errorsGroup[fieldName]) {
                        errorsGroup[fieldName] = {
                            errors: []
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
                    field.errors = errorsGroup[i].errors;
                    field.state = 'error';
                });
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
            callback && callback(errorsGroup, this.getValues(fieldNames));
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
                    if (typeof this.options.scrollToFirstError === 'number' && window && typeof window.scrollTo === 'function') {
                        const offsetLeft = document && document.body && document.body.offsetLeft ? document.body.offsetLeft : 0;
                        window.scrollTo(offsetLeft, firstTop + this.options.scrollToFirstError);
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
        names.forEach((name) => {
            const field = this._get(name);
            this.getValue(name);
            if (field) {
                changed = true;

                field.value = backToDefault ? field.initValue : undefined;
                field.state = '';

                delete field.errors;
                delete field.rules;
                delete field.rulesMap;
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
        return fieldsMeta ? Object.keys(fieldsMeta).filter(() => {
            return true;
        }) : [];
    }

    remove(ns) {
        if (typeof ns === 'string') {
            ns = [ns];
        }
        const names = ns || Object.keys(this.fieldsMeta);
        names.forEach((name) => {
            if (name in this.fieldsMeta) {
                delete this.fieldsMeta[name];
            }
        });
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
        return (name in this.fieldsMeta) ? this.fieldsMeta[name] : null;
    }
}

export default Field;
