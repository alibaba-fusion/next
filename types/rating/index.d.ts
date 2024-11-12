/// <reference types="node" />
/// <reference types="react" />
export type { RatingProps, RatingLocale } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').RatingProps & import('../config-provider/types').ComponentCommonProps,
    {
        [key: `refs-rating-icon-${number}`]: HTMLSpanElement | null;
        timer: NodeJS.Timeout | null;
        underlayNode: HTMLDivElement | null;
        readonly props: import('../util').ClassPropsWithDefault<
            import('./types').RatingProps,
            {
                prefix: string;
                size: string;
                disabled: boolean;
                readOnly: boolean;
                isPreview: boolean;
                count: number;
                showGrade: boolean;
                defaultValue: number;
                readAs: (val: number) => number;
                allowHalf: boolean;
                allowClear: boolean;
                onChange: () => void;
                onHoverChange: () => void;
                locale: Partial<{
                    description: string;
                }> & {
                    momentLocale?: string | undefined;
                };
            }
        >;
        componentDidMount(): void;
        componentWillUnmount(): void;
        clearTimer(): void;
        getRenderResult(): void;
        getValue(e: import('react').MouseEvent<Element, MouseEvent>): number;
        handleHover(e: import('react').MouseEvent<HTMLDivElement, MouseEvent>): void;
        handleLeave(): void;
        onKeyDown(e: import('react').KeyboardEvent<HTMLDivElement>): true | void;
        handleChecked(index: number): void;
        handleClick(e: import('react').MouseEvent<HTMLDivElement, MouseEvent>): void;
        getOverlayWidth(): number | 'auto';
        getInfoLeft(): number;
        saveRef: (ref: HTMLSpanElement | null, i: number) => void;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').RatingState>(
            state:
                | import('./types').RatingState
                | ((
                      prevState: Readonly<import('./types').RatingState>,
                      props: Readonly<import('./types').RatingProps>
                  ) =>
                      | import('./types').RatingState
                      | Pick<import('./types').RatingState, K>
                      | null)
                | Pick<import('./types').RatingState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        state: Readonly<import('./types').RatingState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').RatingProps>,
            nextState: Readonly<import('./types').RatingState>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').RatingProps>,
            prevState: Readonly<import('./types').RatingState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').RatingProps>,
            prevState: Readonly<import('./types').RatingState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').RatingProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').RatingProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').RatingProps>,
            nextState: Readonly<import('./types').RatingState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').RatingProps>,
            nextState: Readonly<import('./types').RatingState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    currentValue: (min: number, max: number, hoverValue: number, stateValue: number) => number;
};
export default _default;
