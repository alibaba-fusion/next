"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * List.Item
 */
var ListItem = /** @class */ (function (_super) {
    tslib_1.__extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, description = _a.description, media = _a.media, extra = _a.extra, className = _a.className, children = _a.children, others = tslib_1.__rest(_a, ["prefix", "title", "description", "media", "extra", "className", "children"]);
        var classes = (0, classnames_1.default)("".concat(prefix, "list-item"), className);
        return (react_1.default.createElement("li", tslib_1.__assign({}, others, { className: classes }),
            media ? react_1.default.createElement("div", { className: "".concat(prefix, "list-item-media") }, media) : null,
            react_1.default.createElement("div", { className: "".concat(prefix, "list-item-content") },
                title ? react_1.default.createElement("div", { className: "".concat(prefix, "list-item-title") }, title) : null,
                description ? (react_1.default.createElement("div", { className: "".concat(prefix, "list-item-description") }, description)) : null,
                children),
            extra ? react_1.default.createElement("div", { className: "".concat(prefix, "list-item-extra") }, extra) : null));
    };
    ListItem.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 列表元素的标题
         */
        title: prop_types_1.default.node,
        /**
         * 列表元素的描述内容
         */
        description: prop_types_1.default.node,
        /**
         * 列表元素的头像 / 图标 / 图片内容
         */
        media: prop_types_1.default.node,
        /**
         * 额外内容
         */
        extra: prop_types_1.default.node,
        className: prop_types_1.default.any,
    };
    ListItem.defaultProps = {
        prefix: 'next-',
    };
    return ListItem;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(ListItem));
