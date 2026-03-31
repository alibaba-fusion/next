import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
export default function Base(props) {
    var componentName = props.componentName;
    var Shell = /** @class */ (function (_super) {
        __extends(Shell, _super);
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
            var _b = this.props, prefix = _b.prefix, className = _b.className, miniable = _b.miniable, device = _b.device, direction = _b.direction, children = _b.children, collapse = _b.collapse, triggerProps = _b.triggerProps, onCollapseChange = _b.onCollapseChange, component = _b.component, align = _b.align, fixed = _b.fixed, others = __rest(_b, ["prefix", "className", "miniable", "device", "direction", "children", "collapse", "triggerProps", "onCollapseChange", "component", "align", "fixed"]);
            var Tag = component;
            var cls = classnames((_a = {},
                _a["".concat(prefix, "shell-").concat(componentName.toLowerCase())] = true,
                _a["".concat(prefix, "shell-collapse")] = !!collapse,
                _a["".concat(prefix, "shell-mini")] = miniable,
                _a["".concat(prefix, "shell-nav-").concat(align)] = componentName === 'Navigation' && direction === 'hoz' && align,
                _a[className] = !!className,
                _a));
            var newChildren = children;
            if (componentName === 'Content') {
                newChildren = React.createElement("div", { className: "".concat(prefix, "shell-content-inner") }, children);
            }
            if (componentName === 'Page') {
                return children;
            }
            return (React.createElement(Tag, __assign({ className: cls }, others), newChildren));
        };
        Shell.displayName = componentName;
        Shell._typeMark = "Shell_".concat(componentName);
        Shell.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, collapse: PropTypes.bool, miniable: PropTypes.bool, component: PropTypes.string, trigger: PropTypes.node, triggerProps: PropTypes.object, direction: PropTypes.oneOf(['hoz', 'ver']), align: PropTypes.oneOf(['left', 'right', 'center']), onCollapseChange: PropTypes.func, fixed: PropTypes.bool });
        Shell.defaultProps = {
            prefix: 'next-',
            component: 'div',
            onCollapseChange: function () { },
            fixed: false,
        };
        Shell.childContextTypes = {
            isCollapse: PropTypes.bool,
        };
        return Shell;
    }(Component));
    return ConfigProvider.config(Shell);
}
