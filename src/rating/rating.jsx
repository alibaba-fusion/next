import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import {func, obj} from '../util';

const {noop, bindCtx} = func;

// 评分组件的大小与icon的大小映射关系
const ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium'
};

/** Rating */
export default class Rating extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 默认值
         */
        defaultValue: PropTypes.number,
        /**
         * 值
         */
        value: PropTypes.number,
        /**
         * 评分的总数
         */
        count: PropTypes.number,
        /**
         * 是否显示 grade
         */
        showGrade: PropTypes.bool,
        /**
         * 尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 是否允许半星评分
         */
        allowHalf: PropTypes.bool,
        /**
         * 用户点击评分时触发的回调
         * @param {String} value 评分值
         */
        onChange: PropTypes.func,
        /**
         * 用户hover评分时触发的回调
         * @param {String} value 评分值
         */
        onHoverChange: PropTypes.func,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        // 实验属性: 自定义评分icon
        iconType: PropTypes.string,
        // 实验属性: 开启 `-webkit-text-stroke` 显示边框颜色，在IE中无效
        strokeMode: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium',
        disabled: false,
        count: 5,
        showGrade: false,
        defaultValue: 0,
        allowHalf: false,
        iconType: 'favorites-filling',
        onChange: noop,
        onHoverChange: noop
    };

    constructor(props) {
        super(props);

        this.state = {
            value: 'value' in props ? props.value : props.defaultValue,
            hoverValue: 0,
            iconSpace: 0,
            iconSize: 0,
            clicked: false, // 标记组件是否被点击过
        };
        this.timer = null;

        bindCtx(this, [
            'handleClick',
            'handleHover',
            'handleLeave'
        ]);
    }

    componentDidMount() {
        this.getRenderResult();
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || 0
            });
        }
    }

    componentWillUnmount() {
        this.clearTimer();
    }

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
        const icon = this.refs['rating-icon-0'];

        if (icon && this.underlayNode) {
            const newIconSize = icon.offsetWidth;
            const newIconSpace = (this.underlayNode.offsetWidth - count * newIconSize) / (count + 1);

            if (newIconSize !== iconSize || newIconSpace !== iconSpace) {
                this.setState({
                    iconSpace: newIconSpace,
                    iconSize: newIconSize
                });
            }
        }
    }

    getValue(e) {
        // 如定位不准，优先纠正定位
        this.getRenderResult();

        const { allowHalf, count } = this.props;
        const { iconSpace, iconSize } = this.state;

        const pos = e.pageX - this.underlayNode.getBoundingClientRect().left;
        const fullNum = Math.floor(pos / (iconSpace + iconSize));
        const surplusNum = (pos - fullNum * (iconSpace + iconSize)) / iconSize;
        let value = Number(fullNum) + Number(surplusNum.toFixed(1));

        if (value >= count) {
            value = count;
        } else if (allowHalf) {
            const floorValue = Math.floor(value);
            value = (value - 0.5) >= floorValue ? floorValue + 1 : floorValue + 0.5;
        } else {
            value = Math.floor(value) + 1;
        }

        return value;
    }

    handleHover(e) {
        const value = this.getValue(e);
        const { onHoverChange } = this.props;
        if (value !== this.state.hoverValue) {

            this.clearTimer();

            this.timer = setTimeout(() => {
                this.setState({ hoverValue: value }, () => {
                    onHoverChange(value);
                });
            }, 0);
        }
    }

    handleLeave() {

        this.clearTimer();

        this.setState({
            hoverValue: 0
        });
    }

    handleClick(e) {
        const value = this.getValue(e);

        if (!('value' in this.props)) {
            this.setState({ value, clicked: true });
        }

        this.props.onChange(value);

        setTimeout(() => {
            this.setState({ clicked: false });
        }, 100);
    }

    currentValue(min, max, hoverValue, stateValue) {
        let value = hoverValue ? hoverValue : stateValue;

        value = value >= max ? max : value;
        value = value <= min ? min : value;

        return value;
    }

    getOverlayWidth() {
        const {hoverValue, iconSpace, iconSize} = this.state;

        if (!iconSpace || !iconSize) {
            return 'auto';
        }

        const value = this.currentValue(0, this.props.count, hoverValue, this.state.value);

        const floorValue = Math.floor(value);

        return iconSize * value + (floorValue + 1) * iconSpace;
    }

    getInfoLeft() {
        const {value, hoverValue, iconSpace, iconSize} = this.state;
        const infoValue = hoverValue || value;
        const ceilValue = Math.ceil(infoValue);

        return iconSize * (ceilValue - 1) + ceilValue * iconSpace;
    }

    render() {
        const {prefix, className, showGrade, count, size, iconType, strokeMode, disabled} = this.props;
        const others = obj.pickOthers(Rating.propTypes, this.props);
        const {hoverValue, clicked} = this.state;
        const underlay = [], overlay = [];

        // 获得Value
        const value = this.currentValue(0, count, hoverValue, this.state.value);

        // icon的sizeMap
        const sizeMap = ICON_SIZE_MAP[size];

        for (let i = 0; i < count; i++) {
            const isCurrent = Math.ceil(value - 1) === i;
            const iconCls = classNames({
                hover: hoverValue > 0 && isCurrent,
                clicked: clicked && isCurrent,
            });
            const iconNode = <Icon type={iconType} size={sizeMap} className={iconCls} />;

            underlay.push(
                <span ref={`rating-icon-${i}`} key={`underlay-${i}`} className={`${prefix}rating-icon`}>
                    {iconNode}
                </span>
            );
            overlay.push(
                <span key={`overlay-${i}`} className={`${prefix}rating-icon`}>
                    {iconNode}
                </span>
            );
        }

        const ratingCls = classNames([
            `${prefix}rating`,
            `${prefix}rating-${size}`
        ], {
            [`${prefix}rating-grade-low`]: value <= count * 0.4,
            [`${prefix}rating-grade-high`]: value > count * 0.4,
            [`${prefix}rating-stroke-mode`]: strokeMode,
            hover: hoverValue > 0,
        }, className);

        const baseCls = classNames(`${prefix}rating-base`, {
            [`${prefix}rating-base-disabled`]: disabled
        });

        const overlayStyle = {
            width: this.getOverlayWidth()
        };
        const infoStyle = {
            left: this.getInfoLeft(),
            display: hoverValue ? 'block' : 'none'
        };

        const finalProps = disabled ? {} : {
            onClick: this.handleClick,
            onMouseOver: this.handleHover,
            onMouseMove: this.handleHover,
            onMouseLeave: this.handleLeave
        };

        return (
            <div {...others} className={ratingCls}>
                <div className={baseCls} {...finalProps}>
                    <div className={`${prefix}rating-underlay`} ref={n => (this.underlayNode = n)}>{underlay}</div>
                    <div className={`${prefix}rating-overlay`} style={overlayStyle}>{overlay}</div>
                </div>
                {
                    showGrade ? <div className={`${prefix}rating-info`} style={infoStyle}>{value}</div> : null
                }
            </div>
        );
    }
}
