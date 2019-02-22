import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

/* eslint-disable valid-jsdoc */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import locale from '../locale/zh-cn';
import { obj } from '../util';

var pickOthers = obj.pickOthers;

/** Card */

var Card = (_temp = _class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props, context) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleToggle = function () {
            _this.setState(function (prevState) {
                return {
                    expand: !prevState.expand
                };
            });
        };

        _this._contentRefHandler = function (ref) {
            _this.content = ref;
        };

        _this.saveFooter = function (ref) {
            _this.footer = ref;
        };

        _this.state = {
            needMore: false,
            expand: false,
            contentHeight: 'auto'
        };
        return _this;
    }

    Card.prototype.componentDidMount = function componentDidMount() {
        this._setNeedMore();
        this._setContentHeight();
    };

    Card.prototype.componentDidUpdate = function componentDidUpdate() {
        this._setContentHeight();
    };

    // 是否展示 More 按钮
    Card.prototype._setNeedMore = function _setNeedMore() {
        var contentHeight = this.props.contentHeight;

        var childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight
        });
    };

    // 设置 Body 的高度


    Card.prototype._setContentHeight = function _setContentHeight() {
        if (this.state.expand) {
            var childrenHeight = this._getNodeChildrenHeight(this.content);
            this.content.style.height = childrenHeight + 'px'; // get the real height
        } else {
            var el = ReactDOM.findDOMNode(this.footer);
            var height = this.props.contentHeight;

            if (el) {
                height = height - el.getBoundingClientRect().height;
            }

            this.content.style.height = height + 'px';
        }
    };

    Card.prototype._getNodeChildrenHeight = function _getNodeChildrenHeight(node) {
        if (!node) {
            return 0;
        }

        var contentChildNodes = node.childNodes;
        var length = contentChildNodes.length;

        if (!length) {
            return 0;
        }

        var lastNode = contentChildNodes[length - 1];

        return lastNode.offsetTop + lastNode.offsetHeight;
    };

    Card.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            title = _props.title,
            subTitle = _props.subTitle,
            extra = _props.extra,
            showTitleBullet = _props.showTitleBullet,
            showHeadDivider = _props.showHeadDivider,
            children = _props.children,
            locale = _props.locale,
            rtl = _props.rtl;
        var _state = this.state,
            needMore = _state.needMore,
            expand = _state.expand;


        var cardCls = classNames((_classNames = {}, _classNames[prefix + 'card'] = true, _classNames[prefix + 'card-show-divider'] = showHeadDivider, _classNames[prefix + 'card-hide-divider'] = !showHeadDivider, _classNames), className);

        var headCls = classNames((_classNames2 = {}, _classNames2[prefix + 'card-head'] = true, _classNames2[prefix + 'card-head-show-bullet'] = showTitleBullet, _classNames2));

        var others = pickOthers(Object.keys(Card.propTypes), this.props);

        others.dir = rtl ? 'rtl' : undefined;

        var headExtra = extra ? React.createElement(
            'div',
            { className: prefix + 'card-extra' },
            extra
        ) : null;

        return React.createElement(
            'div',
            _extends({}, others, { className: cardCls }),
            title ? React.createElement(
                'div',
                { className: headCls },
                React.createElement(
                    'div',
                    { className: prefix + 'card-head-main' },
                    React.createElement(
                        'div',
                        { className: prefix + 'card-title' },
                        title,
                        subTitle ? React.createElement(
                            'span',
                            { className: prefix + 'card-subtitle' },
                            subTitle
                        ) : null
                    ),
                    headExtra
                )
            ) : null,
            React.createElement(
                'div',
                { className: prefix + 'card-body' },
                React.createElement(
                    'div',
                    { className: prefix + 'card-content', ref: this._contentRefHandler },
                    children
                ),
                needMore ? React.createElement(
                    'div',
                    { className: prefix + 'card-footer', ref: this.saveFooter, onClick: this.handleToggle },
                    React.createElement(
                        Button,
                        { text: true, type: 'primary' },
                        expand ? locale.fold : locale.expand,
                        React.createElement(Icon, { type: 'arrow-down', size: 'xs', className: expand ? 'expand' : '' })
                    )
                ) : null
            )
        );
    };

    return Card;
}(React.Component), _class.displayName = 'Card', _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 卡片的标题
     */
    title: PropTypes.node,
    /**
     * 卡片的副标题
     */
    subTitle: PropTypes.node,
    /**
     * 是否显示标题的项目符号
     */
    showTitleBullet: PropTypes.bool,
    /**
     * 是否展示头部的分隔线
     */
    showHeadDivider: PropTypes.bool,
    /**
     * 内容区域的固定高度
     */
    contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 标题区域的用户自定义内容
     */
    extra: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
    locale: PropTypes.object
}, _class.defaultProps = {
    prefix: 'next-',
    showTitleBullet: true,
    showHeadDivider: true,
    contentHeight: 120,
    locale: locale.Card
}, _temp);
Card.displayName = 'Card';
export { Card as default };