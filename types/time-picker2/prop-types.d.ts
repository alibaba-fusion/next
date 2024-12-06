import PT from 'prop-types';
export declare const error: (propName: string, ComponentName: string) => Error;
declare const SharedPT: {
    date(props: Record<string, unknown>, propName: string, componentName: string): void;
    value(props: Record<string, unknown>, propName: string, componentName: string): void;
    format: (props: Record<string, unknown>, propName: string, componentName: string) => void;
    inputValue: (props: Record<string, unknown>, propName: string, componentName: string) => void;
    placeholder: (props: Record<string, unknown>, propName: string, componentName: string) => void;
    readOnly: (props: Record<string, unknown>, propName: string, componentName: string) => void;
    disabled: (props: Record<string, unknown>, propName: string, componentName: string) => void;
    render: PT.Requireable<NonNullable<((...args: any[]) => any) | PT.ReactNodeLike>>;
    type: PT.Requireable<string>;
    inputType: PT.Requireable<number>;
    size: PT.Requireable<string>;
};
export default SharedPT;
