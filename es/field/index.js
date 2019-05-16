import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import ReactDOM from 'react-dom';
import { log, func } from '../util';
import Validate from '../validate';

import { getValueFromEvent, getErrorStrs, getParams, setIn, getIn, mapValidateRules } from './utils';

var initMeta = {
    state: '',
    valueName: 'value',
    trigger: 'onChange'
};

var Field = function () {
    function Field(com) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Field);

        if (!com) {
            log.warning('`this` is missing in `Field`, you should use like `new Field(this)`');
        }

        this.com = com;
        this.fieldsMeta = {};
        this.cachedBind = {};
        this.instance = {};

        this.options = _extends({
            parseName: false,
            forceUpdate: false,
            scrollToFirstError: true,
            first: false,
            onChange: func.noop,
            autoUnmount: true,
            autoValidate: true
        }, options);

        ['init', 'getValue', 'getValues', 'setValue', 'setValues', 'getError', 'getErrors', 'setError', 'setErrors', 'validate', 'getState', 'reset', 'resetToDefault', 'remove', 'spliceArray'].forEach(function (m) {
            _this[m] = _this[m].bind(_this);
        });

        if (options.values) {
            this.setValues(options.values, false);
        }
    }

    Field.prototype.setOptions = function setOptions(options) {
        _extends(this.options, options);
    };

    /**
     * Controlled Component
     * @param {String} name
     * @param {Object} fieldOption
     * @returns {Object} {value, onChange}
     */


    Field.prototype.init = function init(name) {
        var _inputProps,
            _this2 = this;

        var fieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rprops = arguments[2];
        var initValue = fieldOption.initValue,
            _fieldOption$valueNam = fieldOption.valueName,
            valueName = _fieldOption$valueNam === undefined ? 'value' : _fieldOption$valueNam,
            _fieldOption$trigger = fieldOption.trigger,
            trigger = _fieldOption$trigger === undefined ? 'onChange' : _fieldOption$trigger,
            _fieldOption$rules = fieldOption.rules,
            rules = _fieldOption$rules === undefined ? [] : _fieldOption$rules,
            _fieldOption$props = fieldOption.props,
            props = _fieldOption$props === undefined ? {} : _fieldOption$props,
            _fieldOption$getValue = fieldOption.getValueFromEvent,
            getValueFromEvent = _fieldOption$getValue === undefined ? null : _fieldOption$getValue,
            _fieldOption$autoVali = fieldOption.autoValidate,
            autoValidate = _fieldOption$autoVali === undefined ? true : _fieldOption$autoVali;

        var originalProps = _extends({}, props, rprops);
        var defaultValueName = 'default' + valueName[0].toUpperCase() + valueName.slice(1);

        var field = this._getInitMeta(name);
        var defaultValue = typeof initValue !== 'undefined' ? initValue : originalProps[defaultValueName];

        _extends(field, {
            valueName: valueName,
            initValue: defaultValue,
            disabled: 'disabled' in originalProps ? originalProps.disabled : false,
            getValueFromEvent: getValueFromEvent,
            rules: Array.isArray(rules) ? rules : [rules],
            ref: originalProps.ref
        });

        // Controlled Component
        if (valueName in originalProps) {
            field.value = originalProps[valueName];
        }

        if (!('value' in field)) {
            field.value = defaultValue;
        }

        // Component props
        var inputProps = (_inputProps = {
            'data-meta': 'Field',
            id: name,
            ref: this._getCacheBind(name, name + '__ref', this._saveRef)
        }, _inputProps[valueName] = field.value, _inputProps);

        var rulesMap = {};

        if (this.options.autoValidate && autoValidate !== false) {
            // trigger map
            rulesMap = mapValidateRules(field.rules, trigger);

            // validate hook

            var _loop = function _loop(action) {
                if (action === trigger) {
                    return 'continue';
                }

                var actionRule = rulesMap[action];
                inputProps[action] = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _this2._validate(name, actionRule, action);
                    _this2._callPropsEvent.apply(_this2, [action, originalProps].concat(args));
                    _this2._reRender();
                };
            };

            for (var action in rulesMap) {
                var _ret = _loop(action);

                if (_ret === 'continue') continue;
            }
        }

        // onChange hack
        inputProps[trigger] = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            _this2._callOnChange.apply(_this2, [name, rulesMap[trigger], trigger].concat(args));
            _this2._callPropsEvent.apply(_this2, [trigger, originalProps].concat(args));
            _this2.options.onChange(name, field.value);
            _this2._reRender();
        };

        delete originalProps[defaultValueName];

        return _extends({}, originalProps, inputProps);
    };

    /**
     * event on props
     * props.onChange props.onBlur
     */


    Field.prototype._callPropsEvent = function _callPropsEvent(action, props) {
        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            args[_key3 - 2] = arguments[_key3];
        }

        action in props && typeof props[action] === 'function' && props[action].apply(props, args);
    };

    Field.prototype._getInitMeta = function _getInitMeta(name) {
        if (!(name in this.fieldsMeta)) {
            this.fieldsMeta[name] = _extends({}, initMeta);
        }

        return this.fieldsMeta[name];
    };

    /**
     * update field.value and validate
     */


    Field.prototype._callOnChange = function _callOnChange(name, rule, trigger) {
        for (var _len4 = arguments.length, others = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
            others[_key4 - 3] = arguments[_key4];
        }

        var e = others[0];
        var field = this._get(name);

        if (!field) {
            return;
        }

        field.value = field.getValueFromEvent ? field.getValueFromEvent.apply(this, others) : getValueFromEvent(e);

        this._resetError(name);

        // validate while onChange
        rule && this._validate(name, rule, trigger);
    };

    /**
     * ref must always be the same function, or if not it will be triggerd every time.
     * @param {String} name name of component
     * @param {String} action key to find ref
     * @param {Function} fn saveRef
     */


    Field.prototype._getCacheBind = function _getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
            cache[action] = fn.bind(this, name);
        }
        return cache[action];
    };

    Field.prototype._setCache = function _setCache(name, action, hander) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        cache[action] = hander;
    };

    Field.prototype._getCache = function _getCache(name, action) {
        var cache = this.cachedBind[name] || {};
        return cache[action];
    };

    /**
     * NOTE: saveRef is async function. it will be called after render
     * @param {String} name name of component
     * @param {Function} component ref
     */


    Field.prototype._saveRef = function _saveRef(name, component) {
        var key = name + '_field';
        var autoUnmount = this.options.autoUnmount;

        if (!component && autoUnmount) {
            // component with same name (eg: type ? <A name="n"/>:<B name="n"/>)
            // while type changed, B will render before A unmount. so we should cached value for B
            // step: render -> B mount -> 1. _saveRef(A, null) -> 2. _saveRef(B, ref) -> render
            // 1. _saveRef(A, null)
            var cache = this.fieldsMeta[name];
            this._setCache(name, key, cache);
            // after destroy, delete data
            delete this.fieldsMeta[name];
            delete this.instance[name];
            return;
        }

        // 2. _saveRef(B, ref) (eg: same name but different compoent may be here)
        if (autoUnmount && !this.fieldsMeta[name]) {
            this.fieldsMeta[name] = this._getCache(name, key);
        }

        // only one time here
        var field = this._get(name);
        if (field) {
            var ref = field.ref;
            if (ref) {
                if (typeof ref === 'string') {
                    throw new Error('can not set string ref for ' + name);
                }
                ref(component);
            }

            this.instance[name] = component;
        }
    };

    /**
     * validate one Component
     * @param {String} name name of Component
     * @param {Array} rule
     * @param {String} trigger onChange/onBlur/onItemClick/...
     */


    Field.prototype._validate = function _validate(name, rule, trigger) {
        var _ref,
            _validate$validate,
            _this3 = this;

        var field = this._get(name);
        var value = field.value;

        field.state = 'loading';

        var validate = this._getCache(name, trigger);
        validate && validate.abort();

        validate = new Validate((_ref = {}, _ref[name] = rule, _ref));
        this._setCache(name, trigger, validate);

        validate.validate((_validate$validate = {}, _validate$validate[name] = value, _validate$validate), function (errors) {
            if (errors && errors.length) {
                field.errors = getErrorStrs(errors);
                field.state = 'error';
            } else {
                field.errors = [];
                field.state = 'success';
            }

            _this3._reRender();
        });
    };

    Field.prototype.getValue = function getValue(name) {
        var field = this._get(name);

        if (field && 'value' in field) {
            return field.value;
        }

        return undefined;
    };

    /**
     * 1. get values by names.
     * 2. ignore disabled value.
     * @param {Array} names
     */


    Field.prototype.getValues = function getValues(names) {
        var _this4 = this;

        var fields = names || this.getNames();
        var allValues = {};

        fields.forEach(function (f) {
            if (f.disabled) {
                return;
            }
            if (!_this4.options.parseName) {
                allValues[f] = _this4.getValue(f);
            } else {
                allValues = setIn(allValues, f, _this4.getValue(f));
            }
        });
        return allValues;
    };

    Field.prototype.setValue = function setValue(name, value) {
        var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].value = value;
        } else {
            // if not exist, then new one
            this.fieldsMeta[name] = {
                value: value
            };
        }
        reRender && this._reRender();
    };

    Field.prototype.setValues = function setValues() {
        var _this5 = this;

        var fieldsValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var reRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.options.parseName) {
            Object.keys(fieldsValue).forEach(function (name) {
                _this5.setValue(name, fieldsValue[name], false);
            });
        } else {
            var fields = this.getNames();
            fields.forEach(function (name) {
                var value = getIn(fieldsValue, name);
                if (value !== undefined) {
                    _this5.setValue(name, value, false);
                }
            });
        }
        reRender && this._reRender();
    };

    Field.prototype.setError = function setError(name, errors) {
        var err = Array.isArray(errors) ? errors : errors ? [errors] : [];
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
    };

    Field.prototype.setErrors = function setErrors() {
        var _this6 = this;

        var fieldsErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        Object.keys(fieldsErrors).forEach(function (name) {
            _this6.setError(name, fieldsErrors[name]);
        });
    };

    Field.prototype.getError = function getError(name) {
        var field = this._get(name);
        if (field && field.errors && field.errors.length) {
            return field.errors;
        }

        return null;
    };

    Field.prototype.getErrors = function getErrors(names) {
        var _this7 = this;

        var fields = names || this.getNames();
        var allErrors = {};
        fields.forEach(function (f) {
            allErrors[f] = _this7.getError(f);
        });
        return allErrors;
    };

    Field.prototype.getState = function getState(name) {
        var field = this._get(name);

        if (field && field.state) {
            return field.state;
        }

        return '';
    };

    /**
     * validate by trigger
     * @param {Array} ns names
     * @param {Function} cb callback after validate
     */


    Field.prototype.validate = function validate(ns, cb) {
        var _this8 = this;

        var _getParams = getParams(ns, cb),
            names = _getParams.names,
            callback = _getParams.callback;

        var fieldNames = names || this.getNames();

        var descriptor = {};
        var values = {};

        var hasRule = false;
        for (var i = 0; i < fieldNames.length; i++) {
            var name = fieldNames[i];
            var field = this._get(name);

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

        var validate = new Validate(descriptor, {
            first: this.options.first
        });

        validate.validate(values, function (errors) {
            var errorsGroup = null;
            if (errors && errors.length) {
                errorsGroup = {};
                errors.forEach(function (e) {
                    var fieldName = e.field;
                    if (!errorsGroup[fieldName]) {
                        errorsGroup[fieldName] = {
                            errors: []
                        };
                    }
                    var fieldErrors = errorsGroup[fieldName].errors;
                    fieldErrors.push(e.message);
                });
            }
            if (errorsGroup) {
                // update error in every Field
                Object.keys(errorsGroup).forEach(function (i) {
                    var field = _this8._get(i);
                    field.errors = getErrorStrs(errorsGroup[i].errors);
                    field.state = 'error';
                });
            }

            // update to success which has no error
            for (var _i = 0; _i < fieldNames.length; _i++) {
                var _name = fieldNames[_i];
                var _field = _this8._get(_name);
                if (_field.rules && !(errorsGroup && _name in errorsGroup)) {
                    _field.state = 'success';
                }
            }

            // eslint-disable-next-line callback-return
            callback && callback(errorsGroup, _this8.getValues(fieldNames));
            _this8._reRender();

            if (errorsGroup && _this8.options.scrollToFirstError) {
                var firstNode = void 0;
                var firstTop = void 0;
                for (var _i2 in errorsGroup) {
                    if (errorsGroup.hasOwnProperty(_i2)) {
                        var instance = _this8.instance[_i2];
                        var node = ReactDOM.findDOMNode(instance);
                        if (!node) {
                            return;
                        }
                        var top = node.offsetTop;
                        if (firstTop === undefined || firstTop > top) {
                            firstTop = top;
                            firstNode = node;
                        }
                    }
                }

                if (firstNode) {
                    if (typeof _this8.options.scrollToFirstError === 'number' && window && typeof window.scrollTo === 'function') {
                        var offsetLeft = document && document.body && document.body.offsetLeft ? document.body.offsetLeft : 0;
                        window.scrollTo(offsetLeft, firstTop + _this8.options.scrollToFirstError);
                    } else if (firstNode.scrollIntoViewIfNeeded) {
                        firstNode.scrollIntoViewIfNeeded(true);
                    }
                }
            }
        });
    };

    Field.prototype._reset = function _reset(ns, backToDefault) {
        var _this9 = this;

        if (typeof ns === 'string') {
            ns = [ns];
        }
        var changed = false;

        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function (name) {
            var field = _this9._get(name);
            _this9.getValue(name);
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
    };

    Field.prototype.reset = function reset(ns) {
        var backToDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (ns === true) {
            log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
            this.resetToDefault(ns);
        } else {
            this._reset(ns, false);
        }
    };

    Field.prototype.resetToDefault = function resetToDefault(ns) {
        this._reset(ns, true);
    };

    // deprecated. TODO: remove in 2.0 version


    Field.prototype.isValidating = function isValidating(name) {
        log.deprecated('isValidating', 'getState', 'Field');
        return this.getState(name) === 'loading';
    };

    Field.prototype.getNames = function getNames() {
        var fieldsMeta = this.fieldsMeta;
        return fieldsMeta ? Object.keys(fieldsMeta).filter(function () {
            return true;
        }) : [];
    };

    Field.prototype.remove = function remove(ns) {
        var _this10 = this;

        if (typeof ns === 'string') {
            ns = [ns];
        }
        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function (name) {
            if (name in _this10.fieldsMeta) {
                delete _this10.fieldsMeta[name];
            }
        });
    };

    /**
     * splice in a Array
     * @param {String} keyMatch like name.{index}
     * @param {Number} startIndex index
     */


    Field.prototype.spliceArray = function spliceArray(keyMatch, startIndex) {
        var _this11 = this;

        if (keyMatch.indexOf('{index}') === -1) {
            log.warning('{index} not find in key');
            return;
        }

        var reg = keyMatch.replace('{index}', '(\\d+)');
        var keyReg = new RegExp('^' + reg + '$');

        var list = [];
        var names = this.getNames();
        names.forEach(function (n) {
            var ret = keyReg.exec(n);
            if (ret) {
                var index = parseInt(ret[1]);
                if (index > startIndex) {
                    list.push({
                        index: index,
                        name: n
                    });
                }
            }
        });

        list = list.sort(function (a, b) {
            return a.index < b.index;
        });

        // should be continuous array
        if (list.length > 0 && list[0].index === startIndex + 1) {
            list.forEach(function (l) {
                var n = keyMatch.replace('{index}', l.index - 1);
                _this11.fieldsMeta[n] = _this11.fieldsMeta[l.name];
            });

            delete this.fieldsMeta[list[list.length - 1].name];

            this._reRender();
        }
    };

    Field.prototype._resetError = function _resetError(name) {
        var field = this._get(name);
        delete field.errors; //清空错误
        field.state = '';
    };

    //trigger rerender


    Field.prototype._reRender = function _reRender() {
        if (this.com) {
            if (!this.options.forceUpdate && this.com.setState) {
                this.com.setState({});
            } else if (this.com.forceUpdate) {
                this.com.forceUpdate(); //forceUpdate 对性能有较大的影响，成指数上升
            }
        }
    };

    Field.prototype._get = function _get(name) {
        return name in this.fieldsMeta ? this.fieldsMeta[name] : null;
    };

    return Field;
}();

export default Field;