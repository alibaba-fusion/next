import React, { type ReactElement, type MouseEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Input from '../input';
import DataStore from './data-store';
import { getValueDataSource } from './util';
import type {
    BaseProps,
    DataSourceItem,
    NormalizedObjectItem,
    ObjectItem,
    VisibleChangeType,
} from './types';
export interface BaseState {
    dataStore: DataStore;
    value?: DataSourceItem | DataSourceItem[];
    searchValue?: string;
    visible?: boolean;
    dataSource: NormalizedObjectItem[];
    width: number;
    highlightKey?: string | null;
    srReader?: ReactNode;
}
export default class Base<
    P extends BaseProps = BaseProps,
    S extends BaseState = BaseState,
> extends React.Component<P, S> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<any>;
        defaultValue: PropTypes.Requireable<any>;
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
        dataSource: PropTypes.Requireable<any[]>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        mode: PropTypes.Requireable<string>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        popupComponent: PropTypes.Requireable<any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        showDataSourceChildren: PropTypes.Requireable<boolean>;
    };
    static defaultProps: BaseProps;
    dataStore: DataStore;
    selectDOM: HTMLElement;
    width: string | number;
    popupRef: HTMLDivElement;
    resizeTimeout: number;
    highlightTimer: number | undefined;
    menuRef: InstanceType<typeof Menu> | null;
    isAutoComplete: boolean;
    inputRef: ReturnType<InstanceType<typeof Input>['getInstance']>;
    valueDataSource: ReturnType<typeof getValueDataSource>;
    constructor(props: P);
    componentDidMount(): void;
    componentDidUpdate(prevProps: P, prevState: S): void;
    componentWillUnmount(): void;
    /**
     * Calculate and set width of popup menu
     */
    syncWidth(): void;
    handleResize(): void;
    /**
     * Get structured dataSource, for cache
     */
    setDataSource(props: P): NormalizedObjectItem[];
    /**
     * Set popup visible
     */
    setVisible(visible: boolean, type?: VisibleChangeType): void;
    setFirstHightLightKeyForMenu(searchValue?: unknown): void;
    handleChange(value: BaseProps['value'], ...args: [unknown, (ObjectItem | ObjectItem[])?]): void;
    /**
     * Handle Menu body click
     * @param e - click event
     */
    handleMenuBodyClick(): void;
    /**
     * Toggle highlight MenuItem
     * @param dir - -1: up, 1: down
     */
    toggleHighlightItem(dir: number): false | NormalizedObjectItem | undefined;
    scrollMenuIntoView(): void;
    /**
     * render popup menu header
     */
    renderMenuHeader(): React.ReactNode;
    handleSelect(): void;
    /**
     * 防止 onBlur/onFocus 抖动
     */
    handleMouseDown: (e: MouseEvent<HTMLElement>) => void;
    /**
     * abstract
     */
    handleMenuSelect(...rest: unknown[]): void;
    /**
     * abstract
     */
    handleItemClick(...rest: unknown[]): void;
    /**
     * abstract
     */
    useDetailValue(): boolean;
    /**
     * abstract
     */
    handleVisibleChange(...rest: unknown[]): void;
    /**
     * abstract
     */
    renderSelect(): React.JSX.Element;
    /**
     * render popup children
     * @param props -
     */
    renderMenu(): React.JSX.Element;
    /**
     * render menu item
     */
    renderMenuItem(dataSource: NormalizedObjectItem[]): ReactElement[];
    saveSelectRef: (ref: HTMLElement | null) => void;
    saveInputRef: (ref: InstanceType<typeof Input>) => void;
    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    focusInput(): void;
    focus(start?: number, end?: number, preventScroll?: boolean): void;
    beforeOpen(): void;
    beforeClose(): void;
    afterClose(): void;
    savePopupRef: (ref: HTMLDivElement) => void;
    shouldAutoWidth(): false | P['autoWidth'] | undefined;
    render(props?: P): React.JSX.Element;
}
