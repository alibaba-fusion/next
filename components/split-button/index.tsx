import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { dom, obj, func } from '../util';
import type { SplitButtonProps } from './types';
import Menu, { type MenuProps } from '../menu';

const { Popup } = Overlay;

class SplitButton extends React.Component<SplitButtonProps> {
    static propTypes = {
        prefix: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.oneOf(['normal', 'primary', 'secondary']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        label: PropTypes.node,
        component: PropTypes.oneOf(['button', 'a']),
        ghost: PropTypes.oneOf(['light', 'dark', false, true]),
        defaultSelectedKeys: PropTypes.array,
        selectedKeys: PropTypes.array,
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        onSelect: PropTypes.func,
        onItemClick: PropTypes.func,
        triggerProps: PropTypes.object,
        autoWidth: PropTypes.bool,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        popupAlign: PropTypes.string,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        popupContainer: PropTypes.any,
        followTrigger: PropTypes.bool,
        menuProps: PropTypes.object,
        leftButtonProps: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
    };

    static defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: func.noop,
        onItemClick: func.noop,
        onSelect: func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
        leftButtonProps: {},
    };

    static Item = Menu.Item;
    static Divider = Menu.Divider;
    static Group = Menu.Group;

    static getDerivedStateFromProps(nextProps: SplitButtonProps) {
        const st: {
            visible?: boolean;
            selectedKeys?: string[];
        } = {};

        if ('visible' in nextProps) {
            st.visible = nextProps.visible;
        }

        if ('selectedKeys' in nextProps) {
            st.selectedKeys = nextProps.selectedKeys;
        }

        return st;
    }

    state = {
        selectedKeys: this.props.defaultSelectedKeys!,
        visible: this.props.defaultVisible,
    };

    private wrapper: HTMLDivElement | null = null;
    private menu: HTMLUListElement | null = null;

    componentDidMount() {
        // 由于定位目标是 wrapper，如果弹层默认展开，wrapper 还未渲染，didMount 后强制再渲染一次，弹层重新定位
        if (this.state.visible) {
            this.forceUpdate();
        }
    }

    selectMenuItem: MenuProps['onSelect'] = (keys, ...others) => {
        if (!('selectedKeys' in this.props)) {
            this.setState({
                selectedKeys: keys,
            });
        }
        this.props.onSelect!(keys, ...others);
    };

    clickMenuItem: MenuProps['onItemClick'] = (key, ...others) => {
        this.props.onItemClick!(key, ...others);
        this.onVisibleChange(false, 'menuSelect');
    };

    onPopupOpen = () => {
        if (this.props.autoWidth && this.wrapper && this.menu) {
            dom.setStyle(this.menu, {
                width: this.wrapper.offsetWidth,
            });
        }
    };

    onVisibleChange: NonNullable<SplitButtonProps['onVisibleChange']> = (visible, reason) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange!(visible, reason);
    };

    _menuRefHandler = (ref: React.ComponentRef<typeof Menu>) => {
        this.menu = findDOMNode(ref) as HTMLUListElement;

        const refFn = this.props.menuProps!.ref;
        if (typeof refFn === 'function') {
            refFn(ref);
        }
    };

    _wrapperRefHandler = (ref: React.ComponentRef<typeof Button.Group>) => {
        this.wrapper = findDOMNode(ref) as HTMLDivElement;
    };

    render() {
        const {
            prefix,
            label,
            size,
            type,
            component,
            ghost,
            className,
            style,
            children,
            triggerProps,
            popupAlign,
            popupTriggerType,
            popupStyle,
            popupClassName,
            popupProps,
            popupContainer,
            followTrigger,
            selectMode,
            menuProps,
            leftButtonProps,
            disabled,
            ...others
        } = this.props;

        const state = this.state;

        const classNames = classnames(
            {
                [`${prefix}split-btn`]: true,
            },
            className
        );

        const sharedBtnProps = {
            type,
            size,
            component,
            ghost,
            disabled,
        };

        const triggerClassNames = classnames({
            [`${prefix}split-btn-trigger`]: true,
            [`${prefix}expand`]: state.visible,
            opened: state.visible,
        });

        const iconCls = classnames({
            [`${prefix}split-btn-symbol-fold`]: true,
        });

        const trigger = (
            <Button {...sharedBtnProps} {...triggerProps} className={triggerClassNames}>
                <Icon type="arrow-down" className={iconCls} />
            </Button>
        );

        return (
            <Button.Group
                {...obj.pickOthers(SplitButton.propTypes, others)}
                className={classNames}
                style={style}
                size={size}
                ref={this._wrapperRefHandler}
            >
                <Button {...sharedBtnProps} {...leftButtonProps}>
                    {label}
                </Button>
                <Popup
                    {...popupProps}
                    followTrigger={followTrigger}
                    visible={state.visible}
                    onVisibleChange={this.onVisibleChange}
                    trigger={trigger}
                    triggerType={popupTriggerType}
                    align={popupAlign}
                    container={popupContainer}
                    target={() => this.wrapper}
                    style={popupStyle}
                    shouldUpdatePosition
                    className={popupClassName}
                    onOpen={this.onPopupOpen}
                >
                    <div className={`${prefix}split-btn-spacing-tb`}>
                        <Menu
                            {...menuProps}
                            selectMode={selectMode}
                            selectedKeys={state.selectedKeys}
                            onSelect={this.selectMenuItem}
                            onItemClick={this.clickMenuItem}
                            ref={this._menuRefHandler}
                        >
                            {children}
                        </Menu>
                    </div>
                </Popup>
            </Button.Group>
        );
    }
}

export type { SplitButtonProps };

export default ConfigProvider.config(polyfill(SplitButton));
