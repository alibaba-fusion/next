import React, { Component, type ComponentPropsWithRef } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import zhCN from '../locale/zh-cn';
import { focus, obj, func, events, dom, env } from '../util';
import Inner from './inner';
import { type CustomCSSStyleKey } from '../util/dom';
import { DialogV1Props } from './types';

const noop = () => {};
const { limitTabRange } = focus;
const { bindCtx } = func;
const { pickOthers } = obj;
const { getStyle, setStyle } = dom;

function isWidthOrHeight(name: string): name is 'width' | 'height' {
    return ['width', 'height'].indexOf(name) !== -1;
}

// [fix issue #1609](https://github.com/alibaba-fusion/next/issues/1609)
// https://stackoverflow.com/questions/19717907/getcomputedstyle-reporting-different-heights-between-chrome-safari-firefox-and-i
function _getSize(dom: HTMLElement, name: CustomCSSStyleKey) {
    const boxSizing = getStyle(dom, 'boxSizing');

    if (env.ieVersion && isWidthOrHeight(name) && boxSizing === 'border-box') {
        return parseFloat(dom.getBoundingClientRect()[name].toFixed(1));
    } else {
        return getStyle(dom, name);
    }
}

/**
 * Dialog
 */
export default class Dialog extends Component<DialogV1Props> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        visible: PropTypes.bool,
        title: PropTypes.node,
        children: PropTypes.node,
        footer: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
        footerAlign: PropTypes.oneOf(['left', 'center', 'right']),
        footerActions: PropTypes.array,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        okProps: PropTypes.object,
        cancelProps: PropTypes.object,
        closeMode: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOf(['close', 'mask', 'esc'])),
            PropTypes.oneOf(['close', 'mask', 'esc']),
        ]),
        cache: PropTypes.bool,
        afterClose: PropTypes.func,
        hasMask: PropTypes.bool,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        autoFocus: PropTypes.bool,
        overlayProps: PropTypes.object,
        locale: PropTypes.object,
        // Do not remove this, it's for <ConfigProvider popupContainer={} />
        // see https://github.com/alibaba-fusion/next/issues/1508
        popupContainer: PropTypes.any,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        v2: PropTypes.bool,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        top: PropTypes.number,
        bottom: PropTypes.number,
        closeIcon: PropTypes.node,
        centered: PropTypes.bool,
        overflowScroll: PropTypes.bool,
        wrapperClassName: PropTypes.string,
        closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        onClose: PropTypes.func,
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        isFullScreen: PropTypes.bool,
        shouldUpdatePosition: PropTypes.bool,
        minMargin: PropTypes.number,
        noPadding: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        visible: false,
        footerAlign: 'right',
        footerActions: ['ok', 'cancel'],
        onOk: noop,
        onCancel: noop,
        cache: false,
        okProps: {},
        cancelProps: {},
        closeable: 'esc,close',
        onClose: noop,
        afterClose: noop,
        centered: false,
        hasMask: true,
        animation: {
            in: 'fadeInUp',
            out: 'fadeOutUp',
        },
        autoFocus: false,
        align: 'cc cc',
        isFullScreen: false,
        overflowScroll: true,
        shouldUpdatePosition: false,
        minMargin: 40,
        bottom: 40,
        overlayProps: {},
        locale: zhCN.Dialog,
        noPadding: false,
    };
    overlay: InstanceType<typeof Overlay> | null;
    private _lastDialogHeight: string | number;
    dialogBodyStyleMaxHeight: string;
    dialogBodyStyleOverflowY: string;

    constructor(props: DialogV1Props) {
        super(props);
        bindCtx(this, ['onKeyDown', 'beforePosition', 'adjustPosition', 'getOverlayRef']);
    }

    componentDidMount() {
        events.on(document, 'keydown', this.onKeyDown);
        if (!this.useCSSToPosition()) {
            this.adjustPosition();
        }
    }

    componentWillUnmount() {
        events.off(document, 'keydown', this.onKeyDown);
    }

    useCSSToPosition() {
        const { align, isFullScreen } = this.props;
        return align === 'cc cc' && isFullScreen;
    }

    onKeyDown(e: KeyboardEvent) {
        if (this.overlay) {
            const node = this.getInnerNode();
            if (node) {
                limitTabRange(node, e);
            }
        }
    }

    beforePosition() {
        if (this.props.visible && this.overlay) {
            const inner = this.getInner();
            if (inner) {
                const node = this.getInnerNode();
                if (this._lastDialogHeight !== _getSize(node!, 'height')) {
                    this.revertSize(inner.bodyNode);
                }
            }
        }
    }

    adjustPosition() {
        if (this.props.visible && this.overlay) {
            const inner = this.getInner();
            if (inner) {
                const node = this.getInnerNode();

                let top = getStyle(node!, 'top') as number;
                const minMargin = this.props.minMargin;
                if (top < minMargin!) {
                    top = minMargin!;
                    setStyle(node, 'top', `${minMargin}px`);
                }

                const height = _getSize(node!, 'height') as number;
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                if (
                    viewportHeight < height + top * 2 - 1 || // 分辨率和精确度的原因 高度计算的时候 可能会有1px内的偏差
                    this.props.height
                ) {
                    this.adjustSize(inner, node!, Math.min(height, viewportHeight - top * 2));
                } else {
                    this.revertSize(inner.bodyNode);
                }

                this._lastDialogHeight = height;
            }
        }
    }

    adjustSize(
        inner: { headerNode: HTMLElement; bodyNode: HTMLElement; footerNode: HTMLDivElement },
        node: HTMLElement,
        expectHeight: number
    ) {
        const { headerNode, bodyNode, footerNode } = inner;
        const [headerHeight, footerHeight] = [headerNode, footerNode].map(node =>
            node ? (_getSize(node, 'height') as number) : 0
        );
        const padding = ['padding-top', 'padding-bottom'].reduce(
            (sum, attr: CustomCSSStyleKey) => sum + (getStyle(node, attr) as number),
            0
        );

        let maxBodyHeight = expectHeight - headerHeight - footerHeight - padding;

        if (maxBodyHeight < 0) {
            maxBodyHeight = 1;
        }

        if (bodyNode) {
            this.dialogBodyStyleMaxHeight = bodyNode.style.maxHeight;
            this.dialogBodyStyleOverflowY = bodyNode.style.overflowY;

            setStyle(bodyNode, {
                'max-height': `${maxBodyHeight}px`,
                'overflow-y': 'auto',
            });
        }
    }

    revertSize(bodyNode: HTMLElement) {
        setStyle(bodyNode, {
            'max-height': this.dialogBodyStyleMaxHeight,
            'overflow-y': this.dialogBodyStyleOverflowY,
        });
    }

    mapcloseableToConfig(closeable: NonNullable<DialogV1Props['closeable']>) {
        return ['esc', 'close', 'mask'].reduce(
            (ret, option) => {
                const key = option.charAt(0).toUpperCase() + option.substr(1);
                const value =
                    typeof closeable === 'boolean'
                        ? closeable
                        : closeable.split(',').indexOf(option) > -1;

                if (option === 'esc' || option === 'mask') {
                    ret[`canCloseBy${key}`] = value;
                } else {
                    ret[`canCloseBy${key}Click`] = value;
                }

                return ret;
            },
            {} as Record<string, boolean>
        );
    }

    getOverlayRef(ref: InstanceType<typeof Overlay> | null) {
        this.overlay = ref;
    }

    getInner() {
        return this.overlay!.getInstance().getContent();
    }

    getInnerNode() {
        return this.overlay!.getInstance().getContentNode();
    }

    renderInner(closeable: boolean) {
        const {
            prefix,
            className,
            title,
            children,
            footer,
            footerAlign,
            footerActions,
            onOk,
            onCancel,
            okProps,
            cancelProps,
            onClose,
            locale,
            visible,
            rtl,
            height,
            noPadding,
        } = this.props;
        const others = pickOthers(Object.keys(Dialog.propTypes), this.props);

        return (
            <Inner
                prefix={prefix}
                className={className}
                title={title}
                footer={footer}
                footerAlign={footerAlign}
                footerActions={footerActions}
                onOk={visible ? onOk : noop}
                onCancel={visible ? onCancel : noop}
                okProps={okProps}
                cancelProps={cancelProps}
                locale={locale}
                closeable={closeable}
                rtl={rtl}
                onClose={onClose!.bind(this, 'closeClick')}
                height={height}
                noPadding={noPadding}
                {...others}
            >
                {children}
            </Inner>
        );
    }

    render() {
        const {
            prefix,
            visible,
            hasMask,
            animation,
            autoFocus,
            closeable,
            closeMode,
            onClose,
            afterClose,
            shouldUpdatePosition,
            align,
            popupContainer,
            cache,
            overlayProps,
            rtl,
        } = this.props;

        const useCSS = this.useCSSToPosition();
        const newCloseable: DialogV1Props['closeable'] =
            'closeMode' in this.props
                ? Array.isArray(closeMode)
                    ? (closeMode.join(',') as DialogV1Props['closeable'])
                    : closeMode
                : closeable;
        const { canCloseByCloseClick, ...closeConfig } = this.mapcloseableToConfig(newCloseable!);
        const newOverlayProps: ComponentPropsWithRef<typeof Overlay> = {
            disableScroll: true,
            container: popupContainer,
            cache,
            ...overlayProps,
            prefix,
            visible,
            animation,
            hasMask,
            autoFocus,
            afterClose,
            ...closeConfig,
            canCloseByOutSideClick: false,
            align: (useCSS ? false : align) as string,
            onRequestClose: onClose,
            needAdjust: false,
            ref: this.getOverlayRef,
            rtl,
            maskClass: useCSS ? `${prefix}dialog-container` : '',
            isChildrenInMask: useCSS && hasMask,
        };
        if (!useCSS) {
            newOverlayProps.beforePosition = this.beforePosition;
            newOverlayProps.onPosition = this.adjustPosition;
            newOverlayProps.shouldUpdatePosition = shouldUpdatePosition;
        }

        const inner = this.renderInner(canCloseByCloseClick);

        // useCSS && hasMask : isFullScreen 并且 有 mask 的模式下，为了解决 next-overlay-backdrop 覆盖 mask，使得点击 mask 关闭页面的功能不生效的问题，需要开启 Overlay 的 isChildrenInMask 功能，并且把 next-dialog-container 放到 next-overlay-backdrop 上
        // useCSS && !hasMask : isFullScreen 并且 没有 mask 的情况下，需要关闭 isChildrenInMask 功能，以防止 children 不渲染
        // 其他模式下维持 mask 与 children 同级的关系
        return (
            <Overlay {...newOverlayProps}>
                {useCSS && !hasMask ? (
                    <div className={`${prefix}dialog-container`} dir={rtl ? 'rtl' : undefined}>
                        {inner}
                    </div>
                ) : (
                    inner
                )}
            </Overlay>
        );
    }
}
