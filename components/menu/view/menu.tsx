import React, {
    Component,
    Children,
    cloneElement,
    type ReactElement,
    type CSSProperties,
    type ReactChild,
    type ReactFragment,
    type ReactPortal,
    type ReactNode,
    type FocusEvent,
    type MouseEvent,
    type KeyboardEvent,
} from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import SubMenu from './sub-menu';
import ConfigProvider from '../../config-provider';
import { func, obj, dom, events, KEYCODE, type ClassPropsWithDefault } from '../../util';
import {
    getWidth,
    normalizeToArray,
    isSibling,
    isAncestor,
    isAvailablePos,
    getFirstAvaliablelChildKey,
} from './util';
import type { ItemProps, K2N, MenuChildElement, MenuChildProps, MenuProps, P2N } from '../types';
import type MenuItem from './item';
import type SelectableItem from './selectable-item';

const { bindCtx } = func;
const { pickOthers, isNil } = obj;
const noop = () => {};
const MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';

const getIndicatorsItem = (
    items: ReactElement[],
    isPlaceholder: boolean,
    prefix = '',
    renderMore: MenuProps['renderMore']
) => {
    const moreCls = cx({
        [`${prefix}menu-more`]: true,
    });

    const style: CSSProperties = {};
    // keep placehold to get width
    if (isPlaceholder) {
        style.visibility = 'hidden';
        style.display = 'inline-block';
        // indicators which not in use, just display: none
    } else if (items && items.length === 0) {
        style.display = 'none';
        style.visibility = 'unset';
    }

    if (renderMore && typeof renderMore === 'function') {
        const moreNode = renderMore(items);
        const renderMoreCls = cx(moreCls, moreNode.props && moreNode.props.className);

        return React.isValidElement(moreNode)
            ? React.cloneElement(moreNode, {
                  style,
                  className: renderMoreCls,
              })
            : moreNode;
    }

    return (
        <SubMenu label="···" noIcon className={moreCls} style={style}>
            {items}
        </SubMenu>
    );
};

const addIndicators = ({
    children,
    lastVisibleIndex,
    prefix,
    renderMore,
}: { lastVisibleIndex?: number } & Pick<
    MenuPropsWithDefaults,
    'children' | 'prefix' | 'renderMore'
>) => {
    const arr: Array<ReactChild | ReactFragment | ReactPortal | true> = [];

    React.Children.forEach(children, (child, index) => {
        if (!child) {
            return;
        }
        let overflowedItems: ReactElement[] = [];
        // lastVisibleIndex 为 undefined 时，下面两个 if 条件始终为 false, 所以这里直接先行判断一下，避免类型错误
        if (typeof lastVisibleIndex !== 'undefined') {
            if (index > lastVisibleIndex) {
                // @ts-expect-error FIXME: child 可能不是 ReactElement, cloneElement 会报错
                child = React.cloneElement(child, {
                    // 别折叠不显示的 item，不占用真实的用户传入的 key
                    key: `more-${index}`,
                    style: { display: 'none' },
                    className: `${
                        // @ts-expect-error FIXME: should be `child.props.className`
                        (child && child.className) || ''
                    } ${MENUITEM_OVERFLOWED_CLASSNAME}`,
                });
            }

            if (index === lastVisibleIndex + 1) {
                overflowedItems = (children as ReactElement[])
                    .slice(lastVisibleIndex + 1)
                    .map((c, i) => {
                        return React.cloneElement(c, {
                            key: c.key || `more-${index}-${i}`,
                        });
                    });
                arr.push(getIndicatorsItem(overflowedItems, false, prefix, renderMore));
            }
        }

        arr.push(child);
    });

    arr.push(getIndicatorsItem([], true, prefix, renderMore));

    return arr;
};

