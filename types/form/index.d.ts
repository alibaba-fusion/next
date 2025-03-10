/// <reference types="react" />
import Form from './form';
import Item from './item';
import Submit from './submit';
import Reset from './reset';
import type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps } from './types';
export type { FormProps, ItemProps, SubmitProps, ResetProps, ErrorProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    FormProps & import('../config-provider/types').ComponentCommonProps,
    Form,
    {}
> & {
    Item: import('../config-provider/types').ConfiguredComponentClass<
        ItemProps & import('../config-provider/types').ComponentCommonProps,
        Item,
        {}
    > & {
        _typeMark: string;
    };
    Error: import('../config-provider/types').ConfiguredComponentClass<
        ErrorProps & import('../config-provider/types').ComponentCommonProps,
        {
            itemRender: (errors: unknown[]) => unknown[] | null;
            render(): import('react').JSX.Element | null;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<ErrorProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<ErrorProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<ErrorProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<ErrorProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(
                prevProps: Readonly<ErrorProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<ErrorProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<ErrorProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<ErrorProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<ErrorProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        },
        {}
    > & {
        _typeMark: string;
    };
    Submit: typeof Submit;
    Reset: typeof Reset;
};
export default _default;
