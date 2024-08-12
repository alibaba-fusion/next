/// <reference types="react" />
declare const CheckboxWithGroup: import('../config-provider/types').ConfiguredComponentClass<
    (
        | import('./types').CheckboxProps
        | (import('./types').CheckboxProps & {
              children?: import('react').ReactNode;
          })
    ) &
        import('../config-provider/types').ComponentCommonProps,
    import('react').Component<import('./types').CheckboxProps, any, any>,
    {}
> & {
    Group: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').GroupProps & import('../config-provider/types').ComponentCommonProps,
        {
            getChildContext(): {
                __group__: boolean;
                onChange: (
                    currentValue: import('./types').ValueItem,
                    event: import('react').ChangeEvent<HTMLInputElement>
                ) => void;
                selectedValue: import('./types').ValueItem[];
                disabled: boolean | undefined;
            };
            onChange(
                currentValue: import('./types').ValueItem,
                event: import('react').ChangeEvent<HTMLInputElement>
            ): void;
            render(): import('react').JSX.Element;
            context: any;
            setState<K extends 'value'>(
                state:
                    | import('./types').GroupState
                    | ((
                          prevState: Readonly<import('./types').GroupState>,
                          props: Readonly<import('./types').GroupProps>
                      ) =>
                          | import('./types').GroupState
                          | Pick<import('./types').GroupState, K>
                          | null)
                    | Pick<import('./types').GroupState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').GroupProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./types').GroupState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').GroupProps>,
                nextState: Readonly<import('./types').GroupState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').GroupProps>,
                prevState: Readonly<import('./types').GroupState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').GroupProps>,
                prevState: Readonly<import('./types').GroupState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').GroupProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').GroupProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').GroupProps>,
                nextState: Readonly<import('./types').GroupState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').GroupProps>,
                nextState: Readonly<import('./types').GroupState>,
                nextContext: any
            ): void;
        },
        {}
    >;
};
export type { CheckboxProps, GroupProps, CheckboxData, ValueItem } from './types';
export default CheckboxWithGroup;
