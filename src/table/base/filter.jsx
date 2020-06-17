import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Dropdown from '../../dropdown';
import Menu from '../../menu';
import Button from '../../button';
import Icon from '../../icon';
import { KEYCODE } from '../../util';

// 共享状态的组件需要变成非受控组件
class Filter extends React.Component {
    static propTypes = {
        dataIndex: PropTypes.string,
        filters: PropTypes.array,
        filterMode: PropTypes.string,
        filterParams: PropTypes.object,
        filterMenuProps: PropTypes.object,
        filterProps: PropTypes.object,
        locale: PropTypes.object,
        onFilter: PropTypes.func,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        onFilter: () => {},
    };

    constructor(props) {
        super(props);
        const filterParams = props.filterParams || {};
        const filterConfig = filterParams[props.dataIndex] || {};
        this.state = {
            visible: filterConfig.visible || false,
            selectedKeys: filterConfig.selectedKeys || [],
            selectedKeysChangedByInner: true,
        };
        this._selectedKeys = [...this.state.selectedKeys];
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const state = {};
        if (
            nextProps.hasOwnProperty('filterParams') &&
            typeof nextProps.filterParams !== 'undefined'
        ) {
            const dataIndex = nextProps.dataIndex || this.props.dataIndex;
            const filterParams = nextProps.filterParams || {};
            const filterConfig = filterParams[dataIndex] || {};
            let selectedKeys;
            if (prevState.selectedKeysChangedByInner) {
                selectedKeys = prevState.selectedKeys || [];
                state.selectedKeysChangedByInner = false;
            } else {
                selectedKeys = filterConfig.selectedKeys || [];
            }

            state.selectedKeys = selectedKeys;
        }

        return state;
    }

    componentDidUpdate(prevProps, prevState) {
        const { selectedKeys } = prevState;
        this._selectedKeys = [...selectedKeys];
    }

    filterKeydown = e => {
        e.preventDefault();
        e.stopPropagation();

        if (e.keyCode === KEYCODE.ENTER) {
            this.setState({
                visible: !this.state.visible,
            });
        }
    };

    onFilterVisible = visible => {
        this.setState({
            visible,
        });

        if (!visible) {
            const selectedKeys = [...this._selectedKeys];

            this.setState({
                selectedKeysChangedByInner: true,
                selectedKeys,
            });
        }
    };

    onFilterSelect = selectedKeys => {
        this.setState({
            visible: true,
            selectedKeysChangedByInner: true,
            selectedKeys,
        });
    };

    onFilterConfirm = () => {
        const selectedKeys = this.state.selectedKeys;
        const filterParams = {},
            { dataIndex } = this.props;

        filterParams[dataIndex] = {
            visible: false,
            selectedKeys: selectedKeys,
        };
        this._selectedKeys = [...selectedKeys];
        this.setState({
            visible: false,
            selectedKeysChangedByInner: true,
        });
        // 兼容之前的格式
        this.props.onFilter(filterParams);
    };

    onFilterClear = () => {
        const filterParams = {},
            { dataIndex } = this.props;

        filterParams[dataIndex] = {
            visible: false,
            selectedKeys: [],
        };
        this._selectedKeys = [];
        this.setState({
            selectedKeys: [],
            visible: false,
            selectedKeysChangedByInner: true,
        });
        // 兼容之前的格式
        this.props.onFilter(filterParams);
    };

    render() {
        const {
            filters,
            prefix,
            locale,
            className,
            filterMode,
            filterMenuProps,
            filterProps,
            rtl,
        } = this.props;

        const { visible, selectedKeys } = this.state;
        const { subMenuSelectable, ...others } = filterMenuProps;

        function renderMenuItem(item) {
            return <Menu.Item key={item.value}>{item.label}</Menu.Item>;
        }

        function renderSubMenu(parent, children) {
            return (
                <Menu.SubMenu
                    label={parent.label}
                    key={parent.value}
                    selectable={subMenuSelectable}
                >
                    {renderMenuContent(children)}
                </Menu.SubMenu>
            );
        }

        function renderMenuContent(list) {
            return list.map(item => {
                if (item.children) {
                    return renderSubMenu(item, item.children);
                } else {
                    return renderMenuItem(item);
                }
            });
        }

        const content = renderMenuContent(filters),
            footer = (
                <div className={`${prefix}table-filter-footer`}>
                    <Button type="primary" onClick={this.onFilterConfirm}>
                        {locale.ok}
                    </Button>
                    <Button onClick={this.onFilterClear}>{locale.reset}</Button>
                </div>
            );

        const cls = classnames({
            [`${prefix}table-filter`]: true,
            [className]: className,
        });

        return (
            <Dropdown
                trigger={
                    <span
                        role="button"
                        aria-label={locale.filter}
                        onKeyDown={this.filterKeydown}
                        tabIndex="0"
                        className={cls}
                    >
                        <Icon type="filter" size="small" />
                    </span>
                }
                triggerType="click"
                visible={visible}
                autoFocus
                rtl={rtl}
                needAdjust={false}
                onVisibleChange={this.onFilterVisible}
                {...filterProps}
            >
                <Menu
                    footer={footer}
                    rtl={rtl}
                    selectedKeys={selectedKeys}
                    selectMode={filterMode}
                    onSelect={this.onFilterSelect}
                    {...others}
                >
                    {content}
                </Menu>
            </Dropdown>
        );
    }
}

export default polyfill(Filter);
