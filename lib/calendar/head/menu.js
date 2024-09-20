"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_dom_1 = require("react-dom");
var menu_1 = tslib_1.__importDefault(require("../../menu"));
var SelectMenu = /** @class */ (function (_super) {
    tslib_1.__extends(SelectMenu, _super);
    function SelectMenu() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        var menu = (0, react_dom_1.findDOMNode)(this.menuEl);
        var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
        if (targetItem) {
            menu.scrollTop =
                targetItem.offsetTop -
                    Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) *
                        targetItem.clientHeight;
        }
    };
    SelectMenu.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, dataSource = _a.dataSource, onChange = _a.onChange, value = _a.value, className = _a.className, others = tslib_1.__rest(_a, ["prefix", "dataSource", "onChange", "value", "className"]);
        return (react_1.default.createElement(menu_1.default, tslib_1.__assign({}, others, { ref: this.saveRef, selectMode: "single", selectedKeys: [String(value)], onSelect: function (selectKeys) { return onChange(Number(selectKeys[0])); }, role: "listbox", className: "".concat(prefix, "calendar-panel-menu ").concat(className) }), dataSource.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (react_1.default.createElement(menu_1.default.Item, { key: value }, label));
        })));
    };
    SelectMenu.isNextMenu = true;
    SelectMenu.propTypes = {
        dataSource: prop_types_1.default.arrayOf(prop_types_1.default.object),
        value: prop_types_1.default.number,
        prefix: prop_types_1.default.string,
        onChange: prop_types_1.default.func,
        children: prop_types_1.default.node,
    };
    return SelectMenu;
}(react_1.Component));
exports.default = SelectMenu;
