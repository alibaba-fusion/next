import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import { func } from '../util';

/** Collapse.Panel */
var Panel = (_temp = _class = function (_React$Component) {
    _inherits(Panel, _React$Component);

    function Panel() {
        _classCallCheck(this, Panel);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    //

    Panel.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            title = _props.title,
            children = _props.children,
            className = _props.className,
            isExpanded = _props.isExpanded,
            disabled = _props.disabled,
            style = _props.style,
            prefix = _props.prefix,
            onClick = _props.onClick,
            others = _objectWithoutProperties(_props, ['title', 'children', 'className', 'isExpanded', 'disabled', 'style', 'prefix', 'onClick']);

        var cls = classNames((_classNames = {}, _classNames[prefix + 'collapse-panel'] = true, _classNames[prefix + 'collapse-panel-expanded'] = isExpanded, _classNames[prefix + 'collapse-panel-disabled'] = disabled, _classNames[className] = className, _classNames));

        return React.createElement(
            'div',
            _extends({ className: cls, style: style }, others),
            React.createElement(
                'div',
                { className: prefix + 'collapse-panel-title', onClick: onClick },
                React.createElement(Icon, { type: 'arrow-up', className: prefix + 'collapse-panel-icon' }),
                title
            ),
            React.createElement(
                'div',
                { className: prefix + 'collapse-panel-content' },
                children
            )
        );
    };

    return Panel;
}(React.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes.string,
    /**
     * 子组件接受行内样式
     */
    style: PropTypes.object,
    children: PropTypes.any,
    isExpanded: PropTypes.bool,
    /**
     * 是否禁止用户操作
     */
    disabled: PropTypes.bool,
    /**
     * 标题
     */
    title: PropTypes.node,
    /**
     * 扩展class
     */
    className: PropTypes.string,
    onClick: PropTypes.func
}, _class.defaultProps = {
    prefix: 'next-',
    isExpanded: false,
    onClick: func.noop
}, _class.isNextPanel = true, _temp);
Panel.displayName = 'Panel';


export default ConfigProvider.config(Panel);