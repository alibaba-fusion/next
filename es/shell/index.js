import { __assign, __rest } from "tslib";
import { assignSubComponent } from '../util/component';
import ShellBase from './shell';
import Base from './base';
import ConfigProvider from '../config-provider';
var Shell = ShellBase({ componentName: 'Shell' });
var WithSubShell = assignSubComponent(Shell, {
    Branding: Base({ componentName: 'Branding' }),
    Navigation: Base({ componentName: 'Navigation' }),
    Action: Base({ componentName: 'Action' }),
    MultiTask: Base({ componentName: 'MultiTask' }),
    LocalNavigation: Base({ componentName: 'LocalNavigation' }),
    AppBar: Base({ componentName: 'AppBar' }),
    Content: Base({ componentName: 'Content' }),
    Footer: Base({ componentName: 'Footer' }),
    Ancillary: Base({ componentName: 'Ancillary' }),
    ToolDock: Base({ componentName: 'ToolDock' }),
    ToolDockItem: Base({ componentName: 'ToolDockItem' }),
    Page: ConfigProvider.config(ShellBase({ componentName: 'Page' })),
});
export default ConfigProvider.config(WithSubShell, {
    transform: function (props, deprecated) {
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
