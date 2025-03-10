import React, { Component, type ReactNode, type KeyboardEvent, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../util';
import type { PaginationProps, PaginationState } from './types';
type PaginationPropsWithDefault = ClassPropsWithDefault<
    PaginationProps,
    typeof Pagination.defaultProps
>;
/**
 * Pagination
 */
declare class Pagination extends Component<PaginationProps, PaginationState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        type: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        current: PropTypes.Requireable<number>;
        defaultCurrent: PropTypes.Requireable<number>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        total: PropTypes.Requireable<number>;
        totalRender: PropTypes.Requireable<(...args: any[]) => any>;
        pageShowCount: PropTypes.Requireable<number>;
        pageSize: PropTypes.Requireable<number>;
        pageSizeSelector: PropTypes.Requireable<string | boolean>;
        pageSizeList: PropTypes.Requireable<
            NonNullable<
                | (number | null | undefined)[]
                | (
                      | PropTypes.InferProps<{
                            label: PropTypes.Requireable<string>;
                            value: PropTypes.Requireable<number>;
                        }>
                      | null
                      | undefined
                  )[]
                | null
                | undefined
            >
        >;
        pageNumberRender: PropTypes.Requireable<(...args: any[]) => any>;
        pageSizePosition: PropTypes.Requireable<string>;
        useFloatLayout: PropTypes.Requireable<boolean>;
        onPageSizeChange: PropTypes.Requireable<(...args: any[]) => any>;
        hideOnlyOnePage: PropTypes.Requireable<boolean>;
        showJump: PropTypes.Requireable<boolean>;
        link: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        selectProps: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        warning: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        rtl: boolean;
        locale: Partial<{
            prev: string;
            next: string;
            goTo: string;
            page: string;
            go: string;
            total: string;
            labelPrev: string;
            labelNext: string;
            inputAriaLabel: string;
            selectAriaLabel: string;
            pageSize: string;
        }> & {
            momentLocale?: string | undefined;
        };
        type: string;
        shape: string;
        size: string;
        defaultCurrent: number;
        onChange: () => void;
        pageSize: number;
        pageSizeSelector: boolean;
        pageSizeList: number[];
        pageSizePosition: string;
        onPageSizeChange: () => void;
        useFloatLayout: boolean;
        total: number;
        pageShowCount: number;
        hideOnlyOnePage: boolean;
        showJump: boolean;
        pageNumberRender: (index: number) => ReactNode;
    };
    readonly props: PaginationPropsWithDefault;
    constructor(props: PaginationProps);
    static getDerivedStateFromProps(
        props: PaginationPropsWithDefault,
        state: PaginationState
    ): Partial<PaginationState>;
    handleJump: (e: KeyboardEvent<Element> | MouseEvent<Element>) => void;
    onPageItemClick(page: number, e: KeyboardEvent<Element> | MouseEvent<Element>): void;
    onInputChange(value: string): void;
    onSelectSize(pageSize: number): void;
    renderPageTotal(): React.JSX.Element;
    renderPageItem(index: number): React.JSX.Element;
    renderPageFirst(current: number): React.JSX.Element;
    renderPageLast(current: number, totalPage: number): React.JSX.Element;
    renderPageEllipsis(idx: number): React.JSX.Element;
    renderPageJump(): React.JSX.Element[];
    renderPageDisplay(current: number, totalPage: number): React.JSX.Element;
    renderPageList(current: number, totalPage: number): React.JSX.Element;
    renderPageSizeSelector(): React.JSX.Element | null;
    renderPageSizeFilter(): React.JSX.Element;
    renderPageSizeDropdown(): React.JSX.Element;
    render(): React.JSX.Element | null;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    PaginationProps & import('../config-provider/types').ComponentCommonProps,
    Pagination,
    {}
>;
export default _default;
