import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import Loading from '../loading';
import zhCN from '../locale/zh-cn';
import ConfigProvider from '../config-provider';

/**
 * List
 */
var List = (_temp = _class = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    List.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            header = _props.header,
            footer = _props.footer,
            size = _props.size,
            divider = _props.divider,
            className = _props.className,
            children = _props.children,
            rtl = _props.rtl,
            dataSource = _props.dataSource,
            renderItem = _props.renderItem,
            locale = _props.locale,
            loading = _props.loading,
            _props$loadingCompone = _props.loadingComponent,
            LoadingComponent = _props$loadingCompone === undefined ? Loading : _props$loadingCompone,
            emptyContent = _props.emptyContent,
            others = _objectWithoutProperties(_props, ['prefix', 'header', 'footer', 'size', 'divider', 'className', 'children', 'rtl', 'dataSource', 'renderItem', 'locale', 'loading', 'loadingComponent', 'emptyContent']);

        if (rtl) {
            others.dir = 'rtl';
        }

        var dSValid = Array.isArray(dataSource);

        var classes = classNames(prefix + 'list', (_classNames = {}, _classNames[prefix + 'list-' + size] = size, _classNames[prefix + 'list-divider'] = divider, _classNames), className);

        var customContent = dSValid && dataSource.map(function (one, index) {
            return renderItem(one, index);
        });

        var content = React.createElement(
            'div',
            _extends({}, others, { className: classes }),
            header ? React.createElement(
                'div',
                { className: prefix + 'list-header' },
                header
            ) : null,
            !(dSValid && dataSource.length > 0) && !children ? React.createElement(
                'div',
                { className: prefix + 'list-empty' },
                emptyContent || locale.empty
            ) : React.createElement(
                'ul',
                { key: 'list-body', className: prefix + 'list-items' },
                customContent,
                children
            ),
            footer ? React.createElement(
                'div',
                { className: prefix + 'list-footer' },
                footer
            ) : null
        );

        if (loading) {
            var loadingClassName = prefix + 'list-loading';
            return React.createElement(
                LoadingComponent,
                { className: loadingClassName },
                content
            );
        }

        return content;
    };

    return List;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 列表头部
     */
    header: PropTypes.node,
    /**
     * 列表尾部
     */
    footer: PropTypes.node,
    /**
     * 列表尺寸
     */
    size: PropTypes.oneOf(['medium', 'small']),
    /**
     * 是否显示分割线
     */
    divider: PropTypes.bool,
    /**
     * 列表数据源
     */
    dataSource: PropTypes.array,
    /**
     * 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
     * @param {Any} current 当前遍历的项
     * @param {Number} index 当前遍历的项的索引
     */
    renderItem: PropTypes.func,
    /**
     * 是否在加载中
     */
    loading: PropTypes.bool,
    /**
     * 自定义 Loading 组件
     * 请务必传递 props, 使用方式： loadingComponent={props => <Loading {...props}/>}
     * @param {LoadingProps} props 需要透传给组件的参数
     * @return {React.ReactNode} 展示的组件
     */
    loadingComponent: PropTypes.func,
    /**
     * 设置数据为空的时候的表格内容展现
     */
    emptyContent: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.any,
    locale: PropTypes.object
}, _class.defaultProps = {
    rtl: false,
    size: 'medium',
    divider: true,
    prefix: 'next-',
    locale: zhCN.List,
    renderItem: function renderItem(item) {
        return item;
    },
    loading: false
}, _temp);
List.displayName = 'List';


export default ConfigProvider.config(polyfill(List));