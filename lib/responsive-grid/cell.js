"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var pickOthers = util_1.obj.pickOthers;
/**
 * ResponsiveGrid.Cell
 */
var Cell = /** @class */ (function (_super) {
    tslib_1.__extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, component = _a.component, children = _a.children;
        var View = component;
        var others = pickOthers(Object.keys(Cell.propTypes), this.props);
        return react_1.default.createElement(View, tslib_1.__assign({}, others), children);
    };
    Cell._typeMark = 'responsive_grid_cell';
    Cell.propTypes = {
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        colSpan: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.object]),
        rowSpan: prop_types_1.default.number,
        component: prop_types_1.default.elementType,
    };
    Cell.defaultProps = {
        component: 'div',
        device: 'desktop',
    };
    Cell.displayName = 'Cell';
    return Cell;
}(react_1.Component));
exports.default = config_provider_1.default.config(Cell);
