import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Table.GroupHeader
 * @order 2
 **/
var ListHeader = /** @class */ (function (_super) {
    __extends(ListHeader, _super);
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
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        /**
         * 是否在Children上面渲染selection
         */
        hasChildrenSelection: PropTypes.bool,
        /**
         * 是否在GroupHeader上面渲染selection
         */
        hasSelection: PropTypes.bool,
        /**
         * 当 dataSouce 里没有 children 时，是否使用内容作为数据
         */
        useFirstLevelDataWhenNoChildren: PropTypes.bool,
    };
    ListHeader.defaultProps = {
        cell: function () { return ''; },
        hasSelection: true,
        hasChildrenSelection: false,
        useFirstLevelDataWhenNoChildren: false,
    };
    ListHeader._typeMark = 'listHeader';
    return ListHeader;
}(React.Component));
export default ListHeader;
