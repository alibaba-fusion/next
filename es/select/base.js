import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, dom, events } from '../util';
import Menu from '../menu';
import Overlay from '../overlay';
import zhCN from '../locale/zh-cn';
import DataStore from './data-store';
import VirtualList from '../virtual-list';
import { isSingle, filter, isNull, valueToSelectKey } from './util';

var Popup = Overlay.Popup;
var MenuItem = Menu.Item,
    MenuGroup = Menu.Group;
var noop = func.noop,
    bindCtx = func.bindCtx,
    makeChain = func.makeChain;


function preventDefault(e) {
    e.preventDefault();
}

var Base = (_temp = _class = function (_React$Component) {
    _inherits(Base, _React$Component);

    function Base(props) {
        _classCallCheck(this, Base);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.saveSelectRef = function (ref) {
            _this.selectDOM = findDOMNode(ref);
        };

        _this.saveInputRef = function (ref) {
            if (ref && ref.getInstance()) {
                _this.inputRef = ref.getInstance();
            }
        };

        _this.savePopupRef = function (ref) {
            _this.popupRef = ref;
            if (_this.props.popupProps && typeof _this.props.popupProps.ref === 'function') {
                _this.props.popupProps.ref(ref);
            }
        };

        _this.dataStore = new DataStore({
            filter: props.filter,
            filterLocal: props.filterLocal
        });

        _this.state = {
            value: 'value' in props ? props.value : props.defaultValue,
            visible: 'visible' in props ? props.visible : props.defaultVisible,
            dataSource: [],
            width: 100,
            // current highlight key
            highlightKey: null
        };

        bindCtx(_this, ['handleMenuBodyClick', 'handleVisibleChange', 'focusInput', 'beforeOpen', 'beforeClose', 'afterClose', 'handleResize']);
        return _this;
    }

    Base.prototype.componentWillMount = function componentWillMount() {
        this.setState({
            dataSource: this.setDataSource(this.props)
        });
    };

    Base.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        // overlay 还没有完成 mount，所以需要滞后同步宽度
        setTimeout(function () {
            return _this2.syncWidth();
        }, 0);

        events.on(window, 'resize', this.handleResize);
    };

    Base.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
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

        if (nextProps.children !== this.props.children || nextProps.dataSource !== this.props.dataSource) {
            var dataSource = this.setDataSource(nextProps);
            this.setState({
                dataSource: dataSource
            });
        }
    };

    Base.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
            this.syncWidth();
        }
    };

    Base.prototype.componentWillUnmount = function componentWillUnmount() {
        events.off(window, 'resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
    };

    /**
     * Calculate and set width of popup menu
     * @protected
     */


    Base.prototype.syncWidth = function syncWidth() {
        var _this3 = this;

        var width = dom.getStyle(this.selectDOM, 'width');

        if (width && this.width !== width) {
            this.width = width;

            if (this.popupRef && this.props.autoWidth) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(function () {
                    if (_this3.popupRef && _this3.popupRef.getInstance().overlay) {
                        dom.setStyle(_this3.popupRef.getInstance().overlay.getInstance().getContentNode(), 'width', _this3.width);
                    }
                }, 0);
            }
        }
    };

    Base.prototype.handleResize = function handleResize() {
        var _this4 = this;

        clearTimeout(this.resizeTimeout);
        if (this.state.visible) {
            this.resizeTimeout = setTimeout(function () {
                _this4.syncWidth();
            }, 200);
        }
    };

    /**
     * Get structured dataSource, for cache
     * @protected
     * @param  {Object} [props=this.props]
     * @return {Array}
     */


    Base.prototype.setDataSource = function setDataSource(props) {
        var dataSource = props.dataSource,
            children = props.children;

        // children is higher priority then dataSource

        if (Children.count(children)) {
            return this.dataStore.updateByDS(children, true);
        } else if (Array.isArray(dataSource)) {
            return this.dataStore.updateByDS(dataSource, false);
        }
        return [];
    };

    /**
     * Set popup visible
     * @protected
     * @param {boolean} visible
     * @param {string} type trigger type
     */


    Base.prototype.setVisible = function setVisible(visible, type) {
        if (this.props.disabled || this.state.visible === visible) {
            return;
        }

        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type);
    };

    Base.prototype.setFirstHightLightKeyForMenu = function setFirstHightLightKeyForMenu() {
        // 设置高亮 item key
        if (this.dataStore.getMenuDS().length && this.dataStore.getEnableDS().length) {
            this.setState({
                highlightKey: '' + this.dataStore.getEnableDS()[0].value
            });
        }
    };

    Base.prototype.handleChange = function handleChange(value) {
        var _props2;

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        (_props2 = this.props).onChange.apply(_props2, [value].concat(args));
    };

    /**
     * Handle Menu body click
     * @param {Event} e click event
     */


    Base.prototype.handleMenuBodyClick = function handleMenuBodyClick(e) {
        this.focusInput(e);
    };

    /**
     * Toggle highlight MenuItem
     * @private
     * @param {number} dir -1: up, 1: down
     */


    Base.prototype.toggleHighlightItem = function toggleHighlightItem(dir) {
        if (!this.state.visible) {
            this.setVisible(true, 'enter');
            return;
        }

        var maxCount = this.dataStore.getEnableDS().length;
        // When there is no enabled item
        if (!maxCount) {
            return false;
        }

        var highlightKey = this.state.highlightKey;

        var highlightIndex = -1;

        // find previous highlight index
        highlightKey !== null && this.dataStore.getEnableDS().some(function (item, index) {
            if ('' + item.value === highlightKey) {
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
        var highlightItem = this.dataStore.getEnableDS()[highlightIndex];
        highlightKey = highlightItem ? '' + highlightItem.value : null;

        this.setState({ highlightKey: highlightKey });

        this.scrollMenuIntoView();

        return highlightItem;
    };

    // scroll into focus item


    Base.prototype.scrollMenuIntoView = function scrollMenuIntoView() {
        var _this5 = this;

        var prefix = this.props.prefix;


        clearTimeout(this.highlightTimer);
        this.highlightTimer = setTimeout(function () {
            try {
                var menuNode = findDOMNode(_this5.menuRef);
                var itemNode = menuNode.querySelector('.' + prefix + 'select-menu-item.' + prefix + 'focused');
                itemNode && itemNode.scrollIntoViewIfNeeded();
            } catch (ex) {
                // I don't care...
            }
        });
    };

    /**
     * render popup menu header
     * @abstract
     */


    Base.prototype.renderMenuHeader = function renderMenuHeader() {
        return null;
    };

    Base.prototype.handleSelect = function handleSelect() {};

    /**
     * render popup children
     * @protected
     * @param {object} props
     */


    Base.prototype.renderMenu = function renderMenu() {
        var _classNames,
            _this6 = this;

        var _props3 = this.props,
            prefix = _props3.prefix,
            mode = _props3.mode,
            autoWidth = _props3.autoWidth,
            locale = _props3.locale,
            notFoundContent = _props3.notFoundContent,
            useVirtual = _props3.useVirtual;
        var _state = this.state,
            dataSource = _state.dataSource,
            highlightKey = _state.highlightKey;

        var value = this.state.value;
        var selectedKeys = void 0;

        if (isNull(value) || value.length === 0) {
            selectedKeys = [];
        } else if (isSingle(mode)) {
            selectedKeys = [valueToSelectKey(value)];
        } else {
            selectedKeys = [].concat(value).map(function (n) {
                return valueToSelectKey(n);
            });
        }

        var children = this.renderMenuItem(dataSource);

        var menuClassName = classNames((_classNames = {}, _classNames[prefix + 'select-menu'] = true, _classNames[prefix + 'select-menu-empty'] = !children || !children.length, _classNames));

        if (!children || !children.length) {
            children = React.createElement(
                'span',
                { className: prefix + 'select-menu-empty-content' },
                notFoundContent || locale.notFoundContent
            );
        }

        var menuProps = {
            children: children,
            role: 'listbox',
            style: autoWidth ? { width: this.width } : { minWidth: this.width },
            selectedKeys: selectedKeys,
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

        return useVirtual && children.length ? React.createElement(
            'div',
            {
                className: prefix + 'select-menu-wrapper',
                style: { position: 'relative' }
            },
            React.createElement(
                VirtualList,
                {
                    itemsRenderer: function itemsRenderer(items, _ref) {
                        return React.createElement(
                            Menu,
                            _extends({
                                ref: function ref(c) {
                                    _ref(c);
                                    _this6.menuRef = c;
                                }
                            }, menuProps),
                            items
                        );
                    }
                },
                children
            )
        ) : React.createElement(Menu, menuProps);
    };

    /**
     * render menu item
     * @protected
     * @param {Array} dataSource
     */


    Base.prototype.renderMenuItem = function renderMenuItem(dataSource) {
        var _this7 = this;

        var _props4 = this.props,
            prefix = _props4.prefix,
            itemRender = _props4.itemRender;
        // If it has.

        var searchKey = void 0;
        if (this.isAutoComplete) {
            // In AutoComplete, value is the searchKey
            searchKey = this.state.value;
        } else {
            searchKey = this.state.searchValue;
        }

        return dataSource.map(function (item, index) {
            if (!item) {
                return null;
            }
            if (Array.isArray(item.children)) {
                return React.createElement(
                    MenuGroup,
                    { key: index, label: item.label },
                    _this7.renderMenuItem(item.children)
                );
            } else {
                var itemProps = {
                    role: 'option',
                    key: item.value,
                    className: prefix + 'select-menu-item',
                    disabled: item.disabled
                };
                if (item.title) {
                    itemProps.title = item.title;
                }

                return React.createElement(
                    MenuItem,
                    itemProps,
                    itemRender(item, searchKey)
                );
            }
        });
    };

    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    Base.prototype.focusInput = function focusInput() {
        this.inputRef.focus();
    };

    Base.prototype.beforeOpen = function beforeOpen() {
        var _state2 = this.state,
            value = _state2.value,
            highlightKey = _state2.highlightKey;

        if (this.props.mode === 'single' && !value && !highlightKey) {
            this.setFirstHightLightKeyForMenu();
        }
        this.syncWidth();
    };

    Base.prototype.beforeClose = function beforeClose() {};

    Base.prototype.afterClose = function afterClose() {};

    Base.prototype.render = function render(props) {
        var _classNames2;

        var prefix = props.prefix,
            mode = props.mode,
            popupProps = props.popupProps,
            popupContainer = props.popupContainer,
            popupClassName = props.popupClassName,
            popupStyle = props.popupStyle,
            popupContent = props.popupContent,
            autoWidth = props.autoWidth,
            canCloseByTrigger = props.canCloseByTrigger,
            cache = props.cache;


        var cls = classNames((_classNames2 = {}, _classNames2[prefix + 'select-auto-complete-menu'] = !popupContent && this.isAutoComplete, _classNames2[prefix + 'select-' + mode + '-menu'] = !popupContent && !!mode, _classNames2), popupClassName || popupProps.className);

        var _props = _extends({
            triggerType: 'click',
            autoFocus: false,
            cache: cache
        }, popupProps, {
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
        });

        return React.createElement(
            Popup,
            _extends({}, _props, {
                trigger: this.renderSelect(),
                ref: this.savePopupRef
            }),
            popupContent ? React.createElement(
                'div',
                {
                    className: prefix + 'select-popup-wrap',
                    style: autoWidth ? { width: this.width } : {}
                },
                popupContent
            ) : this.renderMenu()
        );
    };

    return Base;
}(React.Component), _class.propTypes = {
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
     * 是否有清除按钮（单选模式有效）
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
    popupContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual: PropTypes.bool,
    // 自定义类名
    className: PropTypes.any,
    children: PropTypes.any,
    dataSource: PropTypes.array,
    itemRender: PropTypes.func,
    mode: PropTypes.string,
    notFoundContent: PropTypes.node,
    locale: PropTypes.object,
    rtl: PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium',
    autoWidth: true,
    onChange: noop,
    onVisibleChange: noop,
    onToggleHighlightItem: noop,
    popupProps: {},
    filterLocal: true,
    filter: filter,
    itemRender: function itemRender(item) {
        return item.label || item.value;
    },
    locale: zhCN.Select
}, _temp);
Base.displayName = 'Base';
export { Base as default };