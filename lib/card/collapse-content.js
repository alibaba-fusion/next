"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var button_1 = tslib_1.__importDefault(require("../button"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var CardCollapseContent = /** @class */ (function (_super) {
    tslib_1.__extends(CardCollapseContent, _super);
    function CardCollapseContent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleToggle = function () {
            _this.setState(function (prevState) {
                return {
                    expand: !prevState.expand,
                };
            });
        };
        _this._contentRefHandler = function (ref) {
            _this.content = ref;
        };
        _this.saveFooter = function (ref) {
            _this.footer = ref;
        };
        _this.state = {
            needMore: false,
            expand: false,
            contentHeight: 'auto',
        };
        return _this;
    }
    CardCollapseContent.prototype.componentDidMount = function () {
        this._setNeedMore();
        this._setContentHeight();
    };
    CardCollapseContent.prototype.componentDidUpdate = function () {
        this._setContentHeight();
    };
    // 是否展示 More 按钮
    CardCollapseContent.prototype._setNeedMore = function () {
        var contentHeight = this.props.contentHeight;
        var childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight,
        });
    };
    // 设置 Body 的高度
    CardCollapseContent.prototype._setContentHeight = function () {
        if (this.props.contentHeight === 'auto') {
            this.content.style.height = 'auto';
            return;
        }
        if (this.state.expand) {
            var childrenHeight = this._getNodeChildrenHeight(this.content);
            this.content.style.height = "".concat(childrenHeight, "px"); // get the real height
        }
        else {
            var el = react_dom_1.default.findDOMNode(this.footer);
            var height = this.props.contentHeight;
            if (el) {
                height = height - el.getBoundingClientRect().height;
            }
            this.content.style.height = "".concat(height, "px");
        }
    };
    CardCollapseContent.prototype._getNodeChildrenHeight = function (node) {
        if (!node) {
            return 0;
        }
        var contentChildNodes = node.childNodes;
        var length = contentChildNodes.length;
        if (!length) {
            return 0;
        }
        var lastNode = contentChildNodes[length - 1];
        return lastNode.offsetTop + lastNode.offsetHeight;
    };
    CardCollapseContent.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, children = _a.children, locale = _a.locale;
        var _b = this.state, needMore = _b.needMore, expand = _b.expand;
        return (react_1.default.createElement("div", { className: "".concat(prefix, "card-body") },
            react_1.default.createElement("div", { className: "".concat(prefix, "card-content"), ref: this._contentRefHandler }, children),
            needMore ? (react_1.default.createElement("div", { className: "".concat(prefix, "card-footer"), ref: this.saveFooter, onClick: this.handleToggle },
                react_1.default.createElement(button_1.default, { text: true, type: "primary" },
                    expand ? locale.fold : locale.expand,
                    react_1.default.createElement(icon_1.default, { type: "arrow-down", className: expand ? 'expand' : '' })))) : null));
    };
    CardCollapseContent.displayName = 'CardCollapseContent';
    CardCollapseContent.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 内容区域的固定高度
         */
        contentHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        locale: prop_types_1.default.object,
        children: prop_types_1.default.node,
    };
    CardCollapseContent.defaultProps = {
        prefix: 'next-',
        contentHeight: 120,
        locale: zh_cn_1.default.Card,
    };
    return CardCollapseContent;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardCollapseContent, {
    componentName: 'Card',
});
