"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var component_1 = require("../util/component");
var shell_1 = tslib_1.__importDefault(require("./shell"));
var base_1 = tslib_1.__importDefault(require("./base"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var Shell = (0, shell_1.default)({ componentName: 'Shell' });
var WithSubShell = (0, component_1.assignSubComponent)(Shell, {
    Branding: (0, base_1.default)({ componentName: 'Branding' }),
    Navigation: (0, base_1.default)({ componentName: 'Navigation' }),
    Action: (0, base_1.default)({ componentName: 'Action' }),
    MultiTask: (0, base_1.default)({ componentName: 'MultiTask' }),
    LocalNavigation: (0, base_1.default)({ componentName: 'LocalNavigation' }),
    AppBar: (0, base_1.default)({ componentName: 'AppBar' }),
    Content: (0, base_1.default)({ componentName: 'Content' }),
    Footer: (0, base_1.default)({ componentName: 'Footer' }),
    Ancillary: (0, base_1.default)({ componentName: 'Ancillary' }),
    ToolDock: (0, base_1.default)({ componentName: 'ToolDock' }),
    ToolDockItem: (0, base_1.default)({ componentName: 'ToolDockItem' }),
    Page: config_provider_1.default.config((0, shell_1.default)({ componentName: 'Page' })),
});
exports.default = config_provider_1.default.config(WithSubShell, {
    transform: function (props, deprecated) {
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
