import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import { func, KEYCODE } from '../util';
/** Collapse.Panel */
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onKeyDown = function (e) {
            var keyCode = e.keyCode;
            if (keyCode === KEYCODE.SPACE) {
                var onClick = _this.props.onClick;
                e.preventDefault();
                onClick && onClick(e);
            }
        };
        return _this;
    }
    Panel.prototype.render = function () {
        var _a, _b;
        var _c = this.props, title = _c.title, children = _c.children, className = _c.className, isExpanded = _c.isExpanded, disabled = _c.disabled, style = _c.style, prefix = _c.prefix, onClick = _c.onClick, id = _c.id, others = __rest(_c, ["title", "children", "className", "isExpanded", "disabled", "style", "prefix", "onClick", "id"]);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "collapse-panel")] = true,
            _a["".concat(prefix, "collapse-panel-hidden")] = !isExpanded,
            _a["".concat(prefix, "collapse-panel-expanded")] = isExpanded,
            _a["".concat(prefix, "collapse-panel-disabled")] = disabled,
            _a[className] = className,
            _a));
        var iconCls = classNames((_b = {},
            _b["".concat(prefix, "collapse-panel-icon")] = true,
            _b["".concat(prefix, "collapse-panel-icon-expanded")] = isExpanded,
            _b));
        // 为了无障碍 需要添加两个 id
        var headingId = id ? "".concat(id, "-heading") : undefined;
        var regionId = id ? "".concat(id, "-region") : undefined;
        return (React.createElement("div", __assign({ className: cls, style: style, id: id }, others),
            React.createElement("div", { id: headingId, className: "".concat(prefix, "collapse-panel-title"), onClick: onClick, onKeyDown: this.onKeyDown, tabIndex: 0, "aria-disabled": disabled, "aria-expanded": isExpanded, "aria-controls": regionId, role: "button" },
                React.createElement(Icon, { type: "arrow-right", className: iconCls, "aria-hidden": "true" }),
                title),
            React.createElement("div", { className: "".concat(prefix, "collapse-panel-content"), role: "region", id: regionId }, children)));
    };
    Panel.propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        /**
         * 子组件接受行内样式
         */
        style: PropTypes.object,
        children: PropTypes.any,
        isExpanded: PropTypes.bool,
        /**
         * 是否禁止用户操作
         */
        disabled: PropTypes.bool,
        /**
         * 标题
         */
        title: PropTypes.node,
        /**
         * 扩展 class
         */
        className: PropTypes.string,
        onClick: PropTypes.func,
        id: PropTypes.string,
    };
    Panel.defaultProps = {
        prefix: 'next-',
        isExpanded: false,
        onClick: func.noop,
    };
    Panel.isNextPanel = true;
    return Panel;
}(React.Component));
export default ConfigProvider.config(Panel);
