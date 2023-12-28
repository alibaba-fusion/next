import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Header from './fixed/header';
import StickyHeader from './sticky/header';
import { statics } from './util';
export default function sticky(BaseComponent) {
    /** Table */
    var StickyTable = /** @class */ (function (_super) {
        __extends(StickyTable, _super);
        function StickyTable() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            _this.state = {};
            return _this;
        }
        StickyTable.prototype.getChildContext = function () {
            return {
                Header: this.props.components.Header || Header,
                offsetTop: this.props.offsetTop,
                affixProps: this.props.affixProps,
            };
        };
        StickyTable.prototype.render = function () {
            /* eslint-disable no-unused-vars */
            var _a = this.props, stickyHeader = _a.stickyHeader, offsetTop = _a.offsetTop, affixProps = _a.affixProps, others = __rest(_a, ["stickyHeader", "offsetTop", "affixProps"]);
            var _b = this.props, components = _b.components, maxBodyHeight = _b.maxBodyHeight, fixedHeader = _b.fixedHeader;
            if (stickyHeader) {
                components = __assign({}, components);
                components.Header = StickyHeader;
                fixedHeader = true;
                maxBodyHeight = Math.max(maxBodyHeight, 10000);
            }
            return (React.createElement(BaseComponent, __assign({}, others, { components: components, fixedHeader: fixedHeader, maxBodyHeight: maxBodyHeight })));
        };
        StickyTable.StickyHeader = StickyHeader;
        StickyTable.propTypes = __assign({ 
            /**
             * 表头是否是sticky
             */
            stickyHeader: PropTypes.bool, 
            /**
             * 距离窗口顶部达到指定偏移量后触发
             */
            offsetTop: PropTypes.number, 
            /**
             * affix组件的的属性
             */
            affixProps: PropTypes.object, components: PropTypes.object }, BaseComponent.propTypes);
        StickyTable.defaultProps = __assign({ components: {} }, BaseComponent.defaultProps);
        StickyTable.childContextTypes = {
            Header: PropTypes.any,
            offsetTop: PropTypes.number,
            affixProps: PropTypes.object,
        };
        return StickyTable;
    }(React.Component));
    statics(StickyTable, BaseComponent);
    return StickyTable;
}
