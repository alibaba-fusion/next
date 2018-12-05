import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Animate from '../animate';
import ConfigProvider from '../config-provider';

const TYPE_MAPS = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    notice: 'prompt',
    help: 'help',
    loading: 'loading'
};

const noop = () => {};

/**
 * Message
 */
class Message extends Component {

    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        /**
         * 反馈类型
         */
        type: PropTypes.oneOf(['success', 'warning', 'error', 'notice', 'help', 'loading']),
        /**
         * 反馈外观
         */
        shape: PropTypes.oneOf(['inline', 'addon', 'toast']),
        /**
         * 反馈大小
         */
        size: PropTypes.oneOf(['medium', 'large']),
        /**
         * 标题
         */
        title: PropTypes.node,
        /**
         * 内容
         */
        children: PropTypes.node,
        /**
         * 默认是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 当前是否显示
         */
        visible: PropTypes.bool,
        /**
         * 显示的图标类型，会覆盖内部设置的IconType
         */
        iconType: PropTypes.string,
        /**
         * 显示关闭按钮
         */
        closeable: PropTypes.bool,
        /**
         * 关闭按钮的回调
         */
        onClose: PropTypes.func,
        /**
         * 关闭之后调用的函数
         */
        afterClose: PropTypes.func,
        /**
         * 是否开启展开收起动画
         */
        animation: PropTypes.bool,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'success',
        shape: 'inline',
        size: 'medium',
        defaultVisible: true,
        closeable: false,
        onClose: noop,
        afterClose: noop,
        animation: true
    };

    state = {
        visible: typeof this.props.visible === 'undefined' ? this.props.defaultVisible : this.props.visible
    }

    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    onClose = () => {
        if (!('visible' in this.props)) {
            this.setState({
                visible: false
            });
        }
        this.props.onClose(false);
    }

    render() {
        /* eslint-disable no-unused-vars */
        const { prefix, pure, className, type, shape, size, title, children, defaultVisible, visible: propsVisible, iconType: icon, closeable, onClose, afterClose, animation, rtl, ...others } = this.props;
        /* eslint-enable */
        const { visible } = this.state;
        const messagePrefix = `${prefix}message`;
        const iconType = icon || TYPE_MAPS[type];
        const classes = classNames({
            [messagePrefix]: true,
            [`${prefix}message-${type}`]: type,
            [`${prefix}${shape}`]: shape,
            [`${prefix}${size}`]: size,
            [`${prefix}title-content`]: !!title,
            [`${prefix}only-content`]: !title && !!children,
            [className]: className
        });

        const newChildren = visible ?
            (<div role="alert" {...others} className={classes} dir={rtl ? 'rtl': undefined}>
                {closeable ?
                    <a role="button" href="javascript:;" className={`${messagePrefix}-close`} onClick={this.onClose}>
                        <Icon type="close" />
                    </a> : null}
                <Icon className={`${messagePrefix}-symbol`} type={iconType} />
                {title ? <div className={`${messagePrefix}-title`}>{title}</div> : null}
                {children ? <div className={`${messagePrefix}-content`}>{children}</div> : null}
            </div>) : null;

        if (animation) {
            return <Animate.Expand animationAppear={false} afterLeave={afterClose}>{newChildren}</Animate.Expand>;
        }

        return newChildren;
    }
}

export default ConfigProvider.config(Message);
