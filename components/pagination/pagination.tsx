import React, {
    Component,
    cloneElement,
    type ReactNode,
    type ReactElement,
    type KeyboardEvent,
    type MouseEvent,
} from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import Button, { type ButtonProps } from '../button';
import Input from '../input';
import Select from '../select';
import { KEYCODE, str, obj, type ClassPropsWithDefault } from '../util';
import zhCN from '../locale/zh-cn';
import type { PaginationProps, PaginationState } from './types';

const { Option } = Select;
const noop = () => {};

function getTotalPage(total: number, currentPageSize: number) {
    const totalPage = Math.ceil(total / currentPageSize);
    return totalPage <= 0 ? 1 : totalPage;
}

function correctCurrent(currentPage: number, total: number, currentPageSize: number) {
    const totalPage = getTotalPage(total, currentPageSize);
    return currentPage > totalPage ? totalPage : currentPage;
}

type PaginationPropsWithDefault = ClassPropsWithDefault<
    PaginationProps,
    typeof Pagination.defaultProps
>;

/**
 * Pagination
 */
class Pagination extends Component<PaginationProps, PaginationState> {
    static displayName = 'Pagination';
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['desktop', 'tablet', 'phone']),
        className: PropTypes.string,
        locale: PropTypes.object,
        type: PropTypes.oneOf(['normal', 'simple', 'mini']),
        shape: PropTypes.oneOf(['normal', 'arrow-only', 'arrow-prev-only', 'no-border']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        current: PropTypes.number,
        defaultCurrent: PropTypes.number,
        onChange: PropTypes.func,
        total: PropTypes.number,
        totalRender: PropTypes.func,
        pageShowCount: PropTypes.number,
        pageSize: PropTypes.number,
        pageSizeSelector: PropTypes.oneOf([false, 'filter', 'dropdown']),
        pageSizeList: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    value: PropTypes.number,
                })
            ),
        ]),
        pageNumberRender: PropTypes.func,
        pageSizePosition: PropTypes.oneOf(['start', 'end']),
        useFloatLayout: PropTypes.bool,
        onPageSizeChange: PropTypes.func,
        hideOnlyOnePage: PropTypes.bool,
        showJump: PropTypes.bool,
        link: PropTypes.string,
        popupProps: PropTypes.object,
        selectProps: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        rtl: false,
        locale: zhCN.Pagination,
        type: 'normal',
        shape: 'normal',
        size: 'medium',
        defaultCurrent: 1,
        onChange: noop,
        pageSize: 10,
        pageSizeSelector: false,
        pageSizeList: [5, 10, 20],
        pageSizePosition: 'start',
        onPageSizeChange: noop,
        useFloatLayout: false,
        total: 100,
        pageShowCount: 5,
        hideOnlyOnePage: false,
        showJump: true,
        pageNumberRender: (index: number): ReactNode => index,
    };

    readonly props: PaginationPropsWithDefault;

    constructor(props: PaginationProps) {
        super(props);
        this.state = {
            current: props.defaultCurrent || 1,
            currentPageSize: 0,
            inputValue: '',
        };
    }

    static getDerivedStateFromProps(props: PaginationPropsWithDefault, state: PaginationState) {
        const { current, total, pageSize } = props;
        const st: Partial<PaginationState> = {};
        const newCurrent = correctCurrent(current || state.current, total, pageSize);
        if (state.current !== newCurrent) {
            st.current = newCurrent;
        }
        if (state.currentPageSize !== pageSize) {
            st.currentPageSize = pageSize;
        }

        return st;
    }

    handleJump = (e: KeyboardEvent<Element> | MouseEvent<Element>) => {
        const { total } = this.props;
        const { current, currentPageSize, inputValue } = this.state;
        const totalPage = getTotalPage(total, currentPageSize);
        let value = parseInt(inputValue, 10);

        if (isNaN(value)) {
            value = 0;
        } else if (value < 1) {
            value = 1;
        } else if (value > totalPage) {
            value = totalPage;
        }

        if (value && value !== current) {
            this.onPageItemClick(value, e);
        }

        this.setState({
            inputValue: '',
        });
    };
    onPageItemClick(page: number, e: KeyboardEvent<Element> | MouseEvent<Element>) {
        if (!('current' in this.props)) {
            this.setState({
                current: page,
            });
        }
        this.props.onChange(page, e);
    }

    onInputChange(value: string) {
        this.setState({
            inputValue: value,
        });
    }

    onSelectSize(pageSize: number) {
        const newState: Partial<PaginationState> = {
            currentPageSize: pageSize,
        };

        const totalPage = getTotalPage(this.props.total, pageSize);
        if (this.state.current > totalPage) {
            newState.current = totalPage;
        }

        this.setState(newState as PaginationState);
        this.props.onPageSizeChange(pageSize);
    }

    renderPageTotal() {
        const { prefix, total, totalRender } = this.props;
        const { currentPageSize, current } = this.state;
        const range = [(current - 1) * currentPageSize + 1, current * currentPageSize];

        return <div className={`${prefix}pagination-total`}>{totalRender?.(total, range)}</div>;
    }

    renderPageItem(index: number) {
        const { prefix, size, link, pageNumberRender, total, pageSize, locale } = this.props;
        const { current } = this.state;

        const totalPage = getTotalPage(total, pageSize);
        // @ts-expect-error type error cause by old logic, index should be string
        const isCurrent = parseInt(index, 10) === current;
        const props: ButtonProps = {
            size,
            className: cx({
                [`${prefix}pagination-item`]: true,
                [`${prefix}current`]: isCurrent,
            }),
            onClick: isCurrent ? noop : this.onPageItemClick.bind(this, index),
        };
        if (link) {
            props.component = 'a';
            // @ts-expect-error type error cause by old logic, index should be string
            props.href = link.replace('{page}', index);
        }

        return (
            <Button
                aria-label={str.template(locale.total, {
                    current: index,
                    total: totalPage,
                })}
                {...props}
                key={index}
            >
                {pageNumberRender(index)}
            </Button>
        );
    }

    renderPageFirst(current: number) {
        const { prefix, size, shape, locale } = this.props;

        const isFirst = current <= 1;
        const props = {
            disabled: isFirst,
            size,
            className: cx({
                [`${prefix}pagination-item`]: true,
                [`${prefix}prev`]: true,
            }),
            onClick: this.onPageItemClick.bind(this, current - 1),
        };

        const icon = <Icon type="arrow-left" className={`${prefix}pagination-icon-prev`} />;

        return (
            <Button {...props} aria-label={str.template(locale.labelPrev, { current })}>
                {icon}
                {shape === 'arrow-only' || shape === 'arrow-prev-only' || shape === 'no-border'
                    ? ''
                    : locale.prev}
            </Button>
        );
    }

    renderPageLast(current: number, totalPage: number) {
        const { prefix, size, shape, locale } = this.props;

        const isLast = current >= totalPage;
        const props = {
            disabled: isLast,
            size,
            className: cx({
                [`${prefix}pagination-item`]: true,
                [`${prefix}next`]: true,
            }),
            onClick: this.onPageItemClick.bind(this, current + 1),
        };

        const icon = <Icon type="arrow-right" className={`${prefix}pagination-icon-next`} />;

        return (
            <Button {...props} aria-label={str.template(locale.labelNext, { current })}>
                {shape === 'arrow-only' || shape === 'no-border' ? '' : locale.next}
                {icon}
            </Button>
        );
    }

    renderPageEllipsis(idx: number) {
        const { prefix } = this.props;

        return (
            <Icon
                className={`${prefix}pagination-ellipsis ${prefix}pagination-icon-ellipsis`}
                type="ellipsis"
                key={`ellipsis-${idx}`}
            />
        );
    }

    renderPageJump() {
        const { prefix, size, locale } = this.props;
        const { inputValue } = this.state;

        /* eslint-disable react/jsx-key */
        // old code not have key so that use eslint-disable react/jsx-key to avoid warning
        return [
            <span className={`${prefix}pagination-jump-text`}>{locale.goTo}</span>,
            <Input
                className={`${prefix}pagination-jump-input`}
                type="text"
                aria-label={locale.inputAriaLabel}
                size={size}
                value={inputValue}
                onChange={this.onInputChange.bind(this)}
                onKeyDown={e => {
                    if (e.keyCode === KEYCODE.ENTER) {
                        this.handleJump(e);
                    }
                }}
            />,
            <span className={`${prefix}pagination-jump-text`}>{locale.page}</span>,
            <Button className={`${prefix}pagination-jump-go`} size={size} onClick={this.handleJump}>
                {locale.go}
            </Button>,
        ];
    }

    renderPageDisplay(current: number, totalPage: number) {
        const { prefix, pageNumberRender } = this.props;

        return (
            <span className={`${prefix}pagination-display`}>
                <em>{pageNumberRender(current)}</em>/{pageNumberRender(totalPage)}
            </span>
        );
    }

    renderPageList(current: number, totalPage: number) {
        const { prefix, pageShowCount } = this.props;
        const pages = [];

        if (totalPage <= pageShowCount) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(this.renderPageItem(i));
            }
        } else {
            // 除去第一页，最后一页以及当前页，剩下的页数
            const othersCount = pageShowCount - 3;
            // @ts-expect-error type error case by old logic, othersCount / 2 should be string
            const halfCount = parseInt(othersCount / 2, 10);
            let start, end;

            pages.push(this.renderPageItem(1));

            start = current - halfCount;
            end = current + halfCount;
            if (start <= 1) {
                start = 2;
                end = start + othersCount;
            }
            if (start > 2) {
                pages.push(this.renderPageEllipsis(1));
            }
            if (end >= totalPage - 1) {
                end = totalPage - 1;
                start = totalPage - 1 - othersCount;
            }
            for (let j = start; j <= end; j++) {
                pages.push(this.renderPageItem(j));
            }
            if (end < totalPage - 1) {
                pages.push(this.renderPageEllipsis(2));
            }

            pages.push(this.renderPageItem(totalPage));
        }

        return <div className={`${prefix}pagination-list`}>{pages}</div>;
    }

    renderPageSizeSelector() {
        const { prefix, pageSizeSelector, locale } = this.props;
        const pageSizeSpan = (
            <span className={`${prefix}pagination-size-selector-title`}>{locale.pageSize}</span>
        );

        switch (pageSizeSelector) {
            case 'filter':
                return (
                    <div className={`${prefix}pagination-size-selector`}>
                        {pageSizeSpan}
                        {this.renderPageSizeFilter()}
                    </div>
                );
            case 'dropdown':
                return (
                    <div className={`${prefix}pagination-size-selector`}>
                        {pageSizeSpan}
                        {this.renderPageSizeDropdown()}
                    </div>
                );
            default:
                return null;
        }
    }

    renderPageSizeFilter() {
        const { prefix, size, pageSizeList } = this.props;
        const { currentPageSize } = this.state;

        return (
            <div className={`${prefix}pagination-size-selector-filter`}>
                {pageSizeList.map((item, index: number) => {
                    let label;
                    let pageSize;
                    // @ts-expect-error type error cause by old logic, item may be number
                    if (item.value) {
                        // {label: '', value: 5}
                        // @ts-expect-error type error cause by old logic, item may be number
                        label = item.label;
                        // @ts-expect-error type error cause by old logic, item may be number
                        pageSize = item.value;
                    } else {
                        // number
                        label = pageSize = item;
                    }
                    const classes = cx({
                        [`${prefix}pagination-size-selector-btn`]: true,
                        [`${prefix}current`]: pageSize === currentPageSize,
                    });

                    return (
                        <Button
                            key={index}
                            text
                            size={size}
                            className={classes}
                            onClick={
                                pageSize !== currentPageSize
                                    ? this.onSelectSize.bind(this, pageSize)
                                    : null
                            }
                        >
                            {label}
                        </Button>
                    );
                })}
            </div>
        );
    }

    renderPageSizeDropdown() {
        const { prefix, size, pageSizeList, locale, popupProps, selectProps } = this.props;
        const { currentPageSize } = this.state;

        return (
            <Select
                className={`${prefix}pagination-size-selector-dropdown`}
                popupClassName={`${prefix}pagination-size-selector-popup`}
                popupProps={popupProps}
                aria-label={locale.selectAriaLabel}
                autoWidth={false}
                size={size}
                value={currentPageSize}
                onChange={this.onSelectSize.bind(this)}
                {...selectProps}
            >
                {pageSizeList.map((item, index: number) => {
                    let label;
                    let pageSize;
                    // @ts-expect-error type error cause by old logic, item may be number
                    if (item.value) {
                        // {label: '', value: 5}
                        // @ts-expect-error type error cause by old logic, item may be number
                        label = item.label;
                        // @ts-expect-error type error cause by old logic, item may be number
                        pageSize = item.value;
                    } else {
                        // number
                        label = pageSize = item;
                    }
                    return (
                        <Option key={index} value={pageSize}>
                            {label}
                        </Option>
                    );
                })}
            </Select>
        );
    }

    render() {
        const {
            prefix,
            pure,
            rtl,
            device,
            type: paginationType,
            size,
            shape,
            className,
            total,
            totalRender,
            pageSize,
            pageSizeSelector,
            pageSizeList,
            pageSizePosition,
            useFloatLayout,
            onPageSizeChange,
            hideOnlyOnePage,
            showJump,
            locale,
            current,
            defaultCurrent,
            pageShowCount,
            pageNumberRender,
            link,
            onChange,
            popupProps,
            selectProps,
            ...others
        } = this.props;
        const { current: currentPage, currentPageSize } = this.state;
        const totalPage = getTotalPage(total, currentPageSize);
        const pageFirst = this.renderPageFirst(currentPage);
        const pageLast = this.renderPageLast(currentPage, totalPage);
        const sizeSelector = this.renderPageSizeSelector();
        const isStart = pageSizePosition === 'start';

        let type = paginationType;

        if (device === 'phone' && type === 'normal') {
            type = 'simple';
        }

        const classes = cx({
            [`${prefix}pagination`]: true,
            [`${prefix}${size}`]: size,
            [`${prefix}${type}`]: type,
            [`${prefix}${shape}`]: shape,
            [`${prefix}start`]: !!pageSizeSelector && isStart && useFloatLayout,
            [`${prefix}end`]: !!pageSizeSelector && !isStart && useFloatLayout,
            [`${prefix}hide`]: totalPage <= 1 && hideOnlyOnePage,
            [className!]: !!className,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        const buildComponent = (...coms: (ReactElement | null)[]) => (
            <div className={classes} {...obj.pickOthers(Object.keys(Pagination.propTypes), others)}>
                {isStart && sizeSelector}
                {totalRender ? this.renderPageTotal() : null}
                <div className={`${prefix}pagination-pages`}>
                    {coms.map((com, index) => com && cloneElement(com, { key: index }))}
                </div>
                {!isStart && sizeSelector}
            </div>
        );

        switch (type) {
            case 'mini':
                return buildComponent(pageFirst, pageLast);
            case 'simple': {
                const pageDisplay = this.renderPageDisplay(currentPage, totalPage);
                return buildComponent(pageFirst, pageDisplay, pageLast);
            }
            case 'normal': {
                const pageList = this.renderPageList(currentPage, totalPage);
                const pageDisplay =
                    showJump && total > pageSize * pageShowCount
                        ? this.renderPageDisplay(currentPage, totalPage)
                        : null;
                const pageJump =
                    showJump && total > pageSize * pageShowCount ? this.renderPageJump() : [];
                return buildComponent(pageFirst, pageList, pageLast, pageDisplay, ...pageJump);
            }
            default:
                return null;
        }
    }
}

export default ConfigProvider.config(polyfill(Pagination));
