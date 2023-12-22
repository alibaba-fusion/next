import * as React from 'react';
import { CommonProps } from '../util';
/**
 * @api Dropdown
 */
export interface DropdownProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 弹层内容
     * @en Content in overlay
     */
    children?: React.ReactNode;

    /**
     * 弹层当前是否显示
     * @en Overlay display or not now
     */
    visible?: boolean;

    /**
     * 弹层请求关闭时触发事件的回调函数
     * @skip
     */
    onRequestClose?: (type: string, e: object) => void;

    /**
     * 弹层定位的参照元素
     * @skip
     */
    target?: React.ReactNode;

    /**
     * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
     * @en Overlay position relative to trigger element, see details Overlay align
     * @defaultValue 'tl bl'
     */
    align?: string;

    /**
     * 弹层相对于触发元素定位的微调
     * @en Extra adjustment for trigger element. e.g. [hoz, ver] means move to right $\{hoz\}px (to left in RTL mode), to bottom $\{ver\}px
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;

    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     * @skip
     */
    container?: unknown;

    /**
     * 是否显示遮罩
     * @en Display mask or not
     * @defaultValue false
     */
    hasMask?: boolean;

    /**
     * 是否支持 esc 按键关闭弹层
     * @skip
     */
    canCloseByEsc?: boolean;

    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     * @skip
     */
    canCloseByOutSideClick?: boolean;

    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     * @skip
     */
    canCloseByMask?: boolean;

    /**
     * 弹层打开前触发事件的回调函数
     * @skip
     */
    beforeOpen?: () => void;

    /**
     * 弹层打开时触发事件的回调函数
     * @skip
     */
    onOpen?: () => void;

    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @skip
     */
    afterOpen?: () => void;

    /**
     * 弹层关闭前触发事件的回调函数
     * @skip
     */
    beforeClose?: () => void;

    /**
     * 弹层关闭时触发事件的回调函数
     * @skip
     */
    onClose?: () => void;

    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     * @skip
     */
    afterClose?: () => void;

    /**
     * 弹层定位完成前触发的事件
     * @skip
     */
    beforePosition?: () => void;

    /**
     * 弹层定位完成时触发的事件
     * @skip
     */
    onPosition?: (config: object, node: object) => void;

    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     * @skip
     */
    shouldUpdatePosition?: boolean;

    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     * @en Let element in overlay get focus or not after overlay was opened
     * @defaultValue true
     */
    autoFocus?: boolean;

    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @skip
     */
    needAdjust?: boolean;

    /**
     * 是否禁用页面滚动
     * @skip
     */
    disableScroll?: boolean;

    /**
     * 隐藏时是否保留子节点
     * @en Reserve child element or not after hidden overlay
     * @defaultValue false
     */
    cache?: boolean;

    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     * @skip
     */
    safeNode?: unknown;

    /**
     * 弹层的根节点的样式类
     * @skip
     */
    wrapperClassName?: string;

    /**
     * 弹层的根节点的内联样式
     * @skip
     */
    wrapperStyle?: React.CSSProperties;

    /**
     * 配置动画的播放方式，支持 \{in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画
     * @en Animation play mode, support object value: \{ in: 'enter-class', out: 'leave-class' \}, there is no animation if set false
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     */
    animation?: object | boolean;

    /**
     * 触发弹层显示或者隐藏的元素
     * @en Trigger element
     */
    trigger?: React.ReactNode;

    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
     * @en Operation type of trigger overlay toggle visible, eg 'hover', 'click'
     * @defaultValue 'hover'
     */
    triggerType?: string | Array<string>;

    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     * @skip
     */
    triggerClickKeycode?: number | Array<number>;

    /**
     * 弹层默认是否显示
     * @en Overlay display or not in default situation
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 开启后，默认点击children弹窗就收起 0.x 2.x中默认是true
     * @skip
     */
    autoClose?: boolean;

    /**
     * 弹层显示或隐藏时触发的回调函数
     * @en Callback function when toggle visible of overlay
     * @param visible - 弹层是否显示 - Overlay display or not
     * @param type - 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发 - Origin of trigger overlay toggle visible
     */
    onVisibleChange?: (visible: boolean, type: string) => void;

    /**
     * 设置此属性，弹层无法显示或隐藏
     * @en Overlay can not toggle visible if you set disabled attribute
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     * @en Delay time of toggle overlay visible(unit: ms)，if triggerType value is 'hover', delay time will work
     * @defaultValue 200
     */
    delay?: number;

    /**
     * trigger 是否可以关闭弹层
     * @skip
     */
    canCloseByTrigger?: boolean;

    /**
     * 是否跟随trigger滚动
     * @skip
     */
    followTrigger?: boolean;
}
