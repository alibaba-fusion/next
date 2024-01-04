import * as React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';
/**
 * @api Dropdown
 */
export interface DropdownProps extends React.HTMLAttributes<HTMLElement>, CommonProps, PopupProps {
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
    animation?: object | boolean;

    /**
     * 触发弹层显示或者隐藏的元素
     * @en Trigger element
     */
    trigger?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;

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
}
