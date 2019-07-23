'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('../util');

var _validate2 = require('../validate');

var _validate3 = _interopRequireDefault(_validate2);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initMeta = {
    state: '',
    valueName: 'value',
    trigger: 'onChange'
};

var Field = function () {
    function Field(com) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, Field);

        if (!com) {
            _util.log.warning('`this` is missing in `Field`, you should use like `new Field(this)`');
        }

        this.com = com;
        this.fieldsMeta = {};
        this.cachedBind = {};
        this.instance = {};
        // holds constructor values. Used for setting field defaults on init if no other value or initValue is passed.
        // Also used caching values when using `parseName: true` before a field is initialized
        this.values = options.values || {};

        this.options = (0, _extends3.default)({
            parseName: false,
            forceUpdate: false,
            scrollToFirstError: true,
            first: false,
            onChange: _util.func.noop,
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
        (0, _extends3.default)(this.options, options);
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
        var parseName = this.options.parseName;


        var originalProps = (0, _extends3.default)({}, props, rprops);
        var defaultValueName = 'default' + valueName[0].toUpperCase() + valueName.slice(1);

        var field = this._getInitMeta(name);
        var defaultValue = void 0;
        if (typeof initValue !== 'undefined') {
            defaultValue = initValue;
        } else if (typeof originalProps[defaultValueName] !== 'undefined') {
            defaultValue = originalProps[defaultValueName];
        } else if (parseName) {
            defaultValue = (0, _utils.getIn)(this.values, name);
        } else if (this.values && typeof this.values[name] !== 'undefined') {
            defaultValue = this.values[name];
        }

        (0, _extends3.default)(field, {
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

            // When rerendering set the values
            if (parseName) {
                this.values = (0, _utils.setIn)(this.values, name, field.value);
            } else {
                this.values[name] = field.value;
            }
        }

        if (!('value' in field)) {
            field.value = defaultValue;
        }
        if (parseName && !(0, _utils.getIn)(this.values, name)) {
            this.values = (0, _utils.setIn)(this.values, name, field.value);
        } else if (!parseName && !this.values[name]) {
            this.values[name] = field.value;
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
            rulesMap = (0, _utils.mapValidateRules)(field.rules, trigger);

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

        return (0, _extends3.default)({}, originalProps, inputProps);
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
            this.fieldsMeta[name] = (0, _extends3.default)({}, initMeta);
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

        field.value = field.getValueFromEvent ? field.getValueFromEvent.apply(this, others) : (0, _utils.getValueFromEvent)(e);

        if (this.options.parseName) {
            this.values = (0, _utils.setIn)(this.values, name, field.value);
        } else {
            this.values[name] = field.value;
        }

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
            delete this.instance[name];
            this.remove(name);
            return;
        }

        // 2. _saveRef(B, ref) (eg: same name but different compoent may be here)
        if (autoUnmount && !this.fieldsMeta[name]) {
            this.fieldsMeta[name] = this._getCache(name, key);
            this.setValue(name, this.fieldsMeta[name] && this.fieldsMeta[name].value, false);
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

        validate = new _validate3.default((_ref = {}, _ref[name] = rule, _ref));
        this._setCache(name, trigger, validate);

        validate.validate((_validate$validate = {}, _validate$validate[name] = value, _validate$validate), function (errors) {
            if (errors && errors.length) {
                field.errors = (0, _utils.getErrorStrs)(errors);
                field.state = 'error';
            } else {
                field.errors = [];
                field.state = 'success';
            }

            _this3._reRender();
        });
    };

    Field.prototype.getValue = function getValue(name) {
        if (this.options.parseName) {
            return (0, _utils.getIn)(this.values, name);
        }
        return this.values[name];
    };

    /**
     * 1. get values by names.
     * 2. If no names passed, return shallow copy of `field.values`
     * @param {Array} names
     */


    Field.prototype.getValues = function getValues(names) {
        var _this4 = this;

        var allValues = {};

        if (names && names.length) {
            names.forEach(function (name) {
                allValues[name] = _this4.getValue(name);
            });
        } else {
            (0, _extends3.default)(allValues, this.values);
        }

        return allValues;
    };

    Field.prototype.setValue = function setValue(name, value) {
        var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (name in this.fieldsMeta) {
            this.fieldsMeta[name].value = value;
        }
        if (this.options.parseName) {
            this.values = (0, _utils.setIn)(this.values, name, value);
        } else {
            this.values[name] = value;
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
            // NOTE: this is a shallow merge
            // Ex. we have two values a.b.c=1 ; a.b.d=2, and use setValues({a:{b:{c:3}}}) , then because of shallow merge a.b.d will be lost, we will get only {a:{b:{c:3}}}
            this.values = (0, _extends3.default)({}, this.values, fieldsValue);
            var fields = this.getNames();
            fields.forEach(function (name) {
                var value = (0, _utils.getIn)(_this5.values, name);
                if (value !== undefined) {
                    // copy over values that are in this.values
                    _this5.fieldsMeta[name].value = value;
                } else {
                    // if no value then copy values from fieldsMeta to keep initialized component data
                    _this5.values = (0, _utils.setIn)(_this5.values, name, _this5.fieldsMeta[name].value);
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
     * Get errors using `getErrors` and format to match the structure of errors returned in field.validate
     * @param {Array} fieldNames
     * @return {Object || null} map of inputs and their errors
     */


    Field.prototype.formatGetErrors = function formatGetErrors(fieldNames) {
        var errors = this.getErrors(fieldNames);
        var formattedErrors = null;
        for (var field in errors) {
            if (errors.hasOwnProperty(field) && errors[field]) {
                var errorsObj = errors[field];
                if (!formattedErrors) {
                    formattedErrors = {};
                }
                formattedErrors[field] = { errors: errorsObj };
            }
        }
        return formattedErrors;
    };

    /**
     * validate by trigger
     * @param {Array} ns names
     * @param {Function} cb callback after validate
     */


    Field.prototype.validate = function validate(ns, cb) {
        var _this8 = this;

        var _getParams = (0, _utils.getParams)(ns, cb),
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
            var errors = this.formatGetErrors(fieldNames);
            callback && callback(errors, this.getValues(names ? fieldNames : []));
            return;
        }

        var validate = new _validate3.default(descriptor, {
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
                    field.errors = (0, _utils.getErrorStrs)(errorsGroup[i].errors);
                    field.state = 'error';
                });
            }

            var formattedGetErrors = _this8.formatGetErrors(fieldNames);

            if (formattedGetErrors) {
                errorsGroup = (0, _extends3.default)({}, formattedGetErrors, errorsGroup);
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
            callback && callback(errorsGroup, _this8.getValues(names ? fieldNames : []));
            _this8._reRender();

            if (errorsGroup && _this8.options.scrollToFirstError) {
                var firstNode = void 0;
                var firstTop = void 0;
                for (var _i2 in errorsGroup) {
                    if (errorsGroup.hasOwnProperty(_i2)) {
                        var instance = _this8.instance[_i2];
                        var node = _reactDom2.default.findDOMNode(instance);
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

        if (!ns) {
            this.values = {};
        }
        names.forEach(function (name) {
            var field = _this9._get(name);
            if (field) {
                changed = true;

                field.value = backToDefault ? field.initValue : undefined;
                field.state = '';

                delete field.errors;
                delete field.rules;
                delete field.rulesMap;

                if (_this9.options.parseName) {
                    _this9.values = (0, _utils.setIn)(_this9.values, name, field.value);
                } else {
                    _this9.values[name] = field.value;
                }
            }
        });

        if (changed) {
            this._reRender();
        }
    };

    Field.prototype.reset = function reset(ns) {
        var backToDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (ns === true) {
            _util.log.deprecated('reset(true)', 'resetToDefault()', 'Field');
            this.resetToDefault();
        } else if (backToDefault === true) {
            _util.log.deprecated('reset(ns,true)', 'resetToDefault(ns)', 'Field');
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
        _util.log.deprecated('isValidating', 'getState', 'Field');
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
        if (!ns) {
            this.values = {};
        }

        var names = ns || Object.keys(this.fieldsMeta);
        names.forEach(function (name) {
            if (name in _this10.fieldsMeta) {
                delete _this10.fieldsMeta[name];
            }
            if (_this10.options.parseName) {
                _this10.values = (0, _utils.deleteIn)(_this10.values, name);
            } else {
                delete _this10.values[name];
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
            _util.log.warning('{index} not find in key');
            return;
        }

        // regex to match field names in the same target array
        var reg = keyMatch.replace('{index}', '(\\d+)');
        var keyReg = new RegExp('^' + reg + '$');

        var list = [];
        var names = this.getNames();
        names.forEach(function (n) {
            // is name in the target array?
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
                var v = _this11.getValue(l.name);
                _this11.setValue(n, v, false);
            });
            this.remove(list[list.length - 1].name);

            var parentName = keyMatch.replace('.{index}', '');
            parentName = parentName.replace('[{index}]', '');
            var parent = this.getValue(parentName);

            if (parent) {
                // if parseName=true then parent is an Array object but does not know an element was removed
                // this manually decrements the array length
                parent.length--;
            }
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

exports.default = Field;
module.exports = exports['default'];