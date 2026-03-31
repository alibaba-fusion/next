import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
var pickOthers = obj.pickOthers;
/**
 * ResponsiveGrid.Cell
 */
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, component = _a.component, children = _a.children;
        var View = component;
        var others = pickOthers(Object.keys(Cell.propTypes), this.props);
        return React.createElement(View, __assign({}, others), children);
    };
    Cell._typeMark = 'responsive_grid_cell';
    Cell.propTypes = {
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        colSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        rowSpan: PropTypes.number,
        component: PropTypes.elementType,
    };
    Cell.defaultProps = {
        component: 'div',
        device: 'desktop',
    };
    Cell.displayName = 'Cell';
    return Cell;
}(Component));
export default ConfigProvider.config(Cell);
