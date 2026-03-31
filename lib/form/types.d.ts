import { type CSSProperties, type ReactNode, type RefObject, type HTMLAttributes, type FormHTMLAttributes, type FormEventHandler, type ElementType } from 'react';
import type { CommonProps } from '../util';
import type { ButtonProps } from '../button';
import type { default as NextField, FieldOption, FieldValues, errorsGroup, Validator, FieldState, Rule } from '../field';
import type { Spacing } from '../responsive-grid/types';
import type { Locale } from '../locale/types';
import type { ColProps } from '../grid';
/**
 * @api Form.Item
 * 手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid
 * @en manual passing of wrapCol labelCol will use Grid auxiliary layout; labelAlign='top' will force disable Grid
 * @order 1
 */
export interface ItemProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * label 标签的文本
     * @skip
     */
    label?: ReactNode;
    /**
     * label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 \{span: 8, offset: 16\}，该项仅在垂直表单有效
     * @en label label layout, same as `<Col>` component, set span offset value, like \{span: 8, offset: 16\}, only works in vertical forms
     */
    labelCol?: ColProps;
    /**
     * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
     * @en customized layout for input controls, usage same as labelCol
     */
    wrapperCol?: ColProps;
    /**
     * 自定义提示信息，如不设置，则会根据校验规则自动生成。
     * @en customized prompt information, if not set, will be automatically generated according to the validation rules
     */
    help?: ReactNode;
    /**
     * 字段名，默认赋值给第一个子元素
     * @en field name, default assigned to the first child
     */
    name?: string;
    /**
     * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。位于错误信息后面
     * @en extra prompt information, similar to help, when both error information and prompt text are required, use this
     */
    extra?: ReactNode;
    /**
     * 校验状态，如不设置，则会根据校验规则自动生成
     * @en validate state, if not set, will be automatically generated according to the validation rules
     */
    validateState?: 'error' | 'success' | 'loading' | 'warning';
    /**
     * 校验状态，和 validateState 类似
     * @skip
     * @deprecated use validateState instead
     */
    validateStatus?: 'error' | 'success' | 'loading' | 'warning';
    /**
     * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标，目前只有 Input 支持
     * @en used with validateState property, whether to display the success/loading icon of the success/loading state, currently only the Input component supports this
     * @defaultValue false
     */
    hasFeedback?: boolean;
    /**
     * node 或者 function(values)
     * @en node or function(values)
     */
    children?: ReactNode | ((values: FieldValues) => void);
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     * @skip
     */
    size?: 'large' | 'small' | 'medium';
    /**
     * 单个 Item 中表单类组件宽度是否是 100%
     * @en whether the form component width of the single Item is 100%
     */
    fullWidth?: boolean;
    /**
     * 标签的位置，如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
     * @en label position, if not set labelCol and wrapperCol, the default is label on top
     */
    labelAlign?: 'top' | 'left' | 'inset';
    /**
     * 标签的左右对齐方式
     * @en label left right alignment
     */
    labelTextAlign?: 'left' | 'right';
    /**
     * 扩展 class
     * @skip
     */
    className?: string;
    /**
     * [表单校验] 不能为空
     * @en [Form Validation] Cannot be empty
     */
    required?: boolean;
    /**
     * required 的星号是否显示
     * @en whether to display the star of required
     */
    asterisk?: boolean;
    /**
     * required 自定义错误信息
     * @en required custom error information
     */
    requiredMessage?: string;
    /**
     * required 自定义触发方式，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     * @en required custom trigger mode, the default value is onChange, native events can also use onChange/onBlur/onFocus/...
     */
    requiredTrigger?: string | Array<string>;
    /**
     * [表单校验] 最小值
     * @en [Form Validation]  Minimum value
     */
    min?: number;
    /**
     * [表单校验] 最大值
     * @en [Form Validation]  Maximum value
     */
    max?: number;
    /**
     * min/max 自定义错误信息
     * @en min/max custom error information
     */
    minmaxMessage?: string;
    /**
     * min/max 自定义触发方式
     * @en min/max custom trigger mode
     */
    minmaxTrigger?: string | Array<string>;
    /**
     * [表单校验] 字符串最小长度 / 数组最小个数
     * @en [Form Validation]  String minimum length / Array minimum number
     */
    minLength?: number;
    /**
     * [表单校验] 字符串最大长度 / 数组最大个数
     * @en [Form Validation]  String maximum length / Array maximum number
     */
    maxLength?: number;
    /**
     * minLength/maxLength 自定义错误信息
     * @en minLength/maxLength custom error information
     */
    minmaxLengthMessage?: string;
    /**
     * minLength/maxLength 自定义触发方式
     * @en minLength/maxLength custom trigger mode
     */
    minmaxLengthTrigger?: string | Array<string>;
    /**
     * [表单校验] 字符串精确长度 / 数组精确个数
     * @en [Form Validation]  String exact length / Array exact number
     */
    length?: number;
    /**
     * length 自定义错误信息
     * @en length custom error information
     */
    lengthMessage?: string;
    /**
     * length 自定义触发方式
     * @en length custom trigger mode
     */
    lengthTrigger?: string | Array<string>;
    /**
     * 正则校验
     * @en regular expression
     */
    pattern?: unknown;
    /**
     * pattern 自定义错误信息
     * @en pattern custom error information
     */
    patternMessage?: string;
    /**
     * pattern 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     * @en pattern validate when triggered, the default value is onChange, native events can also use onChange/onBlur/onFocus/...
     */
    patternTrigger?: string | Array<string>;
    /**
     * [表单校验] 四种常用的 pattern
     * @en [Form Validation] four common patterns
     */
    format?: 'number' | 'email' | 'url' | 'tel';
    /**
     * format 自定义错误信息
     * @en format custom error information
     */
    formatMessage?: string;
    /**
     * format 校验何时触发，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     * @en format validate when triggered, the default value is onChange, native events can also use onChange/onBlur/onFocus/...
     */
    formatTrigger?: string | Array<string>;
    /**
     * [表单校验] 自定义校验函数
     * @en custom validation function
     */
    validator?: Validator;
    /**
     * validator 自定义触发方式，默认值 onChange, 原生事件均可使用 onChange/onBlur/onFocus/...
     * @en validator custom trigger mode, the default value is onChange, native events can also use onChange/onBlur/onFocus/...
     */
    validatorTrigger?: string | Array<string>;
    /**
     * 是否修改数据时自动触发校验
     * @en whether to automatically trigger validation when data is modified
     */
    autoValidate?: boolean;
    /**
     * 预设屏幕宽度
     * @en preset screen width
     */
    device?: 'desktop' | 'phone' | 'tablet';
    /**
     * 在响应式布局模式下，表单项占多少列
     * @en in response layout mode, how many columns does the form item occupy
     */
    colSpan?: number;
    /**
     * 在响应式布局下，且 label 在左边时，label 的宽度是多少
     * @en in response layout mode, and the label is on the left, how wide is the label
     * @defaultValue 100
     */
    labelWidth?: number | string;
    /**
     * 是否开启预览态
     * @en whether to open preview
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en preview mode rendering content
     * @param value - 根据包裹的组件的 value 类型而决定 - Based on the value type of the wrapped component
     */
    renderPreview?: (values: unknown) => unknown;
    /**
     * 替代校验信息的 name 字段，useLabelForErrorMessage 开启的情况下比 label 优先级高
     * @en replacement of the name field of the check information, useLabelForErrorMessage is enabled when the label priority is higher
     */
    errorMessageName?: string;
    /**
     * 是否使用 label 替换校验信息的 name 字段
     * @en whether to use label to replace the name field of the check information
     */
    useLabelForErrorMessage?: boolean;
    /**
     * 倾向使用 item 的 margin 空间来展示 help
     * @en prefer margin space to display help
     * @defaultValue false
     * @version 1.26.37
     */
    preferMarginToDisplayHelp?: boolean;
    /**
     * 表示是否显示 label 后面的冒号
     * @en indicates whether to display the colon after the label
     */
    colon?: boolean;
    /**
     * 是否禁用表单
     * @en is the form disabled
     */
    disabled?: boolean;
    /**
     * 子元素的 value 名称
     * @en child element value name
     */
    valueName?: string;
    /**
     * 是否响应式
     * @skip
     */
    responsive?: boolean;
    /**
     * 触发方式
     * @skip
     */
    trigger?: string;
    /**
     * 表单类型
     */
    type?: string;
}
export interface ItemContext {
    _formField: NextField;
    _formSize: 'large' | 'small' | 'medium';
    _formDisabled: boolean;
    _formPreview: boolean;
    _formFullWidth: boolean;
    _formLabelForErrorMessage: boolean;
    _formMarginToDisplayHelp: boolean;
}
/**
 * @api Form.Submit
 * 继承 Button API
 * @en Inherit Button API
 */
