webpackJsonp([4],{

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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(267);


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _button = __webpack_require__(64);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(65);

var _balloon = __webpack_require__(54);

var _balloon2 = _interopRequireDefault(_balloon);

__webpack_require__(60);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
        var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
            Object.defineProperty(obj, key, value);
        }
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            visible: false
        };
        return _this;
    }

    // triggered every time visible becomes false


    App.prototype.onClose = function onClose() {
        console.log('onClose doing!');
    };

    App.prototype.onClick = function onClick() {
        this.setState({ visible: true });
    };

    App.prototype.render = function render() {
        var visibleTrigger = React.createElement(_button2.default, { onClick: this.onClick.bind(this), type: 'primary' }, 'click to pupup the card');
        var content = React.createElement('div', null, 'content');

        return React.createElement('div', { style: { marginBottom: '100px' } }, React.createElement(_balloon2.default, { trigger: visibleTrigger,
            triggerType: 'click',
            visible: this.state.visible,
            onClose: this.onClose.bind(this) }, content));
    };

    return App;
}(React.Component);

App.displayName = 'App';

ReactDOM.render(React.createElement(App, null), mountNode);

// HOT RELOAD CODE
var componentDesc = document.querySelector('#component-desc');
componentDesc.innerHTML = '\u4F7F\u7528  <code>visible</code> ,\u5C5E\u6027\u63A7\u5236\u6D6E\u5C42\u663E\u793A, \u4F7Fballoon\u53D8\u4E3A\u53D7\u9650\u7EC4\u4EF6\u3002';
var componentBody = document.querySelector('#component-body');
componentBody.innerHTML = '<pre><code class="language-jsx"><div class="hljs"><span class="hljs-keyword">import</span> { Button, Balloon } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@alifd/next\'</span>;\n\n\n\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n    <span class="hljs-keyword">constructor</span>(props) {\n        <span class="hljs-keyword">super</span>(props);\n        <span class="hljs-keyword">this</span>.state = {\n            <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>\n        };\n    }\n\n    <span class="hljs-comment">// triggered every time visible becomes false</span>\n    onClose() {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onClose doing!\'</span>);\n    }\n\n    onClick() {\n        <span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">visible</span>: <span class="hljs-literal">true</span>});\n    }\n\n    render() {\n        <span class="hljs-keyword">const</span> visibleTrigger = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{this.onClick.bind(this)}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>click to pupup the card<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n        <span class="hljs-keyword">const</span> content = (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>);\n\n        <span class="hljs-keyword">return</span> (\n            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{marginBottom:</span> \'<span class="hljs-attr">100px</span>\'}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{visibleTrigger}</span>\n                    <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span>\n                    <span class="hljs-attr">visible</span>=<span class="hljs-string">{this.state.visible}</span>\n                    <span class="hljs-attr">onClose</span>=<span class="hljs-string">{this.onClose.bind(this)}</span> &gt;</span>\n                    {content}\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n        );\n    }\n}\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>, mountNode);\n\n</span></div></code></pre>\n'.replace(/{backquote}/g, '`').replace(/{dollar}/g, '$');

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

},[266]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9tYWluLnNjc3M/NzAyMiIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS91dGlscy9maW5kLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vaW5uZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2FsaWduTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL21haW4uc2Nzcz9lYmE4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21haW4uc2Nzcz8yYzZkIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL21haW4uc2Nzcz84ZTNiIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL21haW4uc2Nzcz8wYWQ0Iiwid2VicGFjazovLy8uL3NyYy9pY29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cubW9tZW50XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9nZXQtY29udGV4dC1wcm9wcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZG9tLmpzIiwid2VicGFjazovLy8uL2RvY3MvYmFsbG9vbi9kZW1vL29uQ2xvc2VDbGljay5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2tleWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jbGFzc25hbWVzQDIuMi42QGNsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvb3ZlcmxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvZ2F0ZXdheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvcG9zaXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX29iamVjdC1hc3NpZ25ANC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbmZpZy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19ob2lzdC1ub24tcmVhY3Qtc3RhdGljc0AyLjUuNUBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9mb2N1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ndWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvY29uc3VtZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWctcHJvdmlkZXIvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2JhbGxvb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvdXRpbHMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvcG9wdXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL3Rvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9idXR0b24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi92aWV3L2J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi92aWV3L2dyb3VwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImZpbmROb2RlIiwidGFyZ2V0IiwicGFyYW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZXJyIiwibm9vcCIsImZ1bmMiLCJCYWxsb29uSW5uZXIiLCJyZW5kZXIiLCJwcm9wcyIsInByZWZpeCIsImNsb3NhYmxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpc1Rvb2x0aXAiLCJhbGlnbiIsInR5cGUiLCJvbkNsb3NlIiwiYWxpZ25FZGdlIiwiY2hpbGRyZW4iLCJydGwiLCJvdGhlcnMiLCJhbGlnbk1hcCIsImVkZ2VNYXAiLCJub3JtYWxNYXAiLCJfcHJlZml4IiwiY2xhc3NlcyIsImFycm93IiwidW5kZWZpbmVkIiwib2JqIiwicGlja090aGVycyIsIk9iamVjdCIsImtleXMiLCJwcm9wVHlwZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJhbnkiLCJwdXJlIiwiZGVmYXVsdFByb3BzIiwidCIsInJ0bEFsaWduIiwidHJPcmlnaW4iLCJydGxUck9yaWdpbiIsIm9mZnNldCIsInIiLCJiIiwibCIsInRsIiwidHIiLCJydCIsInJiIiwiYmwiLCJiciIsImx0IiwibGIiLCJPdmVybGF5IiwiR2F0ZXdheSIsIlBvc2l0aW9uIiwiUG9wdXAiLCJDb25maWdQcm92aWRlciIsImNvbmZpZyIsImV4cG9ydE5hbWVzIiwiX2RvbSIsIl9lbnYiLCJfZXZlbnRzIiwiX2Z1bmMiLCJfbG9nIiwiX29iamVjdCIsIl9zdHJpbmciLCJfc3VwcG9ydCIsIl9mb2N1cyIsImRvbSIsImV2ZW50cyIsImxvZyIsInN0ciIsInN1cHBvcnQiLCJmb2N1cyIsImd1aWQiLCJfZ3VpZCIsIktFWUNPREUiLCJfS0VZQ09ERSIsIkljb24iLCJzaXplIiwib3RoZXIiLCJpbmRleE9mIiwiZGlyIiwib25lT2YiLCJfdHlwZU1hcmsiLCJnZXRDb250ZXh0UHJvcHMiLCJjb250ZXh0IiwiZGlzcGxheU5hbWUiLCJsb2NhbGUiLCJuZXh0UHJlZml4IiwibmV4dExvY2FsZSIsIm5leHRQdXJlIiwibmV4dFdhcm5pbmciLCJuZXh0UnRsIiwibmV3UHJlZml4IiwibG9jYWxlRnJvbUNvbnRleHQiLCJtb21lbnRMb2NhbGUiLCJuZXdMb2NhbGUiLCJuZXdQdXJlIiwibmV3UnRsIiwid2FybmluZyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZ2V0U3R5bGUiLCJzZXRTdHlsZSIsInNjcm9sbGJhciIsImdldE9mZnNldCIsImhhc0RPTSIsIndpbmRvdyIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfZm9yY2UiLCJhZGQiLCJyZW1vdmUiLCJyZXBsYWNlIiwidHJpbSIsInRvZ2dsZSIsImZsYWciLCJtYXRjaGVzIiwibWF0Y2hlc0ZuIiwiX2JvZHkiLCJib2R5IiwiaGVhZCIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwic2VsZWN0b3IiLCJfZ2V0Q29tcHV0ZWRTdHlsZSIsIm5vZGVUeXBlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBJWEVMX1BBVFRFUk4iLCJyZW1vdmVQaXhlbCIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIl9nZXRTdHlsZVZhbHVlIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwidGVzdCIsInBhcnNlRmxvYXQiLCJmbG9hdE1hcCIsImNzc0Zsb2F0Iiwic3R5bGVGbG9hdCIsImZsb2F0IiwibmFtZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJ2YWwiLCJrZXkiLCJzY3JvbGxEaXYiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxiYXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyZW1vdmVDaGlsZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW4iLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiQXBwIiwidmlzaWJsZSIsImNvbnNvbGUiLCJvbkNsaWNrIiwidmlzaWJsZVRyaWdnZXIiLCJjb250ZW50IiwibWFyZ2luQm90dG9tIiwiUmVhY3RET00iLCJjb21wb25lbnREZXNjIiwiY29tcG9uZW50Qm9keSIsInJlbG9hZGluZyIsInN0YXR1cyIsImNhbWVsY2FzZSIsImh5cGhlbmF0ZSIsIiQwIiwiJDEiLCJ0b1VwcGVyQ2FzZSIsImllVmVyc2lvbiIsImRvY3VtZW50TW9kZSIsImlzUHJvZHVjdGlvbiIsIlBST0RVQ1RJT05fRU5WIiwicmVzdWx0IiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0MiLCJTUEFDRSIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJFU0NBUEUiLCJMRUZUX0FSUk9XIiwiVVBfQVJST1ciLCJSSUdIVF9BUlJPVyIsIkRPV05fQVJST1ciLCJDT05UUk9MIiwiT1BUSU9OIiwiQ01EIiwiQ09NTUFORCIsIkRFTEVURSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImkiLCJhcmciLCJhcmdUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJjYWxsIiwiam9pbiIsImRlZmF1bHQiLCJkZWZpbmUiLCJzYXZlTGFzdEZvY3VzTm9kZSIsImdldEZvY3VzTm9kZUxpc3QiLCJiYWNrTGFzdEZvY3VzTm9kZSIsIm1ha2VDaGFpbiIsImJpbmRDdHgiLCJpc1Njcm9sbERpc3BsYXkiLCJlbGVtZW50Iiwic2Nyb2xsYmFyU3R5bGUiLCJlIiwiaGFzU2Nyb2xsIiwiZG9jIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwicHJlZml4ZXMiLCJnZXRTdHlsZVByb3BlcnR5IiwicmV0IiwibW9kYWxzIiwiYm9keU92ZXJmbG93WSIsImJvZHlQYWRkaW5nUmlnaHQiLCJzYXZlQ29udGVudFJlZiIsInJlZiIsImNvbnRlbnRSZWYiLCJzYXZlR2F0ZXdheVJlZiIsImdhdGV3YXlSZWYiLCJzdGF0ZSIsImFuaW1hdGlvbiIsImdldEFuaW1hdGlvbiIsImxhc3RBbGlnbiIsInRpbWVvdXRNYXAiLCJjb21wb25lbnRXaWxsTW91bnQiLCJiZWZvcmVPcGVuIiwiZW50ZXIiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImFkZERvY3VtZW50RXZlbnRzIiwib3ZlcmxheU1hbmFnZXIiLCJhZGRPdmVybGF5IiwiX2lzTW91bnRlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ3aWxsT3BlbiIsIndpbGxDbG9zZSIsImJlZm9yZUNsb3NlIiwic2V0U3RhdGUiLCJsZWF2ZSIsInByZXZQcm9wcyIsIm9wZW4iLCJjbG9zZSIsImFkZEFuaW1hdGlvbkV2ZW50cyIsIndyYXBwZXJOb2RlIiwiZ2V0V3JhcHBlck5vZGUiLCJzZXRUaW1lb3V0Iiwib25PcGVuIiwiYWZ0ZXJPcGVuIiwiYWZ0ZXJDbG9zZSIsInJlbW92ZU92ZXJsYXkiLCJzZXRGb2N1c05vZGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9pc0Rlc3Ryb3llZCIsInJlbW92ZURvY3VtZW50RXZlbnRzIiwiZm9jdXNUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2FuaW1hdGlvbiIsIm9mZiIsImdldEFuaW1hdGlvbkJ5QWxpZ24iLCJpbiIsIm91dCIsImdldENvbnRlbnROb2RlIiwiaWQiLCJvbiIsImVuZCIsImhhbmRsZUFuaW1hdGVFbmQiLCJiaW5kIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsInRpbWUiLCJoYW5kbGVQb3NpdGlvbiIsIm5lZWRBZGp1c3QiLCJvbkxlYXZlZCIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkxlYXZpbmciLCJkaXNhYmxlU2Nyb2xsIiwib3ZlcmZsb3dZIiwicGFkZGluZ1JpZ2h0IiwiaW5kZXgiLCJzcGxpY2UiLCJhdXRvRm9jdXMiLCJfaGFzRm9jdXNlZCIsImZvY3VzTm9kZUxpc3QiLCJnZXRDb250ZW50IiwiZ2V0Q2hpbGROb2RlIiwiY2FuQ2xvc2VCeUVzYyIsIl9rZXlkb3duRXZlbnRzIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwiY2FuQ2xvc2VCeU91dFNpZGVDbGljayIsIl9jbGlja0V2ZW50cyIsImhhbmRsZURvY3VtZW50Q2xpY2siLCJrZXlDb2RlIiwiaXNDdXJyZW50T3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwic2FmZU5vZGUiLCJzYWZlTm9kZXMiLCJ1bnNoaWZ0IiwiaGFuZGxlTWFza0NsaWNrIiwiY2FuQ2xvc2VCeU1hc2siLCJnZXRJbnN0YW5jZSIsInByb3BDaGlsZHJlbiIsImNvbnRhaW5lciIsImhhc01hc2siLCJiZWZvcmVQb3NpdGlvbiIsIm9uUG9zaXRpb24iLCJ3cmFwcGVyU3R5bGUiLCJwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb24iLCJzaG91bGRVcGRhdGVQb3NpdGlvbiIsImNhY2hlIiwid3JhcHBlckNsYXNzTmFtZSIsIm9uTWFza01vdXNlRW50ZXIiLCJvbk1hc2tNb3VzZUxlYXZlIiwic3RhdGVWaXNpYmxlIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZENsYXp6IiwiRXJyb3IiLCJjbG9uZUVsZW1lbnQiLCJ3cmFwcGVyQ2xhenoiLCJuZXdXcmFwcGVyU3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwiYXJyYXkiLCJWSUVXUE9SVCIsInNhdmVDaGlsZFJlZiIsImNvbnRhaW5lck5vZGUiLCJnZXRDb250YWluZXJOb2RlIiwiZm9yY2VVcGRhdGUiLCJ0YXJnZXROb2RlIiwicGxhY2UiLCJzZXRQb3NpdGlvbiIsIm5lZWRMaXN0ZW5SZXNpemUiLCJoYW5kbGVSZXNpemUiLCJyZXNpemVUaW1lb3V0IiwiY29udGVudE5vZGUiLCJnZXRUYXJnZXROb2RlIiwicmVzdWx0QWxpZ24iLCJwaW5FbGVtZW50IiwiYmFzZUVsZW1lbnQiLCJpc1J0bCIsInNwbGl0IiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJwcmludFdhcm5pbmciLCJ0ZXh0IiwibWVzc2FnZSIsImVycm9yIiwieCIsImVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsIm51bWJlciIsInN5bWJvbCIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsInN0YWNrIiwicHJvdG90eXBlIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiY29uc3RydWN0b3IiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwibWFwIiwibiIsInRlc3QzIiwiZm9yRWFjaCIsImxldHRlciIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsImVtcHR5RnVuY3Rpb24iLCJzaGltIiwiZ2V0U2hpbSIsImluaXRMb2NhbGVzIiwic2V0TGFuZ3VhZ2UiLCJzZXRMb2NhbGUiLCJzZXREaXJlY3Rpb24iLCJnZXRMb2NhbGUiLCJnZXRMYW5ndWFnZSIsImdldERpcmVjdGlvbiIsInNoYWxsb3dFcXVhbCIsImdldERpc3BsYXlOYW1lIiwiZ2xvYmFsTG9jYWxlcyIsImN1cnJlbnRHbG9iYWxMYW5ndWFnZSIsImN1cnJlbnRHbG9iYWxMb2NhbGUiLCJjdXJyZW50R2xvYmFsUnRsIiwibG9jYWxlcyIsImxhbmd1YWdlIiwib3B0aW9ucyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRTdGF0ZSIsIkNvbmZpZ2VkQ29tcG9uZW50IiwiX2dldEluc3RhbmNlIiwiX2RlcHJlY2F0ZWQiLCJfaW5zdGFuY2UiLCJmaWVsZCIsImRlcHJlY2F0ZWQiLCJjb250ZXh0UHJvcHMiLCJuZXdDb250ZXh0UHJvcHMiLCJyZWR1Y2UiLCJuZXdPdGhlcnMiLCJ0cmFuc2Zvcm0iLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJtaXhpbnMiLCJLTk9XTl9TVEFUSUNTIiwiY2FsbGVyIiwiY2FsbGVlIiwiYXJpdHkiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG90eXBlIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJibGFja2xpc3QiLCJpbmhlcml0ZWRDb21wb25lbnQiLCJjb25jYXQiLCJkZXNjcmlwdG9yIiwib25jZSIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX19mbiIsImFyZ3MiLCJwcm9taXNlQ2FsbCIsImZucyIsImNoYWluZWRGdW5jdGlvbiIsImoiLCJjdHgiLCJucyIsImZuTmFtZSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwidGhlbiIsImNhdGNoIiwiaW5zdGVhZCIsImNvbXBvbmVudCIsIm1zZyIsImFuaW1hdGlvbkVuZEV2ZW50TmFtZXMiLCJXZWJraXRBbmltYXRpb24iLCJPQW5pbWF0aW9uIiwidHJhbnNpdGlvbkV2ZW50TmFtZXMiLCJXZWJraXRUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiX3N1cHBvcnRFbmQiLCJuYW1lcyIsImVsIiwiX3N1cHBvcnRDU1MiLCJpdGVtIiwiZmxleCIsImNsZWFyTGFzdEZvY3VzTm9kZSIsImxpbWl0VGFiUmFuZ2UiLCJfaXNWaXNpYmxlIiwidmlzaWJpbGl0eSIsInBhcmVudE5vZGUiLCJfaXNGb2N1c2FibGUiLCJub2RlTmFtZSIsInRhYkluZGV4IiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJoYXNUYWJJbmRleCIsImlzTmFOIiwiZGlzYWJsZWQiLCJyZXMiLCJub2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXRob2QiLCJsYXN0Rm9jdXNFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInRhYk5vZGVMaXN0IiwibWF4SW5kZXgiLCJ0YXJnZXRJbmRleCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJ0aW1lc3RhbXAiLCJ0b1N0cmluZyIsIm5vdyIsImNoaWxkQ29udGV4dENhY2hlIiwiQ2FjaGUiLCJnZXQiLCJnZXRDaGlsZENvbnRleHQiLCJzZXRNb21lbnRMb2NhbGUiLCJtb21lbnQiLCJyb290IiwiQ29uc3VtZXIiLCJnZXRDb250ZXh0IiwibWFwS2V5cyIsImZuIiwibmV3S2V5IiwicmVwbGFjZUtleSIsIm1hdGNoIiwicDEiLCJwMiIsInRyYW5zZm9ybUNvbnRleHQiLCJfcm9vdCIsIl9zdG9yZSIsIk1hcCIsImVtcHR5IiwiaGFzIiwiZGVmYXVsdFZhbHVlIiwic2V0IiwidXBkYXRlIiwiZGVsZXRlIiwibG9jYWxzIiwiaG90IiwiYWNjZXB0IiwibmV3Q29udGVudCIsImRpc3Bvc2UiLCJjc3MiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwibyIsIm5ld1VybCIsIkJhbGxvb24iLCJUb29sdGlwIiwiSW5uZXIiLCJhbGlnbm1lbnQiLCJvbkNsb3NlQ2xpY2siLCJvblZpc2libGVDaGFuZ2UiLCJuZXdPblZpc2libGVDaGFuZ2UiLCJyZWFzb24iLCJkZWZhdWx0VmlzaWJsZSIsIl9vbkNsb3NlIiwiX29uUG9zaXRpb24iLCJfb25WaXNpYmxlQ2hhbmdlIiwiX2NvbnRlbnRJZCIsInRyaWdnZXIiLCJuZXdBbGlnbiIsInJlc0FsaWduIiwiYWxpZ25LZXkiLCJ0cmlnZ2VyVHlwZSIsImRlbGF5Iiwic2FmZUlkIiwib25Ib3ZlciIsInBvcHVwQ29udGFpbmVyIiwicG9wdXBTdHlsZSIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBQcm9wcyIsIl9vZmZzZXQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJfc3R5bGUiLCJ0cmlnZ2VyUHJvcHMiLCJuZXdUcmlnZ2VyIiwiYWxsT3ZlcmxheXMiLCJvdmVybGF5IiwiZ2V0UGFnZVgiLCJzY3JvbGxMZWZ0IiwiZ2V0UGFnZVkiLCJzY3JvbGxUb3AiLCJfZ2V0RWxlbWVudFJlY3QiLCJlbGVtIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIl9nZXRWaWV3cG9ydFNpemUiLCJleHBlY3RlZEFsaWduIiwiX2dldEV4cGVjdGVkQWxpZ24iLCJpc1BpbkZpeGVkIiwiaXNCYXNlRml4ZWQiLCJmaXJzdFBvc2l0aW9uUmVzdWx0IiwicGluRWxlbWVudFBvaW50cyIsIl9ub3JtYWxpemVQb3NpdGlvbiIsImJhc2VFbGVtZW50UG9pbnRzIiwicGluRWxlbWVudFBhcmVudE9mZnNldCIsIl9nZXRQYXJlbnRPZmZzZXQiLCJiYXNlRWxlbWVudE9mZnNldCIsIl9nZXRMZWZ0VG9wIiwiX3NldFBpbkVsZW1lbnRQb3N0aW9uIiwiX2lzSW5WaWV3cG9ydCIsImluVmlld3BvcnRMZWZ0IiwiX21ha2VFbGVtZW50SW5WaWV3cG9ydCIsImluVmlld3BvcnRUb3AiLCJwYXJlbnQiLCJfZ2V0RWxlbWVudE9mZnNldCIsImRvY0VsZW1lbnQiLCJNYXRoIiwibWF4IiwicG9pbnRzIiwiX25vcm1hbGl6ZUVsZW1lbnQiLCJfbm9ybWFsaXplWFkiLCJfeHlDb252ZXJ0ZXIiLCJtIiwiZCIsImlzVmlld3BvcnQiLCJkb2NDbGllbnRMZWZ0IiwiY2xpZW50TGVmdCIsImRvY0NsaWVudFRvcCIsImNsaWVudFRvcCIsIl9yZXBsYWNlQWxpZ25EaXIiLCJjIiwicmVnRXhwIiwidmlld3BvcnRTaXplIiwiZWxlbWVudFJlY3QiLCJwb3N0aW9uIiwib2Zmc2V0UGFyZW50V2lkdGgiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiaGFuZGxlVHJpZ2dlckNsaWNrIiwiY2FuQ2xvc2VCeVRyaWdnZXIiLCJoYW5kbGVUcmlnZ2VyS2V5RG93biIsImhhbmRsZVRyaWdnZXJNb3VzZUVudGVyIiwiX21vdXNlTm90Rmlyc3RPbk1hc2siLCJfaGlkZVRpbWVyIiwiX3Nob3dUaW1lciIsImhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlIiwiaGFuZGxlVHJpZ2dlckZvY3VzIiwiaGFuZGxlVHJpZ2dlckJsdXIiLCJfaXNGb3J3YXJkQ29udGVudCIsImhhbmRsZUNvbnRlbnRNb3VzZURvd24iLCJoYW5kbGVDb250ZW50TW91c2VFbnRlciIsImhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlIiwiaGFuZGxlTWFza01vdXNlRW50ZXIiLCJoYW5kbGVNYXNrTW91c2VMZWF2ZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsInJlbmRlclRyaWdnZXIiLCJ0cmlnZ2VyVHlwZXMiLCJvbktleURvd24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkZvY3VzIiwib25CbHVyIiwicmVuZGVyQ29udGVudCIsIm9uTW91c2VEb3duIiwicmVuZGVyUG9ydGFsIiwiZm9sbG93VHJpZ2dlciIsImZpbmRUcmlnZ2VyTm9kZSIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhIiwiQnV0dG9uIiwiR3JvdXAiLCJCdXR0b25Hcm91cCIsIm5ld1R5cGUiLCJnaG9zdCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJub3JtYWwiLCJkYXJrIiwibGlnaHQiLCJtYXBJY29uU2l6ZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJvbk1vdXNlVXAiLCJidXR0b24iLCJibHVyIiwiYnV0dG9uUmVmSGFuZGxlciIsImh0bWxUeXBlIiwibG9hZGluZyIsImljb25TaXplIiwiZ2hvc3RUeXBlIiwiYnRuQ2xzIiwiY291bnQiLCJjbG9uZWRDaGlsZHJlbiIsImljb25DbHMiLCJUYWdOYW1lIiwidGFnQXR0cnMiLCJocmVmIiwiZ3JvdXBDbHMiLCJjbG9uZUNoaWxkcmVuIiwidHlwZU9mIiwiaXNBcnJheUxpa2UiLCJpc1Byb21pc2UiLCJpc1BsYWluT2JqZWN0IiwiZWFjaCIsInBpY2tBdHRyc1dpdGgiLCJjdG9yIiwicHJvdCIsIm9iakEiLCJvYmpCIiwiY29tcGFyZSIsImtleUEiLCJrZXlCIiwibGVuIiwiaGFzQ2FsbGJhY2siLCJ2YWxBIiwidmFsQiIsImRpcmVjdGlvbiIsInJldmVyc2VkIiwiX2lzSW5PYmoiLCJob2xkUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOEI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0EsSUFBSUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLE1BQUlDLHFCQUFzQixPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQ3hCQSxPQUFPQyxHQURpQixJQUV4QkQsT0FBT0MsR0FBUCxDQUFXLGVBQVgsQ0FGdUIsSUFHdkIsTUFIRjs7QUFLQSxNQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLE1BQVQsRUFBaUI7QUFDcEMsV0FBTyxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQ0xBLFdBQVcsSUFETixJQUVMQSxPQUFPQyxRQUFQLEtBQW9CTCxrQkFGdEI7QUFHRCxHQUpEOztBQU1BO0FBQ0E7QUFDQSxNQUFJTSxzQkFBc0IsSUFBMUI7QUFDQUMsU0FBT0MsT0FBUCxHQUFpQkMsbUJBQU9BLENBQUMsRUFBUixFQUFxQ04sY0FBckMsRUFBcURHLG1CQUFyRCxDQUFqQjtBQUNELENBaEJELE1BZ0JPO0FBQ0w7QUFDQTtBQUNBQyxTQUFPQyxPQUFQLEdBQWlCQyxtQkFBT0EsQ0FBQyxFQUFSLEdBQWpCO0FBQ0QsQzs7Ozs7Ozs7O0FDM0JEOzs7Ozs7O0FBT2E7O0FBRWIsSUFBSUMsdUJBQXVCLDhDQUEzQjs7QUFFQUgsT0FBT0MsT0FBUCxHQUFpQkUsb0JBQWpCLEM7Ozs7Ozs7QUNYQSwyQkFBMkIsbUJBQU8sQ0FBQyxDQUFtRTtBQUN0Rzs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLGlM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QUVELFdBQU92SCxHQUFQO0FBQ0g7O0FBRUQ7QUFDQSxJQUFNMnlCLFdBQVcsU0FBWEEsUUFBVyxDQUFDcnFCLEdBQUQsRUFBTXRJLEdBQU4sRUFBVytNLE9BQVg7QUFBQSxXQUF1QkEsVUFBVy9NLElBQUkyRCxPQUFKLENBQVkyRSxHQUFaLElBQW1CLENBQUMsQ0FBL0IsR0FBc0NBLE9BQU90SSxHQUFwRTtBQUFBLENBQWpCOztBQUVBOzs7Ozs7Ozs7O0FBVU8sU0FBU0MsVUFBVCxDQUFxQjJ5QixTQUFyQixFQUFnQ2gwQixLQUFoQyxFQUF1QztBQUMxQyxRQUFNWSxTQUFTLEVBQWY7QUFDQSxRQUFNdU4sVUFBVXlrQixPQUFPb0IsU0FBUCxNQUFzQixPQUF0Qzs7QUFFQSxTQUFLLElBQU10cUIsR0FBWCxJQUFrQjFKLEtBQWxCLEVBQXlCO0FBQ3JCLFlBQUksQ0FBQyt6QixTQUFTcnFCLEdBQVQsRUFBY3NxQixTQUFkLEVBQXlCN2xCLE9BQXpCLENBQUwsRUFBd0M7QUFDcEN2TixtQkFBTzhJLEdBQVAsSUFBYzFKLE1BQU0wSixHQUFOLENBQWQ7QUFDSDtBQUNKOztBQUVELFdBQU85SSxNQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztBQVNPLFNBQVNxeUIsYUFBVCxDQUF3QmUsU0FBeEIsRUFBbUMvekIsTUFBbkMsRUFBMkM7QUFDOUMsUUFBTVcsU0FBUyxFQUFmOztBQUVBLFNBQUssSUFBTThJLEdBQVgsSUFBa0JzcUIsU0FBbEIsRUFBNkI7QUFDekIsWUFBSXRxQixJQUFJbWQsS0FBSixDQUFVNW1CLE1BQVYsQ0FBSixFQUF1QjtBQUNuQlcsbUJBQU84SSxHQUFQLElBQWNzcUIsVUFBVXRxQixHQUFWLENBQWQ7QUFDSDtBQUNKOztBQUVELFdBQU85SSxNQUFQO0FBQ0gsQyIsImZpbGUiOiIvVXNlcnMvemhhb2d1b3lhbi9naXRodWIvcHViL2RvY3MvYmFsbG9vbi9kZW1vL29uQ2xvc2VDbGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LWljb25bZGlyPVxcXCJydGxcXFwiXTo6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTmV4dEljb247XFxuICBzcmM6IHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLmVvdFxcXCIpO1xcbiAgc3JjOiB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIuc3ZnI05leHRJY29uXFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTsgfVxcblxcbi5uZXh0LWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IE5leHRJY29uO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XFxuICAubmV4dC1pY29uOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubmV4dC1pY29uLXNtaWxlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1RlxcXCI7IH1cXG4gIC5uZXh0LWljb24tY3J5OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1RFxcXCI7IH1cXG4gIC5uZXh0LWljb24tc3VjY2VzczpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MEFcXFwiOyB9XFxuICAubmV4dC1pY29uLXdhcm5pbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBCXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1wcm9tcHQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBDXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lcnJvcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MERcXFwiOyB9XFxuICAubmV4dC1pY29uLWhlbHA6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjczXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jbG9jazpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjFcXFwiOyB9XFxuICAubmV4dC1pY29uLXN1Y2Nlc3MtZmlsbGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2M0FcXFwiOyB9XFxuICAubmV4dC1pY29uLWRlbGV0ZS1maWxsaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyM1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZmF2b3JpdGVzLWZpbGxpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBFXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hZGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1taW51czpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MDFcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LXVwOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyNVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2M0RcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjFEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MTlcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1OVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1RVxcXCI7IH1cXG4gIC5uZXh0LWljb24tc3dpdGNoOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTZCM1xcXCI7IH1cXG4gIC5uZXh0LWljb24tc29ydGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzRcXFwiOyB9XFxuICAubmV4dC1pY29uLWRlc2NlbmRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjFGXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hc2NlbmRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjFFXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZWxlY3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjMyXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZW1pLXNlbGVjdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzNcXFwiOyB9XFxuICAubmV4dC1pY29uLXNlYXJjaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTZcXFwiOyB9XFxuICAubmV4dC1pY29uLWNsb3NlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyNlxcXCI7IH1cXG4gIC5uZXh0LWljb24tZWxsaXBzaXM6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU0XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1waWN0dXJlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzMVxcXCI7IH1cXG4gIC5uZXh0LWljb24tY2FsZW5kYXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA3XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hc2hiaW46YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjM5XFxcIjsgfVxcbiAgLm5leHQtaWNvbi11cGxvYWQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFN0VFXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kb3dubG9hZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjhcXFwiOyB9XFxuICAubmV4dC1pY29uLXNldDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2ODNcXFwiOyB9XFxuICAubmV4dC1pY29uLWVkaXQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNCXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1yZWZyZXNoOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY3N1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZmlsdGVyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyN1xcXCI7IH1cXG4gIC5uZXh0LWljb24tYXR0YWNobWVudDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NjVcXFwiOyB9XFxuICAubmV4dC1pY29uLWFjY291bnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA4XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lbWFpbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MDVcXFwiOyB9XFxuICAubmV4dC1pY29uLWF0bTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MDZcXFwiOyB9XFxuICAubmV4dC1pY29uLWxvYWRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjQ2XFxcIjtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXh4czpiZWZvcmUge1xcbiAgd2lkdGg6IDhweDtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG5AbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcXG4gIC5uZXh0LWljb24ubmV4dC14eHMge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtNHB4OyB9XFxuICAgIC5uZXh0LWljb24ubmV4dC14eHM6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7IH0gfVxcblxcbi5uZXh0LWljb24ubmV4dC14czpiZWZvcmUge1xcbiAgd2lkdGg6IDEycHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC1zbWFsbDpiZWZvcmUge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC1tZWRpdW06YmVmb3JlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtbGFyZ2U6YmVmb3JlIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteGw6YmVmb3JlIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHhsOmJlZm9yZSB7XFxuICB3aWR0aDogNDhweDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXh4eGw6YmVmb3JlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2ljb24vbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZE5vZGUodGFyZ2V0LCBwYXJhbSkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQocGFyYW0pO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0YXJnZXQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3V0aWxzL2ZpbmQtbm9kZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2Z1bmMsIG9ian0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCB7bm9ybWFsTWFwLCBlZGdlTWFwfSBmcm9tICcuL2FsaWduTWFwJztcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHhpYWNoaSBvbiAxNy8yLzEwLlxuICovXG5cbmNvbnN0IHtub29wfSA9IGZ1bmM7XG5cbmNsYXNzIEJhbGxvb25Jbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfVxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpc1Rvb2x0aXA6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH1cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgICBvbkNsb3NlOiBub29wLFxuICAgICAgICBhbGlnbjogJ2InLFxuICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgYWxpZ25FZGdlOiBmYWxzZSxcbiAgICAgICAgcHVyZTogZmFsc2VcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cHJlZml4LCBjbG9zYWJsZSwgY2xhc3NOYW1lLCBzdHlsZSwgaXNUb29sdGlwLCBhbGlnbiwgdHlwZSwgb25DbG9zZSwgYWxpZ25FZGdlLCBjaGlsZHJlbiwgcnRsLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBhbGlnbk1hcCA9IGFsaWduRWRnZSA/IGVkZ2VNYXAgOiBub3JtYWxNYXA7XG4gICAgICAgIGxldCBfcHJlZml4ID0gcHJlZml4O1xuXG4gICAgICAgIGlmIChpc1Rvb2x0aXApIHtcbiAgICAgICAgICAgIF9wcmVmaXggPSBgJHtfcHJlZml4fWJhbGxvb24tdG9vbHRpcGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcHJlZml4ID0gYCR7X3ByZWZpeH1iYWxsb29uYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fWBdOiB0cnVlLFxuICAgICAgICAgICAgW2Ake19wcmVmaXh9LSR7dHlwZX1gXTogdHlwZSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS1tZWRpdW1gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS0ke2FsaWduTWFwW2FsaWduXS5hcnJvd31gXTogYWxpZ25NYXBbYWxpZ25dLFxuICAgICAgICAgICAgW2Ake19wcmVmaXh9LWNsb3NhYmxlYF06IGNsb3NhYmxlLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgcm9sZT1cInRvb2x0aXBcIiBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfSBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0gey4uLm9iai5waWNrT3RoZXJzKE9iamVjdC5rZXlzKEJhbGxvb25Jbm5lci5wcm9wVHlwZXMpLCBvdGhlcnMpfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbG9zYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT17YCR7X3ByZWZpeH0tY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2xvc2VcIiBzaXplPVwic21hbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT4gOiBudWxsfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsbG9vbklubmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vaW5uZXIuanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHhpYWNoaSBvbiAxNy8xLzE3LlxuICovXG5cbmNvbnN0IG5vcm1hbE1hcCA9IHtcbiAgICB0OiB7XG4gICAgICAgIGFsaWduOiAnYmMgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdjciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGI6IHtcbiAgICAgICAgYWxpZ246ICd0YyBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGMgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGw6IHtcbiAgICAgICAgYWxpZ246ICdjciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnY2wgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIHRsOiB7XG4gICAgICAgIGFsaWduOiAnYnIgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JsIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFsyMCwgLTEyXVxuICAgIH0sXG4gICAgdHI6IHtcbiAgICAgICAgYWxpZ246ICdibCB0YycsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgdGMnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTIwLCAtMTJdXG4gICAgfSxcbiAgICBydDoge1xuICAgICAgICBhbGlnbjogJ2JsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMjBdXG4gICAgfSxcbiAgICByYjoge1xuICAgICAgICBhbGlnbjogJ3RsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgLTIwXVxuICAgIH0sXG4gICAgYmw6IHtcbiAgICAgICAgYWxpZ246ICd0ciBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcC1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzIwLCAxMl1cbiAgICB9LFxuICAgIGJyOiB7XG4gICAgICAgIGFsaWduOiAndGwgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RyIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWy0yMCwgMTJdXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICBhbGlnbjogJ2JyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAyMF1cbiAgICB9LFxuICAgIGxiOiB7XG4gICAgICAgIGFsaWduOiAndHIgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ3RsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIC0yMF1cbiAgICB9XG59O1xuY29uc3QgZWRnZU1hcCA9IHtcbiAgICB0OiB7XG4gICAgICAgIGFsaWduOiAnYmMgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgcnRsQWxpZ246ICdjciBjbCcsXG4gICAgICAgIGFycm93OiAnbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGI6IHtcbiAgICAgICAgYWxpZ246ICd0YyBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndGMgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGw6IHtcbiAgICAgICAgYWxpZ246ICdjciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnY2wgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIHRsOiB7XG4gICAgICAgIGFsaWduOiAnYmwgdGwnLFxuICAgICAgICBydGxBbGlnbjogJ2JyIHRyJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHRyOiB7XG4gICAgICAgIGFsaWduOiAnYnIgdHInLFxuICAgICAgICBydGxBbGlnbjogJ2JsIHRsJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICBydDoge1xuICAgICAgICBhbGlnbjogJ3RsIHRyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciB0bCcsXG4gICAgICAgIGFycm93OiAnbGVmdC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIHJiOiB7XG4gICAgICAgIGFsaWduOiAnYmwgYnInLFxuICAgICAgICBydGxBbGlnbjogJ2JyIGJsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAwXVxuICAgIH0sXG4gICAgYmw6IHtcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgYnInLFxuICAgICAgICBhcnJvdzogJ3RvcC1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBicjoge1xuICAgICAgICBhbGlnbjogJ3RyIGJyJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCBibCcsXG4gICAgICAgIGFycm93OiAndG9wLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICBhbGlnbjogJ3RyIHRsJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCB0cicsXG4gICAgICAgIGFycm93OiAncmlnaHQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAwXVxuICAgIH0sXG4gICAgbGI6IHtcbiAgICAgICAgYWxpZ246ICdiciBibCcsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgYnInLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIG5vcm1hbE1hcCxcbiAgICBlZGdlTWFwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vYWxpZ25NYXAuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyB6b29tT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZEluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJbldpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogLjE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRJbldpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogLjE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZE91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZE91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXRXaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZE91dFdpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbi5mYWRlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnpvb21JbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnpvb21PdXQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRJbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluRG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRVcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZEluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRJblVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZE91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXREb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4ucHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWVudGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWVudGVyLWFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0OyB9XFxuICAuZXhwYW5kLWVudGVyLWFjdGl2ZSA+ICoge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbldpdGhGYWRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZXhwYW5kSW5XaXRoRmFkZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtbGVhdmUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7IH1cXG4gIC5leHBhbmQtbGVhdmUtYWN0aXZlID4gKiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFdpdGhGYWRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0V2l0aEZhZGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtb3ZlcmxheS13cmFwcGVyIC5uZXh0LW92ZXJsYXktaW5uZXIge1xcbiAgei1pbmRleDogMTAwMTsgfVxcblxcbi5uZXh0LW92ZXJsYXktd3JhcHBlciAubmV4dC1vdmVybGF5LWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi5uZXh0LW92ZXJsYXktd3JhcHBlci5vcGVuZWQgLm5leHQtb3ZlcmxheS1iYWNrZHJvcCB7XFxuICBvcGFjaXR5OiAwLjI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL292ZXJsYXkvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtYmFsbG9vbiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHotaW5kZXg6IDA7XFxuICAvKiBzaXplICovXFxuICAvKiDluKblhbPpl63mjInpkq7nmoTlj7PkvqdwYWRkaW5n5Y+Y5aSnICovIH1cXG4gIC5uZXh0LWJhbGxvb24gKixcXG4gIC5uZXh0LWJhbGxvb24gKjpiZWZvcmUsXFxuICAubmV4dC1iYWxsb29uICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IHtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGJvcmRlci1jb2xvcjogIzQ0OTRGOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uOmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSA6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5OmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDk0Rjk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcXG4gICAgICB6LWluZGV4OiAtMTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb24tbm9ybWFsIHtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGJvcmRlci1jb2xvcjogI0RDREVFMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uOmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzY2NjY2NjsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbDphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRENERUUzO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgei1pbmRleDogLTE7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm5leHQtYmFsbG9vbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7IH1cXG4gIC5uZXh0LWJhbGxvb24tY2xvc2FibGUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDQwcHggMTZweCAxNnB4OyB9XFxuXFxuLm5leHQtYmFsbG9vbi10b29sdGlwIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgei1pbmRleDogMDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgYm9yZGVyLWNvbG9yOiAjRENERUUzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgLyogc2l6ZSAqLyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKixcXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcCAqOmJlZm9yZSxcXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcCAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcDphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDREVFMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNztcXG4gICAgei1pbmRleDogLTE7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b206YWZ0ZXIge1xcbiAgICBib3R0b206IC03cHg7XFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdDphZnRlciB7XFxuICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IDEycHg7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgYm90dG9tOiAxMnB4O1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICB0b3A6IDEycHg7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1yaWdodDphZnRlciB7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBib3R0b206IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDsgfVxcblxcbi5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXSB7XFxuICAvKiDluKblhbPpl63mjInpkq7nmoTlj7PkvqdwYWRkaW5n5Y+Y5aSnICovIH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDEycHg7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogMTJweDsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1jbG9zYWJsZSB7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDQwcHg7IH1cXG5cXG4ubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXSB7XFxuICAvKiBzaXplICovIH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC10b3A6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLW1lZGl1bSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvYmFsbG9vbi9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IEdhdGV3YXkgZnJvbSAnLi9nYXRld2F5JztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwJztcblxuT3ZlcmxheS5HYXRld2F5ID0gR2F0ZXdheTtcbk92ZXJsYXkuUG9zaXRpb24gPSBQb3NpdGlvbjtcbk92ZXJsYXkuUG9wdXAgPSBDb25maWdQcm92aWRlci5jb25maWcoUG9wdXAsIHtcbiAgICBleHBvcnROYW1lczogWydvdmVybGF5J11cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoT3ZlcmxheSwge1xuICAgIGV4cG9ydE5hbWVzOiBbJ2dldENvbnRlbnQnLCAnZ2V0Q29udGVudE5vZGUnXVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9pbmRleC5qc3giLCJpbXBvcnQgKiBhcyBfZG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCAqIGFzIF9lbnYgZnJvbSAnLi9lbnYnO1xuaW1wb3J0ICogYXMgX2V2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBfZnVuYyBmcm9tICcuL2Z1bmMnO1xuaW1wb3J0ICogYXMgX2xvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgKiBhcyBfb2JqZWN0IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCAqIGFzIF9zdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0ICogYXMgX3N1cHBvcnQgZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCAqIGFzIF9mb2N1cyBmcm9tICcuL2ZvY3VzJztcbmltcG9ydCBfZ3VpZCBmcm9tICcuL2d1aWQnO1xuaW1wb3J0IF9LRVlDT0RFIGZyb20gJy4va2V5Y29kZSc7XG5cbmV4cG9ydCBjb25zdCBkb20gPSBfZG9tO1xuZXhwb3J0IGNvbnN0IGVudiA9IF9lbnY7XG5leHBvcnQgY29uc3QgZXZlbnRzID0gX2V2ZW50cztcbmV4cG9ydCBjb25zdCBmdW5jID0gX2Z1bmM7XG5leHBvcnQgY29uc3QgbG9nID0gX2xvZztcbmV4cG9ydCBjb25zdCBvYmogPSBfb2JqZWN0O1xuZXhwb3J0IGNvbnN0IHN0ciA9IF9zdHJpbmc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydCA9IF9zdXBwb3J0O1xuZXhwb3J0IGNvbnN0IGZvY3VzID0gX2ZvY3VzO1xuZXhwb3J0IGNvbnN0IGd1aWQgPSBfZ3VpZDtcbmV4cG9ydCBjb25zdCBLRVlDT0RFID0gX0tFWUNPREU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbmRleC5qcyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb24vc3R5bGUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LWJ0biB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJ0biAqLFxcbiAgLm5leHQtYnRuICo6YmVmb3JlLFxcbiAgLm5leHQtYnRuICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYnRuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAubmV4dC1idG4sIC5uZXh0LWJ0bjphY3RpdmUsIC5uZXh0LWJ0bjpmb2N1cywgLm5leHQtYnRuOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG4ubmV4dC1idG4ge1xcbiAgLyog5bC65a+457u05bqmICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKiDmma7pgJrmjInpkq4gKi9cXG4gIC8qIOaZrumAmuaAgeemgeeUqOagt+W8jyAqL1xcbiAgLyog6K2m5ZGK5oyJ6ZKuICovXFxuICAvKiDmlofmnKzmjInpkq4gKi9cXG4gIC8qIGxvYWRpbmcgKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qIOW5veeBteaMiemSriAqL1xcbiAgLyog57uE5ZCIICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIH1cXG4gIC5uZXh0LWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmV4dC1idG46YWZ0ZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7IH1cXG4gICAgLm5leHQtYnRuIC5uZXh0LWljb24ubmV4dC14czpiZWZvcmUge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcbiAgICAubmV4dC1idG4uaG92ZXIsIC5uZXh0LWJ0bjpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICBsZWZ0OiA4cHg7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGVmdDogMTJweDtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzZweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItY29sb3I6ICNDNEM2Q0Y7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbCwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpsaW5rLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOnZpc2l0ZWQsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpmb2N1cywgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbC5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDphY3RpdmUsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y3O1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0EwQTJBRDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODRGRjtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeSwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6bGluaywgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnkudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6Zm9jdXMsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6YWN0aXZlLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeS5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTcxRjc7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItY29sb3I6ICM1NTg0RkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeSwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpsaW5rLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICM1NTg0RkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpmb2N1cywgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeS5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTphY3RpdmUsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U3MUY3O1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzNFNzFGNztcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5kaXNhYmxlZCwgLm5leHQtYnRuW2Rpc2FibGVkXSB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgIGJvcmRlci1jb2xvcjogI0U2RTdFQjsgfVxcbiAgICAubmV4dC1idG4uZGlzYWJsZWQsIC5uZXh0LWJ0bi5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4uZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bltkaXNhYmxlZF0sIC5uZXh0LWJ0bltkaXNhYmxlZF06bGluaywgLm5leHQtYnRuW2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG5bZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgIC5uZXh0LWJ0bi5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4uZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bltkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bltkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bltkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bltkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG5bZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICNDQ0NDQ0M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4td2FybmluZyB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG4gICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzAwMDtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRjMwMDA7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNEQ0RFRTM7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRENERUUzO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGMzAwMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0ZGMzAwMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTZFN0VCO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0IHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHQuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0OmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5LCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjNTU4NEZGOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjM0U3MUY3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzY2NjY2NjsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeS5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICM1NTg0RkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6bGluaywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbC52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmZvY3VzLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbC5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmFjdGl2ZSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzU1ODRGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGJvcmRlci13aWR0aDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMDtcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGJvcmRlci13aWR0aDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICBwYWRkaW5nOiAwIDA7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBib3JkZXItd2lkdGg6IDA7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5kaXNhYmxlZCwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXSwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0NDQ0NDQzsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZy52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZy5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICBmb250LWZhbWlseTogTmV4dEljb247XFxuICAgICAgY29udGVudDogXFxcIlxcXFxFNjQ2XFxcIjtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDJzIGluZmluaXRlIGxpbmVhcjsgfVxcbiAgLm5leHQtYnRuLWdob3N0IHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG4gICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0sIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XFxuICAgICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Mik7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzMzMzM7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi1ncm91cCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0biB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46aG92ZXIsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpmb2N1cywgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmFjdGl2ZSwgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLmFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLmRpc2FibGVkLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG5bZGlzYWJsZWRdIHtcXG4gICAgICAgIHotaW5kZXg6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwIC5uZXh0LWJ0bi5uZXh0LWJ0biB7XFxuICAgICAgbWFyZ2luOiAwIDAgMCAtMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCAubmV4dC1idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpLmRpc2FibGVkLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKVtkaXNhYmxlZF0ge1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNFNkU3RUI7IH1cXG5cXG4vKiDnu4TlkIggKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gLm5leHQtYnRuLm5leHQtYnRuIHtcXG4gIG1hcmdpbjogMCAtMXB4IDAgMDsgfVxcblxcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XFxuICAubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKS5kaXNhYmxlZCwgLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKVtkaXNhYmxlZF0ge1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNFNkU3RUI7IH1cXG5cXG4vKiDlsLrlr7jnu7TluqYgKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogOHB4O1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE2cHg7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4vKiDmlofmnKzmjInpkq4gKi9cXG4ubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0ge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9idXR0b24vbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDQgNSA2IDciLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG4vKipcbiAqIEljb25cbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5pi+56S65ZOq56eN5Zu+5qCHXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5Zu+5qCH5aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4eHMnLCAneHMnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ3hsJywgJ3h4bCcsICd4eHhsJ10pLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgc2l6ZTogJ21lZGl1bSdcbiAgICB9O1xuXG4gICAgc3RhdGljIF90eXBlTWFyayA9ICdpY29uJztcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgdHlwZSwgc2l6ZSwgY2xhc3NOYW1lLCBydGwsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjeCh7XG4gICAgICAgICAgICBbYCR7cHJlZml4fWljb25gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi0ke3R5cGV9YF06ICEhdHlwZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9JHtzaXplfWBdOiAhIXNpemUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJ0bCAmJiBbJ2Fycm93LWxlZnQnLCAnYXJyb3ctcmlnaHQnLCAnYXJyb3ctZG91YmxlLWxlZnQnLCAnYXJyb3ctZG91YmxlLXJpZ2h0JywgJ3N3aXRjaCcsICdzb3J0aW5nJywgJ2Rlc2NlbmRpbmcnLCAnYXNjZW5kaW5nJ10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG90aGVyLmRpciA9ICdydGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxpIHsuLi5vdGhlcn0gY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhJY29uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL2luZGV4LmpzeCIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvc3R5bGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5tb21lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cubW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29udGV4dFByb3BzKHByb3BzLCBjb250ZXh0LCBkaXNwbGF5TmFtZSkge1xuICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBuZXh0UHJlZml4LCBuZXh0TG9jYWxlLCBuZXh0UHVyZSwgbmV4dFdhcm5pbmcsIG5leHRSdGwgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBuZXdQcmVmaXggPSBwcmVmaXggfHwgbmV4dFByZWZpeDtcblxuICAgIGxldCBsb2NhbGVGcm9tQ29udGV4dDtcbiAgICBpZiAobmV4dExvY2FsZSkge1xuICAgICAgICBsb2NhbGVGcm9tQ29udGV4dCA9IG5leHRMb2NhbGVbZGlzcGxheU5hbWVdO1xuICAgICAgICBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgICAgIGxvY2FsZUZyb21Db250ZXh0Lm1vbWVudExvY2FsZSA9IG5leHRMb2NhbGUubW9tZW50TG9jYWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdMb2NhbGU7XG4gICAgaWYgKGxvY2FsZSkge1xuICAgICAgICBuZXdMb2NhbGUgPSB7IC4uLihsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSksIC4uLmxvY2FsZSB9O1xuICAgIH0gZWxzZSBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgbmV3TG9jYWxlID0gbG9jYWxlRnJvbUNvbnRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHVyZSA9IHR5cGVvZiBwdXJlID09PSAnYm9vbGVhbicgPyBwdXJlIDogbmV4dFB1cmU7XG4gICAgY29uc3QgbmV3UnRsID0gdHlwZW9mIHJ0bCA9PT0gJ2Jvb2xlYW4nID8gcnRsIDogbmV4dFJ0bDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogbmV3UHJlZml4LFxuICAgICAgICBsb2NhbGU6IG5ld0xvY2FsZSxcbiAgICAgICAgcHVyZTogbmV3UHVyZSxcbiAgICAgICAgcnRsOiBuZXdSdGwsXG4gICAgICAgIHdhcm5pbmc6IG5leHRXYXJuaW5nXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvZ2V0LWNvbnRleHQtcHJvcHMuanN4IiwiaW1wb3J0IHtjYW1lbGNhc2UsIGh5cGhlbmF0ZX0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog5piv5ZCm6IO95L2/55SoIERPTSDmlrnms5VcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzRE9NID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cuZG9jdW1lbnQgJiYgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50O1xuXG4vKipcbiAqIOiKgueCueaYr+WQpuWMheWQq+aMh+WumiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5oYXNDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuaW5kZXhPZihjbGFzc05hbWUpID4gLTE7XG4gICAgfVxufVxuXG4vKipcbiAqIOa3u+WKoCBjbGFzc05hbWVcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSwgX2ZvcmNlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKF9mb3JjZSA9PT0gdHJ1ZSB8fCAhaGFzQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgfVxufVxuXG4vKipcbiAqIOenu+mZpCBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyAobm9kZSwgY2xhc3NOYW1lLCBfZm9yY2UpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAoX2ZvcmNlID09PSB0cnVlIHx8IGhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzTmFtZSwgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIOWIh+aNoiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAg5omn6KGM5ZCO6IqC54K55LiK5piv5ZCm6L+Y5pyJ5q2kIGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20udG9nZ2xlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZsYWcgPSBoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgICAgICBmbGFnID8gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lLCB0cnVlKSA6IGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICFmbGFnO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhYPntKDmmK/lkKbljLnphY0gQ1NTIOmAieaLqeWZqFxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSAgICAgICBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBzZWxlY3RvciAgIENTUyDpgInmi6nlmahcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5tYXRjaGVzKG1vdW50Tm9kZSwgJy5jb250YWluZXInKTsgLy8gYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWF0Y2hlc0ZuID0gbnVsbDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChoYXNET00pIHtcbiAgICAgICAgY29uc3QgX2JvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgICAgIG1hdGNoZXNGbiA9IF9ib2R5Lm1hdGNoZXMgPyAnbWF0Y2hlcycgOlxuICAgICAgICAgICAgX2JvZHkud2Via2l0TWF0Y2hlc1NlbGVjdG9yID8gJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicgOlxuICAgICAgICAgICAgICAgIF9ib2R5Lm1zTWF0Y2hlc1NlbGVjdG9yID8gJ21zTWF0Y2hlc1NlbGVjdG9yJyA6XG4gICAgICAgICAgICAgICAgICAgIF9ib2R5Lm1vek1hdGNoZXNTZWxlY3RvciA/ICdtb3pNYXRjaGVzU2VsZWN0b3InIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc0ZuID8gbm9kZVttYXRjaGVzRm5dKHNlbGVjdG9yKSA6IGZhbHNlO1xuICAgIH07XG59KCk7XG5cbi8qKlxuICog6I635Y+W5YWD57Sg6K6h566X5ZCO55qE5qC35byPXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZSAobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDEgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHt9O1xufVxuXG5jb25zdCBQSVhFTF9QQVRURVJOID0gL21hcmdpbnxwYWRkaW5nfHdpZHRofGhlaWdodHxtYXh8bWlufG9mZnNldHxzaXplL2k7XG5jb25zdCByZW1vdmVQaXhlbCA9IHtsZWZ0OiAxLCB0b3A6IDEsIHJpZ2h0OiAxLCBib3R0b206IDF9O1xuXG4vKipcbiAqIOagoemqjOW5tuS/ruato+WFg+e0oOeahOagt+W8j+WxnuaAp+WAvFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICovXG5mdW5jdGlvbiBfZ2V0U3R5bGVWYWx1ZSAobm9kZSwgdHlwZSwgdmFsdWUpIHtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3dpZHRoJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0V2lkdGggfHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHR5cGUgaW4gcmVtb3ZlUGl4ZWwpKSB7XG4gICAgICAgIC8vIOWxnuaAp+WAvOaYr+WQpumcgOimgeWOu+aOiSBweCDljZXkvY3vvIzov5nph4zlgYflrprmraTnsbvnmoTlsZ7mgKflgLzpg73mmK8gcHgg5Li65Y2V5L2N55qEXG4gICAgICAgIHJlbW92ZVBpeGVsW3R5cGVdID0gUElYRUxfUEFUVEVSTi50ZXN0KHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVQaXhlbFt0eXBlXSA/IChwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKSA6IHZhbHVlO1xufVxuXG5jb25zdCBmbG9hdE1hcCA9IHtjc3NGbG9hdDogMSwgc3R5bGVGbG9hdDogMSwgZmxvYXQ6IDF9O1xuXG4vKipcbiAqIOiOt+WPluWFg+e0oOiuoeeul+WQjueahOagt+W8j1xuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUg5bGe5oCn5ZCNXG4gKiBAcmV0dXJuIHtOdW1iZXJ8T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUgKG5vZGUsIG5hbWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgLy8g5aaC5p6c5LiN5oyH5a6a5bGe5oCn5ZCN77yM5YiZ6L+U5Zue5YWo6YOo5YC8XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuXG4gICAgcmV0dXJuIF9nZXRTdHlsZVZhbHVlKG5vZGUsIG5hbWUsIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKG5hbWUpKSB8fCBub2RlLnN0eWxlW2NhbWVsY2FzZShuYW1lKV0pO1xufVxuXG4vKipcbiAqIOiuvue9ruWFg+e0oOeahOagt+W8j1xuICogQHBhcmFtIHtFbGVtZW50fSBub2RlICBET00g6IqC54K5XG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWUgIOWxnuaAp+WQje+8jOaIluiAheaYr+S4gOS4quWvueixoe+8jOWMheWQq+WkmuS4quWxnuaAp1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6K6+572u5Y2V5Liq5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCAnd2lkdGgnLCAxMDApO1xuICogLy8g6K6+572u5aSa5p2h5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCB7XG4gKiAgICAgd2lkdGg6IDEwMCxcbiAqICAgICBoZWlnaHQ6IDIwMFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZSAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5om56YeP6K6+572u5aSa5Liq5YC8XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGVhY2gobmFtZSwgKHZhbCwga2V5KSA9PiBzZXRTdHlsZShub2RlLCBrZXksIHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBQSVhFTF9QQVRURVJOLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc3R5bGVbY2FtZWxjYXNlKG5hbWUpXSA9IHZhbHVlOyAvLyBJRTggc3VwcG9ydFxuICAgIH1cbn1cblxuLyoqXG4gKiDojrflj5bpu5jorqTnmoTmu5rliqjmnaHlpKflsI9cbiAqIEByZXR1cm4ge09iamVjdH0gd2lkdGgsIGhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyICgpIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNldFN0eWxlKHNjcm9sbERpdiwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICB0b3A6ICctOTk5OXB4J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxiYXJIZWlnaHQgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogc2Nyb2xsYmFyV2lkdGgsXG4gICAgICAgIGhlaWdodDogc2Nyb2xsYmFySGVpZ2h0XG4gICAgfTtcbn1cblxuLyoqXG4gKiDojrflj5blhYPntKDot53nprvop4blj6Ppobbpg6jlkozlt6bovrnnmoTlgY/np7vot53nprtcbiAqIEByZXR1cm4ge09iamVjdH0gdG9wLCBsZWZ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQgKG5vZGUpIHtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW4gPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RvbS5qcyIsIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uJztcbmltcG9ydCAnLi4vLi4vLi4vc3JjL2J1dHRvbi9zdHlsZS5qcyc7XG5cblxuaW1wb3J0IEJhbGxvb24gZnJvbSAnLi4vLi4vLi4vc3JjL2JhbGxvb24nO1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvYmFsbG9vbi9zdHlsZS5qcyc7XG5cblxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHRyaWdnZXJlZCBldmVyeSB0aW1lIHZpc2libGUgYmVjb21lcyBmYWxzZVxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNsb3NlIGRvaW5nIScpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGU6IHRydWV9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZpc2libGVUcmlnZ2VyID0gPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX0gdHlwZT1cInByaW1hcnlcIj5jbGljayB0byBwdXB1cCB0aGUgY2FyZDwvQnV0dG9uPjtcbiAgICAgICAgY29uc3QgY29udGVudCA9ICg8ZGl2PmNvbnRlbnQ8L2Rpdj4pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTAwcHgnfX0+XG4gICAgICAgICAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17dmlzaWJsZVRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfSA+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIG1vdW50Tm9kZSk7XG5cblxuLy8gSE9UIFJFTE9BRCBDT0RFXG5jb25zdCBjb21wb25lbnREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvbmVudC1kZXNjJyk7XG5jb21wb25lbnREZXNjLmlubmVySFRNTCA9IGDkvb/nlKggIDxjb2RlPnZpc2libGU8L2NvZGU+ICzlsZ7mgKfmjqfliLbmta7lsYLmmL7npLosIOS9v2JhbGxvb27lj5jkuLrlj5fpmZDnu4Tku7bjgIJgO1xuY29uc3QgY29tcG9uZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb25lbnQtYm9keScpO1xuY29tcG9uZW50Qm9keS5pbm5lckhUTUwgPSBgPHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWpzeFwiPjxkaXYgY2xhc3M9XCJobGpzXCI+PHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5pbXBvcnQ8L3NwYW4+IHsgQnV0dG9uLCBCYWxsb29uIH0gPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+J0BhbGlmZC9uZXh0Jzwvc3Bhbj47XG5cblxuXG5cbjxzcGFuIGNsYXNzPVwiaGxqcy1jbGFzc1wiPjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy10aXRsZVwiPkFwcDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtdGl0bGVcIj5SZWFjdDwvc3Bhbj4uPHNwYW4gY2xhc3M9XCJobGpzLXRpdGxlXCI+Q29tcG9uZW50PC9zcGFuPiA8L3NwYW4+e1xuICAgIDxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3RydWN0b3I8L3NwYW4+KHByb3BzKSB7XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+c3VwZXI8L3NwYW4+KHByb3BzKTtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj50aGlzPC9zcGFuPi5zdGF0ZSA9IHtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dmlzaWJsZTwvc3Bhbj46IDxzcGFuIGNsYXNzPVwiaGxqcy1saXRlcmFsXCI+ZmFsc2U8L3NwYW4+XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgPHNwYW4gY2xhc3M9XCJobGpzLWNvbW1lbnRcIj4vLyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB2aXNpYmxlIGJlY29tZXMgZmFsc2U8L3NwYW4+XG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWJ1aWx0X2luXCI+Y29uc29sZTwvc3Bhbj4ubG9nKDxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj4nb25DbG9zZSBkb2luZyEnPC9zcGFuPik7XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj50aGlzPC9zcGFuPi5zZXRTdGF0ZSh7PHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj52aXNpYmxlPC9zcGFuPjogPHNwYW4gY2xhc3M9XCJobGpzLWxpdGVyYWxcIj50cnVlPC9zcGFuPn0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gdmlzaWJsZVRyaWdnZXIgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+b25DbGljazwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwicHJpbWFyeVwiPC9zcGFuPiZndDs8L3NwYW4+Y2xpY2sgdG8gcHVwdXAgdGhlIGNhcmQ8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj47XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IGNvbnRlbnQgPSAoPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+Y29udGVudDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPik7XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5yZXR1cm48L3NwYW4+IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luQm90dG9tOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MTAwcHg8L3NwYW4+J319Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3Zpc2libGVUcmlnZ2VyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyVHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiY2xpY2tcIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj52aXNpYmxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3RoaXMuc3RhdGUudmlzaWJsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+b25DbG9zZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKX08L3NwYW4+ICZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QXBwPC9zcGFuPiAvJmd0Ozwvc3Bhbj4sIG1vdW50Tm9kZSk7XG5cbjwvc3Bhbj48L2Rpdj48L2NvZGU+PC9wcmU+XG5gLnJlcGxhY2UoL3tiYWNrcXVvdGV9L2csICdgJykucmVwbGFjZSgve2RvbGxhcn0vZywgJyQnKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuICBjb25zdCByZWxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1kZW1vLXJlbG9hZGluZycpO1xuXG4gIGlmICghd2luZG93Lmhhc0FkZFN0YXR1c0hhbmRsZXIpIHtcbiAgICBtb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoc3RhdHVzID0+IHtcbiAgICAgIHdpbmRvdy5oYXNBZGRTdGF0dXNIYW5kbGVyID0gdHJ1ZTtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdjaGVjaycpIHtcbiAgICAgICAgcmVsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdpZGxlJykge1xuICAgICAgICByZWxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3MvYmFsbG9vbi9kZW1vL29uQ2xvc2VDbGljay5tZCIsIi8qKlxuICog5bCG5a2X56ym5Liy6L2s5YyW5Li66am85bOw5byP5YaZ5rOVXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciDkvovvvJotd2Via2l0LXRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsY2FzZSAoc3RyKSB7XG4gICAgaWYgKCEvLS8udGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBzdHIgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoJDAsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLyoqXG4gKiDlsIbpqbzls7DlvI/lrZfnrKbkuLLovazljJbkuLrov57lrZfnrKblhpnms5VcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mi13ZWJraXQtdHJhbnNpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlwaGVuYXRlIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJDAgPT4gYC0keyQwLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9zdHJpbmcuanMiLCIvKipcbiAqIElF5rWP6KeI5Zmo55qE5riy5p+T5byV5pOO54mI5pys5Y+3XG4gKiDms6jmhI/vvJrmraTlsZ7mgKfkuI7mtY/op4jlmajniYjmnKzlj7fkuI3lkIzvvIxJReeahOa4suafk+W8leaTjueJiOacrOWPt+aYr+WPr+S7pemAmui/h0hUTUwgaGVhZGVy5oiW5omL5Yqo6K6+572u5Y675pu05pS555qEXG4gKiBAdHlwZSB7TnVtYmVyfSA2IH4gMTBcbiAqL1xuZXhwb3J0IGNvbnN0IGllVmVyc2lvbiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv55Sf5Lqn546v5aKDXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBQUk9EVUNUSU9OX0VOViA9ICdwcm9kdWN0aW9uJztcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpZVZlcnNpb24sXG4gICAgaXNQcm9kdWN0aW9uLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Vudi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBFTkQ6IDM1LFxuICAgIEhPTUU6IDM2LFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG5cbiAgICAvLyB2ZXJzaW9uIDAueFxuICAgIEVTQ0FQRTogMjcsXG4gICAgTEVGVF9BUlJPVzogMzcsXG4gICAgVVBfQVJST1c6IDM4LFxuICAgIFJJR0hUX0FSUk9XOiAzOSxcbiAgICBET1dOX0FSUk9XOiA0MCxcblxuICAgIC8vIE1hY09TXG4gICAgQ09OVFJPTDogMTcsXG4gICAgT1BUSU9OOiAxOCxcbiAgICBDTUQ6IDkxLFxuICAgIENPTU1BTkQ6IDkxLFxuICAgIERFTEVURTogOCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9rZXljb2RlLmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19jbGFzc25hbWVzQDIuMi42QGNsYXNzbmFtZXMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGRvbSwgZXZlbnRzLCBmdW5jLCBzdXBwb3J0LCBmb2N1cywgS0VZQ09ERSwgZ3VpZCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG92ZXJsYXlNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgR2F0ZXdheSBmcm9tICcuL2dhdGV3YXknO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24nO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBzYXZlTGFzdEZvY3VzTm9kZSwgZ2V0Rm9jdXNOb2RlTGlzdCwgYmFja0xhc3RGb2N1c05vZGUgfSA9IGZvY3VzO1xuY29uc3QgeyBtYWtlQ2hhaW4sIG5vb3AsIGJpbmRDdHggfSA9IGZ1bmM7XG5cbmNvbnN0IGlzU2Nyb2xsRGlzcGxheSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzY3JvbGxiYXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICc6Oi13ZWJraXQtc2Nyb2xsYmFyJyk7XG4gICAgICAgIHJldHVybiAhc2Nyb2xsYmFyU3R5bGUgfHwgc2Nyb2xsYmFyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpICE9PSAnbm9uZSc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgZXJyb3IgZm9yIGZpcmVmb3hcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBoYXNTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiBkb2Muc2Nyb2xsSGVpZ2h0ID4gZG9jLmNsaWVudEhlaWdodCAmJiBkb20uc2Nyb2xsYmFyKCkud2lkdGggPiAwICYmIGlzU2Nyb2xsRGlzcGxheShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpICYmIGlzU2Nyb2xsRGlzcGxheShkb2N1bWVudC5ib2R5KTtcbn07XG5jb25zdCBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcbmNvbnN0IGdldFN0eWxlUHJvcGVydHkgPSAobm9kZSwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlc1tpXSArIG5hbWUpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgbW9kYWxzID0gW107XG5sZXQgYm9keU92ZXJmbG93WSwgYm9keVBhZGRpbmdSaWdodDtcblxuLyoqXG4gKiBPdmVybGF5XG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmmL7npLrlvLnlsYJcbiAgICAgICAgICovXG4gICAgICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC6K+35rGC5YWz6Zet5pe26Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOW8ueWxguWFs+mXreeahOadpea6kFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBET00g5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBvblJlcXVlc3RDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3nmoTlj4LnhaflhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguebuOWvueS6juWPgueFp+WFg+e0oOeahOWumuS9jSwg6K+m6KeB5byA5Y+R5oyH5Y2X55qEW+WumuS9jemDqOWIhl0oI+WumuS9jSlcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55u45a+55LqO5Y+C54Wn5YWD57Sg5a6a5L2N55qE5b6u6LCDXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa4suafk+e7hOS7tueahOWuueWZqO+8jOWmguaenOaYr+WHveaVsOmcgOimgei/lOWbniByZWbvvIzlpoLmnpzmmK/lrZfnrKbkuLLliJnmmK/or6UgRE9NIOeahCBpZO+8jOS5n+WPr+S7peebtOaOpeS8oOWFpSBET00g6IqC54K5XG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmmL7npLrpga7nvalcbiAgICAgICAgICovXG4gICAgICAgIGhhc01hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pSv5oyBIGVzYyDmjInplK7lhbPpl63lvLnlsYJcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlFc2M6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye75by55bGC5aSW55qE5Yy65Z+f5piv5ZCm5YWz6Zet5by55bGC77yM5LiN5pi+56S66YGu572p5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5T3V0U2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeCueWHu+mBrue9qeWMuuWfn+aYr+WQpuWFs+mXreW8ueWxgu+8jOaYvuekuumBrue9qeaXtueUn+aViFxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeU1hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5YmN6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOaXtuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOWQjuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsCwg5aaC5p6c5pyJ5Yqo55S777yM5YiZ5Zyo5Yqo55S757uT5p2f5ZCO6Kem5Y+RXG4gICAgICAgICAqL1xuICAgICAgICBhZnRlck9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YWz6Zet5YmN6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63ml7bop6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YWz6Zet5ZCO6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwLCDlpoLmnpzmnInliqjnlLvvvIzliJnlnKjliqjnlLvnu5PmnZ/lkI7op6blj5FcbiAgICAgICAgICovXG4gICAgICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N5a6M5oiQ5YmN6Kem5Y+R55qE5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVQb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3lrozmiJDml7bop6blj5HnmoTkuovku7ZcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDlrprkvY3nmoTlj4LmlbBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29uZmlnLmFsaWduIOWvuem9kOaWueW8j++8jOWmgiBbJ2NjJywgJ2NjJ13vvIjlpoLmnpzlvIDlkK8gbmVlZEFkanVzdO+8jOWPr+iDveWSjOmihOWFiOiuvue9rueahCBhbGlnbiDkuI3lkIzvvIlcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy50b3Ag6Led56a76KeG5Y+j6aG26YOo6Led56a7XG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcubGVmdCDot53nprvop4blj6Plt6bkvqfot53nprtcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGUg5a6a5L2N5Y+C54Wn55qE5a655Zmo6IqC54K5XG4gICAgICAgICAqL1xuICAgICAgICBvblBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuWcqOavj+asoeW8ueWxgumHjeaWsOa4suafk+WQjuW8uuWItuabtOaWsOWumuS9jeS/oeaBr++8jOS4gOiIrOeUqOS6juW8ueWxguWGheWuueWMuuWfn+Wkp+Wwj+WPkeeUn+WPmOWMluaXtu+8jOS7jemcgOS/neaMgeWOn+adpeeahOWumuS9jeaWueW8j1xuICAgICAgICAgKi9cbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5pe25piv5ZCm6K6p5YW25Lit55qE5YWD57Sg6Ieq5Yqo6I635Y+W54Sm54K5XG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5b2T5by55bGC55Sx5LqO6aG16Z2i5rua5Yqo562J5oOF5Ya15LiN5Zyo5Y+v6KeG5Yy65Z+f5pe277yM5piv5ZCm6Ieq5Yqo6LCD5pW05a6a5L2N5Lul5Ye6546w5Zyo5Y+v6KeG5Yy65Z+fXG4gICAgICAgICAqL1xuICAgICAgICBuZWVkQWRqdXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuemgeeUqOmhtemdoua7muWKqFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpmpDol4/ml7bmmK/lkKbkv53nlZnlrZDoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWuieWFqOiKgueCue+8jOW9k+eCueWHuyBkb2N1bWVudCDnmoTml7blgJnvvIzlpoLmnpzljIXlkKvor6XoioLngrnliJnkuI3kvJrlhbPpl63lvLnlsYLvvIzlpoLmnpzmmK/lh73mlbDpnIDopoHov5Tlm54gcmVm77yM5aaC5p6c5piv5a2X56ym5Liy5YiZ5piv6K+lIERPTSDnmoQgaWTvvIzkuZ/lj6/ku6Xnm7TmjqXkvKDlhaUgRE9NIOiKgueCue+8jOaIluiAheS7peS4iuWAvOe7hOaIkOeahOaVsOe7hFxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnmoTmoLnoioLngrnnmoTmoLflvI/nsbtcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnmoTmoLnoioLngrnnmoTlhoXogZTmoLflvI9cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjee9ruWKqOeUu+eahOaSreaUvuaWueW8j++8jOaUr+aMgSB7IGluOiAnZW50ZXItY2xhc3MnLCBvdXQ6ICdsZWF2ZS1jbGFzcycgfSDnmoTlr7nosaHlj4LmlbDvvIzlpoLmnpzorr7nva7kuLogZmFsc2XvvIzliJnkuI3mkq3mlL7liqjnlLtcbiAgICAgICAgICogQGRlZmF1bHQgeyBpbjogJ2V4cGFuZEluRG93bicsIG91dDogJ2V4cGFuZE91dFVwJyB9XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIG9uTWFza01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbk1hc2tNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IG5vb3AsXG4gICAgICAgIHRhcmdldDogUG9zaXRpb24uVklFV1BPUlQsXG4gICAgICAgIGFsaWduOiAndGwgYmwnLFxuICAgICAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICAgICAgaGFzTWFzazogZmFsc2UsXG4gICAgICAgIGNhbkNsb3NlQnlFc2M6IHRydWUsXG4gICAgICAgIGNhbkNsb3NlQnlPdXRTaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIGNhbkNsb3NlQnlNYXNrOiB0cnVlLFxuICAgICAgICBiZWZvcmVPcGVuOiBub29wLFxuICAgICAgICBvbk9wZW46IG5vb3AsXG4gICAgICAgIGFmdGVyT3Blbjogbm9vcCxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IG5vb3AsXG4gICAgICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgICAgIGFmdGVyQ2xvc2U6IG5vb3AsXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBub29wLFxuICAgICAgICBvblBvc2l0aW9uOiBub29wLFxuICAgICAgICBvbk1hc2tNb3VzZUVudGVyOiBub29wLFxuICAgICAgICBvbk1hc2tNb3VzZUxlYXZlOiBub29wLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgIG5lZWRBZGp1c3Q6IHRydWUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGZhbHNlLFxuICAgICAgICBjYWNoZTogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgc3RhdHVzOiAnbm9uZScsXG4gICAgICAgICAgICBhbmltYXRpb246IHRoaXMuZ2V0QW5pbWF0aW9uKHByb3BzKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGFzdEFsaWduID0gcHJvcHMuYWxpZ247XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbXG4gICAgICAgICAgICAnaGFuZGxlUG9zaXRpb24nLFxuICAgICAgICAgICAgJ2hhbmRsZUFuaW1hdGVFbmQnLFxuICAgICAgICAgICAgJ2hhbmRsZURvY3VtZW50S2V5RG93bicsXG4gICAgICAgICAgICAnaGFuZGxlRG9jdW1lbnRDbGljaycsXG4gICAgICAgICAgICAnaGFuZGxlTWFza0NsaWNrJyxcbiAgICAgICAgICAgICdiZWZvcmVPcGVuJyxcbiAgICAgICAgICAgICdiZWZvcmVDbG9zZSdcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0TWFwID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmVmb3JlT3BlbigpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRpb24gJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGREb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkICYmIG5leHRQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2lsbE9wZW4gPSAhdGhpcy5wcm9wcy52aXNpYmxlICYmIG5leHRQcm9wcy52aXNpYmxlO1xuICAgICAgICBjb25zdCB3aWxsQ2xvc2UgPSB0aGlzLnByb3BzLnZpc2libGUgJiYgIW5leHRQcm9wcy52aXNpYmxlO1xuICAgICAgICBpZiAod2lsbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlT3BlbigpO1xuICAgICAgICAgICAgbmV4dFByb3BzLmJlZm9yZU9wZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWxsQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgICAgIG5leHRQcm9wcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5hbmltYXRpb24gfHwgbmV4dFByb3BzLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbmV4dFByb3BzLmFuaW1hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLmFuaW1hdGlvbiAhPT0gZmFsc2UgJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh3aWxsT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2lsbENsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBjb25zdCBvcGVuID0gIXByZXZQcm9wcy52aXNpYmxlICYmIHRoaXMucHJvcHMudmlzaWJsZTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBwcmV2UHJvcHMudmlzaWJsZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRpb24gJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChvcGVuIHx8IGNsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlck9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlckNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheU1hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgb3ZlcmxheU1hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlZm9yZUNsb3NlKCk7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QW5pbWF0aW9uQnlBbGlnbihwcm9wcy5hbGlnbik7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uQnlBbGlnbihhbGlnbikge1xuICAgICAgICBzd2l0Y2ggKGFsaWduWzBdKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbjogJ2V4cGFuZEluRG93bicsXG4gICAgICAgICAgICAgICAgICAgIG91dDogJ2V4cGFuZE91dFVwJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbjogJ2V4cGFuZEluVXAnLFxuICAgICAgICAgICAgICAgICAgICBvdXQ6ICdleHBhbmRPdXREb3duJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5Eb3duJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0OiAnZXhwYW5kT3V0VXAnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFuaW1hdGlvbkV2ZW50cygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGd1aWQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGV2ZW50cy5vbihub2RlLCBzdXBwb3J0LmFuaW1hdGlvbi5lbmQsIHRoaXMuaGFuZGxlQW5pbWF0ZUVuZC5iaW5kKHRoaXMsIGlkKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBhbmltYXRpb25EZWxheSArIGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dE1hcFtpZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0ZUVuZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpbWUgKiAxMDAwICsgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVBvc2l0aW9uKGNvbmZpZykge1xuICAgICAgICBjb25zdCBhbGlnbiA9IGNvbmZpZy5hbGlnbi5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKCEoJ2FuaW1hdGlvbicgaW4gdGhpcy5wcm9wcykgJiYgdGhpcy5wcm9wcy5uZWVkQWRqdXN0ICYmIHRoaXMubGFzdEFsaWduICE9PSBhbGlnbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmdldEFuaW1hdGlvbkJ5QWxpZ24oYWxpZ24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdEFsaWduID0gYWxpZ247XG4gICAgfVxuXG4gICAgaGFuZGxlQW5pbWF0ZUVuZChpZCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0TWFwW2lkXSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE1hcFtpZF0pO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRpbWVvdXRNYXBbaWRdO1xuXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnbGVhdmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbkxlYXZlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnZW50ZXJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub25FbnRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgc3RhdHVzOiAnZW50ZXJpbmcnXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHNldFN0YXRlIGNhbGxiYWNrIChzZWNvbmQgYXJndW1lbnQpIG5vdyBmaXJlcyBpbW1lZGlhdGVseSBhZnRlciBjb21wb25lbnREaWRNb3VudCAvIGNvbXBvbmVudERpZFVwZGF0ZSBpbnN0ZWFkIG9mIGFmdGVyIGFsbCBjb21wb25lbnRzIGhhdmUgcmVuZGVyZWQuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FbnRlcmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6ICdsZWF2aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uTGVhdmluZygpO1xuICAgIH1cblxuICAgIG9uRW50ZXJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICBkb20uYWRkQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICBvbkxlYXZpbmcoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25FbnRlcmVkKCkge1xuICAgICAgICBvdmVybGF5TWFuYWdlci5hZGRPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnNldEZvY3VzTm9kZSgpO1xuICAgICAgICB0aGlzLnByb3BzLmFmdGVyT3BlbigpO1xuICAgIH1cblxuICAgIG9uTGVhdmVkKCkge1xuICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnNldEZvY3VzTm9kZSgpO1xuICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBiZWZvcmVPcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICAgICAgICBpZiAobW9kYWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICBib2R5T3ZlcmZsb3dZID0gYm9keS5zdHlsZS5vdmVyZmxvd1k7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1Njcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlQYWRkaW5nUmlnaHQgPSBib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7ZG9tLmdldFN0eWxlKGJvZHksICdwYWRkaW5nUmlnaHQnKSArIGRvbS5zY3JvbGxiYXIoKS53aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9tLnNldFN0eWxlKGJvZHksIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFscy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmVmb3JlQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbW9kYWxzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RhbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBib2R5T3ZlcmZsb3dZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNTY3JvbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYm9keVBhZGRpbmdSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRvbS5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCBzdHlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keU92ZXJmbG93WSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgYm9keVBhZGRpbmdSaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEZvY3VzTm9kZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSAmJiAhdGhpcy5faGFzRm9jdXNlZCkge1xuICAgICAgICAgICAgc2F2ZUxhc3RGb2N1c05vZGUoKTtcbiAgICAgICAgICAgIC8vIOi/meS4quaXtuWAmeW+iOWPr+iDveS4iuS4gOS4quW8ueWxgueahOWFs+mXreS6i+S7tui/mOacquinpuWPke+8jOWvvOiHtOeEpueCueW3sue7j+WbnuWIsOinpuWPkeeahOWFg+e0oFxuICAgICAgICAgICAgLy8g6L+Z6YeM5bu25pe25aSE55CG5LiA5LiL77yM5bu25pe255qE5pe26Ze05Li6IGRvY3VtZW50LmNsaWNrIOaNleiOt+inpuWPkeeahOW7tuaXtuaXtumXtFxuICAgICAgICAgICAgdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzTm9kZUxpc3QgPSBnZXRGb2N1c05vZGVMaXN0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzTm9kZUxpc3RbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnZpc2libGUgJiYgdGhpcy5faGFzRm9jdXNlZCkge1xuICAgICAgICAgICAgYmFja0xhc3RGb2N1c05vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZWY7XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzLmNvbnRlbnRSZWYpO1xuICAgIH1cblxuICAgIGdldFdyYXBwZXJOb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYXRld2F5UmVmID8gdGhpcy5nYXRld2F5UmVmLmdldENoaWxkTm9kZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeUVzYykge1xuICAgICAgICAgICAgdGhpcy5fa2V5ZG93bkV2ZW50cyA9IGV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeU91dFNpZGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMgPSBldmVudHMub24oZG9jdW1lbnQsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVEb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2tleWRvd25FdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWRvd25FdmVudHMub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duRXZlbnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2xpY2tFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrRXZlbnRzLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRG9jdW1lbnRLZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSAmJiBlLmtleUNvZGUgPT09IEtFWUNPREUuRVNDICYmIG92ZXJsYXlNYW5hZ2VyLmlzQ3VycmVudE92ZXJsYXkodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ2tleWJvYXJkJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3QgeyBzYWZlTm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHNhZmVOb2RlcyAgPSBBcnJheS5pc0FycmF5KHNhZmVOb2RlKSA/IFsuLi5zYWZlTm9kZV0gOiBbc2FmZU5vZGVdO1xuICAgICAgICAgICAgc2FmZU5vZGVzLnVuc2hpZnQoKCkgPT4gdGhpcy5nZXRXcmFwcGVyTm9kZSgpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYWZlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZmluZE5vZGUoc2FmZU5vZGVzW2ldLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAvLyBIQUNLOiDlpoLmnpzop6blj5Hngrnlh7vnmoToioLngrnmmK/lvLnlsYLlhoXpg6jnmoToioLngrnvvIzlubbkuJTlnKjooqvngrnlh7vlkI7nq4vljbPplIDmr4HvvIzpgqPkuYjmraTml7bml6Dms5Xkvb/nlKggbm9kZS5jb250YWlucyhlLnRhcmdldClcbiAgICAgICAgICAgICAgICAvLyDmnaXliKTmlq3mraTml7bngrnlh7vnmoToioLngrnmmK/lkKbmmK/lvLnlsYLlhoXpg6jnmoToioLngrnvvIzpop3lpJbliKTmlq1cbiAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiAobm9kZSA9PT0gZS50YXJnZXQgfHwgbm9kZS5jb250YWlucyhlLnRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAoZS50YXJnZXQgIT09IGRvY3VtZW50ICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgnZG9jQ2xpY2snLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1hc2tDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbkNsb3NlQnlNYXNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdtYXNrQ2xpY2snLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVDb250ZW50UmVmID0gKHJlZikgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgc2F2ZUdhdGV3YXlSZWYgPSAocmVmKSA9PiB7XG4gICAgICAgIHRoaXMuZ2F0ZXdheVJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICAvLyDlhbzlrrnov4fljrvnmoTnlKjms5U6IHRoaXMucG9wdXBSZWYuZ2V0SW5zdGFuY2UoKS5vdmVybGF5LmdldEluc3RhbmNlKCkuZ2V0Q29udGVudE5vZGUoKVxuICAgIGdldEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByZWZpeCwgY2xhc3NOYW1lLCBzdHlsZSwgY2hpbGRyZW46IHByb3BDaGlsZHJlbixcbiAgICAgICAgICAgIHRhcmdldCwgYWxpZ24sIG9mZnNldCwgY29udGFpbmVyLCBoYXNNYXNrLCBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgYmVmb3JlUG9zaXRpb24sIG9uUG9zaXRpb24sIHdyYXBwZXJTdHlsZSwgcnRsLFxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IHByb3BTaG91bGRVcGRhdGVQb3NpdGlvbixcbiAgICAgICAgICAgIGNhY2hlLCB3cmFwcGVyQ2xhc3NOYW1lLCBvbk1hc2tNb3VzZUVudGVyLCBvbk1hc2tNb3VzZUxlYXZlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZpc2libGU6IHN0YXRlVmlzaWJsZSwgc3RhdHVzLCBhbmltYXRpb24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gc3RhdGVWaXNpYmxlIHx8IChjYWNoZSAmJiB0aGlzLl9pc01vdW50ZWQpID8gcHJvcENoaWxkcmVuIDogbnVsbDtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDbGF6eiA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9b3ZlcmxheS1pbm5lcmBdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFthbmltYXRpb24uaW5dOiBzdGF0dXMgPT09ICdlbnRlcmluZycsXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvbi5vdXRdOiBzdGF0dXMgPT09ICdsZWF2aW5nJyxcbiAgICAgICAgICAgICAgICBbY2hpbGQucHJvcHMuY2xhc3NOYW1lXTogISFjaGlsZC5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXQgcmVmIGJ5IHN0cmluZyBpbiBPdmVybGF5LCB1c2UgZnVuY3Rpb24gaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNoaWxkQ2xhenosXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsuLi5jaGlsZC5wcm9wcy5zdHlsZSwgLi4uc3R5bGV9LFxuICAgICAgICAgICAgICAgIHJlZjogbWFrZUNoYWluKHRoaXMuc2F2ZUNvbnRlbnRSZWYsIGNoaWxkLnJlZiksXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXN0YXRlVmlzaWJsZSAmJiBjYWNoZSAmJiB0aGlzLl9pc01vdW50ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVQb3NpdGlvbiA9IHN0YXR1cyA9PT0gJ2xlYXZpbmcnID8gZmFsc2UgOiBwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3NpdGlvbiB7Li4uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLCB0YXJnZXQsIGFsaWduLCBvZmZzZXQsIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9zaXRpb246IG1ha2VDaGFpbih0aGlzLmhhbmRsZVBvc2l0aW9uLCBvblBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uLCBydGxcbiAgICAgICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckNsYXp6ID0gY2xhc3NuYW1lcyhbXG4gICAgICAgICAgICAgICAgYCR7cHJlZml4fW92ZXJsYXktd3JhcHBlcmAsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBuZXdXcmFwcGVyU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGVWaXNpYmxlID8gJycgOiAnbm9uZSdcbiAgICAgICAgICAgIH0sIHdyYXBwZXJTdHlsZSk7XG5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhenp9IHN0eWxlPXtuZXdXcmFwcGVyU3R5bGV9IGRpcj17cnRsID8gJ3J0bCcgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAgICB7aGFzTWFzayA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fW92ZXJsYXktYmFja2Ryb3BgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWFza0NsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25NYXNrTW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTWFza01vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8R2F0ZXdheSB7Li4uKHtjb250YWluZXIsIHRhcmdldCwgY2hpbGRyZW59KX0gcmVmPXt0aGlzLnNhdmVHYXRld2F5UmVmfSAvPjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9vdmVybGF5LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUsIGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZnVuYyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBtYWtlQ2hhaW4gfSA9IGZ1bmM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhdGV3YXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogKCkgPT4gZG9jdW1lbnQuYm9keVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gdGhpcy5nZXRDb250YWluZXJOb2RlKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gdGhpcy5nZXRDb250YWluZXJOb2RlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZShwcm9wcykge1xuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZmluZE5vZGUocHJvcHMudGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKHByb3BzLmNvbnRhaW5lciwgdGFyZ2V0Tm9kZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGROb2RlKCkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcy5jaGlsZCk7XG4gICAgfVxuXG4gICAgc2F2ZUNoaWxkUmVmID0gcmVmID0+IHtcbiAgICAgICAgdGhpcy5jaGlsZCA9IHJlZjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuID8gQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsO1xuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNldCByZWYgYnkgc3RyaW5nIGluIEdhdGV3YXksIHVzZSBmdW5jdGlvbiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICByZWY6IG1ha2VDaGFpbih0aGlzLnNhdmVDaGlsZFJlZiwgY2hpbGQucmVmKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkLCB0aGlzLmNvbnRhaW5lck5vZGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L2dhdGV3YXkuanN4IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jLCBkb20sIGV2ZW50cyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4vdXRpbHMvcG9zaXRpb24nO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBub29wLCBiaW5kQ3R4IH0gPSBmdW5jO1xuY29uc3QgeyBnZXRTdHlsZSB9ID0gZG9tO1xuY29uc3QgcGxhY2UgPSBwb3NpdGlvbi5wbGFjZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBWSUVXUE9SVCA9IHBvc2l0aW9uLlZJRVdQT1JUO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgYmVmb3JlUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvblBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5lZWRMaXN0ZW5SZXNpemU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICBiZWZvcmVQb3NpdGlvbjogbm9vcCxcbiAgICAgICAgb25Qb3NpdGlvbjogbm9vcCxcbiAgICAgICAgbmVlZEFkanVzdDogdHJ1ZSxcbiAgICAgICAgbmVlZExpc3RlblJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IGZhbHNlLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbJ2hhbmRsZVJlc2l6ZSddKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5lZWRMaXN0ZW5SZXNpemUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ2FsaWduJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLmFsaWduICE9PSB0aGlzLnByb3BzLmFsaWduIHx8IG5leHRQcm9wcy5zaG91bGRVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmVlZExpc3RlblJlc2l6ZSkge1xuICAgICAgICAgICAgZXZlbnRzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBhbGlnbiwgb2Zmc2V0LCBiZWZvcmVQb3NpdGlvbiwgb25Qb3NpdGlvbiwgbmVlZEFkanVzdCwgcnRsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdldE5vZGUoKTtcbiAgICAgICAgaWYgKGNvbnRlbnROb2RlICYmIHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFsaWduID0gcGxhY2Uoe1xuICAgICAgICAgICAgICAgIHBpbkVsZW1lbnQ6IGNvbnRlbnROb2RlLFxuICAgICAgICAgICAgICAgIGJhc2VFbGVtZW50OiB0YXJnZXROb2RlLFxuICAgICAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgICAgIGlzUnRsOiBydGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGdldFN0eWxlKGNvbnRlbnROb2RlLCAndG9wJyk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0U3R5bGUoY29udGVudE5vZGUsICdsZWZ0Jyk7XG5cbiAgICAgICAgICAgIG9uUG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIGFsaWduOiByZXN1bHRBbGlnbi5zcGxpdCgnICcpLFxuICAgICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICB9LCBjb250ZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFRhcmdldE5vZGUoKSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IHBvc2l0aW9uLlZJRVdQT1JUID8gcG9zaXRpb24uVklFV1BPUlQgOiBmaW5kTm9kZSh0YXJnZXQsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9wb3NpdGlvbi5qc3giLCJpbXBvcnQgJy4uL2FuaW1hdGUvc3R5bGUuanMnO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9zdHlsZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19vYmplY3QtYXNzaWduQDQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IG9iaiwgbG9nIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgZ2V0Q29udGV4dFByb3BzIGZyb20gJy4vZ2V0LWNvbnRleHQtcHJvcHMnO1xuXG5jb25zdCB7IHNoYWxsb3dFcXVhbCB9ID0gb2JqO1xuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG5sZXQgZ2xvYmFsTG9jYWxlcztcbmxldCBjdXJyZW50R2xvYmFsTGFuZ3VhZ2UgPSAnemgtY24nO1xubGV0IGN1cnJlbnRHbG9iYWxMb2NhbGUgPSB7fTtcbmxldCBjdXJyZW50R2xvYmFsUnRsID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TG9jYWxlcyhsb2NhbGVzKSB7XG4gICAgZ2xvYmFsTG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgY3VycmVudEdsb2JhbExvY2FsZSA9IGxvY2FsZXNbY3VycmVudEdsb2JhbExhbmd1YWdlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgaWYgKGdsb2JhbExvY2FsZXMpIHtcbiAgICAgICAgY3VycmVudEdsb2JhbExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIGN1cnJlbnRHbG9iYWxMb2NhbGUgPSBnbG9iYWxMb2NhbGVzW2xhbmd1YWdlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgY3VycmVudEdsb2JhbExvY2FsZSA9IHtcbiAgICAgICAgLi4uKGdsb2JhbExvY2FsZXMgPyBnbG9iYWxMb2NhbGVzW2N1cnJlbnRHbG9iYWxMYW5ndWFnZV0gOiB7fSksXG4gICAgICAgIC4uLmxvY2FsZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgY3VycmVudEdsb2JhbFJ0bCA9IGRpciA9PT0gJ3J0bCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRHbG9iYWxMb2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gY3VycmVudEdsb2JhbExhbmd1YWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBjdXJyZW50R2xvYmFsUnRsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKENvbXBvbmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoXG4gICAgICAgICAgICBuZXh0UHJvcHMsXG4gICAgICAgICAgICBuZXh0U3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wdXJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8XG4gICAgICAgICAgICAgICAgICAgICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYXNzIENvbmZpZ2VkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihDb21wb25lbnQucHJvcFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKENvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgbmV4dFByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICBuZXh0UHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICBuZXh0UnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIG5leHRXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2dldEluc3RhbmNlID0gdGhpcy5fZ2V0SW5zdGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlY2F0ZWQgPSB0aGlzLl9kZXByZWNhdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfZ2V0SW5zdGFuY2UocmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IHJlZjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIG9wdGlvbnMuZXhwb3J0TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmV4cG9ydE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5faW5zdGFuY2VbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSBmaWVsZC5iaW5kKHRoaXMuX2luc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2RlcHJlY2F0ZWQoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5uZXh0V2FybmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsb2cuZGVwcmVjYXRlZCguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgbmV4dFByZWZpeCxcbiAgICAgICAgICAgICAgICBuZXh0TG9jYWxlID0ge30sXG4gICAgICAgICAgICAgICAgbmV4dFB1cmUsXG4gICAgICAgICAgICAgICAgbmV4dFJ0bFxuICAgICAgICAgICAgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tcG9uZW50TmFtZSB8fCBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dFByb3BzID0gZ2V0Q29udGV4dFByb3BzKFxuICAgICAgICAgICAgICAgIHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dExvY2FsZTogeyAuLi5jdXJyZW50R2xvYmFsTG9jYWxlLCAuLi5uZXh0TG9jYWxlIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHRQdXJlLFxuICAgICAgICAgICAgICAgICAgICBuZXh0UnRsOiB0eXBlb2YgbmV4dFJ0bCA9PT0gJ2Jvb2xlYW4nID8gbmV4dFJ0bCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R2xvYmFsUnRsID09PSB0cnVlID8gdHJ1ZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRleHRQcm9wcyA9IFsncHJlZml4JywgJ2xvY2FsZScsICdwdXJlJywgJ3J0bCddLnJlZHVjZShcbiAgICAgICAgICAgICAgICAocmV0LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dFByb3BzW25hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W25hbWVdID0gY29udGV4dFByb3BzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3T3RoZXJzID0gb3B0aW9ucy50cmFuc2Zvcm0gP1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNmb3JtKG90aGVycywgdGhpcy5fZGVwcmVjYXRlZCkgOlxuICAgICAgICAgICAgICAgIG90aGVycztcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdDb250ZXh0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5fZ2V0SW5zdGFuY2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb25maWdlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGBDb25maWcoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpYyhDb25maWdlZENvbXBvbmVudCwgQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBDb25maWdlZENvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY29uZmlnLmpzeCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19ob2lzdC1ub24tcmVhY3Qtc3RhdGljc0AyLjUuNUBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi8qKlxuICog5Y+W5raI5LqL5Lu257uR5a6aXG4gKiBAcGFyYW0gIHsqfSAgIG5vZGUgICAgICAgRE9N6IqC54K55oiW5Lu75L2V5Y+v5Lul57uR5a6a5LqL5Lu255qE5a+56LGhXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnROYW1lICDkuovku7blkI1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgIOWbnuiwg+aWueazlVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbdXNlQ2FwdHVyZT1mYWxzZV0g5piv5ZCm5byA5ZCv5LqL5Lu25o2V6I635LyY5YWIXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZmYgKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnu5Hlrprkuovku7ZcbiAqIEBwYXJhbSAgeyp9ICAgbm9kZSAgICAgICBET03oioLngrnmiJbku7vkvZXlj6/ku6Xnu5Hlrprkuovku7bnmoTlr7nosaFcbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudE5hbWUgIOS6i+S7tuWQjVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAg5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIHVzZUNhcHR1cmUg5piv5ZCm5byA5ZCv5LqL5Lu25o2V6I635LyY5YWIXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAg6L+U5Zue55qEb2JqZWN05Lit5YyF5ZCr5LiA5Liqb2Zm5pa55rOV77yM55So5LqO5Y+W5raI5LqL5Lu255uR5ZCsXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGhhbmRsZXIgPSBldmVudHMub24oZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgZSA9PiB7XG4gKiAgICAgLy8gaGFuZGxlIGNsaWNrIC4uLlxuICogfSk7XG4gKiAvLyDlj5bmtojkuovku7bnu5HlrppcbiAqIGhhbmRsZXIub2ZmKCk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbiAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2ZmOiAoKSA9PiBvZmYobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSlcbiAgICB9O1xufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tu+8jOWPquaJp+ihjOS4gOasoeWQjumUgOavgVxuICogQHBhcmFtICB7Kn0gICBub2RlICAgICAgIERPTeiKgueCueaIluS7u+S9leWPr+S7pee7keWumuS6i+S7tueahOWvueixoVxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50TmFtZSAg5LqL5Lu25ZCNXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICDlm57osIPmlrnms5VcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgdXNlQ2FwdHVyZSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICDov5Tlm57nmoRvYmplY3TkuK3ljIXlkKvkuIDkuKpvZmbmlrnms5XvvIznlKjkuo7lj5bmtojkuovku7bnm5HlkKxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UgKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICByZXR1cm4gb24obm9kZSwgZXZlbnROYW1lLCBmdW5jdGlvbiBfX2ZuICguLi5hcmdzKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIC8vIOeUseS6jmFkZEV2ZW50TGlzdGVuZXLkuK3nmoTlj4LmlbBvcHRpb25z5Y+q5ZyoQ2hyb21lIDU144CBRmlyZWZveChHZWNrbynku6XkuIrniYjmnKzmlK/mjIHvvIzmlYXov5jmmK/nlKjkvKDnu5/nmoTmlrnms5Xlrp7njrBvbmNlXG4gICAgICAgIG9mZihub2RlLCBldmVudE5hbWUsIF9fZm4sIHVzZUNhcHR1cmUpO1xuICAgIH0sIHVzZUNhcHR1cmUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZXZlbnRzLmpzIiwiaW1wb3J0IHtpc1Byb21pc2V9IGZyb20gJy4vb2JqZWN0JztcblxuLyoqXG4gKiDkuIDkuKrnqbrmlrnms5XvvIzov5Tlm57lhaXlj4LmnKzouqvmiJbnqbrlr7nosaFcbiAqL1xuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiDlsIZO5Liq5pa55rOV5ZCI5bm25Li65LiA5Liq6ZO+5byP6LCD55So55qE5pa55rOVXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgIOWQiOW5tuWQjueahOaWueazlVxuICog5Y+C6ICDIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXRpbC9cbiAqXG4gKiBAZXhhbXBsZVxuICogZnVuYy5tYWtlQ2hhaW4odGhpcy5oYW5kbGVDaGFuZ2UsIHRoaXMucHJvcHMub25DaGFuZ2UpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNoYWluICguLi5mbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBmbnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm5zW2ldICYmIGZuc1tpXS5hcHBseSkge1xuICAgICAgICAgICAgICAgIGZuc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICog5om56YeP5pS55Y+Y5pa55rOV55qE5LiK5LiL5paHXG4gKiDmraTmlrnms5XlnKhyZWFjdOe7hOS7tuS4reW+iOacieeUqO+8jOWcqGNvbnN0cnVjdG9y5Lit5om56YeP5bCG57uE5Lu25LiK55qE5pa55rOV5omn6KGM5LiK5LiL5paH57uR5a6a5Yiw57uE5Lu25pys6LqrXG4gKiDms6jmhI/vvJrnlKhiaW5k5pS55Y+Y5Ye95pWw6L+Q6KGM55qE5LiK5LiL5paH5Y+q5Lya55Sf5pWI5LiA5qyhXG4gKiBAcGFyYW0gIHtPYmplY3R9IGN0eCDmlrnms5XmjILovb3nmoTlr7nosaHku6Xlj4rmiafooYznmoTkuIrkuIvmlodcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IGZucyDmlrnms5XlkI3liJfooahcbiAqXG4gKiBAZXhhbXBsZVxuICogZnVuYy5iaW5kQ3R4KHRoaXMsIFsnaGFuZGxlQ2xpY2snLCAnaGFuZGxlQ2hhbmdlJ10pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEN0eCAoY3R4LCBmbnMsIG5zKSB7XG4gICAgaWYgKHR5cGVvZiBmbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZucyA9IFtmbnNdO1xuICAgIH1cblxuICAgIC8vIOaWueazleeahOaMgui9veepuumXtO+8jOWmguaenOS4jeS8oO+8jOm7mOiupOS4jmN0eOebuOWQjFxuICAgIG5zID0gbnMgfHwgY3R4O1xuXG4gICAgZm5zLmZvckVhY2goZm5OYW1lID0+IHtcbiAgICAgICAgLy8g6L+Z6YeM5LiN6KaB5re75Yqg56m65pa55rOV5Yik5pat77yM55Sx6LCD55So6ICF5L+d6K+B5q2j56Gu5oCn77yM5ZCm5YiZ5Ye65LqG6Zeu6aKY5peg5rOV5o6S5p+lXG4gICAgICAgIG5zW2ZuTmFtZV0gPSBuc1tmbk5hbWVdLmJpbmQoY3R4KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDnlKjkuo7miafooYzlm57osIPmlrnms5XlkI7nmoTpgLvovpFcbiAqIEBwYXJhbSAgeyp9IHJldCAgICAgICAgICAgIOWbnuiwg+aWueazleaJp+ihjOe7k+aenFxuICogQHBhcmFtICB7RnVuY3Rpb259IHN1Y2Nlc3Mg5omn6KGM57uT5p6c6L+U5Zue6Z2eZmFsc2XnmoTlm57osINcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbZmFpbHVyZT1ub29wXSDmiafooYznu5Pmnpzov5Tlm55mYWxzZeeahOWbnuiwg1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZUNhbGwgKHJldCwgc3VjY2VzcywgZmFpbHVyZSA9IG5vb3ApIHtcbiAgICBpZiAoaXNQcm9taXNlKHJldCkpIHtcbiAgICAgICAgcmV0dXJuIHJldC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGZhaWx1cmUoZSk7XG4gICAgICAgICAgICAvLyB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0ICE9PSBmYWxzZSA/IHN1Y2Nlc3MocmV0KSA6IGZhaWx1cmUocmV0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Z1bmMuanMiLCJpbXBvcnQgeyBpc1Byb2R1Y3Rpb24gfSBmcm9tICcuL2Vudic7XG5cbi8qIGVzbGludCBuby1jb25zb2xlOiAwICovXG5cbi8qKlxuICog5Y+N5a+55L2/55So5p+Q5LiA5pa55rOV5oiW5bGe5oCn55qE6K2m5ZGKXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BzICAgICDov4fml7bnmoTlsZ7mgKfmiJbmlrnms5XlkI1cbiAqIEBwYXJhbSAge1N0cmluZ30gaW5zdGVhZCAgIOabv+S7o+eahOWxnuaAp+aIluaWueazleWQjVxuICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnQg57uE5Lu25ZCNXG4gKlxuICogQGV4YW1wbGVcbiAqIGxvZy5kZXByZWNhdGVkKCdvbkJlZm9yZUNsb3NlJywgJ2JlZm9yZUNsb3NlJywgJ0RpYWxvZycpO1xuICogLy8gV2FybmluZzogb25CZWZvcmVDbG9zZSBpcyBkZXByZWNhdGVkIGF0IFsgRGlhbG9nIF0sIHVzZSBbIGJlZm9yZUNsb3NlIF0gaW5zdGVhZCBvZiBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZWQgKHByb3BzLCBpbnN0ZWFkLCBjb21wb25lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghaXNQcm9kdWN0aW9uKCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgV2FybmluZzogWyAke3Byb3BzfSBdIGlzIGRlcHJlY2F0ZWQgYXQgWyAke2NvbXBvbmVudH0gXSwgYCArXG4gICAgICAgICAgICBgdXNlIFsgJHtpbnN0ZWFkfSBdIGluc3RlYWQgb2YgaXQuYFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiDmjqfliLblj7DorablkYrml6Xlv5dcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nIChtc2cpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgV2FybmluZzogJHttc2d9YCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nLmpzIiwiaW1wb3J0IHtoYXNET019IGZyb20gJy4vZG9tJztcbmltcG9ydCB7ZWFjaH0gZnJvbSAnLi9vYmplY3QnO1xuXG5jb25zdCBhbmltYXRpb25FbmRFdmVudE5hbWVzID0ge1xuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcbn07XG5cbmNvbnN0IHRyYW5zaXRpb25FdmVudE5hbWVzID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbn07XG5cbi8qKlxuICog5piv5ZCm5pSv5oyB5p+Q5Lqb5Yqo5pWI5LqL5Lu277yM5aaC5p6c5pSv5oyB77yM6L+U5Zue55u45bqU55qEZW5k5LqL5Lu25ZCNXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0PFN0cmluZz59IG5hbWVzXG4gKiBAcmV0dXJuIHtPYmplY3R8ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIF9zdXBwb3J0RW5kIChuYW1lcykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByZXQgPSBmYWxzZTtcblxuICAgIGVhY2gobmFtZXMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoZWwuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXQgPSB7ZW5kOiB2YWx9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOaYr+WQpuaUr+aMgeafkOS6m0NTU+WxnuaAp1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge09iamVjdDxBcnJheTxTdHJpbmc+Pn0gbmFtZXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIGlzIHN1cHBvcnRcbiAqL1xuZnVuY3Rpb24gX3N1cHBvcnRDU1MgKG5hbWVzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgZWFjaChuYW1lcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGVhY2godmFsLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0IHx8IGVsLnN0eWxlW2tleV0gPT09IGl0ZW07XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQgd2lsbCBiZSB0aHJvdyBlcnJvciB3aGVuIHNldCB1bmtub3duIHByb3BlcnR5IHVuZGVyIElFOFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFyZXQ7IC8vIOWmguaenOacieS4gOS4quaUr+aMgeWwsei/lOWbnmZhbHNl77yM5ZCO6Z2i5LiN6ZyA6KaB5YaN5Yik5patXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhcmV0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiDmmK/lkKbmlK/mjIFhbmltYXRpb27ku6Xlj4rliqjnlLvnu5PmnZ/kuovku7blkI1cbiAqIEB0eXBlIHtPYmplY3R8ZmFsc2V9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gZW5kIOWKqOeUu+e7k+adn+S6i+S7tuWQjVxuICovXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0gX3N1cHBvcnRFbmQoYW5pbWF0aW9uRW5kRXZlbnROYW1lcyk7XG5cbi8qKlxuICog5piv5ZCm5pSv5oyBdHJhbnNpdGlvbuS7peWPiui/h+a7pOaViOaenOe7k+adn+S6i+S7tuWQjVxuICogQHR5cGUge09iamVjdHxmYWxzZX1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmQg6L+H5rih5pWI5p6c57uT5p2f5LqL5Lu25ZCNXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gX3N1cHBvcnRFbmQodHJhbnNpdGlvbkV2ZW50TmFtZXMpO1xuXG4vKipcbiAqIOaYr+WQpuaUr+aMgWZsZXjlsZ7mgKdcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgZmxleCA9IF9zdXBwb3J0Q1NTKHtcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCAnLXdlYmtpdC1mbGV4JywgJy1tb3otZmxleCcsICctbXMtZmxleGJveCddXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3N1cHBvcnQuanMiLCJpbXBvcnQgS0VZQ09ERSBmcm9tICcuL2tleWNvZGUnO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog55So5LqO5YiH5o2i6aG16Z2i5YWD57Sg55qE54Sm54K5XG4gKi9cblxuXG4vKipcbiAqIOWFg+e0oOaYr+WQpuWPr+ingVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtFbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIF9pc1Zpc2libGUobm9kZSkge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBkb2N1bWVudC5ib2R5IHx8IG5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDlhYPntKDmmK/lkKblj6/ku6Xojrflj5bnhKbngrlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gICB7RWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBfaXNGb2N1c2FibGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHRhYkluZGV4ID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgICBjb25zdCBoYXNUYWJJbmRleCA9ICFpc05hTih0YWJJbmRleCkgJiYgdGFiSW5kZXggPiAtMTtcblxuICAgIGlmIChfaXNWaXNpYmxlKG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmRpc2FibGVkICYmIG5vZGUudHlwZSAhPT0gJ2hpZGRlbic7XG4gICAgICAgIH0gZWxzZSBpZiAoWydzZWxlY3QnLCAndGV4dGFyZWEnLCAnYnV0dG9uJ10uaW5kZXhPZihub2RlTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmRpc2FibGVkO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGVOYW1lID09PSAnYScpIHtcbiAgICAgICAgICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBoYXNUYWJJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIOWIl+WHuuiDveiOt+WPlueEpueCueeahOWtkOiKgueCuVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSDlrrnlmajoioLngrlcbiAqIEByZXR1cm4ge0FycmF5PEVsZW1lbnQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9jdXNOb2RlTGlzdChub2RlKSB7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgY29uc3Qgbm9kZUxpc3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcblxuICAgIGVhY2gobm9kZUxpc3QsIGl0ZW0gPT4ge1xuICAgICAgICBpZiAoX2lzRm9jdXNhYmxlKGl0ZW0pKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvLWZvY3VzJykgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgICAgICAgICByZXNbbWV0aG9kXShpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKF9pc0ZvY3VzYWJsZShub2RlKSkge1xuICAgICAgICByZXMudW5zaGlmdChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyDnlKjkuo7orrDlvZXkuIrkuIDmrKHojrflvpfnhKbngrnnmoTml6DntKBcbmxldCBsYXN0Rm9jdXNFbGVtZW50ID0gbnVsbDtcblxuLyoqXG4gKiDkv53lrZjmnIDov5HkuIDmrKHojrflvpfnhKbngrnnmoTml6DntKBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMYXN0Rm9jdXNOb2RlKCkge1xuICAgIGxhc3RGb2N1c0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xufVxuXG4vKipcbiAqIOa4hemZpOeEpueCueiusOW9lVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMYXN0Rm9jdXNOb2RlKCkge1xuICAgIGxhc3RGb2N1c0VsZW1lbnQgPSBudWxsO1xufVxuXG4vKipcbiAqIOWwneivleWwhueEpueCueWIh+aNouWIsOS4iuS4gOS4quWFg+e0oFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja0xhc3RGb2N1c05vZGUoKSB7XG4gICAgaWYgKGxhc3RGb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOWFg+e0oOWPr+iDveW3sue7j+iiq+enu+WKqOS6hlxuICAgICAgICAgICAgbGFzdEZvY3VzRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgLi4uXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5Zyo6ZmQ5Yi255qE6IyD5Zu05YaF5YiH5o2i54Sm54K5XG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIOWuueWZqOiKgueCuVxuICogQHBhcmFtICB7RXZlbnR9IGUgICAgICDplK7nm5jkuovku7ZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0VGFiUmFuZ2Uobm9kZSwgZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuVEFCKSB7XG4gICAgICAgIGNvbnN0IHRhYk5vZGVMaXN0ID0gZ2V0Rm9jdXNOb2RlTGlzdChub2RlKTtcbiAgICAgICAgY29uc3QgbWF4SW5kZXggPSB0YWJOb2RlTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhYk5vZGVMaXN0LmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRJbmRleCA9IGluZGV4ICsgKGUuc2hpZnRLZXkgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPCAwICYmICh0YXJnZXRJbmRleCA9IG1heEluZGV4KTtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID4gbWF4SW5kZXggJiYgKHRhcmdldEluZGV4ID0gMCk7XG4gICAgICAgICAgICB0YWJOb2RlTGlzdFt0YXJnZXRJbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2ZvY3VzLmpzIiwibGV0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbi8qKlxuICog55Sf5oiQ5YWo5bGA5ZSv5LiA55qEaWRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3ByZWZpeD0nJ10g5YmN57yA5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKlxuICogQGV4YW1wbGVcbiAqIGd1aWQoKTsgLy8gajdqdjUwOWNcbiAqIGd1aWQoJ3ByZWZpeC0nKTsgLy8gcHJlZml4LWo3anY1MDlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBwcmVmaXggPSBwcmVmaXggfHwgJyc7XG5cbiAgICByZXR1cm4gcHJlZml4ICsgKHRpbWVzdGFtcCsrKS50b1N0cmluZygzNik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ndWlkLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2V0Q29udGV4dFByb3BzIGZyb20gJy4vZ2V0LWNvbnRleHQtcHJvcHMnO1xuaW1wb3J0IHtcbiAgICBjb25maWcsXG4gICAgaW5pdExvY2FsZXMsXG4gICAgc2V0TGFuZ3VhZ2UsXG4gICAgc2V0TG9jYWxlLFxuICAgIHNldERpcmVjdGlvbixcbiAgICBnZXRMb2NhbGUsXG4gICAgZ2V0TGFuZ3VhZ2UsXG4gICAgZ2V0RGlyZWN0aW9uXG59IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBDb25zdW1lciBmcm9tICcuL2NvbnN1bWVyJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlJztcblxuY29uc3QgY2hpbGRDb250ZXh0Q2FjaGUgPSBuZXcgQ2FjaGUoKTtcblxuLyoqXG4gKiBDb25maWdQcm92aWRlclxuICogQHByb3BzRXh0ZW5kcyBmYWxzZVxuICovXG5jbGFzcyBDb25maWdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagt+W8j+exu+WQjeeahOWTgeeJjOWJjee8gFxuICAgICAgICAgKi9cbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5Zu96ZmF5YyW5paH5qGI5a+56LGh77yM5bGe5oCn5Li657uE5Lu255qEIGRpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK8gUHVyZSBSZW5kZXIg5qih5byP77yM5Lya5o+Q6auY5oCn6IO977yM5L2G5piv5Lmf5Lya5bim5p2l5Ymv5L2c55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuWcqOW8gOWPkeaooeW8j+S4i+aYvuekuue7hOS7tuWxnuaAp+iiq+W6n+W8g+eahCB3YXJuaW5nIOaPkOekulxuICAgICAgICAgKi9cbiAgICAgICAgd2FybmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK8gcnRsIOaooeW8j1xuICAgICAgICAgKi9cbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe7hOS7tuagkVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHdhcm5pbmc6IHRydWVcbiAgICB9O1xuXG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBuZXh0TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBuZXh0UHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5leHRSdGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBuZXh0V2FybmluZzogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Lyg5YWl57uE5Lu277yM55Sf5oiQ5Y+XIENvbmZpZ1Byb3ZpZGVyIOaOp+WItueahCBIT0Mg57uE5Lu2XG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IENvbXBvbmVudCDnu4Tku7bnsbtcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDlj6/pgInpoblcbiAgICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fSBIT0NcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZmlnID0gKENvbXBvbmVudCwgb3B0aW9ucykgPT4ge1xuICAgICAgICByZXR1cm4gY29uZmlnKENvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOS8oOWFpee7hOS7tueahCBwcm9wcyDlkowgZGlzcGxheU5hbWXvvIzlvpfliLDlkowgY2hpbGRDb250ZXh0IOiuoeeul+i/h+eahOWMheWQq+aciSBwcmVpZngvbG9jYWxlL3B1cmUg55qE5a+56LGh77yM5LiA6Iis55So5LqO6YCa6L+H6Z2Z5oCB5pa55rOV55Sf5oiQ6ISx56a757uE5Lu25qCR55qE57uE5Lu2XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOe7hOS7tueahCBwcm9wc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXNwbGF5TmFtZSDnu4Tku7bnmoQgZGlzcGxheU5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDmlrDnmoQgY29udGV4dCBwcm9wc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb250ZXh0UHJvcHMgPSAocHJvcHMsIGRpc3BsYXlOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0UHJvcHMocHJvcHMsIGNoaWxkQ29udGV4dENhY2hlLnJvb3QoKSB8fCB7fSwgZGlzcGxheU5hbWUpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW5pdExvY2FsZXMgPSBpbml0TG9jYWxlcztcbiAgICBzdGF0aWMgc2V0TGFuZ3VhZ2UgPSBzZXRMYW5ndWFnZTtcbiAgICBzdGF0aWMgc2V0TG9jYWxlID0gc2V0TG9jYWxlO1xuICAgIHN0YXRpYyBzZXREaXJlY3Rpb24gPSBzZXREaXJlY3Rpb247XG4gICAgc3RhdGljIGdldExhbmd1YWdlID0gZ2V0TGFuZ3VhZ2U7XG4gICAgc3RhdGljIGdldExvY2FsZSA9IGdldExvY2FsZTtcbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uO1xuICAgIHN0YXRpYyBDb25zdW1lciA9IENvbnN1bWVyO1xuXG4gICAgc3RhdGljIGdldENvbnRleHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmV4dFByZWZpeCwgbmV4dExvY2FsZSwgbmV4dFB1cmUsIG5leHRSdGwsIG5leHRXYXJuaW5nIH0gPSBjaGlsZENvbnRleHRDYWNoZS5yb290KCkgfHwge307XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZpeDogbmV4dFByZWZpeCxcbiAgICAgICAgICAgIGxvY2FsZTogbmV4dExvY2FsZSxcbiAgICAgICAgICAgIHB1cmU6IG5leHRQdXJlLFxuICAgICAgICAgICAgcnRsOiBuZXh0UnRsLFxuICAgICAgICAgICAgd2FybmluZzogbmV4dFdhcm5pbmdcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY2hpbGRDb250ZXh0Q2FjaGUuYWRkKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGNoaWxkQ29udGV4dENhY2hlLmdldCh0aGlzLCB7fSksIHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCB3YXJuaW5nLCBydGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHRQcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIG5leHRMb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICAgIG5leHRQdXJlOiBwdXJlLFxuICAgICAgICAgICAgbmV4dFJ0bDogcnRsLFxuICAgICAgICAgICAgbmV4dFdhcm5pbmc6IHdhcm5pbmdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0TW9tZW50TG9jYWxlKHRoaXMucHJvcHMubG9jYWxlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhbGUgIT09IG5leHRQcm9wcy5sb2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TW9tZW50TG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5hZGQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRDb250ZXh0Q2FjaGUuZ2V0KHRoaXMsIHt9KSwgdGhpcy5nZXRDaGlsZENvbnRleHQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2hpbGRDb250ZXh0Q2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vbWVudExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgbGV0IG1vbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnQgJiYgbG9jYWxlKSB7XG4gICAgICAgICAgICBtb21lbnQubG9jYWxlKGxvY2FsZS5tb21lbnRMb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc3giLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgdmFsdWVzIGFzIG9iamVjdCBhbmQga2V5c1xuICogZ2VuZXJhdGVkIGJ5IHJ1bm5pbmcgZWFjaCBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydHlcbiAqIG9mIG9iamVjdCB0aHJ1IGl0ZXJhdGVlLlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgbWFwS2V5cyA9IChvYmosIGZuKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0gZm4oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmVwbGFjZSBzcGVjaWZpYyBrZXkgd2l0aCBwcmVmaXggYG5leHRgXG4gKiBhbmQgbG93ZXJjYXNlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgcmVzdWx0LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCByZXBsYWNlS2V5ID0ga2V5ID0+XG4gICAga2V5LnJlcGxhY2UoL14obmV4dCkoW0EtWl0pLywgKG1hdGNoLCBwMSwgcDIpID0+IHAyLnRvTG93ZXJDYXNlKCkpO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgdHJhbnNmb3JtQ29udGV4dCA9IHNvdXJjZSA9PiBtYXBLZXlzKHNvdXJjZSwgcmVwbGFjZUtleSk7XG5cbi8qKlxuICogQ29uc3VtZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICovXG5jb25zdCBDb25zdW1lciA9ICh7IGNoaWxkcmVuIH0sIGNvbnRleHQpID0+XG4gICAgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4odHJhbnNmb3JtQ29udGV4dChjb250ZXh0KSkgOiBudWxsO1xuXG4vKipcbiAqIFByb3BUeXBlc1xuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29uc3VtZXIucHJvcFR5cGVzID0ge1xuICAgIC8vIFJlbmRlciBjb250ZXh0IGFzIGZ1bmN0aW9uXG4gICAgLy8gRnVuY3Rpb24oY29udGV4dDogb2JqZWN0KTogUmVhY3RFbGVtZW50XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIENvbnRleHRUeXBlcyAobGVnYWN5IGNvbnRleHQpXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db25zdW1lci5jb250ZXh0VHlwZXMgPSB7XG4gICAgbmV4dFByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXh0TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG5leHRQdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuZXdSdGw6IFByb3BUeXBlcy5ib29sLFxuICAgIG5leHRXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3VtZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbnN1bWVyLmpzeCIsImNsYXNzIENhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0b3JlID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuc2l6ZSA9PT0gMDtcbiAgICB9XG5cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5oYXMoa2V5KTtcbiAgICB9XG5cbiAgICBnZXQoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3N0b3JlLmdldChrZXkpIDogdGhpcy5yb290KCk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHJlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcmVzID09PSBudWxsKSA/XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgOiByZXM7XG4gICAgfVxuXG4gICAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZW1wdHkoKSkge1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdG9yZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfVxuXG4gICAgcm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmdldCh0aGlzLl9yb290KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9jYWNoZS5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbi9tYWluLnNjc3MiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJpbXBvcnQgQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBCYWxsb29uIGZyb20gJy4vYmFsbG9vbic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IElubmVyIGZyb20gJy4vaW5uZXInO1xuXG5CYWxsb29uLlRvb2x0aXAgPSBDb25maWdQcm92aWRlci5jb25maWcoVG9vbHRpcCwge1xuICAgIHRyYW5zZm9ybTogKHByb3BzLCBkZXByZWNhdGVkKSA9PiB7XG4gICAgICAgIGlmICgndGV4dCcgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ3RleHQnLCAnY2hpbGRyZW4nLCAnVG9vbHRpcCcpO1xuICAgICAgICAgICAgY29uc3QgeyB0ZXh0LCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7IGNoaWxkcmVuOiB0ZXh0LCAuLi5vdGhlcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG59KTtcbkJhbGxvb24uSW5uZXIgPSBJbm5lcjtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKEJhbGxvb24sIHtcbiAgICB0cmFuc2Zvcm06IChwcm9wcywgZGVwcmVjYXRlZCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBkZXByZWNhdGVkKCdhbGlnbm1lbnQnLCAnYWxpZ25FZGdlJywgJ0JhbGxvb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHsgYWxpZ25tZW50LCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgICAgICAgICAgcHJvcHMgPSB7IGFsaWduRWRnZTogYWxpZ25tZW50ID09PSAnZWRnZScsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5vbkNsb3NlQ2xpY2spIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ29uQ2xvc2VDbGljaycsICdvblZpc2libGVDaGFuZ2UnLCAnQmFsbG9vbicpO1xuICAgICAgICAgICAgY29uc3QgeyBvbkNsb3NlQ2xpY2ssIG9uVmlzaWJsZUNoYW5nZSwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgICAgICAgICAgIGNvbnN0IG5ld09uVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlLCByZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVhc29uID09PSAnY2xvc2VDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHZpc2libGUsIHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3BzID0geyBvblZpc2libGVDaGFuZ2U6IG5ld09uVmlzaWJsZUNoYW5nZSwgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL292ZXJsYXknO1xuaW1wb3J0IHtmdW5jLCBvYmosIGxvZ30gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgQmFsbG9vbklubmVyIGZyb20gJy4vaW5uZXInO1xuaW1wb3J0IHtub3JtYWxNYXAsIGVkZ2VNYXB9IGZyb20gJy4vYWxpZ25NYXAnO1xuXG5jb25zdCB7bm9vcH0gPSBmdW5jO1xuY29uc3Qge1BvcHVwfSA9IE92ZXJsYXk7XG5cbmxldCBhbGlnbk1hcCA9IG5vcm1hbE1hcDtcblxuLyoqIEJhbGxvb24gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxvb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ57G75ZCNXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnlhoXmlZvmoLflvI9cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5rWu5bGC55qE5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagt+W8j+exu+Wei1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbm9ybWFsJywgJ3ByaW1hcnknXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlvZPliY3mmL7npLrnmoTnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC6buY6K6k5pi+56S655qE54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlnKjmmL7npLrlkozpmpDol4/op6blj5HnmoTkuovku7ZcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSB2aXNpYmxlIOW8ueWxguaYr+WQpumakOiXj+WSjOaYvuekulxuICAgICAgICAgKi9cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWHuuWxguWvuem9kOaWueW8j1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaYvuekuuWFs+mXreaMiemSrlxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5L2N572uXG4gICAgICAgICAqIEBlbnVtZGVzYyDkuIosIOWPsywg5LiLLCDlt6YsIOS4iuW3piwg5LiK5Y+zLCDkuIvlt6YsIOS4i+WPsywg5bem5LiKLCDlt6bkuIssIOWPs+S4iiwg5Y+z5LiLIOWPiuWFtiDkuKTkuKTnu4TlkIhcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0JywgJ3InLCAnYicsICdsJywgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ2x0JywgJ2xiJywgJ3J0JywgJ3JiJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55u45a+55LqOdHJpZ2dlcueahOWumuS9jeeahOW+ruiwg1xuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HooYzkuLpcbiAgICAgICAgICog6byg5qCH5oKs5rWuLCDojrflj5bliLDnhKbngrksIOm8oOagh+eCueWHuygnaG92ZXIn77yMJ2ZvY3VzJ++8jCdjbGljaycp5oiW6ICF5a6D5Lus57uE5oiQ55qE5pWw57uE77yM5aaCIFsnaG92ZXInLCAnZm9jdXMnXVxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclR5cGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuXG4gICAgICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5Lu75L2VdmlzaWJsZeS4umZhbHNl5pe25Lya6Kem5Y+R55qE5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbov5vooYzoh6rliqjkvY3nva7osIPmlbRcbiAgICAgICAgICovXG4gICAgICAgIG5lZWRBZGp1c3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5Zyo6Kem5Y+R5Lul5ZCO55qE5bu25pe25pi+56S6LCDljZXkvY3mr6vnp5IgbXNcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKipcbiAgICAgICAgICog5rWu5bGC5YWz6Zet5ZCO6Kem5Y+R55qE5LqL5Lu2LCDlpoLmnpzmnInliqjnlLvvvIzliJnlnKjliqjnlLvnu5PmnZ/lkI7op6blj5FcbiAgICAgICAgICovXG4gICAgICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by65Yi25pu05paw5a6a5L2N5L+h5oGvXG4gICAgICAgICAqL1xuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlh7rnjrDlkI7mmK/lkKboh6rliqhmb2N1c+WIsOWGhemDqOesrOS4gOS4quWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWuieWFqOiKgueCuTrlr7nkuo50cmlnZ2V0VHlwZeS4umNsaWNr55qE5rWu5bGCLOS8muWcqOeCueWHu+mZpOS6hua1ruWxguWklueahOWFtuWug+WMuuWfn+aXtuWFs+mXrea1ruWxgi5zYWZlTm9kZeeUqOS6jua3u+WKoOS4jeinpuWPkeWFs+mXreeahOiKgueCuSwg5YC85Y+v5Lul5pivZG9t6IqC54K555qEaWTmiJbogIXmmK/oioLngrnnmoRkb23lr7nosaFcbiAgICAgICAgICovXG4gICAgICAgIHNhZmVOb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog55So5p2l5oyH5a6ac2FmZU5vZGXoioLngrnnmoRpZO+8jOWSjHNhZmVOb2Rl6YWN5ZCI5L2/55SoXG4gICAgICAgICAqL1xuICAgICAgICBzYWZlSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDphY3nva7liqjnlLvnmoTmkq3mlL7mlrnlvI9cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGluIOi/m+WcuuWKqOeUu1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3V0IOWHuuWcuuWKqOeUu1xuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnmoRkb23oioLngrnlhbPpl63ml7bmmK/lkKbliKDpmaRcbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+Wumua1ruWxgua4suafk+eahOeItuiKgueCuSwg5Y+v5Lul5Li66IqC54K5aWTnmoTlrZfnrKbkuLLvvIzkuZ/lj6/ku6Xov5Tlm57oioLngrnnmoTlh73mlbDjgIJcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZzdHlsZe+8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu2Y2xhc3NOYW1l77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu25bGe5oCn77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYJpZCwg5Lyg5YWl5YC85omN5Lya5pSv5oyB5peg6Zqc56KNXG4gICAgICAgICAqL1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBwdXJlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgICBkZWZhdWx0VmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNpemU6ICdtZWRpdW0nLFxuICAgICAgICBhbGlnbkVkZ2U6IGZhbHNlLFxuICAgICAgICBhbGlnbjogJ2InLFxuICAgICAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICAgICAgdHJpZ2dlcjogPHNwYW4+PC9zcGFuPixcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWZ0ZXJDbG9zZTogbm9vcCxcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgICAgICBuZWVkQWRqdXN0OiBmYWxzZSxcbiAgICAgICAgdHJpZ2dlclR5cGU6ICdob3ZlcicsXG4gICAgICAgIHNhZmVOb2RlOiB1bmRlZmluZWQsXG4gICAgICAgIHNhZmVJZDogbnVsbCxcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICBpbjogJ3pvb21JbicsXG4gICAgICAgICAgICBvdXQ6ICd6b29tT3V0J1xuICAgICAgICB9LFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIHBvcHVwU3R5bGU6IHt9LFxuICAgICAgICBwb3B1cENsYXNzTmFtZTogJycsXG4gICAgICAgIHBvcHVwUHJvcHM6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFsaWduOiBwcm9wcy5hbGlnbixcbiAgICAgICAgICAgIHZpc2libGU6ICd2aXNpYmxlJyBpbiBwcm9wcyA/IHByb3BzLnZpc2libGUgOiBwcm9wcy5kZWZhdWx0VmlzaWJsZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vbkNsb3NlID0gdGhpcy5fb25DbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vblBvc2l0aW9uID0gdGhpcy5fb25Qb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vblZpc2libGVDaGFuZ2UgPSB0aGlzLl9vblZpc2libGVDaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9jb250ZW50SWQgPSBwcm9wcy5pZDtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdhbGlnbicgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbGlnbjogbmV4dFByb3BzLmFsaWduXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblZpc2libGVDaGFuZ2UodmlzaWJsZSwgdHJpZ2dlcikge1xuICAgICAgICAvLyBOb3QgQ29udHJvbGxlZFxuICAgICAgICBpZiAoISgndmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vblZpc2libGVDaGFuZ2UodmlzaWJsZSwgdHJpZ2dlcik7XG5cbiAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkNsb3NlKGUpIHtcbiAgICAgICAgdGhpcy5fb25WaXNpYmxlQ2hhbmdlKGZhbHNlLCAnY2xvc2VDbGljaycpO1xuXG4gICAgICAgIC8v5b+F6aG75Yqg5LiKcHJldmVudERlZmF1bHQs5ZCm5YiZ5Y2V5rWLSUXkuIvmiqXplJks5Ye6546wZnVsbCBwYWdlIHJlbG9hZCDlvILluLhcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIF9vblBvc2l0aW9uKHJlcykge1xuICAgICAgICBjb25zdCB7IHJ0bCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYWxpZ25NYXAgPSB0aGlzLnByb3BzLmFsaWduRWRnZSA/IGVkZ2VNYXAgOiBub3JtYWxNYXA7XG4gICAgICAgIGNvbnN0IG5ld0FsaWduID0gcmVzLmFsaWduLmpvaW4oJyAnKTtcbiAgICAgICAgbGV0IHJlc0FsaWduO1xuXG4gICAgICAgIGxldCBhbGlnbktleSA9ICdhbGlnbic7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIGFsaWduS2V5ID0gJ3J0bEFsaWduJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGFsaWduTWFwKSB7XG4gICAgICAgICAgICBpZiAoYWxpZ25NYXBba2V5XVthbGlnbktleV0gPT09IG5ld0FsaWduKSB7XG4gICAgICAgICAgICAgICAgcmVzQWxpZ24gPSBrZXk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc0FsaWduID0gcmVzQWxpZ24gfHwgdGhpcy5zdGF0ZS5hbGlnbjtcbiAgICAgICAgaWYgKHJlc0FsaWduICE9PSB0aGlzLnN0YXRlLmFsaWduKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbGlnbjogcmVzQWxpZ25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIHByZWZpeCwgY2xhc3NOYW1lLCBhbGlnbkVkZ2UsXG4gICAgICAgICAgICB0cmlnZ2VyLCB0cmlnZ2VyVHlwZSwgY2hpbGRyZW4sIGNsb3NhYmxlLFxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb24sIGRlbGF5LCBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgc2FmZUlkLCBhdXRvRm9jdXMsIHNhZmVOb2RlLCBvbkNsaWNrLCBvbkhvdmVyLFxuICAgICAgICAgICAgYW5pbWF0aW9uLCBvZmZzZXQsIHN0eWxlLCBjb250YWluZXIsIHBvcHVwQ29udGFpbmVyLCBjYWNoZSwgcG9wdXBTdHlsZSwgcG9wdXBDbGFzc05hbWUsIHBvcHVwUHJvcHMsIHJ0bCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGxvZy5kZXByZWNhdGVkKCdjb250YWluZXInLCAncG9wdXBDb250YWluZXInLCAnQmFsbG9vbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhbGlnbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBhbGlnbk1hcCA9IGFsaWduRWRnZSA/IGVkZ2VNYXAgOiBub3JtYWxNYXA7XG4gICAgICAgIGNvbnN0IF9wcmVmaXggPSB0aGlzLmNvbnRleHQucHJlZml4IHx8IHByZWZpeDtcblxuICAgICAgICBsZXQgdHJPcmlnaW4gPSAndHJPcmlnaW4nO1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICB0ck9yaWdpbiA9ICdydGxUck9yaWdpbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBfb2Zmc2V0ID0gW2FsaWduTWFwW2FsaWduXS5vZmZzZXRbMF0gKyBvZmZzZXRbMF0sIGFsaWduTWFwW2FsaWduXS5vZmZzZXRbMV0gKyBvZmZzZXRbMV1dO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBhbGlnbk1hcFthbGlnbl1bdHJPcmlnaW5dO1xuICAgICAgICBjb25zdCBfc3R5bGUgPSB7Li4ue3RyYW5zZm9ybU9yaWdpbn0sIC4uLnN0eWxlfTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gKDxCYWxsb29uSW5uZXJcbiAgICAgICAgICAgIHsuLi5vYmoucGlja090aGVycyhPYmplY3Qua2V5cyhCYWxsb29uLnByb3BUeXBlcyksIG90aGVycyl9XG4gICAgICAgICAgICBpZD17dGhpcy5fY29udGVudElkfVxuICAgICAgICAgICAgcHJlZml4PXtfcHJlZml4fVxuICAgICAgICAgICAgY2xvc2FibGU9e2Nsb3NhYmxlfVxuICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fb25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e19zdHlsZX1cbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBydGw9e3J0bH1cbiAgICAgICAgICAgIGFsaWduRWRnZT17YWxpZ25FZGdlfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQmFsbG9vbklubmVyPik7XG5cbiAgICAgICAgY29uc3QgdHJpZ2dlclByb3BzID0ge307XG4gICAgICAgIHRyaWdnZXJQcm9wc1snYXJpYS1kZXNjcmliZWRieSddID0gdGhpcy5fY29udGVudElkO1xuICAgICAgICB0cmlnZ2VyUHJvcHMudGFiSW5kZXggPSAnMCc7XG5cbiAgICAgICAgY29uc3QgbmV3VHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudCh0cmlnZ2VyLCB0cmlnZ2VyUHJvcHMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICB7Li4ucG9wdXBQcm9wc31cbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXt0aGlzLl9jb250ZW50SWQgPyBuZXdUcmlnZ2VyIDogdHJpZ2dlcn1cbiAgICAgICAgICAgICAgICBjYWNoZT17Y2FjaGV9XG4gICAgICAgICAgICAgICAgc2FmZUlkPXtzYWZlSWR9XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGU9e3RyaWdnZXJUeXBlfVxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbk1hcFthbGlnbl0uYWxpZ259XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtfb2Zmc2V0fVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uPXt0aGlzLl9vblBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgb25Ib3Zlcj17b25Ib3Zlcn1cbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlPXt0aGlzLnByb3BzLmFmdGVyQ2xvc2V9XG4gICAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXt0aGlzLl9vblZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb249e3Nob3VsZFVwZGF0ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG5lZWRBZGp1c3Q9e25lZWRBZGp1c3R9XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPXthbmltYXRpb259XG4gICAgICAgICAgICAgICAgZGVsYXk9e2RlbGF5fVxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgICAgICAgIHNhZmVOb2RlPXtzYWZlTm9kZX1cbiAgICAgICAgICAgICAgICBjb250YWluZXI9e3BvcHVwQ29udGFpbmVyIHx8IGNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BvcHVwQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtwb3B1cFN0eWxlfVxuICAgICAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9iYWxsb29uLmpzeCIsImNvbnN0IG92ZXJsYXlNYW5hZ2VyID0ge1xuICAgIGFsbE92ZXJsYXlzOiBbXSxcblxuICAgIGFkZE92ZXJsYXkob3ZlcmxheSkge1xuICAgICAgICB0aGlzLnJlbW92ZU92ZXJsYXkob3ZlcmxheSk7XG4gICAgICAgIHRoaXMuYWxsT3ZlcmxheXMudW5zaGlmdChvdmVybGF5KTtcbiAgICB9LFxuXG4gICAgaXNDdXJyZW50T3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIHJldHVybiBvdmVybGF5ICYmIHRoaXMuYWxsT3ZlcmxheXNbMF0gPT09IG92ZXJsYXk7XG4gICAgfSxcblxuICAgIHJlbW92ZU92ZXJsYXkob3ZlcmxheSkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy5hbGxPdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFsbE92ZXJsYXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJsYXlNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvbWFuYWdlci5qcyIsImltcG9ydCB7ZG9tfSBmcm9tICcuLi8uLi91dGlsJztcblxuY29uc3QgVklFV1BPUlQgPSAndmlld3BvcnQnO1xuXG4vLyBJRTggbm90IHN1cHBvcnQgcGFnZVhPZmZzZXRcbmNvbnN0IGdldFBhZ2VYID0gKCkgPT4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuY29uc3QgZ2V0UGFnZVkgPSAoKSA9PiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuLyoqXG4gKiBAcHJpdmF0ZSBnZXQgZWxlbWVudCByZWN0XG4gKiBAcGFyYW0gICAgICAge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm4gICAgICB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0RWxlbWVudFJlY3QgKGVsZW0pIHtcbiAgICBsZXQgb2Zmc2V0VG9wID0gMCxcbiAgICAgICAgb2Zmc2V0TGVmdCA9IDA7XG5cbiAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG5cbiAgICBkbyB7XG4gICAgICAgIGlmICghaXNOYU4oZWxlbS5vZmZzZXRUb3ApKSB7XG4gICAgICAgICAgICBvZmZzZXRUb3AgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldExlZnQpKSB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0ICs9IGVsZW0ub2Zmc2V0TGVmdDtcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKChlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQpICE9PSBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogb2Zmc2V0VG9wIC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApLFxuICAgICAgICBsZWZ0OiBvZmZzZXRMZWZ0IC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCksXG4gICAgICAgIGhlaWdodDogb2Zmc2V0SGVpZ2h0LFxuICAgICAgICB3aWR0aDogb2Zmc2V0V2lkdGhcbiAgICB9O1xufVxuXG4vKipcbiAqIEBwcml2YXRlIGdldCB2aWV3cG9ydCBzaXplXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRWaWV3cG9ydFNpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcblxuICAgIHN0YXRpYyBWSUVXUE9SVCA9IFZJRVdQT1JUO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyBzdGF0aWMgcGxhY2UgbWV0aG9kXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICBwcm9wc1xuICAgICAqICAgICBAcGFyYW0gIHtET019ICAgICAgcHJvcHMucGluRWxlbWVudFxuICAgICAqICAgICBAcGFyYW0gIHtET019ICAgICAgcHJvcHMuYmFzZUVsZW1lbnRcbiAgICAgKiAgICAgQHBhcmFtICB7U3RyaW5nfSAgIHByb3BzLmFsaWduXG4gICAgICogICAgIEBwYXJhbSAge051bWJlcn0gICBwcm9wcy5vZmZzZXRcbiAgICAgKiAgICAgQHBhcmFtICB7Qm9vbGVhbn0gIHByb3BzLm5lZWRBZGp1c3RcbiAgICAgKiAgICAgQHBhcmFtICB7Qm9vbGVhbn0gIHByb3BzLmlzUnRsXG4gICAgICogQHJldHVybiB7UG9zaXRpb259XG4gICAgICovXG4gICAgc3RhdGljIHBsYWNlID0gcHJvcHMgPT4gbmV3IFBvc2l0aW9uKHByb3BzKS5zZXRQb3NpdGlvbigpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnBpbkVsZW1lbnQgPSBwcm9wcy5waW5FbGVtZW50O1xuICAgICAgICB0aGlzLmJhc2VFbGVtZW50ID0gcHJvcHMuYmFzZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWxpZ24gPSBwcm9wcy5hbGlnbiB8fCAndGwgdGwnO1xuICAgICAgICB0aGlzLm9mZnNldCA9IHByb3BzLm9mZnNldCB8fCBbMCwgMF07XG4gICAgICAgIHRoaXMubmVlZEFkanVzdCA9IHByb3BzLm5lZWRBZGp1c3QgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSdGwgPSBwcm9wcy5pc1J0bCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGluRWxlbWVudCA9IHRoaXMucGluRWxlbWVudDtcbiAgICAgICAgY29uc3QgYmFzZUVsZW1lbnQgPSB0aGlzLmJhc2VFbGVtZW50O1xuICAgICAgICBjb25zdCBleHBlY3RlZEFsaWduID0gdGhpcy5fZ2V0RXhwZWN0ZWRBbGlnbigpO1xuICAgICAgICBsZXQgaXNQaW5GaXhlZCwgaXNCYXNlRml4ZWQsIGZpcnN0UG9zaXRpb25SZXN1bHQ7XG4gICAgICAgIGlmIChwaW5FbGVtZW50ID09PSBWSUVXUE9SVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb20uZ2V0U3R5bGUocGluRWxlbWVudCwgJ3Bvc2l0aW9uJykgIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGRvbS5zZXRTdHlsZShwaW5FbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICAgIGlzUGluRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUGluRml4ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYXNlRWxlbWVudCA9PT0gVklFV1BPUlQgfHwgZG9tLmdldFN0eWxlKGJhc2VFbGVtZW50LCAncG9zaXRpb24nKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgaXNCYXNlRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQmFzZUZpeGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7mnJ/mnJvnmoTlrprkvY1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBlY3RlZEFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnbiA9IGV4cGVjdGVkQWxpZ25baV07XG4gICAgICAgICAgICBjb25zdCBwaW5FbGVtZW50UG9pbnRzID0gdGhpcy5fbm9ybWFsaXplUG9zaXRpb24ocGluRWxlbWVudCwgYWxpZ24uc3BsaXQoJyAnKVswXSwgaXNQaW5GaXhlZCk7XG4gICAgICAgICAgICBjb25zdCBiYXNlRWxlbWVudFBvaW50cyA9IHRoaXMuX25vcm1hbGl6ZVBvc2l0aW9uKGJhc2VFbGVtZW50LCBhbGlnbi5zcGxpdCgnICcpWzFdLCBpc1BpbkZpeGVkKTtcbiAgICAgICAgICAgIGNvbnN0IHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQgPSB0aGlzLl9nZXRQYXJlbnRPZmZzZXQocGluRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBiYXNlRWxlbWVudE9mZnNldCA9IChpc1BpbkZpeGVkICYmIGlzQmFzZUZpeGVkKSA/IHRoaXMuX2dldExlZnRUb3AoYmFzZUVsZW1lbnQpIDogYmFzZUVsZW1lbnRQb2ludHMub2Zmc2V0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBiYXNlRWxlbWVudE9mZnNldC50b3AgKyBiYXNlRWxlbWVudFBvaW50cy55IC0gcGluRWxlbWVudFBhcmVudE9mZnNldC50b3AgLSBwaW5FbGVtZW50UG9pbnRzLnk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gYmFzZUVsZW1lbnRPZmZzZXQubGVmdCArIGJhc2VFbGVtZW50UG9pbnRzLnggLSBwaW5FbGVtZW50UGFyZW50T2Zmc2V0LmxlZnQgIC0gcGluRWxlbWVudFBvaW50cy54O1xuICAgICAgICAgICAgdGhpcy5fc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwge2xlZnQsIHRvcH0sIHRoaXMub2Zmc2V0KTtcblxuICAgICAgICAgICAgaWYgKCFmaXJzdFBvc2l0aW9uUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RQb3NpdGlvblJlc3VsdCA9IHtsZWZ0LCB0b3B9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzSW5WaWV3cG9ydChwaW5FbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluVmlld3BvcnRMZWZ0ID0gdGhpcy5fbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIGZpcnN0UG9zaXRpb25SZXN1bHQubGVmdCwgJ0xlZnQnLCBpc1BpbkZpeGVkKTtcbiAgICAgICAgY29uc3QgaW5WaWV3cG9ydFRvcCA9IHRoaXMuX21ha2VFbGVtZW50SW5WaWV3cG9ydChwaW5FbGVtZW50LCBmaXJzdFBvc2l0aW9uUmVzdWx0LnRvcCwgJ1RvcCcsIGlzUGluRml4ZWQpO1xuXG4gICAgICAgIHRoaXMuX3NldFBpbkVsZW1lbnRQb3N0aW9uKHBpbkVsZW1lbnQsIHtsZWZ0OiBpblZpZXdwb3J0TGVmdCwgdG9wOiBpblZpZXdwb3J0VG9wfSk7XG4gICAgICAgIHJldHVybiBleHBlY3RlZEFsaWduWzBdO1xuICAgIH1cblxuICAgIF9nZXRQYXJlbnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgJiYgZG9tLmdldFN0eWxlKHBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KHBhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBvZmZzZXQudG9wICs9IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKHBhcmVudCwgJ2JvcmRlci10b3Atd2lkdGgnKSwgMTApO1xuICAgICAgICBvZmZzZXQubGVmdCArPSBwYXJzZUZsb2F0KGRvbS5nZXRTdHlsZShwYXJlbnQsICdib3JkZXItbGVmdC13aWR0aCcpLCAxMCk7XG4gICAgICAgIG9mZnNldC5vZmZzZXRQYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfVxuXG4gICAgX21ha2VFbGVtZW50SW5WaWV3cG9ydChwaW5FbGVtZW50LCBudW1iZXIsIHR5cGUsIGlzUGluRml4ZWQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bWJlcjtcbiAgICAgICAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gcGluRWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChyZXN1bHQgPCAwKSB7XG4gICAgICAgICAgICBpZiAoaXNQaW5GaXhlZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSAmJiBkb20uZ2V0U3R5bGUob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHdoZW4gZGl2J3Mgb2Zmc2V0UGFyZW50IGlzIGRvY3VtZW50LmJvZHksIHdlIHNldCBuZXcgcG9zaXRpb24gcmVzdWx0LlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE1hdGgubWF4KGRvY0VsZW1lbnRbYHNjcm9sbCR7dHlwZX1gXSwgZG9jdW1lbnQuYm9keVtgc2Nyb2xsJHt0eXBlfWBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX25vcm1hbGl6ZVBvc2l0aW9uKGVsZW1lbnQsIGFsaWduLCBpc1BpbkZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuX25vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCwgaXNQaW5GaXhlZCk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZVhZKHBvaW50cywgYWxpZ24pO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG4gICAgX25vcm1hbGl6ZVhZKHBvaW50cywgYWxpZ24pIHtcbiAgICAgICAgY29uc3QgeCA9IGFsaWduLnNwbGl0KCcnKVsxXTtcbiAgICAgICAgY29uc3QgeSA9IGFsaWduLnNwbGl0KCcnKVswXTtcblxuICAgICAgICBwb2ludHMueCA9IHRoaXMuX3h5Q29udmVydGVyKHgsIHBvaW50cywgJ3dpZHRoJyk7XG4gICAgICAgIHBvaW50cy55ID0gdGhpcy5feHlDb252ZXJ0ZXIoeSwgcG9pbnRzLCAnaGVpZ2h0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICBfeHlDb252ZXJ0ZXIoYWxpZ24sIHBvaW50cywgdHlwZSkge1xuICAgICAgICBjb25zdCByZXMgPSBhbGlnbi5yZXBsYWNlKC90fGwvZ2ksICcwJScpXG4gICAgICAgICAgICAucmVwbGFjZSgvYy9naSwgJzUwJScpXG4gICAgICAgICAgICAucmVwbGFjZSgvYnxyL2dpLCAnMTAwJScpXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcZCspJS9naSwgZnVuY3Rpb24obSwgZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludHMuc2l6ZSgpW3R5cGVdICogKGQgLyAxMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocmVzLCAxMCkgfHwgMDtcbiAgICB9XG5cbiAgICBfZ2V0TGVmdFRvcChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBwYXJzZUZsb2F0KGRvbS5nZXRTdHlsZShlbGVtZW50LCAnbGVmdCcpKSB8fCAwLFxuICAgICAgICAgICAgdG9wOiBwYXJzZUZsb2F0KGRvbS5nZXRTdHlsZShlbGVtZW50LCAndG9wJykpIHx8IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplRWxlbWVudChlbGVtZW50LCBpc1BpbkZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSwgaXNWaWV3cG9ydCA9IChlbGVtZW50ID09PSBWSUVXUE9SVCksIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgcmVzdWx0Lm9mZnNldCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1BpbkZpeGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNWaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGdldFBhZ2VYKCksXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZ2V0UGFnZVkoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3VsdC5zaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZG9jRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBkb2NFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9nZXRFbGVtZW50T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBjb25zdCBkb2NDbGllbnRMZWZ0ID0gKGRvY0VsZW1lbnQuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMCk7XG4gICAgICAgIGNvbnN0IGRvY0NsaWVudFRvcCA9IChkb2NFbGVtZW50LmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgKGdldFBhZ2VYKCkgLSBkb2NDbGllbnRMZWZ0KSxcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyAoZ2V0UGFnZVkoKSAtIGRvY0NsaWVudFRvcClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIGxvY2F0aW9uIG9mIHRoZSBvdmVyZmxvdyB0byBjYWxjdWxhdGUgdGhlIGRlc2lyZWQgcG9zaXRpb25pbmdcbiAgICBfZ2V0RXhwZWN0ZWRBbGlnbigpIHtcbiAgICAgICAgY29uc3QgYWxpZ24gPSB0aGlzLmlzUnRsID8gdGhpcy5fcmVwbGFjZUFsaWduRGlyKHRoaXMuYWxpZ24sIC9sfHIvZywge2w6ICdyJywgcjogJ2wnfSkgOiB0aGlzLmFsaWduO1xuICAgICAgICBjb25zdCBleHBlY3RlZEFsaWduID0gW2FsaWduXTtcblxuICAgICAgICBpZiAodGhpcy5uZWVkQWRqdXN0KSB7XG4gICAgICAgICAgICBpZiAoL3R8Yi9nLnRlc3QoYWxpZ24pKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL3R8Yi9nLCB7dDogJ2InLCBiOiAndCd9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL2x8ci9nLnRlc3QoYWxpZ24pKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2x8ci9nLCB7bDogJ3InLCByOiAnbCd9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL2MvZy50ZXN0KGFsaWduKSkge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkQWxpZ24ucHVzaCh0aGlzLl9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIC9jKD89IHwkKS9nLCB7YzogJ2wnfSkpO1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkQWxpZ24ucHVzaCh0aGlzLl9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIC9jKD89IHwkKS9nLCB7YzogJ3InfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2x8cnx0fGIvZywge2w6ICdyJywgcjogJ2wnLCB0OiAnYicsIGI6ICd0J30pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwZWN0ZWRBbGlnbjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gYWxpZ24gb3JkZXIuXG4gICAgX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgcmVnRXhwLCBtYXApIHtcbiAgICAgICAgcmV0dXJuIGFsaWduLnJlcGxhY2UocmVnRXhwLCByZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1hcFtyZXNdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZXRlY3RpbmcgZWxlbWVudCBpcyBpbiB0aGUgd2luZG9377yMIHdlIHdhbnQgdG8gYWRqdXN0IHBvc2l0aW9uIGxhdGVyLlxuICAgIF9pc0luVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBfZ2V0Vmlld3BvcnRTaXplKCk7XG4gICAgICAgIC8vIEF2b2lkIGFuaW1hdGUgcHJvYmxlbSB0aGF0IHVzZSBvZmZzZXRXaWR0aCBpbnN0ZWFkIG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdC5cbiAgICAgICAgY29uc3QgZWxlbWVudFJlY3QgPSBfZ2V0RWxlbWVudFJlY3QoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiAoZWxlbWVudFJlY3QubGVmdCA+PSAwICYmIGVsZW1lbnRSZWN0LmxlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoIDw9IHZpZXdwb3J0U2l6ZS53aWR0aCAmJlxuICAgICAgICAgICAgZWxlbWVudFJlY3QudG9wID49IDAgJiYgZWxlbWVudFJlY3QudG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gdmlld3BvcnRTaXplLmhlaWdodCk7XG4gICAgfVxuICAgIC8vIOWcqOi/memHjOWBmlJUTOWIpOaWrSB0b3AtbGVmdCDlrprkvY3ovazljJbkuLrnrYnmlYjnmoQgdG9wLXJpZ2h05a6a5L2NXG4gICAgX3NldFBpbkVsZW1lbnRQb3N0aW9uKHBpbkVsZW1lbnQsIHBvc3Rpb24sIG9mZnNldCA9IFswLCAwXSkge1xuICAgICAgICBjb25zdCB7dG9wLCBsZWZ0fSA9IHBvc3Rpb247XG4gICAgICAgIGlmICghdGhpcy5pc1J0bCkge1xuICAgICAgICAgICAgZG9tLnNldFN0eWxlKHBpbkVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHtsZWZ0ICsgb2Zmc2V0WzBdfXB4YCxcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RvcCArIG9mZnNldFsxXX1weGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyYW5zZmVyIHtsZWZ0LHRvcH0gZXF1YWx5IHRvIHtyaWdodCx0b3B9XG4gICAgICAgIGNvbnN0IHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQgPSB0aGlzLl9nZXRQYXJlbnRPZmZzZXQocGluRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHt3aWR0aDogb2Zmc2V0UGFyZW50V2lkdGh9ID0gIF9nZXRFbGVtZW50UmVjdChwaW5FbGVtZW50UGFyZW50T2Zmc2V0Lm9mZnNldFBhcmVudCk7XG4gICAgICAgIGNvbnN0IHt3aWR0aH0gPSBfZ2V0RWxlbWVudFJlY3QocGluRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gb2Zmc2V0UGFyZW50V2lkdGggLSAobGVmdCArIHdpZHRoKTtcbiAgICAgICAgZG9tLnNldFN0eWxlKHBpbkVsZW1lbnQsIHtcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0OiBgJHtyaWdodCArIG9mZnNldFswXX1weGAsXG4gICAgICAgICAgICB0b3A6IGAke3RvcCArIG9mZnNldFsxXX1weGAsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3V0aWxzL3Bvc2l0aW9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZnVuYywgS0VZQ09ERSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9vdmVybGF5JztcblxuY29uc3QgeyBub29wLCBtYWtlQ2hhaW4sIGJpbmRDdHggfSA9IGZ1bmM7XG5cbi8qKlxuICogT3ZlcmxheS5Qb3B1cFxuICogQGRlc2NyaXB0aW9uIOe7p+aJvyBPdmVybGF5IOeahCBBUEnvvIzpmaTpnZ7nibnliKvor7TmmI5cbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeW8ueWxguaYvuekuuaIlumakOiXj+eahOaTjeS9nOexu+Wei++8jOWPr+S7peaYryAnY2xpY2sn77yMJ2hvdmVyJ++8jCdmb2N1cyfvvIzmiJbogIXlroPku6znu4TmiJDnmoTmlbDnu4TvvIzlpoIgWydob3ZlcicsICdmb2N1cyddXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyVHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlvZPliY3mmK/lkKbmmL7npLpcbiAgICAgICAgICovXG4gICAgICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC6buY6K6k5piv5ZCm5pi+56S6XG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmmL7npLrmiJbpmpDol4/ml7bop6blj5HnmoTlm57osIPlh73mlbBcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSB2aXNpYmxlIOW8ueWxguaYr+WQpuaYvuekulxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDop6blj5HlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTmnaXmupBcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGUgRE9N5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog6K6+572u5q2k5bGe5oCn77yM5by55bGC5peg5rOV5pi+56S65oiW6ZqQ6JePXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTlu7bml7bml7bpl7TvvIjku6Xmr6vnp5LkuLrljZXkvY3vvInvvIzlnKggdHJpZ2dlclR5cGUg6KKr6K6+572u5Li6IGhvdmVyIOaXtueUn+aViFxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlhYPntKDmmK/lkKblj6/ku6XlhbPpl63lvLnlsYJcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeeahOWPgueFp+WFg+e0oFxuICAgICAgICAgKiBAZGVmYXVsdCB0YXJnZXQg5bGe5oCn77yM5Y2z6Kem5Y+R5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHNhZmVOb2RlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm6Lef6ZqPdHJpZ2dlcua7muWKqFxuICAgICAgICAgKi9cbiAgICAgICAgZm9sbG93VHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgaGFzTWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHdyYXBwZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHJpZ2dlclR5cGU6ICdob3ZlcicsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIGNhbkNsb3NlQnlUcmlnZ2VyOiB0cnVlLFxuICAgICAgICBmb2xsb3dUcmlnZ2VyOiBmYWxzZSxcbiAgICAgICAgY29udGFpbmVyOiAoKSA9PiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHR5cGVvZiBwcm9wcy52aXNpYmxlID09PSAndW5kZWZpbmVkJyA/IHByb3BzLmRlZmF1bHRWaXNpYmxlIDogcHJvcHMudmlzaWJsZVxuICAgICAgICB9O1xuXG4gICAgICAgIGJpbmRDdHgodGhpcywgW1xuICAgICAgICAgICAgJ2hhbmRsZVRyaWdnZXJDbGljaycsICdoYW5kbGVUcmlnZ2VyS2V5RG93bicsXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXInLCAnaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUnLFxuICAgICAgICAgICAgJ2hhbmRsZVRyaWdnZXJGb2N1cycsICdoYW5kbGVUcmlnZ2VyQmx1cicsXG4gICAgICAgICAgICAnaGFuZGxlQ29udGVudE1vdXNlRW50ZXInLCAnaGFuZGxlQ29udGVudE1vdXNlTGVhdmUnLFxuICAgICAgICAgICAgJ2hhbmRsZUNvbnRlbnRNb3VzZURvd24nLCAnaGFuZGxlUmVxdWVzdENsb3NlJyxcbiAgICAgICAgICAgICdoYW5kbGVNYXNrTW91c2VFbnRlcicsICdoYW5kbGVNYXNrTW91c2VMZWF2ZSdcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCd2aXNpYmxlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBbJ190aW1lcicsICdfaGlkZVRpbWVyJywgJ19zaG93VGltZXInXS5mb3JFYWNoKHRpbWUgPT4ge1xuICAgICAgICAgICAgdGhpc1t0aW1lXSAmJiBjbGVhclRpbWVvdXQodGhpc1t0aW1lXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSwgdHlwZSwgZSkge1xuICAgICAgICBpZiAoISgndmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vblZpc2libGVDaGFuZ2UodmlzaWJsZSwgdHlwZSwgZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSAmJiAhdGhpcy5wcm9wcy5jYW5DbG9zZUJ5VHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKCF0aGlzLnN0YXRlLnZpc2libGUsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJLZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5TUEFDRSB8fCBlLmtleUNvZGUgPT09IEtFWUNPREUuRU5URVIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXIoZSkge1xuICAgICAgICB0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9oaWRlVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zaG93VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd1RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHRydWUsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZShlLCB0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fc2hvd1RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsIHR5cGUgfHwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJGb2N1cyhlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSh0cnVlLCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyQmx1cihlKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNGb3J3YXJkQ29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlLCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0ZvcndhcmRDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGVudE1vdXNlRG93bigpIHtcbiAgICAgICAgdGhpcy5faXNGb3J3YXJkQ29udGVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGVudE1vdXNlRW50ZXIoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZShlLCAnZnJvbUNvbnRlbnQnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNYXNrTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNYXNrTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5fbW91c2VOb3RGaXJzdE9uTWFzayA9IHRydWU7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVxdWVzdENsb3NlKHR5cGUsIGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlLCB0eXBlLCBlKTtcbiAgICB9XG5cbiAgICByZW5kZXJUcmlnZ2VyKCkge1xuICAgICAgICBjb25zdCB7IHRyaWdnZXIsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIGtleTogJ3RyaWdnZXInLFxuICAgICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnN0YXRlLnZpc2libGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRyaWdnZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclR5cGVzID0gQXJyYXkuaXNBcnJheSh0cmlnZ2VyVHlwZSkgPyB0cmlnZ2VyVHlwZSA6IFt0cmlnZ2VyVHlwZV07XG4gICAgICAgICAgICBjb25zdCB7IG9uQ2xpY2ssIG9uS2V5RG93biwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdHJpZ2dlci5wcm9wcztcbiAgICAgICAgICAgIHRyaWdnZXJUeXBlcy5mb3JFYWNoKHRyaWdnZXJUeXBlID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRyaWdnZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2ssIG9uQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25LZXlEb3duID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlcktleURvd24sIG9uS2V5RG93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaG92ZXInIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VFbnRlciA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUVudGVyLCBvbk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUxlYXZlID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUsIG9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJGb2N1cywgb25Gb2N1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkJsdXIgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyQmx1ciwgb25CbHVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb250ZW50KCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCB0cmlnZ2VyVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdHJpZ2dlclR5cGVzID0gQXJyYXkuaXNBcnJheSh0cmlnZ2VyVHlwZSkgPyB0cmlnZ2VyVHlwZSA6IFt0cmlnZ2VyVHlwZV07XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgeyBvbk1vdXNlRG93biwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUgfSA9IGNvbnRlbnQucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAga2V5OiAncG9ydGFsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRyaWdnZXJUeXBlcy5mb3JFYWNoKHRyaWdnZXJUeXBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJpZ2dlclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VEb3duID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlQ29udGVudE1vdXNlRG93biwgb25Nb3VzZURvd24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdob3Zlcic6XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VFbnRlciA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZUNvbnRlbnRNb3VzZUVudGVyLCBvbk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlTGVhdmUgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVDb250ZW50TW91c2VMZWF2ZSwgb25Nb3VzZUxlYXZlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY29udGVudCwgcHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcnRhbCgpIHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQsIHNhZmVOb2RlLCBmb2xsb3dUcmlnZ2VyLCB0cmlnZ2VyVHlwZSwgaGFzTWFzaywgd3JhcHBlclN0eWxlLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7Y29udGFpbmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGZpbmRUcmlnZ2VyTm9kZSA9ICgpID0+IChmaW5kRE9NTm9kZSh0aGlzKSB8fCB7fSk7XG4gICAgICAgIGNvbnN0IHNhZmVOb2RlcyA9IEFycmF5LmlzQXJyYXkoc2FmZU5vZGUpID8gWy4uLnNhZmVOb2RlXSA6IFtzYWZlTm9kZV07XG4gICAgICAgIHNhZmVOb2Rlcy51bnNoaWZ0KGZpbmRUcmlnZ2VyTm9kZSk7XG5cbiAgICAgICAgY29uc3QgbmV3V3JhcHBlclN0eWxlID0gd3JhcHBlclN0eWxlIHx8IHt9O1xuXG4gICAgICAgIGlmIChmb2xsb3dUcmlnZ2VyKSB7XG4gICAgICAgICAgICBjb250YWluZXIgPSB0cmlnZ2VyID0+IHRyaWdnZXIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIG5ld1dyYXBwZXJTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlclR5cGUgPT09ICdob3ZlcicgJiYgaGFzTWFzaykge1xuICAgICAgICAgICAgb3RoZXJzLm9uTWFza01vdXNlRW50ZXIgPSB0aGlzLmhhbmRsZU1hc2tNb3VzZUVudGVyO1xuICAgICAgICAgICAgb3RoZXJzLm9uTWFza01vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1hc2tNb3VzZUxlYXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPdmVybGF5IHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAga2V5PVwib3ZlcmxheVwiXG4gICAgICAgICAgICAgICAgcmVmPXtvdmVybGF5ID0+ICh0aGlzLm92ZXJsYXkgPSBvdmVybGF5KX1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PXt0YXJnZXQgfHwgZmluZFRyaWdnZXJOb2RlfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgICAgICAgICAgIHNhZmVOb2RlPXtzYWZlTm9kZXN9XG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlPXtuZXdXcmFwcGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGU9e3RyaWdnZXJUeXBlfVxuICAgICAgICAgICAgICAgIGhhc01hc2s9e2hhc01hc2t9XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUcmlnZ2VyKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcnRhbCgpXG4gICAgICAgIF07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvcG9wdXAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCBCYWxsb29uSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5pbXBvcnQge25vcm1hbE1hcCBhcyBhbGlnbk1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbmNvbnN0IHtQb3B1cH0gPSBPdmVybGF5O1xuXG4vKiogQmFsbG9vbi5Ub29sdGlwICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75ZCN55qE5ZOB54mM5YmN57yAXG4gICAgICAgICAqL1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnnsbvlkI1cbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieWGheiBlOagt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b29sdGlw55qE5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWHuuWxguS9jee9rlxuICAgICAgICAgKiBAZW51bWRlc2Mg5LiKLCDlj7MsIOS4iywg5bemLCDkuIrlt6YsIOS4iuWPsywg5LiL5bemLCDkuIvlj7MsIOW3puS4iiwg5bem5LiLLCDlj7PkuIosIOWPs+S4iyDlj4rlhbYg5Lik5Lik57uE5ZCIXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndCcsICdyJywgJ2InLCAnbCcsICd0bCcsICd0cicsICdibCcsICdicicsICdsdCcsICdsYicsICdydCcsICdyYiddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeihjOS4ulxuICAgICAgICAgKiDpvKDmoIfmgqzmta4sIOiOt+WPluWIsOeEpueCuSwg6byg5qCH54K55Ye7KCdob3ZlcifvvIwnZm9jdXMn77yMJ2NsaWNrJynmiJbogIXlroPku6znu4TmiJDnmoTmlbDnu4TvvIzlpoIgWydob3ZlcicsICdmb2N1cyddXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyVHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZzdHlsZe+8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu2Y2xhc3NOYW1l77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu25bGe5oCn77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKZwdXJlIHJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjIflrprmta7lsYLmuLLmn5PnmoTniLboioLngrksIOWPr+S7peS4uuiKgueCuWlk55qE5a2X56ym5Liy77yM5Lmf5Y+v5Lul6L+U5Zue6IqC54K555qE5Ye95pWw44CCXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgmlkLCDkvKDlhaXlgLzmiY3kvJrmlK/mjIHml6Dpmpznoo1cbiAgICAgICAgICovXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBhbGlnbjogJ2InLFxuICAgICAgICB0cmlnZ2VyOiA8c3Bhbj48L3NwYW4+XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLl9jb250ZW50SWQgPSBwcm9wcy5pZDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBhbGlnbiwgc3R5bGUsIHByZWZpeCwgdHJpZ2dlciwgY2hpbGRyZW4sIHBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgICAgcG9wdXBQcm9wcywgcG9wdXBDbGFzc05hbWUsIHBvcHVwU3R5bGUsIHRyaWdnZXJUeXBlLCBydGwsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB0ck9yaWdpbiA9ICd0ck9yaWdpbic7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIG90aGVycy5ydGwgPSB0cnVlO1xuICAgICAgICAgICAgdHJPcmlnaW4gPSAncnRsVHJPcmlnaW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYWxpZ25NYXBbYWxpZ25dW3RyT3JpZ2luXTtcbiAgICAgICAgY29uc3QgX29mZnNldCA9IGFsaWduTWFwW2FsaWduXS5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IF9zdHlsZSA9IHt0cmFuc2Zvcm1PcmlnaW4sIC4uLnN0eWxlfTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gKDxCYWxsb29uSW5uZXJcbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBpZD17dGhpcy5fY29udGVudElkfVxuICAgICAgICAgICAgcHJlZml4PXtwcmVmaXh9XG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBpc1Rvb2x0aXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e19zdHlsZX1cbiAgICAgICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQmFsbG9vbklubmVyPik7XG5cbiAgICAgICAgY29uc3QgdHJpZ2dlclByb3BzID0ge307XG4gICAgICAgIHRyaWdnZXJQcm9wc1snYXJpYS1kZXNjcmliZWRieSddID0gdGhpcy5fY29udGVudElkO1xuICAgICAgICB0cmlnZ2VyUHJvcHMudGFiSW5kZXggPSAnMCc7XG5cbiAgICAgICAgY29uc3QgbmV3VHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudCh0cmlnZ2VyLCB0cmlnZ2VyUHJvcHMpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICB7Li4ucG9wdXBQcm9wc31cbiAgICAgICAgICAgICAgICBjb250YWluZXI9e3BvcHVwQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e3RoaXMuX2NvbnRlbnRJZCA/IG5ld1RyaWdnZXIgOiB0cmlnZ2VyfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlPXt0cmlnZ2VyVHlwZX1cbiAgICAgICAgICAgICAgICBhbGlnbj17YWxpZ25NYXBbYWxpZ25dLmFsaWdufVxuICAgICAgICAgICAgICAgIG9mZnNldD17X29mZnNldH1cbiAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BvcHVwQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtwb3B1cFN0eWxlfVxuICAgICAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL3Rvb2x0aXAuanN4IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJpbXBvcnQgJy4uL2FuaW1hdGUvc3R5bGUuanMnO1xuaW1wb3J0ICcuLi9vdmVybGF5L3N0eWxlLmpzJztcbmltcG9ydCAnLi4vaWNvbi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL3N0eWxlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRlL21haW4uc2NzcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9tYWluLnNjc3MiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vbWFpbi5zY3NzIiwiaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vdmlldy9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vdmlldy9ncm91cCc7XG5cbkJ1dHRvbi5Hcm91cCA9IEJ1dHRvbkdyb3VwO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQnV0dG9uLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKCdzaGFwZScgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ3NoYXBlJywgJ3RleHQgfCB3YXJuaW5nIHwgZ2hvc3QnLCAnQnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgc2hhcGUsIHR5cGUsIC4uLm90aGVycyB9ID0gcHJvcHM7XG5cbiAgICAgICAgICAgIGxldCBuZXdUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGlnaHQnIHx8IHR5cGUgPT09ICdkYXJrJyB8fCAodHlwZSA9PT0gJ3NlY29uZGFyeScgJiYgc2hhcGUgPT09ICd3YXJuaW5nJykpIHtcbiAgICAgICAgICAgICAgICBuZXdUeXBlID0gJ25vcm1hbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBnaG9zdDtcbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gJ2dob3N0Jykge1xuICAgICAgICAgICAgICAgIGdob3N0ID0gKHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiAnZGFyaycsXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0OiAnbGlnaHQnXG4gICAgICAgICAgICAgICAgfSlbdHlwZSB8fCBCdXR0b24uZGVmYXVsdFByb3BzLnR5cGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2hhcGUgPT09ICd0ZXh0JztcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmcgPSBzaGFwZSA9PT0gJ3dhcm5pbmcnO1xuXG4gICAgICAgICAgICBwcm9wcyA9IHsgdHlwZTogbmV3VHlwZSwgZ2hvc3QsIHRleHQsIHdhcm5pbmcsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi9pbmRleC5qc3giLCJpbXBvcnQgJy4uL2ljb24vc3R5bGUuanMnO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL3N0eWxlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmZ1bmN0aW9uIG1hcEljb25TaXplKHNpemUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgbGFyZ2U6ICdzbWFsbCcsXG4gICAgICAgIG1lZGl1bTogJ3hzJyxcbiAgICAgICAgc21hbGw6ICd4cycsXG4gICAgfSlbc2l6ZV07XG59XG5cbi8qKiBCdXR0b24gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyJ6ZKu55qE57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdub3JtYWwnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjInpkq7nmoTlsLrlr7hcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMiemSruS4rSBJY29uIOeahOWwuuWvuO+8jOeUqOS6juabv+S7oyBJY29uIOeahOm7mOiupOWkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3h4cycsICd4cycsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneGwnLCAneHhsJywgJ3h4eGwnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZMgY29tcG9uZW50ID0gJ2J1dHRvbicg5pe277yM6K6+572uIGJ1dHRvbiDmoIfnrb7nmoQgdHlwZSDlgLxcbiAgICAgICAgICovXG4gICAgICAgIGh0bWxUeXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAncmVzZXQnLCAnYnV0dG9uJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6K6+572u5qCH562+57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdhJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6K6+572u5oyJ6ZKu55qE6L295YWl54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuS4uuW5veeBteaMiemSrlxuICAgICAgICAgKi9cbiAgICAgICAgZ2hvc3Q6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgZmFsc2UsICdsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li65paH5pys5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuS4uuitpuWRiuaMiemSrlxuICAgICAgICAgKi9cbiAgICAgICAgd2FybmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeCueWHu+aMiemSrueahOWbnuiwg1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBFdmVudCBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uTW91c2VVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICAgICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgICAgICBjb21wb25lbnQ6ICdidXR0b24nLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZ2hvc3Q6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBmYWxzZSxcbiAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge31cbiAgICB9O1xuXG4gICAgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5idXR0b24uYmx1cigpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlVXAoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYnV0dG9uUmVmSGFuZGxlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIGNsYXNzTmFtZSwgdHlwZSwgc2l6ZSwgaHRtbFR5cGUsIGxvYWRpbmcsIHRleHQsIHdhcm5pbmcsIGdob3N0LCBjb21wb25lbnQsIGljb25TaXplLCBjaGlsZHJlbiwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGdob3N0VHlwZSA9IFsnbGlnaHQnLCAnZGFyayddLmluZGV4T2YoZ2hvc3QpID49IDAgPyBnaG9zdCA6ICdkYXJrJztcblxuICAgICAgICBjb25zdCBidG5DbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7cHJlZml4fSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLSR7dHlwZX1gXTogdHlwZSAmJiAhZ2hvc3QsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi10ZXh0YF06IHRleHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi13YXJuaW5nYF06IHdhcm5pbmcsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1naG9zdGBdOiBnaG9zdCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLSR7Z2hvc3RUeXBlfWBdOiBnaG9zdCxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSBDaGlsZHJlbi5jb3VudChjaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGNsb25lZENoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkLnR5cGUgPT09ICdmdW5jdGlvbicgJiYgY2hpbGQudHlwZS5fdHlwZU1hcmsgPT09ICdpY29uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25DbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4taWNvbmBdOiAhaWNvblNpemUsIC8vIOWmguaenOeUqOaIt+ayoeacieS8oCBpY29uU2l6Ze+8jOWImeS9v+eUqOivpeagt+W8j+agh+iusCBpY29uIOS4uiBidXR0b24g6aKE6K6+5bC65a+4XG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1maXJzdGBdOiBjb3VudCA+IDEgJiYgaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1sYXN0YF06IGNvdW50ID4gMSAmJiBpbmRleCA9PT0gY291bnQgLSAxLFxuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fWljb24tYWxvbmVgXTogY291bnQgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgIFtjaGlsZC5wcm9wcy5jbGFzc05hbWVdOiAhIWNoaWxkLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBpY29uU2l6ZSB8fCBtYXBJY29uU2l6ZShzaXplKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFRhZ05hbWUgPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHRhZ0F0dHJzID0ge1xuICAgICAgICAgICAgLi4ub3RoZXJzLFxuICAgICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGJ0bkNsc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChUYWdOYW1lID09PSAnYScpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0YWdBdHRycy50eXBlO1xuXG4gICAgICAgICAgICBpZiAodGFnQXR0cnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFnQXR0cnMub25DbGljazsgLy8gYSDmoIfnrb7nmoQgb25DbGljayDmtY/op4jlmajpu5jorqTkuI3kvJrnpoHnlKhcbiAgICAgICAgICAgICAgICB0YWdBdHRycy5ocmVmICYmIGRlbGV0ZSB0YWdBdHRycy5ocmVmOyAvLyBhIOagh+etvuWcqOemgeeUqOeKtuaAgeS4i+aXoOi3s+i9rFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWdOYW1lIHsuLi50YWdBdHRyc30gZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH0gcmVmPXt0aGlzLmJ1dHRvblJlZkhhbmRsZXJ9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICB7Y2xvbmVkQ2hpbGRyZW59XG4gICAgICAgICAgICA8L1RhZ05hbWU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi92aWV3L2J1dHRvbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXInO1xuXG4vKipcbiAqIEJ1dHRvbi5Hcm91cFxuICovXG5jbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog57uf5LiA6K6+572uIEJ1dHRvbiDnu4Tku7bnmoTmjInpkq7lpKflsI9cbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIGNsYXNzTmFtZSwgc2l6ZSwgY2hpbGRyZW4sIHJ0bCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwQ2xzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1ncm91cGBdOiB0cnVlLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9uZUNoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBvdGhlcnMuZGlyID0gJ3J0bCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4ub3RoZXJzfSBjbGFzc05hbWU9e2dyb3VwQ2xzfT5cbiAgICAgICAgICAgICAgICB7Y2xvbmVDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKEJ1dHRvbkdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24vdmlldy9ncm91cC5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi9tYWluLnNjc3MiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qKlxuICog6I635Y+W5a+56LGh55qE57G75Z6LXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAZXhhbXBsZVxuICogdHlwZU9mKFtdKSA9PT0gJ0FycmF5J1xuICogdHlwZU9mKCkgPT09ICdVbmRlZmluZWQnXG4gKiB0eXBlT2YoMSkgPT09ICdOdW1iZXInXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlT2YgKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5yZXBsYWNlKC9cXFtvYmplY3RcXHN8XS9nLCAnJyk7XG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv5pWw57uE5oiW57G75pWw57uE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBleGFtcGxlXG4gKiBpc0FycmF5TGlrZShbXSkgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKGFyZ3VtZW50cykgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAob2JqKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gISFvYmogJiYgJ2xlbmd0aCcgaW4gb2JqICYmIG9iai5sZW5ndGg7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVPZihvYmopO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdBcnJheScgfHwgbGVuZ3RoID09PSAwIHx8XG4gICAgICAgICh0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmopO1xufVxuXG4vKipcbiAqIOWIpOaWreWvueixoeaYr+WQpuaYr+S4gOS4qnByb21pc2XvvIzljbPmmK/lkKblj6/ku6XnlKgudGhlblxuICogQHBhcmFtICB7Kn0gIG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICog5piv5ZCm5piv5LiA5Liq57qv5YeA55qE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHJlZmVyZW5jZSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICAgIGlmICh0eXBlT2Yob2JqKSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGN0b3IgPSBvYmouY29uc3RydWN0b3I7XG5cbiAgICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3QgPSBjdG9yLnByb3RvdHlwZTtcblxuICAgIGlmICh0eXBlT2YocHJvdCkgIT09ICdPYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog5a+56LGh5rWF5q+U6L6DXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iakFcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqQlxuICogQHBhcmFtICB7RnVuY3Rpb259ICBbY29tcGFyZV0g5omL5Yqo6LCD55So5pa55rOV5q+U6L6DXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIOWvueixoea1heavlOi+g+aYr+WQpuebuOetiVxuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3Quc2hhbGxvd0VxdWFsKHthOiAxMDB9LCB7YTogMTAwfSk7IC8vIHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbCAob2JqQSwgb2JqQiwgY29tcGFyZSkge1xuICAgIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOWFtuS4reS4gOS4quS4jeaYr29iamVjdO+8jOWImeS4jeebuOetiVxuICAgIGlmICghb2JqQSB8fCAhb2JqQiB8fCAodHlwZW9mIG9iakEgKyB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdG9iamVjdCcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgY29uc3Qga2V5QiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICAgIGNvbnN0IGxlbiA9IGtleUEubGVuZ3RoO1xuXG4gICAgLy8ga2V5IOaVsOmHj+S4jeS4gOiHtOWImeS4jeebuOetiVxuICAgIGlmIChsZW4gIT09IGtleUIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IHR5cGVvZiBjb21wYXJlID09PSAnZnVuY3Rpb24nO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlBW2ldO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbEEgPSBvYmpBW2tleV07XG4gICAgICAgIGNvbnN0IHZhbEIgPSBvYmpCW2tleV07XG5cbiAgICAgICAgY29uc3QgcmV0ID0gaGFzQ2FsbGJhY2sgPyBjb21wYXJlKHZhbEEsIHZhbEIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgcmV0ID09PSB2b2lkIDAgJiYgdmFsQSAhPT0gdmFsQikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog6YGN5Y6G5a+56LGh5oiW5pWw57uE77yM5oiW6ICF57G75pWw57uE77yM5L6L5aaCUmVhY3TkuK3nmoRjaGlsZHJlbuWvueixoeOAgWFyZ3VtZW50c+etiVxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgIG9ialxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZuKG4sIGkpIG9yIGZuKHZhbCwga2V5KVxuICogQHBhcmFtICB7TnVtYmVyfSAgIFtkaXJlY3Rpb24gPSAxXSDmmK/lkKblgJLluo/pgY3ljobvvIzlj6rlr7nmlbDnu4TmnInmlYhcbiAqIEByZXR1cm4ge09iamVjdHxBcnJheX1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6YGN5Y6G5pWw57uEXG4gKiBvYmplY3QuZWFjaChbMTAwLCAyMDAsIDMwMF0sIChuLCBpKSA9PiBjb25zb2xlLmxvZyhuLCBpKSk7XG4gKiAvLyDpgY3ljoZqc29u5a+56LGhXG4gKiBvYmplY3QuZWFjaCh7YTogMTAwLCBiOiAyMDB9LCAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5LCB2YWx1ZSkpO1xuICogLy8g6YGN5Y6GUmVhY3TlrZDoioLngrlcbiAqIG9iamVjdC5lYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IGNvbnNvbGUubG9nKGNoaWxkKSk7XG4gKiAvLyDpgY3ljoZhcmd1bWVudHNcbiAqIG9iamVjdC5lYWNoKGFyZ3VtZW50cywgKGFyZywgaSkgPT4gY29uc29sZS5sb2coYXJnKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYWNoIChvYmosIGNhbGxiYWNrLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gLTE7XG4gICAgY29uc3QgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBsZXQgdmFsdWUsXG4gICAgICAgIGkgPSByZXZlcnNlZCA/IGxlbmd0aCAtIDEgOiAwO1xuXG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggJiYgaSA+PSAwOyByZXZlcnNlZCA/IGktLSA6IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjay5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG4vLyBAcHJpdmF0ZSDliKTmlq1rZXnmmK/lkKblnKjmlbDnu4TmiJblr7nosaHkuK1cbmNvbnN0IF9pc0luT2JqID0gKGtleSwgb2JqLCBpc0FycmF5KSA9PiBpc0FycmF5ID8gKG9iai5pbmRleE9mKGtleSkgPiAtMSkgIDogKGtleSBpbiBvYmopO1xuXG4vKipcbiAqIOi/h+a7pOWHuuWFtuWug+WxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzICAgICDooqvov4fmu6TnmoTlr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja090aGVycyhGb29Db21wb25lbnQucHJvcFR5cGVzLCB0aGlzLnByb3BzKTtcbiAqIG9iamVjdC5waWNrT3RoZXJzKFsnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJ10sIHRoaXMucHJvcHMpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja090aGVycyAoaG9sZFByb3BzLCBwcm9wcykge1xuICAgIGNvbnN0IG90aGVycyA9IHt9O1xuICAgIGNvbnN0IGlzQXJyYXkgPSB0eXBlT2YoaG9sZFByb3BzKSA9PT0gJ0FycmF5JztcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmICghX2lzSW5PYmooa2V5LCBob2xkUHJvcHMsIGlzQXJyYXkpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJzO1xufVxuXG4vKipcbiAqIOi/h+a7pOWHuuW4pnByZWZpeOeahOWxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHByZWZpeCAgICDljIXlkKvnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja0F0dHJzV2l0aChGb29Db21wb25lbnQucHJvcFR5cGVzLCAnZGF0YS0nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tBdHRyc1dpdGggKGhvbGRQcm9wcywgcHJlZml4KSB7XG4gICAgY29uc3Qgb3RoZXJzID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBob2xkUHJvcHMpIHtcbiAgICAgICAgaWYgKGtleS5tYXRjaChwcmVmaXgpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IGhvbGRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG90aGVycztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL29iamVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=