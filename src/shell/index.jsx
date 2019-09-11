import ShellBase from './shell';
import Base from './base';

const Shell = ShellBase({
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
].forEach(key => {
    Shell[key] = Base({
        componentName: key,
    });
});

Shell.Page = ShellBase({
    componentName: 'Page',
});

export default Shell;
