import { __assign, __extends } from "tslib";
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import createStyle, { getMargin, getChildMargin, getSpacingHelperMargin, filterInnerStyle, filterHelperStyle, filterOuterStyle, } from '../responsive-grid/create-style';
var pickOthers = obj.pickOthers;
var createChildren = function (children, _a) {
    var spacing = _a.spacing, direction = _a.direction, wrap = _a.wrap;
    var array = React.Children.toArray(children);
    if (!children) {
        return null;
    }
    return array.map(function (child, index) {
        var spacingMargin = {};
        spacingMargin = getChildMargin(spacing);
        if (!wrap) {
            // 不折行
            var isNone_1 = [index === 0, index === array.length - 1];
            var props_1 = direction === 'row' ? ['marginLeft', 'marginRight'] : ['marginTop', 'marginBottom'];
            ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach(function (prop) {
                if (prop in spacingMargin && props_1.indexOf(prop) === -1) {
                    spacingMargin[prop] = 0;
                }
                props_1.forEach(function (key, i) {
                    if (key in spacingMargin && isNone_1[i]) {
                        spacingMargin[key] = 0;
                    }
                });
            });
        }
        if (React.isValidElement(child)) {
            var propsMargin = child.props.margin;
            var childPropsMargin = getMargin(propsMargin);
            var gridProps = {};
            if (['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark === 'responsive_grid') {
                gridProps = createStyle(__assign({ display: 'grid' }, child.props));
            }
            return React.cloneElement(child, {
                style: __assign(__assign(__assign(__assign({}, spacingMargin), childPropsMargin), gridProps), (child.props.style || {})),
            });
        }
        return child;
    });
};
var getStyle = function (style, props) {
    return __assign(__assign({}, createStyle(__assign({ display: 'flex' }, props))), style);
};
var getOuterStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return filterOuterStyle(sheet);
};
var getHelperStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return filterHelperStyle(__assign(__assign({}, sheet), getSpacingHelperMargin(styleProps.spacing)));
};
var getInnerStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return filterInnerStyle(sheet);
};
/**
 * Box
 */
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, direction = _b.direction, justify = _b.justify, align = _b.align, wrap = _b.wrap, flex = _b.flex, spacing = _b.spacing, padding = _b.padding, margin = _b.margin, style = _b.style, className = _b.className, children = _b.children, device = _b.device, component = _b.component;
        var styleProps = {
            direction: direction,
            justify: justify,
            align: align,
            wrap: wrap,
            flex: flex,
            spacing: spacing,
            padding: padding,
            margin: margin,
        };
        var View = component;
        var others = pickOthers(Object.keys(Box.propTypes), this.props);
        var styleSheet = getStyle(style, styleProps);
        var boxs = createChildren(children, {
            spacing: spacing,
            direction: direction,
            wrap: wrap,
            device: device,
        });
        var cls = cx((_a = {},
            _a["".concat(prefix, "box")] = true,
            _a), className);
        if (wrap && spacing) {
            var outerStyle = getOuterStyle(style, styleProps);
            var helperStyle = getHelperStyle(style, styleProps);
            var innerStyle = getInnerStyle(style, styleProps);
            return (React.createElement(View, __assign({ style: outerStyle, className: cls }, others),
                React.createElement("div", { style: helperStyle },
                    React.createElement("div", { style: innerStyle, className: "".concat(prefix, "box") }, boxs))));
        }
        return (React.createElement(View, __assign({ style: styleSheet, className: cls }, others), boxs));
    };
    Box.propTypes = {
        prefix: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.any,
        /**
         * 布局属性
         */
        flex: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
            PropTypes.number,
        ]),
        /**
         * 布局方向，默认为 column ，一个元素占据一整行
         * @defaultValue column
         */
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse']),
        /**
         * 是否折行 支持IE11+
         */
        wrap: PropTypes.bool,
        /**
         * 元素之间的间距 [bottom&top, right&left]
         */
        spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 设置 margin [bottom&top, right&left]
         */
        margin: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 设置 padding [bottom&top, right&left]
         */
        padding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
         */
        justify: PropTypes.oneOf([
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
        ]),
        /**
         * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
         */
        align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 定制标签名， 例如section等
         */
        component: PropTypes.string,
    };
    Box.defaultProps = {
        prefix: 'next-',
        direction: 'column',
        wrap: false,
        component: 'div',
    };
    return Box;
}(React.Component));
export default ConfigProvider.config(Box);
