import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import HeaderComponent from '../base/header';
/* eslint-disable react/prefer-stateless-function */
var FixedHeader = /** @class */ (function (_super) {
    __extends(FixedHeader, _super);
    function FixedHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedHeader.prototype.componentDidMount = function () {
        this.context.getNode('header', findDOMNode(this));
    };
    // 这里的 style={{overflow: 'unset'}} 可以删掉，只是为了解决用户js升级但是样式没升级的情况
    // 这里的 style={{position: 'absolute', right: 0}} 也可以删掉，是为了兼容用户js升级但是样式没升级的情况
    FixedHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, colGroup = _a.colGroup, tableWidth = _a.tableWidth, others = __rest(_a, ["prefix", "className", "colGroup", "tableWidth"]);
        var _b = this.context, onFixedScrollSync = _b.onFixedScrollSync, lockType = _b.lockType;
        return (React.createElement("div", { className: className, onScroll: onFixedScrollSync },
            React.createElement("div", { className: "".concat(prefix, "table-header-inner"), style: { overflow: 'unset' } },
                React.createElement("table", { style: { width: tableWidth } },
                    colGroup,
                    React.createElement(HeaderComponent, __assign({}, others, { prefix: prefix })))),
            !lockType && (React.createElement("div", { className: "".concat(prefix, "table-header-fixer"), style: { position: 'absolute', right: 0 } }))));
    };
    FixedHeader.propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        className: PropTypes.string,
        colGroup: PropTypes.any,
        tableWidth: PropTypes.number,
    };
    FixedHeader.contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
        lockType: PropTypes.oneOf(['left', 'right']),
    };
    return FixedHeader;
}(React.Component));
export default FixedHeader;
