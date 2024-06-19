import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';

const { Popup } = Overlay;

let alignMap = normalMap;
/** Balloon.Tooltip */
export default class Tooltip extends React.Component {
    static propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * tooltip的内容
         */
        children: PropTypes.any,
        /**
         * 弹出层位置
         * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下
         */
        align: PropTypes.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
        /**
         * 触发元素
         */
        trigger: PropTypes.any,
        /**
         * 触发行为
         * 鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
         * 是否pure render
         */
        pure: PropTypes.bool,
        /**
         * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
         */
        popupContainer: PropTypes.any,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 弹层id, 传入值才会支持无障碍
         */
        id: PropTypes.string,
        /**
         * 如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100
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
         * 开启 v2 版本
         */
        v2: PropTypes.bool,
        /**
         * [v2] 箭头是否指向目标元素的中心
         */
        arrowPointToCenter: PropTypes.bool,
    };
    static defaultProps = {
        triggerType: 'hover',
        prefix: 'next-',
        align: 'b',
        delay: 50,
        trigger: <span />,
        arrowPointToCenter: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            align: props.placement || props.align,
            innerAlign: false,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.v2 && !prevState.innerAlign && 'align' in nextProps && nextProps.align !== prevState.align) {
            return {
                align: nextProps.align,
                innerAlign: false,
            };
        }

        return null;
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
            className,
            align: palign,
            style,
            prefix,
            trigger,
            children,
            popupContainer,
            popupProps,
            popupClassName,
            popupStyle,
            followTrigger,
            triggerType,
            autoFocus,
            alignEdge,
            autoAdjust,
            rtl,
            delay,
            mouseEnterDelay,
            mouseLeaveDelay,
            v2,
            arrowPointToCenter,
            ...others
        } = this.props;

        let trOrigin = 'trOrigin';
        if (rtl) {
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }

        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        const align = v2 ? this.state.align : palign;

        const transformOrigin = alignMap[align][trOrigin];
        const _offset = alignMap[align].offset;
        const _style = { transformOrigin, ...style };

        const content = (
            <BalloonInner
                {...others}
                id={id}
                prefix={prefix}
                closable={false}
                isTooltip
                className={className}
                style={_style}
                align={align}
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

        let newTriggerType = triggerType;

        if (triggerType === 'hover' && id) {
            newTriggerType = ['focus', 'hover'];
        }

        const ariaTrigger = id ? React.cloneElement(trigger, triggerProps) : trigger;

        const newTrigger = getDisabledCompatibleTrigger(
            React.isValidElement(ariaTrigger) ? ariaTrigger : <span>{ariaTrigger}</span>
        );

        const otherProps = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: true,
            needAdjust: false,
            align: alignMap[align].align,
            offset: _offset,
        };

        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.offset;

            Object.assign(otherProps, {
                placement: align,
                placementOffset: 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust,
            });
        }

        return (
            <Popup
                role="tooltip"
                animation={{
                    in: 'zoomIn',
                    out: 'zoomOut',
                }}
                className={popupClassName}
                container={popupContainer}
                followTrigger={followTrigger}
                trigger={newTrigger}
                triggerType={newTriggerType}
                style={popupStyle}
                rtl={rtl}
                autoFocus={triggerType === 'focus' ? false : autoFocus}
                {...otherProps}
                {...popupProps}
            >
                {content}
            </Popup>
        );
    }
}
