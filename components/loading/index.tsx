import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { obj, func } from '../util';
import type { LoadingProps } from './types';

/** Loading */
class Loading extends React.Component<LoadingProps> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        tip: PropTypes.any,
        tipAlign: PropTypes.oneOf(['right', 'bottom']),
        visible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        size: PropTypes.oneOf(['large', 'medium']),
        indicator: PropTypes.any,
        color: PropTypes.string,
        fullScreen: PropTypes.bool,
        disableScroll: PropTypes.bool,
        safeNode: PropTypes.any,
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

        let indicatorDom: React.ReactNode = null;
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
            [className!]: className,
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

export type { LoadingProps };
export default ConfigProvider.config(Loading);
