import React, { Component, type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import { func, KEYCODE, obj, type ClassPropsWithDefault } from '../util';
import zhCN from '../locale/zh-cn';
import type { RatingProps, RatingState } from './types';

const { noop, bindCtx } = func;
const { ENTER, LEFT, UP, RIGHT, DOWN } = KEYCODE;
const supportKeys = [ENTER, LEFT, UP, RIGHT, DOWN];

// 评分组件的大小与 icon 的大小映射关系
const ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium',
} as const;

class Rating extends Component<RatingProps, RatingState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        defaultValue: PropTypes.number,
        value: PropTypes.number,
        count: PropTypes.number,
        showGrade: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        allowHalf: PropTypes.bool,
        allowClear: PropTypes.bool,
        onChange: PropTypes.func,
        onHoverChange: PropTypes.func,
        disabled: PropTypes.bool,
        readAs: PropTypes.func,
        iconType: PropTypes.string,
        strokeMode: PropTypes.bool,
        className: PropTypes.string,
        id: PropTypes.string,
        rtl: PropTypes.bool,
        locale: PropTypes.object,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        readOnly: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium',
        disabled: false,
        readOnly: false,
        isPreview: false,
        count: 5,
        showGrade: false,
        defaultValue: 0,
        readAs: (val: number) => val,
        allowHalf: false,
        allowClear: false,
        onChange: noop,
        onHoverChange: noop,
        locale: zhCN.Rating,
    };

    static currentValue(min: number, max: number, hoverValue: number, stateValue: number) {
        let value = hoverValue ? hoverValue : stateValue;

        value = value >= max ? max : value;
        value = value <= min ? min : value;

        return value || 0;
    }

    static getDerivedStateFromProps(nextProps: RatingProps) {
        const state: Partial<RatingState> = {};
        if ('value' in nextProps) {
            state.value = nextProps.value || 0;
        }

        if (
            'disabled' in nextProps ||
            'readOnly' in nextProps ||
            'isPreview' in nextProps ||
            'renderPreview' in nextProps
        ) {
            state.disabled =
                nextProps.disabled ||
                nextProps.readOnly ||
                (nextProps.isPreview && !('renderPreview' in nextProps));
        }

        return state;
    }

    timer: ReturnType<typeof setTimeout> | null;
    underlayNode: HTMLDivElement | null = null;
    readonly props: ClassPropsWithDefault<RatingProps, typeof Rating.defaultProps>;

    constructor(props: RatingProps) {
        super(props);

        this.state = {
            // @ts-expect-error FIXME 这里没有像 getDerivedStateFromProps 内那样处理 props.value 为 undefined 时的情况，先标记
            value: 'value' in props ? props.value : props.defaultValue,
            hoverValue: 0,
            cleanedValue: null,
            iconSpace: 0,
            iconSize: 0,
            clicked: false, // 标记组件是否被点击过
        };
        this.timer = null;
        bindCtx(this, ['handleClick', 'handleHover', 'handleLeave', 'onKeyDown']);
    }

    componentDidMount() {
        this.getRenderResult();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    [key: `refs-rating-icon-${number}`]: HTMLSpanElement | null;

    // 清除延时
    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    getRenderResult() {
        const { count } = this.props;
        const { iconSpace, iconSize } = this.state;
        const icon = this['refs-rating-icon-0'];

        if (icon && this.underlayNode) {
            const newIconSize = icon.offsetWidth;
            const newIconSpace =
                (this.underlayNode.offsetWidth - count * newIconSize) / (count + 1);

            if (newIconSize !== iconSize || newIconSpace !== iconSpace) {
                this.setState({
                    iconSpace: newIconSpace,
                    iconSize: newIconSize,
                });
            }
        }
    }

    getValue(e: MouseEvent) {
        // 如定位不准，优先纠正定位
        this.getRenderResult();

        const { allowHalf, count, rtl } = this.props;
        const { iconSpace, iconSize } = this.state;

        const pos = e.pageX - this.underlayNode!.getBoundingClientRect().left;
        const fullNum = Math.floor(pos / (iconSpace + iconSize));
        const surplusNum = (pos - fullNum * (iconSpace + iconSize) - iconSpace) / iconSize;
        let value = Number(fullNum) + Number(surplusNum.toFixed(1));
        if (value >= count) {
            value = count;
        } else if (allowHalf) {
            const floorValue = Math.floor(value);
            if (rtl) {
                value = value - 0.5 >= floorValue ? floorValue + 1.5 : floorValue + 1;
            } else {
                value = value - 0.5 >= floorValue ? floorValue + 1 : floorValue + 0.5;
            }
        } else {
            value = Math.floor(value) + 1;
        }

        return rtl ? count - value + 1 : value;
    }

    handleHover(e: MouseEvent<HTMLDivElement>) {
        if (this.state.disabled) {
            return;
        }

        const value = this.getValue(e);
        const { onHoverChange } = this.props;
        const { cleanedValue } = this.state;
        if (cleanedValue !== value) {
            this.clearTimer();

            this.timer = setTimeout(() => {
                this.setState({ hoverValue: value, cleanedValue: null }, () => {
                    onHoverChange(value);
                });
            }, 0);
        }
    }

    handleLeave() {
        const { onHoverChange } = this.props;
        if (this.state.disabled) {
            return;
        }

        this.clearTimer();

        this.setState({
            hoverValue: 0,
            cleanedValue: null,
        });
        onHoverChange(undefined);
    }

    onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
        if (this.state.disabled) {
            return;
        }

        const { onKeyDown, count } = this.props;
        const { disabled } = this.state;
        if (disabled || supportKeys.indexOf(e.keyCode) < 0) {
            return !onKeyDown || onKeyDown(e);
        }

        const { hoverValue, value } = this.state;
        let changingValue = hoverValue;
        if (changingValue === 0) {
            changingValue = value;
        }

        switch (e.keyCode) {
            case DOWN:
            case RIGHT:
                if (changingValue < count) {
                    changingValue += 1;
                } else {
                    changingValue = 1;
                }
                this.handleChecked(changingValue);
                break;
            case UP:
            case LEFT:
                if (changingValue > 1) {
                    changingValue -= 1;
                } else {
                    changingValue = count;
                }
                this.handleChecked(changingValue);
                break;
            case ENTER:
                this.props.onChange(changingValue);
                this.setState({
                    value: changingValue,
                    hoverValue: changingValue,
                });
                break;
        }
        return !onKeyDown || onKeyDown(e);
    }

    handleChecked(index: number) {
        if (this.state.disabled) {
            return;
        }

        this.setState({ hoverValue: index });
    }

    handleClick(e: MouseEvent<HTMLDivElement>) {
        if (this.state.disabled) {
            return;
        }
        const { allowClear } = this.props;
        const { value } = this.state;
        const newValue = this.getValue(e);
        let isReset = false;
        if (allowClear) {
            isReset = newValue === value;
        }
        this.handleLeave();
        if (newValue < 0) {
            return;
        }

        if (!('value' in this.props)) {
            this.setState({ value: isReset ? 0 : newValue, clicked: true });
        }

        if (newValue !== value || isReset) {
            this.props.onChange(isReset ? 0 : newValue);
        }
        setTimeout(() => {
            this.setState({ clicked: false });
        }, 100);
        this.setState({
            cleanedValue: isReset ? newValue : null,
        });
    }

    getOverlayWidth() {
        const { hoverValue, iconSpace, iconSize } = this.state;

        if (!iconSpace || !iconSize) {
            return 'auto';
        }

        const value = Rating.currentValue(0, this.props.count, hoverValue, this.state.value);

        const floorValue = Math.floor(value);

        return iconSize * value + (floorValue + 1) * iconSpace;
    }

    getInfoLeft() {
        const { value, hoverValue, iconSpace, iconSize } = this.state;
        const infoValue = hoverValue || value;
        const ceilValue = Math.ceil(infoValue);

        return iconSize * (ceilValue - 1) + ceilValue * iconSpace;
    }

    saveRef = (ref: HTMLSpanElement | null, i: number) => {
        this[`refs-rating-icon-${i}`] = ref;
    };

    render() {
        const {
            id,
            prefix,
            className,
            showGrade,
            count,
            size,
            iconType,
            strokeMode,
            readAs,
            rtl,
            isPreview,
            renderPreview,
            locale,
        } = this.props;

        const { disabled } = this.state;
        const others = obj.pickOthers(Rating.propTypes, this.props);
        const { hoverValue, clicked } = this.state;
        const underlay = [],
            overlay = [];

        const enableA11y = !!id;

        // 获得 Value
        const value = Rating.currentValue(0, count, hoverValue, this.state.value);

        // icon 的 sizeMap
        const sizeMap = ICON_SIZE_MAP[size];

        for (let i = 0; i < count; i++) {
            const isCurrent = Math.ceil(value - 1) === i;
            const iconCls = classNames({
                hover: hoverValue > 0 && isCurrent,
                clicked: clicked && isCurrent,
                [`${prefix}rating-symbol-icon`]: !iconType,
            });
            const iconNode = iconType ? (
                <Icon type={iconType} size={sizeMap} className={iconCls} />
            ) : (
                <Icon type="favorites-filling" size={sizeMap} className={iconCls} />
            );

            const saveRefs = (ref: HTMLSpanElement | null) => {
                this.saveRef(ref, i);
            };

            underlay.push(
                <span ref={saveRefs} key={`underlay-${i}`} className={`${prefix}rating-icon`}>
                    {iconNode}
                </span>
            );
            if (enableA11y) {
                overlay.push(
                    <input
                        id={`${id}-${prefix}star${i + 1}`}
                        key={`input-${i}`}
                        className={`${prefix}sr-only`}
                        // @ts-expect-error FIXME parseInt require number arg
                        aria-checked={i + 1 === parseInt(hoverValue)}
                        // @ts-expect-error FIXME parseInt require number arg
                        checked={i + 1 === parseInt(hoverValue)}
                        onChange={this.handleChecked.bind(this, i + 1)}
                        type="radio"
                        name="rating"
                    />
                );
            }

            overlay.push(
                <label
                    key={`overlay-${i}`}
                    htmlFor={enableA11y ? `${id}-${prefix}star${i + 1}` : undefined}
                    className={`${prefix}rating-icon`}
                >
                    {iconNode}
                    {enableA11y ? (
                        <span className={`${prefix}sr-only`}>{readAs(i + 1)}</span>
                    ) : null}
                </label>
            );
        }

        const ratingCls = classNames(
            [`${prefix}rating`, `${prefix}rating-${size}`],
            {
                [`${prefix}rating-grade-low`]: value <= count * 0.4,
                [`${prefix}rating-grade-high`]: value > count * 0.4,
                [`${prefix}rating-stroke-mode`]: strokeMode,
                hover: hoverValue > 0,
            },
            className
        );

        const baseCls = classNames(`${prefix}rating-base`, {
            [`${prefix}rating-base-disabled`]: disabled,
        });

        const previewCls = classNames(
            {
                [`${prefix}form-preview`]: true,
            },
            className
        );

        const overlayStyle = {
            width: this.getOverlayWidth(),
        };
        const infoStyle = {
            left: this.getInfoLeft(),
            display: hoverValue ? 'block' : 'none',
        };

        const finalProps = disabled
            ? {}
            : {
                  onClick: this.handleClick,
                  onMouseOver: this.handleHover,
                  onMouseMove: this.handleHover,
                  onMouseLeave: this.handleLeave,
              };

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview && typeof renderPreview === 'function') {
            return (
                <div id={id} {...others} className={previewCls}>
                    {renderPreview(value, this.props)}
                </div>
            );
        }

        return (
            <div
                id={id}
                {...others}
                className={ratingCls}
                onKeyDown={this.onKeyDown}
                tabIndex={0}
                role="group"
                aria-label={locale.description}
            >
                <div className={baseCls} {...finalProps}>
                    <div
                        className={`${prefix}rating-underlay`}
                        ref={n => (this.underlayNode = n)}
                        aria-hidden
                    >
                        {underlay}
                    </div>
                    <div
                        className={`${prefix}rating-overlay`}
                        style={overlayStyle}
                        onClick={e => e.preventDefault()}
                    >
                        {overlay}
                    </div>
                </div>
                {showGrade ? (
                    <div className={`${prefix}rating-info`} style={infoStyle}>
                        {readAs(value)}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default polyfill(Rating);
