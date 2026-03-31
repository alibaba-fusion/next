"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var component_1 = require("../util/component");
var button_1 = tslib_1.__importDefault(require("./view/button"));
var group_1 = tslib_1.__importDefault(require("./view/group"));
var WithSubButton = (0, component_1.assignSubComponent)(button_1.default, { Group: group_1.default });
exports.default = config_provider_1.default.config(WithSubButton, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'text | warning | ghost', 'Button');
            var shape = props.shape, type = props.type, others = tslib_1.__rest(props, ["shape", "type"]);
            var newType = type;
            if (type === 'light' ||
                type === 'dark' ||
                (type === 'secondary' && shape === 'warning')) {
                newType = 'normal';
            }
            var ghost = void 0;
            if (shape === 'ghost') {
                ghost = {
                    primary: 'dark',
                    secondary: 'dark',
                    normal: 'light',
                    dark: 'dark',
                    light: 'light',
                }[type || button_1.default.defaultProps.type];
            }
            var text = shape === 'text';
            var warning = shape === 'warning';
            return tslib_1.__assign({ type: newType, ghost: ghost, text: text, warning: warning }, others);
        }
        return props;
    },
});
