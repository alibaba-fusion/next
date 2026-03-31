import React, { type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import type { PasswordProps } from './types';
export default class Password extends Input<PasswordProps> {
    state: {
        hint: string;
        htmlType: string;
    };
    static displayName: string;
    static getDerivedStateFromProps: (
        nextProps: import('./types').BaseProps,
        prevState: import('./types').BaseState
    ) => {
        value: string | number;
    } | null;
    static propTypes: {
        showToggle: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasClear: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        onPressEnter: PropTypes.Requireable<(...args: any[]) => any>;
        htmlType: PropTypes.Requireable<string>;
        htmlSize: PropTypes.Requireable<string>;
        hint: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        innerBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        innerAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonTextBefore: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        addonTextAfter: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        autoComplete: PropTypes.Requireable<string>;
        autoFocus: PropTypes.Requireable<boolean>;
        inputRender: PropTypes.Requireable<(...args: any[]) => any>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        innerBeforeClassName: PropTypes.Requireable<string>;
        innerAfterClassName: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        hoverShowClear: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        maxLength: PropTypes.Requireable<number>;
        showLimitHint: PropTypes.Requireable<boolean>;
        cutString: PropTypes.Requireable<boolean>;
        readOnly: PropTypes.Requireable<boolean>;
        trim: PropTypes.Requireable<boolean>;
        placeholder: PropTypes.Requireable<string>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        getValueLength: PropTypes.Requireable<(...args: any[]) => any>;
        inputStyle: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        name: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        size: PropTypes.Requireable<string>;
        composition: PropTypes.Requireable<boolean>;
        onCompositionStart: PropTypes.Requireable<(...args: any[]) => any>;
        onCompositionEnd: PropTypes.Requireable<(...args: any[]) => any>;
        prefix: PropTypes.Requireable<string>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        showToggle: boolean;
        value?: string | number | null | undefined;
        defaultValue?: string | number | null | undefined;
        onChange?:
            | ((
                  value: string | number,
                  e:
                      | React.CompositionEvent<HTMLInputElement>
                      | React.ChangeEvent<HTMLInputElement>
                      | React.KeyboardEvent<HTMLInputElement>,
                  reason?: string | undefined
              ) => void)
            | undefined;
        onKeyDown?:
            | ((
                  e: React.KeyboardEvent<HTMLInputElement>,
                  opts: import('./types').OnKeyDownOpts
              ) => void)
            | undefined;
        disabled?: boolean | undefined;
        maxLength?: number | undefined;
        hasLimitHint?: boolean | undefined;
        showLimitHint?: boolean | undefined;
        cutString?: boolean | undefined;
        readOnly?: boolean | undefined;
        trim?: boolean | undefined;
        placeholder?: string | undefined;
        onFocus?: ((e: React.FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        onBlur?: ((e: React.FocusEvent<HTMLInputElement, Element>) => void) | undefined;
        getValueLength?: ((value: string) => number | void) | undefined;
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
        htmlType?: string | undefined;
        name?: string | undefined;
        state?: 'warning' | 'error' | 'loading' | 'success' | undefined;
        label?: React.ReactNode;
        hasClear?: boolean | undefined;
        hasBorder?: boolean | undefined;
        size?: 'small' | 'medium' | 'large' | undefined;
        onPressEnter?: ((e: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
        hint?: React.ReactNode;
        innerBefore?: React.ReactNode;
        innerAfter?: React.ReactNode;
        addonBefore?: React.ReactNode;
        addonAfter?: React.ReactNode;
        addonTextBefore?: React.ReactNode;
        addonTextAfter?: React.ReactNode;
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        isPreview?: boolean | undefined;
        renderPreview?:
            | ((
                  value: string | number | null | undefined,
                  props: import('./types').InputProps
              ) => React.ReactNode)
            | undefined;
        composition?: boolean | undefined;
        hoverShowClear?: boolean | undefined;
        extra?: React.ReactNode;
        htmlSize?: string | undefined;
        inputRender?:
            | ((
                  input: React.ReactElement<any, string | React.JSXElementConstructor<any>>
              ) => React.ReactNode)
            | undefined;
        inputStyle?: React.CSSProperties | undefined;
        inputClassName?: string | undefined;
        locale?:
            | (Partial<{
                  clear: string;
              }> & {
                  momentLocale?: string | undefined;
              })
            | undefined;
        innerBeforeClassName?: string | undefined;
        innerAfterClassName?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        content?: string | undefined;
        translate?: 'no' | 'yes' | undefined;
        form?: string | undefined;
        slot?: string | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        pattern?: string | undefined;
        multiple?: boolean | undefined;
        dir?: string | undefined;
        type?: React.HTMLInputTypeAttribute | undefined;
        required?: boolean | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
        minLength?: number | undefined;
        prefix?: string | undefined;
        children?: React.ReactNode;
        list?: string | undefined;
        id?: string | undefined;
        defaultChecked?: boolean | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: 'inherit' | (boolean | 'false' | 'true') | undefined;
        contextMenu?: string | undefined;
        draggable?: (boolean | 'false' | 'true') | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        spellCheck?: (boolean | 'false' | 'true') | undefined;
        tabIndex?: number | undefined;
        radioGroup?: string | undefined;
        role?: React.AriaRole | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: 'on' | 'off' | undefined;
        inputMode?:
            | 'search'
            | 'none'
            | 'text'
            | 'email'
            | 'url'
            | 'tel'
            | 'numeric'
            | 'decimal'
            | undefined;
        is?: string | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: boolean | 'false' | 'true' | undefined;
        'aria-autocomplete'?: 'none' | 'both' | 'inline' | 'list' | undefined;
        'aria-busy'?: boolean | 'false' | 'true' | undefined;
        'aria-checked'?: boolean | 'mixed' | 'false' | 'true' | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?:
            | boolean
            | 'page'
            | 'time'
            | 'false'
            | 'true'
            | 'location'
            | 'date'
            | 'step'
            | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: boolean | 'false' | 'true' | undefined;
        'aria-dropeffect'?: 'link' | 'none' | 'copy' | 'move' | 'execute' | 'popup' | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | 'false' | 'true' | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | 'false' | 'true' | undefined;
        'aria-haspopup'?:
            | boolean
            | 'grid'
            | 'dialog'
            | 'menu'
            | 'listbox'
            | 'false'
            | 'true'
            | 'tree'
            | undefined;
        'aria-hidden'?: boolean | 'false' | 'true' | undefined;
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
        'aria-keyshortcuts'?: string | undefined;
        'aria-label'?: string | undefined;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
        'aria-modal'?: boolean | 'false' | 'true' | undefined;
        'aria-multiline'?: boolean | 'false' | 'true' | undefined;
        'aria-multiselectable'?: boolean | 'false' | 'true' | undefined;
        'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | 'mixed' | 'false' | 'true' | undefined;
        'aria-readonly'?: boolean | 'false' | 'true' | undefined;
        'aria-relevant'?:
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
            | undefined;
        'aria-required'?: boolean | 'false' | 'true' | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: boolean | 'false' | 'true' | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
        'aria-valuemax'?: number | undefined;
        'aria-valuemin'?: number | undefined;
        'aria-valuenow'?: number | undefined;
        'aria-valuetext'?: string | undefined;
        dangerouslySetInnerHTML?:
            | {
                  __html: string | TrustedHTML;
              }
            | undefined;
        onCopy?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCopyCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCut?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCutCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onPaste?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onPasteCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCompositionEnd?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionStart?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionUpdate?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onFocusCapture?: React.FocusEventHandler<HTMLElement> | undefined;
        onBlurCapture?: React.FocusEventHandler<HTMLElement> | undefined;
        onChangeCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onBeforeInput?: React.FormEventHandler<HTMLElement> | undefined;
        onBeforeInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onInput?: React.FormEventHandler<HTMLElement> | undefined;
        onInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onReset?: React.FormEventHandler<HTMLElement> | undefined;
        onResetCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onSubmit?: React.FormEventHandler<HTMLElement> | undefined;
        onSubmitCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onInvalid?: React.FormEventHandler<HTMLElement> | undefined;
        onInvalidCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onLoad?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onError?: React.ReactEventHandler<HTMLElement> | undefined;
        onErrorCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyPress?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyUp?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onAbort?: React.ReactEventHandler<HTMLElement> | undefined;
        onAbortCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlay?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayThrough?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onDurationChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onDurationChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEmptied?: React.ReactEventHandler<HTMLElement> | undefined;
        onEmptiedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEncrypted?: React.ReactEventHandler<HTMLElement> | undefined;
        onEncryptedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEnded?: React.ReactEventHandler<HTMLElement> | undefined;
        onEndedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedData?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedDataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedMetadata?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadStart?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadStartCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPause?: React.ReactEventHandler<HTMLElement> | undefined;
        onPauseCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlay?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlaying?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlayingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onProgress?: React.ReactEventHandler<HTMLElement> | undefined;
        onProgressCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onRateChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onRateChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeeked?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeekedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeeking?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeekingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onStalled?: React.ReactEventHandler<HTMLElement> | undefined;
        onStalledCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSuspend?: React.ReactEventHandler<HTMLElement> | undefined;
        onSuspendCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onTimeUpdate?: React.ReactEventHandler<HTMLElement> | undefined;
        onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onVolumeChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onWaiting?: React.ReactEventHandler<HTMLElement> | undefined;
        onWaitingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onAuxClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onAuxClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onContextMenu?: React.MouseEventHandler<HTMLElement> | undefined;
        onContextMenuCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onDoubleClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onDoubleClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onDrag?: React.DragEventHandler<HTMLElement> | undefined;
        onDragCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnd?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEndCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnter?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnterCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragExit?: React.DragEventHandler<HTMLElement> | undefined;
        onDragExitCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragLeave?: React.DragEventHandler<HTMLElement> | undefined;
        onDragLeaveCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragOver?: React.DragEventHandler<HTMLElement> | undefined;
        onDragOverCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragStart?: React.DragEventHandler<HTMLElement> | undefined;
        onDragStartCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDrop?: React.DragEventHandler<HTMLElement> | undefined;
        onDropCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onMouseDown?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseDownCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseEnter?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseLeave?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseMove?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseMoveCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOut?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOutCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOver?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOverCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseUp?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseUpCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onSelect?: React.ReactEventHandler<HTMLElement> | undefined;
        onSelectCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onTouchCancel?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchCancelCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchEnd?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchEndCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchMove?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchMoveCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchStart?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchStartCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onPointerDown?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerDownCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerMove?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerMoveCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerUp?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerUpCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerCancel?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerCancelCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerEnter?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerLeave?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOver?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOverCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOut?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOutCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onGotPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onLostPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onScroll?: React.UIEventHandler<HTMLElement> | undefined;
        onScrollCapture?: React.UIEventHandler<HTMLElement> | undefined;
        onWheel?: React.WheelEventHandler<HTMLElement> | undefined;
        onWheelCapture?: React.WheelEventHandler<HTMLElement> | undefined;
        onAnimationStart?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationEnd?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationIteration?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onTransitionEnd?: React.TransitionEventHandler<HTMLElement> | undefined;
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement> | undefined;
        step?: string | number | undefined;
        src?: string | undefined;
        checked?: boolean | undefined;
        alt?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        accept?: string | undefined;
        capture?: string | boolean | undefined;
        rtl?: boolean | undefined;
        pure?: boolean | undefined;
        device?: import('../config-provider/types').DeviceType | undefined;
        errorBoundary?: import('../config-provider/types').ErrorBoundaryType | undefined;
        warning?: boolean | undefined;
    };
    toggleEye: (e: MouseEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
