webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(38)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(41)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-icon[dir=\"rtl\"]::before {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n@font-face {\n  font-family: NextIcon;\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot\");\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.svg#NextIcon\") format(\"svg\"); }\n\n.next-icon {\n  display: inline-block;\n  font-family: NextIcon;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .next-icon:before {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center; }\n  .next-icon-smile:before {\n    content: \"\\E65F\"; }\n  .next-icon-cry:before {\n    content: \"\\E65D\"; }\n  .next-icon-success:before {\n    content: \"\\E60A\"; }\n  .next-icon-warning:before {\n    content: \"\\E60B\"; }\n  .next-icon-prompt:before {\n    content: \"\\E60C\"; }\n  .next-icon-error:before {\n    content: \"\\E60D\"; }\n  .next-icon-help:before {\n    content: \"\\E673\"; }\n  .next-icon-clock:before {\n    content: \"\\E621\"; }\n  .next-icon-success-filling:before {\n    content: \"\\E63A\"; }\n  .next-icon-delete-filling:before {\n    content: \"\\E623\"; }\n  .next-icon-favorites-filling:before {\n    content: \"\\E60E\"; }\n  .next-icon-add:before {\n    content: \"\\E655\"; }\n  .next-icon-minus:before {\n    content: \"\\E601\"; }\n  .next-icon-arrow-up:before {\n    content: \"\\E625\"; }\n  .next-icon-arrow-down:before {\n    content: \"\\E63D\"; }\n  .next-icon-arrow-left:before {\n    content: \"\\E61D\"; }\n  .next-icon-arrow-right:before {\n    content: \"\\E619\"; }\n  .next-icon-arrow-double-left:before {\n    content: \"\\E659\"; }\n  .next-icon-arrow-double-right:before {\n    content: \"\\E65E\"; }\n  .next-icon-switch:before {\n    content: \"\\E6B3\"; }\n  .next-icon-sorting:before {\n    content: \"\\E634\"; }\n  .next-icon-descending:before {\n    content: \"\\E61F\"; }\n  .next-icon-ascending:before {\n    content: \"\\E61E\"; }\n  .next-icon-select:before {\n    content: \"\\E632\"; }\n  .next-icon-semi-select:before {\n    content: \"\\E633\"; }\n  .next-icon-search:before {\n    content: \"\\E656\"; }\n  .next-icon-close:before {\n    content: \"\\E626\"; }\n  .next-icon-ellipsis:before {\n    content: \"\\E654\"; }\n  .next-icon-picture:before {\n    content: \"\\E631\"; }\n  .next-icon-calendar:before {\n    content: \"\\E607\"; }\n  .next-icon-ashbin:before {\n    content: \"\\E639\"; }\n  .next-icon-upload:before {\n    content: \"\\E7EE\"; }\n  .next-icon-download:before {\n    content: \"\\E628\"; }\n  .next-icon-set:before {\n    content: \"\\E683\"; }\n  .next-icon-edit:before {\n    content: \"\\E63B\"; }\n  .next-icon-refresh:before {\n    content: \"\\E677\"; }\n  .next-icon-filter:before {\n    content: \"\\E627\"; }\n  .next-icon-attachment:before {\n    content: \"\\E665\"; }\n  .next-icon-account:before {\n    content: \"\\E608\"; }\n  .next-icon-email:before {\n    content: \"\\E605\"; }\n  .next-icon-atm:before {\n    content: \"\\E606\"; }\n  .next-icon-loading:before {\n    content: \"\\E646\";\n    -webkit-animation: loadingCircle 1s infinite linear;\n            animation: loadingCircle 1s infinite linear; }\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.next-icon.next-xxs:before {\n  width: 8px;\n  font-size: 8px;\n  line-height: inherit; }\n\n@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n  .next-icon.next-xxs {\n    -webkit-transform: scale(0.5);\n        -ms-transform: scale(0.5);\n            transform: scale(0.5);\n    margin-left: -4px;\n    margin-right: -4px; }\n    .next-icon.next-xxs:before {\n      width: 16px;\n      font-size: 16px; } }\n\n.next-icon.next-xs:before {\n  width: 12px;\n  font-size: 12px;\n  line-height: inherit; }\n\n.next-icon.next-small:before {\n  width: 16px;\n  font-size: 16px;\n  line-height: inherit; }\n\n.next-icon.next-medium:before {\n  width: 20px;\n  font-size: 20px;\n  line-height: inherit; }\n\n.next-icon.next-large:before {\n  width: 24px;\n  font-size: 24px;\n  line-height: inherit; }\n\n.next-icon.next-xl:before {\n  width: 32px;\n  font-size: 32px;\n  line-height: inherit; }\n\n.next-icon.next-xxl:before {\n  width: 48px;\n  font-size: 48px;\n  line-height: inherit; }\n\n.next-icon.next-xxxl:before {\n  width: 64px;\n  font-size: 64px;\n  line-height: inherit; }\n", ""]);

// exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = findNode;

var _reactDom = __webpack_require__(8);

function findNode(target, param) {
    if (!target) {
        return null;
    }

    if (typeof target === 'string') {
        return document.getElementById(target);
    }

    if (typeof target === 'function') {
        target = target(param);
    }

    if (!target) {
        return null;
    }

    try {
        return (0, _reactDom.findDOMNode)(target);
    } catch (err) {
        return target;
    }
}
module.exports = exports['default'];

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(2);

var _icon = __webpack_require__(22);

var _icon2 = _interopRequireDefault(_icon);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Created by xiachi on 17/2/10.
 */

var noop = _util.func.noop;
var BalloonInner = (_temp = _class = function (_React$Component) {
    _inherits(BalloonInner, _React$Component);

    function BalloonInner() {
        _classCallCheck(this, BalloonInner);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    BalloonInner.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            closable = _props.closable,
            className = _props.className,
            style = _props.style,
            isTooltip = _props.isTooltip,
            align = _props.align,
            type = _props.type,
            onClose = _props.onClose,
            alignEdge = _props.alignEdge,
            children = _props.children,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['prefix', 'closable', 'className', 'style', 'isTooltip', 'align', 'type', 'onClose', 'alignEdge', 'children', 'rtl']);

        var alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var _prefix = prefix;

        if (isTooltip) {
            _prefix = _prefix + 'balloon-tooltip';
        } else {
            _prefix = _prefix + 'balloon';
        }

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames['' + _prefix] = true, _classNames[_prefix + '-' + type] = type, _classNames[_prefix + '-medium'] = true, _classNames[_prefix + '-' + alignMap[align].arrow] = alignMap[align], _classNames[_prefix + '-closable'] = closable, _classNames[className] = className, _classNames));

        return _react2.default.createElement(
            'div',
            _extends({ role: 'tooltip', dir: rtl ? 'rtl' : undefined, className: classes, style: style }, _util.obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            closable ? _react2.default.createElement(
                'a',
                { role: 'button', tabIndex: '0', href: 'javascript:void(0);', className: _prefix + '-close',
                    onClick: onClose },
                _react2.default.createElement(_icon2.default, { type: 'close', size: 'small' })
            ) : null,
            children
        );
    };

    return BalloonInner;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    closable: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    alignEdge: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    style: _propTypes2.default.any,
    align: _propTypes2.default.string,
    type: _propTypes2.default.string,
    isTooltip: _propTypes2.default.bool,
    pure: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closable: true,
    onClose: noop,
    align: 'b',
    type: 'normal',
    alignEdge: false,
    pure: false
}, _temp);
BalloonInner.displayName = 'BalloonInner';
exports.default = BalloonInner;
module.exports = exports['default'];

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Created by xiachi on 17/1/17.
 */

var normalMap = {
    t: {
        align: 'bc tc',
        rtlAlign: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        rtlTrOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        rtlAlign: 'cr cl',
        arrow: 'left',
        trOrigin: 'left',
        rtlTrOrigin: 'right',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        rtlAlign: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        rtlTrOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        rtlAlign: 'cl cr',
        arrow: 'right',
        trOrigin: 'right',
        rtlTrOrigin: 'left',
        offset: [-12, 0]
    },
    tl: {
        align: 'br tc',
        rtlAlign: 'bl tc',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [20, -12]
    },
    tr: {
        align: 'bl tc',
        rtlAlign: 'br tc',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [-20, -12]
    },
    rt: {
        align: 'bl cr',
        rtlAlign: 'br cl',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [12, 20]
    },
    rb: {
        align: 'tl cr',
        rtlAlign: 'tr cl',
        arrow: 'left-top',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [12, -20]
    },
    bl: {
        align: 'tr bc',
        rtlAlign: 'tl bc',
        arrow: 'top-right',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [20, 12]
    },
    br: {
        align: 'tl bc',
        rtlAlign: 'tr bc',
        arrow: 'top-left',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [-20, 12]
    },
    lt: {
        align: 'br cl',
        rtlAlign: 'bl cr',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [-12, 20]
    },
    lb: {
        align: 'tr cl',
        rtlAlign: 'tl cr',
        arrow: 'right-top',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [-12, -20]
    }
};
var edgeMap = {
    t: {
        align: 'bc tc',
        rtlAlign: 'bc tc',
        arrow: 'bottom',
        trOrigin: 'bottom',
        rtlTrOrigin: 'bottom',
        offset: [0, -12]
    },
    r: {
        align: 'cl cr',
        rtlAlign: 'cr cl',
        arrow: 'left',
        trOrigin: 'left',
        rtlTrOrigin: 'right',
        offset: [12, 0]
    },
    b: {
        align: 'tc bc',
        rtlAlign: 'tc bc',
        arrow: 'top',
        trOrigin: 'top',
        rtlTrOrigin: 'top',
        offset: [0, 12]
    },
    l: {
        align: 'cr cl',
        rtlAlign: 'cl cr',
        arrow: 'right',
        trOrigin: 'right',
        rtlTrOrigin: 'left',
        offset: [-12, 0]
    },
    tl: {
        align: 'bl tl',
        rtlAlign: 'br tr',
        arrow: 'bottom-left',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [0, -12]
    },
    tr: {
        align: 'br tr',
        rtlAlign: 'bl tl',
        arrow: 'bottom-right',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [0, -12]
    },
    rt: {
        align: 'tl tr',
        rtlAlign: 'tr tl',
        arrow: 'left-top',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [12, 0]
    },
    rb: {
        align: 'bl br',
        rtlAlign: 'br bl',
        arrow: 'left-bottom',
        trOrigin: 'bottom left',
        rtlTrOrigin: 'bottom right',
        offset: [12, 0]
    },
    bl: {
        align: 'tl bl',
        rtlAlign: 'tr br',
        arrow: 'top-left',
        trOrigin: 'top left',
        rtlTrOrigin: 'top right',
        offset: [0, 12]
    },
    br: {
        align: 'tr br',
        rtlAlign: 'tl bl',
        arrow: 'top-right',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [0, 12]
    },
    lt: {
        align: 'tr tl',
        rtlAlign: 'tl tr',
        arrow: 'right-top',
        trOrigin: 'top right',
        rtlTrOrigin: 'top left',
        offset: [-12, 0]
    },
    lb: {
        align: 'br bl',
        rtlAlign: 'bl br',
        arrow: 'right-bottom',
        trOrigin: 'bottom right',
        rtlTrOrigin: 'bottom left',
        offset: [-12, 0]
    }
};

exports.normalMap = normalMap;
exports.edgeMap = edgeMap;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.2s;\n  animation-duration: 0.2s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInDown {\n  -webkit-animation-name: expandInDown;\n  animation-name: expandInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutUp {\n  -webkit-animation-name: expandOutUp;\n  animation-name: expandOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInUp {\n  -webkit-animation-name: expandInUp;\n  animation-name: expandInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutDown {\n  -webkit-animation-name: expandOutDown;\n  animation-name: expandOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expand-enter {\n  overflow: hidden; }\n\n.expand-enter-active {\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out; }\n  .expand-enter-active > * {\n    -webkit-animation-name: expandInWithFade;\n    animation-name: expandInWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n\n.expand-leave {\n  overflow: hidden; }\n\n.expand-leave-active {\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out; }\n  .expand-leave-active > * {\n    -webkit-animation-name: expandOutWithFade;\n    animation-name: expandOutWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n", ""]);

// exports


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-overlay-wrapper .next-overlay-inner {\n  z-index: 1001; }\n\n.next-overlay-wrapper .next-overlay-backdrop {\n  position: fixed;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  opacity: 0; }\n\n.next-overlay-wrapper.opened .next-overlay-backdrop {\n  opacity: 0.2; }\n", ""]);

// exports


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-balloon {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  word-wrap: break-word;\n  z-index: 0;\n  /* size */\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon *,\n  .next-balloon *:before,\n  .next-balloon *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-primary {\n    color: #333333;\n    border-color: #4494F9;\n    background-color: #E3F2FD;\n    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-primary .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-primary .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-primary .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-primary .next-balloon-close :hover {\n        color: #333333; }\n    .next-balloon-primary:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #4494F9;\n      background-color: #E3F2FD;\n      z-index: -1; }\n    .next-balloon-primary.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon-normal {\n    color: #333333;\n    border-color: #DCDEE3;\n    background-color: #FFFFFF;\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-normal .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-normal .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-normal .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-normal .next-balloon-close :hover {\n        color: #666666; }\n    .next-balloon-normal:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #DCDEE3;\n      background-color: #FFFFFF;\n      z-index: -1; }\n    .next-balloon-normal.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon.visible {\n    display: block; }\n  .next-balloon.hidden {\n    display: none; }\n  .next-balloon-medium {\n    padding: 16px 16px 16px 16px; }\n  .next-balloon-closable {\n    padding: 16px 40px 16px 16px; }\n\n.next-balloon-tooltip {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  font-size: 12px;\n  z-index: 0;\n  color: #333333;\n  border-color: #DCDEE3;\n  background-color: #F2F3F7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-width: 1px;\n  /* size */ }\n  .next-balloon-tooltip *,\n  .next-balloon-tooltip *:before,\n  .next-balloon-tooltip *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-tooltip:after {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    content: ' ';\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-box-sizing: content-box !important;\n            box-sizing: content-box !important;\n    border: 1px solid #DCDEE3;\n    background-color: #F2F3F7;\n    z-index: -1; }\n  .next-balloon-tooltip-top:after {\n    top: -7px;\n    left: calc(50% + -7px);\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-right:after {\n    top: calc(50% + -7px);\n    right: -7px;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom:after {\n    bottom: -7px;\n    left: calc(50% + -7px);\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-left:after {\n    top: calc(50% + -7px);\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-top:after {\n    top: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-bottom:after {\n    bottom: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-right-top:after {\n    top: 12px;\n    right: -7px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-right-bottom:after {\n    right: -7px;\n    bottom: 12px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-top-left:after {\n    top: -7px;\n    left: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-top-right:after {\n    top: -7px;\n    right: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom-left:after {\n    bottom: -7px;\n    left: 12px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-bottom-right:after {\n    right: 12px;\n    bottom: -7px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip.visible {\n    display: block; }\n  .next-balloon-tooltip.hidden {\n    display: none; }\n  .next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n\n.next-balloon[dir=\"rtl\"] {\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-closable {\n    padding: 16px 16px 16px 40px; }\n\n.next-balloon-tooltip[dir=\"rtl\"] {\n  /* size */ }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-top:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-top:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n", ""]);

// exports


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

var _overlay = __webpack_require__(30);

var _overlay2 = _interopRequireDefault(_overlay);

var _gateway = __webpack_require__(31);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(32);

var _position2 = _interopRequireDefault(_position);

var _popup = __webpack_require__(58);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_overlay2.default.Gateway = _gateway2.default;
_overlay2.default.Position = _position2.default;
_overlay2.default.Popup = _configProvider2.default.config(_popup2.default, {
    exportNames: ['overlay']
});

exports.default = _configProvider2.default.config(_overlay2.default, {
    exportNames: ['getContent', 'getContentNode']
});
module.exports = exports['default'];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEYCODE = exports.guid = exports.focus = exports.support = exports.str = exports.obj = exports.log = exports.func = exports.events = exports.env = exports.dom = undefined;

var _dom2 = __webpack_require__(26);

var _dom = _interopRequireWildcard(_dom2);

var _env2 = __webpack_require__(28);

var _env = _interopRequireWildcard(_env2);

var _events2 = __webpack_require__(44);

var _events = _interopRequireWildcard(_events2);

var _func2 = __webpack_require__(45);

var _func = _interopRequireWildcard(_func2);

var _log2 = __webpack_require__(46);

var _log = _interopRequireWildcard(_log2);

var _object2 = __webpack_require__(9);

var _object = _interopRequireWildcard(_object2);

var _string2 = __webpack_require__(27);

var _string = _interopRequireWildcard(_string2);

var _support2 = __webpack_require__(47);

var _support = _interopRequireWildcard(_support2);

var _focus2 = __webpack_require__(48);

var _focus = _interopRequireWildcard(_focus2);

var _guid2 = __webpack_require__(49);

var _guid3 = _interopRequireDefault(_guid2);

var _keycode = __webpack_require__(29);

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dom = exports.dom = _dom;
var env = exports.env = _env;
var events = exports.events = _events;
var func = exports.func = _func;
var log = exports.log = _log;
var obj = exports.obj = _object;
var str = exports.str = _string;
var support = exports.support = _support;
var focus = exports.focus = _focus;
var guid = exports.guid = _guid3.default;
var KEYCODE = exports.KEYCODE = _keycode2.default;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(52);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-btn {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .next-btn *,\n  .next-btn *:before,\n  .next-btn *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-btn::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .next-btn, .next-btn:active, .next-btn:focus, .next-btn:hover {\n    outline: 0; }\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.next-btn {\n  /* 尺寸维度 */\n  /* ---------------------------------------- */\n  /* 普通按钮 */\n  /* 普通态禁用样式 */\n  /* 警告按钮 */\n  /* 文本按钮 */\n  /* loading */\n  /* ---------------------------------------- */\n  /* 幽灵按钮 */\n  /* 组合 */\n  /* ---------------------------------------- */ }\n  .next-btn {\n    position: relative;\n    display: inline-block;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none;\n    text-align: center;\n    text-transform: none;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n    cursor: pointer; }\n    .next-btn:after {\n      text-align: center;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n      -webkit-transition: opacity .5s ease;\n      transition: opacity .5s ease; }\n    .next-btn .next-icon.next-xs:before {\n      vertical-align: baseline; }\n    .next-btn.hover, .next-btn:hover {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n  .next-btn.next-small {\n    border-radius: 3px;\n    padding: 0 8px;\n    height: 20px;\n    line-height: 18px;\n    font-size: 12px;\n    border-width: 1px; }\n    .next-btn.next-small > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-small > .next-btn-icon.next-icon-first:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-small > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-small > .next-btn-icon.next-icon-last:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-small > .next-btn-icon.next-icon-alone:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n    .next-btn.next-small.next-btn-loading {\n      padding-left: 24px; }\n      .next-btn.next-small.next-btn-loading:after {\n        width: 12px;\n        height: 12px;\n        font-size: 12px;\n        line-height: 12px;\n        left: 8px;\n        top: 50%;\n        text-align: center;\n        margin-top: -6px;\n        margin-right: 4px; }\n      .next-btn.next-small.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-medium {\n    border-radius: 3px;\n    padding: 0 12px;\n    height: 28px;\n    line-height: 26px;\n    font-size: 12px;\n    border-width: 1px; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-medium > .next-btn-icon.next-icon-first:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-medium > .next-btn-icon.next-icon-last:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-alone:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n    .next-btn.next-medium.next-btn-loading {\n      padding-left: 28px; }\n      .next-btn.next-medium.next-btn-loading:after {\n        width: 12px;\n        height: 12px;\n        font-size: 12px;\n        line-height: 12px;\n        left: 12px;\n        top: 50%;\n        text-align: center;\n        margin-top: -6px;\n        margin-right: 4px; }\n      .next-btn.next-medium.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-large {\n    border-radius: 3px;\n    padding: 0 16px;\n    height: 40px;\n    line-height: 38px;\n    font-size: 16px;\n    border-width: 1px; }\n    .next-btn.next-large > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-large > .next-btn-icon.next-icon-first:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n    .next-btn.next-large > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-large > .next-btn-icon.next-icon-last:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n    .next-btn.next-large > .next-btn-icon.next-icon-alone:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n    .next-btn.next-large.next-btn-loading {\n      padding-left: 36px; }\n      .next-btn.next-large.next-btn-loading:after {\n        width: 16px;\n        height: 16px;\n        font-size: 16px;\n        line-height: 16px;\n        left: 16px;\n        top: 50%;\n        text-align: center;\n        margin-top: -8px;\n        margin-right: 4px; }\n      .next-btn.next-large.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-btn-normal {\n    border-style: solid;\n    background-color: #FFFFFF;\n    border-color: #C4C6CF; }\n    .next-btn.next-btn-normal, .next-btn.next-btn-normal:link, .next-btn.next-btn-normal:visited, .next-btn.next-btn-normal.visited {\n      color: #333333; }\n    .next-btn.next-btn-normal:focus, .next-btn.next-btn-normal:hover, .next-btn.next-btn-normal.hover, .next-btn.next-btn-normal:active, .next-btn.next-btn-normal.active {\n      color: #333333;\n      background-color: #F2F3F7;\n      border-color: #A0A2AD;\n      text-decoration: none; }\n  .next-btn.next-btn-primary {\n    border-style: solid;\n    background-color: #5584FF;\n    border-color: transparent; }\n    .next-btn.next-btn-primary, .next-btn.next-btn-primary:link, .next-btn.next-btn-primary:visited, .next-btn.next-btn-primary.visited {\n      color: #FFFFFF; }\n    .next-btn.next-btn-primary:focus, .next-btn.next-btn-primary:hover, .next-btn.next-btn-primary.hover, .next-btn.next-btn-primary:active, .next-btn.next-btn-primary.active {\n      color: #FFFFFF;\n      background-color: #3E71F7;\n      border-color: transparent;\n      text-decoration: none; }\n  .next-btn.next-btn-secondary {\n    border-style: solid;\n    background-color: #FFFFFF;\n    border-color: #5584FF; }\n    .next-btn.next-btn-secondary, .next-btn.next-btn-secondary:link, .next-btn.next-btn-secondary:visited, .next-btn.next-btn-secondary.visited {\n      color: #5584FF; }\n    .next-btn.next-btn-secondary:focus, .next-btn.next-btn-secondary:hover, .next-btn.next-btn-secondary.hover, .next-btn.next-btn-secondary:active, .next-btn.next-btn-secondary.active {\n      color: #FFFFFF;\n      background-color: #3E71F7;\n      border-color: #3E71F7;\n      text-decoration: none; }\n  .next-btn.disabled, .next-btn[disabled] {\n    cursor: not-allowed;\n    background-color: #F7F8FA;\n    border-color: #E6E7EB; }\n    .next-btn.disabled, .next-btn.disabled:link, .next-btn.disabled:visited, .next-btn.disabled.visited, .next-btn[disabled], .next-btn[disabled]:link, .next-btn[disabled]:visited, .next-btn[disabled].visited {\n      color: #CCCCCC; }\n    .next-btn.disabled:focus, .next-btn.disabled:hover, .next-btn.disabled.hover, .next-btn.disabled:active, .next-btn.disabled.active, .next-btn[disabled]:focus, .next-btn[disabled]:hover, .next-btn[disabled].hover, .next-btn[disabled]:active, .next-btn[disabled].active {\n      color: #CCCCCC;\n      background-color: #F7F8FA;\n      border-color: #E6E7EB;\n      text-decoration: none; }\n  .next-btn-warning {\n    border-style: solid; }\n    .next-btn-warning.next-btn-primary {\n      background-color: #FF3000;\n      border-color: #FF3000; }\n      .next-btn-warning.next-btn-primary, .next-btn-warning.next-btn-primary:link, .next-btn-warning.next-btn-primary:visited, .next-btn-warning.next-btn-primary.visited {\n        color: #FFFFFF; }\n      .next-btn-warning.next-btn-primary:focus, .next-btn-warning.next-btn-primary:hover, .next-btn-warning.next-btn-primary.hover, .next-btn-warning.next-btn-primary:active, .next-btn-warning.next-btn-primary.active {\n        color: #FFFFFF;\n        background-color: #E72B00;\n        border-color: #E72B00;\n        text-decoration: none; }\n      .next-btn-warning.next-btn-primary.disabled, .next-btn-warning.next-btn-primary[disabled] {\n        background-color: #F7F8FA;\n        border-color: #DCDEE3; }\n        .next-btn-warning.next-btn-primary.disabled, .next-btn-warning.next-btn-primary.disabled:link, .next-btn-warning.next-btn-primary.disabled:visited, .next-btn-warning.next-btn-primary.disabled.visited, .next-btn-warning.next-btn-primary[disabled], .next-btn-warning.next-btn-primary[disabled]:link, .next-btn-warning.next-btn-primary[disabled]:visited, .next-btn-warning.next-btn-primary[disabled].visited {\n          color: #CCCCCC; }\n        .next-btn-warning.next-btn-primary.disabled:focus, .next-btn-warning.next-btn-primary.disabled:hover, .next-btn-warning.next-btn-primary.disabled.hover, .next-btn-warning.next-btn-primary.disabled:active, .next-btn-warning.next-btn-primary.disabled.active, .next-btn-warning.next-btn-primary[disabled]:focus, .next-btn-warning.next-btn-primary[disabled]:hover, .next-btn-warning.next-btn-primary[disabled].hover, .next-btn-warning.next-btn-primary[disabled]:active, .next-btn-warning.next-btn-primary[disabled].active {\n          color: #CCCCCC;\n          background-color: #F7F8FA;\n          border-color: #DCDEE3;\n          text-decoration: none; }\n    .next-btn-warning.next-btn-normal {\n      background-color: #FFFFFF;\n      border-color: #FF3000; }\n      .next-btn-warning.next-btn-normal, .next-btn-warning.next-btn-normal:link, .next-btn-warning.next-btn-normal:visited, .next-btn-warning.next-btn-normal.visited {\n        color: #FF3000; }\n      .next-btn-warning.next-btn-normal:focus, .next-btn-warning.next-btn-normal:hover, .next-btn-warning.next-btn-normal.hover, .next-btn-warning.next-btn-normal:active, .next-btn-warning.next-btn-normal.active {\n        color: #FFFFFF;\n        background-color: #E72B00;\n        border-color: #E72B00;\n        text-decoration: none; }\n      .next-btn-warning.next-btn-normal.disabled, .next-btn-warning.next-btn-normal[disabled] {\n        background-color: #F7F8FA;\n        border-color: #E6E7EB; }\n        .next-btn-warning.next-btn-normal.disabled, .next-btn-warning.next-btn-normal.disabled:link, .next-btn-warning.next-btn-normal.disabled:visited, .next-btn-warning.next-btn-normal.disabled.visited, .next-btn-warning.next-btn-normal[disabled], .next-btn-warning.next-btn-normal[disabled]:link, .next-btn-warning.next-btn-normal[disabled]:visited, .next-btn-warning.next-btn-normal[disabled].visited {\n          color: #CCCCCC; }\n        .next-btn-warning.next-btn-normal.disabled:focus, .next-btn-warning.next-btn-normal.disabled:hover, .next-btn-warning.next-btn-normal.disabled.hover, .next-btn-warning.next-btn-normal.disabled:active, .next-btn-warning.next-btn-normal.disabled.active, .next-btn-warning.next-btn-normal[disabled]:focus, .next-btn-warning.next-btn-normal[disabled]:hover, .next-btn-warning.next-btn-normal[disabled].hover, .next-btn-warning.next-btn-normal[disabled]:active, .next-btn-warning.next-btn-normal[disabled].active {\n          color: #CCCCCC;\n          background-color: #F7F8FA;\n          border-color: #E6E7EB;\n          text-decoration: none; }\n  .next-btn-text {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0; }\n    .next-btn-text.hover, .next-btn-text:hover {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n    .next-btn-text.next-btn-primary {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-primary, .next-btn-text.next-btn-primary:link, .next-btn-text.next-btn-primary:visited, .next-btn-text.next-btn-primary.visited {\n        color: #5584FF; }\n      .next-btn-text.next-btn-primary:focus, .next-btn-text.next-btn-primary:hover, .next-btn-text.next-btn-primary.hover, .next-btn-text.next-btn-primary:active, .next-btn-text.next-btn-primary.active {\n        color: #3E71F7;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-secondary {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-secondary, .next-btn-text.next-btn-secondary:link, .next-btn-text.next-btn-secondary:visited, .next-btn-text.next-btn-secondary.visited {\n        color: #666666; }\n      .next-btn-text.next-btn-secondary:focus, .next-btn-text.next-btn-secondary:hover, .next-btn-text.next-btn-secondary.hover, .next-btn-text.next-btn-secondary:active, .next-btn-text.next-btn-secondary.active {\n        color: #5584FF;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-normal {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-normal, .next-btn-text.next-btn-normal:link, .next-btn-text.next-btn-normal:visited, .next-btn-text.next-btn-normal.visited {\n        color: #333333; }\n      .next-btn-text.next-btn-normal:focus, .next-btn-text.next-btn-normal:hover, .next-btn-text.next-btn-normal.hover, .next-btn-text.next-btn-normal:active, .next-btn-text.next-btn-normal.active {\n        color: #5584FF;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-large {\n      border-radius: 0;\n      padding: 0 0;\n      height: 24px;\n      line-height: 24px;\n      font-size: 14px;\n      border-width: 0; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-large > .next-btn-icon.next-icon-first:before {\n          width: 16px;\n          font-size: 16px;\n          line-height: inherit; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-large > .next-btn-icon.next-icon-last:before {\n          width: 16px;\n          font-size: 16px;\n          line-height: inherit; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-alone:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n      .next-btn-text.next-large.next-btn-loading {\n        padding-left: 20px; }\n        .next-btn-text.next-large.next-btn-loading:after {\n          width: 16px;\n          height: 16px;\n          font-size: 16px;\n          line-height: 16px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -8px;\n          margin-right: 4px; }\n        .next-btn-text.next-large.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.next-medium {\n      border-radius: 0;\n      padding: 0 0;\n      height: 20px;\n      line-height: 20px;\n      font-size: 12px;\n      border-width: 0; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-medium > .next-btn-icon.next-icon-first:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-medium > .next-btn-icon.next-icon-last:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-alone:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n      .next-btn-text.next-medium.next-btn-loading {\n        padding-left: 16px; }\n        .next-btn-text.next-medium.next-btn-loading:after {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -6px;\n          margin-right: 4px; }\n        .next-btn-text.next-medium.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.next-small {\n      border-radius: 0;\n      padding: 0 0;\n      height: 16px;\n      line-height: 16px;\n      font-size: 12px;\n      border-width: 0; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-small > .next-btn-icon.next-icon-first:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-small > .next-btn-icon.next-icon-last:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-alone:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n      .next-btn-text.next-small.next-btn-loading {\n        padding-left: 16px; }\n        .next-btn-text.next-small.next-btn-loading:after {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -6px;\n          margin-right: 4px; }\n        .next-btn-text.next-small.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.disabled, .next-btn-text[disabled] {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.disabled, .next-btn-text.disabled:link, .next-btn-text.disabled:visited, .next-btn-text.disabled.visited, .next-btn-text[disabled], .next-btn-text[disabled]:link, .next-btn-text[disabled]:visited, .next-btn-text[disabled].visited {\n        color: #CCCCCC; }\n      .next-btn-text.disabled:focus, .next-btn-text.disabled:hover, .next-btn-text.disabled.hover, .next-btn-text.disabled:active, .next-btn-text.disabled.active, .next-btn-text[disabled]:focus, .next-btn-text[disabled]:hover, .next-btn-text[disabled].hover, .next-btn-text[disabled]:active, .next-btn-text[disabled].active {\n        color: #CCCCCC;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-loading {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-loading, .next-btn-text.next-btn-loading:link, .next-btn-text.next-btn-loading:visited, .next-btn-text.next-btn-loading.visited {\n        color: #333333; }\n      .next-btn-text.next-btn-loading:focus, .next-btn-text.next-btn-loading:hover, .next-btn-text.next-btn-loading.hover, .next-btn-text.next-btn-loading:active, .next-btn-text.next-btn-loading.active {\n        color: #333333;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n  .next-btn-loading {\n    pointer-events: none; }\n    .next-btn-loading:after {\n      font-family: NextIcon;\n      content: \"\\E646\";\n      opacity: 1;\n      visibility: visible;\n      -webkit-animation: loadingCircle 2s infinite linear;\n              animation: loadingCircle 2s infinite linear; }\n  .next-btn-ghost {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-style: solid; }\n    .next-btn-ghost.next-btn-dark {\n      background-color: transparent;\n      border-color: #FFFFFF; }\n      .next-btn-ghost.next-btn-dark, .next-btn-ghost.next-btn-dark:link, .next-btn-ghost.next-btn-dark:visited, .next-btn-ghost.next-btn-dark.visited {\n        color: #FFFFFF; }\n      .next-btn-ghost.next-btn-dark:focus, .next-btn-ghost.next-btn-dark:hover, .next-btn-ghost.next-btn-dark.hover, .next-btn-ghost.next-btn-dark:active, .next-btn-ghost.next-btn-dark.active {\n        color: #FFFFFF;\n        background-color: rgba(255, 255, 255, 0.8);\n        border-color: #FFFFFF;\n        text-decoration: none; }\n      .next-btn-ghost.next-btn-dark.disabled, .next-btn-ghost.next-btn-dark[disabled] {\n        background-color: transparent;\n        border-color: rgba(255, 255, 255, 0.4); }\n        .next-btn-ghost.next-btn-dark.disabled, .next-btn-ghost.next-btn-dark.disabled:link, .next-btn-ghost.next-btn-dark.disabled:visited, .next-btn-ghost.next-btn-dark.disabled.visited, .next-btn-ghost.next-btn-dark[disabled], .next-btn-ghost.next-btn-dark[disabled]:link, .next-btn-ghost.next-btn-dark[disabled]:visited, .next-btn-ghost.next-btn-dark[disabled].visited {\n          color: rgba(255, 255, 255, 0.4); }\n        .next-btn-ghost.next-btn-dark.disabled:focus, .next-btn-ghost.next-btn-dark.disabled:hover, .next-btn-ghost.next-btn-dark.disabled.hover, .next-btn-ghost.next-btn-dark.disabled:active, .next-btn-ghost.next-btn-dark.disabled.active, .next-btn-ghost.next-btn-dark[disabled]:focus, .next-btn-ghost.next-btn-dark[disabled]:hover, .next-btn-ghost.next-btn-dark[disabled].hover, .next-btn-ghost.next-btn-dark[disabled]:active, .next-btn-ghost.next-btn-dark[disabled].active {\n          color: rgba(255, 255, 255, 0.4);\n          background-color: transparent;\n          border-color: rgba(255, 255, 255, 0.4);\n          text-decoration: none; }\n    .next-btn-ghost.next-btn-light {\n      background-color: transparent;\n      border-color: #333333; }\n      .next-btn-ghost.next-btn-light, .next-btn-ghost.next-btn-light:link, .next-btn-ghost.next-btn-light:visited, .next-btn-ghost.next-btn-light.visited {\n        color: #333333; }\n      .next-btn-ghost.next-btn-light:focus, .next-btn-ghost.next-btn-light:hover, .next-btn-ghost.next-btn-light.hover, .next-btn-ghost.next-btn-light:active, .next-btn-ghost.next-btn-light.active {\n        color: #999999;\n        background-color: rgba(0, 0, 0, 0.92);\n        border-color: #333333;\n        text-decoration: none; }\n      .next-btn-ghost.next-btn-light.disabled, .next-btn-ghost.next-btn-light[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.1); }\n        .next-btn-ghost.next-btn-light.disabled, .next-btn-ghost.next-btn-light.disabled:link, .next-btn-ghost.next-btn-light.disabled:visited, .next-btn-ghost.next-btn-light.disabled.visited, .next-btn-ghost.next-btn-light[disabled], .next-btn-ghost.next-btn-light[disabled]:link, .next-btn-ghost.next-btn-light[disabled]:visited, .next-btn-ghost.next-btn-light[disabled].visited {\n          color: rgba(0, 0, 0, 0.1); }\n        .next-btn-ghost.next-btn-light.disabled:focus, .next-btn-ghost.next-btn-light.disabled:hover, .next-btn-ghost.next-btn-light.disabled.hover, .next-btn-ghost.next-btn-light.disabled:active, .next-btn-ghost.next-btn-light.disabled.active, .next-btn-ghost.next-btn-light[disabled]:focus, .next-btn-ghost.next-btn-light[disabled]:hover, .next-btn-ghost.next-btn-light[disabled].hover, .next-btn-ghost.next-btn-light[disabled]:active, .next-btn-ghost.next-btn-light[disabled].active {\n          color: rgba(0, 0, 0, 0.1);\n          background-color: transparent;\n          border-color: rgba(0, 0, 0, 0.1);\n          text-decoration: none; }\n  .next-btn-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle; }\n    .next-btn-group > .next-btn {\n      position: relative;\n      float: left;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n      .next-btn-group > .next-btn:hover, .next-btn-group > .next-btn:focus, .next-btn-group > .next-btn:active, .next-btn-group > .next-btn.active {\n        z-index: 1; }\n      .next-btn-group > .next-btn.disabled, .next-btn-group > .next-btn[disabled] {\n        z-index: 0; }\n    .next-btn-group .next-btn.next-btn {\n      margin: 0 0 0 -1px; }\n    .next-btn-group .next-btn:not(:first-child):not(:last-child) {\n      border-radius: 0; }\n    .next-btn-group > .next-btn:first-child {\n      margin: 0; }\n    .next-btn-group > .next-btn:first-child:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n    .next-btn-group > .next-btn:last-child:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n    .next-btn-group > .next-btn-primary:not(:first-child) {\n      border-left-color: rgba(255, 255, 255, 0.2); }\n      .next-btn-group > .next-btn-primary:not(:first-child):hover {\n        border-left-color: transparent; }\n      .next-btn-group > .next-btn-primary:not(:first-child).disabled, .next-btn-group > .next-btn-primary:not(:first-child)[disabled] {\n        border-left-color: #E6E7EB; }\n\n/* 组合 */\n/* ---------------------------------------- */\n.next-btn-group[dir=\"rtl\"] > .next-btn {\n  float: right; }\n\n.next-btn-group[dir=\"rtl\"] .next-btn.next-btn {\n  margin: 0 -1px 0 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn:first-child:not(:last-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn:last-child:not(:first-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child) {\n  border-right-color: rgba(255, 255, 255, 0.2); }\n  .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child):hover {\n    border-right-color: transparent; }\n  .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child).disabled, .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child)[disabled] {\n    border-right-color: #E6E7EB; }\n\n/* 尺寸维度 */\n/* ---------------------------------------- */\n.next-btn.next-small[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-small[dir=\"rtl\"].next-btn-loading {\n    padding-left: 8px;\n    padding-right: 24px; }\n    .next-btn.next-small[dir=\"rtl\"].next-btn-loading:after {\n      right: 8px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn.next-medium[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-medium[dir=\"rtl\"].next-btn-loading {\n    padding-left: 12px;\n    padding-right: 28px; }\n    .next-btn.next-medium[dir=\"rtl\"].next-btn-loading:after {\n      right: 12px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn.next-large[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn.next-large[dir=\"rtl\"].next-btn-loading {\n    padding-left: 16px;\n    padding-right: 36px; }\n    .next-btn.next-large[dir=\"rtl\"].next-btn-loading:after {\n      right: 16px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n/* 文本按钮 */\n.next-btn-text[dir=\"rtl\"].next-large {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-first:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-last:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-large.next-btn-loading {\n    padding-left: 0;\n    padding-right: 20px; }\n    .next-btn-text[dir=\"rtl\"].next-large.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn-text[dir=\"rtl\"].next-medium {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-medium.next-btn-loading {\n    padding-left: 0;\n    padding-right: 16px; }\n    .next-btn-text[dir=\"rtl\"].next-medium.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn-text[dir=\"rtl\"].next-small {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-small.next-btn-loading {\n    padding-left: 0;\n    padding-right: 16px; }\n    .next-btn-text[dir=\"rtl\"].next-small.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n", ""]);

// exports


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Icon
 */
var Icon = (_temp = _class = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
        var _cx;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            size = _props.size,
            className = _props.className,
            rtl = _props.rtl,
            other = _objectWithoutProperties(_props, ['prefix', 'type', 'size', 'className', 'rtl']);

        var classes = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'icon'] = true, _cx[prefix + 'icon-' + type] = !!type, _cx['' + prefix + size] = !!size, _cx[className] = !!className, _cx));

        if (rtl && ['arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch', 'sorting', 'descending', 'ascending'].indexOf(type) !== -1) {
            other.dir = 'rtl';
        }

        return _react2.default.createElement('i', _extends({}, other, { className: classes }));
    };

    return Icon;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 指定显示哪种图标
     */
    type: _propTypes2.default.string,
    /**
     * 指定图标大小
     */
    size: _propTypes2.default.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
    className: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _class._typeMark = 'icon', _temp);
Icon.displayName = 'Icon';
exports.default = _configProvider2.default.config(Icon);
module.exports = exports['default'];

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(61);

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = window.moment;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getContextProps;
function getContextProps(props, context, displayName) {
    var prefix = props.prefix,
        locale = props.locale,
        pure = props.pure,
        rtl = props.rtl;
    var nextPrefix = context.nextPrefix,
        nextLocale = context.nextLocale,
        nextPure = context.nextPure,
        nextWarning = context.nextWarning,
        nextRtl = context.nextRtl;


    var newPrefix = prefix || nextPrefix;

    var localeFromContext = void 0;
    if (nextLocale) {
        localeFromContext = nextLocale[displayName];
        if (localeFromContext) {
            localeFromContext.momentLocale = nextLocale.momentLocale;
        }
    }
    var newLocale = void 0;
    if (locale) {
        newLocale = _extends({}, localeFromContext || {}, locale);
    } else if (localeFromContext) {
        newLocale = localeFromContext;
    }

    var newPure = typeof pure === 'boolean' ? pure : nextPure;
    var newRtl = typeof rtl === 'boolean' ? rtl : nextRtl;

    return {
        prefix: newPrefix,
        locale: newLocale,
        pure: newPure,
        rtl: newRtl,
        warning: nextWarning
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.matches = exports.hasDOM = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
exports.getStyle = getStyle;
exports.setStyle = setStyle;
exports.scrollbar = scrollbar;
exports.getOffset = getOffset;

var _string = __webpack_require__(27);

var _object = __webpack_require__(9);

/**
 * 是否能使用 DOM 方法
 * @type {Boolean}
 */
var hasDOM = exports.hasDOM = typeof window !== 'undefined' && !!window.document && !!document.createElement;

/**
 * 节点是否包含指定 className
 * @param  {Element}  node
 * @param  {String}  className
 * @return {Boolean}
 *
 * @example
 * dom.hasClass(document.body, 'foo');
 */
function hasClass(node, className) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        return node.classList.contains(className);
    } else {
        return node.className.indexOf(className) > -1;
    }
}

/**
 * 添加 className
 * @param {Element} node
 * @param {String} className
 *
 * @example
 * dom.addClass(document.body, 'foo');
 */
function addClass(node, className, _force) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.add(className);
    } else if (_force === true || !hasClass(node, className)) {
        node.className += ' ' + className;
    }
}

/**
 * 移除 className
 * @param  {Element} node
 * @param  {String} className
 *
 * @example
 * dom.removeClass(document.body, 'foo');
 */
function removeClass(node, className, _force) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return;
    }

    if (node.classList) {
        node.classList.remove(className);
    } else if (_force === true || hasClass(node, className)) {
        node.className = node.className.replace(className, '').replace(/\s+/g, ' ').trim();
    }
}

/**
 * 切换 className
 * @param  {Element} node
 * @param  {String} className
 * @return {Boolean}           执行后节点上是否还有此 className
 *
 * @example
 * dom.toggleClass(document.body, 'foo');
 */
function toggleClass(node, className) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    if (node.classList) {
        return node.classList.toggle(className);
    } else {
        var flag = hasClass(node, className);
        flag ? removeClass(node, className, true) : addClass(node, className, true);

        return !flag;
    }
}

/**
 * 元素是否匹配 CSS 选择器
 * @param  {Element} node       DOM 节点
 * @param  {String}  selector   CSS 选择器
 * @return {Boolean}
 *
 * @example
 * dom.matches(mountNode, '.container'); // boolean
 */
var matches = exports.matches = function () {
    var matchesFn = null;
    /* istanbul ignore else */
    if (hasDOM) {
        var _body = document.body || document.head;
        matchesFn = _body.matches ? 'matches' : _body.webkitMatchesSelector ? 'webkitMatchesSelector' : _body.msMatchesSelector ? 'msMatchesSelector' : _body.mozMatchesSelector ? 'mozMatchesSelector' : null;
    }

    return function (node, selector) {
        if (!hasDOM || !node) {
            return false;
        }

        return matchesFn ? node[matchesFn](selector) : false;
    };
}();

/**
 * 获取元素计算后的样式
 * @private
 * @param  {Element} node
 * @return {Object}
 */
function _getComputedStyle(node) {
    return node && node.nodeType === 1 ? window.getComputedStyle(node, null) : {};
}

var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset|size/i;
var removePixel = { left: 1, top: 1, right: 1, bottom: 1 };

/**
 * 校验并修正元素的样式属性值
 * @private
 * @param  {Element} node
 * @param  {String} type
 * @param  {Number} value
 */
function _getStyleValue(node, type, value) {
    type = type.toLowerCase();

    if (value === 'auto') {
        if (type === 'height') {
            return node.offsetHeight || 0;
        }
        if (type === 'width') {
            return node.offsetWidth || 0;
        }
    }

    if (!(type in removePixel)) {
        // 属性值是否需要去掉 px 单位，这里假定此类的属性值都是 px 为单位的
        removePixel[type] = PIXEL_PATTERN.test(type);
    }

    return removePixel[type] ? parseFloat(value) || 0 : value;
}

var floatMap = { cssFloat: 1, styleFloat: 1, float: 1 };

/**
 * 获取元素计算后的样式
 * @param  {Element} node DOM 节点
 * @param  {String} name 属性名
 * @return {Number|Object}
 */
function getStyle(node, name) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return null;
    }

    var style = _getComputedStyle(node);

    // 如果不指定属性名，则返回全部值
    if (arguments.length === 1) {
        return style;
    }

    name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

    return _getStyleValue(node, name, style.getPropertyValue((0, _string.hyphenate)(name)) || node.style[(0, _string.camelcase)(name)]);
}

/**
 * 设置元素的样式
 * @param {Element} node  DOM 节点
 * @param {Object|String} name  属性名，或者是一个对象，包含多个属性
 * @param {Number|String} value 属性值
 *
 * @example
 * // 设置单个属性值
 * dom.setStyle(mountNode, 'width', 100);
 * // 设置多条属性值
 * dom.setStyle(mountNode, {
 *     width: 100,
 *     height: 200
 * });
 */
function setStyle(node, name, value) {
    /* istanbul ignore if */
    if (!hasDOM || !node) {
        return false;
    }

    // 批量设置多个值
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && arguments.length === 2) {
        (0, _object.each)(name, function (val, key) {
            return setStyle(node, key, val);
        });
    } else {
        name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
        if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
            value = value + 'px';
        }
        node.style[(0, _string.camelcase)(name)] = value; // IE8 support
    }
}

