import React from 'react';
import PropTypes from 'prop-types';
import { SearchProps } from './types';
import { InputProps } from '../input';
import { AutoCompleteProps, AutoComplete as AutoCompleteType } from '../select';
declare const AutoComplete: typeof AutoCompleteType;
export interface SearchState {
    value: string | number;
    filterValue: string | undefined;
    ifFocus: boolean;
}
/**
 * Search
 *  输入框部分继承 Select.AutoComplete 的能力，可以直接用AutoComplete 的 api
 */
declare class Search extends React.Component<SearchProps, SearchState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        defaultValue: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        defaultFilterValue: PropTypes.Requireable<string>;
        fillProps: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<any[]>;
        filterValue: PropTypes.Requireable<string>;
        onFilterChange: PropTypes.Requireable<(...args: any[]) => any>;
        dataSource: PropTypes.Requireable<any[]>;
        placeholder: PropTypes.Requireable<string>;
        searchText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        filterProps: PropTypes.Requireable<object>;
        buttonProps: PropTypes.Requireable<object>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        followTrigger: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        hasIcon: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        icons: PropTypes.Requireable<object>;
        autoHighlightFirstItem: PropTypes.Requireable<boolean>;
        onToggleHighlightItem: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        shape: string;
        type: string;
        size: string;
        hasIcon: boolean;
        filter: never[];
        locale: {
            buttonText: string;
        };
        buttonProps: {};
        onChange: () => void;
        onSearch: () => void;
        onFilterChange: () => void;
        onToggleHighlightItem: () => void;
        hasClear: boolean;
        disabled: boolean;
        icons: {};
        autoHighlightFirstItem: boolean;
    };
    static getDerivedStateFromProps(nextProps: SearchProps, prevState: SearchState): Partial<SearchState> | null;
    highlightKey: unknown;
    inputRef: AutoCompleteType | null;
    constructor(props: SearchProps);
    onChange: NonNullable<AutoCompleteProps['onChange']>;
    onPressEnter: () => void;
    onSearch: () => void;
    onFilterChange: (filterValue: string) => void;
    onToggleHighlightItem: NonNullable<AutoCompleteProps['onToggleHighlightItem']>;
    onKeyDown: (e: React.KeyboardEvent) => void;
    saveInputRef: (ref: React.ComponentRef<typeof AutoComplete>) => void;
    focus: NonNullable<InputProps['onFocus']>;
    handleFocus(...args: [React.FocusEvent<HTMLInputElement>]): void;
    handleBlur(...args: [React.FocusEvent<HTMLInputElement>]): void;
    render(): React.JSX.Element;
}
declare const _default: typeof Search;
export default _default;
