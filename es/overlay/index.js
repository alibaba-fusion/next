import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import ConfigProvider from '../config-provider';

import Overlay1 from './overlay';
import Overlay2 from './overlay-v2';

import Gateway from './gateway';
import Position from './position';

import Popup1 from './popup';
import Popup2 from './popup-v2';
import { log } from '../util';

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.overlayRef = null;
        _this.saveRef = _this.saveRef.bind(_this);
        return _this;
    }

    Overlay.prototype.saveRef = function saveRef(ref) {
        this.overlayRef = ref;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */


    Overlay.prototype.getContent = function getContent() {
        if (this.overlayRef) {
            return this.overlayRef.getContent();
        }
        return null;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */


    Overlay.prototype.getContentNode = function getContentNode() {
        if (this.overlayRef) {
            return this.overlayRef.getContentNode();
        }
        return null;
    };

    Overlay.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = _objectWithoutProperties(_props, ['v2']);

        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'needAdjust', 'Overlay v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            return React.createElement(Overlay2, others);
        } else {
            return React.createElement(Overlay1, _extends({}, others, { ref: this.saveRef }));
        }
    };

    return Overlay;
}(React.Component);
// eslint-disable-next-line


Overlay.displayName = 'Overlay';

var Popup = function (_React$Component2) {
    _inherits(Popup, _React$Component2);

    function Popup(props) {
        _classCallCheck(this, Popup);

        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this2.overlay = null;
        _this2.saveRef = _this2.saveRef.bind(_this2);
        return _this2;
    }

    Popup.prototype.saveRef = function saveRef(ref) {
        if (ref) {
            this.overlay = ref.overlay;
        }
    };

    Popup.prototype.render = function render() {
        var _props2 = this.props,
            v2 = _props2.v2,
            others = _objectWithoutProperties(_props2, ['v2']);

        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'needAdjust', 'Popup v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }

            return React.createElement(Popup2, others);
        } else {
            return React.createElement(Popup1, _extends({}, others, { ref: this.saveRef }));
        }
    };

    return Popup;
}(React.Component);

Popup.displayName = 'Popup';


Overlay.Gateway = Gateway;
Overlay.Position = Position;
Overlay.Popup = ConfigProvider.config(Popup, {
    exportNames: ['overlay']
});

export default ConfigProvider.config(Overlay, {
    exportNames: ['getContent', 'getContentNode']
});