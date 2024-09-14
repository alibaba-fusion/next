import { __assign, __extends } from "tslib";
import React, { Component, Children } from 'react';
import * as PropTypes from 'prop-types';
import Overlay from '../overlay';
import { func } from '../util';
var noop = func.noop, makeChain = func.makeChain, bindCtx = func.bindCtx;
var Popup = Overlay.Popup;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible || false,
            autoFocus: 'autoFocus' in props ? props.autoFocus : false,
        };
        bindCtx(_this, ['onTriggerKeyDown', 'onMenuClick', 'onVisibleChange']);
        return _this;
    }
    Dropdown.getDerivedStateFromProps = function (nextProps) {
        var state = {};
        if ('visible' in nextProps) {
            state.visible = nextProps.visible;
        }
        return state;
    };
    Dropdown.prototype.getVisible = function (props) {
        if (props === void 0) { props = this.props; }
        return 'visible' in props ? props.visible : this.state.visible;
    };
    Dropdown.prototype.onMenuClick = function () {
        var autoClose = this.props.autoClose;
        if (!('visible' in this.props) && autoClose) {
            this.setState({
                visible: false,
            });
        }
        this.onVisibleChange(false, 'fromContent');
    };
    Dropdown.prototype.onVisibleChange = function (visible, from) {
        this.setState({ visible: visible });
        this.props.onVisibleChange(visible, from);
    };
    Dropdown.prototype.onTriggerKeyDown = function () {
        var autoFocus = true;
        if ('autoFocus' in this.props) {
            autoFocus = this.props.autoFocus;
        }
        this.setState({
            autoFocus: autoFocus,
        });
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, rtl = _a.rtl, autoClose = _a.autoClose, trigger = _a.trigger;
        var child = Children.only(this.props.children);
        var content = child;
        if (typeof child.type === 'function' &&
            child.type.isNextMenu) {
            content = React.cloneElement(child, {
                onItemClick: makeChain(this.onMenuClick, child.props.onItemClick),
            });
        }
        else if (autoClose) {
            content = React.cloneElement(child, {
                onClick: makeChain(this.onMenuClick, child.props.onClick),
            });
        }
        var newTrigger = React.cloneElement(trigger, {
            onKeyDown: makeChain(this.onTriggerKeyDown, trigger.props.onKeyDown),
        });
        return (React.createElement(Popup, __assign({}, this.props, { rtl: rtl, autoFocus: this.state.autoFocus, trigger: newTrigger, visible: this.getVisible(), onVisibleChange: this.onVisibleChange, canCloseByOutSideClick: true }), content));
    };
    Dropdown.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        trigger: PropTypes.node,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        disabled: PropTypes.bool,
        align: PropTypes.string,
        offset: PropTypes.array,
        delay: PropTypes.number,
        autoFocus: PropTypes.bool,
        hasMask: PropTypes.bool,
        autoClose: PropTypes.bool,
        cache: PropTypes.bool,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    };
    Dropdown.defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultVisible: false,
        autoClose: false,
        onVisibleChange: noop,
        triggerType: 'hover',
        disabled: false,
        align: 'tl bl',
        offset: [0, 0],
        delay: 200,
        hasMask: false,
        cache: false,
        onPosition: noop,
    };
    Dropdown.displayName = 'Dropdown';
    return Dropdown;
}(Component));
export default Dropdown;
