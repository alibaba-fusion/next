import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { obj, func } from '../util';

/* eslint-disable react/prefer-stateless-function */

/** Loading */
class Loading extends React.Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        /**
         * 样式前缀
         */
        prefix: PropTypes.string,
        /**
         * 自定义内容，可以传入string或reactElement
         */
        tip: PropTypes.any,
        /**
         * 自定义内容位置
         * @enumdesc 出现在动画右边, 出现在动画下面
         */
        tipAlign: PropTypes.oneOf(['right', 'bottom']),
        /**
         * loading 状态, 默认 true
         */
        visible: PropTypes.bool,
        /**
         * 全屏模式下，loading弹层请求关闭时触发的回调函数
         * @param {String} type 弹层关闭的来源
         * @param {Object} e DOM 事件
         */
        onVisibleChange: PropTypes.func,
        /**
         * 自定义class
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * 设置动画尺寸
         * @description 仅仅对默认动画效果起作用
         * @enumdesc 大号, 中号
         */
        size: PropTypes.oneOf(['large', 'medium']),
        /**
         * 自定义动画
         */
        indicator: PropTypes.any,
        /**
         * 动画颜色
         */
        color: PropTypes.string,
        /**
         * 全屏展示
         */
        fullScreen: PropTypes.bool,
        /**
         * 当点击 document 的时候，如果包含该节点则不会关闭弹层，
         * 如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
         * 是否禁用滚动，仅在 fullScreen 模式下生效
         */
        disableScroll: PropTypes.bool,
        /**
         * 安全节点，fullScreen时有效，
         */
        safeNode: PropTypes.any,
        /**
         * 子元素
         */
        children: PropTypes.any,
        inline: PropTypes.bool,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        visible: true,
        onVisibleChange: func.noop,
        animate: null,
        tipAlign: 'bottom',
        size: 'large',
        inline: true,
        disableScroll: false,
    };

    render() {
        const {
            tip,
            visible,
            children,
            className,
            style,
            indicator,
            color,
            prefix,
            fullScreen,
            disableScroll,
            onVisibleChange,
            tipAlign,
            size,
            inline,
            rtl,
            safeNode,
        } = this.props;

        let indicatorDom = null;
        const dotCls = `${prefix}loading-dot`;

        if (indicator) {
            indicatorDom = indicator;
        } else {
            const backgroundColor = color;
            const fusionReactorCls = classNames({
                [`${prefix}loading-fusion-reactor`]: true,
                [`${prefix}loading-medium-fusion-reactor`]: size === 'medium',
            });
            indicatorDom = (
                <div className={fusionReactorCls} dir={rtl ? 'rtl' : undefined}>
                    <span className={dotCls} style={{ backgroundColor }} />
                    <span className={dotCls} style={{ backgroundColor }} />
                    <span className={dotCls} style={{ backgroundColor }} />
                    <span className={dotCls} style={{ backgroundColor }} />
                </div>
            );
        }

        const loadingCls = classNames({
            [`${prefix}loading`]: true,
            [`${prefix}open`]: visible,
            [`${prefix}loading-inline`]: inline,
            [className]: className,
        });

        const tipCls = classNames({
            [`${prefix}loading-tip`]: true,
            [`${prefix}loading-tip-fullscreen`]: fullScreen,
            // 默认非 right就是 bottom
            [`${prefix}loading-right-tip`]: tipAlign === 'right',
        });

        const others = obj.pickOthers(Loading.propTypes, this.props);

        const contentCls = classNames({
            [`${prefix}loading-component`]: visible,
            [`${prefix}loading-wrap`]: true,
        });

        return fullScreen ? (
            [
                children,
                <Overlay
                    key="overlay"
                    hasMask
                    align="cc cc"
                    safeNode={safeNode}
                    disableScroll={disableScroll}
                    {...others}
                    className={className}
                    style={style}
                    visible={visible}
                    onRequestClose={onVisibleChange}
                >
                    <div className={tipCls}>
                        <div className={`${prefix}loading-indicator`}>{indicatorDom}</div>
                        <div className={`${prefix}loading-tip-content`}>{tip}</div>
                        {/* 由于撑开问题 使用同样的两个DOM */}
                        <div className={`${prefix}loading-tip-placeholder`}>{tip}</div>
                    </div>
                </Overlay>,
            ]
        ) : (
            <div className={loadingCls} style={style} {...others}>
                {visible ? (
                    <div className={tipCls}>
                        <div className={`${prefix}loading-indicator`}>{indicatorDom}</div>
                        <div className={`${prefix}loading-tip-content`}>{tip}</div>
                        <div className={`${prefix}loading-tip-placeholder`}>{tip}</div>
                    </div>
                ) : null}
                <div className={contentCls}>
                    {visible ? <div className={`${prefix}loading-masker`} /> : null}
                    {children}
                </div>
            </div>
        );
    }
}

export default ConfigProvider.config(Loading);