export interface SubmitProps extends ButtonProps {
    /**
     * 点击提交后触发
     * @en Triggered after clicking submit
     * @param value - 数据 - data
     * @param errors - 错误数据 - errors data
     * @param field - 实例 - instance
     * @defaultValue func.noop
     */
    onClick?: (value?: unknown, errors?: unknown, field?: NextField) => void;
    /**
     * 是否校验/需要校验的 name 数组
     * @en Is the name array of the check/need to check
     */
    validate?: boolean | Array<string>;
    /**
     * 自定义 field (在 Form 内不需要设置)
     * @en Custom field (in Forms, you do not need to set)
     */
    field?: NextField;
}
/**
 * @api Form.Reset
 * 继承 Button API
 * @en Inherit Button API
 */
export interface ResetProps extends ButtonProps {
    /**
     * 自定义重置的字段
     * @en Custom reset field
     */
    names?: Array<string>;
    /**
     * 点击提交后触发
     * @en Triggered after clicking submit
     * @defaultValue func.noop
     */
    onClick?: () => void;
    /**
     * 返回默认值
     * @en Return default value
     */
    toDefault?: boolean;
    /**
     * 自定义 field (在 Form 内不需要设置)
     * @en Custom field (in Forms, you do not need to set)
     */
    field?: NextField;
}
/**
 * @api Form.Error
 * 自定义错误展示
 * @en Custom error display
 */
