"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var progress_1 = tslib_1.__importDefault(require("./view/progress"));
exports.default = config_provider_1.default.config(progress_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'progressive', 'Progress');
            var type = props.type, others = tslib_1.__rest(props, ["type"]);
            props = tslib_1.__assign({ progressive: type === 'progressive' }, others);
        }
        if ('showInfo' in props) {
            deprecated('showInfo', 'textRender', 'Progress');
            var showInfo = props.showInfo, others = tslib_1.__rest(props, ["showInfo"]);
            if (showInfo) {
                props = others;
            }
            else {
                props = tslib_1.__assign({ textRender: function () { return false; } }, others);
            }
        }
        if ('suffix' in props) {
            deprecated('suffix', 'textRender', 'Progress');
            var suffix_1 = props.suffix, others = tslib_1.__rest(props, ["suffix"]);
            props = tslib_1.__assign({ textRender: function () { return suffix_1; } }, others);
        }
        return props;
    },
});
