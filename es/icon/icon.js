import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
/**
 * Icon
 */
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a;
        /* eslint-disable no-unused-vars*/
        var _b = this.props, prefix = _b.prefix, type = _b.type, size = _b.size, className = _b.className, rtl = _b.rtl, style = _b.style, children = _b.children;
        var others = obj.pickOthers(Object.assign({}, Icon.propTypes), this.props);
        var classes = cx((_a = {},
            _a["".concat(prefix, "icon")] = true,
            _a["".concat(prefix, "icon-").concat(type)] = !!type,
            _a["".concat(prefix).concat(size)] = !!size && typeof size === 'string',
            _a[className] = !!className,
            _a));
        if (rtl &&
            [
                'arrow-left',
                'arrow-right',
                'arrow-double-left',
                'arrow-double-right',
                'switch',
                'sorting',
                'descending',
                'ascending',
            ].indexOf(type) !== -1) {
            others.dir = 'rtl';
        }
        var sizeStyle = typeof size === 'number'
            ? {
                width: size,
                height: size,
                lineHeight: "".concat(size, "px"),
                fontSize: size,
            }
            : {};
        return (React.createElement("i", __assign({}, others, { style: __assign(__assign({}, sizeStyle), style), className: classes }), children));
    };
    Icon.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { 
        /**
         * 指定显示哪种图标
         */
        type: PropTypes.string, children: PropTypes.node, 
        /**
         * 指定图标大小
         * <br/>**可选值**<br/> xxs, xs, small, medium, large, xl, xxl, xxxl, inherit
         */
        size: PropTypes.oneOfType([
            PropTypes.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit']),
            PropTypes.number,
        ]), className: PropTypes.string, style: PropTypes.object });
    Icon.defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };
    Icon._typeMark = 'icon';
    return Icon;
}(Component));
export default Icon;
