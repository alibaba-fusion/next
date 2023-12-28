import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/* istanbul ignore file */
/**
 * Table.GroupFooter
 * @order 3
 **/
var ListFooter = /** @class */ (function (_super) {
    __extends(ListFooter, _super);
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
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
    };
    ListFooter.defaultProps = {
        cell: function () { return ''; },
    };
    ListFooter._typeMark = 'listFooter';
    return ListFooter;
}(React.Component));
export default ListFooter;
