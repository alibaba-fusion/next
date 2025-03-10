import React, { type MouseEvent, type KeyboardEvent, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import Animate from '../../animate';
import type { NavProps } from '../types';
declare const iconTypeMap: {
    readonly dropdown: "arrow-down";
    readonly prev: "arrow-left";
    readonly next: "arrow-right";
};
interface NavState {
    showBtn: boolean;
    dropdownTabs: ReactElement[];
}
type AnimateInstanceType = InstanceType<typeof Animate>;
declare class Nav extends React.Component<NavProps, NavState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        animation: PropTypes.Requireable<boolean>;
        activeKey: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        excessMode: PropTypes.Requireable<string>;
        extra: PropTypes.Requireable<any>;
        tabs: PropTypes.Requireable<object>;
        tabPosition: PropTypes.Requireable<string>;
        tabRender: PropTypes.Requireable<(...args: any[]) => any>;
        triggerType: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        onTriggerEvent: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        icons: PropTypes.Requireable<object>;
    };
    scroller: HTMLElement;
    scrollTimer: number;
    nav: HTMLUListElement;
    wrapper: HTMLDivElement;
    navbar: HTMLElement;
    activeTab: HTMLLIElement | null;
    prevBtn: HTMLButtonElement | null;
    nextBtn: HTMLButtonElement | null;
    slideTimer: number;
    updateTimer: number;
    constructor(props: NavProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: NavProps): void;
    componentWillUnmount(): void;
    /**
     * 实时获取滚动位置
     */
    get offset(): number;
    initialSettings(): void;
    /**
     * The key method about move
     * @param target - Position to slide to
     * @param checkSlideBtn - Need to check the slide button status or not
     * @param setActive - Need to check the active status or not
     */
    setOffset(target: number, checkSlideBtn?: boolean, setActive?: boolean): void;
    _adjustTarget({ wrapperOffset, wrapperWH, activeTabWH, activeTabOffset, rtl, target, }: {
        wrapperOffset: number;
        wrapperWH: number;
        activeTabWH: number;
        activeTabOffset: number;
        rtl?: boolean;
        target: number;
    }): number;
    _setBtnStyle(prev: boolean, next: boolean): void;
    setSlideBtn(): void;
    getDropdownItems({ excessMode, tabs }: NavProps): void;
    removeTab: (key: string, e: MouseEvent<HTMLElement>) => void;
    debounceSetSideBtn: () => void;
    onScroll: () => void;
    onCloseKeyDown: (key: string, e: KeyboardEvent<HTMLElement>) => void;
    defaultTabTemplateRender: (key: string, { title, closeable }: {
        title: string;
        closeable: boolean;
    }) => React.JSX.Element;
    renderTabList(props: NavProps, hideAdd: boolean): React.JSX.Element[];
    computeExtraWidth(): void;
    scrollToActiveTab: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    onNavItemClick(key: string, callback: (key: string, e: MouseEvent<HTMLElement>) => void, e: MouseEvent<HTMLElement>): void;
    onSelectMenuItem: (keys: string[]) => void;
    onNavItemMouseEnter(key: string, callback: (key: string, e: MouseEvent<HTMLElement>) => void, e: MouseEvent<HTMLElement>): void;
    onNavItemMouseLeave(key: string, callback: (key: string, e: MouseEvent<HTMLElement>) => void, e: MouseEvent<HTMLElement>): void;
    onWindowResized: () => void;
    getIcon(type: keyof typeof iconTypeMap): React.JSX.Element;
    renderDropdownTabs(tabs?: ReactElement[]): React.JSX.Element | null;
    navRefHandler: (ref: HTMLUListElement | AnimateInstanceType | null) => void;
    wrapperRefHandler: (ref: HTMLDivElement) => void;
    scrollerRefHandler: (ref: HTMLDivElement) => void;
    navbarRefHandler: (ref: HTMLDivElement) => void;
    activeTabRefHandler: (ref: HTMLLIElement) => void;
    prevBtnHandler: (ref: HTMLButtonElement) => void;
    nextBtnHandler: (ref: HTMLButtonElement | null) => void;
    render(): React.JSX.Element;
}
export default Nav;
