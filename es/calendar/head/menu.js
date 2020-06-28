import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

/* istanbul ignore file */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Menu from '../../menu';

var SelectMenu = (_temp2 = _class = function (_Component) {
    _inherits(SelectMenu, _Component);

    function SelectMenu() {
        var _temp, _this, _ret;

        _classCallCheck(this, SelectMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveRef = function (ref) {
            _this.menuEl = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SelectMenu.prototype.componentDidMount = function componentDidMount() {
        this.scrollToSelectedItem();
    };

    SelectMenu.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
        var _props = this.props,
            prefix = _props.prefix,
            dataSource = _props.dataSource,
            value = _props.value;


        var selectedIndex = dataSource.findIndex(function (item) {
            return item.value === value;
        });

        if (selectedIndex === -1) {
            return;
        }

        var itemSelector = '.' + prefix + 'menu-item';
        var menu = findDOMNode(this.menuEl);
        var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
        if (targetItem) {
            menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
        }
    };

    SelectMenu.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            dataSource = _props2.dataSource,
            onChange = _props2.onChange,
            value = _props2.value,
            className = _props2.className,
            others = _objectWithoutProperties(_props2, ['prefix', 'dataSource', 'onChange', 'value', 'className']);

        return React.createElement(
            Menu,
            _extends({}, others, {
                ref: this.saveRef,
                selectMode: 'single',
                selectedKeys: [String(value)],
                onSelect: function onSelect(selectKeys) {
                    return onChange(Number(selectKeys[0]));
                },
                role: 'listbox',
                className: prefix + 'calendar-panel-menu ' + className
            }),
            dataSource.map(function (_ref) {
                var label = _ref.label,
                    value = _ref.value;
                return React.createElement(
                    Menu.Item,
                    { key: value },
                    label
                );
            })
        );
    };

    return SelectMenu;
}(Component), _class.isNextMenu = true, _class.propTypes = {
    dataSource: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.number,
    prefix: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node
}, _temp2);
SelectMenu.displayName = 'SelectMenu';
export { SelectMenu as default };