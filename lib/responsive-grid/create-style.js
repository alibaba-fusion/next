"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGridChildProps = exports.filterHelperStyle = exports.filterOuterStyle = exports.filterInnerStyle = exports.getSpacingHelperMargin = exports.getSpacingMargin = exports.getChildMargin = exports.getMargin = void 0;
var tslib_1 = require("tslib");
var util_1 = require("./util");
var util_2 = require("../util");
var ieVersion = util_2.env.ieVersion;
var getPadding = function (padding) {
    if (!Array.isArray(padding)) {
        return {
            padding: padding,
        };
    }
    var attrs = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
    var paddings = {};
    var value;
    attrs.forEach(function (attr, index) {
        switch (padding.length) {
            case 1:
                value = padding[0] || 0;
                break;
            case 2:
                value = padding[index] || padding[index - 2] || 0;
                break;
            case 3:
                value = index === 2 ? padding[2] : padding[index] || padding[index - 2] || 0;
                break;
            case 4:
            default:
                value = padding[index] || 0;
                break;
        }
        paddings[attr] = value;
    });
    return paddings;
};
var getMargin = function (size, _a) {
    var _b = _a === void 0 ? { isNegative: false, half: false } : _a, isNegative = _b.isNegative, half = _b.half;
    if (!size) {
        return {};
    }
    var attrs = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
    var margins = {};
    var param = 1 * (isNegative ? -1 : 1) * (half ? 0.5 : 1);
    var value;
    attrs.forEach(function (attr, index) {
        if (!Array.isArray(size)) {
            value = param * size;
        }
        else {
            switch (size.length) {
                case 1:
                    value = param * (size[0] || 0);
                    break;
                case 2:
                    value = param * (size[index] || size[index - 2] || 0);
                    break;
                case 3:
                    value = param * (index === 2 ? size[2] : size[index] || size[index - 2] || 0);
                    break;
                case 4:
                default:
                    value = param * (size[index] || 0);
                    break;
            }
        }
        margins[attr] = value;
    });
    return margins;
};
exports.getMargin = getMargin;
var getChildMargin = function (spacing) {
    return getMargin(spacing, { isNegative: false, half: true });
};
exports.getChildMargin = getChildMargin;
var getSpacingMargin = function (spacing) {
    return getMargin(spacing, { isNegative: false, half: true });
};
exports.getSpacingMargin = getSpacingMargin;
var getSpacingHelperMargin = function (spacing) {
    return getMargin(spacing, { isNegative: true, half: true });
};
exports.getSpacingHelperMargin = getSpacingHelperMargin;
var getFlexs = function (flex) {
    if (!Array.isArray(flex)) {
        return {
            flex: flex,
        };
    }
    var attrs = ['flexGrow', 'flexShrink', 'flexBasis'];
    var flexs = {};
    flex.forEach(function (val, index) {
        flexs[attrs[index]] = val;
    });
    return flexs;
};
var getGridGap = function (gap) {
    if (!Array.isArray(gap)) {
        return {
            gap: gap,
        };
    }
    var attrs = ['rowGap', 'columnGap'];
    var gaps = {};
    gap.forEach(function (val, index) {
        gaps[attrs[index]] = val;
    });
    return gaps;
};
var getTemplateCount = function (counts) {
    if (!isNaN(counts) || typeof counts === 'string') {
        return "repeat(".concat(counts, ", minmax(0,1fr))");
    }
    return counts;
};
var helperProps = ['margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'];
var innerProps = ['flexDirection', 'flexWrap', 'alignContent', 'alignItems', 'display'];
var filterOuterStyle = function (style) {
    var props = {};
    tslib_1.__spreadArray([], tslib_1.__read(innerProps), false).forEach(function (key) {
        props[key] = style[key];
    });
    return (0, util_1.filterUndefinedValue)((0, util_1.stripObject)(style, props));
};
exports.filterOuterStyle = filterOuterStyle;
var filterHelperStyle = function (style) {
    var props = {};
    helperProps.forEach(function (key) {
        props[key] = style[key];
    });
    return (0, util_1.filterUndefinedValue)(tslib_1.__assign(tslib_1.__assign({}, props), { overflow: 'hidden' }));
};
exports.filterHelperStyle = filterHelperStyle;
var filterInnerStyle = function (style) {
    var props = {};
    innerProps.forEach(function (key) {
        props[key] = style[key];
    });
    return (0, util_1.filterUndefinedValue)(props);
};
exports.filterInnerStyle = filterInnerStyle;
var getGridChildProps = function (props, device, gap) {
    var _a = props.row, row = _a === void 0 ? 'initial' : _a, _b = props.col, col = _b === void 0 ? 'initial' : _b, _c = props.rowSpan, rowSpan = _c === void 0 ? 1 : _c, _d = props.colSpan, colSpan = _d === void 0 ? 1 : _d;
    var totalSpan = 12;
    var newColSpan = typeof colSpan === 'object' && 'desktop' in colSpan ? colSpan.desktop : colSpan;
    ['tablet', 'phone'].forEach(function (deviceKey) {
        if (deviceKey === device) {
            if (typeof colSpan === 'object' && device in colSpan) {
                newColSpan = colSpan[device];
            }
            else {
                switch (deviceKey) {
                    case 'tablet':
                        totalSpan = 8;
                        newColSpan = colSpan > 5 ? 8 : colSpan > 2 ? 4 : 2;
                        break;
                    case 'phone':
                        totalSpan = 4;
                        newColSpan = colSpan > 2 ? 4 : 2;
                        break;
                }
            }
        }
    });
    var gapLeft = gap;
    if (Array.isArray(gap)) {
        gapLeft = gap[1];
    }
    var ieChildFix = ieVersion && !(rowSpan === 1 && colSpan === 1)
        ? {
            display: 'inline-block',
            width: gapLeft
                ? "calc(".concat((newColSpan / totalSpan) * 100, "% - ").concat(gapLeft, "px)")
                : "".concat((newColSpan / totalSpan) * 100, "%"),
        }
        : {};
    return (0, util_1.filterUndefinedValue)(tslib_1.__assign({ gridRowStart: row, gridRowEnd: "span ".concat(rowSpan), gridColumnStart: col, gridColumnEnd: "span ".concat(newColSpan) }, ieChildFix));
};
exports.getGridChildProps = getGridChildProps;
var getBoxChildProps = function (props) {
    var alignSelf = props.alignSelf, flex = props.flex;
    return (0, util_1.filterUndefinedValue)(tslib_1.__assign({ alignSelf: alignSelf }, getFlexs(flex)));
};
exports.default = (function (_a) {
    var device = _a.device, display = _a.display, gap = _a.gap, direction = _a.direction, dense = _a.dense, rowSpan = _a.rowSpan, colSpan = _a.colSpan, row = _a.row, col = _a.col, rows = _a.rows, columns = _a.columns, justify = _a.justify, align = _a.align, alignSelf = _a.alignSelf, wrap = _a.wrap, flex = _a.flex, padding = _a.padding, margin = _a.margin;
    var style = tslib_1.__assign({}, getPadding(padding));
    var deviceColumns = 'auto';
    switch (device) {
        case 'phone':
            deviceColumns = 4;
            break;
        case 'tablet':
            deviceColumns = 8;
            break;
        case 'desktop':
            deviceColumns = 12;
            break;
        default:
            break;
    }
    var newColumns = !isNaN(columns) || typeof columns === 'string' ? columns : deviceColumns;
    switch (display) {
        case 'grid':
            style = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, getGridGap(gap)), { gridTemplateRows: getTemplateCount(rows), gridTemplateColumns: getTemplateCount(newColumns), gridAutoFlow: "".concat(direction || '').concat(dense && " dense") }), getGridChildProps({
                row: row,
                rowSpan: rowSpan,
                col: col,
                colSpan: colSpan,
            }, device)), style);
            break;
        case 'flex':
            style = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ msFlexDirection: direction, flexDirection: direction, msFlexWrap: wrap ? 'wrap' : 'none', flexWrap: wrap ? 'wrap' : 'nowrap', msFlexPack: justify, justifyContent: justify, msFlexAlign: align, alignItems: align }, getMargin(margin)), getBoxChildProps({
                alignSelf: alignSelf,
                flex: flex,
            })), style);
            break;
        default:
            break;
    }
    return (0, util_1.filterUndefinedValue)(style);
});
