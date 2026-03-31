import { __assign, __extends, __rest } from "tslib";
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Overlay1 from './overlay';
import Overlay2 from './overlay-v2';
import Gateway from './gateway';
import Position from './position';
import Popup1 from './popup';
import Popup2 from './popup-v2';
import { log } from '../util';
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props) {
        var _this = _super.call(this, props) || this;
        _this.overlayRef = null;
        _this.saveRef = _this.saveRef.bind(_this);
        return _this;
    }
    Overlay.prototype.saveRef = function (ref) {
        this.overlayRef = ref;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    Overlay.prototype.getContent = function () {
        if (this.overlayRef) {
            return this.overlayRef.getContent();
        }
        return null;
    };
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    Overlay.prototype.getContentNode = function () {
        if (this.overlayRef) {
            return this.overlayRef.getContentNode();
        }
        return null;
    };
    Overlay.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, align = _a.align, animation = _a.animation, others = __rest(_a, ["v2", "align", "animation"]);
        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'autoAdjust', 'Overlay v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            return React.createElement(Overlay2, __assign({ animation: animation, align: align }, others));
        }
        else {
            return React.createElement(Overlay1, __assign({ animation: animation, align: align }, others, { ref: this.saveRef }));
        }
    };
    Overlay.displayName = 'Overlay';
    return Overlay;
}(Component));
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.overlay = null;
        _this.saveRef = _this.saveRef.bind(_this);
        return _this;
    }
    Popup.prototype.saveRef = function (ref) {
        if (ref) {
            this.overlay = ref.overlay;
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, others = __rest(_a, ["v2"]);
        if (v2) {
            if ('needAdjust' in others) {
                log.deprecated('needAdjust', 'needAdjust', 'Popup v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            if ('shouldUpdatePosition' in others) {
                delete others.shouldUpdatePosition;
            }
            return React.createElement(Popup2, __assign({}, others));
        }
        else {
            return React.createElement(Popup1, __assign({}, others, { ref: this.saveRef }));
        }
    };
    Popup.displayName = 'Popup';
    return Popup;
}(Component));
var WithSubOverlay = assignSubComponent(Overlay, {
    Gateway: Gateway,
    Position: Position,
    Popup: ConfigProvider.config(Popup, {
        exportNames: ['overlay'],
    }),
});
export default ConfigProvider.config(WithSubOverlay, {
    exportNames: ['getContent', 'getContentNode'],
});
