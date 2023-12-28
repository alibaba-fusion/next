import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Row from '../base/row';
var LockRow = /** @class */ (function (_super) {
    __extends(LockRow, _super);
    function LockRow() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onMouseEnter = function (record, index, e) {
            var onRowMouseEnter = _this.context.onRowMouseEnter;
            var onMouseEnter = _this.props.onMouseEnter;
            onRowMouseEnter && onRowMouseEnter(record, index, e);
            onMouseEnter(record, index, e);
        };
        _this.onMouseLeave = function (record, index, e) {
            var onRowMouseLeave = _this.context.onRowMouseLeave;
            var onMouseLeave = _this.props.onMouseLeave;
            onRowMouseLeave && onRowMouseLeave(record, index, e);
            onMouseLeave(record, index, e);
        };
        return _this;
    }
    LockRow.prototype.render = function () {
        /* eslint-disable no-unused-vars*/
        return React.createElement(Row, __assign({}, this.props, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }));
    };
    LockRow.propTypes = __assign({}, Row.propTypes);
    LockRow.contextTypes = {
        onRowMouseEnter: PropTypes.func,
        onRowMouseLeave: PropTypes.func,
    };
    LockRow.defaultProps = __assign({}, Row.defaultProps);
    return LockRow;
}(React.Component));
export default LockRow;
