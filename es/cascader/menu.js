import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Menu from '../menu';
import VirtualList from '../virtual-list';

var CascaderMenu = (_temp2 = _class = function (_Component) {
    _inherits(CascaderMenu, _Component);

    function CascaderMenu() {
        var _temp, _this, _ret;

        _classCallCheck(this, CascaderMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveMenuRef = function (ref) {
            _this.menuEl = ref;
        }, _this.saveVirtualRef = function (ref) {
            _this.virtualEl = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    CascaderMenu.prototype.componentDidMount = function componentDidMount() {
        this.scrollToSelectedItem();
    };

    CascaderMenu.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
        var _props = this.props,
            prefix = _props.prefix,
            useVirtual = _props.useVirtual,
            children = _props.children;

        if (!children || children.length === 0) {
            return;
        }
        var selectedIndex = children.findIndex(function (item) {
            return !!item.props.checked || !!item.props.selected || !!item.props.expanded;
        });

        if (selectedIndex === -1) {
            return;
        }

        if (useVirtual) {
            var instance = this.virtualEl.getInstance();
            setTimeout(function () {
                return instance.scrollTo(selectedIndex);
            }, 0);
        } else {
            var itemSelector = '.' + prefix + 'menu-item';
            var menu = findDOMNode(this.menuEl);
            var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
            if (targetItem) {
                menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
            }
        }
    };

    CascaderMenu.prototype.renderMenu = function renderMenu(items, ref, props) {
        var _this2 = this;

        return React.createElement(
            Menu,
            _extends({ ref: ref, role: 'listbox' }, props),
            items.map(function (node) {
                if (React.isValidElement(node) && node.type.menuChildType === 'item') {
                    return React.cloneElement(node, {
                        menu: _this2
                    });
                }

                return node;
            })
        );
    };

    CascaderMenu.prototype.render = function render() {
        var _this3 = this;

        var _props2 = this.props,
            prefix = _props2.prefix,
            useVirtual = _props2.useVirtual,
            className = _props2.className,
            style = _props2.style,
            children = _props2.children,
            others = _objectWithoutProperties(_props2, ['prefix', 'useVirtual', 'className', 'style', 'children']);

        var menuProps = _extends({
            labelToggleChecked: false,
            className: prefix + 'cascader-menu'
        }, others);
        return React.createElement(
            'div',
            {
                ref: this.saveMenuRef,
                className: prefix + 'cascader-menu-wrapper ' + (className ? className : ''),
                style: style
            },
            useVirtual ? React.createElement(
                VirtualList,
                {
                    ref: this.saveVirtualRef,
                    itemsRenderer: function itemsRenderer(items, ref) {
                        return _this3.renderMenu(items, ref, menuProps);
                    }
                },
                children
            ) : this.renderMenu(children, undefined, menuProps)
        );
    };

    return CascaderMenu;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    useVirtual: PropTypes.bool,
    children: PropTypes.node
}, _temp2);
CascaderMenu.displayName = 'CascaderMenu';
export { CascaderMenu as default };