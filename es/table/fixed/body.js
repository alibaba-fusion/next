import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';
/* eslint-disable react/prefer-stateless-function */
var FixedBody = /** @class */ (function (_super) {
    __extends(FixedBody, _super);
    function FixedBody() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onBodyScroll = function (event) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;
            // sync scroll left to header
            onFixedScrollSync && onFixedScrollSync(event);
            // sync scroll top/left to lock columns
            if ('onLockScroll' in _this.props && typeof _this.props.onLockScroll === 'function') {
                _this.props.onLockScroll(event);
            }
        };
        return _this;
    }
    FixedBody.prototype.componentDidMount = function () {
        var getNode = this.context.getNode;
        getNode && getNode('body', findDOMNode(this));
    };
    FixedBody.prototype.render = function () {
        /*eslint-disable no-unused-vars */
        var _a = this.props, className = _a.className, colGroup = _a.colGroup, onLockScroll = _a.onLockScroll, tableWidth = _a.tableWidth, others = __rest(_a, ["className", "colGroup", "onLockScroll", "tableWidth"]);
        var _b = this.context, maxBodyHeight = _b.maxBodyHeight, fixedHeader = _b.fixedHeader;
        var style = {};
        if (fixedHeader) {
            style.maxHeight = maxBodyHeight;
            style.position = 'relative';
        }
        return (React.createElement("div", { style: style, className: className, onScroll: this.onBodyScroll },
            React.createElement("table", { style: { width: tableWidth } },
                colGroup,
                React.createElement(BodyComponent, __assign({}, others, { colGroup: colGroup })))));
    };
    FixedBody.propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        onLockScroll: PropTypes.func,
        tableWidth: PropTypes.number,
    };
    FixedBody.contextTypes = {
        fixedHeader: PropTypes.bool,
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onFixedScrollSync: PropTypes.func,
        getNode: PropTypes.func,
    };
    return FixedBody;
}(React.Component));
export default FixedBody;
