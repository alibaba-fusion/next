import React, { type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import type {
    AlignType,
    BalloonProps,
    BalloonV1Props,
    BalloonV2Props,
    BalloonState,
} from './types';
declare class Balloon extends React.Component<BalloonProps, BalloonState> {
    readonly props: BalloonV1Props & BalloonV2Props;
    static displayName: string;
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        alignEdge: PropTypes.Requireable<boolean>;
        v2: PropTypes.Requireable<boolean>;
        arrowPointToCenter: PropTypes.Requireable<boolean>;
        placementOffset: PropTypes.Requireable<number>;
        closable: PropTypes.Requireable<boolean>;
        align: PropTypes.Requireable<string>;
        offset: PropTypes.Requireable<any[]>;
        trigger: PropTypes.Requireable<any>;
        triggerType: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onHover: PropTypes.Requireable<(...args: any[]) => any>;
        autoAdjust: PropTypes.Requireable<boolean>;
        needAdjust: PropTypes.Requireable<boolean>;
        delay: PropTypes.Requireable<number>;
        mouseEnterDelay: PropTypes.Requireable<number>;
        mouseLeaveDelay: PropTypes.Requireable<number>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        shouldUpdatePosition: PropTypes.Requireable<boolean>;
        autoFocus: PropTypes.Requireable<boolean>;
        safeNode: PropTypes.Requireable<string>;
        safeId: PropTypes.Requireable<string>;
        animation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        cache: PropTypes.Requireable<boolean>;
        popupContainer: PropTypes.Requireable<any>;
        container: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        type: string;
        closable: boolean;
        defaultVisible: boolean;
        size: string;
        alignEdge: boolean;
        arrowPointToCenter: boolean;
        align: string;
        offset: number[];
        trigger: React.JSX.Element;
        onClose: () => void;
        afterClose: () => void;
        onVisibleChange: () => void;
        needAdjust: boolean;
        triggerType: string;
        safeNode: undefined;
        safeId: null;
        autoFocus: boolean;
        animation: {
            in: string;
            out: string;
        };
        cache: boolean;
        popupStyle: {};
        popupClassName: string;
        popupProps: {};
    };
    constructor(props: BalloonProps);
    static getDerivedStateFromProps(nextProps: BalloonProps, prevState: BalloonState): BalloonState;
    _onVisibleChange(visible: boolean, trigger: string): void;
    _onClose(e: MouseEvent): void;
    _onPosition(res: {
        align?: string[];
        config: {
            placement: string;
            points: string;
        };
        style?: CSSCounterStyleRule;
    }): void;
    beforePosition: (
        result: {
            config: {
                placement: AlignType;
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
            placement: AlignType;
        };
        style: {
            left: number;
            top: number;
        };
    };
    render(): React.JSX.Element;
}
declare const _default: typeof Balloon;
export default _default;
