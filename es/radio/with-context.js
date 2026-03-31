import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
export default function withContext(Radio) {
    var WrappedComp = /** @class */ (function (_super) {
        __extends(WrappedComp, _super);
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
            return (React.createElement(Radio, __assign({ ref: function (el) {
                    _this.radioRef = el;
                } }, this.props, { context: this.context })));
        };
        WrappedComp.displayName = 'Radio';
        WrappedComp.contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            isButton: PropTypes.bool,
            selectedValue: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
            ]),
            disabled: PropTypes.bool,
        };
        return WrappedComp;
    }(React.Component));
    return WrappedComp;
}
