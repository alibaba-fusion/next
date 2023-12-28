import { __assign, __rest } from "tslib";
import ShellBase from './shell';
import Base from './base';
import ConfigProvider from '../config-provider';
var Shell = ShellBase({
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
    Shell[key] = Base({
        componentName: key,
    });
});
Shell.Page = ConfigProvider.config(ShellBase({
    componentName: 'Page',
}));
export default ConfigProvider.config(Shell, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('Component' in props) {
            deprecated('Component', 'component', 'Shell');
            var Component = props.Component, component = props.component, others = __rest(props, ["Component", "component"]);
            if ('component' in props) {
                props = __assign({ component: component }, others);
            }
            else {
                props = __assign({ component: Component }, others);
            }
        }
        return props;
    },
});
