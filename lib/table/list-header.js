"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/**
 * Table.GroupHeader
 * @order 2
 **/
var ListHeader = /** @class */ (function (_super) {
    tslib_1.__extends(ListHeader, _super);
    function ListHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListHeader.prototype.render = function () {
        return null;
    };
    ListHeader.propTypes = {
        /**
         * 行渲染的逻辑
         */
        cell: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.node, prop_types_1.default.func]),
        /**
         * 是否在Children上面渲染selection
         */
        hasChildrenSelection: prop_types_1.default.bool,
        /**
         * 是否在GroupHeader上面渲染selection
         */
        hasSelection: prop_types_1.default.bool,
        /**
         * 当 dataSouce 里没有 children 时，是否使用内容作为数据
         */
        useFirstLevelDataWhenNoChildren: prop_types_1.default.bool,
    };
    ListHeader.defaultProps = {
        cell: function () { return ''; },
        hasSelection: true,
        hasChildrenSelection: false,
        useFirstLevelDataWhenNoChildren: false,
    };
    ListHeader._typeMark = 'listHeader';
    return ListHeader;
}(react_1.default.Component));
exports.default = ListHeader;
