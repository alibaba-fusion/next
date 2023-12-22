import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TitleProps } from './types';
declare const _default: (Tag: string) => {
    new (
        props: TitleProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        TitleProps & import('../config-provider/types').ComponentCommonProps,
        {
            render(): React.JSX.Element;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<TitleProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TitleProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<TitleProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TitleProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(
                prevProps: Readonly<TitleProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TitleProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<TitleProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<TitleProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<TitleProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        }
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    defaultProps: {
        prefix: string;
    };
    displayName: string;
};
export default _default;
