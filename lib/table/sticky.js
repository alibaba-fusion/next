'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = sticky;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('./fixed/header');

var _header2 = _interopRequireDefault(_header);

var _header3 = require('./sticky/header');

var _header4 = _interopRequireDefault(_header3);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sticky(BaseComponent) {
    var _class, _temp2;

    /** Table */
    var StickyTable = (_temp2 = _class = function (_React$Component) {
        (0, _inherits3.default)(StickyTable, _React$Component);

        function StickyTable() {
            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, StickyTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        StickyTable.prototype.getChildContext = function getChildContext() {
            return {
                Header: this.props.components.Header || _header2.default,
                offsetTop: this.props.offsetTop,
                affixProps: this.props.affixProps
            };
        };

        StickyTable.prototype.render = function render() {
            /* eslint-disable no-unused-vars */
            var _props = this.props,
                stickyHeader = _props.stickyHeader,
                offsetTop = _props.offsetTop,
                affixProps = _props.affixProps,
                others = (0, _objectWithoutProperties3.default)(_props, ['stickyHeader', 'offsetTop', 'affixProps']);
            var _props2 = this.props,
                components = _props2.components,
                maxBodyHeight = _props2.maxBodyHeight,
                fixedHeader = _props2.fixedHeader;

            if (stickyHeader) {
                components = (0, _extends3.default)({}, components);
                components.Header = _header4.default;
                fixedHeader = true;
                maxBodyHeight = Math.max(maxBodyHeight, 10000);
            }
            return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, others, {
                components: components,
                fixedHeader: fixedHeader,
                maxBodyHeight: maxBodyHeight
            }));
        };

        return StickyTable;
    }(_react2.default.Component), _class.StickyHeader = _header4.default, _class.propTypes = (0, _extends3.default)({
        /**
         * 表头是否是sticky
         */
        stickyHeader: _propTypes2.default.bool,
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: _propTypes2.default.number,
        /**
         * affix组件的的属性
         */
        affixProps: _propTypes2.default.object,
        components: _propTypes2.default.object
    }, BaseComponent.propTypes), _class.defaultProps = (0, _extends3.default)({
        components: {}
    }, BaseComponent.defaultProps), _class.childContextTypes = {
        Header: _propTypes2.default.any,
        offsetTop: _propTypes2.default.number,
        affixProps: _propTypes2.default.object
    }, _temp2);
    StickyTable.displayName = 'StickyTable';

    (0, _util.statics)(StickyTable, BaseComponent);
    return StickyTable;
}
module.exports = exports['default'];