const getNewChildren = ({
    children,
    root,
    mode,
    lastVisibleIndex,
    hozInLine,
    prefix,
    renderMore,
}: { root: Menu; lastVisibleIndex?: number } & Pick<
    MenuPropsWithDefaults,
    'children' | 'mode' | 'hozInLine' | 'prefix' | 'renderMore'
>) => {
    const k2n: K2N = {};
    const p2n: P2N = {};

    const arr = hozInLine
        ? addIndicators({
              children,
              lastVisibleIndex,
              prefix,
              renderMore,
          })
        : children;

    const loop = (
        children: ReactNode,
        posPrefix: string,
        indexWrapper = { index: 0 },
        inlineLevel = 1
    ) => {
        const keyArray: string[] = [];
        return Children.map(children, (child: MenuChildElement) => {
            if (
                child &&
                (typeof child.type === 'function' ||
                    // `React.forwardRef(render)` returns a forwarding
                    // object that includes `render` method, and the specific
                    // `child.type` will be an object instead of a class or
                    // function.
                    typeof child.type === 'object') &&
                'menuChildType' in child.type
            ) {
                let newChild: ReactElement<MenuChildProps>;

                let pos: string | undefined;
                const props: MenuChildProps = { root };

                if (['item', 'submenu', 'group'].indexOf(child.type.menuChildType) > -1) {
                    pos = `${posPrefix}-${indexWrapper.index++}`;
                    const key = typeof child.key === 'string' ? child.key : pos;

                    // filter out duplicate keys
                    if (keyArray.indexOf(key) > -1) {
                        return;
                    }

                    keyArray.push(key);

                    const level = pos.split('-').length - 1;
                    k2n[key] = p2n[pos] = {
                        key,
                        pos,
                        mode: child.props.mode,
                        type: child.type.menuChildType,
                        disabled: child.props.disabled,
                        label: child.props.label || child.props.children,
                    };

                    props.level = level;
                    props.inlineLevel = inlineLevel;
                    props._key = key;
                    props.groupIndent = child.type.menuChildType === 'group' ? 1 : 0;
                }

                // paddingLeft(or paddingRight in rtl) only make sense in inline mode
                // parent know children's inlineLevel
                // if parent's mode is popup, then children's inlineLevel must be 1;
                // else inlineLevel should add 1
                const childLevel = (child.props.mode || mode) === 'popup' ? 1 : inlineLevel + 1;

                switch (child.type.menuChildType) {
                    case 'submenu':
                        newChild = cloneElement(
                            child,
                            props,
                            loop(child.props.children, pos!, undefined, childLevel)
                        );
                        break;
                    case 'group':
                        newChild = cloneElement(
                            child,
                            props,
                            loop(child.props.children, posPrefix, indexWrapper, props.level)
                        );
                        break;
                    case 'item':
                    case 'divider':
                        newChild = cloneElement(child, props);
                        break;
                    default:
                        newChild = child;
                        break;
                }

                return newChild;
            }

            return child;
        });
    };

    const newChildren = loop(arr, '0') as ReactNode[];

    return {
        newChildren,
        _k2n: k2n,
        _p2n: p2n,
    };
};

export interface MenuState {
    lastVisibleIndex: number | undefined;
    root: Menu;
    newChildren: ReactNode[];
    _k2n: K2N;
    _p2n: P2N;
    tabbableKey: string | undefined | null;
    openKeys: string[];
    selectedKeys: string[];
    focusedKey: string | null | undefined;
    lastMode?: MenuProps['mode'];
}

export type MenuPropsWithDefaults = ClassPropsWithDefault<MenuProps, typeof Menu.defaultProps>;

