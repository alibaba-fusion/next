"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var TreeNodeIndent = /** @class */ (function (_super) {
    tslib_1.__extends(TreeNodeIndent, _super);
    function TreeNodeIndent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeNodeIndent.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, level = _b.level, isLastChild = _b.isLastChild, showLine = _b.showLine;
        var indents = [];
        for (var i = 1; i < level; i++) {
            var classNames = (0, classnames_1.default)("".concat(prefix, "tree-node-indent-unit"), (_a = {},
                _a["".concat(prefix, "line")] = !isLastChild[i - 1] && showLine,
                _a));
            indents.push(react_1.default.createElement("span", { className: classNames, key: i - 1 }));
        }
        return indents;
    };
    TreeNodeIndent.propTypes = {
        prefix: prop_types_1.default.string,
        level: prop_types_1.default.number,
        isLastChild: prop_types_1.default.arrayOf(prop_types_1.default.bool),
        showLine: prop_types_1.default.bool,
    };
    TreeNodeIndent.defaultProps = {
        isLastChild: [],
    };
    return TreeNodeIndent;
}(react_1.Component));
exports.default = TreeNodeIndent;
