'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.initLocales = initLocales;
exports.setLanguage = setLanguage;
exports.setLocale = setLocale;
exports.setDirection = setDirection;
exports.getLocale = getLocale;
exports.getLanguage = getLanguage;
exports.getDirection = getDirection;
exports.config = config;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _util = require('../util');

var _getContextProps = require('./get-context-props');

var _getContextProps2 = _interopRequireDefault(_getContextProps);

var _errorBoundary = require('./error-boundary');

var _errorBoundary2 = _interopRequireDefault(_errorBoundary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shallowEqual = _util.obj.shallowEqual;


function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

var globalLocales = void 0;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl = void 0;

function initLocales(locales) {
    globalLocales = locales;

    if (locales) {
        currentGlobalLocale = locales[currentGlobalLanguage];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}

function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];

        if (typeof currentGlobalRtl !== 'boolean') {
            currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
        }
    }
}

function setLocale(locale) {
    currentGlobalLocale = (0, _extends3.default)({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);

    if (typeof currentGlobalRtl !== 'boolean') {
        currentGlobalRtl = currentGlobalLocale && currentGlobalLocale.rtl;
    }
}

function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}

function getLocale() {
    return currentGlobalLocale;
}

function getLanguage() {
    return currentGlobalLanguage;
}

function getDirection() {
    return currentGlobalRtl;
}

function config(Component) {
    var _class, _temp;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 非 forwardRef 创建的 class component
    if (_util.obj.isClassComponent(Component) && Component.prototype.shouldComponentUpdate === undefined) {
        // class component: 通过定义 shouldComponentUpdate 改写成 pure component, 有refs
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }

            return true;
        };
    }

    var ConfigedComponent = (_temp = _class = function (_React$Component) {
        (0, _inherits3.default)(ConfigedComponent, _React$Component);

        function ConfigedComponent(props, context) {
            (0, _classCallCheck3.default)(this, ConfigedComponent);

            var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

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
                _util.log.deprecated.apply(_util.log, arguments);
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
                device = _props.device,
                popupContainer = _props.popupContainer,
                errorBoundary = _props.errorBoundary,
                others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'locale', 'pure', 'rtl', 'device', 'popupContainer', 'errorBoundary']);
            var _context = this.context,
                nextPrefix = _context.nextPrefix,
                _context$nextLocale = _context.nextLocale,
                nextLocale = _context$nextLocale === undefined ? {} : _context$nextLocale,
                nextPure = _context.nextPure,
                nextRtl = _context.nextRtl,
                nextDevice = _context.nextDevice,
                nextPopupContainer = _context.nextPopupContainer,
                nextErrorBoundary = _context.nextErrorBoundary;


            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = (0, _getContextProps2.default)({
                prefix: prefix,
                locale: locale,
                pure: pure,
                device: device,
                popupContainer: popupContainer,
                rtl: rtl,
                errorBoundary: errorBoundary
            }, {
                nextPrefix: nextPrefix,
                nextLocale: (0, _extends3.default)({}, currentGlobalLocale, nextLocale),
                nextPure: nextPure,
                nextDevice: nextDevice,
                nextPopupContainer: nextPopupContainer,
                nextRtl: typeof nextRtl === 'boolean' ? nextRtl : currentGlobalRtl === true ? true : undefined,
                nextErrorBoundary: nextErrorBoundary
            }, displayName);

            // errorBoundary is only for <ErrorBoundary>
            var newContextProps = ['prefix', 'locale', 'pure', 'rtl', 'device', 'popupContainer'].reduce(function (ret, name) {
                if (typeof contextProps[name] !== 'undefined') {
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {});

            if ('pure' in newContextProps && newContextProps.pure) {
                _util.log.warning('pure of ConfigProvider is deprecated, use Function Component or React.PureComponent');
            }

            var newOthers = options.transform ? options.transform(others, this._deprecated) : others;

            var content = _react2.default.createElement(Component, (0, _extends3.default)({}, newOthers, newContextProps, {
                ref: _util.obj.isClassComponent(Component) ? this._getInstance : null
            }));

            var _contextProps$errorBo = contextProps.errorBoundary,
                open = _contextProps$errorBo.open,
                othersBoundary = (0, _objectWithoutProperties3.default)(_contextProps$errorBo, ['open']);


            return open ? _react2.default.createElement(
                _errorBoundary2.default,
                othersBoundary,
                content
            ) : content;
        };

        return ConfigedComponent;
    }(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, Component.propTypes || {}, {
        prefix: _propTypes2.default.string,
        locale: _propTypes2.default.object,
        pure: _propTypes2.default.bool,
        rtl: _propTypes2.default.bool,
        device: _propTypes2.default.oneOf(['tablet', 'desktop', 'phone']),
        popupContainer: _propTypes2.default.any,
        errorBoundary: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
    }), _class.contextTypes = (0, _extends3.default)({}, Component.contextTypes || {}, {
        nextPrefix: _propTypes2.default.string,
        nextLocale: _propTypes2.default.object,
        nextPure: _propTypes2.default.bool,
        nextRtl: _propTypes2.default.bool,
        nextWarning: _propTypes2.default.bool,
        nextDevice: _propTypes2.default.oneOf(['tablet', 'desktop', 'phone']),
        nextPopupContainer: _propTypes2.default.any,
        nextErrorBoundary: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
    }), _temp);
    ConfigedComponent.displayName = 'ConfigedComponent';


    ConfigedComponent.displayName = 'Config(' + getDisplayName(Component) + ')';

    (0, _hoistNonReactStatics2.default)(ConfigedComponent, Component);

    return ConfigedComponent;
}