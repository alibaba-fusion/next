/// <reference types="react" />
import type { ShellProps, ShellNavigationProps, ShellLocalNavigationProps, ShellToolDockProps, ShellAncillaryProps } from './types';
export type { ShellProps, ShellNavigationProps, ShellLocalNavigationProps, ShellToolDockProps, ShellAncillaryProps, };
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").ShellBaseProps & import("../config-provider/types").ComponentCommonProps, {
    layout: import("./types").LayoutProps;
    headerRef: HTMLDivElement;
    navigationFixed: boolean;
    toolDockFixed: boolean;
    navRef: HTMLDivElement;
    localNavRef: HTMLDivElement;
    submainRef: HTMLDivElement;
    toolDockRef: HTMLDivElement;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<import("./types").ShellBaseProps>): void;
    checkAsideFixed: () => void;
    setChildCollapse: (child: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, mark: keyof import("./types").CollapseMap) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    toggleAside: (mark: keyof import("./types").CollapseMap, props: {
        onCollapseChange?: ((collapse?: boolean | undefined) => void) | undefined;
        collapse?: boolean | undefined;
    }, e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
    toggleNavigation: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
    toggleLocalNavigation: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
    toggleAncillary: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
    toggleToolDock: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
    saveHeaderRef: (ref: HTMLDivElement) => void;
    saveLocalNavRef: (ref: HTMLDivElement) => void;
    saveNavRef: (ref: HTMLDivElement) => void;
    saveSubmainRef: (ref: HTMLDivElement) => void;
    saveToolDockRef: (ref: HTMLDivElement) => void;
    renderShell: (props: import("./types").ShellBaseProps) => import("react").JSX.Element;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./types").ShellState>(state: import("./types").ShellState | ((prevState: Readonly<import("./types").ShellState>, props: Readonly<import("./types").ShellBaseProps>) => import("./types").ShellState | Pick<import("./types").ShellState, K> | null) | Pick<import("./types").ShellState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("./types").ShellBaseProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("./types").ShellState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    shouldComponentUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").ShellBaseProps>, prevState: Readonly<import("./types").ShellState>): any;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").ShellBaseProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").ShellBaseProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): void;
}, {}> & {
    _typeMark: string | undefined;
    Content: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    ToolDock: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Navigation: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    LocalNavigation: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Ancillary: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Branding: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Action: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Page: import("../config-provider/types").ConfiguredComponentClass<import("./types").ShellBaseProps & import("../config-provider/types").ComponentCommonProps, {
        layout: import("./types").LayoutProps;
        headerRef: HTMLDivElement;
        navigationFixed: boolean;
        toolDockFixed: boolean;
        navRef: HTMLDivElement;
        localNavRef: HTMLDivElement;
        submainRef: HTMLDivElement;
        toolDockRef: HTMLDivElement;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Readonly<import("./types").ShellBaseProps>): void;
        checkAsideFixed: () => void;
        setChildCollapse: (child: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, mark: keyof import("./types").CollapseMap) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        toggleAside: (mark: keyof import("./types").CollapseMap, props: {
            onCollapseChange?: ((collapse?: boolean | undefined) => void) | undefined;
            collapse?: boolean | undefined;
        }, e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
        toggleNavigation: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
        toggleLocalNavigation: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
        toggleAncillary: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
        toggleToolDock: (e: import("react").MouseEvent<Element, MouseEvent> | import("react").KeyboardEvent<Element>) => void;
        saveHeaderRef: (ref: HTMLDivElement) => void;
        saveLocalNavRef: (ref: HTMLDivElement) => void;
        saveNavRef: (ref: HTMLDivElement) => void;
        saveSubmainRef: (ref: HTMLDivElement) => void;
        saveToolDockRef: (ref: HTMLDivElement) => void;
        renderShell: (props: import("./types").ShellBaseProps) => import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K extends keyof import("./types").ShellState>(state: import("./types").ShellState | ((prevState: Readonly<import("./types").ShellState>, props: Readonly<import("./types").ShellBaseProps>) => import("./types").ShellState | Pick<import("./types").ShellState, K> | null) | Pick<import("./types").ShellState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").ShellBaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("./types").ShellState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").ShellBaseProps>, prevState: Readonly<import("./types").ShellState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").ShellBaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").ShellBaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").ShellBaseProps>, nextState: Readonly<import("./types").ShellState>, nextContext: any): void;
    }, {}> & {
        _typeMark: string | undefined;
    };
    MultiTask: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    AppBar: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    Footer: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    ToolDockItem: import("../config-provider/types").ConfiguredComponentClass<import("./types").BaseProps & import("../config-provider/types").ComponentCommonProps, {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): import("react").ReactNode;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").BaseProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").BaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").BaseProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").BaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").BaseProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
};
export default _default;
