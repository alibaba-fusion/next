import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component, Children, type ReactNode, type ReactElement } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
import type { StepProps, StepState } from '../types';

const getHeight = (el: HTMLElement) => dom.getStyle(el, 'height') as number;
const setHeight = (el: HTMLElement, height: number | string) => dom.setStyle(el, 'height', height);

/** Step */
class Step extends Component<StepProps, StepState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        current: PropTypes.number,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        labelPlacement: PropTypes.oneOf(['hoz', 'ver']),
        shape: PropTypes.oneOf(['circle', 'arrow', 'dot']),
        readOnly: PropTypes.bool,
        animation: PropTypes.bool,
        className: PropTypes.string,
        itemRender: PropTypes.func,
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

    static getDerivedStateFromProps(newProps: StepProps) {
        if ('current' in newProps) {
            return {
                current: newProps.current,
            };
        }
        return null;
    }

    step: HTMLOListElement | null = null;

    constructor(props: StepProps, context?: unknown) {
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

    adjustHeight() {
        const { shape, direction, prefix, labelPlacement } = this.props;
        const step = ReactDOM.findDOMNode(this.step) as HTMLOListElement;
        if (shape !== 'arrow' && direction === 'hoz' && labelPlacement === 'ver') {
            const height = (
                Array.prototype.slice.call(
                    step.getElementsByClassName(`${prefix}step-item`)
                ) as HTMLElement[]
            ).reduce((ret, re) => {
                const itemHeight =
                    getHeight(
                        re.getElementsByClassName(`${prefix}step-item-container`)[0] as HTMLElement
                    ) +
                    getHeight(
                        re.getElementsByClassName(`${prefix}step-item-body`)[0] as HTMLElement
                    );
                return Math.max(itemHeight, ret);
            }, 0);
            setHeight(step, height);
        } else {
            setHeight(step, '');
        }
    }

    resize() {
        if (this.step) {
            this.setState({
                parentWidth: this.step.offsetWidth || 0,
                parentHeight: this.step.offsetHeight || 0,
            });
        }
    }

    _getValidChildren(children: ReactNode) {
        const result: ReactElement[] = [];
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
        let { prefix, direction } = this.props;
        prefix = this.context.prefix || prefix;
        const { parentWidth, parentHeight } = this.state;

        // type 不同对应的 direction 不同
        direction = shape === 'arrow' ? 'hoz' : direction;

        // children 去除 null
        const children = this._getValidChildren(this.props.children);

        // 修改子节点属性
        const cloneChildren = Children.map(children, (child, index) => {
            const status = index < current! ? 'finish' : index === current ? 'process' : 'wait';

            return React.cloneElement(child, {
                prefix,
                key: index,
                index,
                total: children.length,
                status: child.props.status || status,
                shape,
                direction,
                labelPlacement,
                parentWidth,
                parentHeight,
                readOnly,
                animation,
                tabIndex: 0,
                'aria-current': status === 'process' ? 'step' : null,
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender, // 优先使用Item的itemRender
                onResize: () => {
                    this.step && this.adjustHeight();
                },
                stretch,
            });
        });

        const _direction = direction === 'ver' ? 'vertical' : 'horizontal';
        const _labelPlacement = labelPlacement === 'ver' ? 'vertical' : 'horizontal';
        const stepCls = classNames({
            [`${prefix}step`]: true,
            [`${prefix}step-${shape}`]: shape,
            [`${prefix}step-${_direction}`]: _direction,
            [`${prefix}step-label-${_labelPlacement}`]: _labelPlacement,
            [className!]: className,
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
