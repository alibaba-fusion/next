import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Overlay from '../overlay';
import Inner from './inner';
import { obj } from '../util';

const { Popup } = Overlay;
const { pickOthers } = obj;

/**
 * Drawer
 */
export default class Drawer extends Component {
    static displayName = 'Drawer';

    static propTypes = {
        ...(Popup.propTypes || {}),
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        /**
         * 触发弹层显示或隐藏的元素
         */
        trigger: PropTypes.element,
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /**
         * 是否显示
         */
        visible: PropTypes.bool,
        /**
         * 是否显示遮罩
         */
        hasMask: PropTypes.bool,
        /**
         * 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
         * **mask** 表示点击遮罩区域可以关闭对话框
         * **esc** 表示按下 esc 键可以关闭对话框
         * 如 'mask' 或 'esc,mask'
         * 如果设置为 true，则以上关闭方式全部生效
         * 如果设置为 false，则以上关闭方式全部失效
         */
        closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        /**
         * 位于页面的位置
         */
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        /**
         * 弹层显示或隐藏时触发的回调
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 显示隐藏时动画的播放方式
         * @property {String} in 进场动画
         * @property {String} out 出场动画
         */
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    };

    static defaultProps = {
        prefix: 'next-',
        triggerType: 'click',
        trigger: null,
        closeable: true,
        hasMask: true,
        placement: 'right',
    };

    getAlign = placement => {
        let align;
        switch (placement) {
            case 'top':
                align = 'tl tl';
                break;
            case 'bottom':
                align = 'bl bl';
                break;
            case 'left':
                align = 'tl tl';
                break;
            case 'right':
            default:
                align = 'tr tr';
                break;
        }

        return align;
    };

    getAnimation = placement => {
        let animation;
        switch (placement) {
            case 'top':
                animation = {
                    in: 'fadeInDown',
                    out: 'fadeOutUp',
                };
                break;
            case 'bottom':
                animation = {
                    in: 'fadeInUp',
                    out: 'fadeOutDown',
                };
                break;
            case 'left':
                animation = {
                    in: 'fadeInLeft',
                    out: 'fadeOutLeft',
                };
                break;
            case 'right':
            default:
                animation = {
                    in: 'fadeInRight',
                    out: 'fadeOutRight',
                };
                break;
        }

        return animation;
    };

    getOverlayRef = ref => {
        this.overlay = ref;
    };

    mapcloseableToConfig(closeable) {
        return ['esc', 'close', 'mask'].reduce((ret, option) => {
            const key = option.charAt(0).toUpperCase() + option.substr(1);
            const value =
                typeof closeable === 'boolean'
                    ? closeable
                    : closeable.split(',').indexOf(option) > -1;

            if (option === 'esc' || option === 'mask') {
                ret[`canCloseBy${key}`] = value;
            } else {
                ret[`canCloseBy${key}Click`] = value;
            }

            return ret;
        }, {});
    }

    renderInner(closeable) {
        const {
            prefix,
            className,
            children,
            locale,
            placement,
            rtl,
        } = this.props;

        const others = pickOthers(Object.keys(Drawer.propTypes), this.props);

        return (
            <Inner
                prefix={prefix}
                className={className}
                locale={locale}
                closeable={closeable}
                rtl={rtl}
                placement={placement}
                {...others}
            >
                {children}
            </Inner>
        );
    }

    render() {
        const {
            prefix,
            trigger,
            triggerType,
            animation,
            hasMask,
            placement,
            closeable,
            rtl,
            ...others
        } = this.props;

        const {
            canCloseByCloseClick,
            ...closeConfig
        } = this.mapcloseableToConfig(closeable);

        const newPopupProps = {
            prefix,
            trigger,
            triggerType,
            animation: animation || this.getAnimation(placement),
            hasMask,
            align: this.getAlign(placement),
            ...closeConfig,
            canCloseByOutSideClick: false,
            disableScroll: true,
            ref: this.getOverlayRef,
            rtl,
            target: 'viewport',
        };

        const inner = this.renderInner(canCloseByCloseClick);

        return (
            <Popup {...newPopupProps} {...others}>
                {inner}
            </Popup>
        );
    }
}
