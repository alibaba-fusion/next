"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var header_1 = require("./fixed/header");
var header_2 = require("./sticky/header");
var util_1 = require("./util");
function sticky(BaseComponent) {
    /** Table */
    var StickyTable = /** @class */ (function (_super) {
        tslib_1.__extends(StickyTable, _super);
        function StickyTable() {
            var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
            _this.state = {};
            return _this;
        }
        StickyTable.prototype.getChildContext = function () {
            return {
                Header: this.props.components.Header || header_1.default,
                offsetTop: this.props.offsetTop,
                affixProps: this.props.affixProps,
            };
        };
        StickyTable.prototype.render = function () {
            /* eslint-disable no-unused-vars */
            var _a = this.props, stickyHeader = _a.stickyHeader, offsetTop = _a.offsetTop, affixProps = _a.affixProps, others = tslib_1.__rest(_a, ["stickyHeader", "offsetTop", "affixProps"]);
            var _b = this.props, components = _b.components, maxBodyHeight = _b.maxBodyHeight, fixedHeader = _b.fixedHeader;
            if (stickyHeader) {
                components = tslib_1.__assign({}, components);
                components.Header = header_2.default;
                fixedHeader = true;
                maxBodyHeight = Math.max(maxBodyHeight, 10000);
            }
            return (react_1.default.createElement(BaseComponent, tslib_1.__assign({}, others, { components: components, fixedHeader: fixedHeader, maxBodyHeight: maxBodyHeight })));
        };
        StickyTable.StickyHeader = header_2.default;
        StickyTable.propTypes = tslib_1.__assign({ 
            /**
             * 表头是否是sticky
             */
            stickyHeader: prop_types_1.default.bool, 
            /**
             * 距离窗口顶部达到指定偏移量后触发
             */
            offsetTop: prop_types_1.default.number, 
            /**
             * affix组件的的属性
             */
            affixProps: prop_types_1.default.object, components: prop_types_1.default.object }, BaseComponent.propTypes);
        StickyTable.defaultProps = tslib_1.__assign({ components: {} }, BaseComponent.defaultProps);
        StickyTable.childContextTypes = {
            Header: prop_types_1.default.any,
            offsetTop: prop_types_1.default.number,
            affixProps: prop_types_1.default.object,
        };
        return StickyTable;
    }(react_1.default.Component));
    (0, util_1.statics)(StickyTable, BaseComponent);
    return StickyTable;
}
exports.default = sticky;
