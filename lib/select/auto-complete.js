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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx,
    noop = _util.func.noop;

/**
 * Select.AutoComplete
 */

var AutoComplete = (_temp = _class = function (_Base) {
    (0, _inherits3.default)(AutoComplete, _Base);

    function AutoComplete(props) {
        (0, _classCallCheck3.default)(this, AutoComplete);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Base.call(this, props));

        _this.handleChange = function (value, proxy, item) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                readOnly = _this$props.readOnly,
                filterLocal = _this$props.filterLocal;


            if (disabled || readOnly) {
                return false;
            }

            var actionType = typeof proxy === 'string' ? proxy : 'change';

            _this.isInputing = actionType === 'change';

            if (filterLocal) {
                _this.setState({
                    dataSource: _this.dataStore.updateByKey(value)
                });

                _this.shouldControlPopup(_this.props, actionType);
                _this.setFirstHightLightKeyForMenu();
            }

            // 非受控模式清空内部数据
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }

            _this.props.onChange(value, actionType, item);

            if (actionType === 'itemClick' || actionType === 'enter') {
                // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
                _this.setVisible(false, actionType);
            }
        };

        _this.isAutoComplete = true;
        _this.isInputing = false;

        _this.dataStore.setOptions({ key: _this.state.value });
        (0, _extends3.default)(_this.state, {
            dataSource: _this.setDataSource(props)
        });

        bindCtx(_this, ['handleTriggerKeyDown', 'handleMenuSelect', 'handleItemClick']);
        return _this;
    }

    AutoComplete.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            (0, _extends3.default)(state, {
                value: nextProps.value
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

    AutoComplete.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var props = this.props;

        if ('value' in props) {
            this.dataStore.setOptions({ key: props.value });
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

            // remote dataSource and focused
            // 因为autoComplete没有下拉数据不展示，搜索并且有数据了需要自动展示下拉
            if (!props.filterLocal && this.isInputing) {
                this.shouldControlPopup(props, 'update');
            }
            if (!props.filterLocal && !props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }
    };

    AutoComplete.prototype.shouldControlPopup = function shouldControlPopup() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var type = arguments[1];

        var hasPopup = props.popupContent || this.dataStore.getMenuDS().length;
        if (hasPopup) {
            this.setVisible(true, type);
        } else {
            this.setVisible(false, type);
        }
    };

    AutoComplete.prototype.handleMenuSelect = function handleMenuSelect(keys) {
        var key = keys[0];

        var mapDS = this.dataStore.getMapDS();

        if (key in mapDS) {
            var item = mapDS[key];
            this.handleSelectEvent(key, item, 'itemClick');
        }
    };

    AutoComplete.prototype.handleItemClick = function handleItemClick() {
        this.setVisible(false, 'itemClick');
    };

    AutoComplete.prototype.handleSelectEvent = function handleSelectEvent(key, item, triggerType) {
        var value = item && item[this.props.fillProps] || key;

        if (triggerType === 'itemClick' || triggerType === 'enter') {
            // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
            this.setVisible(false, triggerType);
        }

        this.handleChange(value, triggerType, item);
    };

    AutoComplete.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        if (!('visible' in this.props) && visible && !this.props.popupContent && !this.dataStore.getMenuDS().length) {
            return;
        }

        this.setVisible(visible, type);
    };

    AutoComplete.prototype.beforeClose = function beforeClose() {
        this.isInputing = false;
    };

    /**
     * Handle trigger keydown event
     * @param {Event} e
     */


    AutoComplete.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
        var _props = this.props,
            popupContent = _props.popupContent,
            onToggleHighlightItem = _props.onToggleHighlightItem,
            onKeyDown = _props.onKeyDown;

        if (popupContent) {
            e.stopPropagation(); //stopPropagation can make use onChange triggerd while typing space('') in Input
            return onKeyDown(e);
        }

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
                this.chooseHighlightItem(e);
                break;
            case _util.KEYCODE.SPACE:
                // stopPropagation can make use onChange triggerd while typing space('') in Input
                e.stopPropagation();
                break;
            case _util.KEYCODE.ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'esc');
                break;
            default:
                break;
        }

        onKeyDown(e);
    };

    // 回车 选择高亮的 item


    AutoComplete.prototype.chooseHighlightItem = function chooseHighlightItem() {
        if (!this.state.visible) {
            return false;
        }

        var highlightKey = this.state.highlightKey;

        var highlightItem = this.dataStore.getEnableDS().find(function (item) {
            return highlightKey === '' + item.value;
        });

        if (highlightItem) {
            this.handleSelectEvent(highlightKey, highlightItem, 'enter');
        }
    };

    AutoComplete.prototype.hasClear = function hasClear() {
        var _props2 = this.props,
            hasClear = _props2.hasClear,
            readOnly = _props2.readOnly,
            disabled = _props2.disabled;
        var value = this.state.value;


        return value && hasClear && !readOnly && !disabled;
    };

    /**
     * 选择器
     * @override
     * @param {object} props
     */


    AutoComplete.prototype.renderSelect = function renderSelect() {
        var _classNames;

        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var placeholder = props.placeholder,
            size = props.size,
            prefix = props.prefix,
            className = props.className,
            style = props.style,
            label = props.label,
            readOnly = props.readOnly,
            disabled = props.disabled,
            highlightHolder = props.highlightHolder,
            locale = props.locale,
            hasClear = props.hasClear,
            state = props.state,
            rtl = props.rtl;

        var others = _util.obj.pickOthers(AutoComplete.propTypes, props);
        var othersData = _util.obj.pickAttrsWith(others, 'data-');

        var value = this.state.value;
        var visible = this.state.visible;

        // // 下拉箭头
        // const arrowNode = this.renderArrowNode(props, () => {
        //     this.focusInput();
        //     this.setVisible(!this.state.visible);
        // });

        // trigger className
        var triggerClazz = (0, _classnames2.default)([prefix + 'select', prefix + 'select-auto-complete', prefix + 'size-' + size, className], (_classNames = {}, _classNames[prefix + 'active'] = visible, _classNames[prefix + 'disabled'] = disabled, _classNames));

        // highlightKey into placeholder
        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.autoCompletePlaceholder || locale.autoCompletePlaceHolder;
        if (highlightHolder && visible) {
            _placeholder = this.state.highlightKey || _placeholder;
        }

        // Input props
        var _inputProps = (0, _extends3.default)({}, _util.obj.pickOthers(othersData, others), {
            state: state,
            ref: this.saveInputRef,
            hasClear: hasClear,
            value: value,
            size: size,
            disabled: disabled,
            readOnly: readOnly,
            placeholder: _placeholder,
            label: label,
            // extra: arrowNode,
            onChange: this.handleChange,
            onKeyDown: this.handleTriggerKeyDown
        });

        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({}, othersData, {
                className: triggerClazz,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                ref: this.saveSelectRef,
                onClick: this.focusInput
            }),
            _react2.default.createElement(_input2.default, (0, _extends3.default)({
                role: 'combobox',
                'aria-autocomplete': 'list',
                'aria-disabled': disabled,
                'aria-expanded': this.state.visible
            }, _inputProps)),
            _react2.default.createElement(
                'span',
                { className: prefix + 'sr-only', 'aria-live': 'polite' },
                this.state.srReader
            )
        );
    };

    AutoComplete.prototype.render = function render() {
        var _this2 = this;

        if (this.hasClear()) {
            // clear 按钮点击后，会在 dom 结构中被删除掉，需要将其额外设置为安全节点，防止触发弹层的显示或隐藏
            var safeNode = this.props.popupProps.safeNode || [];
            var safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
            safeNodes.push(function () {
                return _this2.clearNode;
            });
            this.props.popupProps.safeNode = safeNodes;
        }

        return _Base.prototype.render.call(this, (0, _extends3.default)({}, this.props, { canCloseByTrigger: false }));
    };

    return AutoComplete;
}(_base2.default), _class.propTypes = (0, _extends3.default)({}, _base2.default.propTypes, {
    /**
     * 当前值，用于受控模式
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * 初始化的默认值
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * Select发生改变时触发的回调
     * @param {*} value 选中的值
     * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'change'
     * @param {*} item 选中的值的对象数据
     */
    onChange: _propTypes2.default.func,
    /**
     * 传入的数据源，可以动态渲染子项
     */
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
        value: _propTypes2.default.string,
        label: _propTypes2.default.any,
        disabled: _propTypes2.default.bool,
        children: _propTypes2.default.array
    }), _propTypes2.default.string])),
    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps: _propTypes2.default.string,
    /**
     * 渲染 MenuItem 内容的方法
     * @param {Object} item 渲染节点的 item
     * @return {ReactNode} item node
     */
    itemRender: _propTypes2.default.func,
    // input keydown
    onKeyDown: _propTypes2.default.func,
    // 是否将当前高亮的选项作为 placeholder
    highlightHolder: _propTypes2.default.bool,
    style: _propTypes2.default.object
}), _class.defaultProps = (0, _extends3.default)({}, _base2.default.defaultProps, {
    onKeyDown: noop,
    fillProps: 'value'
}), _temp);
exports.default = (0, _reactLifecyclesCompat.polyfill)(AutoComplete);
module.exports = exports['default'];