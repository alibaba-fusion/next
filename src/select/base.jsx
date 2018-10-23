import React, { Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, dom, events } from '../util';
import Menu from '../menu';
import Overlay from '../overlay';
import zhCN from '../locale/zh-cn';
import DataStore from './data-store';
import { isSingle, filter, isNull, valueToSelectKey } from './util';

const { Popup } = Overlay;
const { Item: MenuItem, Group: MenuGroup } = Menu;
const { noop, bindCtx, makeChain } = func;

function preventDefault(e) {
    e.preventDefault();
}

export default class Base extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 选择器尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        // 当前值，用于受控模式
        value: PropTypes.any, // to be override
        // 初始化的默认值
        defaultValue: PropTypes.any, // to be override
        /**
         * Select发生改变时触发的回调
         * @param {*} value 选中的值
         * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'tag'
         */
        onChange: PropTypes.func,
        /**
         * 没有值的时候的占位符
         */
        placeholder: PropTypes.string,
        /**
         * 下拉菜单是否与选择器对齐
         */
        autoWidth: PropTypes.bool,
        /**
         * 自定义内联 label
         */
        label: PropTypes.node,
        /**
         * 是否有清除按钮
         */
        hasClear: PropTypes.bool,
        /**
         * 校验状态
         */
        state: PropTypes.oneOf(['error', 'loading']),
        /**
         * 是否只读，只读模式下可以展开弹层但不能选
         */
        readOnly: PropTypes.bool,
        /**
         * 是否禁用选择器
         */
        disabled: PropTypes.bool,
        /**
         * 当前弹层是否显示
         */
        visible: PropTypes.bool,
        /**
         * 弹层初始化是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层显示或隐藏时触发的回调
         * @param {Boolean} visible 弹层是否显示
         */
        onVisibleChange: PropTypes.func,
        /**
         * 弹层挂载的容器节点
         */
        popupContainer: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),
        /**
         * 弹层的 className
         */
        popupClassName: PropTypes.any,
        /**
         * 弹层的内联样式
         */
        popupStyle: PropTypes.object,
        /**
         * 添加到弹层上的属性
         */
        popupProps: PropTypes.object,
        /**
         * 自定义弹层的内容
         */
        popupContent: PropTypes.node,
        /**
         * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
         */
        filterLocal: PropTypes.bool,
        /**
         * 本地过滤方法，返回一个 Boolean 值确定是否保留
         */
        filter: PropTypes.func,
        /**
         * 键盘上下键切换菜单高亮选项的回调
         */
        onToggleHighlightItem: PropTypes.func,
        // 自定义类名
        className: PropTypes.any,
        // children
        children: PropTypes.any,
        dataSource: PropTypes.array,
        itemRender: PropTypes.func,
        mode: PropTypes.string,
        notFoundContent: PropTypes.node,
        locale: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium',
        autoWidth: true,
        onChange: noop,
        onVisibleChange: noop,
        onToggleHighlightItem: noop,
        popupProps: {},
        filterLocal: true,
        filter: filter,
        itemRender: (item) => {
            return item.label || item.value;
        },
        locale: zhCN.Select,
    };

    constructor(props) {
        super(props);

        this.dataStore = new DataStore({
            filter: props.filter,
            filterLocal: props.filterLocal
        });

        this.state = {
            value: 'value' in props ? props.value : props.defaultValue,
            visible: 'visible' in props ? props.visible : props.defaultVisible,
            dataSource: [],
            width: 100,
            // current highlight key
            highlightKey: null
        };

        bindCtx(this, [
            'handleMenuBodyClick',
            'handleVisibleChange',
            'focusInput',
            'beforeOpen',
            'beforeClose',
            'afterClose',
            'handleResize'
        ]);
    }

    componentWillMount() {
        this.setState({
            dataSource: this.setDataSource(this.props)
        });
    }

    componentDidMount() {
        // overlay 还没有完成 mount，所以需要滞后同步宽度
        setTimeout(() => this.syncWidth(), 0);

        events.on(window, 'resize', this.handleResize);
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }

        if ('visible' in nextProps) {
            // this.state.visible = nextProps.visible;
            this.setState({
                visible: nextProps.visible
            });
        }

        this.dataStore.setOptions({
            filter: nextProps.filter,
            filterLocal: nextProps.filterLocal
        });

        if ((nextProps.children !== this.props.children || nextProps.dataSource !== this.props.dataSource)) {
            const dataSource = this.setDataSource(nextProps);
            this.setState({
                dataSource
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.label !== this.props.label || prevState.value !== this.state.value)) {
            this.syncWidth();
        }
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
    }

    /**
     * Calculate and set width of popup menu
     * @protected
     */
    syncWidth() {
        const width = dom.getStyle(this.selectDOM, 'width');

        if (width && (this.width !== width)) {
            this.width = width;

            if (this.popupRef) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(() => {
                    if (this.popupRef && this.popupRef.getInstance().overlay) {
                        dom.setStyle(this.popupRef.getInstance().overlay.getInstance().getContentNode(), 'width', this.width);
                    }
                }, 0);
            }
        }
    }

    handleResize() {
        clearTimeout(this.resizeTimeout);
        if (this.state.visible) {
            this.resizeTimeout = setTimeout(() => {
                this.syncWidth();
            }, 200);
        }
    }

    /**
     * Get structured dataSource, for cache
     * @protected
     * @param  {Object} [props=this.props]
     * @return {Array}
     */
    setDataSource(props) {
        const { dataSource, children } = props;

        // children is higher priority then dataSource
        if (Children.count(children)) {
            return this.dataStore.updateByDS(children, true);

        } else if (Array.isArray(dataSource)) {
            return this.dataStore.updateByDS(dataSource, false);
        }
        return [];
    }

    /**
     * Set popup visible
     * @protected
     * @param {boolean} visible
     * @param {string} type trigger type
     */
    setVisible(visible, type) {
        if (this.props.disabled || this.state.visible === visible) {
            return;
        }

        if (!('visible' in this.props)) {
            this.setState({
                visible
            });
        }

        this.props.onVisibleChange(visible, type);
    }

    setFirstHightLightKeyForMenu() {
        // 设置高亮 item key
        if (this.dataStore.getMenuDS().length && this.dataStore.getEnableDS().length) {
            this.setState({
                highlightKey: `${this.dataStore.getEnableDS()[0].value}`
            });
        }
    }

    handleChange(value, ...args) {
        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }
        this.props.onChange(value, ...args);
    }

    /**
     * Handle Menu body click
     * @param {Event} e click event
     */
    handleMenuBodyClick(e) {
        this.focusInput(e);
    }

    /**
     * Toggle highlight MenuItem
     * @private
     * @param {number} dir -1: up, 1: down
     */
    toggleHighlightItem(dir) {
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
        highlightKey !== null && this.dataStore.getEnableDS().some((item, index) => {
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

        this.setState({ highlightKey });

        this.scrollMenuIntoView();

        return highlightItem;
    }

    // scroll into focus item
    scrollMenuIntoView() {
        const { prefix } = this.props;

        clearTimeout(this.highlightTimer);
        this.highlightTimer = setTimeout(() => {
            try {
                const menuNode = findDOMNode(this.menuRef);
                const itemNode = menuNode.querySelector(`.${prefix}select-menu-item.${prefix}focused`);
                itemNode && itemNode.scrollIntoViewIfNeeded();
            } catch (ex) {
                // I don't care...
            }
        });
    }

    /**
     * render popup menu header
     * @abstract
     */
    renderMenuHeader() {
        return null;
    }

    saveMenuRef = (ref) => {
        this.menuRef = ref;
    };

    handleSelect() {

    }

    /**
     * render popup children
     * @protected
     * @param {object} props
     */
    renderMenu() {
        const { prefix, mode, autoWidth, locale, notFoundContent } = this.props;
        const { dataSource, highlightKey } = this.state;
        const value = this.state.value;
        let selectedKeys;


        if (isNull(value) || value.length === 0) {
            selectedKeys = [];
        } else if (isSingle(mode)) {
            selectedKeys = [valueToSelectKey(value)];
        } else {
            selectedKeys = [].concat(value).map(n => valueToSelectKey(n));
        }

        let children = this.renderMenuItem(dataSource);


        const menuClassName = classNames({
            [`${prefix}select-menu`]: true,
            [`${prefix}select-menu-empty`]: !children || !children.length
        });

        if (!children || !children.length) {
            children = <span className={`${prefix}select-menu-empty-content`}>{notFoundContent || locale.notFoundContent}</span>;
        }

        const menuProps = {
            ref: this.saveMenuRef,
            children,
            style: autoWidth ? { width: this.width } : {minWidth: this.width},
            selectedKeys,
            focusedKey: highlightKey,
            focusable: false,
            selectMode: isSingle(mode) ? 'single' : 'multiple',
            onSelect: this.handleMenuSelect,
            onItemClick: this.handleItemClick,
            header: this.renderMenuHeader(),
            onClick: this.handleMenuBodyClick,
            onMouseDown: preventDefault,
            className: menuClassName
        };

        return <Menu {...menuProps} />;
    }

    /**
     * render menu item
     * @protected
     * @param {Array} dataSource
     */
    renderMenuItem(dataSource) {
        const { prefix, itemRender } = this.props;
        // If it has.
        let searchKey;
        if (this.isAutoComplete) {
            // In AutoComplete, value is the searchKey
            searchKey = this.state.value;
        } else {
            searchKey = this.state.searchValue;
        }

        return dataSource.map((item, index) => {
            if (!item) {
                return null;
            }
            if (Array.isArray(item.children)) {
                return (
                    <MenuGroup
                        key={index}
                        label={item.label}>{this.renderMenuItem(item.children)}
                    </MenuGroup>
                );
            } else {
                const itemProps = {
                    key: item.value,
                    className: `${prefix}select-menu-item`,
                    disabled: item.disabled
                };
                if (item.title) {
                    itemProps.title = item.title;
                }

                return (
                    <MenuItem {...itemProps}>{itemRender(item, searchKey)}
                    </MenuItem>
                );
            }
        });
    }

    saveSelectRef = (ref) => {
        this.selectDOM = findDOMNode(ref);
    };

    saveInputRef = (ref) => {
        if (ref && ref.getInstance()) {
            this.inputRef = ref.getInstance();
        }
    };

    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    focusInput() {
        this.inputRef.focus();
    }

    beforeOpen() {
        const {value, highlightKey} = this.state;
        if (this.props.mode === 'single' && !value && !highlightKey) {
            this.setFirstHightLightKeyForMenu();
        }
        this.syncWidth();
    }

    beforeClose() {

    }

    afterClose() {

    }

    savePopupRef = (ref) => {
        this.popupRef = ref;
        if (this.props.popupProps && typeof this.props.popupProps.ref === 'function') {
            this.props.popupProps.ref(ref);
        }
    }

    render(props) {
        const { prefix, mode, popupProps, popupContainer, popupClassName, popupStyle, popupContent, autoWidth, canCloseByTrigger, cache } = props;

        const cls = classNames({
            [`${prefix}select-auto-complete-menu`]: !popupContent && this.isAutoComplete,
            [`${prefix}select-${mode}-menu`]: !popupContent && !!mode
        }, popupClassName || popupProps.className);

        const _props = {
            triggerType: 'click',
            autoFocus: false,
            cache: cache,
            // Put `popupProps` into here for covering above props.
            ...popupProps,
            //beforeOpen node not mount, afterOpen too slow.
            // from display:none to block, we may need to recompute width
            beforeOpen: makeChain(this.beforeOpen, popupProps.beforeOpen),
            beforeClose: makeChain(this.beforeClose, popupProps.beforeClose),
            afterClose: makeChain(this.afterClose, popupProps.afterClose),
            canCloseByTrigger: canCloseByTrigger,
            visible: this.state.visible,
            onVisibleChange: this.handleVisibleChange,
            shouldUpdatePosition: true,
            container: popupContainer || popupProps.container,
            className: cls,
            style: popupStyle || popupProps.style
        };

        return (<Popup {..._props} trigger={this.renderSelect()} ref={this.savePopupRef}>
            {popupContent ?
                <div className={`${prefix}select-popup-wrap`} style={autoWidth ? { width: this.width } : {minWidth: this.width}}>
                    {popupContent}
                </div> : this.renderMenu()}
        </Popup>);
    }
}
