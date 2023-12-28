"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
var panel_1 = require("./panel");
/** Collapse */
var Collapse = /** @class */ (function (_super) {
    tslib_1.__extends(Collapse, _super);
    function Collapse(props) {
        var _this = _super.call(this, props) || this;
        var expandedKeys;
        if ('expandedKeys' in props) {
            expandedKeys = props.expandedKeys;
        }
        else {
            expandedKeys = props.defaultExpandedKeys;
        }
        _this.state = {
            expandedKeys: typeof expandedKeys === 'undefined' ? [] : expandedKeys,
        };
        return _this;
    }
    Collapse.getDerivedStateFromProps = function (props) {
        if ('expandedKeys' in props) {
            return {
                expandedKeys: typeof props.expandedKeys === 'undefined' ? [] : props.expandedKeys,
            };
        }
        return null;
    };
    Collapse.prototype.onItemClick = function (key) {
        var expandedKeys = this.state.expandedKeys;
        if (this.props.accordion) {
            expandedKeys = String(expandedKeys[0]) === String(key) ? [] : [key];
        }
        else {
            expandedKeys = tslib_1.__spreadArray([], tslib_1.__read(expandedKeys), false);
            var stringKey_1 = String(key);
            var index = expandedKeys.findIndex(function (k) { return String(k) === stringKey_1; });
            var isExpanded = index > -1;
            if (isExpanded) {
                expandedKeys.splice(index, 1);
            }
            else {
                expandedKeys.push(key);
            }
        }
        this.setExpandedKey(expandedKeys);
    };
    Collapse.prototype.genratePanelId = function (itemId, index) {
        var collapseId = this.props.id;
        var id;
        if (itemId) {
            // 优先用 item自带的id
            id = itemId;
        }
        else if (collapseId) {
            // 其次用 collapseId 和 index 生成id
            id = "".concat(collapseId, "-panel-").concat(index);
        }
        return id;
    };
    Collapse.prototype.getProps = function (item, index, key) {
        var _this = this;
        var expandedKeys = this.state.expandedKeys;
        var title = item.title;
        var disabled = this.props.disabled;
        if (!disabled) {
            disabled = item.disabled;
        }
        var isExpanded = false;
        if (this.props.accordion) {
            isExpanded = String(expandedKeys[0]) === String(key);
        }
        else {
            isExpanded = expandedKeys.some(function (expandedKey) {
                if (expandedKey === null || expandedKey === undefined || key === null || key === undefined) {
                    return false;
                }
                if (expandedKey === key || expandedKey.toString() === key.toString()) {
                    return true;
                }
                return false;
            });
        }
        var id = this.genratePanelId(item.id, index);
        return {
            key: key,
            title: title,
            isExpanded: isExpanded,
            disabled: disabled,
            id: id,
            onClick: disabled
                ? null
                : function () {
                    _this.onItemClick(key);
                    if ('onClick' in item) {
                        item.onClick(key);
                    }
                },
        };
    };
    Collapse.prototype.getItemsByDataSource = function () {
        var _this = this;
        var props = this.props;
        var dataSource = props.dataSource;
        // 是否有dataSource.item传入过key
        var hasKeys = dataSource.some(function (item) { return 'key' in item; });
        return dataSource.map(function (item, index) {
            // 传入过key就用item.key 没传入则统一使用index为key
            var key = hasKeys ? item.key : "".concat(index);
            return (react_1.default.createElement(panel_1.default, tslib_1.__assign({}, _this.getProps(item, index, key), { key: key }), item.content));
        });
    };
    Collapse.prototype.getItemsByChildren = function () {
        var _this = this;
        // 是否有child传入过key
        var allKeys = react_1.default.Children.map(this.props.children, function (child) { return child && child.key; });
        var hasKeys = Boolean(allKeys && allKeys.length);
        return react_1.default.Children.map(this.props.children, function (child, index) {
            if (child && typeof child.type === 'function' && child.type.isNextPanel) {
                // 传入过key就用child.key 没传入则统一使用index为key
                var key = hasKeys ? child.key : "".concat(index);
                return react_1.default.cloneElement(child, _this.getProps(child.props, index, key));
            }
            else {
                return child;
            }
        });
    };
    Collapse.prototype.setExpandedKey = function (expandedKeys) {
        if (!('expandedKeys' in this.props)) {
            this.setState({ expandedKeys: expandedKeys });
        }
        this.props.onExpand(this.props.accordion ? expandedKeys[0] : expandedKeys);
    };
    Collapse.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, disabled = _b.disabled, dataSource = _b.dataSource, id = _b.id, rtl = _b.rtl;
        var collapseClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "collapse")] = true,
            _a["".concat(prefix, "collapse-disabled")] = disabled,
            _a[className] = Boolean(className),
            _a));
        var others = util_1.obj.pickOthers(Collapse.propTypes, this.props);
        return (react_1.default.createElement("div", tslib_1.__assign({ id: id, className: collapseClassName, style: style }, others, { role: "presentation", dir: rtl ? 'rtl' : undefined }), dataSource ? this.getItemsByDataSource() : this.getItemsByChildren()));
    };
    Collapse.propTypes = {
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 组件接受行内样式
         */
        style: prop_types_1.default.object,
        /**
         * 使用数据模型构建
         */
        dataSource: prop_types_1.default.array,
        /**
         * 默认展开keys
         */
        defaultExpandedKeys: prop_types_1.default.array,
        /**
         * 受控展开keys
         */
        expandedKeys: prop_types_1.default.array,
        /**
         * 展开状态发升变化时候的回调
         */
        onExpand: prop_types_1.default.func,
        /**
         * 所有禁用
         */
        disabled: prop_types_1.default.bool,
        /**
         * 扩展class
         */
        className: prop_types_1.default.string,
        /**
         * 手风琴模式，一次只能打开一个
         */
        accordion: prop_types_1.default.bool,
        children: prop_types_1.default.node,
        id: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
    };
    Collapse.defaultProps = {
        accordion: false,
        prefix: 'next-',
        onExpand: util_1.func.noop,
    };
    Collapse.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    return Collapse;
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(config_provider_1.default.config(Collapse));
