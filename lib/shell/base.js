"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
function Base(props) {
    var componentName = props.componentName;
    var Shell = /** @class */ (function (_super) {
        tslib_1.__extends(Shell, _super);
        function Shell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Shell.prototype.getChildContext = function () {
            var collapse = this.props.collapse;
            return {
                isCollapse: collapse,
            };
        };
        Shell.prototype.render = function () {
            var _a;
            var _b = this.props, prefix = _b.prefix, className = _b.className, miniable = _b.miniable, device = _b.device, direction = _b.direction, children = _b.children, collapse = _b.collapse, triggerProps = _b.triggerProps, onCollapseChange = _b.onCollapseChange, component = _b.component, align = _b.align, fixed = _b.fixed, others = tslib_1.__rest(_b, ["prefix", "className", "miniable", "device", "direction", "children", "collapse", "triggerProps", "onCollapseChange", "component", "align", "fixed"]);
            var Tag = component;
            var cls = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "shell-").concat(componentName.toLowerCase())] = true,
                _a["".concat(prefix, "shell-collapse")] = !!collapse,
                _a["".concat(prefix, "shell-mini")] = miniable,
                _a["".concat(prefix, "shell-nav-").concat(align)] = componentName === 'Navigation' && direction === 'hoz' && align,
                _a[className] = !!className,
                _a));
            var newChildren = children;
            if (componentName === 'Content') {
                newChildren = react_1.default.createElement("div", { className: "".concat(prefix, "shell-content-inner") }, children);
            }
            if (componentName === 'Page') {
                return children;
            }
            return (react_1.default.createElement(Tag, tslib_1.__assign({ className: cls }, others), newChildren));
        };
        Shell.displayName = componentName;
        Shell._typeMark = "Shell_".concat(componentName);
        Shell.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, collapse: prop_types_1.default.bool, miniable: prop_types_1.default.bool, component: prop_types_1.default.string, trigger: prop_types_1.default.node, triggerProps: prop_types_1.default.object, direction: prop_types_1.default.oneOf(['hoz', 'ver']), align: prop_types_1.default.oneOf(['left', 'right', 'center']), onCollapseChange: prop_types_1.default.func, fixed: prop_types_1.default.bool });
        Shell.defaultProps = {
            prefix: 'next-',
            component: 'div',
            onCollapseChange: function () { },
            fixed: false,
        };
        Shell.childContextTypes = {
            isCollapse: prop_types_1.default.bool,
        };
        return Shell;
    }(react_1.Component));
    return config_provider_1.default.config(Shell);
}
exports.default = Base;