/**
 * 获取默认的滚动条大小
 * @return {Object} width, height
 */
function scrollbar() {
    var scrollDiv = document.createElement('div');

    setStyle(scrollDiv, {
        position: 'absolute',
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        top: '-9999px'
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);

    return {
        width: scrollbarWidth,
        height: scrollbarHeight
    };
}

/**
 * 获取元素距离视口顶部和左边的偏移距离
 * @return {Object} top, left
 */
function getOffset(node) {
    var rect = node.getBoundingClientRect();
    var win = node.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.camelcase = camelcase;
exports.hyphenate = hyphenate;
/**
 * 将字符串转化为驼峰式写法
 * @param  {String} str 例：-webkit-transition
 * @return {String}     例：WebkitTransition
 */
function camelcase(str) {
    if (!/-/.test(str)) {
        return str || '';
    }
    return str.toLowerCase().replace(/-([a-z])/g, function ($0, $1) {
        return $1.toUpperCase();
    });
}

/**
 * 将驼峰式字符串转化为连字符写法
 * @param  {String} str 例：WebkitTransition
 * @return {String}     例：-webkit-transition
 */
function hyphenate(str) {
    return str.replace(/([A-Z])/g, function ($0) {
        return '-' + $0.toLowerCase();
    });
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(272);


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _button = __webpack_require__(64);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(65);

var _balloon = __webpack_require__(54);

var _balloon2 = _interopRequireDefault(_balloon);

__webpack_require__(60);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var content = React.createElement('div', null, React.createElement('p', null, 'content'));
var MoveTarget = React.createElement(_button2.default, { style: { margin: '5px' } }, 'hover');
var ClickTarget = React.createElement(_button2.default, { style: { margin: '5px' } }, 'click');
var FocusTarget = React.createElement(_button2.default, { style: { margin: '5px' } }, 'focus');

var App = function App() {
    return React.createElement('div', null, React.createElement(_balloon2.default, { trigger: MoveTarget, triggerType: 'hover' }, content), React.createElement(_balloon2.default, { trigger: ClickTarget, triggerType: 'click' }, content), React.createElement(_balloon2.default, { trigger: FocusTarget, triggerType: 'focus' }, content));
};

ReactDOM.render(React.createElement(App, null), mountNode);

// HOT RELOAD CODE
var componentDesc = document.querySelector('#component-desc');
componentDesc.innerHTML = '\u9F20\u6807\u79FB\u5165\u3001\u805A\u96C6\u3001\u70B9\u51FB\u3002';
var componentBody = document.querySelector('#component-body');
componentBody.innerHTML = '<pre><code class="language-jsx"><div class="hljs"><span class="hljs-keyword">import</span> { Button, Balloon } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@alifd/next\'</span>;\n\n\n<span class="hljs-keyword">const</span> content = (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>);\n<span class="hljs-keyword">const</span> MoveTarget = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}}&gt;</span>hover<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> ClickTarget = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}}&gt;</span>click<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> FocusTarget = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}}&gt;</span>focus<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n\n<span class="hljs-keyword">const</span> App = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{MoveTarget}</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"hover"</span>&gt;</span>\n            {content}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{ClickTarget}</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span>&gt;</span>\n            {content}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{FocusTarget}</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"focus"</span>&gt;</span>\n            {content}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n);\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>, mountNode);\n\n</span></div></code></pre>\n'.replace(/{backquote}/g, '`').replace(/{dollar}/g, '$');

if (true) {
    module.hot.accept();

    var reloading = document.querySelector('#next-demo-reloading');

    if (!window.hasAddStatusHandler) {
        module.hot.addStatusHandler(function (status) {
            window.hasAddStatusHandler = true;
            if (status === 'check') {
                reloading.style.display = 'block';
            } else if (status === 'idle') {
                reloading.style.display = 'none';
            }
        });
    }
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
/**
 * IE浏览器的渲染引擎版本号
 * 注意：此属性与浏览器版本号不同，IE的渲染引擎版本号是可以通过HTML header或手动设置去更改的
 * @type {Number} 6 ~ 10
 */
var ieVersion = exports.ieVersion = typeof document !== 'undefined' ? document.documentMode : undefined;

/**
 * 判断是否是生产环境
 * @type {Boolean}
 */
var isProduction = exports.isProduction = function isProduction() {
    var PRODUCTION_ENV = 'production';
    var result = false;
    try {
        if (process.env.NODE_ENV === PRODUCTION_ENV) {
            result = true;
        }
    } catch (err) {
        //
    }

    if (!result) {
        try {
            if (window.process.env.NODE_ENV === PRODUCTION_ENV) {
                result = true;
            }
        } catch (err) {
            //
        }
    }

    return result;
};

exports.default = {
    ieVersion: ieVersion,
    isProduction: isProduction
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    // version 0.x
    ESCAPE: 27,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,

    // MacOS
    CONTROL: 17,
    OPTION: 18,
    CMD: 91,
    COMMAND: 91,
    DELETE: 8
};
module.exports = exports["default"];

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(35)) === 'object' && __webpack_require__(35)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = __webpack_require__(2);

var _manager = __webpack_require__(56);

var _manager2 = _interopRequireDefault(_manager);

var _gateway = __webpack_require__(31);

var _gateway2 = _interopRequireDefault(_gateway);

var _position = __webpack_require__(32);

var _position2 = _interopRequireDefault(_position);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var saveLastFocusNode = _util.focus.saveLastFocusNode,
    getFocusNodeList = _util.focus.getFocusNodeList,
    backLastFocusNode = _util.focus.backLastFocusNode;
var makeChain = _util.func.makeChain,
    noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;


var isScrollDisplay = function isScrollDisplay(element) {
    try {
        var scrollbarStyle = window.getComputedStyle(element, '::-webkit-scrollbar');
        return !scrollbarStyle || scrollbarStyle.getPropertyValue('display') !== 'none';
    } catch (e) {
        // ignore error for firefox
    }

    return true;
};
var hasScroll = function hasScroll() {
    var doc = document.documentElement;
    return doc.scrollHeight > doc.clientHeight && _util.dom.scrollbar().width > 0 && isScrollDisplay(document.documentElement) && isScrollDisplay(document.body);
};
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
var getStyleProperty = function getStyleProperty(node, name) {
    var style = window.getComputedStyle(node);
    var ret = '';
    for (var i = 0; i < prefixes.length; i++) {
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
};

var modals = [];
var bodyOverflowY = void 0,
    bodyPaddingRight = void 0;

/**
 * Overlay
 * */
var Overlay = (_temp = _class = function (_Component) {
    _inherits(Overlay, _Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.saveContentRef = function (ref) {
            _this.contentRef = ref;
        };

        _this.saveGatewayRef = function (ref) {
            _this.gatewayRef = ref;
        };

        _this.state = {
            visible: props.visible,
            status: 'none',
            animation: _this.getAnimation(props)
        };

        _this.lastAlign = props.align;

        bindCtx(_this, ['handlePosition', 'handleAnimateEnd', 'handleDocumentKeyDown', 'handleDocumentClick', 'handleMaskClick', 'beforeOpen', 'beforeClose']);

        _this.timeoutMap = {};
        return _this;
    }

    Overlay.prototype.componentWillMount = function componentWillMount() {
        if (this.props.visible) {
            this.beforeOpen();
            this.props.beforeOpen();

            if (this.state.animation && _util.support.animation) {
                this.enter();
            }
        }
    };

    Overlay.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({ visible: false });
        this.addDocumentEvents();

        _manager2.default.addOverlay(this);

        if (this.state.visible) {
            this._isMounted = true;
        }
    };

    Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!this._isMounted && nextProps.visible) {
            this._isMounted = true;
        }

        var willOpen = !this.props.visible && nextProps.visible;
        var willClose = this.props.visible && !nextProps.visible;
        if (willOpen) {
            this.beforeOpen();
            nextProps.beforeOpen();
        } else if (willClose) {
            this.beforeClose();
            nextProps.beforeClose();
        }

        if (nextProps.animation || nextProps.animation === false) {
            this.setState({
                animation: nextProps.animation
            });
        }

        if (nextProps.animation !== false && _util.support.animation) {
            if (willOpen) {
                this.enter();
            } else if (willClose) {
                this.leave();
            }
        } else {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Overlay.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

        var open = !prevProps.visible && this.props.visible;
        var close = prevProps.visible && !this.props.visible;
        if (this.state.animation && _util.support.animation) {
            if (open || close) {
                this.addAnimationEvents();
            }
        } else {
            var wrapperNode = this.getWrapperNode();
            if (open) {
                setTimeout(function () {
                    _this2.props.onOpen();
                    _this2.props.afterOpen();
                    _util.dom.addClass(wrapperNode, 'opened');
                    _manager2.default.addOverlay(_this2);
                });
            } else if (close) {
                this.props.onClose();
                this.props.afterClose();
                _util.dom.removeClass(wrapperNode, 'opened');
                _manager2.default.removeOverlay(this);
            }
            this.setFocusNode();
        }
    };

    Overlay.prototype.componentWillUnmount = function componentWillUnmount() {
        this._isDestroyed = true;
        this._isMounted = false;
        _manager2.default.removeOverlay(this);
        this.removeDocumentEvents();
        if (this.focusTimeout) {
            clearTimeout(this.focusTimeout);
        }
        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }
        this.beforeClose();
    };

    Overlay.prototype.getAnimation = function getAnimation(props) {
        if (props.animation === false) {
            return false;
        }

        if (props.animation) {
            return props.animation;
        }

        return this.getAnimationByAlign(props.align);
    };

    Overlay.prototype.getAnimationByAlign = function getAnimationByAlign(align) {
        switch (align[0]) {
            case 't':
                return {
                    in: 'expandInDown',
                    out: 'expandOutUp'
                };
            case 'b':
                return {
                    in: 'expandInUp',
                    out: 'expandOutDown'
                };
            default:
                return {
                    in: 'expandInDown',
                    out: 'expandOutUp'
                };
        }
    };

    Overlay.prototype.addAnimationEvents = function addAnimationEvents() {
        var _this3 = this;

        setTimeout(function () {
            var node = _this3.getContentNode();
            if (node) {
                var id = (0, _util.guid)();

                _this3._animation = _util.events.on(node, _util.support.animation.end, _this3.handleAnimateEnd.bind(_this3, id));

                var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
                var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
                var time = animationDelay + animationDuration;
                if (time) {
                    _this3.timeoutMap[id] = setTimeout(function () {
                        _this3.handleAnimateEnd(id);
                    }, time * 1000 + 200);
                }
            }
        });
    };

    Overlay.prototype.handlePosition = function handlePosition(config) {
        var align = config.align.join(' ');

        if (!('animation' in this.props) && this.props.needAdjust && this.lastAlign !== align) {
            this.setState({
                animation: this.getAnimationByAlign(align)
            });
        }

        this.lastAlign = align;
    };

    Overlay.prototype.handleAnimateEnd = function handleAnimateEnd(id) {
        if (this.timeoutMap[id]) {
            clearTimeout(this.timeoutMap[id]);
        }
        delete this.timeoutMap[id];

        if (this._animation) {
            this._animation.off();
            this._animation = null;
        }

        if (!this._isMounted) {
            return;
        }

        if (this.state.status === 'leaving') {
            this.setState({
                visible: false,
                status: 'none'
            });

            this.onLeaved();
        } else if (this.state.status === 'entering') {
            this.setState({
                status: 'none'
            });

            this.onEntered();
        }
    };

    Overlay.prototype.enter = function enter() {
        var _this4 = this;

        this.setState({
            visible: true,
            status: 'entering'
        }, function () {
            // NOTE: setState callback (second argument) now fires immediately after componentDidMount / componentDidUpdate instead of after all components have rendered.
            setTimeout(function () {
                if (!_this4._isDestroyed) {
                    _this4.onEntering();
                }
            });
        });
    };

    Overlay.prototype.leave = function leave() {
        this.setState({
            status: 'leaving'
        });

        this.onLeaving();
    };

    Overlay.prototype.onEntering = function onEntering() {
        var wrapperNode = this.getWrapperNode();
        _util.dom.addClass(wrapperNode, 'opened');
        this.props.onOpen();
    };

    Overlay.prototype.onLeaving = function onLeaving() {
        var wrapperNode = this.getWrapperNode();
        _util.dom.removeClass(wrapperNode, 'opened');
        this.props.onClose();
    };

    Overlay.prototype.onEntered = function onEntered() {
        _manager2.default.addOverlay(this);
        this.setFocusNode();
        this.props.afterOpen();
    };

    Overlay.prototype.onLeaved = function onLeaved() {
        _manager2.default.removeOverlay(this);
        this.setFocusNode();
        this.props.afterClose();
    };

    Overlay.prototype.beforeOpen = function beforeOpen() {
        if (this.props.disableScroll) {
            if (modals.length === 0) {
                var style = {
                    overflowY: 'hidden'
                };
                var body = document.body;
                bodyOverflowY = body.style.overflowY;
                if (hasScroll()) {
                    bodyPaddingRight = body.style.paddingRight;
                    style.paddingRight = _util.dom.getStyle(body, 'paddingRight') + _util.dom.scrollbar().width + 'px';
                }

                _util.dom.setStyle(body, style);
            }
            modals.push(this);
        }
    };

    Overlay.prototype.beforeClose = function beforeClose() {
        if (this.props.disableScroll) {
            var index = modals.indexOf(this);
            if (index > -1) {
                if (modals.length === 1) {
                    var style = {
                        overflowY: bodyOverflowY
                    };
                    if (hasScroll()) {
                        style.paddingRight = bodyPaddingRight;
                    }

                    _util.dom.setStyle(document.body, style);

                    bodyOverflowY = undefined;
                    bodyPaddingRight = undefined;
                }

                modals.splice(index, 1);
            }
        }
    };

    Overlay.prototype.setFocusNode = function setFocusNode() {
        var _this5 = this;

        if (!this.props.autoFocus) {
            return;
        }

        if (this.state.visible && !this._hasFocused) {
            saveLastFocusNode();
            // 这个时候很可能上一个弹层的关闭事件还未触发，导致焦点已经回到触发的元素
            // 这里延时处理一下，延时的时间为 document.click 捕获触发的延时时间
            this.focusTimeout = setTimeout(function () {
                var node = _this5.getContentNode();
                if (node) {
                    var focusNodeList = getFocusNodeList(node);
                    if (focusNodeList.length) {
                        focusNodeList[0].focus();
                    }
                    _this5._hasFocused = true;
                }
            }, 100);
        } else if (!this.state.visible && this._hasFocused) {
            backLastFocusNode();
            this._hasFocused = false;
        }
    };

    Overlay.prototype.getContent = function getContent() {
        return this.contentRef;
    };

    Overlay.prototype.getContentNode = function getContentNode() {
        return (0, _reactDom.findDOMNode)(this.contentRef);
    };

    Overlay.prototype.getWrapperNode = function getWrapperNode() {
        return this.gatewayRef ? this.gatewayRef.getChildNode() : null;
    };

    Overlay.prototype.addDocumentEvents = function addDocumentEvents() {
        if (this.props.canCloseByEsc) {
            this._keydownEvents = _util.events.on(document, 'keydown', this.handleDocumentKeyDown);
        }
        if (this.props.canCloseByOutSideClick) {
            this._clickEvents = _util.events.on(document, 'click', this.handleDocumentClick);
        }
    };

    Overlay.prototype.removeDocumentEvents = function removeDocumentEvents() {
        if (this._keydownEvents) {
            this._keydownEvents.off();
            this._keydownEvents = null;
        }
        if (this._clickEvents) {
            this._clickEvents.off();
            this._clickEvents = null;
        }
    };

    Overlay.prototype.handleDocumentKeyDown = function handleDocumentKeyDown(e) {
        if (this.state.visible && e.keyCode === _util.KEYCODE.ESC && _manager2.default.isCurrentOverlay(this)) {
            this.props.onRequestClose('keyboard', e);
        }
    };

    Overlay.prototype.handleDocumentClick = function handleDocumentClick(e) {
        var _this6 = this;

        if (this.state.visible) {
            var safeNode = this.props.safeNode;

            var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
            safeNodes.unshift(function () {
                return _this6.getWrapperNode();
            });

            for (var i = 0; i < safeNodes.length; i++) {
                var node = (0, _findNode2.default)(safeNodes[i], this.props);
                // HACK: 如果触发点击的节点是弹层内部的节点，并且在被点击后立即销毁，那么此时无法使用 node.contains(e.target)
                // 来判断此时点击的节点是否是弹层内部的节点，额外判断
                if (node && (node === e.target || node.contains(e.target) || e.target !== document && !document.documentElement.contains(e.target))) {
                    return;
                }
            }

            this.props.onRequestClose('docClick', e);
        }
    };

    Overlay.prototype.handleMaskClick = function handleMaskClick(e) {
        if (this.props.canCloseByMask) {
            this.props.onRequestClose('maskClick', e);
        }
    };

    // 兼容过去的用法: this.popupRef.getInstance().overlay.getInstance().getContentNode()
    Overlay.prototype.getInstance = function getInstance() {
        return this;
    };

    Overlay.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            style = _props.style,
            propChildren = _props.children,
            target = _props.target,
            align = _props.align,
            offset = _props.offset,
            container = _props.container,
            hasMask = _props.hasMask,
            needAdjust = _props.needAdjust,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            wrapperStyle = _props.wrapperStyle,
            rtl = _props.rtl,
            propShouldUpdatePosition = _props.shouldUpdatePosition,
            cache = _props.cache,
            wrapperClassName = _props.wrapperClassName,
            onMaskMouseEnter = _props.onMaskMouseEnter,
            onMaskMouseLeave = _props.onMaskMouseLeave;
        var _state = this.state,
            stateVisible = _state.visible,
            status = _state.status,
            animation = _state.animation;


        var children = stateVisible || cache && this._isMounted ? propChildren : null;
        if (children) {
            var _classnames;

            var child = _react.Children.only(children);
            var childClazz = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'overlay-inner'] = true, _classnames[animation.in] = status === 'entering', _classnames[animation.out] = status === 'leaving', _classnames[child.props.className] = !!child.props.className, _classnames[className] = !!className, _classnames));
            if (typeof child.ref === 'string') {
                throw new Error('Can not set ref by string in Overlay, use function instead.');
            }

            children = _react2.default.cloneElement(child, {
                className: childClazz,
                style: _extends({}, child.props.style, style),
                ref: makeChain(this.saveContentRef, child.ref),
                'aria-hidden': !stateVisible && cache && this._isMounted
            });

            if (align) {
                var shouldUpdatePosition = status === 'leaving' ? false : propShouldUpdatePosition;
                children = _react2.default.createElement(_position2.default, {
                    children: children, target: target, align: align, offset: offset, needAdjust: needAdjust,
                    beforePosition: beforePosition,
                    onPosition: makeChain(this.handlePosition, onPosition),
                    shouldUpdatePosition: shouldUpdatePosition, rtl: rtl
                });
            }

            var wrapperClazz = (0, _classnames3.default)([prefix + 'overlay-wrapper', wrapperClassName]);
            var newWrapperStyle = _extends({}, {
                display: stateVisible ? '' : 'none'
            }, wrapperStyle);

            children = _react2.default.createElement(
                'div',
                { className: wrapperClazz, style: newWrapperStyle, dir: rtl ? 'rtl' : undefined },
                hasMask ? _react2.default.createElement('div', { className: prefix + 'overlay-backdrop',
                    onClick: this.handleMaskClick,
                    onMouseEnter: onMaskMouseEnter,
                    onMouseLeave: onMaskMouseLeave,
                    dir: rtl ? 'rtl' : undefined }) : null,
                children
            );
        }

        return _react2.default.createElement(_gateway2.default, _extends({ container: container, target: target, children: children }, { ref: this.saveGatewayRef }));
    };

    return Overlay;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 弹层内容
     */
    children: _propTypes2.default.any,
    /**
     * 是否显示弹层
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层请求关闭时触发事件的回调函数
     * @param {String} type 弹层关闭的来源
     * @param {Object} e DOM 事件
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * 弹层定位的参照元素
     */
    target: _propTypes2.default.any,
    /**
     * 弹层相对于参照元素的定位, 详见开发指南的[定位部分](#定位)
     */
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /**
     * 弹层相对于参照元素定位的微调
     */
    offset: _propTypes2.default.array,
    /**
     * 渲染组件的容器，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点
     */
    container: _propTypes2.default.any,
    /**
     * 是否显示遮罩
     */
    hasMask: _propTypes2.default.bool,
    /**
     * 是否支持 esc 按键关闭弹层
     */
    canCloseByEsc: _propTypes2.default.bool,
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     */
    canCloseByOutSideClick: _propTypes2.default.bool,
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     */
    canCloseByMask: _propTypes2.default.bool,
    /**
     * 弹层打开前触发事件的回调函数
     */
    beforeOpen: _propTypes2.default.func,
    /**
     * 弹层打开时触发事件的回调函数
     */
    onOpen: _propTypes2.default.func,
    /**
     * 弹层打开后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterOpen: _propTypes2.default.func,
    /**
     * 弹层关闭前触发事件的回调函数
     */
    beforeClose: _propTypes2.default.func,
    /**
     * 弹层关闭时触发事件的回调函数
     */
    onClose: _propTypes2.default.func,
    /**
     * 弹层关闭后触发事件的回调函数, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 弹层定位完成前触发的事件
     */
    beforePosition: _propTypes2.default.func,
    /**
     * 弹层定位完成时触发的事件
     * @param {Object} config 定位的参数
     * @param {Array} config.align 对齐方式，如 ['cc', 'cc']（如果开启 needAdjust，可能和预先设置的 align 不同）
     * @param {Number} config.top 距离视口顶部距离
     * @param {Number} config.left 距离视口左侧距离
     * @param {Object} node 定位参照的容器节点
     */
    onPosition: _propTypes2.default.func,
    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     */
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     */
    needAdjust: _propTypes2.default.bool,
    /**
     * 是否禁用页面滚动
     */
    disableScroll: _propTypes2.default.bool,
    /**
     * 隐藏时是否保留子节点
     */
    cache: _propTypes2.default.bool,
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     */
    safeNode: _propTypes2.default.any,
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName: _propTypes2.default.string,
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle: _propTypes2.default.object,
    /**
     * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
     * @default { in: 'expandInDown', out: 'expandOutUp' }
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
    onMaskMouseEnter: _propTypes2.default.func,
    onMaskMouseLeave: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    visible: false,
    onRequestClose: noop,
    target: _position2.default.VIEWPORT,
    align: 'tl bl',
    offset: [0, 0],
    hasMask: false,
    canCloseByEsc: true,
    canCloseByOutSideClick: true,
    canCloseByMask: true,
    beforeOpen: noop,
    onOpen: noop,
    afterOpen: noop,
    beforeClose: noop,
    onClose: noop,
    afterClose: noop,
    beforePosition: noop,
    onPosition: noop,
    onMaskMouseEnter: noop,
    onMaskMouseLeave: noop,
    shouldUpdatePosition: false,
    autoFocus: false,
    needAdjust: true,
    disableScroll: false,
    cache: false
}, _temp);
Overlay.displayName = 'Overlay';
exports.default = Overlay;
module.exports = exports['default'];

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var makeChain = _util.func.makeChain;
var Gateway = (_temp2 = _class = function (_Component) {
    _inherits(Gateway, _Component);

    function Gateway() {
        var _temp, _this, _ret;

        _classCallCheck(this, Gateway);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveChildRef = function (ref) {
            _this.child = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Gateway.prototype.componentDidMount = function componentDidMount() {
        this.containerNode = this.getContainerNode(this.props);
        this.forceUpdate();
    };

    Gateway.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.containerNode = this.getContainerNode(nextProps);
    };

    Gateway.prototype.getContainerNode = function getContainerNode(props) {
        var targetNode = (0, _findNode2.default)(props.target);
        return (0, _findNode2.default)(props.container, targetNode);
    };

    Gateway.prototype.getChildNode = function getChildNode() {
        return (0, _reactDom.findDOMNode)(this.child);
    };

    Gateway.prototype.render = function render() {
        if (!this.containerNode) {
            return null;
        }

        var children = this.props.children;

        var child = children ? _react.Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error('Can not set ref by string in Gateway, use function instead.');
        }
        child = _react2.default.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref)
        });

        return (0, _reactDom.createPortal)(child, this.containerNode);
    };

    return Gateway;
}(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    container: _propTypes2.default.any,
    target: _propTypes2.default.any
}, _class.defaultProps = {
    container: function container() {
        return document.body;
    }
}, _temp2);
Gateway.displayName = 'Gateway';
exports.default = Gateway;
module.exports = exports['default'];

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _position = __webpack_require__(57);

var _position2 = _interopRequireDefault(_position);

var _findNode = __webpack_require__(13);

var _findNode2 = _interopRequireDefault(_findNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;
var getStyle = _util.dom.getStyle;

var place = _position2.default.place;

var Position = (_temp = _class = function (_Component) {
    _inherits(Position, _Component);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        bindCtx(_this, ['handleResize']);
        return _this;
    }

    Position.prototype.componentDidMount = function componentDidMount() {
        this.setPosition();

        if (this.props.needListenResize) {
            _util.events.on(window, 'resize', this.handleResize);
        }
    };

    Position.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('align' in nextProps && nextProps.align !== this.props.align || nextProps.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }
    };

    Position.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.shouldUpdatePosition) {
            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    };

    Position.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.needListenResize) {
            _util.events.off(window, 'resize', this.handleResize);
        }

        clearTimeout(this.resizeTimeout);
    };

    Position.prototype.setPosition = function setPosition() {
        var _props = this.props,
            align = _props.align,
            offset = _props.offset,
            beforePosition = _props.beforePosition,
            onPosition = _props.onPosition,
            needAdjust = _props.needAdjust,
            rtl = _props.rtl;


        beforePosition();

        var contentNode = this.getContentNode();
        var targetNode = this.getTargetNode();
        if (contentNode && targetNode) {
            var resultAlign = place({
                pinElement: contentNode,
                baseElement: targetNode,
                align: align,
                offset: offset,
                needAdjust: needAdjust,
                isRtl: rtl
            });
            var top = getStyle(contentNode, 'top');
            var left = getStyle(contentNode, 'left');

            onPosition({
                align: resultAlign.split(' '),
                top: top,
                left: left
            }, contentNode);
        }
    };

    Position.prototype.getContentNode = function getContentNode() {
        return (0, _reactDom.findDOMNode)(this);
    };

    Position.prototype.getTargetNode = function getTargetNode() {
        var target = this.props.target;


        return target === _position2.default.VIEWPORT ? _position2.default.VIEWPORT : (0, _findNode2.default)(target, this.props);
    };

    Position.prototype.handleResize = function handleResize() {
        var _this2 = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            _this2.setPosition();
        }, 200);
    };

    Position.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return Position;
}(_react.Component), _class.VIEWPORT = _position2.default.VIEWPORT, _class.propTypes = {
    children: _propTypes2.default.node,
    target: _propTypes2.default.any,
    align: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    offset: _propTypes2.default.array,
    beforePosition: _propTypes2.default.func,
    onPosition: _propTypes2.default.func,
    needAdjust: _propTypes2.default.bool,
    needListenResize: _propTypes2.default.bool,
    shouldUpdatePosition: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    align: 'tl bl',
    offset: [0, 0],
    beforePosition: noop,
    onPosition: noop,
    needAdjust: true,
    needListenResize: true,
    shouldUpdatePosition: false,
    rtl: false
}, _temp);
Position.displayName = 'Position';
exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(62);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assign = __webpack_require__(39);

var ReactPropTypesSecret = __webpack_require__(11);
var checkPropTypes = __webpack_require__(40);

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(_extends({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(11);
  var loggedTypeFailures = {};

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(11);

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.initLocales = initLocales;
exports.setLanguage = setLanguage;
exports.setLocale = setLocale;
exports.setDirection = setDirection;
exports.getLocale = getLocale;
exports.getLanguage = getLanguage;
exports.getDirection = getDirection;
exports.config = config;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _util = __webpack_require__(2);

var _getContextProps = __webpack_require__(25);

var _getContextProps2 = _interopRequireDefault(_getContextProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var shallowEqual = _util.obj.shallowEqual;


function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

var globalLocales = void 0;
var currentGlobalLanguage = 'zh-cn';
var currentGlobalLocale = {};
var currentGlobalRtl = false;

function initLocales(locales) {
    globalLocales = locales;
    currentGlobalLocale = locales[currentGlobalLanguage];
}

function setLanguage(language) {
    if (globalLocales) {
        currentGlobalLanguage = language;
        currentGlobalLocale = globalLocales[language];
    }
}

function setLocale(locale) {
    currentGlobalLocale = _extends({}, globalLocales ? globalLocales[currentGlobalLanguage] : {}, locale);
}

function setDirection(dir) {
    currentGlobalRtl = dir === 'rtl';
}

function getLocale() {
    return currentGlobalLocale;
}

function getLanguage() {
    return currentGlobalLanguage;
}

function getDirection() {
    return currentGlobalRtl;
}

function config(Component) {
    var _class, _temp;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (Component.prototype.shouldComponentUpdate === undefined) {
        Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.pure) {
                return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            }

            return true;
        };
    }

    var ConfigedComponent = (_temp = _class = function (_React$Component) {
        _inherits(ConfigedComponent, _React$Component);

        function ConfigedComponent(props, context) {
            _classCallCheck(this, ConfigedComponent);

            var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

            _this._getInstance = _this._getInstance.bind(_this);
            _this._deprecated = _this._deprecated.bind(_this);
            return _this;
        }

        ConfigedComponent.prototype._getInstance = function _getInstance(ref) {
            var _this2 = this;

            this._instance = ref;

            if (this._instance && options.exportNames) {
                options.exportNames.forEach(function (name) {
                    var field = _this2._instance[name];
                    if (typeof field === 'function') {
                        _this2[name] = field.bind(_this2._instance);
                    } else {
                        _this2[name] = field;
                    }
                });
            }
        };

        ConfigedComponent.prototype._deprecated = function _deprecated() {
            if (this.context.nextWarning !== false) {
                _util.log.deprecated.apply(_util.log, arguments);
            }
        };

        ConfigedComponent.prototype.getInstance = function getInstance() {
            return this._instance;
        };

        ConfigedComponent.prototype.render = function render() {
            var _props = this.props,
                prefix = _props.prefix,
                locale = _props.locale,
                pure = _props.pure,
                rtl = _props.rtl,
                others = _objectWithoutProperties(_props, ['prefix', 'locale', 'pure', 'rtl']);

            var _context = this.context,
                nextPrefix = _context.nextPrefix,
                _context$nextLocale = _context.nextLocale,
                nextLocale = _context$nextLocale === undefined ? {} : _context$nextLocale,
                nextPure = _context.nextPure,
                nextRtl = _context.nextRtl;


            var displayName = options.componentName || getDisplayName(Component);
            var contextProps = (0, _getContextProps2.default)({ prefix: prefix, locale: locale, pure: pure, rtl: rtl }, {
                nextPrefix: nextPrefix,
                nextLocale: _extends({}, currentGlobalLocale, nextLocale),
                nextPure: nextPure,
                nextRtl: typeof nextRtl === 'boolean' ? nextRtl : currentGlobalRtl === true ? true : undefined
            }, displayName);

            var newContextProps = ['prefix', 'locale', 'pure', 'rtl'].reduce(function (ret, name) {
                if (typeof contextProps[name] !== 'undefined') {
                    ret[name] = contextProps[name];
                }
                return ret;
            }, {});

            var newOthers = options.transform ? options.transform(others, this._deprecated) : others;

            return _react2.default.createElement(Component, _extends({}, newOthers, newContextProps, {
                ref: this._getInstance
            }));
        };

        return ConfigedComponent;
    }(_react2.default.Component), _class.propTypes = _extends({}, Component.propTypes || {}, {
        prefix: _propTypes2.default.string,
        locale: _propTypes2.default.object,
        pure: _propTypes2.default.bool,
        rtl: _propTypes2.default.bool
    }), _class.contextTypes = _extends({}, Component.contextTypes || {}, {
        nextPrefix: _propTypes2.default.string,
        nextLocale: _propTypes2.default.object,
        nextPure: _propTypes2.default.bool,
        nextRtl: _propTypes2.default.bool,
        nextWarning: _propTypes2.default.bool
    }), _temp);
    ConfigedComponent.displayName = 'ConfigedComponent';


    ConfigedComponent.displayName = 'Config(' + getDisplayName(Component) + ')';

    (0, _hoistNonReactStatics2.default)(ConfigedComponent, Component);

    return ConfigedComponent;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.on = on;
exports.once = once;
/**
 * 取消事件绑定
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   [useCapture=false] 是否开启事件捕获优先
 */
