/// <reference types="react" />
import Typography from './typography';
import { TypographyProps, TitleProps, TextProps, ParagraphProps } from './types';
declare const WithSubTypography: typeof Typography & {
    Text: {
        new (props: TextProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TextProps & import("../config-provider/types").ComponentCommonProps, {
            wrapChildren(children: import("react").ReactNode, wrapper: keyof JSX.IntrinsicElements): import("react").ReactNode;
            render(): import("react").JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TextProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TextProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TextProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TextProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TextProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TextProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TextProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TextProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TextProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
            delete: import("prop-types").Requireable<boolean>;
            mark: import("prop-types").Requireable<boolean>;
            underline: import("prop-types").Requireable<boolean>;
            strong: import("prop-types").Requireable<boolean>;
            code: import("prop-types").Requireable<boolean>;
            component: import("prop-types").Requireable<import("prop-types").ReactComponentLike>;
            children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
            rtl: import("prop-types").Requireable<boolean>;
        };
        defaultProps: {
            prefix: string;
            delete: boolean;
            mark: boolean;
            underline: boolean;
            strong: boolean;
            code: boolean;
            component: string;
            rtl: boolean;
        };
    };
    Paragraph: {
        new (props: ParagraphProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<ParagraphProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ParagraphProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<ParagraphProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<ParagraphProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<ParagraphProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<ParagraphProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<ParagraphProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ParagraphProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<ParagraphProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<ParagraphProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
            component: import("prop-types").Requireable<import("prop-types").ReactComponentLike>;
        };
        defaultProps: {
            prefix: string;
            type: string;
            size: string;
            component: string;
        };
    };
    H1: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
    H2: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
    H3: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
    H4: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
    H5: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
    H6: {
        new (props: TitleProps & import("../config-provider/types").ComponentCommonProps, context?: unknown): import("../config-provider/types").ConfiguredComponent<TitleProps & import("../config-provider/types").ComponentCommonProps, {
            render(): import("react").JSX.Element;
            context: any;
            setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<TitleProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TitleProps>, nextState: Readonly<{}>, nextContext: any): void;
        }>;
        contextType?: import("react").Context<any> | undefined;
    } & {
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
        };
        defaultProps: {
            prefix: string;
        };
        displayName: string;
    };
};
export type { TypographyProps, TitleProps, TextProps, ParagraphProps };
export default WithSubTypography;
