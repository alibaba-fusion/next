import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj, func } from '../util';
import Tag from './tag';
var noop = func.noop, bindCtx = func.bindCtx;
/**
 * Tag.Selectable
 */
var Selectable = /** @class */ (function (_super) {
    __extends(Selectable, _super);
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
        var others = obj.pickOthers(attrFilterTarget, this.props);
        var isChecked = 'checked' in this.props ? this.props.checked : this.state.checked;
        var clazz = classNames(this.props.className, {
            checked: isChecked,
        });
        return (React.createElement(Tag, __assign({}, others, { role: "checkbox", _shape: "checkable", "aria-checked": isChecked, className: clazz, onClick: this.handleClick })));
    };
    Selectable.propTypes = {
        /**
         * 标签是否被选中，受控用法
         * tag checked or not, a controlled way
         */
        checked: PropTypes.bool,
        /**
         * 标签是否默认被选中，非受控用法
         * tag checked or not by default, a uncontrolled way
         */
        defaultChecked: PropTypes.bool,
        /**
         * 选中状态变化时触发的事件
         * @param {Boolean} checked 是否选中
         * @param {Event} e Dom 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 标签是否被禁用
         */
        disabled: PropTypes.bool,
        className: PropTypes.any,
    };
    Selectable.defaultProps = {
        onChange: noop,
    };
    return Selectable;
}(Component));
export default polyfill(Selectable);
