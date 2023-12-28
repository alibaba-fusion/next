import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from '../selection/row';
/* eslint-disable react/prefer-stateless-function */
var TreeRow = /** @class */ (function (_super) {
    __extends(TreeRow, _super);
    function TreeRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, className = _b.className, record = _b.record, primaryKey = _b.primaryKey, prefix = _b.prefix, others = __rest(_b, ["className", "record", "primaryKey", "prefix"]);
        var _c = this.context, treeStatus = _c.treeStatus, openRowKeys = _c.openRowKeys;
        var cls = classnames((_a = {
                hidden: !(treeStatus.indexOf(record[primaryKey]) > -1) && record.__level !== 0
            },
            _a["".concat(prefix, "table-row-level-").concat(record.__level)] = true,
            _a.opened = openRowKeys.indexOf(record[primaryKey]) > -1,
            _a[className] = className,
            _a));
        return React.createElement(Row, __assign({}, others, { record: record, className: cls, primaryKey: primaryKey, prefix: prefix }));
    };
    TreeRow.propTypes = __assign({}, Row.propTypes);
    TreeRow.defaultProps = __assign({}, Row.defaultProps);
    TreeRow.contextTypes = {
        treeStatus: PropTypes.array,
        openRowKeys: PropTypes.array,
    };
    return TreeRow;
}(React.Component));
export default TreeRow;
