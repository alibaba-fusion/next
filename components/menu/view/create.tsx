import React, { Component, type ComponentRef } from 'react';
// eslint-disable-next-line react/no-deprecated
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay, { type OverlayProps } from '../../overlay';
import { func, type ClassPropsWithDefault } from '../../util';
import ConfigProvider from '../../config-provider';
import menu from './menu';
import type { CreateMenuProps, MenuProps } from '../types';

const { bindCtx } = func;
const { getContextProps } = ConfigProvider;
const Menu = ConfigProvider.config(menu);

let menuInstance:
    | {
          destroy(): void;
      }
    | null
    | undefined;

class ContextMenu extends Component<CreateMenuProps, { visible: boolean }> {
    static propTypes = {
        className: PropTypes.string,
        popupClassName: PropTypes.string,
        target: PropTypes.any,
        align: PropTypes.string,
        offset: PropTypes.array,
        overlayProps: PropTypes.object,
        afterClose: PropTypes.func,
        mode: PropTypes.oneOf(['inline', 'popup']),
        onOpen: PropTypes.func,
        onItemClick: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        align: 'tl tl',
        mode: 'popup',
    };

    overlay: ComponentRef<typeof Overlay> | null | undefined;
    popupNodes: HTMLElement[];
    readonly props: ClassPropsWithDefault<CreateMenuProps, typeof ContextMenu.defaultProps>;

    constructor(props: CreateMenuProps) {
        super(props);

        this.state = {
            visible: true,
        };

        bindCtx(this, ['handleOverlayClose', 'handleOverlayOpen', 'handleItemClick', 'getOverlay']);
    }

    getOverlay(ref: ComponentRef<typeof Overlay> | null) {
        this.overlay = ref;
    }

    close() {
        this.setState({
            visible: false,
        });
        menuInstance = null;
    }

    handleOverlayClose: OverlayProps['onRequestClose'] = (triggerType, e, ...others) => {
        const clickedPopupMenu =
            triggerType === 'docClick' &&
            this.popupNodes.some(node => node.contains(e.target as Node));
        if (!clickedPopupMenu) {
            this.close();
            const { overlayProps } = this.props;
            if (overlayProps && overlayProps.onRequestClose) {
                overlayProps.onRequestClose(triggerType, e, ...others);
            }
        }
    };

    handleOverlayOpen() {
        // @ts-expect-error 此处 overlay 类型不对，Overlay 完成改造后可去除该注释
        this.popupNodes = this.overlay!.getInstance().getContent().getInstance().popupNodes;
        const { overlayProps } = this.props;
        if (overlayProps && overlayProps.onOpen) {
            overlayProps.onOpen();
        }
    }

    handleItemClick: NonNullable<CreateMenuProps['onItemClick']> = (...args) => {
        this.close();

        this.props.onItemClick && this.props.onItemClick(...args);
    };

    render() {
        const {
            className,
            popupClassName,
            target,
            align,
            offset,
            afterClose,
            overlayProps = {},
            ...others
        } = this.props;
        const contextProps = getContextProps(this.props);
        const { prefix } = contextProps;
        const { visible } = this.state;

        const newOverlayProps = {
            ...contextProps,
            ...overlayProps,
            target,
            align: align as string,
            offset,
            afterClose,
            visible,
            onRequestClose: this.handleOverlayClose,
            onOpen: this.handleOverlayOpen,
            ref: this.getOverlay,
        };
        const menuProps: MenuProps = {
            ...contextProps,
            triggerType: 'hover',
            ...others,
            className: cx(`${prefix}context`, className),
            popupClassName: cx(`${prefix}context`, popupClassName),
            onItemClick: this.handleItemClick,
        };

        newOverlayProps.rtl = false;

        return (
            <Overlay {...newOverlayProps}>
                <Menu {...menuProps} />
            </Overlay>
        );
    }
}

/**
 * 创建上下文菜单
 */
export default function create(props: CreateMenuProps) {
    if (menuInstance) {
        menuInstance.destroy();
    }

    /* eslint-disable no-unused-vars */
    const { afterClose, ...others } = props;
    /* eslint-enable no-unused-vars */

    const div = document.createElement('div');
    document.body.appendChild(div);

    const closeChain = () => {
        unmountComponentAtNode(div);
        document.body.removeChild(div);

        afterClose && afterClose();
    };

    const newContext = ConfigProvider.getContext();

    let menu: ContextMenu | null;
    render(
        <ConfigProvider {...newContext}>
            <ContextMenu
                ref={ref => {
                    menu = ref;
                }}
                afterClose={closeChain}
                {...others}
            />
        </ConfigProvider>,
        div
    );

    menuInstance = {
        destroy: () => {
            if (menu) {
                menu.close();
            }
        },
    };

    return menuInstance;
}
