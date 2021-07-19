import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import Balloon from '../balloon';

var Tooltip = Balloon.Tooltip;

/**
 * Nav.Item
 * @description 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */

var Item = (_temp = _class = function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Item.prototype.render = function render() {
        var _context = this.context,
            prefix = _context.prefix,
            iconOnly = _context.iconOnly,
            iconOnlyWidth = _context.iconOnlyWidth,
            hasTooltip = _context.hasTooltip;

        var _props = this.props,
            icon = _props.icon,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['icon', 'children']);

        var iconEl = typeof icon === 'string' ? React.createElement(Icon, { className: prefix + 'nav-icon', type: icon }) : icon;

        var title = void 0;

        if (typeof children === 'string') {
            title = children;
        }

        var showChildren = !iconOnly || iconOnly && !iconOnlyWidth;

        var item = React.createElement(
            Menu.Item,
            _extends({ title: title }, others),
            iconEl,
            showChildren && children
        );

        if (iconOnly && hasTooltip && others.parentMode !== 'popup') {
            return React.createElement(
                Tooltip,
                { align: 'r', trigger: item },
                children
            );
        }

        return item;
    };

    return Item;
}(Component), _class.menuChildType = 'item', _class.propTypes = {
    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
     */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * 导航内容
     */
    children: PropTypes.node,
    parentMode: PropTypes.oneOf(['inline', 'popup'])
}, _class.contextTypes = {
    prefix: PropTypes.string,
    iconOnly: PropTypes.bool,
    iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasTooltip: PropTypes.bool
}, _temp);
Item.displayName = 'Item';


export default Item;