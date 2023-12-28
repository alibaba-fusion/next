import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';
/* eslint-disable react/prefer-stateless-function */
var VirtualBody = /** @class */ (function (_super) {
    __extends(VirtualBody, _super);
    function VirtualBody() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.tableRef = function (table) {
            _this.tableNode = table;
        };
        _this.virtualScrollRef = function (virtualScroll) {
            _this.virtualScrollNode = virtualScroll;
        };
        _this.onScroll = function (current) {
            // for fixed
            _this.context.onFixedScrollSync(current);
            // for lock
            _this.context.onLockBodyScroll(current);
            // for virtual
            _this.context.onVirtualScroll();
        };
        return _this;
    }
    VirtualBody.prototype.componentDidMount = function () {
        var bodyNode = findDOMNode(this);
        // // for fixed
        this.context.getNode('body', bodyNode);
        // for virtual
        this.context.getBodyNode(bodyNode, this.context.lockType);
        // for lock
        this.context.getLockNode('body', bodyNode, this.context.lockType);
    };
    VirtualBody.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, colGroup = _a.colGroup, tableWidth = _a.tableWidth, others = __rest(_a, ["prefix", "className", "colGroup", "tableWidth"]);
        var _b = this.context, maxBodyHeight = _b.maxBodyHeight, bodyHeight = _b.bodyHeight, innerTop = _b.innerTop;
        var style = {
            width: tableWidth,
        };
        var wrapperStyle = {
            position: 'relative',
        };
        // todo 2.0 ，这里最好自己画滚动条
        if (bodyHeight > maxBodyHeight) {
            wrapperStyle.height = bodyHeight;
        }
        return (React.createElement("div", { style: { maxHeight: maxBodyHeight }, className: className, onScroll: this.onScroll },
            React.createElement("div", { style: wrapperStyle, ref: this.virtualScrollRef },
                React.createElement("div", { style: {
                        position: 'relative',
                        transform: "translateY(".concat(innerTop, "px)"),
                        willChange: 'transform',
                    } },
                    React.createElement("table", { ref: this.tableRef, style: style },
                        colGroup,
                        React.createElement(BodyComponent, __assign({}, others, { prefix: prefix })))))));
    };
    VirtualBody.propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        tableWidth: PropTypes.number,
    };
    VirtualBody.contextTypes = {
        maxBodyHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onBodyScroll: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
        onVirtualScroll: PropTypes.func,
        onLockBodyScroll: PropTypes.func,
        bodyHeight: PropTypes.number,
        innerTop: PropTypes.number,
        getNode: PropTypes.func,
        getBodyNode: PropTypes.func,
        getLockNode: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };
    return VirtualBody;
}(React.Component));
export default VirtualBody;
