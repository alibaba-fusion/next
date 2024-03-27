import ReactDOM from 'react-dom';
import React, { Component, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import Icon from '../../icon';
import Progress from '../../progress';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
import type { ItemProps, StepStatus } from '../types';

const getWidth = (el: HTMLElement) => dom.getStyle(el, 'width') as number;
const getHeight = (el: HTMLElement) => dom.getStyle(el, 'height') as number;

/** Step.Item */
class StepItem extends Component<ItemProps> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        status: PropTypes.oneOf(['wait', 'process', 'finish']),
        title: PropTypes.node,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        labelPlacement: PropTypes.oneOf(['hoz', 'ver']),
        shape: PropTypes.oneOf(['circle', 'arrow', 'dot']),
        icon: PropTypes.string,
        content: PropTypes.node,
        itemRender: PropTypes.func,
        percent: PropTypes.number,
        index: PropTypes.number,
        total: PropTypes.number,
        animation: PropTypes.bool,
        disabled: PropTypes.bool,
        parentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        parentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onClick: PropTypes.func,
        className: PropTypes.string,
        readOnly: PropTypes.bool,
        onResize: PropTypes.func,
        stretch: PropTypes.bool,
    };

    static defaultProps = {
        shape: 'circle',
        index: 0,
        total: 1,
        onClick: () => {},
        stretch: false,
    };

    ro: ResizeObserver;
    container: HTMLDivElement;
    stepNode: HTMLDivElement;
    step: HTMLLIElement;
    body: HTMLDivElement;
    title: HTMLDivElement;
    tail: HTMLDivElement;
    eventHandler: { off: () => void } | undefined;

    constructor(props: ItemProps) {
        super(props);
        this.removeClickedCls = this.removeClickedCls.bind(this);
        this._refHandlerCreator = this._refHandlerCreator.bind(this);
        this.resize = this.resize.bind(this);
        this.ro = new ResizeObserver(() => {
            const { shape, direction, onResize } = this.props;
            if (!this.body || shape === 'arrow') {
                return;
            }
            if (direction === 'ver') {
                this.resize();
            } else {
                onResize && onResize();
            }
        });
    }

    componentDidMount() {
        const { shape, direction, labelPlacement, index, total, stretch } = this.props;
        this.body && this.ro.observe(ReactDOM.findDOMNode(this.body) as HTMLDivElement);
        if (shape === 'arrow') {
            return;
        }
        if (direction === 'ver') {
            this.resize();
            this.forceUpdate(); // 解决 Step 嵌套的情况下，嵌套节点宽度为 0 的问题
            this.eventHandler = events.on(window, 'resize', this.resize); // 调整垂直 Step
        } else if (direction === 'hoz' && labelPlacement === 'hoz' && index !== total! - 1) {
            // 调整横向 Content
            this.adjustTail();
        }
        if (stretch && direction === 'hoz') {
            this.adjustItemWidth();
        }
    }

    componentDidUpdate() {
        const { shape, direction, labelPlacement, index, total, rtl, stretch } = this.props;
        if (shape === 'arrow') {
            return;
        }
        const resetTailStyle = () => {
            dom.setStyle(this.tail, {
                width: '',
                top: '',
                height: '',
            });
        };

        if (direction === 'ver') {
            this.resize();
        } else if (direction === 'hoz') {
            const pos = rtl ? 'right' : 'left';
            dom.setStyle(this.body, {
                width: '',
                [pos]: '',
            } as { width: string; left?: string; right?: string });
            if (shape === 'circle' && labelPlacement === 'hoz' && index !== total! - 1) {
                // 调整横向 Content
                this.adjustTail();
            } else {
                resetTailStyle();
            }
            if (stretch) {
                this.adjustItemWidth();
            }
        } else if (index !== total! - 1) {
            resetTailStyle();
        }
    }

    componentWillUnmount() {
        this.eventHandler && this.eventHandler.off();
    }

    adjustItemWidth() {
        const { index, total, labelPlacement } = this.props;
        const lastNodeWidth =
            labelPlacement === 'hoz'
                ? this.container.offsetWidth + this.body.offsetWidth
                : this.title.offsetWidth;
        const width =
            total! - 1 !== index ? `calc((100% - ${lastNodeWidth}px)/${total! - 1})` : 'auto';
        dom.setStyle(this.step, {
            width,
        });
    }

    adjustTail() {
        const width = this.container.offsetWidth + this.title.offsetWidth;
        dom.setStyle(this.tail, {
            width: `calc(100% - ${width}px)`,
            top: `${getHeight(this.container) / 2}px`,
        });
    }

    resize() {
        const { direction } = this.props;
        if (direction === 'ver') {
            const stepWidth = getWidth(this.step);
            const stepHozWhitespace = dom.getNodeHozWhitespace(this.step.parentNode as HTMLElement);
            const stepBodyHozWhitespace = dom.getNodeHozWhitespace(this.body);
            const { rtl } = this.props;
            rtl
                ? (this.body.style.right = `${stepWidth}px`)
                : (this.body.style.left = `${stepWidth}px`);
            dom.setStyle(this.body, {
                width:
                    getWidth(this.step.parentNode!.parentNode as HTMLElement) -
                    stepWidth -
                    stepHozWhitespace -
                    stepBodyHozWhitespace,
            });
            dom.setStyle(this.tail, 'height', getHeight(this.body) - getHeight(this.container));
        }
    }

    _getNode() {
        const { prefix, index, status, icon, shape, percent, itemRender } = this.props;
        let nodeElement: ReactNode = icon;
        if (shape === 'dot') {
            nodeElement = icon ? (
                <Icon type={icon} />
            ) : (
                <div className={`${prefix}step-item-node-dot`}> </div>
            );
        } else if (shape === 'circle' && percent) {
            nodeElement = (
                <Progress
                    shape="circle"
                    percent={percent}
                    className={`${prefix}step-item-progress`}
                />
            );
        } else if (shape === 'circle' && !!itemRender && typeof itemRender === 'function') {
            nodeElement = null; // 如果是需要自定义节点，则不处理，返回空
        } else {
            nodeElement = (
                <div className={`${prefix}step-item-node-circle`}>
                    {icon ? <Icon type={icon} /> : this._itemRender(index!, status!)}
                </div>
            );
        }

        return nodeElement;
    }
    getNode(args: {
        stepCls: string;
        overlayCls: { width: string } | null;
        others: Omit<ItemProps, keyof typeof StepItem.propTypes>;
    }) {
        const { prefix, itemRender, index, status, title, content, shape } = this.props;
        const { others, stepCls, overlayCls } = args;
        const nodeElement = this._getNode();
        const containerStyle = (shape === 'dot' && { fontSize: 'initial' }) || {};
        let finalNodeElement = (
            <div
                className={`${prefix}step-item-container`}
                style={containerStyle}
                ref={this._refHandlerCreator('container')}
            >
                <div className={`${prefix}step-item-node-placeholder`} onClick={this.onClick}>
                    <div
                        className={`${prefix}step-item-node`}
                        ref={this._refHandlerCreator('stepNode')}
                        onTransitionEnd={this.removeClickedCls}
                    >
                        {nodeElement}
                    </div>
                </div>
            </div>
        );

        if (!nodeElement) {
            // 需要自定义子节点
            finalNodeElement = (
                <div
                    className={`${prefix}step-item-container`}
                    style={containerStyle}
                    ref={this._refHandlerCreator('container')}
                >
                    <div className={`${prefix}step-item-node-placeholder`} onClick={this.onClick}>
                        {itemRender!(index!, status!, title, content)}
                    </div>
                </div>
            );
        }
        if (shape !== 'arrow') {
            delete others.tabIndex;
            delete others['aria-current'];
        }

        return (
            <li
                {...others}
                style={this.getStyle()}
                className={stepCls}
                ref={this._refHandlerCreator('step')}
            >
                {finalNodeElement}
                <div
                    className={`${prefix}step-item-body`}
                    ref={this._refHandlerCreator('body')}
                    tabIndex={this.props.tabIndex}
                    aria-current={this.props['aria-current']}
                >
                    <div
                        className={`${prefix}step-item-title`}
                        ref={this._refHandlerCreator('title')}
                    >
                        {title}
                    </div>
                    <div className={`${prefix}step-item-content`}>{content}</div>
                </div>
                <div className={`${prefix}step-item-tail`} ref={this._refHandlerCreator('tail')}>
                    <div className={`${prefix}step-item-tail-underlay`}>
                        {/* @ts-expect-error overlayCls 可能是 null，跟 style 类型不匹配 */}
                        <div className={`${prefix}step-item-tail-overlay`} style={overlayCls} />
                    </div>
                </div>
            </li>
        );
    }

    getStyle() {
        const { parentWidth, parentHeight, direction, total, index, shape } = this.props;
        let width: string | number = 'auto';

        if (Number(parentWidth) && Number(parentHeight)) {
            if (!support.flex && shape === 'arrow') {
                width = Math.floor(parentWidth! / total! - parentHeight! / 2 - parentHeight! / 8);
            }
        }
        if (shape !== 'arrow' && direction === 'hoz') {
            width = total! - 1 !== index ? `${Math.floor(100 / total!)}%` : 'auto';
        }
        return {
            width: width,
        };
    }

    onClick = () => {
        const { index, disabled, readOnly, animation } = this.props;
        if (disabled || readOnly) {
            return false;
        }

        if (animation && this.stepNode) {
            dom.hasClass(this.stepNode, 'clicked')
                ? dom.removeClass(this.stepNode, 'clicked')
                : dom.addClass(this.stepNode, 'clicked');
        }
        this.props.onClick!(index!);
    };

    removeClickedCls() {
        const { animation } = this.props;
        if (animation && this.stepNode && dom.hasClass(this.stepNode, 'clicked')) {
            dom.removeClass(this.stepNode, 'clicked');
        }
    }

    // 节点的渲染方法
    _itemRender(index: number, status: StepStatus) {
        const { itemRender } = this.props;
        if (itemRender) {
            return itemRender(index, status);
        }
        return status === 'finish' ? <Icon type="select" /> : index + 1;
    }

    _refHandlerCreator<Name extends 'container' | 'stepNode' | 'step' | 'body' | 'title' | 'tail'>(
        refName: Name
    ) {
        return (ref: this[Name]) => {
            this[refName] = ref;
        };
    }

    render() {
        const { prefix, className, status, title, index, total, shape, disabled, readOnly } =
            this.props;

        const others = obj.pickOthers(StepItem.propTypes, this.props);

        const stepCls = classNames({
            [`${prefix}step-item`]: true,
            [`${prefix}step-item-${status}`]: status,
            [`${prefix}step-item-first`]: index === 0,
            [`${prefix}step-item-last`]: index === total! - 1,
            [`${prefix}step-item-disabled`]: disabled,
            [`${prefix}step-item-read-only`]: readOnly,
            [className!]: className,
        });

        const overlayCls = status === 'finish' ? { width: '100%' } : null;
        const arrowElement = (
            <li {...others} style={this.getStyle()} className={stepCls} onClick={this.onClick}>
                <div className={`${prefix}step-item-container`}>
                    <div className={`${prefix}step-item-title`}>{title}</div>
                </div>
            </li>
        );
        const otherElement = this.getNode({ others, stepCls, overlayCls });

        return shape === 'arrow' ? arrowElement : otherElement;
    }
}
export default ConfigProvider.config(StepItem);
