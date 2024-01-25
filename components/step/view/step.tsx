import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component, Children } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
import type { StepProps } from '../types';
import StepItem from './step-item';

const getHeight = (el: HTMLElement) => dom.getStyle(el, 'height');
const setHeight = (el: HTMLElement, height: number | string) => dom.setStyle(el, 'height', height);
type StepState = {
    parentWidth: string;
    parentHeight: string;
    currentfocus: number;
};

/** Step */
class Step extends Component<StepProps, StepState> {
    static Item = StepItem;
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 当前步骤
         */
        current: PropTypes.number,
        /**
         * 展示方向
         */
        direction: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 横向布局时( direction 为 hoz )的内容排列
         */
        labelPlacement: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 类型
         */
        shape: PropTypes.oneOf(['circle', 'arrow', 'dot']),
        /**
         * 是否只读模式
         */
        readOnly: PropTypes.bool,
        /**
         * 是否开启动效
         */
        animation: PropTypes.bool,
        /**
         * 自定义样式名
         */
        className: PropTypes.string,
        /**
         * StepItem 的自定义渲染
         * @param index - 节点索引
         * @param status - 节点状态
         * @returns \{Node\} 节点的渲染结果
         */
        itemRender: PropTypes.func,
        /**
         * 宽度横向拉伸
         */
        stretch: PropTypes.bool,
        type: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        current: 0,
        direction: 'hoz',
        labelPlacement: 'ver',
        shape: 'circle',
        animation: true,
        itemRender: null,
        stretch: false,
    };

    static contextTypes = {
        prefix: PropTypes.string,
    };
    static getDerivedStateFromProps(newProps: StepProps) {
        if ('current' in newProps) {
            return {
                current: newProps.current,
            };
        }
        return null;
    }
    constructor(props: StepProps) {
        super(props, context);
        this.state = {
            parentWidth: 'auto',
            parentHeight: 'auto',
            currentfocus: 0,
        };
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        if (!support.flex) {
            this.resize();
            events.on(window, 'resize', this.resize);
        }
        this.adjustHeight();
    }

    componentDidUpdate() {
        this.adjustHeight();
    }

    componentWillUnmount() {
        if (!support.flex) {
            events.off(window, 'resize', this.resize);
        }
    }

    step: HTMLOListElement | null;

    adjustHeight() {
        const { shape, direction, prefix, labelPlacement } = this.props;
        const step = ReactDOM.findDOMNode(this.step) as HTMLOListElement;
        if (
            shape !== 'arrow' &&
            (direction === 'horizontal' || direction === 'hoz') &&
            (labelPlacement === 'vertical' || labelPlacement === 'ver')
        ) {
            const height = (
                Array.prototype.slice.call(
                    step.getElementsByClassName(`${prefix}step-item`)
                ) as HTMLElement[]
            ).reduce((ret, re) => {
                const itemHeight =
                    Number(
                        getHeight(
                            re.getElementsByClassName(
                                `${prefix}step-item-container`
                            )[0] as HTMLElement
                        )
                    ) +
                    Number(
                        getHeight(
                            re.getElementsByClassName(`${prefix}step-item-body`)[0] as HTMLElement
                        )
                    );
                return Math.max(itemHeight, ret);
            }, 0);
            if (step instanceof HTMLElement) {
                setHeight(step, height);
            }
        } else {
            setHeight(step, 'auto');
        }
    }

    resize() {
        if (this.step) {
            this.setState({
                parentWidth: this.step.offsetWidth.toString() || '0',
                parentHeight: this.step.offsetHeight.toString() || '0',
            });
        }
    }

    // set dir key for aria handle
    // handleKeyDown = e => {
    //     const { shape, children } = this.props;
    //     const { length: max } = children;
    //     let { currentfocus } = this.state;
    //     const initPosition = currentfocus;
    //     switch (e.keyCode) {
    //         case KEYCODE.RIGHT:
    //         case KEYCODE.DOWN:
    //             currentfocus++;
    //             break;
    //         case KEYCODE.LEFT:
    //         case KEYCODE.UP:
    //             currentfocus--;
    //             break;
    //         default:
    //             break;
    //     }
    //     currentfocus =
    //         currentfocus >= max ? 0 : currentfocus < 0 ? max - 1 : currentfocus;
    //     this.setState({ currentfocus }, () => {
    //         const child = this.step.children[currentfocus];
    //         if (!child) return;
    //         const focusItem =
    //             shape === 'arrow'
    //                 ? child
    //                 : child.querySelector('.next-step-item-body');
    //         focusItem && focusItem.focus();
    //     });
    //     if (initPosition !== currentfocus) {
    //         e.preventDefault();
    //     }
    // };

    _getValidChildren(
        children:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined
    ) {
        const result: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>[] =
            [];
        React.Children.forEach(children, child => {
            if (React.isValidElement(child)) {
                result.push(child);
            }
        });
        return result;
    }

    _stepRefHandler = (ref: HTMLOListElement | null) => {
        this.step = ref;
    };

    render() {
        const {
            className,
            current,
            labelPlacement,
            shape,
            readOnly,
            animation,
            itemRender,
            rtl,
            stretch,
        } = this.props;
        const others = obj.pickOthers(Step.propTypes, this.props);
        let { prefix, direction, children } = this.props;
        prefix = this.context.prefix || prefix;
        const { parentWidth, parentHeight } = this.state;

        // type不同对应的direction不同
        direction = shape === 'arrow' ? 'hoz' : direction;

        // children去除null
        children = this._getValidChildren(children);
        // 修改子节点属性
        const cloneChildren = Children.map(children, (child: React.ReactElement, index) => {
            const status =
                typeof current !== 'undefined'
                    ? index < current
                        ? 'finish'
                        : index === current
                          ? 'process'
                          : 'wait'
                    : 'wait';

            return React.cloneElement(child, {
                prefix,
                key: index,
                index,
                total: Array.isArray(children) ? children.length : 0,
                status: child.props.status || status,
                shape,
                direction,
                labelPlacement,
                parentWidth,
                parentHeight,
                readOnly,
                animation,
                tabIndex: 0,
                // tabIndex: this.state.currentfocus === index ? '0' : '-1',
                'aria-current': status === 'process' ? 'step' : null,
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender, // 优先使用Item的itemRender
                onResize: () => {
                    this.step && this.adjustHeight();
                },
                stretch,
            });
        });

        const _direction =
            direction === 'ver' || direction === 'vertical' ? 'vertical' : 'horizontal';
        const _labelPlacement =
            labelPlacement === 'ver' || labelPlacement === 'vertical' ? 'vertical' : 'horizontal';
        const stepCls = classNames({
            [`${prefix}step`]: true,
            [`${prefix}step-${shape}`]: shape,
            [`${prefix}step-${_direction}`]: _direction,
            [`${prefix}step-label-${_labelPlacement}`]: _labelPlacement,
            [`${className}`]: className,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        // others.onKeyDown = makeChain(this.handleKeyDown, others.onKeyDown);
        return (
            <ol {...others} className={stepCls} ref={this._stepRefHandler}>
                {cloneChildren}
            </ol>
        );
    }
}
export default polyfill(Step);
