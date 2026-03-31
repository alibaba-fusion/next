"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var input_1 = tslib_1.__importDefault(require("./input"));
var index_1 = tslib_1.__importDefault(require("../icon/index"));
function preventDefault(e) {
    e.preventDefault();
}
var Password = /** @class */ (function (_super) {
    tslib_1.__extends(Password, _super);
    function Password() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            hint: 'eye-close',
            htmlType: 'password',
        };
        _this.toggleEye = function (e) {
            e.preventDefault();
            if (_this.props.disabled)
                return;
            var eyeClose = _this.state.hint === 'eye';
            _this.setState({
                hint: eyeClose ? 'eye-close' : 'eye',
                htmlType: eyeClose || !_this.props.showToggle ? 'password' : 'text',
            });
        };
        return _this;
    }
    Password.prototype.render = function () {
        var _a = this.props, showToggle = _a.showToggle, others = tslib_1.__rest(_a, ["showToggle"]);
        var _b = this.state, hint = _b.hint, htmlType = _b.htmlType;
        var extra = showToggle ? (react_1.default.createElement(index_1.default, { type: hint, onClick: this.toggleEye, onMouseDown: preventDefault })) : null;
        return react_1.default.createElement(input_1.default, tslib_1.__assign({}, others, { extra: extra, htmlType: htmlType }));
    };
    Password.displayName = 'Password';
    Password.getDerivedStateFromProps = input_1.default.getDerivedStateFromProps;
    Password.propTypes = tslib_1.__assign(tslib_1.__assign({}, input_1.default.propTypes), { showToggle: prop_types_1.default.bool });
    Password.defaultProps = tslib_1.__assign(tslib_1.__assign({}, input_1.default.defaultProps), { showToggle: true });
    return Password;
}(input_1.default));
exports.default = Password;
