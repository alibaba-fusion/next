import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Menu from '../../menu';
var SelectMenu = /** @class */ (function (_super) {
    __extends(SelectMenu, _super);
    function SelectMenu() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.saveRef = function (ref) {
            _this.menuEl = ref;
        };
        return _this;
    }
    SelectMenu.prototype.componentDidMount = function () {
        this.scrollToSelectedItem();
    };
    SelectMenu.prototype.scrollToSelectedItem = function () {
        var _a = this.props, prefix = _a.prefix, dataSource = _a.dataSource, value = _a.value;
        var selectedIndex = dataSource.findIndex(function (item) { return item.value === value; });
        if (selectedIndex === -1) {
            return;
        }
        var itemSelector = ".".concat(prefix, "menu-item");
        var menu = findDOMNode(this.menuEl);
        var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
        if (targetItem) {
            menu.scrollTop =
                targetItem.offsetTop -
                    Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) *
                        targetItem.clientHeight;
        }
    };
    SelectMenu.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, dataSource = _a.dataSource, onChange = _a.onChange, value = _a.value, className = _a.className, others = __rest(_a, ["prefix", "dataSource", "onChange", "value", "className"]);
        return (React.createElement(Menu, __assign({}, others, { ref: this.saveRef, selectMode: "single", selectedKeys: [String(value)], onSelect: function (selectKeys) { return onChange(Number(selectKeys[0])); }, role: "listbox", className: "".concat(prefix, "calendar-panel-menu ").concat(className) }), dataSource.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (React.createElement(Menu.Item, { key: value }, label));
        })));
    };
    SelectMenu.isNextMenu = true;
    SelectMenu.propTypes = {
        dataSource: PropTypes.arrayOf(PropTypes.object),
        value: PropTypes.number,
        prefix: PropTypes.string,
        onChange: PropTypes.func,
        children: PropTypes.node,
    };
    return SelectMenu;
}(Component));
export default SelectMenu;
