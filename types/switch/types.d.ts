import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';
export interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'onClick' | 'onKeyDown'> {
    /**
     * for form item
     */
    name?: string;
}
export type SwitchLocale = Locale['Switch'];
/**
 * @api
 */
export interface SwitchProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 开关是否打开默认值 (非受控)
     * @en Is default on（uncontrolled）
     * @defaultValue false
     */
    defaultChecked?: boolean;
    /**
     * 开关是否打开（受控）
     * @en Is on（controlled）
     */
    checked?: boolean;
    /**
     * 开关状态改变时事件
     * @en Callback when state is changed
     * @param checked - 是否打开 - Is on
     */
    onChange?: (
        checked: boolean,
        e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => void;
    /**
     * switch 的尺寸
     * @en size of switch
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'small';
    /**
     * 加载状态
     * @en Is loading
     * @defaultValue false
     */
    loading?: boolean;
    /**
     * 表示开关被禁用
     * @en Is disabled
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 是否只读，同 disabled
     * @skip
     */
    readOnly?: boolean;
    /**
     * 宽度根据内容自适应
     * @en Width adapts to content
     * @defaultValue false
     */
    autoWidth?: boolean;
    /**
     * 是否预览模式
     * @en Is preview mode
     * @defaultValue false
     */
    isPreview?: boolean;
    /**
     * 自定义预览态模式下渲染的内容
     * @en Custom render method when is preview mode.
     * @param checked - 是否打开 - Is on
     * @param props - 组件参数对象 - The props of switch
     * @returns 预览模式下的渲染内容 - The render content when preview
     */
    renderPreview?: (checked: boolean, props: SwitchProps) => React.ReactNode;
    /**
     * 打开时的内容
     * @en Content of 'on' state
     */
    checkedChildren?: React.ReactNode;
    /**
     * 关闭时的内容
     * @en Content of 'off' state
     */
    unCheckedChildren?: React.ReactNode;
    /**
     * 鼠标点击事件
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * 键盘按键事件
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * 多语言文案
     * @skip
     */
    locale?: SwitchLocale;
}
export type SwitchState = {
    checked: boolean;
};
