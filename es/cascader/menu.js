import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Menu from '../menu';

var CascaderMenu = (_temp = _class = function (_Component) {
    _inherits(CascaderMenu, _Component);

    function CascaderMenu() {
        _classCallCheck(this, CascaderMenu);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CascaderMenu.prototype.componentDidMount = function componentDidMount() {
        var prefix = this.props.prefix;

        var itemSelector = '.' + prefix + 'menu-item';
        var menu = findDOMNode(this.refs.menu);
        var targetItem = menu.querySelector(itemSelector + '.' + prefix + 'expanded, ' + itemSelector + '.' + prefix + 'selected');
        if (targetItem) {
            menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
        }
    };

    CascaderMenu.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'children']);

        var newClassName = cx((_cx = {}, _cx[prefix + 'cascader-menu'] = true, _cx[className] = !!className, _cx));

        return React.createElement(
            Menu,
            _extends({ labelToggleChecked: false, className: newClassName, ref: 'menu', role: 'listbox' }, others),
            children
        );
    };

    return CascaderMenu;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}, _temp);
CascaderMenu.displayName = 'CascaderMenu';
export { CascaderMenu as default };