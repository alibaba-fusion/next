import React, { Component, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';
import type {
    AlignType,
    TooltipProps,
    TooltipV1Props,
    TooltipV2Props,
    TooltipState,
} from './types';

const { Popup } = Overlay;

let alignMap = normalMap;
/** Balloon.Tooltip */
export default class Tooltip extends Component<TooltipProps, TooltipState> {
    static displayName = 'Tooltip';

    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        align: PropTypes.oneOf([
            't',
            'r',
            'b',
            'l',
            'tl',
            'tr',
            'bl',
            'br',
            'lt',
            'lb',
            'rt',
            'rb',
        ]),
        trigger: PropTypes.any,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        pure: PropTypes.bool,
        popupContainer: PropTypes.any,
        followTrigger: PropTypes.bool,
        id: PropTypes.string,
        delay: PropTypes.number,
        mouseEnterDelay: PropTypes.number,
        mouseLeaveDelay: PropTypes.number,
        v2: PropTypes.bool,
        arrowPointToCenter: PropTypes.bool,
    };

    static defaultProps = {
        triggerType: 'hover',
        prefix: 'next-',
        align: 'b',
        delay: 50,
        trigger: <span />,
        arrowPointToCenter: false,
    };

    readonly props: TooltipV1Props & TooltipV2Props;

    constructor(props: TooltipProps) {
        super(props);
        this.state = {
            align: props.placement || props.align,
            innerAlign: false,
        };
    }

    static getDerivedStateFromProps(nextProps: TooltipProps, prevState: TooltipState) {
        if (
            nextProps.v2 &&
            !prevState.innerAlign &&
            'align' in nextProps &&
            nextProps.align !== prevState.align
        ) {
            return {
                align: nextProps.align,
                innerAlign: false,
            };
        }

        return null;
    }

    beforePosition = (
        result: {
            config: { placement: AlignType };
            style: { left: number; top: number };
        },
        obj: { target: { width: number; height: number } }
    ) => {
        const { placement } = result.config;
        if (placement !== this.state.align) {
            this.setState({
                align: placement,
                innerAlign: true,
            });
        }

        if (this.props.arrowPointToCenter) {
            const { width, height } = obj.target;
            if (placement.length === 2) {
                const offset = normalMap[placement].offset;
                switch (placement[0]) {
                    case 'b':
                    case 't':
                        {
                            const plus = offset[0] > 0 ? 1 : -1;
                            result.style.left = result.style.left + (plus * width) / 2 - offset[0];
                        }
                        break;
                    case 'l':
                    case 'r':
                        {
                            const plus = offset[0] > 0 ? 1 : -1;
                            result.style.top = result.style.top + (plus * height) / 2 - offset[1];
                        }
                        break;
                }
            }
        }

        return result;
    };

    render() {
        const {
            id,
            className,
            align: palign,
            style,
            prefix,
            trigger,
            children,
            popupContainer,
            popupProps,
            popupClassName,
            popupStyle,
            followTrigger,
            triggerType,
            autoFocus,
            alignEdge,
            autoAdjust,
            rtl,
            delay,
            mouseEnterDelay,
            mouseLeaveDelay,
            v2,
            arrowPointToCenter,
            ...others
        } = this.props;

        let trOrigin: 'trOrigin' | 'rtlTrOrigin' = 'trOrigin';
        if (rtl) {
            // @ts-expect-error others 上没有 rtl 属性
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }

        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        const align = v2 ? this.state.align : palign;

        const transformOrigin = alignMap[align!][trOrigin];
        const _offset = alignMap[align!].offset;
        const _style = { transformOrigin, ...style };

        const content = (
            <BalloonInner
                {...others}
                id={id}
                prefix={prefix}
                closable={false}
                isTooltip
                className={className}
                style={_style}
                align={align}
                rtl={rtl}
                alignEdge={alignEdge}
                v2={v2}
            >
                {children}
            </BalloonInner>
        );

        const triggerProps: {
            'aria-describedby'?: string;
            tabIndex?: string;
        } = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';

        let newTriggerType = triggerType;

        if (triggerType === 'hover' && id) {
            newTriggerType = ['focus', 'hover'];
        }

        const ariaTrigger = id
            ? React.cloneElement(trigger as ReactElement, triggerProps)
            : trigger;

        const newTrigger = getDisabledCompatibleTrigger(
            React.isValidElement(ariaTrigger) ? ariaTrigger : <span>{ariaTrigger}</span>
        );

        const otherProps: {
            delay?: number;
            mouseEnterDelay?: number;
            mouseLeaveDelay?: number;
            shouldUpdatePosition?: boolean;
            needAdjust?: boolean;
            align?: string;
            offset?: number[];
        } = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: true,
            needAdjust: false,
            align: alignMap[align!].align,
            offset: _offset,
        };

        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.offset;

            Object.assign(otherProps, {
                placement: align,
                placementOffset: 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust,
            });
        }

        return (
            <Popup
                role="tooltip"
                animation={{
                    in: 'zoomIn',
                    out: 'zoomOut',
                }}
                className={popupClassName}
                container={popupContainer}
                followTrigger={followTrigger}
                trigger={newTrigger}
                triggerType={newTriggerType}
                style={popupStyle}
                rtl={rtl}
                autoFocus={triggerType === 'focus' ? false : autoFocus}
                {...otherProps}
                {...popupProps}
            >
                {content}
            </Popup>
        );
    }
}
