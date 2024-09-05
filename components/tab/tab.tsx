import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { KEYCODE, obj } from '../util';
import TabNav from './tabs/nav';
import TabContent from './tabs/content';
import { toArray } from './tabs/utils';
import zhCN from '../locale/zh-cn';

const noop = () => {};

/** Tab */
class Tab extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
        /**
         * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
         */
        activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 初始化时被激活的选项卡的 key
         */
        defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 外观形态
         */
        shape: PropTypes.oneOf(['pure', 'wrapped', 'text', 'capsule']),
        /**
         * 是否开启动效
         */
        animation: PropTypes.bool,
        /**
         * 选项卡过多时的滑动模式
         */
        excessMode: PropTypes.oneOf(['slide', 'dropdown']),
        /**
         * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
         */
        tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        /**
         * 尺寸
         */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * 激活选项卡的触发方式
         */
        triggerType: PropTypes.oneOf(['hover', 'click']),
        /**
         * 是否延迟加载 TabItem 的内容, 默认开启, 即不提前渲染
         */
        lazyLoad: PropTypes.bool,
        /**
         * 是否自动卸载未处于激活状态的选项卡
         */
        unmountInactiveTabs: PropTypes.bool,
        /**
         * 导航条的自定义样式
         */
        navStyle: PropTypes.object,
        /**
         * 导航条的自定义样式类
         */
        navClassName: PropTypes.string,
        /**
         * 内容区容器的自定义样式
         */
        contentStyle: PropTypes.object,
        /**
         * 内容区容器的自定义样式类
         */
        contentClassName: PropTypes.string,
        /**
         * 导航栏附加内容
         */
        extra: PropTypes.node,
        /**
         * 禁止键盘事件，设置后无法通过键盘的上下左右按键，切换当前选中的tab
         */
        disableKeyboard: PropTypes.bool,
        /**
         * 点击单个选项卡时触发的回调
         */
        onClick: PropTypes.func,
        /**
         * 选项卡发生切换时的事件回调
         * @param {String|Number} key 改变后的 key
         */
        onChange: PropTypes.func,
        /**
         * 选项卡被关闭时的事件回调
         * @param {String|Number} key   关闭的选项卡的 key
         */
        onClose: PropTypes.func,
        /**
         * 自定义选项卡模板渲染函数
         * @param {String} key 当前 Tab.Item 的 key 值
         * @param {Object} props 传给 Tab.Item 的所有属性键值对
         * @return {ReactNode} 返回自定义组件
         */
        tabRender: PropTypes.func,
        /**
         * 弹层属性透传, 只有当 excessMode 为 dropdown 时生效
         */
        popupProps: PropTypes.object,
        children: PropTypes.any,
        className: PropTypes.string,
        locale: PropTypes.object,
        /**
         * 自定义组件内 icon
         */
        icons: PropTypes.shape({
            prev: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            next: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            dropdown: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        }),
        /**
         * 新增按钮
         */
        showAdd: PropTypes.bool,
        /**
         * 新增的事件回调
         */
        onAdd: PropTypes.func,
        /**
         * 自定义添加按钮
         */
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

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: this.getDefaultActiveKey(props),
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.activeKey !== undefined && state.activeKey !== `${props.activeKey}`) {
            return {
                activeKey: `${props.activeKey}`,
            };
        }

        return {};
    }

    componentDidUpdate(prevProps) {
        const preChildLen = (prevProps.children && prevProps.children.length) || 0;
        const curChildLen = (this.props.children && this.props.children.length) || 0;
        if (
            preChildLen !== 0 &&
            curChildLen !== 0 &&
            !('activeKey' in this.props) & !this.isActiveKeyExist(this.state.activeKey)
        ) {
            const activeKey = this.getDefaultActiveKey(this.props);
            if (activeKey) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    activeKey,
                });
            }
        }
    }

    getDefaultActiveKey(props) {
        let activeKey = props.activeKey === undefined ? props.defaultActiveKey : props.activeKey;

        if (activeKey === undefined) {
            React.Children.forEach(props.children, (child, index) => {
                if (activeKey !== undefined) return;
                if (React.isValidElement(child)) {
                    if (!child.props.disabled) {
                        activeKey = child.key || index;
                    }
                }
            });
        }

        return activeKey !== undefined ? `${activeKey}` : undefined;
    }

    getNextActiveKey(isNext) {
        const children = [];
        React.Children.forEach(this.props.children, child => {
            if (React.isValidElement(child)) {
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

    isActiveKeyExist(activeKey) {
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

    setActiveKey(key) {
        const { activeKey } = this.state;

        // 如果 key 没变，或者受控状态下，则跳过
        if (key === activeKey || 'activeKey' in this.props) {
            return;
        }
        this.setState({
            activeKey: key,
        });
    }

    handleTriggerEvent = (eventType, key) => {
        const { triggerType, onClick, onChange } = this.props;
        if (triggerType === eventType) {
            onClick(key);
            this.setActiveKey(key);
            if (this.state.activeKey !== key) {
                onChange(key);
            }
        }
    };

    onNavKeyDown = e => {
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
            this.handleTriggerEvent(this.props.triggerType, newKey);
        } else if (keyCode === KEYCODE.LEFT || keyCode === KEYCODE.UP) {
            newKey = this.getNextActiveKey(false);
            this.handleTriggerEvent(this.props.triggerType, newKey);
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
        if (rtl && ['left', 'right'].indexOf(tabPosition) >= 0) {
            newPosition = tabPosition === 'left' ? 'right' : 'left';
        }
        const classNames = classnames(
            {
                [`${prefix}tabs`]: true,
                [`${prefix}tabs-${shape}`]: shape,
                [`${prefix}tabs-vertical`]:
                    shape === 'wrapped' && ['left', 'right'].indexOf(tabPosition) >= 0,
                [`${prefix}tabs-scrollable`]: true,
                [`${prefix}tabs-${newPosition}`]: shape === 'wrapped',
                [`${prefix + size}`]: size,
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
