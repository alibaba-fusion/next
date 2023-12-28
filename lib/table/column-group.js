"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/**
 * Table.ColumnGroup
 * @order 1
 **/
var ColumnGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnGroup, _super);
    function ColumnGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnGroup.prototype.getChildContext = function () {
        return {
            parent: this,
        };
    };
    ColumnGroup.prototype.render = function () {
        return null;
    };
    ColumnGroup.propTypes = {
        /**
         * 表头显示的内容
         */
        title: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
    };
    ColumnGroup.childContextTypes = {
        parent: prop_types_1.default.any,
    };
    ColumnGroup.defaultProps = {
        title: 'column-group',
    };
    ColumnGroup._typeMark = 'columnGroup';
    return ColumnGroup;
}(react_1.default.Component));
exports.default = ColumnGroup;
