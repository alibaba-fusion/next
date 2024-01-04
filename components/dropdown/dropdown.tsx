/* eslint-disable tsdoc/syntax */
import * as React from 'react';
import { Component, Children } from 'react';
import * as PropTypes from 'prop-types';
import Overlay from '../overlay';
import { func } from '../util';
import { DropdownProps } from './types';

const { noop, makeChain, bindCtx } = func;
const Popup = Overlay.Popup;

interface ReactElementNextMenuType {
    isNextMenu: boolean;
}

/**
 * Dropdown
 * @remarks 继承 Popup 的 API，除非特别说明
 */
export default class Dropdown extends Component<
    DropdownProps,
    { visible: unknown; autoFocus: boolean | undefined }
> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 弹层内容
         */
        children: PropTypes.node,
        /**
         * 弹层当前是否显示
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层显示或隐藏时触发的回调函数
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 触发弹层显示或者隐藏的元素
         */
        trigger: PropTypes.node,
        /**
         * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
         */
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /**
         * 设置此属性，弹层无法显示或隐藏
         */
        disabled: PropTypes.bool,
        /**
         * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
         */
        align: PropTypes.string,
        /**
         * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量
         * e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
         */
        offset: PropTypes.array,
        /**
         * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
         */
        delay: PropTypes.number,
        /**
         * 弹层打开时是否让其中的元素自动获取焦点
         */
        autoFocus: PropTypes.bool,
        /**
         * 是否显示遮罩
         */
        hasMask: PropTypes.bool,
        /**
         * 开启后，children 不管是不是Menu，点击后都默认关掉弹层（2.x默认设置为true）
         * @version 1.23
         */
        autoClose: PropTypes.bool,
        /**
         * 隐藏时是否保留子节点
         */
        cache: PropTypes.bool,
        /**
         * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
         * @default { in: 'expandInDown', out: 'expandOutUp' }
         */
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    };
    static defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultVisible: false,
        autoClose: false,
        onVisibleChange: noop,
        triggerType: 'hover',
        disabled: false,
        align: 'tl bl',
        offset: [0, 0],
        delay: 200,
        hasMask: false,
        cache: false,
        onPosition: noop,
    };

    constructor(props: DropdownProps | Readonly<DropdownProps>) {
        super(props);

        this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible || false,
            autoFocus: 'autoFocus' in props ? props.autoFocus : false,
        };

        bindCtx(this, ['onTriggerKeyDown', 'onMenuClick', 'onVisibleChange']);
    }

    static getDerivedStateFromProps(nextProps: { visible: unknown }) {
        const state: { visible?: unknown } = {};

        if ('visible' in nextProps) {
            state.visible = nextProps.visible;
        }

        return state;
    }

    getVisible(props = this.props) {
        return 'visible' in props ? props.visible : this.state.visible;
    }

    onMenuClick() {
        const { autoClose } = this.props;

        if (!('visible' in this.props) && autoClose) {
            this.setState({
                visible: false,
            });
        }
        this.onVisibleChange(false, 'fromContent');
    }

    onVisibleChange(visible: boolean, from: string) {
        this.setState({ visible });

        this.props.onVisibleChange?.(visible, from);
    }

    onTriggerKeyDown() {
        let autoFocus = true;

        if ('autoFocus' in this.props) {
            autoFocus = !!this.props.autoFocus;
        }

        this.setState({
            autoFocus,
        });
    }

    render() {
        const { rtl, autoClose } = this.props;
        const trigger = this.props.trigger as React.ReactPortal;

        const child = Children.only(this.props.children) as React.ReactPortal;
        let content = child as React.ReactChild;
        if (
            typeof child.type === 'function' &&
            (child.type as unknown as ReactElementNextMenuType).isNextMenu
        ) {
            content = React.cloneElement(child, {
                onItemClick: makeChain(this.onMenuClick, child.props.onItemClick),
            });
        } else if (autoClose) {
            content = React.cloneElement(child as React.ReactElement, {
                onClick: makeChain(this.onMenuClick, child.props.onClick),
            });
        }

        const newTrigger = React.cloneElement(trigger, {
            onKeyDown: makeChain(this.onTriggerKeyDown, trigger.props.onKeyDown),
        });

        return (
            <Popup
                {...this.props}
                rtl={rtl}
                autoFocus={this.state.autoFocus}
                trigger={newTrigger}
                visible={this.getVisible() as boolean}
                onVisibleChange={this.onVisibleChange}
                canCloseByOutSideClick
            >
                {content}
            </Popup>
        );
    }
}
