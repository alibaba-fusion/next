import React, { type ReactElement, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Overlay from '../overlay';
import { func, obj, log } from '../util';
import BalloonInner from './inner';
import { normalMap, edgeMap } from './alignMap';
import { getDisabledCompatibleTrigger } from './util';
import type {
    AlignType,
    BalloonProps,
    BalloonV1Props,
    BalloonV2Props,
    BalloonState,
} from './types';
import type { PopupProps } from '../overlay/types';

const { noop } = func;
const { Popup } = Overlay;

const alignList = ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'];

let alignMap = normalMap;

class Balloon extends React.Component<BalloonProps, BalloonState> {
    readonly props: BalloonV1Props & BalloonV2Props;
    static displayName = 'Balloon';
    static contextTypes = {
        prefix: PropTypes.string,
    };
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        size: PropTypes.string,
        type: PropTypes.oneOf(['normal', 'primary']),
        title: PropTypes.node,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        alignEdge: PropTypes.bool,
        v2: PropTypes.bool,
        arrowPointToCenter: PropTypes.bool,
        placementOffset: PropTypes.number,
        closable: PropTypes.bool,
        align: PropTypes.oneOf(alignList),
        offset: PropTypes.array,
        trigger: PropTypes.any,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onClick: PropTypes.func,
        onClose: PropTypes.func,
        onHover: PropTypes.func,
        autoAdjust: PropTypes.bool,
        needAdjust: PropTypes.bool,
        delay: PropTypes.number,
        mouseEnterDelay: PropTypes.number,
        mouseLeaveDelay: PropTypes.number,
        afterClose: PropTypes.func,
        shouldUpdatePosition: PropTypes.bool,
        autoFocus: PropTypes.bool,
        safeNode: PropTypes.string,
        safeId: PropTypes.string,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        cache: PropTypes.bool,
        popupContainer: PropTypes.any,
        container: PropTypes.any,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        id: PropTypes.string,
    };
    static defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'normal',
        closable: true,
        defaultVisible: false,
        size: 'medium',
        alignEdge: false,
        arrowPointToCenter: false,
        align: 'b',
        offset: [0, 0],
        trigger: <span />,
        onClose: noop,
        afterClose: noop,
        onVisibleChange: noop,
        needAdjust: false,
        triggerType: 'hover',
        safeNode: undefined,
        safeId: null,
        autoFocus: true,
        animation: {
            in: 'zoomIn zoomInBig',
            out: 'zoomOut zoomOutBig',
        },
        cache: false,
        popupStyle: {},
        popupClassName: '',
        popupProps: {},
    };

    constructor(props: BalloonProps) {
        super(props);
        this.state = {
            align: alignList.includes(props.align!) ? props.align : 'b',
            visible: 'visible' in props ? props.visible : props.defaultVisible,
        };
        this._onClose = this._onClose.bind(this);
        this._onPosition = this._onPosition.bind(this);
        this._onVisibleChange = this._onVisibleChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps: BalloonProps, prevState: BalloonState) {
        const nextState: BalloonState = {};
        if ('visible' in nextProps) {
            nextState.visible = nextProps.visible;
        }

        if (
            !prevState.innerAlign &&
            'align' in nextProps &&
            alignList.includes(nextProps.align!) &&
            nextProps.align !== prevState.align
        ) {
            nextState.align = nextProps.align;
            nextState.innerAlign = false;
        }

        return nextState;
    }

    _onVisibleChange(visible: boolean, trigger: string) {
        // Not Controlled
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible,
            });
        }

        this.props.onVisibleChange!(visible, trigger);

        if (!visible) {
            this.props.onClose!();
        }
    }

    _onClose(e: MouseEvent) {
        this._onVisibleChange(false, 'closeClick');

        //必须加上 preventDefault，否则单测 IE 下报错，出现 full page reload 异常
        e.preventDefault();
    }

    _onPosition(res: {
        align?: string[];
        config: { placement: string; points: string };
        style?: CSSCounterStyleRule;
    }) {
        const { rtl } = this.props;
        alignMap = this.props.alignEdge ? edgeMap : normalMap;
        const newAlign = res.align!.join(' ');
        let resAlign: AlignType;

        let alignKey: 'align' | 'rtlAlign' = 'align';
        if (rtl) {
            alignKey = 'rtlAlign';
        }

        for (const key in alignMap) {
            if (alignMap[key as AlignType][alignKey] === newAlign) {
                resAlign = key as AlignType;

                break;
            }
        }

        // @ts-expect-error 在赋值前使用了变量
        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign,
                innerAlign: true,
            });
        }
    }

    beforePosition = (
        result: { config: { placement: AlignType }; style: { left: number; top: number } },
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
            type,
            prefix,
            className,
            title,
            alignEdge,
            trigger,
            triggerType,
            children,
            closable,
            shouldUpdatePosition,
            delay,
            mouseEnterDelay,
            mouseLeaveDelay,
            needAdjust,
            autoAdjust,
            safeId,
            autoFocus,
            safeNode,
            onClick,
            onHover,
            animation,
            offset,
            style,
            container,
            popupContainer,
            cache,
            popupStyle,
            popupClassName,
            popupProps,
            followTrigger,
            rtl,
            v2,
            arrowPointToCenter,
            placementOffset = 0,
            ...others
        } = this.props;

        if (container) {
            log.deprecated('container', 'popupContainer', 'Balloon');
        }

        const { align } = this.state;

        alignMap = alignEdge || v2 ? edgeMap : normalMap;
        const _prefix = this.context.prefix || prefix;

        let trOrigin: 'trOrigin' | 'rtlTrOrigin' = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }

        const _offset = [
            alignMap[align!].offset[0] + offset![0]!,
            alignMap[align!].offset[1] + offset![1]!,
        ];
        const transformOrigin = alignMap[align!][trOrigin];
        const _style = { ...{ transformOrigin }, ...style };

        const content = (
            <BalloonInner
                {...obj.pickOthers(Object.keys(Balloon.propTypes), others)}
                id={id}
                title={title}
                prefix={_prefix}
                closable={closable}
                onClose={this._onClose}
                className={className}
                style={_style}
                align={align}
                type={type}
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
            safeId?: string;
            onHover?: (visible: boolean, e: Event) => void;
            onPosition?: PopupProps['onPosition'];
        } = {
            delay: delay,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            shouldUpdatePosition: shouldUpdatePosition,
            needAdjust: needAdjust,
            align: alignMap[align!].align,
            offset: _offset,
            safeId,
            onHover,
            onPosition: this._onPosition,
        };

        if (v2) {
            delete otherProps.align;
            delete otherProps.shouldUpdatePosition;
            delete otherProps.needAdjust;
            delete otherProps.safeId;
            delete otherProps.onHover;
            delete otherProps.onPosition;

            Object.assign(otherProps, {
                placement: align,
                placementOffset: placementOffset + 12,
                v2: true,
                beforePosition: this.beforePosition,
                autoAdjust,
            });
        }

        return (
            <Popup
                {...popupProps}
                followTrigger={followTrigger}
                trigger={newTrigger}
                cache={cache}
                triggerType={triggerType}
                visible={this.state.visible}
                onClick={onClick}
                afterClose={this.props.afterClose}
                onVisibleChange={this._onVisibleChange}
                animation={animation}
                autoFocus={triggerType === 'focus' ? false : autoFocus}
                safeNode={safeNode}
                container={popupContainer || container}
                className={popupClassName}
                style={popupStyle}
                rtl={rtl}
                {...otherProps}
            >
                {content}
            </Popup>
        );
    }
}

export default polyfill(Balloon);
