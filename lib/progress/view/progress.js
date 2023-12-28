"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var progress_line_1 = require("./progress-line");
var progress_circle_1 = require("./progress-circle");
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
        return shape === 'circle' ? react_1.default.createElement(progress_circle_1.default, tslib_1.__assign({}, others)) : react_1.default.createElement(progress_line_1.default, tslib_1.__assign({}, others, { hasBorder: hasBorder }));
    };
    Progress.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 形态
         */
        shape: prop_types_1.default.oneOf(['circle', 'line']),
        /**
         * 尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        /**
         * 所占百分比
         */
        percent: prop_types_1.default.number,
        /**
         * 进度状态, 显示优先级: color > progressive > state
         */
        state: prop_types_1.default.oneOf(['normal', 'success', 'error']),
        /**
         * 是否为色彩阶段变化模式, 显示优先级: color > progressive > state
         */
        progressive: prop_types_1.default.bool,
        /**
         * 是否添加 Border（只适用于 Line Progress)
         */
        hasBorder: prop_types_1.default.bool,
        /**
         * 文本渲染函数
         * @param {Number} percent 当前的进度信息
         * @param {Object} option 额外的参数
         * @property {Boolean} option.rtl 是否在rtl 模式下渲染
         * @return {ReactNode} 返回文本节点
         */
        textRender: prop_types_1.default.func,
        /**
         * 进度条颜色, 显示优先级: color > progressive > state
         */
        color: prop_types_1.default.string,
        /**
         * 背景色
         */
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
    Progress.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    return Progress;
}(react_1.Component));
exports.default = Progress;
