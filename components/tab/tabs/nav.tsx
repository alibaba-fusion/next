import React, { ReactElement, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes, { ReactElementLike } from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import Overlay from '../../overlay';
import Menu from '../../menu';
import Button from '../../button';
import Animate from '../../animate';
import { events, KEYCODE, dom, obj } from '../../util';
import {
    triggerEvents,
    getOffsetLT,
    getOffsetWH,
    isTransformSupported,
    tabsArrayShallowEqual,
} from './utils';
import { NavProps } from '../types';
const floatLeft: React.CSSProperties = { float: 'left', zIndex: 1 };
const floatRight: React.CSSProperties = { float: 'right', zIndex: 1 };
type IconType = 'dropdown' | 'prev' | 'next';
const iconTypeMap: Record<IconType, string> = {
    dropdown: 'arrow-down',
    prev: 'arrow-left',
    next: 'arrow-right',
};
const { Popup } = Overlay;
interface NavState {
    showBtn: boolean;
    dropdownTabs: any[];
}

type AnimateInstanceType = InstanceType<typeof Animate>;
class Nav extends React.Component<NavProps, NavState> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        animation: PropTypes.bool,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        excessMode: PropTypes.string,
        extra: PropTypes.any,
        tabs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        tabPosition: PropTypes.string,
        tabRender: PropTypes.func,
        triggerType: PropTypes.string,
        popupProps: PropTypes.object,
        onTriggerEvent: PropTypes.func,
        onKeyDown: PropTypes.func,
        onClose: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        locale: PropTypes.object,
        icons: PropTypes.object,
    };

    scroller: HTMLElement;
    scrollTimer: NodeJS.Timeout;
    nav: HTMLUListElement;
    wrapper: HTMLDivElement;
    navbar: HTMLElement;
    activeTab: HTMLLIElement | null;
    prevBtn: HTMLButtonElement | null;
    nextBtn: HTMLButtonElement | null;
    slideTimer: NodeJS.Timeout;
    updateTimer: NodeJS.Timeout;

    constructor(props: NavProps, context?: unknown) {
        super(props, context);
        this.state = {
            showBtn: false,
            dropdownTabs: [],
        };
    }

    /**
     * 实时获取滚动位置
     */
    get offset() {
        const scroller = this.scroller;
        if (!scroller) {
            return 0;
        }
        const scrollLeft = scroller.scrollLeft;
        return scrollLeft > 0 ? -scrollLeft : scrollLeft;
    }

    componentDidMount() {
        if (!this.props.animation) {
            this.initialSettings();
        }

        this.computeExtraWidth();
        events.on(window, 'resize', this.onWindowResized);
    }

    componentDidUpdate(prevProps: NavProps) {
        // 此处通过延时处理，屏蔽动画带来的定位不准确问题（由于要支持ie9，因此无法使用transitionend）
        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(() => {
            this.scrollToActiveTab();
            this.setSlideBtn();
        }, 410); // transition-duration is set to be .4s, wait for the transition finishes before re-calc

        // 更改tabs后如果有dropdown属性，应该重新执行getDropdownItems函数更新dropdown数据
        if (this.props.excessMode === 'dropdown') {
            if (!tabsArrayShallowEqual(this.props.tabs, prevProps.tabs)) {
                this.getDropdownItems(this.props);
            }
        }
        this.computeExtraWidth();
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.onWindowResized);
    }

    initialSettings() {
        this.setSlideBtn();
        this.getDropdownItems(this.props);
    }

    /**
     * The key method about move
     * @param {number} target position to slide to
     * @param {bool} checkSlideBtn need to check the slide button status or not
     * @param {bool} setActive need to check the active status or not
     */
    setOffset(target: number, checkSlideBtn = true, setActive = true) {
        const { tabPosition, rtl } = this.props;
        const navWH = getOffsetWH(this.nav, tabPosition);
        const wrapperWH = getOffsetWH(this.wrapper);

        // target should not be great than 0, i.e. should not over slide to left-most
        target = target >= 0 ? 0 : target;
        // when need to slide, should not slide to exceed right-most
        target = target <= wrapperWH - navWH && wrapperWH - navWH < 0 ? wrapperWH - navWH : target;

        const relativeOffset = target - this.offset;
        if (this.activeTab && this.props.excessMode === 'slide' && setActive) {
            const activeTabWH = getOffsetWH(this.activeTab);
            const activeTabOffset = getOffsetLT(this.activeTab) + relativeOffset;
            const wrapperOffset = getOffsetLT(this.wrapper);
            target = this._adjustTarget({
                wrapperOffset,
                wrapperWH,
                activeTabWH,
                activeTabOffset,
                rtl,
                target,
            });
        }

        let scaleRate = 1;

        if (this.nav && this.nav.offsetWidth) {
            scaleRate = getOffsetWH(this.nav) / this.nav.offsetWidth;
        }

        const _ov = target / scaleRate;
        const offsetValue = isNaN(_ov) ? target : _ov;

        if (this.offset !== target && this.nav) {
            const divScroll = this.nav.parentElement;

            if (tabPosition === 'left' || tabPosition === 'right') {
                divScroll?.scrollTo({ top: -offsetValue, left: 0, behavior: 'smooth' });
            } else if (!this.props.rtl) {
                divScroll?.scrollTo({ top: 0, left: -offsetValue, behavior: 'smooth' });
            } else {
                divScroll?.scrollTo({ top: 0, left: offsetValue, behavior: 'smooth' });
            }

            if (checkSlideBtn) {
                this.setSlideBtn();
            }
        }
    }

    _adjustTarget({
        wrapperOffset,
        wrapperWH,
        activeTabWH,
        activeTabOffset,
        rtl,
        target,
    }: {
        wrapperOffset: number;
        wrapperWH: number;
        activeTabWH: number;
        activeTabOffset: number;
        rtl?: boolean;
        target: number;
    }) {
        if (
            // active tab covers wrapper right edge
            wrapperOffset + wrapperWH < activeTabOffset + activeTabWH &&
            activeTabOffset < wrapperOffset + wrapperWH
        ) {
            if (rtl) {
                target += activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH); // Move more to make active tab totally in visible zone
            } else {
                target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH) + 1;
            }

            return target;
        }
        if (
            // active tab covers wrapper left edge
            wrapperOffset < activeTabOffset + activeTabWH &&
            activeTabOffset < wrapperOffset
        ) {
            if (rtl) {
                target -= wrapperOffset - activeTabOffset + 1;
            } else {
                target += wrapperOffset - activeTabOffset;
            }
            return target;
        }
        return target;
    }

    _setBtnStyle(prev: boolean, next: boolean) {
        if (this.prevBtn && this.nextBtn) {
            const cls = 'disabled';
            this.prevBtn.disabled = !prev;
            this.nextBtn.disabled = !next;
            if (prev) {
                dom.removeClass(this.prevBtn, cls);
            } else {
                dom.addClass(this.prevBtn, cls);
            }
            if (next) {
                dom.removeClass(this.nextBtn, cls);
            } else {
                dom.addClass(this.nextBtn, cls);
            }
        }
    }

    setSlideBtn() {
        const { tabPosition } = this.props;

        // TEMP: 这里会受 Animate 影响，re-render 过程中 this.nav 实际上指向的是上次的 tabList 元素，建议暂时关闭 animation 解决
        const navWH = getOffsetWH(this.nav, tabPosition);
        const wrapperWH = getOffsetWH(this.wrapper, tabPosition);
        // 这里统一向下取整再做比较，否则会因为小数点精度问题导致无法对齐
        const minOffset = Math.floor(wrapperWH - navWH);
        const offset = Math.floor(this.offset);
        let next;
        let prev;
        if (minOffset >= 0 || navWH <= wrapperWH) {
            next = false;
            prev = false;
            this.setOffset(0, false); // no need to check slide again since this call is invoked from inside setSlideBtn
        } else if (offset < 0 && offset <= minOffset) {
            prev = true;
            next = false;
        } else if (offset >= 0) {
            prev = false;
            next = true;
        } else {
            prev = true;
            next = true;
        }

        if ((prev || next) !== this.state.showBtn) {
            this.setState({
                showBtn: prev || next,
            });
        } else {
            this._setBtnStyle(prev, next);
        }
    }

    getDropdownItems({ excessMode, tabs }: NavProps) {
        if (excessMode !== 'dropdown') {
            return;
        }

        const wrapperWidth = this.wrapper.offsetWidth;
        const childNodes = this.nav.childNodes;

        let index;
        let tabsWidth = 0;
        for (index = 0; index < tabs.length; index++) {
            const childNode = childNodes[index];
            if (childNode instanceof HTMLElement) {
                // 使用类型保护
                tabsWidth += childNode.offsetWidth;
                if (tabsWidth > wrapperWidth) {
                    break;
                }
            }
        }

        if (index === tabs.length) {
            this.setState({
                dropdownTabs: [],
            });
        } else {
            this.setState({
                dropdownTabs: tabs,
            });
        }
    }

    removeTab = (key: string, e: React.MouseEvent<HTMLElement>) => {
        e && e.stopPropagation(); // stop bubble, so that it won't trigger upstream listener
        this.props.onClose?.(key);
    };

    debounceSetSideBtn = () => {
        clearTimeout(this.slideTimer);
        this.slideTimer = setTimeout(() => {
            this.setSlideBtn();
        }, 100);
    };

    onScroll = () => {
        // 每次滚动时更新btn状态
        this.debounceSetSideBtn();
    };

    onCloseKeyDown = (key: string, e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === KEYCODE.ENTER) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onClose?.(key);
        }
    };

    defaultTabTemplateRender = (
        key: string,
        { title, closeable }: { title: string; closeable: boolean }
    ) => {
        const { locale, prefix } = this.props;
        const tail = closeable ? (
            <Icon
                aria-label={
                    typeof locale?.closeAriaLabel === 'string' ? locale.closeAriaLabel : undefined
                }
                type="close"
                tabIndex={0}
                onKeyDown={e => this.onCloseKeyDown(key, e)}
                onClick={e => this.removeTab(key, e)}
                className={`${prefix}tabs-tab-close`}
            />
        ) : null;
        return (
            <div className={`${prefix}tabs-tab-inner`}>
                {title}
                {tail}
            </div>
        );
    };

    renderTabList(props: NavProps, hideAdd: boolean) {
        const { prefix, tabs, activeKey, tabRender, showAdd, onAdd, addIcon } = props;
        const tabTemplateFn = tabRender || this.defaultTabTemplateRender;

        const rst = [];
        React.Children.forEach(tabs, child => {
            const { disabled, className, onClick, onMouseEnter, onMouseLeave, style } = child.props;

            const active = activeKey === child.key;
            const cls = classnames(
                {
                    [`${prefix}tabs-tab`]: true,
                    disabled,
                    active,
                },
                className
            );

            let events = {};

            if (!disabled) {
                events = {
                    onClick: this.onNavItemClick.bind(this, child.key, onClick),
                    onMouseEnter: this.onNavItemMouseEnter.bind(this, child.key, onMouseEnter),
                    onMouseLeave: this.onNavItemMouseLeave.bind(this, child.key, onMouseLeave),
                };
            }

            const dataProps = obj.pickAttrsWith(child.props, 'data-');

            rst.push(
                <li
                    {...dataProps}
                    role="tab"
                    key={child.key}
                    ref={active ? this.activeTabRefHandler : null}
                    aria-hidden={disabled ? 'true' : 'false'}
                    aria-selected={active ? 'true' : 'false'}
                    tabIndex={active ? 0 : -1}
                    className={cls}
                    style={style}
                    {...events}
                >
                    {child.key ? tabTemplateFn(child.key, child.props) : null}
                </li>
            );
        });

        if (!hideAdd && showAdd) {
            rst.push(
                <li
                    role="button"
                    className={`${prefix}tabs-tab ${prefix}tabs-add`}
                    onClick={onAdd}
                    key="add"
                >
                    <div className={`${prefix}tabs-tab-inner`}>
                        {addIcon ? addIcon : <Icon type="add" />}
                    </div>
                </li>
            );
        }
        return rst;
    }

    computeExtraWidth() {
        if (this.navbar && this.navbar.childNodes.length === 2) {
            const firstChild = this.navbar.childNodes[0] as HTMLElement;
            const secondChild = this.navbar.childNodes[1] as HTMLElement;
            secondChild.style.marginRight = window.getComputedStyle(firstChild).width;
        }
    }

    scrollToActiveTab = () => {
        if (
            this.activeTab &&
            this.props.excessMode &&
            ['slide', 'dropdown'].includes(this.props.excessMode)
        ) {
            const activeTabWH = getOffsetWH(this.activeTab);
            const wrapperWH = getOffsetWH(this.wrapper);
            const activeTabOffset = getOffsetLT(this.activeTab);
            const wrapperOffset = getOffsetLT(this.wrapper);
            const target = this.offset;

            if (
                activeTabOffset + activeTabWH > wrapperOffset + wrapperWH + 1 ||
                activeTabOffset < wrapperOffset
            ) {
                this.setOffset(this.offset + wrapperOffset - activeTabOffset, true, true);
                return;
            }
            this.setOffset(target, true, true);
        }
    };

    onPrevClick = () => {
        const wrapperWH = getOffsetWH(this.wrapper);
        this.setOffset(this.offset + wrapperWH, true, false);
    };

    onNextClick = () => {
        const wrapperWH = getOffsetWH(this.wrapper);
        this.setOffset(this.offset - wrapperWH, true, false);
    };

    onNavItemClick(
        key: string,
        callback: (key: string, e: React.MouseEvent<HTMLElement>) => any,
        e: React.MouseEvent<HTMLElement>
    ) {
        this.props.onTriggerEvent(triggerEvents.CLICK, key);
        if (callback) {
            return callback(key, e);
        }
    }

    onSelectMenuItem = (keys: string[]) => {
        const { onTriggerEvent, triggerType } = this.props;
        if (triggerType) {
            onTriggerEvent(triggerType, keys[0]);
        }
    };

    onNavItemMouseEnter(
        key: string,
        callback: (key: string, e: React.MouseEvent<HTMLElement>) => any,
        e: React.MouseEvent<HTMLElement>
    ) {
        this.props.onTriggerEvent(triggerEvents.HOVER, key);
        if (callback) {
            return callback(key, e);
        }
    }

    onNavItemMouseLeave(
        key: string,
        callback: (key: string, e: React.MouseEvent<HTMLElement>) => any,
        e: React.MouseEvent<HTMLElement>
    ) {
        if (callback) {
            return callback(key, e);
        }
    }

    onWindowResized = () => {
        if (this.updateTimer) {
            clearTimeout(this.updateTimer);
        }

        this.updateTimer = setTimeout(() => {
            this.setSlideBtn();
            this.getDropdownItems(this.props);
        }, 100);
    };

    getIcon(type: IconType) {
        const { prefix, icons, rtl } = this.props;
        const iconType = iconTypeMap[type];
        let icon = <Icon type={iconType} rtl={rtl} className={`${prefix}tab-icon-${type}`} />;
        if (icons && icons[type]) {
            const customIcon = icons[type];
            if (typeof customIcon === 'string') {
                icon = <Icon rtl={rtl} type={customIcon} />;
            } else if (React.isValidElement(customIcon)) {
                icon = customIcon;
            }
        }

        return icon;
    }

    renderDropdownTabs(tabs: React.ReactElement[] = []) {
        if (!tabs.length) {
            return null;
        }

        const { prefix, activeKey, triggerType, popupProps, rtl } = this.props;
        const dropdownIcon = this.getIcon('dropdown');

        const trigger = <button className={`${prefix}tabs-btn-down`}>{dropdownIcon}</button>;

        return (
            <Popup
                key="down"
                rtl={rtl}
                triggerType={triggerType}
                trigger={trigger}
                container={(target: HTMLElement) => target.parentNode}
                className={`${prefix}tabs-bar-popup`}
                {...popupProps}
            >
                <Menu
                    rtl={rtl}
                    selectedKeys={activeKey ? [activeKey] : []}
                    onSelect={this.onSelectMenuItem}
                    selectMode="single"
                >
                    {tabs.map(tab => {
                        const { disabled, onClick, onMouseEnter, onMouseLeave } = tab.props;
                        let events = {};
                        if (!disabled) {
                            events = {
                                onClick: this.onNavItemClick.bind(this, tab.key, onClick),
                                onMouseEnter: this.onNavItemMouseEnter.bind(
                                    this,
                                    tab.key,
                                    onMouseEnter
                                ),
                                onMouseLeave: this.onNavItemMouseLeave.bind(
                                    this,
                                    tab.key,
                                    onMouseLeave
                                ),
                            };
                        }
                        return (
                            <Menu.Item key={tab.key} {...events}>
                                {tab.props.title}
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Popup>
        );
    }

    navRefHandler = (ref: HTMLUListElement | AnimateInstanceType | null) => {
        const domNode = findDOMNode(ref);
        if (domNode instanceof HTMLUListElement) {
            this.nav = domNode;
        }
    };

    wrapperRefHandler = (ref: HTMLDivElement) => {
        this.wrapper = ref;
    };

    scrollerRefHandler = (ref: HTMLDivElement) => {
        this.scroller = ref;
    };

    navbarRefHandler = (ref: HTMLDivElement) => {
        this.navbar = ref;
    };

    activeTabRefHandler = (ref: HTMLLIElement) => {
        this.activeTab = ref;
    };

    prevBtnHandler = (ref: HTMLButtonElement) => {
        const domNode = findDOMNode(ref);
        if (domNode instanceof HTMLButtonElement) {
            this.prevBtn = domNode;
        }
    };

    nextBtnHandler = (ref: HTMLButtonElement | null) => {
        const domNode = findDOMNode(ref);
        if (domNode instanceof HTMLButtonElement) {
            this.nextBtn = domNode;
        }
    };

    render() {
        const {
            prefix,
            tabPosition,
            excessMode,
            extra,
            onKeyDown,
            animation,
            style,
            className,
            showAdd,
            onAdd,
            addIcon,
            rtl,
        } = this.props;
        const state = this.state;
        let nextButton;
        let prevButton;
        let restButton;

        const showNextPrev = state.showBtn;

        if (excessMode === 'dropdown' && showNextPrev && state.dropdownTabs.length) {
            restButton = this.renderDropdownTabs(state.dropdownTabs);
            prevButton = null;
            nextButton = null;
        } else if (showNextPrev) {
            const prevIcon = this.getIcon('prev');
            prevButton = (
                <button
                    onClick={this.onPrevClick}
                    className={`${prefix}tabs-btn-prev`}
                    ref={this.prevBtnHandler}
                    type="button"
                    key="prev"
                >
                    {prevIcon}
                </button>
            );

            const nextIcon = this.getIcon('next');

            nextButton = (
                <button
                    onClick={this.onNextClick}
                    className={`${prefix}tabs-btn-next`}
                    ref={this.nextBtnHandler}
                    type="button"
                    key="next"
                >
                    {nextIcon}
                </button>
            );
            restButton = null;
        } else {
            nextButton = null;
            prevButton = null;
            restButton = null;
        }

        const containerCls = classnames({
            [`${prefix}tabs-nav-container`]: true,
            [`${prefix}tabs-nav-container-scrolling`]: showNextPrev,
            [`${prefix}tabs-show-add`]: showAdd,
        });

        const hasExtra = !!restButton || !!prevButton || !!nextButton; //  !! 将**转换为 boolean 类型
        const navCls = `${prefix}tabs-nav`;
        const tabList = this.renderTabList(this.props, hasExtra);
        const wrapCls = classnames({
            [`${prefix}tabs-nav-wrap`]: true,
            [`${prefix}tabs-nav-has-add`]: showAdd,
        });

        const container = (
            <div className={containerCls} onKeyDown={onKeyDown} key="nav-container">
                <div className={`${prefix}tabs-nav-wrap`} ref={this.wrapperRefHandler}>
                    <div
                        className={`${prefix}tabs-nav-scroll`}
                        ref={this.scrollerRefHandler}
                        onScroll={this.onScroll}
                    >
                        {animation ? (
                            <Animate
                                role="tablist"
                                aria-multiselectable={false}
                                component="ul"
                                className={navCls}
                                animation={navCls}
                                singleMode={false}
                                ref={this.navRefHandler}
                                afterAppear={this.initialSettings.bind(this)}
                            >
                                {tabList}
                            </Animate>
                        ) : (
                            <ul
                                role="tablist"
                                className={`${navCls} ${prefix}disable-animation`}
                                ref={this.navRefHandler}
                            >
                                {tabList}
                            </ul>
                        )}
                    </div>
                </div>
                {showAdd && hasExtra ? (
                    <div className={`${navCls}-operations`}>
                        {prevButton}
                        {nextButton}
                        {restButton}
                        <li
                            className={`${prefix}tabs-tab ${prefix}tabs-add`}
                            onClick={onAdd}
                            key="add"
                        >
                            <div className={`${prefix}tabs-tab-inner`}>
                                {addIcon ? addIcon : <Icon type="add" />}
                            </div>
                        </li>
                    </div>
                ) : (
                    [prevButton, nextButton, restButton]
                )}
            </div>
        );

        const navChildren = [container];

        if (extra) {
            const extraProps = {
                className: `${prefix}tabs-nav-extra`,
                key: 'nav-extra',
            };
            if (tabPosition === 'top' || tabPosition === 'bottom') {
                const style = rtl ? floatLeft : floatRight;
                navChildren.unshift(
                    <div {...extraProps} style={style}>
                        {extra}
                    </div>
                );
            } else {
                navChildren.push(<div {...extraProps}>{extra}</div>);
            }
        }

        const navbarCls = classnames(`${prefix}tabs-bar`, className);

        return (
            <div className={navbarCls} style={style} ref={this.navbarRefHandler}>
                {navChildren}
            </div>
        );
    }
}

export default Nav;
