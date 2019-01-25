import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import Overlay from '../../overlay';
import Menu from '../../menu';
import Animate from '../../animate';
import { events } from '../../util';
import { triggerEvents, getOffsetLT, getOffsetWH, isTransformSupported } from './utils';

const noop = () => {};
const floatRight = { float: 'right' };
const floatLeft = { float: 'left' };
const { Popup } = Overlay;

class Nav extends React.Component {
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
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            next: false,
            prev: false,
            dropdownTabs: [],
        };
        this.offset = 0;
    }

    componentDidMount() {
        this.setSlideBtn();
        this.getDropdownItems(this.props);

        events.on(window, 'resize', this.onWindowResized);
    }

    componentDidUpdate() {
        const ctx = this;

        // 此处通过延时处理，屏蔽动画带来的定位不准确问题（由于要支持ie9，因此无法使用transitionend）
        clearTimeout(ctx.scrollTimer);
        ctx.scrollTimer = setTimeout(() => {
            ctx.scrollToActiveTab();
        }, 400);

        clearTimeout(ctx.slideTimer);
        ctx.slideTimer = setTimeout(() => {
            ctx.setSlideBtn();
        }, 200);
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.onWindowResized);
    }

    /**
     * The key method about move
     * @param {number} target position to slide to
     * @param {bool} checkSlideBtn need to check the slide button status or not
     * @param {bool} setActive need to check the active status or not
     */
    setOffset(target, checkSlideBtn = true, setActive = true) {
        const { tabPosition } = this.props;
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

            if ((wrapperOffset + wrapperWH) < (activeTabOffset + activeTabWH) && activeTabOffset < (wrapperOffset + wrapperWH)) {
                target -= (activeTabOffset + activeTabWH) - (wrapperOffset + wrapperWH);
            }
        }

        if (this.offset !== target) {
            this.offset = target;

            let navOffset = {};
            const navStyle = this.nav.style;

            const canTransform = isTransformSupported(navStyle);
            if (tabPosition === 'left' || tabPosition === 'right') {
                navOffset = canTransform ? {
                    value: `translate3d(0, ${target}px, 0)`,
                } : {
                    name: 'top',
                    value: `${target}px`,
                };
            } else {
                navOffset = canTransform ? {
                    value: `translate3d(${target}px, 0, 0)`,
                } : {
                    name: 'left',
                    value: `${target}px`,
                };
            }

            if (canTransform) {
                Object.assign(navStyle, {
                    transform: navOffset.value,
                    webkitTransform: navOffset.value,
                    mozTransform: navOffset.value,
                });
            } else {
                navStyle[navOffset.name] = navOffset.value;
            }

            if (checkSlideBtn) {
                this.setSlideBtn();
            }
        }
    }

    setSlideBtn() {
        const { tabPosition } = this.props;

        // TEMP: 这里会受 Animate 影响，re-render 过程中 this.nav 实际上指向的是上次的 tabList 元素，建议暂时关闭 animation 解决
        const navWH = getOffsetWH(this.nav, tabPosition);
        const wrapperWH = getOffsetWH(this.wrapper, tabPosition);
        const navbarWH = getOffsetWH(this.navbar, tabPosition);
        const minOffset = wrapperWH - navWH;

        let next;
        let prev;
        if (minOffset >= 0 || navWH <= navbarWH) {
            next = false;
            prev = false;
            this.setOffset(0, false); // no need to check slide again since this call is invoked from inside setSlideBtn
        } else if (this.offset < 0 && this.offset <= minOffset) {
            prev = true;
            next = false;
        } else if (this.offset >= 0) {
            prev = false;
            next = true;
        } else {
            prev = true;
            next = true;
        }

        if (next !== this.state.next || prev !== this.state.prev) {
            this.setState({
                next,
                prev,
            });
        }
    }

    getDropdownItems({ excessMode, tabs }) {
        if (excessMode !== 'dropdown') {
            return;
        }

        const wrapperWidth = this.wrapper.offsetWidth;
        const childNodes = this.nav.childNodes;

        let index;
        let tabsWidth = 0;
        for (index = 0; index < tabs.length; index++) {
            tabsWidth += childNodes[index].offsetWidth;
            if (tabsWidth > wrapperWidth) {
                break;
            }
        }

        if (index > 1) {
            index = index - 1;
            this.setState({
                dropdownTabs: tabs.slice(index),
            });
        }
    }

    removeTab = (key, e) => {
        e && e.stopPropagation(); // stop bubble, so that it won't trigger upstream listener
        this.props.onClose(key);
    }

    defaultTabTemplateRender = (key, { prefix, title, closeable }) => {
        const tail = closeable ? <Icon type="close" onClick={(e) => this.removeTab(key, e)} className={`${prefix}tabs-tab-close`} /> : null;
        return <div className={`${this.props.prefix}tabs-tab-inner`}>{title}{tail}</div>;
    }

    renderTabList(props) {
        const { prefix, tabs, activeKey, tabRender } = props;
        const tabTemplateFn = tabRender || this.defaultTabTemplateRender;

        const rst = [];
        React.Children.forEach(tabs, (child) => {
            const { disabled, className, onClick, onMouseEnter, onMouseLeave, style } = child.props;
            /*eslint-disable eqeqeq*/
            const active = activeKey == child.key;
            const cls = classnames({
                [`${prefix}tabs-tab`]: true,
                disabled,
                active,
            }, className);

            let events = {};

            if (!disabled) {
                events = {
                    onClick: this.onNavItemClick.bind(this, child.key, onClick),
                    onMouseEnter: this.onNavItemMouseEnter.bind(this, child.key, onMouseEnter),
                    onMouseLeave: this.onNavItemMouseLeave.bind(this, child.key, onMouseLeave),
                };
            }

            rst.push(
                <div
                    role="tab"
                    key={child.key}
                    ref={active ? this.activeTabRefHandler : null}
                    aria-disabled={disabled ? 'true' : 'false'}
                    aria-selected={active ? 'true' : 'false'}
                    className={cls}
                    style={style}
                    {...events}>{tabTemplateFn(child.key, child.props)}
                </div>
            );
        });
        return rst;
    }

    scrollToActiveTab = () => {
        if (!this.activeTab || this.props.excessMode !== 'slide') {
            return;
        }

        const activeTabWH = getOffsetWH(this.activeTab);
        const wrapperWH = getOffsetWH(this.wrapper);
        const activeTabOffset = getOffsetLT(this.activeTab);
        const wrapperOffset = getOffsetLT(this.wrapper);

        let target = this.offset;
        if (activeTabOffset >= (wrapperOffset + wrapperWH) || (activeTabOffset + activeTabWH) <= wrapperOffset) {
            return;
        }
        // if (activeTabOffset < wrapperOffset) {
        //     target += wrapperOffset - activeTabOffset;
        //     this.setOffset(target);
        // }
        if ((wrapperOffset + wrapperWH) < (activeTabOffset + activeTabWH)) {
            target -= (activeTabOffset + activeTabWH) - (wrapperOffset + wrapperWH);
            this.setOffset(target, true, false);
        }
    }

    onPrevClick = () => {
        const wrapperWH = getOffsetWH(this.wrapper);
        this.setOffset(this.offset + wrapperWH);
    }

    onNextClick = () => {
        const wrapperWH = getOffsetWH(this.wrapper);
        this.setOffset(this.offset - wrapperWH);
    }

    onNavItemClick(key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.CLICK, key);
        if (callback) {
            callback(key, e);
        }
    }

    onSelectMenuItem = (keys) => {
        const { onTriggerEvent, triggerType } = this.props;
        onTriggerEvent(triggerType, keys[0]);
    }

    onNavItemMouseEnter(key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.HOVER, key);
        if (callback) {
            callback(key, e);
        }
    }

    onNavItemMouseLeave(key, callback, e) {
        if (callback) {
            callback(key, e);
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
    }

    renderDropdownTabs(tabs = []) {
        if (!tabs.length) {
            return null;
        }

        const { prefix, activeKey, triggerType, popupProps } = this.props;
        const trigger = (
            <button className={`${prefix}tabs-btn-down`}>
                <Icon type="arrow-down" />
            </button>
        );

        return (
            <Popup triggerType={triggerType} trigger={trigger} container={target => target.parentNode} {...popupProps}>
                <Menu selectedKeys={[activeKey]} onSelect={this.onSelectMenuItem} selectMode="single">
                    {tabs.map(tab => {
                        const { disabled, onClick, onMouseEnter, onMouseLeave } = tab.props;
                        let events = {};
                        if (!disabled) {
                            events = {
                                onClick: this.onNavItemClick.bind(this, tab.key, onClick),
                                onMouseEnter: this.onNavItemMouseEnter.bind(this, tab.key, onMouseEnter),
                                onMouseLeave: this.onNavItemMouseLeave.bind(this, tab.key, onMouseLeave),
                            };
                        }
                        return <Menu.Item key={tab.key} {...events}>{tab.props.title}</Menu.Item>;
                    })}
                </Menu>
            </Popup>
        );
    }

    navRefHandler = ref => {
        this.nav = findDOMNode(ref);
    }

    wrapperRefHandler = ref => {
        this.wrapper = ref;
    }

    navbarRefHandler = ref => {
        this.navbar = ref;
    }

    activeTabRefHandler = ref => {
        this.activeTab = ref;
    }

    render() {
        const { prefix, tabPosition, excessMode, extra, onKeyDown, animation, style, className, rtl } = this.props;
        const state = this.state;

        let nextButton;
        let prevButton;
        let restButton;

        const showNextPrev = state.prev || state.next;

        if (excessMode === 'dropdown' && state.next && state.dropdownTabs.length) {
            restButton = this.renderDropdownTabs(state.dropdownTabs);
            prevButton = null;
            nextButton = null;
        } else if (showNextPrev) {
            const prevBtnCls = classnames({
                [`${prefix}tabs-btn-prev`]: 1,
                disabled: !state.prev,
            });
            const nextBtnCls = classnames({
                [`${prefix}tabs-btn-next`]: 1,
                disabled: !state.next,
            });

            prevButton = (
                <button
                    onClick={state.prev ? this.onPrevClick : noop}
                    className={prevBtnCls}>
                    <Icon type="arrow-left" />
                </button>
            );

            nextButton = (
                <button
                    onClick={state.next ? this.onNextClick : noop}
                    className={nextBtnCls}>
                    <Icon type="arrow-right" />
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
        });

        const navCls = `${prefix}tabs-nav`;
        const tabList = this.renderTabList(this.props);

        const container = (
            <div className={containerCls} key="nav-container">
                <div className={`${prefix}tabs-nav-wrap`} ref={this.wrapperRefHandler}>
                    <div className={`${prefix}tabs-nav-scroll`}>
                        {
                            animation ?
                                <Animate className={navCls} animation={navCls} singleMode={false} ref={this.navRefHandler}>{tabList}</Animate> :
                                <div className={navCls} ref={this.navRefHandler}>{tabList}</div>
                        }
                    </div>
                </div>
                {prevButton}
                {nextButton}
                {restButton}
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
                navChildren.unshift(<div {...extraProps} style={style}>{extra}</div>);
            } else {
                navChildren.push(<div {...extraProps}>{extra}</div>);
            }
        }

        const navbarCls = classnames({
            [`${prefix}tabs-bar`]: true,
        }, className);

        return (
            <div role="tablist" className={navbarCls} style={style} onKeyDown={onKeyDown} tabIndex="0" ref={this.navbarRefHandler}>
                {navChildren}
            </div>
        );
    }
}

export default Nav;
