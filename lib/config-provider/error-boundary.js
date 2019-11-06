'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

DefaultUI.propTypes = {
    error: _propTypes2.default.object,
    errorInfo: _propTypes2.default.object
};

function DefaultUI() {
    return '';
}

var ErrorBoundary = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(ErrorBoundary, _React$Component);

    function ErrorBoundary(props) {
        (0, _classCallCheck3.default)(this, ErrorBoundary);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.state = { error: null, errorInfo: null };
        return _this;
    }

    ErrorBoundary.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        var afterCatch = this.props.afterCatch;


        if ('afterCatch' in this.props && typeof afterCatch === 'function') {
            this.props.afterCatch(error, errorInfo);
        }
    };

    ErrorBoundary.prototype.render = function render() {
        var _props$fallbackUI = this.props.fallbackUI,
            FallbackUI = _props$fallbackUI === undefined ? DefaultUI : _props$fallbackUI;


        if (this.state.errorInfo) {
            return _react2.default.createElement(FallbackUI, {
                error: this.state.error,
                errorInfo: this.state.errorInfo
            });
        }
        // Normally, just render children
        return this.props.children;
    };

    return ErrorBoundary;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.element,
    /**
     * 捕获错误后的自定义处理, 比如埋点上传
     * @param {Object} error 错误
     * @param {Object} errorInfo 错误详细信息
     */
    afterCatch: _propTypes2.default.func,
    /**
     * 捕获错误后的展现 自定义组件
     * @param {Object} error 错误
     * @param {Object} errorInfo 错误详细信息
     * @returns {Element} 捕获错误后的处理
     */
    fallbackUI: _propTypes2.default.func
}, _temp);
ErrorBoundary.displayName = 'ErrorBoundary';
exports.default = ErrorBoundary;
module.exports = exports['default'];