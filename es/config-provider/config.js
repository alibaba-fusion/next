import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { obj, log } from '../util';
import getContextProps from './get-context-props';

var shallowEqual = obj.shallowEqual;


function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

var globalLocales = void 0;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl = false;

export function initLocales(locales) {
    globalLocales = locales;
    currentGlobalLocale = locales[currentGlobalLanguage];
}

export function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];
    }
}

export function setLocale(locale) {
    currentGlobalLocale = _extends({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);
}

export function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}

export function getLocale() {
    return currentGlobalLocale;
}

export function getLanguage() {
    return currentGlobalLanguage;
}

export function getDirection() {
    return currentGlobalRtl;
}

export function config(Component) {
    var _class, _temp;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (Component.prototype.shouldComponentUpdate === undefined) {
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }

            return true;
        };
    }

    var ConfigedComponent = (_temp = _class = function (_React$Component) {
        _inherits(ConfigedComponent, _React$Component);

        function ConfigedComponent(props, context) {
            _classCallCheck(this, ConfigedComponent);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

            _this._getInstance = _this._getInstance.bind(_this);
            _this._deprecated = _this._deprecated.bind(_this);
            return _this;
        }

        ConfigedComponent.prototype._getInstance = function _getInstance(ref) {
            var _this2 = this;

            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(function (name) {
                    var field = _this2._instance[name];
                    if (typeof field === 'function') {
                        _this2[name] = field.bind(_this2._instance);
                    } else {
                        _this2[name] = field;
                    }
                });
            }
        };

        ConfigedComponent.prototype._deprecated = function _deprecated() {
            if (this.context.nextWarning !== false) {
                log.deprecated.apply(log, arguments);
            }
        };

        ConfigedComponent.prototype.getInstance = function getInstance() {
            return this._instance;
        };

        ConfigedComponent.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                locale = _props.locale,
                pure = _props.pure,
                rtl = _props.rtl,
                others = _objectWithoutProperties(_props, ['prefix', 'locale', 'pure', 'rtl']);

            var _context = this.context,
                nextPrefix = _context.nextPrefix,
                _context$nextLocale = _context.nextLocale,
                nextLocale = _context$nextLocale === undefined ? {} : _context$nextLocale,
                nextPure = _context.nextPure,
                nextRtl = _context.nextRtl;


            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = getContextProps({ prefix: prefix, locale: locale, pure: pure, rtl: rtl }, {
                nextPrefix: nextPrefix,
                nextLocale: _extends({}, currentGlobalLocale, nextLocale),
                nextPure: nextPure,
                nextRtl: typeof nextRtl === 'boolean' ? nextRtl : currentGlobalRtl
            }, displayName);

            var newContextProps = ['prefix', 'locale', 'pure', 'rtl'].reduce(function (ret, name) {
                if (typeof contextProps[name] !== 'undefined') {
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {});

            var newOthers = options.transform ? options.transform(others, this._deprecated) : others;

            return React.createElement(Component, _extends({}, newOthers, newContextProps, {
                ref: this._getInstance
            }));
        };

        return ConfigedComponent;
    }(React.Component), _class.propTypes = _extends({}, Component.propTypes || {}, {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        pure: PropTypes.bool,
        rtl: PropTypes.bool
    }), _class.contextTypes = _extends({}, Component.contextTypes || {}, {
        nextPrefix: PropTypes.string,
        nextLocale: PropTypes.object,
        nextPure: PropTypes.bool,
        nextRtl: PropTypes.bool,
        nextWarning: PropTypes.bool
    }), _temp);
    ConfigedComponent.displayName = 'ConfigedComponent';


    ConfigedComponent.displayName = 'Config(' + getDisplayName(Component) + ')';

    hoistNonReactStatic(ConfigedComponent, Component);

    return ConfigedComponent;
}