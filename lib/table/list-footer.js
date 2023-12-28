"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/* istanbul ignore file */
/**
 * Table.GroupFooter
 * @order 3
 **/
var ListFooter = /** @class */ (function (_super) {
    tslib_1.__extends(ListFooter, _super);
    function ListFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListFooter.prototype.render = function () {
        return null;
    };
    ListFooter.propTypes = {
        /**
         * 行渲染的逻辑
         */
        cell: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
    };
    ListFooter.defaultProps = {
        cell: function () { return ''; },
    };
    ListFooter._typeMark = 'listFooter';
    return ListFooter;
}(react_1.default.Component));
exports.default = ListFooter;