export interface ErrorProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 表单名
     * @en form name
     */
    name?: string | Array<string>;
    /**
     * 自定义 field (在 Form 内不需要设置)
     * @en Custom field (in Forms, you do not need to set)
     */
    field?: NextField;
    /**
     * 自定义错误渲染，可以是 node 或者 function(errors, state)
     * @en Custom error rendering, can be a node or function(errors, state)
     */
    children?: ReactNode | ((errors: errorsGroup, state?: FieldState) => ReactNode);
    /**
     * 倾向使用 item 的 margin 空间来展示 help
     * @skip
     * @defaultValue false
     */
    preferMarginToDisplayHelp?: boolean;
}
type HTMLAttributesWeak = Omit<FormHTMLAttributes<HTMLElement>, 'onChange'>;
/**
 * @api Form
 * @order 0
 */
export interface FormProps extends CommonProps, HTMLAttributesWeak {
    /**
     * 样式前缀
     * @skip
     */
    prefix?: string;
    /**
     * 内联表单
     * @en inline
     */
    inline?: boolean;
    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
     * @en When an Item within a Form has a specific size configuration, that customization overrides the general size setting of the Form. Additionally, if a component is integrated with an Item, the component's individual size property does not apply
     * @defaultValue medium
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * 单个 Item 中表单类组件宽度是否是 100%
     * @en Is the width of form-like components within a single Item set to 100%
     */
    fullWidth?: boolean;
    /**
     * 标签的位置，如果不设置 labelCol 和 wrapperCol 那么默认是标签在上
     * @en The position of the label, if labelCol and wrapperCol are not set, defaults to having the label positioned above.
     * @defaultValue left
     */
    labelAlign?: 'top' | 'left' | 'inset';
    /**
     * 标签的左右对齐方式
     * @en The alignment of the label on the left and right
     */
    labelTextAlign?: 'left' | 'right';
    /**
     * field 实例，传 false 会禁用 field
     * @en field instance, pass false to disable
     */
    field?: false | NextField | null;
    /**
     * 保存 Form 自动生成的 field 对象
     * @en Save the Form automatically generated field object
     * @defaultValue func.noop
     */
    saveField?: (field?: NextField | null) => void;
    /**
     * 控制第一级 Item 的 labelCol
     * @en Control the labelCol of the first level Item
     */
    labelCol?: ColProps;
    /**
     * 控制第一级 Item 的 wrapperCol
     * @en Control the wrapperCol of the first level Item
     */
    wrapperCol?: ColProps;
    /**
     * form 内有 `htmlType="submit"` 的元素的时候会触发
     * @en Triggered when there is an element with `htmlType="submit"` in the form
     * @defaultValue function preventDefault(e) \{ e.preventDefault(); \}
     */
    onSubmit?: FormEventHandler<HTMLFormElement>;
    /**
     * 子元素
     * @en Child elements
     */
    children?: ReactNode;
    /**
     * 表单数值
     * @en Form value
     */
    value?: FieldValues;
    /**
     * 表单变化回调
     * @en Form change callback
     * @defaultValue func.noop
     * @param values - 表单数值 - form values
     * @param item - 表单项，item.name：发生变化的组件的名称，item.value：变化的组件的新数据，item.field：与变化的组件关联的 field 实例 - Form item, item.name: The name of the component that changed, item.value: The new data of the changed component, item.field: The field instance associated with the changed component
     */
    onChange?: (values: FieldValues | undefined, item: {
        name: string;
        value: string;
        field: NextField | null;
    }) => void;
    /**
     * 设置标签类型
     * @en Set the tag type
     * @defaultValue 'form'
     */
    component?: ElementType;
    /**
     * field 配置项，在 Form 初始化 field 实例时会用到
     * @en Field configuration, will be used when initializing the field instance in Form
     */
    fieldOptions?: FieldOption;
    /**
     * 是否开启 rtl
     * @skip
     */
    rtl?: boolean;
    /**
     * 预设屏幕宽度
     * @en Preset screen width
     * @defaultValue 'desktop'
     */
    device?: 'desktop' | 'phone' | 'tablet';
    /**
     * 是否开启内置的响应式布局（使用 ResponsiveGrid）
     * @en Whether to enable the built-in responsive layout (use ResponsiveGrid)
     * @version 1.19
     */
    responsive?: boolean;
    /**
     * 在 responsive 模式下，透传给 ResponsiveGrid 的，表示 每个 cell 之间的间距， [bottom&top, right&left]
     * @skip
     */
    gap?: Spacing;
    /**
     * 是否开启预览态
     * @en Whether to enable preview
     * @version 1.19
     */
    isPreview?: boolean;
    /**
     * 是否使用 label 替换校验信息的 name 字段
     * @en Whether to use the label to replace the name of the error message
     * @version 1.20
     */
    useLabelForErrorMessage?: boolean;
    /**
     * 倾向使用 item 的 margin 空间来展示 help
     * @en Prefer to display help with margin
     * @defaultValue false
     * @version 1.26.37
     */
    preferMarginToDisplayHelp?: boolean;
    /**
     * 表示是否显示 label 后面的冒号
     * @en Indicates whether to display a colon after the label
     * @defaultValue false
     * @version 1.22
     */
    colon?: boolean;
    /**
     * 是否禁用
     * @en Whether to disable
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 扩展 class
     * @skip
     */
    className?: string;
    /**
     * 自定义内联样式
     * @en Custom inline style
     * @skip
     */
    style?: CSSProperties;
    /**
     * 表单错误
     * @skip
     */
    error?: Record<string, unknown>;
    /**
     * 表单方向
     * @skip
     * @deprecated Use `inline` instead
     */
    direction?: string;
    /**
     * 多语言文案
     * @en Language text
     * @skip
     */
    locale?: Locale['Form'];
}
export interface ChildExtraProperties {
    type: {
        _typeMark: 'form_item' | 'form_error';
        displayName?: string;
    };
    ref?: RefObject<unknown>;
}
export type RemoveUndefined<T extends Record<string, unknown>> = {
    [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};
export interface FormRule extends Rule {
    aliasName?: string;
}
export {};
