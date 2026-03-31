import React, { type MouseEvent, type KeyboardEvent, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import type { ShellBaseProps, ShellState, CollapseMap, LayoutProps } from './types';
/** Shell */
export default function ShellBase(props: {
    componentName?: string;
}): {
    new (props: ShellBaseProps): {
        layout: LayoutProps;
        headerRef: HTMLDivElement;
        navigationFixed: boolean;
        toolDockFixed: boolean;
        navRef: HTMLDivElement;
        localNavRef: HTMLDivElement;
        submainRef: HTMLDivElement;
        toolDockRef: HTMLDivElement;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Readonly<ShellBaseProps>): void;
        checkAsideFixed: () => void;
        setChildCollapse: (child: ReactElement, mark: keyof CollapseMap) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        toggleAside: (mark: keyof CollapseMap, props: {
            onCollapseChange?: ((collapse?: boolean) => void) | undefined;
            collapse?: boolean | undefined;
        }, e: KeyboardEvent | MouseEvent) => void;
        toggleNavigation: (e: KeyboardEvent | MouseEvent) => void;
        toggleLocalNavigation: (e: KeyboardEvent | MouseEvent) => void;
        toggleAncillary: (e: KeyboardEvent | MouseEvent) => void;
        toggleToolDock: (e: KeyboardEvent | MouseEvent) => void;
        saveHeaderRef: (ref: HTMLDivElement) => void;
        saveLocalNavRef: (ref: HTMLDivElement) => void;
        saveNavRef: (ref: HTMLDivElement) => void;
        saveSubmainRef: (ref: HTMLDivElement) => void;
        saveToolDockRef: (ref: HTMLDivElement) => void;
        renderShell: (props: ShellBaseProps) => React.JSX.Element;
        render(): React.JSX.Element;
        context: any;
        setState<K extends keyof ShellState>(state: ShellState | ((prevState: Readonly<ShellState>, props: Readonly<ShellBaseProps>) => ShellState | Pick<ShellState, K> | null) | Pick<ShellState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<ShellBaseProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<ShellState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<ShellBaseProps>, nextState: Readonly<ShellState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ShellBaseProps>, prevState: Readonly<ShellState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ShellBaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ShellBaseProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ShellBaseProps>, nextState: Readonly<ShellState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ShellBaseProps>, nextState: Readonly<ShellState>, nextContext: any): void;
    };
    displayName: string | undefined;
    _typeMark: string | undefined;
    propTypes: {
        prefix: PropTypes.Requireable<string>;
        device: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        fixedHeader: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    defaultProps: {
        prefix: string;
        device: string;
        type: string;
        fixedHeader: boolean;
    };
    getDerivedStateFromProps(nextProps: Readonly<ShellBaseProps>, prevState: Readonly<ShellState>): {
        controll: boolean;
        collapseMap: CollapseMap;
        device: "tablet" | "desktop" | "phone" | undefined;
    } | {
        controll?: undefined;
        collapseMap?: undefined;
        device?: undefined;
    };
    contextType?: React.Context<any> | undefined;
};
