import React, {
    Children,
    type ReactElement,
    type MouseEvent,
    type ReactNode,
    type UIEvent,
} from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, dom, events, obj } from '../util';
import Menu, { type ItemProps, type MenuProps } from '../menu';
import Overlay, { type PopupProps } from '../overlay';
import Input from '../input';

import zhCN from '../locale/zh-cn';
import DataStore from './data-store';
import VirtualList from '../virtual-list';
import { isSingle, filter, isNull, valueToSelectKey, getValueDataSource } from './util';
import type {
    BaseProps,
    DataSourceItem,
    NormalizedObjectItem,
    ObjectItem,
    VisibleChangeType,
} from './types';

const { Popup } = Overlay;
const { Item: MenuItem, Group: MenuGroup } = Menu;
const { noop, bindCtx, makeChain } = func;

function preventDefault(e: UIEvent) {
    e.preventDefault();
}

export interface BaseState {
    dataStore: DataStore;
    value?: DataSourceItem | DataSourceItem[];
    searchValue?: string;
    visible?: boolean;
    dataSource: NormalizedObjectItem[];
    width: number;
    highlightKey?: string | null;
    srReader?: ReactNode;
}

export default class Base<
    P extends BaseProps = BaseProps,
    S extends BaseState = BaseState,
> extends React.Component<P, S> {
    static propTypes = {
        prefix: PropTypes.string,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        value: PropTypes.any,
        defaultValue: PropTypes.any,
        placeholder: PropTypes.string,
        autoWidth: PropTypes.bool,
        label: PropTypes.node,
        hasClear: PropTypes.bool,
        state: PropTypes.oneOf(['error', 'loading', 'success', 'warning']),
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupContainer: PropTypes.any,
        popupClassName: PropTypes.any,
        popupStyle: PropTypes.object,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        popupContent: PropTypes.node,
        menuProps: PropTypes.object,
        filterLocal: PropTypes.bool,
        filter: PropTypes.func,
        defaultHighlightKey: PropTypes.string,
        highlightKey: PropTypes.string,
        onToggleHighlightItem: PropTypes.func,
        autoHighlightFirstItem: PropTypes.bool,
        useVirtual: PropTypes.bool,
        className: PropTypes.any,
        children: PropTypes.any,
        dataSource: PropTypes.array,
        itemRender: PropTypes.func,
        mode: PropTypes.string,
        notFoundContent: PropTypes.node,
        locale: PropTypes.object,
        rtl: PropTypes.bool,
        popupComponent: PropTypes.any,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        showDataSourceChildren: PropTypes.bool,
    };

    static defaultProps: BaseProps = {
        prefix: 'next-',
        size: 'medium',
        autoWidth: true,
        onChange: noop,
        onVisibleChange: noop,
        onToggleHighlightItem: noop,
        popupProps: {},
        filterLocal: true,
        filter: filter,
        itemRender: item => {
            return item.label || item.value;
        },
        locale: zhCN.Select,
        autoHighlightFirstItem: true,
        showDataSourceChildren: true,
        defaultHighlightKey: null,
    };
    dataStore: DataStore;
    selectDOM: HTMLElement;
    width: string | number;
    popupRef: HTMLDivElement;
    resizeTimeout: number;
    highlightTimer: number | undefined;
    menuRef: Menu | null;
    isAutoComplete: boolean;
    inputRef: Input;
    valueDataSource: ReturnType<typeof getValueDataSource>;

    constructor(props: P) {
        super(props);

        this.dataStore = new DataStore({
            filter: props.filter,
            filterLocal: props.filterLocal,
            showDataSourceChildren: props.showDataSourceChildren,
        });

        let value: BaseProps['value'] = 'value' in props ? props.value : props.defaultValue;

        // 多选情况下做 value 数组订正
        if (props.mode !== 'single' && value && !Array.isArray(value)) {
            value = [value];
        }

        this.state = {
            dataStore: this.dataStore,
            value,
            visible: 'visible' in props ? props.visible : props.defaultVisible,
            dataSource: this.setDataSource(this.props),
            width: 100,
            // highlightKey 应为 String 多选初始化只赋值受控 highlightKey/defaultHighlightKey
            highlightKey:
                'highlightKey' in props
                    ? props.highlightKey
                    : props.mode === 'single'
                      ? // FIXME 这里实现有些问题，假设 value 是 detailedValue 这里就是一个对象了
                        (props.value as string) ||
                        props.defaultHighlightKey ||
                        (props.defaultValue as string)
                      : props.defaultHighlightKey,
            srReader: '',
        } as S;

        bindCtx(this, [
            'handleMenuBodyClick',
            'handleVisibleChange',
            'focusInput',
            'beforeOpen',
            'beforeClose',
            'afterClose',
            'handleResize',
        ]);
    }

    componentDidMount() {
        // overlay 还没有完成 mount，所以需要滞后同步宽度
        setTimeout(() => this.syncWidth(), 0);

        events.on(window, 'resize', this.handleResize);
    }

    componentDidUpdate(prevProps: P, prevState: S) {
        if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
            this.syncWidth();
        }
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
    }

    /**
     * Calculate and set width of popup menu
     */
    syncWidth() {
        const { popupStyle, popupProps } = this.props;
        if (
            (popupStyle && 'width' in popupStyle) ||
            (popupProps && popupProps.style && 'width' in popupProps.style)
        ) {
            return;
        }

        const width = dom.getStyle(this.selectDOM, 'width');
        if (width && this.width !== width) {
            this.width = width;

            if (this.shouldAutoWidth()) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(() => {
                    if (this.popupRef) {
                        dom.setStyle(this.popupRef, 'width', this.width);
                        return;
                    }
                }, 0);
            }
        }
    }

    handleResize() {
        clearTimeout(this.resizeTimeout);
        if (this.state.visible) {
            this.resizeTimeout = window.setTimeout(() => {
                this.syncWidth();
            }, 200);
        }
    }

    /**
     * Get structured dataSource, for cache
     */
    setDataSource(props: P) {
        const { dataSource, children } = props;

        // children is higher priority then dataSource
        if (Children.count(children)) {
            return this.dataStore.updateByDS(children!, true);
        } else if (Array.isArray(dataSource)) {
            return this.dataStore.updateByDS(dataSource, false);
        }
        return [];
    }

    /**
     * Set popup visible
     */
    setVisible(visible: boolean, type?: VisibleChangeType) {
        // disabled 状态下只允许关闭不允许打开
        if ((this.props.disabled && visible) || this.state.visible === visible) {
            return;
        }

        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }

        this.props.onVisibleChange!(visible, type);
    }

    setFirstHightLightKeyForMenu(searchValue?: unknown) {
        // 判断 value/highlightKey 解决受控后，默认高亮第一个元素问题。(当搜索值时，搜索后应执行默认选择第一个元素)
        const { highlightKey } = this.state;
        if (!this.props.autoHighlightFirstItem) {
            return;
        }

        // 设置高亮 item key
        if (
            this.dataStore.getMenuDS().length &&
            this.dataStore.getEnableDS().length &&
            (!highlightKey || searchValue)
        ) {
            const highlightKey = `${this.dataStore.getEnableDS()[0].value}`;
            this.setState({
                highlightKey,
            });
            this.props.onToggleHighlightItem!(highlightKey, 'autoFirstItem');
        }

        // 当有搜索值且搜索条件与 dataSource 不匹配时 (搜索条件不满足不会出现可选择的列表，所以高亮 key 应为 null)
        if (searchValue && !this.dataStore.getEnableDS().length) {
            this.setState({
                highlightKey: null,
            });
            this.props.onToggleHighlightItem!(null, 'highlightKeyToNull');
        }
    }

    handleChange(value: BaseProps['value'], ...args: [unknown, (ObjectItem | ObjectItem[])?]) {
        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        }
        this.props.onChange!(value, ...args);
    }

    /**
     * Handle Menu body click
     * @param e - click event
     */
    handleMenuBodyClick() {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }
    }

    /**
     * Toggle highlight MenuItem
     * @param dir - -1: up, 1: down
     */
    toggleHighlightItem(dir: number) {
        if (!this.state.visible) {
            this.setVisible(true, 'enter');
            return;
        }

        const maxCount = this.dataStore.getEnableDS().length;
        // When there is no enabled item
        if (!maxCount) {
            return false;
        }

        let { highlightKey } = this.state;
        let highlightIndex = -1;

        // find previous highlight index
        highlightKey !== null &&
            this.dataStore.getEnableDS().some((item, index) => {
                if (`${item.value}` === highlightKey) {
                    highlightIndex = index;
                }
                return highlightIndex > -1;
            });

        // toggle highlight index
        highlightIndex += dir;
        if (highlightIndex < 0) {
            highlightIndex = maxCount - 1;
        }
        if (highlightIndex >= maxCount) {
            highlightIndex = 0;
        }

        // get highlight key
        const highlightItem = this.dataStore.getEnableDS()[highlightIndex];
        highlightKey = highlightItem ? `${highlightItem.value}` : null;

        this.setState({ highlightKey, srReader: highlightItem.label });

        this.scrollMenuIntoView();

        return highlightItem;
    }

    // scroll into focus item
    scrollMenuIntoView() {
        const { prefix } = this.props;

        clearTimeout(this.highlightTimer);
        this.highlightTimer = window.setTimeout(() => {
            try {
                const menuNode = findDOMNode(this.menuRef) as HTMLElement;
                const itemNode = menuNode.querySelector<
                    HTMLElement & { scrollIntoViewIfNeeded?: () => void }
                >(`.${prefix}select-menu-item.${prefix}focused`);
                itemNode && itemNode.scrollIntoViewIfNeeded && itemNode.scrollIntoViewIfNeeded();
            } catch (ex) {
                // I don't care...
            }
        });
    }

    /**
     * render popup menu header
     */
    renderMenuHeader() {
        const { menuProps } = this.props;

        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }

        return null;
    }

    handleSelect() {}

    /**
     * 防止 onBlur/onFocus 抖动
     */

    handleMouseDown = (e: MouseEvent<HTMLElement>) => {
        if (!this.props.popupAutoFocus) {
            preventDefault(e);
        }
    };

    /**
     * abstract
     */
    handleMenuSelect(...rest: unknown[]) {}

    /**
     * abstract
     */
    handleItemClick(...rest: unknown[]) {}

    /**
     * abstract
     */
    useDetailValue() {
        return false;
    }

    /**
     * abstract
     */
    handleVisibleChange(...rest: unknown[]) {}

    /**
     * abstract
     */
    renderSelect() {
        return <div />;
    }

    /**
     * render popup children
     * @param props -
     */
    renderMenu() {
        const { prefix, mode, locale, notFoundContent, useVirtual, menuProps } = this.props;
        const { dataSource, highlightKey } = this.state;
        const value = this.state.value;
        let selectedKeys: unknown[];

        if (isNull(value) || (value as DataSourceItem[]).length === 0 || this.isAutoComplete) {
            selectedKeys = [];
        } else if (isSingle(mode)) {
            selectedKeys = [valueToSelectKey(value as DataSourceItem)];
        } else {
            selectedKeys = ([] as DataSourceItem[])
                .concat(value as DataSourceItem[])
                .map(n => valueToSelectKey(n));
        }

        let children: ReactElement | (ReactElement | null)[] = this.renderMenuItem(dataSource!);

        const menuClassName = classNames({
            [`${prefix}select-menu`]: true,
            [`${prefix}select-menu-empty`]: !children || !children.length,
        });

        if (!children || !children.length) {
            children = (
                <span className={`${prefix}select-menu-empty-content`}>
                    {notFoundContent || locale!.notFoundContent}
                </span>
            );
        }

        const customProps: Readonly<MenuProps> = {
            ...menuProps,
            children,
            role: 'listbox',
            selectedKeys,
            focusedKey: highlightKey as string,
            focusable: false,
            selectMode: isSingle(mode) ? 'single' : 'multiple',
            onSelect: this.handleMenuSelect,
            onItemClick: this.handleItemClick,
            header: this.renderMenuHeader(),
            onClick: this.handleMenuBodyClick,
            onMouseDown: this.handleMouseDown,
            className: menuClassName,
        };
        const menuStyle = this.shouldAutoWidth() ? { width: '100%' } : { minWidth: this.width };

        return useVirtual && (children as ReactElement[]).length > 10 ? (
            <div
                className={`${prefix}select-menu-wrapper`}
                style={{ position: 'relative', ...menuStyle }}
                {...obj.pickProps(['onScroll'], customProps)}
            >
                <VirtualList
                    itemsRenderer={(items, ref) => {
                        return (
                            <Menu
                                ref={c => {
                                    ref(c);
                                    this.menuRef = c;
                                }}
                                // @ts-expect-error 待 MenuProps 修正
                                flatenContent
                                {...obj.pickOthers(['onScroll'], customProps)}
                            >
                                {items}
                            </Menu>
                        );
                    }}
                >
                    {children}
                </VirtualList>
            </div>
        ) : (
            <Menu {...customProps} style={menuStyle} />
        );
    }

    /**
     * render menu item
     */
    renderMenuItem(dataSource: NormalizedObjectItem[]): (ReactElement | null)[] {
        const { prefix, itemRender, showDataSourceChildren } = this.props;
        // If it has.
        let searchKey: string | undefined;
        if (this.isAutoComplete) {
            // In AutoComplete, value is the searchKey
            searchKey = this.state.value as string;
        } else {
            searchKey = this.state.searchValue;
        }

        return dataSource.map((item, index) => {
            if (!item) {
                return null;
            }
            if (Array.isArray(item.children) && showDataSourceChildren) {
                return (
                    <MenuGroup key={index} label={item.label}>
                        {this.renderMenuItem(item.children)}
                    </MenuGroup>
                );
            } else {
                const itemProps: ItemProps = {
                    role: 'option',
                    className: `${prefix}select-menu-item`,
                    disabled: item.disabled,
                };

                if ('title' in item) {
                    itemProps.title = item.title!;
                }

                return (
                    <MenuItem key={item.value as string} {...itemProps}>
                        {itemRender!(item, searchKey)}
                    </MenuItem>
                );
            }
        });
    }

    saveSelectRef = (ref: HTMLElement | null) => {
        this.selectDOM = findDOMNode(ref) as HTMLElement;
    };

    saveInputRef = (ref: Input) => {
        // @ts-expect-error 待 Input 修正
        if (ref && ref.getInstance()) {
            // @ts-expect-error 待 Input 修正
            this.inputRef = ref.getInstance();
        }
    };

    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    focusInput() {
        // @ts-expect-error 待 Input 修正
        this.inputRef.focus(undefined, undefined, true);
    }

    focus(...args: unknown[]) {
        // @ts-expect-error 待 Input 修正
        this.inputRef.focus(...args);
    }

    beforeOpen() {
        if (this.props.mode === 'single') {
            this.setFirstHightLightKeyForMenu();
        }
        this.syncWidth();
    }

    beforeClose() {}

    afterClose() {}

    savePopupRef = (ref: HTMLDivElement) => {
        this.popupRef = ref;
    };

    shouldAutoWidth() {
        if (this.props.popupComponent) {
            return false;
        }

        return this.props.autoWidth;
    }

    render(props?: P) {
        const {
            prefix,
            mode,
            popupProps,
            popupContainer,
            popupClassName,
            popupStyle,
            popupContent,
            canCloseByTrigger,
            followTrigger,
            cache,
            popupComponent,
            isPreview,
            renderPreview,
            style,
            className,
            valueRender,
        } = props!;

        const cls = classNames(
            {
                [`${prefix}select-auto-complete-menu`]: !popupContent && this.isAutoComplete,
                [`${prefix}select-${mode}-menu`]: !popupContent && !!mode,
            },
            popupClassName || popupProps!.className
        );

        if (isPreview) {
            if (this.isAutoComplete) {
                return (
                    <Input
                        style={style}
                        className={className}
                        isPreview={isPreview}
                        renderPreview={renderPreview}
                        value={this.state.value as string}
                    />
                );
            } else {
                const value = this.state.value;
                let valueDS: DataSourceItem | DataSourceItem[] = this.state.value;

                if (!this.useDetailValue()) {
                    if (value === this.valueDataSource.value) {
                        valueDS = this.valueDataSource.valueDS;
                    } else {
                        valueDS = getValueDataSource(
                            value,
                            this.valueDataSource.mapValueDS!,
                            this.dataStore.getMapDS()
                        ).valueDS;
                    }
                }

                if (typeof renderPreview === 'function') {
                    const previewCls = classNames({
                        [`${prefix}form-preview`]: true,
                        [className!]: !!className,
                    });
                    return (
                        <div style={style} className={previewCls}>
                            {renderPreview(valueDS, this.props)}
                        </div>
                    );
                } else {
                    const { fillProps } = this.props;
                    if (mode === 'single') {
                        const renderPreview = (valueDS: ObjectItem) => {
                            if (fillProps) {
                                return valueDS[fillProps];
                            } else if (valueRender) {
                                return valueRender(valueDS, this.props);
                            } else {
                                return valueDS.label;
                            }
                        };

                        return (
                            <Input
                                style={style}
                                className={className}
                                isPreview={isPreview}
                                value={
                                    valueDS ? (renderPreview(valueDS as ObjectItem) as string) : ''
                                }
                            />
                        );
                    } else {
                        return (
                            <Input
                                style={style}
                                className={className}
                                isPreview={isPreview}
                                value={(Array.isArray(valueDS) ? valueDS : [])
                                    .map(i => (i as ObjectItem).label)
                                    .join(', ')}
                            />
                        );
                    }
                }
            }
        }

        const _props: PopupProps = {
            triggerType: 'click',
            autoFocus: !!this.props.popupAutoFocus,
            cache: cache,
            // Put `popupProps` into here for covering above props.
            ...popupProps,
            //beforeOpen node not mount, afterOpen too slow.
            // from display:none to block, we may need to recompute width
            beforeOpen: makeChain(this.beforeOpen, popupProps!.beforeOpen),
            beforeClose: makeChain(this.beforeClose, popupProps!.beforeClose),
            afterClose: makeChain(this.afterClose, popupProps!.afterClose),
            canCloseByTrigger: canCloseByTrigger,
            followTrigger: followTrigger,
            visible: this.state.visible,
            onVisibleChange: this.handleVisibleChange,
            shouldUpdatePosition: true,
            container: popupContainer || popupProps!.container,
            className: cls,
            style: popupStyle || popupProps!.style,
        };

        if (popupProps!.v2) {
            delete _props.shouldUpdatePosition;
        }

        const Tag = popupComponent ? popupComponent : Popup;

        return (
            <Tag {..._props} trigger={this.renderSelect()}>
                {popupContent ? (
                    <div
                        className={`${prefix}select-popup-wrap`}
                        style={this.shouldAutoWidth() ? { width: this.width } : {}}
                        ref={this.savePopupRef}
                    >
                        {popupContent}
                    </div>
                ) : (
                    <div
                        className={`${prefix}select-spacing-tb`}
                        style={this.shouldAutoWidth() ? { width: this.width } : {}}
                        ref={this.savePopupRef}
                    >
                        {this.renderMenu()}
                    </div>
                )}
            </Tag>
        );
    }
}
