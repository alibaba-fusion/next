/// <reference types="react" />
import Tooltip from './tooltip';
import Inner from './inner';
export type {
    BalloonProps,
    BalloonV1Props,
    BalloonV2Props,
    TooltipProps,
    TooltipV1Props,
    TooltipV2Props,
    AlignType,
} from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').BalloonProps & import('../config-provider/types').ComponentCommonProps,
    {
        readonly props: import('./types').BalloonV1Props & import('./types').BalloonV2Props;
        _onVisibleChange(visible: boolean, trigger: string): void;
        _onClose(e: import('react').MouseEvent<Element, MouseEvent>): void;
        _onPosition(res: {
            align?: string[] | undefined;
            config: {
                placement: string;
                points: string;
            };
            style?: CSSCounterStyleRule | undefined;
        }): void;
        beforePosition: (
            result: {
                config: {
                    placement: import('./types').AlignType;
                };
                style: {
                    left: number;
                    top: number;
                };
            },
            obj: {
                target: {
                    width: number;
                    height: number;
                };
            }
        ) => {
            config: {
                placement: import('./types').AlignType;
            };
            style: {
                left: number;
                top: number;
            };
        };
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').BalloonState>(
            state:
                | import('./types').BalloonState
                | ((
                      prevState: Readonly<import('./types').BalloonState>,
                      props: Readonly<import('./types').BalloonProps>
                  ) =>
                      | import('./types').BalloonState
                      | Pick<import('./types').BalloonState, K>
                      | null)
                | Pick<import('./types').BalloonState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        state: Readonly<import('./types').BalloonState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').BalloonProps>,
            nextState: Readonly<import('./types').BalloonState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').BalloonProps>,
            prevState: Readonly<import('./types').BalloonState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').BalloonProps>,
            prevState: Readonly<import('./types').BalloonState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').BalloonProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').BalloonProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').BalloonProps>,
            nextState: Readonly<import('./types').BalloonState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').BalloonProps>,
            nextState: Readonly<import('./types').BalloonState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    Tooltip: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').TooltipProps & import('../config-provider/types').ComponentCommonProps,
        Tooltip,
        {}
    >;
    Inner: typeof Inner;
};
export default _default;
