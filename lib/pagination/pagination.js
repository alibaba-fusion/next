'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _util = require('../util');

var _zhCn = require('../locale/zh-cn.js');

var _zhCn2 = _interopRequireDefault(_zhCn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

var noop = function noop() {};

function correctCurrent(currentPage, total, currentPageSize) {
    var totalPage = getTotalPage(total, currentPageSize);
    return currentPage > totalPage ? totalPage : currentPage;
}

function getTotalPage(total, currentPageSize) {
    var totalPage = Math.ceil(total / currentPageSize);
    return totalPage <= 0 ? 1 : totalPage;
}

/**
 * Pagination
 */
var Pagination = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Pagination, _Component);

    function Pagination(props, context) {
        (0, _classCallCheck3.default)(this, Pagination);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

        _this.handleJump = function (e) {
            var total = _this.props.total;
            var _this$state = _this.state,
                current = _this$state.current,
                currentPageSize = _this$state.currentPageSize;

            var totalPage = getTotalPage(total, currentPageSize);
            var value = parseInt(_this.inputValue, 10);
            if (typeof value === 'number' && value >= 1 && value <= totalPage && value !== current) {
                _this.onPageItemClick(value, e);
            }
        };

        _this.state = {
            current: props.defaultCurrent || 1,
            currentPageSize: 0
        };
        return _this;
    }

    Pagination.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var current = props.current,
            total = props.total,
            pageSize = props.pageSize;

        var st = {};
        var newCurrent = correctCurrent(current || state.current, total, pageSize);
        if (state.current !== newCurrent) {
            st.current = newCurrent;
        }
        if (state.currentPageSize !== pageSize) {
            st.currentPageSize = pageSize;
        }

        return st;
    };

    Pagination.prototype.onPageItemClick = function onPageItemClick(page, e) {
        if (!('current' in this.props)) {
            this.setState({
                current: page
            });
        }
        this.props.onChange(page, e);
    };

    Pagination.prototype.onInputChange = function onInputChange(value) {
        this.inputValue = value;
    };

    Pagination.prototype.onSelectSize = function onSelectSize(pageSize) {
        var newState = {
            currentPageSize: pageSize
        };

        var totalPage = getTotalPage(this.props.total, pageSize);
        if (this.state.current > totalPage) {
            newState.current = totalPage;
        }

        this.setState(newState);
        this.props.onPageSizeChange(pageSize);
    };

    Pagination.prototype.renderPageTotal = function renderPageTotal() {
        var _props = this.props,
            prefix = _props.prefix,
            total = _props.total,
            totalRender = _props.totalRender;
        var _state = this.state,
            currentPageSize = _state.currentPageSize,
            current = _state.current;

        var range = [(current - 1) * currentPageSize + 1, current * currentPageSize];

        return _react2.default.createElement(
            'div',
            { className: prefix + 'pagination-total' },
            totalRender(total, range)
        );
    };

    Pagination.prototype.renderPageItem = function renderPageItem(index) {
        var _cx;

        var _props2 = this.props,
            prefix = _props2.prefix,
            size = _props2.size,
            link = _props2.link,
            pageNumberRender = _props2.pageNumberRender,
            total = _props2.total,
            pageSize = _props2.pageSize,
            locale = _props2.locale;
        var current = this.state.current;


        var totalPage = getTotalPage(total, pageSize);
        var isCurrent = parseInt(index, 10) === current;
        var props = {
            size: size,
            className: (0, _classnames2.default)((_cx = {}, _cx[prefix + 'pagination-item'] = true, _cx[prefix + 'current'] = isCurrent, _cx)),
            onClick: isCurrent ? noop : this.onPageItemClick.bind(this, index)
        };
        if (link) {
            props.component = 'a';
            props.href = link.replace('{page}', index);
        }

        return _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({
                'aria-label': _util.str.template(locale.total, {
                    current: index,
                    total: totalPage
                })
            }, props, {
                key: index
            }),
            pageNumberRender(index)
        );
    };

    Pagination.prototype.renderPageFirst = function renderPageFirst(current) {
        var _cx2;

        var _props3 = this.props,
            prefix = _props3.prefix,
            size = _props3.size,
            shape = _props3.shape,
            locale = _props3.locale;


        var isFirst = current <= 1;
        var props = {
            disabled: isFirst,
            size: size,
            className: (0, _classnames2.default)((_cx2 = {}, _cx2[prefix + 'pagination-item'] = true, _cx2[prefix + 'prev'] = true, _cx2)),
            onClick: this.onPageItemClick.bind(this, current - 1)
        };

        var icon = _react2.default.createElement(_icon2.default, { type: 'arrow-left' });

        return _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({}, props, {
                'aria-label': _util.str.template(locale.labelPrev, { current: current })
            }),
            icon,
            shape === 'arrow-only' || shape === 'arrow-prev-only' || shape === 'no-border' ? '' : locale.prev
        );
    };

    Pagination.prototype.renderPageLast = function renderPageLast(current, totalPage) {
        var _cx3;

        var _props4 = this.props,
            prefix = _props4.prefix,
            size = _props4.size,
            shape = _props4.shape,
            locale = _props4.locale;


        var isLast = current >= totalPage;
        var props = {
            disabled: isLast,
            size: size,
            className: (0, _classnames2.default)((_cx3 = {}, _cx3[prefix + 'pagination-item'] = true, _cx3[prefix + 'next'] = true, _cx3)),
            onClick: this.onPageItemClick.bind(this, current + 1)
        };

        var icon = _react2.default.createElement(_icon2.default, { type: 'arrow-right' });

        return _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({}, props, {
                'aria-label': _util.str.template(locale.labelNext, { current: current })
            }),
            shape === 'arrow-only' || shape === 'no-border' ? '' : locale.next,
            icon
        );
    };

    Pagination.prototype.renderPageEllipsis = function renderPageEllipsis(idx) {
        var prefix = this.props.prefix;


        return _react2.default.createElement(_icon2.default, {
            className: prefix + 'pagination-ellipsis',
            type: 'ellipsis',
            key: 'ellipsis-' + idx
        });
    };

    Pagination.prototype.renderPageJump = function renderPageJump() {
        var _this2 = this;

        var _props5 = this.props,
            prefix = _props5.prefix,
            size = _props5.size,
            locale = _props5.locale;

        /* eslint-disable react/jsx-key */

        return [_react2.default.createElement(
            'span',
            { className: prefix + 'pagination-jump-text' },
            locale.goTo
        ), _react2.default.createElement(_input2.default, {
            className: prefix + 'pagination-jump-input',
            type: 'text',
            'aria-label': locale.inputAriaLabel,
            size: size,
            onChange: this.onInputChange.bind(this),
            onKeyDown: function onKeyDown(e) {
                if (e.keyCode === _util.KEYCODE.ENTER) {
                    _this2.handleJump(e);
                }
            }
        }), _react2.default.createElement(
            'span',
            { className: prefix + 'pagination-jump-text' },
            locale.page
        ), _react2.default.createElement(
            _button2.default,
            {
                className: prefix + 'pagination-jump-go',
                size: size,
                onClick: this.handleJump
            },
            locale.go
        )];
        /* eslint-enable react/jsx-key */
    };

    Pagination.prototype.renderPageDisplay = function renderPageDisplay(current, totalPage) {
        var _props6 = this.props,
            prefix = _props6.prefix,
            pageNumberRender = _props6.pageNumberRender;


        return _react2.default.createElement(
            'span',
            { className: prefix + 'pagination-display' },
            _react2.default.createElement(
                'em',
                null,
                pageNumberRender(current)
            ),
            '/',
            pageNumberRender(totalPage)
        );
    };

    Pagination.prototype.renderPageList = function renderPageList(current, totalPage) {
        var _props7 = this.props,
            prefix = _props7.prefix,
            pageShowCount = _props7.pageShowCount;

        var pages = [];

        if (totalPage <= pageShowCount) {
            for (var i = 1; i <= totalPage; i++) {
                pages.push(this.renderPageItem(i));
            }
        } else {
            // 除去第一页，最后一页以及当前页，剩下的页数
            var othersCount = pageShowCount - 3;
            var halfCount = parseInt(othersCount / 2, 10);
            var start = void 0,
                end = void 0;

            pages.push(this.renderPageItem(1));

            start = current - halfCount;
            end = current + halfCount;
            if (start <= 1) {
                start = 2;
                end = start + othersCount;
            }
            if (start > 2) {
                pages.push(this.renderPageEllipsis(1));
            }
            if (end >= totalPage - 1) {
                end = totalPage - 1;
                start = totalPage - 1 - othersCount;
            }
            for (var j = start; j <= end; j++) {
                pages.push(this.renderPageItem(j));
            }
            if (end < totalPage - 1) {
                pages.push(this.renderPageEllipsis(2));
            }

            pages.push(this.renderPageItem(totalPage));
        }

        return _react2.default.createElement(
            'div',
            { className: prefix + 'pagination-list' },
            pages
        );
    };

    Pagination.prototype.renderPageSizeSelector = function renderPageSizeSelector() {
        var _props8 = this.props,
            prefix = _props8.prefix,
            pageSizeSelector = _props8.pageSizeSelector,
            locale = _props8.locale;

        var pageSizeSpan = _react2.default.createElement(
            'span',
            { className: prefix + 'pagination-size-selector-title' },
            locale.pageSize
        );

        switch (pageSizeSelector) {
            case 'filter':
                return _react2.default.createElement(
                    'div',
                    { className: prefix + 'pagination-size-selector' },
                    pageSizeSpan,
                    this.renderPageSizeFilter()
                );
            case 'dropdown':
                return _react2.default.createElement(
                    'div',
                    { className: prefix + 'pagination-size-selector' },
                    pageSizeSpan,
                    this.renderPageSizeDropdown()
                );
            default:
                return null;
        }
    };

    Pagination.prototype.renderPageSizeFilter = function renderPageSizeFilter() {
        var _this3 = this;

        var _props9 = this.props,
            prefix = _props9.prefix,
            size = _props9.size,
            pageSizeList = _props9.pageSizeList;
        var currentPageSize = this.state.currentPageSize;


        return _react2.default.createElement(
            'div',
            { className: prefix + 'pagination-size-selector-filter' },
            pageSizeList.map(function (item, index) {
                var _cx4;

                var label = void 0;
                var pageSize = void 0;
                if (item.value) {
                    // {label: '', value: 5}
                    label = item.label;
                    pageSize = item.value;
                } else {
                    // number
                    label = pageSize = item;
                }
                var classes = (0, _classnames2.default)((_cx4 = {}, _cx4[prefix + 'pagination-size-selector-btn'] = true, _cx4[prefix + 'current'] = pageSize === currentPageSize, _cx4));

                return _react2.default.createElement(
                    _button2.default,
                    {
                        key: index,
                        text: true,
                        size: size,
                        className: classes,
                        onClick: pageSize !== currentPageSize ? _this3.onSelectSize.bind(_this3, pageSize) : null
                    },
                    label
                );
            })
        );
    };

    Pagination.prototype.renderPageSizeDropdown = function renderPageSizeDropdown() {
        var _props10 = this.props,
            prefix = _props10.prefix,
            size = _props10.size,
            pageSizeList = _props10.pageSizeList,
            selectPopupContiner = _props10.selectPopupContiner,
            locale = _props10.locale,
            popupProps = _props10.popupProps;
        var currentPageSize = this.state.currentPageSize;


        return _react2.default.createElement(
            _select2.default,
            {
                className: prefix + 'pagination-size-selector-dropdown',
                popupClassName: prefix + 'pagination-size-selector-popup',
                popupContainer: selectPopupContiner,
                popupProps: popupProps,
                'aria-label': locale.selectAriaLabel,
                autoWidth: true,
                size: size,
                value: currentPageSize,
                onChange: this.onSelectSize.bind(this)
            },
            pageSizeList.map(function (item, index) {
                var label = void 0;
                var pageSize = void 0;
                if (item.value) {
                    // {label: '', value: 5}
                    label = item.label;
                    pageSize = item.value;
                } else {
                    // number
                    label = pageSize = item;
                }
                return _react2.default.createElement(
                    Option,
                    { key: index, value: pageSize },
                    label
                );
            })
        );
    };

    Pagination.prototype.render = function render() {
        var _cx5,
            _this4 = this;

        /* eslint-disable no-unused-vars */
        var _props11 = this.props,
            prefix = _props11.prefix,
            pure = _props11.pure,
            rtl = _props11.rtl,
            device = _props11.device,
            paginationType = _props11.type,
            size = _props11.size,
            shape = _props11.shape,
            className = _props11.className,
            total = _props11.total,
            totalRender = _props11.totalRender,
            pageSize = _props11.pageSize,
            pageSizeSelector = _props11.pageSizeSelector,
            pageSizeList = _props11.pageSizeList,
            pageSizePosition = _props11.pageSizePosition,
            useFloatLayout = _props11.useFloatLayout,
            onPageSizeChange = _props11.onPageSizeChange,
            hideOnlyOnePage = _props11.hideOnlyOnePage,
            showJump = _props11.showJump,
            locale = _props11.locale,
            current = _props11.current,
            defaultCurrent = _props11.defaultCurrent,
            pageShowCount = _props11.pageShowCount,
            pageNumberRender = _props11.pageNumberRender,
            link = _props11.link,
            onChange = _props11.onChange,
            selectPopupContiner = _props11.selectPopupContiner,
            popupProps = _props11.popupProps,
            others = (0, _objectWithoutProperties3.default)(_props11, ['prefix', 'pure', 'rtl', 'device', 'type', 'size', 'shape', 'className', 'total', 'totalRender', 'pageSize', 'pageSizeSelector', 'pageSizeList', 'pageSizePosition', 'useFloatLayout', 'onPageSizeChange', 'hideOnlyOnePage', 'showJump', 'locale', 'current', 'defaultCurrent', 'pageShowCount', 'pageNumberRender', 'link', 'onChange', 'selectPopupContiner', 'popupProps']);
        /* eslint-enable */

        var _state2 = this.state,
            currentPage = _state2.current,
            currentPageSize = _state2.currentPageSize;

        var totalPage = getTotalPage(total, currentPageSize);
        var pageFirst = this.renderPageFirst(currentPage);
        var pageLast = this.renderPageLast(currentPage, totalPage);
        var sizeSelector = this.renderPageSizeSelector();
        var isStart = pageSizePosition === 'start';

        var type = paginationType;

        if (device === 'phone' && type === 'normal') {
            type = 'simple';
        }

        var classes = (0, _classnames2.default)((_cx5 = {}, _cx5[prefix + 'pagination'] = true, _cx5['' + prefix + size] = size, _cx5['' + prefix + type] = type, _cx5['' + prefix + shape] = shape, _cx5[prefix + 'start'] = !!pageSizeSelector && isStart && useFloatLayout, _cx5[prefix + 'end'] = !!pageSizeSelector && !isStart && useFloatLayout, _cx5[prefix + 'hide'] = totalPage <= 1 && hideOnlyOnePage, _cx5[className] = !!className, _cx5));

        if (rtl) {
            others.dir = 'rtl';
        }

        var buildComponent = function buildComponent() {
            for (var _len = arguments.length, coms = Array(_len), _key = 0; _key < _len; _key++) {
                coms[_key] = arguments[_key];
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({
                    className: classes
                }, _util.obj.pickOthers(Object.keys(Pagination.propTypes), others)),
                isStart && sizeSelector,
                totalRender ? _this4.renderPageTotal() : null,
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'pagination-pages' },
                    coms.map(function (com, index) {
                        return com && _react2.default.cloneElement(com, { key: index });
                    })
                ),
                !isStart && sizeSelector
            );
        };

        switch (type) {
            case 'mini':
                return buildComponent(pageFirst, pageLast);
            case 'simple':
                {
                    var pageDisplay = this.renderPageDisplay(currentPage, totalPage);
                    return buildComponent(pageFirst, pageDisplay, pageLast);
                }
            case 'normal':
                {
                    var pageList = this.renderPageList(currentPage, totalPage);
                    var _pageDisplay = showJump && total > pageSize * pageShowCount ? this.renderPageDisplay(currentPage, totalPage) : null;
                    var pageJump = showJump && total > pageSize * pageShowCount ? this.renderPageJump(currentPage, totalPage) : null;
                    return buildComponent.apply(undefined, [pageFirst, pageList, pageLast, _pageDisplay].concat(pageJump));
                }
            default:
                return null;
        }
    };

    return Pagination;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    device: _propTypes2.default.oneOf(['desktop', 'tablet', 'phone']),
    className: _propTypes2.default.string,
    /**
     * 自定义国际化文案对象
     */
    locale: _propTypes2.default.object,
    /**
     * 分页组件类型
     */
    type: _propTypes2.default.oneOf(['normal', 'simple', 'mini']),
    /**
     * 前进后退按钮样式
     */
    shape: _propTypes2.default.oneOf(['normal', 'arrow-only', 'arrow-prev-only', 'no-border']),
    /**
     * 分页组件大小
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * （受控）当前页码
     */
    current: _propTypes2.default.number,
    /**
     * （非受控）初始页码
     */
    defaultCurrent: _propTypes2.default.number,
    /**
     * 页码发生改变时的回调函数
     * @param {Number} current 改变后的页码数
     * @param {Object} e 点击事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 总记录数
     */
    total: _propTypes2.default.number,
    /**
     * 总数的渲染函数
     * @param {Number} total 总数
     * @param {Array} range 当前数据在总数中的区间
     */
    totalRender: _propTypes2.default.func,
    /**
     * 页码显示的数量，更多的使用...代替
     */
    pageShowCount: _propTypes2.default.number,
    /**
     * 一页中的记录数
     */
    pageSize: _propTypes2.default.number,
    /**
     * 每页显示选择器类型
     */
    pageSizeSelector: _propTypes2.default.oneOf([false, 'filter', 'dropdown']),
    /**
     * 每页显示选择器可选值
     */
    pageSizeList: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        value: _propTypes2.default.number
    }))]),
    /**
     * 自定义页码渲染函数，函数作用于页码button以及当前页/总页数的数字渲染
     * @param {Number} index 分页的页码，从1开始
     * @return {ReactNode} 返回渲染结果
     */
    pageNumberRender: _propTypes2.default.func,
    /**
     * 每页显示选择器在组件中的位置
     */
    pageSizePosition: _propTypes2.default.oneOf(['start', 'end']),
    /**
     * 存在每页显示选择器时是否使用浮动布局
     */
    useFloatLayout: _propTypes2.default.bool,
    /**
     * 每页显示记录数量改变时的回调函数
     * @param {Number} pageSize 改变后的每页显示记录数
     */
    onPageSizeChange: _propTypes2.default.func,
    /**
     * 当分页数为1时，是否隐藏分页器
     */
    hideOnlyOnePage: _propTypes2.default.bool,
    /**
     * type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域
     */
    showJump: _propTypes2.default.bool,
    /**
     * 设置页码按钮的跳转链接，它的值为一个包含 {page} 的模版字符串，如：http://www.taobao.com/{page}
     */
    link: _propTypes2.default.string,
    selectPopupContiner: _propTypes2.default.any,
    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps: _propTypes2.default.object
}), _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    rtl: false,
    locale: _zhCn2.default.Pagination,
    type: 'normal',
    shape: 'normal',
    size: 'medium',
    defaultCurrent: 1,
    onChange: noop,
    pageSize: 10,
    pageSizeSelector: false,
    pageSizeList: [5, 10, 20],
    pageSizePosition: 'start',
    onPageSizeChange: noop,
    useFloatLayout: false,
    total: 100,
    pageShowCount: 5,
    hideOnlyOnePage: false,
    showJump: true,
    pageNumberRender: function pageNumberRender(index) {
        return index;
    },
    selectPopupContiner: function selectPopupContiner(node) {
        return node.parentNode;
    }
}, _temp);
Pagination.displayName = 'Pagination';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(Pagination));
module.exports = exports['default'];