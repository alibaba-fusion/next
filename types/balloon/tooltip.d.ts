import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type {
    AlignType,
    TooltipProps,
    TooltipV1Props,
    TooltipV2Props,
    TooltipState,
} from './types';
/** Balloon.Tooltip */
export default class Tooltip extends Component<TooltipProps, TooltipState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
        align: PropTypes.Requireable<string>;
        trigger: PropTypes.Requireable<any>;
        triggerType: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        pure: PropTypes.Requireable<boolean>;
        popupContainer: PropTypes.Requireable<any>;
        followTrigger: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        delay: PropTypes.Requireable<number>;
        mouseEnterDelay: PropTypes.Requireable<number>;
        mouseLeaveDelay: PropTypes.Requireable<number>;
        v2: PropTypes.Requireable<boolean>;
        arrowPointToCenter: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        triggerType: string;
        prefix: string;
        align: string;
        delay: number;
        trigger: React.JSX.Element;
        arrowPointToCenter: boolean;
    };
    readonly props: TooltipV1Props & TooltipV2Props;
    constructor(props: TooltipProps);
    static getDerivedStateFromProps(
        nextProps: TooltipProps,
        prevState: TooltipState
    ): {
        align: AlignType | undefined;
        innerAlign: boolean;
    } | null;
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
