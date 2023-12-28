"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
function withContext(Checkbox) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(WrappedComp, _super);
            function WrappedComp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WrappedComp.prototype.render = function () {
                return react_1.default.createElement(Checkbox, tslib_1.__assign({}, this.props, { context: this.context }));
            };
            return WrappedComp;
        }(react_1.default.Component)),
        _a.displayName = 'Checkbox',
        _a.contextTypes = {
            onChange: prop_types_1.default.func,
            __group__: prop_types_1.default.bool,
            selectedValue: prop_types_1.default.array,
            disabled: prop_types_1.default.bool,
            prefix: prop_types_1.default.string,
        },
        _a;
}
exports.default = withContext;
