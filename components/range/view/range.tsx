import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { events, func, KEYCODE, dom, obj, type ClassPropsWithDefault } from '../../util';
import Balloon from '../../balloon';
import { getPercent, getPrecision, isEqual, getDragging } from '../utils';
import Scale from './scale';
import Track from './track';
import Selected from './selected';
import Mark from './mark';
import Slider from './slider';
import FixedSlider from './fixedSlider';
import type { RangeProps, RangeState, RangeValueType, RangeSliderProps } from '../types';

type RangePropsWithDefault = ClassPropsWithDefault<RangeProps, typeof Range.defaultProps>;
type EventOnReturnType = ReturnType<typeof events.on>;
type LowerAndUpperSliderProps = Omit<RangeSliderProps, 'value'> & { value?: RangeValueType };

const Tooltip = Balloon.Tooltip;
const { noop, bindCtx } = func;
const { pickOthers } = obj;

function _isMultiple(slider: RangeProps['slider'], isFixedWidth?: boolean) {
    return isFixedWidth || slider === 'double';
}

function LowerSlider(props: LowerAndUpperSliderProps) {
    const {
        hasTip,
        value,
        tipRender,
        slider,
        tooltipVisible,
        onTooltipVisibleChange,
        tooltipAnimation,
    } = props;

    if (_isMultiple(slider)) {
        // FIXME 对 value 增加类型守卫
        const arrayValue = value as [number, number];
        return hasTip ? (
            <Tooltip
                popupContainer={(target: HTMLElement) => target.parentNode}
                popupProps={{
                    visible: tooltipVisible,
                    onVisibleChange: onTooltipVisibleChange,
                    animation: tooltipAnimation,
                    needAdjust: false,
                }}
                trigger={Slider({ ...props, value: arrayValue[0] })}
                align="t"
            >
                {tipRender(`${arrayValue[0]}`)}
            </Tooltip>
        ) : (
            Slider({ ...props, value: arrayValue[0] })
        );
    }
    return null;
}

LowerSlider.propTypes = {
    hasTip: PropTypes.bool,
    tooltipVisible: PropTypes.bool,
    onTooltipVisibleChange: PropTypes.func,
    tooltipAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    tipRender: PropTypes.func,
    slider: PropTypes.oneOf(['single', 'double']),
};

function UpperSlider(props: LowerAndUpperSliderProps) {
    const newprop = Object.assign({}, props);
    const {
        hasTip,
        value,
        tipRender,
        slider,
        tooltipVisible,
        onTooltipVisibleChange,
        tooltipAnimation,
    } = newprop;
    if (_isMultiple(slider)) {
        // FIXME 对 value 增加类型守卫
        const arrayValue = value as [number, number];
        delete newprop.onKeyDown;
        return hasTip ? (
            <Tooltip
                popupContainer={(target: HTMLElement) => target.parentNode}
                popupProps={{
                    visible: tooltipVisible,
                    onVisibleChange: onTooltipVisibleChange,
                    animation: tooltipAnimation,
                    needAdjust: false,
                }}
                trigger={Slider({ ...newprop, value: arrayValue[1] })}
                align="t"
            >
                {tipRender(arrayValue[1])}
            </Tooltip>
        ) : (
            Slider({ ...newprop, value: arrayValue[1] })
        );
    }
    return hasTip ? (
        <Tooltip
            popupContainer={(target: HTMLElement) => target.parentNode}
            popupProps={{
                visible: tooltipVisible,
                onVisibleChange: onTooltipVisibleChange,
                animation: tooltipAnimation,
                needAdjust: false,
            }}
            // @ts-expect-error Tooltip 组件不存在 animation 属性
            animation={{
                in: 'fadeInUp',
                out: 'fadeOutDown',
            }}
            trigger={Slider(newprop as RangeSliderProps)}
            align="t"
        >
            {tipRender(value as number)}
        </Tooltip>
    ) : (
        Slider(newprop as RangeSliderProps)
    );
}

UpperSlider.propTypes = {
    hasTip: PropTypes.bool,
    tooltipVisible: PropTypes.bool,
    onTooltipVisibleChange: PropTypes.func,
    tooltipAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    tipRender: PropTypes.func,
    slider: PropTypes.oneOf(['single', 'double']),
};

