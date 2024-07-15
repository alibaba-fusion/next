import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../icon';
import { obj, func } from '../../util';
import type { OptionProps, ArrowProps } from '../types';

/**
 * slider arrow
 * 左右控制箭头
 */

const { noop } = func;

export default class Arrow extends Component<ArrowProps> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf(['prev', 'next']).isRequired,
        centerMode: PropTypes.bool,
        currentSlide: PropTypes.number,
        infinite: PropTypes.bool,
        clickHandler: PropTypes.func,
        slideCount: PropTypes.number,
        slidesToShow: PropTypes.number,
        arrow: PropTypes.element,
        arrowSize: PropTypes.string,
        arrowPosition: PropTypes.string,
        arrowDirection: PropTypes.oneOf(['hoz', 'ver']),
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        children: PropTypes.node,
    };

    static defaultProps = {
        onMouseEnter: noop,
        onMouseLeave: noop,
    };

    static ARROW_ICON_TYPES = {
        hoz: { prev: 'arrow-left', next: 'arrow-right' },
        ver: { prev: 'arrow-up', next: 'arrow-down' },
    };

    static isDisabled(props: ArrowProps) {
        const { infinite, type, centerMode, currentSlide, slideCount, slidesToShow } = props;

        if (infinite) {
            return false;
        }

        // 下一个 index 大于总数？？
        // if (slideCount <= slidesToShow) {
        //     return true;
        // }

        // 向前箭头：当前是第 0 个
        if (type === 'prev') {
            return currentSlide! <= 0;
        }

        if (centerMode && currentSlide! >= slideCount! - 1) {
            // 向后箭头：居中模式，当前 index 大于最大 index
            return true;
        } else if (currentSlide! >= slideCount! - slidesToShow!) {
            // 向后箭头：普通模式，当前 index 大于 总数 - 下一个 index ？？？
            return true;
        }

        return false;
    }

    handleClick(options: OptionProps, e: React.MouseEvent<HTMLElement>) {
        e && e.preventDefault();

        // TODO hack
        if (options.message === 'prev') {
            options.message = 'previous';
        }

        this.props.clickHandler?.(options, e);
    }

    render() {
        const {
            prefix,
            type,
            arrowSize,
            arrowPosition,
            arrowDirection,
            onMouseEnter,
            onMouseLeave,
            children,
        } = this.props;

        const others = obj.pickOthers(Arrow.propTypes, this.props);
        const iconType = Arrow.ARROW_ICON_TYPES[arrowDirection!][type!];
        const disabled = Arrow.isDisabled(this.props);

        const arrowClazz = classNames(
            [
                `${prefix}slick-arrow`,
                `${prefix}slick-${type}`,
                arrowPosition,
                arrowSize,
                arrowDirection,
            ],
            { disabled }
        );

        const arrowProps = {
            ...others,
            key: type,
            'data-role': 'none',
            className: arrowClazz,
            style: { display: 'block' },
            onClick: disabled ? null : this.handleClick.bind(this, { message: type }),
            onMouseEnter: disabled ? undefined : onMouseEnter,
            onMouseLeave: disabled ? undefined : onMouseLeave,
        };

        if (children) {
            return React.cloneElement(React.Children.only(children), arrowProps);
        } else {
            return (
                <button {...arrowProps}>
                    <Icon type={iconType} />
                </button>
            );
        }
    }
}
