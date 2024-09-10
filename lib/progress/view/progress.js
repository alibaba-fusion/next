"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var progress_line_1 = tslib_1.__importDefault(require("./progress-line"));
var progress_circle_1 = tslib_1.__importDefault(require("./progress-circle"));
/**
 * Progress
 */
var Progress = /** @class */ (function (_super) {
    tslib_1.__extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, shape = _a.shape, hasBorder = _a.hasBorder, others = tslib_1.__rest(_a, ["shape", "hasBorder"]);
        return shape === 'circle' ? (react_1.default.createElement(progress_circle_1.default, tslib_1.__assign({}, others))) : (react_1.default.createElement(progress_line_1.default, tslib_1.__assign({}, others, { hasBorder: hasBorder })));
    };
    Progress.propTypes = {
        prefix: prop_types_1.default.string,
        shape: prop_types_1.default.oneOf(['circle', 'line']),
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        percent: prop_types_1.default.number,
        state: prop_types_1.default.oneOf(['normal', 'success', 'error']),
        progressive: prop_types_1.default.bool,
        hasBorder: prop_types_1.default.bool,
        textRender: prop_types_1.default.func,
        color: prop_types_1.default.string,
        backgroundColor: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
    };
    Progress.defaultProps = {
        prefix: 'next-',
        shape: 'line',
        state: 'normal',
        size: 'medium',
        percent: 0,
        progressive: false,
        hasBorder: false,
        textRender: function (percent) { return "".concat(Math.floor(percent), "%"); },
    };
    Progress.displayName = 'Progress';
    Progress.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    return Progress;
}(react_1.Component));
exports.default = Progress;
