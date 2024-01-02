/* eslint-disable tsdoc/syntax */
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import { Component, Children } from 'react';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
import type { StepProps } from '../types';
import StepItem from './step-item';

const getHeight = (el: HTMLElement) => dom.getStyle(el, 'height');
const setHeight = (el: HTMLElement, height: number) => dom.setStyle(el, 'height', height);
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
         * @param {Number} index   节点索引
         * @param {String} status  节点状态
         * @returns {Node} 节点的渲染结果
         */
        itemRender: PropTypes.func,
        /**
         * 宽度横向拉伸
         */
        stretch: PropTypes.bool,
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
    static getDerivedStateFromProps(
        nextProps: { current: unknown },
        prevState: { current: unknown }
    ) {
        // 计算新的状态...
        const newState = { current: nextProps.current };

        // 如果没有需要更新的状态，返回 null
        if (newState.current === prevState.current) {
            return null;
        }

        // 否则，返回新的状态
        return newState;
    }
    constructor(props: StepProps, context: unknown) {
        super(props, context);
        this.state = {
            parentWidth: 'auto',
            parentHeight: 'auto',
            currentfocus: 0,
        };
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        /* istanbul ignore if */
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
        /* istanbul ignore if */
        if (!support.flex) {
            events.off(window, 'resize', this.resize);
        }
    }

    step: unknown;

    adjustHeight() {
        const { shape, direction, prefix, labelPlacement } = this.props;
        const step = ReactDOM.findDOMNode(this.step as React.ReactInstance);
        if (
            shape !== 'arrow' &&
            (direction === 'horizontal' || direction === 'hoz') &&
            (labelPlacement === 'vertical' || labelPlacement === 'ver')
        ) {
            const height = Array.prototype.slice
                .call((step as HTMLElement)?.getElementsByClassName(`${prefix}step-item`))
                .reduce(
                    (
                        ret: number,
                        re: {
                            getElementsByClassName: (
                                arg0: string
                            ) => (
                                | boolean
                                | React.ReactChild
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined
                            )[];
                        }
                    ) => {
                        const containerElements = re.getElementsByClassName(
                            `${prefix}step-item-container`
                        );
                        const bodyElements = re.getElementsByClassName(`${prefix}step-item-body`);
                        const itemHeight =
                            Number(getHeight(containerElements[0] as HTMLElement)) +
                            Number(getHeight(bodyElements[0] as HTMLElement));
                        return Math.max(itemHeight, ret);
                    },
                    0
                );
            if (step instanceof HTMLElement) {
                setHeight(step, height);
            }
        } else {
            setHeight(step as HTMLElement, 'auto' as unknown as number);
        }
    }

    resize() {
        if (this.step) {
            this.setState({
                parentWidth: (this.step as HTMLElement).offsetWidth.toString() || '0',
                parentHeight: (this.step as HTMLElement).offsetHeight.toString() || '0',
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

    _stepRefHandler = (ref: unknown) => {
        this.step = ref;
    };

    render() {
        // eslint-disable-next-line
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
