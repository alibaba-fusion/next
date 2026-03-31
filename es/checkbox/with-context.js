import { __assign, __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
export default function withCheckboxContext(Checkbox) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(WrappedComp, _super);
            function WrappedComp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WrappedComp.prototype.render = function () {
                return React.createElement(Checkbox, __assign({}, this.props, { context: this.context }));
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
