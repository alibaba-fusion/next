import { __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var TreeNodeIndent = /** @class */ (function (_super) {
    __extends(TreeNodeIndent, _super);
    function TreeNodeIndent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeNodeIndent.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, level = _b.level, isLastChild = _b.isLastChild, showLine = _b.showLine;
        var indents = [];
        for (var i = 1; i < level; i++) {
            var classNames = cx("".concat(prefix, "tree-node-indent-unit"), (_a = {},
                _a["".concat(prefix, "line")] = !isLastChild[i - 1] && showLine,
                _a));
            indents.push(React.createElement("span", { className: classNames, key: i - 1 }));
        }
        return indents;
    };
    TreeNodeIndent.propTypes = {
        prefix: PropTypes.string,
        level: PropTypes.number,
        isLastChild: PropTypes.arrayOf(PropTypes.bool),
        showLine: PropTypes.bool,
    };
    TreeNodeIndent.defaultProps = {
        isLastChild: [],
    };
    return TreeNodeIndent;
}(Component));
export default TreeNodeIndent;
