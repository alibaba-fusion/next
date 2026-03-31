"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var input_1 = tslib_1.__importDefault(require("../../input"));
var TreeNodeInput = /** @class */ (function (_super) {
    tslib_1.__extends(TreeNodeInput, _super);
    function TreeNodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeNodeInput.prototype.componentDidMount = function () {
        var inputWrapperNode = (0, react_dom_1.findDOMNode)(this);
        inputWrapperNode.querySelector('input').focus();
    };
    TreeNodeInput.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, defaultValue = _a.defaultValue, others = tslib_1.__rest(_a, ["prefix", "defaultValue"]);
        return (react_1.default.createElement(input_1.default, tslib_1.__assign({ size: "small", className: "".concat(prefix, "tree-node-input"), defaultValue: defaultValue }, others)));
    };
    TreeNodeInput.propTypes = {
        prefix: prop_types_1.default.string,
    };
    return TreeNodeInput;
}(react_1.Component));
exports.default = TreeNodeInput;
