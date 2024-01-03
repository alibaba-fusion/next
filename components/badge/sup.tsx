import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import Animate from '../animate';
import { support, dom } from '../util';
import type { BadgeSubProps, BadgeSubState } from './types';

/**
 * badge sup component
 */

// util::getDigitArray
const getDigitArray = (num: number | string) =>
    num
        .toString()
        .split('')
        .reverse()
        .map(i => parseInt(i, 10));

class Sup extends Component<BadgeSubProps, BadgeSubState> {
    static propTypes = {
        prefix: PropTypes.string,
        count: PropTypes.number,
        showZero: PropTypes.bool,
        overflowCount: PropTypes.number,
        content: PropTypes.node,
        dot: PropTypes.bool,
        style: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        count: 0,
        showZero: false,
        overflowCount: 99,
        dot: false,
    };
    supEl: HTMLElement | null;

    // 单排可滚动的数字列表
    static renderDigit(prefix: string, digit: number, key: string | number) {
        const children: Array<React.ReactElement> = [];
        for (let i = 0; i < 30; i++) {
            children.push(<span key={i}>{i % 10}</span>);
        }

        return (
            <span className={`${prefix}badge-scroll-number-only`} key={key}>
                {children}
            </span>
        );
    }

    // 可滚动数字组
    static renderNumber(prefix: string, count: number | string) {
        return getDigitArray(count)
            .map((digit, i) => Sup.renderDigit(prefix, digit, i))
            .reverse();
    }

    constructor(props: BadgeSubProps) {
        super(props);

        // render 时，上一次的渲染数字 和 当前渲染的数字
        this.state = {
            lastCount: 0,
            currentCount: props.count,
        };
    }

    static getDerivedStateFromProps(nextProps: BadgeSubProps, prevState: BadgeSubState) {
        if ('count' in nextProps) {
            return {
                lastCount: prevState.currentCount,
                currentCount: nextProps.count,
            };
        }

        return null;
    }

    componentDidMount() {
        this.computeStyle(true);
    }

    componentDidUpdate(prevProps: BadgeSubProps) {
        if (prevProps.count !== this.props.count) {
            this.computeStyle(false);

            // NOTE why called `computeStyle` again after 300ms ?
            setTimeout(() => {
                this.computeStyle(true, true);
            }, 300);
        }
    }

    computeStyle(removeTransition: boolean, revert?: boolean) {
        const { prefix, count, overflowCount } = this.props;
        const { lastCount } = this.state;

        if (
            lastCount === undefined ||
            count === undefined ||
            overflowCount === undefined ||
            Number(count) < 0
        ) {
            return;
        }
        const supNode = this.supEl;

        if (supNode && dom.hasClass(supNode, `${prefix}badge-count`)) {
            let scrollNums = supNode.querySelectorAll<HTMLElement>(
                `.${prefix}badge-scroll-number-only`
            );

            if (scrollNums.length) {
                const height = window.getComputedStyle(supNode).height;

                scrollNums = [].slice.call(scrollNums, 0).reverse();

                getDigitArray(count).forEach((digit, i) => {
                    const position = this.getPositionByDigit(digit, i, revert);
                    const transformTo = -position * parseFloat(height);

                    removeTransition =
                        removeTransition ||
                        typeof getDigitArray(lastCount)[i] === 'undefined' ||
                        lastCount > overflowCount ||
                        Number(lastCount) <= 0;

                    const scrollStyle = support.animation
                        ? {
                              transition: removeTransition
                                  ? 'none'
                                  : 'transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1)',
                              WebkitTransform: `translateY(${transformTo}px)`,
                              transform: `translateY(${transformTo}px)`,
                              height,
                              lineHeight: height,
                          }
                        : {
                              top: `${transformTo}px`,
                              height,
                              lineHeight: height,
                          };

                    Object.keys(scrollStyle).forEach((key: keyof typeof scrollStyle) => {
                        scrollNums[i].style.setProperty(key, scrollStyle[key]!);
                    });
                });
            }
        }
    }

    getPositionByDigit(digit: number, i: number, revert?: boolean) {
        const { lastCount } = this.state;
        if (revert) {
            return 10 + digit;
        }
        const lastDigit = getDigitArray(lastCount!)[i] || 0;

        if (this.props.count! > lastCount!) {
            return (digit >= lastDigit ? 10 : 20) + digit;
        }

        if (digit <= lastDigit) {
            return 10 + digit;
        }

        return digit;
    }

    saveRef: React.LegacyRef<HTMLElement> = ref => {
        this.supEl = ref;
    };

    render() {
        const { prefix, count, showZero, overflowCount = 99, dot, style, content } = this.props;

        const supClasses = classNames(`${prefix}badge-scroll-number`, {
            [`${prefix}badge-count`]: !!count || (count === 0 && showZero),
            [`${prefix}badge-dot`]: dot,
            [`${prefix}badge-custom`]: !!content,
        });

        let children: React.ReactNode = null;
        const show = dot || (count as number) > 0 || (count === 0 && showZero) || content;

        if ((count as number) > 0 || (count === 0 && showZero)) {
            const realCount =
                (overflowCount as number) > 0 && (count as number) > (overflowCount as number)
                    ? `${overflowCount}+`
                    : count;

            children = isNaN(realCount as number) ? realCount : Sup.renderNumber(prefix!, count!);
        } else if (content) {
            children = content;
        }

        const animation = {
            appear: 'zoomIn',
            enter: 'zoomIn',
            leave: 'zoomOut',
        };

        const wrapper = support.animation ? <Animate animation={animation} /> : <span />;
        const element = show ? (
            <sup ref={this.saveRef} className={supClasses} style={style}>
                {children}
            </sup>
        ) : null;

        return React.cloneElement(wrapper, {}, element);
    }
}

export default polyfill(Sup);
