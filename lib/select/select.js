'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /* eslint-disable valid-jsdoc */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _tag = require('../tag');

var _tag2 = _interopRequireDefault(_tag);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _util2 = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx,
    noop = _util.func.noop;

var isIE9 = _util.env.ieVersion === 9;

/**
 * 无障碍化注意事项:
 * 1. Select 无搜索情况下，不应该让 Input 可focus，此时外层wrap必须可focus，并且需要相应focus事件让外边框发生变化
 *
 * TODO: hightLight 后续改造注意点
 * 1. hightLight 跟随点击变化(fixed) 2. 弹窗打开时根据 是否高亮第一个选项的 api开关设置是否hightLight 第一项
 */

// 自定义弹层：1. 不需要关心Menu的点击事件 2. 不需要关心dataSource变化

/**
 * Select
 */
var Select = (_temp = _class = function (_Base) {
    (0, _inherits3.default)(Select, _Base);

    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        // because dataSource maybe updated while select a item, so we should cache choosen value's item
        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

        _this.handleWrapClick = function (e) {
            // ignore click on input to choose text
            if (e.target.nodeName !== 'INPUT') {
                e.preventDefault();
            }
            _this.focusInput();
        };

        _this.handleArrowClick = function (e) {
            e.preventDefault();
            _this.focusInput();

            // because of can not close Popup by click Input while hasSearch.
            // so when Popup open and hasSearch, we should close Popup intentionally
            _this.state.visible && _this.hasSearch() && _this.setVisible(false);
        };

        _this.handleClear = function (e) {
            e.stopPropagation();
            _this.handleChange(undefined, 'clear');
        };

        _this.valueDataSource = {
            valueDS: [], // [{value,label}]
            mapValueDS: {} // {value: {value,label}}
        };

        var searchValue = 'searchValue' in props ? props.searchValue : '';

        _this.dataStore.setOptions({
            key: searchValue,
            addonKey: props.mode === 'tag' // tag 模式手动输入的数据
        });

        (0, _extends3.default)(_this.state, {
            searchValue: searchValue,
            dataSource: _this.setDataSource(props)
        });

        // 根据value和计算后的dataSource，更新value对应的详细数据valueDataSource
        if (typeof _this.state.value !== 'undefined') {
            _this.valueDataSource = (0, _util2.getValueDataSource)(_this.state.value, _this.valueDataSource.mapValueDS, _this.dataStore.getMapDS());
        }

        bindCtx(_this, ['handleMenuSelect', 'handleItemClick', 'handleSearch', 'handleSearchKeyDown', 'handleSelectAll', 'maxTagPlaceholder']);
        return _this;
    }

    Select.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            (0, _extends3.default)(state, {
                value: nextProps.value
            });
        }

        if ('searchValue' in nextProps && nextProps.searchValue !== prevState.searchValue) {
            var searchValue = nextProps.searchValue;
            (0, _extends3.default)(state, {
                searchValue: searchValue === undefined || searchValue === null ? '' : searchValue
            });
        }

        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            (0, _extends3.default)(state, {
                visible: nextProps.visible
            });
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    };

    Select.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var props = this.props;
        if ('searchValue' in props && this.state.searchValue !== prevState.searchValue) {
            this.dataStore.setOptions({ key: this.state.searchValue });
        }

        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag'
            });
        }
        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag'
            });
        }
        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal
            });
        }

        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({
                dataSource: this.setDataSource(props)
            });

            if (!props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }

        if ('value' in props) {
            this.valueDataSource = (0, _util2.getValueDataSource)(props.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
            this.updateSelectAllYet(this.valueDataSource.value);
        } else if ('defaultValue' in props && props.defaultValue === this.valueDataSource.value && (props.children !== prevProps.children || props.dataSource !== prevProps.dataSource)) {
            // has defaultValue and value not changed and dataSource changed
            // fix: set defaultValue first, then update dataSource.
            this.valueDataSource = (0, _util2.getValueDataSource)(props.defaultValue, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }

        if (prevProps.label !== this.props.label || prevState.value !== this.state.value || props.searchValue !== this.state.searchValue) {
            this.syncWidth();
        }
    };

    Select.prototype.componentDidMount = function componentDidMount() {
        if (isIE9) {
            this.ie9Hack();
        }
        _Base.prototype.componentDidMount.call(this);
    };

    // ie9 下 table-cell 布局不支持宽度超出隐藏


    Select.prototype.ie9Hack = function ie9Hack() {
        try {
            var width = this.selectDOM.currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto'
            });
        } catch (e) {
            //
        }
    };

    Select.prototype.useDetailValue = function useDetailValue() {
        var _props = this.props,
            popupContent = _props.popupContent,
            useDetailValue = _props.useDetailValue,
            dataSource = _props.dataSource;

        return useDetailValue || popupContent && !dataSource;
    };

    Select.prototype.hasSearch = function hasSearch() {
        var _props2 = this.props,
            showSearch = _props2.showSearch,
            mode = _props2.mode;

        return showSearch || mode === 'tag';
    };

    /**
     * Menu.Item onSelect
     * @private
     * @param  {Array<string>} keys
     * @
     */


    Select.prototype.handleMenuSelect = function handleMenuSelect(keys, item) {
        var _props3 = this.props,
            mode = _props3.mode,
            readOnly = _props3.readOnly,
            disabled = _props3.disabled;


        if (readOnly || disabled) {
            return false;
        }

        var isSingle = mode === 'single';

        if (isSingle) {
            // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        } else {
            // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick', item.props && item.props._key);
        }
    };

    Select.prototype.handleItemClick = function handleItemClick() {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }
    };

    /**
     * 单选模式
     */


    Select.prototype.handleSingleSelect = function handleSingleSelect(key, triggerType) {
        // TODO: 这里 cacheValue=false 有问题，dataSource 更新的时候就应该处理
        var cacheValue = this.props.cacheValue;
        // get data only from dataStore while cacheValue=false

        var itemObj = (0, _util2.getValueDataSource)(key, cacheValue ? this.valueDataSource.mapValueDS : {}, this.dataStore.getMapDS());
        this.valueDataSource = itemObj;

        this.setVisible(false, triggerType);

        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.setState({
            highlightKey: key
        });

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    };

    /**
     * 多选模式 multiple/tag
     */


    Select.prototype.handleMultipleSelect = function handleMultipleSelect(keys, triggerType, key, keepSearchValue) {
        var _this2 = this;

        var itemObj = (0, _util2.getValueDataSource)(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());

        var _props4 = this.props,
            cacheValue = _props4.cacheValue,
            mode = _props4.mode,
            hiddenSelected = _props4.hiddenSelected;

        // cache those value maybe not exists in dataSource

        if (cacheValue || mode === 'tag') {
            this.valueDataSource = itemObj;
        }

        if (hiddenSelected) {
            this.setVisible(false, triggerType);
        }

        // 因为搜索后会设置 hightLight 为第一个item，menu渲染会自动滚动到 hightLight 的元素上面。
        // 所以设置 hightLight 为当前选中项避免滚动
        key && this.state.visible && this.setState({
            highlightKey: key
        });

        if (this.useDetailValue()) {
            this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.updateSelectAllYet(itemObj.value);

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue && !keepSearchValue) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(function () {
                _this2.handleSearchClear(triggerType);
            });
        }
    };

    Select.prototype.updateSelectAllYet = function updateSelectAllYet(value) {
        var _this3 = this;

        // multiple mode
        // is current state select all or not
        this.selectAllYet = false;
        if (this.props.hasSelectAll && Array.isArray(value)) {
            var selectAllValues = this.dataStore.getEnableDS().map(function (item) {
                return item.value;
            });

            if (selectAllValues.length <= value.length) {
                this.selectAllYet = true;

                selectAllValues.forEach(function (val) {
                    if (value.indexOf(val) === -1) {
                        _this3.selectAllYet = false;
                        return;
                    }
                });
            }
        }
    };

    Select.prototype.handleSearchValue = function handleSearchValue(value) {
        if (this.state.searchValue === value) {
            return;
        }

        var filterLocal = this.props.filterLocal;


        if (filterLocal) {
            if (!('searchValue' in this.props)) {
                this.setState({
                    searchValue: value,
                    dataSource: this.dataStore.updateByKey(value)
                });
                this.setFirstHightLightKeyForMenu();
            }
        } else if (!('searchValue' in this.props)) {
            this.setState({
                searchValue: value
            });
        }
    };

    /**
     * Handle search input change event
     * @param {Event} e change Event
     */


    Select.prototype.handleSearch = function handleSearch(value) {
        this.handleSearchValue(value);

        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }

        this.props.onSearch(value);
    };

    Select.prototype.handleSearchClear = function handleSearchClear(triggerType) {
        this.handleSearchValue('');
        this.props.onSearchClear(triggerType);
    };

    // 搜索框 keyDown 事件


    Select.prototype.handleSearchKeyDown = function handleSearchKeyDown(e) {
        var _props5 = this.props,
            popupContent = _props5.popupContent,
            onKeyDown = _props5.onKeyDown,
            showSearch = _props5.showSearch,
            mode = _props5.mode,
            hasClear = _props5.hasClear,
            onToggleHighlightItem = _props5.onToggleHighlightItem,
            readOnly = _props5.readOnly,
            disabled = _props5.disabled;


        if (popupContent) {
            return onKeyDown(e);
        }

        var proxy = 'search';
        var hasSearch = this.hasSearch();

        switch (e.keyCode) {
            case _util.KEYCODE.UP:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(-1, e), 'up');
                break;
            case _util.KEYCODE.DOWN:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(1, e), 'down');
                break;
            case _util.KEYCODE.ENTER:
                e.preventDefault();
                if (readOnly || disabled) {
                    break;
                }
                this.chooseHighlightItem(proxy, e);
                break;
            case _util.KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'keyDown');
                break;
            case _util.KEYCODE.SPACE:
                e.stopPropagation();
                !hasSearch && e.preventDefault();
                break;
            case _util.KEYCODE.BACKSPACE:
                if (readOnly || disabled) {
                    break;
                }
                if (mode === 'multiple' && showSearch || mode === 'tag') {
                    // 在多选并且有搜索的情况下，删除最后一个 tag
                    var valueDS = this.valueDataSource.valueDS;
                    if (valueDS && valueDS.length && !valueDS[valueDS.length - 1].disabled) {
                        this.handleDeleteTag(e);
                    }
                } else if (mode === 'single' && hasClear && !this.state.visible) {
                    // 单选、非展开、并且可清除的情况，允许按删除键清除
                    this.handleClear(e);
                }
                break;
            default:
                break;
        }

        onKeyDown(e);
    };

    Select.prototype.chooseMultipleItem = function chooseMultipleItem(key) {
        var value = this.state.value || [];
        var keys = value.map(function (v) {
            return (0, _util2.valueToSelectKey)(v);
        });

        var keepSearchValue = false;

        var index = keys.map(function (v) {
            return '' + v;
        }).indexOf(key);

        if (index > -1) {
            // unselect
            keys.splice(index, 1);
            keepSearchValue = true; // 回车反选保留搜索值
        } else {
            // select
            keys.push(key);
        }

        this.handleMultipleSelect(keys, 'enter', null, keepSearchValue);
    };

    // 回车 选择高亮的 item


    Select.prototype.chooseHighlightItem = function chooseHighlightItem(proxy, e) {
        var mode = this.props.mode;


        if (!this.state.visible) {
            // input tag by itself
            if (mode === 'tag' && this.state.searchValue) {
                this.chooseMultipleItem(this.state.searchValue);
            }
            return false;
        }

        var highlightKey = this.state.highlightKey;

        // 没有高亮选项 或者 没有可选菜单

        if (highlightKey === null || !this.dataStore.getMenuDS().length) {
            return;
        }

        if (mode === 'single') {
            this.handleSingleSelect(highlightKey, 'enter');
        } else {
            this.chooseMultipleItem(highlightKey);
            // 阻止事件冒泡到最外层，让Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    };

    /**
     * Handle Tag close event
     * @param  {Object} item
     * @return {Boolean} false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */


    Select.prototype.handleTagClose = function handleTagClose(item) {
        var readOnly = this.props.readOnly;

        if (readOnly) return false;
        if (this.useDetailValue()) {
            var value = this.state.value.filter(function (v) {
                return item.value !== v.value;
            });

            this.handleChange(value, 'tag');
        } else {
            // filter out current item, and then call handleMenuSelect
            var _value = this.state.value.filter(function (v) {
                return item.value !== v;
            });

            this.handleMultipleSelect(_value, 'tag');
        }

        this.props.onRemove(item);

        // prevent tag close
        return false;
    };

    // eslint-disable-next-line valid-jsdoc
    /**
     * Handle BACKSPACE key event
     * @param {Event} e keyDown event
     * ---
     * It MUST be multiple mode
     */


    Select.prototype.handleDeleteTag = function handleDeleteTag(e) {
        var value = this.state.value;
        var searchValue = this.state.searchValue;

        if (searchValue || !value || !value.length) {
            return false;
        }

        e.preventDefault();

        var nextValues = value.slice(0, value.length - 1);
        // 手动调用 handleMenuSelect 时直接传入原生的 value，可以减少 toString 的操作

        if (this.useDetailValue()) {
            this.handleChange(nextValues, 'tag');
        } else {
            this.handleMultipleSelect(nextValues, 'tag');
        }
    };

    /**
     * Handle SelectAll span click event
     * @param {Event} e click event
     */


    Select.prototype.handleSelectAll = function handleSelectAll(e) {
        e && e.preventDefault();
        var nextValues = void 0;

        if (this.selectAllYet) {
            nextValues = [];
        } else {
            nextValues = this.dataStore.getEnableDS().map(function (item) {
                return item.value;
            });
        }

        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    };

    Select.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        this.setVisible(visible, type);
    };

    Select.prototype.afterClose = function afterClose() {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    };

    Select.prototype.maxTagPlaceholder = function maxTagPlaceholder(selectedValues, totalValues) {
        var locale = this.props.locale;


        return '' + _util.str.template(locale.maxTagPlaceholder, {
            selected: selectedValues.length,
            total: totalValues.length
        });
    };

    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * @param {object} props
     */


    Select.prototype.renderValues = function renderValues() {
        var _this4 = this;

        var _props6 = this.props,
            prefix = _props6.prefix,
            mode = _props6.mode,
            size = _props6.size,
            valueRender = _props6.valueRender,
            fillProps = _props6.fillProps,
            disabled = _props6.disabled,
            maxTagCount = _props6.maxTagCount,
            maxTagPlaceholder = _props6.maxTagPlaceholder,
            tagInline = _props6.tagInline;

        var value = this.state.value;

        if ((0, _util2.isNull)(value)) {
            return null;
        }

        // get detail value
        if (!this.useDetailValue()) {
            if (value === this.valueDataSource.value) {
                value = this.valueDataSource.valueDS;
            } else {
                value = (0, _util2.getValueDataSource)(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
            }
        }

        if (mode === 'single') {
            if (!value) {
                return null;
            }

            var retvalue = fillProps && fillProps in value ? value[fillProps] : valueRender(value);
            // 0 => '0'
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;
        } else if (value) {
            var limitedCountValue = value;
            var maxTagPlaceholderEl = void 0;
            var totalValue = this.dataStore.getFlattenDS();
            var holder = 'maxTagPlaceholder' in this.props ? maxTagPlaceholder : this.maxTagPlaceholder;

            if (maxTagCount !== undefined && value.length > maxTagCount && !tagInline) {
                limitedCountValue = limitedCountValue.slice(0, maxTagCount);
                maxTagPlaceholderEl = _react2.default.createElement(
                    _tag2.default,
                    {
                        key: '_count',
                        type: 'primary',
                        size: size === 'large' ? 'medium' : 'small',
                        animation: false
                    },
                    holder(value, totalValue)
                );
            }

            if (value.length > 0 && tagInline) {
                maxTagPlaceholderEl = _react2.default.createElement(
                    'div',
                    { className: prefix + 'select-tag-compact', key: '_count' },
                    holder(value, totalValue)
                );
            }

            value = limitedCountValue;
            if (!Array.isArray(value)) {
                value = [value];
            }

            var selectedValueNodes = value.map(function (v) {
                if (!v) {
                    return null;
                }
                var labelNode = fillProps ? v[fillProps] : valueRender(v);

                return _react2.default.createElement(
                    _tag2.default,
                    {
                        key: v.value,
                        disabled: disabled || v.disabled,
                        type: 'primary',
                        size: size === 'large' ? 'medium' : 'small',
                        animation: false,
                        onClose: _this4.handleTagClose.bind(_this4, v),
                        closable: true
                    },
                    labelNode
                );
            });

            if (maxTagPlaceholderEl) {
                if (tagInline) {
                    selectedValueNodes.unshift(maxTagPlaceholderEl);
                } else {
                    selectedValueNodes.push(maxTagPlaceholderEl);
                }
            }
            return selectedValueNodes;
        }

        return null;
    };
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     * @returns
     */


    Select.prototype.hasClear = function hasClear() {
        var _props7 = this.props,
            hasClear = _props7.hasClear,
            readOnly = _props7.readOnly,
            disabled = _props7.disabled,
            showSearch = _props7.showSearch;
        var _state = this.state,
            value = _state.value,
            visible = _state.visible;


        return typeof value !== 'undefined' && value !== null && hasClear && !readOnly && !disabled && !(showSearch && visible);
    };

    /**
     * render arrow
     * @param {object} props
     * @param {function} [clickHandler]
     */


    Select.prototype.renderExtraNode = function renderExtraNode() {
        var _props8 = this.props,
            hasArrow = _props8.hasArrow,
            hasClear = _props8.hasClear,
            prefix = _props8.prefix;


        var ret = [];

        if (hasArrow) {
            ret.push(_react2.default.createElement(
                'span',
                {
                    key: 'arrow',
                    'aria-hidden': true,
                    onClick: this.handleArrowClick,
                    className: prefix + 'select-arrow'
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-down',
                    className: prefix + 'select-symbol-fold'
                })
            ));
        }

        // do not use this.hasClear() here, to make sure clear btn always exists, can not influenced by apis like `disabled` `readOnly`
        if (hasClear) {
            ret.push(_react2.default.createElement(
                'span',
                {
                    key: 'clear',
                    'aria-hidden': true,
                    onClick: this.handleClear,
                    className: prefix + 'select-clear'
                },
                _react2.default.createElement(_icon2.default, { type: 'delete-filling' })
            ));
        }

        return ret;
    };

    /**
     * 选择器
     * @override
     * @param {object} props
     */


    Select.prototype.renderSelect = function renderSelect() {
        var _classNames,
            _this5 = this;

        var _props9 = this.props,
            prefix = _props9.prefix,
            showSearch = _props9.showSearch,
            placeholder = _props9.placeholder,
            mode = _props9.mode,
            size = _props9.size,
            className = _props9.className,
            style = _props9.style,
            readOnly = _props9.readOnly,
            disabled = _props9.disabled,
            hasBorder = _props9.hasBorder,
            label = _props9.label,
            locale = _props9.locale,
            state = _props9.state,
            onBlur = _props9.onBlur,
            onFocus = _props9.onFocus,
            onMouseEnter = _props9.onMouseEnter,
            onMouseLeave = _props9.onMouseLeave,
            rtl = _props9.rtl;

        var others = _util.obj.pickOthers(Select.propTypes, this.props);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');

        var visible = this.state.visible;
        var isSingle = mode === 'single';
        var hasSearch = this.hasSearch();
        var valueNodes = this.renderValues();

        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
        if (valueNodes && valueNodes.length) {
            _placeholder = null;
        }

        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }

        // 下拉箭头
        var extra = this.renderExtraNode();

        var triggerClazz = (0, _classnames2.default)([prefix + 'select', prefix + 'select-trigger', prefix + 'select-' + mode, '' + prefix + size, className], (_classNames = {}, _classNames[prefix + 'active'] = visible, _classNames[prefix + 'inactive'] = !visible, _classNames[prefix + 'no-search'] = !hasSearch, _classNames[prefix + 'has-search'] = hasSearch, _classNames[prefix + 'select-in-ie'] = isIE9, _classNames[prefix + 'select-in-ie-fixwidth'] = this.state.fixWidth, _classNames[prefix + 'has-clear'] = this.hasClear(), _classNames));

        var valuetext = this.valueDataSource.valueDS ? this.valueDataSource.valueDS.label : '';
        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({}, othersData, {
                className: triggerClazz,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                ref: this.saveSelectRef,
                onClick: this.handleWrapClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onMouseDown: this.handleWrapClick
            }),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({
                'aria-valuetext': valuetext
            }, _util.obj.pickOthers(othersData, others), {
                role: 'combobox',
                tabIndex: 0,
                'aria-expanded': this.state.visible,
                'aria-disabled': disabled,
                state: state,
                label: label,
                extra: extra,
                value: this.state.searchValue,
                size: size,
                readOnly: !this.hasSearch() || readOnly,
                disabled: disabled,
                placeholder: _placeholder,
                hasBorder: hasBorder,
                hasClear: false,
                htmlSize: '1',
                inputRender: function inputRender(inputEl) {
                    return _this5.renderSearchInput(valueNodes, _placeholder, inputEl);
                },
                onChange: this.handleSearch,
                onKeyDown: this.handleSearchKeyDown,
                onFocus: onFocus,
                onBlur: onBlur,
                className: prefix + 'select-inner',
                ref: this.saveInputRef
            })),
            _react2.default.createElement(
                'span',
                { className: prefix + 'sr-only', 'aria-live': 'polite' },
                this.state.srReader
            )
        );
    };

    Select.prototype.renderSearchInput = function renderSearchInput(valueNodes, placeholder, inputEl) {
        var _classNames2;

        var _props10 = this.props,
            prefix = _props10.prefix,
            mode = _props10.mode,
            tagInline = _props10.tagInline;

        var isSingle = mode === 'single';

        var mirrorText = this.state.searchValue;

        var cls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'select-values'] = true, _classNames2[prefix + 'input-text-field'] = true, _classNames2[prefix + 'select-compact'] = !isSingle && tagInline, _classNames2));

        var searchInput = [isSingle && valueNodes ? _react2.default.createElement(
            'em',
            { key: 'select-value' },
            valueNodes
        ) : valueNodes];
        var triggerSearch = _react2.default.createElement(
            'span',
            {
                key: 'trigger-search',
                className: prefix + 'select-trigger-search'
            },
            inputEl,
            _react2.default.createElement(
                'span',
                { 'aria-hidden': true },
                mirrorText || placeholder,
                '\xA0'
            )
        );

        if (!isSingle && tagInline) {
            searchInput.unshift(triggerSearch);
        } else {
            searchInput.push(triggerSearch);
        }

        return _react2.default.createElement(
            'span',
            { className: cls },
            searchInput
        );
    };

    /**
     * 渲染弹层的 header 内容
     * @override
     * @param {object} props
     */


    Select.prototype.renderMenuHeader = function renderMenuHeader() {
        var _classNames3, _classNames4;

        var _props11 = this.props,
            prefix = _props11.prefix,
            hasSelectAll = _props11.hasSelectAll,
            mode = _props11.mode,
            locale = _props11.locale,
            menuProps = _props11.menuProps;


        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }

        var sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }

        var text = typeof hasSelectAll === 'boolean' ? locale.selectAll : hasSelectAll;

        var selectAllYet = this.selectAllYet;

        var cls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'select-all'] = true, _classNames3[prefix + 'selected'] = selectAllYet, _classNames3));

        var clsInner = (0, _classnames2.default)((_classNames4 = {}, _classNames4[prefix + 'select-all-inner'] = true, _classNames4));

        // remove style={{'lineHeight': 'unset'}} in next Y
        // remove style={{'display': 'none'}} in next Y
        return _react2.default.createElement(
            'div',
            {
                key: 'all',
                onClick: this.handleSelectAll,
                className: cls,
                style: { lineHeight: 'unset' }
            },
            selectAllYet ? _react2.default.createElement(_icon2.default, {
                className: prefix + 'menu-icon-selected',
                style: { display: 'none' },
                type: 'select'
            }) : null,
            _react2.default.createElement(
                'span',
                { className: clsInner },
                text
            )
        );
    };

    Select.prototype.render = function render() {
        var mode = this.props.mode;

        var props = (0, _extends3.default)({}, this.props);

        // forbid to close Popup by click Input while hasSearch
        if (this.hasSearch()) {
            props.canCloseByTrigger = false;
        }
        if (mode === 'single') {
            props.cache = true;
        }
        return _Base.prototype.render.call(this, props);
    };

    return Select;
}(_base2.default), _class.propTypes = (0, _extends3.default)({}, _base2.default.propTypes, {
    /**
     * 选择器模式
     */
    mode: _propTypes2.default.oneOf(['single', 'multiple', 'tag']),
    /**
     * 当前值，用于受控模式
     */
    value: _propTypes2.default.any,
    /**
     * 初始的默认值
     */
    defaultValue: _propTypes2.default.any,
    /**
     * Select发生改变时触发的回调
     * @param {*} value 选中的值
     * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'tag'
     * @param {*} item 选中的值的对象数据 (useDetailValue=false有效)
     */
    onChange: _propTypes2.default.func,
    /**
     * 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)
     */
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
        value: _propTypes2.default.any,
        label: _propTypes2.default.any,
        disabled: _propTypes2.default.bool,
        children: _propTypes2.default.array
    }), _propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string])),
    /**
     * 是否有边框
     */
    hasBorder: _propTypes2.default.bool,
    /**
     * 是否有下拉箭头
     */
    hasArrow: _propTypes2.default.bool,
    /**
     * 展开后是否能搜索（tag 模式下固定为true）
     */
    showSearch: _propTypes2.default.bool,
    /**
     * 当搜索框值变化时回调
     * @param {String} value 数据
     */
    onSearch: _propTypes2.default.func,
    /**
     * 当搜索框值被清空时候的回调
     * @param {String} actionType 触发的方式, 'select'(选择清空), 'popupClose'(弹窗关闭清空)
     */
    onSearchClear: _propTypes2.default.func,
    /**
     * 多选模式下是否有全选功能
     */
    hasSelectAll: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    /**
     * 填充到选择框里的值的 key
     */
    fillProps: _propTypes2.default.string,
    /**
     * onChange 返回的 value 使用 dataSource 的对象
     */
    useDetailValue: _propTypes2.default.bool,
    /**
     * dataSource 变化的时是否保留已选的内容
     */
    cacheValue: _propTypes2.default.bool,
    /**
     * 渲染 Select 展现内容的方法
     * @param {Object} item 渲染节点的item
     * @return {ReactNode} 展现内容
     * @default item => item.label \|\| item.value
     */
    valueRender: _propTypes2.default.func,
    /**
     * 渲染 MenuItem 内容的方法
     * @param {Object} item 渲染节点的item
     * @param {String} searchValue 搜索关键字（如果开启搜索）
     * @return {ReactNode} item node
     */
    itemRender: _propTypes2.default.func,
    /**
     * 弹层内容为空的文案
     */
    notFoundContent: _propTypes2.default.node,
    style: _propTypes2.default.object,
    /**
     * 受控搜索值，一般不需要设置
     * @type {[type]}
     */
    searchValue: _propTypes2.default.string,
    /**
     * 是否一行显示，仅在 mode 为 multiple 的时候生效
     */
    tagInline: _propTypes2.default.bool,
    /**
     * 最多显示多少个 tag
     */
    maxTagCount: _propTypes2.default.number,
    /**
     * 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用
     * @param {object} selectedValues 当前已选中的元素
     * @param {object} totalValues 总待选元素
     */
    maxTagPlaceholder: _propTypes2.default.func,
    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected: _propTypes2.default.bool,
    /**
     * tag 删除回调
     * @param {object} item 渲染节点的item
     */
    onRemove: _propTypes2.default.func,
    /**
     * 焦点事件
     */
    onFocus: _propTypes2.default.func,
    /**
     * 是否自动高亮第一个选项
     */
    // highlightFirstItem: PropTypes.bool,
    /**
     * 失去焦点事件
     */
    onBlur: _propTypes2.default.func,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    /**
     * 展开下拉菜单时是否自动焦点到弹层
     */
    popupAutoFocus: _propTypes2.default.bool,
    /**
     * 是否展示 dataSource 中 children
     */
    showDataSourceChildren: _propTypes2.default.bool
}), _class.defaultProps = (0, _extends3.default)({}, _base2.default.defaultProps, {
    locale: _zhCn2.default.Select,
    mode: 'single',
    showSearch: false,
    cacheValue: true,
    tagInline: false,
    onSearch: noop,
    onSearchClear: noop,
    hasArrow: true,
    onRemove: noop,
    // highlightFirstItem: true,
    valueRender: function valueRender(item) {
        return item.label || item.value;
    },
    onKeyDown: noop,
    onFocus: noop,
    onBlur: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
    popupAutoFocus: false
}), _class.displayName = 'Select', _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(Select);
module.exports = exports['default'];