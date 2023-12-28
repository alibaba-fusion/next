import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from '../expanded/row';
/* eslint-disable react/prefer-stateless-function */
var SelectionRow = /** @class */ (function (_super) {
    __extends(SelectionRow, _super);
    function SelectionRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionRow.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, className = _b.className, record = _b.record, primaryKey = _b.primaryKey;
        var selectedRowKeys = this.context.selectedRowKeys;
        var cls = classnames((_a = {
                selected: selectedRowKeys.indexOf(record[primaryKey]) > -1
            },
            _a[className] = className,
            _a));
        return React.createElement(Row, __assign({}, this.props, { className: cls }));
    };
    SelectionRow.propTypes = __assign({}, Row.propTypes);
    SelectionRow.defaultProps = __assign({}, Row.defaultProps);
    SelectionRow.contextTypes = {
        selectedRowKeys: PropTypes.array,
    };
    return SelectionRow;
}(React.Component));
export default SelectionRow;