UpperSlider.displayName = 'UpperSlider';

function pauseEvent(e: React.SyntheticEvent) {
    e.stopPropagation();
    e.preventDefault();
}

class Range extends React.Component<RangeProps, RangeState> {
    static displayName = 'Range';
    static contextTypes = {
        prefix: PropTypes.string,
    };
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        slider: PropTypes.oneOf(['single', 'double']),
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        tempValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        marks: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.object,
        ]),
        marksPosition: PropTypes.oneOf(['above', 'below']),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onProcess: PropTypes.func,
        hasTip: PropTypes.bool,
        tipRender: PropTypes.func,
        id: PropTypes.string,
        reverse: PropTypes.bool,
        pure: PropTypes.bool,
        fixedWidth: PropTypes.bool,
        tooltipVisible: PropTypes.bool,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        slider: 'single',
        min: 0,
        max: 100,
        step: 1,
        marks: false,
        disabled: false,
        fixedWidth: false,
        tooltipVisible: false,
        hasTip: true,
        onChange: noop,
        onProcess: noop,
        tipRender: (value: RangeValueType) => value,
        reverse: false,
        pure: false,
        marksPosition: 'above',
        rtl: false,
        isPreview: false,
    };
    _moving: {
        start: number;
        end: number;
        startValue: RangeState['tempValue'];
        dragging?: 'lower' | 'upper';
    } | null;
    dom: HTMLDivElement;
    isFixedWidth: boolean;
    lastPosition: number;
    oldDragging?: 'lower' | 'upper';
    _onMouseMoveListener: EventOnReturnType | null;
    _onMouseUpListener: EventOnReturnType | null;
    _onContextMenuListener: EventOnReturnType | null;
    _onTouchMoveListener: EventOnReturnType | null;
    _onTouchEndListener: EventOnReturnType | null;

    readonly props: RangePropsWithDefault;

    constructor(props: RangeProps) {
        super(props);
        const { min } = props;
        const initialValue = _isMultiple(props.slider) ? ([min, min] as [number, number]) : min;
        const defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
        const value = props.value !== undefined ? props.value : defaultValue;

        this.state = {
            value,
            tempValue: value,
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true,
        };

        bindCtx(this, [
            'handleLowerTooltipVisibleChange',
            'handleUpperTooltipVisibleChange',
            'onKeyDown',
        ]);
    }

    static getDerivedStateFromProps(props: RangePropsWithDefault, state: RangeState) {
        if ('value' in props) {
            const { min, slider, value } = props;
            const { hasMovingClass } = state;
            const newState: Partial<RangeState> = {
                value,
            };

            if (value === undefined) {
                newState.value = _isMultiple(slider) ? [min, min] : min;
            }

            if (!hasMovingClass) {
                newState.tempValue = newState.value;
            }

            return newState;
        }
        return null;
    }

    _marksToScales(marks: RangePropsWithDefault['marks']) {
        let result: number | number[] | false = [];
        if (Object.prototype.toString.call(marks) === '[object Object]') {
            for (const key in marks as Record<number, string>) {
                if (Object.hasOwnProperty.call(marks, key)) {
                    result.push(parseInt(key));
                }
            }
        } else {
            // @ts-expect-error 需要对 marks 增加类型守卫
            result = marks;
        }
        return result;
    }

    _calcScales() {
        const { min, max, marks } = this.props;
        const scales = this._marksToScales(marks);

        if (scales !== false) {
            if (Array.isArray(scales)) {
                return scales;
            } else {
                const pace = (max - min) / scales;
                const result = [];

                result.push(min);
                for (let i = 1; i < scales; i++) {
                    result.push(min + i * pace);
                }
                result.push(max);
                return result;
            }
        } else {
            return [];
        }
    }

    _calcMarks() {
        const { min, max, marks } = this.props;

        let result: Record<number, string> = {};

        if (Array.isArray(marks)) {
            marks.forEach(m => {
                result[m] = m.toString();
            });
        } else if (typeof marks === 'number') {
            const pace = (max - min) / marks;
            // @ts-expect-error result 对象的 value 为 string 类型
            result[min] = min;
            for (let i = 1; i < marks; i++) {
                let mark: string | number = min + i * pace;
                let precision = getPrecision(mark);
                if (precision > 2) {
                    precision = 2;
                }

                mark = mark.toFixed(precision);
                // @ts-expect-error result 对象的 key 为 number 类型
                result[mark] = mark;
            }
            // @ts-expect-error result 对象的 value 为 string 类型
            result[max] = max;
        } else {
            result = marks as Record<number, string>;
        }
        return result;
    }

    _onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        if (e.button === 0) {
            this._start(e.pageX);
            this._addDocumentMouseEvents();
            pauseEvent(e);
        }
    }

    _onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        this._start(e.targetTouches[0].pageX);
        this._addDocumentTouchEvents();
        e.stopPropagation(); // preventDefault() will be ignored: https://www.chromestatus.com/features/5093566007214080
    }

    onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        if (this.props.disabled) return;

        if (e.keyCode === KEYCODE.LEFT_ARROW || e.keyCode === KEYCODE.RIGHT_ARROW) {
            e.stopPropagation();
            e.preventDefault();
            let newValue;
            if (e.keyCode === KEYCODE.LEFT_ARROW) {
                newValue = (this.state.value as number) - this.props.step;
            } else {
                newValue = (this.state.value as number) + this.props.step;
            }
            if (newValue > this.props.max) {
                newValue = this.props.max;
            }
            if (newValue < this.props.min) {
                newValue = this.props.min;
            }
            if (newValue !== this.state.value) {
                this.setState({
                    value: newValue,
                });
                this.props.onChange(newValue);
            }
        }
    }

    _onContextMenu(e: React.MouseEvent<HTMLDivElement>) {
        pauseEvent(e);
    }

    _start(position: number) {
        this.setState({
            hasMovingClass: true,
        });

        const { tempValue } = this.state;
        const range = this.dom;
        const start = dom.getOffset(range).left;
        // used in unit test
        let width = range.clientWidth;
        if (!width) {
            if (range.style.width) {
                const index = range.style.width.indexOf('px');
                if (index !== -1) {
                    width = Number(range.style.width.slice(0, index));
                }
            }
        }

        this._moving = {
            start,
            end: start + width,
            startValue: tempValue,
        };

        // change on start
        this._onProcess(position, true);
    }

    _end() {
        const { startValue } = this._moving!;
        const { tempValue, value } = this.state;
        this._moving = null;
        this._removeDocumentEvents();
        this.setState({
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true,
        });

        if (!isEqual(tempValue!, startValue!)) {
            // Not Controlled
            if (!('value' in this.props)) {
                this.setState({
                    value: tempValue,
                });
            } else {
                this.setState({
                    // tooltipVisible: false,
                    tempValue: value,
                    value,
                });
            }
            this.props.onChange(tempValue!);
        }
    }

    _move(e: React.MouseEvent<Element> | React.TouchEvent<Element>) {
        const position =
            e.type === 'mousemove'
                ? (e as React.MouseEvent<Element>).pageX
                : (e as React.TouchEvent<Element>).targetTouches[0].pageX;
        this._onProcess(position);
    }

    _onProcess(position: number, start?: boolean) {
        const { tempValue } = this.state;
        const current = this._positionToCurrent(position); //current 为当前click的value

        if (this.isFixedWidth) {
            if (start) {
                this.lastPosition = current;
            }
        } else if (start) {
            this.lastPosition = current;
            if (_isMultiple(this.props.slider)) {
                this._moving!.dragging = getDragging(current, tempValue as [number, number]);
            } else {
                this._moving!.dragging = 'upper';
            }

            this.setState({
                lowerTooltipVisible: this._moving!.dragging === 'lower',
                upperTooltipVisible: this._moving!.dragging === 'upper',
                tooltipAnimation: false,
            });
        } else if (this.oldDragging === 'lower' && this._moving!.dragging === 'upper') {
            this.setState({
                upperTooltipVisible: true,
                lowerTooltipVisible: false,
            });
        } else if (this.oldDragging === 'upper' && this._moving!.dragging === 'lower') {
            this.setState({
                upperTooltipVisible: false,
                lowerTooltipVisible: true,
            });
        }

        this.oldDragging = this._moving!.dragging;

        const nextValue = this._currentToValue(
            current,
            tempValue!,
            this.lastPosition,
            this.isFixedWidth
        ); //计算range的新value,可能是数组,可能是单个值
        this.lastPosition = current;

        if (!isEqual(nextValue!, tempValue!)) {
            this.setState({
                tempValue: nextValue,
            });
            this.props.onProcess(nextValue!);
        }
    }

    _addDocumentMouseEvents() {
        this._onMouseMoveListener = events.on(document, 'mousemove', this._move.bind(this));
        this._onMouseUpListener = events.on(document, 'mouseup', this._end.bind(this));
        this._onContextMenuListener = events.on(
            document,
            'contextmenu',
            this._onContextMenu.bind(this)
        );
    }

    _addDocumentTouchEvents() {
        this._onTouchMoveListener = events.on(document, 'touchmove', this._move.bind(this));
        this._onTouchEndListener = events.on(document, 'touchend', this._end.bind(this));
    }

    _removeDocumentEvents() {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener.off();
            this._onMouseMoveListener = null;
        }

        if (this._onMouseUpListener) {
            this._onMouseUpListener.off();
            this._onMouseUpListener = null;
        }

        if (this._onTouchMoveListener) {
            this._onTouchMoveListener.off();
            this._onTouchMoveListener = null;
        }

        if (this._onTouchEndListener) {
            this._onTouchEndListener.off();
            this._onTouchEndListener = null;
        }

        if (this._onContextMenuListener) {
            this._onContextMenuListener.off();
            this._onContextMenuListener = null;
        }
    }

    // position => current (value type)
    _positionToCurrent(position: number) {
        const { start, end } = this._moving!;
        const { step, min, max, rtl } = this.props;

        if (position < start) {
            position = start;
        } else if (position > end) {
            position = end;
        }
        let percent = getPercent(start, end, position);
        percent = rtl ? 100 - percent : percent;
        // reset by step
        const newValue = parseFloat(
            (Math.round(((percent / 100) * (max - min)) / step) * step).toFixed(getPrecision(step))
        );
        const currentValue = (min + newValue).toFixed(getPrecision(step));

        return Number(currentValue);
    }

    _currentToValue(
        current: number,
        preValue: number | [number, number],
        lastPosition: number,
        isFixedWidth: boolean
    ) {
        const { dragging } = this._moving!;
        const { min, max } = this.props;

        if (!_isMultiple(this.props.slider, isFixedWidth)) {
            return current;
        } else {
            let result: RangeValueType | undefined;
            // FIXME 对 preValue 增加类型守卫
            const arrayPreValue = preValue as [number, number];
            const precision = getPrecision(this.props.step);
            const diff = current - lastPosition;
            const newLeft = +(+arrayPreValue[0] + diff).toFixed(precision);
            const newRight = +(+arrayPreValue[1] + diff).toFixed(precision);

            const newMaxLeft = +(max - arrayPreValue[1] + arrayPreValue[0]).toFixed(precision);
            const newMinRight = +(min + arrayPreValue[1] - arrayPreValue[0]).toFixed(precision);

            if (isFixedWidth) {
                if (newLeft < min) {
                    result = [min, newMinRight];
                } else if (newRight > max) {
                    result = [newMaxLeft, max];
                } else {
                    result = [newLeft, newRight];
                }
            } else if (dragging === 'lower') {
                if (current > arrayPreValue[1]) {
                    result = [arrayPreValue[1], current];
                    this._moving!.dragging = 'upper';
                } else {
                    result = [current, arrayPreValue[1]];
                }
            } else if (dragging === 'upper') {
                if (current < arrayPreValue[0]) {
                    result = [current, arrayPreValue[0]];
                    this._moving!.dragging = 'lower';
                } else {
                    result = [arrayPreValue[0], current];
                }
            }

            return result;
        }
    }

    handleLowerTooltipVisibleChange(visible: boolean) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            lowerTooltipVisible: visible,
        });
    }

    handleUpperTooltipVisibleChange(visible: boolean) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            upperTooltipVisible: visible,
        });
    }

    render() {
        let value = this._moving ? this.state.tempValue : this.state.value;

        const {
            prefix,
            min,
            max,
            disabled,
            style,
            id,
            slider,
            reverse,
            className,
            marks,
            marksPosition,
            hasTip,
            tipRender,
            fixedWidth,
            defaultValue,
            tooltipVisible,
            rtl,
            isPreview,
            renderPreview,
        } = this.props;

        const others = pickOthers(Object.keys(Range.propTypes), this.props);

        const classes = classNames({
            [`${prefix}range`]: true,
            disabled: disabled,
            [className!]: className,
        });

        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                if (item > max) {
                    (value as [number, number])[index] = max;
                }
            });
            // @ts-expect-error value 存在 undefined 情况
        } else if (value > max) {
            value = max;
        }

        const commonProps = {
            prefix,
            min,
            max,
            value,
            reverse,
            slider,
            hasTip,
            tipRender,
            marksPosition,
            tooltipVisible,
            hasMovingClass: this.state.hasMovingClass,
            disabled,
            rtl,
        };

        this.isFixedWidth =
            fixedWidth &&
            (value ? Array.isArray(value) : defaultValue ? Array.isArray(defaultValue) : false);

        if (isPreview) {
            const previewCls = classNames(className, `${prefix}form-preview`);

            if ('renderPreview' in this.props) {
                return (
                    <div id={id} dir={rtl ? 'rtl' : 'ltr'} {...others} className={previewCls}>
                        {renderPreview!(value, this.props)}
                    </div>
                );
            }

            return (
                <p id={id} dir={rtl ? 'rtl' : 'ltr'} {...others} className={previewCls}>
                    {Array.isArray(value) ? value.join('~') : value}
                </p>
            );
        }

        return (
            <div
                ref={dom => {
                    this.dom = dom!;
                }}
                {...others}
                style={style}
                className={classes}
                id={id}
                dir={rtl ? 'rtl' : 'ltr'}
                onMouseDown={disabled ? noop : this._onMouseDown.bind(this)}
                onTouchStart={disabled ? noop : this._onTouchStart.bind(this)}
            >
                {marks !== false && marksPosition === 'above' ? (
                    <Mark {...commonProps} marks={this._calcMarks()} />
                ) : null}
                <div className={`${prefix}range-inner`}>
                    <Scale {...commonProps} scales={this._calcScales()} />
                    <Track {...commonProps} />
                    {this.isFixedWidth ? (
                        // @ts-expect-error value 存在 undefined 情况
                        <FixedSlider {...commonProps} />
                    ) : (
                        <div>
                            <Selected {...commonProps} />
                            <LowerSlider
                                {...commonProps}
                                hasMovingClass={
                                    this.state.hasMovingClass &&
                                    this._moving &&
                                    this._moving.dragging === 'lower'
                                }
                                tooltipVisible={tooltipVisible || this.state.lowerTooltipVisible}
                                onTooltipVisibleChange={this.handleLowerTooltipVisibleChange}
                                tooltipAnimation={
                                    this.state.tooltipAnimation
                                        ? {
                                              in: 'expandInUp',
                                              out: 'expandOutDown',
                                          }
                                        : false
                                }
                            />
                            <UpperSlider
                                {...commonProps}
                                onKeyDown={this.onKeyDown}
                                hasMovingClass={
                                    this.state.hasMovingClass &&
                                    this._moving &&
                                    this._moving.dragging === 'upper'
                                }
                                tooltipVisible={tooltipVisible || this.state.upperTooltipVisible}
                                onTooltipVisibleChange={this.handleUpperTooltipVisibleChange}
                                tooltipAnimation={
                                    this.state.tooltipAnimation
                                        ? {
                                              in: 'expandInUp',
                                              out: 'expandOutDown',
                                          }
                                        : false
                                }
                            />
                        </div>
                    )}
                </div>
                {marks !== false && marksPosition === 'below' ? (
                    <Mark {...commonProps} marks={this._calcMarks()} />
                ) : null}
            </div>
        );
    }
}

export default polyfill(Range);