function _off(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.removeEventListener) {
        node.removeEventListener(eventName, callback, useCapture || false);
    }
}

/**
 * 绑定事件
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Object}               返回的object中包含一个off方法，用于取消事件监听
 *
 * @example
 * const handler = events.on(document.body, 'click', e => {
 *     // handle click ...
 * });
 * // 取消事件绑定
 * handler.off();
 */
exports.off = _off;
function on(node, eventName, callback, useCapture) {
    /* istanbul ignore else */
    if (node.addEventListener) {
        node.addEventListener(eventName, callback, useCapture || false);
    }

    return {
        off: function off() {
            return _off(node, eventName, callback, useCapture);
        }
    };
}

/**
 * 绑定事件，只执行一次后销毁
 * @param  {*}   node       DOM节点或任何可以绑定事件的对象
 * @param  {String}   eventName  事件名
 * @param  {Function} callback   回调方法
 * @param  {Boolean}   useCapture 是否开启事件捕获优先
 * @return {Function}             返回的object中包含一个off方法，用于取消事件监听
 */
function once(node, eventName, callback, useCapture) {
    return on(node, eventName, function __fn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        callback.apply(this, args);

        // 由于addEventListener中的参数options只在Chrome 55、Firefox(Gecko)以上版本支持，故还是用传统的方法实现once
        _off(node, eventName, __fn, useCapture);
    }, useCapture);
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.noop = undefined;
exports.makeChain = makeChain;
exports.bindCtx = bindCtx;
exports.promiseCall = promiseCall;

var _object = __webpack_require__(9);

/**
 * 一个空方法，返回入参本身或空对象
 */
var noop = exports.noop = function noop() {};

/**
 * 将N个方法合并为一个链式调用的方法
 * @return {Function}     合并后的方法
 * 参考 https://github.com/react-component/util/
 *
 * @example
 * func.makeChain(this.handleChange, this.props.onChange);
 */
function makeChain() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    if (fns.length === 1) {
        return fns[0];
    }

    return function chainedFunction() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        for (var i = 0, j = fns.length; i < j; i++) {
            if (fns[i] && fns[i].apply) {
                fns[i].apply(this, args);
            }
        }
    };
}

/**
 * 批量改变方法的上下文
 * 此方法在react组件中很有用，在constructor中批量将组件上的方法执行上下文绑定到组件本身
 * 注意：用bind改变函数运行的上下文只会生效一次
 * @param  {Object} ctx 方法挂载的对象以及执行的上下文
 * @param  {Array<String>} fns 方法名列表
 *
 * @example
 * func.bindCtx(this, ['handleClick', 'handleChange']);
 */
function bindCtx(ctx, fns, ns) {
    if (typeof fns === 'string') {
        fns = [fns];
    }

    // 方法的挂载空间，如果不传，默认与ctx相同
    ns = ns || ctx;

    fns.forEach(function (fnName) {
        // 这里不要添加空方法判断，由调用者保证正确性，否则出了问题无法排查
        ns[fnName] = ns[fnName].bind(ctx);
    });
}

/**
 * 用于执行回调方法后的逻辑
 * @param  {*} ret            回调方法执行结果
 * @param  {Function} success 执行结果返回非false的回调
 * @param  {Function} [failure=noop] 执行结果返回false的回调
 */
function promiseCall(ret, success) {
    var failure = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;

    if ((0, _object.isPromise)(ret)) {
        return ret.then(function (result) {
            success(result);
            return result;
        }).catch(function (e) {
            failure(e);
            // throw e;
        });
    }

    return ret !== false ? success(ret) : failure(ret);
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.deprecated = deprecated;
exports.warning = warning;

var _env = __webpack_require__(28);

/* eslint no-console: 0 */

/**
 * 反对使用某一方法或属性的警告
 * @param  {String} props     过时的属性或方法名
 * @param  {String} instead   替代的属性或方法名
 * @param  {String} component 组件名
 *
 * @example
 * log.deprecated('onBeforeClose', 'beforeClose', 'Dialog');
 * // Warning: onBeforeClose is deprecated at [ Dialog ], use [ beforeClose ] instead of it.
 */
function deprecated(props, instead, component) {
    /* istanbul ignore else */
    if (!(0, _env.isProduction)() && typeof console !== 'undefined' && console.error) {
        return console.error('Warning: [ ' + props + ' ] is deprecated at [ ' + component + ' ], ' + ('use [ ' + instead + ' ] instead of it.'));
    }
}

/**
 * 控制台警告日志
 * @param  {String} msg
 */
function warning(msg) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined' && console.error) {
        return console.error('Warning: ' + msg);
    }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flex = exports.transition = exports.animation = undefined;

var _dom = __webpack_require__(26);

var _object = __webpack_require__(9);

var animationEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd',
    animation: 'animationend'
};

var transitionEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    OTransition: 'oTransitionEnd',
    transition: 'transitionend'
};

/**
 * 是否支持某些动效事件，如果支持，返回相应的end事件名
 * @private
 * @param  {Object<String>} names
 * @return {Object|false}
 */
function _supportEnd(names) {
    /* istanbul ignore if */
    if (!_dom.hasDOM) {
        return false;
    }

    var el = document.createElement('div');
    var ret = false;

    (0, _object.each)(names, function (val, key) {
        /* istanbul ignore else */
        if (el.style[key] !== undefined) {
            ret = { end: val };
            return false;
        }
    });

    return ret;
}

/**
 * 是否支持某些CSS属性
 * @private
 * @param  {Object<Array<String>>} names
 * @return {Boolean}       is support
 */
function _supportCSS(names) {
    /* istanbul ignore if */
    if (!_dom.hasDOM) {
        return false;
    }

    var el = document.createElement('div');
    var ret = false;

    (0, _object.each)(names, function (val, key) {
        (0, _object.each)(val, function (item) {
            try {
                el.style[key] = item;
                ret = ret || el.style[key] === item;
            } catch (e) {
                // It will be throw error when set unknown property under IE8
            }
            return !ret; // 如果有一个支持就返回false，后面不需要再判断
        });

        return !ret;
    });

    return ret;
}

/**
 * 是否支持animation以及动画结束事件名
 * @type {Object|false}
 * @property {String} end 动画结束事件名
 */
var animation = exports.animation = _supportEnd(animationEndEventNames);

/**
 * 是否支持transition以及过滤效果结束事件名
 * @type {Object|false}
 * @property {String} end 过渡效果结束事件名
 */
var transition = exports.transition = _supportEnd(transitionEventNames);

/**
 * 是否支持flex属性
 * @type {Boolean}
 */
var flex = exports.flex = _supportCSS({
    display: ['flex', '-webkit-flex', '-moz-flex', '-ms-flexbox']
});

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getFocusNodeList = getFocusNodeList;
exports.saveLastFocusNode = saveLastFocusNode;
exports.clearLastFocusNode = clearLastFocusNode;
exports.backLastFocusNode = backLastFocusNode;
exports.limitTabRange = limitTabRange;

var _keycode = __webpack_require__(29);

var _keycode2 = _interopRequireDefault(_keycode);

var _object = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用于切换页面元素的焦点
 */

/**
 * 元素是否可见
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isVisible(node) {
    while (node) {
        if (node === document.body || node === document.documentElement) {
            break;
        }
        if (node.style.display === 'none' || node.style.visibility === 'hidden') {
            return false;
        }
        node = node.parentNode;
    }
    return true;
}

/**
 * 元素是否可以获取焦点
 * @private
 * @param   {Element}  node
 * @return  {Boolean}
 */
function _isFocusable(node) {
    var nodeName = node.nodeName.toLowerCase();
    var tabIndex = parseInt(node.getAttribute('tabindex'), 10);
    var hasTabIndex = !isNaN(tabIndex) && tabIndex > -1;

    if (_isVisible(node)) {
        if (nodeName === 'input') {
            return !node.disabled && node.type !== 'hidden';
        } else if (['select', 'textarea', 'button'].indexOf(nodeName) > -1) {
            return !node.disabled;
        } else if (nodeName === 'a') {
            return node.getAttribute('href') || hasTabIndex;
        } else {
            return hasTabIndex;
        }
    }
    return false;
}

/**
 * 列出能获取焦点的子节点
 * @param  {Element} node 容器节点
 * @return {Array<Element>}
 */
function getFocusNodeList(node) {
    var res = [];
    var nodeList = node.querySelectorAll('*');

    (0, _object.each)(nodeList, function (item) {
        if (_isFocusable(item)) {
            var method = item.getAttribute('data-auto-focus') ? 'unshift' : 'push';
            res[method](item);
        }
    });

    if (_isFocusable(node)) {
        res.unshift(node);
    }

    return res;
}

// 用于记录上一次获得焦点的无素
var lastFocusElement = null;

/**
 * 保存最近一次获得焦点的无素
 */
function saveLastFocusNode() {
    lastFocusElement = document.activeElement;
}

/**
 * 清除焦点记录
 */
function clearLastFocusNode() {
    lastFocusElement = null;
}

/**
 * 尝试将焦点切换到上一个元素
 */
function backLastFocusNode() {
    if (lastFocusElement) {
        try {
            // 元素可能已经被移动了
            lastFocusElement.focus();
        } catch (e) {
            // ignore ...
        }
    }
}

/**
 * 在限制的范围内切换焦点
 * @param  {Element} node 容器节点
 * @param  {Event} e      键盘事件
 */
function limitTabRange(node, e) {
    if (e.keyCode === _keycode2.default.TAB) {
        var tabNodeList = getFocusNodeList(node);
        var maxIndex = tabNodeList.length - 1;
        var index = tabNodeList.indexOf(document.activeElement);

        if (index > -1) {
            var targetIndex = index + (e.shiftKey ? -1 : 1);
            targetIndex < 0 && (targetIndex = maxIndex);
            targetIndex > maxIndex && (targetIndex = 0);
            tabNodeList[targetIndex].focus();
            e.preventDefault();
        }
    }
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (prefix) {
  prefix = prefix || '';

  return prefix + (timestamp++).toString(36);
};

var timestamp = Date.now();

/**
 * 生成全局唯一的id
 * @param  {String} [prefix=''] 前缀字符串
 * @return {String}
 *
 * @example
 * guid(); // j7jv509c
 * guid('prefix-'); // prefix-j7jv509d
 */
module.exports = exports['default'];

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getContextProps = __webpack_require__(25);

var _getContextProps2 = _interopRequireDefault(_getContextProps);

var _config = __webpack_require__(42);

var _consumer = __webpack_require__(50);

var _consumer2 = _interopRequireDefault(_consumer);

var _cache = __webpack_require__(51);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var childContextCache = new _cache2.default();

/**
 * ConfigProvider
 * @propsExtends false
 */
var ConfigProvider = (_temp = _class = function (_Component) {
    _inherits(ConfigProvider, _Component);

    /**
     * 传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件
     * @param {Object} props 组件的 props
     * @param {String} displayName 组件的 displayName
     * @returns {Object} 新的 context props
     */
    function ConfigProvider() {
        _classCallCheck(this, ConfigProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

        childContextCache.add(_this, _extends({}, childContextCache.get(_this, {}), _this.getChildContext()));
        return _this;
    }

    /**
     * 传入组件，生成受 ConfigProvider 控制的 HOC 组件
     * @param {Component} Component 组件类
     * @param {Object} options 可选项
     * @returns {Component} HOC
     */


    ConfigProvider.prototype.getChildContext = function getChildContext() {
        var _props = this.props,
            prefix = _props.prefix,
            locale = _props.locale,
            pure = _props.pure,
            warning = _props.warning,
            rtl = _props.rtl;


        return {
            nextPrefix: prefix,
            nextLocale: locale,
            nextPure: pure,
            nextRtl: rtl,
            nextWarning: warning
        };
    };

    ConfigProvider.prototype.componentWillMount = function componentWillMount() {
        this.setMomentLocale(this.props.locale);
    };

    ConfigProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.locale !== nextProps.locale) {
            this.setMomentLocale(nextProps.locale);
        }
    };

    ConfigProvider.prototype.componentDidUpdate = function componentDidUpdate() {
        childContextCache.add(this, _extends({}, childContextCache.get(this, {}), this.getChildContext()));
    };

    ConfigProvider.prototype.componentWillUnmount = function componentWillUnmount() {
        childContextCache.remove(this);
    };

    ConfigProvider.prototype.setMomentLocale = function setMomentLocale(locale) {
        var moment = void 0;
        try {
            moment = __webpack_require__(24);
        } catch (e) {
            // ignore
        }

        if (moment && locale) {
            moment.locale(locale.momentLocale);
        }
    };

    ConfigProvider.prototype.render = function render() {
        return _react.Children.only(this.props.children);
    };

    return ConfigProvider;
}(_react.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 国际化文案对象，属性为组件的 displayName
     */
    locale: _propTypes2.default.object,
    /**
     * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
     */
    pure: _propTypes2.default.bool,
    /**
     * 是否在开发模式下显示组件属性被废弃的 warning 提示
     */
    warning: _propTypes2.default.bool,
    /**
     * 是否开启 rtl 模式
     */
    rtl: _propTypes2.default.bool,
    /**
     * 组件树
     */
    children: _propTypes2.default.element
}, _class.defaultProps = {
    warning: true
}, _class.childContextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    nextRtl: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool
}, _class.config = function (Component, options) {
    return (0, _config.config)(Component, options);
}, _class.getContextProps = function (props, displayName) {
    return (0, _getContextProps2.default)(props, childContextCache.root() || {}, displayName);
}, _class.initLocales = _config.initLocales, _class.setLanguage = _config.setLanguage, _class.setLocale = _config.setLocale, _class.setDirection = _config.setDirection, _class.getLanguage = _config.getLanguage, _class.getLocale = _config.getLocale, _class.getDirection = _config.getDirection, _class.Consumer = _consumer2.default, _class.getContext = function () {
    var _ref = childContextCache.root() || {},
        nextPrefix = _ref.nextPrefix,
        nextLocale = _ref.nextLocale,
        nextPure = _ref.nextPure,
        nextRtl = _ref.nextRtl,
        nextWarning = _ref.nextWarning;

    return {
        prefix: nextPrefix,
        locale: nextLocale,
        pure: nextPure,
        rtl: nextRtl,
        warning: nextWarning
    };
}, _temp);
ConfigProvider.displayName = 'ConfigProvider';
exports.default = ConfigProvider;
module.exports = exports['default'];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object with the same values as object and keys
 * generated by running each own enumerable string keyed property
 * of object thru iteratee.
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 */
var mapKeys = function mapKeys(obj, fn) {
    var result = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var value = obj[key];
            var newKey = fn(key, value);
            result[newKey] = value;
        }
    }

    return result;
};

/**
 * Replace specific key with prefix `next`
 * and lowercase first character of the result.
 * @param {String} key
 * @return {String}
 */
var replaceKey = function replaceKey(key) {
    return key.replace(/^(next)([A-Z])/, function (match, p1, p2) {
        return p2.toLowerCase();
    });
};

/**
 * @param {Object} source
 * @return {Object}
 */
var transformContext = function transformContext(source) {
    return mapKeys(source, replaceKey);
};

/**
 * Consumer
 * @param {Object} prop
 * @param {Object} context
 */
var Consumer = function Consumer(_ref, context) {
    var children = _ref.children;
    return typeof children === 'function' ? children(transformContext(context)) : null;
};

/**
 * PropTypes
 * @type {Object}
 * @static
 */
Consumer.propTypes = {
    // Render context as function
    // Function(context: object): ReactElement
    children: _propTypes2.default.func
};

/**
 * ContextTypes (legacy context)
 * @type {Object}
 * @static
 */
Consumer.contextTypes = {
    nextPrefix: _propTypes2.default.string,
    nextLocale: _propTypes2.default.object,
    nextPure: _propTypes2.default.bool,
    newRtl: _propTypes2.default.bool,
    nextWarning: _propTypes2.default.bool
};

exports.default = Consumer;
module.exports = exports['default'];

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache() {
        _classCallCheck(this, Cache);

        this._root = null;
        this._store = new Map();
    }

    Cache.prototype.empty = function empty() {
        return this._store.size === 0;
    };

    Cache.prototype.has = function has(key) {
        return this._store.has(key);
    };

    Cache.prototype.get = function get(key, defaultValue) {
        var res = this.has(key) ? this._store.get(key) : this.root();
        return typeof res === 'undefined' || res === null ? defaultValue : res;
    };

    Cache.prototype.add = function add(key, value) {
        if (this.empty()) {
            this._root = key;
        }
        this._store.set(key, value);
    };

    Cache.prototype.update = function update(key, value) {
        if (this.has(key)) {
            this._store.set(key, value);
        }
    };

    Cache.prototype.remove = function remove(key) {
        this._store.delete(key);
    };

    Cache.prototype.root = function root() {
        return this._store.get(this._root);
    };

    return Cache;
}();

exports.default = Cache;
module.exports = exports['default'];

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(12, function () {
			var newContent = __webpack_require__(12);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

var _balloon = __webpack_require__(55);

var _balloon2 = _interopRequireDefault(_balloon);

var _tooltip = __webpack_require__(59);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_balloon2.default.Tooltip = _configProvider2.default.config(_tooltip2.default, {
    transform: function transform(props, deprecated) {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');

            var _props = props,
                text = _props.text,
                others = _objectWithoutProperties(_props, ['text']);

            props = _extends({ children: text }, others);
        }

        return props;
    }
});
_balloon2.default.Inner = _inner2.default;

exports.default = _configProvider2.default.config(_balloon2.default, {
    transform: function transform(props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');

            var _props2 = props,
                alignment = _props2.alignment,
                others = _objectWithoutProperties(_props2, ['alignment']);

            props = _extends({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange', 'Balloon');

            var _props3 = props,
                onCloseClick = _props3.onCloseClick,
                onVisibleChange = _props3.onVisibleChange,
                _others = _objectWithoutProperties(_props3, ['onCloseClick', 'onVisibleChange']);

            var newOnVisibleChange = function newOnVisibleChange(visible, reason) {
                if (reason === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, reason);
                }
            };
            props = _extends({ onVisibleChange: newOnVisibleChange }, _others);
        }

        return props;
    }
});
module.exports = exports['default'];

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(19);

var _overlay2 = _interopRequireDefault(_overlay);

var _util = __webpack_require__(2);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop;
var Popup = _overlay2.default.Popup;


var alignMap = _alignMap.normalMap;

/** Balloon */
var Balloon = (_temp = _class = function (_React$Component) {
    _inherits(Balloon, _React$Component);

    function Balloon(props, context) {
        _classCallCheck(this, Balloon);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.state = {
            align: props.align,
            visible: 'visible' in props ? props.visible : props.defaultVisible
        };
        _this._onClose = _this._onClose.bind(_this);
        _this._onPosition = _this._onPosition.bind(_this);
        _this._onVisibleChange = _this._onVisibleChange.bind(_this);

        _this._contentId = props.id;
        return _this;
    }

    Balloon.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }

        if ('align' in nextProps) {
            this.setState({
                align: nextProps.align
            });
        }
    };

    Balloon.prototype._onVisibleChange = function _onVisibleChange(visible, trigger) {
        // Not Controlled
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, trigger);

        if (!visible) {
            this.props.onClose();
        }
    };

    Balloon.prototype._onClose = function _onClose(e) {
        this._onVisibleChange(false, 'closeClick');

        //必须加上preventDefault,否则单测IE下报错,出现full page reload 异常
        e.preventDefault();
    };

    Balloon.prototype._onPosition = function _onPosition(res) {
        var rtl = this.props.rtl;

        alignMap = this.props.alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var newAlign = res.align.join(' ');
        var resAlign = void 0;

        var alignKey = 'align';
        if (rtl) {
            alignKey = 'rtlAlign';
        }

        for (var key in alignMap) {
            if (alignMap[key][alignKey] === newAlign) {
                resAlign = key;

                break;
            }
        }

        resAlign = resAlign || this.state.align;
        if (resAlign !== this.state.align) {
            this.setState({
                align: resAlign
            });
        }
    };

    Balloon.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            prefix = _props.prefix,
            className = _props.className,
            alignEdge = _props.alignEdge,
            trigger = _props.trigger,
            triggerType = _props.triggerType,
            children = _props.children,
            closable = _props.closable,
            shouldUpdatePosition = _props.shouldUpdatePosition,
            delay = _props.delay,
            needAdjust = _props.needAdjust,
            safeId = _props.safeId,
            autoFocus = _props.autoFocus,
            safeNode = _props.safeNode,
            onClick = _props.onClick,
            onHover = _props.onHover,
            animation = _props.animation,
            offset = _props.offset,
            style = _props.style,
            container = _props.container,
            popupContainer = _props.popupContainer,
            cache = _props.cache,
            popupStyle = _props.popupStyle,
            popupClassName = _props.popupClassName,
            popupProps = _props.popupProps,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['type', 'prefix', 'className', 'alignEdge', 'trigger', 'triggerType', 'children', 'closable', 'shouldUpdatePosition', 'delay', 'needAdjust', 'safeId', 'autoFocus', 'safeNode', 'onClick', 'onHover', 'animation', 'offset', 'style', 'container', 'popupContainer', 'cache', 'popupStyle', 'popupClassName', 'popupProps', 'rtl']);

        if (container) {
            _util.log.deprecated('container', 'popupContainer', 'Balloon');
        }

        var align = this.state.align;


        alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;
        var _prefix = this.context.prefix || prefix;

        var trOrigin = 'trOrigin';
        if (rtl) {
            trOrigin = 'rtlTrOrigin';
        }

        var _offset = [alignMap[align].offset[0] + offset[0], alignMap[align].offset[1] + offset[1]];
        var transformOrigin = alignMap[align][trOrigin];
        var _style = _extends({ transformOrigin: transformOrigin }, style);

        var content = _react2.default.createElement(
            _inner2.default,
            _extends({}, _util.obj.pickOthers(Object.keys(Balloon.propTypes), others), {
                id: this._contentId,
                prefix: _prefix,
                closable: closable,
                onClose: this._onClose,
                className: className,
                style: _style,
                align: align,
                type: type,
                rtl: rtl,
                alignEdge: alignEdge
            }),
            children
        );

        var triggerProps = {};
        triggerProps['aria-describedby'] = this._contentId;
        triggerProps.tabIndex = '0';

        var newTrigger = _react2.default.cloneElement(trigger, triggerProps);

        return _react2.default.createElement(
            Popup,
            _extends({}, popupProps, {
                trigger: this._contentId ? newTrigger : trigger,
                cache: cache,
                safeId: safeId,
                triggerType: triggerType,
                align: alignMap[align].align,
                offset: _offset,
                visible: this.state.visible,
                onPosition: this._onPosition,
                onClick: onClick,
                onHover: onHover,
                afterClose: this.props.afterClose,
                onVisibleChange: this._onVisibleChange,
                shouldUpdatePosition: shouldUpdatePosition,
                needAdjust: needAdjust,
                animation: animation,
                delay: delay,
                autoFocus: autoFocus,
                safeNode: safeNode,
                container: popupContainer || container,
                className: popupClassName,
                style: popupStyle,
                rtl: rtl
            }),
            content
        );
    };

    return Balloon;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 浮层的内容
     */
    children: _propTypes2.default.any,
    size: _propTypes2.default.string,
    /**
     * 样式类型
     */
    type: _propTypes2.default.oneOf(['normal', 'primary']),
    /**
     * 弹层当前显示的状态
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认显示的状态
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层在显示和隐藏触发的事件
     * @param {Boolean} visible 弹层是否隐藏和显示
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 弹出层对齐方式
     */
    alignEdge: _propTypes2.default.bool,
    /**
     * 是否显示关闭按钮
     */
    closable: _propTypes2.default.bool,
    /**
     * 弹出层位置
     * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
     */
    align: _propTypes2.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
    /**
     * 弹层相对于trigger的定位的微调
     */
    offset: _propTypes2.default.array,
    /**
     * 触发元素
     */
    trigger: _propTypes2.default.any,
    /**
     * 触发行为
     * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),

    onClick: _propTypes2.default.func,
    /**
     * 任何visible为false时会触发的事件
     */
    onClose: _propTypes2.default.func,
    onHover: _propTypes2.default.func,
    /**
     * 是否进行自动位置调整
     */
    needAdjust: _propTypes2.default.bool,
    /**
     * 弹层在触发以后的延时显示, 单位毫秒 ms
     */
    delay: _propTypes2.default.number,
    /**
     * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
     */
    afterClose: _propTypes2.default.func,
    /**
     * 强制更新定位信息
     */
    shouldUpdatePosition: _propTypes2.default.bool,
    /**
     * 弹层出现后是否自动focus到内部第一个元素
     */
    autoFocus: _propTypes2.default.bool,
    /**
     * 安全节点:对于triggetType为click的浮层,会在点击除了浮层外的其它区域时关闭浮层.safeNode用于添加不触发关闭的节点, 值可以是dom节点的id或者是节点的dom对象
     */
    safeNode: _propTypes2.default.string,
    /**
     * 用来指定safeNode节点的id，和safeNode配合使用
     */
    safeId: _propTypes2.default.string,
    /**
     * 配置动画的播放方式
     * @param {String} in 进场动画
     * @param {String} out 出场动画
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),

    /**
     * 弹层的dom节点关闭时是否删除
     */
    cache: _propTypes2.default.bool,
    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
     */
    popupContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    container: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    /**
     * 弹层组件style，透传给Popup
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层组件className，透传给Popup
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps: _propTypes2.default.object,
    /**
     * 弹层id, 传入值才会支持无障碍
     */
    id: _propTypes2.default.string
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    type: 'normal',
    closable: true,
    defaultVisible: false,
    size: 'medium',
    alignEdge: false,
    align: 'b',
    offset: [0, 0],
    trigger: _react2.default.createElement('span', null),
    onClose: noop,
    afterClose: noop,
    onVisibleChange: noop,
    needAdjust: false,
    triggerType: 'hover',
    safeNode: undefined,
    safeId: null,
    autoFocus: false,
    animation: {
        in: 'zoomIn',
        out: 'zoomOut'
    },
    cache: false,
    popupStyle: {},
    popupClassName: '',
    popupProps: {}
}, _temp);
Balloon.displayName = 'Balloon';
exports.default = Balloon;
module.exports = exports['default'];

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var overlayManager = {
    allOverlays: [],

    addOverlay: function addOverlay(overlay) {
        this.removeOverlay(overlay);
        this.allOverlays.unshift(overlay);
    },
    isCurrentOverlay: function isCurrentOverlay(overlay) {
        return overlay && this.allOverlays[0] === overlay;
    },
    removeOverlay: function removeOverlay(overlay) {
        var i = this.allOverlays.indexOf(overlay);
        if (i > -1) {
            this.allOverlays.splice(i, 1);
        }
    }
};

exports.default = overlayManager;
module.exports = exports["default"];

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VIEWPORT = 'viewport';

// IE8 not support pageXOffset
var getPageX = function getPageX() {
    return window.pageXOffset || document.documentElement.scrollLeft;
};
var getPageY = function getPageY() {
    return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * @private get element rect
 * @param       {Element} elem
 * @return      {Object}
 */
function _getElementRect(elem) {
    var offsetTop = 0,
        offsetLeft = 0;

    var offsetHeight = elem.offsetHeight;
    var offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top: offsetTop - (document.documentElement.scrollTop || document.body.scrollTop),
        left: offsetLeft - (document.documentElement.scrollLeft || document.body.scrollLeft),
        height: offsetHeight,
        width: offsetWidth
    };
}

/**
 * @private get viewport size
 * @return {Object}
 */
function _getViewportSize() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
}
var Position = (_temp = _class = function () {
    function Position(props) {
        _classCallCheck(this, Position);

        this.pinElement = props.pinElement;
        this.baseElement = props.baseElement;
        this.align = props.align || 'tl tl';
        this.offset = props.offset || [0, 0];
        this.needAdjust = props.needAdjust || false;
        this.isRtl = props.isRtl || false;
    }

    /**
     * @public static place method
     * @param  {Object}       props
     *     @param  {DOM}      props.pinElement
     *     @param  {DOM}      props.baseElement
     *     @param  {String}   props.align
     *     @param  {Number}   props.offset
     *     @param  {Boolean}  props.needAdjust
     *     @param  {Boolean}  props.isRtl
     * @return {Position}
     */


    Position.prototype.setPosition = function setPosition() {
        var pinElement = this.pinElement;
        var baseElement = this.baseElement;
        var expectedAlign = this._getExpectedAlign();
        var isPinFixed = void 0,
            isBaseFixed = void 0,
            firstPositionResult = void 0;
        if (pinElement === VIEWPORT) {
            return;
        }
        if (_util.dom.getStyle(pinElement, 'position') !== 'fixed') {
            _util.dom.setStyle(pinElement, 'position', 'absolute');
            isPinFixed = false;
        } else {
            isPinFixed = true;
        }
        if (baseElement === VIEWPORT || _util.dom.getStyle(baseElement, 'position') !== 'fixed') {
            isBaseFixed = false;
        } else {
            isBaseFixed = true;
        }
        // 根据期望的定位
        for (var i = 0; i < expectedAlign.length; i++) {
            var align = expectedAlign[i];
            var pinElementPoints = this._normalizePosition(pinElement, align.split(' ')[0], isPinFixed);
            var baseElementPoints = this._normalizePosition(baseElement, align.split(' ')[1], isPinFixed);
            var pinElementParentOffset = this._getParentOffset(pinElement);
            var baseElementOffset = isPinFixed && isBaseFixed ? this._getLeftTop(baseElement) : baseElementPoints.offset();
            var top = baseElementOffset.top + baseElementPoints.y - pinElementParentOffset.top - pinElementPoints.y;
            var left = baseElementOffset.left + baseElementPoints.x - pinElementParentOffset.left - pinElementPoints.x;
            this._setPinElementPostion(pinElement, { left: left, top: top }, this.offset);

            if (!firstPositionResult) {
                firstPositionResult = { left: left, top: top };
            }
            if (this._isInViewport(pinElement)) {
                return align;
            }
        }

        var inViewportLeft = this._makeElementInViewport(pinElement, firstPositionResult.left, 'Left', isPinFixed);
        var inViewportTop = this._makeElementInViewport(pinElement, firstPositionResult.top, 'Top', isPinFixed);

        this._setPinElementPostion(pinElement, { left: inViewportLeft, top: inViewportTop });
        return expectedAlign[0];
    };

    Position.prototype._getParentOffset = function _getParentOffset(element) {
        var parent = element.offsetParent || document.documentElement;
        var offset = void 0;
        if (parent === document.body && _util.dom.getStyle(parent, 'position') === 'static') {
            offset = {
                top: 0,
                left: 0
            };
        } else {
            offset = this._getElementOffset(parent);
        }

        offset.top += parseFloat(_util.dom.getStyle(parent, 'border-top-width'), 10);
        offset.left += parseFloat(_util.dom.getStyle(parent, 'border-left-width'), 10);
        offset.offsetParent = parent;
        return offset;
    };

    Position.prototype._makeElementInViewport = function _makeElementInViewport(pinElement, number, type, isPinFixed) {
        var result = number;
        var docElement = document.documentElement;
        var offsetParent = pinElement.offsetParent || document.documentElement;

        if (result < 0) {
            if (isPinFixed) {
                result = 0;
            } else if (offsetParent === document.body && _util.dom.getStyle(offsetParent, 'position') === 'static') {
                // Only when div's offsetParent is document.body, we set new position result.
                result = Math.max(docElement['scroll' + type], document.body['scroll' + type]);
            }
        }

        return result;
    };

    Position.prototype._normalizePosition = function _normalizePosition(element, align, isPinFixed) {
        var points = this._normalizeElement(element, isPinFixed);
        this._normalizeXY(points, align);

        return points;
    };

    Position.prototype._normalizeXY = function _normalizeXY(points, align) {
        var x = align.split('')[1];
        var y = align.split('')[0];

        points.x = this._xyConverter(x, points, 'width');
        points.y = this._xyConverter(y, points, 'height');

        return points;
    };

    Position.prototype._xyConverter = function _xyConverter(align, points, type) {
        var res = align.replace(/t|l/gi, '0%').replace(/c/gi, '50%').replace(/b|r/gi, '100%').replace(/(\d+)%/gi, function (m, d) {
            return points.size()[type] * (d / 100);
        });

        return parseFloat(res, 10) || 0;
    };

    Position.prototype._getLeftTop = function _getLeftTop(element) {
        return {
            left: parseFloat(_util.dom.getStyle(element, 'left')) || 0,
            top: parseFloat(_util.dom.getStyle(element, 'top')) || 0
        };
    };

    Position.prototype._normalizeElement = function _normalizeElement(element, isPinFixed) {
        var _this = this;

        var result = {
            element: element,
            x: 0,
            y: 0
        },
            isViewport = element === VIEWPORT,
            docElement = document.documentElement;

        result.offset = function () {
            if (isPinFixed) {
                return {
                    left: 0,
                    top: 0
                };
            } else if (isViewport) {
                return {
                    left: getPageX(),
                    top: getPageY()
                };
            } else {
                return _this._getElementOffset(element);
            }
        };

        result.size = function () {
            if (isViewport) {
                return {
                    width: docElement.clientWidth,
                    height: docElement.clientHeight
                };
            } else {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            }
        };

        return result;
    };

    Position.prototype._getElementOffset = function _getElementOffset(element) {
        var rect = element.getBoundingClientRect();
        var docElement = document.documentElement;
        var body = document.body;
        var docClientLeft = docElement.clientLeft || body.clientLeft || 0;
        var docClientTop = docElement.clientTop || body.clientTop || 0;

        return {
            left: rect.left + (getPageX() - docClientLeft),
            top: rect.top + (getPageY() - docClientTop)
        };
    };

    // According to the location of the overflow to calculate the desired positioning


    Position.prototype._getExpectedAlign = function _getExpectedAlign() {
        var align = this.isRtl ? this._replaceAlignDir(this.align, /l|r/g, { l: 'r', r: 'l' }) : this.align;
        var expectedAlign = [align];

        if (this.needAdjust) {
            if (/t|b/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /t|b/g, { t: 'b', b: 't' }));
            }
            if (/l|r/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /l|r/g, { l: 'r', r: 'l' }));
            }
            if (/c/g.test(align)) {
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'l' }));
                expectedAlign.push(this._replaceAlignDir(align, /c(?= |$)/g, { c: 'r' }));
            }
            expectedAlign.push(this._replaceAlignDir(align, /l|r|t|b/g, { l: 'r', r: 'l', t: 'b', b: 't' }));
        }
        return expectedAlign;
    };

    // Transform align order.


    Position.prototype._replaceAlignDir = function _replaceAlignDir(align, regExp, map) {
        return align.replace(regExp, function (res) {
            return map[res];
        });
    };

    // Detecting element is in the window， we want to adjust position later.


    Position.prototype._isInViewport = function _isInViewport(element) {
        var viewportSize = _getViewportSize();
        // Avoid animate problem that use offsetWidth instead of getBoundingClientRect.
        var elementRect = _getElementRect(element);
        return elementRect.left >= 0 && elementRect.left + element.offsetWidth <= viewportSize.width && elementRect.top >= 0 && elementRect.top + element.offsetHeight <= viewportSize.height;
    };
    // 在这里做RTL判断 top-left 定位转化为等效的 top-right定位


    Position.prototype._setPinElementPostion = function _setPinElementPostion(pinElement, postion) {
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
        var top = postion.top,
            left = postion.left;

        if (!this.isRtl) {
            _util.dom.setStyle(pinElement, {
                left: left + offset[0] + 'px',
                top: top + offset[1] + 'px'
            });
            return;
        }

        // transfer {left,top} equaly to {right,top}
        var pinElementParentOffset = this._getParentOffset(pinElement);

        var _getElementRect2 = _getElementRect(pinElementParentOffset.offsetParent),
            offsetParentWidth = _getElementRect2.width;

        var _getElementRect3 = _getElementRect(pinElement),
            width = _getElementRect3.width;

        var right = offsetParentWidth - (left + width);
        _util.dom.setStyle(pinElement, {
            left: 'auto',
            right: right + offset[0] + 'px',
            top: top + offset[1] + 'px'
        });
    };

    return Position;
}(), _class.VIEWPORT = VIEWPORT, _class.place = function (props) {
    return new Position(props).setPosition();
}, _temp);
exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(2);

var _overlay = __webpack_require__(30);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = _util.func.noop,
    makeChain = _util.func.makeChain,
    bindCtx = _util.func.bindCtx;

/**
 * Overlay.Popup
 * @description 继承 Overlay 的 API，除非特别说明
 * */

