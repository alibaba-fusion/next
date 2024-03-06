import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from '../../checkbox';
import Search from '../../search';
import Menu from '../../menu';
import { func, htmlId } from '../../util';
import TransferItem from './transfer-item';
import VirtualList from '../../virtual-list';

const { bindCtx } = func;

export default class TransferPanel extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        position: PropTypes.oneOf(['left', 'right']),
        mode: PropTypes.oneOf(['normal', 'simple']),
        dataSource: PropTypes.array,
        value: PropTypes.array,
        onChange: PropTypes.func,
        onMove: PropTypes.func,
        onMoveAll: PropTypes.func,
        disabled: PropTypes.bool,
        locale: PropTypes.object,
        title: PropTypes.node,
        showSearch: PropTypes.bool,
        searchProps: PropTypes.object,
        filter: PropTypes.func,
        onSearch: PropTypes.func,
        searchPlaceholder: PropTypes.string,
        notFoundContent: PropTypes.node,
        listClassName: PropTypes.string,
        listStyle: PropTypes.object,
        itemRender: PropTypes.func,
        sortable: PropTypes.bool,
        onSort: PropTypes.func,
        baseId: PropTypes.string,
        customerList: PropTypes.func,
        useVirtual: PropTypes.bool,
        showCheckAll: PropTypes.bool,
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            searchedValue: '',
            dragValue: null,
            dragOverValue: null,
        };
        this.footerId = props.baseId
            ? htmlId.escapeForId(`${props.baseId}-panel-footer-${props.position}`)
            : '';
        this.headerId = props.baseId
            ? htmlId.escapeForId(`${props.baseId}-panel-header-${props.position}`)
            : '';

        bindCtx(this, [
            'handleCheck',
            'handleAllCheck',
            'handleSearch',
            'handleItemDragStart',
            'handleItemDragOver',
            'handleItemDragEnd',
            'handleItemDrop',
            'getListDOM',
        ]);
        this.firstRender = true;
    }

    componentDidMount() {
        this.firstRender = false;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dataSource.length !== this.props.dataSource.length && this.list) {
            if (this.list.scrollTop > 0) {
                this.list.scrollTop = 0;
            }
        }

        this.searched = false;
    }

    getListDOM(ref) {
        this.list = ref;
    }

    getListData(dataSource, disableHighlight) {
        const { prefix, position, mode, value, onMove, disabled, itemRender, sortable } =
            this.props;
        const { dragPosition, dragValue, dragOverValue } = this.state;
        return dataSource.map(item => {
            const others =
                'title' in item
                    ? {
                          title: item.title,
                      }
                    : {};

            return (
                <TransferItem
                    key={item.value}
                    prefix={prefix}
                    mode={mode}
                    checked={value.indexOf(item.value) > -1}
                    disabled={disabled || item.disabled}
                    item={item}
                    onCheck={this.handleCheck}
                    onClick={onMove}
                    needHighlight={!this.firstRender && !this.searched && !disableHighlight}
                    itemRender={itemRender}
                    draggable={sortable}
                    onDragStart={this.handleItemDragStart}
                    onDragOver={this.handleItemDragOver}
                    onDragEnd={this.handleItemDragEnd}
                    onDrop={this.handleItemDrop}
                    dragPosition={dragPosition}
                    dragValue={dragValue}
                    dragOverValue={dragOverValue}
                    panelPosition={position}
                    {...others}
                />
            );
        });
    }

    handleAllCheck(allChecked) {
        const { position, onChange, filter } = this.props;
        const { searchedValue } = this.state;

        let newValue;
        if (allChecked) {
            if (searchedValue) {
                newValue = this.enabledDatasource
                    .filter(item => filter(searchedValue, item))
                    .map(item => item.value);
            } else {
                newValue = this.enabledDatasource.map(item => item.value);
            }
        } else {
            newValue = [];
        }

        onChange && onChange(position, newValue);
    }

    handleCheck(itemValue, checked) {
        const { position, value, onChange } = this.props;

        const newValue = [...value];
        const index = value.indexOf(itemValue);
        if (checked && index === -1) {
            newValue.push(itemValue);
        } else if (!checked && index > -1) {
            newValue.splice(index, 1);
        }

        onChange && onChange(position, newValue);
    }

    handleSearch(searchedValue) {
        this.setState({
            searchedValue,
        });
        this.searched = true;

        const { onSearch, position } = this.props;
        onSearch(searchedValue, position);
    }

    handleItemDragStart(position, value) {
        this.setState({
            dragPosition: position,
            dragValue: value,
        });
    }

    handleItemDragOver(value) {
        this.setState({
            dragOverValue: value,
        });
    }

    handleItemDragEnd() {
        this.setState({
            dragOverValue: null,
        });
    }

    handleItemDrop(...args) {
        this.setState({
            dragOverValue: null,
        });

        this.props.onSort(...args);
    }

    renderHeader() {
        const { title, prefix } = this.props;

        return (
            <div id={this.headerId} className={`${prefix}transfer-panel-header`}>
                {title}
            </div>
        );
    }

    renderSearch() {
        const { prefix, searchPlaceholder, locale, searchProps = {} } = this.props;
        return (
            <Search
                aria-labelledby={this.headerId}
                shape="simple"
                {...searchProps}
                className={`${prefix}transfer-panel-search`}
                placeholder={searchPlaceholder || locale.searchPlaceholder}
                onChange={this.handleSearch}
            />
        );
    }

    renderList(dataSource) {
        const { prefix, listClassName, listStyle, customerList, useVirtual } = this.props;
        const newClassName = cx({
            [`${prefix}transfer-panel-list`]: true,
            [listClassName]: !!listClassName,
        });

        const customerPanel = customerList && customerList(this.props);
        if (customerPanel) {
            return (
                <div className={newClassName} style={listStyle} ref={this.getListDOM}>
                    {customerPanel}
                </div>
            );
        }

        if (!dataSource.length) {
            return (
                <div className={newClassName} style={listStyle}>
                    {this.renderNotFoundContent()}
                </div>
            );
        }

        if (useVirtual) {
            return (
                <div className={newClassName} style={{ position: 'relative', ...listStyle }}>
                    <VirtualList
                        itemsRenderer={(items, ref) => (
                            <Menu style={{ border: 'none' }} ref={ref}>
                                {items}
                            </Menu>
                        )}
                    >
                        {this.getListData(dataSource, true)}
                    </VirtualList>
                </div>
            );
        }

        return (
            <Menu className={newClassName} style={listStyle} ref={this.getListDOM}>
                {this.getListData(dataSource)}
            </Menu>
        );
    }

    renderNotFoundContent() {
        const { prefix, notFoundContent } = this.props;

        return (
            <div className={`${prefix}transfer-panel-not-found-container`}>
                <div className={`${prefix}transfer-panel-not-found`}>{notFoundContent}</div>
            </div>
        );
    }

    renderFooter() {
        const { prefix, position, mode, disabled, locale, showCheckAll } = this.props;
        if (mode === 'simple') {
            const { onMoveAll } = this.props;
            const classNames = cx({
                [`${prefix}transfer-panel-move-all`]: true,
                [`${prefix}disabled`]: disabled,
            });
            return (
                <div className={`${prefix}transfer-panel-footer`}>
                    <a
                        className={classNames}
                        onClick={onMoveAll.bind(this, position === 'left' ? 'right' : 'left')}
                    >
                        {locale.moveAll}
                    </a>
                </div>
            );
        }

        const { value, showSearch, filter, dataSource } = this.props;
        const { searchedValue } = this.state;
        let totalCount = dataSource.length;
        let _dataSource = dataSource;
        const checkedCount = value.length;
        let _checkedCount = checkedCount;
        if (showSearch && searchedValue) {
            _dataSource = dataSource.filter(item => filter(searchedValue, item));
            totalCount = _dataSource.length;
            _checkedCount = _dataSource.filter(item => value.includes(item.value)).length;
        }
        const totalEnabledCount = Math.min(totalCount, this.enabledDatasource.length);
        const checked = checkedCount > 0 && checkedCount >= totalEnabledCount;
        const indeterminate =
            checkedCount > 0 && _checkedCount >= 0 && _checkedCount < totalEnabledCount;
        const items = totalCount > 1 ? locale.items : locale.item;
        const countLabel =
            checkedCount === 0
                ? `${totalCount} ${items}`
                : `${checkedCount}/${totalCount} ${items}`;

        return (
            <div className={`${prefix}transfer-panel-footer`}>
                {showCheckAll && (
                    <Checkbox
                        disabled={disabled}
                        checked={checked}
                        indeterminate={indeterminate}
                        onChange={this.handleAllCheck}
                        aria-labelledby={this.footerId}
                    />
                )}
                <span className={`${prefix}transfer-panel-count`} id={this.footerId}>
                    {countLabel}
                </span>
            </div>
        );
    }

    render() {
        const { prefix, title, showSearch, filter, dataSource } = this.props;
        const { searchedValue } = this.state;
        let _dataSource = this.props.dataSource;
        this.enabledDatasource = dataSource.filter(item => !item.disabled);
        if (showSearch && searchedValue) {
            _dataSource = dataSource.filter(item => filter(searchedValue, item));
        }

        return (
            <div className={`${prefix}transfer-panel`}>
                {title ? this.renderHeader() : null}
                {showSearch ? this.renderSearch() : null}
                {this.renderList(_dataSource)}
                {this.renderFooter()}
            </div>
        );
    }
}
