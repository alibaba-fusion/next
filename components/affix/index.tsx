import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import { polyfill } from 'react-lifecycles-compat';

import type { AffixProps, AffixState, AffixMode } from './types';
import { obj, events, func } from '../util';
import ConfigProvider from '../config-provider';
import { getScroll, getRect, getNodeHeight } from './util';

/** Affix */
class Affix extends Component<AffixProps, AffixState> {
    static propTypes = {
        prefix: PropTypes.string,
        container: PropTypes.func,
        offsetTop: PropTypes.number,
        offsetBottom: PropTypes.number,
        onAffix: PropTypes.func,
        useAbsolute: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
    };

    static defaultProps = {
        prefix: 'next-',
        container: () => window,
        onAffix: func.noop,
    };

    static _getAffixMode(nextProps: AffixProps): AffixMode {
        const affixMode: AffixMode = {
            top: false,
            bottom: false,
            offset: 0,
        };
        if (!nextProps) {
            return affixMode;
        }
        const { offsetTop, offsetBottom } = nextProps;

        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        } else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.bottom = false;
            affixMode.offset = offsetTop;
        } else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.top = false;
            affixMode.offset = offsetBottom;
        }

        return affixMode;
    }

    constructor(props: AffixProps, context?: unknown) {
        super(props, context);
        this.state = {
            style: null,
            containerStyle: null,
            positionStyle: null,
            affixMode: Affix._getAffixMode(props),
        };
        this.resizeObserver = new ResizeObserver(this._updateNodePosition);
    }

    static getDerivedStateFromProps(nextProps: AffixProps) {
        if ('offsetTop' in nextProps || 'offsetBottom' in nextProps) {
            return {
                affixMode: Affix._getAffixMode(nextProps),
            };
        }
        return null;
    }

    componentDidMount() {
        const { container } = this.props;
        // wait for parent rendered
        this.timeout = setTimeout(() => {
            this._updateNodePosition();
            this._setEventHandlerForContainer(container!);
        });
    }

    componentDidUpdate(prevProps: AffixProps) {
        if (prevProps.container!() !== this.props.container!()) {
            this._clearContainerEvent();

            this.timeout = setTimeout(() => {
                this._setEventHandlerForContainer(this.props.container!);
            });
        }

        setTimeout(this._updateNodePosition);
    }

    componentWillUnmount() {
        this._clearContainerEvent();
    }

    resizeObserver: ResizeObserver;
    timeout: ReturnType<typeof setTimeout> | null;
    affixNode: HTMLDivElement;
    affixChildNode: HTMLDivElement;

    _clearContainerEvent = () => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        const { container } = this.props;
        this._removeEventHandlerForContainer(container!);
    };

    _setEventHandlerForContainer(getContainer: NonNullable<AffixProps['container']>) {
        const container = getContainer();
        if (!container) {
            return;
        }
        events.on(container, 'scroll', this._updateNodePosition, false);
        this.resizeObserver.observe(this.affixNode);
    }

    _removeEventHandlerForContainer(getContainer: NonNullable<AffixProps['container']>) {
        const container = getContainer();
        if (container) {
            events.off(container, 'scroll', this._updateNodePosition);
            this.resizeObserver.disconnect();
        }
    }

    updatePosition = () => {
        this._updateNodePosition();
    };

    _updateNodePosition = () => {
        const { affixMode } = this.state;
        const { container, useAbsolute } = this.props;
        const affixContainer = container!();

        if (!affixContainer || !this.affixNode) {
            return false;
        }
        const containerScrollTop = getScroll(affixContainer, true); // 容器在垂直位置上的滚动 offset
        const affixOffset = this._getOffset(this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
        const containerHeight = getNodeHeight(affixContainer); // 容器的高度
        const affixHeight = this.affixNode.offsetHeight;
        const containerRect = getRect(affixContainer);

        const affixChildHeight = this.affixChildNode.offsetHeight;

        const affixStyle: AffixState['style'] = {
            width: affixOffset.width,
        };
        const containerStyle: AffixState['containerStyle'] = {
            width: affixOffset.width,
            height: affixChildHeight,
        };
        let positionStyle: AffixState['positionStyle'] = null;
        if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
            // affix top
            if (useAbsolute) {
                affixStyle.position = 'absolute';
                affixStyle.top = containerScrollTop - (affixOffset.top - affixMode.offset);
                positionStyle = 'relative';
            } else {
                affixStyle.position = 'fixed';
                affixStyle.top = affixMode.offset + containerRect.top;
            }
            this._setAffixStyle(affixStyle, true);
            this._setContainerStyle(containerStyle);
        } else if (
            affixMode.bottom &&
            containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight
        ) {
            // affix bottom
            affixStyle.height = affixHeight;
            if (useAbsolute) {
                affixStyle.position = 'absolute';
                affixStyle.top =
                    containerScrollTop -
                    (affixOffset.top + affixHeight + affixMode.offset - containerHeight);
                positionStyle = 'relative';
            } else {
                affixStyle.position = 'fixed';
                affixStyle.bottom = affixMode.offset;
            }
            this._setAffixStyle(affixStyle, true);
            this._setContainerStyle(containerStyle);
        } else {
            this._setAffixStyle(null);
            this._setContainerStyle(null);
        }

        if (this.state.positionStyle !== positionStyle) {
            this.setState({ positionStyle });
        }
    };

    _setAffixStyle(affixStyle: AffixState['style'], affixed = false) {
        if (obj.shallowEqual(affixStyle, this.state.style)) {
            return;
        }

        this.setState({
            style: affixStyle,
        });

        const { onAffix } = this.props;

        if (affixed) {
            setTimeout(() => onAffix!(true));
        } else if (!affixStyle) {
            setTimeout(() => onAffix!(false));
        }
    }

    _setContainerStyle(containerStyle: AffixState['containerStyle']) {
        if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
            return;
        }
        this.setState({ containerStyle });
    }

    _getOffset(affixNode: HTMLDivElement, affixContainer: Element | Window) {
        const affixRect = affixNode.getBoundingClientRect(); // affix 元素 相对浏览器窗口的位置
        const containerRect = getRect(affixContainer); // affix 容器 相对浏览器窗口的位置
        const containerScrollTop = getScroll(affixContainer, true);
        const containerScrollLeft = getScroll(affixContainer, false);

        return {
            top: affixRect.top - containerRect.top + containerScrollTop,
            left: affixRect.left - containerRect.left + containerScrollLeft,
            width: affixRect.width,
            height: affixRect.height,
        };
    }

    _affixNodeRefHandler = (ref: HTMLDivElement) => {
        this.affixNode = ref;
    };

    _affixChildNodeRefHandler = (ref: HTMLDivElement) => {
        this.affixChildNode = ref;
    };

    render() {
        const { affixMode, positionStyle } = this.state;
        const { prefix, className, style, children } = this.props;
        const state = this.state;
        const classNames = classnames({
            [`${prefix}affix`]: state.style,
            [`${prefix}affix-top`]: !state.style && affixMode.top,
            [`${prefix}affix-bottom`]: !state.style && affixMode.bottom,
            [className!]: className,
        });
        const wrapperStyle = { ...style, position: positionStyle || undefined };

        return (
            <div ref={this._affixNodeRefHandler} style={wrapperStyle}>
                {state.style && <div style={state.containerStyle!} aria-hidden="true" />}
                <div
                    ref={this._affixChildNodeRefHandler}
                    className={classNames}
                    style={state.style!}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export { AffixProps };

export default ConfigProvider.config(polyfill(Affix));
