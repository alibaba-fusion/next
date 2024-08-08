import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { type SearchProps } from './types';
import Input from '../input';
import Select, { type AutoCompleteProps } from '../select';
import Button from '../button';
import Icon from '../icon';
import { obj, func, KEYCODE } from '../util';
import zhCN from '../locale/zh-cn';

const Group = Input.Group;
const AutoComplete = Select.AutoComplete;
const { noop } = func;

export interface SearchState {
    value: string | number;
    filterValue: string | undefined;
    ifFocus: boolean;
}

/**
 * Search
 *  输入框部分继承 Select.AutoComplete 的能力，可以直接用 AutoComplete 的 api
 */
class Search extends React.Component<SearchProps, SearchState> {
    static propTypes = {
        prefix: PropTypes.string,

        shape: PropTypes.oneOf(['normal', 'simple']),

        type: PropTypes.oneOf(['primary', 'secondary', 'normal', 'dark']),

        size: PropTypes.oneOf(['large', 'medium']),

        defaultValue: PropTypes.string,

        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        onChange: PropTypes.func,

        onSearch: PropTypes.func,

        defaultFilterValue: PropTypes.string,

        fillProps: PropTypes.string,

        filter: PropTypes.array,

        filterValue: PropTypes.string,

        onFilterChange: PropTypes.func,

        dataSource: PropTypes.array,

        placeholder: PropTypes.string,

        searchText: PropTypes.node,

        style: PropTypes.object,

        className: PropTypes.string,

        filterProps: PropTypes.object,

        buttonProps: PropTypes.object,

        popupContent: PropTypes.node,

        followTrigger: PropTypes.bool,

        visible: PropTypes.bool,

        hasClear: PropTypes.bool,

        hasIcon: PropTypes.bool,

        disabled: PropTypes.bool,
        locale: PropTypes.object,
        rtl: PropTypes.bool,

        icons: PropTypes.object,

        autoHighlightFirstItem: PropTypes.bool,

        onToggleHighlightItem: PropTypes.func,
    };

    static defaultProps = {
        prefix: 'next-',
        shape: 'normal',
        type: 'normal',
        size: 'medium',
        hasIcon: true,
        filter: [],
        locale: zhCN.Search,
        buttonProps: {},
        onChange: noop,
        onSearch: noop,
        onFilterChange: noop,
        onToggleHighlightItem: noop,
        hasClear: false,
        disabled: false,
        icons: {},
        autoHighlightFirstItem: true,
    };

    static displayName = 'Search';

    static getDerivedStateFromProps(nextProps: SearchProps, prevState: SearchState) {
        const nextState: Partial<SearchState> = {};
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            const value = nextProps.value;
            nextState.value = value === undefined || value === null ? '' : nextProps.value;
        }

        if ('filterValue' in nextProps && nextProps.filterValue !== prevState.filterValue) {
            const filterValue = nextProps.filterValue;
            nextState.filterValue = filterValue === undefined ? '' : filterValue;
        }

        if (Object.keys(nextState).length > 0) {
            return nextState;
        }

