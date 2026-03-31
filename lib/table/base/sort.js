'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var Sort = (_temp2 = _class = function (_React$Component) {
    (0, _inherits3.default)(Sort, _React$Component);

    function Sort() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Sort);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function () {
            var _this$props = _this.props,
                sort = _this$props.sort,
                dataIndex = _this$props.dataIndex,
                sortDirections = _this$props.sortDirections;


            var nextSortType = '';

            sortDirections.forEach(function (dir, i) {
                if (sort[dataIndex] === dir) {
                    nextSortType = sortDirections.length - 1 > i ? sortDirections[i + 1] : sortDirections[0];
                }
            });

            if (!sort[dataIndex]) {
                nextSortType = sortDirections[0];
            }

            _this.onSort(dataIndex, nextSortType);
        }, _this.keydownHandler = function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (e.keyCode === _util.KEYCODE.ENTER) {
                _this.handleClick();
            }
        }, _this.onSort = function (dataIndex, order) {
            var sort = {};
            sort[dataIndex] = order;

            _this.props.onSort(dataIndex, order, sort);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // 渲染排序
    Sort.prototype.renderSort = function renderSort() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            sort = _props.sort,
            sortIcons = _props.sortIcons,
            className = _props.className,
            dataIndex = _props.dataIndex,
            locale = _props.locale,
            sortDirections = _props.sortDirections,
            rtl = _props.rtl,
            sortStatus = sort[dataIndex],
            map = {
            desc: 'descending',
            asc: 'ascending'
        };


        var icons = sortDirections.map(function (sortOrder) {
            return sortOrder === 'default' ? null : _react2.default.createElement(
                'a',
                { key: sortOrder, className: sortStatus === sortOrder ? 'current' : '' },
                sortIcons ? sortIcons[sortOrder] : _react2.default.createElement(_icon2.default, { rtl: rtl, type: map[sortOrder], size: 'xs' })
            );
        });

        var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'table-sort'] = true, _classnames[className] = className, _classnames));

        return _react2.default.createElement(
            'span',
            {
                role: 'button',
                tabIndex: '0',
                'aria-label': locale[sortStatus],
                className: cls,
                onClick: this.handleClick.bind(this),
                onKeyDown: this.keydownHandler
            },
            icons
        );
    };

    Sort.prototype.render = function render() {
        return this.renderSort();
    };

    return Sort;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    sort: _propTypes2.default.object,
    sortIcons: _propTypes2.default.object,
    onSort: _propTypes2.default.func,
    sortDirections: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['desc', 'asc', 'default'])),
    dataIndex: _propTypes2.default.string,
    locale: _propTypes2.default.object
}, _class.defaultProps = {
    sort: {},
    sortDirections: ['desc', 'asc']
}, _temp2);
Sort.displayName = 'Sort';
exports.default = Sort;
module.exports = exports.default;
module.exports.default = exports.default;