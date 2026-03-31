"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var create_style_1 = tslib_1.__importStar(require("../responsive-grid/create-style"));
var pickOthers = util_1.obj.pickOthers;
var createChildren = function (children, _a) {
    var spacing = _a.spacing, direction = _a.direction, wrap = _a.wrap;
    var array = react_1.default.Children.toArray(children);
    if (!children) {
        return null;
    }
    return array.map(function (child, index) {
        var spacingMargin = {};
        spacingMargin = (0, create_style_1.getChildMargin)(spacing);
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
        if (react_1.default.isValidElement(child)) {
            var propsMargin = child.props.margin;
            var childPropsMargin = (0, create_style_1.getMargin)(propsMargin);
            var gridProps = {};
            if (['function', 'object'].indexOf(typeof child.type) > -1 &&
                child.type._typeMark === 'responsive_grid') {
                gridProps = (0, create_style_1.default)(tslib_1.__assign({ display: 'grid' }, child.props));
            }
            return react_1.default.cloneElement(child, {
                style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, spacingMargin), childPropsMargin), gridProps), (child.props.style || {})),
            });
        }
        return child;
    });
};
var getStyle = function (style, props) {
    return tslib_1.__assign(tslib_1.__assign({}, (0, create_style_1.default)(tslib_1.__assign({ display: 'flex' }, props))), style);
};
var getOuterStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return (0, create_style_1.filterOuterStyle)(sheet);
};
var getHelperStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return (0, create_style_1.filterHelperStyle)(tslib_1.__assign(tslib_1.__assign({}, sheet), (0, create_style_1.getSpacingHelperMargin)(styleProps.spacing)));
};
var getInnerStyle = function (style, styleProps) {
    var sheet = getStyle(style, styleProps);
    return (0, create_style_1.filterInnerStyle)(sheet);
};
/**
 * Box
 */
var Box = /** @class */ (function (_super) {
    tslib_1.__extends(Box, _super);
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
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "box")] = true,
            _a), className);
        if (wrap && spacing) {
            var outerStyle = getOuterStyle(style, styleProps);
            var helperStyle = getHelperStyle(style, styleProps);
            var innerStyle = getInnerStyle(style, styleProps);
            return (react_1.default.createElement(View, tslib_1.__assign({ style: outerStyle, className: cls }, others),
                react_1.default.createElement("div", { style: helperStyle },
                    react_1.default.createElement("div", { style: innerStyle, className: "".concat(prefix, "box") }, boxs))));
        }
        return (react_1.default.createElement(View, tslib_1.__assign({ style: styleSheet, className: cls }, others), boxs));
    };
    Box.propTypes = {
        prefix: prop_types_1.default.string,
        style: prop_types_1.default.object,
        className: prop_types_1.default.any,
        /**
         * 布局属性
         */
        flex: prop_types_1.default.oneOfType([
            prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string])),
            prop_types_1.default.number,
        ]),
        /**
         * 布局方向，默认为 column ，一个元素占据一整行
         * @defaultValue column
         */
        direction: prop_types_1.default.oneOf(['row', 'column', 'row-reverse']),
        /**
         * 是否折行 支持IE11+
         */
        wrap: prop_types_1.default.bool,
        /**
         * 元素之间的间距 [bottom&top, right&left]
         */
        spacing: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
        /**
         * 设置 margin [bottom&top, right&left]
         */
        margin: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
        /**
         * 设置 padding [bottom&top, right&left]
         */
        padding: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.number), prop_types_1.default.number]),
        /**
         * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
         */
        justify: prop_types_1.default.oneOf([
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
        ]),
        /**
         * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
         */
        align: prop_types_1.default.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
        device: prop_types_1.default.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 定制标签名， 例如section等
         */
        component: prop_types_1.default.string,
    };
    Box.defaultProps = {
        prefix: 'next-',
        direction: 'column',
        wrap: false,
        component: 'div',
    };
    return Box;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Box);
