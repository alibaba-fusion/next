import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Overlay from '../overlay';
import { func, obj, log } from '../util';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';

const { noop } = func;
const { Popup } = Overlay;

const alignList = ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'];

let alignMap = normalMap;

/** Balloon */
class Balloon extends React.Component {
    static contextTypes = {
        prefix: PropTypes.string,
    };
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 浮层的内容
         */
        children: PropTypes.any,
        size: PropTypes.string,
        /**
         * 样式类型
         */
        type: PropTypes.oneOf(['normal', 'primary']),
        /**
         * 标题
         * @version 1.23
         */
        title: PropTypes.node,
        /**
         * 弹层当前显示的状态
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认显示的状态
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层在显示和隐藏触发的事件
         * @param {Boolean} visible 弹层是否隐藏和显示
         * @param {String} type 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        alignEdge: PropTypes.bool,
        /**
         * 开启 v2 版本
         * @version 1.25
         */
        v2: PropTypes.bool,
        /**
         * [v2] 箭头是否指向目标元素的中心
         * @version 1.25
         */
        arrowPointToCenter: PropTypes.bool,
        /**
         * [v2] 弹层偏离触发元素的像素值
         */
        placementOffset: PropTypes.number,
        /**
         * 是否显示关闭按钮
         */
        closable: PropTypes.bool,
        /**
         * 弹出层位置
         * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下
         */
        align: PropTypes.oneOf(alignList),
        /**
         * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
         * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
         */
        offset: PropTypes.array,
        /**
         * 触发元素
         */
        trigger: PropTypes.any,
        /**
         * 触发行为
         * 鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

        onClick: PropTypes.func,
        /**
         * 任何visible为false时会触发的事件
         */
        onClose: PropTypes.func,
        onHover: PropTypes.func,
        /**
         * [v2] 是否进行自动位置调整，默认自动开启。
         * @version 1.25
         */
        autoAdjust: PropTypes.bool,
        needAdjust: PropTypes.bool,
        /**
         * 弹层在触发以后的延时显示, 单位毫秒 ms
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
         * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
         */
        afterClose: PropTypes.func,
        shouldUpdatePosition: PropTypes.bool,
        /**
         * 弹层出现后是否自动focus到内部第一个元素
         */
        autoFocus: PropTypes.bool,
        /**
         * 安全节点:对于triggetType为click的浮层,会在点击除了浮层外的其它区域时关闭浮层.safeNode用于添加不触发关闭的节点, 值可以是dom节点的id或者是节点的dom对象
         */
        safeNode: PropTypes.string,
        /**
         * 用来指定safeNode节点的id，和safeNode配合使用
         */
        safeId: PropTypes.string,
        /**
         * 配置动画的播放方式，格式是{in: '', out: ''}， 常用的动画class请查看Animate组件文档
         * @param {String} in 进场动画
         * @param {String} out 出场动画
         */
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

