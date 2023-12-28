"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
var box_1 = require("../box");
var util_1 = require("../util");
var create_style_1 = require("./create-style");
var cell_1 = require("./cell");
var ieVersion = util_1.env.ieVersion;
var pickOthers = util_1.obj.pickOthers, isReactFragment = util_1.obj.isReactFragment;
var createChildren = function (children, device, gap) {
    var array = react_1.default.Children.toArray(children);
    if (!children) {
        return null;
    }
    return array.map(function (child) {
        if (isReactFragment(child)) {
            return createChildren(child.props.children, device, gap);
        }
        if (react_1.default.isValidElement(child) &&
            ['function', 'object'].indexOf(typeof child.type) > -1 &&
            ['form_item', 'responsive_grid_cell'].indexOf(child.type._typeMark) > -1) {
            return react_1.default.cloneElement(child, {
                style: tslib_1.__assign(tslib_1.__assign({}, (0, create_style_1.getGridChildProps)(child.props, device, gap)), (child.props.style || {})),
            });
        }
        return child;
    });
};
var getStyle = function (style, props) {
    if (style === void 0) { style = {}; }
    return tslib_1.__assign(tslib_1.__assign({}, (0, create_style_1.default)(tslib_1.__assign({ display: 'grid' }, props))), style);
};
/**
 * ResponsiveGrid
 */
var ResponsiveGrid = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveGrid, _super);
    function ResponsiveGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveGrid.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, View = _b.component, style = _b.style, className = _b.className, children = _b.children, device = _b.device, rows = _b.rows, columns = _b.columns, gap = _b.gap, rowSpan = _b.rowSpan, colSpan = _b.colSpan, component = _b.component, dense = _b.dense;
        var styleProps = {
            rows: rows,
            columns: columns,
            gap: gap,
            device: device,
            rowSpan: rowSpan,
            colSpan: colSpan,
            component: component,
            dense: dense,
        };
        var others = pickOthers(Object.keys(ResponsiveGrid.propTypes), this.props);
        var styleSheet = getStyle(style, styleProps);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "responsive-grid")] = true,
            _a["".concat(prefix, "responsive-grid-ie")] = ieVersion,
            _a), className);
        return ieVersion ? (react_1.default.createElement(box_1.default, tslib_1.__assign({}, this.props, { direction: "row", wrap: true, spacing: gap, children: createChildren(children, device, gap) }))) : (react_1.default.createElement(View, tslib_1.__assign({ style: styleSheet, className: cls }, others), createChildren(children, device, gap)));
    };
    ResponsiveGrid._typeMark = 'responsive_grid';
    ResponsiveGrid.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.any,
        /**
         * 设备，用来做自适应，默认为 PC
         * @enumdesc 手机, 平板, PC
         */
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        rows: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 分为几列， 默认是 12 列
         */
        columns: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 每个 cell 之间的间距， [bottom&top, right&left]
         */
        gap: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        /**
         * 是否开启紧密模式，开启后尽可能能紧密填满，尽量不出现空格
         */
        dense: prop_types_1.default.bool,
        style: prop_types_1.default.object,
    };
    ResponsiveGrid.defaultProps = {
        prefix: 'next-',
        component: 'div',
        device: 'desktop',
        dense: false,
    };
    return ResponsiveGrid;
}(react_1.Component));
ResponsiveGrid.Cell = cell_1.default;
exports.default = config_provider_1.default.config(ResponsiveGrid);
