import React, { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import { func, KEYCODE } from '../util';
import Overlay from './overlay';

const { noop, makeChain, bindCtx } = func;

/**
 * Overlay.Popup
 * @description 继承 Overlay 的 API，除非特别说明
 * */
class Popup extends Component {
    static propTypes = {
        /**
         * 弹层内容
         */
        children: PropTypes.node,
        /**
         * 触发弹层显示或隐藏的元素
         */
        trigger: PropTypes.element,
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /**
         * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
         */
        triggerClickKeycode: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
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
         * @param {String} type 触发弹层显示或隐藏的来源 fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         * @param {Object} e DOM事件
         */
        onVisibleChange: PropTypes.func,
        /**
         * 设置此属性，弹层无法显示或隐藏
         */
        disabled: PropTypes.bool,
        autoFit: PropTypes.bool,
        /**
         * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
         */
        delay: PropTypes.number,
        /**
         * 鼠标放置后的延时显示, 单位毫秒 ms
         */
        mouseEnterDelay: PropTypes.number,
        /**
         * 鼠标离开后的延时显示, 单位毫秒 ms
         */
        mouseLeaveDelay: PropTypes.number,
        /**
         * trigger 是否可以关闭弹层
         */
        canCloseByTrigger: PropTypes.bool,
        /**
         * 弹层定位的参照元素
         * @default target 属性，即触发元素
         */
        target: PropTypes.any,
        safeNode: PropTypes.any,
        /**
         * 是否跟随trigger滚动
         */
        followTrigger: PropTypes.bool,
        container: PropTypes.any,
        hasMask: PropTypes.bool,
        wrapperStyle: PropTypes.object,
        rtl: PropTypes.bool,
        /**
         * 开启 v2 版本
         */
        v2: PropTypes.bool,
        /**
         * [v2] 快捷位置，包含 'tl' | 't' | 'tr' | 'rt' | 'r' | 'rb' | 'bl' | 'b' | 'br' | 'lt' | 'l' | 'lb'
         */
        placement: PropTypes.string,
        /**
         * [v2] 弹层偏离触发元素的像素值
         */
        placementOffset: PropTypes.number,
        /**
         * [v2] 浮窗被遮挡时是否自动调整位置
         */
        autoAdjust: PropTypes.bool,
    };

    static defaultProps = {
        triggerType: 'hover',
        triggerClickKeycode: [KEYCODE.SPACE, KEYCODE.ENTER],
        defaultVisible: false,
        onVisibleChange: noop,
        disabled: false,
        autoFit: false,
        delay: 200,
        canCloseByTrigger: true,
        followTrigger: false,
        container: () => document.body,
        rtl: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible,
        };

        bindCtx(this, [
            'handleTriggerClick',
            'handleTriggerKeyDown',
            'handleTriggerMouseEnter',
            'handleTriggerMouseLeave',
            'handleTriggerFocus',
            'handleTriggerBlur',
            'handleContentMouseEnter',
            'handleContentMouseLeave',
            'handleContentMouseDown',
            'handleRequestClose',
            'handleMaskMouseEnter',
            'handleMaskMouseLeave',
        ]);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if ('visible' in nextProps) {
            return {
                ...prevState,
                visible: nextProps.visible,
            };
        }

        return null;
    }

    componentWillUnmount() {
        ['_timer', '_hideTimer', '_showTimer'].forEach(time => {
            this[time] && clearTimeout(this[time]);
        });
    }

    handleVisibleChange(visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }

        this.props.onVisibleChange(visible, type, e);
    }

    handleTriggerClick(e) {
        if (this.state.visible && !this.props.canCloseByTrigger) {
            return;
        }

        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    }

    handleTriggerKeyDown(e) {
        const { triggerClickKeycode } = this.props;
        const keycodes = Array.isArray(triggerClickKeycode) ? triggerClickKeycode : [triggerClickKeycode];
        if (keycodes.includes(e.keyCode)) {
            e.preventDefault();
            this.handleTriggerClick(e);
        }
    }

    handleTriggerMouseEnter(e) {
        this._mouseNotFirstOnMask = false;

        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (!this.state.visible) {
            this._showTimer = setTimeout(() => {
                this.handleVisibleChange(true, 'fromTrigger', e);
            }, (this.props.mouseEnterDelay === null || this.props.mouseEnterDelay === undefined) ? this.props.delay : this.props.mouseEnterDelay);
        }
    }

    handleTriggerMouseLeave(e, type) {
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = setTimeout(() => {
                this.handleVisibleChange(false, type || 'fromTrigger', e);
            }, (this.props.mouseLeaveDelay === null || this.props.mouseLeaveDelay === undefined) ? this.props.delay : this.props.mouseLeaveDelay);
        }
    }

    handleTriggerFocus(e) {
        this.handleVisibleChange(true, 'fromTrigger', e);
    }

    handleTriggerBlur(e) {
        if (!this._isForwardContent) {
            this.handleVisibleChange(false, 'fromTrigger', e);
        }
        this._isForwardContent = false;
    }

    handleContentMouseDown() {
        this._isForwardContent = true;
    }

    handleContentMouseEnter() {
        clearTimeout(this._hideTimer);
    }

    handleContentMouseLeave(e) {
        this.handleTriggerMouseLeave(e, 'fromContent');
    }

    handleMaskMouseEnter() {
        if (!this._mouseNotFirstOnMask) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
            this._mouseNotFirstOnMask = false;
        }
    }

    handleMaskMouseLeave() {
        this._mouseNotFirstOnMask = true;
    }

    handleRequestClose(type, e) {
        this.handleVisibleChange(false, type, e);
    }

    renderTrigger() {
        const { trigger, disabled } = this.props;
        const props = {
            key: 'trigger',
            'aria-haspopup': true,
            'aria-expanded': this.state.visible,
        };

        if (!this.state.visible) {
            props['aria-describedby'] = undefined;
        }

        if (!disabled) {
            const { triggerType } = this.props;
            const triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
            const { onClick, onKeyDown, onMouseEnter, onMouseLeave, onFocus, onBlur } =
                (trigger && trigger.props) || {};
            triggerTypes.forEach(triggerType => {
                switch (triggerType) {
                    case 'click':
                        props.onClick = makeChain(this.handleTriggerClick, onClick);
                        props.onKeyDown = makeChain(this.handleTriggerKeyDown, onKeyDown);
                        break;
                    case 'hover':
                        props.onMouseEnter = makeChain(this.handleTriggerMouseEnter, onMouseEnter);
                        props.onMouseLeave = makeChain(this.handleTriggerMouseLeave, onMouseLeave);
                        break;
                    case 'focus':
                        props.onFocus = makeChain(this.handleTriggerFocus, onFocus);
                        props.onBlur = makeChain(this.handleTriggerBlur, onBlur);
                        break;
                    default:
                        break;
                }
            });
        }

        return trigger && React.cloneElement(trigger, props);
    }

    renderContent() {
        const { children, triggerType } = this.props;
        const triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        const content = Children.only(children);
        const { onMouseDown, onMouseEnter, onMouseLeave } = content.props;
        const props = {
            key: 'portal',
        };

        triggerTypes.forEach(triggerType => {
            switch (triggerType) {
                case 'focus':
                    props.onMouseDown = makeChain(this.handleContentMouseDown, onMouseDown);
                    break;
                case 'hover':
                    props.onMouseEnter = makeChain(this.handleContentMouseEnter, onMouseEnter);
                    props.onMouseLeave = makeChain(this.handleContentMouseLeave, onMouseLeave);
                    break;
                default:
                    break;
            }
        });

        return React.cloneElement(content, props);
    }

    renderPortal() {
        const { target, safeNode, followTrigger, triggerType, hasMask, wrapperStyle, ...others } = this.props;
        let { container } = this.props;
        const findTriggerNode = () => findDOMNode(this);
        const safeNodes = Array.isArray(safeNode) ? [...safeNode] : [safeNode];
        safeNodes.unshift(findTriggerNode);

        const newWrapperStyle = wrapperStyle || {};

        if (followTrigger) {
            container = trigger => (trigger && trigger.parentNode) || trigger;
            newWrapperStyle.position = 'relative';
        }

        if (triggerType === 'hover' && hasMask) {
            others.onMaskMouseEnter = this.handleMaskMouseEnter;
            others.onMaskMouseLeave = this.handleMaskMouseLeave;
        }

        return (
            <Overlay
                {...others}
                key="overlay"
                ref={overlay => (this.overlay = overlay)}
                visible={this.state.visible}
                target={target || findTriggerNode}
                container={container}
                safeNode={safeNodes}
                wrapperStyle={newWrapperStyle}
                triggerType={triggerType}
                hasMask={hasMask}
                onRequestClose={this.handleRequestClose}
            >
                {this.props.children && this.renderContent()}
            </Overlay>
        );
    }

    render() {
        return [this.renderTrigger(), this.renderPortal()];
    }
}

export default polyfill(Popup);
