import React, { Component, type ReactElement, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { KEYCODE, obj } from '../util';
import TabNav from './tabs/nav';
import TabContent from './tabs/content';
import { toArray } from './tabs/utils';
import zhCN from '../locale/zh-cn';
import type { TabProps, ItemProps } from './types';

const noop = () => {};
export interface TabState {
    activeKey?: string;
}

/** Tab */
class Tab extends Component<TabProps, TabState> {
    static displayName = 'Tab';
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
        activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        shape: PropTypes.oneOf(['pure', 'wrapped', 'text', 'capsule']),
        animation: PropTypes.bool,
        excessMode: PropTypes.oneOf(['slide', 'dropdown']),
        tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        size: PropTypes.oneOf(['small', 'medium']),
        triggerType: PropTypes.oneOf(['hover', 'click']),
        lazyLoad: PropTypes.bool,
        unmountInactiveTabs: PropTypes.bool,
        navStyle: PropTypes.object,
        navClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string,
        extra: PropTypes.node,
        disableKeyboard: PropTypes.bool,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
        onClose: PropTypes.func,
        tabRender: PropTypes.func,
        popupProps: PropTypes.object,
        children: PropTypes.any,
        className: PropTypes.string,
        locale: PropTypes.object,
        icons: PropTypes.shape({
            prev: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            next: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            dropdown: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        }),
        showAdd: PropTypes.bool,
        onAdd: PropTypes.func,
        addIcon: PropTypes.node,
    };

    static defaultProps = {
        prefix: 'next-',
        shape: 'pure',
        size: 'medium',
        animation: true,
        tabPosition: 'top',
        excessMode: 'slide',
        triggerType: 'click',
        lazyLoad: true,
        unmountInactiveTabs: false,
        disableKeyboard: false,
        onClick: noop,
        onChange: noop,
        onClose: noop,
        locale: zhCN.Tab,
        icons: {},
    };

    constructor(props: TabProps) {
        super(props);
        this.state = {
            activeKey: this.getDefaultActiveKey(props),
        };
    }

    static getDerivedStateFromProps(props: TabProps, state: TabState) {
        if (props.activeKey !== undefined && state.activeKey !== `${props.activeKey}`) {
            return {
                activeKey: `${props.activeKey}`,
            };
        }

        return {};
    }

    componentDidUpdate(prevProps: TabProps) {
        // @ts-expect-error 未考虑 children 小于等于 1 个的场景
        const preChildLen = (prevProps.children && prevProps.children.length) || 0;
        const curChildLen =
            // @ts-expect-error 未考虑 children 小于等于 1 个的场景
            (this.props.children && this.props.children.length) || 0;
        if (
            preChildLen !== 0 &&
            curChildLen !== 0 &&
            !('activeKey' in this.props) &&
            !this.isActiveKeyExist(this.state.activeKey!)
        ) {
            const activeKey = this.getDefaultActiveKey(this.props);
            if (activeKey) {
                this.setState({
                    activeKey,
                });
            }
        }
    }

    getDefaultActiveKey(props: TabProps) {
        let activeKey = props.activeKey === undefined ? props.defaultActiveKey : props.activeKey;

        if (activeKey === undefined) {
            React.Children.forEach(props.children, (child, index) => {
                if (activeKey !== undefined) return;
                if (React.isValidElement(child)) {
                    if (!child.props.disabled) {
                        // @ts-expect-error index 应转为 string
                        activeKey = child.key || index;
                    }
                }
            });
        }

        return activeKey !== undefined ? `${activeKey}` : undefined;
    }

    getNextActiveKey(isNext: boolean) {
        const children: ReactElement<ItemProps>[] = [];
        React.Children.forEach(this.props.children, child => {
            if (React.isValidElement<ItemProps>(child)) {
                if (!child.props.disabled) {
                    if (isNext) {
                        children.push(child);
                    } else {
                        children.unshift(child);
                    }
                }
            }
        });

        const length = children.length;
        let key = length && children[0].key;
        children.forEach((child, i) => {
            if (child.key === this.state.activeKey) {
                if (i === length - 1) {
                    key = children[0].key;
                } else {
                    key = children[i + 1].key;
                }
            }
        });
        return key;
    }

    isActiveKeyExist(activeKey: string) {
        let exist = false;
        React.Children.forEach(this.props.children, (child, index) => {
            if (exist) return;
            if (React.isValidElement(child)) {
                if (!child.props.disabled) {
                    const key = child.key || index;
                    if (activeKey === `${key}`) {
                        exist = true;
                    }
                }
            }
        });
        return exist;
    }

    setActiveKey(key: string) {
        const { activeKey } = this.state;

        // 如果 key 没变，或者受控状态下，则跳过
        if (key === activeKey || 'activeKey' in this.props) {
            return;
        }
        this.setState({
            activeKey: key,
        });
    }

    handleTriggerEvent = (eventType: string, key: string) => {
        const { triggerType, onClick, onChange } = this.props;
        if (triggerType === eventType) {
            onClick!(key);
            this.setActiveKey(key);
            if (this.state.activeKey !== key) {
                onChange!(key);
            }
        }
    };

    onNavKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        const keyCode = e.keyCode;
        const { disableKeyboard } = this.props;

        if (disableKeyboard) {
            return;
        }

        if (keyCode >= KEYCODE.LEFT && keyCode <= KEYCODE.DOWN) {
            e.preventDefault();
        }

        let newKey;
        if (keyCode === KEYCODE.RIGHT || keyCode === KEYCODE.DOWN) {
            newKey = this.getNextActiveKey(true);
            // @ts-expect-error newKey 不可能为数字 0，此处是用于 getNextActiveKey 里的逻辑不够严谨导致
            this.handleTriggerEvent(this.props.triggerType!, newKey!);
        } else if (keyCode === KEYCODE.LEFT || keyCode === KEYCODE.UP) {
            newKey = this.getNextActiveKey(false);
            // @ts-expect-error newKey 不可能为数字 0，此处是用于 getNextActiveKey 里的逻辑不够严谨导致
            this.handleTriggerEvent(this.props.triggerType!, newKey!);
        }
    };

    render() {
        const {
            prefix,
            animation,
            shape,
            size,
            extra,
            excessMode,
            tabPosition,
            tabRender,
            triggerType,
            lazyLoad,
            unmountInactiveTabs,
            popupProps,
            navStyle,
            navClassName,
            contentStyle,
            contentClassName,
            className,
            onClose,
            children,
            rtl,
            device,
            locale,
            icons,
            showAdd,
            onAdd,
            addIcon,
            ...others
        } = this.props;
        const { activeKey } = this.state;

        const tabs = toArray(children);
        let newPosition = tabPosition;
        if (rtl && ['left', 'right'].indexOf(tabPosition!) >= 0) {
            newPosition = tabPosition === 'left' ? 'right' : 'left';
        }
        const classNames = classnames(
            {
                [`${prefix}tabs`]: true,
                [`${prefix}tabs-${shape}`]: shape,
                [`${prefix}tabs-vertical`]:
                    shape === 'wrapped' && ['left', 'right'].indexOf(tabPosition!) >= 0,
                [`${prefix}tabs-scrollable`]: true,
                [`${prefix}tabs-${newPosition}`]: shape === 'wrapped',
                [`${prefix! + size!}`]: size,
            },
            className
        );

        const navProps = {
            prefix,
            rtl,
            animation,
            activeKey,
            excessMode,
            extra,
            tabs,
            tabPosition,
            tabRender,
            triggerType,
            popupProps,
            onClose,
            onTriggerEvent: this.handleTriggerEvent,
            onKeyDown: this.onNavKeyDown,
            style: navStyle,
            className: navClassName,
            locale,
            icons,
            showAdd,
            addIcon,
            onAdd,
        };

        const contentProps = {
            prefix,
            activeKey,
            lazyLoad,
            unmountInactiveTabs,
            style: contentStyle,
            className: contentClassName,
        };

        const tabChildren = [
            <TabNav key="tab-nav" {...navProps} />,
            <TabContent key="tab-content" {...contentProps}>
                {tabs}
            </TabContent>,
        ];

        if (tabPosition === 'bottom') {
            tabChildren.reverse();
        }

        return (
            <div
                dir={rtl ? 'rtl' : undefined}
                className={classNames}
                {...obj.pickOthers(Tab.propTypes, others)}
            >
                {tabChildren}
            </div>
        );
    }
}
export default polyfill(Tab);
