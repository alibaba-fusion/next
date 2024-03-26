"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var Search_1 = tslib_1.__importDefault(require("./Search"));
exports.default = config_provider_1.default.config(Search_1.default, {
    transform: function (props, deprecated) {
        var onInputFocus = props.onInputFocus, overlayVisible = props.overlayVisible, combox = props.combox, others = tslib_1.__rest(props, ["onInputFocus", "overlayVisible", "combox"]);
        var newprops = others;
        if (onInputFocus) {
            deprecated('onInputFocus', 'onFocus', 'Search');
            newprops.onFocus = onInputFocus;
        }
        if ('overlayVisible' in props) {
            deprecated('overlayVisible', 'visible', 'Search');
            newprops.visible = overlayVisible;
        }
        if (combox) {
            deprecated('combox', 'popupContent', 'Search');
            newprops.popupContent = combox;
        }
        return newprops;
    },
});
