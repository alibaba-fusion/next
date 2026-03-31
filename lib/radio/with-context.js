"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
function withContext(Radio) {
    var WrappedComp = /** @class */ (function (_super) {
        tslib_1.__extends(WrappedComp, _super);
        function WrappedComp(props) {
            var _this = _super.call(this, props) || this;
            _this.radioRef = null;
            return _this;
        }
        WrappedComp.prototype.focus = function () {
            if (this.radioRef) {
                this.radioRef.focus();
            }
        };
        WrappedComp.prototype.render = function () {
            var _this = this;
            return (react_1.default.createElement(Radio, tslib_1.__assign({ ref: function (el) {
                    _this.radioRef = el;
                } }, this.props, { context: this.context })));
        };
        WrappedComp.displayName = 'Radio';
        WrappedComp.contextTypes = {
            onChange: prop_types_1.default.func,
            __group__: prop_types_1.default.bool,
            isButton: prop_types_1.default.bool,
            selectedValue: prop_types_1.default.oneOfType([
                prop_types_1.default.string,
                prop_types_1.default.number,
                prop_types_1.default.bool,
            ]),
            disabled: prop_types_1.default.bool,
        };
        return WrappedComp;
    }(react_1.default.Component));
    return WrappedComp;
}
exports.default = withContext;
