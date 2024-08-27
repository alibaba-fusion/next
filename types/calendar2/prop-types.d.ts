import PT from 'prop-types';
declare const SharedPT: {
    shape: PT.Requireable<string>;
    mode: PT.Requireable<string>;
    panelMode: PT.Requireable<import('./types').CalendarPanelMode>;
    date(props: Record<string, unknown>, propName: string, componentName: string): Error | null;
};
export default SharedPT;
