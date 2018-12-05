import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { obj, events, func } from '../util';
import ConfigProvider from '../config-provider';
import { getScroll, getRect, getNodeHeight } from './util';

/** Affix */
class Affix extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置 Affix 需要监听滚动事件的容器元素
         * @return {ReactElement} 目标容器元素的实例
         */
        container: PropTypes.func,
        /**
         * 距离窗口顶部达到指定偏移量后触发
         */
        offsetTop: PropTypes.number,
        /**
         * 距离窗口底部达到制定偏移量后触发
         */
        offsetBottom: PropTypes.number,
        /**
         * 当元素的样式发生固钉样式变化时触发的回调函数
         * @param {Boolean} 元素是否被固钉
         */
        onAffix: PropTypes.func,
        /**
         * 是否启用绝对布局实现 affix
         * @param {Boolean} 是否启用绝对布局
         */
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

    constructor(props, context) {
        super(props, context);
        this.state = {
            style: null,
            containerStyle: null,
        };
        this.affixMode = this._getAffixMode(props);
    }

    componentDidMount() {
        const { container, useAbsolute } = this.props;
        this._updateNodePosition();
        // wait for parent rendered
        this.timeout = setTimeout(() => {
            this._setEventHandlerForContainer(container, useAbsolute);
        });
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        const { container, useAbsolute } = this.props;
        this._removeEventHandlerForContainer(container, useAbsolute);
    }

    _setEventHandlerForContainer(getContainer, useAbsolute = false) {
        const container = getContainer();
        if (!container) {
            return;
        }
        events.on(container, 'scroll', useAbsolute ? this._updateNodeAbsolutePosition : this._updateNodePosition, false);
        events.on(container, 'resize', useAbsolute ? this._updateNodeAbsolutePosition : this._updateNodePosition, false);
    }

    _removeEventHandlerForContainer(getContainer, useAbsolute = false) {
        const container = getContainer();
        if (container) {
            events.off(container, 'scroll', useAbsolute ? this._updateNodeAbsolutePosition : this._updateNodePosition);
            events.off(container, 'resize', useAbsolute ? this._updateNodeAbsolutePosition : this._updateNodePosition);
        }
    }

    _updateNodePosition = () => {
        const { container } = this.props;
        const affixContainer = container();

        if (!affixContainer) {
            return false;
        }
        const containerScrollTop = getScroll(affixContainer, true);    // 容器在垂直位置上的滚动 offset
        const affixOffset = this._getOffset(this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
        const containerHeight = getNodeHeight(affixContainer);         // 容器的高度
        const affixHeight = this.affixNode.offsetHeight;
        const containerRect = getRect(affixContainer);

        const affixMode = this.affixMode;

        if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
            // affix top
            this._setAffixStyle({
                position: 'fixed',
                top: affixMode.offset + containerRect.top,
                width: affixOffset.width,
            });
            this._setContainerStyle({
                width: affixOffset.width,
                height: affixHeight,
            });
        } else if (affixMode.bottom && containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
            // affix bottom
            this._setAffixStyle({
                position: 'fixed',
                bottom: affixMode.offset,
                width: affixOffset.width,
                height: affixHeight,
            });
            this._setContainerStyle({
                width: affixOffset.width,
                height: affixHeight,
            });
        } else {
            this._setAffixStyle(null);
            this._setContainerStyle(null);
        }
    };

    _updateNodeAbsolutePosition = () => {
        const { container } = this.props;
        const affixContainer = container();

        if (!affixContainer) {
            return false;
        }
        const containerScrollTop = getScroll(affixContainer, true);    // 容器在垂直位置上的滚动 offset
        const affixOffset = this._getOffset(this.affixNode, affixContainer); // 目标节点当前相对于容器的 offset
        const containerHeight = getNodeHeight(affixContainer);         // 容器的高度
        const affixHeight = this.affixNode.offsetHeight;

        const affixMode = this.affixMode;
        if (affixMode.top && containerScrollTop > affixOffset.top - affixMode.offset) {
            // affix top
            this._setAffixStyle({
                position: 'absolute',
                top: containerScrollTop - (affixOffset.top - affixMode.offset),
                width: affixOffset.width,
            }, true);
            this._setContainerStyle({
                width: affixOffset.width,
                height: affixHeight,
                position: 'relative',
            });
        } else if (affixMode.bottom && containerScrollTop < affixOffset.top + affixHeight + affixMode.offset - containerHeight) {
            // affix bottom
            this._setAffixStyle({
                position: 'absolute',
                top: containerScrollTop - (affixOffset.top + affixHeight + affixMode.offset - containerHeight),
                width: affixOffset.width,
                height: affixHeight,
            }, true);
            this._setContainerStyle({
                width: affixOffset.width,
                height: affixHeight,
                position: 'relative',
            });
        } else {
            this._setAffixStyle(null);
            this._setContainerStyle(null);
        }
    };

    _getAffixMode() {
        const { offsetTop, offsetBottom } = this.props;
        const affixMode = {
            top: false,
            bottom: false,
            offset: 0,
        };

        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            // set default
            affixMode.top = true;
        } else if (typeof offsetTop === 'number') {
            affixMode.top = true;
            affixMode.offset = offsetTop;
        } else if (typeof offsetBottom === 'number') {
            affixMode.bottom = true;
            affixMode.offset = offsetBottom;
        }

        return affixMode;
    }

    _setAffixStyle(affixStyle, affixed = false) {
        if (obj.shallowEqual(affixStyle, this.state.style)) {
            return;
        }

        this.setState({
            style: affixStyle,
        });

        const { onAffix } = this.props;

        if ((affixStyle && affixStyle.position === 'fixed') || affixed) {
            onAffix(true);
        } else if (!affixStyle) {
            onAffix(false);
        }
    }

    _setContainerStyle(containerStyle) {
        if (obj.shallowEqual(containerStyle, this.state.containerStyle)) {
            return;
        }
        this.setState({ containerStyle });
    }

    _getOffset(affixNode, affixContainer) {
        const affixRect = affixNode.getBoundingClientRect();  // affix 元素 相对浏览器窗口的位置
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

    _affixNodeRefHandler = (ref) => {
        this.affixNode = findDOMNode(ref);
    }

    render() {
        const { prefix, className, style, children } = this.props;
        const state = this.state;
        const classNames = classnames({
            [`${prefix}affix`]: state.style,
            [`${prefix}affix-top`]: !state.style && this.affixMode.top,
            [`${prefix}affix-bottom`]: !state.style && this.affixMode.bottom,
            [className]: className,
        });
        const combinedStyle = { ...state.containerStyle, ...style };

        return (
            <div ref={this._affixNodeRefHandler} style={combinedStyle}>
                <div className={classNames} style={state.style}>
                    {children}
                </div>
            </div>
        );
    }
}

export default ConfigProvider.config(Affix);
