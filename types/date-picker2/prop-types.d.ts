export function error(propName: any, ComponentName: any): Error;
export default SharedPT;
declare namespace SharedPT {
    function date(props: any, propName: any, componentName: any): void;
    function value(props: any, propName: any, componentName: any): void;
    function format(props: any, propName: any, componentName: any): void;
    function inputValue(props: any, propName: any, componentName: any): void;
    function placeholder(props: any, propName: any, componentName: any): void;
    function readOnly(props: any, propName: any, componentName: any): void;
    function disabled(props: any, propName: any, componentName: any): void;
    function disabledTime(props: any, propName: any, componentName: any): void;
    function ariaLabel(props: any, propName: any, componentName: any): void;
    let render: PT.Requireable<NonNullable<((...args: any[]) => any) | PT.ReactNodeLike>>;
    let mode: PT.Requireable<string>;
    let type: PT.Requireable<string>;
    let inputType: PT.Requireable<number>;
    let size: PT.Requireable<string>;
}
import PT from 'prop-types';
