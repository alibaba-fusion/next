import type * as React from 'react';
import type { PopupProps } from '../overlay';
/**
 * @api Dropdown
 * 继承 Popup 绝大多数属性，除了 canCloseByOutSideClick, autoFocus，以下列举为常用属性，其他可参考 Overlay 文档
 * @en Inherit most properties from Popup, except canCloseByOutSideClick, autoFocus, the following are common properties, other properties can refer to Overlay documentation
 */
export interface DropdownProps extends Omit<PopupProps, 'trigger' | 'autoFocus'> {
    /**
     * 开启后，children 不管是不是 Menu，点击后都默认关掉弹层（2.x 默认设置为 true）
     * @en If set true, the popup will be closed when the child is clicked no matter whether it is a Menu (2.x default is true)
     * @defaultValue false
     */
    autoClose?: boolean;
    /**
     * 弹层内容
     * @en Content in Dropdown
     */
    children: React.ReactElement;
    /**
     * 弹层当前是否显示
     * @en Overlay display or not now
     */
    visible?: boolean;
    /**
     * 弹层相对于触发元素的定位，详见 Overlay 的定位部分
     * @en Overlay position relative to trigger element, see details Overlay align
     * @defaultValue 'tl bl'
     */
    align?: string;
    /**
     * 弹层相对于触发元素定位的微调
     * @en Extra adjustment for trigger element.
     * @remarks
     * 接收数组 [hoz, ver], 表示弹层在 left / top 上的增量。e.g. [100, 100] 表示往右 (RTL 模式下是往左) 、下分布偏移 100px
     * -
     * receive array [hoz, ver], indicate the offset of the pop-up layer on the left / top. e.g. [100, 100] means to the right (in RTL mode, it means to the left) and downward offset 100px
     * @defaultValue [0, 0]
     */
    offset?: [number, number];
    /**
     * 是否显示遮罩
     * @en Display mask or not
     * @defaultValue false
     */
    hasMask?: boolean;
    /**
     * 配置动画的播放方式，支持 \{in: 'enter-class', out: 'leave-class' \} 的对象参数，如果设置为 false，则不播放动画
     * @en Animation play mode, support object value: \{ in: 'enter-class', out: 'leave-class' \}, there is no animation if set false
     * @defaultValue \{ in: 'expandInDown', out: 'expandOutUp' \}
     */
    animation?: string | false | Record<'in' | 'out', string>;
    /**
     * 触发弹层显示或者隐藏的元素
     * @en Trigger element
     */
    trigger: React.ReactElement;
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']
     * @en Operation type of trigger overlay toggle visible, eg 'hover', 'click'
     * @defaultValue 'hover'
     */
    triggerType?: PopupProps['triggerType'];
    /**
     * 当 triggerType 为 click 时才生效，可自定义触发弹层显示的键盘码
     * @skip
     */
    triggerClickKeycode?: PopupProps['triggerClickKeycode'];
    /**
     * 弹层默认是否显示
     * @en Overlay display or not in default situation
     * @defaultValue false
     */
    defaultVisible?: boolean;
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @en Callback function when toggle visible of overlay
     */
    onVisibleChange?: PopupProps['onVisibleChange'];
    /**
     * 设置此属性，弹层无法显示或隐藏
     * @en Overlay can not toggle visible if you set disabled attribute
     * @defaultValue false
     */
    disabled?: PopupProps['disabled'];
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     * @en Delay time of toggle overlay visible(unit: ms)，if triggerType value is 'hover', delay time will work
     * @defaultValue 200
     */
    delay?: PopupProps['delay'];
    /**
     * 隐藏时是否保留子节点
     * @en Whether to keep dom nodes when hidden
     * @defaultValue false
     * @skip
     */
    cache?: boolean;
    /**
     * 弹层打开时是否让其中的元素自动获取焦点，仅在初始化时有效
     * @en Whether to focus the element in the overlay automatically when the overlay is opened, only valid at initialization
     * @defaultValue false
     * @skip
     */
    autoFocus?: boolean;
}
export interface DropdownState {
    visible: boolean | undefined;
    autoFocus: boolean | undefined;
}
