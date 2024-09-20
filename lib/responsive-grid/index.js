"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var box_1 = tslib_1.__importDefault(require("../box"));
var util_1 = require("../util");
var create_style_1 = tslib_1.__importStar(require("./create-style"));
var cell_1 = tslib_1.__importDefault(require("./cell"));
var ieVersion = util_1.env.ieVersion;
var pickOthers = util_1.obj.pickOthers, isReactFragmentElement = util_1.obj.isReactFragmentElement;
var createChildren = function (children, device, gap) {
    var array = react_1.default.Children.toArray(children);
    if (!children) {
        return null;
    }
    return array.map(function (child) {
        if (isReactFragmentElement(child)) {
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
        var _b = this.props, prefix = _b.prefix, style = _b.style, className = _b.className, children = _b.children, device = _b.device, rows = _b.rows, columns = _b.columns, gap = _b.gap, rowSpan = _b.rowSpan, colSpan = _b.colSpan, component = _b.component, dense = _b.dense;
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
        var View = component;
        var others = pickOthers(Object.keys(ResponsiveGrid.propTypes), this.props);
        var styleSheet = getStyle(style, styleProps);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "responsive-grid")] = true,
            _a["".concat(prefix, "responsive-grid-ie")] = ieVersion,
            _a), className);
        return ieVersion ? (react_1.default.createElement(box_1.default, tslib_1.__assign({}, this.props, { direction: "row", wrap: true, spacing: gap, children: createChildren(children, device, gap) }))) : (react_1.default.createElement(View, tslib_1.__assign({ style: styleSheet, className: cls }, others), createChildren(children, device, gap)));
    };
    ResponsiveGrid._typeMark = 'responsive_grid';
    ResponsiveGrid.Cell = cell_1.default;
    ResponsiveGrid.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.any,
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        rows: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        columns: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        gap: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
        component: prop_types_1.default.elementType,
        dense: prop_types_1.default.bool,
        style: prop_types_1.default.object,
    };
    ResponsiveGrid.defaultProps = {
        prefix: 'next-',
        component: 'div',
        device: 'desktop',
        dense: false,
    };
    ResponsiveGrid.displayName = 'ResponsiveGrid';
    return ResponsiveGrid;
}(react_1.Component));
ResponsiveGrid.Cell = cell_1.default;
exports.default = config_provider_1.default.config(ResponsiveGrid);
