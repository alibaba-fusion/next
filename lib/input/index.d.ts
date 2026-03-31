/// <reference types="react" />
import Input from './input';
import Password from './password';
import TextArea from './textarea';
export type { InputProps, PasswordProps, TextAreaProps, GroupProps, OnKeyDownOpts } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").InputProps & import("../config-provider/types").ComponentCommonProps, Input<import("./types").InputProps>, Pick<Input<import("./types").InputProps>, "focus" | "getInputNode">> & {
    TextArea: import("../config-provider/types").ConfiguredComponentClass<import("./types").TextAreaProps & import("../config-provider/types").ComponentCommonProps, TextArea, Pick<TextArea, "focus" | "getInputNode">>;
    Group: import("../config-provider/types").ConfiguredComponentClass<import("./types").GroupProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").GroupProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").GroupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").GroupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").GroupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").GroupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").GroupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").GroupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").GroupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").GroupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Password: import("../config-provider/types").ConfiguredComponentClass<import("./types").PasswordProps & import("../config-provider/types").ComponentCommonProps, Password, Pick<Password, "focus" | "getInputNode">>;
};
export default _default;
