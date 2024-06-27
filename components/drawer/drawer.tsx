import PropTypes from 'prop-types';
import React, { Component, type ComponentRef, type ComponentType } from 'react';
import Overlay from '../overlay';
import Inner from './inner';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';
import type { DrawerProps, InnerProps } from './types';

const noop: InnerProps['onClose'] = () => {};
const { Popup } = Overlay;
const { pickOthers } = obj;

interface CloseConfig {
    canCloseByEsc?: boolean;
    canCloseByCloseClick?: boolean;
    canCloseByMask?: boolean;
}

/**
 * Drawer
 * 继承 Overlay.Popup 的 API，除非特别说明
 * */
export default class Drawer extends Component<DrawerProps> {
    static displayName = 'Drawer';

    static propTypes = {
        ...((Popup as ComponentType).propTypes || {}),
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        trigger: PropTypes.element,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        cache: PropTypes.bool,
        closeMode: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOf(['close', 'mask', 'esc'])),
            PropTypes.oneOf(['close', 'mask', 'esc']),
        ]),
        onClose: PropTypes.func,
        afterOpen: PropTypes.func,
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        title: PropTypes.node,
        headerStyle: PropTypes.object,
        bodyStyle: PropTypes.object,
        visible: PropTypes.bool,
        hasMask: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        locale: PropTypes.object,
        popupContainer: PropTypes.any,
        v2: PropTypes.bool,
        afterClose: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        triggerType: 'click',
        trigger: null,
        closeable: true,
        onClose: noop,
        hasMask: true,
        placement: 'right',
        locale: zhCN.Drawer,
    };

    private overlay: ComponentRef<typeof Popup> | null = null;

    getAlign = (placement: string | undefined) => {
        let align;
        switch (placement) {
            case 'top':
                align = 'tl tl';
                break;
            case 'bottom':
                align = 'bl bl';
                break;
            case 'left':
                align = 'tl tl';
                break;
            case 'right':
            default:
                align = 'tr tr';
                break;
        }

        return align;
    };

    getAnimation = (placement: string | undefined) => {
        if ('animation' in this.props) {
            return this.props.animation;
        }

        let animation;
        switch (placement) {
            case 'top':
                animation = {
                    in: 'slideInDown',
                    out: 'slideOutUp',
                };
                break;
            case 'bottom':
                animation = {
                    in: 'slideInUp',
                    out: 'slideOutDown',
                };
                break;
            case 'left':
                animation = {
                    in: 'slideInLeft',
                    out: 'slideOutLeft',
                };
                break;
            case 'right':
            default:
                animation = {
                    in: 'slideInRight',
                    out: 'slideOutRight',
                };
                break;
        }

        return animation;
    };

    getOverlayRef = (ref: ComponentRef<typeof Popup> | null) => {
        this.overlay = ref;
    };

    mapcloseableToConfig = (closeable: boolean | string): CloseConfig => {
        return ['esc', 'close', 'mask'].reduce((ret: CloseConfig, option) => {
            const key = option.charAt(0).toUpperCase() + option.substr(1);
            const value =
                typeof closeable === 'boolean'
                    ? closeable
                    : closeable.split(',').indexOf(option) > -1;

            if (option === 'esc' || option === 'mask') {
                ret[`canCloseBy${key}` as keyof CloseConfig] = value;
            } else {
                ret[`canCloseBy${key}Click` as keyof CloseConfig] = value;
            }

            return ret;
        }, {});
    };

    handleVisibleChange = (visible: boolean, reason: string, e: React.MouseEvent) => {
        const { onClose, onVisibleChange } = this.props;

        if (visible === false) {
            onClose && onClose(reason, e);
        }

        onVisibleChange && onVisibleChange(visible, reason, e);
    };

    renderInner(closeable: InnerProps['closeable']) {
        const {
            prefix,
            className,
            children,
            title,
            onClose,
            locale,
            headerStyle,
            bodyStyle,
            placement,
            rtl,
        } = this.props;
        const others = pickOthers(Drawer.propTypes, this.props);

        return (
            <Inner
                prefix={prefix}
                title={title}
                className={className}
                locale={locale}
                closeable={closeable}
                rtl={rtl}
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
                placement={placement}
                onClose={onClose!.bind(this, 'closeClick')}
                {...others}
            >
                {children}
            </Inner>
        );
    }

    render() {
        const {
            prefix,
            style,
            width,
            height,
            trigger,
            triggerType,
            animation,
            hasMask,
            visible,
            placement,
            onClose,
            onVisibleChange,
            closeable,
            closeMode,
            rtl,
            popupContainer,
            content,
            title,
            ...others
        } = this.props;

        const newStyle = {
            width,
            height,
            ...style,
        };

        const newCloseable =
            'closeMode' in this.props
                ? Array.isArray(closeMode)
                    ? closeMode.join(',')
                    : closeMode
                : closeable;

        const { canCloseByCloseClick, ...closeConfig } = this.mapcloseableToConfig(
            newCloseable as boolean | string
        );

        const newPopupProps = {
            prefix,
            visible,
            trigger,
            triggerType,
            onVisibleChange: this.handleVisibleChange,
            animation: this.getAnimation(placement),
            hasMask,
            align: this.getAlign(placement),
            ...closeConfig,
            canCloseByOutSideClick: false,
            disableScroll: true,
            ref: this.getOverlayRef,
            rtl,
            target: 'viewport',
            style: newStyle,
            needAdjust: false,
            container: popupContainer,
        };

        const inner = this.renderInner(canCloseByCloseClick);

        return (
            <Popup {...newPopupProps} {...others}>
                {inner}
            </Popup>
        );
    }
}
