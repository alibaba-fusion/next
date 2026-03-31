import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Input from '../../input';
var TreeNodeInput = /** @class */ (function (_super) {
    __extends(TreeNodeInput, _super);
    function TreeNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeNodeInput.prototype.componentDidMount = function () {
        var inputWrapperNode = findDOMNode(this);
        inputWrapperNode.querySelector('input').focus();
    };
    TreeNodeInput.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, defaultValue = _a.defaultValue, others = __rest(_a, ["prefix", "defaultValue"]);
        return (React.createElement(Input, __assign({ size: "small", className: "".concat(prefix, "tree-node-input"), defaultValue: defaultValue }, others)));
    };
    TreeNodeInput.propTypes = {
        prefix: PropTypes.string,
    };
    return TreeNodeInput;
}(Component));
export default TreeNodeInput;
