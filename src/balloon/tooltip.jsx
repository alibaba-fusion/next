import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import BalloonInner from './inner';
import {normalMap as alignMap} from './alignMap';

const {Popup} = Overlay;

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
         * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
         */
        align: PropTypes.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
        /**
         * 触发元素
         */
        trigger: PropTypes.any,
        /**
         * 触发行为
         * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
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
        popupContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * 弹层id, 传入值才会支持无障碍
         */
        id: PropTypes.string
    };
    static defaultProps = {
        triggerType: 'hover',
        prefix: 'next-',
        align: 'b',
        trigger: <span></span>
    };

    constructor(props, context) {
        super(props, context);

        this._contentId = props.id;
    }

    render() {
        const { className, align, style, prefix, trigger, children, popupContainer,
            popupProps, popupClassName, popupStyle, triggerType, rtl, ...others} = this.props;

        let trOrigin = 'trOrigin';
        if (rtl) {
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }

        const transformOrigin = alignMap[align][trOrigin];
        const _offset = alignMap[align].offset;
        const _style = {transformOrigin, ...style};

        const content = (<BalloonInner
            {...others}
            id={this._contentId}
            prefix={prefix}
            closable={false}
            isTooltip
            className={className}
            style={_style}
            align={align}
        >
            {children}
        </BalloonInner>);

        const triggerProps = {};
        triggerProps['aria-describedby'] = this._contentId;
        triggerProps.tabIndex = '0';

        const newTrigger = React.cloneElement(trigger, triggerProps);

        return (
            <Popup
                {...popupProps}
                container={popupContainer}
                trigger={this._contentId ? newTrigger : trigger}
                triggerType={triggerType}
                align={alignMap[align].align}
                offset={_offset}
                delay={0}
                className={popupClassName}
                style={popupStyle}
                shouldUpdatePosition
            >
                {content}
            </Popup>
        );
    }
}
