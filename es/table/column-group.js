import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Table.ColumnGroup
 * @order 1
 **/
var ColumnGroup = /** @class */ (function (_super) {
    __extends(ColumnGroup, _super);
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
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
    };
    ColumnGroup.childContextTypes = {
        parent: PropTypes.any,
    };
    ColumnGroup.defaultProps = {
        title: 'column-group',
    };
    ColumnGroup._typeMark = 'columnGroup';
    return ColumnGroup;
}(React.Component));
export default ColumnGroup;
