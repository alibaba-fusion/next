import React, { Component, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import type { Dayjs } from 'dayjs';
import DateInput from './module/date-input';
import type { TimePickerProps, TimePickerState, ValueType, InputType } from './types';
declare class TimePicker2 extends Component<TimePickerProps, TimePickerState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        state: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<
            NonNullable<string | (string | null | undefined)[] | null | undefined>
        >;
        value: (props: Record<string, unknown>, propName: string, componentName: string) => void;
        defaultValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => void;
        size: PropTypes.Requireable<string>;
        hasClear: PropTypes.Requireable<boolean>;
        format: PropTypes.Requireable<string>;
        hourStep: PropTypes.Requireable<number>;
        minuteStep: PropTypes.Requireable<number>;
        secondStep: PropTypes.Requireable<number>;
        disabledHours: PropTypes.Requireable<(...args: any[]) => any>;
        disabledMinutes: PropTypes.Requireable<(...args: any[]) => any>;
        disabledSeconds: PropTypes.Requireable<(...args: any[]) => any>;
        renderTimeMenuItems: PropTypes.Requireable<(...args: any[]) => any>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        popupContainer: PropTypes.Requireable<any>;
        popupAlign: PropTypes.Requireable<string>;
        popupTriggerType: PropTypes.Requireable<string>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        preset: PropTypes.Requireable<
            NonNullable<
                | PropTypes.InferProps<{
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
                          | PropTypes.Requireable<{}>;
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
                      label: PropTypes.Requireable<string>;
                  }>
                | (
                      | PropTypes.InferProps<{
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
                                | PropTypes.Requireable<{}>;
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
                            label: PropTypes.Requireable<string>;
                        }>
                      | null
                      | undefined
                  )[]
                | null
                | undefined
            >
        >;
        inputProps: PropTypes.Requireable<
            PropTypes.InferProps<
                React.WeakValidationMap<
                    import('../input').InputProps &
                        import('../config-provider/types').ComponentCommonProps
                >
            >
        >;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        type: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
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
    prefixCls: string;
    dateInput: InstanceType<typeof DateInput>;
    clearTimeoutId: number;
    constructor(props: TimePickerProps);
    static getDerivedStateFromProps(
        props: TimePickerProps,
        prevState: TimePickerState
    ): TimePickerState;
    /**
     * 获取初始值
     */
    getInitValue: () => ValueType;
    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns inputState - Object
     * @returns inputState.justBeginInput 是否初始输入 - boolean
     * @returns inputState.inputType 当前输入框 - number
     */
    getInitRangeInputState: () => {
        justBeginInput: boolean;
        inputType: InputType;
    };
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    onVisibleChange: (visible: boolean, type?: string) => void;
    onClick: () => void;
    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param visible - 是否可见
     * @param type - 事件类型
     */
    handleVisibleChange: (visible: boolean, targetType: string) => void;
    handleInputFocus: (inputType: number) => void;
    onOk: () => void;
    onInputTypeChange: (idx: InputType) => void;
    checkValue: (value: TimePickerProps['value'], strictly?: boolean) => ValueType;
    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param value - Dayjs
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */
    getOutputArgs: (value: ValueType) => (string | string[] | ValueType)[];
    onChange: (v: ValueType) => void;
    shouldSwitchInput: (value: (Dayjs | null)[]) => boolean;
    handleChange: (v: ValueType | string | null | string[], eventType?: string) => void;
    /**
     * 获取输入框的禁用状态
     */
    isEnabled: (idx?: number) => boolean;
    handleClear: () => void;
    handleInput: (v: string, eventType?: string) => void;
    renderPreview(others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof TimePicker2;
export default _default;