        return null;
    }

    highlightKey: unknown;
    inputRef: ReturnType<InstanceType<typeof AutoComplete>['getInstance']> | null = null;

    constructor(props: SearchProps) {
        super(props);
        const value = 'value' in props ? props.value : props.defaultValue;
        const filterValue = 'filterValue' in props ? props.filterValue : props.defaultFilterValue;

        this.state = {
            value: typeof value === 'undefined' ? '' : value,
            filterValue,
            ifFocus: false,
        };

        this.highlightKey = null;

        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    onChange: NonNullable<AutoCompleteProps['onChange']> = (value, type, ...args) => {
        if (this.props.disabled) {
            return;
        }

        if (!('value' in this.props)) {
            this.setState({ value });
        }
        this.props.onChange!(value, type, ...args);
        if (type === 'enter') {
            // 先记录，保留原先的执行顺序
            const highlightKey = this.highlightKey;
            // 重置
            this.highlightKey = '';
            // 若有匹配项，执行 onSearch
            if (highlightKey) {
                this.props.onSearch!(value, this.state.filterValue);
            }
        }
    };

    onPressEnter = () => {
        // 有匹配项情况，enter 会触发 onChange，由那里执行 onSearch
        if (this.highlightKey) {
            return;
        }
        this.onSearch();
    };

    onSearch = () => {
        if (this.props.disabled) {
            return;
        }
        this.props.onSearch!(this.state.value as string, this.state.filterValue);
    };

    onFilterChange = (filterValue: string) => {
        if (!('filterValue' in this.props)) {
            this.setState({ filterValue });
        }

        this.props.onFilterChange!(filterValue);
    };

    onToggleHighlightItem: NonNullable<AutoCompleteProps['onToggleHighlightItem']> = (
        highlightKey,
        ...args
    ) => {
        this.highlightKey = highlightKey;

        this.props.onToggleHighlightItem!(highlightKey, ...args);
    };

    onKeyDown = (e: React.KeyboardEvent) => {
        if (this.props.disabled) {
            return;
        }
        if (e.keyCode !== KEYCODE.ENTER) {
            return;
        }
        this.onSearch();
    };

    saveInputRef = (ref: React.ComponentRef<typeof AutoComplete>) => {
        if (ref && ref.getInstance()) {
            this.inputRef = ref.getInstance();
        }
    };

    focus = (start?: number, end?: number, preventScroll = false) => {
        this.inputRef!.focus(start, end, preventScroll);
    };

    handleFocus(...args: [React.FocusEvent<HTMLInputElement>]) {
        this.setState({
            ifFocus: true,
        });
        this.props.onFocus && this.props.onFocus(...args);
    }

    handleBlur(...args: [React.FocusEvent<HTMLInputElement>]) {
        this.setState({
            ifFocus: false,
        });
        this.props.onBlur && this.props.onBlur(...args);
    }

    render() {
        const {
            shape,
            filter,
            hasIcon,
            disabled,
            placeholder,
            type,
            className,
            style,
            size,
            prefix,
            searchText,
            dataSource,
            filterProps,
            buttonProps,
            fillProps,
            popupContent,
            followTrigger,
            hasClear,
            visible,
            locale,
            rtl,
            icons,
            autoHighlightFirstItem,
            ...others
        } = this.props;

        const { ifFocus } = this.state;

        const cls = classNames({
            [`${prefix}search`]: true,
            [`${prefix}search-${shape}`]: true,
            [`${prefix}${type}`]: type,
            [`${prefix}${size}`]: size,
            [`${prefix}disabled`]: !!disabled,
            [`${prefix}search-focus`]: ifFocus,
            [className!]: !!className,
        });

        let searchIcon = null,
            filterSelect = null,
            searchBtn = null,
            iconsSearch = icons!.search;

        if (!isValidElement(iconsSearch) && iconsSearch) {
            iconsSearch = <span>{iconsSearch}</span>;
        }

        if (shape === 'simple') {
            const cls = classNames({
                [`${prefix}search-icon`]: true,
                [buttonProps!.className!]: !!buttonProps!.className,
                [`${prefix}search-symbol-icon`]: !iconsSearch,
            });

            hasIcon &&
                (searchIcon = React.cloneElement(
                    (iconsSearch as React.ReactElement) || <Icon type="search" />,
                    {
                        role: 'button',
                        'aria-disabled': disabled,
                        'aria-label': locale!.buttonText,
                        ...buttonProps,
                        className: cls,
                        onClick: this.onSearch,
                        onKeyDown: this.onKeyDown,
                    }
                ));
        } else {
            const cls = classNames({
                [`${prefix}search-btn`]: true,
                [buttonProps!.className!]: !!buttonProps!.className,
            });
            searchBtn = (
                <Button
                    tabIndex={0}
                    aria-disabled={disabled}
                    aria-label={locale!.buttonText as string}
                    className={cls}
                    disabled={disabled}
                    {...buttonProps}
                    onClick={this.onSearch}
                    onKeyDown={this.onKeyDown}
                >
                    {hasIcon
                        ? iconsSearch || (
                              <Icon type="search" className={`${prefix}search-symbol-icon`} />
                          )
                        : null}
                    {searchText ? (
                        <span className={`${prefix}search-btn-text`}>{searchText}</span>
                    ) : null}
                </Button>
            );
        }

        if (filter!.length > 0) {
            filterSelect = (
                <Select
                    {...filterProps}
                    followTrigger={followTrigger}
                    hasBorder={false}
                    dataSource={filter}
                    size={size}
                    disabled={disabled}
                    value={this.state.filterValue}
                    onChange={this.onFilterChange}
                />
            );
        }

        const _othersAttributes = obj.pickOthers(Search.propTypes, others);
        const othersAttributes: typeof _othersAttributes & { visible?: boolean } =
            _othersAttributes;
        if (visible !== undefined) {
            // 受控属性 visible 不能直接写在组件上
            othersAttributes.visible = Boolean(visible);
        }
        const dataAttr = obj.pickAttrsWith(others, 'data-');

        const left = (
            <Group
                addonBefore={filterSelect}
                className={`${prefix}search-left`}
                addonBeforeClassName={`${prefix}search-left-addon`}
            >
                <AutoComplete
                    aria-label={locale!.buttonText as string}
                    {...othersAttributes}
                    followTrigger={followTrigger}
                    role="searchbox"
                    aria-expanded={undefined}
                    hasClear={hasClear}
                    className={`${prefix}search-input`}
                    size={size}
                    fillProps={fillProps}
                    placeholder={placeholder}
                    dataSource={dataSource}
                    innerAfter={searchIcon}
                    onPressEnter={this.onPressEnter}
                    value={this.state.value}
                    onChange={this.onChange}
                    onToggleHighlightItem={this.onToggleHighlightItem}
                    autoHighlightFirstItem={autoHighlightFirstItem}
                    popupContent={popupContent}
                    disabled={disabled}
                    ref={this.saveInputRef}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </Group>
        );

        return (
            <span className={cls} style={style} {...dataAttr} dir={rtl ? 'rtl' : undefined}>
                {searchBtn ? <Group addonAfter={searchBtn}>{left}</Group> : left}
            </span>
        );
    }
}

export default polyfill(Search);
