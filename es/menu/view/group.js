import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';

/**
 * Menu.Group
 * @order 5
 */
var Group = (_temp = _class = function (_Component) {
    _inherits(Group, _Component);

    function Group() {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _cx, _cx2;

        var _props = this.props,
            root = _props.root,
            className = _props.className,
            label = _props.label,
            children = _props.children,
            parentMode = _props.parentMode,
            others = _objectWithoutProperties(_props, ['root', 'className', 'label', 'children', 'parentMode']);

        var prefix = root.props.prefix;


        var newClassName = cx((_cx = {}, _cx[prefix + 'menu-group-label'] = true, _cx[className] = !!className, _cx));

        var newChildClassName = cx((_cx2 = {}, _cx2[prefix + 'menu-group-item'] = true, _cx2));

        var newChildren = children.map(function (child) {
            return cloneElement(child, {
                parentMode: parentMode,
                className: newChildClassName
            });
        });

        return [React.createElement(
            Item,
            _extends({
                key: 'menu-group-label',
                className: newClassName,
                replaceClassName: true,
                root: root,
                parentMode: parentMode
            }, others),
            label
        )].concat(newChildren);
    };

    return Group;
}(Component), _class.menuChildType = 'group', _class.propTypes = {
    root: PropTypes.object,
    className: PropTypes.string,
    /**
     * 标签内容
     */
    label: PropTypes.node,
    /**
     * 菜单项
     */
    children: PropTypes.node,
    parentMode: PropTypes.oneOf(['inline', 'popup'])
}, _temp);
Group.displayName = 'Group';
export { Group as default };