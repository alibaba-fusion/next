"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable react/no-multi-comp */
var react_1 = tslib_1.__importStar(require("react"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var component_1 = require("../util/component");
var overlay_1 = tslib_1.__importDefault(require("./overlay"));
var overlay_v2_1 = tslib_1.__importDefault(require("./overlay-v2"));
var gateway_1 = tslib_1.__importDefault(require("./gateway"));
var position_1 = tslib_1.__importDefault(require("./position"));
var popup_1 = tslib_1.__importDefault(require("./popup"));
var popup_v2_1 = tslib_1.__importDefault(require("./popup-v2"));
var util_1 = require("../util");
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
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
        var _a = this.props, v2 = _a.v2, align = _a.align, animation = _a.animation, others = tslib_1.__rest(_a, ["v2", "align", "animation"]);
        if (v2) {
            if ('needAdjust' in others) {
                util_1.log.deprecated('needAdjust', 'autoAdjust', 'Overlay v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            return react_1.default.createElement(overlay_v2_1.default, tslib_1.__assign({ animation: animation, align: align }, others));
        }
        else {
            return react_1.default.createElement(overlay_1.default, tslib_1.__assign({ animation: animation, align: align }, others, { ref: this.saveRef }));
        }
    };
    Overlay.displayName = 'Overlay';
    return Overlay;
}(react_1.Component));
var Popup = /** @class */ (function (_super) {
    tslib_1.__extends(Popup, _super);
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
        var _a = this.props, v2 = _a.v2, others = tslib_1.__rest(_a, ["v2"]);
        if (v2) {
            if ('needAdjust' in others) {
                util_1.log.deprecated('needAdjust', 'needAdjust', 'Popup v2');
                others.autoAdjust = others.needAdjust;
                delete others.needAdjust;
            }
            if ('shouldUpdatePosition' in others) {
                delete others.shouldUpdatePosition;
            }
            return react_1.default.createElement(popup_v2_1.default, tslib_1.__assign({}, others));
        }
        else {
            return react_1.default.createElement(popup_1.default, tslib_1.__assign({}, others, { ref: this.saveRef }));
        }
    };
    Popup.displayName = 'Popup';
    return Popup;
}(react_1.Component));
var WithSubOverlay = (0, component_1.assignSubComponent)(Overlay, {
    Gateway: gateway_1.default,
    Position: position_1.default,
    Popup: config_provider_1.default.config(Popup, {
        exportNames: ['overlay'],
    }),
});
exports.default = config_provider_1.default.config(WithSubOverlay, {
    exportNames: ['getContent', 'getContentNode'],
});
