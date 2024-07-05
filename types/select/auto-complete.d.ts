import React, { type ChangeEvent, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import Base, { type BaseState } from './base';
import type { AutoCompleteProps, ObjectItem, VisibleChangeType } from './types';
export interface AutoCompleteState extends BaseState {
    value: string;
    highlightKey: string;
}
/**
 * Select.AutoComplete
 */
declare class AutoComplete extends Base<AutoCompleteProps, AutoCompleteState> {
    static propTypes: {
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        dataSource: PropTypes.Requireable<
            (
                | NonNullable<
                      | string
                      | PropTypes.InferProps<{
                            value: PropTypes.Requireable<string>;
                            label: PropTypes.Requireable<any>;
                            disabled: PropTypes.Requireable<boolean>;
                            children: PropTypes.Requireable<any[]>;
                        }>
                      | null
                      | undefined
                  >
                | null
                | undefined
            )[]
        >;
        fillProps: PropTypes.Requireable<string>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        highlightHolder: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        autoWidth: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasClear: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        readOnly: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupContainer: PropTypes.Requireable<any>;
        popupClassName: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        menuProps: PropTypes.Requireable<object>;
        filterLocal: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        defaultHighlightKey: PropTypes.Requireable<string>;
        highlightKey: PropTypes.Requireable<string>;
        onToggleHighlightItem: PropTypes.Requireable<(...args: any[]) => any>;
        autoHighlightFirstItem: PropTypes.Requireable<boolean>;
        useVirtual: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        mode: PropTypes.Requireable<string>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        popupComponent: PropTypes.Requireable<any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        showDataSourceChildren: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        onKeyDown: () => void;
        fillProps: string;
        canCloseByTrigger?: boolean | undefined;
        cache?: boolean | undefined;
        onChange?: ((...rest: any[]) => void) | undefined;
        renderPreview?:
            | ((
                  values: any,
                  props?: import('../input').InputProps | import('./types').SelectProps | undefined
              ) => React.ReactNode)
            | undefined;
        rtl?: boolean | undefined;
        prefix?: string | undefined;
        pure?: boolean | undefined;
        device?: import('../config-provider/types').DeviceType | undefined;
        errorBoundary?: import('../config-provider/types').ErrorBoundaryType | undefined;
        warning?: boolean | undefined;
        filter?: ((key: string | number, item: ObjectItem) => boolean) | undefined;
        label?: React.ReactNode;
        style?: React.CSSProperties | undefined;
        visible?: boolean | undefined;
        size?: 'small' | 'medium' | 'large' | undefined;
        disabled?: boolean | undefined;
        notFoundContent?: React.ReactNode;
        popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement) | undefined;
        locale?:
            | (Partial<{
                  selectPlaceholder: string;
                  autoCompletePlaceholder: string;
                  notFoundContent: string;
                  maxTagPlaceholder: string;
                  selectAll: string;
                  selectPlaceHolder?: string | undefined;
                  autoCompletePlaceHolder?: string | undefined;
              }> & {
                  momentLocale?: string | undefined;
              })
            | undefined;
        children?: React.ReactNode;
        className?: string | undefined;
        defaultValue?: import('./types').DataSourceItem | import('./types').DataSourceItem[];
        value?: import('./types').DataSourceItem | import('./types').DataSourceItem[];
        mode?: 'multiple' | 'single' | 'tag' | undefined;
        dataSource?: import('./types').DataSourceItem[] | undefined;
        isPreview?: boolean | undefined;
        popupProps?:
            | (import('../overlay').PopupProps & React.RefAttributes<import('../overlay').Popup>)
            | undefined;
        popupClassName?: string | undefined;
        popupStyle?: React.CSSProperties | undefined;
        autoWidth?: boolean | undefined;
        defaultVisible?: boolean | undefined;
        onVisibleChange?:
            | ((visible: boolean, type?: VisibleChangeType | undefined) => void)
            | undefined;
        followTrigger?: boolean | undefined;
        popupContent?: React.ReactNode;
        filterLocal?: boolean | undefined;
        onToggleHighlightItem?:
            | ((
                  highlightKey?:
                      | string
                      | boolean
                      | import('./types').NormalizedObjectItem
                      | null
                      | undefined,
                  type?: import('./types').HighlightChangeType | undefined
              ) => void)
            | undefined;
        useVirtual?: boolean | undefined;
        itemRender?:
            | ((item: ObjectItem, searchValue: string | undefined) => React.ReactNode)
            | undefined;
        autoHighlightFirstItem?: boolean | undefined;
        highlightKey?: string | undefined;
        defaultHighlightKey?: string | null | undefined;
        menuProps?: import('../menu').MenuProps | undefined;
        valueRender?:
            | ((
                  item: ObjectItem,
                  props?: import('./types').SelectProps | undefined
              ) => React.ReactNode)
            | undefined;
        showDataSourceChildren?: boolean | undefined;
        popupAutoFocus?: boolean | undefined;
        popupComponent?:
            | string
            | React.ComponentClass<{}, any>
            | React.FunctionComponent<{}>
            | undefined;
    };
    isInputing: boolean;
    constructor(props: AutoCompleteProps);
    static getDerivedStateFromProps(
        nextProps: AutoCompleteProps,
        prevState: AutoCompleteState
    ): {} | null;
    componentDidUpdate(prevProps: AutoCompleteProps): void;
    shouldControlPopup(
        props:
            | (Readonly<AutoCompleteProps> &
                  Readonly<{
                      children?: React.ReactNode;
                  }>)
            | undefined,
        type: VisibleChangeType
    ): void;
    handleMenuSelect(keys: string[]): void;
    handleItemClick(): void;
    handleSelectEvent(key: string, item: ObjectItem, triggerType: VisibleChangeType): void;
    handleChange: (
        value: string,
        proxy: ChangeEvent<HTMLElement> | VisibleChangeType,
        item?: ObjectItem
    ) => false | undefined;
    handleVisibleChange(visible: boolean, type: VisibleChangeType): void;
    beforeClose(): void;
    /**
     * Handle trigger keydown event
     */
    handleTriggerKeyDown(e: KeyboardEvent<HTMLElement>): void;
    chooseHighlightItem(): false | undefined;
    hasClear(): boolean | '' | undefined;
    /**
     * 选择器
     * @override
     * @param props -
     */
    renderSelect(
        props?: Readonly<AutoCompleteProps> &
            Readonly<{
                children?: React.ReactNode;
            }>
    ): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof AutoComplete;
export default _default;
