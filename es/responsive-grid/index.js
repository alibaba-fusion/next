import { __assign, __extends } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Box from '../box';
import { obj, env } from '../util';
import createStyle, { getGridChildProps } from './create-style';
import Cell from './cell';
var ieVersion = env.ieVersion;
var pickOthers = obj.pickOthers, isReactFragmentElement = obj.isReactFragmentElement;
var createChildren = function (children, device, gap) {
    var array = React.Children.toArray(children);
    if (!children) {
        return null;
    }
    return array.map(function (child) {
        if (isReactFragmentElement(child)) {
            return createChildren(child.props.children, device, gap);
        }
        if (React.isValidElement(child) &&
            ['function', 'object'].indexOf(typeof child.type) > -1 &&
            ['form_item', 'responsive_grid_cell'].indexOf(child.type._typeMark) > -1) {
            return React.cloneElement(child, {
                style: __assign(__assign({}, getGridChildProps(child.props, device, gap)), (child.props.style || {})),
            });
        }
        return child;
    });
};
var getStyle = function (style, props) {
    if (style === void 0) { style = {}; }
    return __assign(__assign({}, createStyle(__assign({ display: 'grid' }, props))), style);
};
/**
 * ResponsiveGrid
 */
var ResponsiveGrid = /** @class */ (function (_super) {
    __extends(ResponsiveGrid, _super);
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
        var cls = classNames((_a = {},
            _a["".concat(prefix, "responsive-grid")] = true,
            _a["".concat(prefix, "responsive-grid-ie")] = ieVersion,
            _a), className);
        return ieVersion ? (React.createElement(Box, __assign({}, this.props, { direction: "row", wrap: true, spacing: gap, children: createChildren(children, device, gap) }))) : (React.createElement(View, __assign({ style: styleSheet, className: cls }, others), createChildren(children, device, gap)));
    };
    ResponsiveGrid._typeMark = 'responsive_grid';
    ResponsiveGrid.Cell = Cell;
    ResponsiveGrid.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.any,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        gap: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        component: PropTypes.elementType,
        dense: PropTypes.bool,
        style: PropTypes.object,
    };
    ResponsiveGrid.defaultProps = {
        prefix: 'next-',
        component: 'div',
        device: 'desktop',
        dense: false,
    };
    ResponsiveGrid.displayName = 'ResponsiveGrid';
    return ResponsiveGrid;
}(Component));
ResponsiveGrid.Cell = Cell;
export default ConfigProvider.config(ResponsiveGrid);
