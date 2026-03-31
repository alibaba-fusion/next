"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../util");
var makeChain = util_1.func.makeChain;
/**
 * UIState 为一些特殊元素的状态响应提供了标准的方式，
 * 尤其适合 CSS 无法完全定制的控件，比如 checkbox，radio 等。
 * 若组件 disable 则自行判断是否需要绑定状态管理。
 * 注意：disable 不会触发事件，请使用 resetUIState 还原状态
 */
var UIState = /** @class */ (function (_super) {
    tslib_1.__extends(UIState, _super);
    function UIState(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        ['_onUIFocus', '_onUIBlur'].forEach(function (item) {
            _this[item] = _this[item].bind(_this);
        });
        return _this;
    }
    // base 事件绑定的元素
    UIState.prototype.getStateElement = function (base) {
        var _a = this.props, onFocus = _a.onFocus, onBlur = _a.onBlur;
        return react_1.default.cloneElement(base, {
            onFocus: makeChain(this._onUIFocus, onFocus),
            onBlur: makeChain(this._onUIBlur, onBlur),
        });
    };
    // 获取状态 classname
    UIState.prototype.getStateClassName = function () {
        var focused = this.state.focused;
        return (0, classnames_1.default)({
            focused: focused,
        });
    };
    // 复原状态
    UIState.prototype.resetUIState = function () {
        this.setState({
            focused: false,
        });
    };
    UIState.prototype._onUIFocus = function () {
        this.setState({
            focused: true,
        });
    };
    UIState.prototype._onUIBlur = function () {
        this.setState({
            focused: false,
        });
    };
    return UIState;
}(react_1.Component));
exports.default = UIState;
