import { __assign, __extends } from "tslib";
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import { func } from '../util';
var noop = func.noop, makeChain = func.makeChain, bindCtx = func.bindCtx;
var Popup = Overlay.Popup;
/**
 * Dropdown
 * @description 继承 Popup 的 API，除非特别说明
 */
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible || false,
            autoFocus: 'autoFocus' in props ? props.autoFocus : false,
        };
        bindCtx(_this, ['onTriggerKeyDown', 'onMenuClick', 'onVisibleChange']);
        return _this;
    }
    Dropdown.getDerivedStateFromProps = function (nextProps) {
        var state = {};
        if ('visible' in nextProps) {
            state.visible = nextProps.visible;
        }
        return state;
    };
    Dropdown.prototype.getVisible = function (props) {
        if (props === void 0) { props = this.props; }
        return 'visible' in props ? props.visible : this.state.visible;
    };
    Dropdown.prototype.onMenuClick = function () {
        var autoClose = this.props.autoClose;
        if (!('visible' in this.props) && autoClose) {
            this.setState({
                visible: false,
            });
        }
        this.onVisibleChange(false, 'fromContent');
    };
    Dropdown.prototype.onVisibleChange = function (visible, from) {
        this.setState({ visible: visible });
        this.props.onVisibleChange(visible, from);
    };
    Dropdown.prototype.onTriggerKeyDown = function () {
        var autoFocus = true;
        if ('autoFocus' in this.props) {
            autoFocus = this.props.autoFocus;
        }
        this.setState({
            autoFocus: autoFocus,
        });
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, trigger = _a.trigger, rtl = _a.rtl, autoClose = _a.autoClose;
        var child = Children.only(this.props.children);
        var content = child;
        if (typeof child.type === 'function' && child.type.isNextMenu) {
            content = React.cloneElement(child, {
                onItemClick: makeChain(this.onMenuClick, child.props.onItemClick),
            });
        }
        else if (autoClose) {
            content = React.cloneElement(child, {
                onClick: makeChain(this.onMenuClick, child.props.onClick),
            });
        }
        var newTrigger = React.cloneElement(trigger, {
            onKeyDown: makeChain(this.onTriggerKeyDown, trigger.props.onKeyDown),
        });
        return (React.createElement(Popup, __assign({}, this.props, { rtl: rtl, autoFocus: this.state.autoFocus, trigger: newTrigger, visible: this.getVisible(), onVisibleChange: this.onVisibleChange, canCloseByOutSideClick: true }), content));
    };
    Dropdown.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 弹层内容
         */
        children: PropTypes.node,
        /**
         * 弹层当前是否显示
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层显示或隐藏时触发的回调函数
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 触发弹层显示或者隐藏的元素
         */
        trigger: PropTypes.node,
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /**
         * 设置此属性，弹层无法显示或隐藏
         */
        disabled: PropTypes.bool,
        /**
         * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
         */
        align: PropTypes.string,
        /**
         * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
         * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
         */
        offset: PropTypes.array,
        /**
         * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
         */
        delay: PropTypes.number,
        /**
         * 弹层打开时是否让其中的元素自动获取焦点
         */
        autoFocus: PropTypes.bool,
        /**
         * 是否显示遮罩
         */
        hasMask: PropTypes.bool,
        /**
         * 开启后，children 不管是不是Menu，点击后都默认关掉弹层（2.x默认设置为true）
         * @version 1.23
         */
        autoClose: PropTypes.bool,
        /**
         * 隐藏时是否保留子节点
         */
        cache: PropTypes.bool,
        /**
         * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
         * @default { in: 'expandInDown', out: 'expandOutUp' }
         */
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    };
    Dropdown.defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultVisible: false,
        autoClose: false,
        onVisibleChange: noop,
        triggerType: 'hover',
        disabled: false,
        align: 'tl bl',
        offset: [0, 0],
        delay: 200,
        hasMask: false,
        cache: false,
        onPosition: noop,
    };
    return Dropdown;
}(Component));
export default Dropdown;