var Popup = (_temp = _class = function (_Component) {
    _inherits(Popup, _Component);

    function Popup(props) {
        _classCallCheck(this, Popup);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            visible: typeof props.visible === 'undefined' ? props.defaultVisible : props.visible
        };

        bindCtx(_this, ['handleTriggerClick', 'handleTriggerKeyDown', 'handleTriggerMouseEnter', 'handleTriggerMouseLeave', 'handleTriggerFocus', 'handleTriggerBlur', 'handleContentMouseEnter', 'handleContentMouseLeave', 'handleContentMouseDown', 'handleRequestClose', 'handleMaskMouseEnter', 'handleMaskMouseLeave']);
        return _this;
    }

    Popup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        ['_timer', '_hideTimer', '_showTimer'].forEach(function (time) {
            _this2[time] && clearTimeout(_this2[time]);
        });
    };

    Popup.prototype.handleVisibleChange = function handleVisibleChange(visible, type, e) {
        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type, e);
    };

    Popup.prototype.handleTriggerClick = function handleTriggerClick(e) {
        if (this.state.visible && !this.props.canCloseByTrigger) {
            return;
        }

        this.handleVisibleChange(!this.state.visible, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
        if (e.keyCode === _util.KEYCODE.SPACE || e.keyCode === _util.KEYCODE.ENTER) {
            e.preventDefault();
            this.handleTriggerClick(e);
        }
    };

    Popup.prototype.handleTriggerMouseEnter = function handleTriggerMouseEnter(e) {
        var _this3 = this;

        this._mouseNotFirstOnMask = false;

        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
        }
        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (!this.state.visible) {
            this._showTimer = setTimeout(function () {
                _this3.handleVisibleChange(true, 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerMouseLeave = function handleTriggerMouseLeave(e, type) {
        var _this4 = this;

        if (this._showTimer) {
            clearTimeout(this._showTimer);
            this._showTimer = null;
        }
        if (this.state.visible) {
            this._hideTimer = setTimeout(function () {
                _this4.handleVisibleChange(false, type || 'fromTrigger', e);
            }, this.props.delay);
        }
    };

    Popup.prototype.handleTriggerFocus = function handleTriggerFocus(e) {
        this.handleVisibleChange(true, 'fromTrigger', e);
    };

    Popup.prototype.handleTriggerBlur = function handleTriggerBlur(e) {
        if (!this._isForwardContent) {
            this.handleVisibleChange(false, 'fromTrigger', e);
        }
        this._isForwardContent = false;
    };

    Popup.prototype.handleContentMouseDown = function handleContentMouseDown() {
        this._isForwardContent = true;
    };

    Popup.prototype.handleContentMouseEnter = function handleContentMouseEnter() {
        clearTimeout(this._hideTimer);
    };

    Popup.prototype.handleContentMouseLeave = function handleContentMouseLeave(e) {
        this.handleTriggerMouseLeave(e, 'fromContent');
    };

    Popup.prototype.handleMaskMouseEnter = function handleMaskMouseEnter() {
        if (!this._mouseNotFirstOnMask) {
            clearTimeout(this._hideTimer);
            this._hideTimer = null;
            this._mouseNotFirstOnMask = false;
        }
    };

    Popup.prototype.handleMaskMouseLeave = function handleMaskMouseLeave() {
        this._mouseNotFirstOnMask = true;
    };

    Popup.prototype.handleRequestClose = function handleRequestClose(type, e) {
        this.handleVisibleChange(false, type, e);
    };

    Popup.prototype.renderTrigger = function renderTrigger() {
        var _this5 = this;

        var _props = this.props,
            trigger = _props.trigger,
            disabled = _props.disabled;

        var props = {
            key: 'trigger',
            'aria-haspopup': true,
            'aria-expanded': this.state.visible
        };

        if (!disabled) {
            var triggerType = this.props.triggerType;

            var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
            var _trigger$props = trigger.props,
                onClick = _trigger$props.onClick,
                onKeyDown = _trigger$props.onKeyDown,
                onMouseEnter = _trigger$props.onMouseEnter,
                onMouseLeave = _trigger$props.onMouseLeave,
                onFocus = _trigger$props.onFocus,
                onBlur = _trigger$props.onBlur;

            triggerTypes.forEach(function (triggerType) {
                switch (triggerType) {
                    case 'click':
                        props.onClick = makeChain(_this5.handleTriggerClick, onClick);
                        props.onKeyDown = makeChain(_this5.handleTriggerKeyDown, onKeyDown);
                        break;
                    case 'hover':
                        props.onMouseEnter = makeChain(_this5.handleTriggerMouseEnter, onMouseEnter);
                        props.onMouseLeave = makeChain(_this5.handleTriggerMouseLeave, onMouseLeave);
                        break;
                    case 'focus':
                        props.onFocus = makeChain(_this5.handleTriggerFocus, onFocus);
                        props.onBlur = makeChain(_this5.handleTriggerBlur, onBlur);
                        break;
                    default:
                        break;
                }
            });
        }

        return _react2.default.cloneElement(trigger, props);
    };

    Popup.prototype.renderContent = function renderContent() {
        var _this6 = this;

        var _props2 = this.props,
            children = _props2.children,
            triggerType = _props2.triggerType;

        var triggerTypes = Array.isArray(triggerType) ? triggerType : [triggerType];
        var content = _react.Children.only(children);
        var _content$props = content.props,
            onMouseDown = _content$props.onMouseDown,
            onMouseEnter = _content$props.onMouseEnter,
            onMouseLeave = _content$props.onMouseLeave;

        var props = {
            key: 'portal'
        };

        triggerTypes.forEach(function (triggerType) {
            switch (triggerType) {
                case 'focus':
                    props.onMouseDown = makeChain(_this6.handleContentMouseDown, onMouseDown);
                    break;
                case 'hover':
                    props.onMouseEnter = makeChain(_this6.handleContentMouseEnter, onMouseEnter);
                    props.onMouseLeave = makeChain(_this6.handleContentMouseLeave, onMouseLeave);
                    break;
                default:
                    break;
            }
        });

        return _react2.default.cloneElement(content, props);
    };

    Popup.prototype.renderPortal = function renderPortal() {
        var _this7 = this;

        var _props3 = this.props,
            target = _props3.target,
            safeNode = _props3.safeNode,
            followTrigger = _props3.followTrigger,
            triggerType = _props3.triggerType,
            hasMask = _props3.hasMask,
            wrapperStyle = _props3.wrapperStyle,
            others = _objectWithoutProperties(_props3, ['target', 'safeNode', 'followTrigger', 'triggerType', 'hasMask', 'wrapperStyle']);

        var container = this.props.container;

        var findTriggerNode = function findTriggerNode() {
            return (0, _reactDom.findDOMNode)(_this7) || {};
        };
        var safeNodes = Array.isArray(safeNode) ? [].concat(safeNode) : [safeNode];
        safeNodes.unshift(findTriggerNode);

        var newWrapperStyle = wrapperStyle || {};

        if (followTrigger) {
            container = function container(trigger) {
                return trigger.parentNode;
            };
            newWrapperStyle.position = 'relative';
        }

        if (triggerType === 'hover' && hasMask) {
            others.onMaskMouseEnter = this.handleMaskMouseEnter;
            others.onMaskMouseLeave = this.handleMaskMouseLeave;
        }

        return _react2.default.createElement(
            _overlay2.default,
            _extends({}, others, {
                key: 'overlay',
                ref: function ref(overlay) {
                    return _this7.overlay = overlay;
                },
                visible: this.state.visible,
                target: target || findTriggerNode,
                container: container,
                safeNode: safeNodes,
                wrapperStyle: newWrapperStyle,
                triggerType: triggerType,
                hasMask: hasMask,
                onRequestClose: this.handleRequestClose }),
            this.renderContent()
        );
    };

    Popup.prototype.render = function render() {
        return [this.renderTrigger(), this.renderPortal()];
    };

    return Popup;
}(_react.Component), _class.propTypes = {
    /**
     * 弹层内容
     */
    children: _propTypes2.default.node,
    /**
     * 触发弹层显示或隐藏的元素
     */
    trigger: _propTypes2.default.element,
    /**
     * 触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，'focus'，或者它们组成的数组，如 ['hover', 'focus']
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 弹层当前是否显示
     */
    visible: _propTypes2.default.bool,
    /**
     * 弹层默认是否显示
     */
    defaultVisible: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏时触发的回调函数
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源
     * @param {Object} e DOM事件
     */
    onVisibleChange: _propTypes2.default.func,
    /**
     * 设置此属性，弹层无法显示或隐藏
     */
    disabled: _propTypes2.default.bool,
    /**
     * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
     */
    delay: _propTypes2.default.number,
    /**
     * 触发元素是否可以关闭弹层
     */
    canCloseByTrigger: _propTypes2.default.bool,
    /**
     * 弹层定位的参照元素
     * @default target 属性，即触发元素
     */
    target: _propTypes2.default.any,
    safeNode: _propTypes2.default.any,
    /**
     * 是否跟随trigger滚动
     */
    followTrigger: _propTypes2.default.bool,
    container: _propTypes2.default.any,
    hasMask: _propTypes2.default.bool,
    wrapperStyle: _propTypes2.default.object,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    triggerType: 'hover',
    defaultVisible: false,
    onVisibleChange: noop,
    disabled: false,
    delay: 200,
    canCloseByTrigger: true,
    followTrigger: false,
    container: function container() {
        return document.body;
    },
    rtl: false
}, _temp);
Popup.displayName = 'Popup';
exports.default = Popup;
module.exports = exports['default'];

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(19);

var _overlay2 = _interopRequireDefault(_overlay);

var _inner = __webpack_require__(14);

var _inner2 = _interopRequireDefault(_inner);

var _alignMap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Popup = _overlay2.default.Popup;

/** Balloon.Tooltip */

var Tooltip = (_temp = _class = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this._contentId = props.id;
    return _this;
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        align = _props.align,
        style = _props.style,
        prefix = _props.prefix,
        trigger = _props.trigger,
        children = _props.children,
        popupContainer = _props.popupContainer,
        popupProps = _props.popupProps,
        popupClassName = _props.popupClassName,
        popupStyle = _props.popupStyle,
        triggerType = _props.triggerType,
        rtl = _props.rtl,
        others = _objectWithoutProperties(_props, ['className', 'align', 'style', 'prefix', 'trigger', 'children', 'popupContainer', 'popupProps', 'popupClassName', 'popupStyle', 'triggerType', 'rtl']);

    var trOrigin = 'trOrigin';
    if (rtl) {
      others.rtl = true;
      trOrigin = 'rtlTrOrigin';
    }

    var transformOrigin = _alignMap.normalMap[align][trOrigin];
    var _offset = _alignMap.normalMap[align].offset;
    var _style = _extends({ transformOrigin: transformOrigin }, style);

    var content = _react2.default.createElement(
      _inner2.default,
      _extends({}, others, {
        id: this._contentId,
        prefix: prefix,
        closable: false,
        isTooltip: true,
        className: className,
        style: _style,
        align: align,
        rtl: rtl
      }),
      children
    );

    var triggerProps = {};
    triggerProps['aria-describedby'] = this._contentId;
    triggerProps.tabIndex = '0';

    var newTrigger = _react2.default.cloneElement(trigger, triggerProps);

    return _react2.default.createElement(
      Popup,
      _extends({}, popupProps, {
        container: popupContainer,
        trigger: this._contentId ? newTrigger : trigger,
        triggerType: triggerType,
        align: _alignMap.normalMap[align].align,
        offset: _offset,
        delay: 0,
        className: popupClassName,
        style: popupStyle,
        rtl: rtl,
        shouldUpdatePosition: true
      }),
      content
    );
  };

  return Tooltip;
}(_react2.default.Component), _class.propTypes = {
  /**
   * 样式类名的品牌前缀
   */
  prefix: _propTypes2.default.string,
  /**
   * 自定义类名
   */
  className: _propTypes2.default.string,
  /**
   * 自定义内联样式
   */
  style: _propTypes2.default.object,
  /**
   * tooltip的内容
   */
  children: _propTypes2.default.any,
  /**
   * 弹出层位置
   * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
   */
  align: _propTypes2.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
  /**
   * 触发元素
   */
  trigger: _propTypes2.default.any,
  /**
   * 触发行为
   * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
   */
  triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  /**
   * 弹层组件style，透传给Popup
   */
  popupStyle: _propTypes2.default.object,
  /**
   * 弹层组件className，透传给Popup
   */
  popupClassName: _propTypes2.default.string,
  /**
   * 弹层组件属性，透传给Popup
   */
  popupProps: _propTypes2.default.object,
  /**
   * 是否pure render
   */
  pure: _propTypes2.default.bool,
  /**
   * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
   */
  popupContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * 弹层id, 传入值才会支持无障碍
   */
  id: _propTypes2.default.string
}, _class.defaultProps = {
  triggerType: 'hover',
  prefix: 'next-',
  align: 'b',
  trigger: _react2.default.createElement('span', null)
}, _temp);
Tooltip.displayName = 'Tooltip';
exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(36);

__webpack_require__(20);

__webpack_require__(63);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(16, function () {
			var newContent = __webpack_require__(16);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(17, function () {
			var newContent = __webpack_require__(17);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(18, function () {
			var newContent = __webpack_require__(18);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

var _button = __webpack_require__(66);

var _button2 = _interopRequireDefault(_button);

var _group = __webpack_require__(67);

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_button2.default.Group = _group2.default;

exports.default = _configProvider2.default.config(_button2.default, {
    transform: function transform(props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'text | warning | ghost', 'Button');

            var _props = props,
                shape = _props.shape,
                type = _props.type,
                others = _objectWithoutProperties(_props, ['shape', 'type']);

            var newType = type;
            if (type === 'light' || type === 'dark' || type === 'secondary' && shape === 'warning') {
                newType = 'normal';
            }

            var ghost = void 0;
            if (shape === 'ghost') {
                ghost = {
                    primary: 'dark',
                    secondary: 'dark',
                    normal: 'light',
                    dark: 'dark',
                    light: 'light'
                }[type || _button2.default.defaultProps.type];
            }

            var text = shape === 'text';
            var warning = shape === 'warning';

            props = _extends({ type: newType, ghost: ghost, text: text, warning: warning }, others);
        }

        return props;
    }
});
module.exports = exports['default'];

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

__webpack_require__(68);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function mapIconSize(size) {
    return {
        large: 'small',
        medium: 'xs',
        small: 'xs'
    }[size];
}

/** Button */
var Button = (_temp2 = _class = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onMouseUp = function (e) {
            _this.button.blur();

            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        }, _this.buttonRefHandler = function (button) {
            _this.button = button;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Button.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            type = _props.type,
            size = _props.size,
            htmlType = _props.htmlType,
            loading = _props.loading,
            text = _props.text,
            warning = _props.warning,
            ghost = _props.ghost,
            component = _props.component,
            iconSize = _props.iconSize,
            children = _props.children,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'type', 'size', 'htmlType', 'loading', 'text', 'warning', 'ghost', 'component', 'iconSize', 'children', 'rtl']);

        var ghostType = ['light', 'dark'].indexOf(ghost) >= 0 ? ghost : 'dark';

        var btnCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'btn'] = true, _classNames['' + prefix + size] = size, _classNames[prefix + 'btn-' + type] = type && !ghost, _classNames[prefix + 'btn-text'] = text, _classNames[prefix + 'btn-warning'] = warning, _classNames[prefix + 'btn-loading'] = loading, _classNames[prefix + 'btn-ghost'] = ghost, _classNames[prefix + 'btn-' + ghostType] = ghost, _classNames[className] = className, _classNames));

        var count = _react.Children.count(children);
        var clonedChildren = _react.Children.map(children, function (child, index) {
            if (child && typeof child.type === 'function' && child.type._typeMark === 'icon') {
                var _classNames2;

                var iconCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'btn-icon'] = !iconSize, _classNames2[prefix + 'icon-first'] = count > 1 && index === 0, _classNames2[prefix + 'icon-last'] = count > 1 && index === count - 1, _classNames2[prefix + 'icon-alone'] = count === 1, _classNames2[child.props.className] = !!child.props.className, _classNames2));
                return _react2.default.cloneElement(child, {
                    className: iconCls,
                    size: iconSize || mapIconSize(size)
                });
            }

            return child;
        });

        var TagName = component;
        var tagAttrs = _extends({}, others, {
            type: htmlType,
            className: btnCls
        });

        if (TagName === 'a') {
            delete tagAttrs.type;

            if (tagAttrs.disabled) {
                delete tagAttrs.onClick; // a 标签的 onClick 浏览器默认不会禁用
                tagAttrs.href && delete tagAttrs.href; // a 标签在禁用状态下无跳转
            }
        }

        return _react2.default.createElement(
            TagName,
            _extends({}, tagAttrs, { dir: rtl ? 'rtl' : undefined, onMouseUp: this.onMouseUp, ref: this.buttonRefHandler, role: 'button' }),
            clonedChildren
        );
    };

    return Button;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 按钮的类型
     */
    type: _propTypes2.default.oneOf(['primary', 'secondary', 'normal']),
    /**
     * 按钮的尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
     */
    iconSize: _propTypes2.default.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']),
    /**
     * 当 component = 'button' 时，设置 button 标签的 type 值
     */
    htmlType: _propTypes2.default.oneOf(['submit', 'reset', 'button']),
    /**
     * 设置标签类型
     */
    component: _propTypes2.default.oneOf(['button', 'a']),
    /**
     * 设置按钮的载入状态
     */
    loading: _propTypes2.default.bool,
    /**
     * 是否为幽灵按钮
     */
    ghost: _propTypes2.default.oneOf([true, false, 'light', 'dark']),
    /**
     * 是否为文本按钮
     */
    text: _propTypes2.default.bool,
    /**
     * 是否为警告按钮
     */
    warning: _propTypes2.default.bool,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    /**
     * 点击按钮的回调
     * @param {Object} e Event Object
     */
    onClick: _propTypes2.default.func,
    className: _propTypes2.default.string,
    onMouseUp: _propTypes2.default.func,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'normal',
    size: 'medium',
    htmlType: 'button',
    component: 'button',
    loading: false,
    ghost: false,
    text: false,
    warning: false,
    disabled: false,
    onClick: function onClick() {}
}, _temp2);
Button.displayName = 'Button';
exports.default = Button;
module.exports = exports['default'];

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = __webpack_require__(5);

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Button.Group
 */
var ButtonGroup = (_temp = _class = function (_Component) {
    _inherits(ButtonGroup, _Component);

    function ButtonGroup() {
        _classCallCheck(this, ButtonGroup);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ButtonGroup.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            size = _props.size,
            children = _props.children,
            rtl = _props.rtl,
            others = _objectWithoutProperties(_props, ['prefix', 'className', 'size', 'children', 'rtl']);

        var groupCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'btn-group'] = true, _classNames[className] = className, _classNames));

        var cloneChildren = _react.Children.map(children, function (child) {
            if (child) {
                return _react2.default.cloneElement(child, {
                    size: size
                });
            }
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        return _react2.default.createElement(
            'div',
            _extends({}, others, { className: groupCls }),
            cloneChildren
        );
    };

    return ButtonGroup;
}(_react.Component), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    /**
     * 统一设置 Button 组件的按钮大小
     */
    size: _propTypes2.default.string,
    className: _propTypes2.default.string,
    children: _propTypes2.default.node
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _temp);
ButtonGroup.displayName = 'ButtonGroup';
exports.default = _configProvider2.default.config(ButtonGroup);
module.exports = exports['default'];

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (true) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept(21, function () {
			var newContent = __webpack_require__(21);
			if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(53);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeOf = typeOf;
exports.isArrayLike = isArrayLike;
exports.isPromise = isPromise;
exports.isPlainObject = isPlainObject;
exports.shallowEqual = shallowEqual;
exports.each = each;
exports.pickOthers = pickOthers;
exports.pickAttrsWith = pickAttrsWith;
/**
 * 获取对象的类型
 * @param  {*} obj
 * @return {String}
 *
 * @example
 * typeOf([]) === 'Array'
 * typeOf() === 'Undefined'
 * typeOf(1) === 'Number'
 */
function typeOf(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|]/g, '');
}

/**
 * 判断是否是数组或类数组对象
 * @param  {*}  obj
 * @return {Boolean}
 *
 * @example
 * isArrayLike([]) === true
 * isArrayLike(arguments) === true
 * isArrayLike(this.props.children) === true
 */
function isArrayLike(obj) {
    var length = !!obj && 'length' in obj && obj.length;
    var type = typeOf(obj);

    return type === 'Array' || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
}

/**
 * 判断对象是否是一个promise，即是否可以用.then
 * @param  {*}  obj
 * @return {Boolean}
 */
