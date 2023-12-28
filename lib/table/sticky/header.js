"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var affix_1 = require("../../affix");
/* eslint-disable react/prefer-stateless-function*/
var StickHeader = /** @class */ (function (_super) {
    tslib_1.__extends(StickHeader, _super);
    function StickHeader() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.getAffixRef = function (ref) {
            _this.props.affixRef && _this.props.affixRef(ref);
        };
        return _this;
    }
    StickHeader.prototype.render = function () {
        var _a;
        var prefix = this.props.prefix;
        var _b = this.context, Header = _b.Header, offsetTop = _b.offsetTop, affixProps = _b.affixProps;
        var newAffixProps = affixProps || {};
        var className = newAffixProps.className, others = tslib_1.__rest(newAffixProps, ["className"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "table-affix")] = true,
            _a.className = className,
            _a));
        return (react_1.default.createElement(affix_1.default, tslib_1.__assign({ ref: this.getAffixRef }, others, { className: cls, offsetTop: offsetTop }),
            react_1.default.createElement(Header, tslib_1.__assign({}, this.props))));
    };
    StickHeader.propTypes = {
        prefix: prop_types_1.default.string,
    };
    StickHeader.contextTypes = {
        Header: prop_types_1.default.any,
        offsetTop: prop_types_1.default.number,
        affixProps: prop_types_1.default.object,
    };
    return StickHeader;
}(react_1.default.Component));
exports.default = StickHeader;