export class Menu extends Component<MenuProps, MenuState> {
    static isNextMenu = true;

    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        onItemClick: PropTypes.func,
        openKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultOpenKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultOpenAll: PropTypes.bool,
        onOpen: PropTypes.func,
        mode: PropTypes.oneOf(['inline', 'popup']),
        triggerType: PropTypes.oneOf(['click', 'hover']),
        openMode: PropTypes.oneOf(['single', 'multiple']),
        inlineIndent: PropTypes.number,
        inlineArrowDirection: PropTypes.oneOf(['down', 'right']),
        popupAutoWidth: PropTypes.bool,
        popupAlign: PropTypes.oneOf(['follow', 'outside']),
        popupProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        popupClassName: PropTypes.string,
        popupStyle: PropTypes.object,
        selectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultSelectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onSelect: PropTypes.func,
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        shallowSelect: PropTypes.bool,
        hasSelectedIcon: PropTypes.bool,
        labelToggleChecked: PropTypes.bool,
        isSelectIconRight: PropTypes.bool,
        direction: PropTypes.oneOf(['ver', 'hoz']),
        hozAlign: PropTypes.oneOf(['left', 'right']),
        hozInLine: PropTypes.bool,
        renderMore: PropTypes.func,
        header: PropTypes.node,
        footer: PropTypes.node,
        footerWrapperClassName: PropTypes.string,
        autoFocus: PropTypes.bool,
        focusedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
        focusable: PropTypes.bool,
        onItemFocus: PropTypes.func,
        onBlur: PropTypes.func,
        embeddable: PropTypes.bool,
        onItemKeyDown: PropTypes.func,
        expandAnimation: PropTypes.bool,
        itemClassName: PropTypes.string,
        icons: PropTypes.object,
        flatenContent: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultOpenKeys: [],
        defaultOpenAll: false,
        onOpen: noop,
        mode: 'inline',
        triggerType: 'click',
        openMode: 'multiple',
        inlineIndent: 20,
        inlineArrowDirection: 'down',
        popupAutoWidth: false,
        popupAlign: 'follow',
        popupProps: {},
        defaultSelectedKeys: [],
        onSelect: noop,
        shallowSelect: false,
        hasSelectedIcon: true,
        isSelectIconRight: false,
        labelToggleChecked: true,
        direction: 'ver',
        hozAlign: 'left',
        hozInLine: false,
        autoFocus: false,
        focusable: true,
        embeddable: false,
        onItemFocus: noop,
        onItemKeyDown: noop,
        onItemClick: noop,
        expandAnimation: true,
        icons: {},
    };

    static displayName = 'Menu';

    static getDerivedStateFromProps(nextProps: MenuPropsWithDefaults, prevState: MenuState) {
        const state: Partial<MenuState> = {};

        if ('openKeys' in nextProps) {
            state.openKeys = normalizeToArray(nextProps.openKeys);
            // 从展开状态变为收起状态，才需要清空openKeys
        } else if (
            'mode' in nextProps &&
            nextProps.mode === 'popup' &&
            prevState.lastMode === 'inline'
        ) {
            state.openKeys = [];
        }

        if ('selectedKeys' in nextProps) {
            state.selectedKeys = normalizeToArray(nextProps.selectedKeys);
        }
        if ('focusedKey' in nextProps) {
            state.focusedKey = nextProps.focusedKey;
        }

        state.lastMode = nextProps.mode;

        const { newChildren, _k2n, _p2n } = getNewChildren({
            root: prevState.root,
            lastVisibleIndex: prevState.lastVisibleIndex,
            ...nextProps,
        });

        state.newChildren = newChildren;
        state._k2n = _k2n;
        state._p2n = _p2n;

        if (nextProps.focusable) {
            // @ts-expect-error undefined in object throw types error but ok at runtime
            if (prevState.tabbableKey in _k2n) {
                if (prevState.focusedKey) {
                    state.tabbableKey = prevState.focusedKey;
                }
            } else {
                state.tabbableKey = getFirstAvaliablelChildKey('0', _p2n);
            }
        }

        return state;
    }

    readonly props: MenuPropsWithDefaults;
    popupNodes: HTMLElement[];
    menuNode: HTMLUListElement;
    menuContent: HTMLUListElement | null;
    menuHeader: HTMLLIElement | null;
    menuFooter: HTMLLIElement | null;
    menuItemSizes: number[];

    constructor(props: MenuProps) {
        super(props);

        const { selectedKeys, defaultSelectedKeys, focusedKey, focusable, autoFocus } = this.props;

        const { newChildren, _k2n, _p2n } = getNewChildren({
            root: this,
            ...this.props,
        });

        const tabbableKey = focusable ? getFirstAvaliablelChildKey('0', _p2n) : undefined;

        this.state = {
            root: this,
            lastVisibleIndex: undefined,
            newChildren,
            _k2n,
            _p2n,
            tabbableKey,
            openKeys: this.getInitOpenKeys(props as MenuPropsWithDefaults, _k2n),
            selectedKeys: normalizeToArray(selectedKeys || defaultSelectedKeys),
            focusedKey: !isNil(this.props.focusedKey)
                ? focusedKey
                : focusable && autoFocus
                  ? tabbableKey
                  : null,
        };

        bindCtx(this, [
            'handleOpen',
            'handleSelect',
            'handleItemClick',
            'handleItemKeyDown',
            'onBlur',
            'adjustChildrenWidth',
        ]);

        this.popupNodes = [];
    }

    componentDidMount() {
        this.menuNode = findDOMNode(this) as HTMLUListElement;
        this.adjustChildrenWidth();

        if (this.props.hozInLine) {
            events.on(window, 'resize', this.adjustChildrenWidth);
        }
    }

    componentDidUpdate(prevProps: MenuProps, prevState: MenuState) {
        if (
            prevState.lastVisibleIndex !== this.state.lastVisibleIndex ||
            React.Children.toArray(this.props.children).length !==
                React.Children.toArray(prevProps.children).length
        ) {
            this.adjustChildrenWidth();
        }
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.adjustChildrenWidth);
    }

    adjustChildrenWidth() {
        const { direction, prefix, header, footer, hozInLine } = this.props;
        if (direction !== 'hoz' || !hozInLine) {
            return;
        }

        if (!this.menuNode && !this.menuContent) {
            return;
        }

        let children: [] | HTMLCollection = [],
            spaceWidth: number;

        if (header || footer) {
            children = this.menuContent!.children;
            spaceWidth =
                getWidth(this.menuNode) - getWidth(this.menuHeader) - getWidth(this.menuFooter);
        } else {
            children = this.menuNode.children;
            spaceWidth = getWidth(this.menuNode);
        }

        if (children.length < 2) {
            return;
        }

        let currentSumWidth = 0,
            lastVisibleIndex = -1;

        let moreNode: HTMLElement | undefined;

        const menuItemNodes = ([].slice.call(children) as HTMLElement[]).filter(node => {
            if (node.className.split(' ').indexOf(`${prefix}menu-more`) < 0) {
                return true;
            } else {
                moreNode = node;
            }
            return false;
        });

        const overflowedItems = menuItemNodes.filter(
            c => c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0
        );

        overflowedItems.forEach(c => {
            dom.setStyle(c, 'display', 'inline-block');
        });

        dom.setStyle(moreNode, 'display', 'inline-block');
        const moreWidth = getWidth(moreNode);

        this.menuItemSizes = menuItemNodes.map(c => getWidth(c));
        const totalLen = this.menuItemSizes.length;

        overflowedItems.forEach(c => {
            dom.setStyle(c, 'display', 'none');
        });

        this.menuItemSizes.forEach((liWidth, i) => {
            currentSumWidth += liWidth;
            if (
                (i >= totalLen - 1 && currentSumWidth <= spaceWidth) ||
                currentSumWidth + moreWidth <= spaceWidth
            ) {
                lastVisibleIndex++;
            }
        });

        if (lastVisibleIndex >= totalLen - 1) {
            dom.setStyle(moreNode, 'display', 'none');
        }

        this.setState({
            lastVisibleIndex,
            ...this.getUpdateChildren(),
        });
    }
    onBlur(e: FocusEvent<HTMLUListElement>) {
        this.setState({
            focusedKey: undefined,
        });

        this.props.onBlur && this.props.onBlur(e);
    }

    getInitOpenKeys(props: MenuPropsWithDefaults, _k2n: K2N) {
        let initOpenKeys: string | string[];

        const { openKeys, defaultOpenKeys, defaultOpenAll, mode, openMode } = props;
        if (openKeys) {
            initOpenKeys = openKeys;
        } else if (defaultOpenAll && mode === 'inline' && openMode === 'multiple') {
            initOpenKeys = Object.keys(_k2n).filter(key => {
                return _k2n[key].type === 'submenu';
            });
        } else {
            initOpenKeys = defaultOpenKeys;
        }

        return normalizeToArray(initOpenKeys);
    }

    getUpdateChildren = () => {
        const { root, lastVisibleIndex } = this.state;

        return getNewChildren({
            root,
            lastVisibleIndex,
            ...this.props,
        });
    };

    handleOpen(key: string, open: boolean, triggerType?: string, e?: Event) {
        let newOpenKeys: string[] | undefined;

        const { mode, openMode } = this.props;
        const { openKeys, _k2n } = this.state;
        const index = openKeys.indexOf(key);
        if (open && index === -1) {
            if (mode === 'inline') {
                if (openMode === 'single') {
                    newOpenKeys = openKeys.filter(
                        k => _k2n[k] && !isSibling(_k2n[key].pos, _k2n[k].pos)
                    );
                    newOpenKeys.push(key);
                } else {
                    newOpenKeys = openKeys.concat(key);
                }
            } else {
                newOpenKeys = openKeys.filter(k => {
                    return _k2n[k] && isAncestor(_k2n[key].pos, _k2n[k].pos);
                });
                newOpenKeys.push(key);
            }
        } else if (!open && index > -1) {
            if (mode === 'inline') {
                newOpenKeys = [...openKeys.slice(0, index), ...openKeys.slice(index + 1)];
            } else if (triggerType === 'docClick') {
                if (
                    !this.popupNodes
                        .concat(this.menuNode)
                        .some(node => node.contains(e!.target as Node))
                ) {
                    newOpenKeys = [];
                }
            } else {
                newOpenKeys = openKeys.filter(k => {
                    return k !== key && _k2n[k] && !isAncestor(_k2n[k].pos, _k2n[key].pos);
                });
            }
        }

        if (newOpenKeys) {
            if (isNil(this.props.openKeys)) {
                this.setState({
                    openKeys: newOpenKeys,
                    ...this.getUpdateChildren(),
                });
            }

            this.props.onOpen(newOpenKeys, {
                key,
                open,
            });
        }
    }

    getPath(key: string, _k2n: K2N, _p2n: P2N) {
        const keyPath = [];
        const labelPath = [];

        const pos = _k2n[key].pos;
        const nums = pos.split('-');
        for (let i = 1; i < nums.length - 1; i++) {
            const parentNums = nums.slice(0, i + 1);
            const parentPos = parentNums.join('-');
            const parent = _p2n[parentPos];
            keyPath.push(parent.key);
            labelPath.push(parent.label);
        }

        return {
            keyPath,
            labelPath,
        };
    }

    handleSelect(key: string, select: boolean, menuItem: SelectableItem) {
        const { _k2n, _p2n } = this.state;
        const pos = _k2n[key].pos;
        const level = pos.split('-').length - 1;
        if (this.props.shallowSelect && level > 1) {
            return;
        }

        let newSelectedKeys;

        const { selectMode } = this.props;
        const { selectedKeys } = this.state;
        const index = selectedKeys.indexOf(key);
        if (select && index === -1) {
            if (selectMode === 'single') {
                newSelectedKeys = [key];
            } else if (selectMode === 'multiple') {
                newSelectedKeys = selectedKeys.concat(key);
            }
        } else if (!select && index > -1 && selectMode === 'multiple') {
            newSelectedKeys = [...selectedKeys.slice(0, index), ...selectedKeys.slice(index + 1)];
        }

        if (newSelectedKeys) {
            if (isNil(this.props.selectedKeys)) {
                this.setState({
                    selectedKeys: newSelectedKeys,
                });
            }

            this.props.onSelect(newSelectedKeys, menuItem, {
                key,
                select,
                label: _k2n[key].label,
                ...this.getPath(key, _k2n, _p2n),
            });
        }
    }

    handleItemClick(key: string, item: MenuItem, e: MouseEvent | KeyboardEvent) {
        const { _k2n } = this.state;
        if (this.props.focusable) {
            if (isNil(this.props.focusedKey)) {
                this.setState({
                    focusedKey: key,
                });
            }

            this.props.onItemFocus(key, item, e);
        }

        if (item.props.type === 'item') {
            if (item.props.parentMode === 'popup' && this.state.openKeys.length) {
                if (isNil(this.props.openKeys)) {
                    this.setState({
                        openKeys: [],
                    });
                }

                this.props.onOpen([], {
                    key: this.state.openKeys.sort(
                        (prevKey, nextKey) =>
                            _k2n[nextKey].pos.split('-').length -
                            _k2n[prevKey].pos.split('-').length
                    )[0],
                    open: false,
                });
            }

            this.props.onItemClick(key, item, e);
        }
    }

    getAvailableKey(pos: string, prev: boolean) {
        const { _p2n } = this.state;
        const ps = Object.keys(_p2n).filter(p => isAvailablePos(pos, p, _p2n));
        if (ps.length > 1) {
            const index = ps.indexOf(pos);
            let targetIndex;
            if (prev) {
                targetIndex = index === 0 ? ps.length - 1 : index - 1;
            } else {
                targetIndex = index === ps.length - 1 ? 0 : index + 1;
            }

            return _p2n[ps[targetIndex]].key;
        }

        return null;
    }

    getParentKey(pos: string) {
        return this.state._p2n[pos.slice(0, pos.length - 2)].key;
    }

    handleItemKeyDown(key: string, type: ItemProps['type'], item: MenuItem, e: KeyboardEvent) {
        if (
            [
                KEYCODE.UP,
                KEYCODE.DOWN,
                KEYCODE.RIGHT,
                KEYCODE.LEFT,
                KEYCODE.ENTER,
                KEYCODE.ESC,
                KEYCODE.SPACE,
            ].indexOf(e.keyCode) > -1
        ) {
            e.preventDefault();
            e.stopPropagation();
        }

        let focusedKey = this.state.focusedKey;
        const { _p2n, _k2n } = this.state;

        const { direction } = this.props;
        const pos = _k2n[key].pos;
        const level = pos.split('-').length - 1;
        switch (e.keyCode) {
            case KEYCODE.UP: {
                const avaliableKey = this.getAvailableKey(pos, true);
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.DOWN: {
                let avaliableKey;
                if (direction === 'hoz' && level === 1 && type === 'submenu') {
                    this.handleOpen(key, true);
                    avaliableKey = getFirstAvaliablelChildKey(pos, _p2n);
                } else {
                    avaliableKey = this.getAvailableKey(pos, false);
                }
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.RIGHT: {
                let avaliableKey;
                if (direction === 'hoz' && level === 1) {
                    avaliableKey = this.getAvailableKey(pos, false);
                } else if (type === 'submenu') {
                    this.handleOpen(key, true);
                    avaliableKey = getFirstAvaliablelChildKey(pos, _p2n);
                }
                if (avaliableKey) {
                    focusedKey = avaliableKey;
                }
                break;
            }
            case KEYCODE.ENTER: {
                if (type === 'submenu') {
                    this.handleOpen(key, true);
                    const avaliableKey = getFirstAvaliablelChildKey(pos, _p2n);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                }
                break;
            }
            case KEYCODE.LEFT: {
                if (direction === 'hoz' && level === 1) {
                    const avaliableKey = this.getAvailableKey(pos, true);
                    if (avaliableKey) {
                        focusedKey = avaliableKey;
                    }
                } else if (level > 1) {
                    const parentKey = this.getParentKey(pos);
                    this.handleOpen(parentKey, false);
                    focusedKey = parentKey;
                }
                break;
            }
            case KEYCODE.ESC:
                if (level > 1) {
                    const parentKey = this.getParentKey(pos);
                    this.handleOpen(parentKey, false);
                    focusedKey = parentKey;
                }
                break;

            case KEYCODE.TAB:
                focusedKey = null;
                break;
            default:
                break;
        }

        if (focusedKey !== this.state.focusedKey) {
            if (isNil(this.props.focusedKey)) {
                this.setState({
                    focusedKey,
                });
            }

            this.props.onItemKeyDown(focusedKey, item, e);
            // @ts-expect-error FIXME: onItemFocus 在组件里有两种不同的调用方式，这里先标记，后面修复
            this.props.onItemFocus(focusedKey, e);
        }
    }

    menuContentRef = (ref: HTMLUListElement | null) => {
        this.menuContent = ref;
    };

    menuHeaderRef = (ref: HTMLLIElement | null) => {
        this.menuHeader = ref;
    };

    menuFooterRef = (ref: HTMLLIElement | null) => {
        this.menuFooter = ref;
    };

    render() {
        const {
            prefix,
            className,
            direction,
            hozAlign,
            header,
            footer,
            footerWrapperClassName,
            embeddable,
            selectMode,
            hozInLine,
            rtl,
            flatenContent,
        } = this.props;
        const { newChildren } = this.state;
        const others = pickOthers(Menu.propTypes, this.props);

        const newClassName = cx(
            {
                [`${prefix}menu`]: true,
                [`${prefix}ver`]: direction === 'ver',
                [`${prefix}hoz`]: direction === 'hoz',
                [`${prefix}menu-embeddable`]: embeddable,
                [`${prefix}menu-nowrap`]: hozInLine,
                [`${prefix}menu-selectable-${selectMode}`]: selectMode,
            },
            className
        );

        let role = direction === 'hoz' ? 'menubar' : 'menu';
        let ariaMultiselectable;
        if ('selectMode' in this.props) {
            role = 'listbox';
            ariaMultiselectable = !!(selectMode === 'multiple');
        }

        const headerElement = header ? (
            <li className={`${prefix}menu-header`} ref={this.menuHeaderRef}>
                {header}
            </li>
        ) : null;
        const itemsElement =
            !flatenContent && (header || footer) ? (
                <ul className={`${prefix}menu-content`} ref={this.menuContentRef}>
                    {newChildren}
                </ul>
            ) : (
                newChildren
            );
        const footerElement = footer ? (
            <li
                className={cx(`${prefix}menu-footer`, footerWrapperClassName)}
                ref={this.menuFooterRef}
            >
                {footer}
            </li>
        ) : null;
        const shouldWrapItemsAndFooter = hozAlign === 'right' && !!header;

        if (rtl) {
            others.dir = 'rtl';
        }

        return (
            <ul
                role={role}
                onBlur={this.onBlur}
                className={newClassName}
                // @ts-expect-error FIXME: handleEnter 未定义，可移除
                onKeyDown={this.handleEnter}
                aria-multiselectable={ariaMultiselectable}
                {...others}
            >
                {headerElement}
                {shouldWrapItemsAndFooter ? (
                    <div className={`${prefix}menu-hoz-right`}>
                        {itemsElement}
                        {footerElement}
                    </div>
                ) : null}
                {!shouldWrapItemsAndFooter ? itemsElement : null}
                {!shouldWrapItemsAndFooter ? footerElement : null}
            </ul>
        );
    }
}

export default polyfill(Menu);
