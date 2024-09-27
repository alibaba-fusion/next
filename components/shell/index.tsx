import { assignSubComponent } from '../util/component';
import ShellBase from './shell';
import Base from './base';
import ConfigProvider from '../config-provider';
import type {
    ShellProps,
    ShellNavigationProps,
    ShellLocalNavigationProps,
    ShellToolDockProps,
    ShellAncillaryProps,
} from './types';

const Shell = ShellBase({ componentName: 'Shell' });

const WithSubShell = assignSubComponent(Shell, {
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

export type {
    ShellProps,
    ShellNavigationProps,
    ShellLocalNavigationProps,
    ShellToolDockProps,
    ShellAncillaryProps,
};
export default ConfigProvider.config(WithSubShell, {
    transform: (props, deprecated) => {
        if ('Component' in props) {
            deprecated('Component', 'component', 'Shell');
            const { Component, component, ...others } = props;
            if ('component' in props) {
                props = { component, ...others };
            } else {
                props = { component: Component, ...others };
            }
        }
        return props;
    },
});
