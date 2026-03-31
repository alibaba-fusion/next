"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var tag_1 = tslib_1.__importDefault(require("./tag"));
var noop = util_1.func.noop, bindCtx = util_1.func.bindCtx;
var Selectable = /** @class */ (function (_super) {
    tslib_1.__extends(Selectable, _super);
    function Selectable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked || false,
        };
        bindCtx(_this, ['handleClick']);
        return _this;
    }
    Selectable.getDerivedStateFromProps = function (props, state) {
        if (props.checked !== undefined && props.checked !== state.checked) {
            return {
                checked: props.checked,
            };
        }
        return null;
    };
    Selectable.prototype.handleClick = function (e) {
        e && e.preventDefault();
        // IE9 不支持 pointer-events，还是可能会触发 click 事件
        if (this.props.disabled) {
            return false;
        }
        var checked = this.state.checked;
        this.setState({
            checked: !checked,
        });
        this.props.onChange(!checked, e);
    };
    Selectable.prototype.render = function () {
        var attrFilterTarget = [
            'checked',
            'defaultChecked',
            'onChange',
            'className',
            // 防止这些额外的参数影响 tag 的类型
            '_shape',
            'closable',
        ];
        var others = util_1.obj.pickOthers(attrFilterTarget, this.props);
        var isChecked = 'checked' in this.props ? this.props.checked : this.state.checked;
        var clazz = (0, classnames_1.default)(this.props.className, {
            checked: isChecked,
        });
        return (react_1.default.createElement(tag_1.default, tslib_1.__assign({}, others, { role: "checkbox", _shape: "checkable", "aria-checked": isChecked, className: clazz, onClick: this.handleClick })));
    };
    Selectable.defaultProps = {
        onChange: noop,
    };
    return Selectable;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Selectable);