        /**
         * 弹层的dom节点关闭时是否删除
         */
        cache: PropTypes.bool,
        /**
         * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
         */
        popupContainer: PropTypes.any,
        container: PropTypes.any,
        /**
         * 弹层组件style，透传给Popup
         */
        popupStyle: PropTypes.object,
        /**
         * 弹层组件className，透传给Popup
         */
        popupClassName: PropTypes.string,
        /**
         * 弹层组件属性，透传给Popup
         */
        popupProps: PropTypes.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 弹层id, 传入值才会支持无障碍
         */
        id: PropTypes.string,
    };
    static defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'normal',
        closable: true,
        defaultVisible: false,
        size: 'medium',
        alignEdge: false,
        arrowPointToCenter: false,
        align: 'b',
        offset: [0, 0],
        trigger: <span />,
        onClose: noop,
        afterClose: noop,
        onVisibleChange: noop,
        needAdjust: false,
        triggerType: 'hover',
        safeNode: undefined,
        safeId: null,
        autoFocus: true,
        animation: {
            in: 'zoomIn zoomInBig',
            out: 'zoomOut zoomOutBig',
        },
        cache: false,
        popupStyle: {},
        popupClassName: '',
        popupProps: {},
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            align: alignList.includes(props.align) ? props.align : 'b',
            visible: 'visible' in props ? props.visible : props.defaultVisible,
        };
        this._onClose = this._onClose.bind(this);
        this._onPosition = this._onPosition.bind(this);
        this._onVisibleChange = this._onVisibleChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const nextState = {};
        if ('visible' in nextProps) {
            nextState.visible = nextProps.visible;
        }

        if (
            !prevState.innerAlign &&
            'align' in nextProps &&
            alignList.includes(nextProps.align) &&
            nextProps.align !== prevState.align
        ) {
            nextState.align = nextProps.align;
            nextState.innerAlign = false;
        }

        return nextState;
    }

    _onVisibleChange(visible, trigger) {
        // Not Controlled
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }

        this.props.onVisibleChange(visible, trigger);

        if (!visible) {
            this.props.onClose();
        }
    }

    _onClose(e) {
        this._onVisibleChange(false, 'closeClick');

        //必须加上preventDefault,否则单测IE下报错,出现full page reload 异常
        e.preventDefault();
    }

    _onPosition(res) {
        const { rtl } = this.props;
        alignMap = this.props.alignEdge ? edgeMap : normalMap;
        const newAlign = res.align.join(' ');
        let resAlign;

        let alignKey = 'align';
        if (rtl) {
            alignKey = 'rtlAlign';
        }

        for (const key in alignMap) {
            if (alignMap[key][alignKey] === newAlign) {
                resAlign = key;

                break;
            }
        }

        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign,
                innerAlign: true,
            });
        }
    }

    beforePosition = (result, obj) => {
        const { placement } = result.config;
        if (placement !== this.state.align) {
            this.setState({
                align: placement,
                innerAlign: true,
            });
        }

        if (this.props.arrowPointToCenter) {
            const { width, height } = obj.target;
            if (placement.length === 2) {
                const offset = normalMap[placement].offset;
                switch (placement[0]) {
                    case 'b':
                    case 't':
                        {
                            const plus = offset[0] > 0 ? 1 : -1;
                            result.style.left = result.style.left + (plus * width) / 2 - offset[0];
                        }
                        break;
                    case 'l':
                    case 'r':
                        {
                            const plus = offset[0] > 0 ? 1 : -1;
                            result.style.top = result.style.top + (plus * height) / 2 - offset[1];
                        }
                        break;
                }
            }
        }

        return result;
    };

    render() {
        const {
            id,
            type,
            prefix,
            className,
            title,
            alignEdge,
            trigger,
            triggerType,
            children,
            closable,
            shouldUpdatePosition,
            delay,
            mouseEnterDelay,
            mouseLeaveDelay,
            needAdjust,
            autoAdjust,
            safeId,
            autoFocus,
            safeNode,
            onClick,
            onHover,
            animation,
            offset,
            style,
            container,
            popupContainer,
            cache,
            popupStyle,
            popupClassName,
            popupProps,
            followTrigger,
            rtl,
            v2,
            arrowPointToCenter,
            placementOffset = 0,
            ...others
        } = this.props;

        if (container) {
            log.deprecated('container', 'popupContainer', 'Balloon');
        }

        const { align } = this.state;

        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        const _prefix = this.context.prefix || prefix;

        let trOrigin = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }

        const _offset = [alignMap[align].offset[0] + offset[0], alignMap[align].offset[1] + offset[1]];
        const transformOrigin = alignMap[align][trOrigin];
        const _style = { ...{ transformOrigin }, ...style };

        const content = (
            <BalloonInner
                {...obj.pickOthers(Object.keys(Balloon.propTypes), others)}
                id={id}
                title={title}
                prefix={_prefix}
                closable={closable}
                onClose={this._onClose}
                className={className}
                style={_style}
                align={align}
                type={type}
                rtl={rtl}
                alignEdge={alignEdge}
                v2={v2}
            >
                {children}
            </BalloonInner>
        );

        const triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';

        const ariaTrigger = id ? React.cloneElement(trigger, triggerProps) : trigger;

        const newTrigger = getDisabledCompatibleTrigger(
            React.isValidElement(ariaTrigger) ? ariaTrigger : <span>{ariaTrigger}</span>
        );

        const otherProps = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: shouldUpdatePosition,
            needAdjust: needAdjust,
            align: alignMap[align].align,
            offset: _offset,
            safeId,
            onHover,
            onPosition: this._onPosition,
        };

        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.safeId;
            delete otherProps.onHover;
            delete otherProps.onPosition;

            Object.assign(otherProps, {
                placement: align,
                placementOffset: placementOffset + 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust,
            });
        }

        return (
            <Popup
                {...popupProps}
                followTrigger={followTrigger}
                trigger={newTrigger}
                cache={cache}
                triggerType={triggerType}
                visible={this.state.visible}
                onClick={onClick}
                afterClose={this.props.afterClose}
                onVisibleChange={this._onVisibleChange}
                animation={animation}
                autoFocus={triggerType === 'focus' ? false : autoFocus}
                safeNode={safeNode}
                container={popupContainer || container}
                className={popupClassName}
                style={popupStyle}
                rtl={rtl}
                {...otherProps}
            >
                {content}
            </Popup>
        );
    }
}

export default polyfill(Balloon);
