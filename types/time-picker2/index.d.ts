import React from 'react';
import type { TimePickerProps, ValueType, RangePickerProps, PresetType } from './types';
declare const TimePickerWithSub: {
    new (props: TimePickerProps): {
        prefixCls: string;
        dateInput: {
            prefixCls: string;
            input?:
                | (import('../config-provider/types').ConfiguredComponent<
                      import('../input').InputProps &
                          import('../config-provider/types').ComponentCommonProps,
                      import('../input/input').default<import('../input').InputProps>
                  > &
                      Pick<
                          import('../input/input').default<import('../input').InputProps>,
                          'focus' | 'getInputNode'
                      >)
                | (import('../config-provider/types').ConfiguredComponent<
                      import('../input').InputProps &
                          import('../config-provider/types').ComponentCommonProps,
                      import('../input/input').default<import('../input').InputProps>
                  > &
                      Pick<
                          import('../input/input').default<import('../input').InputProps>,
                          'focus' | 'getInputNode'
                      >)[]
                | undefined;
            setInputRef: (
                el: import('../config-provider/types').ConfiguredComponent<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps,
                    import('../input/input').default<import('../input').InputProps>
                > &
                    Pick<
                        import('../input/input').default<import('../input').InputProps>,
                        'focus' | 'getInputNode'
                    >,
                index?: number | undefined
            ) => void;
            setValue: (
                v: string | number | null
            ) => string | number | (string | number | null)[] | null;
            formatter: (v: import('dayjs').Dayjs) => string | import('dayjs').Dayjs;
            onInput:
                | ((
                      value: string | number,
                      e:
                          | React.CompositionEvent<HTMLInputElement>
                          | React.ChangeEvent<HTMLInputElement>
                          | React.KeyboardEvent<HTMLInputElement>,
                      reason?: string | undefined
                  ) => void)
                | undefined;
            handleTypeChange: (inputType: number) => void;
            getPlaceholder: () => string | string[] | undefined;
            getHtmlSize: () => string;
            render(): React.JSX.Element;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('./types').DateInputProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').DateInputProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').DateInputProps>,
                prevState: Readonly<{}>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').DateInputProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').DateInputProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        };
        clearTimeoutId: number;
        getInitValue: () => ValueType;
        getInitRangeInputState: () => {
            justBeginInput: boolean;
            inputType: import('./types').InputType;
        };
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
        onVisibleChange: (visible: boolean, type?: string | undefined) => void;
        onClick: () => void;
        handleVisibleChange: (visible: boolean, targetType: string) => void;
        handleInputFocus: (inputType: number) => void;
        onOk: () => void;
        onInputTypeChange: (idx: import('./types').InputType) => void;
        checkValue: (
            value:
                | string
                | import('dayjs').Dayjs
                | (string | import('dayjs').Dayjs | null)[]
                | null
                | undefined,
            strictly?: boolean | undefined
        ) => ValueType;
        getOutputArgs: (value: ValueType) => (string | string[] | ValueType)[];
        onChange: (v: ValueType) => void;
        shouldSwitchInput: (value: (import('dayjs').Dayjs | null)[]) => boolean;
        handleChange: (v: string | string[] | ValueType, eventType?: string | undefined) => void;
        isEnabled: (idx?: number | undefined) => boolean;
        handleClear: () => void;
        handleInput: (v: string, eventType?: string | undefined) => void;
        renderPreview(
            others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>
        ): React.JSX.Element;
        render(): React.JSX.Element;
        context: any;
        setState<K_1 extends keyof import('./types').TimePickerState>(
            state:
                | import('./types').TimePickerState
                | ((
                      prevState: Readonly<import('./types').TimePickerState>,
                      props: Readonly<TimePickerProps>
                  ) =>
                      | import('./types').TimePickerState
                      | Pick<import('./types').TimePickerState, K_1>
                      | null)
                | Pick<import('./types').TimePickerState, K_1>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<TimePickerProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<import('./types').TimePickerState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<TimePickerProps>,
            prevState: Readonly<import('./types').TimePickerState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<TimePickerProps>,
            prevState: Readonly<import('./types').TimePickerState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TimePickerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<TimePickerProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<TimePickerProps>,
            nextState: Readonly<import('./types').TimePickerState>,
            nextContext: any
        ): void;
    };
    displayName: string;
    propTypes: {
        prefix: import('prop-types').Requireable<string>;
        rtl: import('prop-types').Requireable<boolean>;
        label: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
        state: import('prop-types').Requireable<string>;
        placeholder: import('prop-types').Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
        value: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        defaultValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => void;
        size: import('prop-types').Requireable<string>;
        hasClear: import('prop-types').Requireable<boolean>;
        format: import('prop-types').Requireable<string>;
        hourStep: import('prop-types').Requireable<number>;
        minuteStep: import('prop-types').Requireable<number>;
        secondStep: import('prop-types').Requireable<number>;
        disabledHours: import('prop-types').Requireable<(...args: any[]) => any>;
        disabledMinutes: import('prop-types').Requireable<(...args: any[]) => any>;
        disabledSeconds: import('prop-types').Requireable<(...args: any[]) => any>;
        renderTimeMenuItems: import('prop-types').Requireable<(...args: any[]) => any>;
        visible: import('prop-types').Requireable<boolean>;
        defaultVisible: import('prop-types').Requireable<boolean>;
        popupContainer: import('prop-types').Requireable<any>;
        popupAlign: import('prop-types').Requireable<string>;
        popupTriggerType: import('prop-types').Requireable<string>;
        onVisibleChange: import('prop-types').Requireable<(...args: any[]) => any>;
        popupStyle: import('prop-types').Requireable<object>;
        popupClassName: import('prop-types').Requireable<string>;
        popupProps: import('prop-types').Requireable<object>;
        followTrigger: import('prop-types').Requireable<boolean>;
        disabled: import('prop-types').Requireable<boolean>;
        hasBorder: import('prop-types').Requireable<boolean>;
        isPreview: import('prop-types').Requireable<boolean>;
        renderPreview: import('prop-types').Requireable<(...args: any[]) => any>;
        onChange: import('prop-types').Requireable<(...args: any[]) => any>;
        className: import('prop-types').Requireable<string>;
        name: import('prop-types').Requireable<string>;
        preset: import('prop-types').Requireable<
            NonNullable<
                | import('prop-types').InferProps<{
                      type?:
                          | React.Validator<'normal' | 'primary' | 'secondary' | null | undefined>
                          | undefined;
                      shape?:
                          | React.Validator<'text' | 'warning' | 'ghost' | null | undefined>
                          | undefined;
                      size?:
                          | React.Validator<import('../button/types').ButtonSize | null | undefined>
                          | undefined;
                      icons?:
                          | React.Validator<
                                | {
                                      loading?: React.ReactNode;
                                  }
                                | null
                                | undefined
                            >
                          | undefined;
                      iconSize?:
                          | React.Validator<
                                | number
                                | 'small'
                                | 'inherit'
                                | 'medium'
                                | 'large'
                                | 'xxs'
                                | 'xs'
                                | 'xl'
                                | 'xxl'
                                | 'xxxl'
                                | null
                                | undefined
                            >
                          | undefined;
                      htmlType?:
                          | React.Validator<'button' | 'reset' | 'submit' | null | undefined>
                          | undefined;
                      component?:
                          | React.Validator<
                                'a' | 'button' | React.ComponentType<unknown> | null | undefined
                            >
                          | undefined;
                      loading?: React.Validator<boolean | null | undefined> | undefined;
                      ghost?:
                          | React.Validator<boolean | 'dark' | 'light' | null | undefined>
                          | undefined;
                      text?: React.Validator<boolean | null | undefined> | undefined;
                      warning?: React.Validator<boolean | null | undefined> | undefined;
                      disabled?: React.Validator<boolean | null | undefined> | undefined;
                      onClick?:
                          | React.Validator<React.MouseEventHandler<Element> | null | undefined>
                          | undefined;
                      href?: React.Validator<string | null | undefined> | undefined;
                      target?: React.Validator<string | null | undefined> | undefined;
                      to?: React.Validator<string | null | undefined> | undefined;
                      color?: React.Validator<string | null | undefined> | undefined;
                      content?: React.Validator<string | null | undefined> | undefined;
                      translate?: React.Validator<'no' | 'yes' | null | undefined> | undefined;
                      form?: React.Validator<string | null | undefined> | undefined;
                      slot?: React.Validator<string | null | undefined> | undefined;
                      style?: React.Validator<React.CSSProperties | null | undefined> | undefined;
                      title?: React.Validator<string | null | undefined> | undefined;
                      hidden?: React.Validator<boolean | null | undefined> | undefined;
                      name?: React.Validator<string | null | undefined> | undefined;
                      dir?: React.Validator<string | null | undefined> | undefined;
                      placeholder?: React.Validator<string | null | undefined> | undefined;
                      prefix?: React.Validator<string | null | undefined> | undefined;
                      children?: React.Validator<React.ReactNode> | undefined;
                      className?: React.Validator<string | null | undefined> | undefined;
                      id?: React.Validator<string | null | undefined> | undefined;
                      defaultChecked?: React.Validator<boolean | null | undefined> | undefined;
                      defaultValue?:
                          | React.Validator<string | number | readonly string[] | null | undefined>
                          | undefined;
                      suppressContentEditableWarning?:
                          | React.Validator<boolean | null | undefined>
                          | undefined;
                      suppressHydrationWarning?:
                          | React.Validator<boolean | null | undefined>
                          | undefined;
                      accessKey?: React.Validator<string | null | undefined> | undefined;
                      autoFocus?: React.Validator<boolean | null | undefined> | undefined;
                      contentEditable?:
                          | React.Validator<
                                'inherit' | (boolean | 'false' | 'true') | null | undefined
                            >
                          | undefined;
                      contextMenu?: React.Validator<string | null | undefined> | undefined;
                      draggable?:
                          | React.Validator<(boolean | 'false' | 'true') | null | undefined>
                          | undefined;
                      lang?: React.Validator<string | null | undefined> | undefined;
                      nonce?: React.Validator<string | null | undefined> | undefined;
                      spellCheck?:
                          | React.Validator<(boolean | 'false' | 'true') | null | undefined>
                          | undefined;
                      tabIndex?: React.Validator<number | null | undefined> | undefined;
                      radioGroup?: React.Validator<string | null | undefined> | undefined;
                      role?: React.Validator<React.AriaRole | null | undefined> | undefined;
                      about?: React.Validator<string | null | undefined> | undefined;
                      datatype?: React.Validator<string | null | undefined> | undefined;
                      inlist?: React.Validator<any> | undefined;
                      property?: React.Validator<string | null | undefined> | undefined;
                      rel?: React.Validator<string | null | undefined> | undefined;
                      resource?: React.Validator<string | null | undefined> | undefined;
                      rev?: React.Validator<string | null | undefined> | undefined;
                      typeof?: React.Validator<string | null | undefined> | undefined;
                      vocab?: React.Validator<string | null | undefined> | undefined;
                      autoCapitalize?: React.Validator<string | null | undefined> | undefined;
                      autoCorrect?: React.Validator<string | null | undefined> | undefined;
                      autoSave?: React.Validator<string | null | undefined> | undefined;
                      itemProp?: React.Validator<string | null | undefined> | undefined;
                      itemScope?: React.Validator<boolean | null | undefined> | undefined;
                      itemType?: React.Validator<string | null | undefined> | undefined;
                      itemID?: React.Validator<string | null | undefined> | undefined;
                      itemRef?: React.Validator<string | null | undefined> | undefined;
                      results?: React.Validator<number | null | undefined> | undefined;
                      security?: React.Validator<string | null | undefined> | undefined;
                      unselectable?: React.Validator<'on' | 'off' | null | undefined> | undefined;
                      inputMode?:
                          | React.Validator<
                                | 'search'
                                | 'none'
                                | 'text'
                                | 'email'
                                | 'url'
                                | 'tel'
                                | 'numeric'
                                | 'decimal'
                                | null
                                | undefined
                            >
                          | undefined;
                      is?: React.Validator<string | null | undefined> | undefined;
                      'aria-activedescendant'?:
                          | React.Validator<string | null | undefined>
                          | undefined;
                      'aria-atomic'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-autocomplete'?:
                          | React.Validator<'none' | 'both' | 'inline' | 'list' | null | undefined>
                          | undefined;
                      'aria-busy'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-checked'?:
                          | React.Validator<boolean | 'mixed' | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-colcount'?: React.Validator<number | null | undefined> | undefined;
                      'aria-colindex'?: React.Validator<number | null | undefined> | undefined;
                      'aria-colspan'?: React.Validator<number | null | undefined> | undefined;
                      'aria-controls'?: React.Validator<string | null | undefined> | undefined;
                      'aria-current'?:
                          | React.Validator<
                                | boolean
                                | 'page'
                                | 'time'
                                | 'false'
                                | 'true'
                                | 'location'
                                | 'date'
                                | 'step'
                                | null
                                | undefined
                            >
                          | undefined;
                      'aria-describedby'?: React.Validator<string | null | undefined> | undefined;
                      'aria-details'?: React.Validator<string | null | undefined> | undefined;
                      'aria-disabled'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-dropeffect'?:
                          | React.Validator<
                                | 'link'
                                | 'none'
                                | 'copy'
                                | 'move'
                                | 'execute'
                                | 'popup'
                                | null
                                | undefined
                            >
                          | undefined;
                      'aria-errormessage'?: React.Validator<string | null | undefined> | undefined;
                      'aria-expanded'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-flowto'?: React.Validator<string | null | undefined> | undefined;
                      'aria-grabbed'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-haspopup'?:
                          | React.Validator<
                                | boolean
                                | 'grid'
                                | 'dialog'
                                | 'menu'
                                | 'listbox'
                                | 'false'
                                | 'true'
                                | 'tree'
                                | null
                                | undefined
                            >
                          | undefined;
                      'aria-hidden'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-invalid'?:
                          | React.Validator<
                                | boolean
                                | 'false'
                                | 'true'
                                | 'grammar'
                                | 'spelling'
                                | null
                                | undefined
                            >
                          | undefined;
                      'aria-keyshortcuts'?: React.Validator<string | null | undefined> | undefined;
                      'aria-label'?: React.Validator<string | null | undefined> | undefined;
                      'aria-labelledby'?: React.Validator<string | null | undefined> | undefined;
                      'aria-level'?: React.Validator<number | null | undefined> | undefined;
                      'aria-live'?:
                          | React.Validator<'off' | 'assertive' | 'polite' | null | undefined>
                          | undefined;
                      'aria-modal'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-multiline'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-multiselectable'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-orientation'?:
                          | React.Validator<'horizontal' | 'vertical' | null | undefined>
                          | undefined;
                      'aria-owns'?: React.Validator<string | null | undefined> | undefined;
                      'aria-placeholder'?: React.Validator<string | null | undefined> | undefined;
                      'aria-posinset'?: React.Validator<number | null | undefined> | undefined;
                      'aria-pressed'?:
                          | React.Validator<boolean | 'mixed' | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-readonly'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-relevant'?:
                          | React.Validator<
                                | 'all'
                                | 'text'
                                | 'additions'
                                | 'additions removals'
                                | 'additions text'
                                | 'removals'
                                | 'removals additions'
                                | 'removals text'
                                | 'text additions'
                                | 'text removals'
                                | null
                                | undefined
                            >
                          | undefined;
                      'aria-required'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-roledescription'?:
                          | React.Validator<string | null | undefined>
                          | undefined;
                      'aria-rowcount'?: React.Validator<number | null | undefined> | undefined;
                      'aria-rowindex'?: React.Validator<number | null | undefined> | undefined;
                      'aria-rowspan'?: React.Validator<number | null | undefined> | undefined;
                      'aria-selected'?:
                          | React.Validator<boolean | 'false' | 'true' | null | undefined>
                          | undefined;
                      'aria-setsize'?: React.Validator<number | null | undefined> | undefined;
                      'aria-sort'?:
                          | React.Validator<
                                'none' | 'ascending' | 'descending' | 'other' | null | undefined
                            >
                          | undefined;
                      'aria-valuemax'?: React.Validator<number | null | undefined> | undefined;
                      'aria-valuemin'?: React.Validator<number | null | undefined> | undefined;
                      'aria-valuenow'?: React.Validator<number | null | undefined> | undefined;
                      'aria-valuetext'?: React.Validator<string | null | undefined> | undefined;
                      dangerouslySetInnerHTML?:
                          | React.Validator<
                                | {
                                      __html: string | TrustedHTML;
                                  }
                                | null
                                | undefined
                            >
                          | undefined;
                      onCopy?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCopyCapture?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCut?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCutCapture?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPaste?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPasteCapture?:
                          | React.Validator<
                                React.ClipboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionEnd?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionEndCapture?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionStart?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionStartCapture?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionUpdate?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onCompositionUpdateCapture?:
                          | React.Validator<
                                React.CompositionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onFocus?:
                          | React.Validator<React.FocusEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onFocusCapture?:
                          | React.Validator<React.FocusEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onBlur?:
                          | React.Validator<React.FocusEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onBlurCapture?:
                          | React.Validator<React.FocusEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onChange?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onChangeCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onBeforeInput?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onBeforeInputCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onInput?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onInputCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onReset?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onResetCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSubmit?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSubmitCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onInvalid?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onInvalidCapture?:
                          | React.Validator<React.FormEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoad?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onError?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onErrorCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onKeyDown?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onKeyDownCapture?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onKeyPress?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onKeyPressCapture?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onKeyUp?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onKeyUpCapture?:
                          | React.Validator<
                                React.KeyboardEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAbort?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onAbortCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onCanPlay?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onCanPlayCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onCanPlayThrough?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onCanPlayThroughCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDurationChange?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDurationChangeCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEmptied?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEmptiedCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEncrypted?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEncryptedCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEnded?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onEndedCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadedData?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadedDataCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadedMetadata?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadedMetadataCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadStart?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onLoadStartCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPause?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPauseCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPlay?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPlayCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPlaying?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPlayingCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onProgress?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onProgressCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onRateChange?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onRateChangeCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSeeked?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSeekedCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSeeking?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSeekingCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onStalled?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onStalledCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSuspend?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSuspendCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTimeUpdate?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTimeUpdateCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onVolumeChange?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onVolumeChangeCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onWaiting?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onWaitingCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onAuxClick?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onAuxClickCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onClickCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onContextMenu?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onContextMenuCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDoubleClick?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDoubleClickCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDrag?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragEnd?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragEndCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragEnter?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragEnterCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragExit?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragExitCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragLeave?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragLeaveCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragOver?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragOverCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragStart?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDragStartCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDrop?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onDropCapture?:
                          | React.Validator<React.DragEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseDown?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseDownCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseEnter?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseLeave?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseMove?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseMoveCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseOut?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseOutCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseOver?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseOverCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseUp?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onMouseUpCapture?:
                          | React.Validator<React.MouseEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSelect?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onSelectCapture?:
                          | React.Validator<React.ReactEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchCancel?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchCancelCapture?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchEnd?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchEndCapture?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchMove?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchMoveCapture?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchStart?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onTouchStartCapture?:
                          | React.Validator<React.TouchEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onPointerDown?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerDownCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerMove?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerMoveCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerUp?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerUpCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerCancel?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerCancelCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerEnter?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerEnterCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerLeave?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerLeaveCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerOver?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerOverCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerOut?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onPointerOutCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onGotPointerCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onGotPointerCaptureCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onLostPointerCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onLostPointerCaptureCapture?:
                          | React.Validator<
                                React.PointerEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onScroll?:
                          | React.Validator<React.UIEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onScrollCapture?:
                          | React.Validator<React.UIEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onWheel?:
                          | React.Validator<React.WheelEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onWheelCapture?:
                          | React.Validator<React.WheelEventHandler<HTMLElement> | null | undefined>
                          | undefined;
                      onAnimationStart?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAnimationStartCapture?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAnimationEnd?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAnimationEndCapture?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAnimationIteration?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onAnimationIterationCapture?:
                          | React.Validator<
                                React.AnimationEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onTransitionEnd?:
                          | React.Validator<
                                React.TransitionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      onTransitionEndCapture?:
                          | React.Validator<
                                React.TransitionEventHandler<HTMLElement> | null | undefined
                            >
                          | undefined;
                      formAction?: React.Validator<string | null | undefined> | undefined;
                      formEncType?: React.Validator<string | null | undefined> | undefined;
                      formMethod?: React.Validator<string | null | undefined> | undefined;
                      formNoValidate?: React.Validator<boolean | null | undefined> | undefined;
                      formTarget?: React.Validator<string | null | undefined> | undefined;
                      value:
                          | React.Validator<string | number | readonly string[] | null | undefined>
                          | import('prop-types').Requireable<{}>;
                      locale?:
                          | React.Validator<
                                import('../locale/types').ComponentLocaleObject | null | undefined
                            >
                          | undefined;
                      pure?: React.Validator<boolean | null | undefined> | undefined;
                      device?:
                          | React.Validator<
                                import('../config-provider/types').DeviceType | null | undefined
                            >
                          | undefined;
                      rtl?: React.Validator<boolean | null | undefined> | undefined;
                      errorBoundary?:
                          | React.Validator<
                                | import('../config-provider/types').ErrorBoundaryType
                                | null
                                | undefined
                            >
                          | undefined;
                      label: import('prop-types').Requireable<string>;
                  }>
                | (
                      | import('prop-types').InferProps<{
                            type?:
                                | React.Validator<
                                      'normal' | 'primary' | 'secondary' | null | undefined
                                  >
                                | undefined;
                            shape?:
                                | React.Validator<'text' | 'warning' | 'ghost' | null | undefined>
                                | undefined;
                            size?:
                                | React.Validator<
                                      import('../button/types').ButtonSize | null | undefined
                                  >
                                | undefined;
                            icons?:
                                | React.Validator<
                                      | {
                                            loading?: React.ReactNode;
                                        }
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            iconSize?:
                                | React.Validator<
                                      | number
                                      | 'small'
                                      | 'inherit'
                                      | 'medium'
                                      | 'large'
                                      | 'xxs'
                                      | 'xs'
                                      | 'xl'
                                      | 'xxl'
                                      | 'xxxl'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            htmlType?:
                                | React.Validator<'button' | 'reset' | 'submit' | null | undefined>
                                | undefined;
                            component?:
                                | React.Validator<
                                      | 'a'
                                      | 'button'
                                      | React.ComponentType<unknown>
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            loading?: React.Validator<boolean | null | undefined> | undefined;
                            ghost?:
                                | React.Validator<boolean | 'dark' | 'light' | null | undefined>
                                | undefined;
                            text?: React.Validator<boolean | null | undefined> | undefined;
                            warning?: React.Validator<boolean | null | undefined> | undefined;
                            disabled?: React.Validator<boolean | null | undefined> | undefined;
                            onClick?:
                                | React.Validator<
                                      React.MouseEventHandler<Element> | null | undefined
                                  >
                                | undefined;
                            href?: React.Validator<string | null | undefined> | undefined;
                            target?: React.Validator<string | null | undefined> | undefined;
                            to?: React.Validator<string | null | undefined> | undefined;
                            color?: React.Validator<string | null | undefined> | undefined;
                            content?: React.Validator<string | null | undefined> | undefined;
                            translate?:
                                | React.Validator<'no' | 'yes' | null | undefined>
                                | undefined;
                            form?: React.Validator<string | null | undefined> | undefined;
                            slot?: React.Validator<string | null | undefined> | undefined;
                            style?:
                                | React.Validator<React.CSSProperties | null | undefined>
                                | undefined;
                            title?: React.Validator<string | null | undefined> | undefined;
                            hidden?: React.Validator<boolean | null | undefined> | undefined;
                            name?: React.Validator<string | null | undefined> | undefined;
                            dir?: React.Validator<string | null | undefined> | undefined;
                            placeholder?: React.Validator<string | null | undefined> | undefined;
                            prefix?: React.Validator<string | null | undefined> | undefined;
                            children?: React.Validator<React.ReactNode> | undefined;
                            className?: React.Validator<string | null | undefined> | undefined;
                            id?: React.Validator<string | null | undefined> | undefined;
                            defaultChecked?:
                                | React.Validator<boolean | null | undefined>
                                | undefined;
                            defaultValue?:
                                | React.Validator<
                                      string | number | readonly string[] | null | undefined
                                  >
                                | undefined;
                            suppressContentEditableWarning?:
                                | React.Validator<boolean | null | undefined>
                                | undefined;
                            suppressHydrationWarning?:
                                | React.Validator<boolean | null | undefined>
                                | undefined;
                            accessKey?: React.Validator<string | null | undefined> | undefined;
                            autoFocus?: React.Validator<boolean | null | undefined> | undefined;
                            contentEditable?:
                                | React.Validator<
                                      'inherit' | (boolean | 'false' | 'true') | null | undefined
                                  >
                                | undefined;
                            contextMenu?: React.Validator<string | null | undefined> | undefined;
                            draggable?:
                                | React.Validator<(boolean | 'false' | 'true') | null | undefined>
                                | undefined;
                            lang?: React.Validator<string | null | undefined> | undefined;
                            nonce?: React.Validator<string | null | undefined> | undefined;
                            spellCheck?:
                                | React.Validator<(boolean | 'false' | 'true') | null | undefined>
                                | undefined;
                            tabIndex?: React.Validator<number | null | undefined> | undefined;
                            radioGroup?: React.Validator<string | null | undefined> | undefined;
                            role?: React.Validator<React.AriaRole | null | undefined> | undefined;
                            about?: React.Validator<string | null | undefined> | undefined;
                            datatype?: React.Validator<string | null | undefined> | undefined;
                            inlist?: React.Validator<any> | undefined;
                            property?: React.Validator<string | null | undefined> | undefined;
                            rel?: React.Validator<string | null | undefined> | undefined;
                            resource?: React.Validator<string | null | undefined> | undefined;
                            rev?: React.Validator<string | null | undefined> | undefined;
                            typeof?: React.Validator<string | null | undefined> | undefined;
                            vocab?: React.Validator<string | null | undefined> | undefined;
                            autoCapitalize?: React.Validator<string | null | undefined> | undefined;
                            autoCorrect?: React.Validator<string | null | undefined> | undefined;
                            autoSave?: React.Validator<string | null | undefined> | undefined;
                            itemProp?: React.Validator<string | null | undefined> | undefined;
                            itemScope?: React.Validator<boolean | null | undefined> | undefined;
                            itemType?: React.Validator<string | null | undefined> | undefined;
                            itemID?: React.Validator<string | null | undefined> | undefined;
                            itemRef?: React.Validator<string | null | undefined> | undefined;
                            results?: React.Validator<number | null | undefined> | undefined;
                            security?: React.Validator<string | null | undefined> | undefined;
                            unselectable?:
                                | React.Validator<'on' | 'off' | null | undefined>
                                | undefined;
                            inputMode?:
                                | React.Validator<
                                      | 'search'
                                      | 'none'
                                      | 'text'
                                      | 'email'
                                      | 'url'
                                      | 'tel'
                                      | 'numeric'
                                      | 'decimal'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            is?: React.Validator<string | null | undefined> | undefined;
                            'aria-activedescendant'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-atomic'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-autocomplete'?:
                                | React.Validator<
                                      'none' | 'both' | 'inline' | 'list' | null | undefined
                                  >
                                | undefined;
                            'aria-busy'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-checked'?:
                                | React.Validator<
                                      boolean | 'mixed' | 'false' | 'true' | null | undefined
                                  >
                                | undefined;
                            'aria-colcount'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-colindex'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-colspan'?: React.Validator<number | null | undefined> | undefined;
                            'aria-controls'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-current'?:
                                | React.Validator<
                                      | boolean
                                      | 'page'
                                      | 'time'
                                      | 'false'
                                      | 'true'
                                      | 'location'
                                      | 'date'
                                      | 'step'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-describedby'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-details'?: React.Validator<string | null | undefined> | undefined;
                            'aria-disabled'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-dropeffect'?:
                                | React.Validator<
                                      | 'link'
                                      | 'none'
                                      | 'copy'
                                      | 'move'
                                      | 'execute'
                                      | 'popup'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-errormessage'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-expanded'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-flowto'?: React.Validator<string | null | undefined> | undefined;
                            'aria-grabbed'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-haspopup'?:
                                | React.Validator<
                                      | boolean
                                      | 'grid'
                                      | 'dialog'
                                      | 'menu'
                                      | 'listbox'
                                      | 'false'
                                      | 'true'
                                      | 'tree'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-hidden'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-invalid'?:
                                | React.Validator<
                                      | boolean
                                      | 'false'
                                      | 'true'
                                      | 'grammar'
                                      | 'spelling'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-keyshortcuts'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-label'?: React.Validator<string | null | undefined> | undefined;
                            'aria-labelledby'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-level'?: React.Validator<number | null | undefined> | undefined;
                            'aria-live'?:
                                | React.Validator<'off' | 'assertive' | 'polite' | null | undefined>
                                | undefined;
                            'aria-modal'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-multiline'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-multiselectable'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-orientation'?:
                                | React.Validator<'horizontal' | 'vertical' | null | undefined>
                                | undefined;
                            'aria-owns'?: React.Validator<string | null | undefined> | undefined;
                            'aria-placeholder'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-posinset'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-pressed'?:
                                | React.Validator<
                                      boolean | 'mixed' | 'false' | 'true' | null | undefined
                                  >
                                | undefined;
                            'aria-readonly'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-relevant'?:
                                | React.Validator<
                                      | 'all'
                                      | 'text'
                                      | 'additions'
                                      | 'additions removals'
                                      | 'additions text'
                                      | 'removals'
                                      | 'removals additions'
                                      | 'removals text'
                                      | 'text additions'
                                      | 'text removals'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-required'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-roledescription'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            'aria-rowcount'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-rowindex'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-rowspan'?: React.Validator<number | null | undefined> | undefined;
                            'aria-selected'?:
                                | React.Validator<boolean | 'false' | 'true' | null | undefined>
                                | undefined;
                            'aria-setsize'?: React.Validator<number | null | undefined> | undefined;
                            'aria-sort'?:
                                | React.Validator<
                                      | 'none'
                                      | 'ascending'
                                      | 'descending'
                                      | 'other'
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            'aria-valuemax'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-valuemin'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-valuenow'?:
                                | React.Validator<number | null | undefined>
                                | undefined;
                            'aria-valuetext'?:
                                | React.Validator<string | null | undefined>
                                | undefined;
                            dangerouslySetInnerHTML?:
                                | React.Validator<
                                      | {
                                            __html: string | TrustedHTML;
                                        }
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            onCopy?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCopyCapture?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCut?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCutCapture?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPaste?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPasteCapture?:
                                | React.Validator<
                                      React.ClipboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionEnd?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionEndCapture?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionStart?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionStartCapture?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionUpdate?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCompositionUpdateCapture?:
                                | React.Validator<
                                      React.CompositionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onFocus?:
                                | React.Validator<
                                      React.FocusEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onFocusCapture?:
                                | React.Validator<
                                      React.FocusEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onBlur?:
                                | React.Validator<
                                      React.FocusEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onBlurCapture?:
                                | React.Validator<
                                      React.FocusEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onChange?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onChangeCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onBeforeInput?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onBeforeInputCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onInput?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onInputCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onReset?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onResetCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSubmit?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSubmitCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onInvalid?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onInvalidCapture?:
                                | React.Validator<
                                      React.FormEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoad?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onError?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onErrorCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyDown?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyDownCapture?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyPress?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyPressCapture?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyUp?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onKeyUpCapture?:
                                | React.Validator<
                                      React.KeyboardEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAbort?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAbortCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCanPlay?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCanPlayCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCanPlayThrough?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onCanPlayThroughCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDurationChange?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDurationChangeCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEmptied?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEmptiedCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEncrypted?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEncryptedCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEnded?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onEndedCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadedData?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadedDataCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadedMetadata?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadedMetadataCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadStart?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLoadStartCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPause?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPauseCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPlay?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPlayCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPlaying?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPlayingCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onProgress?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onProgressCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onRateChange?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onRateChangeCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSeeked?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSeekedCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSeeking?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSeekingCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onStalled?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onStalledCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSuspend?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSuspendCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTimeUpdate?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTimeUpdateCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onVolumeChange?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onVolumeChangeCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onWaiting?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onWaitingCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAuxClick?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAuxClickCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onClickCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onContextMenu?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onContextMenuCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDoubleClick?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDoubleClickCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDrag?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragEnd?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragEndCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragEnter?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragEnterCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragExit?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragExitCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragLeave?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragLeaveCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragOver?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragOverCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragStart?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDragStartCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDrop?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onDropCapture?:
                                | React.Validator<
                                      React.DragEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseDown?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseDownCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseEnter?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseLeave?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseMove?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseMoveCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseOut?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseOutCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseOver?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseOverCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseUp?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onMouseUpCapture?:
                                | React.Validator<
                                      React.MouseEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSelect?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onSelectCapture?:
                                | React.Validator<
                                      React.ReactEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchCancel?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchCancelCapture?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchEnd?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchEndCapture?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchMove?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchMoveCapture?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchStart?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTouchStartCapture?:
                                | React.Validator<
                                      React.TouchEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerDown?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerDownCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerMove?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerMoveCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerUp?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerUpCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerCancel?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerCancelCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerEnter?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerEnterCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerLeave?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerLeaveCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerOver?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerOverCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerOut?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onPointerOutCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onGotPointerCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onGotPointerCaptureCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLostPointerCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onLostPointerCaptureCapture?:
                                | React.Validator<
                                      React.PointerEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onScroll?:
                                | React.Validator<
                                      React.UIEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onScrollCapture?:
                                | React.Validator<
                                      React.UIEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onWheel?:
                                | React.Validator<
                                      React.WheelEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onWheelCapture?:
                                | React.Validator<
                                      React.WheelEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationStart?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationStartCapture?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationEnd?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationEndCapture?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationIteration?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onAnimationIterationCapture?:
                                | React.Validator<
                                      React.AnimationEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTransitionEnd?:
                                | React.Validator<
                                      React.TransitionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            onTransitionEndCapture?:
                                | React.Validator<
                                      React.TransitionEventHandler<HTMLElement> | null | undefined
                                  >
                                | undefined;
                            formAction?: React.Validator<string | null | undefined> | undefined;
                            formEncType?: React.Validator<string | null | undefined> | undefined;
                            formMethod?: React.Validator<string | null | undefined> | undefined;
                            formNoValidate?:
                                | React.Validator<boolean | null | undefined>
                                | undefined;
                            formTarget?: React.Validator<string | null | undefined> | undefined;
                            value:
                                | React.Validator<
                                      string | number | readonly string[] | null | undefined
                                  >
                                | import('prop-types').Requireable<{}>;
                            locale?:
                                | React.Validator<
                                      | import('../locale/types').ComponentLocaleObject
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            pure?: React.Validator<boolean | null | undefined> | undefined;
                            device?:
                                | React.Validator<
                                      | import('../config-provider/types').DeviceType
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            rtl?: React.Validator<boolean | null | undefined> | undefined;
                            errorBoundary?:
                                | React.Validator<
                                      | import('../config-provider/types').ErrorBoundaryType
                                      | null
                                      | undefined
                                  >
                                | undefined;
                            label: import('prop-types').Requireable<string>;
                        }>
                      | null
                      | undefined
                  )[]
                | null
                | undefined
            >
        >;
        inputProps: import('prop-types').Requireable<
            import('prop-types').InferProps<
                React.WeakValidationMap<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps
                >
            >
        >;
        popupComponent: import('prop-types').Requireable<import('prop-types').ReactComponentLike>;
        type: import('prop-types').Requireable<string>;
        locale: import('prop-types').Requireable<object>;
        defaultPropsConfig: import('prop-types').Requireable<object>;
        errorBoundary: import('prop-types').Requireable<
            NonNullable<boolean | object | null | undefined>
        >;
        pure: import('prop-types').Requireable<boolean>;
        warning: import('prop-types').Requireable<boolean>;
        device: import('prop-types').Requireable<string>;
        children: import('prop-types').Requireable<any>;
    };
    defaultProps: {
        prefix: string;
        rtl: boolean;
        locale: Partial<{
            placeholder: string;
            clear: string;
            hour: string;
            minute: string;
            second: string;
            ok: string;
        }> & {
            momentLocale?: string | undefined;
        };
        size: string;
        format: string;
        hasClear: boolean;
        disabled: boolean;
        hasBorder: boolean;
        type: string;
        popupAlign: string;
        popupTriggerType: string;
        onChange: () => void;
        onVisibleChange: () => void;
    };
    getDerivedStateFromProps(
        props: TimePickerProps,
        prevState: import('./types').TimePickerState
    ): import('./types').TimePickerState;
    contextType?: React.Context<any> | undefined;
} & {
    RangePicker: React.ForwardRefExoticComponent<
        TimePickerProps &
            React.RefAttributes<
                import('../config-provider/types').ConfiguredComponent<
                    TimePickerProps & import('../config-provider/types').ComponentCommonProps,
                    {
                        prefixCls: string;
                        dateInput: {
                            prefixCls: string;
                            input?:
                                | (import('../config-provider/types').ConfiguredComponent<
                                      import('../input').InputProps &
                                          import('../config-provider/types').ComponentCommonProps,
                                      import('../input/input').default<
                                          import('../input').InputProps
                                      >
                                  > &
                                      Pick<
                                          import('../input/input').default<
                                              import('../input').InputProps
                                          >,
                                          'focus' | 'getInputNode'
                                      >)
                                | (import('../config-provider/types').ConfiguredComponent<
                                      import('../input').InputProps &
                                          import('../config-provider/types').ComponentCommonProps,
                                      import('../input/input').default<
                                          import('../input').InputProps
                                      >
                                  > &
                                      Pick<
                                          import('../input/input').default<
                                              import('../input').InputProps
                                          >,
                                          'focus' | 'getInputNode'
                                      >)[]
                                | undefined;
                            setInputRef: (
                                el: import('../config-provider/types').ConfiguredComponent<
                                    import('../input').InputProps &
                                        import('../config-provider/types').ComponentCommonProps,
                                    import('../input/input').default<import('../input').InputProps>
                                > &
                                    Pick<
                                        import('../input/input').default<
                                            import('../input').InputProps
                                        >,
                                        'focus' | 'getInputNode'
                                    >,
                                index?: number | undefined
                            ) => void;
                            setValue: (
                                v: string | number | null
                            ) => string | number | (string | number | null)[] | null;
                            formatter: (v: import('dayjs').Dayjs) => string | import('dayjs').Dayjs;
                            onInput:
                                | ((
                                      value: string | number,
                                      e:
                                          | React.CompositionEvent<HTMLInputElement>
                                          | React.ChangeEvent<HTMLInputElement>
                                          | React.KeyboardEvent<HTMLInputElement>,
                                      reason?: string | undefined
                                  ) => void)
                                | undefined;
                            handleTypeChange: (inputType: number) => void;
                            getPlaceholder: () => string | string[] | undefined;
                            getHtmlSize: () => string;
                            render(): React.JSX.Element;
                            context: any;
                            setState<K extends never>(
                                state:
                                    | {}
                                    | ((
                                          prevState: Readonly<{}>,
                                          props: Readonly<import('./types').DateInputProps>
                                      ) => {} | Pick<{}, K> | null)
                                    | Pick<{}, K>
                                    | null,
                                callback?: (() => void) | undefined
                            ): void;
                            forceUpdate(callback?: (() => void) | undefined): void;
                            readonly props: Readonly<import('./types').DateInputProps> &
                                Readonly<{
                                    children?: React.ReactNode;
                                }>;
                            state: Readonly<{}>;
                            refs: {
                                [key: string]: React.ReactInstance;
                            };
                            componentDidMount?(): void;
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                            getSnapshotBeforeUpdate?(
                                prevProps: Readonly<import('./types').DateInputProps>,
                                prevState: Readonly<{}>
                            ): any;
                            componentDidUpdate?(
                                prevProps: Readonly<import('./types').DateInputProps>,
                                prevState: Readonly<{}>,
                                snapshot?: any
                            ): void;
                            componentWillMount?(): void;
                            UNSAFE_componentWillMount?(): void;
                            componentWillReceiveProps?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillReceiveProps?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextContext: any
                            ): void;
                            componentWillUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillUpdate?(
                                nextProps: Readonly<import('./types').DateInputProps>,
                                nextState: Readonly<{}>,
                                nextContext: any
                            ): void;
                        };
                        clearTimeoutId: number;
                        getInitValue: () => ValueType;
                        getInitRangeInputState: () => {
                            justBeginInput: boolean;
                            inputType: import('./types').InputType;
                        };
                        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
                        onVisibleChange: (visible: boolean, type?: string | undefined) => void;
                        onClick: () => void;
                        handleVisibleChange: (visible: boolean, targetType: string) => void;
                        handleInputFocus: (inputType: number) => void;
                        onOk: () => void;
                        onInputTypeChange: (idx: import('./types').InputType) => void;
                        checkValue: (
                            value:
                                | string
                                | import('dayjs').Dayjs
                                | (string | import('dayjs').Dayjs | null)[]
                                | null
                                | undefined,
                            strictly?: boolean | undefined
                        ) => ValueType;
                        getOutputArgs: (value: ValueType) => (string | string[] | ValueType)[];
                        onChange: (v: ValueType) => void;
                        shouldSwitchInput: (value: (import('dayjs').Dayjs | null)[]) => boolean;
                        handleChange: (
                            v: string | string[] | ValueType,
                            eventType?: string | undefined
                        ) => void;
                        isEnabled: (idx?: number | undefined) => boolean;
                        handleClear: () => void;
                        handleInput: (v: string, eventType?: string | undefined) => void;
                        renderPreview(
                            others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>
                        ): React.JSX.Element;
                        render(): React.JSX.Element;
                        context: any;
                        setState<K_1 extends keyof import('./types').TimePickerState>(
                            state:
                                | import('./types').TimePickerState
                                | ((
                                      prevState: Readonly<import('./types').TimePickerState>,
                                      props: Readonly<TimePickerProps>
                                  ) =>
                                      | import('./types').TimePickerState
                                      | Pick<import('./types').TimePickerState, K_1>
                                      | null)
                                | Pick<import('./types').TimePickerState, K_1>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<TimePickerProps> &
                            Readonly<{
                                children?: React.ReactNode;
                            }>;
                        state: Readonly<import('./types').TimePickerState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        componentDidMount?(): void;
                        shouldComponentUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<TimePickerProps>,
                            prevState: Readonly<import('./types').TimePickerState>
                        ): any;
                        componentDidUpdate?(
                            prevProps: Readonly<TimePickerProps>,
                            prevState: Readonly<import('./types').TimePickerState>,
                            snapshot?: any
                        ): void;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<TimePickerProps>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<TimePickerProps>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<TimePickerProps>,
                            nextState: Readonly<import('./types').TimePickerState>,
                            nextContext: any
                        ): void;
                    }
                >
            >
    >;
};
export default TimePickerWithSub;
export type { TimePickerProps, ValueType, RangePickerProps, PresetType };
