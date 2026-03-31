"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
function withCheckboxContext(Checkbox) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(WrappedComp, _super);
            function WrappedComp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WrappedComp.prototype.render = function () {
                return React.createElement(Checkbox, tslib_1.__assign({}, this.props, { context: this.context }));
            };
            return WrappedComp;
        }(React.Component)),
        _a.displayName = 'Checkbox',
        _a.contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            selectedValue: PropTypes.array,
            disabled: PropTypes.bool,
            prefix: PropTypes.string,
        },
        _a;
}
exports.default = withCheckboxContext;
