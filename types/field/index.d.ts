/// <reference types="react" />

import * as React from 'react';

type FieldOption = {
    /**
     * 所有组件的change都会到达这里[setValue不会触发该函数]
     */
    onChange?: (name: string, value: any) => void;

    /**
     * 是否翻译init(name)中的name(getValues会把带.的字符串转换成对象)
     * @default false
     */
    parseName?: boolean;

    /**
     * 仅建议PureComponent的组件打开此强制刷新功能，会带来性能问题(500个组件为例：打开的时候render花费700ms, 关闭时候render花费400ms)
     * @default false
     */
    forceUpdate?: boolean;

    /**
     * field.validate的时候滚动到第一个出错的组件 (默认false, 1.0版本会改成true)
     * @default false
     */
    scrollToFirstError?: boolean;

    /**
     * 自动删除(remove) Unmout 元素, getValues不会出现冗余数据
     * @default false
     */
    autoUnmount?: boolean;

    /**
     * 强制重置数据(设置所有数据为undefined，业务组件需要自己支持value=undefined情况清空数据)(版本要求>next@0.15)  (1.0版本会改成true)
     * @default false
     */
    deepReset?: boolean;
};

type InitResult<T> = {
    id: string;
    value: T;
    onChange(value: T): void;
};

type InitResult2<T, T2> = {
    id: string;
    value: T;
    onChange(value: T, extra: T2): void;
};

type Rule = {
    /**
     * 不能为空 (不能和pattern同时使用)
     * @default true
     */
    required?: boolean;

    /**
     * 出错时候信息
     */
    message?: string;

    /**
     * 被校验数据类型(注意 type:'number' 表示数据类型为Number,而不是字符串形式的数字,字符串形式的数字请用pattern:/^[0-9]*$/) String/Array/url/email/...
     */
    type?:
        | 'string'
        | 'number'
        | 'boolean'
        | 'method'
        | 'regexp'
        | 'integer'
        | 'float'
        | 'array'
        | 'object'
        | 'enum'
        | 'date'
        | 'url'
        | 'hex'
        | 'email'
        | string;

    /**
     * 校验正则表达式
     */
    pattern?: RegExp;

    /**
     * 长度校验，如果max、mix混合配置，len的优先级最高
     */
    len?: number;

    /**
     * 字符最小长度
     */
    min?: number;

    /**
     * 字符最大长度
     */
    max?: number;

    /**
     * 是否进行空白字符校验（true进行校验)
     */
    whitespace: boolean;

    /**
     * 自定义校验,(校验成功的时候不要忘记执行 callback(),否则会校验不返回)
     */
    validator: (
        rule: Rule,
        value: string | number | object | boolean | Date | null,
        callback: (error?: string) => void
    ) => void;

    /**
     * 触发校验的事件名称
     */
    trigger: 'onChange' | 'onBlur' | string;
};

type InitOption<T = string> = {
    /**
     * 组件值的属性名称，如 Checkbox 的是 checked，Input是 value
     */
    valueName?: string;

    /**
     * 组件初始值(组件第一次render的时候才会读取，后面再修改此值无效),类似defaultValue
     */
    initValue?: T;

    /**
     * 触发数据变化的事件名称
     */
    trigger?: string | 'onChange' | 'onBlur';

    /**
     * 校验规则
     */
    rules?: Rule[] | Rule;

    /**
     * 组件自定义的事件可以写在这里，其他会透传(小包版本^0.3.0支持，大包^0.7.0支持)
     */
    props?: object;

    /**
     * 自定义从onChange事件中获取value的方式，一般不需要设置. 详细用法查看demo 自定义数据获取  参数顺序和组件是完全一致的
     */
    getValueFromEvent?: (eventArgs: object) => T;
};

export default class Field<T extends React.Component> {
    /**
     *
     * @param contextComp 传入调用class的this
     * @param options 一些事件配置
     */
    constructor(contextComp: T, options?: FieldOption);

    /**
     * 初始化每个组件
     */
    init<T>(name: string, option?: InitOption): InitResult<T>;

    /**
     * 初始化每个组件
     */
    init<T, T2>(name: string, option?: InitOption): InitResult2<T, T2>;

    /**
     *
     * 重置一组输入控件的值、清空校验, 第二个参数控制是否回到defaultValue
     * @param names 重置的字段名
     * @param backToDefault
     */
    reset(names?: String[], backToDefault?: InitOption): void;

    /**
     * 删除某一个或者一组控件的数据，删除后与之相关的validate/value都会被清空
     * @param name 字段名称
     */
    remove(name: string | string[]): void;

    /**
     * 校验
     * @param names
     * @param options
     * @param callback
     */
    validate<T>(callback?: (errors: object[], values: T) => void): void;

    /**
     * 校验
     * @param names
     * @param options
     * @param callback
     */
    validate<T>(
        names?: string[],
        options?: object,
        callback?: (errors: object[], values: T) => void
    ): void;

    /**
     * 校验并获取一组输入域的值与Error对象
     */
    /**
     * 	获取所有组件的key
     */
    getNames(): string[];

    /**
     * 	获取单个输入控件的值
     * @param 字段名
     */
    getValue<T = string>(name: string): T;

    /**
     * 获取一组输入控件的值，如不传入参数，则获取全部组件的值
     * @param names
     */
    getValues<T>(names?: string[]): T;

    /**
     * 设置单个输入控件的值 （会触发render，请遵循react时机使用)
     */
    setValue<T>(name: string, value: T): void;

    /**
     * 设置一组输入控件的值（会触发render，请遵循react时机使用)
     */
    setValues(obj: object): void;

    /**
     * 设置一组输入控件的值（会触发render，请遵循react时机使用)
     */
    setValues<T>(obj: T): void;

    /**
     * 判断校验状态
     */
    getState(name: String): 'error' | 'success' | 'validating';

    /**
     * 获取单个输入控件的 Error
     */
    getError(name: String): Error;

    /**
     * 获取一组输入控件的 Error
     * @param names 字段名
     */
    getErrors(names: string[]): Error;

    /**
     * 设置单个输入控件的 Error
     * @param name
     * @param errors
     */
    setError(name: string, errors?: null | string[]): void;

    /**
     * 设置一组输入控件的 Error
     */
    setErrors(obj: object): void;
}
