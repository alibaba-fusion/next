import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import Menu, { type MenuProps } from '../menu';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { obj, func } from '../util';
import type { MenuButtonProps, MenuButtonState } from './types';

const { Popup } = Overlay;

/**
 * MenuButton
 */
class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
    static Item = Menu.Item;
    static Group = Menu.Group;
    static Divider = Menu.Divider;
    static displayName = 'MenuButton';

    static propTypes = {
        prefix: PropTypes.string,
        label: PropTypes.node,
        autoWidth: PropTypes.bool,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        popupContainer: PropTypes.any,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        defaultSelectedKeys: PropTypes.array,
        selectedKeys: PropTypes.array,
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        onItemClick: PropTypes.func,
        onSelect: PropTypes.func,
        menuProps: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
    };

    static defaultProps = {
        prefix: 'next-',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: func.noop,
        onItemClick: func.noop,
        onSelect: func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
    };

    menu: HTMLElement | undefined;

    constructor(props: MenuButtonProps) {
        super(props);
        this.state = {
            selectedKeys: props.defaultSelectedKeys,
            visible: props.defaultVisible,
        };
    }

    static getDerivedStateFromProps(props: MenuButtonProps) {
        const st: Partial<MenuButtonState> = {};

        if ('visible' in props) {
            st.visible = props.visible;
        }

        if ('selectedKeys' in props) {
            st.selectedKeys = props.selectedKeys;
        }

        return st;
    }

    clickMenuItem: MenuProps['onItemClick'] = (key, item, event) => {
        const { selectMode } = this.props;

        this.props.onItemClick!(key, item, event);

        if (selectMode === 'multiple') {
            return;
        }

        this.onPopupVisibleChange(false, 'menuSelect');
    };

    selectMenu: MenuProps['onSelect'] = (keys, ...others) => {
        if (!('selectedKeys' in this.props)) {
            this.setState({
                selectedKeys: keys,
            });
        }
        this.props.onSelect!(keys, ...others);
    };

    onPopupOpen = () => {
        const button = findDOMNode(this) as HTMLElement;
        if (this.props.autoWidth && button && this.menu) {
            this.menu.style.width = `${button.offsetWidth}px`;
        }
    };

    onPopupVisibleChange = (visible: boolean, type: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange!(visible, type);
    };

    _menuRefHandler = (ref: React.ComponentRef<typeof Menu> | null) => {
        this.menu = findDOMNode(ref) as HTMLElement;

        const refFn = this.props.menuProps?.ref;
        if (typeof refFn === 'function') {
            refFn(ref);
        }
    };

    render() {
        const {
            prefix,
            style,
            className,
            label,
            popupTriggerType,
            popupContainer,
            popupStyle,
            popupClassName,
            popupProps,
            followTrigger,
            selectMode,
            menuProps,
            children,
            ...others
        } = this.props;

        const state = this.state;

        const classNames = classnames(
            {
                [`${prefix}menu-btn`]: true,
                [`${prefix}expand`]: state.visible,
                opened: state.visible,
            },
            className
        );

        const popupClassNames = classnames(
            {
                [`${prefix}menu-btn-popup`]: true,
            },
            popupClassName
        );

        const trigger = (
            <Button
                style={style}
                className={classNames}
                {...obj.pickOthers(MenuButton.propTypes, others)}
            >
                {label} <Icon type="arrow-down" className={`${prefix}menu-btn-arrow`} />
            </Button>
        );

        return (
            <Popup
                {...popupProps}
                followTrigger={followTrigger}
                visible={state.visible}
                onVisibleChange={this.onPopupVisibleChange}
                trigger={trigger}
                triggerType={popupTriggerType}
                container={popupContainer}
                onOpen={this.onPopupOpen}
                style={popupStyle}
                className={popupClassNames}
            >
                <div className={`${prefix}menu-btn-spacing-tb`}>
                    <Menu
                        {...menuProps}
                        ref={this._menuRefHandler}
                        selectedKeys={state.selectedKeys}
                        selectMode={selectMode}
                        onSelect={this.selectMenu}
                        onItemClick={this.clickMenuItem}
                    >
                        {children}
                    </Menu>
                </div>
            </Popup>
        );
    }
}

export type { MenuButtonProps };

export default ConfigProvider.config(polyfill(MenuButton), {
    componentName: 'MenuButton',
});
