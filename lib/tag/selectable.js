"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var tag_1 = require("./tag");
var noop = util_1.func.noop, bindCtx = util_1.func.bindCtx;
/**
 * Tag.Selectable
 */
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
    Selectable.propTypes = {
        /**
         * 标签是否被选中，受控用法
         * tag checked or not, a controlled way
         */
        checked: prop_types_1.default.bool,
        /**
         * 标签是否默认被选中，非受控用法
         * tag checked or not by default, a uncontrolled way
         */
        defaultChecked: prop_types_1.default.bool,
        /**
         * 选中状态变化时触发的事件
         * @param {Boolean} checked 是否选中
         * @param {Event} e Dom 事件对象
         */
        onChange: prop_types_1.default.func,
        /**
         * 标签是否被禁用
         */
        disabled: prop_types_1.default.bool,
        className: prop_types_1.default.any,
    };
    Selectable.defaultProps = {
        onChange: noop,
    };
    return Selectable;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Selectable);
