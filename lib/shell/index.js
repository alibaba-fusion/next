"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var shell_1 = require("./shell");
var base_1 = require("./base");
var config_provider_1 = require("../config-provider");
var Shell = (0, shell_1.default)({
    componentName: 'Shell',
});
[
    'Branding',
    'Navigation',
    'Action',
    'MultiTask',
    'LocalNavigation',
    'AppBar',
    'Content',
    'Footer',
    'Ancillary',
    'ToolDock',
    'ToolDockItem',
].forEach(function (key) {
    Shell[key] = (0, base_1.default)({
        componentName: key,
    });
});
Shell.Page = config_provider_1.default.config((0, shell_1.default)({
    componentName: 'Page',
}));
exports.default = config_provider_1.default.config(Shell, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('Component' in props) {
            deprecated('Component', 'component', 'Shell');
            var Component = props.Component, component = props.component, others = tslib_1.__rest(props, ["Component", "component"]);
            if ('component' in props) {
                props = tslib_1.__assign({ component: component }, others);
            }
            else {
                props = tslib_1.__assign({ component: Component }, others);
            }
        }
        return props;
    },
});
