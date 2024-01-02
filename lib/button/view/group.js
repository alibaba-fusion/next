"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_1 = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
var config_provider_1 = require("../../config-provider");
/**
 * Button.Group
 */
var ButtonGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, size = _b.size, children = _b.children, rtl = _b.rtl, others = tslib_1.__rest(_b, ["prefix", "className", "size", "children", "rtl"]);
        var groupCls = classNames((_a = {},
            _a["".concat(prefix, "btn-group")] = true,
            _a[className] = className,
            _a));
        var cloneChildren = react_1.Children.map(children, function (child) {
            if (child) {
                // fixme: child may not be cloned
                return React.cloneElement(child, {
                    size: size,
                });
            }
        });
        if (rtl) {
            others.dir = 'rtl';
        }
        return (React.createElement("div", tslib_1.__assign({}, others, { className: groupCls }), cloneChildren));
    };
    ButtonGroup.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { rtl: PropTypes.bool, prefix: PropTypes.string, size: PropTypes.string, className: PropTypes.string, children: PropTypes.node });
    ButtonGroup.defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };
    return ButtonGroup;
}(react_1.Component));
exports.default = config_provider_1.default.config(ButtonGroup);