function isPromise(obj) {
    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

/**
 * 是否是一个纯净的对象
 * @param  {*}  obj
 * @return {Boolean}
 * @reference https://github.com/jonschlinkert/is-plain-object
 */
function isPlainObject(obj) {
    if (typeOf(obj) !== 'Object') {
        return false;
    }

    var ctor = obj.constructor;

    if (typeof ctor !== 'function') {
        return false;
    }

    var prot = ctor.prototype;

    if (typeOf(prot) !== 'Object') {
        return false;
    }

    if (!prot.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
}

/**
 * 对象浅比较
 * @param  {Object} objA
 * @param  {Object} objB
 * @param  {Function}  [compare] 手动调用方法比较
 * @return {Boolean}      对象浅比较是否相等
 *
 * @example
 * object.shallowEqual({a: 100}, {a: 100}); // true
 */
function shallowEqual(objA, objB, compare) {
    if (objA === objB) {
        return true;
    }

    // 其中一个不是object，则不相等
    if (!objA || !objB || (typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) + (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'objectobject') {
        return false;
    }

    var keyA = Object.keys(objA);
    var keyB = Object.keys(objB);
    var len = keyA.length;

    // key 数量不一致则不相等
    if (len !== keyB.length) {
        return false;
    }

    var hasCallback = typeof compare === 'function';

    for (var i = 0; i < len; i++) {
        var key = keyA[i];

        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }

        var valA = objA[key];
        var valB = objB[key];

        var ret = hasCallback ? compare(valA, valB, key) : void 0;

        if (ret === false || ret === void 0 && valA !== valB) {
            return false;
        }
    }

    return true;
}

/**
 * 遍历对象或数组，或者类数组，例如React中的children对象、arguments等
 * @param  {Object|Array}   obj
 * @param  {Function} callback fn(n, i) or fn(val, key)
 * @param  {Number}   [direction = 1] 是否倒序遍历，只对数组有效
 * @return {Object|Array}
 *
 * @example
 * // 遍历数组
 * object.each([100, 200, 300], (n, i) => console.log(n, i));
 * // 遍历json对象
 * object.each({a: 100, b: 200}, (value, key) => console.log(key, value));
 * // 遍历React子节点
 * object.each(this.props.children, (child, index) => console.log(child));
 * // 遍历arguments
 * object.each(arguments, (arg, i) => console.log(arg));
 */
function each(obj, callback, direction) {
    var reversed = direction === -1;
    var length = obj.length;
    var value = void 0,
        i = reversed ? length - 1 : 0;

    if (isArrayLike(obj)) {
        for (; i < length && i >= 0; reversed ? i-- : i++) {
            value = callback.call(obj[i], obj[i], i);

            if (value === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            /* istanbul ignore else */
            if (obj.hasOwnProperty(i)) {
                value = callback.call(obj[i], obj[i], i);

                if (value === false) {
                    break;
                }
            }
        }
    }

    return obj;
}

// @private 判断key是否在数组或对象中
var _isInObj = function _isInObj(key, obj, isArray) {
    return isArray ? obj.indexOf(key) > -1 : key in obj;
};

/**
 * 过滤出其它属性
 * @param  {Object|Array} holdProps 过滤的参照对象，最终的结果只保留不在参照对象中的key
 * @param  {Object} props     被过滤的对象
 * @return {Object}           others
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
function pickOthers(holdProps, props) {
    var others = {};
    var isArray = typeOf(holdProps) === 'Array';

    for (var key in props) {
        if (!_isInObj(key, holdProps, isArray)) {
            others[key] = props[key];
        }
    }

    return others;
}

/**
 * 过滤出带prefix的属性
 * @param  {Object} holdProps 过滤的参照对象，最终的结果只保留不在参照对象中的key
 * @param  {string} prefix    包含的字符串
 * @return {Object}           others
 *
 * @example
 * object.pickAttrsWith(FooComponent.propTypes, 'data-');
 */
function pickAttrsWith(holdProps, prefix) {
    var others = {};

    for (var key in holdProps) {
        if (key.match(prefix)) {
            others[key] = holdProps[key];
        }
    }

    return others;
}

/***/ })

},[271]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9tYWluLnNjc3M/NzAyMiIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS91dGlscy9maW5kLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vaW5uZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2FsaWduTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL21haW4uc2Nzcz9lYmE4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21haW4uc2Nzcz8yYzZkIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL21haW4uc2Nzcz84ZTNiIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL21haW4uc2Nzcz8wYWQ0Iiwid2VicGFjazovLy8uL3NyYy9pY29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cubW9tZW50XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9nZXQtY29udGV4dC1wcm9wcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL2JhbGxvb24vZGVtby90cmlnZ2VyVHlwZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwva2V5Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NsYXNzbmFtZXNAMi4yLjZAY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9vdmVybGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9nYXRld2F5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9wb3NpdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fb2JqZWN0LWFzc2lnbkA0LjEuMUBvYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvY29uZmlnLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzQDIuNS41QGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9mdW5jLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2ZvY3VzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25zdW1lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vYmFsbG9vbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS91dGlscy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9wb3B1cC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vdG9vbHRpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL3ZpZXcvYnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL3ZpZXcvZ3JvdXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9idXR0b24vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vYmplY3QuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwiZmluZE5vZGUiLCJ0YXJnZXQiLCJwYXJhbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnIiLCJub29wIiwiZnVuYyIsIkJhbGxvb25Jbm5lciIsInJlbmRlciIsInByb3BzIiwicHJlZml4IiwiY2xvc2FibGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImlzVG9vbHRpcCIsImFsaWduIiwidHlwZSIsIm9uQ2xvc2UiLCJhbGlnbkVkZ2UiLCJjaGlsZHJlbiIsInJ0bCIsIm90aGVycyIsImFsaWduTWFwIiwiZWRnZU1hcCIsIm5vcm1hbE1hcCIsIl9wcmVmaXgiLCJjbGFzc2VzIiwiYXJyb3ciLCJ1bmRlZmluZWQiLCJvYmoiLCJwaWNrT3RoZXJzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFueSIsInB1cmUiLCJkZWZhdWx0UHJvcHMiLCJ0IiwicnRsQWxpZ24iLCJ0ck9yaWdpbiIsInJ0bFRyT3JpZ2luIiwib2Zmc2V0IiwiciIsImIiLCJsIiwidGwiLCJ0ciIsInJ0IiwicmIiLCJibCIsImJyIiwibHQiLCJsYiIsIk92ZXJsYXkiLCJHYXRld2F5IiwiUG9zaXRpb24iLCJQb3B1cCIsIkNvbmZpZ1Byb3ZpZGVyIiwiY29uZmlnIiwiZXhwb3J0TmFtZXMiLCJfZG9tIiwiX2VudiIsIl9ldmVudHMiLCJfZnVuYyIsIl9sb2ciLCJfb2JqZWN0IiwiX3N0cmluZyIsIl9zdXBwb3J0IiwiX2ZvY3VzIiwiZG9tIiwiZXZlbnRzIiwibG9nIiwic3RyIiwic3VwcG9ydCIsImZvY3VzIiwiZ3VpZCIsIl9ndWlkIiwiS0VZQ09ERSIsIl9LRVlDT0RFIiwiSWNvbiIsInNpemUiLCJvdGhlciIsImluZGV4T2YiLCJkaXIiLCJvbmVPZiIsIl90eXBlTWFyayIsImdldENvbnRleHRQcm9wcyIsImNvbnRleHQiLCJkaXNwbGF5TmFtZSIsImxvY2FsZSIsIm5leHRQcmVmaXgiLCJuZXh0TG9jYWxlIiwibmV4dFB1cmUiLCJuZXh0V2FybmluZyIsIm5leHRSdGwiLCJuZXdQcmVmaXgiLCJsb2NhbGVGcm9tQ29udGV4dCIsIm1vbWVudExvY2FsZSIsIm5ld0xvY2FsZSIsIm5ld1B1cmUiLCJuZXdSdGwiLCJ3YXJuaW5nIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJnZXRTdHlsZSIsInNldFN0eWxlIiwic2Nyb2xsYmFyIiwiZ2V0T2Zmc2V0IiwiaGFzRE9NIiwid2luZG93IiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9mb3JjZSIsImFkZCIsInJlbW92ZSIsInJlcGxhY2UiLCJ0cmltIiwidG9nZ2xlIiwiZmxhZyIsIm1hdGNoZXMiLCJtYXRjaGVzRm4iLCJfYm9keSIsImJvZHkiLCJoZWFkIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsIl9nZXRDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiUElYRUxfUEFUVEVSTiIsInJlbW92ZVBpeGVsIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiX2dldFN0eWxlVmFsdWUiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0ZXN0IiwicGFyc2VGbG9hdCIsImZsb2F0TWFwIiwiY3NzRmxvYXQiLCJzdHlsZUZsb2F0IiwiZmxvYXQiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbCIsImtleSIsInNjcm9sbERpdiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbGJhckhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJjYW1lbGNhc2UiLCJoeXBoZW5hdGUiLCIkMCIsIiQxIiwidG9VcHBlckNhc2UiLCJjb250ZW50IiwiTW92ZVRhcmdldCIsIm1hcmdpbiIsIkNsaWNrVGFyZ2V0IiwiRm9jdXNUYXJnZXQiLCJBcHAiLCJSZWFjdERPTSIsImNvbXBvbmVudERlc2MiLCJjb21wb25lbnRCb2R5IiwicmVsb2FkaW5nIiwic3RhdHVzIiwiaWVWZXJzaW9uIiwiZG9jdW1lbnRNb2RlIiwiaXNQcm9kdWN0aW9uIiwiUFJPRFVDVElPTl9FTlYiLCJyZXN1bHQiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkVTQ0FQRSIsIkxFRlRfQVJST1ciLCJVUF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkNPTlRST0wiLCJPUFRJT04iLCJDTUQiLCJDT01NQU5EIiwiREVMRVRFIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWVzIiwiaSIsImFyZyIsImFyZ1R5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXIiLCJhcHBseSIsImNhbGwiLCJqb2luIiwiZGVmYXVsdCIsImRlZmluZSIsInNhdmVMYXN0Rm9jdXNOb2RlIiwiZ2V0Rm9jdXNOb2RlTGlzdCIsImJhY2tMYXN0Rm9jdXNOb2RlIiwibWFrZUNoYWluIiwiYmluZEN0eCIsImlzU2Nyb2xsRGlzcGxheSIsImVsZW1lbnQiLCJzY3JvbGxiYXJTdHlsZSIsImUiLCJoYXNTY3JvbGwiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJwcmVmaXhlcyIsImdldFN0eWxlUHJvcGVydHkiLCJyZXQiLCJtb2RhbHMiLCJib2R5T3ZlcmZsb3dZIiwiYm9keVBhZGRpbmdSaWdodCIsInNhdmVDb250ZW50UmVmIiwicmVmIiwiY29udGVudFJlZiIsInNhdmVHYXRld2F5UmVmIiwiZ2F0ZXdheVJlZiIsInN0YXRlIiwidmlzaWJsZSIsImFuaW1hdGlvbiIsImdldEFuaW1hdGlvbiIsImxhc3RBbGlnbiIsInRpbWVvdXRNYXAiLCJjb21wb25lbnRXaWxsTW91bnQiLCJiZWZvcmVPcGVuIiwiZW50ZXIiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImFkZERvY3VtZW50RXZlbnRzIiwib3ZlcmxheU1hbmFnZXIiLCJhZGRPdmVybGF5IiwiX2lzTW91bnRlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ3aWxsT3BlbiIsIndpbGxDbG9zZSIsImJlZm9yZUNsb3NlIiwic2V0U3RhdGUiLCJsZWF2ZSIsInByZXZQcm9wcyIsIm9wZW4iLCJjbG9zZSIsImFkZEFuaW1hdGlvbkV2ZW50cyIsIndyYXBwZXJOb2RlIiwiZ2V0V3JhcHBlck5vZGUiLCJzZXRUaW1lb3V0Iiwib25PcGVuIiwiYWZ0ZXJPcGVuIiwiYWZ0ZXJDbG9zZSIsInJlbW92ZU92ZXJsYXkiLCJzZXRGb2N1c05vZGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9pc0Rlc3Ryb3llZCIsInJlbW92ZURvY3VtZW50RXZlbnRzIiwiZm9jdXNUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2FuaW1hdGlvbiIsIm9mZiIsImdldEFuaW1hdGlvbkJ5QWxpZ24iLCJpbiIsIm91dCIsImdldENvbnRlbnROb2RlIiwiaWQiLCJvbiIsImVuZCIsImhhbmRsZUFuaW1hdGVFbmQiLCJiaW5kIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsInRpbWUiLCJoYW5kbGVQb3NpdGlvbiIsIm5lZWRBZGp1c3QiLCJvbkxlYXZlZCIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkxlYXZpbmciLCJkaXNhYmxlU2Nyb2xsIiwib3ZlcmZsb3dZIiwicGFkZGluZ1JpZ2h0IiwiaW5kZXgiLCJzcGxpY2UiLCJhdXRvRm9jdXMiLCJfaGFzRm9jdXNlZCIsImZvY3VzTm9kZUxpc3QiLCJnZXRDb250ZW50IiwiZ2V0Q2hpbGROb2RlIiwiY2FuQ2xvc2VCeUVzYyIsIl9rZXlkb3duRXZlbnRzIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwiY2FuQ2xvc2VCeU91dFNpZGVDbGljayIsIl9jbGlja0V2ZW50cyIsImhhbmRsZURvY3VtZW50Q2xpY2siLCJrZXlDb2RlIiwiaXNDdXJyZW50T3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwic2FmZU5vZGUiLCJzYWZlTm9kZXMiLCJ1bnNoaWZ0IiwiaGFuZGxlTWFza0NsaWNrIiwiY2FuQ2xvc2VCeU1hc2siLCJnZXRJbnN0YW5jZSIsInByb3BDaGlsZHJlbiIsImNvbnRhaW5lciIsImhhc01hc2siLCJiZWZvcmVQb3NpdGlvbiIsIm9uUG9zaXRpb24iLCJ3cmFwcGVyU3R5bGUiLCJwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb24iLCJzaG91bGRVcGRhdGVQb3NpdGlvbiIsImNhY2hlIiwid3JhcHBlckNsYXNzTmFtZSIsIm9uTWFza01vdXNlRW50ZXIiLCJvbk1hc2tNb3VzZUxlYXZlIiwic3RhdGVWaXNpYmxlIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZENsYXp6IiwiRXJyb3IiLCJjbG9uZUVsZW1lbnQiLCJ3cmFwcGVyQ2xhenoiLCJuZXdXcmFwcGVyU3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwiYXJyYXkiLCJWSUVXUE9SVCIsInNhdmVDaGlsZFJlZiIsImNvbnRhaW5lck5vZGUiLCJnZXRDb250YWluZXJOb2RlIiwiZm9yY2VVcGRhdGUiLCJ0YXJnZXROb2RlIiwicGxhY2UiLCJzZXRQb3NpdGlvbiIsIm5lZWRMaXN0ZW5SZXNpemUiLCJoYW5kbGVSZXNpemUiLCJyZXNpemVUaW1lb3V0IiwiY29udGVudE5vZGUiLCJnZXRUYXJnZXROb2RlIiwicmVzdWx0QWxpZ24iLCJwaW5FbGVtZW50IiwiYmFzZUVsZW1lbnQiLCJpc1J0bCIsInNwbGl0IiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJwcmludFdhcm5pbmciLCJ0ZXh0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsIngiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsInByb3RvdHlwZSIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsImxvY2F0aW9uIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJ0ZXN0MyIsImZvckVhY2giLCJsZXR0ZXIiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJlbXB0eUZ1bmN0aW9uIiwic2hpbSIsImdldFNoaW0iLCJpbml0TG9jYWxlcyIsInNldExhbmd1YWdlIiwic2V0TG9jYWxlIiwic2V0RGlyZWN0aW9uIiwiZ2V0TG9jYWxlIiwiZ2V0TGFuZ3VhZ2UiLCJnZXREaXJlY3Rpb24iLCJzaGFsbG93RXF1YWwiLCJnZXREaXNwbGF5TmFtZSIsImdsb2JhbExvY2FsZXMiLCJjdXJyZW50R2xvYmFsTGFuZ3VhZ2UiLCJjdXJyZW50R2xvYmFsTG9jYWxlIiwiY3VycmVudEdsb2JhbFJ0bCIsImxvY2FsZXMiLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0U3RhdGUiLCJDb25maWdlZENvbXBvbmVudCIsIl9nZXRJbnN0YW5jZSIsIl9kZXByZWNhdGVkIiwiX2luc3RhbmNlIiwiZmllbGQiLCJkZXByZWNhdGVkIiwiY29udGV4dFByb3BzIiwibmV3Q29udGV4dFByb3BzIiwicmVkdWNlIiwibmV3T3RoZXJzIiwidHJhbnNmb3JtIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwiS05PV05fU1RBVElDUyIsImNhbGxlciIsImNhbGxlZSIsImFyaXR5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50IiwiY29uY2F0IiwiZGVzY3JpcHRvciIsIm9uY2UiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsInVzZUNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fZm4iLCJhcmdzIiwicHJvbWlzZUNhbGwiLCJmbnMiLCJjaGFpbmVkRnVuY3Rpb24iLCJqIiwiY3R4IiwibnMiLCJmbk5hbWUiLCJzdWNjZXNzIiwiZmFpbHVyZSIsInRoZW4iLCJjYXRjaCIsImluc3RlYWQiLCJjb21wb25lbnQiLCJtc2ciLCJhbmltYXRpb25FbmRFdmVudE5hbWVzIiwiV2Via2l0QW5pbWF0aW9uIiwiT0FuaW1hdGlvbiIsInRyYW5zaXRpb25FdmVudE5hbWVzIiwiV2Via2l0VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsIl9zdXBwb3J0RW5kIiwibmFtZXMiLCJlbCIsIl9zdXBwb3J0Q1NTIiwiaXRlbSIsImZsZXgiLCJjbGVhckxhc3RGb2N1c05vZGUiLCJsaW1pdFRhYlJhbmdlIiwiX2lzVmlzaWJsZSIsInZpc2liaWxpdHkiLCJwYXJlbnROb2RlIiwiX2lzRm9jdXNhYmxlIiwibm9kZU5hbWUiLCJ0YWJJbmRleCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiaGFzVGFiSW5kZXgiLCJpc05hTiIsImRpc2FibGVkIiwicmVzIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWV0aG9kIiwibGFzdEZvY3VzRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJ0YWJOb2RlTGlzdCIsIm1heEluZGV4IiwidGFyZ2V0SW5kZXgiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwidGltZXN0YW1wIiwidG9TdHJpbmciLCJub3ciLCJjaGlsZENvbnRleHRDYWNoZSIsIkNhY2hlIiwiZ2V0IiwiZ2V0Q2hpbGRDb250ZXh0Iiwic2V0TW9tZW50TG9jYWxlIiwibW9tZW50Iiwicm9vdCIsIkNvbnN1bWVyIiwiZ2V0Q29udGV4dCIsIm1hcEtleXMiLCJmbiIsIm5ld0tleSIsInJlcGxhY2VLZXkiLCJtYXRjaCIsInAxIiwicDIiLCJ0cmFuc2Zvcm1Db250ZXh0IiwiX3Jvb3QiLCJfc3RvcmUiLCJNYXAiLCJlbXB0eSIsImhhcyIsImRlZmF1bHRWYWx1ZSIsInNldCIsInVwZGF0ZSIsImRlbGV0ZSIsImxvY2FscyIsImhvdCIsImFjY2VwdCIsIm5ld0NvbnRlbnQiLCJkaXNwb3NlIiwiY3NzIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImN1cnJlbnREaXIiLCJwYXRobmFtZSIsImZpeGVkQ3NzIiwiZnVsbE1hdGNoIiwib3JpZ1VybCIsInVucXVvdGVkT3JpZ1VybCIsIm8iLCJuZXdVcmwiLCJCYWxsb29uIiwiVG9vbHRpcCIsIklubmVyIiwiYWxpZ25tZW50Iiwib25DbG9zZUNsaWNrIiwib25WaXNpYmxlQ2hhbmdlIiwibmV3T25WaXNpYmxlQ2hhbmdlIiwicmVhc29uIiwiZGVmYXVsdFZpc2libGUiLCJfb25DbG9zZSIsIl9vblBvc2l0aW9uIiwiX29uVmlzaWJsZUNoYW5nZSIsIl9jb250ZW50SWQiLCJ0cmlnZ2VyIiwibmV3QWxpZ24iLCJyZXNBbGlnbiIsImFsaWduS2V5IiwidHJpZ2dlclR5cGUiLCJkZWxheSIsInNhZmVJZCIsIm9uQ2xpY2siLCJvbkhvdmVyIiwicG9wdXBDb250YWluZXIiLCJwb3B1cFN0eWxlIiwicG9wdXBDbGFzc05hbWUiLCJwb3B1cFByb3BzIiwiX29mZnNldCIsInRyYW5zZm9ybU9yaWdpbiIsIl9zdHlsZSIsInRyaWdnZXJQcm9wcyIsIm5ld1RyaWdnZXIiLCJhbGxPdmVybGF5cyIsIm92ZXJsYXkiLCJnZXRQYWdlWCIsInNjcm9sbExlZnQiLCJnZXRQYWdlWSIsInNjcm9sbFRvcCIsIl9nZXRFbGVtZW50UmVjdCIsImVsZW0iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiX2dldFZpZXdwb3J0U2l6ZSIsImV4cGVjdGVkQWxpZ24iLCJfZ2V0RXhwZWN0ZWRBbGlnbiIsImlzUGluRml4ZWQiLCJpc0Jhc2VGaXhlZCIsImZpcnN0UG9zaXRpb25SZXN1bHQiLCJwaW5FbGVtZW50UG9pbnRzIiwiX25vcm1hbGl6ZVBvc2l0aW9uIiwiYmFzZUVsZW1lbnRQb2ludHMiLCJwaW5FbGVtZW50UGFyZW50T2Zmc2V0IiwiX2dldFBhcmVudE9mZnNldCIsImJhc2VFbGVtZW50T2Zmc2V0IiwiX2dldExlZnRUb3AiLCJfc2V0UGluRWxlbWVudFBvc3Rpb24iLCJfaXNJblZpZXdwb3J0IiwiaW5WaWV3cG9ydExlZnQiLCJfbWFrZUVsZW1lbnRJblZpZXdwb3J0IiwiaW5WaWV3cG9ydFRvcCIsInBhcmVudCIsIl9nZXRFbGVtZW50T2Zmc2V0IiwiZG9jRWxlbWVudCIsIk1hdGgiLCJtYXgiLCJwb2ludHMiLCJfbm9ybWFsaXplRWxlbWVudCIsIl9ub3JtYWxpemVYWSIsIl94eUNvbnZlcnRlciIsIm0iLCJkIiwiaXNWaWV3cG9ydCIsImRvY0NsaWVudExlZnQiLCJjbGllbnRMZWZ0IiwiZG9jQ2xpZW50VG9wIiwiY2xpZW50VG9wIiwiX3JlcGxhY2VBbGlnbkRpciIsImMiLCJyZWdFeHAiLCJ2aWV3cG9ydFNpemUiLCJlbGVtZW50UmVjdCIsInBvc3Rpb24iLCJvZmZzZXRQYXJlbnRXaWR0aCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJoYW5kbGVUcmlnZ2VyQ2xpY2siLCJjYW5DbG9zZUJ5VHJpZ2dlciIsImhhbmRsZVRyaWdnZXJLZXlEb3duIiwiaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXIiLCJfbW91c2VOb3RGaXJzdE9uTWFzayIsIl9oaWRlVGltZXIiLCJfc2hvd1RpbWVyIiwiaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUiLCJoYW5kbGVUcmlnZ2VyRm9jdXMiLCJoYW5kbGVUcmlnZ2VyQmx1ciIsIl9pc0ZvcndhcmRDb250ZW50IiwiaGFuZGxlQ29udGVudE1vdXNlRG93biIsImhhbmRsZUNvbnRlbnRNb3VzZUVudGVyIiwiaGFuZGxlQ29udGVudE1vdXNlTGVhdmUiLCJoYW5kbGVNYXNrTW91c2VFbnRlciIsImhhbmRsZU1hc2tNb3VzZUxlYXZlIiwiaGFuZGxlUmVxdWVzdENsb3NlIiwicmVuZGVyVHJpZ2dlciIsInRyaWdnZXJUeXBlcyIsIm9uS2V5RG93biIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJyZW5kZXJDb250ZW50Iiwib25Nb3VzZURvd24iLCJyZW5kZXJQb3J0YWwiLCJmb2xsb3dUcmlnZ2VyIiwiZmluZFRyaWdnZXJOb2RlIiwidXNlU291cmNlTWFwIiwibGlzdCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGEiLCJCdXR0b24iLCJHcm91cCIsIkJ1dHRvbkdyb3VwIiwibmV3VHlwZSIsImdob3N0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm5vcm1hbCIsImRhcmsiLCJsaWdodCIsIm1hcEljb25TaXplIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsIm9uTW91c2VVcCIsImJ1dHRvbiIsImJsdXIiLCJidXR0b25SZWZIYW5kbGVyIiwiaHRtbFR5cGUiLCJsb2FkaW5nIiwiaWNvblNpemUiLCJnaG9zdFR5cGUiLCJidG5DbHMiLCJjb3VudCIsImNsb25lZENoaWxkcmVuIiwiaWNvbkNscyIsIlRhZ05hbWUiLCJ0YWdBdHRycyIsImhyZWYiLCJncm91cENscyIsImNsb25lQ2hpbGRyZW4iLCJ0eXBlT2YiLCJpc0FycmF5TGlrZSIsImlzUHJvbWlzZSIsImlzUGxhaW5PYmplY3QiLCJlYWNoIiwicGlja0F0dHJzV2l0aCIsImN0b3IiLCJwcm90Iiwib2JqQSIsIm9iakIiLCJjb21wYXJlIiwia2V5QSIsImtleUIiLCJsZW4iLCJoYXNDYWxsYmFjayIsInZhbEEiLCJ2YWxCIiwiZGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJfaXNJbk9iaiIsImhvbGRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Qjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7QUFPQSxJQUFJQSxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsTUFBSUMscUJBQXNCLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFDeEJBLE9BQU9DLEdBRGlCLElBRXhCRCxPQUFPQyxHQUFQLENBQVcsZUFBWCxDQUZ1QixJQUd2QixNQUhGOztBQUtBLE1BQUlDLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBU0MsTUFBVCxFQUFpQjtBQUNwQyxXQUFPLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFDTEEsV0FBVyxJQUROLElBRUxBLE9BQU9DLFFBQVAsS0FBb0JMLGtCQUZ0QjtBQUdELEdBSkQ7O0FBTUE7QUFDQTtBQUNBLE1BQUlNLHNCQUFzQixJQUExQjtBQUNBQyxTQUFPQyxPQUFQLEdBQWlCQyxtQkFBT0EsQ0FBQyxFQUFSLEVBQXFDTixjQUFyQyxFQUFxREcsbUJBQXJELENBQWpCO0FBQ0QsQ0FoQkQsTUFnQk87QUFDTDtBQUNBO0FBQ0FDLFNBQU9DLE9BQVAsR0FBaUJDLG1CQUFPQSxDQUFDLEVBQVIsR0FBakI7QUFDRCxDOzs7Ozs7Ozs7QUMzQkQ7Ozs7Ozs7QUFPYTs7QUFFYixJQUFJQyx1QkFBdUIsOENBQTNCOztBQUVBSCxPQUFPQyxPQUFQLEdBQWlCRSxvQkFBakIsQzs7Ozs7OztBQ1hBLDJCQUEyQixtQkFBTyxDQUFDLENBQW1FO0FBQ3RHOzs7QUFHQTtBQUNBLGNB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LFdBQXVCQSxVQUFXOU0sSUFBSTJELE9BQUosQ0FBWTJFLEdBQVosSUFBbUIsQ0FBQyxDQUEvQixHQUFzQ0EsT0FBT3RJLEdBQXBFO0FBQUEsQ0FBakI7O0FBRUE7Ozs7Ozs7Ozs7QUFVTyxTQUFTQyxVQUFULENBQXFCNnlCLFNBQXJCLEVBQWdDbDBCLEtBQWhDLEVBQXVDO0FBQzFDLFFBQU1ZLFNBQVMsRUFBZjtBQUNBLFFBQU1zTixVQUFVNGtCLE9BQU9vQixTQUFQLE1BQXNCLE9BQXRDOztBQUVBLFNBQUssSUFBTXhxQixHQUFYLElBQWtCMUosS0FBbEIsRUFBeUI7QUFDckIsWUFBSSxDQUFDaTBCLFNBQVN2cUIsR0FBVCxFQUFjd3FCLFNBQWQsRUFBeUJobUIsT0FBekIsQ0FBTCxFQUF3QztBQUNwQ3ROLG1CQUFPOEksR0FBUCxJQUFjMUosTUFBTTBKLEdBQU4sQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsV0FBTzlJLE1BQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O0FBU08sU0FBU3V5QixhQUFULENBQXdCZSxTQUF4QixFQUFtQ2owQixNQUFuQyxFQUEyQztBQUM5QyxRQUFNVyxTQUFTLEVBQWY7O0FBRUEsU0FBSyxJQUFNOEksR0FBWCxJQUFrQndxQixTQUFsQixFQUE2QjtBQUN6QixZQUFJeHFCLElBQUlvZCxLQUFKLENBQVU3bUIsTUFBVixDQUFKLEVBQXVCO0FBQ25CVyxtQkFBTzhJLEdBQVAsSUFBY3dxQixVQUFVeHFCLEdBQVYsQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsV0FBTzlJLE1BQVA7QUFDSCxDIiwiZmlsZSI6Ii9Vc2Vycy96aGFvZ3VveWFuL2dpdGh1Yi9wdWIvZG9jcy9iYWxsb29uL2RlbW8vdHJpZ2dlclR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1pY29uW2Rpcj1cXFwicnRsXFxcIl06OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5leHRJY29uO1xcbiAgc3JjOiB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLnN2ZyNOZXh0SWNvblxcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7IH1cXG5cXG4ubmV4dC1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBOZXh0SWNvbjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxcbiAgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm5leHQtaWNvbi1zbWlsZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUZcXFwiOyB9XFxuICAubmV4dC1pY29uLWNyeTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NURcXFwiOyB9XFxuICAubmV4dC1pY29uLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi13YXJuaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcHJvbXB0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQ1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZXJyb3I6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1oZWxwOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY3M1xcXCI7IH1cXG4gIC5uZXh0LWljb24tY2xvY2s6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjIxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zdWNjZXNzLWZpbGxpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZWxldGUtZmlsbGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjNcXFwiOyB9XFxuICAubmV4dC1pY29uLWZhdm9yaXRlcy1maWxsaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NVxcXCI7IH1cXG4gIC5uZXh0LWljb24tbWludXM6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjAxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy11cDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjVcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvd246YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRFxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjE5XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1kb3VibGUtbGVmdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTlcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvdWJsZS1yaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUVcXFwiOyB9XFxuICAubmV4dC1pY29uLXN3aXRjaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2QjNcXFwiOyB9XFxuICAubmV4dC1pY29uLXNvcnRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjM0XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VsZWN0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzMlxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VtaS1zZWxlY3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjMzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZWFyY2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jbG9zZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjZcXFwiOyB9XFxuICAubmV4dC1pY29uLWVsbGlwc2lzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NFxcXCI7IH1cXG4gIC5uZXh0LWljb24tcGljdHVyZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzFcXFwiOyB9XFxuICAubmV4dC1pY29uLWNhbGVuZGFyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwN1xcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNoYmluOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzOVxcXCI7IH1cXG4gIC5uZXh0LWljb24tdXBsb2FkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTdFRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tZG93bmxvYWQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI4XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZXQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjgzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lZGl0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcmVmcmVzaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NzdcXFwiOyB9XFxuICAubmV4dC1pY29uLWZpbHRlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjdcXFwiOyB9XFxuICAubmV4dC1pY29uLWF0dGFjaG1lbnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjY1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hY2NvdW50OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7IH1cXG4gIC5uZXh0LWljb24tZW1haWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hdG06YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1sb2FkaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY0NlxcXCI7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHM6YmVmb3JlIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XFxuICAubmV4dC1pY29uLm5leHQteHhzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTRweDsgfVxcbiAgICAubmV4dC1pY29uLm5leHQteHhzOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4OyB9IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHM6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtc21hbGw6YmVmb3JlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtbWVkaXVtOmJlZm9yZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LWxhcmdlOmJlZm9yZSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXhsOmJlZm9yZSB7XFxuICB3aWR0aDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXh4bDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHhsOmJlZm9yZSB7XFxuICB3aWR0aDogNjRweDtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9pY29uL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmROb2RlKHRhcmdldCwgcGFyYW0pIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0KHBhcmFtKTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGFyZ2V0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS91dGlscy9maW5kLW5vZGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtmdW5jLCBvYmp9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbi8qKlxuICogQ3JlYXRlZCBieSB4aWFjaGkgb24gMTcvMi8xMC5cbiAqL1xuXG5jb25zdCB7bm9vcH0gPSBmdW5jO1xuXG5jbGFzcyBCYWxsb29uSW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNUb29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWxpZ246ICdiJyxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIHB1cmU6IGZhbHNlXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3ByZWZpeCwgY2xvc2FibGUsIGNsYXNzTmFtZSwgc3R5bGUsIGlzVG9vbHRpcCwgYWxpZ24sIHR5cGUsIG9uQ2xvc2UsIGFsaWduRWRnZSwgY2hpbGRyZW4sIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYWxpZ25NYXAgPSBhbGlnbkVkZ2UgPyBlZGdlTWFwIDogbm9ybWFsTWFwO1xuICAgICAgICBsZXQgX3ByZWZpeCA9IHByZWZpeDtcblxuICAgICAgICBpZiAoaXNUb29sdGlwKSB7XG4gICAgICAgICAgICBfcHJlZml4ID0gYCR7X3ByZWZpeH1iYWxsb29uLXRvb2x0aXBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3ByZWZpeCA9IGAke19wcmVmaXh9YmFsbG9vbmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBbYCR7X3ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS0ke3R5cGV9YF06IHR5cGUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tbWVkaXVtYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tJHthbGlnbk1hcFthbGlnbl0uYXJyb3d9YF06IGFsaWduTWFwW2FsaWduXSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS1jbG9zYWJsZWBdOiBjbG9zYWJsZSxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHJvbGU9XCJ0b29sdGlwXCIgZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9IHsuLi5vYmoucGlja090aGVycyhPYmplY3Qua2V5cyhCYWxsb29uSW5uZXIucHJvcFR5cGVzKSwgb3RoZXJzKX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvc2FibGUgP1xuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9e2Ake19wcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgc2l6ZT1cInNtYWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+IDogbnVsbH1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb25Jbm5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2lubmVyLmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSB4aWFjaGkgb24gMTcvMS8xNy5cbiAqL1xuXG5jb25zdCBub3JtYWxNYXAgPSB7XG4gICAgdDoge1xuICAgICAgICBhbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdiYyB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWxpZ246ICdjbCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnY3IgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICBiOiB7XG4gICAgICAgIGFsaWduOiAndGMgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsOiB7XG4gICAgICAgIGFsaWduOiAnY3IgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfSxcbiAgICB0bDoge1xuICAgICAgICBhbGlnbjogJ2JyIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMjAsIC0xMl1cbiAgICB9LFxuICAgIHRyOiB7XG4gICAgICAgIGFsaWduOiAnYmwgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JyIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWy0yMCwgLTEyXVxuICAgIH0sXG4gICAgcnQ6IHtcbiAgICAgICAgYWxpZ246ICdibCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDIwXVxuICAgIH0sXG4gICAgcmI6IHtcbiAgICAgICAgYWxpZ246ICd0bCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIC0yMF1cbiAgICB9LFxuICAgIGJsOiB7XG4gICAgICAgIGFsaWduOiAndHIgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RsIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFsyMCwgMTJdXG4gICAgfSxcbiAgICBicjoge1xuICAgICAgICBhbGlnbjogJ3RsIGJjJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciBiYycsXG4gICAgICAgIGFycm93OiAndG9wLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFstMjAsIDEyXVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgYWxpZ246ICdiciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMjBdXG4gICAgfSxcbiAgICBsYjoge1xuICAgICAgICBhbGlnbjogJ3RyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAtMjBdXG4gICAgfVxufTtcbmNvbnN0IGVkZ2VNYXAgPSB7XG4gICAgdDoge1xuICAgICAgICBhbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdiYyB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWxpZ246ICdjbCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnY3IgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICBiOiB7XG4gICAgICAgIGFsaWduOiAndGMgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsOiB7XG4gICAgICAgIGFsaWduOiAnY3IgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfSxcbiAgICB0bDoge1xuICAgICAgICBhbGlnbjogJ2JsIHRsJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciB0cicsXG4gICAgICAgIGFycm93OiAnYm90dG9tLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICB0cjoge1xuICAgICAgICBhbGlnbjogJ2JyIHRyJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCB0bCcsXG4gICAgICAgIGFycm93OiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcnQ6IHtcbiAgICAgICAgYWxpZ246ICd0bCB0cicsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgdGwnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICByYjoge1xuICAgICAgICBhbGlnbjogJ2JsIGJyJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciBibCcsXG4gICAgICAgIGFycm93OiAnbGVmdC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGJsOiB7XG4gICAgICAgIGFsaWduOiAndGwgYmwnLFxuICAgICAgICBydGxBbGlnbjogJ3RyIGJyJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgYnI6IHtcbiAgICAgICAgYWxpZ246ICd0ciBicicsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgYmwnLFxuICAgICAgICBhcnJvdzogJ3RvcC1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgYWxpZ246ICd0ciB0bCcsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgdHInLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LXRvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIGxiOiB7XG4gICAgICAgIGFsaWduOiAnYnIgYmwnLFxuICAgICAgICBydGxBbGlnbjogJ2JsIGJyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBub3JtYWxNYXAsXG4gICAgZWRnZU1hcFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2FsaWduTWFwLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dExlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgem9vbU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kSW5XaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IC4xOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5XaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IC4xOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXRVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZE91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kT3V0V2l0aEZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRPdXRXaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG4uZmFkZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi56b29tSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi56b29tT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbkRvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kT3V0VXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0VXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluVXA7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kSW5VcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0RG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1lbnRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1lbnRlci1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDsgfVxcbiAgLmV4cGFuZC1lbnRlci1hY3RpdmUgPiAqIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5XaXRoRmFkZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluV2l0aEZhZGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWxlYXZlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWxlYXZlLWFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0OyB9XFxuICAuZXhwYW5kLWxlYXZlLWFjdGl2ZSA+ICoge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRXaXRoRmFkZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFdpdGhGYWRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9hbmltYXRlL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LW92ZXJsYXktd3JhcHBlciAubmV4dC1vdmVybGF5LWlubmVyIHtcXG4gIHotaW5kZXg6IDEwMDE7IH1cXG5cXG4ubmV4dC1vdmVybGF5LXdyYXBwZXIgLm5leHQtb3ZlcmxheS1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4ubmV4dC1vdmVybGF5LXdyYXBwZXIub3BlbmVkIC5uZXh0LW92ZXJsYXktYmFja2Ryb3Age1xcbiAgb3BhY2l0eTogMC4yOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9vdmVybGF5L21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LWJhbGxvb24ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB6LWluZGV4OiAwO1xcbiAgLyogc2l6ZSAqL1xcbiAgLyog5bim5YWz6Zet5oyJ6ZKu55qE5Y+z5L6ncGFkZGluZ+WPmOWkpyAqLyB9XFxuICAubmV4dC1iYWxsb29uICosXFxuICAubmV4dC1iYWxsb29uICo6YmVmb3JlLFxcbiAgLm5leHQtYmFsbG9vbiAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJhbGxvb24tcHJpbWFyeSB7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBib3JkZXItY29sb3I6ICM0NDk0Rjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBjb2xvcjogIzk5OTk5OTsgfVxcbiAgICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeTphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ5NEY5O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XFxuICAgICAgei1pbmRleDogLTE7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uLW5vcm1hbCB7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBib3JkZXItY29sb3I6ICNEQ0RFRTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSA6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWw6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RDREVFMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIHotaW5kZXg6IC0xOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5uZXh0LWJhbGxvb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4OyB9XFxuICAubmV4dC1iYWxsb29uLWNsb3NhYmxlIHtcXG4gICAgcGFkZGluZzogMTZweCA0MHB4IDE2cHggMTZweDsgfVxcblxcbi5uZXh0LWJhbGxvb24tdG9vbHRpcCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJvcmRlci1jb2xvcjogI0RDREVFMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC8qIHNpemUgKi8gfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwICosXFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKjpiZWZvcmUsXFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RFRTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjc7XFxuICAgIHotaW5kZXg6IC0xOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tOmFmdGVyIHtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIGJvdHRvbTogMTJweDtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm90dG9tOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIGJvdHRvbTogLTdweDtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7IH1cXG5cXG4ubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgLyog5bim5YWz6Zet5oyJ6ZKu55qE5Y+z5L6ncGFkZGluZ+WPmOWkpyAqLyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1yaWdodDphZnRlciB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMnB4OyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDEycHg7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tY2xvc2FibGUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA0MHB4OyB9XFxuXFxuLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgLyogc2l6ZSAqLyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2JhbGxvb24vbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCBHYXRld2F5IGZyb20gJy4vZ2F0ZXdheSc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XG5cbk92ZXJsYXkuR2F0ZXdheSA9IEdhdGV3YXk7XG5PdmVybGF5LlBvc2l0aW9uID0gUG9zaXRpb247XG5PdmVybGF5LlBvcHVwID0gQ29uZmlnUHJvdmlkZXIuY29uZmlnKFBvcHVwLCB7XG4gICAgZXhwb3J0TmFtZXM6IFsnb3ZlcmxheSddXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKE92ZXJsYXksIHtcbiAgICBleHBvcnROYW1lczogWydnZXRDb250ZW50JywgJ2dldENvbnRlbnROb2RlJ11cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvaW5kZXguanN4IiwiaW1wb3J0ICogYXMgX2RvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgKiBhcyBfZW52IGZyb20gJy4vZW52JztcbmltcG9ydCAqIGFzIF9ldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgX2Z1bmMgZnJvbSAnLi9mdW5jJztcbmltcG9ydCAqIGFzIF9sb2cgZnJvbSAnLi9sb2cnO1xuaW1wb3J0ICogYXMgX29iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgKiBhcyBfc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCAqIGFzIF9zdXBwb3J0IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgKiBhcyBfZm9jdXMgZnJvbSAnLi9mb2N1cyc7XG5pbXBvcnQgX2d1aWQgZnJvbSAnLi9ndWlkJztcbmltcG9ydCBfS0VZQ09ERSBmcm9tICcuL2tleWNvZGUnO1xuXG5leHBvcnQgY29uc3QgZG9tID0gX2RvbTtcbmV4cG9ydCBjb25zdCBlbnYgPSBfZW52O1xuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IF9ldmVudHM7XG5leHBvcnQgY29uc3QgZnVuYyA9IF9mdW5jO1xuZXhwb3J0IGNvbnN0IGxvZyA9IF9sb2c7XG5leHBvcnQgY29uc3Qgb2JqID0gX29iamVjdDtcbmV4cG9ydCBjb25zdCBzdHIgPSBfc3RyaW5nO1xuZXhwb3J0IGNvbnN0IHN1cHBvcnQgPSBfc3VwcG9ydDtcbmV4cG9ydCBjb25zdCBmb2N1cyA9IF9mb2N1cztcbmV4cG9ydCBjb25zdCBndWlkID0gX2d1aWQ7XG5leHBvcnQgY29uc3QgS0VZQ09ERSA9IF9LRVlDT0RFO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5kZXguanMiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL3N0eWxlLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1idG4ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAubmV4dC1idG4gKixcXG4gIC5uZXh0LWJ0biAqOmJlZm9yZSxcXG4gIC5uZXh0LWJ0biAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJ0bjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLm5leHQtYnRuLCAubmV4dC1idG46YWN0aXZlLCAubmV4dC1idG46Zm9jdXMsIC5uZXh0LWJ0bjpob3ZlciB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLm5leHQtYnRuIHtcXG4gIC8qIOWwuuWvuOe7tOW6piAqL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgLyog5pmu6YCa5oyJ6ZKuICovXFxuICAvKiDmma7pgJrmgIHnpoHnlKjmoLflvI8gKi9cXG4gIC8qIOitpuWRiuaMiemSriAqL1xcbiAgLyog5paH5pys5oyJ6ZKuICovXFxuICAvKiBsb2FkaW5nICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKiDlub3ngbXmjInpkq4gKi9cXG4gIC8qIOe7hOWQiCAqL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyB9XFxuICAubmV4dC1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm5leHQtYnRuOmFmdGVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlOyB9XFxuICAgIC5uZXh0LWJ0biAubmV4dC1pY29uLm5leHQteHM6YmVmb3JlIHtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG4gICAgLm5leHQtYnRuLmhvdmVyLCAubmV4dC1idG46aG92ZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LXNtYWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGVmdDogOHB4O1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1sYXJnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICBsZWZ0OiAxNnB4O1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjQzRDNkNGOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWw6bGluaywgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDp2aXNpdGVkLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsLnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWw6Zm9jdXMsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWw6aG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwuaG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWw6YWN0aXZlLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsLmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICMzMzMzMzM7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNztcXG4gICAgICBib3JkZXItY29sb3I6ICNBMEEyQUQ7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTg0RkY7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnksIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OmxpbmssIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5LnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OmZvY3VzLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeTpob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnkuaG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OmFjdGl2ZSwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnkuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U3MUY3O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU4NEZGOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnksIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnk6bGluaywgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTp2aXNpdGVkLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5LnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAjNTU4NEZGOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnk6aG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkuaG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnk6YWN0aXZlLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5LmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNzFGNztcXG4gICAgICBib3JkZXItY29sb3I6ICMzRTcxRjc7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4uZGlzYWJsZWQsIC5uZXh0LWJ0bltkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7IH1cXG4gICAgLm5leHQtYnRuLmRpc2FibGVkLCAubmV4dC1idG4uZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG5bZGlzYWJsZWRdLCAubmV4dC1idG5bZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bltkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuW2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICBjb2xvcjogI0NDQ0NDQzsgfVxcbiAgICAubmV4dC1idG4uZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4uZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4uZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG5bZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG5bZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG5bZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG5bZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuW2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRTZFN0VCO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLXdhcm5pbmcge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XFxuICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjMwMDA7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkYzMDAwOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzJCMDA7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNFNzJCMDA7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRENERUUzOyB9XFxuICAgICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI0RDREVFMztcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRjMwMDA7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWw6dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICNGRjMwMDA7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWw6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWw6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTZFN0VCOyB9XFxuICAgICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0sIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF06bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQzsgfVxcbiAgICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI0U2RTdFQjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4tdGV4dCB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0LmhvdmVyLCAubmV4dC1idG4tdGV4dDpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTpsaW5rLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzU1ODRGRjsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6YWN0aXZlLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzNFNzFGNztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnksIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTpsaW5rLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnk6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5LnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5LmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnk6YWN0aXZlLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjNTU4NEZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbDp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWwudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzMzMzMzMzsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbDpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWwuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbDphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICM1NTg0RkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICBwYWRkaW5nOiAwIDA7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBib3JkZXItd2lkdGg6IDA7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICBwYWRkaW5nOiAwIDA7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBib3JkZXItd2lkdGg6IDA7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgcGFkZGluZzogMCAwO1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0sIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzpsaW5rLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzMzMzMzMzsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6YWN0aXZlLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgZm9udC1mYW1pbHk6IE5leHRJY29uO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY0NlxcXCI7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSAycyBpbmZpbml0ZSBsaW5lYXI7IH1cXG4gIC5uZXh0LWJ0bi1naG9zdCB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XFxuICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XFxuICAgICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzMzMzMzMzsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodDp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzMzMzMzMzsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodDpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodDphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTIpO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzMzMzO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4tZ3JvdXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmhvdmVyLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46Zm9jdXMsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjphY3RpdmUsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi5hY3RpdmUge1xcbiAgICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi5kaXNhYmxlZCwgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuW2Rpc2FibGVkXSB7XFxuICAgICAgICB6LWluZGV4OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCAubmV4dC1idG4ubmV4dC1idG4ge1xcbiAgICAgIG1hcmdpbjogMCAwIDAgLTFweDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgLm5leHQtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cXG4gICAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKTpob3ZlciB7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKS5kaXNhYmxlZCwgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZClbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRTZFN0VCOyB9XFxuXFxuLyog57uE5ZCIICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuIHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdIC5uZXh0LWJ0bi5uZXh0LWJ0biB7XFxuICBtYXJnaW46IDAgLTFweCAwIDA7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XFxuXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XFxuXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgfVxcbiAgLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKTpob3ZlciB7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCkuZGlzYWJsZWQsIC5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZClbZGlzYWJsZWRdIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjRTZFN0VCOyB9XFxuXFxuLyog5bC65a+457u05bqmICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDhweDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjhweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzZweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxNnB4O1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLyog5paH5pys5oyJ6ZKuICovXFxuLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4ubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4ubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvYnV0dG9uL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcblxuLyoqXG4gKiBJY29uXG4gKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+WumuaYvuekuuWTquenjeWbvuagh1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+WumuWbvuagh+Wkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHhzJywgJ3hzJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICd4bCcsICd4eGwnLCAneHh4bCddKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHNpemU6ICdtZWRpdW0nXG4gICAgfTtcblxuICAgIHN0YXRpYyBfdHlwZU1hcmsgPSAnaWNvbic7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIHR5cGUsIHNpemUsIGNsYXNzTmFtZSwgcnRsLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY3goe1xuICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWljb24tJHt0eXBlfWBdOiAhIXR5cGUsXG4gICAgICAgICAgICBbYCR7cHJlZml4fSR7c2l6ZX1gXTogISFzaXplLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChydGwgJiYgWydhcnJvdy1sZWZ0JywgJ2Fycm93LXJpZ2h0JywgJ2Fycm93LWRvdWJsZS1sZWZ0JywgJ2Fycm93LWRvdWJsZS1yaWdodCcsICdzd2l0Y2gnLCAnc29ydGluZycsICdkZXNjZW5kaW5nJywgJ2FzY2VuZGluZyddLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBvdGhlci5kaXIgPSAncnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8aSB7Li4ub3RoZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoSWNvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbi9pbmRleC5qc3giLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRlL3N0eWxlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubW9tZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luZG93Lm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbnRleHRQcm9wcyhwcm9wcywgY29udGV4dCwgZGlzcGxheU5hbWUpIHtcbiAgICBjb25zdCB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCBydGwgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgbmV4dFByZWZpeCwgbmV4dExvY2FsZSwgbmV4dFB1cmUsIG5leHRXYXJuaW5nLCBuZXh0UnRsIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgbmV3UHJlZml4ID0gcHJlZml4IHx8IG5leHRQcmVmaXg7XG5cbiAgICBsZXQgbG9jYWxlRnJvbUNvbnRleHQ7XG4gICAgaWYgKG5leHRMb2NhbGUpIHtcbiAgICAgICAgbG9jYWxlRnJvbUNvbnRleHQgPSBuZXh0TG9jYWxlW2Rpc3BsYXlOYW1lXTtcbiAgICAgICAgaWYgKGxvY2FsZUZyb21Db250ZXh0KSB7XG4gICAgICAgICAgICBsb2NhbGVGcm9tQ29udGV4dC5tb21lbnRMb2NhbGUgPSBuZXh0TG9jYWxlLm1vbWVudExvY2FsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3TG9jYWxlO1xuICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgbmV3TG9jYWxlID0geyAuLi4obG9jYWxlRnJvbUNvbnRleHQgfHwge30pLCAuLi5sb2NhbGUgfTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZUZyb21Db250ZXh0KSB7XG4gICAgICAgIG5ld0xvY2FsZSA9IGxvY2FsZUZyb21Db250ZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1B1cmUgPSB0eXBlb2YgcHVyZSA9PT0gJ2Jvb2xlYW4nID8gcHVyZSA6IG5leHRQdXJlO1xuICAgIGNvbnN0IG5ld1J0bCA9IHR5cGVvZiBydGwgPT09ICdib29sZWFuJyA/IHJ0bCA6IG5leHRSdGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IG5ld1ByZWZpeCxcbiAgICAgICAgbG9jYWxlOiBuZXdMb2NhbGUsXG4gICAgICAgIHB1cmU6IG5ld1B1cmUsXG4gICAgICAgIHJ0bDogbmV3UnRsLFxuICAgICAgICB3YXJuaW5nOiBuZXh0V2FybmluZ1xuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2dldC1jb250ZXh0LXByb3BzLmpzeCIsImltcG9ydCB7Y2FtZWxjYXNlLCBoeXBoZW5hdGV9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7ZWFjaH0gZnJvbSAnLi9vYmplY3QnO1xuXG4vKipcbiAqIOaYr+WQpuiDveS9v+eUqCBET00g5pa55rOVXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0RPTSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93LmRvY3VtZW50ICYmICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudDtcblxuLyoqXG4gKiDoioLngrnmmK/lkKbljIXlkKvmjIflrpogY2xhc3NOYW1lXG4gKiBAcGFyYW0gIHtFbGVtZW50fSAgbm9kZVxuICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20uaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xO1xuICAgIH1cbn1cblxuLyoqXG4gKiDmt7vliqAgY2xhc3NOYW1lXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqXG4gKiBAZXhhbXBsZVxuICogZG9tLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdmb28nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzIChub2RlLCBjbGFzc05hbWUsIF9mb3JjZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChfZm9yY2UgPT09IHRydWUgfHwgIWhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnp7vpmaQgY2xhc3NOYW1lXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSwgX2ZvcmNlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKF9mb3JjZSA9PT0gdHJ1ZSB8fCBoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIG5vZGUuY2xhc3NOYW1lID0gbm9kZS5jbGFzc05hbWUucmVwbGFjZShjbGFzc05hbWUsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDliIfmjaIgY2xhc3NOYW1lXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICAgIOaJp+ihjOWQjuiKgueCueS4iuaYr+WQpui/mOacieatpCBjbGFzc05hbWVcbiAqXG4gKiBAZXhhbXBsZVxuICogZG9tLnRvZ2dsZUNsYXNzKGRvY3VtZW50LmJvZHksICdmb28nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmbGFnID0gaGFzQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICAgICAgZmxhZyA/IHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSwgdHJ1ZSkgOiBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiAhZmxhZztcbiAgICB9XG59XG5cbi8qKlxuICog5YWD57Sg5piv5ZCm5Yy56YWNIENTUyDpgInmi6nlmahcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGUgICAgICAgRE9NIOiKgueCuVxuICogQHBhcmFtICB7U3RyaW5nfSAgc2VsZWN0b3IgICBDU1Mg6YCJ5oup5ZmoXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20ubWF0Y2hlcyhtb3VudE5vZGUsICcuY29udGFpbmVyJyk7IC8vIGJvb2xlYW5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1hdGNoZXNGbiA9IG51bGw7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoaGFzRE9NKSB7XG4gICAgICAgIGNvbnN0IF9ib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5oZWFkO1xuICAgICAgICBtYXRjaGVzRm4gPSBfYm9keS5tYXRjaGVzID8gJ21hdGNoZXMnIDpcbiAgICAgICAgICAgIF9ib2R5LndlYmtpdE1hdGNoZXNTZWxlY3RvciA/ICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InIDpcbiAgICAgICAgICAgICAgICBfYm9keS5tc01hdGNoZXNTZWxlY3RvciA/ICdtc01hdGNoZXNTZWxlY3RvcicgOlxuICAgICAgICAgICAgICAgICAgICBfYm9keS5tb3pNYXRjaGVzU2VsZWN0b3IgPyAnbW96TWF0Y2hlc1NlbGVjdG9yJyA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNGbiA/IG5vZGVbbWF0Y2hlc0ZuXShzZWxlY3RvcikgOiBmYWxzZTtcbiAgICB9O1xufSgpO1xuXG4vKipcbiAqIOiOt+WPluWFg+e0oOiuoeeul+WQjueahOagt+W8j1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSAxID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB7fTtcbn1cblxuY29uc3QgUElYRUxfUEFUVEVSTiA9IC9tYXJnaW58cGFkZGluZ3x3aWR0aHxoZWlnaHR8bWF4fG1pbnxvZmZzZXR8c2l6ZS9pO1xuY29uc3QgcmVtb3ZlUGl4ZWwgPSB7bGVmdDogMSwgdG9wOiAxLCByaWdodDogMSwgYm90dG9tOiAxfTtcblxuLyoqXG4gKiDmoKHpqozlubbkv67mraPlhYPntKDnmoTmoLflvI/lsZ7mgKflgLxcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gX2dldFN0eWxlVmFsdWUgKG5vZGUsIHR5cGUsIHZhbHVlKSB7XG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLm9mZnNldFdpZHRoIHx8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISh0eXBlIGluIHJlbW92ZVBpeGVsKSkge1xuICAgICAgICAvLyDlsZ7mgKflgLzmmK/lkKbpnIDopoHljrvmjokgcHgg5Y2V5L2N77yM6L+Z6YeM5YGH5a6a5q2k57G755qE5bGe5oCn5YC86YO95pivIHB4IOS4uuWNleS9jeeahFxuICAgICAgICByZW1vdmVQaXhlbFt0eXBlXSA9IFBJWEVMX1BBVFRFUk4udGVzdCh0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlUGl4ZWxbdHlwZV0gPyAocGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCkgOiB2YWx1ZTtcbn1cblxuY29uc3QgZmxvYXRNYXAgPSB7Y3NzRmxvYXQ6IDEsIHN0eWxlRmxvYXQ6IDEsIGZsb2F0OiAxfTtcblxuLyoqXG4gKiDojrflj5blhYPntKDorqHnrpflkI7nmoTmoLflvI9cbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGUgRE9NIOiKgueCuVxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIOWxnuaAp+WQjVxuICogQHJldHVybiB7TnVtYmVyfE9iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlIChub2RlLCBuYW1lKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIC8vIOWmguaenOS4jeaMh+WumuWxnuaAp+WQje+8jOWImei/lOWbnuWFqOmDqOWAvFxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICBuYW1lID0gZmxvYXRNYXBbbmFtZV0gPyAnY3NzRmxvYXQnIGluIG5vZGUuc3R5bGUgPyAnY3NzRmxvYXQnIDogJ3N0eWxlRmxvYXQnIDogbmFtZTtcblxuICAgIHJldHVybiBfZ2V0U3R5bGVWYWx1ZShub2RlLCBuYW1lLCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGh5cGhlbmF0ZShuYW1lKSkgfHwgbm9kZS5zdHlsZVtjYW1lbGNhc2UobmFtZSldKTtcbn1cblxuLyoqXG4gKiDorr7nva7lhYPntKDnmoTmoLflvI9cbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSAgRE9NIOiKgueCuVxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lICDlsZ7mgKflkI3vvIzmiJbogIXmmK/kuIDkuKrlr7nosaHvvIzljIXlkKvlpJrkuKrlsZ7mgKdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWUg5bGe5oCn5YC8XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIOiuvue9ruWNleS4quWxnuaAp+WAvFxuICogZG9tLnNldFN0eWxlKG1vdW50Tm9kZSwgJ3dpZHRoJywgMTAwKTtcbiAqIC8vIOiuvue9ruWkmuadoeWxnuaAp+WAvFxuICogZG9tLnNldFN0eWxlKG1vdW50Tm9kZSwge1xuICogICAgIHdpZHRoOiAxMDAsXG4gKiAgICAgaGVpZ2h0OiAyMDBcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUgKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOaJuemHj+iuvue9ruWkmuS4quWAvFxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBlYWNoKG5hbWUsICh2YWwsIGtleSkgPT4gc2V0U3R5bGUobm9kZSwga2V5LCB2YWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lID0gZmxvYXRNYXBbbmFtZV0gPyAnY3NzRmxvYXQnIGluIG5vZGUuc3R5bGUgPyAnY3NzRmxvYXQnIDogJ3N0eWxlRmxvYXQnIDogbmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgUElYRUxfUEFUVEVSTi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfXB4YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnN0eWxlW2NhbWVsY2FzZShuYW1lKV0gPSB2YWx1ZTsgLy8gSUU4IHN1cHBvcnRcbiAgICB9XG59XG5cbi8qKlxuICog6I635Y+W6buY6K6k55qE5rua5Yqo5p2h5aSn5bCPXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpZHRoLCBoZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbGJhciAoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzZXRTdHlsZShzY3JvbGxEaXYsIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgdG9wOiAnLTk5OTlweCdcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsYmFySGVpZ2h0ID0gc2Nyb2xsRGl2Lm9mZnNldEhlaWdodCAtIHNjcm9sbERpdi5jbGllbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHNjcm9sbGJhcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNjcm9sbGJhckhlaWdodFxuICAgIH07XG59XG5cbi8qKlxuICog6I635Y+W5YWD57Sg6Led56a76KeG5Y+j6aG26YOo5ZKM5bem6L6555qE5YGP56e76Led56a7XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRvcCwgbGVmdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0IChub2RlKSB7XG4gICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kb20uanMiLCIvKipcbiAqIOWwhuWtl+espuS4sui9rOWMluS4uumpvOWzsOW8j+WGmeazlVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIg5L6L77yaLXdlYmtpdC10cmFuc2l0aW9uXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICDkvovvvJpXZWJraXRUcmFuc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGNhc2UgKHN0cikge1xuICAgIGlmICghLy0vLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gc3RyIHx8ICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShbYS16XSkvZywgKCQwLCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XG59XG5cbi8qKlxuICog5bCG6am85bOw5byP5a2X56ym5Liy6L2s5YyW5Li66L+e5a2X56ym5YaZ5rOVXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciDkvovvvJpXZWJraXRUcmFuc2l0aW9uXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICDkvovvvJotd2Via2l0LXRyYW5zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5cGhlbmF0ZSAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csICQwID0+IGAtJHskMC50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvc3RyaW5nLmpzIiwiXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NyYy9idXR0b24nO1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvYnV0dG9uL3N0eWxlLmpzJztcblxuXG5pbXBvcnQgQmFsbG9vbiBmcm9tICcuLi8uLi8uLi9zcmMvYmFsbG9vbic7XG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9iYWxsb29uL3N0eWxlLmpzJztcblxuXG5cbmNvbnN0IGNvbnRlbnQgPSAoPGRpdj48cD5jb250ZW50PC9wPjwvZGl2Pik7XG5jb25zdCBNb3ZlVGFyZ2V0ID0gPEJ1dHRvbiBzdHlsZT17e21hcmdpbjogJzVweCd9fT5ob3ZlcjwvQnV0dG9uPjtcbmNvbnN0IENsaWNrVGFyZ2V0ID0gPEJ1dHRvbiBzdHlsZT17e21hcmdpbjogJzVweCd9fT5jbGljazwvQnV0dG9uPjtcbmNvbnN0IEZvY3VzVGFyZ2V0ID0gPEJ1dHRvbiBzdHlsZT17e21hcmdpbjogJzVweCd9fT5mb2N1czwvQnV0dG9uPjtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e01vdmVUYXJnZXR9IHRyaWdnZXJUeXBlPVwiaG92ZXJcIj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0JhbGxvb24+XG5cbiAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17Q2xpY2tUYXJnZXR9IHRyaWdnZXJUeXBlPVwiY2xpY2tcIj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0JhbGxvb24+XG5cbiAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17Rm9jdXNUYXJnZXR9IHRyaWdnZXJUeXBlPVwiZm9jdXNcIj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0JhbGxvb24+XG4gICAgPC9kaXY+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgbW91bnROb2RlKTtcblxuXG4vLyBIT1QgUkVMT0FEIENPREVcbmNvbnN0IGNvbXBvbmVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcG9uZW50LWRlc2MnKTtcbmNvbXBvbmVudERlc2MuaW5uZXJIVE1MID0gYOm8oOagh+enu+WFpeOAgeiBmumbhuOAgeeCueWHu+OAgmA7XG5jb25zdCBjb21wb25lbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvbmVudC1ib2R5Jyk7XG5jb21wb25lbnRCb2R5LmlubmVySFRNTCA9IGA8cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtanN4XCI+PGRpdiBjbGFzcz1cImhsanNcIj48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmltcG9ydDwvc3Bhbj4geyBCdXR0b24sIEJhbGxvb24gfSA8c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4nQGFsaWZkL25leHQnPC9zcGFuPjtcblxuXG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBjb250ZW50ID0gKDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5wPC9zcGFuPiZndDs8L3NwYW4+Y29udGVudDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+cDwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPik7XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBNb3ZlVGFyZ2V0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3ttYXJnaW46PC9zcGFuPiAnPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj41cHg8L3NwYW4+J319Jmd0Ozwvc3Bhbj5ob3ZlcjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IENsaWNrVGFyZ2V0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3ttYXJnaW46PC9zcGFuPiAnPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj41cHg8L3NwYW4+J319Jmd0Ozwvc3Bhbj5jbGljazxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IEZvY3VzVGFyZ2V0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3ttYXJnaW46PC9zcGFuPiAnPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj41cHg8L3NwYW4+J319Jmd0Ozwvc3Bhbj5mb2N1czxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcblxuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gQXBwID0gPHNwYW4gY2xhc3M9XCJobGpzLWZ1bmN0aW9uXCI+PHNwYW4gY2xhc3M9XCJobGpzLXBhcmFtc1wiPigpPC9zcGFuPiA9Jmd0Ozwvc3Bhbj4gKFxuICAgIDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e01vdmVUYXJnZXR9PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXJUeXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJob3ZlclwiPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntDbGlja1RhcmdldH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+Jmd0Ozwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e0ZvY3VzVGFyZ2V0fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyVHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiZm9jdXNcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPlxuKTtcblxuUmVhY3RET00ucmVuZGVyKDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkFwcDwvc3Bhbj4gLyZndDs8L3NwYW4+LCBtb3VudE5vZGUpO1xuXG48L3NwYW4+PC9kaXY+PC9jb2RlPjwvcHJlPlxuYC5yZXBsYWNlKC97YmFja3F1b3RlfS9nLCAnYCcpLnJlcGxhY2UoL3tkb2xsYXJ9L2csICckJyk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgY29uc3QgcmVsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQtZGVtby1yZWxvYWRpbmcnKTtcblxuICBpZiAoIXdpbmRvdy5oYXNBZGRTdGF0dXNIYW5kbGVyKSB7XG4gICAgbW9kdWxlLmhvdC5hZGRTdGF0dXNIYW5kbGVyKHN0YXR1cyA9PiB7XG4gICAgICB3aW5kb3cuaGFzQWRkU3RhdHVzSGFuZGxlciA9IHRydWU7XG4gICAgICBpZiAoc3RhdHVzID09PSAnY2hlY2snKSB7XG4gICAgICAgIHJlbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgICAgcmVsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL2JhbGxvb24vZGVtby90cmlnZ2VyVHlwZS5tZCIsIi8qKlxuICogSUXmtY/op4jlmajnmoTmuLLmn5PlvJXmk47niYjmnKzlj7dcbiAqIOazqOaEj++8muatpOWxnuaAp+S4jua1j+iniOWZqOeJiOacrOWPt+S4jeWQjO+8jElF55qE5riy5p+T5byV5pOO54mI5pys5Y+35piv5Y+v5Lul6YCa6L+HSFRNTCBoZWFkZXLmiJbmiYvliqjorr7nva7ljrvmm7TmlLnnmoRcbiAqIEB0eXBlIHtOdW1iZXJ9IDYgfiAxMFxuICovXG5leHBvcnQgY29uc3QgaWVWZXJzaW9uID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiDliKTmlq3mmK/lkKbmmK/nlJ/kuqfnjq/looNcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNQcm9kdWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFBST0RVQ1RJT05fRU5WID0gJ3Byb2R1Y3Rpb24nO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFBST0RVQ1RJT05fRU5WKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFBST0RVQ1RJT05fRU5WKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGllVmVyc2lvbixcbiAgICBpc1Byb2R1Y3Rpb24sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZW52LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcblxuICAgIC8vIHZlcnNpb24gMC54XG4gICAgRVNDQVBFOiAyNyxcbiAgICBMRUZUX0FSUk9XOiAzNyxcbiAgICBVUF9BUlJPVzogMzgsXG4gICAgUklHSFRfQVJST1c6IDM5LFxuICAgIERPV05fQVJST1c6IDQwLFxuXG4gICAgLy8gTWFjT1NcbiAgICBDT05UUk9MOiAxNyxcbiAgICBPUFRJT046IDE4LFxuICAgIENNRDogOTEsXG4gICAgQ09NTUFORDogOTEsXG4gICAgREVMRVRFOiA4LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2tleWNvZGUuanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2NsYXNzbmFtZXNAMi4yLjZAY2xhc3NuYW1lcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZG9tLCBldmVudHMsIGZ1bmMsIHN1cHBvcnQsIGZvY3VzLCBLRVlDT0RFLCBndWlkIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3ZlcmxheU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcbmltcG9ydCBHYXRld2F5IGZyb20gJy4vZ2F0ZXdheSc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IHNhdmVMYXN0Rm9jdXNOb2RlLCBnZXRGb2N1c05vZGVMaXN0LCBiYWNrTGFzdEZvY3VzTm9kZSB9ID0gZm9jdXM7XG5jb25zdCB7IG1ha2VDaGFpbiwgbm9vcCwgYmluZEN0eCB9ID0gZnVuYztcblxuY29uc3QgaXNTY3JvbGxEaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGJhclN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJzo6LXdlYmtpdC1zY3JvbGxiYXInKTtcbiAgICAgICAgcmV0dXJuICFzY3JvbGxiYXJTdHlsZSB8fCBzY3JvbGxiYXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT09ICdub25lJztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZSBlcnJvciBmb3IgZmlyZWZveFxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGhhc1Njcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIGRvYy5zY3JvbGxIZWlnaHQgPiBkb2MuY2xpZW50SGVpZ2h0ICYmIGRvbS5zY3JvbGxiYXIoKS53aWR0aCA+IDAgJiYgaXNTY3JvbGxEaXNwbGF5KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgJiYgaXNTY3JvbGxEaXNwbGF5KGRvY3VtZW50LmJvZHkpO1xufTtcbmNvbnN0IHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnbXMtJywgJyddO1xuY29uc3QgZ2V0U3R5bGVQcm9wZXJ0eSA9IChub2RlLCBuYW1lKSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBtb2RhbHMgPSBbXTtcbmxldCBib2R5T3ZlcmZsb3dZLCBib2R5UGFkZGluZ1JpZ2h0O1xuXG4vKipcbiAqIE92ZXJsYXlcbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaYvuekuuW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLor7fmsYLlhbPpl63ml7bop6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg5by55bGC5YWz6Zet55qE5p2l5rqQXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIERPTSDkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uUmVxdWVzdENsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeeahOWPgueFp+WFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55u45a+55LqO5Y+C54Wn5YWD57Sg55qE5a6a5L2NLCDor6bop4HlvIDlj5HmjIfljZfnmoRb5a6a5L2N6YOo5YiGXSgj5a6a5L2NKVxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo7lj4LnhaflhYPntKDlrprkvY3nmoTlvq7osINcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICAvKipcbiAgICAgICAgICog5riy5p+T57uE5Lu255qE5a655Zmo77yM5aaC5p6c5piv5Ye95pWw6ZyA6KaB6L+U5ZueIHJlZu+8jOWmguaenOaYr+Wtl+espuS4suWImeaYr+ivpSBET00g55qEIGlk77yM5Lmf5Y+v5Lul55u05o6l5Lyg5YWlIERPTSDoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaYvuekuumBrue9qVxuICAgICAgICAgKi9cbiAgICAgICAgaGFzTWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmlK/mjIEgZXNjIOaMiemUruWFs+mXreW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeUVzYzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDngrnlh7vlvLnlsYLlpJbnmoTljLrln5/mmK/lkKblhbPpl63lvLnlsYLvvIzkuI3mmL7npLrpga7nvanml7bnlJ/mlYhcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlPdXRTaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye76YGu572p5Yy65Z+f5piv5ZCm5YWz6Zet5by55bGC77yM5pi+56S66YGu572p5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5TWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDliY3op6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZU9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5pe26Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5ZCO6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwLCDlpoLmnpzmnInliqjnlLvvvIzliJnlnKjliqjnlLvnu5PmnZ/lkI7op6blj5FcbiAgICAgICAgICovXG4gICAgICAgIGFmdGVyT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63liY3op6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWFs+mXreaXtuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63lkI7op6blj5Hkuovku7bnmoTlm57osIPlh73mlbAsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3lrozmiJDliY3op6blj5HnmoTkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeWujOaIkOaXtuinpuWPkeeahOS6i+S7tlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOWumuS9jeeahOWPguaVsFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWcuYWxpZ24g5a+56b2Q5pa55byP77yM5aaCIFsnY2MnLCAnY2MnXe+8iOWmguaenOW8gOWQryBuZWVkQWRqdXN077yM5Y+v6IO95ZKM6aKE5YWI6K6+572u55qEIGFsaWduIOS4jeWQjO+8iVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnRvcCDot53nprvop4blj6Ppobbpg6jot53nprtcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5sZWZ0IOi3neemu+inhuWPo+W3puS+p+i3neemu1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSDlrprkvY3lj4LnhafnmoTlrrnlmajoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIG9uUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Zyo5q+P5qyh5by55bGC6YeN5paw5riy5p+T5ZCO5by65Yi25pu05paw5a6a5L2N5L+h5oGv77yM5LiA6Iis55So5LqO5by55bGC5YaF5a655Yy65Z+f5aSn5bCP5Y+R55Sf5Y+Y5YyW5pe277yM5LuN6ZyA5L+d5oyB5Y6f5p2l55qE5a6a5L2N5pa55byPXG4gICAgICAgICAqL1xuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDml7bmmK/lkKborqnlhbbkuK3nmoTlhYPntKDoh6rliqjojrflj5bnhKbngrlcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZPlvLnlsYLnlLHkuo7pobXpnaLmu5rliqjnrYnmg4XlhrXkuI3lnKjlj6/op4bljLrln5/ml7bvvIzmmK/lkKboh6rliqjosIPmlbTlrprkvY3ku6Xlh7rnjrDlnKjlj6/op4bljLrln59cbiAgICAgICAgICovXG4gICAgICAgIG5lZWRBZGp1c3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm56aB55So6aG16Z2i5rua5YqoXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmakOiXj+aXtuaYr+WQpuS/neeVmeWtkOiKgueCuVxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5a6J5YWo6IqC54K577yM5b2T54K55Ye7IGRvY3VtZW50IOeahOaXtuWAme+8jOWmguaenOWMheWQq+ivpeiKgueCueWImeS4jeS8muWFs+mXreW8ueWxgu+8jOWmguaenOaYr+WHveaVsOmcgOimgei/lOWbniByZWbvvIzlpoLmnpzmmK/lrZfnrKbkuLLliJnmmK/or6UgRE9NIOeahCBpZO+8jOS5n+WPr+S7peebtOaOpeS8oOWFpSBET00g6IqC54K577yM5oiW6ICF5Lul5LiK5YC857uE5oiQ55qE5pWw57uEXG4gICAgICAgICAqL1xuICAgICAgICBzYWZlTm9kZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahOagueiKgueCueeahOagt+W8j+exu1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahOagueiKgueCueeahOWGheiBlOagt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog6YWN572u5Yqo55S755qE5pKt5pS+5pa55byP77yM5pSv5oyBIHsgaW46ICdlbnRlci1jbGFzcycsIG91dDogJ2xlYXZlLWNsYXNzJyB9IOeahOWvueixoeWPguaVsO+8jOWmguaenOiuvue9ruS4uiBmYWxzZe+8jOWImeS4jeaSreaUvuWKqOeUu1xuICAgICAgICAgKiBAZGVmYXVsdCB7IGluOiAnZXhwYW5kSW5Eb3duJywgb3V0OiAnZXhwYW5kT3V0VXAnIH1cbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgICAgb25NYXNrTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTWFza01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgcHVyZTogZmFsc2UsXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICBvblJlcXVlc3RDbG9zZTogbm9vcCxcbiAgICAgICAgdGFyZ2V0OiBQb3NpdGlvbi5WSUVXUE9SVCxcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICBoYXNNYXNrOiBmYWxzZSxcbiAgICAgICAgY2FuQ2xvc2VCeUVzYzogdHJ1ZSxcbiAgICAgICAgY2FuQ2xvc2VCeU91dFNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgY2FuQ2xvc2VCeU1hc2s6IHRydWUsXG4gICAgICAgIGJlZm9yZU9wZW46IG5vb3AsXG4gICAgICAgIG9uT3Blbjogbm9vcCxcbiAgICAgICAgYWZ0ZXJPcGVuOiBub29wLFxuICAgICAgICBiZWZvcmVDbG9zZTogbm9vcCxcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWZ0ZXJDbG9zZTogbm9vcCxcbiAgICAgICAgYmVmb3JlUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG9uUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG9uTWFza01vdXNlRW50ZXI6IG5vb3AsXG4gICAgICAgIG9uTWFza01vdXNlTGVhdmU6IG5vb3AsXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgbmVlZEFkanVzdDogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZVNjcm9sbDogZmFsc2UsXG4gICAgICAgIGNhY2hlOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGUsXG4gICAgICAgICAgICBzdGF0dXM6ICdub25lJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdGhpcy5nZXRBbmltYXRpb24ocHJvcHMpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sYXN0QWxpZ24gPSBwcm9wcy5hbGlnbjtcblxuICAgICAgICBiaW5kQ3R4KHRoaXMsIFtcbiAgICAgICAgICAgICdoYW5kbGVQb3NpdGlvbicsXG4gICAgICAgICAgICAnaGFuZGxlQW5pbWF0ZUVuZCcsXG4gICAgICAgICAgICAnaGFuZGxlRG9jdW1lbnRLZXlEb3duJyxcbiAgICAgICAgICAgICdoYW5kbGVEb2N1bWVudENsaWNrJyxcbiAgICAgICAgICAgICdoYW5kbGVNYXNrQ2xpY2snLFxuICAgICAgICAgICAgJ2JlZm9yZU9wZW4nLFxuICAgICAgICAgICAgJ2JlZm9yZUNsb3NlJ1xuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXRNYXAgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlT3BlbigpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5iZWZvcmVPcGVuKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGlvbiAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZERvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgICAgb3ZlcmxheU1hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgJiYgbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3aWxsT3BlbiA9ICF0aGlzLnByb3BzLnZpc2libGUgJiYgbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgIGNvbnN0IHdpbGxDbG9zZSA9IHRoaXMucHJvcHMudmlzaWJsZSAmJiAhbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgIGlmICh3aWxsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmVmb3JlT3BlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbGxDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgICAgICAgbmV4dFByb3BzLmJlZm9yZUNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLmFuaW1hdGlvbiB8fCBuZXh0UHJvcHMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBuZXh0UHJvcHMuYW5pbWF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW5pbWF0aW9uICE9PSBmYWxzZSAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgaWYgKHdpbGxPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aWxsQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlYXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnN0IG9wZW4gPSAhcHJldlByb3BzLnZpc2libGUgJiYgdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgICAgICBjb25zdCBjbG9zZSA9IHByZXZQcm9wcy52aXNpYmxlICYmICF0aGlzLnByb3BzLnZpc2libGU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGlvbiAmJiBzdXBwb3J0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wZW4gfHwgY2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbkV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFmdGVyT3BlbigpO1xuICAgICAgICAgICAgICAgICAgICBkb20uYWRkQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheU1hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c05vZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24ub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVmb3JlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24ocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5hbmltYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbmltYXRpb25CeUFsaWduKHByb3BzLmFsaWduKTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb25CeUFsaWduKGFsaWduKSB7XG4gICAgICAgIHN3aXRjaCAoYWxpZ25bMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5Eb3duJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0OiAnZXhwYW5kT3V0VXAnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5VcCcsXG4gICAgICAgICAgICAgICAgICAgIG91dDogJ2V4cGFuZE91dERvd24nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW46ICdleHBhbmRJbkRvd24nLFxuICAgICAgICAgICAgICAgICAgICBvdXQ6ICdleHBhbmRPdXRVcCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uRXZlbnRzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZ3VpZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gZXZlbnRzLm9uKG5vZGUsIHN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgdGhpcy5oYW5kbGVBbmltYXRlRW5kLmJpbmQodGhpcywgaWQpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGFuaW1hdGlvbkRlbGF5ICsgYW5pbWF0aW9uRHVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0TWFwW2lkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRlRW5kKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUG9zaXRpb24oY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGFsaWduID0gY29uZmlnLmFsaWduLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoISgnYW5pbWF0aW9uJyBpbiB0aGlzLnByb3BzKSAmJiB0aGlzLnByb3BzLm5lZWRBZGp1c3QgJiYgdGhpcy5sYXN0QWxpZ24gIT09IGFsaWduKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRoaXMuZ2V0QW5pbWF0aW9uQnlBbGlnbihhbGlnbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWxpZ24gPSBhbGlnbjtcbiAgICB9XG5cbiAgICBoYW5kbGVBbmltYXRlRW5kKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRNYXBbaWRdKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0TWFwW2lkXSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMudGltZW91dE1hcFtpZF07XG5cbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdsZWF2aW5nJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uTGVhdmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdlbnRlcmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbkVudGVyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXM6ICdlbnRlcmluZydcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gTk9URTogc2V0U3RhdGUgY2FsbGJhY2sgKHNlY29uZCBhcmd1bWVudCkgbm93IGZpcmVzIGltbWVkaWF0ZWx5IGFmdGVyIGNvbXBvbmVudERpZE1vdW50IC8gY29tcG9uZW50RGlkVXBkYXRlIGluc3RlYWQgb2YgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgaGF2ZSByZW5kZXJlZC5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxlYXZlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2xlYXZpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25MZWF2aW5nKCk7XG4gICAgfVxuXG4gICAgb25FbnRlcmluZygpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgIH1cblxuICAgIG9uTGVhdmluZygpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlck5vZGUgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkVudGVyZWQoKSB7XG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJPcGVuKCk7XG4gICAgfVxuXG4gICAgb25MZWF2ZWQoKSB7XG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJDbG9zZSgpO1xuICAgIH1cblxuICAgIGJlZm9yZU9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgICAgIGlmIChtb2RhbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgIGJvZHlPdmVyZmxvd1kgPSBib2R5LnN0eWxlLm92ZXJmbG93WTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keVBhZGRpbmdSaWdodCA9IGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtkb20uZ2V0U3R5bGUoYm9keSwgJ3BhZGRpbmdSaWdodCcpICsgZG9tLnNjcm9sbGJhcigpLndpZHRofXB4YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb20uc2V0U3R5bGUoYm9keSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kYWxzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVDbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtb2RhbHMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGFscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IGJvZHlPdmVyZmxvd1lcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Njcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBib2R5UGFkZGluZ1JpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZG9tLnNldFN0eWxlKGRvY3VtZW50LmJvZHksIHN0eWxlKTtcblxuICAgICAgICAgICAgICAgICAgICBib2R5T3ZlcmZsb3dZID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBib2R5UGFkZGluZ1JpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGFscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Rm9jdXNOb2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmICF0aGlzLl9oYXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBzYXZlTGFzdEZvY3VzTm9kZSgpO1xuICAgICAgICAgICAgLy8g6L+Z5Liq5pe25YCZ5b6I5Y+v6IO95LiK5LiA5Liq5by55bGC55qE5YWz6Zet5LqL5Lu26L+Y5pyq6Kem5Y+R77yM5a+86Ie054Sm54K55bey57uP5Zue5Yiw6Kem5Y+R55qE5YWD57SgXG4gICAgICAgICAgICAvLyDov5nph4zlu7bml7blpITnkIbkuIDkuIvvvIzlu7bml7bnmoTml7bpl7TkuLogZG9jdW1lbnQuY2xpY2sg5o2V6I636Kem5Y+R55qE5bu25pe25pe26Ze0XG4gICAgICAgICAgICB0aGlzLmZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9jdXNOb2RlTGlzdCA9IGdldEZvY3VzTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c05vZGVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNOb2RlTGlzdFswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSAmJiB0aGlzLl9oYXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBiYWNrTGFzdEZvY3VzTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5faGFzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJlZjtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMuY29udGVudFJlZik7XG4gICAgfVxuXG4gICAgZ2V0V3JhcHBlck5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhdGV3YXlSZWYgPyB0aGlzLmdhdGV3YXlSZWYuZ2V0Q2hpbGROb2RlKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGFkZERvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5DbG9zZUJ5RXNjKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duRXZlbnRzID0gZXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlEb3duKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5DbG9zZUJ5T3V0U2lkZUNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0V2ZW50cyA9IGV2ZW50cy5vbihkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5fa2V5ZG93bkV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5fa2V5ZG93bkV2ZW50cy5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2tleWRvd25FdmVudHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jbGlja0V2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0V2ZW50cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEb2N1bWVudEtleURvd24oZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmIGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FU0MgJiYgb3ZlcmxheU1hbmFnZXIuaXNDdXJyZW50T3ZlcmxheSh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgna2V5Ym9hcmQnLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNhZmVOb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3Qgc2FmZU5vZGVzICA9IEFycmF5LmlzQXJyYXkoc2FmZU5vZGUpID8gWy4uLnNhZmVOb2RlXSA6IFtzYWZlTm9kZV07XG4gICAgICAgICAgICBzYWZlTm9kZXMudW5zaGlmdCgoKSA9PiB0aGlzLmdldFdyYXBwZXJOb2RlKCkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhZmVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaW5kTm9kZShzYWZlTm9kZXNbaV0sIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIC8vIEhBQ0s6IOWmguaenOinpuWPkeeCueWHu+eahOiKgueCueaYr+W8ueWxguWGhemDqOeahOiKgueCue+8jOW5tuS4lOWcqOiiq+eCueWHu+WQjueri+WNs+mUgOavge+8jOmCo+S5iOatpOaXtuaXoOazleS9v+eUqCBub2RlLmNvbnRhaW5zKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIOadpeWIpOaWreatpOaXtueCueWHu+eahOiKgueCueaYr+WQpuaYr+W8ueWxguWGhemDqOeahOiKgueCue+8jOmineWkluWIpOaWrVxuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIChub2RlID09PSBlLnRhcmdldCB8fCBub2RlLmNvbnRhaW5zKGUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgIChlLnRhcmdldCAhPT0gZG9jdW1lbnQgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdkb2NDbGljaycsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTWFza0NsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeU1hc2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ21hc2tDbGljaycsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZUNvbnRlbnRSZWYgPSAocmVmKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBzYXZlR2F0ZXdheVJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgdGhpcy5nYXRld2F5UmVmID0gcmVmO1xuICAgIH1cblxuICAgIC8vIOWFvOWuuei/h+WOu+eahOeUqOazlTogdGhpcy5wb3B1cFJlZi5nZXRJbnN0YW5jZSgpLm92ZXJsYXkuZ2V0SW5zdGFuY2UoKS5nZXRDb250ZW50Tm9kZSgpXG4gICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJlZml4LCBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbjogcHJvcENoaWxkcmVuLFxuICAgICAgICAgICAgdGFyZ2V0LCBhbGlnbiwgb2Zmc2V0LCBjb250YWluZXIsIGhhc01hc2ssIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICBiZWZvcmVQb3NpdGlvbiwgb25Qb3NpdGlvbiwgd3JhcHBlclN0eWxlLCBydGwsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogcHJvcFNob3VsZFVwZGF0ZVBvc2l0aW9uLFxuICAgICAgICAgICAgY2FjaGUsIHdyYXBwZXJDbGFzc05hbWUsIG9uTWFza01vdXNlRW50ZXIsIG9uTWFza01vdXNlTGVhdmVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmlzaWJsZTogc3RhdGVWaXNpYmxlLCBzdGF0dXMsIGFuaW1hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBzdGF0ZVZpc2libGUgfHwgKGNhY2hlICYmIHRoaXMuX2lzTW91bnRlZCkgPyBwcm9wQ2hpbGRyZW4gOiBudWxsO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENsYXp6ID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1vdmVybGF5LWlubmVyYF06IHRydWUsXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvbi5pbl06IHN0YXR1cyA9PT0gJ2VudGVyaW5nJyxcbiAgICAgICAgICAgICAgICBbYW5pbWF0aW9uLm91dF06IHN0YXR1cyA9PT0gJ2xlYXZpbmcnLFxuICAgICAgICAgICAgICAgIFtjaGlsZC5wcm9wcy5jbGFzc05hbWVdOiAhIWNoaWxkLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNldCByZWYgYnkgc3RyaW5nIGluIE92ZXJsYXksIHVzZSBmdW5jdGlvbiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbiA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2hpbGRDbGF6eixcbiAgICAgICAgICAgICAgICBzdHlsZTogey4uLmNoaWxkLnByb3BzLnN0eWxlLCAuLi5zdHlsZX0sXG4gICAgICAgICAgICAgICAgcmVmOiBtYWtlQ2hhaW4odGhpcy5zYXZlQ29udGVudFJlZiwgY2hpbGQucmVmKSxcbiAgICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhc3RhdGVWaXNpYmxlICYmIGNhY2hlICYmIHRoaXMuX2lzTW91bnRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhbGlnbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZVBvc2l0aW9uID0gc3RhdHVzID09PSAnbGVhdmluZycgPyBmYWxzZSA6IHByb3BTaG91bGRVcGRhdGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFBvc2l0aW9uIHsuLi4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4sIHRhcmdldCwgYWxpZ24sIG9mZnNldCwgbmVlZEFkanVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb3NpdGlvbjogbWFrZUNoYWluKHRoaXMuaGFuZGxlUG9zaXRpb24sIG9uUG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb24sIHJ0bFxuICAgICAgICAgICAgICAgICAgICB9KX0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyQ2xhenogPSBjbGFzc25hbWVzKFtcbiAgICAgICAgICAgICAgICBgJHtwcmVmaXh9b3ZlcmxheS13cmFwcGVyYCxcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1dyYXBwZXJTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZVZpc2libGUgPyAnJyA6ICdub25lJ1xuICAgICAgICAgICAgfSwgd3JhcHBlclN0eWxlKTtcblxuICAgICAgICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGF6en0gc3R5bGU9e25ld1dyYXBwZXJTdHlsZX0gZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNNYXNrID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9b3ZlcmxheS1iYWNrZHJvcGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNYXNrQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1hc2tNb3VzZUVudGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25NYXNrTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxHYXRld2F5IHsuLi4oe2NvbnRhaW5lciwgdGFyZ2V0LCBjaGlsZHJlbn0pfSByZWY9e3RoaXMuc2F2ZUdhdGV3YXlSZWZ9IC8+O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L292ZXJsYXkuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IG1ha2VDaGFpbiB9ID0gZnVuYztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F0ZXdheSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29udGFpbmVyOiAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSB0aGlzLmdldENvbnRhaW5lck5vZGUodGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSB0aGlzLmdldENvbnRhaW5lck5vZGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBmaW5kTm9kZShwcm9wcy50YXJnZXQpO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUocHJvcHMuY29udGFpbmVyLCB0YXJnZXROb2RlKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzLmNoaWxkKTtcbiAgICB9XG5cbiAgICBzYXZlQ2hpbGRSZWYgPSByZWYgPT4ge1xuICAgICAgICB0aGlzLmNoaWxkID0gcmVmO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW4gPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGw7XG4gICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IHJlZiBieSBzdHJpbmcgaW4gR2F0ZXdheSwgdXNlIGZ1bmN0aW9uIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHJlZjogbWFrZUNoYWluKHRoaXMuc2F2ZUNoaWxkUmVmLCBjaGlsZC5yZWYpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGQsIHRoaXMuY29udGFpbmVyTm9kZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvZ2F0ZXdheS5qc3giLCJpbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZ1bmMsIGRvbSwgZXZlbnRzIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnLi91dGlscy9wb3NpdGlvbic7XG5pbXBvcnQgZmluZE5vZGUgZnJvbSAnLi91dGlscy9maW5kLW5vZGUnO1xuXG5jb25zdCB7IG5vb3AsIGJpbmRDdHggfSA9IGZ1bmM7XG5jb25zdCB7IGdldFN0eWxlIH0gPSBkb207XG5jb25zdCBwbGFjZSA9IHBvc2l0aW9uLnBsYWNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIFZJRVdQT1JUID0gcG9zaXRpb24uVklFV1BPUlQ7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIG9mZnNldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBiZWZvcmVQb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBuZWVkQWRqdXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmVlZExpc3RlblJlc2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhbGlnbjogJ3RsIGJsJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBub29wLFxuICAgICAgICBvblBvc2l0aW9uOiBub29wLFxuICAgICAgICBuZWVkQWRqdXN0OiB0cnVlLFxuICAgICAgICBuZWVkTGlzdGVuUmVzaXplOiB0cnVlLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBiaW5kQ3R4KHRoaXMsIFsnaGFuZGxlUmVzaXplJ10pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmVlZExpc3RlblJlc2l6ZSkge1xuICAgICAgICAgICAgZXZlbnRzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgnYWxpZ24nIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMuYWxpZ24gIT09IHRoaXMucHJvcHMuYWxpZ24gfHwgbmV4dFByb3BzLnNob3VsZFVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uZWVkTGlzdGVuUmVzaXplKSB7XG4gICAgICAgICAgICBldmVudHMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCB7IGFsaWduLCBvZmZzZXQsIGJlZm9yZVBvc2l0aW9uLCBvblBvc2l0aW9uLCBuZWVkQWRqdXN0LCBydGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgYmVmb3JlUG9zaXRpb24oKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IHRoaXMuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2V0Tm9kZSgpO1xuICAgICAgICBpZiAoY29udGVudE5vZGUgJiYgdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0QWxpZ24gPSBwbGFjZSh7XG4gICAgICAgICAgICAgICAgcGluRWxlbWVudDogY29udGVudE5vZGUsXG4gICAgICAgICAgICAgICAgYmFzZUVsZW1lbnQ6IHRhcmdldE5vZGUsXG4gICAgICAgICAgICAgICAgYWxpZ24sXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICAgICAgaXNSdGw6IHJ0bCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZ2V0U3R5bGUoY29udGVudE5vZGUsICd0b3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBnZXRTdHlsZShjb250ZW50Tm9kZSwgJ2xlZnQnKTtcblxuICAgICAgICAgICAgb25Qb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgYWxpZ246IHJlc3VsdEFsaWduLnNwbGl0KCcgJyksXG4gICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgIGxlZnRcbiAgICAgICAgICAgIH0sIGNvbnRlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gcG9zaXRpb24uVklFV1BPUlQgPyBwb3NpdGlvbi5WSUVXUE9SVCA6IGZpbmROb2RlKHRhcmdldCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcblxuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3Bvc2l0aW9uLmpzeCIsImltcG9ydCAnLi4vYW5pbWF0ZS9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3N0eWxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX29iamVjdC1hc3NpZ25ANC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWMgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgb2JqLCBsb2cgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBnZXRDb250ZXh0UHJvcHMgZnJvbSAnLi9nZXQtY29udGV4dC1wcm9wcyc7XG5cbmNvbnN0IHsgc2hhbGxvd0VxdWFsIH0gPSBvYmo7XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cbmxldCBnbG9iYWxMb2NhbGVzO1xubGV0IGN1cnJlbnRHbG9iYWxMYW5ndWFnZSA9ICd6aC1jbic7XG5sZXQgY3VycmVudEdsb2JhbExvY2FsZSA9IHt9O1xubGV0IGN1cnJlbnRHbG9iYWxSdGwgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRMb2NhbGVzKGxvY2FsZXMpIHtcbiAgICBnbG9iYWxMb2NhbGVzID0gbG9jYWxlcztcbiAgICBjdXJyZW50R2xvYmFsTG9jYWxlID0gbG9jYWxlc1tjdXJyZW50R2xvYmFsTGFuZ3VhZ2VdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsTG9jYWxlcykge1xuICAgICAgICBjdXJyZW50R2xvYmFsTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgY3VycmVudEdsb2JhbExvY2FsZSA9IGdsb2JhbExvY2FsZXNbbGFuZ3VhZ2VdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICBjdXJyZW50R2xvYmFsTG9jYWxlID0ge1xuICAgICAgICAuLi4oZ2xvYmFsTG9jYWxlcyA/IGdsb2JhbExvY2FsZXNbY3VycmVudEdsb2JhbExhbmd1YWdlXSA6IHt9KSxcbiAgICAgICAgLi4ubG9jYWxlXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpcmVjdGlvbihkaXIpIHtcbiAgICBjdXJyZW50R2xvYmFsUnRsID0gZGlyID09PSAncnRsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICByZXR1cm4gY3VycmVudEdsb2JhbExvY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuICAgIHJldHVybiBjdXJyZW50R2xvYmFsTGFuZ3VhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRHbG9iYWxSdGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcoQ29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShcbiAgICAgICAgICAgIG5leHRQcm9wcyxcbiAgICAgICAgICAgIG5leHRTdGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnB1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHxcbiAgICAgICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhc3MgQ29uZmlnZWRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKENvbXBvbmVudC5wcm9wVHlwZXMgfHwge30pLFxuICAgICAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQ29tcG9uZW50LmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgbmV4dExvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIG5leHRQdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIG5leHRSdGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5fZ2V0SW5zdGFuY2UgPSB0aGlzLl9nZXRJbnN0YW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVjYXRlZCA9IHRoaXMuX2RlcHJlY2F0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9nZXRJbnN0YW5jZShyZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gcmVmO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgJiYgb3B0aW9ucy5leHBvcnROYW1lcykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXhwb3J0TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLl9pbnN0YW5jZVtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGZpZWxkLmJpbmQodGhpcy5faW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfZGVwcmVjYXRlZCguLi5hcmdzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0Lm5leHRXYXJuaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxvZy5kZXByZWNhdGVkKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCBydGwsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBuZXh0UHJlZml4LFxuICAgICAgICAgICAgICAgIG5leHRMb2NhbGUgPSB7fSxcbiAgICAgICAgICAgICAgICBuZXh0UHVyZSxcbiAgICAgICAgICAgICAgICBuZXh0UnRsXG4gICAgICAgICAgICB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb21wb25lbnROYW1lIHx8IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0UHJvcHMgPSBnZXRDb250ZXh0UHJvcHMoXG4gICAgICAgICAgICAgICAgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgcnRsIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuZXh0UHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBuZXh0TG9jYWxlOiB7IC4uLmN1cnJlbnRHbG9iYWxMb2NhbGUsIC4uLm5leHRMb2NhbGUgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFB1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5leHRSdGw6IHR5cGVvZiBuZXh0UnRsID09PSAnYm9vbGVhbicgPyBuZXh0UnRsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHbG9iYWxSdGwgPT09IHRydWUgPyB0cnVlIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGV4dFByb3BzID0gWydwcmVmaXgnLCAnbG9jYWxlJywgJ3B1cmUnLCAncnRsJ10ucmVkdWNlKFxuICAgICAgICAgICAgICAgIChyZXQsIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0UHJvcHNbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbbmFtZV0gPSBjb250ZXh0UHJvcHNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdPdGhlcnMgPSBvcHRpb25zLnRyYW5zZm9ybSA/XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50cmFuc2Zvcm0ob3RoZXJzLCB0aGlzLl9kZXByZWNhdGVkKSA6XG4gICAgICAgICAgICAgICAgb3RoZXJzO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld090aGVyc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld0NvbnRleHRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLl9nZXRJbnN0YW5jZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENvbmZpZ2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYENvbmZpZygke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG5cbiAgICBob2lzdE5vblJlYWN0U3RhdGljKENvbmZpZ2VkQ29tcG9uZW50LCBDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIENvbmZpZ2VkQ29tcG9uZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25maWcuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzQDIuNS41QGhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwiLyoqXG4gKiDlj5bmtojkuovku7bnu5HlrppcbiAqIEBwYXJhbSAgeyp9ICAgbm9kZSAgICAgICBET03oioLngrnmiJbku7vkvZXlj6/ku6Xnu5Hlrprkuovku7bnmoTlr7nosaFcbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudE5hbWUgIOS6i+S7tuWQjVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAg5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFt1c2VDYXB0dXJlPWZhbHNlXSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mZiAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tlxuICogQHBhcmFtICB7Kn0gICBub2RlICAgICAgIERPTeiKgueCueaIluS7u+S9leWPr+S7pee7keWumuS6i+S7tueahOWvueixoVxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50TmFtZSAg5LqL5Lu25ZCNXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICDlm57osIPmlrnms5VcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgdXNlQ2FwdHVyZSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICDov5Tlm57nmoRvYmplY3TkuK3ljIXlkKvkuIDkuKpvZmbmlrnms5XvvIznlKjkuo7lj5bmtojkuovku7bnm5HlkKxcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgaGFuZGxlciA9IGV2ZW50cy5vbihkb2N1bWVudC5ib2R5LCAnY2xpY2snLCBlID0+IHtcbiAqICAgICAvLyBoYW5kbGUgY2xpY2sgLi4uXG4gKiB9KTtcbiAqIC8vIOWPlua2iOS6i+S7tue7keWumlxuICogaGFuZGxlci5vZmYoKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uIChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvZmY6ICgpID0+IG9mZihub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKVxuICAgIH07XG59XG5cbi8qKlxuICog57uR5a6a5LqL5Lu277yM5Y+q5omn6KGM5LiA5qyh5ZCO6ZSA5q+BXG4gKiBAcGFyYW0gIHsqfSAgIG5vZGUgICAgICAgRE9N6IqC54K55oiW5Lu75L2V5Y+v5Lul57uR5a6a5LqL5Lu255qE5a+56LGhXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnROYW1lICDkuovku7blkI1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgIOWbnuiwg+aWueazlVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICB1c2VDYXB0dXJlIOaYr+WQpuW8gOWQr+S6i+S7tuaNleiOt+S8mOWFiFxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgIOi/lOWbnueahG9iamVjdOS4reWMheWQq+S4gOS4qm9mZuaWueazle+8jOeUqOS6juWPlua2iOS6i+S7tuebkeWQrFxuICovXG5leHBvcnQgZnVuY3Rpb24gb25jZSAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHJldHVybiBvbihub2RlLCBldmVudE5hbWUsIGZ1bmN0aW9uIF9fZm4gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgLy8g55Sx5LqOYWRkRXZlbnRMaXN0ZW5lcuS4reeahOWPguaVsG9wdGlvbnPlj6rlnKhDaHJvbWUgNTXjgIFGaXJlZm94KEdlY2tvKeS7peS4iueJiOacrOaUr+aMge+8jOaVhei/mOaYr+eUqOS8oOe7n+eahOaWueazleWunueOsG9uY2VcbiAgICAgICAgb2ZmKG5vZGUsIGV2ZW50TmFtZSwgX19mbiwgdXNlQ2FwdHVyZSk7XG4gICAgfSwgdXNlQ2FwdHVyZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ldmVudHMuanMiLCJpbXBvcnQge2lzUHJvbWlzZX0gZnJvbSAnLi9vYmplY3QnO1xuXG4vKipcbiAqIOS4gOS4quepuuaWueazle+8jOi/lOWbnuWFpeWPguacrOi6q+aIluepuuWvueixoVxuICovXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vKipcbiAqIOWwhk7kuKrmlrnms5XlkIjlubbkuLrkuIDkuKrpk77lvI/osIPnlKjnmoTmlrnms5VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAg5ZCI5bm25ZCO55qE5pa55rOVXG4gKiDlj4LogIMgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91dGlsL1xuICpcbiAqIEBleGFtcGxlXG4gKiBmdW5jLm1ha2VDaGFpbih0aGlzLmhhbmRsZUNoYW5nZSwgdGhpcy5wcm9wcy5vbkNoYW5nZSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2hhaW4gKC4uLmZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGZucy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbnNbaV0gJiYgZm5zW2ldLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgZm5zW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiDmibnph4/mlLnlj5jmlrnms5XnmoTkuIrkuIvmlodcbiAqIOatpOaWueazleWcqHJlYWN057uE5Lu25Lit5b6I5pyJ55So77yM5ZyoY29uc3RydWN0b3LkuK3mibnph4/lsIbnu4Tku7bkuIrnmoTmlrnms5XmiafooYzkuIrkuIvmlofnu5HlrprliLDnu4Tku7bmnKzouqtcbiAqIOazqOaEj++8mueUqGJpbmTmlLnlj5jlh73mlbDov5DooYznmoTkuIrkuIvmloflj6rkvJrnlJ/mlYjkuIDmrKFcbiAqIEBwYXJhbSAge09iamVjdH0gY3R4IOaWueazleaMgui9veeahOWvueixoeS7peWPiuaJp+ihjOeahOS4iuS4i+aWh1xuICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gZm5zIOaWueazleWQjeWIl+ihqFxuICpcbiAqIEBleGFtcGxlXG4gKiBmdW5jLmJpbmRDdHgodGhpcywgWydoYW5kbGVDbGljaycsICdoYW5kbGVDaGFuZ2UnXSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ3R4IChjdHgsIGZucywgbnMpIHtcbiAgICBpZiAodHlwZW9mIGZucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm5zID0gW2Zuc107XG4gICAgfVxuXG4gICAgLy8g5pa55rOV55qE5oyC6L2956m66Ze077yM5aaC5p6c5LiN5Lyg77yM6buY6K6k5LiOY3R455u45ZCMXG4gICAgbnMgPSBucyB8fCBjdHg7XG5cbiAgICBmbnMuZm9yRWFjaChmbk5hbWUgPT4ge1xuICAgICAgICAvLyDov5nph4zkuI3opoHmt7vliqDnqbrmlrnms5XliKTmlq3vvIznlLHosIPnlKjogIXkv53or4HmraPnoa7mgKfvvIzlkKbliJnlh7rkuobpl67popjml6Dms5XmjpLmn6VcbiAgICAgICAgbnNbZm5OYW1lXSA9IG5zW2ZuTmFtZV0uYmluZChjdHgpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOeUqOS6juaJp+ihjOWbnuiwg+aWueazleWQjueahOmAu+i+kVxuICogQHBhcmFtICB7Kn0gcmV0ICAgICAgICAgICAg5Zue6LCD5pa55rOV5omn6KGM57uT5p6cXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gc3VjY2VzcyDmiafooYznu5Pmnpzov5Tlm57pnZ5mYWxzZeeahOWbnuiwg1xuICogQHBhcmFtICB7RnVuY3Rpb259IFtmYWlsdXJlPW5vb3BdIOaJp+ihjOe7k+aenOi/lOWbnmZhbHNl55qE5Zue6LCDXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlQ2FsbCAocmV0LCBzdWNjZXNzLCBmYWlsdXJlID0gbm9vcCkge1xuICAgIGlmIChpc1Byb21pc2UocmV0KSkge1xuICAgICAgICByZXR1cm4gcmV0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgZmFpbHVyZShlKTtcbiAgICAgICAgICAgIC8vIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQgIT09IGZhbHNlID8gc3VjY2VzcyhyZXQpIDogZmFpbHVyZShyZXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZnVuYy5qcyIsImltcG9ydCB7IGlzUHJvZHVjdGlvbiB9IGZyb20gJy4vZW52JztcblxuLyogZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cblxuLyoqXG4gKiDlj43lr7nkvb/nlKjmn5DkuIDmlrnms5XmiJblsZ7mgKfnmoTorablkYpcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcHMgICAgIOi/h+aXtueahOWxnuaAp+aIluaWueazleWQjVxuICogQHBhcmFtICB7U3RyaW5nfSBpbnN0ZWFkICAg5pu/5Luj55qE5bGe5oCn5oiW5pa55rOV5ZCNXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudCDnu4Tku7blkI1cbiAqXG4gKiBAZXhhbXBsZVxuICogbG9nLmRlcHJlY2F0ZWQoJ29uQmVmb3JlQ2xvc2UnLCAnYmVmb3JlQ2xvc2UnLCAnRGlhbG9nJyk7XG4gKiAvLyBXYXJuaW5nOiBvbkJlZm9yZUNsb3NlIGlzIGRlcHJlY2F0ZWQgYXQgWyBEaWFsb2cgXSwgdXNlIFsgYmVmb3JlQ2xvc2UgXSBpbnN0ZWFkIG9mIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZCAocHJvcHMsIGluc3RlYWQsIGNvbXBvbmVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFpc1Byb2R1Y3Rpb24oKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBbICR7cHJvcHN9IF0gaXMgZGVwcmVjYXRlZCBhdCBbICR7Y29tcG9uZW50fSBdLCBgICtcbiAgICAgICAgICAgIGB1c2UgWyAke2luc3RlYWR9IF0gaW5zdGVhZCBvZiBpdC5gXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIOaOp+WItuWPsOitpuWRiuaXpeW/l1xuICogQHBhcmFtICB7U3RyaW5nfSBtc2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcgKG1zZykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiAke21zZ31gKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2cuanMiLCJpbXBvcnQge2hhc0RPTX0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbmNvbnN0IGFuaW1hdGlvbkVuZEV2ZW50TmFtZXMgPSB7XG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xufTtcblxuY29uc3QgdHJhbnNpdGlvbkV2ZW50TmFtZXMgPSB7XG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufTtcblxuLyoqXG4gKiDmmK/lkKbmlK/mjIHmn5DkupvliqjmlYjkuovku7bvvIzlpoLmnpzmlK/mjIHvvIzov5Tlm57nm7jlupTnmoRlbmTkuovku7blkI1cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtPYmplY3Q8U3RyaW5nPn0gbmFtZXNcbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX1cbiAqL1xuZnVuY3Rpb24gX3N1cHBvcnRFbmQgKG5hbWVzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgZWFjaChuYW1lcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChlbC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldCA9IHtlbmQ6IHZhbH07XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICog5piv5ZCm5pSv5oyB5p+Q5LqbQ1NT5bGe5oCnXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0PEFycmF5PFN0cmluZz4+fSBuYW1lc1xuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgaXMgc3VwcG9ydFxuICovXG5mdW5jdGlvbiBfc3VwcG9ydENTUyAobmFtZXMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBlYWNoKG5hbWVzLCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgZWFjaCh2YWwsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgICByZXQgPSByZXQgfHwgZWwuc3R5bGVba2V5XSA9PT0gaXRlbTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJdCB3aWxsIGJlIHRocm93IGVycm9yIHdoZW4gc2V0IHVua25vd24gcHJvcGVydHkgdW5kZXIgSUU4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXJldDsgLy8g5aaC5p6c5pyJ5LiA5Liq5pSv5oyB5bCx6L+U5ZueZmFsc2XvvIzlkI7pnaLkuI3pnIDopoHlho3liKTmlq1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICFyZXQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOaYr+WQpuaUr+aMgWFuaW1hdGlvbuS7peWPiuWKqOeUu+e7k+adn+S6i+S7tuWQjVxuICogQHR5cGUge09iamVjdHxmYWxzZX1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmQg5Yqo55S757uT5p2f5LqL5Lu25ZCNXG4gKi9cbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSBfc3VwcG9ydEVuZChhbmltYXRpb25FbmRFdmVudE5hbWVzKTtcblxuLyoqXG4gKiDmmK/lkKbmlK/mjIF0cmFuc2l0aW9u5Lul5Y+K6L+H5ruk5pWI5p6c57uT5p2f5LqL5Lu25ZCNXG4gKiBAdHlwZSB7T2JqZWN0fGZhbHNlfVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGVuZCDov4fmuKHmlYjmnpznu5PmnZ/kuovku7blkI1cbiAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSBfc3VwcG9ydEVuZCh0cmFuc2l0aW9uRXZlbnROYW1lcyk7XG5cbi8qKlxuICog5piv5ZCm5pSv5oyBZmxleOWxnuaAp1xuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBmbGV4ID0gX3N1cHBvcnRDU1Moe1xuICAgIGRpc3BsYXk6IFsnZmxleCcsICctd2Via2l0LWZsZXgnLCAnLW1vei1mbGV4JywgJy1tcy1mbGV4Ym94J11cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvc3VwcG9ydC5qcyIsImltcG9ydCBLRVlDT0RFIGZyb20gJy4va2V5Y29kZSc7XG5pbXBvcnQge2VhY2h9IGZyb20gJy4vb2JqZWN0JztcblxuLyoqXG4gKiDnlKjkuo7liIfmjaLpobXpnaLlhYPntKDnmoTnhKbngrlcbiAqL1xuXG5cbi8qKlxuICog5YWD57Sg5piv5ZCm5Y+v6KeBXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge0VsZW1lbnR9ICBub2RlXG4gKiBAcmV0dXJuICB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gX2lzVmlzaWJsZShub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmJvZHkgfHwgbm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgbm9kZS5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIOWFg+e0oOaYr+WQpuWPr+S7peiOt+WPlueEpueCuVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtFbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIF9pc0ZvY3VzYWJsZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdGFiSW5kZXggPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICAgIGNvbnN0IGhhc1RhYkluZGV4ID0gIWlzTmFOKHRhYkluZGV4KSAmJiB0YWJJbmRleCA+IC0xO1xuXG4gICAgaWYgKF9pc1Zpc2libGUobm9kZSkpIHtcbiAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuZGlzYWJsZWQgJiYgbm9kZS50eXBlICE9PSAnaGlkZGVuJztcbiAgICAgICAgfSBlbHNlIGlmIChbJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdidXR0b24nXS5pbmRleE9mKG5vZGVOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZU5hbWUgPT09ICdhJykge1xuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGhhc1RhYkluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNUYWJJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICog5YiX5Ye66IO96I635Y+W54Sm54K555qE5a2Q6IqC54K5XG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIOWuueWZqOiKgueCuVxuICogQHJldHVybiB7QXJyYXk8RWxlbWVudD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c05vZGVMaXN0KG5vZGUpIHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBjb25zdCBub2RlTGlzdCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuXG4gICAgZWFjaChub2RlTGlzdCwgaXRlbSA9PiB7XG4gICAgICAgIGlmIChfaXNGb2N1c2FibGUoaXRlbSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG8tZm9jdXMnKSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICAgICAgICAgIHJlc1ttZXRob2RdKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoX2lzRm9jdXNhYmxlKG5vZGUpKSB7XG4gICAgICAgIHJlcy51bnNoaWZ0KG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIOeUqOS6juiusOW9leS4iuS4gOasoeiOt+W+l+eEpueCueeahOaXoOe0oFxubGV0IGxhc3RGb2N1c0VsZW1lbnQgPSBudWxsO1xuXG4vKipcbiAqIOS/neWtmOacgOi/keS4gOasoeiOt+W+l+eEpueCueeahOaXoOe0oFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxhc3RGb2N1c05vZGUoKSB7XG4gICAgbGFzdEZvY3VzRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG59XG5cbi8qKlxuICog5riF6Zmk54Sm54K56K6w5b2VXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckxhc3RGb2N1c05vZGUoKSB7XG4gICAgbGFzdEZvY3VzRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICog5bCd6K+V5bCG54Sm54K55YiH5o2i5Yiw5LiK5LiA5Liq5YWD57SgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrTGFzdEZvY3VzTm9kZSgpIHtcbiAgICBpZiAobGFzdEZvY3VzRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g5YWD57Sg5Y+v6IO95bey57uP6KKr56e75Yqo5LqGXG4gICAgICAgICAgICBsYXN0Rm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSAuLi5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiDlnKjpmZDliLbnmoTojIPlm7TlhoXliIfmjaLnhKbngrlcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGUg5a655Zmo6IqC54K5XG4gKiBAcGFyYW0gIHtFdmVudH0gZSAgICAgIOmUruebmOS6i+S7tlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGltaXRUYWJSYW5nZShub2RlLCBlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5UQUIpIHtcbiAgICAgICAgY29uc3QgdGFiTm9kZUxpc3QgPSBnZXRGb2N1c05vZGVMaXN0KG5vZGUpO1xuICAgICAgICBjb25zdCBtYXhJbmRleCA9IHRhYk5vZGVMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFiTm9kZUxpc3QuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gaW5kZXggKyAoZS5zaGlmdEtleSA/IC0xIDogMSk7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA8IDAgJiYgKHRhcmdldEluZGV4ID0gbWF4SW5kZXgpO1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPiBtYXhJbmRleCAmJiAodGFyZ2V0SW5kZXggPSAwKTtcbiAgICAgICAgICAgIHRhYk5vZGVMaXN0W3RhcmdldEluZGV4XS5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZm9jdXMuanMiLCJsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuLyoqXG4gKiDnlJ/miJDlhajlsYDllK/kuIDnmoRpZFxuICogQHBhcmFtICB7U3RyaW5nfSBbcHJlZml4PScnXSDliY3nvIDlrZfnrKbkuLJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAZXhhbXBsZVxuICogZ3VpZCgpOyAvLyBqN2p2NTA5Y1xuICogZ3VpZCgncHJlZml4LScpOyAvLyBwcmVmaXgtajdqdjUwOWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICAgIHJldHVybiBwcmVmaXggKyAodGltZXN0YW1wKyspLnRvU3RyaW5nKDM2KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2d1aWQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnZXRDb250ZXh0UHJvcHMgZnJvbSAnLi9nZXQtY29udGV4dC1wcm9wcyc7XG5pbXBvcnQge1xuICAgIGNvbmZpZyxcbiAgICBpbml0TG9jYWxlcyxcbiAgICBzZXRMYW5ndWFnZSxcbiAgICBzZXRMb2NhbGUsXG4gICAgc2V0RGlyZWN0aW9uLFxuICAgIGdldExvY2FsZSxcbiAgICBnZXRMYW5ndWFnZSxcbiAgICBnZXREaXJlY3Rpb25cbn0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gJy4vY29uc3VtZXInO1xuaW1wb3J0IENhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5jb25zdCBjaGlsZENvbnRleHRDYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4vKipcbiAqIENvbmZpZ1Byb3ZpZGVyXG4gKiBAcHJvcHNFeHRlbmRzIGZhbHNlXG4gKi9cbmNsYXNzIENvbmZpZ1Byb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75ZCN55qE5ZOB54mM5YmN57yAXG4gICAgICAgICAqL1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlm73pmYXljJbmlofmoYjlr7nosaHvvIzlsZ7mgKfkuLrnu4Tku7bnmoQgZGlzcGxheU5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQryBQdXJlIFJlbmRlciDmqKHlvI/vvIzkvJrmj5Dpq5jmgKfog73vvIzkvYbmmK/kuZ/kvJrluKbmnaXlia/kvZznlKhcbiAgICAgICAgICovXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Zyo5byA5Y+R5qih5byP5LiL5pi+56S657uE5Lu25bGe5oCn6KKr5bqf5byD55qEIHdhcm5pbmcg5o+Q56S6XG4gICAgICAgICAqL1xuICAgICAgICB3YXJuaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQryBydGwg5qih5byPXG4gICAgICAgICAqL1xuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog57uE5Lu25qCRXG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgd2FybmluZzogdHJ1ZVxuICAgIH07XG5cbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIG5leHRQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIG5leHRQdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmV4dFJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5leHRXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDkvKDlhaXnu4Tku7bvvIznlJ/miJDlj5cgQ29uZmlnUHJvdmlkZXIg5o6n5Yi255qEIEhPQyDnu4Tku7ZcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gQ29tcG9uZW50IOe7hOS7tuexu1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWPr+mAiemhuVxuICAgICAqIEByZXR1cm5zIHtDb21wb25lbnR9IEhPQ1xuICAgICAqL1xuICAgIHN0YXRpYyBjb25maWcgPSAoQ29tcG9uZW50LCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBjb25maWcoQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Lyg5YWl57uE5Lu255qEIHByb3BzIOWSjCBkaXNwbGF5TmFtZe+8jOW+l+WIsOWSjCBjaGlsZENvbnRleHQg6K6h566X6L+H55qE5YyF5ZCr5pyJIHByZWlmeC9sb2NhbGUvcHVyZSDnmoTlr7nosaHvvIzkuIDoiKznlKjkuo7pgJrov4fpnZnmgIHmlrnms5XnlJ/miJDohLHnprvnu4Tku7bmoJHnmoTnu4Tku7ZcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg57uE5Lu255qEIHByb3BzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpc3BsYXlOYW1lIOe7hOS7tueahCBkaXNwbGF5TmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IOaWsOeahCBjb250ZXh0IHByb3BzXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbnRleHRQcm9wcyA9IChwcm9wcywgZGlzcGxheU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHRQcm9wcyhwcm9wcywgY2hpbGRDb250ZXh0Q2FjaGUucm9vdCgpIHx8IHt9LCBkaXNwbGF5TmFtZSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbml0TG9jYWxlcyA9IGluaXRMb2NhbGVzO1xuICAgIHN0YXRpYyBzZXRMYW5ndWFnZSA9IHNldExhbmd1YWdlO1xuICAgIHN0YXRpYyBzZXRMb2NhbGUgPSBzZXRMb2NhbGU7XG4gICAgc3RhdGljIHNldERpcmVjdGlvbiA9IHNldERpcmVjdGlvbjtcbiAgICBzdGF0aWMgZ2V0TGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZTtcbiAgICBzdGF0aWMgZ2V0TG9jYWxlID0gZ2V0TG9jYWxlO1xuICAgIHN0YXRpYyBnZXREaXJlY3Rpb24gPSBnZXREaXJlY3Rpb247XG4gICAgc3RhdGljIENvbnN1bWVyID0gQ29uc3VtZXI7XG5cbiAgICBzdGF0aWMgZ2V0Q29udGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBuZXh0UHJlZml4LCBuZXh0TG9jYWxlLCBuZXh0UHVyZSwgbmV4dFJ0bCwgbmV4dFdhcm5pbmcgfSA9IGNoaWxkQ29udGV4dENhY2hlLnJvb3QoKSB8fCB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJlZml4OiBuZXh0UHJlZml4LFxuICAgICAgICAgICAgbG9jYWxlOiBuZXh0TG9jYWxlLFxuICAgICAgICAgICAgcHVyZTogbmV4dFB1cmUsXG4gICAgICAgICAgICBydGw6IG5leHRSdGwsXG4gICAgICAgICAgICB3YXJuaW5nOiBuZXh0V2FybmluZ1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5hZGQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRDb250ZXh0Q2FjaGUuZ2V0KHRoaXMsIHt9KSwgdGhpcy5nZXRDaGlsZENvbnRleHQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHdhcm5pbmcsIHJ0bCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dFByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgbmV4dExvY2FsZTogbG9jYWxlLFxuICAgICAgICAgICAgbmV4dFB1cmU6IHB1cmUsXG4gICAgICAgICAgICBuZXh0UnRsOiBydGwsXG4gICAgICAgICAgICBuZXh0V2FybmluZzogd2FybmluZ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRNb21lbnRMb2NhbGUodGhpcy5wcm9wcy5sb2NhbGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2FsZSAhPT0gbmV4dFByb3BzLmxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNb21lbnRMb2NhbGUobmV4dFByb3BzLmxvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNoaWxkQ29udGV4dENhY2hlLmFkZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBjaGlsZENvbnRleHRDYWNoZS5nZXQodGhpcywge30pLCB0aGlzLmdldENoaWxkQ29udGV4dCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TW9tZW50TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICBsZXQgbW9tZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vbWVudCAmJiBsb2NhbGUpIHtcbiAgICAgICAgICAgIG1vbWVudC5sb2NhbGUobG9jYWxlLm1vbWVudExvY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzeCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgb2JqZWN0IGFuZCBrZXlzXG4gKiBnZW5lcmF0ZWQgYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eVxuICogb2Ygb2JqZWN0IHRocnUgaXRlcmF0ZWUuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBtYXBLZXlzID0gKG9iaiwgZm4pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSBmbihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHNwZWNpZmljIGtleSB3aXRoIHByZWZpeCBgbmV4dGBcbiAqIGFuZCBsb3dlcmNhc2UgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHJlcGxhY2VLZXkgPSBrZXkgPT5cbiAgICBrZXkucmVwbGFjZSgvXihuZXh0KShbQS1aXSkvLCAobWF0Y2gsIHAxLCBwMikgPT4gcDIudG9Mb3dlckNhc2UoKSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCB0cmFuc2Zvcm1Db250ZXh0ID0gc291cmNlID0+IG1hcEtleXMoc291cmNlLCByZXBsYWNlS2V5KTtcblxuLyoqXG4gKiBDb25zdW1lclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmNvbnN0IENvbnN1bWVyID0gKHsgY2hpbGRyZW4gfSwgY29udGV4dCkgPT5cbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih0cmFuc2Zvcm1Db250ZXh0KGNvbnRleHQpKSA6IG51bGw7XG5cbi8qKlxuICogUHJvcFR5cGVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db25zdW1lci5wcm9wVHlwZXMgPSB7XG4gICAgLy8gUmVuZGVyIGNvbnRleHQgYXMgZnVuY3Rpb25cbiAgICAvLyBGdW5jdGlvbihjb250ZXh0OiBvYmplY3QpOiBSZWFjdEVsZW1lbnRcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogQ29udGV4dFR5cGVzIChsZWdhY3kgY29udGV4dClcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKi9cbkNvbnN1bWVyLmNvbnRleHRUeXBlcyA9IHtcbiAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbmV4dFB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5ld1J0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25zdW1lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY29uc3VtZXIuanN4IiwiY2xhc3MgQ2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaXplID09PSAwO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmhhcyhrZXkpID8gdGhpcy5fc3RvcmUuZ2V0KGtleSkgOiB0aGlzLnJvb3QoKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyB8fCByZXMgPT09IG51bGwpID9cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA6IHJlcztcbiAgICB9XG5cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JlLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5fc3RvcmUuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLl9zdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICByb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuZ2V0KHRoaXMuX3Jvb3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NhY2hlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL21haW4uc2NzcyIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsImltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEJhbGxvb24gZnJvbSAnLi9iYWxsb29uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5cbkJhbGxvb24uVG9vbHRpcCA9IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhUb29sdGlwLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBwcm9wcykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgndGV4dCcsICdjaGlsZHJlbicsICdUb29sdGlwJyk7XG4gICAgICAgICAgICBjb25zdCB7IHRleHQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgY2hpbGRyZW46IHRleHQsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuQmFsbG9vbi5Jbm5lciA9IElubmVyO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQmFsbG9vbiwge1xuICAgIHRyYW5zZm9ybTogKHByb3BzLCBkZXByZWNhdGVkKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ2FsaWdubWVudCcsICdhbGlnbkVkZ2UnLCAnQmFsbG9vbicpO1xuICAgICAgICAgICAgY29uc3QgeyBhbGlnbm1lbnQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgYWxpZ25FZGdlOiBhbGlnbm1lbnQgPT09ICdlZGdlJywgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLm9uQ2xvc2VDbGljaykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnb25DbG9zZUNsaWNrJywgJ29uVmlzaWJsZUNoYW5nZScsICdCYWxsb29uJyk7XG4gICAgICAgICAgICBjb25zdCB7IG9uQ2xvc2VDbGljaywgb25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgICAgICAgICAgY29uc3QgbmV3T25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGUsIHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdjbG9zZUNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UodmlzaWJsZSwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvcHMgPSB7IG9uVmlzaWJsZUNoYW5nZTogbmV3T25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQge2Z1bmMsIG9iaiwgbG9nfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBCYWxsb29uSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbmNvbnN0IHtub29wfSA9IGZ1bmM7XG5jb25zdCB7UG9wdXB9ID0gT3ZlcmxheTtcblxubGV0IGFsaWduTWFwID0gbm9ybWFsTWFwO1xuXG4vKiogQmFsbG9vbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9vbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfVxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnnsbvlkI1cbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieWGheaVm+agt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAncHJpbWFyeSddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYvuekuueahOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmL7npLrnmoTnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWcqOaYvuekuuWSjOmakOiXj+inpuWPkeeahOS6i+S7tlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm6ZqQ6JeP5ZKM5pi+56S6XG4gICAgICAgICAqL1xuICAgICAgICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5a+56b2Q5pa55byPXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pi+56S65YWz6Zet5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICAgICAgICogQGVudW1kZXNjIOS4iiwg5Y+zLCDkuIssIOW3piwg5LiK5bemLCDkuIrlj7MsIOS4i+W3piwg5LiL5Y+zLCDlt6bkuIosIOW3puS4iywg5Y+z5LiKLCDlj7PkuIsg5Y+K5YW2IOS4pOS4pOe7hOWQiFxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3QnLCAncicsICdiJywgJ2wnLCAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbHQnLCAnbGInLCAncnQnLCAncmInXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo50cmlnZ2Vy55qE5a6a5L2N55qE5b6u6LCDXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeihjOS4ulxuICAgICAgICAgKiDpvKDmoIfmgqzmta4sIOiOt+WPluWIsOeEpueCuSwg6byg5qCH54K55Ye7KCdob3ZlcifvvIwnZm9jdXMn77yMJ2NsaWNrJynmiJbogIXlroPku6znu4TmiJDnmoTmlbDnu4TvvIzlpoIgWydob3ZlcicsICdmb2N1cyddXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyVHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku7vkvZV2aXNpYmxl5Li6ZmFsc2Xml7bkvJrop6blj5HnmoTkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpui/m+ihjOiHquWKqOS9jee9ruiwg+aVtFxuICAgICAgICAgKi9cbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlnKjop6blj5Hku6XlkI7nmoTlu7bml7bmmL7npLosIOWNleS9jeavq+enkiBtc1xuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLlhbPpl63lkI7op6blj5HnmoTkuovku7YsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLrliLbmm7TmlrDlrprkvY3kv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWHuueOsOWQjuaYr+WQpuiHquWKqGZvY3Vz5Yiw5YaF6YOo56ys5LiA5Liq5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5a6J5YWo6IqC54K5OuWvueS6jnRyaWdnZXRUeXBl5Li6Y2xpY2vnmoTmta7lsYIs5Lya5Zyo54K55Ye76Zmk5LqG5rWu5bGC5aSW55qE5YW25a6D5Yy65Z+f5pe25YWz6Zet5rWu5bGCLnNhZmVOb2Rl55So5LqO5re75Yqg5LiN6Kem5Y+R5YWz6Zet55qE6IqC54K5LCDlgLzlj6/ku6XmmK9kb23oioLngrnnmoRpZOaIluiAheaYr+iKgueCueeahGRvbeWvueixoVxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlKjmnaXmjIflrppzYWZlTm9kZeiKgueCueeahGlk77yM5ZKMc2FmZU5vZGXphY3lkIjkvb/nlKhcbiAgICAgICAgICovXG4gICAgICAgIHNhZmVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjee9ruWKqOeUu+eahOaSreaUvuaWueW8j1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW4g6L+b5Zy65Yqo55S7XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvdXQg5Ye65Zy65Yqo55S7XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahGRvbeiKgueCueWFs+mXreaXtuaYr+WQpuWIoOmZpFxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5rWu5bGC5riy5p+T55qE54i26IqC54K5LCDlj6/ku6XkuLroioLngrlpZOeahOWtl+espuS4su+8jOS5n+WPr+S7pei/lOWbnuiKgueCueeahOWHveaVsOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgmlkLCDkvKDlhaXlgLzmiY3kvJrmlK/mjIHml6Dpmpznoo1cbiAgICAgICAgICovXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICB0cmlnZ2VyOiA8c3Bhbj48L3NwYW4+LFxuICAgICAgICBvbkNsb3NlOiBub29wLFxuICAgICAgICBhZnRlckNsb3NlOiBub29wLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIG5lZWRBZGp1c3Q6IGZhbHNlLFxuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgc2FmZU5vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2FmZUlkOiBudWxsLFxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgIGluOiAnem9vbUluJyxcbiAgICAgICAgICAgIG91dDogJ3pvb21PdXQnXG4gICAgICAgIH0sXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgcG9wdXBTdHlsZToge30sXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgcG9wdXBQcm9wczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWxpZ246IHByb3BzLmFsaWduLFxuICAgICAgICAgICAgdmlzaWJsZTogJ3Zpc2libGUnIGluIHByb3BzID8gcHJvcHMudmlzaWJsZSA6IHByb3BzLmRlZmF1bHRWaXNpYmxlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB0aGlzLl9vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uUG9zaXRpb24gPSB0aGlzLl9vblBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uVmlzaWJsZUNoYW5nZSA9IHRoaXMuX29uVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ2FsaWduJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiBuZXh0UHJvcHMuYWxpZ25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKSB7XG4gICAgICAgIC8vIE5vdCBDb250cm9sbGVkXG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKTtcblxuICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoZSkge1xuICAgICAgICB0aGlzLl9vblZpc2libGVDaGFuZ2UoZmFsc2UsICdjbG9zZUNsaWNrJyk7XG5cbiAgICAgICAgLy/lv4XpobvliqDkuIpwcmV2ZW50RGVmYXVsdCzlkKbliJnljZXmtYtJReS4i+aKpemUmSzlh7rnjrBmdWxsIHBhZ2UgcmVsb2FkIOW8guW4uFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgX29uUG9zaXRpb24ocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgcnRsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhbGlnbk1hcCA9IHRoaXMucHJvcHMuYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgbmV3QWxpZ24gPSByZXMuYWxpZ24uam9pbignICcpO1xuICAgICAgICBsZXQgcmVzQWxpZ247XG5cbiAgICAgICAgbGV0IGFsaWduS2V5ID0gJ2FsaWduJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgYWxpZ25LZXkgPSAncnRsQWxpZ24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWxpZ25NYXApIHtcbiAgICAgICAgICAgIGlmIChhbGlnbk1hcFtrZXldW2FsaWduS2V5XSA9PT0gbmV3QWxpZ24pIHtcbiAgICAgICAgICAgICAgICByZXNBbGlnbiA9IGtleTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzQWxpZ24gPSByZXNBbGlnbiB8fCB0aGlzLnN0YXRlLmFsaWduO1xuICAgICAgICBpZiAocmVzQWxpZ24gIT09IHRoaXMuc3RhdGUuYWxpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiByZXNBbGlnblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgcHJlZml4LCBjbGFzc05hbWUsIGFsaWduRWRnZSxcbiAgICAgICAgICAgIHRyaWdnZXIsIHRyaWdnZXJUeXBlLCBjaGlsZHJlbiwgY2xvc2FibGUsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbiwgZGVsYXksIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICBzYWZlSWQsIGF1dG9Gb2N1cywgc2FmZU5vZGUsIG9uQ2xpY2ssIG9uSG92ZXIsXG4gICAgICAgICAgICBhbmltYXRpb24sIG9mZnNldCwgc3R5bGUsIGNvbnRhaW5lciwgcG9wdXBDb250YWluZXIsIGNhY2hlLCBwb3B1cFN0eWxlLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBQcm9wcywgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgbG9nLmRlcHJlY2F0ZWQoJ2NvbnRhaW5lcicsICdwb3B1cENvbnRhaW5lcicsICdCYWxsb29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFsaWduIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGFsaWduTWFwID0gYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgX3ByZWZpeCA9IHRoaXMuY29udGV4dC5wcmVmaXggfHwgcHJlZml4O1xuXG4gICAgICAgIGxldCB0ck9yaWdpbiA9ICd0ck9yaWdpbic7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIHRyT3JpZ2luID0gJ3J0bFRyT3JpZ2luJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IF9vZmZzZXQgPSBbYWxpZ25NYXBbYWxpZ25dLm9mZnNldFswXSArIG9mZnNldFswXSwgYWxpZ25NYXBbYWxpZ25dLm9mZnNldFsxXSArIG9mZnNldFsxXV07XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGFsaWduTWFwW2FsaWduXVt0ck9yaWdpbl07XG4gICAgICAgIGNvbnN0IF9zdHlsZSA9IHsuLi57dHJhbnNmb3JtT3JpZ2lufSwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm9iai5waWNrT3RoZXJzKE9iamVjdC5rZXlzKEJhbGxvb24ucHJvcFR5cGVzKSwgb3RoZXJzKX1cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e19wcmVmaXh9XG4gICAgICAgICAgICBjbG9zYWJsZT17Y2xvc2FibGV9XG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9vbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICAgICAgYWxpZ25FZGdlPXthbGlnbkVkZ2V9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e3RoaXMuX2NvbnRlbnRJZCA/IG5ld1RyaWdnZXIgOiB0cmlnZ2VyfVxuICAgICAgICAgICAgICAgIGNhY2hlPXtjYWNoZX1cbiAgICAgICAgICAgICAgICBzYWZlSWQ9e3NhZmVJZH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgYWxpZ249e2FsaWduTWFwW2FsaWduXS5hbGlnbn1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9e19vZmZzZXR9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uUG9zaXRpb249e3RoaXMuX29uUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICBvbkhvdmVyPXtvbkhvdmVyfVxuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U9e3RoaXMucHJvcHMuYWZ0ZXJDbG9zZX1cbiAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuX29uVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbj17c2hvdWxkVXBkYXRlUG9zaXRpb259XG4gICAgICAgICAgICAgICAgbmVlZEFkanVzdD17bmVlZEFkanVzdH1cbiAgICAgICAgICAgICAgICBhbmltYXRpb249e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICBkZWxheT17ZGVsYXl9XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2RlfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXIgfHwgY29udGFpbmVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2JhbGxvb24uanN4IiwiY29uc3Qgb3ZlcmxheU1hbmFnZXIgPSB7XG4gICAgYWxsT3ZlcmxheXM6IFtdLFxuXG4gICAgYWRkT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlT3ZlcmxheShvdmVybGF5KTtcbiAgICAgICAgdGhpcy5hbGxPdmVybGF5cy51bnNoaWZ0KG92ZXJsYXkpO1xuICAgIH0sXG5cbiAgICBpc0N1cnJlbnRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXkgJiYgdGhpcy5hbGxPdmVybGF5c1swXSA9PT0gb3ZlcmxheTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmFsbE92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsT3ZlcmxheXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3ZlcmxheU1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9tYW5hZ2VyLmpzIiwiaW1wb3J0IHtkb219IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5jb25zdCBWSUVXUE9SVCA9ICd2aWV3cG9ydCc7XG5cbi8vIElFOCBub3Qgc3VwcG9ydCBwYWdlWE9mZnNldFxuY29uc3QgZ2V0UGFnZVggPSAoKSA9PiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5jb25zdCBnZXRQYWdlWSA9ICgpID0+IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vKipcbiAqIEBwcml2YXRlIGdldCBlbGVtZW50IHJlY3RcbiAqIEBwYXJhbSAgICAgICB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybiAgICAgIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRFbGVtZW50UmVjdCAoZWxlbSkge1xuICAgIGxldCBvZmZzZXRUb3AgPSAwLFxuICAgICAgICBvZmZzZXRMZWZ0ID0gMDtcblxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcblxuICAgIGRvIHtcbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldFRvcCkpIHtcbiAgICAgICAgICAgIG9mZnNldFRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKGVsZW0ub2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudCkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCksXG4gICAgICAgIGxlZnQ6IG9mZnNldExlZnQgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KSxcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXRIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBvZmZzZXRXaWR0aFxuICAgIH07XG59XG5cbi8qKlxuICogQHByaXZhdGUgZ2V0IHZpZXdwb3J0IHNpemVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldFZpZXdwb3J0U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gICAgc3RhdGljIFZJRVdQT1JUID0gVklFV1BPUlQ7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHN0YXRpYyBwbGFjZSBtZXRob2RcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIHByb3BzXG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5waW5FbGVtZW50XG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5iYXNlRWxlbWVudFxuICAgICAqICAgICBAcGFyYW0gIHtTdHJpbmd9ICAgcHJvcHMuYWxpZ25cbiAgICAgKiAgICAgQHBhcmFtICB7TnVtYmVyfSAgIHByb3BzLm9mZnNldFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMubmVlZEFkanVzdFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMuaXNSdGxcbiAgICAgKiBAcmV0dXJuIHtQb3NpdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGxhY2UgPSBwcm9wcyA9PiBuZXcgUG9zaXRpb24ocHJvcHMpLnNldFBvc2l0aW9uKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucGluRWxlbWVudCA9IHByb3BzLnBpbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBwcm9wcy5iYXNlRWxlbWVudDtcbiAgICAgICAgdGhpcy5hbGlnbiA9IHByb3BzLmFsaWduIHx8ICd0bCB0bCc7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcHJvcHMub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgICAgdGhpcy5uZWVkQWRqdXN0ID0gcHJvcHMubmVlZEFkanVzdCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J0bCA9IHByb3BzLmlzUnRsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwaW5FbGVtZW50ID0gdGhpcy5waW5FbGVtZW50O1xuICAgICAgICBjb25zdCBiYXNlRWxlbWVudCA9IHRoaXMuYmFzZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSB0aGlzLl9nZXRFeHBlY3RlZEFsaWduKCk7XG4gICAgICAgIGxldCBpc1BpbkZpeGVkLCBpc0Jhc2VGaXhlZCwgZmlyc3RQb3NpdGlvblJlc3VsdDtcbiAgICAgICAgaWYgKHBpbkVsZW1lbnQgPT09IFZJRVdQT1JUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5nZXRTdHlsZShwaW5FbGVtZW50LCAncG9zaXRpb24nKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgZG9tLnNldFN0eWxlKHBpbkVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhc2VFbGVtZW50ID09PSBWSUVXUE9SVCB8fCBkb20uZ2V0U3R5bGUoYmFzZUVsZW1lbnQsICdwb3NpdGlvbicpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBpc0Jhc2VGaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNCYXNlRml4ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruacn+acm+eahOWumuS9jVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cGVjdGVkQWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduID0gZXhwZWN0ZWRBbGlnbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHBpbkVsZW1lbnRQb2ludHMgPSB0aGlzLl9ub3JtYWxpemVQb3NpdGlvbihwaW5FbGVtZW50LCBhbGlnbi5zcGxpdCgnICcpWzBdLCBpc1BpbkZpeGVkKTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50UG9pbnRzID0gdGhpcy5fbm9ybWFsaXplUG9zaXRpb24oYmFzZUVsZW1lbnQsIGFsaWduLnNwbGl0KCcgJylbMV0sIGlzUGluRml4ZWQpO1xuICAgICAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50T2Zmc2V0ID0gKGlzUGluRml4ZWQgJiYgaXNCYXNlRml4ZWQpID8gdGhpcy5fZ2V0TGVmdFRvcChiYXNlRWxlbWVudCkgOiBiYXNlRWxlbWVudFBvaW50cy5vZmZzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGJhc2VFbGVtZW50T2Zmc2V0LnRvcCArIGJhc2VFbGVtZW50UG9pbnRzLnkgLSBwaW5FbGVtZW50UGFyZW50T2Zmc2V0LnRvcCAtIHBpbkVsZW1lbnRQb2ludHMueTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBiYXNlRWxlbWVudE9mZnNldC5sZWZ0ICsgYmFzZUVsZW1lbnRQb2ludHMueCAtIHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQubGVmdCAgLSBwaW5FbGVtZW50UG9pbnRzLng7XG4gICAgICAgICAgICB0aGlzLl9zZXRQaW5FbGVtZW50UG9zdGlvbihwaW5FbGVtZW50LCB7bGVmdCwgdG9wfSwgdGhpcy5vZmZzZXQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpcnN0UG9zaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBvc2l0aW9uUmVzdWx0ID0ge2xlZnQsIHRvcH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5faXNJblZpZXdwb3J0KHBpbkVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5WaWV3cG9ydExlZnQgPSB0aGlzLl9tYWtlRWxlbWVudEluVmlld3BvcnQocGluRWxlbWVudCwgZmlyc3RQb3NpdGlvblJlc3VsdC5sZWZ0LCAnTGVmdCcsIGlzUGluRml4ZWQpO1xuICAgICAgICBjb25zdCBpblZpZXdwb3J0VG9wID0gdGhpcy5fbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIGZpcnN0UG9zaXRpb25SZXN1bHQudG9wLCAnVG9wJywgaXNQaW5GaXhlZCk7XG5cbiAgICAgICAgdGhpcy5fc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwge2xlZnQ6IGluVmlld3BvcnRMZWZ0LCB0b3A6IGluVmlld3BvcnRUb3B9KTtcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWxpZ25bMF07XG4gICAgfVxuXG4gICAgX2dldFBhcmVudE9mZnNldChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSAmJiBkb20uZ2V0U3R5bGUocGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9mZnNldC50b3AgKz0gcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUocGFyZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpLCAxMCk7XG4gICAgICAgIG9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKHBhcmVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyksIDEwKTtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldFBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICBfbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIG51bWJlciwgdHlwZSwgaXNQaW5GaXhlZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuICAgICAgICBjb25zdCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBvZmZzZXRQYXJlbnQgPSBwaW5FbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGlmIChpc1BpbkZpeGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudC5ib2R5ICYmIGRvbS5nZXRTdHlsZShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgd2hlbiBkaXYncyBvZmZzZXRQYXJlbnQgaXMgZG9jdW1lbnQuYm9keSwgd2Ugc2V0IG5ldyBwb3NpdGlvbiByZXN1bHQuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5tYXgoZG9jRWxlbWVudFtgc2Nyb2xsJHt0eXBlfWBdLCBkb2N1bWVudC5ib2R5W2BzY3JvbGwke3R5cGV9YF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplUG9zaXRpb24oZWxlbWVudCwgYWxpZ24sIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5fbm9ybWFsaXplRWxlbWVudChlbGVtZW50LCBpc1BpbkZpeGVkKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbik7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbikge1xuICAgICAgICBjb25zdCB4ID0gYWxpZ24uc3BsaXQoJycpWzFdO1xuICAgICAgICBjb25zdCB5ID0gYWxpZ24uc3BsaXQoJycpWzBdO1xuXG4gICAgICAgIHBvaW50cy54ID0gdGhpcy5feHlDb252ZXJ0ZXIoeCwgcG9pbnRzLCAnd2lkdGgnKTtcbiAgICAgICAgcG9pbnRzLnkgPSB0aGlzLl94eUNvbnZlcnRlcih5LCBwb2ludHMsICdoZWlnaHQnKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuICAgIF94eUNvbnZlcnRlcihhbGlnbiwgcG9pbnRzLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGFsaWduLnJlcGxhY2UoL3R8bC9naSwgJzAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9jL2dpLCAnNTAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9ifHIvZ2ksICcxMDAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxkKyklL2dpLCBmdW5jdGlvbihtLCBkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50cy5zaXplKClbdHlwZV0gKiAoZCAvIDEwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXMsIDEwKSB8fCAwO1xuICAgIH1cblxuICAgIF9nZXRMZWZ0VG9wKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICdsZWZ0JykpIHx8IDAsXG4gICAgICAgICAgICB0b3A6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICd0b3AnKSkgfHwgMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9ub3JtYWxpemVFbGVtZW50KGVsZW1lbnQsIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LCBpc1ZpZXdwb3J0ID0gKGVsZW1lbnQgPT09IFZJRVdQT1JUKSwgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICByZXN1bHQub2Zmc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUGluRml4ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZ2V0UGFnZVgoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBnZXRQYWdlWSgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LnNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkb2NFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRvY0VsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGRvY0NsaWVudExlZnQgPSAoZG9jRWxlbWVudC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgICAgY29uc3QgZG9jQ2xpZW50VG9wID0gKGRvY0VsZW1lbnQuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyAoZ2V0UGFnZVgoKSAtIGRvY0NsaWVudExlZnQpLFxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIChnZXRQYWdlWSgpIC0gZG9jQ2xpZW50VG9wKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFjY29yZGluZyB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB0aGUgZGVzaXJlZCBwb3NpdGlvbmluZ1xuICAgIF9nZXRFeHBlY3RlZEFsaWduKCkge1xuICAgICAgICBjb25zdCBhbGlnbiA9IHRoaXMuaXNSdGwgPyB0aGlzLl9yZXBsYWNlQWxpZ25EaXIodGhpcy5hbGlnbiwgL2x8ci9nLCB7bDogJ3InLCByOiAnbCd9KSA6IHRoaXMuYWxpZ247XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSBbYWxpZ25dO1xuXG4gICAgICAgIGlmICh0aGlzLm5lZWRBZGp1c3QpIHtcbiAgICAgICAgICAgIGlmICgvdHxiL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvdHxiL2csIHt0OiAnYicsIGI6ICd0J30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvbHxyL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyL2csIHtsOiAncicsIHI6ICdsJ30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvYy9nLnRlc3QoYWxpZ24pKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAnbCd9KSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAncid9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyfHR8Yi9nLCB7bDogJ3InLCByOiAnbCcsIHQ6ICdiJywgYjogJ3QnfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBlY3RlZEFsaWduO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBhbGlnbiBvcmRlci5cbiAgICBfcmVwbGFjZUFsaWduRGlyKGFsaWduLCByZWdFeHAsIG1hcCkge1xuICAgICAgICByZXR1cm4gYWxpZ24ucmVwbGFjZShyZWdFeHAsIHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWFwW3Jlc107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldGVjdGluZyBlbGVtZW50IGlzIGluIHRoZSB3aW5kb3fvvIwgd2Ugd2FudCB0byBhZGp1c3QgcG9zaXRpb24gbGF0ZXIuXG4gICAgX2lzSW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0U2l6ZSA9IF9nZXRWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgLy8gQXZvaWQgYW5pbWF0ZSBwcm9ibGVtIHRoYXQgdXNlIG9mZnNldFdpZHRoIGluc3RlYWQgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LlxuICAgICAgICBjb25zdCBlbGVtZW50UmVjdCA9IF9nZXRFbGVtZW50UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50UmVjdC5sZWZ0ID49IDAgJiYgZWxlbWVudFJlY3QubGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gdmlld3BvcnRTaXplLndpZHRoICYmXG4gICAgICAgICAgICBlbGVtZW50UmVjdC50b3AgPj0gMCAmJiBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSB2aWV3cG9ydFNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8g5Zyo6L+Z6YeM5YGaUlRM5Yik5patIHRvcC1sZWZ0IOWumuS9jei9rOWMluS4uuetieaViOeahCB0b3AtcmlnaHTlrprkvY1cbiAgICBfc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwgcG9zdGlvbiwgb2Zmc2V0ID0gWzAsIDBdKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIGxlZnR9ID0gcG9zdGlvbjtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnRsKSB7XG4gICAgICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnQgKyBvZmZzZXRbMF19cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJhbnNmZXIge2xlZnQsdG9wfSBlcXVhbHkgdG8ge3JpZ2h0LHRvcH1cbiAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRoOiBvZmZzZXRQYXJlbnRXaWR0aH0gPSAgX2dldEVsZW1lbnRSZWN0KHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQub2Zmc2V0UGFyZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IF9nZXRFbGVtZW50UmVjdChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBvZmZzZXRQYXJlbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpO1xuICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3JpZ2h0ICsgb2Zmc2V0WzBdfXB4YCxcbiAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvdXRpbHMvcG9zaXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jLCBLRVlDT0RFIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCB7IG5vb3AsIG1ha2VDaGFpbiwgYmluZEN0eCB9ID0gZnVuYztcblxuLyoqXG4gKiBPdmVybGF5LlBvcHVwXG4gKiBAZGVzY3JpcHRpb24g57un5om/IE92ZXJsYXkg55qEIEFQSe+8jOmZpOmdnueJueWIq+ivtOaYjlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5pON5L2c57G75Z6L77yM5Y+v5Lul5pivICdjbGljayfvvIwnaG92ZXIn77yMJ2ZvY3VzJ++8jOaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYr+WQpuaYvuekulxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmK/lkKbmmL7npLpcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+aXtuinpuWPkeeahOWbnuiwg+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm5pi+56S6XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOinpuWPkeW8ueWxguaYvuekuuaIlumakOiXj+eahOadpea6kFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBET03kuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7mraTlsZ7mgKfvvIzlvLnlsYLml6Dms5XmmL7npLrmiJbpmpDol49cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+eahOW7tuaXtuaXtumXtO+8iOS7peavq+enkuS4uuWNleS9je+8ie+8jOWcqCB0cmlnZ2VyVHlwZSDooqvorr7nva7kuLogaG92ZXIg5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oOaYr+WQpuWPr+S7peWFs+mXreW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N55qE5Y+C54Wn5YWD57SgXG4gICAgICAgICAqIEBkZWZhdWx0IHRhcmdldCDlsZ7mgKfvvIzljbPop6blj5HlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbot5/pmo90cmlnZ2Vy5rua5YqoXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBoYXNNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgZGVmYXVsdFZpc2libGU6IGZhbHNlLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IDIwMCxcbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IHRydWUsXG4gICAgICAgIGZvbGxvd1RyaWdnZXI6IGZhbHNlLFxuICAgICAgICBjb250YWluZXI6ICgpID0+IGRvY3VtZW50LmJvZHksXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHlwZW9mIHByb3BzLnZpc2libGUgPT09ICd1bmRlZmluZWQnID8gcHJvcHMuZGVmYXVsdFZpc2libGUgOiBwcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckNsaWNrJywgJ2hhbmRsZVRyaWdnZXJLZXlEb3duJyxcbiAgICAgICAgICAgICdoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcicsICdoYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckZvY3VzJywgJ2hhbmRsZVRyaWdnZXJCbHVyJyxcbiAgICAgICAgICAgICdoYW5kbGVDb250ZW50TW91c2VFbnRlcicsICdoYW5kbGVDb250ZW50TW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlQ29udGVudE1vdXNlRG93bicsICdoYW5kbGVSZXF1ZXN0Q2xvc2UnLFxuICAgICAgICAgICAgJ2hhbmRsZU1hc2tNb3VzZUVudGVyJywgJ2hhbmRsZU1hc2tNb3VzZUxlYXZlJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFsnX3RpbWVyJywgJ19oaWRlVGltZXInLCAnX3Nob3dUaW1lciddLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgICAgICB0aGlzW3RpbWVdICYmIGNsZWFyVGltZW91dCh0aGlzW3RpbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKSB7XG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmICF0aGlzLnByb3BzLmNhbkNsb3NlQnlUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoIXRoaXMuc3RhdGUudmlzaWJsZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlcktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlNQQUNFIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcihlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5faGlkZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodHJ1ZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsIHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSwgdHlwZSB8fCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlckZvY3VzKGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHRydWUsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJCbHVyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZvcndhcmRDb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRm9yd2FyZENvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLl9pc0ZvcndhcmRDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VFbnRlcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lcik7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGVudE1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsICdmcm9tQ29udGVudCcpO1xuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUVudGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2spIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXF1ZXN0Q2xvc2UodHlwZSwgZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsIHR5cGUsIGUpO1xuICAgIH1cblxuICAgIHJlbmRlclRyaWdnZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHJpZ2dlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAga2V5OiAndHJpZ2dlcicsXG4gICAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJpZ2dlclR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHsgb25DbGljaywgb25LZXlEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgb25Gb2N1cywgb25CbHVyIH0gPSB0cmlnZ2VyLnByb3BzO1xuICAgICAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJpZ2dlclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJDbGljaywgb25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbktleURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyS2V5RG93biwgb25LZXlEb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob3ZlcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlTGVhdmUgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZSwgb25Nb3VzZUxlYXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlckZvY3VzLCBvbkZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQmx1ciA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJCbHVyLCBvbkJsdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwgcHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRyaWdnZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCB7IG9uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY29udGVudC5wcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBrZXk6ICdwb3J0YWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICh0cmlnZ2VyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVDb250ZW50TW91c2VEb3duLCBvbk1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdmVyJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlQ29udGVudE1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VMZWF2ZSA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjb250ZW50LCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9ydGFsKCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCwgc2FmZU5vZGUsIGZvbGxvd1RyaWdnZXIsIHRyaWdnZXJUeXBlLCBoYXNNYXNrLCB3cmFwcGVyU3R5bGUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtjb250YWluZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmluZFRyaWdnZXJOb2RlID0gKCkgPT4gKGZpbmRET01Ob2RlKHRoaXMpIHx8IHt9KTtcbiAgICAgICAgY29uc3Qgc2FmZU5vZGVzID0gQXJyYXkuaXNBcnJheShzYWZlTm9kZSkgPyBbLi4uc2FmZU5vZGVdIDogW3NhZmVOb2RlXTtcbiAgICAgICAgc2FmZU5vZGVzLnVuc2hpZnQoZmluZFRyaWdnZXJOb2RlKTtcblxuICAgICAgICBjb25zdCBuZXdXcmFwcGVyU3R5bGUgPSB3cmFwcGVyU3R5bGUgfHwge307XG5cbiAgICAgICAgaWYgKGZvbGxvd1RyaWdnZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRyaWdnZXIgPT4gdHJpZ2dlci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgbmV3V3JhcHBlclN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyVHlwZSA9PT0gJ2hvdmVyJyAmJiBoYXNNYXNrKSB7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VFbnRlciA9IHRoaXMuaGFuZGxlTWFza01vdXNlRW50ZXI7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTWFza01vdXNlTGVhdmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE92ZXJsYXkgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICBrZXk9XCJvdmVybGF5XCJcbiAgICAgICAgICAgICAgICByZWY9e292ZXJsYXkgPT4gKHRoaXMub3ZlcmxheSA9IG92ZXJsYXkpfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9e3RhcmdldCB8fCBmaW5kVHJpZ2dlck5vZGV9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2Rlc31cbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e25ld1dyYXBwZXJTdHlsZX1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgaGFzTWFzaz17aGFzTWFza31cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRyaWdnZXIoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKClcbiAgICAgICAgXTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9wb3B1cC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL292ZXJsYXknO1xuaW1wb3J0IEJhbGxvb25Jbm5lciBmcm9tICcuL2lubmVyJztcbmltcG9ydCB7bm9ybWFsTWFwIGFzIGFsaWduTWFwfSBmcm9tICcuL2FsaWduTWFwJztcblxuY29uc3Qge1BvcHVwfSA9IE92ZXJsYXk7XG5cbi8qKiBCYWxsb29uLlRvb2x0aXAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLflvI/nsbvlkI3nmoTlk4HniYzliY3nvIBcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieexu+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ5YaF6IGU5qC35byPXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvb2x0aXDnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5L2N572uXG4gICAgICAgICAqIEBlbnVtZGVzYyDkuIosIOWPsywg5LiLLCDlt6YsIOS4iuW3piwg5LiK5Y+zLCDkuIvlt6YsIOS4i+WPsywg5bem5LiKLCDlt6bkuIssIOWPs+S4iiwg5Y+z5LiLIOWPiuWFtiDkuKTkuKTnu4TlkIhcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0JywgJ3InLCAnYicsICdsJywgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ2x0JywgJ2xiJywgJ3J0JywgJ3JiJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R6KGM5Li6XG4gICAgICAgICAqIOm8oOagh+aCrOa1riwg6I635Y+W5Yiw54Sm54K5LCDpvKDmoIfngrnlh7soJ2hvdmVyJ++8jCdmb2N1cyfvvIwnY2xpY2snKeaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpnB1cmUgcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+Wumua1ruWxgua4suafk+eahOeItuiKgueCuSwg5Y+v5Lul5Li66IqC54K5aWTnmoTlrZfnrKbkuLLvvIzkuZ/lj6/ku6Xov5Tlm57oioLngrnnmoTlh73mlbDjgIJcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGCaWQsIOS8oOWFpeWAvOaJjeS8muaUr+aMgeaXoOmanOeijVxuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRyaWdnZXJUeXBlOiAnaG92ZXInLFxuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIHRyaWdnZXI6IDxzcGFuPjwvc3Bhbj5cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWUsIGFsaWduLCBzdHlsZSwgcHJlZml4LCB0cmlnZ2VyLCBjaGlsZHJlbiwgcG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBwb3B1cFByb3BzLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBTdHlsZSwgdHJpZ2dlclR5cGUsIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHRyT3JpZ2luID0gJ3RyT3JpZ2luJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgb3RoZXJzLnJ0bCA9IHRydWU7XG4gICAgICAgICAgICB0ck9yaWdpbiA9ICdydGxUck9yaWdpbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBhbGlnbk1hcFthbGlnbl1bdHJPcmlnaW5dO1xuICAgICAgICBjb25zdCBfb2Zmc2V0ID0gYWxpZ25NYXBbYWxpZ25dLm9mZnNldDtcbiAgICAgICAgY29uc3QgX3N0eWxlID0ge3RyYW5zZm9ybU9yaWdpbiwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e3ByZWZpeH1cbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGlzVG9vbHRpcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17dGhpcy5fY29udGVudElkID8gbmV3VHJpZ2dlciA6IHRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGU9e3RyaWdnZXJUeXBlfVxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbk1hcFthbGlnbl0uYWxpZ259XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtfb2Zmc2V0fVxuICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb25cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vdG9vbHRpcC5qc3giLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsImltcG9ydCAnLi4vYW5pbWF0ZS9zdHlsZS5qcyc7XG5pbXBvcnQgJy4uL292ZXJsYXkvc3R5bGUuanMnO1xuaW1wb3J0ICcuLi9pY29uL3N0eWxlLmpzJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vc3R5bGUuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L21haW4uc2NzcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9tYWluLnNjc3MiLCJpbXBvcnQgQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi92aWV3L2J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi92aWV3L2dyb3VwJztcblxuQnV0dG9uLkdyb3VwID0gQnV0dG9uR3JvdXA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhCdXR0b24sIHtcbiAgICB0cmFuc2Zvcm06IChwcm9wcywgZGVwcmVjYXRlZCkgPT4ge1xuICAgICAgICBpZiAoJ3NoYXBlJyBpbiBwcm9wcykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnc2hhcGUnLCAndGV4dCB8IHdhcm5pbmcgfCBnaG9zdCcsICdCdXR0b24nKTtcblxuICAgICAgICAgICAgY29uc3QgeyBzaGFwZSwgdHlwZSwgLi4ub3RoZXJzIH0gPSBwcm9wcztcblxuICAgICAgICAgICAgbGV0IG5ld1R5cGUgPSB0eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdsaWdodCcgfHwgdHlwZSA9PT0gJ2RhcmsnIHx8ICh0eXBlID09PSAnc2Vjb25kYXJ5JyAmJiBzaGFwZSA9PT0gJ3dhcm5pbmcnKSkge1xuICAgICAgICAgICAgICAgIG5ld1R5cGUgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGdob3N0O1xuICAgICAgICAgICAgaWYgKHNoYXBlID09PSAnZ2hvc3QnKSB7XG4gICAgICAgICAgICAgICAgZ2hvc3QgPSAoe1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiAnZGFyaycsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQ6ICdsaWdodCdcbiAgICAgICAgICAgICAgICB9KVt0eXBlIHx8IEJ1dHRvbi5kZWZhdWx0UHJvcHMudHlwZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzaGFwZSA9PT0gJ3RleHQnO1xuICAgICAgICAgICAgY29uc3Qgd2FybmluZyA9IHNoYXBlID09PSAnd2FybmluZyc7XG5cbiAgICAgICAgICAgIHByb3BzID0geyB0eXBlOiBuZXdUeXBlLCBnaG9zdCwgdGV4dCwgd2FybmluZywgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmpzeCIsImltcG9ydCAnLi4vaWNvbi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24vc3R5bGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZnVuY3Rpb24gbWFwSWNvblNpemUoc2l6ZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgICBsYXJnZTogJ3NtYWxsJyxcbiAgICAgICAgbWVkaXVtOiAneHMnLFxuICAgICAgICBzbWFsbDogJ3hzJyxcbiAgICB9KVtzaXplXTtcbn1cblxuLyoqIEJ1dHRvbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjInpkq7nmoTnsbvlnotcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ25vcm1hbCddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMiemSrueahOWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyJ6ZKu5LitIEljb24g55qE5bC65a+477yM55So5LqO5pu/5LujIEljb24g55qE6buY6K6k5aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICBpY29uU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHhzJywgJ3hzJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICd4bCcsICd4eGwnLCAneHh4bCddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9kyBjb21wb25lbnQgPSAnYnV0dG9uJyDml7bvvIzorr7nva4gYnV0dG9uIOagh+etvueahCB0eXBlIOWAvFxuICAgICAgICAgKi9cbiAgICAgICAgaHRtbFR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Ym1pdCcsICdyZXNldCcsICdidXR0b24nXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7moIfnrb7nsbvlnotcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2EnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7mjInpkq7nmoTovb3lhaXnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li65bm954G15oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICBnaG9zdDogUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCBmYWxzZSwgJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbkuLrmlofmnKzmjInpkq5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li66K2m5ZGK5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICB3YXJuaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye75oyJ6ZKu55qE5Zue6LCDXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIEV2ZW50IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25Nb3VzZVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIHNpemU6ICdtZWRpdW0nLFxuICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNvbXBvbmVudDogJ2J1dHRvbicsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBnaG9zdDogZmFsc2UsXG4gICAgICAgIHRleHQ6IGZhbHNlLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fVxuICAgIH07XG5cbiAgICBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbi5ibHVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBidXR0b25SZWZIYW5kbGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgY2xhc3NOYW1lLCB0eXBlLCBzaXplLCBodG1sVHlwZSwgbG9hZGluZywgdGV4dCwgd2FybmluZywgZ2hvc3QsIGNvbXBvbmVudCwgaWNvblNpemUsIGNoaWxkcmVuLCBydGwsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZ2hvc3RUeXBlID0gWydsaWdodCcsICdkYXJrJ10uaW5kZXhPZihnaG9zdCkgPj0gMCA/IGdob3N0IDogJ2RhcmsnO1xuXG4gICAgICAgIGNvbnN0IGJ0bkNscyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG5gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9JHtzaXplfWBdOiBzaXplLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4tJHt0eXBlfWBdOiB0eXBlICYmICFnaG9zdCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLXRleHRgXTogdGV4dCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLXdhcm5pbmdgXTogd2FybmluZyxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWxvYWRpbmdgXTogbG9hZGluZyxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWdob3N0YF06IGdob3N0LFxuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4tJHtnaG9zdFR5cGV9YF06IGdob3N0LFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2xvbmVkQ2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZC50eXBlLl90eXBlTWFyayA9PT0gJ2ljb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNscyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1pY29uYF06ICFpY29uU2l6ZSwgLy8g5aaC5p6c55So5oi35rKh5pyJ5LygIGljb25TaXpl77yM5YiZ5L2/55So6K+l5qC35byP5qCH6K6wIGljb24g5Li6IGJ1dHRvbiDpooTorr7lsLrlr7hcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uLWZpcnN0YF06IGNvdW50ID4gMSAmJiBpbmRleCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uLWxhc3RgXTogY291bnQgPiAxICYmIGluZGV4ID09PSBjb3VudCAtIDEsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1hbG9uZWBdOiBjb3VudCA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgW2NoaWxkLnByb3BzLmNsYXNzTmFtZV06ICEhY2hpbGQucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGljb25DbHMsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGljb25TaXplIHx8IG1hcEljb25TaXplKHNpemUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgVGFnTmFtZSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgdGFnQXR0cnMgPSB7XG4gICAgICAgICAgICAuLi5vdGhlcnMsXG4gICAgICAgICAgICB0eXBlOiBodG1sVHlwZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYnRuQ2xzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFRhZ05hbWUgPT09ICdhJykge1xuICAgICAgICAgICAgZGVsZXRlIHRhZ0F0dHJzLnR5cGU7XG5cbiAgICAgICAgICAgIGlmICh0YWdBdHRycy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YWdBdHRycy5vbkNsaWNrOyAvLyBhIOagh+etvueahCBvbkNsaWNrIOa1j+iniOWZqOm7mOiupOS4jeS8muemgeeUqFxuICAgICAgICAgICAgICAgIHRhZ0F0dHJzLmhyZWYgJiYgZGVsZXRlIHRhZ0F0dHJzLmhyZWY7IC8vIGEg5qCH562+5Zyo56aB55So54q25oCB5LiL5peg6Lez6L2sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhZ05hbWUgey4uLnRhZ0F0dHJzfSBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfSBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZVVwfSByZWY9e3RoaXMuYnV0dG9uUmVmSGFuZGxlcn0gcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIHtjbG9uZWRDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvVGFnTmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL3ZpZXcvYnV0dG9uLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uLy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbi8qKlxuICogQnV0dG9uLkdyb3VwXG4gKi9cbmNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu5/kuIDorr7nva4gQnV0dG9uIOe7hOS7tueahOaMiemSruWkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgY2xhc3NOYW1lLCBzaXplLCBjaGlsZHJlbiwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBDbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWdyb3VwYF06IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsb25lQ2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIG90aGVycy5kaXIgPSAncnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi5vdGhlcnN9IGNsYXNzTmFtZT17Z3JvdXBDbHN9PlxuICAgICAgICAgICAgICAgIHtjbG9uZUNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQnV0dG9uR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi92aWV3L2dyb3VwLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL21haW4uc2NzcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5SZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiDojrflj5blr7nosaHnmoTnsbvlnotcbiAqIEBwYXJhbSAgeyp9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICpcbiAqIEBleGFtcGxlXG4gKiB0eXBlT2YoW10pID09PSAnQXJyYXknXG4gKiB0eXBlT2YoKSA9PT0gJ1VuZGVmaW5lZCdcbiAqIHR5cGVPZigxKSA9PT0gJ051bWJlcidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xdL2csICcnKTtcbn1cblxuLyoqXG4gKiDliKTmlq3mmK/lkKbmmK/mlbDnu4TmiJbnsbvmlbDnu4Tlr7nosaFcbiAqIEBwYXJhbSAgeyp9ICBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGlzQXJyYXlMaWtlKFtdKSA9PT0gdHJ1ZVxuICogaXNBcnJheUxpa2UoYXJndW1lbnRzKSA9PT0gdHJ1ZVxuICogaXNBcnJheUxpa2UodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlIChvYmopIHtcbiAgICBjb25zdCBsZW5ndGggPSAhIW9iaiAmJiAnbGVuZ3RoJyBpbiBvYmogJiYgb2JqLmxlbmd0aDtcbiAgICBjb25zdCB0eXBlID0gdHlwZU9mKG9iaik7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ0FycmF5JyB8fCBsZW5ndGggPT09IDAgfHxcbiAgICAgICAgKHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iaik7XG59XG5cbi8qKlxuICog5Yik5pat5a+56LGh5piv5ZCm5piv5LiA5LiqcHJvbWlzZe+8jOWNs+aYr+WQpuWPr+S7peeUqC50aGVuXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcbiAgICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiDmmK/lkKbmmK/kuIDkuKrnuq/lh4DnmoTlr7nosaFcbiAqIEBwYXJhbSAgeyp9ICBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcmVmZXJlbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gICAgaWYgKHR5cGVPZihvYmopICE9PSAnT2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcblxuICAgIGlmICh0eXBlb2YgY3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuXG4gICAgaWYgKHR5cGVPZihwcm90KSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghcHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDlr7nosaHmtYXmr5TovoNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqQVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpCXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIFtjb21wYXJlXSDmiYvliqjosIPnlKjmlrnms5Xmr5TovoNcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAg5a+56LGh5rWF5q+U6L6D5piv5ZCm55u4562JXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5zaGFsbG93RXF1YWwoe2E6IDEwMH0sIHthOiAxMDB9KTsgLy8gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsIChvYmpBLCBvYmpCLCBjb21wYXJlKSB7XG4gICAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8g5YW25Lit5LiA5Liq5LiN5pivb2JqZWN077yM5YiZ5LiN55u4562JXG4gICAgaWYgKCFvYmpBIHx8ICFvYmpCIHx8ICh0eXBlb2Ygb2JqQSArIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0b2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGtleUEgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgICBjb25zdCBrZXlCID0gT2JqZWN0LmtleXMob2JqQik7XG4gICAgY29uc3QgbGVuID0ga2V5QS5sZW5ndGg7XG5cbiAgICAvLyBrZXkg5pWw6YeP5LiN5LiA6Ie05YiZ5LiN55u4562JXG4gICAgaWYgKGxlbiAhPT0ga2V5Qi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gdHlwZW9mIGNvbXBhcmUgPT09ICdmdW5jdGlvbic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleUFbaV07XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsQSA9IG9iakFba2V5XTtcbiAgICAgICAgY29uc3QgdmFsQiA9IG9iakJba2V5XTtcblxuICAgICAgICBjb25zdCByZXQgPSBoYXNDYWxsYmFjayA/IGNvbXBhcmUodmFsQSwgdmFsQiwga2V5KSA6IHZvaWQgMDtcblxuICAgICAgICBpZiAocmV0ID09PSBmYWxzZSB8fCByZXQgPT09IHZvaWQgMCAmJiB2YWxBICE9PSB2YWxCKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDpgY3ljoblr7nosaHmiJbmlbDnu4TvvIzmiJbogIXnsbvmlbDnu4TvvIzkvovlpoJSZWFjdOS4reeahGNoaWxkcmVu5a+56LGh44CBYXJndW1lbnRz562JXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9ICAgb2JqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgZm4obiwgaSkgb3IgZm4odmFsLCBrZXkpXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgW2RpcmVjdGlvbiA9IDFdIOaYr+WQpuWAkuW6j+mBjeWOhu+8jOWPquWvueaVsOe7hOacieaViFxuICogQHJldHVybiB7T2JqZWN0fEFycmF5fVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyDpgY3ljobmlbDnu4RcbiAqIG9iamVjdC5lYWNoKFsxMDAsIDIwMCwgMzAwXSwgKG4sIGkpID0+IGNvbnNvbGUubG9nKG4sIGkpKTtcbiAqIC8vIOmBjeWOhmpzb27lr7nosaFcbiAqIG9iamVjdC5lYWNoKHthOiAxMDAsIGI6IDIwMH0sICh2YWx1ZSwga2V5KSA9PiBjb25zb2xlLmxvZyhrZXksIHZhbHVlKSk7XG4gKiAvLyDpgY3ljoZSZWFjdOWtkOiKgueCuVxuICogb2JqZWN0LmVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4gY29uc29sZS5sb2coY2hpbGQpKTtcbiAqIC8vIOmBjeWOhmFyZ3VtZW50c1xuICogb2JqZWN0LmVhY2goYXJndW1lbnRzLCAoYXJnLCBpKSA9PiBjb25zb2xlLmxvZyhhcmcpKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhY2ggKG9iaiwgY2FsbGJhY2ssIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHJldmVyc2VkID0gZGlyZWN0aW9uID09PSAtMTtcbiAgICBjb25zdCBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGxldCB2YWx1ZSxcbiAgICAgICAgaSA9IHJldmVyc2VkID8gbGVuZ3RoIC0gMSA6IDA7XG5cbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aCAmJiBpID49IDA7IHJldmVyc2VkID8gaS0tIDogaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmpbaV0sIG9ialtpXSwgaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbi8vIEBwcml2YXRlIOWIpOaWrWtleeaYr+WQpuWcqOaVsOe7hOaIluWvueixoeS4rVxuY29uc3QgX2lzSW5PYmogPSAoa2V5LCBvYmosIGlzQXJyYXkpID0+IGlzQXJyYXkgPyAob2JqLmluZGV4T2Yoa2V5KSA+IC0xKSAgOiAoa2V5IGluIG9iaik7XG5cbi8qKlxuICog6L+H5ruk5Ye65YW25a6D5bGe5oCnXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGhvbGRQcm9wcyDov4fmu6TnmoTlj4Lnhaflr7nosaHvvIzmnIDnu4jnmoTnu5Pmnpzlj6rkv53nlZnkuI3lnKjlj4Lnhaflr7nosaHkuK3nmoRrZXlcbiAqIEBwYXJhbSAge09iamVjdH0gcHJvcHMgICAgIOiiq+i/h+a7pOeahOWvueixoVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgb3RoZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5waWNrT3RoZXJzKEZvb0NvbXBvbmVudC5wcm9wVHlwZXMsIHRoaXMucHJvcHMpO1xuICogb2JqZWN0LnBpY2tPdGhlcnMoWydjbGFzc05hbWUnLCAnb25DaGFuZ2UnXSwgdGhpcy5wcm9wcyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaWNrT3RoZXJzIChob2xkUHJvcHMsIHByb3BzKSB7XG4gICAgY29uc3Qgb3RoZXJzID0ge307XG4gICAgY29uc3QgaXNBcnJheSA9IHR5cGVPZihob2xkUHJvcHMpID09PSAnQXJyYXknO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKCFfaXNJbk9iaihrZXksIGhvbGRQcm9wcywgaXNBcnJheSkpIHtcbiAgICAgICAgICAgIG90aGVyc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdGhlcnM7XG59XG5cbi8qKlxuICog6L+H5ruk5Ye65bimcHJlZml455qE5bGe5oCnXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhvbGRQcm9wcyDov4fmu6TnmoTlj4Lnhaflr7nosaHvvIzmnIDnu4jnmoTnu5Pmnpzlj6rkv53nlZnkuI3lnKjlj4Lnhaflr7nosaHkuK3nmoRrZXlcbiAqIEBwYXJhbSAge3N0cmluZ30gcHJlZml4ICAgIOWMheWQq+eahOWtl+espuS4slxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgb3RoZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5waWNrQXR0cnNXaXRoKEZvb0NvbXBvbmVudC5wcm9wVHlwZXMsICdkYXRhLScpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja0F0dHJzV2l0aCAoaG9sZFByb3BzLCBwcmVmaXgpIHtcbiAgICBjb25zdCBvdGhlcnMgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGhvbGRQcm9wcykge1xuICAgICAgICBpZiAoa2V5Lm1hdGNoKHByZWZpeCkpIHtcbiAgICAgICAgICAgIG90aGVyc1trZXldID0gaG9sZFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvb2JqZWN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==