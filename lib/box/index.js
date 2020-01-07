'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _createStyle = require('../responsive-grid/create-style');

var _createStyle2 = _interopRequireDefault(_createStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;


var createChildren = function createChildren(children, _ref) {
    var spacing = _ref.spacing,
        direction = _ref.direction,
        wrap = _ref.wrap,
        device = _ref.device;

    var array = _react2.default.Children.toArray(children);
    if (!children) {
        return null;
    }

    return array.map(function (child, index) {
        var spacingMargin = {};

        spacingMargin = (0, _createStyle.getChildMargin)(spacing);

        if (!wrap) {
            // 不折行
            var isNone = [index === 0, index === array.length - 1];
            var props = direction === 'row' ? ['marginLeft', 'marginRight'] : ['marginTop', 'marginBottom'];

            ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach(function (prop) {
                if (prop in spacingMargin && props.indexOf(prop) === -1) {
                    spacingMargin[prop] = 0;
                }

                props.forEach(function (key, i) {
                    if (key in spacingMargin && isNone[i]) {
                        spacingMargin[key] = 0;
                    }
                });
            });
        }

        if (_react2.default.isValidElement(child)) {
            var propsMargin = child.props.margin;

            var childPropsMargin = (0, _createStyle.getMargin)(propsMargin);
            var gridProps = {};

            if (typeof child.type === 'function' && child.type._typeMark === 'responsive_grid') {
                gridProps = (0, _createStyle2.default)((0, _extends3.default)({ display: 'grid' }, child.props));
            }

            return _react2.default.cloneElement(child, {
                style: (0, _extends3.default)({}, spacingMargin, childPropsMargin, gridProps, child.props.style || {})
            });
        }

        return child;
    });
};

var getStyle = function getStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var props = arguments[1];

    return (0, _extends3.default)({}, (0, _createStyle2.default)((0, _extends3.default)({ display: 'flex' }, props)), style);
};

var getOuterStyle = function getOuterStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0, _createStyle.filterOuterStyle)(sheet);
};

var getHelperStyle = function getHelperStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0, _createStyle.filterHelperStyle)((0, _extends3.default)({}, sheet, (0, _createStyle.getSpacingHelperMargin)(styleProps.spacing)));
};

var getInnerStyle = function getInnerStyle(style, styleProps) {
    var sheet = getStyle(style, styleProps);

    return (0, _createStyle.filterInnerStyle)(sheet);
};

/**
 * Box
 */
var Box = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Box, _Component);

    function Box() {
        (0, _classCallCheck3.default)(this, Box);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Box.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            direction = _props.direction,
            justify = _props.justify,
            align = _props.align,
            wrap = _props.wrap,
            flex = _props.flex,
            spacing = _props.spacing,
            padding = _props.padding,
            margin = _props.margin,
            style = _props.style,
            className = _props.className,
            children = _props.children,
            device = _props.device;


        var styleProps = {
            direction: direction,
            justify: justify,
            align: align,
            wrap: wrap,
            flex: flex,
            spacing: spacing,
            padding: padding,
            margin: margin
        };
        var View = 'Component' in this.props ? _react.Component : 'div';
        var others = pickOthers(Object.keys(Box.propTypes), this.props);
        var styleSheet = getStyle(style, styleProps);

        var boxs = createChildren(children, {
            spacing: spacing,
            direction: direction,
            wrap: wrap,
            device: device
        });

        var cls = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'box'] = true, _cx), className);
        if (wrap && spacing) {
            var outerStyle = getOuterStyle(style, styleProps);
            var helperStyle = getHelperStyle(style, styleProps);
            var innerStyle = getInnerStyle(style, styleProps);

            return _react2.default.createElement(
                View,
                (0, _extends3.default)({ style: outerStyle, className: cls }, others),
                _react2.default.createElement(
                    View,
                    { style: helperStyle },
                    _react2.default.createElement(
                        View,
                        { style: innerStyle, className: prefix + 'box' },
                        boxs
                    )
                )
            );
        }

        return _react2.default.createElement(
            View,
            (0, _extends3.default)({ style: styleSheet, className: cls }, others),
            boxs
        );
    };

    return Box;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.any,
    /**
     * 布局属性
     */
    flex: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])), _propTypes2.default.number]),
    /**
     * 布局方向，默认为 column ，一个元素占据一整行
     * @default column
     */
    direction: _propTypes2.default.oneOf(['row', 'column']),
    /**
     * 是否折行
     */
    wrap: _propTypes2.default.bool,
    /**
     * 元素之间的间距 [bottom&top, right&left]
     */
    spacing: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.number]),
    /**
     * 设置 margin [bottom&top, right&left]
     */
    margin: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.number]),
    /**
     * 设置 padding [bottom&top, right&left]
     */
    padding: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.number]),
    /**
     * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
     */
    justify: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
    /**
     * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
     */
    align: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
    device: _propTypes2.default.oneOf(['phone', 'tablet', 'desktop'])
}, _class.defaultProps = {
    prefix: 'next-',
    direction: 'column',
    wrap: false
}, _temp);
Box.displayName = 'Box';
exports.default = _configProvider2.default.config(Box);
module.exports = exports['default'];