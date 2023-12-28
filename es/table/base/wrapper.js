import { __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        var _a = this.props, colGroup = _a.colGroup, children = _a.children, tableWidth = _a.tableWidth, Tag = _a.component;
        return (React.createElement(Tag, { role: "table", style: { width: tableWidth } },
            colGroup,
            children));
    };
    Wrapper.propTypes = {
        tableWidth: PropTypes.number,
    };
    return Wrapper;
}(Component));
export default Wrapper;
Wrapper.defaultProps = {
    component: 'table',
};
Wrapper.propTypes = {
    children: PropTypes.any,
    prefix: PropTypes.string,
    colGroup: PropTypes.any,
    component: PropTypes.string,
};
