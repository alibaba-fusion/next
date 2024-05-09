import type React from 'react';
import type { CommonProps } from '../util';
import type { OverlayProps } from '../overlay';
import type { ConsumerState } from '../config-provider/consumer';
import type { Locale } from '../locale/types';

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;

/**
 * @api Message
 */
export interface MessageProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 反馈类型
     * @en type of message
     * @defaultValue 'success'
     */
    type?: 'success' | 'warning' | 'error' | 'notice' | 'help' | 'loading';

    /**
     * 反馈外观
     * @en shape of message
     * @defaultValue 'inline'
     */
    shape?: 'inline' | 'addon' | 'toast';

    /**
     * 反馈大小
     * @en size of message
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'large';

    /**
     * 标题
     * @en title of message
     */
    title?: React.ReactNode;

    /**
     * 内容，非函数式调用下使用
     * @en content of message
     */
    children?: React.ReactNode;

    /**
     * 默认是否显示
     * @en whether the message is visible in default
     * @defaultValue false
     */
    defaultVisible?: boolean;

    /**
     * 当前是否显示
     * @en whether the message is visible currently
     */
    visible?: boolean;

    /**
     * 显示的图标类型，会覆盖内部设置的IconType，传false不显示图标
     * @en type of icon, overriding the internally type of icon
     */
    iconType?: string | false;

    /**
     * 显示关闭按钮
     * @en whether to show the close button
     * @defaultValue false
     */
    closeable?: boolean;

    /**
     * 关闭按钮的回调
     * @en callback function triggered when close
     * @defaultValue () =\> \{\}
     */
    onClose?: () => void;

    /**
     * 关闭之后调用的函数
     * @en callback function triggered after closed
     * @defaultValue () =\> \{\}
     */
    afterClose?: () => void;

    /**
     * 是否开启展开收起动画
     * @en whether to enable expand and collapse animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * 多语言文案
     * @en Locale
     * @skip
     */
    locale?: Locale['Message'];
}

/**
 * @api Message.show
 * @remarks Message.show(props) 提供一个单例的调用方式，配置参数如下（继承 Overlay 的配置）：
 *
 * ```js
 * Message.show({
 *  type: 'error',
 *  title: '错误',
 *  content: '请联系相关人员反馈！',
 *  hasMask: true
 * });
 * ```
 * -
 * `Message.show(props)` provides a singleton call with the following configuration parameters (inheriting `Overlay` configuration):
 * ```js
 * Message.show({
 *  type: 'error',
 *  title: 'Error',
 *  content: 'Please contact admin feedback!',
 *  hasMask: true
 * });
 * ```
 */
export interface MessageQuickProps extends Omit<HTMLAttributesWeak, 'content'>, CommonProps {
    /**
     * 反馈类型
     * @en type of message
     * @defaultValue 'success'
     */
    type?: 'success' | 'warning' | 'error' | 'notice' | 'help' | 'loading';

    /**
     * 反馈大小
     * @en size of message
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'large';
    /**
     * 标题
     * @en title of message
     */
    title?: React.ReactNode;

    /**
     * 内容，函数式调用下使用
     * @en content of message
     */
    content?: React.ReactNode;
    /**
     * 弹层对齐方式，详情见 Overlay align
     * @en alignment reference Overlay
     * @defaultValue 'tc tc'
     */
    align?: string | boolean;

    /**
     * 弹层相对于参照元素定位的微调
     * @en offset after positioned
     * @defaultValue [0, 0]
     */
    offset?: Array<number>;
    /**
     * 是否显示遮罩
     * @en whether to have a mask
     * @defaultValue false
     */
    hasMask?: boolean;

    /**
     * 显示持续时间，0表示一直存在，以毫秒为单位
     * @en show duration, 0 means always present, in milliseconds
     * @defaultValue 3000
     */
    duration?: number;
    /**
     * @skip
     */
    timeoutId?: string;

    /**
     * 显示关闭按钮
     * @en whether to show the close button
     * @defaultValue false
     */
    closeable?: boolean;

    /**
     * 关闭按钮的回调
     * @en callback function triggered when close
     * @defaultValue () =\> \{\}
     */
    onClose?: () => void;

    /**
     * 关闭之后调用的函数
     * @en callback function triggered after closed
     * @defaultValue () =\> \{\}
     */
    afterClose?: () => void;

    /**
     * 是否开启展开收起动画
     * @en whether to enable expand and collapse animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * 透传到弹层组件的属性对象
     * @en props of Overlay
     */
    overlayProps?: OverlayProps;
    /**
     * @skip
     */
    contextConfig?: ConsumerState;
}

export type OpenProps = string | React.ReactElement | MessageQuickProps;

export interface MessageWrapperItem extends MessageQuickProps {
    timer?: ReturnType<typeof setTimeout>;
    key: string;
}
export interface MessageWrapperProps {
    prefix?: MessageQuickProps['prefix'];
    dataSource: Array<MessageWrapperItem>;
}
