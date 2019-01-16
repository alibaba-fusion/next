webpackJsonp([7],[
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */,
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-icon[dir=\"rtl\"]::before {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n@font-face {\n  font-family: NextIcon;\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot\");\n  src: url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_515771_emcns5054x3whfr.svg#NextIcon\") format(\"svg\"); }\n\n.next-icon {\n  display: inline-block;\n  font-family: NextIcon;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .next-icon:before {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center; }\n  .next-icon-smile:before {\n    content: \"\\E65F\"; }\n  .next-icon-cry:before {\n    content: \"\\E65D\"; }\n  .next-icon-success:before {\n    content: \"\\E60A\"; }\n  .next-icon-warning:before {\n    content: \"\\E60B\"; }\n  .next-icon-prompt:before {\n    content: \"\\E60C\"; }\n  .next-icon-error:before {\n    content: \"\\E60D\"; }\n  .next-icon-help:before {\n    content: \"\\E673\"; }\n  .next-icon-clock:before {\n    content: \"\\E621\"; }\n  .next-icon-success-filling:before {\n    content: \"\\E63A\"; }\n  .next-icon-delete-filling:before {\n    content: \"\\E623\"; }\n  .next-icon-favorites-filling:before {\n    content: \"\\E60E\"; }\n  .next-icon-add:before {\n    content: \"\\E655\"; }\n  .next-icon-minus:before {\n    content: \"\\E601\"; }\n  .next-icon-arrow-up:before {\n    content: \"\\E625\"; }\n  .next-icon-arrow-down:before {\n    content: \"\\E63D\"; }\n  .next-icon-arrow-left:before {\n    content: \"\\E61D\"; }\n  .next-icon-arrow-right:before {\n    content: \"\\E619\"; }\n  .next-icon-arrow-double-left:before {\n    content: \"\\E659\"; }\n  .next-icon-arrow-double-right:before {\n    content: \"\\E65E\"; }\n  .next-icon-switch:before {\n    content: \"\\E6B3\"; }\n  .next-icon-sorting:before {\n    content: \"\\E634\"; }\n  .next-icon-descending:before {\n    content: \"\\E61F\"; }\n  .next-icon-ascending:before {\n    content: \"\\E61E\"; }\n  .next-icon-select:before {\n    content: \"\\E632\"; }\n  .next-icon-semi-select:before {\n    content: \"\\E633\"; }\n  .next-icon-search:before {\n    content: \"\\E656\"; }\n  .next-icon-close:before {\n    content: \"\\E626\"; }\n  .next-icon-ellipsis:before {\n    content: \"\\E654\"; }\n  .next-icon-picture:before {\n    content: \"\\E631\"; }\n  .next-icon-calendar:before {\n    content: \"\\E607\"; }\n  .next-icon-ashbin:before {\n    content: \"\\E639\"; }\n  .next-icon-upload:before {\n    content: \"\\E7EE\"; }\n  .next-icon-download:before {\n    content: \"\\E628\"; }\n  .next-icon-set:before {\n    content: \"\\E683\"; }\n  .next-icon-edit:before {\n    content: \"\\E63B\"; }\n  .next-icon-refresh:before {\n    content: \"\\E677\"; }\n  .next-icon-filter:before {\n    content: \"\\E627\"; }\n  .next-icon-attachment:before {\n    content: \"\\E665\"; }\n  .next-icon-account:before {\n    content: \"\\E608\"; }\n  .next-icon-email:before {\n    content: \"\\E605\"; }\n  .next-icon-atm:before {\n    content: \"\\E606\"; }\n  .next-icon-loading:before {\n    content: \"\\E646\";\n    -webkit-animation: loadingCircle 1s infinite linear;\n            animation: loadingCircle 1s infinite linear; }\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.next-icon.next-xxs:before {\n  width: 8px;\n  font-size: 8px;\n  line-height: inherit; }\n\n@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n  .next-icon.next-xxs {\n    -webkit-transform: scale(0.5);\n        -ms-transform: scale(0.5);\n            transform: scale(0.5);\n    margin-left: -4px;\n    margin-right: -4px; }\n    .next-icon.next-xxs:before {\n      width: 16px;\n      font-size: 16px; } }\n\n.next-icon.next-xs:before {\n  width: 12px;\n  font-size: 12px;\n  line-height: inherit; }\n\n.next-icon.next-small:before {\n  width: 16px;\n  font-size: 16px;\n  line-height: inherit; }\n\n.next-icon.next-medium:before {\n  width: 20px;\n  font-size: 20px;\n  line-height: inherit; }\n\n.next-icon.next-large:before {\n  width: 24px;\n  font-size: 24px;\n  line-height: inherit; }\n\n.next-icon.next-xl:before {\n  width: 32px;\n  font-size: 32px;\n  line-height: inherit; }\n\n.next-icon.next-xxl:before {\n  width: 48px;\n  font-size: 48px;\n  line-height: inherit; }\n\n.next-icon.next-xxxl:before {\n  width: 64px;\n  font-size: 64px;\n  line-height: inherit; }\n", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); } }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px); } }\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px); } }\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); } }\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n    -ms-transform: translateY(-100px);\n    transform: translateY(-100px); } }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@keyframes expandInWithFade {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: .1; }\n  50% {\n    opacity: .9; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@keyframes expandOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left top 0;\n    -ms-transform-origin: left top 0;\n    transform-origin: left top 0; } }\n\n@-webkit-keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@keyframes expandOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n    -ms-transform: scaleY(1);\n    transform: scaleY(1);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; }\n  100% {\n    opacity: 0;\n    -webkit-transform: scaleY(0.6);\n    -ms-transform: scaleY(0.6);\n    transform: scaleY(0.6);\n    -webkit-transform-origin: left bottom 0;\n    -ms-transform-origin: left bottom 0;\n    transform-origin: left bottom 0; } }\n\n@-webkit-keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes expandOutWithFade {\n  0% {\n    opacity: 1; }\n  70% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); }\n  20% {\n    -webkit-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  to {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.2s;\n  animation-duration: 0.2s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInDown {\n  -webkit-animation-name: expandInDown;\n  animation-name: expandInDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutUp {\n  -webkit-animation-name: expandOutUp;\n  animation-name: expandOutUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandInUp {\n  -webkit-animation-name: expandInUp;\n  animation-name: expandInUp;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expandOutDown {\n  -webkit-animation-name: expandOutDown;\n  animation-name: expandOutDown;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.expand-enter {\n  overflow: hidden; }\n\n.expand-enter-active {\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out; }\n  .expand-enter-active > * {\n    -webkit-animation-name: expandInWithFade;\n    animation-name: expandInWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n\n.expand-leave {\n  overflow: hidden; }\n\n.expand-leave-active {\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out; }\n  .expand-leave-active > * {\n    -webkit-animation-name: expandOutWithFade;\n    animation-name: expandOutWithFade;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n    -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    -webkit-animation-fill-mode: \"forwards\";\n    animation-fill-mode: \"forwards\";\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-overlay-wrapper .next-overlay-inner {\n  z-index: 1001; }\n\n.next-overlay-wrapper .next-overlay-backdrop {\n  position: fixed;\n  z-index: 1001;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  opacity: 0; }\n\n.next-overlay-wrapper.opened .next-overlay-backdrop {\n  opacity: 0.2; }\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-balloon {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  word-wrap: break-word;\n  z-index: 0;\n  /* size */\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon *,\n  .next-balloon *:before,\n  .next-balloon *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-primary {\n    color: #333333;\n    border-color: #4494F9;\n    background-color: #E3F2FD;\n    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-primary .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-primary .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-primary .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-primary .next-balloon-close :hover {\n        color: #333333; }\n    .next-balloon-primary:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #4494F9;\n      background-color: #E3F2FD;\n      z-index: -1; }\n    .next-balloon-primary.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-primary.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon-normal {\n    color: #333333;\n    border-color: #DCDEE3;\n    background-color: #FFFFFF;\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\n    border-width: 1px; }\n    .next-balloon-normal .next-balloon-close {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      font-size: 12px;\n      color: #999999; }\n      .next-balloon-normal .next-balloon-close .next-icon {\n        width: 12px;\n        height: 12px;\n        line-height: 12px; }\n        .next-balloon-normal .next-balloon-close .next-icon:before {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px; }\n      .next-balloon-normal .next-balloon-close :hover {\n        color: #666666; }\n    .next-balloon-normal:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: ' ';\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      -webkit-box-sizing: content-box !important;\n              box-sizing: content-box !important;\n      border: 1px solid #DCDEE3;\n      background-color: #FFFFFF;\n      z-index: -1; }\n    .next-balloon-normal.next-balloon-top:after {\n      top: -7px;\n      left: calc(50% + -7px);\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right:after {\n      top: calc(50% + -7px);\n      right: -7px;\n      border-left: none;\n      border-bottom: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom:after {\n      bottom: -7px;\n      left: calc(50% + -7px);\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left:after {\n      top: calc(50% + -7px);\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-top:after {\n      top: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-left-bottom:after {\n      bottom: 12px;\n      left: -7px;\n      border-top: none;\n      border-right: none;\n      -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-top:after {\n      top: 12px;\n      right: -7px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-right-bottom:after {\n      right: -7px;\n      bottom: 12px;\n      border-bottom: none;\n      border-left: none;\n      -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-left:after {\n      top: -7px;\n      left: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-top-right:after {\n      top: -7px;\n      right: 12px;\n      border-right: none;\n      border-bottom: none;\n      -webkit-box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-left:after {\n      bottom: -7px;\n      left: 12px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n    .next-balloon-normal.next-balloon-bottom-right:after {\n      right: 12px;\n      bottom: -7px;\n      border-top: none;\n      border-left: none;\n      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon.visible {\n    display: block; }\n  .next-balloon.hidden {\n    display: none; }\n  .next-balloon-medium {\n    padding: 16px 16px 16px 16px; }\n  .next-balloon-closable {\n    padding: 16px 40px 16px 16px; }\n\n.next-balloon-tooltip {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  max-width: 300px;\n  border-style: solid;\n  border-radius: 3px;\n  font-size: 12px;\n  z-index: 0;\n  color: #333333;\n  border-color: #DCDEE3;\n  background-color: #F2F3F7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-width: 1px;\n  /* size */ }\n  .next-balloon-tooltip *,\n  .next-balloon-tooltip *:before,\n  .next-balloon-tooltip *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-balloon-tooltip:after {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    content: ' ';\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-box-sizing: content-box !important;\n            box-sizing: content-box !important;\n    border: 1px solid #DCDEE3;\n    background-color: #F2F3F7;\n    z-index: -1; }\n  .next-balloon-tooltip-top:after {\n    top: -7px;\n    left: calc(50% + -7px);\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-right:after {\n    top: calc(50% + -7px);\n    right: -7px;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom:after {\n    bottom: -7px;\n    left: calc(50% + -7px);\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-left:after {\n    top: calc(50% + -7px);\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-top:after {\n    top: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-left-bottom:after {\n    bottom: 12px;\n    left: -7px;\n    border-top: none;\n    border-right: none; }\n  .next-balloon-tooltip-right-top:after {\n    top: 12px;\n    right: -7px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-right-bottom:after {\n    right: -7px;\n    bottom: 12px;\n    border-bottom: none;\n    border-left: none; }\n  .next-balloon-tooltip-top-left:after {\n    top: -7px;\n    left: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-top-right:after {\n    top: -7px;\n    right: 12px;\n    border-right: none;\n    border-bottom: none; }\n  .next-balloon-tooltip-bottom-left:after {\n    bottom: -7px;\n    left: 12px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip-bottom-right:after {\n    right: 12px;\n    bottom: -7px;\n    border-top: none;\n    border-left: none; }\n  .next-balloon-tooltip.visible {\n    display: block; }\n  .next-balloon-tooltip.hidden {\n    display: none; }\n  .next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n\n.next-balloon[dir=\"rtl\"] {\n  /* 带关闭按钮的右侧padding变大 */ }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-primary.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal .next-balloon-close {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-left: inherit;\n    border-bottom: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-right: inherit;\n    border-top: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-top:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-left: none;\n    border-bottom: none;\n    border-top: inherit;\n    border-right: inherit;\n    -webkit-box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-top:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-right: none;\n    border-top: none;\n    border-bottom: inherit;\n    border-left: inherit;\n    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1); }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-top-right:after {\n    right: auto;\n    left: 12px; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-normal.next-balloon-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon[dir=\"rtl\"].next-balloon-closable {\n    padding: 16px 16px 16px 40px; }\n\n.next-balloon-tooltip[dir=\"rtl\"] {\n  /* size */ }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-top:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-left-bottom:after {\n    right: -7px;\n    left: auto;\n    border-top: inherit;\n    border-right: inherit;\n    border-left: none;\n    border-bottom: none; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-top:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-right-bottom:after {\n    left: -7px;\n    right: auto;\n    border-top: none;\n    border-right: none;\n    border-left: inherit;\n    border-bottom: inherit; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-top-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-left:after {\n    right: 12px;\n    left: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-bottom-right:after {\n    left: 12px;\n    right: auto; }\n  .next-balloon-tooltip[dir=\"rtl\"].next-balloon-tooltip-medium {\n    padding: 8px 8px 8px 8px; }\n", ""]);

// exports


/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(52);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * 尺寸 基础尺寸\n * 命名能在语义的前提下简单就尽量简单, 这里可以是 size-2x, space-2x, size-base ...\n * 不过可以在语义的前提下做的更精简一些, 于是用了s2, s1等\n * 可用变量: `$s1 - $s8`\n * @example scss - 使用\n *   .element {\n *     padding: $s1 !default;\n *   }\n *\n * @example css - CSS 输出\n *   .element {\n *     padding: 4px !default;\n *   }\n */\n.next-btn {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .next-btn *,\n  .next-btn *:before,\n  .next-btn *:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .next-btn::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .next-btn, .next-btn:active, .next-btn:focus, .next-btn:hover {\n    outline: 0; }\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loadingCircle {\n  0% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.next-btn {\n  /* 尺寸维度 */\n  /* ---------------------------------------- */\n  /* 普通按钮 */\n  /* 普通态禁用样式 */\n  /* 警告按钮 */\n  /* 文本按钮 */\n  /* loading */\n  /* ---------------------------------------- */\n  /* 幽灵按钮 */\n  /* 组合 */\n  /* ---------------------------------------- */ }\n  .next-btn {\n    position: relative;\n    display: inline-block;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none;\n    text-align: center;\n    text-transform: none;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n    cursor: pointer; }\n    .next-btn:after {\n      text-align: center;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n      -webkit-transition: opacity .5s ease;\n      transition: opacity .5s ease; }\n    .next-btn .next-icon.next-xs:before {\n      vertical-align: baseline; }\n    .next-btn.hover, .next-btn:hover {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n  .next-btn.next-small {\n    border-radius: 3px;\n    padding: 0 8px;\n    height: 20px;\n    line-height: 18px;\n    font-size: 12px;\n    border-width: 1px; }\n    .next-btn.next-small > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-small > .next-btn-icon.next-icon-first:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-small > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-small > .next-btn-icon.next-icon-last:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-small > .next-btn-icon.next-icon-alone:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n    .next-btn.next-small.next-btn-loading {\n      padding-left: 24px; }\n      .next-btn.next-small.next-btn-loading:after {\n        width: 12px;\n        height: 12px;\n        font-size: 12px;\n        line-height: 12px;\n        left: 8px;\n        top: 50%;\n        text-align: center;\n        margin-top: -6px;\n        margin-right: 4px; }\n      .next-btn.next-small.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-medium {\n    border-radius: 3px;\n    padding: 0 12px;\n    height: 28px;\n    line-height: 26px;\n    font-size: 12px;\n    border-width: 1px; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-medium > .next-btn-icon.next-icon-first:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-medium > .next-btn-icon.next-icon-last:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n    .next-btn.next-medium > .next-btn-icon.next-icon-alone:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n    .next-btn.next-medium.next-btn-loading {\n      padding-left: 28px; }\n      .next-btn.next-medium.next-btn-loading:after {\n        width: 12px;\n        height: 12px;\n        font-size: 12px;\n        line-height: 12px;\n        left: 12px;\n        top: 50%;\n        text-align: center;\n        margin-top: -6px;\n        margin-right: 4px; }\n      .next-btn.next-medium.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-large {\n    border-radius: 3px;\n    padding: 0 16px;\n    height: 40px;\n    line-height: 38px;\n    font-size: 16px;\n    border-width: 1px; }\n    .next-btn.next-large > .next-btn-icon.next-icon-first {\n      margin-left: 0;\n      margin-right: 4px; }\n      .next-btn.next-large > .next-btn-icon.next-icon-first:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n    .next-btn.next-large > .next-btn-icon.next-icon-last {\n      margin-left: 4px;\n      margin-right: 0; }\n      .next-btn.next-large > .next-btn-icon.next-icon-last:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n    .next-btn.next-large > .next-btn-icon.next-icon-alone:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n    .next-btn.next-large.next-btn-loading {\n      padding-left: 36px; }\n      .next-btn.next-large.next-btn-loading:after {\n        width: 16px;\n        height: 16px;\n        font-size: 16px;\n        line-height: 16px;\n        left: 16px;\n        top: 50%;\n        text-align: center;\n        margin-top: -8px;\n        margin-right: 4px; }\n      .next-btn.next-large.next-btn-loading > .next-icon {\n        display: none; }\n  .next-btn.next-btn-normal {\n    border-style: solid;\n    background-color: #FFFFFF;\n    border-color: #C4C6CF; }\n    .next-btn.next-btn-normal, .next-btn.next-btn-normal:link, .next-btn.next-btn-normal:visited, .next-btn.next-btn-normal.visited {\n      color: #333333; }\n    .next-btn.next-btn-normal:focus, .next-btn.next-btn-normal:hover, .next-btn.next-btn-normal.hover, .next-btn.next-btn-normal:active, .next-btn.next-btn-normal.active {\n      color: #333333;\n      background-color: #F2F3F7;\n      border-color: #A0A2AD;\n      text-decoration: none; }\n  .next-btn.next-btn-primary {\n    border-style: solid;\n    background-color: #5584FF;\n    border-color: transparent; }\n    .next-btn.next-btn-primary, .next-btn.next-btn-primary:link, .next-btn.next-btn-primary:visited, .next-btn.next-btn-primary.visited {\n      color: #FFFFFF; }\n    .next-btn.next-btn-primary:focus, .next-btn.next-btn-primary:hover, .next-btn.next-btn-primary.hover, .next-btn.next-btn-primary:active, .next-btn.next-btn-primary.active {\n      color: #FFFFFF;\n      background-color: #3E71F7;\n      border-color: transparent;\n      text-decoration: none; }\n  .next-btn.next-btn-secondary {\n    border-style: solid;\n    background-color: #FFFFFF;\n    border-color: #5584FF; }\n    .next-btn.next-btn-secondary, .next-btn.next-btn-secondary:link, .next-btn.next-btn-secondary:visited, .next-btn.next-btn-secondary.visited {\n      color: #5584FF; }\n    .next-btn.next-btn-secondary:focus, .next-btn.next-btn-secondary:hover, .next-btn.next-btn-secondary.hover, .next-btn.next-btn-secondary:active, .next-btn.next-btn-secondary.active {\n      color: #FFFFFF;\n      background-color: #3E71F7;\n      border-color: #3E71F7;\n      text-decoration: none; }\n  .next-btn.disabled, .next-btn[disabled] {\n    cursor: not-allowed;\n    background-color: #F7F8FA;\n    border-color: #E6E7EB; }\n    .next-btn.disabled, .next-btn.disabled:link, .next-btn.disabled:visited, .next-btn.disabled.visited, .next-btn[disabled], .next-btn[disabled]:link, .next-btn[disabled]:visited, .next-btn[disabled].visited {\n      color: #CCCCCC; }\n    .next-btn.disabled:focus, .next-btn.disabled:hover, .next-btn.disabled.hover, .next-btn.disabled:active, .next-btn.disabled.active, .next-btn[disabled]:focus, .next-btn[disabled]:hover, .next-btn[disabled].hover, .next-btn[disabled]:active, .next-btn[disabled].active {\n      color: #CCCCCC;\n      background-color: #F7F8FA;\n      border-color: #E6E7EB;\n      text-decoration: none; }\n  .next-btn-warning {\n    border-style: solid; }\n    .next-btn-warning.next-btn-primary {\n      background-color: #FF3000;\n      border-color: #FF3000; }\n      .next-btn-warning.next-btn-primary, .next-btn-warning.next-btn-primary:link, .next-btn-warning.next-btn-primary:visited, .next-btn-warning.next-btn-primary.visited {\n        color: #FFFFFF; }\n      .next-btn-warning.next-btn-primary:focus, .next-btn-warning.next-btn-primary:hover, .next-btn-warning.next-btn-primary.hover, .next-btn-warning.next-btn-primary:active, .next-btn-warning.next-btn-primary.active {\n        color: #FFFFFF;\n        background-color: #E72B00;\n        border-color: #E72B00;\n        text-decoration: none; }\n      .next-btn-warning.next-btn-primary.disabled, .next-btn-warning.next-btn-primary[disabled] {\n        background-color: #F7F8FA;\n        border-color: #DCDEE3; }\n        .next-btn-warning.next-btn-primary.disabled, .next-btn-warning.next-btn-primary.disabled:link, .next-btn-warning.next-btn-primary.disabled:visited, .next-btn-warning.next-btn-primary.disabled.visited, .next-btn-warning.next-btn-primary[disabled], .next-btn-warning.next-btn-primary[disabled]:link, .next-btn-warning.next-btn-primary[disabled]:visited, .next-btn-warning.next-btn-primary[disabled].visited {\n          color: #CCCCCC; }\n        .next-btn-warning.next-btn-primary.disabled:focus, .next-btn-warning.next-btn-primary.disabled:hover, .next-btn-warning.next-btn-primary.disabled.hover, .next-btn-warning.next-btn-primary.disabled:active, .next-btn-warning.next-btn-primary.disabled.active, .next-btn-warning.next-btn-primary[disabled]:focus, .next-btn-warning.next-btn-primary[disabled]:hover, .next-btn-warning.next-btn-primary[disabled].hover, .next-btn-warning.next-btn-primary[disabled]:active, .next-btn-warning.next-btn-primary[disabled].active {\n          color: #CCCCCC;\n          background-color: #F7F8FA;\n          border-color: #DCDEE3;\n          text-decoration: none; }\n    .next-btn-warning.next-btn-normal {\n      background-color: #FFFFFF;\n      border-color: #FF3000; }\n      .next-btn-warning.next-btn-normal, .next-btn-warning.next-btn-normal:link, .next-btn-warning.next-btn-normal:visited, .next-btn-warning.next-btn-normal.visited {\n        color: #FF3000; }\n      .next-btn-warning.next-btn-normal:focus, .next-btn-warning.next-btn-normal:hover, .next-btn-warning.next-btn-normal.hover, .next-btn-warning.next-btn-normal:active, .next-btn-warning.next-btn-normal.active {\n        color: #FFFFFF;\n        background-color: #E72B00;\n        border-color: #E72B00;\n        text-decoration: none; }\n      .next-btn-warning.next-btn-normal.disabled, .next-btn-warning.next-btn-normal[disabled] {\n        background-color: #F7F8FA;\n        border-color: #E6E7EB; }\n        .next-btn-warning.next-btn-normal.disabled, .next-btn-warning.next-btn-normal.disabled:link, .next-btn-warning.next-btn-normal.disabled:visited, .next-btn-warning.next-btn-normal.disabled.visited, .next-btn-warning.next-btn-normal[disabled], .next-btn-warning.next-btn-normal[disabled]:link, .next-btn-warning.next-btn-normal[disabled]:visited, .next-btn-warning.next-btn-normal[disabled].visited {\n          color: #CCCCCC; }\n        .next-btn-warning.next-btn-normal.disabled:focus, .next-btn-warning.next-btn-normal.disabled:hover, .next-btn-warning.next-btn-normal.disabled.hover, .next-btn-warning.next-btn-normal.disabled:active, .next-btn-warning.next-btn-normal.disabled.active, .next-btn-warning.next-btn-normal[disabled]:focus, .next-btn-warning.next-btn-normal[disabled]:hover, .next-btn-warning.next-btn-normal[disabled].hover, .next-btn-warning.next-btn-normal[disabled]:active, .next-btn-warning.next-btn-normal[disabled].active {\n          color: #CCCCCC;\n          background-color: #F7F8FA;\n          border-color: #E6E7EB;\n          text-decoration: none; }\n  .next-btn-text {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0; }\n    .next-btn-text.hover, .next-btn-text:hover {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n    .next-btn-text.next-btn-primary {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-primary, .next-btn-text.next-btn-primary:link, .next-btn-text.next-btn-primary:visited, .next-btn-text.next-btn-primary.visited {\n        color: #5584FF; }\n      .next-btn-text.next-btn-primary:focus, .next-btn-text.next-btn-primary:hover, .next-btn-text.next-btn-primary.hover, .next-btn-text.next-btn-primary:active, .next-btn-text.next-btn-primary.active {\n        color: #3E71F7;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-secondary {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-secondary, .next-btn-text.next-btn-secondary:link, .next-btn-text.next-btn-secondary:visited, .next-btn-text.next-btn-secondary.visited {\n        color: #666666; }\n      .next-btn-text.next-btn-secondary:focus, .next-btn-text.next-btn-secondary:hover, .next-btn-text.next-btn-secondary.hover, .next-btn-text.next-btn-secondary:active, .next-btn-text.next-btn-secondary.active {\n        color: #5584FF;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-normal {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-normal, .next-btn-text.next-btn-normal:link, .next-btn-text.next-btn-normal:visited, .next-btn-text.next-btn-normal.visited {\n        color: #333333; }\n      .next-btn-text.next-btn-normal:focus, .next-btn-text.next-btn-normal:hover, .next-btn-text.next-btn-normal.hover, .next-btn-text.next-btn-normal:active, .next-btn-text.next-btn-normal.active {\n        color: #5584FF;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-large {\n      border-radius: 0;\n      padding: 0 0;\n      height: 24px;\n      line-height: 24px;\n      font-size: 14px;\n      border-width: 0; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-large > .next-btn-icon.next-icon-first:before {\n          width: 16px;\n          font-size: 16px;\n          line-height: inherit; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-large > .next-btn-icon.next-icon-last:before {\n          width: 16px;\n          font-size: 16px;\n          line-height: inherit; }\n      .next-btn-text.next-large > .next-btn-icon.next-icon-alone:before {\n        width: 16px;\n        font-size: 16px;\n        line-height: inherit; }\n      .next-btn-text.next-large.next-btn-loading {\n        padding-left: 20px; }\n        .next-btn-text.next-large.next-btn-loading:after {\n          width: 16px;\n          height: 16px;\n          font-size: 16px;\n          line-height: 16px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -8px;\n          margin-right: 4px; }\n        .next-btn-text.next-large.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.next-medium {\n      border-radius: 0;\n      padding: 0 0;\n      height: 20px;\n      line-height: 20px;\n      font-size: 12px;\n      border-width: 0; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-medium > .next-btn-icon.next-icon-first:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-medium > .next-btn-icon.next-icon-last:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-medium > .next-btn-icon.next-icon-alone:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n      .next-btn-text.next-medium.next-btn-loading {\n        padding-left: 16px; }\n        .next-btn-text.next-medium.next-btn-loading:after {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -6px;\n          margin-right: 4px; }\n        .next-btn-text.next-medium.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.next-small {\n      border-radius: 0;\n      padding: 0 0;\n      height: 16px;\n      line-height: 16px;\n      font-size: 12px;\n      border-width: 0; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-first {\n        margin-left: 0;\n        margin-right: 4px; }\n        .next-btn-text.next-small > .next-btn-icon.next-icon-first:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-last {\n        margin-left: 4px;\n        margin-right: 0; }\n        .next-btn-text.next-small > .next-btn-icon.next-icon-last:before {\n          width: 12px;\n          font-size: 12px;\n          line-height: inherit; }\n      .next-btn-text.next-small > .next-btn-icon.next-icon-alone:before {\n        width: 12px;\n        font-size: 12px;\n        line-height: inherit; }\n      .next-btn-text.next-small.next-btn-loading {\n        padding-left: 16px; }\n        .next-btn-text.next-small.next-btn-loading:after {\n          width: 12px;\n          height: 12px;\n          font-size: 12px;\n          line-height: 12px;\n          left: 0;\n          top: 50%;\n          text-align: center;\n          margin-top: -6px;\n          margin-right: 4px; }\n        .next-btn-text.next-small.next-btn-loading > .next-icon {\n          display: none; }\n    .next-btn-text.disabled, .next-btn-text[disabled] {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.disabled, .next-btn-text.disabled:link, .next-btn-text.disabled:visited, .next-btn-text.disabled.visited, .next-btn-text[disabled], .next-btn-text[disabled]:link, .next-btn-text[disabled]:visited, .next-btn-text[disabled].visited {\n        color: #CCCCCC; }\n      .next-btn-text.disabled:focus, .next-btn-text.disabled:hover, .next-btn-text.disabled.hover, .next-btn-text.disabled:active, .next-btn-text.disabled.active, .next-btn-text[disabled]:focus, .next-btn-text[disabled]:hover, .next-btn-text[disabled].hover, .next-btn-text[disabled]:active, .next-btn-text[disabled].active {\n        color: #CCCCCC;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n    .next-btn-text.next-btn-loading {\n      background-color: transparent;\n      border-color: transparent; }\n      .next-btn-text.next-btn-loading, .next-btn-text.next-btn-loading:link, .next-btn-text.next-btn-loading:visited, .next-btn-text.next-btn-loading.visited {\n        color: #333333; }\n      .next-btn-text.next-btn-loading:focus, .next-btn-text.next-btn-loading:hover, .next-btn-text.next-btn-loading.hover, .next-btn-text.next-btn-loading:active, .next-btn-text.next-btn-loading.active {\n        color: #333333;\n        background-color: transparent;\n        border-color: transparent;\n        text-decoration: none; }\n  .next-btn-loading {\n    pointer-events: none; }\n    .next-btn-loading:after {\n      font-family: NextIcon;\n      content: \"\\E646\";\n      opacity: 1;\n      visibility: visible;\n      -webkit-animation: loadingCircle 2s infinite linear;\n              animation: loadingCircle 2s infinite linear; }\n  .next-btn-ghost {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-style: solid; }\n    .next-btn-ghost.next-btn-dark {\n      background-color: transparent;\n      border-color: #FFFFFF; }\n      .next-btn-ghost.next-btn-dark, .next-btn-ghost.next-btn-dark:link, .next-btn-ghost.next-btn-dark:visited, .next-btn-ghost.next-btn-dark.visited {\n        color: #FFFFFF; }\n      .next-btn-ghost.next-btn-dark:focus, .next-btn-ghost.next-btn-dark:hover, .next-btn-ghost.next-btn-dark.hover, .next-btn-ghost.next-btn-dark:active, .next-btn-ghost.next-btn-dark.active {\n        color: #FFFFFF;\n        background-color: rgba(255, 255, 255, 0.8);\n        border-color: #FFFFFF;\n        text-decoration: none; }\n      .next-btn-ghost.next-btn-dark.disabled, .next-btn-ghost.next-btn-dark[disabled] {\n        background-color: transparent;\n        border-color: rgba(255, 255, 255, 0.4); }\n        .next-btn-ghost.next-btn-dark.disabled, .next-btn-ghost.next-btn-dark.disabled:link, .next-btn-ghost.next-btn-dark.disabled:visited, .next-btn-ghost.next-btn-dark.disabled.visited, .next-btn-ghost.next-btn-dark[disabled], .next-btn-ghost.next-btn-dark[disabled]:link, .next-btn-ghost.next-btn-dark[disabled]:visited, .next-btn-ghost.next-btn-dark[disabled].visited {\n          color: rgba(255, 255, 255, 0.4); }\n        .next-btn-ghost.next-btn-dark.disabled:focus, .next-btn-ghost.next-btn-dark.disabled:hover, .next-btn-ghost.next-btn-dark.disabled.hover, .next-btn-ghost.next-btn-dark.disabled:active, .next-btn-ghost.next-btn-dark.disabled.active, .next-btn-ghost.next-btn-dark[disabled]:focus, .next-btn-ghost.next-btn-dark[disabled]:hover, .next-btn-ghost.next-btn-dark[disabled].hover, .next-btn-ghost.next-btn-dark[disabled]:active, .next-btn-ghost.next-btn-dark[disabled].active {\n          color: rgba(255, 255, 255, 0.4);\n          background-color: transparent;\n          border-color: rgba(255, 255, 255, 0.4);\n          text-decoration: none; }\n    .next-btn-ghost.next-btn-light {\n      background-color: transparent;\n      border-color: #333333; }\n      .next-btn-ghost.next-btn-light, .next-btn-ghost.next-btn-light:link, .next-btn-ghost.next-btn-light:visited, .next-btn-ghost.next-btn-light.visited {\n        color: #333333; }\n      .next-btn-ghost.next-btn-light:focus, .next-btn-ghost.next-btn-light:hover, .next-btn-ghost.next-btn-light.hover, .next-btn-ghost.next-btn-light:active, .next-btn-ghost.next-btn-light.active {\n        color: #999999;\n        background-color: rgba(0, 0, 0, 0.92);\n        border-color: #333333;\n        text-decoration: none; }\n      .next-btn-ghost.next-btn-light.disabled, .next-btn-ghost.next-btn-light[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.1); }\n        .next-btn-ghost.next-btn-light.disabled, .next-btn-ghost.next-btn-light.disabled:link, .next-btn-ghost.next-btn-light.disabled:visited, .next-btn-ghost.next-btn-light.disabled.visited, .next-btn-ghost.next-btn-light[disabled], .next-btn-ghost.next-btn-light[disabled]:link, .next-btn-ghost.next-btn-light[disabled]:visited, .next-btn-ghost.next-btn-light[disabled].visited {\n          color: rgba(0, 0, 0, 0.1); }\n        .next-btn-ghost.next-btn-light.disabled:focus, .next-btn-ghost.next-btn-light.disabled:hover, .next-btn-ghost.next-btn-light.disabled.hover, .next-btn-ghost.next-btn-light.disabled:active, .next-btn-ghost.next-btn-light.disabled.active, .next-btn-ghost.next-btn-light[disabled]:focus, .next-btn-ghost.next-btn-light[disabled]:hover, .next-btn-ghost.next-btn-light[disabled].hover, .next-btn-ghost.next-btn-light[disabled]:active, .next-btn-ghost.next-btn-light[disabled].active {\n          color: rgba(0, 0, 0, 0.1);\n          background-color: transparent;\n          border-color: rgba(0, 0, 0, 0.1);\n          text-decoration: none; }\n  .next-btn-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle; }\n    .next-btn-group > .next-btn {\n      position: relative;\n      float: left;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n      .next-btn-group > .next-btn:hover, .next-btn-group > .next-btn:focus, .next-btn-group > .next-btn:active, .next-btn-group > .next-btn.active {\n        z-index: 1; }\n      .next-btn-group > .next-btn.disabled, .next-btn-group > .next-btn[disabled] {\n        z-index: 0; }\n    .next-btn-group .next-btn.next-btn {\n      margin: 0 0 0 -1px; }\n    .next-btn-group .next-btn:not(:first-child):not(:last-child) {\n      border-radius: 0; }\n    .next-btn-group > .next-btn:first-child {\n      margin: 0; }\n    .next-btn-group > .next-btn:first-child:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n    .next-btn-group > .next-btn:last-child:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n    .next-btn-group > .next-btn-primary:not(:first-child) {\n      border-left-color: rgba(255, 255, 255, 0.2); }\n      .next-btn-group > .next-btn-primary:not(:first-child):hover {\n        border-left-color: transparent; }\n      .next-btn-group > .next-btn-primary:not(:first-child).disabled, .next-btn-group > .next-btn-primary:not(:first-child)[disabled] {\n        border-left-color: #E6E7EB; }\n\n/* 组合 */\n/* ---------------------------------------- */\n.next-btn-group[dir=\"rtl\"] > .next-btn {\n  float: right; }\n\n.next-btn-group[dir=\"rtl\"] .next-btn.next-btn {\n  margin: 0 -1px 0 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn:first-child:not(:last-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn:last-child:not(:first-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child) {\n  border-right-color: rgba(255, 255, 255, 0.2); }\n  .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child):hover {\n    border-right-color: transparent; }\n  .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child).disabled, .next-btn-group[dir=\"rtl\"] > .next-btn-primary:not(:first-child)[disabled] {\n    border-right-color: #E6E7EB; }\n\n/* 尺寸维度 */\n/* ---------------------------------------- */\n.next-btn.next-small[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-small[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-small[dir=\"rtl\"].next-btn-loading {\n    padding-left: 8px;\n    padding-right: 24px; }\n    .next-btn.next-small[dir=\"rtl\"].next-btn-loading:after {\n      right: 8px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn.next-medium[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-medium[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn.next-medium[dir=\"rtl\"].next-btn-loading {\n    padding-left: 12px;\n    padding-right: 28px; }\n    .next-btn.next-medium[dir=\"rtl\"].next-btn-loading:after {\n      right: 12px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn.next-large[dir=\"rtl\"] {\n  border-radius: 3px; }\n  .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-first:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn.next-large[dir=\"rtl\"] > .next-btn-icon.next-icon-last:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn.next-large[dir=\"rtl\"].next-btn-loading {\n    padding-left: 16px;\n    padding-right: 36px; }\n    .next-btn.next-large[dir=\"rtl\"].next-btn-loading:after {\n      right: 16px;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n/* 文本按钮 */\n.next-btn-text[dir=\"rtl\"].next-large {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-first:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-large > .next-btn-icon.next-icon-last:before {\n      width: 16px;\n      font-size: 16px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-large.next-btn-loading {\n    padding-left: 0;\n    padding-right: 20px; }\n    .next-btn-text[dir=\"rtl\"].next-large.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn-text[dir=\"rtl\"].next-medium {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-medium > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-medium.next-btn-loading {\n    padding-left: 0;\n    padding-right: 16px; }\n    .next-btn-text[dir=\"rtl\"].next-medium.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n\n.next-btn-text[dir=\"rtl\"].next-small {\n  border-radius: 0; }\n  .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-first {\n    margin-left: 4px;\n    margin-right: 0; }\n    .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-first:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-last {\n    margin-left: 0;\n    margin-right: 4px; }\n    .next-btn-text[dir=\"rtl\"].next-small > .next-btn-icon.next-icon-last:before {\n      width: 12px;\n      font-size: 12px;\n      line-height: inherit; }\n  .next-btn-text[dir=\"rtl\"].next-small.next-btn-loading {\n    padding-left: 0;\n    padding-right: 16px; }\n    .next-btn-text[dir=\"rtl\"].next-small.next-btn-loading:after {\n      right: 0;\n      top: 50%;\n      margin-right: 0;\n      margin-left: 4px; }\n", ""]);

// exports


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(61);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = window.moment;

/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(62);

/***/ }),
/* 37 */,
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(36);

__webpack_require__(20);

__webpack_require__(63);

/***/ }),
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

__webpack_require__(68);

/***/ }),
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(196);


/***/ }),
/* 196 */
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

var top = React.createElement(_button2.default, { id: 'top', style: { margin: '5px' }, className: 'btrigger' }, 'top');
var right = React.createElement(_button2.default, { id: 'right', style: { margin: '5px' }, className: 'btrigger' }, 'right');
var bottom = React.createElement(_button2.default, { id: 'bottom', style: { margin: '5px' }, className: 'btrigger' }, 'bottom');
var left = React.createElement(_button2.default, { id: 'left', style: { margin: '5px' }, className: 'btrigger' }, 'left');
var topLeft = React.createElement(_button2.default, { id: 'topLeft', style: { margin: '5px' }, className: 'btrigger' }, 'top left');
var topRight = React.createElement(_button2.default, { id: 'topRight', style: { margin: '5px' }, className: 'btrigger' }, 'top right');
var rightTop = React.createElement(_button2.default, { id: 'rightTop', style: { margin: '5px' }, className: 'btrigger' }, 'right top');
var rightBottom = React.createElement(_button2.default, { id: 'rightBottom', style: { margin: '5px' }, className: 'btrigger' }, 'right bottom');
var bottomLeft = React.createElement(_button2.default, { id: 'bottomLeft', style: { margin: '5px' }, className: 'btrigger' }, 'bottom left');
var bottomRight = React.createElement(_button2.default, { id: 'bottomRight', style: { margin: '5px' }, className: 'btrigger' }, 'bottom right');
var leftTop = React.createElement(_button2.default, { id: 'leftTop', style: { margin: '5px' }, className: 'btrigger' }, 'left top');
var leftBottom = React.createElement(_button2.default, { id: 'leftBottom', style: { margin: '5px' }, className: 'btrigger' }, 'left bottom');

var Content = function Content() {
    return React.createElement('div', null, React.createElement('h4', { style: { marginTop: 0 } }, 'balloon title'), React.createElement('hr', null), React.createElement('p', null, 'balloon content'));
};

var App = function App() {
    return React.createElement('div', { style: { paddingLeft: 320, paddingTop: 100 } }, React.createElement('div', { style: { marginLeft: 75 } }, React.createElement(_balloon2.default, { trigger: topLeft, align: 'tl', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: top, align: 't', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: topRight, align: 'tr', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null))), React.createElement('div', { style: { width: 80, float: 'left' } }, React.createElement(_balloon2.default, { trigger: leftTop, align: 'lt', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: left, align: 'l', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: leftBottom, align: 'lb', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null))), React.createElement('div', { style: { width: 80, marginLeft: 290 } }, React.createElement(_balloon2.default, { trigger: rightTop, align: 'rt', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: right, align: 'r', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: rightBottom, align: 'rb', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null))), React.createElement('div', { style: { marginLeft: 80, clear: 'both' } }, React.createElement(_balloon2.default, { trigger: bottomLeft, align: 'bl', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: bottom, align: 'b', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null)), React.createElement(_balloon2.default, { trigger: bottomRight, align: 'br', alignEdge: true, triggerType: 'click', style: { width: 300 } }, React.createElement(Content, null))));
};

ReactDOM.render(React.createElement(App, null), mountNode);

// HOT RELOAD CODE
var componentDesc = document.querySelector('#component-desc');
componentDesc.innerHTML = '\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002';
var componentBody = document.querySelector('#component-body');
componentBody.innerHTML = '<pre><code class="language-jsx"><div class="hljs"><span class="hljs-keyword">import</span> { Button, Balloon } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@alifd/next\'</span>;\n\n\n\n\n<span class="hljs-keyword">const</span> top = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>  <span class="hljs-attr">id</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>top<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> right = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>  <span class="hljs-attr">id</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> bottom = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>bottom<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> left = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> topLeft = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topLeft"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>top left<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> topRight = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topRight"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>top right<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> rightTop = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"rightTop"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>right top<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> rightBottom = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"rightBottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>right bottom<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> bottomLeft = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottomLeft"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>bottom left<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> bottomRight = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottomRight"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>bottom right<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> leftTop = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"leftTop"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>left top<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> leftBottom = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"leftBottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}} <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span>&gt;</span>left bottom<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n\n<span class="hljs-keyword">const</span> Content = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{marginTop:</span> <span class="hljs-attr">0</span>}}&gt;</span>balloon title<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span>/&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n            balloon content\n        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n);\n\n<span class="hljs-keyword">const</span> App = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{paddingLeft:</span> <span class="hljs-attr">320</span>, <span class="hljs-attr">paddingTop:</span> <span class="hljs-attr">100</span>}}&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{marginLeft:</span> <span class="hljs-attr">75</span>}}&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{topLeft}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"tl"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{top}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"t"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{topRight}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"tr"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">80</span>, <span class="hljs-attr">float:</span> \'<span class="hljs-attr">left</span>\'}}&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{leftTop}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"lt"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{left}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"l"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{leftBottom}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"lb"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">80</span>, <span class="hljs-attr">marginLeft:</span> <span class="hljs-attr">290</span>}}&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{rightTop}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"rt"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{right}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"r"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{rightBottom}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"rb"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{marginLeft:</span> <span class="hljs-attr">80</span>, <span class="hljs-attr">clear:</span> \'<span class="hljs-attr">both</span>\'}}&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{bottomLeft}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"bl"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{bottom}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"b"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{bottomRight}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"br"</span> <span class="hljs-attr">alignEdge</span> <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{width:</span> <span class="hljs-attr">300</span>}}&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Content</span>/&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n);\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span> /&gt;</span>, mountNode);\n\n</span></div></code></pre>\n'.replace(/{backquote}/g, '`').replace(/{dollar}/g, '$');

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

/***/ })
],[195]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jbGFzc25hbWVzQDIuMi42QGNsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy91dGlsL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL21haW4uc2Nzcz83MDIyIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3V0aWxzL2ZpbmQtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9pbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vYWxpZ25NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzP2ViYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvbWFpbi5zY3NzPzJjNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vbWFpbi5zY3NzPzhlM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9pY29uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vbWFpbi5zY3NzPzBhZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL3N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5tb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2dldC1jb250ZXh0LXByb3BzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9rZXljb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L292ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L2dhdGV3YXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3Bvc2l0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19vYmplY3QtYXNzaWduQDQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25maWcuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9faG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NAMi41LjVAaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZm9jdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbnN1bWVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9iYWxsb29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3V0aWxzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3BvcHVwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi90b29sdGlwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vdmlldy9idXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9idXR0b24vdmlldy9ncm91cC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9iYWxsb29uL2RlbW8vYWxpZ25tZW50Lm1kIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlN5bWJvbCIsImZvciIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJfZG9tIiwiX2VudiIsIl9ldmVudHMiLCJfZnVuYyIsIl9sb2ciLCJfb2JqZWN0IiwiX3N0cmluZyIsIl9zdXBwb3J0IiwiX2ZvY3VzIiwiZG9tIiwiZXZlbnRzIiwiZnVuYyIsImxvZyIsIm9iaiIsInN0ciIsInN1cHBvcnQiLCJmb2N1cyIsImd1aWQiLCJfZ3VpZCIsIktFWUNPREUiLCJfS0VZQ09ERSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5Iiwia2V5IiwiY2FsbCIsImpvaW4iLCJkZWZhdWx0IiwiZGVmaW5lIiwid2luZG93IiwiY2hpbGRDb250ZXh0Q2FjaGUiLCJDYWNoZSIsIkNvbmZpZ1Byb3ZpZGVyIiwiYXJncyIsImFkZCIsImdldCIsImdldENoaWxkQ29udGV4dCIsInByb3BzIiwicHJlZml4IiwibG9jYWxlIiwicHVyZSIsIndhcm5pbmciLCJydGwiLCJuZXh0UHJlZml4IiwibmV4dExvY2FsZSIsIm5leHRQdXJlIiwibmV4dFJ0bCIsIm5leHRXYXJuaW5nIiwiY29tcG9uZW50V2lsbE1vdW50Iiwic2V0TW9tZW50TG9jYWxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwibW9tZW50IiwiZSIsIm1vbWVudExvY2FsZSIsInJlbmRlciIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbmZpZyIsIm9wdGlvbnMiLCJnZXRDb250ZXh0UHJvcHMiLCJkaXNwbGF5TmFtZSIsInJvb3QiLCJpbml0TG9jYWxlcyIsInNldExhbmd1YWdlIiwic2V0TG9jYWxlIiwic2V0RGlyZWN0aW9uIiwiZ2V0TGFuZ3VhZ2UiLCJnZXRMb2NhbGUiLCJnZXREaXJlY3Rpb24iLCJDb25zdW1lciIsImdldENvbnRleHQiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJpZCIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImNvbmNhdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJ0eXBlT2YiLCJpc0FycmF5TGlrZSIsImlzUHJvbWlzZSIsImlzUGxhaW5PYmplY3QiLCJzaGFsbG93RXF1YWwiLCJlYWNoIiwicGlja090aGVycyIsInBpY2tBdHRyc1dpdGgiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJyZXBsYWNlIiwidHlwZSIsInRoZW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJwcm90Iiwib2JqQSIsIm9iakIiLCJjb21wYXJlIiwia2V5QSIsImtleXMiLCJrZXlCIiwibGVuIiwiaGFzQ2FsbGJhY2siLCJ2YWxBIiwidmFsQiIsInJldCIsImNhbGxiYWNrIiwiZGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJ2YWx1ZSIsIl9pc0luT2JqIiwiaW5kZXhPZiIsImhvbGRQcm9wcyIsIm90aGVycyIsIm1hdGNoIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJmaW5kTm9kZSIsInRhcmdldCIsInBhcmFtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVyciIsIm5vb3AiLCJCYWxsb29uSW5uZXIiLCJjbG9zYWJsZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiaXNUb29sdGlwIiwiYWxpZ24iLCJvbkNsb3NlIiwiYWxpZ25FZGdlIiwiYWxpZ25NYXAiLCJlZGdlTWFwIiwibm9ybWFsTWFwIiwiX3ByZWZpeCIsImFycm93IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJjb250ZXh0VHlwZXMiLCJhbnkiLCJ0IiwicnRsQWxpZ24iLCJ0ck9yaWdpbiIsInJ0bFRyT3JpZ2luIiwib2Zmc2V0IiwiciIsImIiLCJsIiwidGwiLCJ0ciIsInJ0IiwicmIiLCJibCIsImJyIiwibHQiLCJsYiIsIk92ZXJsYXkiLCJHYXRld2F5IiwiUG9zaXRpb24iLCJQb3B1cCIsImV4cG9ydE5hbWVzIiwiSWNvbiIsInNpemUiLCJvdGhlciIsImRpciIsIm9uZU9mIiwiX3R5cGVNYXJrIiwiY29udGV4dCIsIm5ld1ByZWZpeCIsImxvY2FsZUZyb21Db250ZXh0IiwibmV3TG9jYWxlIiwibmV3UHVyZSIsIm5ld1J0bCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZ2V0U3R5bGUiLCJzZXRTdHlsZSIsInNjcm9sbGJhciIsImdldE9mZnNldCIsImhhc0RPTSIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfZm9yY2UiLCJ0cmltIiwidG9nZ2xlIiwiZmxhZyIsIm1hdGNoZXMiLCJtYXRjaGVzRm4iLCJfYm9keSIsImJvZHkiLCJoZWFkIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsIl9nZXRDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiUElYRUxfUEFUVEVSTiIsInJlbW92ZVBpeGVsIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiX2dldFN0eWxlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwidGVzdCIsInBhcnNlRmxvYXQiLCJmbG9hdE1hcCIsImNzc0Zsb2F0Iiwic3R5bGVGbG9hdCIsImZsb2F0IiwibmFtZSIsImdldFByb3BlcnR5VmFsdWUiLCJ2YWwiLCJzY3JvbGxEaXYiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJhcHBlbmRDaGlsZCIsInNjcm9sbGJhcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxiYXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyZW1vdmVDaGlsZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW4iLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiY2FtZWxjYXNlIiwiaHlwaGVuYXRlIiwiJDAiLCIkMSIsInRvVXBwZXJDYXNlIiwiaWVWZXJzaW9uIiwiZG9jdW1lbnRNb2RlIiwiaXNQcm9kdWN0aW9uIiwiUFJPRFVDVElPTl9FTlYiLCJyZXN1bHQiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkVTQ0FQRSIsIkxFRlRfQVJST1ciLCJVUF9BUlJPVyIsIlJJR0hUX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkNPTlRST0wiLCJPUFRJT04iLCJDTUQiLCJDT01NQU5EIiwiREVMRVRFIiwic2F2ZUxhc3RGb2N1c05vZGUiLCJnZXRGb2N1c05vZGVMaXN0IiwiYmFja0xhc3RGb2N1c05vZGUiLCJtYWtlQ2hhaW4iLCJiaW5kQ3R4IiwiaXNTY3JvbGxEaXNwbGF5Iiwic2Nyb2xsYmFyU3R5bGUiLCJoYXNTY3JvbGwiLCJkb2MiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJwcmVmaXhlcyIsImdldFN0eWxlUHJvcGVydHkiLCJtb2RhbHMiLCJib2R5T3ZlcmZsb3dZIiwiYm9keVBhZGRpbmdSaWdodCIsInNhdmVDb250ZW50UmVmIiwicmVmIiwiY29udGVudFJlZiIsInNhdmVHYXRld2F5UmVmIiwiZ2F0ZXdheVJlZiIsInN0YXRlIiwidmlzaWJsZSIsInN0YXR1cyIsImFuaW1hdGlvbiIsImdldEFuaW1hdGlvbiIsImxhc3RBbGlnbiIsInRpbWVvdXRNYXAiLCJiZWZvcmVPcGVuIiwiZW50ZXIiLCJjb21wb25lbnREaWRNb3VudCIsImFkZERvY3VtZW50RXZlbnRzIiwib3ZlcmxheU1hbmFnZXIiLCJhZGRPdmVybGF5IiwiX2lzTW91bnRlZCIsIndpbGxPcGVuIiwid2lsbENsb3NlIiwiYmVmb3JlQ2xvc2UiLCJzZXRTdGF0ZSIsImxlYXZlIiwicHJldlByb3BzIiwib3BlbiIsImNsb3NlIiwiYWRkQW5pbWF0aW9uRXZlbnRzIiwid3JhcHBlck5vZGUiLCJnZXRXcmFwcGVyTm9kZSIsInNldFRpbWVvdXQiLCJvbk9wZW4iLCJhZnRlck9wZW4iLCJhZnRlckNsb3NlIiwicmVtb3ZlT3ZlcmxheSIsInNldEZvY3VzTm9kZSIsIl9pc0Rlc3Ryb3llZCIsInJlbW92ZURvY3VtZW50RXZlbnRzIiwiZm9jdXNUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2FuaW1hdGlvbiIsIm9mZiIsImdldEFuaW1hdGlvbkJ5QWxpZ24iLCJpbiIsIm91dCIsImdldENvbnRlbnROb2RlIiwib24iLCJlbmQiLCJoYW5kbGVBbmltYXRlRW5kIiwiYmluZCIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aW1lIiwiaGFuZGxlUG9zaXRpb24iLCJuZWVkQWRqdXN0Iiwib25MZWF2ZWQiLCJvbkVudGVyZWQiLCJvbkVudGVyaW5nIiwib25MZWF2aW5nIiwiZGlzYWJsZVNjcm9sbCIsIm92ZXJmbG93WSIsInBhZGRpbmdSaWdodCIsImluZGV4Iiwic3BsaWNlIiwiYXV0b0ZvY3VzIiwiX2hhc0ZvY3VzZWQiLCJmb2N1c05vZGVMaXN0IiwiZ2V0Q29udGVudCIsImdldENoaWxkTm9kZSIsImNhbkNsb3NlQnlFc2MiLCJfa2V5ZG93bkV2ZW50cyIsImhhbmRsZURvY3VtZW50S2V5RG93biIsImNhbkNsb3NlQnlPdXRTaWRlQ2xpY2siLCJfY2xpY2tFdmVudHMiLCJoYW5kbGVEb2N1bWVudENsaWNrIiwia2V5Q29kZSIsImlzQ3VycmVudE92ZXJsYXkiLCJvblJlcXVlc3RDbG9zZSIsInNhZmVOb2RlIiwic2FmZU5vZGVzIiwidW5zaGlmdCIsImhhbmRsZU1hc2tDbGljayIsImNhbkNsb3NlQnlNYXNrIiwiZ2V0SW5zdGFuY2UiLCJwcm9wQ2hpbGRyZW4iLCJjb250YWluZXIiLCJoYXNNYXNrIiwiYmVmb3JlUG9zaXRpb24iLCJvblBvc2l0aW9uIiwid3JhcHBlclN0eWxlIiwicHJvcFNob3VsZFVwZGF0ZVBvc2l0aW9uIiwic2hvdWxkVXBkYXRlUG9zaXRpb24iLCJjYWNoZSIsIndyYXBwZXJDbGFzc05hbWUiLCJvbk1hc2tNb3VzZUVudGVyIiwib25NYXNrTW91c2VMZWF2ZSIsInN0YXRlVmlzaWJsZSIsImNoaWxkIiwiY2hpbGRDbGF6eiIsIkVycm9yIiwiY2xvbmVFbGVtZW50Iiwid3JhcHBlckNsYXp6IiwibmV3V3JhcHBlclN0eWxlIiwiZGlzcGxheSIsIm9uZU9mVHlwZSIsImFycmF5IiwiVklFV1BPUlQiLCJzYXZlQ2hpbGRSZWYiLCJjb250YWluZXJOb2RlIiwiZ2V0Q29udGFpbmVyTm9kZSIsImZvcmNlVXBkYXRlIiwidGFyZ2V0Tm9kZSIsInBsYWNlIiwic2V0UG9zaXRpb24iLCJuZWVkTGlzdGVuUmVzaXplIiwiaGFuZGxlUmVzaXplIiwicmVzaXplVGltZW91dCIsImNvbnRlbnROb2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInJlc3VsdEFsaWduIiwicGluRWxlbWVudCIsImJhc2VFbGVtZW50IiwiaXNSdGwiLCJzcGxpdCIsImFzc2lnbiIsImNoZWNrUHJvcFR5cGVzIiwicHJpbnRXYXJuaW5nIiwidGV4dCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ4IiwiZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwibnVtYmVyIiwic3ltYm9sIiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwic3RhY2siLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJsb2NhdGlvbiIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJuIiwidGVzdDMiLCJmb3JFYWNoIiwibGV0dGVyIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4IiwiZW1wdHlGdW5jdGlvbiIsInNoaW0iLCJnZXRTaGltIiwiZ2V0RGlzcGxheU5hbWUiLCJnbG9iYWxMb2NhbGVzIiwiY3VycmVudEdsb2JhbExhbmd1YWdlIiwiY3VycmVudEdsb2JhbExvY2FsZSIsImN1cnJlbnRHbG9iYWxSdGwiLCJsb2NhbGVzIiwibGFuZ3VhZ2UiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0U3RhdGUiLCJDb25maWdlZENvbXBvbmVudCIsIl9nZXRJbnN0YW5jZSIsIl9kZXByZWNhdGVkIiwiX2luc3RhbmNlIiwiZmllbGQiLCJkZXByZWNhdGVkIiwiY29udGV4dFByb3BzIiwibmV3Q29udGV4dFByb3BzIiwicmVkdWNlIiwibmV3T3RoZXJzIiwidHJhbnNmb3JtIiwiUkVBQ1RfU1RBVElDUyIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsIktOT1dOX1NUQVRJQ1MiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcml0eSIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsInRhcmdldENvbXBvbmVudCIsInNvdXJjZUNvbXBvbmVudCIsImJsYWNrbGlzdCIsImluaGVyaXRlZENvbXBvbmVudCIsImRlc2NyaXB0b3IiLCJvbmNlIiwiZXZlbnROYW1lIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX19mbiIsInByb21pc2VDYWxsIiwiZm5zIiwiY2hhaW5lZEZ1bmN0aW9uIiwiaiIsImN0eCIsIm5zIiwiZm5OYW1lIiwic3VjY2VzcyIsImZhaWx1cmUiLCJjYXRjaCIsImluc3RlYWQiLCJjb21wb25lbnQiLCJtc2ciLCJhbmltYXRpb25FbmRFdmVudE5hbWVzIiwiV2Via2l0QW5pbWF0aW9uIiwiT0FuaW1hdGlvbiIsInRyYW5zaXRpb25FdmVudE5hbWVzIiwiV2Via2l0VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsIl9zdXBwb3J0RW5kIiwibmFtZXMiLCJlbCIsIl9zdXBwb3J0Q1NTIiwiZmxleCIsImNsZWFyTGFzdEZvY3VzTm9kZSIsImxpbWl0VGFiUmFuZ2UiLCJfaXNWaXNpYmxlIiwidmlzaWJpbGl0eSIsInBhcmVudE5vZGUiLCJfaXNGb2N1c2FibGUiLCJub2RlTmFtZSIsInRhYkluZGV4IiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJoYXNUYWJJbmRleCIsImlzTmFOIiwiZGlzYWJsZWQiLCJyZXMiLCJub2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXRob2QiLCJsYXN0Rm9jdXNFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsInRhYk5vZGVMaXN0IiwibWF4SW5kZXgiLCJ0YXJnZXRJbmRleCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJ0aW1lc3RhbXAiLCJub3ciLCJtYXBLZXlzIiwiZm4iLCJuZXdLZXkiLCJyZXBsYWNlS2V5IiwicDEiLCJwMiIsInRyYW5zZm9ybUNvbnRleHQiLCJfcm9vdCIsIl9zdG9yZSIsIk1hcCIsImVtcHR5IiwiaGFzIiwiZGVmYXVsdFZhbHVlIiwic2V0IiwidXBkYXRlIiwiZGVsZXRlIiwibG9jYWxzIiwiaG90IiwiYWNjZXB0IiwibmV3Q29udGVudCIsImRpc3Bvc2UiLCJjc3MiLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwibyIsIm5ld1VybCIsIkJhbGxvb24iLCJUb29sdGlwIiwiSW5uZXIiLCJhbGlnbm1lbnQiLCJvbkNsb3NlQ2xpY2siLCJvblZpc2libGVDaGFuZ2UiLCJuZXdPblZpc2libGVDaGFuZ2UiLCJyZWFzb24iLCJkZWZhdWx0VmlzaWJsZSIsIl9vbkNsb3NlIiwiX29uUG9zaXRpb24iLCJfb25WaXNpYmxlQ2hhbmdlIiwiX2NvbnRlbnRJZCIsInRyaWdnZXIiLCJuZXdBbGlnbiIsInJlc0FsaWduIiwiYWxpZ25LZXkiLCJ0cmlnZ2VyVHlwZSIsImRlbGF5Iiwic2FmZUlkIiwib25DbGljayIsIm9uSG92ZXIiLCJwb3B1cENvbnRhaW5lciIsInBvcHVwU3R5bGUiLCJwb3B1cENsYXNzTmFtZSIsInBvcHVwUHJvcHMiLCJfb2Zmc2V0IiwidHJhbnNmb3JtT3JpZ2luIiwiX3N0eWxlIiwidHJpZ2dlclByb3BzIiwibmV3VHJpZ2dlciIsImFsbE92ZXJsYXlzIiwib3ZlcmxheSIsImdldFBhZ2VYIiwic2Nyb2xsTGVmdCIsImdldFBhZ2VZIiwic2Nyb2xsVG9wIiwiX2dldEVsZW1lbnRSZWN0IiwiZWxlbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJfZ2V0Vmlld3BvcnRTaXplIiwiZXhwZWN0ZWRBbGlnbiIsIl9nZXRFeHBlY3RlZEFsaWduIiwiaXNQaW5GaXhlZCIsImlzQmFzZUZpeGVkIiwiZmlyc3RQb3NpdGlvblJlc3VsdCIsInBpbkVsZW1lbnRQb2ludHMiLCJfbm9ybWFsaXplUG9zaXRpb24iLCJiYXNlRWxlbWVudFBvaW50cyIsInBpbkVsZW1lbnRQYXJlbnRPZmZzZXQiLCJfZ2V0UGFyZW50T2Zmc2V0IiwiYmFzZUVsZW1lbnRPZmZzZXQiLCJfZ2V0TGVmdFRvcCIsIl9zZXRQaW5FbGVtZW50UG9zdGlvbiIsIl9pc0luVmlld3BvcnQiLCJpblZpZXdwb3J0TGVmdCIsIl9tYWtlRWxlbWVudEluVmlld3BvcnQiLCJpblZpZXdwb3J0VG9wIiwicGFyZW50IiwiX2dldEVsZW1lbnRPZmZzZXQiLCJkb2NFbGVtZW50IiwiTWF0aCIsIm1heCIsInBvaW50cyIsIl9ub3JtYWxpemVFbGVtZW50IiwiX25vcm1hbGl6ZVhZIiwiX3h5Q29udmVydGVyIiwibSIsImQiLCJpc1ZpZXdwb3J0IiwiZG9jQ2xpZW50TGVmdCIsImNsaWVudExlZnQiLCJkb2NDbGllbnRUb3AiLCJjbGllbnRUb3AiLCJfcmVwbGFjZUFsaWduRGlyIiwiYyIsInJlZ0V4cCIsInZpZXdwb3J0U2l6ZSIsImVsZW1lbnRSZWN0IiwicG9zdGlvbiIsIm9mZnNldFBhcmVudFdpZHRoIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsImhhbmRsZVRyaWdnZXJDbGljayIsImNhbkNsb3NlQnlUcmlnZ2VyIiwiaGFuZGxlVHJpZ2dlcktleURvd24iLCJoYW5kbGVUcmlnZ2VyTW91c2VFbnRlciIsIl9tb3VzZU5vdEZpcnN0T25NYXNrIiwiX2hpZGVUaW1lciIsIl9zaG93VGltZXIiLCJoYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZSIsImhhbmRsZVRyaWdnZXJGb2N1cyIsImhhbmRsZVRyaWdnZXJCbHVyIiwiX2lzRm9yd2FyZENvbnRlbnQiLCJoYW5kbGVDb250ZW50TW91c2VEb3duIiwiaGFuZGxlQ29udGVudE1vdXNlRW50ZXIiLCJoYW5kbGVDb250ZW50TW91c2VMZWF2ZSIsImhhbmRsZU1hc2tNb3VzZUVudGVyIiwiaGFuZGxlTWFza01vdXNlTGVhdmUiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJyZW5kZXJUcmlnZ2VyIiwidHJpZ2dlclR5cGVzIiwib25LZXlEb3duIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Gb2N1cyIsIm9uQmx1ciIsInJlbmRlckNvbnRlbnQiLCJvbk1vdXNlRG93biIsInJlbmRlclBvcnRhbCIsImZvbGxvd1RyaWdnZXIiLCJmaW5kVHJpZ2dlck5vZGUiLCJCdXR0b24iLCJHcm91cCIsIkJ1dHRvbkdyb3VwIiwibmV3VHlwZSIsImdob3N0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm5vcm1hbCIsImRhcmsiLCJsaWdodCIsIm1hcEljb25TaXplIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsIm9uTW91c2VVcCIsImJ1dHRvbiIsImJsdXIiLCJidXR0b25SZWZIYW5kbGVyIiwiaHRtbFR5cGUiLCJsb2FkaW5nIiwiaWNvblNpemUiLCJnaG9zdFR5cGUiLCJidG5DbHMiLCJjb3VudCIsImNsb25lZENoaWxkcmVuIiwiaWNvbkNscyIsIlRhZ05hbWUiLCJ0YWdBdHRycyIsImhyZWYiLCJncm91cENscyIsImNsb25lQ2hpbGRyZW4iLCJtYXJnaW4iLCJ0b3BMZWZ0IiwidG9wUmlnaHQiLCJyaWdodFRvcCIsInJpZ2h0Qm90dG9tIiwiYm90dG9tTGVmdCIsImJvdHRvbVJpZ2h0IiwibGVmdFRvcCIsImxlZnRCb3R0b20iLCJDb250ZW50IiwibWFyZ2luVG9wIiwiQXBwIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsImNsZWFyIiwiUmVhY3RET00iLCJjb21wb25lbnREZXNjIiwiY29tcG9uZW50Qm9keSIsInJlbG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhCOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0EsSUFBSUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLE1BQUlDLHFCQUFzQixPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQ3hCQSxPQUFPQyxHQURpQixJQUV4QkQsT0FBT0MsR0FBUCxDQUFXLGVBQVgsQ0FGdUIsSUFHdkIsTUFIRjs7QUFLQSxNQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLE1BQVQsRUFBaUI7QUFDcEMsV0FBTyxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQ0xBLFdBQVcsSUFETixJQUVMQSxPQUFPQyxRQUFQLEtBQW9CTCxrQkFGdEI7QUFHRCxHQUpEOztBQU1BO0FBQ0E7QUFDQSxNQUFJTSxzQkFBc0IsSUFBMUI7QUFDQUMsU0FBT0MsT0FBUCxHQUFpQkMsbUJBQU9BLENBQUMsRUFBUixFQUFxQ04sY0FBckMsRUFBcURHLG1CQUFyRCxDQUFqQjtBQUNELENBaEJELE1BZ0JPO0FBQ0w7QUFDQTtBQUNBQyxTQUFPQyxPQUFQLEdBQWlCQyxtQkFBT0EsQ0FBQyxFQUFSLEdBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztBQzNCRDs7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a0IsT0FBL0UsR0FBOEUsRUFBOUUsSUFDSSxrQ0FESixDQURKLEVBSUksb0JBQUMsVUFBRCxXQUFTLFNBQVQsUUFBMEIsT0FBMUIsS0FBb0MsV0FBcEMsTUFBOEMsYUFBOUMsU0FBa0UsT0FBTyxFQUFDQSxPQUExRSxHQUF5RSxFQUF6RSxJQUNJLGtDQURKLENBSkosRUFPSSxvQkFBQyxVQUFELFdBQVMsU0FBVCxhQUErQixPQUEvQixNQUEwQyxXQUExQyxNQUFvRCxhQUFwRCxTQUF3RSxPQUFPLEVBQUNBLE9BQWhGLEdBQStFLEVBQS9FLElBQ0ksa0NBREosQ0FQSixDQWxDSixDQURRO0FBQVo7O0FBaURBMmtCLGdCQUFnQix5QkFBaEJBLElBQWdCLENBQWhCQTs7QUFHQTtBQUNBLElBQU1DLGdCQUFnQnByQix1QkFBdEIsaUJBQXNCQSxDQUF0QjtBQUNBb3JCO0FBQ0EsSUFBTUMsZ0JBQWdCcnJCLHVCQUF0QixpQkFBc0JBLENBQXRCO0FBQ0FxckIsMEJBQTBCLCttaUJBQTFCQSxHQUEwQixDQUExQkE7O0FBa0ZBLElBQUkxMUIsSUFBSixFQUFnQjtBQUNkQTs7QUFFQSxRQUFNMjFCLFlBQVl0ckIsdUJBQWxCLHNCQUFrQkEsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDMUgsT0FBTCxxQkFBaUM7QUFDL0IzQyxvQ0FBNEIsa0JBQVU7QUFDcEMyQztBQUNBLGdCQUFJMlMsV0FBSixTQUF3QjtBQUN0QnFnQjtBQURGLG1CQUVPLElBQUlyZ0IsV0FBSixRQUF1QjtBQUM1QnFnQjtBQUNEO0FBTkgzMUI7QUFRRDtBQUNGLEMiLCJmaWxlIjoiL1VzZXJzL3poYW9ndW95YW4vZ2l0aHViL3B1Yi9kb2NzL2JhbGxvb24vZGVtby9hbGlnbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5SZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgX2RvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgKiBhcyBfZW52IGZyb20gJy4vZW52JztcbmltcG9ydCAqIGFzIF9ldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICogYXMgX2Z1bmMgZnJvbSAnLi9mdW5jJztcbmltcG9ydCAqIGFzIF9sb2cgZnJvbSAnLi9sb2cnO1xuaW1wb3J0ICogYXMgX29iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgKiBhcyBfc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCAqIGFzIF9zdXBwb3J0IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgKiBhcyBfZm9jdXMgZnJvbSAnLi9mb2N1cyc7XG5pbXBvcnQgX2d1aWQgZnJvbSAnLi9ndWlkJztcbmltcG9ydCBfS0VZQ09ERSBmcm9tICcuL2tleWNvZGUnO1xuXG5leHBvcnQgY29uc3QgZG9tID0gX2RvbTtcbmV4cG9ydCBjb25zdCBlbnYgPSBfZW52O1xuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IF9ldmVudHM7XG5leHBvcnQgY29uc3QgZnVuYyA9IF9mdW5jO1xuZXhwb3J0IGNvbnN0IGxvZyA9IF9sb2c7XG5leHBvcnQgY29uc3Qgb2JqID0gX29iamVjdDtcbmV4cG9ydCBjb25zdCBzdHIgPSBfc3RyaW5nO1xuZXhwb3J0IGNvbnN0IHN1cHBvcnQgPSBfc3VwcG9ydDtcbmV4cG9ydCBjb25zdCBmb2N1cyA9IF9mb2N1cztcbmV4cG9ydCBjb25zdCBndWlkID0gX2d1aWQ7XG5leHBvcnQgY29uc3QgS0VZQ09ERSA9IF9LRVlDT0RFO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5kZXguanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2NsYXNzbmFtZXNAMi4yLjZAY2xhc3NuYW1lcy9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdldENvbnRleHRQcm9wcyBmcm9tICcuL2dldC1jb250ZXh0LXByb3BzJztcbmltcG9ydCB7XG4gICAgY29uZmlnLFxuICAgIGluaXRMb2NhbGVzLFxuICAgIHNldExhbmd1YWdlLFxuICAgIHNldExvY2FsZSxcbiAgICBzZXREaXJlY3Rpb24sXG4gICAgZ2V0TG9jYWxlLFxuICAgIGdldExhbmd1YWdlLFxuICAgIGdldERpcmVjdGlvblxufSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSAnLi9jb25zdW1lcic7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbmNvbnN0IGNoaWxkQ29udGV4dENhY2hlID0gbmV3IENhY2hlKCk7XG5cbi8qKlxuICogQ29uZmlnUHJvdmlkZXJcbiAqIEBwcm9wc0V4dGVuZHMgZmFsc2VcbiAqL1xuY2xhc3MgQ29uZmlnUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLflvI/nsbvlkI3nmoTlk4HniYzliY3nvIBcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWbvemZheWMluaWh+ahiOWvueixoe+8jOWxnuaAp+S4uue7hOS7tueahCBkaXNwbGF5TmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5byA5ZCvIFB1cmUgUmVuZGVyIOaooeW8j++8jOS8muaPkOmrmOaAp+iDve+8jOS9huaYr+S5n+S8muW4puadpeWJr+S9nOeUqFxuICAgICAgICAgKi9cbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblnKjlvIDlj5HmqKHlvI/kuIvmmL7npLrnu4Tku7blsZ7mgKfooqvlup/lvIPnmoQgd2FybmluZyDmj5DnpLpcbiAgICAgICAgICovXG4gICAgICAgIHdhcm5pbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5byA5ZCvIHJ0bCDmqKHlvI9cbiAgICAgICAgICovXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu4Tku7bmoJFcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB3YXJuaW5nOiB0cnVlXG4gICAgfTtcblxuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgbmV4dFByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbmV4dExvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgbmV4dFB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBuZXh0UnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOS8oOWFpee7hOS7tu+8jOeUn+aIkOWPlyBDb25maWdQcm92aWRlciDmjqfliLbnmoQgSE9DIOe7hOS7tlxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBDb21wb25lbnQg57uE5Lu257G7XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg5Y+v6YCJ6aG5XG4gICAgICogQHJldHVybnMge0NvbXBvbmVudH0gSE9DXG4gICAgICovXG4gICAgc3RhdGljIGNvbmZpZyA9IChDb21wb25lbnQsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZyhDb21wb25lbnQsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDkvKDlhaXnu4Tku7bnmoQgcHJvcHMg5ZKMIGRpc3BsYXlOYW1l77yM5b6X5Yiw5ZKMIGNoaWxkQ29udGV4dCDorqHnrpfov4fnmoTljIXlkKvmnIkgcHJlaWZ4L2xvY2FsZS9wdXJlIOeahOWvueixoe+8jOS4gOiIrOeUqOS6jumAmui/h+mdmeaAgeaWueazleeUn+aIkOiEseemu+e7hOS7tuagkeeahOe7hOS7tlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDnu4Tku7bnmoQgcHJvcHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlzcGxheU5hbWUg57uE5Lu255qEIGRpc3BsYXlOYW1lXG4gICAgICogQHJldHVybnMge09iamVjdH0g5paw55qEIGNvbnRleHQgcHJvcHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29udGV4dFByb3BzID0gKHByb3BzLCBkaXNwbGF5TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dFByb3BzKHByb3BzLCBjaGlsZENvbnRleHRDYWNoZS5yb290KCkgfHwge30sIGRpc3BsYXlOYW1lKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGluaXRMb2NhbGVzID0gaW5pdExvY2FsZXM7XG4gICAgc3RhdGljIHNldExhbmd1YWdlID0gc2V0TGFuZ3VhZ2U7XG4gICAgc3RhdGljIHNldExvY2FsZSA9IHNldExvY2FsZTtcbiAgICBzdGF0aWMgc2V0RGlyZWN0aW9uID0gc2V0RGlyZWN0aW9uO1xuICAgIHN0YXRpYyBnZXRMYW5ndWFnZSA9IGdldExhbmd1YWdlO1xuICAgIHN0YXRpYyBnZXRMb2NhbGUgPSBnZXRMb2NhbGU7XG4gICAgc3RhdGljIGdldERpcmVjdGlvbiA9IGdldERpcmVjdGlvbjtcbiAgICBzdGF0aWMgQ29uc3VtZXIgPSBDb25zdW1lcjtcblxuICAgIHN0YXRpYyBnZXRDb250ZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5leHRQcmVmaXgsIG5leHRMb2NhbGUsIG5leHRQdXJlLCBuZXh0UnRsLCBuZXh0V2FybmluZyB9ID0gY2hpbGRDb250ZXh0Q2FjaGUucm9vdCgpIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmVmaXg6IG5leHRQcmVmaXgsXG4gICAgICAgICAgICBsb2NhbGU6IG5leHRMb2NhbGUsXG4gICAgICAgICAgICBwdXJlOiBuZXh0UHVyZSxcbiAgICAgICAgICAgIHJ0bDogbmV4dFJ0bCxcbiAgICAgICAgICAgIHdhcm5pbmc6IG5leHRXYXJuaW5nXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIGNoaWxkQ29udGV4dENhY2hlLmFkZChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBjaGlsZENvbnRleHRDYWNoZS5nZXQodGhpcywge30pLCB0aGlzLmdldENoaWxkQ29udGV4dCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgd2FybmluZywgcnRsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0UHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBuZXh0TG9jYWxlOiBsb2NhbGUsXG4gICAgICAgICAgICBuZXh0UHVyZTogcHVyZSxcbiAgICAgICAgICAgIG5leHRSdGw6IHJ0bCxcbiAgICAgICAgICAgIG5leHRXYXJuaW5nOiB3YXJuaW5nXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldE1vbWVudExvY2FsZSh0aGlzLnByb3BzLmxvY2FsZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYWxlICE9PSBuZXh0UHJvcHMubG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1vbWVudExvY2FsZShuZXh0UHJvcHMubG9jYWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY2hpbGRDb250ZXh0Q2FjaGUuYWRkKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGNoaWxkQ29udGV4dENhY2hlLmdldCh0aGlzLCB7fSksIHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNoaWxkQ29udGV4dENhY2hlLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRNb21lbnRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIGxldCBtb21lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9tZW50ICYmIGxvY2FsZSkge1xuICAgICAgICAgICAgbW9tZW50LmxvY2FsZShsb2NhbGUubW9tZW50TG9jYWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvaW5kZXguanN4IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qKlxuICog6I635Y+W5a+56LGh55qE57G75Z6LXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAZXhhbXBsZVxuICogdHlwZU9mKFtdKSA9PT0gJ0FycmF5J1xuICogdHlwZU9mKCkgPT09ICdVbmRlZmluZWQnXG4gKiB0eXBlT2YoMSkgPT09ICdOdW1iZXInXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlT2YgKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5yZXBsYWNlKC9cXFtvYmplY3RcXHN8XS9nLCAnJyk7XG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv5pWw57uE5oiW57G75pWw57uE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBleGFtcGxlXG4gKiBpc0FycmF5TGlrZShbXSkgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKGFyZ3VtZW50cykgPT09IHRydWVcbiAqIGlzQXJyYXlMaWtlKHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAob2JqKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gISFvYmogJiYgJ2xlbmd0aCcgaW4gb2JqICYmIG9iai5sZW5ndGg7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVPZihvYmopO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdBcnJheScgfHwgbGVuZ3RoID09PSAwIHx8XG4gICAgICAgICh0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmopO1xufVxuXG4vKipcbiAqIOWIpOaWreWvueixoeaYr+WQpuaYr+S4gOS4qnByb21pc2XvvIzljbPmmK/lkKblj6/ku6XnlKgudGhlblxuICogQHBhcmFtICB7Kn0gIG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICog5piv5ZCm5piv5LiA5Liq57qv5YeA55qE5a+56LGhXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHJlZmVyZW5jZSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICAgIGlmICh0eXBlT2Yob2JqKSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGN0b3IgPSBvYmouY29uc3RydWN0b3I7XG5cbiAgICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3QgPSBjdG9yLnByb3RvdHlwZTtcblxuICAgIGlmICh0eXBlT2YocHJvdCkgIT09ICdPYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog5a+56LGh5rWF5q+U6L6DXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iakFcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqQlxuICogQHBhcmFtICB7RnVuY3Rpb259ICBbY29tcGFyZV0g5omL5Yqo6LCD55So5pa55rOV5q+U6L6DXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIOWvueixoea1heavlOi+g+aYr+WQpuebuOetiVxuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3Quc2hhbGxvd0VxdWFsKHthOiAxMDB9LCB7YTogMTAwfSk7IC8vIHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbCAob2JqQSwgb2JqQiwgY29tcGFyZSkge1xuICAgIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIOWFtuS4reS4gOS4quS4jeaYr29iamVjdO+8jOWImeS4jeebuOetiVxuICAgIGlmICghb2JqQSB8fCAhb2JqQiB8fCAodHlwZW9mIG9iakEgKyB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdG9iamVjdCcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgY29uc3Qga2V5QiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICAgIGNvbnN0IGxlbiA9IGtleUEubGVuZ3RoO1xuXG4gICAgLy8ga2V5IOaVsOmHj+S4jeS4gOiHtOWImeS4jeebuOetiVxuICAgIGlmIChsZW4gIT09IGtleUIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IHR5cGVvZiBjb21wYXJlID09PSAnZnVuY3Rpb24nO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlBW2ldO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbEEgPSBvYmpBW2tleV07XG4gICAgICAgIGNvbnN0IHZhbEIgPSBvYmpCW2tleV07XG5cbiAgICAgICAgY29uc3QgcmV0ID0gaGFzQ2FsbGJhY2sgPyBjb21wYXJlKHZhbEEsIHZhbEIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgcmV0ID09PSB2b2lkIDAgJiYgdmFsQSAhPT0gdmFsQikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog6YGN5Y6G5a+56LGh5oiW5pWw57uE77yM5oiW6ICF57G75pWw57uE77yM5L6L5aaCUmVhY3TkuK3nmoRjaGlsZHJlbuWvueixoeOAgWFyZ3VtZW50c+etiVxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgIG9ialxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIGZuKG4sIGkpIG9yIGZuKHZhbCwga2V5KVxuICogQHBhcmFtICB7TnVtYmVyfSAgIFtkaXJlY3Rpb24gPSAxXSDmmK/lkKblgJLluo/pgY3ljobvvIzlj6rlr7nmlbDnu4TmnInmlYhcbiAqIEByZXR1cm4ge09iamVjdHxBcnJheX1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6YGN5Y6G5pWw57uEXG4gKiBvYmplY3QuZWFjaChbMTAwLCAyMDAsIDMwMF0sIChuLCBpKSA9PiBjb25zb2xlLmxvZyhuLCBpKSk7XG4gKiAvLyDpgY3ljoZqc29u5a+56LGhXG4gKiBvYmplY3QuZWFjaCh7YTogMTAwLCBiOiAyMDB9LCAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5LCB2YWx1ZSkpO1xuICogLy8g6YGN5Y6GUmVhY3TlrZDoioLngrlcbiAqIG9iamVjdC5lYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IGNvbnNvbGUubG9nKGNoaWxkKSk7XG4gKiAvLyDpgY3ljoZhcmd1bWVudHNcbiAqIG9iamVjdC5lYWNoKGFyZ3VtZW50cywgKGFyZywgaSkgPT4gY29uc29sZS5sb2coYXJnKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYWNoIChvYmosIGNhbGxiYWNrLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gLTE7XG4gICAgY29uc3QgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBsZXQgdmFsdWUsXG4gICAgICAgIGkgPSByZXZlcnNlZCA/IGxlbmd0aCAtIDEgOiAwO1xuXG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggJiYgaSA+PSAwOyByZXZlcnNlZCA/IGktLSA6IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjay5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG4vLyBAcHJpdmF0ZSDliKTmlq1rZXnmmK/lkKblnKjmlbDnu4TmiJblr7nosaHkuK1cbmNvbnN0IF9pc0luT2JqID0gKGtleSwgb2JqLCBpc0FycmF5KSA9PiBpc0FycmF5ID8gKG9iai5pbmRleE9mKGtleSkgPiAtMSkgIDogKGtleSBpbiBvYmopO1xuXG4vKipcbiAqIOi/h+a7pOWHuuWFtuWug+WxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtPYmplY3R9IHByb3BzICAgICDooqvov4fmu6TnmoTlr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja090aGVycyhGb29Db21wb25lbnQucHJvcFR5cGVzLCB0aGlzLnByb3BzKTtcbiAqIG9iamVjdC5waWNrT3RoZXJzKFsnY2xhc3NOYW1lJywgJ29uQ2hhbmdlJ10sIHRoaXMucHJvcHMpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja090aGVycyAoaG9sZFByb3BzLCBwcm9wcykge1xuICAgIGNvbnN0IG90aGVycyA9IHt9O1xuICAgIGNvbnN0IGlzQXJyYXkgPSB0eXBlT2YoaG9sZFByb3BzKSA9PT0gJ0FycmF5JztcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmICghX2lzSW5PYmooa2V5LCBob2xkUHJvcHMsIGlzQXJyYXkpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJzO1xufVxuXG4vKipcbiAqIOi/h+a7pOWHuuW4pnByZWZpeOeahOWxnuaAp1xuICogQHBhcmFtICB7T2JqZWN0fSBob2xkUHJvcHMg6L+H5ruk55qE5Y+C54Wn5a+56LGh77yM5pyA57uI55qE57uT5p6c5Y+q5L+d55WZ5LiN5Zyo5Y+C54Wn5a+56LGh5Lit55qEa2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHByZWZpeCAgICDljIXlkKvnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIG90aGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiBvYmplY3QucGlja0F0dHJzV2l0aChGb29Db21wb25lbnQucHJvcFR5cGVzLCAnZGF0YS0nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpY2tBdHRyc1dpdGggKGhvbGRQcm9wcywgcHJlZml4KSB7XG4gICAgY29uc3Qgb3RoZXJzID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBob2xkUHJvcHMpIHtcbiAgICAgICAgaWYgKGtleS5tYXRjaChwcmVmaXgpKSB7XG4gICAgICAgICAgICBvdGhlcnNba2V5XSA9IGhvbGRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG90aGVycztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL29iamVjdC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtaWNvbltkaXI9XFxcInJ0bFxcXCJdOjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOZXh0SWNvbjtcXG4gIHNyYzogdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIuZW90XFxcIik7XFxuICBzcmM6IHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLmVvdD8jaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci5zdmcjTmV4dEljb25cXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpOyB9XFxuXFxuLm5leHQtaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogTmV4dEljb247XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cXG4gIC5uZXh0LWljb246YmVmb3JlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5uZXh0LWljb24tc21pbGU6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjVGXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jcnk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjVEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zdWNjZXNzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQVxcXCI7IH1cXG4gIC5uZXh0LWljb24td2FybmluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MEJcXFwiOyB9XFxuICAubmV4dC1pY29uLXByb21wdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MENcXFwiOyB9XFxuICAubmV4dC1pY29uLWVycm9yOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwRFxcXCI7IH1cXG4gIC5uZXh0LWljb24taGVscDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NzNcXFwiOyB9XFxuICAubmV4dC1pY29uLWNsb2NrOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMVxcXCI7IH1cXG4gIC5uZXh0LWljb24tc3VjY2Vzcy1maWxsaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzQVxcXCI7IH1cXG4gIC5uZXh0LWljb24tZGVsZXRlLWZpbGxpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjIzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1mYXZvcml0ZXMtZmlsbGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MEVcXFwiOyB9XFxuICAubmV4dC1pY29uLWFkZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTVcXFwiOyB9XFxuICAubmV4dC1pY29uLW1pbnVzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwMVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctdXA6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzRFxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MURcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxOVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctZG91YmxlLWxlZnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU5XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjVFXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zd2l0Y2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNkIzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zb3J0aW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzNFxcXCI7IH1cXG4gIC5uZXh0LWljb24tZGVzY2VuZGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MUZcXFwiOyB9XFxuICAubmV4dC1pY29uLWFzY2VuZGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MUVcXFwiOyB9XFxuICAubmV4dC1pY29uLXNlbGVjdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzJcXFwiOyB9XFxuICAubmV4dC1pY29uLXNlbWktc2VsZWN0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzM1xcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VhcmNoOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NlxcXCI7IH1cXG4gIC5uZXh0LWljb24tY2xvc2U6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lbGxpcHNpczpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTRcXFwiOyB9XFxuICAubmV4dC1pY29uLXBpY3R1cmU6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjMxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jYWxlbmRhcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MDdcXFwiOyB9XFxuICAubmV4dC1pY29uLWFzaGJpbjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzlcXFwiOyB9XFxuICAubmV4dC1pY29uLXVwbG9hZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU3RUVcXFwiOyB9XFxuICAubmV4dC1pY29uLWRvd25sb2FkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYyOFxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2V0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY4M1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZWRpdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2M0JcXFwiOyB9XFxuICAubmV4dC1pY29uLXJlZnJlc2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjc3XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1maWx0ZXI6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI3XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hdHRhY2htZW50OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY2NVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYWNjb3VudDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MDhcXFwiOyB9XFxuICAubmV4dC1pY29uLWVtYWlsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwNVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXRtOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwNlxcXCI7IH1cXG4gIC5uZXh0LWljb24tbG9hZGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NDZcXFwiO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSAxcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHhzOmJlZm9yZSB7XFxuICB3aWR0aDogOHB4O1xcbiAgZm9udC1zaXplOiA4cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbkBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xcbiAgLm5leHQtaWNvbi5uZXh0LXh4cyB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC00cHg7IH1cXG4gICAgLm5leHQtaWNvbi5uZXh0LXh4czpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgfSB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXhzOmJlZm9yZSB7XFxuICB3aWR0aDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXNtYWxsOmJlZm9yZSB7XFxuICB3aWR0aDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LW1lZGl1bTpiZWZvcmUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC1sYXJnZTpiZWZvcmUge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC14bDpiZWZvcmUge1xcbiAgd2lkdGg6IDMycHg7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC14eGw6YmVmb3JlIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHh4bDpiZWZvcmUge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvaWNvbi9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kTm9kZSh0YXJnZXQsIHBhcmFtKSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldChwYXJhbSk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRhcmdldCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvdXRpbHMvZmluZC1ub2RlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7ZnVuYywgb2JqfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHtub3JtYWxNYXAsIGVkZ2VNYXB9IGZyb20gJy4vYWxpZ25NYXAnO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgeGlhY2hpIG9uIDE3LzIvMTAuXG4gKi9cblxuY29uc3Qge25vb3B9ID0gZnVuYztcblxuY2xhc3MgQmFsbG9vbklubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFsaWduRWRnZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlzVG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sXG4gICAgfVxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICBhbGlnbkVkZ2U6IGZhbHNlLFxuICAgICAgICBwdXJlOiBmYWxzZVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwcmVmaXgsIGNsb3NhYmxlLCBjbGFzc05hbWUsIHN0eWxlLCBpc1Rvb2x0aXAsIGFsaWduLCB0eXBlLCBvbkNsb3NlLCBhbGlnbkVkZ2UsIGNoaWxkcmVuLCBydGwsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGFsaWduTWFwID0gYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgbGV0IF9wcmVmaXggPSBwcmVmaXg7XG5cbiAgICAgICAgaWYgKGlzVG9vbHRpcCkge1xuICAgICAgICAgICAgX3ByZWZpeCA9IGAke19wcmVmaXh9YmFsbG9vbi10b29sdGlwYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wcmVmaXggPSBgJHtfcHJlZml4fWJhbGxvb25gO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgW2Ake19wcmVmaXh9YF06IHRydWUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tJHt0eXBlfWBdOiB0eXBlLFxuICAgICAgICAgICAgW2Ake19wcmVmaXh9LW1lZGl1bWBdOiB0cnVlLFxuICAgICAgICAgICAgW2Ake19wcmVmaXh9LSR7YWxpZ25NYXBbYWxpZ25dLmFycm93fWBdOiBhbGlnbk1hcFthbGlnbl0sXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tY2xvc2FibGVgXTogY2xvc2FibGUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiByb2xlPVwidG9vbHRpcFwiIGRpcj17cnRsID8gJ3J0bCcgOiB1bmRlZmluZWR9IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3N0eWxlfSB7Li4ub2JqLnBpY2tPdGhlcnMoT2JqZWN0LmtleXMoQmFsbG9vbklubmVyLnByb3BUeXBlcyksIG90aGVycyl9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsb3NhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PVwiMFwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPXtgJHtfcHJlZml4fS1jbG9zZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjbG9zZVwiIHNpemU9XCJzbWFsbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPiA6IG51bGx9XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWxsb29uSW5uZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9pbm5lci5qc3giLCIvKipcbiAqIENyZWF0ZWQgYnkgeGlhY2hpIG9uIDE3LzEvMTcuXG4gKi9cblxuY29uc3Qgbm9ybWFsTWFwID0ge1xuICAgIHQ6IHtcbiAgICAgICAgYWxpZ246ICdiYyB0YycsXG4gICAgICAgIHJ0bEFsaWduOiAnYmMgdGMnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICByOiB7XG4gICAgICAgIGFsaWduOiAnY2wgY3InLFxuICAgICAgICBydGxBbGlnbjogJ2NyIGNsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICdsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAwXVxuICAgIH0sXG4gICAgYjoge1xuICAgICAgICBhbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgcnRsQWxpZ246ICd0YyBiYycsXG4gICAgICAgIGFycm93OiAndG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBhbGlnbjogJ2NyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICdjbCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAwXVxuICAgIH0sXG4gICAgdGw6IHtcbiAgICAgICAgYWxpZ246ICdiciB0YycsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgdGMnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzIwLCAtMTJdXG4gICAgfSxcbiAgICB0cjoge1xuICAgICAgICBhbGlnbjogJ2JsIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFstMjAsIC0xMl1cbiAgICB9LFxuICAgIHJ0OiB7XG4gICAgICAgIGFsaWduOiAnYmwgY3InLFxuICAgICAgICBydGxBbGlnbjogJ2JyIGNsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAyMF1cbiAgICB9LFxuICAgIHJiOiB7XG4gICAgICAgIGFsaWduOiAndGwgY3InLFxuICAgICAgICBydGxBbGlnbjogJ3RyIGNsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0LXRvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAtMjBdXG4gICAgfSxcbiAgICBibDoge1xuICAgICAgICBhbGlnbjogJ3RyIGJjJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCBiYycsXG4gICAgICAgIGFycm93OiAndG9wLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMjAsIDEyXVxuICAgIH0sXG4gICAgYnI6IHtcbiAgICAgICAgYWxpZ246ICd0bCBiYycsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgYmMnLFxuICAgICAgICBhcnJvdzogJ3RvcC1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTIwLCAxMl1cbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIGFsaWduOiAnYnIgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ2JsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDIwXVxuICAgIH0sXG4gICAgbGI6IHtcbiAgICAgICAgYWxpZ246ICd0ciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LXRvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgLTIwXVxuICAgIH1cbn07XG5jb25zdCBlZGdlTWFwID0ge1xuICAgIHQ6IHtcbiAgICAgICAgYWxpZ246ICdiYyB0YycsXG4gICAgICAgIHJ0bEFsaWduOiAnYmMgdGMnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tJyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICByOiB7XG4gICAgICAgIGFsaWduOiAnY2wgY3InLFxuICAgICAgICBydGxBbGlnbjogJ2NyIGNsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICdsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdyaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAwXVxuICAgIH0sXG4gICAgYjoge1xuICAgICAgICBhbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgcnRsQWxpZ246ICd0YyBiYycsXG4gICAgICAgIGFycm93OiAndG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgbDoge1xuICAgICAgICBhbGlnbjogJ2NyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICdjbCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAwXVxuICAgIH0sXG4gICAgdGw6IHtcbiAgICAgICAgYWxpZ246ICdibCB0bCcsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgdHInLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgdHI6IHtcbiAgICAgICAgYWxpZ246ICdiciB0cicsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgdGwnLFxuICAgICAgICBhcnJvdzogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHJ0OiB7XG4gICAgICAgIGFsaWduOiAndGwgdHInLFxuICAgICAgICBydGxBbGlnbjogJ3RyIHRsJyxcbiAgICAgICAgYXJyb3c6ICdsZWZ0LXRvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzEyLCAwXVxuICAgIH0sXG4gICAgcmI6IHtcbiAgICAgICAgYWxpZ246ICdibCBicicsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgYmwnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICBibDoge1xuICAgICAgICBhbGlnbjogJ3RsIGJsJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciBicicsXG4gICAgICAgIGFycm93OiAndG9wLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGJyOiB7XG4gICAgICAgIGFsaWduOiAndHIgYnInLFxuICAgICAgICBydGxBbGlnbjogJ3RsIGJsJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAxMl1cbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIGFsaWduOiAndHIgdGwnLFxuICAgICAgICBydGxBbGlnbjogJ3RsIHRyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC10b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfSxcbiAgICBsYjoge1xuICAgICAgICBhbGlnbjogJ2JyIGJsJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCBicicsXG4gICAgICAgIGFycm93OiAncmlnaHQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAwXVxuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgbm9ybWFsTWFwLFxuICAgIGVkZ2VNYXBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9hbGlnbk1hcC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZEluRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZEluRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZEluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZEluV2l0aEZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAuMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZEluV2l0aEZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAuMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kT3V0VXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRPdXRVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZE91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGV4cGFuZE91dFdpdGhGYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kT3V0V2l0aEZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuLmZhZGVJbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVJbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVJblJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0RG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dExlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXRSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0VXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uem9vbUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uem9vbU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZEluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kSW5Eb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZE91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluVXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kT3V0RG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dERvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtZW50ZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5leHBhbmQtZW50ZXItYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7IH1cXG4gIC5leHBhbmQtZW50ZXItYWN0aXZlID4gKiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluV2l0aEZhZGU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbldpdGhGYWRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1sZWF2ZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1sZWF2ZS1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDsgfVxcbiAgLmV4cGFuZC1sZWF2ZS1hY3RpdmUgPiAqIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kT3V0V2l0aEZhZGU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRXaXRoRmFkZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogXFxcImZvcndhcmRzXFxcIjtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvYW5pbWF0ZS9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1vdmVybGF5LXdyYXBwZXIgLm5leHQtb3ZlcmxheS1pbm5lciB7XFxuICB6LWluZGV4OiAxMDAxOyB9XFxuXFxuLm5leHQtb3ZlcmxheS13cmFwcGVyIC5uZXh0LW92ZXJsYXktYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLm5leHQtb3ZlcmxheS13cmFwcGVyLm9wZW5lZCAubmV4dC1vdmVybGF5LWJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDAuMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj8/cmVmLS0yLTEhLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYj8/cmVmLS0yLTIhLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIhLi9zcmMvb3ZlcmxheS9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1iYWxsb29uIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgei1pbmRleDogMDtcXG4gIC8qIHNpemUgKi9cXG4gIC8qIOW4puWFs+mXreaMiemSrueahOWPs+S+p3BhZGRpbmflj5jlpKcgKi8gfVxcbiAgLm5leHQtYmFsbG9vbiAqLFxcbiAgLm5leHQtYmFsbG9vbiAqOmJlZm9yZSxcXG4gIC5uZXh0LWJhbGxvb24gKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAubmV4dC1iYWxsb29uLXByaW1hcnkge1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ5NEY5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb246YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzMzMzMzMzsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnk6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0OTRGOTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xcbiAgICAgIHotaW5kZXg6IC0xOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbi1ub3JtYWwge1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgYm9yZGVyLWNvbG9yOiAjRENERUUzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBjb2xvcjogIzk5OTk5OTsgfVxcbiAgICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgICAubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb246YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2UgOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2OyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RFRTM7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICB6LWluZGV4OiAtMTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiAtN3B4O1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubmV4dC1iYWxsb29uLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tbWVkaXVtIHtcXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDsgfVxcbiAgLm5leHQtYmFsbG9vbi1jbG9zYWJsZSB7XFxuICAgIHBhZGRpbmc6IDE2cHggNDBweCAxNnB4IDE2cHg7IH1cXG5cXG4ubmV4dC1iYWxsb29uLXRvb2x0aXAge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB6LWluZGV4OiAwO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBib3JkZXItY29sb3I6ICNEQ0RFRTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAvKiBzaXplICovIH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcCAqLFxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwICo6YmVmb3JlLFxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENERUUzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y3O1xcbiAgICB6LWluZGV4OiAtMTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcDphZnRlciB7XFxuICAgIHRvcDogLTdweDtcXG4gICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQ6YWZ0ZXIge1xcbiAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbTphZnRlciB7XFxuICAgIGJvdHRvbTogLTdweDtcXG4gICAgbGVmdDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0LXRvcDphZnRlciB7XFxuICAgIHRvcDogMTJweDtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICBib3R0b206IDEycHg7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIHRvcDogMTJweDtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGJvdHRvbTogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtbGVmdDphZnRlciB7XFxuICAgIHRvcDogLTdweDtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICByaWdodDogMTJweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICBib3R0b206IC03cHg7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGJvdHRvbTogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtbWVkaXVtIHtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4OyB9XFxuXFxuLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdIHtcXG4gIC8qIOW4puWFs+mXreaMiemSrueahOWPs+S+p3BhZGRpbmflj5jlpKcgKi8gfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICByaWdodDogYXV0bztcXG4gICAgbGVmdDogMTJweDsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbCAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1yaWdodDphZnRlciB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMnB4OyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLWNsb3NhYmxlIHtcXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggNDBweDsgfVxcblxcbi5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdIHtcXG4gIC8qIHNpemUgKi8gfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0LXRvcDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtbWVkaXVtIHtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9iYWxsb29uL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgR2F0ZXdheSBmcm9tICcuL2dhdGV3YXknO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24nO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuXG5PdmVybGF5LkdhdGV3YXkgPSBHYXRld2F5O1xuT3ZlcmxheS5Qb3NpdGlvbiA9IFBvc2l0aW9uO1xuT3ZlcmxheS5Qb3B1cCA9IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhQb3B1cCwge1xuICAgIGV4cG9ydE5hbWVzOiBbJ292ZXJsYXknXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhPdmVybGF5LCB7XG4gICAgZXhwb3J0TmFtZXM6IFsnZ2V0Q29udGVudCcsICdnZXRDb250ZW50Tm9kZSddXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L2luZGV4LmpzeCIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb24vc3R5bGUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LWJ0biB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJ0biAqLFxcbiAgLm5leHQtYnRuICo6YmVmb3JlLFxcbiAgLm5leHQtYnRuICo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYnRuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAubmV4dC1idG4sIC5uZXh0LWJ0bjphY3RpdmUsIC5uZXh0LWJ0bjpmb2N1cywgLm5leHQtYnRuOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZ0NpcmNsZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG4ubmV4dC1idG4ge1xcbiAgLyog5bC65a+457u05bqmICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKiDmma7pgJrmjInpkq4gKi9cXG4gIC8qIOaZrumAmuaAgeemgeeUqOagt+W8jyAqL1xcbiAgLyog6K2m5ZGK5oyJ6ZKuICovXFxuICAvKiDmlofmnKzmjInpkq4gKi9cXG4gIC8qIGxvYWRpbmcgKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qIOW5veeBteaMiemSriAqL1xcbiAgLyog57uE5ZCIICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovIH1cXG4gIC5uZXh0LWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmV4dC1idG46YWZ0ZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7IH1cXG4gICAgLm5leHQtYnRuIC5uZXh0LWljb24ubmV4dC14czpiZWZvcmUge1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcbiAgICAubmV4dC1idG4uaG92ZXIsIC5uZXh0LWJ0bjpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICBsZWZ0OiA4cHg7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGVmdDogMTJweDtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzZweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItY29sb3I6ICNDNEM2Q0Y7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbCwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpsaW5rLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOnZpc2l0ZWQsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpmb2N1cywgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDpob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbC5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbDphY3RpdmUsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWwuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y3O1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0EwQTJBRDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODRGRjtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeSwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6bGluaywgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnkudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6Zm9jdXMsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5OmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6YWN0aXZlLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeS5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTcxRjc7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItY29sb3I6ICM1NTg0RkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeSwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpsaW5rLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkudmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICM1NTg0RkY7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpmb2N1cywgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTpob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeS5ob3ZlciwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeTphY3RpdmUsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U3MUY3O1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzNFNzFGNztcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi5kaXNhYmxlZCwgLm5leHQtYnRuW2Rpc2FibGVkXSB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgIGJvcmRlci1jb2xvcjogI0U2RTdFQjsgfVxcbiAgICAubmV4dC1idG4uZGlzYWJsZWQsIC5uZXh0LWJ0bi5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4uZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bltkaXNhYmxlZF0sIC5uZXh0LWJ0bltkaXNhYmxlZF06bGluaywgLm5leHQtYnRuW2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG5bZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgIC5uZXh0LWJ0bi5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4uZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bltkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bltkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bltkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bltkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG5bZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICNDQ0NDQ0M7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4td2FybmluZyB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG4gICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzAwMDtcXG4gICAgICBib3JkZXItY29sb3I6ICNGRjMwMDA7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U3MkIwMDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNEQ0RFRTM7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRENERUUzO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGMzAwMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0ZGMzAwMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbDphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4RkE7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTZFN0VCO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0IHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHQuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0OmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5LCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjNTU4NEZGOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeS5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnkuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjM0U3MUY3O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkudmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogIzY2NjY2NjsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnkuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeTphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeS5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICM1NTg0RkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6bGluaywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbC52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmZvY3VzLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbC5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsOmFjdGl2ZSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzU1ODRGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGJvcmRlci13aWR0aDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMDtcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGJvcmRlci13aWR0aDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICBwYWRkaW5nOiAwIDA7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBib3JkZXItd2lkdGg6IDA7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5kaXNhYmxlZCwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXSwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI0NDQ0NDQzsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOmxpbmssIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZy52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzpmb2N1cywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZy5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICBmb250LWZhbWlseTogTmV4dEljb247XFxuICAgICAgY29udGVudDogXFxcIlxcXFxFNjQ2XFxcIjtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDJzIGluZmluaXRlIGxpbmVhcjsgfVxcbiAgLm5leHQtYnRuLWdob3N0IHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG4gICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0sIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XFxuICAgICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0OmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Mik7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzMzMzM7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi1ncm91cCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0biB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46aG92ZXIsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpmb2N1cywgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmFjdGl2ZSwgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLmFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLmRpc2FibGVkLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG5bZGlzYWJsZWRdIHtcXG4gICAgICAgIHotaW5kZXg6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwIC5uZXh0LWJ0bi5uZXh0LWJ0biB7XFxuICAgICAgbWFyZ2luOiAwIDAgMCAtMXB4OyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCAubmV4dC1idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpLmRpc2FibGVkLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKVtkaXNhYmxlZF0ge1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNFNkU3RUI7IH1cXG5cXG4vKiDnu4TlkIggKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gLm5leHQtYnRuLm5leHQtYnRuIHtcXG4gIG1hcmdpbjogMCAtMXB4IDAgMDsgfVxcblxcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XFxuICAubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKS5kaXNhYmxlZCwgLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKVtkaXNhYmxlZF0ge1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNFNkU3RUI7IH1cXG5cXG4vKiDlsLrlr7jnu7TluqYgKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogOHB4O1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE2cHg7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4vKiDmlofmnKzmjInpkq4gKi9cXG4ubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0ge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9idXR0b24vbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDQgNSA2IDciLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG4vKipcbiAqIEljb25cbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5pi+56S65ZOq56eN5Zu+5qCHXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5Zu+5qCH5aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4eHMnLCAneHMnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ3hsJywgJ3h4bCcsICd4eHhsJ10pLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgc2l6ZTogJ21lZGl1bSdcbiAgICB9O1xuXG4gICAgc3RhdGljIF90eXBlTWFyayA9ICdpY29uJztcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgdHlwZSwgc2l6ZSwgY2xhc3NOYW1lLCBydGwsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjeCh7XG4gICAgICAgICAgICBbYCR7cHJlZml4fWljb25gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi0ke3R5cGV9YF06ICEhdHlwZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9JHtzaXplfWBdOiAhIXNpemUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJ0bCAmJiBbJ2Fycm93LWxlZnQnLCAnYXJyb3ctcmlnaHQnLCAnYXJyb3ctZG91YmxlLWxlZnQnLCAnYXJyb3ctZG91YmxlLXJpZ2h0JywgJ3N3aXRjaCcsICdzb3J0aW5nJywgJ2Rlc2NlbmRpbmcnLCAnYXNjZW5kaW5nJ10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG90aGVyLmRpciA9ICdydGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxpIHsuLi5vdGhlcn0gY2xhc3NOYW1lPXtjbGFzc2VzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhJY29uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL2luZGV4LmpzeCIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvc3R5bGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5tb21lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aW5kb3cubW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29udGV4dFByb3BzKHByb3BzLCBjb250ZXh0LCBkaXNwbGF5TmFtZSkge1xuICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBuZXh0UHJlZml4LCBuZXh0TG9jYWxlLCBuZXh0UHVyZSwgbmV4dFdhcm5pbmcsIG5leHRSdGwgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBuZXdQcmVmaXggPSBwcmVmaXggfHwgbmV4dFByZWZpeDtcblxuICAgIGxldCBsb2NhbGVGcm9tQ29udGV4dDtcbiAgICBpZiAobmV4dExvY2FsZSkge1xuICAgICAgICBsb2NhbGVGcm9tQ29udGV4dCA9IG5leHRMb2NhbGVbZGlzcGxheU5hbWVdO1xuICAgICAgICBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgICAgIGxvY2FsZUZyb21Db250ZXh0Lm1vbWVudExvY2FsZSA9IG5leHRMb2NhbGUubW9tZW50TG9jYWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdMb2NhbGU7XG4gICAgaWYgKGxvY2FsZSkge1xuICAgICAgICBuZXdMb2NhbGUgPSB7IC4uLihsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSksIC4uLmxvY2FsZSB9O1xuICAgIH0gZWxzZSBpZiAobG9jYWxlRnJvbUNvbnRleHQpIHtcbiAgICAgICAgbmV3TG9jYWxlID0gbG9jYWxlRnJvbUNvbnRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHVyZSA9IHR5cGVvZiBwdXJlID09PSAnYm9vbGVhbicgPyBwdXJlIDogbmV4dFB1cmU7XG4gICAgY29uc3QgbmV3UnRsID0gdHlwZW9mIHJ0bCA9PT0gJ2Jvb2xlYW4nID8gcnRsIDogbmV4dFJ0bDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogbmV3UHJlZml4LFxuICAgICAgICBsb2NhbGU6IG5ld0xvY2FsZSxcbiAgICAgICAgcHVyZTogbmV3UHVyZSxcbiAgICAgICAgcnRsOiBuZXdSdGwsXG4gICAgICAgIHdhcm5pbmc6IG5leHRXYXJuaW5nXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvZ2V0LWNvbnRleHQtcHJvcHMuanN4IiwiaW1wb3J0IHtjYW1lbGNhc2UsIGh5cGhlbmF0ZX0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog5piv5ZCm6IO95L2/55SoIERPTSDmlrnms5VcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzRE9NID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cuZG9jdW1lbnQgJiYgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50O1xuXG4vKipcbiAqIOiKgueCueaYr+WQpuWMheWQq+aMh+WumiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBub2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjbGFzc05hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5oYXNDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuaW5kZXhPZihjbGFzc05hbWUpID4gLTE7XG4gICAgfVxufVxuXG4vKipcbiAqIOa3u+WKoCBjbGFzc05hbWVcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSwgX2ZvcmNlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKF9mb3JjZSA9PT0gdHJ1ZSB8fCAhaGFzQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgfVxufVxuXG4vKipcbiAqIOenu+mZpCBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyAobm9kZSwgY2xhc3NOYW1lLCBfZm9yY2UpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAoX2ZvcmNlID09PSB0cnVlIHx8IGhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzTmFtZSwgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIOWIh+aNoiBjbGFzc05hbWVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAg5omn6KGM5ZCO6IqC54K55LiK5piv5ZCm6L+Y5pyJ5q2kIGNsYXNzTmFtZVxuICpcbiAqIEBleGFtcGxlXG4gKiBkb20udG9nZ2xlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZvbycpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZsYWcgPSBoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgICAgICBmbGFnID8gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lLCB0cnVlKSA6IGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuICFmbGFnO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhYPntKDmmK/lkKbljLnphY0gQ1NTIOmAieaLqeWZqFxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSAgICAgICBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBzZWxlY3RvciAgIENTUyDpgInmi6nlmahcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5tYXRjaGVzKG1vdW50Tm9kZSwgJy5jb250YWluZXInKTsgLy8gYm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWF0Y2hlc0ZuID0gbnVsbDtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChoYXNET00pIHtcbiAgICAgICAgY29uc3QgX2JvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgICAgIG1hdGNoZXNGbiA9IF9ib2R5Lm1hdGNoZXMgPyAnbWF0Y2hlcycgOlxuICAgICAgICAgICAgX2JvZHkud2Via2l0TWF0Y2hlc1NlbGVjdG9yID8gJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicgOlxuICAgICAgICAgICAgICAgIF9ib2R5Lm1zTWF0Y2hlc1NlbGVjdG9yID8gJ21zTWF0Y2hlc1NlbGVjdG9yJyA6XG4gICAgICAgICAgICAgICAgICAgIF9ib2R5Lm1vek1hdGNoZXNTZWxlY3RvciA/ICdtb3pNYXRjaGVzU2VsZWN0b3InIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc0ZuID8gbm9kZVttYXRjaGVzRm5dKHNlbGVjdG9yKSA6IGZhbHNlO1xuICAgIH07XG59KCk7XG5cbi8qKlxuICog6I635Y+W5YWD57Sg6K6h566X5ZCO55qE5qC35byPXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZSAobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDEgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHt9O1xufVxuXG5jb25zdCBQSVhFTF9QQVRURVJOID0gL21hcmdpbnxwYWRkaW5nfHdpZHRofGhlaWdodHxtYXh8bWlufG9mZnNldHxzaXplL2k7XG5jb25zdCByZW1vdmVQaXhlbCA9IHtsZWZ0OiAxLCB0b3A6IDEsIHJpZ2h0OiAxLCBib3R0b206IDF9O1xuXG4vKipcbiAqIOagoemqjOW5tuS/ruato+WFg+e0oOeahOagt+W8j+WxnuaAp+WAvFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICovXG5mdW5jdGlvbiBfZ2V0U3R5bGVWYWx1ZSAobm9kZSwgdHlwZSwgdmFsdWUpIHtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3dpZHRoJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUub2Zmc2V0V2lkdGggfHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHR5cGUgaW4gcmVtb3ZlUGl4ZWwpKSB7XG4gICAgICAgIC8vIOWxnuaAp+WAvOaYr+WQpumcgOimgeWOu+aOiSBweCDljZXkvY3vvIzov5nph4zlgYflrprmraTnsbvnmoTlsZ7mgKflgLzpg73mmK8gcHgg5Li65Y2V5L2N55qEXG4gICAgICAgIHJlbW92ZVBpeGVsW3R5cGVdID0gUElYRUxfUEFUVEVSTi50ZXN0KHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVQaXhlbFt0eXBlXSA/IChwYXJzZUZsb2F0KHZhbHVlKSB8fCAwKSA6IHZhbHVlO1xufVxuXG5jb25zdCBmbG9hdE1hcCA9IHtjc3NGbG9hdDogMSwgc3R5bGVGbG9hdDogMSwgZmxvYXQ6IDF9O1xuXG4vKipcbiAqIOiOt+WPluWFg+e0oOiuoeeul+WQjueahOagt+W8j1xuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSBET00g6IqC54K5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUg5bGe5oCn5ZCNXG4gKiBAcmV0dXJuIHtOdW1iZXJ8T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUgKG5vZGUsIG5hbWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgLy8g5aaC5p6c5LiN5oyH5a6a5bGe5oCn5ZCN77yM5YiZ6L+U5Zue5YWo6YOo5YC8XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuXG4gICAgcmV0dXJuIF9nZXRTdHlsZVZhbHVlKG5vZGUsIG5hbWUsIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoaHlwaGVuYXRlKG5hbWUpKSB8fCBub2RlLnN0eWxlW2NhbWVsY2FzZShuYW1lKV0pO1xufVxuXG4vKipcbiAqIOiuvue9ruWFg+e0oOeahOagt+W8j1xuICogQHBhcmFtIHtFbGVtZW50fSBub2RlICBET00g6IqC54K5XG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWUgIOWxnuaAp+WQje+8jOaIluiAheaYr+S4gOS4quWvueixoe+8jOWMheWQq+WkmuS4quWxnuaAp1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8g6K6+572u5Y2V5Liq5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCAnd2lkdGgnLCAxMDApO1xuICogLy8g6K6+572u5aSa5p2h5bGe5oCn5YC8XG4gKiBkb20uc2V0U3R5bGUobW91bnROb2RlLCB7XG4gKiAgICAgd2lkdGg6IDEwMCxcbiAqICAgICBoZWlnaHQ6IDIwMFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZSAobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5om56YeP6K6+572u5aSa5Liq5YC8XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGVhY2gobmFtZSwgKHZhbCwga2V5KSA9PiBzZXRTdHlsZShub2RlLCBrZXksIHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBmbG9hdE1hcFtuYW1lXSA/ICdjc3NGbG9hdCcgaW4gbm9kZS5zdHlsZSA/ICdjc3NGbG9hdCcgOiAnc3R5bGVGbG9hdCcgOiBuYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBQSVhFTF9QQVRURVJOLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc3R5bGVbY2FtZWxjYXNlKG5hbWUpXSA9IHZhbHVlOyAvLyBJRTggc3VwcG9ydFxuICAgIH1cbn1cblxuLyoqXG4gKiDojrflj5bpu5jorqTnmoTmu5rliqjmnaHlpKflsI9cbiAqIEByZXR1cm4ge09iamVjdH0gd2lkdGgsIGhlaWdodFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYmFyICgpIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNldFN0eWxlKHNjcm9sbERpdiwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICB0b3A6ICctOTk5OXB4J1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxiYXJIZWlnaHQgPSBzY3JvbGxEaXYub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsRGl2LmNsaWVudEhlaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogc2Nyb2xsYmFyV2lkdGgsXG4gICAgICAgIGhlaWdodDogc2Nyb2xsYmFySGVpZ2h0XG4gICAgfTtcbn1cblxuLyoqXG4gKiDojrflj5blhYPntKDot53nprvop4blj6Ppobbpg6jlkozlt6bovrnnmoTlgY/np7vot53nprtcbiAqIEByZXR1cm4ge09iamVjdH0gdG9wLCBsZWZ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQgKG5vZGUpIHtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW4gPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RvbS5qcyIsIi8qKlxuICog5bCG5a2X56ym5Liy6L2s5YyW5Li66am85bOw5byP5YaZ5rOVXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciDkvovvvJotd2Via2l0LXRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsY2FzZSAoc3RyKSB7XG4gICAgaWYgKCEvLS8udGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBzdHIgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoJDAsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLyoqXG4gKiDlsIbpqbzls7DlvI/lrZfnrKbkuLLovazljJbkuLrov57lrZfnrKblhpnms5VcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIOS+i++8mldlYmtpdFRyYW5zaXRpb25cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgIOS+i++8mi13ZWJraXQtdHJhbnNpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlwaGVuYXRlIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJDAgPT4gYC0keyQwLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9zdHJpbmcuanMiLCIvKipcbiAqIElF5rWP6KeI5Zmo55qE5riy5p+T5byV5pOO54mI5pys5Y+3XG4gKiDms6jmhI/vvJrmraTlsZ7mgKfkuI7mtY/op4jlmajniYjmnKzlj7fkuI3lkIzvvIxJReeahOa4suafk+W8leaTjueJiOacrOWPt+aYr+WPr+S7pemAmui/h0hUTUwgaGVhZGVy5oiW5omL5Yqo6K6+572u5Y675pu05pS555qEXG4gKiBAdHlwZSB7TnVtYmVyfSA2IH4gMTBcbiAqL1xuZXhwb3J0IGNvbnN0IGllVmVyc2lvbiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5piv55Sf5Lqn546v5aKDXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBQUk9EVUNUSU9OX0VOViA9ICdwcm9kdWN0aW9uJztcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBQUk9EVUNUSU9OX0VOVikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpZVZlcnNpb24sXG4gICAgaXNQcm9kdWN0aW9uLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Vudi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBFTkQ6IDM1LFxuICAgIEhPTUU6IDM2LFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG5cbiAgICAvLyB2ZXJzaW9uIDAueFxuICAgIEVTQ0FQRTogMjcsXG4gICAgTEVGVF9BUlJPVzogMzcsXG4gICAgVVBfQVJST1c6IDM4LFxuICAgIFJJR0hUX0FSUk9XOiAzOSxcbiAgICBET1dOX0FSUk9XOiA0MCxcblxuICAgIC8vIE1hY09TXG4gICAgQ09OVFJPTDogMTcsXG4gICAgT1BUSU9OOiAxOCxcbiAgICBDTUQ6IDkxLFxuICAgIENPTU1BTkQ6IDkxLFxuICAgIERFTEVURTogOCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9rZXljb2RlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBkb20sIGV2ZW50cywgZnVuYywgc3VwcG9ydCwgZm9jdXMsIEtFWUNPREUsIGd1aWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvdmVybGF5TWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuaW1wb3J0IEdhdGV3YXkgZnJvbSAnLi9nYXRld2F5JztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL3Bvc2l0aW9uJztcbmltcG9ydCBmaW5kTm9kZSBmcm9tICcuL3V0aWxzL2ZpbmQtbm9kZSc7XG5cbmNvbnN0IHsgc2F2ZUxhc3RGb2N1c05vZGUsIGdldEZvY3VzTm9kZUxpc3QsIGJhY2tMYXN0Rm9jdXNOb2RlIH0gPSBmb2N1cztcbmNvbnN0IHsgbWFrZUNoYWluLCBub29wLCBiaW5kQ3R4IH0gPSBmdW5jO1xuXG5jb25zdCBpc1Njcm9sbERpc3BsYXkgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsYmFyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnOjotd2Via2l0LXNjcm9sbGJhcicpO1xuICAgICAgICByZXR1cm4gIXNjcm9sbGJhclN0eWxlIHx8IHNjcm9sbGJhclN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWdub3JlIGVycm9yIGZvciBmaXJlZm94XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgaGFzU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICByZXR1cm4gZG9jLnNjcm9sbEhlaWdodCA+IGRvYy5jbGllbnRIZWlnaHQgJiYgZG9tLnNjcm9sbGJhcigpLndpZHRoID4gMCAmJiBpc1Njcm9sbERpc3BsYXkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBpc1Njcm9sbERpc3BsYXkoZG9jdW1lbnQuYm9keSk7XG59O1xuY29uc3QgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5jb25zdCBnZXRTdHlsZVByb3BlcnR5ID0gKG5vZGUsIG5hbWUpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGxldCByZXQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IG1vZGFscyA9IFtdO1xubGV0IGJvZHlPdmVyZmxvd1ksIGJvZHlQYWRkaW5nUmlnaHQ7XG5cbi8qKlxuICogT3ZlcmxheVxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pi+56S65by55bGCXG4gICAgICAgICAqL1xuICAgICAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguivt+axguWFs+mXreaXtuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDlvLnlsYLlhbPpl63nmoTmnaXmupBcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGUgRE9NIOS6i+S7tlxuICAgICAgICAgKi9cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N55qE5Y+C54Wn5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo7lj4LnhaflhYPntKDnmoTlrprkvY0sIOivpuingeW8gOWPkeaMh+WNl+eahFvlrprkvY3pg6jliIZdKCPlrprkvY0pXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguebuOWvueS6juWPgueFp+WFg+e0oOWumuS9jeeahOW+ruiwg1xuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmuLLmn5Pnu4Tku7bnmoTlrrnlmajvvIzlpoLmnpzmmK/lh73mlbDpnIDopoHov5Tlm54gcmVm77yM5aaC5p6c5piv5a2X56ym5Liy5YiZ5piv6K+lIERPTSDnmoQgaWTvvIzkuZ/lj6/ku6Xnm7TmjqXkvKDlhaUgRE9NIOiKgueCuVxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pi+56S66YGu572pXG4gICAgICAgICAqL1xuICAgICAgICBoYXNNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuaUr+aMgSBlc2Mg5oyJ6ZSu5YWz6Zet5by55bGCXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5RXNjOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeCueWHu+W8ueWxguWklueahOWMuuWfn+aYr+WQpuWFs+mXreW8ueWxgu+8jOS4jeaYvuekuumBrue9qeaXtueUn+aViFxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeU91dFNpZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDngrnlh7vpga7nvanljLrln5/mmK/lkKblhbPpl63lvLnlsYLvvIzmmL7npLrpga7nvanml7bnlJ/mlYhcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOWJjeinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgYmVmb3JlT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDml7bop6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLmiZPlvIDlkI7op6blj5Hkuovku7bnmoTlm57osIPlh73mlbAsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWFs+mXreWJjeinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgYmVmb3JlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YWz6Zet5pe26Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWFs+mXreWQjuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsCwg5aaC5p6c5pyJ5Yqo55S777yM5YiZ5Zyo5Yqo55S757uT5p2f5ZCO6Kem5Y+RXG4gICAgICAgICAqL1xuICAgICAgICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWumuS9jeWujOaIkOWJjeinpuWPkeeahOS6i+S7tlxuICAgICAgICAgKi9cbiAgICAgICAgYmVmb3JlUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N5a6M5oiQ5pe26Kem5Y+R55qE5LqL5Lu2XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcg5a6a5L2N55qE5Y+C5pWwXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZy5hbGlnbiDlr7npvZDmlrnlvI/vvIzlpoIgWydjYycsICdjYydd77yI5aaC5p6c5byA5ZCvIG5lZWRBZGp1c3TvvIzlj6/og73lkozpooTlhYjorr7nva7nmoQgYWxpZ24g5LiN5ZCM77yJXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcudG9wIOi3neemu+inhuWPo+mhtumDqOi3neemu1xuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLmxlZnQg6Led56a76KeG5Y+j5bem5L6n6Led56a7XG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIOWumuS9jeWPgueFp+eahOWuueWZqOiKgueCuVxuICAgICAgICAgKi9cbiAgICAgICAgb25Qb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblnKjmr4/mrKHlvLnlsYLph43mlrDmuLLmn5PlkI7lvLrliLbmm7TmlrDlrprkvY3kv6Hmga/vvIzkuIDoiKznlKjkuo7lvLnlsYLlhoXlrrnljLrln5/lpKflsI/lj5HnlJ/lj5jljJbml7bvvIzku43pnIDkv53mjIHljp/mnaXnmoTlrprkvY3mlrnlvI9cbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOaXtuaYr+WQpuiuqeWFtuS4reeahOWFg+e0oOiHquWKqOiOt+WPlueEpueCuVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9k+W8ueWxgueUseS6jumhtemdoua7muWKqOetieaDheWGteS4jeWcqOWPr+inhuWMuuWfn+aXtu+8jOaYr+WQpuiHquWKqOiwg+aVtOWumuS9jeS7peWHuueOsOWcqOWPr+inhuWMuuWfn1xuICAgICAgICAgKi9cbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbnpoHnlKjpobXpnaLmu5rliqhcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog6ZqQ6JeP5pe25piv5ZCm5L+d55WZ5a2Q6IqC54K5XG4gICAgICAgICAqL1xuICAgICAgICBjYWNoZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlronlhajoioLngrnvvIzlvZPngrnlh7sgZG9jdW1lbnQg55qE5pe25YCZ77yM5aaC5p6c5YyF5ZCr6K+l6IqC54K55YiZ5LiN5Lya5YWz6Zet5by55bGC77yM5aaC5p6c5piv5Ye95pWw6ZyA6KaB6L+U5ZueIHJlZu+8jOWmguaenOaYr+Wtl+espuS4suWImeaYr+ivpSBET00g55qEIGlk77yM5Lmf5Y+v5Lul55u05o6l5Lyg5YWlIERPTSDoioLngrnvvIzmiJbogIXku6XkuIrlgLznu4TmiJDnmoTmlbDnu4RcbiAgICAgICAgICovXG4gICAgICAgIHNhZmVOb2RlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55qE5qC56IqC54K555qE5qC35byP57G7XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55qE5qC56IqC54K555qE5YaF6IGU5qC35byPXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDphY3nva7liqjnlLvnmoTmkq3mlL7mlrnlvI/vvIzmlK/mjIEgeyBpbjogJ2VudGVyLWNsYXNzJywgb3V0OiAnbGVhdmUtY2xhc3MnIH0g55qE5a+56LGh5Y+C5pWw77yM5aaC5p6c6K6+572u5Li6IGZhbHNl77yM5YiZ5LiN5pKt5pS+5Yqo55S7XG4gICAgICAgICAqIEBkZWZhdWx0IHsgaW46ICdleHBhbmRJbkRvd24nLCBvdXQ6ICdleHBhbmRPdXRVcCcgfVxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgICAgICBvbk1hc2tNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25NYXNrTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBwdXJlOiBmYWxzZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIG9uUmVxdWVzdENsb3NlOiBub29wLFxuICAgICAgICB0YXJnZXQ6IFBvc2l0aW9uLlZJRVdQT1JULFxuICAgICAgICBhbGlnbjogJ3RsIGJsJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgICAgIGhhc01hc2s6IGZhbHNlLFxuICAgICAgICBjYW5DbG9zZUJ5RXNjOiB0cnVlLFxuICAgICAgICBjYW5DbG9zZUJ5T3V0U2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBjYW5DbG9zZUJ5TWFzazogdHJ1ZSxcbiAgICAgICAgYmVmb3JlT3Blbjogbm9vcCxcbiAgICAgICAgb25PcGVuOiBub29wLFxuICAgICAgICBhZnRlck9wZW46IG5vb3AsXG4gICAgICAgIGJlZm9yZUNsb3NlOiBub29wLFxuICAgICAgICBvbkNsb3NlOiBub29wLFxuICAgICAgICBhZnRlckNsb3NlOiBub29wLFxuICAgICAgICBiZWZvcmVQb3NpdGlvbjogbm9vcCxcbiAgICAgICAgb25Qb3NpdGlvbjogbm9vcCxcbiAgICAgICAgb25NYXNrTW91c2VFbnRlcjogbm9vcCxcbiAgICAgICAgb25NYXNrTW91c2VMZWF2ZTogbm9vcCxcbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICBuZWVkQWRqdXN0OiB0cnVlLFxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgY2FjaGU6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIHN0YXR1czogJ25vbmUnLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmdldEFuaW1hdGlvbihwcm9wcylcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxhc3RBbGlnbiA9IHByb3BzLmFsaWduO1xuXG4gICAgICAgIGJpbmRDdHgodGhpcywgW1xuICAgICAgICAgICAgJ2hhbmRsZVBvc2l0aW9uJyxcbiAgICAgICAgICAgICdoYW5kbGVBbmltYXRlRW5kJyxcbiAgICAgICAgICAgICdoYW5kbGVEb2N1bWVudEtleURvd24nLFxuICAgICAgICAgICAgJ2hhbmRsZURvY3VtZW50Q2xpY2snLFxuICAgICAgICAgICAgJ2hhbmRsZU1hc2tDbGljaycsXG4gICAgICAgICAgICAnYmVmb3JlT3BlbicsXG4gICAgICAgICAgICAnYmVmb3JlQ2xvc2UnXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMudGltZW91dE1hcCA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmJlZm9yZU9wZW4oKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW9uICYmIHN1cHBvcnQuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRFdmVudHMoKTtcblxuICAgICAgICBvdmVybGF5TWFuYWdlci5hZGRPdmVybGF5KHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCAmJiBuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdpbGxPcGVuID0gIXRoaXMucHJvcHMudmlzaWJsZSAmJiBuZXh0UHJvcHMudmlzaWJsZTtcbiAgICAgICAgY29uc3Qgd2lsbENsb3NlID0gdGhpcy5wcm9wcy52aXNpYmxlICYmICFuZXh0UHJvcHMudmlzaWJsZTtcbiAgICAgICAgaWYgKHdpbGxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgICAgICAgIG5leHRQcm9wcy5iZWZvcmVPcGVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAod2lsbENsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZUNsb3NlKCk7XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW5pbWF0aW9uIHx8IG5leHRQcm9wcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG5leHRQcm9wcy5hbmltYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5hbmltYXRpb24gIT09IGZhbHNlICYmIHN1cHBvcnQuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAod2lsbE9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbGxDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVhdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgY29uc3Qgb3BlbiA9ICFwcmV2UHJvcHMudmlzaWJsZSAmJiB0aGlzLnByb3BzLnZpc2libGU7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gcHJldlByb3BzLnZpc2libGUgJiYgIXRoaXMucHJvcHMudmlzaWJsZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW9uICYmIHN1cHBvcnQuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAob3BlbiB8fCBjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyTm9kZSA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJPcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TWFuYWdlci5hZGRPdmVybGF5KHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWZ0ZXJDbG9zZSgpO1xuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh3cmFwcGVyTm9kZSwgJ29wZW5lZCcpO1xuICAgICAgICAgICAgICAgIG92ZXJsYXlNYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzTm9kZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZWZvcmVDbG9zZSgpO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbihwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLmFuaW1hdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFuaW1hdGlvbkJ5QWxpZ24ocHJvcHMuYWxpZ24pO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbkJ5QWxpZ24oYWxpZ24pIHtcbiAgICAgICAgc3dpdGNoIChhbGlnblswXSkge1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW46ICdleHBhbmRJbkRvd24nLFxuICAgICAgICAgICAgICAgICAgICBvdXQ6ICdleHBhbmRPdXRVcCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW46ICdleHBhbmRJblVwJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0OiAnZXhwYW5kT3V0RG93bidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbjogJ2V4cGFuZEluRG93bicsXG4gICAgICAgICAgICAgICAgICAgIG91dDogJ2V4cGFuZE91dFVwJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRBbmltYXRpb25FdmVudHMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBndWlkKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBldmVudHMub24obm9kZSwgc3VwcG9ydC5hbmltYXRpb24uZW5kLCB0aGlzLmhhbmRsZUFuaW1hdGVFbmQuYmluZCh0aGlzLCBpZCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kZWxheScpKSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gYW5pbWF0aW9uRGVsYXkgKyBhbmltYXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRNYXBbaWRdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFuaW1hdGVFbmQoaWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVQb3NpdGlvbihjb25maWcpIHtcbiAgICAgICAgY29uc3QgYWxpZ24gPSBjb25maWcuYWxpZ24uam9pbignICcpO1xuXG4gICAgICAgIGlmICghKCdhbmltYXRpb24nIGluIHRoaXMucHJvcHMpICYmIHRoaXMucHJvcHMubmVlZEFkanVzdCAmJiB0aGlzLmxhc3RBbGlnbiAhPT0gYWxpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGhpcy5nZXRBbmltYXRpb25CeUFsaWduKGFsaWduKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RBbGlnbiA9IGFsaWduO1xuICAgIH1cblxuICAgIGhhbmRsZUFuaW1hdGVFbmQoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dE1hcFtpZF0pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRNYXBbaWRdKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy50aW1lb3V0TWFwW2lkXTtcblxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24ub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ2xlYXZpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub25MZWF2ZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ2VudGVyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uRW50ZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXR1czogJ2VudGVyaW5nJ1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBOT1RFOiBzZXRTdGF0ZSBjYWxsYmFjayAoc2Vjb25kIGFyZ3VtZW50KSBub3cgZmlyZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgY29tcG9uZW50RGlkTW91bnQgLyBjb21wb25lbnREaWRVcGRhdGUgaW5zdGVhZCBvZiBhZnRlciBhbGwgY29tcG9uZW50cyBoYXZlIHJlbmRlcmVkLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW50ZXJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGVhdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhdHVzOiAnbGVhdmluZydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkxlYXZpbmcoKTtcbiAgICB9XG5cbiAgICBvbkVudGVyaW5nKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyTm9kZSA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucHJvcHMub25PcGVuKCk7XG4gICAgfVxuXG4gICAgb25MZWF2aW5nKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyTm9kZSA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIG9uRW50ZXJlZCgpIHtcbiAgICAgICAgb3ZlcmxheU1hbmFnZXIuYWRkT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRGb2N1c05vZGUoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZnRlck9wZW4oKTtcbiAgICB9XG5cbiAgICBvbkxlYXZlZCgpIHtcbiAgICAgICAgb3ZlcmxheU1hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRGb2N1c05vZGUoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZnRlckNsb3NlKCk7XG4gICAgfVxuXG4gICAgYmVmb3JlT3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgICAgICAgaWYgKG1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgYm9keU92ZXJmbG93WSA9IGJvZHkuc3R5bGUub3ZlcmZsb3dZO1xuICAgICAgICAgICAgICAgIGlmIChoYXNTY3JvbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5UGFkZGluZ1JpZ2h0ID0gYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2RvbS5nZXRTdHlsZShib2R5LCAncGFkZGluZ1JpZ2h0JykgKyBkb20uc2Nyb2xsYmFyKCkud2lkdGh9cHhgO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvbS5zZXRTdHlsZShib2R5LCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RhbHMucHVzaCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZUNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG1vZGFscy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogYm9keU92ZXJmbG93WVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdSaWdodCA9IGJvZHlQYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkb20uc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgc3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdmVyZmxvd1kgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlQYWRkaW5nUmlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGb2N1c05vZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUgJiYgIXRoaXMuX2hhc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIHNhdmVMYXN0Rm9jdXNOb2RlKCk7XG4gICAgICAgICAgICAvLyDov5nkuKrml7blgJnlvojlj6/og73kuIrkuIDkuKrlvLnlsYLnmoTlhbPpl63kuovku7bov5jmnKrop6blj5HvvIzlr7zoh7TnhKbngrnlt7Lnu4/lm57liLDop6blj5HnmoTlhYPntKBcbiAgICAgICAgICAgIC8vIOi/memHjOW7tuaXtuWkhOeQhuS4gOS4i++8jOW7tuaXtueahOaXtumXtOS4uiBkb2N1bWVudC5jbGljayDmjZXojrfop6blj5HnmoTlu7bml7bml7bpl7RcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb2N1c05vZGVMaXN0ID0gZ2V0Rm9jdXNOb2RlTGlzdChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzTm9kZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c05vZGVMaXN0WzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlICYmIHRoaXMuX2hhc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIGJhY2tMYXN0Rm9jdXNOb2RlKCk7XG4gICAgICAgICAgICB0aGlzLl9oYXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb250ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50UmVmO1xuICAgIH1cblxuICAgIGdldENvbnRlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcy5jb250ZW50UmVmKTtcbiAgICB9XG5cbiAgICBnZXRXcmFwcGVyTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2F0ZXdheVJlZiA/IHRoaXMuZ2F0ZXdheVJlZi5nZXRDaGlsZE5vZGUoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbkNsb3NlQnlFc2MpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWRvd25FdmVudHMgPSBldmVudHMub24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleURvd24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbkNsb3NlQnlPdXRTaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrRXZlbnRzID0gZXZlbnRzLm9uKGRvY3VtZW50LCAnY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9rZXlkb3duRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duRXZlbnRzLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fa2V5ZG93bkV2ZW50cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NsaWNrRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0V2ZW50cy5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrRXZlbnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZURvY3VtZW50S2V5RG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUgJiYgZS5rZXlDb2RlID09PSBLRVlDT0RFLkVTQyAmJiBvdmVybGF5TWFuYWdlci5pc0N1cnJlbnRPdmVybGF5KHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdrZXlib2FyZCcsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc2FmZU5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBzYWZlTm9kZXMgID0gQXJyYXkuaXNBcnJheShzYWZlTm9kZSkgPyBbLi4uc2FmZU5vZGVdIDogW3NhZmVOb2RlXTtcbiAgICAgICAgICAgIHNhZmVOb2Rlcy51bnNoaWZ0KCgpID0+IHRoaXMuZ2V0V3JhcHBlck5vZGUoKSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FmZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKHNhZmVOb2Rlc1tpXSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgLy8gSEFDSzog5aaC5p6c6Kem5Y+R54K55Ye755qE6IqC54K55piv5by55bGC5YaF6YOo55qE6IqC54K577yM5bm25LiU5Zyo6KKr54K55Ye75ZCO56uL5Y2z6ZSA5q+B77yM6YKj5LmI5q2k5pe25peg5rOV5L2/55SoIG5vZGUuY29udGFpbnMoZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgLy8g5p2l5Yik5pat5q2k5pe254K55Ye755qE6IqC54K55piv5ZCm5piv5by55bGC5YaF6YOo55qE6IqC54K577yM6aKd5aSW5Yik5patXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgKG5vZGUgPT09IGUudGFyZ2V0IHx8IG5vZGUuY29udGFpbnMoZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgKGUudGFyZ2V0ICE9PSBkb2N1bWVudCAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ2RvY0NsaWNrJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNYXNrQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5DbG9zZUJ5TWFzaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgnbWFza0NsaWNrJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlQ29udGVudFJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50UmVmID0gcmVmO1xuICAgIH1cblxuICAgIHNhdmVHYXRld2F5UmVmID0gKHJlZikgPT4ge1xuICAgICAgICB0aGlzLmdhdGV3YXlSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgLy8g5YW85a656L+H5Y6755qE55So5rOVOiB0aGlzLnBvcHVwUmVmLmdldEluc3RhbmNlKCkub3ZlcmxheS5nZXRJbnN0YW5jZSgpLmdldENvbnRlbnROb2RlKClcbiAgICBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmVmaXgsIGNsYXNzTmFtZSwgc3R5bGUsIGNoaWxkcmVuOiBwcm9wQ2hpbGRyZW4sXG4gICAgICAgICAgICB0YXJnZXQsIGFsaWduLCBvZmZzZXQsIGNvbnRhaW5lciwgaGFzTWFzaywgbmVlZEFkanVzdCxcbiAgICAgICAgICAgIGJlZm9yZVBvc2l0aW9uLCBvblBvc2l0aW9uLCB3cmFwcGVyU3R5bGUsIHJ0bCxcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb24sXG4gICAgICAgICAgICBjYWNoZSwgd3JhcHBlckNsYXNzTmFtZSwgb25NYXNrTW91c2VFbnRlciwgb25NYXNrTW91c2VMZWF2ZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2aXNpYmxlOiBzdGF0ZVZpc2libGUsIHN0YXR1cywgYW5pbWF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHN0YXRlVmlzaWJsZSB8fCAoY2FjaGUgJiYgdGhpcy5faXNNb3VudGVkKSA/IHByb3BDaGlsZHJlbiA6IG51bGw7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ2xhenogPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fW92ZXJsYXktaW5uZXJgXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbYW5pbWF0aW9uLmluXTogc3RhdHVzID09PSAnZW50ZXJpbmcnLFxuICAgICAgICAgICAgICAgIFthbmltYXRpb24ub3V0XTogc3RhdHVzID09PSAnbGVhdmluZycsXG4gICAgICAgICAgICAgICAgW2NoaWxkLnByb3BzLmNsYXNzTmFtZV06ICEhY2hpbGQucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiAhIWNsYXNzTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IHJlZiBieSBzdHJpbmcgaW4gT3ZlcmxheSwgdXNlIGZ1bmN0aW9uIGluc3RlYWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjaGlsZENsYXp6LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7Li4uY2hpbGQucHJvcHMuc3R5bGUsIC4uLnN0eWxlfSxcbiAgICAgICAgICAgICAgICByZWY6IG1ha2VDaGFpbih0aGlzLnNhdmVDb250ZW50UmVmLCBjaGlsZC5yZWYpLFxuICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICFzdGF0ZVZpc2libGUgJiYgY2FjaGUgJiYgdGhpcy5faXNNb3VudGVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFsaWduKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlUG9zaXRpb24gPSBzdGF0dXMgPT09ICdsZWF2aW5nJyA/IGZhbHNlIDogcHJvcFNob3VsZFVwZGF0ZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gKFxuICAgICAgICAgICAgICAgICAgICA8UG9zaXRpb24gey4uLih7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiwgdGFyZ2V0LCBhbGlnbiwgb2Zmc2V0LCBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvc2l0aW9uOiBtYWtlQ2hhaW4odGhpcy5oYW5kbGVQb3NpdGlvbiwgb25Qb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbiwgcnRsXG4gICAgICAgICAgICAgICAgICAgIH0pfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJDbGF6eiA9IGNsYXNzbmFtZXMoW1xuICAgICAgICAgICAgICAgIGAke3ByZWZpeH1vdmVybGF5LXdyYXBwZXJgLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWVcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlclN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlVmlzaWJsZSA/ICcnIDogJ25vbmUnXG4gICAgICAgICAgICB9LCB3cmFwcGVyU3R5bGUpO1xuXG4gICAgICAgICAgICBjaGlsZHJlbiA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXp6fSBzdHlsZT17bmV3V3JhcHBlclN0eWxlfSBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAge2hhc01hc2sgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH1vdmVybGF5LWJhY2tkcm9wYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1hc2tDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29uTWFza01vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1hc2tNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj17cnRsID8gJ3J0bCcgOiB1bmRlZmluZWR9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPEdhdGV3YXkgey4uLih7Y29udGFpbmVyLCB0YXJnZXQsIGNoaWxkcmVufSl9IHJlZj17dGhpcy5zYXZlR2F0ZXdheVJlZn0gLz47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvb3ZlcmxheS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlLCBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZ1bmMgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBmaW5kTm9kZSBmcm9tICcuL3V0aWxzL2ZpbmQtbm9kZSc7XG5cbmNvbnN0IHsgbWFrZUNoYWluIH0gPSBmdW5jO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXRld2F5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgdGFyZ2V0OiBQcm9wVHlwZXMuYW55LFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb250YWluZXI6ICgpID0+IGRvY3VtZW50LmJvZHlcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IHRoaXMuZ2V0Q29udGFpbmVyTm9kZSh0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IHRoaXMuZ2V0Q29udGFpbmVyTm9kZShuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lck5vZGUocHJvcHMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGZpbmROb2RlKHByb3BzLnRhcmdldCk7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShwcm9wcy5jb250YWluZXIsIHRhcmdldE5vZGUpO1xuICAgIH1cblxuICAgIGdldENoaWxkTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMuY2hpbGQpO1xuICAgIH1cblxuICAgIHNhdmVDaGlsZFJlZiA9IHJlZiA9PiB7XG4gICAgICAgIHRoaXMuY2hpbGQgPSByZWY7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbiA/IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogbnVsbDtcbiAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXQgcmVmIGJ5IHN0cmluZyBpbiBHYXRld2F5LCB1c2UgZnVuY3Rpb24gaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgcmVmOiBtYWtlQ2hhaW4odGhpcy5zYXZlQ2hpbGRSZWYsIGNoaWxkLnJlZilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZCwgdGhpcy5jb250YWluZXJOb2RlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9nYXRld2F5LmpzeCIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZnVuYywgZG9tLCBldmVudHMgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uJztcbmltcG9ydCBmaW5kTm9kZSBmcm9tICcuL3V0aWxzL2ZpbmQtbm9kZSc7XG5cbmNvbnN0IHsgbm9vcCwgYmluZEN0eCB9ID0gZnVuYztcbmNvbnN0IHsgZ2V0U3R5bGUgfSA9IGRvbTtcbmNvbnN0IHBsYWNlID0gcG9zaXRpb24ucGxhY2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgVklFV1BPUlQgPSBwb3NpdGlvbi5WSUVXUE9SVDtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgdGFyZ2V0OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgICAgb2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Qb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG5lZWRBZGp1c3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBuZWVkTGlzdGVuUmVzaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFsaWduOiAndGwgYmwnLFxuICAgICAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICAgICAgYmVmb3JlUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG9uUG9zaXRpb246IG5vb3AsXG4gICAgICAgIG5lZWRBZGp1c3Q6IHRydWUsXG4gICAgICAgIG5lZWRMaXN0ZW5SZXNpemU6IHRydWUsXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGJpbmRDdHgodGhpcywgWydoYW5kbGVSZXNpemUnXSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5uZWVkTGlzdGVuUmVzaXplKSB7XG4gICAgICAgICAgICBldmVudHMub24od2luZG93LCAncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCdhbGlnbicgaW4gbmV4dFByb3BzICYmIG5leHRQcm9wcy5hbGlnbiAhPT0gdGhpcy5wcm9wcy5hbGlnbiB8fCBuZXh0UHJvcHMuc2hvdWxkVXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkVXBkYXRlUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5lZWRMaXN0ZW5SZXNpemUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5vZmYod2luZG93LCAncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgYWxpZ24sIG9mZnNldCwgYmVmb3JlUG9zaXRpb24sIG9uUG9zaXRpb24sIG5lZWRBZGp1c3QsIHJ0bCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBiZWZvcmVQb3NpdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gdGhpcy5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZXROb2RlKCk7XG4gICAgICAgIGlmIChjb250ZW50Tm9kZSAmJiB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRBbGlnbiA9IHBsYWNlKHtcbiAgICAgICAgICAgICAgICBwaW5FbGVtZW50OiBjb250ZW50Tm9kZSxcbiAgICAgICAgICAgICAgICBiYXNlRWxlbWVudDogdGFyZ2V0Tm9kZSxcbiAgICAgICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbmVlZEFkanVzdCxcbiAgICAgICAgICAgICAgICBpc1J0bDogcnRsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBnZXRTdHlsZShjb250ZW50Tm9kZSwgJ3RvcCcpO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGdldFN0eWxlKGNvbnRlbnROb2RlLCAnbGVmdCcpO1xuXG4gICAgICAgICAgICBvblBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICBhbGlnbjogcmVzdWx0QWxpZ24uc3BsaXQoJyAnKSxcbiAgICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgICAgbGVmdFxuICAgICAgICAgICAgfSwgY29udGVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRUYXJnZXROb2RlKCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBwb3NpdGlvbi5WSUVXUE9SVCA/IHBvc2l0aW9uLlZJRVdQT1JUIDogZmluZE5vZGUodGFyZ2V0LCB0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuXG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvcG9zaXRpb24uanN4IiwiaW1wb3J0ICcuLi9hbmltYXRlL3N0eWxlLmpzJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvc3R5bGUuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fb2JqZWN0LWFzc2lnbkA0LjEuMUBvYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpYyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgeyBvYmosIGxvZyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGdldENvbnRleHRQcm9wcyBmcm9tICcuL2dldC1jb250ZXh0LXByb3BzJztcblxuY29uc3QgeyBzaGFsbG93RXF1YWwgfSA9IG9iajtcblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cblxubGV0IGdsb2JhbExvY2FsZXM7XG5sZXQgY3VycmVudEdsb2JhbExhbmd1YWdlID0gJ3poLWNuJztcbmxldCBjdXJyZW50R2xvYmFsTG9jYWxlID0ge307XG5sZXQgY3VycmVudEdsb2JhbFJ0bCA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdExvY2FsZXMobG9jYWxlcykge1xuICAgIGdsb2JhbExvY2FsZXMgPSBsb2NhbGVzO1xuICAgIGN1cnJlbnRHbG9iYWxMb2NhbGUgPSBsb2NhbGVzW2N1cnJlbnRHbG9iYWxMYW5ndWFnZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xuICAgIGlmIChnbG9iYWxMb2NhbGVzKSB7XG4gICAgICAgIGN1cnJlbnRHbG9iYWxMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICBjdXJyZW50R2xvYmFsTG9jYWxlID0gZ2xvYmFsTG9jYWxlc1tsYW5ndWFnZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgIGN1cnJlbnRHbG9iYWxMb2NhbGUgPSB7XG4gICAgICAgIC4uLihnbG9iYWxMb2NhbGVzID8gZ2xvYmFsTG9jYWxlc1tjdXJyZW50R2xvYmFsTGFuZ3VhZ2VdIDoge30pLFxuICAgICAgICAuLi5sb2NhbGVcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGlyZWN0aW9uKGRpcikge1xuICAgIGN1cnJlbnRHbG9iYWxSdGwgPSBkaXIgPT09ICdydGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgIHJldHVybiBjdXJyZW50R2xvYmFsTG9jYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRHbG9iYWxMYW5ndWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gY3VycmVudEdsb2JhbFJ0bDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyhDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuICAgICAgICAgICAgbmV4dFByb3BzLFxuICAgICAgICAgICAgbmV4dFN0YXRlXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fFxuICAgICAgICAgICAgICAgICAgICAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbGFzcyBDb25maWdlZENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgICAgICAuLi4oQ29tcG9uZW50LnByb3BUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2xcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihDb21wb25lbnQuY29udGV4dFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIG5leHRQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBuZXh0TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgbmV4dFB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgbmV4dFJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICBuZXh0V2FybmluZzogUHJvcFR5cGVzLmJvb2xcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0aGlzLl9nZXRJbnN0YW5jZSA9IHRoaXMuX2dldEluc3RhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9kZXByZWNhdGVkID0gdGhpcy5fZGVwcmVjYXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2dldEluc3RhbmNlKHJlZikge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSByZWY7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBvcHRpb25zLmV4cG9ydE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5leHBvcnROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuX2luc3RhbmNlW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW25hbWVdID0gZmllbGQuYmluZCh0aGlzLl9pbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW25hbWVdID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9kZXByZWNhdGVkKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQubmV4dFdhcm5pbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbG9nLmRlcHJlY2F0ZWQoLi4uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIG5leHRQcmVmaXgsXG4gICAgICAgICAgICAgICAgbmV4dExvY2FsZSA9IHt9LFxuICAgICAgICAgICAgICAgIG5leHRQdXJlLFxuICAgICAgICAgICAgICAgIG5leHRSdGxcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbXBvbmVudE5hbWUgfHwgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHRQcm9wcyA9IGdldENvbnRleHRQcm9wcyhcbiAgICAgICAgICAgICAgICB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCBydGwgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG5leHRMb2NhbGU6IHsgLi4uY3VycmVudEdsb2JhbExvY2FsZSwgLi4ubmV4dExvY2FsZSB9LFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFJ0bDogdHlwZW9mIG5leHRSdGwgPT09ICdib29sZWFuJyA/IG5leHRSdGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdsb2JhbFJ0bCA9PT0gdHJ1ZSA/IHRydWUgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdDb250ZXh0UHJvcHMgPSBbJ3ByZWZpeCcsICdsb2NhbGUnLCAncHVyZScsICdydGwnXS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHJldCwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHRQcm9wc1tuYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtuYW1lXSA9IGNvbnRleHRQcm9wc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld090aGVycyA9IG9wdGlvbnMudHJhbnNmb3JtID9cbiAgICAgICAgICAgICAgICBvcHRpb25zLnRyYW5zZm9ybShvdGhlcnMsIHRoaXMuX2RlcHJlY2F0ZWQpIDpcbiAgICAgICAgICAgICAgICBvdGhlcnM7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3T3RoZXJzfVxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3Q29udGV4dFByb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuX2dldEluc3RhbmNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQ29uZmlnZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBgQ29uZmlnKCR7Z2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KX0pYDtcblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWMoQ29uZmlnZWRDb21wb25lbnQsIENvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gQ29uZmlnZWRDb21wb25lbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbmZpZy5qc3giLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgY2FsbGVlOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YgJiYgZ2V0UHJvdG90eXBlT2YoT2JqZWN0KTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5XSAmJiAhS05PV05fU1RBVElDU1trZXldICYmICghYmxhY2tsaXN0IHx8ICFibGFja2xpc3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgdHJ5IHsgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9faG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NAMi41LjVAaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIvKipcbiAqIOWPlua2iOS6i+S7tue7keWumlxuICogQHBhcmFtICB7Kn0gICBub2RlICAgICAgIERPTeiKgueCueaIluS7u+S9leWPr+S7pee7keWumuS6i+S7tueahOWvueixoVxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50TmFtZSAg5LqL5Lu25ZCNXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICDlm57osIPmlrnms5VcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW3VzZUNhcHR1cmU9ZmFsc2VdIOaYr+WQpuW8gOWQr+S6i+S7tuaNleiOt+S8mOWFiFxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZmIChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9XG59XG5cbi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0gIHsqfSAgIG5vZGUgICAgICAgRE9N6IqC54K55oiW5Lu75L2V5Y+v5Lul57uR5a6a5LqL5Lu255qE5a+56LGhXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnROYW1lICDkuovku7blkI1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgIOWbnuiwg+aWueazlVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICB1c2VDYXB0dXJlIOaYr+WQpuW8gOWQr+S6i+S7tuaNleiOt+S8mOWFiFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgIOi/lOWbnueahG9iamVjdOS4reWMheWQq+S4gOS4qm9mZuaWueazle+8jOeUqOS6juWPlua2iOS6i+S7tuebkeWQrFxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBoYW5kbGVyID0gZXZlbnRzLm9uKGRvY3VtZW50LmJvZHksICdjbGljaycsIGUgPT4ge1xuICogICAgIC8vIGhhbmRsZSBjbGljayAuLi5cbiAqIH0pO1xuICogLy8g5Y+W5raI5LqL5Lu257uR5a6aXG4gKiBoYW5kbGVyLm9mZigpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gb24gKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9mZjogKCkgPT4gb2ZmKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpXG4gICAgfTtcbn1cblxuLyoqXG4gKiDnu5Hlrprkuovku7bvvIzlj6rmiafooYzkuIDmrKHlkI7plIDmr4FcbiAqIEBwYXJhbSAgeyp9ICAgbm9kZSAgICAgICBET03oioLngrnmiJbku7vkvZXlj6/ku6Xnu5Hlrprkuovku7bnmoTlr7nosaFcbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudE5hbWUgIOS6i+S7tuWQjVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAg5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIHVzZUNhcHR1cmUg5piv5ZCm5byA5ZCv5LqL5Lu25o2V6I635LyY5YWIXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgICAg6L+U5Zue55qEb2JqZWN05Lit5YyF5ZCr5LiA5Liqb2Zm5pa55rOV77yM55So5LqO5Y+W5raI5LqL5Lu255uR5ZCsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlIChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgcmV0dXJuIG9uKG5vZGUsIGV2ZW50TmFtZSwgZnVuY3Rpb24gX19mbiAoLi4uYXJncykge1xuICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICAvLyDnlLHkuo5hZGRFdmVudExpc3RlbmVy5Lit55qE5Y+C5pWwb3B0aW9uc+WPquWcqENocm9tZSA1NeOAgUZpcmVmb3goR2Vja28p5Lul5LiK54mI5pys5pSv5oyB77yM5pWF6L+Y5piv55So5Lyg57uf55qE5pa55rOV5a6e546wb25jZVxuICAgICAgICBvZmYobm9kZSwgZXZlbnROYW1lLCBfX2ZuLCB1c2VDYXB0dXJlKTtcbiAgICB9LCB1c2VDYXB0dXJlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2V2ZW50cy5qcyIsImltcG9ydCB7aXNQcm9taXNlfSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog5LiA5Liq56m65pa55rOV77yM6L+U5Zue5YWl5Y+C5pys6Lqr5oiW56m65a+56LGhXG4gKi9cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICog5bCGTuS4quaWueazleWQiOW5tuS4uuS4gOS4qumTvuW8j+iwg+eUqOeahOaWueazlVxuICogQHJldHVybiB7RnVuY3Rpb259ICAgICDlkIjlubblkI7nmoTmlrnms5VcbiAqIOWPguiAgyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3V0aWwvXG4gKlxuICogQGV4YW1wbGVcbiAqIGZ1bmMubWFrZUNoYWluKHRoaXMuaGFuZGxlQ2hhbmdlLCB0aGlzLnByb3BzLm9uQ2hhbmdlKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDaGFpbiAoLi4uZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gZm5zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZuc1tpXSAmJiBmbnNbaV0uYXBwbHkpIHtcbiAgICAgICAgICAgICAgICBmbnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIOaJuemHj+aUueWPmOaWueazleeahOS4iuS4i+aWh1xuICog5q2k5pa55rOV5ZyocmVhY3Tnu4Tku7bkuK3lvojmnInnlKjvvIzlnKhjb25zdHJ1Y3RvcuS4reaJuemHj+Wwhue7hOS7tuS4iueahOaWueazleaJp+ihjOS4iuS4i+aWh+e7keWumuWIsOe7hOS7tuacrOi6q1xuICog5rOo5oSP77ya55SoYmluZOaUueWPmOWHveaVsOi/kOihjOeahOS4iuS4i+aWh+WPquS8mueUn+aViOS4gOasoVxuICogQHBhcmFtICB7T2JqZWN0fSBjdHgg5pa55rOV5oyC6L2955qE5a+56LGh5Lul5Y+K5omn6KGM55qE5LiK5LiL5paHXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBmbnMg5pa55rOV5ZCN5YiX6KGoXG4gKlxuICogQGV4YW1wbGVcbiAqIGZ1bmMuYmluZEN0eCh0aGlzLCBbJ2hhbmRsZUNsaWNrJywgJ2hhbmRsZUNoYW5nZSddKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRDdHggKGN0eCwgZm5zLCBucykge1xuICAgIGlmICh0eXBlb2YgZm5zID09PSAnc3RyaW5nJykge1xuICAgICAgICBmbnMgPSBbZm5zXTtcbiAgICB9XG5cbiAgICAvLyDmlrnms5XnmoTmjILovb3nqbrpl7TvvIzlpoLmnpzkuI3kvKDvvIzpu5jorqTkuI5jdHjnm7jlkIxcbiAgICBucyA9IG5zIHx8IGN0eDtcblxuICAgIGZucy5mb3JFYWNoKGZuTmFtZSA9PiB7XG4gICAgICAgIC8vIOi/memHjOS4jeimgea3u+WKoOepuuaWueazleWIpOaWre+8jOeUseiwg+eUqOiAheS/neivgeato+ehruaAp++8jOWQpuWImeWHuuS6humXrumimOaXoOazleaOkuafpVxuICAgICAgICBuc1tmbk5hbWVdID0gbnNbZm5OYW1lXS5iaW5kKGN0eCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICog55So5LqO5omn6KGM5Zue6LCD5pa55rOV5ZCO55qE6YC76L6RXG4gKiBAcGFyYW0gIHsqfSByZXQgICAgICAgICAgICDlm57osIPmlrnms5XmiafooYznu5PmnpxcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBzdWNjZXNzIOaJp+ihjOe7k+aenOi/lOWbnumdnmZhbHNl55qE5Zue6LCDXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gW2ZhaWx1cmU9bm9vcF0g5omn6KGM57uT5p6c6L+U5ZueZmFsc2XnmoTlm57osINcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb21pc2VDYWxsIChyZXQsIHN1Y2Nlc3MsIGZhaWx1cmUgPSBub29wKSB7XG4gICAgaWYgKGlzUHJvbWlzZShyZXQpKSB7XG4gICAgICAgIHJldHVybiByZXQudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBmYWlsdXJlKGUpO1xuICAgICAgICAgICAgLy8gdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldCAhPT0gZmFsc2UgPyBzdWNjZXNzKHJldCkgOiBmYWlsdXJlKHJldCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9mdW5jLmpzIiwiaW1wb3J0IHsgaXNQcm9kdWN0aW9uIH0gZnJvbSAnLi9lbnYnO1xuXG4vKiBlc2xpbnQgbm8tY29uc29sZTogMCAqL1xuXG4vKipcbiAqIOWPjeWvueS9v+eUqOafkOS4gOaWueazleaIluWxnuaAp+eahOitpuWRilxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wcyAgICAg6L+H5pe255qE5bGe5oCn5oiW5pa55rOV5ZCNXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGluc3RlYWQgICDmm7/ku6PnmoTlsZ7mgKfmiJbmlrnms5XlkI1cbiAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50IOe7hOS7tuWQjVxuICpcbiAqIEBleGFtcGxlXG4gKiBsb2cuZGVwcmVjYXRlZCgnb25CZWZvcmVDbG9zZScsICdiZWZvcmVDbG9zZScsICdEaWFsb2cnKTtcbiAqIC8vIFdhcm5pbmc6IG9uQmVmb3JlQ2xvc2UgaXMgZGVwcmVjYXRlZCBhdCBbIERpYWxvZyBdLCB1c2UgWyBiZWZvcmVDbG9zZSBdIGluc3RlYWQgb2YgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVkIChwcm9wcywgaW5zdGVhZCwgY29tcG9uZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIWlzUHJvZHVjdGlvbigpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFsgJHtwcm9wc30gXSBpcyBkZXByZWNhdGVkIGF0IFsgJHtjb21wb25lbnR9IF0sIGAgK1xuICAgICAgICAgICAgYHVzZSBbICR7aW5zdGVhZH0gXSBpbnN0ZWFkIG9mIGl0LmBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICog5o6n5Yi25Y+w6K2m5ZGK5pel5b+XXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyAobXNnKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6ICR7bXNnfWApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZy5qcyIsImltcG9ydCB7aGFzRE9NfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge2VhY2h9IGZyb20gJy4vb2JqZWN0JztcblxuY29uc3QgYW5pbWF0aW9uRW5kRXZlbnROYW1lcyA9IHtcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnXG59O1xuXG5jb25zdCB0cmFuc2l0aW9uRXZlbnROYW1lcyA9IHtcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG59O1xuXG4vKipcbiAqIOaYr+WQpuaUr+aMgeafkOS6m+WKqOaViOS6i+S7tu+8jOWmguaenOaUr+aMge+8jOi/lOWbnuebuOW6lOeahGVuZOS6i+S7tuWQjVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge09iamVjdDxTdHJpbmc+fSBuYW1lc1xuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxuICovXG5mdW5jdGlvbiBfc3VwcG9ydEVuZCAobmFtZXMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBlYWNoKG5hbWVzLCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGVsLnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0ID0ge2VuZDogdmFsfTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiDmmK/lkKbmlK/mjIHmn5DkuptDU1PlsZ7mgKdcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtPYmplY3Q8QXJyYXk8U3RyaW5nPj59IG5hbWVzXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICBpcyBzdXBwb3J0XG4gKi9cbmZ1bmN0aW9uIF9zdXBwb3J0Q1NTIChuYW1lcykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByZXQgPSBmYWxzZTtcblxuICAgIGVhY2gobmFtZXMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICBlYWNoKHZhbCwgaXRlbSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHJldCA9IHJldCB8fCBlbC5zdHlsZVtrZXldID09PSBpdGVtO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIEl0IHdpbGwgYmUgdGhyb3cgZXJyb3Igd2hlbiBzZXQgdW5rbm93biBwcm9wZXJ0eSB1bmRlciBJRThcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhcmV0OyAvLyDlpoLmnpzmnInkuIDkuKrmlK/mjIHlsLHov5Tlm55mYWxzZe+8jOWQjumdouS4jemcgOimgeWGjeWIpOaWrVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gIXJldDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICog5piv5ZCm5pSv5oyBYW5pbWF0aW9u5Lul5Y+K5Yqo55S757uT5p2f5LqL5Lu25ZCNXG4gKiBAdHlwZSB7T2JqZWN0fGZhbHNlfVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGVuZCDliqjnlLvnu5PmnZ/kuovku7blkI1cbiAqL1xuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbiA9IF9zdXBwb3J0RW5kKGFuaW1hdGlvbkVuZEV2ZW50TmFtZXMpO1xuXG4vKipcbiAqIOaYr+WQpuaUr+aMgXRyYW5zaXRpb27ku6Xlj4rov4fmu6TmlYjmnpznu5PmnZ/kuovku7blkI1cbiAqIEB0eXBlIHtPYmplY3R8ZmFsc2V9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gZW5kIOi/h+a4oeaViOaenOe7k+adn+S6i+S7tuWQjVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9IF9zdXBwb3J0RW5kKHRyYW5zaXRpb25FdmVudE5hbWVzKTtcblxuLyoqXG4gKiDmmK/lkKbmlK/mjIFmbGV45bGe5oCnXG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsZXggPSBfc3VwcG9ydENTUyh7XG4gICAgZGlzcGxheTogWydmbGV4JywgJy13ZWJraXQtZmxleCcsICctbW96LWZsZXgnLCAnLW1zLWZsZXhib3gnXVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9zdXBwb3J0LmpzIiwiaW1wb3J0IEtFWUNPREUgZnJvbSAnLi9rZXljb2RlJztcbmltcG9ydCB7ZWFjaH0gZnJvbSAnLi9vYmplY3QnO1xuXG4vKipcbiAqIOeUqOS6juWIh+aNoumhtemdouWFg+e0oOeahOeEpueCuVxuICovXG5cblxuLyoqXG4gKiDlhYPntKDmmK/lkKblj6/op4FcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gICB7RWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBfaXNWaXNpYmxlKG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuYm9keSB8fCBub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBub2RlLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICog5YWD57Sg5piv5ZCm5Y+v5Lul6I635Y+W54Sm54K5XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge0VsZW1lbnR9ICBub2RlXG4gKiBAcmV0dXJuICB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gX2lzRm9jdXNhYmxlKG5vZGUpIHtcbiAgICBjb25zdCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0YWJJbmRleCA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gICAgY29uc3QgaGFzVGFiSW5kZXggPSAhaXNOYU4odGFiSW5kZXgpICYmIHRhYkluZGV4ID4gLTE7XG5cbiAgICBpZiAoX2lzVmlzaWJsZShub2RlKSkge1xuICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIHJldHVybiAhbm9kZS5kaXNhYmxlZCAmJiBub2RlLnR5cGUgIT09ICdoaWRkZW4nO1xuICAgICAgICB9IGVsc2UgaWYgKFsnc2VsZWN0JywgJ3RleHRhcmVhJywgJ2J1dHRvbiddLmluZGV4T2Yobm9kZU5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAhbm9kZS5kaXNhYmxlZDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlTmFtZSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgaGFzVGFiSW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhc1RhYkluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiDliJflh7rog73ojrflj5bnhKbngrnnmoTlrZDoioLngrlcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGUg5a655Zmo6IqC54K5XG4gKiBAcmV0dXJuIHtBcnJheTxFbGVtZW50Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzTm9kZUxpc3Qobm9kZSkge1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgIGNvbnN0IG5vZGVMaXN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG5cbiAgICBlYWNoKG5vZGVMaXN0LCBpdGVtID0+IHtcbiAgICAgICAgaWYgKF9pc0ZvY3VzYWJsZShpdGVtKSkge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0by1mb2N1cycpID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgICAgICAgICAgcmVzW21ldGhvZF0oaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChfaXNGb2N1c2FibGUobm9kZSkpIHtcbiAgICAgICAgcmVzLnVuc2hpZnQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8g55So5LqO6K6w5b2V5LiK5LiA5qyh6I635b6X54Sm54K555qE5peg57SgXG5sZXQgbGFzdEZvY3VzRWxlbWVudCA9IG51bGw7XG5cbi8qKlxuICog5L+d5a2Y5pyA6L+R5LiA5qyh6I635b6X54Sm54K555qE5peg57SgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGFzdEZvY3VzTm9kZSgpIHtcbiAgICBsYXN0Rm9jdXNFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbn1cblxuLyoqXG4gKiDmuIXpmaTnhKbngrnorrDlvZVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTGFzdEZvY3VzTm9kZSgpIHtcbiAgICBsYXN0Rm9jdXNFbGVtZW50ID0gbnVsbDtcbn1cblxuLyoqXG4gKiDlsJ3or5XlsIbnhKbngrnliIfmjaLliLDkuIrkuIDkuKrlhYPntKBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhY2tMYXN0Rm9jdXNOb2RlKCkge1xuICAgIGlmIChsYXN0Rm9jdXNFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDlhYPntKDlj6/og73lt7Lnu4/ooqvnp7vliqjkuoZcbiAgICAgICAgICAgIGxhc3RGb2N1c0VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIC4uLlxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIOWcqOmZkOWItueahOiMg+WbtOWGheWIh+aNoueEpueCuVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSDlrrnlmajoioLngrlcbiAqIEBwYXJhbSAge0V2ZW50fSBlICAgICAg6ZSu55uY5LqL5Lu2XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdFRhYlJhbmdlKG5vZGUsIGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlRBQikge1xuICAgICAgICBjb25zdCB0YWJOb2RlTGlzdCA9IGdldEZvY3VzTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgIGNvbnN0IG1heEluZGV4ID0gdGFiTm9kZUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJOb2RlTGlzdC5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0SW5kZXggPSBpbmRleCArIChlLnNoaWZ0S2V5ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIHRhcmdldEluZGV4IDwgMCAmJiAodGFyZ2V0SW5kZXggPSBtYXhJbmRleCk7XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA+IG1heEluZGV4ICYmICh0YXJnZXRJbmRleCA9IDApO1xuICAgICAgICAgICAgdGFiTm9kZUxpc3RbdGFyZ2V0SW5kZXhdLmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9mb2N1cy5qcyIsImxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4vKipcbiAqIOeUn+aIkOWFqOWxgOWUr+S4gOeahGlkXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtwcmVmaXg9JyddIOWJjee8gOWtl+espuS4slxuICogQHJldHVybiB7U3RyaW5nfVxuICpcbiAqIEBleGFtcGxlXG4gKiBndWlkKCk7IC8vIGo3anY1MDljXG4gKiBndWlkKCdwcmVmaXgtJyk7IC8vIHByZWZpeC1qN2p2NTA5ZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgcHJlZml4ID0gcHJlZml4IHx8ICcnO1xuXG4gICAgcmV0dXJuIHByZWZpeCArICh0aW1lc3RhbXArKykudG9TdHJpbmcoMzYpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ3VpZC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZXMgYXMgb2JqZWN0IGFuZCBrZXlzXG4gKiBnZW5lcmF0ZWQgYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eVxuICogb2Ygb2JqZWN0IHRocnUgaXRlcmF0ZWUuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBtYXBLZXlzID0gKG9iaiwgZm4pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSBmbihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHNwZWNpZmljIGtleSB3aXRoIHByZWZpeCBgbmV4dGBcbiAqIGFuZCBsb3dlcmNhc2UgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHJlcGxhY2VLZXkgPSBrZXkgPT5cbiAgICBrZXkucmVwbGFjZSgvXihuZXh0KShbQS1aXSkvLCAobWF0Y2gsIHAxLCBwMikgPT4gcDIudG9Mb3dlckNhc2UoKSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCB0cmFuc2Zvcm1Db250ZXh0ID0gc291cmNlID0+IG1hcEtleXMoc291cmNlLCByZXBsYWNlS2V5KTtcblxuLyoqXG4gKiBDb25zdW1lclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmNvbnN0IENvbnN1bWVyID0gKHsgY2hpbGRyZW4gfSwgY29udGV4dCkgPT5cbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih0cmFuc2Zvcm1Db250ZXh0KGNvbnRleHQpKSA6IG51bGw7XG5cbi8qKlxuICogUHJvcFR5cGVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICovXG5Db25zdW1lci5wcm9wVHlwZXMgPSB7XG4gICAgLy8gUmVuZGVyIGNvbnRleHQgYXMgZnVuY3Rpb25cbiAgICAvLyBGdW5jdGlvbihjb250ZXh0OiBvYmplY3QpOiBSZWFjdEVsZW1lbnRcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogQ29udGV4dFR5cGVzIChsZWdhY3kgY29udGV4dClcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKi9cbkNvbnN1bWVyLmNvbnRleHRUeXBlcyA9IHtcbiAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbmV4dFB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5ld1J0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dFdhcm5pbmc6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25zdW1lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY29uc3VtZXIuanN4IiwiY2xhc3MgQ2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RvcmUgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaXplID09PSAwO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmhhcyhrZXkpID8gdGhpcy5fc3RvcmUuZ2V0KGtleSkgOiB0aGlzLnJvb3QoKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcmVzID09PSAndW5kZWZpbmVkJyB8fCByZXMgPT09IG51bGwpID9cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA6IHJlcztcbiAgICB9XG5cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JlLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5fc3RvcmUuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLl9zdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICByb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuZ2V0KHRoaXMuX3Jvb3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NhY2hlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29uL21haW4uc2NzcyIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsImltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEJhbGxvb24gZnJvbSAnLi9iYWxsb29uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5cbkJhbGxvb24uVG9vbHRpcCA9IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhUb29sdGlwLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBwcm9wcykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgndGV4dCcsICdjaGlsZHJlbicsICdUb29sdGlwJyk7XG4gICAgICAgICAgICBjb25zdCB7IHRleHQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgY2hpbGRyZW46IHRleHQsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuQmFsbG9vbi5Jbm5lciA9IElubmVyO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQmFsbG9vbiwge1xuICAgIHRyYW5zZm9ybTogKHByb3BzLCBkZXByZWNhdGVkKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5hbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ2FsaWdubWVudCcsICdhbGlnbkVkZ2UnLCAnQmFsbG9vbicpO1xuICAgICAgICAgICAgY29uc3QgeyBhbGlnbm1lbnQsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHsgYWxpZ25FZGdlOiBhbGlnbm1lbnQgPT09ICdlZGdlJywgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLm9uQ2xvc2VDbGljaykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnb25DbG9zZUNsaWNrJywgJ29uVmlzaWJsZUNoYW5nZScsICdCYWxsb29uJyk7XG4gICAgICAgICAgICBjb25zdCB7IG9uQ2xvc2VDbGljaywgb25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgICAgICAgICAgY29uc3QgbmV3T25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGUsIHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdjbG9zZUNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2UodmlzaWJsZSwgcmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvcHMgPSB7IG9uVmlzaWJsZUNoYW5nZTogbmV3T25WaXNpYmxlQ2hhbmdlLCAuLi5vdGhlcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQge2Z1bmMsIG9iaiwgbG9nfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBCYWxsb29uSW5uZXIgZnJvbSAnLi9pbm5lcic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbmNvbnN0IHtub29wfSA9IGZ1bmM7XG5jb25zdCB7UG9wdXB9ID0gT3ZlcmxheTtcblxubGV0IGFsaWduTWFwID0gbm9ybWFsTWFwO1xuXG4vKiogQmFsbG9vbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9vbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfVxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnnsbvlkI1cbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieWGheaVm+agt+W8j1xuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5qC35byP57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAncHJpbWFyeSddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYvuekuueahOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmL7npLrnmoTnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWcqOaYvuekuuWSjOmakOiXj+inpuWPkeeahOS6i+S7tlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm6ZqQ6JeP5ZKM5pi+56S6XG4gICAgICAgICAqL1xuICAgICAgICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5a+56b2Q5pa55byPXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pi+56S65YWz6Zet5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICAgICAgICogQGVudW1kZXNjIOS4iiwg5Y+zLCDkuIssIOW3piwg5LiK5bemLCDkuIrlj7MsIOS4i+W3piwg5LiL5Y+zLCDlt6bkuIosIOW3puS4iywg5Y+z5LiKLCDlj7PkuIsg5Y+K5YW2IOS4pOS4pOe7hOWQiFxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3QnLCAncicsICdiJywgJ2wnLCAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbHQnLCAnbGInLCAncnQnLCAncmInXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnm7jlr7nkuo50cmlnZ2Vy55qE5a6a5L2N55qE5b6u6LCDXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeihjOS4ulxuICAgICAgICAgKiDpvKDmoIfmgqzmta4sIOiOt+WPluWIsOeEpueCuSwg6byg5qCH54K55Ye7KCdob3ZlcifvvIwnZm9jdXMn77yMJ2NsaWNrJynmiJbogIXlroPku6znu4TmiJDnmoTmlbDnu4TvvIzlpoIgWydob3ZlcicsICdmb2N1cyddXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyVHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku7vkvZV2aXNpYmxl5Li6ZmFsc2Xml7bkvJrop6blj5HnmoTkuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpui/m+ihjOiHquWKqOS9jee9ruiwg+aVtFxuICAgICAgICAgKi9cbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlnKjop6blj5Hku6XlkI7nmoTlu7bml7bmmL7npLosIOWNleS9jeavq+enkiBtc1xuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmta7lsYLlhbPpl63lkI7op6blj5HnmoTkuovku7YsIOWmguaenOacieWKqOeUu++8jOWImeWcqOWKqOeUu+e7k+adn+WQjuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgYWZ0ZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLrliLbmm7TmlrDlrprkvY3kv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWHuueOsOWQjuaYr+WQpuiHquWKqGZvY3Vz5Yiw5YaF6YOo56ys5LiA5Liq5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5a6J5YWo6IqC54K5OuWvueS6jnRyaWdnZXRUeXBl5Li6Y2xpY2vnmoTmta7lsYIs5Lya5Zyo54K55Ye76Zmk5LqG5rWu5bGC5aSW55qE5YW25a6D5Yy65Z+f5pe25YWz6Zet5rWu5bGCLnNhZmVOb2Rl55So5LqO5re75Yqg5LiN6Kem5Y+R5YWz6Zet55qE6IqC54K5LCDlgLzlj6/ku6XmmK9kb23oioLngrnnmoRpZOaIluiAheaYr+iKgueCueeahGRvbeWvueixoVxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlKjmnaXmjIflrppzYWZlTm9kZeiKgueCueeahGlk77yM5ZKMc2FmZU5vZGXphY3lkIjkvb/nlKhcbiAgICAgICAgICovXG4gICAgICAgIHNhZmVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjee9ruWKqOeUu+eahOaSreaUvuaWueW8j1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW4g6L+b5Zy65Yqo55S7XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvdXQg5Ye65Zy65Yqo55S7XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgueahGRvbeiKgueCueWFs+mXreaXtuaYr+WQpuWIoOmZpFxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5rWu5bGC5riy5p+T55qE54i26IqC54K5LCDlj6/ku6XkuLroioLngrlpZOeahOWtl+espuS4su+8jOS5n+WPr+S7pei/lOWbnuiKgueCueeahOWHveaVsOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgmlkLCDkvKDlhaXlgLzmiY3kvJrmlK/mjIHml6Dpmpznoo1cbiAgICAgICAgICovXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnbm9ybWFsJyxcbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICB0cmlnZ2VyOiA8c3Bhbj48L3NwYW4+LFxuICAgICAgICBvbkNsb3NlOiBub29wLFxuICAgICAgICBhZnRlckNsb3NlOiBub29wLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIG5lZWRBZGp1c3Q6IGZhbHNlLFxuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgc2FmZU5vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc2FmZUlkOiBudWxsLFxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgIGluOiAnem9vbUluJyxcbiAgICAgICAgICAgIG91dDogJ3pvb21PdXQnXG4gICAgICAgIH0sXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgcG9wdXBTdHlsZToge30sXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgcG9wdXBQcm9wczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWxpZ246IHByb3BzLmFsaWduLFxuICAgICAgICAgICAgdmlzaWJsZTogJ3Zpc2libGUnIGluIHByb3BzID8gcHJvcHMudmlzaWJsZSA6IHByb3BzLmRlZmF1bHRWaXNpYmxlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29uQ2xvc2UgPSB0aGlzLl9vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uUG9zaXRpb24gPSB0aGlzLl9vblBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uVmlzaWJsZUNoYW5nZSA9IHRoaXMuX29uVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ2FsaWduJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiBuZXh0UHJvcHMuYWxpZ25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKSB7XG4gICAgICAgIC8vIE5vdCBDb250cm9sbGVkXG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0cmlnZ2VyKTtcblxuICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoZSkge1xuICAgICAgICB0aGlzLl9vblZpc2libGVDaGFuZ2UoZmFsc2UsICdjbG9zZUNsaWNrJyk7XG5cbiAgICAgICAgLy/lv4XpobvliqDkuIpwcmV2ZW50RGVmYXVsdCzlkKbliJnljZXmtYtJReS4i+aKpemUmSzlh7rnjrBmdWxsIHBhZ2UgcmVsb2FkIOW8guW4uFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgX29uUG9zaXRpb24ocmVzKSB7XG4gICAgICAgIGNvbnN0IHsgcnRsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhbGlnbk1hcCA9IHRoaXMucHJvcHMuYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgbmV3QWxpZ24gPSByZXMuYWxpZ24uam9pbignICcpO1xuICAgICAgICBsZXQgcmVzQWxpZ247XG5cbiAgICAgICAgbGV0IGFsaWduS2V5ID0gJ2FsaWduJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgYWxpZ25LZXkgPSAncnRsQWxpZ24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYWxpZ25NYXApIHtcbiAgICAgICAgICAgIGlmIChhbGlnbk1hcFtrZXldW2FsaWduS2V5XSA9PT0gbmV3QWxpZ24pIHtcbiAgICAgICAgICAgICAgICByZXNBbGlnbiA9IGtleTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzQWxpZ24gPSByZXNBbGlnbiB8fCB0aGlzLnN0YXRlLmFsaWduO1xuICAgICAgICBpZiAocmVzQWxpZ24gIT09IHRoaXMuc3RhdGUuYWxpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFsaWduOiByZXNBbGlnblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgcHJlZml4LCBjbGFzc05hbWUsIGFsaWduRWRnZSxcbiAgICAgICAgICAgIHRyaWdnZXIsIHRyaWdnZXJUeXBlLCBjaGlsZHJlbiwgY2xvc2FibGUsXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbiwgZGVsYXksIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICBzYWZlSWQsIGF1dG9Gb2N1cywgc2FmZU5vZGUsIG9uQ2xpY2ssIG9uSG92ZXIsXG4gICAgICAgICAgICBhbmltYXRpb24sIG9mZnNldCwgc3R5bGUsIGNvbnRhaW5lciwgcG9wdXBDb250YWluZXIsIGNhY2hlLCBwb3B1cFN0eWxlLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBQcm9wcywgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgbG9nLmRlcHJlY2F0ZWQoJ2NvbnRhaW5lcicsICdwb3B1cENvbnRhaW5lcicsICdCYWxsb29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFsaWduIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGFsaWduTWFwID0gYWxpZ25FZGdlID8gZWRnZU1hcCA6IG5vcm1hbE1hcDtcbiAgICAgICAgY29uc3QgX3ByZWZpeCA9IHRoaXMuY29udGV4dC5wcmVmaXggfHwgcHJlZml4O1xuXG4gICAgICAgIGxldCB0ck9yaWdpbiA9ICd0ck9yaWdpbic7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIHRyT3JpZ2luID0gJ3J0bFRyT3JpZ2luJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IF9vZmZzZXQgPSBbYWxpZ25NYXBbYWxpZ25dLm9mZnNldFswXSArIG9mZnNldFswXSwgYWxpZ25NYXBbYWxpZ25dLm9mZnNldFsxXSArIG9mZnNldFsxXV07XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGFsaWduTWFwW2FsaWduXVt0ck9yaWdpbl07XG4gICAgICAgIGNvbnN0IF9zdHlsZSA9IHsuLi57dHJhbnNmb3JtT3JpZ2lufSwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm9iai5waWNrT3RoZXJzKE9iamVjdC5rZXlzKEJhbGxvb24ucHJvcFR5cGVzKSwgb3RoZXJzKX1cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e19wcmVmaXh9XG4gICAgICAgICAgICBjbG9zYWJsZT17Y2xvc2FibGV9XG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9vbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHJ0bD17cnRsfVxuICAgICAgICAgICAgYWxpZ25FZGdlPXthbGlnbkVkZ2V9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e3RoaXMuX2NvbnRlbnRJZCA/IG5ld1RyaWdnZXIgOiB0cmlnZ2VyfVxuICAgICAgICAgICAgICAgIGNhY2hlPXtjYWNoZX1cbiAgICAgICAgICAgICAgICBzYWZlSWQ9e3NhZmVJZH1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgYWxpZ249e2FsaWduTWFwW2FsaWduXS5hbGlnbn1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9e19vZmZzZXR9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uUG9zaXRpb249e3RoaXMuX29uUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICBvbkhvdmVyPXtvbkhvdmVyfVxuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U9e3RoaXMucHJvcHMuYWZ0ZXJDbG9zZX1cbiAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuX29uVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbj17c2hvdWxkVXBkYXRlUG9zaXRpb259XG4gICAgICAgICAgICAgICAgbmVlZEFkanVzdD17bmVlZEFkanVzdH1cbiAgICAgICAgICAgICAgICBhbmltYXRpb249e2FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICBkZWxheT17ZGVsYXl9XG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2RlfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXIgfHwgY29udGFpbmVyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2JhbGxvb24uanN4IiwiY29uc3Qgb3ZlcmxheU1hbmFnZXIgPSB7XG4gICAgYWxsT3ZlcmxheXM6IFtdLFxuXG4gICAgYWRkT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlT3ZlcmxheShvdmVybGF5KTtcbiAgICAgICAgdGhpcy5hbGxPdmVybGF5cy51bnNoaWZ0KG92ZXJsYXkpO1xuICAgIH0sXG5cbiAgICBpc0N1cnJlbnRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXkgJiYgdGhpcy5hbGxPdmVybGF5c1swXSA9PT0gb3ZlcmxheTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmFsbE92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsT3ZlcmxheXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3ZlcmxheU1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9tYW5hZ2VyLmpzIiwiaW1wb3J0IHtkb219IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5jb25zdCBWSUVXUE9SVCA9ICd2aWV3cG9ydCc7XG5cbi8vIElFOCBub3Qgc3VwcG9ydCBwYWdlWE9mZnNldFxuY29uc3QgZ2V0UGFnZVggPSAoKSA9PiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5jb25zdCBnZXRQYWdlWSA9ICgpID0+IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4vKipcbiAqIEBwcml2YXRlIGdldCBlbGVtZW50IHJlY3RcbiAqIEBwYXJhbSAgICAgICB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybiAgICAgIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRFbGVtZW50UmVjdCAoZWxlbSkge1xuICAgIGxldCBvZmZzZXRUb3AgPSAwLFxuICAgICAgICBvZmZzZXRMZWZ0ID0gMDtcblxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcblxuICAgIGRvIHtcbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldFRvcCkpIHtcbiAgICAgICAgICAgIG9mZnNldFRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKGVsZW0ub2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudCkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCksXG4gICAgICAgIGxlZnQ6IG9mZnNldExlZnQgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KSxcbiAgICAgICAgaGVpZ2h0OiBvZmZzZXRIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBvZmZzZXRXaWR0aFxuICAgIH07XG59XG5cbi8qKlxuICogQHByaXZhdGUgZ2V0IHZpZXdwb3J0IHNpemVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldFZpZXdwb3J0U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gICAgc3RhdGljIFZJRVdQT1JUID0gVklFV1BPUlQ7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHN0YXRpYyBwbGFjZSBtZXRob2RcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIHByb3BzXG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5waW5FbGVtZW50XG4gICAgICogICAgIEBwYXJhbSAge0RPTX0gICAgICBwcm9wcy5iYXNlRWxlbWVudFxuICAgICAqICAgICBAcGFyYW0gIHtTdHJpbmd9ICAgcHJvcHMuYWxpZ25cbiAgICAgKiAgICAgQHBhcmFtICB7TnVtYmVyfSAgIHByb3BzLm9mZnNldFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMubmVlZEFkanVzdFxuICAgICAqICAgICBAcGFyYW0gIHtCb29sZWFufSAgcHJvcHMuaXNSdGxcbiAgICAgKiBAcmV0dXJuIHtQb3NpdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGxhY2UgPSBwcm9wcyA9PiBuZXcgUG9zaXRpb24ocHJvcHMpLnNldFBvc2l0aW9uKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucGluRWxlbWVudCA9IHByb3BzLnBpbkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYmFzZUVsZW1lbnQgPSBwcm9wcy5iYXNlRWxlbWVudDtcbiAgICAgICAgdGhpcy5hbGlnbiA9IHByb3BzLmFsaWduIHx8ICd0bCB0bCc7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcHJvcHMub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgICAgdGhpcy5uZWVkQWRqdXN0ID0gcHJvcHMubmVlZEFkanVzdCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J0bCA9IHByb3BzLmlzUnRsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwaW5FbGVtZW50ID0gdGhpcy5waW5FbGVtZW50O1xuICAgICAgICBjb25zdCBiYXNlRWxlbWVudCA9IHRoaXMuYmFzZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSB0aGlzLl9nZXRFeHBlY3RlZEFsaWduKCk7XG4gICAgICAgIGxldCBpc1BpbkZpeGVkLCBpc0Jhc2VGaXhlZCwgZmlyc3RQb3NpdGlvblJlc3VsdDtcbiAgICAgICAgaWYgKHBpbkVsZW1lbnQgPT09IFZJRVdQT1JUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5nZXRTdHlsZShwaW5FbGVtZW50LCAncG9zaXRpb24nKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgZG9tLnNldFN0eWxlKHBpbkVsZW1lbnQsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQaW5GaXhlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhc2VFbGVtZW50ID09PSBWSUVXUE9SVCB8fCBkb20uZ2V0U3R5bGUoYmFzZUVsZW1lbnQsICdwb3NpdGlvbicpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBpc0Jhc2VGaXhlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNCYXNlRml4ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruacn+acm+eahOWumuS9jVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cGVjdGVkQWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduID0gZXhwZWN0ZWRBbGlnbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHBpbkVsZW1lbnRQb2ludHMgPSB0aGlzLl9ub3JtYWxpemVQb3NpdGlvbihwaW5FbGVtZW50LCBhbGlnbi5zcGxpdCgnICcpWzBdLCBpc1BpbkZpeGVkKTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50UG9pbnRzID0gdGhpcy5fbm9ybWFsaXplUG9zaXRpb24oYmFzZUVsZW1lbnQsIGFsaWduLnNwbGl0KCcgJylbMV0sIGlzUGluRml4ZWQpO1xuICAgICAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFbGVtZW50T2Zmc2V0ID0gKGlzUGluRml4ZWQgJiYgaXNCYXNlRml4ZWQpID8gdGhpcy5fZ2V0TGVmdFRvcChiYXNlRWxlbWVudCkgOiBiYXNlRWxlbWVudFBvaW50cy5vZmZzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGJhc2VFbGVtZW50T2Zmc2V0LnRvcCArIGJhc2VFbGVtZW50UG9pbnRzLnkgLSBwaW5FbGVtZW50UGFyZW50T2Zmc2V0LnRvcCAtIHBpbkVsZW1lbnRQb2ludHMueTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBiYXNlRWxlbWVudE9mZnNldC5sZWZ0ICsgYmFzZUVsZW1lbnRQb2ludHMueCAtIHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQubGVmdCAgLSBwaW5FbGVtZW50UG9pbnRzLng7XG4gICAgICAgICAgICB0aGlzLl9zZXRQaW5FbGVtZW50UG9zdGlvbihwaW5FbGVtZW50LCB7bGVmdCwgdG9wfSwgdGhpcy5vZmZzZXQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpcnN0UG9zaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBvc2l0aW9uUmVzdWx0ID0ge2xlZnQsIHRvcH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5faXNJblZpZXdwb3J0KHBpbkVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsaWduO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5WaWV3cG9ydExlZnQgPSB0aGlzLl9tYWtlRWxlbWVudEluVmlld3BvcnQocGluRWxlbWVudCwgZmlyc3RQb3NpdGlvblJlc3VsdC5sZWZ0LCAnTGVmdCcsIGlzUGluRml4ZWQpO1xuICAgICAgICBjb25zdCBpblZpZXdwb3J0VG9wID0gdGhpcy5fbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIGZpcnN0UG9zaXRpb25SZXN1bHQudG9wLCAnVG9wJywgaXNQaW5GaXhlZCk7XG5cbiAgICAgICAgdGhpcy5fc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwge2xlZnQ6IGluVmlld3BvcnRMZWZ0LCB0b3A6IGluVmlld3BvcnRUb3B9KTtcbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWxpZ25bMF07XG4gICAgfVxuXG4gICAgX2dldFBhcmVudE9mZnNldChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSAmJiBkb20uZ2V0U3R5bGUocGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9mZnNldC50b3AgKz0gcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUocGFyZW50LCAnYm9yZGVyLXRvcC13aWR0aCcpLCAxMCk7XG4gICAgICAgIG9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKHBhcmVudCwgJ2JvcmRlci1sZWZ0LXdpZHRoJyksIDEwKTtcbiAgICAgICAgb2Zmc2V0Lm9mZnNldFBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG5cbiAgICBfbWFrZUVsZW1lbnRJblZpZXdwb3J0KHBpbkVsZW1lbnQsIG51bWJlciwgdHlwZSwgaXNQaW5GaXhlZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVtYmVyO1xuICAgICAgICBjb25zdCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBvZmZzZXRQYXJlbnQgPSBwaW5FbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGlmIChpc1BpbkZpeGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudC5ib2R5ICYmIGRvbS5nZXRTdHlsZShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgd2hlbiBkaXYncyBvZmZzZXRQYXJlbnQgaXMgZG9jdW1lbnQuYm9keSwgd2Ugc2V0IG5ldyBwb3NpdGlvbiByZXN1bHQuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5tYXgoZG9jRWxlbWVudFtgc2Nyb2xsJHt0eXBlfWBdLCBkb2N1bWVudC5ib2R5W2BzY3JvbGwke3R5cGV9YF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplUG9zaXRpb24oZWxlbWVudCwgYWxpZ24sIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5fbm9ybWFsaXplRWxlbWVudChlbGVtZW50LCBpc1BpbkZpeGVkKTtcbiAgICAgICAgdGhpcy5fbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbik7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICBfbm9ybWFsaXplWFkocG9pbnRzLCBhbGlnbikge1xuICAgICAgICBjb25zdCB4ID0gYWxpZ24uc3BsaXQoJycpWzFdO1xuICAgICAgICBjb25zdCB5ID0gYWxpZ24uc3BsaXQoJycpWzBdO1xuXG4gICAgICAgIHBvaW50cy54ID0gdGhpcy5feHlDb252ZXJ0ZXIoeCwgcG9pbnRzLCAnd2lkdGgnKTtcbiAgICAgICAgcG9pbnRzLnkgPSB0aGlzLl94eUNvbnZlcnRlcih5LCBwb2ludHMsICdoZWlnaHQnKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuICAgIF94eUNvbnZlcnRlcihhbGlnbiwgcG9pbnRzLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGFsaWduLnJlcGxhY2UoL3R8bC9naSwgJzAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9jL2dpLCAnNTAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9ifHIvZ2ksICcxMDAlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxkKyklL2dpLCBmdW5jdGlvbihtLCBkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50cy5zaXplKClbdHlwZV0gKiAoZCAvIDEwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyZXMsIDEwKSB8fCAwO1xuICAgIH1cblxuICAgIF9nZXRMZWZ0VG9wKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICdsZWZ0JykpIHx8IDAsXG4gICAgICAgICAgICB0b3A6IHBhcnNlRmxvYXQoZG9tLmdldFN0eWxlKGVsZW1lbnQsICd0b3AnKSkgfHwgMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9ub3JtYWxpemVFbGVtZW50KGVsZW1lbnQsIGlzUGluRml4ZWQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LCBpc1ZpZXdwb3J0ID0gKGVsZW1lbnQgPT09IFZJRVdQT1JUKSwgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICByZXN1bHQub2Zmc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUGluRml4ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZ2V0UGFnZVgoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBnZXRQYWdlWSgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LnNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkb2NFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGRvY0VsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2dldEVsZW1lbnRPZmZzZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGRvY0NsaWVudExlZnQgPSAoZG9jRWxlbWVudC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgICAgY29uc3QgZG9jQ2xpZW50VG9wID0gKGRvY0VsZW1lbnQuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyAoZ2V0UGFnZVgoKSAtIGRvY0NsaWVudExlZnQpLFxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIChnZXRQYWdlWSgpIC0gZG9jQ2xpZW50VG9wKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFjY29yZGluZyB0byB0aGUgbG9jYXRpb24gb2YgdGhlIG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB0aGUgZGVzaXJlZCBwb3NpdGlvbmluZ1xuICAgIF9nZXRFeHBlY3RlZEFsaWduKCkge1xuICAgICAgICBjb25zdCBhbGlnbiA9IHRoaXMuaXNSdGwgPyB0aGlzLl9yZXBsYWNlQWxpZ25EaXIodGhpcy5hbGlnbiwgL2x8ci9nLCB7bDogJ3InLCByOiAnbCd9KSA6IHRoaXMuYWxpZ247XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQWxpZ24gPSBbYWxpZ25dO1xuXG4gICAgICAgIGlmICh0aGlzLm5lZWRBZGp1c3QpIHtcbiAgICAgICAgICAgIGlmICgvdHxiL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvdHxiL2csIHt0OiAnYicsIGI6ICd0J30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvbHxyL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyL2csIHtsOiAncicsIHI6ICdsJ30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvYy9nLnRlc3QoYWxpZ24pKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAnbCd9KSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRBbGlnbi5wdXNoKHRoaXMuX3JlcGxhY2VBbGlnbkRpcihhbGlnbiwgL2MoPz0gfCQpL2csIHtjOiAncid9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvbHxyfHR8Yi9nLCB7bDogJ3InLCByOiAnbCcsIHQ6ICdiJywgYjogJ3QnfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBlY3RlZEFsaWduO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBhbGlnbiBvcmRlci5cbiAgICBfcmVwbGFjZUFsaWduRGlyKGFsaWduLCByZWdFeHAsIG1hcCkge1xuICAgICAgICByZXR1cm4gYWxpZ24ucmVwbGFjZShyZWdFeHAsIHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWFwW3Jlc107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldGVjdGluZyBlbGVtZW50IGlzIGluIHRoZSB3aW5kb3fvvIwgd2Ugd2FudCB0byBhZGp1c3QgcG9zaXRpb24gbGF0ZXIuXG4gICAgX2lzSW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0U2l6ZSA9IF9nZXRWaWV3cG9ydFNpemUoKTtcbiAgICAgICAgLy8gQXZvaWQgYW5pbWF0ZSBwcm9ibGVtIHRoYXQgdXNlIG9mZnNldFdpZHRoIGluc3RlYWQgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LlxuICAgICAgICBjb25zdCBlbGVtZW50UmVjdCA9IF9nZXRFbGVtZW50UmVjdChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50UmVjdC5sZWZ0ID49IDAgJiYgZWxlbWVudFJlY3QubGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gdmlld3BvcnRTaXplLndpZHRoICYmXG4gICAgICAgICAgICBlbGVtZW50UmVjdC50b3AgPj0gMCAmJiBlbGVtZW50UmVjdC50b3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSB2aWV3cG9ydFNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8g5Zyo6L+Z6YeM5YGaUlRM5Yik5patIHRvcC1sZWZ0IOWumuS9jei9rOWMluS4uuetieaViOeahCB0b3AtcmlnaHTlrprkvY1cbiAgICBfc2V0UGluRWxlbWVudFBvc3Rpb24ocGluRWxlbWVudCwgcG9zdGlvbiwgb2Zmc2V0ID0gWzAsIDBdKSB7XG4gICAgICAgIGNvbnN0IHt0b3AsIGxlZnR9ID0gcG9zdGlvbjtcbiAgICAgICAgaWYgKCF0aGlzLmlzUnRsKSB7XG4gICAgICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke2xlZnQgKyBvZmZzZXRbMF19cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJhbnNmZXIge2xlZnQsdG9wfSBlcXVhbHkgdG8ge3JpZ2h0LHRvcH1cbiAgICAgICAgY29uc3QgcGluRWxlbWVudFBhcmVudE9mZnNldCA9IHRoaXMuX2dldFBhcmVudE9mZnNldChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRoOiBvZmZzZXRQYXJlbnRXaWR0aH0gPSAgX2dldEVsZW1lbnRSZWN0KHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQub2Zmc2V0UGFyZW50KTtcbiAgICAgICAgY29uc3Qge3dpZHRofSA9IF9nZXRFbGVtZW50UmVjdChwaW5FbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBvZmZzZXRQYXJlbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpO1xuICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwge1xuICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3JpZ2h0ICsgb2Zmc2V0WzBdfXB4YCxcbiAgICAgICAgICAgIHRvcDogYCR7dG9wICsgb2Zmc2V0WzFdfXB4YCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvdXRpbHMvcG9zaXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jLCBLRVlDT0RFIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuXG5jb25zdCB7IG5vb3AsIG1ha2VDaGFpbiwgYmluZEN0eCB9ID0gZnVuYztcblxuLyoqXG4gKiBPdmVybGF5LlBvcHVwXG4gKiBAZGVzY3JpcHRpb24g57un5om/IE92ZXJsYXkg55qEIEFQSe+8jOmZpOmdnueJueWIq+ivtOaYjlxuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YaF5a65XG4gICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5pON5L2c57G75Z6L77yM5Y+v5Lul5pivICdjbGljayfvvIwnaG92ZXIn77yMJ2ZvY3VzJ++8jOaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguW9k+WJjeaYr+WQpuaYvuekulxuICAgICAgICAgKi9cbiAgICAgICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLpu5jorqTmmK/lkKbmmL7npLpcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+aXtuinpuWPkeeahOWbnuiwg+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZpc2libGUg5by55bGC5piv5ZCm5pi+56S6XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOinpuWPkeW8ueWxguaYvuekuuaIlumakOiXj+eahOadpea6kFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBET03kuovku7ZcbiAgICAgICAgICovXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7mraTlsZ7mgKfvvIzlvLnlsYLml6Dms5XmmL7npLrmiJbpmpDol49cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaYvuekuuaIlumakOiXj+eahOW7tuaXtuaXtumXtO+8iOS7peavq+enkuS4uuWNleS9je+8ie+8jOWcqCB0cmlnZ2VyVHlwZSDooqvorr7nva7kuLogaG92ZXIg5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeWFg+e0oOaYr+WQpuWPr+S7peWFs+mXreW8ueWxglxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N55qE5Y+C54Wn5YWD57SgXG4gICAgICAgICAqIEBkZWZhdWx0IHRhcmdldCDlsZ7mgKfvvIzljbPop6blj5HlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbot5/pmo90cmlnZ2Vy5rua5YqoXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBoYXNNYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgd3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0cmlnZ2VyVHlwZTogJ2hvdmVyJyxcbiAgICAgICAgZGVmYXVsdFZpc2libGU6IGZhbHNlLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZGVsYXk6IDIwMCxcbiAgICAgICAgY2FuQ2xvc2VCeVRyaWdnZXI6IHRydWUsXG4gICAgICAgIGZvbGxvd1RyaWdnZXI6IGZhbHNlLFxuICAgICAgICBjb250YWluZXI6ICgpID0+IGRvY3VtZW50LmJvZHksXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHlwZW9mIHByb3BzLnZpc2libGUgPT09ICd1bmRlZmluZWQnID8gcHJvcHMuZGVmYXVsdFZpc2libGUgOiBwcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckNsaWNrJywgJ2hhbmRsZVRyaWdnZXJLZXlEb3duJyxcbiAgICAgICAgICAgICdoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcicsICdoYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlVHJpZ2dlckZvY3VzJywgJ2hhbmRsZVRyaWdnZXJCbHVyJyxcbiAgICAgICAgICAgICdoYW5kbGVDb250ZW50TW91c2VFbnRlcicsICdoYW5kbGVDb250ZW50TW91c2VMZWF2ZScsXG4gICAgICAgICAgICAnaGFuZGxlQ29udGVudE1vdXNlRG93bicsICdoYW5kbGVSZXF1ZXN0Q2xvc2UnLFxuICAgICAgICAgICAgJ2hhbmRsZU1hc2tNb3VzZUVudGVyJywgJ2hhbmRsZU1hc2tNb3VzZUxlYXZlJ1xuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFsnX3RpbWVyJywgJ19oaWRlVGltZXInLCAnX3Nob3dUaW1lciddLmZvckVhY2godGltZSA9PiB7XG4gICAgICAgICAgICB0aGlzW3RpbWVdICYmIGNsZWFyVGltZW91dCh0aGlzW3RpbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKSB7XG4gICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCB0eXBlLCBlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlICYmICF0aGlzLnByb3BzLmNhbkNsb3NlQnlUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoIXRoaXMuc3RhdGUudmlzaWJsZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlcktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlNQQUNFIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyTW91c2VFbnRlcihlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5faGlkZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodHJ1ZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsIHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSwgdHlwZSB8fCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlckZvY3VzKGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHRydWUsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJCbHVyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZvcndhcmRDb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRm9yd2FyZENvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VEb3duKCkge1xuICAgICAgICB0aGlzLl9pc0ZvcndhcmRDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VFbnRlcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lcik7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGVudE1vdXNlTGVhdmUoZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlKGUsICdmcm9tQ29udGVudCcpO1xuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUVudGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2spIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1hc2tNb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLl9tb3VzZU5vdEZpcnN0T25NYXNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXF1ZXN0Q2xvc2UodHlwZSwgZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UsIHR5cGUsIGUpO1xuICAgIH1cblxuICAgIHJlbmRlclRyaWdnZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHJpZ2dlciwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAga2V5OiAndHJpZ2dlcicsXG4gICAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHJpZ2dlclR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHsgb25DbGljaywgb25LZXlEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgb25Gb2N1cywgb25CbHVyIH0gPSB0cmlnZ2VyLnByb3BzO1xuICAgICAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJpZ2dlclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJDbGljaywgb25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbktleURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyS2V5RG93biwgb25LZXlEb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdob3ZlcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlck1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlTGVhdmUgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZSwgb25Nb3VzZUxlYXZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlckZvY3VzLCBvbkZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQmx1ciA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJCbHVyLCBvbkJsdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwgcHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRyaWdnZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZXMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJUeXBlKSA/IHRyaWdnZXJUeXBlIDogW3RyaWdnZXJUeXBlXTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCB7IG9uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSB9ID0gY29udGVudC5wcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBrZXk6ICdwb3J0YWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgdHJpZ2dlclR5cGVzLmZvckVhY2godHJpZ2dlclR5cGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICh0cmlnZ2VyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZURvd24gPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVDb250ZW50TW91c2VEb3duLCBvbk1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdmVyJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUVudGVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlQ29udGVudE1vdXNlRW50ZXIsIG9uTW91c2VFbnRlcik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VMZWF2ZSA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjb250ZW50LCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9ydGFsKCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCwgc2FmZU5vZGUsIGZvbGxvd1RyaWdnZXIsIHRyaWdnZXJUeXBlLCBoYXNNYXNrLCB3cmFwcGVyU3R5bGUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtjb250YWluZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmluZFRyaWdnZXJOb2RlID0gKCkgPT4gKGZpbmRET01Ob2RlKHRoaXMpIHx8IHt9KTtcbiAgICAgICAgY29uc3Qgc2FmZU5vZGVzID0gQXJyYXkuaXNBcnJheShzYWZlTm9kZSkgPyBbLi4uc2FmZU5vZGVdIDogW3NhZmVOb2RlXTtcbiAgICAgICAgc2FmZU5vZGVzLnVuc2hpZnQoZmluZFRyaWdnZXJOb2RlKTtcblxuICAgICAgICBjb25zdCBuZXdXcmFwcGVyU3R5bGUgPSB3cmFwcGVyU3R5bGUgfHwge307XG5cbiAgICAgICAgaWYgKGZvbGxvd1RyaWdnZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRyaWdnZXIgPT4gdHJpZ2dlci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgbmV3V3JhcHBlclN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyVHlwZSA9PT0gJ2hvdmVyJyAmJiBoYXNNYXNrKSB7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VFbnRlciA9IHRoaXMuaGFuZGxlTWFza01vdXNlRW50ZXI7XG4gICAgICAgICAgICBvdGhlcnMub25NYXNrTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTWFza01vdXNlTGVhdmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE92ZXJsYXkgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICBrZXk9XCJvdmVybGF5XCJcbiAgICAgICAgICAgICAgICByZWY9e292ZXJsYXkgPT4gKHRoaXMub3ZlcmxheSA9IG92ZXJsYXkpfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9e3RhcmdldCB8fCBmaW5kVHJpZ2dlck5vZGV9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgc2FmZU5vZGU9e3NhZmVOb2Rlc31cbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e25ld1dyYXBwZXJTdHlsZX1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgaGFzTWFzaz17aGFzTWFza31cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRyaWdnZXIoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKClcbiAgICAgICAgXTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9wb3B1cC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL292ZXJsYXknO1xuaW1wb3J0IEJhbGxvb25Jbm5lciBmcm9tICcuL2lubmVyJztcbmltcG9ydCB7bm9ybWFsTWFwIGFzIGFsaWduTWFwfSBmcm9tICcuL2FsaWduTWFwJztcblxuY29uc3Qge1BvcHVwfSA9IE92ZXJsYXk7XG5cbi8qKiBCYWxsb29uLlRvb2x0aXAgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLflvI/nsbvlkI3nmoTlk4HniYzliY3nvIBcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieexu+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ5YaF6IGU5qC35byPXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvb2x0aXDnmoTlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55Ye65bGC5L2N572uXG4gICAgICAgICAqIEBlbnVtZGVzYyDkuIosIOWPsywg5LiLLCDlt6YsIOS4iuW3piwg5LiK5Y+zLCDkuIvlt6YsIOS4i+WPsywg5bem5LiKLCDlt6bkuIssIOWPs+S4iiwg5Y+z5LiLIOWPiuWFtiDkuKTkuKTnu4TlkIhcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0JywgJ3InLCAnYicsICdsJywgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ2x0JywgJ2xiJywgJ3J0JywgJ3JiJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R6KGM5Li6XG4gICAgICAgICAqIOm8oOagh+aCrOa1riwg6I635Y+W5Yiw54Sm54K5LCDpvKDmoIfngrnlh7soJ2hvdmVyJ++8jCdmb2N1cyfvvIwnY2xpY2snKeaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tnN0eWxl77yM6YCP5Lyg57uZUG9wdXBcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7ZjbGFzc05hbWXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnu4Tku7blsZ7mgKfvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpnB1cmUgcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMh+Wumua1ruWxgua4suafk+eahOeItuiKgueCuSwg5Y+v5Lul5Li66IqC54K5aWTnmoTlrZfnrKbkuLLvvIzkuZ/lj6/ku6Xov5Tlm57oioLngrnnmoTlh73mlbDjgIJcbiAgICAgICAgICovXG4gICAgICAgIHBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGCaWQsIOS8oOWFpeWAvOaJjeS8muaUr+aMgeaXoOmanOeijVxuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRyaWdnZXJUeXBlOiAnaG92ZXInLFxuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIGFsaWduOiAnYicsXG4gICAgICAgIHRyaWdnZXI6IDxzcGFuPjwvc3Bhbj5cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRlbnRJZCA9IHByb3BzLmlkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWUsIGFsaWduLCBzdHlsZSwgcHJlZml4LCB0cmlnZ2VyLCBjaGlsZHJlbiwgcG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBwb3B1cFByb3BzLCBwb3B1cENsYXNzTmFtZSwgcG9wdXBTdHlsZSwgdHJpZ2dlclR5cGUsIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHRyT3JpZ2luID0gJ3RyT3JpZ2luJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgb3RoZXJzLnJ0bCA9IHRydWU7XG4gICAgICAgICAgICB0ck9yaWdpbiA9ICdydGxUck9yaWdpbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBhbGlnbk1hcFthbGlnbl1bdHJPcmlnaW5dO1xuICAgICAgICBjb25zdCBfb2Zmc2V0ID0gYWxpZ25NYXBbYWxpZ25dLm9mZnNldDtcbiAgICAgICAgY29uc3QgX3N0eWxlID0ge3RyYW5zZm9ybU9yaWdpbiwgLi4uc3R5bGV9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoPEJhbGxvb25Jbm5lclxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGlkPXt0aGlzLl9jb250ZW50SWR9XG4gICAgICAgICAgICBwcmVmaXg9e3ByZWZpeH1cbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGlzVG9vbHRpcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17X3N0eWxlfVxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CYWxsb29uSW5uZXI+KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyUHJvcHMgPSB7fTtcbiAgICAgICAgdHJpZ2dlclByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10gPSB0aGlzLl9jb250ZW50SWQ7XG4gICAgICAgIHRyaWdnZXJQcm9wcy50YWJJbmRleCA9ICcwJztcblxuICAgICAgICBjb25zdCBuZXdUcmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KHRyaWdnZXIsIHRyaWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHsuLi5wb3B1cFByb3BzfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcj17cG9wdXBDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17dGhpcy5fY29udGVudElkID8gbmV3VHJpZ2dlciA6IHRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgdHJpZ2dlclR5cGU9e3RyaWdnZXJUeXBlfVxuICAgICAgICAgICAgICAgIGFsaWduPXthbGlnbk1hcFthbGlnbl0uYWxpZ259XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtfb2Zmc2V0fVxuICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb25cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vdG9vbHRpcC5qc3giLCJpbXBvcnQgJy4uL2FuaW1hdGUvc3R5bGUuanMnO1xuaW1wb3J0ICcuLi9vdmVybGF5L3N0eWxlLmpzJztcbmltcG9ydCAnLi4vaWNvbi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL3N0eWxlLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRlL21haW4uc2NzcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9tYWluLnNjc3MiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vbWFpbi5zY3NzIiwiaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vdmlldy9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vdmlldy9ncm91cCc7XG5cbkJ1dHRvbi5Hcm91cCA9IEJ1dHRvbkdyb3VwO1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQnV0dG9uLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKCdzaGFwZScgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoJ3NoYXBlJywgJ3RleHQgfCB3YXJuaW5nIHwgZ2hvc3QnLCAnQnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgc2hhcGUsIHR5cGUsIC4uLm90aGVycyB9ID0gcHJvcHM7XG5cbiAgICAgICAgICAgIGxldCBuZXdUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGlnaHQnIHx8IHR5cGUgPT09ICdkYXJrJyB8fCAodHlwZSA9PT0gJ3NlY29uZGFyeScgJiYgc2hhcGUgPT09ICd3YXJuaW5nJykpIHtcbiAgICAgICAgICAgICAgICBuZXdUeXBlID0gJ25vcm1hbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBnaG9zdDtcbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gJ2dob3N0Jykge1xuICAgICAgICAgICAgICAgIGdob3N0ID0gKHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiAnbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiAnZGFyaycsXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0OiAnbGlnaHQnXG4gICAgICAgICAgICAgICAgfSlbdHlwZSB8fCBCdXR0b24uZGVmYXVsdFByb3BzLnR5cGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2hhcGUgPT09ICd0ZXh0JztcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmcgPSBzaGFwZSA9PT0gJ3dhcm5pbmcnO1xuXG4gICAgICAgICAgICBwcm9wcyA9IHsgdHlwZTogbmV3VHlwZSwgZ2hvc3QsIHRleHQsIHdhcm5pbmcsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi9pbmRleC5qc3giLCJpbXBvcnQgJy4uL2ljb24vc3R5bGUuanMnO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL3N0eWxlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmZ1bmN0aW9uIG1hcEljb25TaXplKHNpemUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgbGFyZ2U6ICdzbWFsbCcsXG4gICAgICAgIG1lZGl1bTogJ3hzJyxcbiAgICAgICAgc21hbGw6ICd4cycsXG4gICAgfSlbc2l6ZV07XG59XG5cbi8qKiBCdXR0b24gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyJ6ZKu55qE57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdub3JtYWwnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjInpkq7nmoTlsLrlr7hcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMiemSruS4rSBJY29uIOeahOWwuuWvuO+8jOeUqOS6juabv+S7oyBJY29uIOeahOm7mOiupOWkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3h4cycsICd4cycsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneGwnLCAneHhsJywgJ3h4eGwnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvZMgY29tcG9uZW50ID0gJ2J1dHRvbicg5pe277yM6K6+572uIGJ1dHRvbiDmoIfnrb7nmoQgdHlwZSDlgLxcbiAgICAgICAgICovXG4gICAgICAgIGh0bWxUeXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAncmVzZXQnLCAnYnV0dG9uJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6K6+572u5qCH562+57G75Z6LXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdhJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog6K6+572u5oyJ6ZKu55qE6L295YWl54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuS4uuW5veeBteaMiemSrlxuICAgICAgICAgKi9cbiAgICAgICAgZ2hvc3Q6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgZmFsc2UsICdsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li65paH5pys5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuS4uuitpuWRiuaMiemSrlxuICAgICAgICAgKi9cbiAgICAgICAgd2FybmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeCueWHu+aMiemSrueahOWbnuiwg1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBFdmVudCBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uTW91c2VVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICAgICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgICAgICBjb21wb25lbnQ6ICdidXR0b24nLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZ2hvc3Q6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBmYWxzZSxcbiAgICAgICAgd2FybmluZzogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DbGljazogKCkgPT4ge31cbiAgICB9O1xuXG4gICAgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5idXR0b24uYmx1cigpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlVXAoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYnV0dG9uUmVmSGFuZGxlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIGNsYXNzTmFtZSwgdHlwZSwgc2l6ZSwgaHRtbFR5cGUsIGxvYWRpbmcsIHRleHQsIHdhcm5pbmcsIGdob3N0LCBjb21wb25lbnQsIGljb25TaXplLCBjaGlsZHJlbiwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGdob3N0VHlwZSA9IFsnbGlnaHQnLCAnZGFyayddLmluZGV4T2YoZ2hvc3QpID49IDAgPyBnaG9zdCA6ICdkYXJrJztcblxuICAgICAgICBjb25zdCBidG5DbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7cHJlZml4fSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLSR7dHlwZX1gXTogdHlwZSAmJiAhZ2hvc3QsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi10ZXh0YF06IHRleHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi13YXJuaW5nYF06IHdhcm5pbmcsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1naG9zdGBdOiBnaG9zdCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLSR7Z2hvc3RUeXBlfWBdOiBnaG9zdCxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSBDaGlsZHJlbi5jb3VudChjaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IGNsb25lZENoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkLnR5cGUgPT09ICdmdW5jdGlvbicgJiYgY2hpbGQudHlwZS5fdHlwZU1hcmsgPT09ICdpY29uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljb25DbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4taWNvbmBdOiAhaWNvblNpemUsIC8vIOWmguaenOeUqOaIt+ayoeacieS8oCBpY29uU2l6Ze+8jOWImeS9v+eUqOivpeagt+W8j+agh+iusCBpY29uIOS4uiBidXR0b24g6aKE6K6+5bC65a+4XG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1maXJzdGBdOiBjb3VudCA+IDEgJiYgaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1sYXN0YF06IGNvdW50ID4gMSAmJiBpbmRleCA9PT0gY291bnQgLSAxLFxuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fWljb24tYWxvbmVgXTogY291bnQgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgIFtjaGlsZC5wcm9wcy5jbGFzc05hbWVdOiAhIWNoaWxkLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBpY29uU2l6ZSB8fCBtYXBJY29uU2l6ZShzaXplKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFRhZ05hbWUgPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHRhZ0F0dHJzID0ge1xuICAgICAgICAgICAgLi4ub3RoZXJzLFxuICAgICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGJ0bkNsc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChUYWdOYW1lID09PSAnYScpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0YWdBdHRycy50eXBlO1xuXG4gICAgICAgICAgICBpZiAodGFnQXR0cnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFnQXR0cnMub25DbGljazsgLy8gYSDmoIfnrb7nmoQgb25DbGljayDmtY/op4jlmajpu5jorqTkuI3kvJrnpoHnlKhcbiAgICAgICAgICAgICAgICB0YWdBdHRycy5ocmVmICYmIGRlbGV0ZSB0YWdBdHRycy5ocmVmOyAvLyBhIOagh+etvuWcqOemgeeUqOeKtuaAgeS4i+aXoOi3s+i9rFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWdOYW1lIHsuLi50YWdBdHRyc30gZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VVcH0gcmVmPXt0aGlzLmJ1dHRvblJlZkhhbmRsZXJ9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICB7Y2xvbmVkQ2hpbGRyZW59XG4gICAgICAgICAgICA8L1RhZ05hbWU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi92aWV3L2J1dHRvbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXInO1xuXG4vKipcbiAqIEJ1dHRvbi5Hcm91cFxuICovXG5jbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog57uf5LiA6K6+572uIEJ1dHRvbiDnu4Tku7bnmoTmjInpkq7lpKflsI9cbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcmVmaXgsIGNsYXNzTmFtZSwgc2l6ZSwgY2hpbGRyZW4sIHJ0bCwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwQ2xzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1ncm91cGBdOiB0cnVlLFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9uZUNoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBvdGhlcnMuZGlyID0gJ3J0bCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4ub3RoZXJzfSBjbGFzc05hbWU9e2dyb3VwQ2xzfT5cbiAgICAgICAgICAgICAgICB7Y2xvbmVDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKEJ1dHRvbkdyb3VwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24vdmlldy9ncm91cC5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi9tYWluLnNjc3MiLCJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vc3JjL2J1dHRvbic7XG5pbXBvcnQgJy4uLy4uLy4uL3NyYy9idXR0b24vc3R5bGUuanMnO1xuXG5cbmltcG9ydCBCYWxsb29uIGZyb20gJy4uLy4uLy4uL3NyYy9iYWxsb29uJztcbmltcG9ydCAnLi4vLi4vLi4vc3JjL2JhbGxvb24vc3R5bGUuanMnO1xuXG5cblxuXG5cbmNvbnN0IHRvcCA9IDxCdXR0b24gIGlkPVwidG9wXCIgc3R5bGU9e3ttYXJnaW46ICc1cHgnfX0gY2xhc3NOYW1lPVwiYnRyaWdnZXJcIj50b3A8L0J1dHRvbj47XG5jb25zdCByaWdodCA9IDxCdXR0b24gIGlkPVwicmlnaHRcIiBzdHlsZT17e21hcmdpbjogJzVweCd9fSBjbGFzc05hbWU9XCJidHJpZ2dlclwiPnJpZ2h0PC9CdXR0b24+O1xuY29uc3QgYm90dG9tID0gPEJ1dHRvbiBpZD1cImJvdHRvbVwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319IGNsYXNzTmFtZT1cImJ0cmlnZ2VyXCI+Ym90dG9tPC9CdXR0b24+O1xuY29uc3QgbGVmdCA9IDxCdXR0b24gaWQ9XCJsZWZ0XCIgc3R5bGU9e3ttYXJnaW46ICc1cHgnfX0gY2xhc3NOYW1lPVwiYnRyaWdnZXJcIj5sZWZ0PC9CdXR0b24+O1xuY29uc3QgdG9wTGVmdCA9IDxCdXR0b24gaWQ9XCJ0b3BMZWZ0XCIgc3R5bGU9e3ttYXJnaW46ICc1cHgnfX0gY2xhc3NOYW1lPVwiYnRyaWdnZXJcIj50b3AgbGVmdDwvQnV0dG9uPjtcbmNvbnN0IHRvcFJpZ2h0ID0gPEJ1dHRvbiBpZD1cInRvcFJpZ2h0XCIgc3R5bGU9e3ttYXJnaW46ICc1cHgnfX0gY2xhc3NOYW1lPVwiYnRyaWdnZXJcIj50b3AgcmlnaHQ8L0J1dHRvbj47XG5jb25zdCByaWdodFRvcCA9IDxCdXR0b24gaWQ9XCJyaWdodFRvcFwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319IGNsYXNzTmFtZT1cImJ0cmlnZ2VyXCI+cmlnaHQgdG9wPC9CdXR0b24+O1xuY29uc3QgcmlnaHRCb3R0b20gPSA8QnV0dG9uIGlkPVwicmlnaHRCb3R0b21cIiBzdHlsZT17e21hcmdpbjogJzVweCd9fSBjbGFzc05hbWU9XCJidHJpZ2dlclwiPnJpZ2h0IGJvdHRvbTwvQnV0dG9uPjtcbmNvbnN0IGJvdHRvbUxlZnQgPSA8QnV0dG9uIGlkPVwiYm90dG9tTGVmdFwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319IGNsYXNzTmFtZT1cImJ0cmlnZ2VyXCI+Ym90dG9tIGxlZnQ8L0J1dHRvbj47XG5jb25zdCBib3R0b21SaWdodCA9IDxCdXR0b24gaWQ9XCJib3R0b21SaWdodFwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319IGNsYXNzTmFtZT1cImJ0cmlnZ2VyXCI+Ym90dG9tIHJpZ2h0PC9CdXR0b24+O1xuY29uc3QgbGVmdFRvcCA9IDxCdXR0b24gaWQ9XCJsZWZ0VG9wXCIgc3R5bGU9e3ttYXJnaW46ICc1cHgnfX0gY2xhc3NOYW1lPVwiYnRyaWdnZXJcIj5sZWZ0IHRvcDwvQnV0dG9uPjtcbmNvbnN0IGxlZnRCb3R0b20gPSA8QnV0dG9uIGlkPVwibGVmdEJvdHRvbVwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319IGNsYXNzTmFtZT1cImJ0cmlnZ2VyXCI+bGVmdCBib3R0b208L0J1dHRvbj47XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luVG9wOiAwfX0+YmFsbG9vbiB0aXRsZTwvaDQ+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgYmFsbG9vbiBjb250ZW50XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDMyMCwgcGFkZGluZ1RvcDogMTAwfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiA3NX19PlxuICAgICAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17dG9wTGVmdH0gYWxpZ249XCJ0bFwiIGFsaWduRWRnZSB0cmlnZ2VyVHlwZT1cImNsaWNrXCIgc3R5bGU9e3t3aWR0aDogMzAwfX0+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQvPlxuICAgICAgICAgICAgPC9CYWxsb29uPlxuICAgICAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17dG9wfSBhbGlnbj1cInRcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e3RvcFJpZ2h0fSBhbGlnbj1cInRyXCIgYWxpZ25FZGdlIHRyaWdnZXJUeXBlPVwiY2xpY2tcIiBzdHlsZT17e3dpZHRoOiAzMDB9fT5cbiAgICAgICAgICAgICAgICA8Q29udGVudC8+XG4gICAgICAgICAgICA8L0JhbGxvb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDgwLCBmbG9hdDogJ2xlZnQnfX0+XG4gICAgICAgICAgICA8QmFsbG9vbiB0cmlnZ2VyPXtsZWZ0VG9wfSBhbGlnbj1cImx0XCIgYWxpZ25FZGdlIHRyaWdnZXJUeXBlPVwiY2xpY2tcIiBzdHlsZT17e3dpZHRoOiAzMDB9fT5cbiAgICAgICAgICAgICAgICA8Q29udGVudC8+XG4gICAgICAgICAgICA8L0JhbGxvb24+XG4gICAgICAgICAgICA8QmFsbG9vbiB0cmlnZ2VyPXtsZWZ0fSBhbGlnbj1cImxcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e2xlZnRCb3R0b219IGFsaWduPVwibGJcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogODAsIG1hcmdpbkxlZnQ6IDI5MH19PlxuICAgICAgICAgICAgPEJhbGxvb24gdHJpZ2dlcj17cmlnaHRUb3B9IGFsaWduPVwicnRcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e3JpZ2h0fSBhbGlnbj1cInJcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e3JpZ2h0Qm90dG9tfSBhbGlnbj1cInJiXCIgYWxpZ25FZGdlIHRyaWdnZXJUeXBlPVwiY2xpY2tcIiBzdHlsZT17e3dpZHRoOiAzMDB9fT5cbiAgICAgICAgICAgICAgICA8Q29udGVudC8+XG4gICAgICAgICAgICA8L0JhbGxvb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogODAsIGNsZWFyOiAnYm90aCd9fT5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e2JvdHRvbUxlZnR9IGFsaWduPVwiYmxcIiBhbGlnbkVkZ2UgdHJpZ2dlclR5cGU9XCJjbGlja1wiIHN0eWxlPXt7d2lkdGg6IDMwMH19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50Lz5cbiAgICAgICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgICAgIDxCYWxsb29uIHRyaWdnZXI9e2JvdHRvbX0gYWxpZ249XCJiXCIgYWxpZ25FZGdlIHRyaWdnZXJUeXBlPVwiY2xpY2tcIiBzdHlsZT17e3dpZHRoOiAzMDB9fT5cbiAgICAgICAgICAgICAgICA8Q29udGVudC8+XG4gICAgICAgICAgICA8L0JhbGxvb24+XG4gICAgICAgICAgICA8QmFsbG9vbiB0cmlnZ2VyPXtib3R0b21SaWdodH0gYWxpZ249XCJiclwiIGFsaWduRWRnZSB0cmlnZ2VyVHlwZT1cImNsaWNrXCIgc3R5bGU9e3t3aWR0aDogMzAwfX0+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQvPlxuICAgICAgICAgICAgPC9CYWxsb29uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBtb3VudE5vZGUpO1xuXG5cbi8vIEhPVCBSRUxPQUQgQ09ERVxuY29uc3QgY29tcG9uZW50RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb25lbnQtZGVzYycpO1xuY29tcG9uZW50RGVzYy5pbm5lckhUTUwgPSBg5L2N572u5pyJ5Y2B5LqM5Liq5pa55ZCR44CCYDtcbmNvbnN0IGNvbXBvbmVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcG9uZW50LWJvZHknKTtcbmNvbXBvbmVudEJvZHkuaW5uZXJIVE1MID0gYDxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1qc3hcIj48ZGl2IGNsYXNzPVwiaGxqc1wiPjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+aW1wb3J0PC9zcGFuPiB7IEJ1dHRvbiwgQmFsbG9vbiB9IDxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPidAYWxpZmQvbmV4dCc8L3NwYW4+O1xuXG5cblxuXG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiB0b3AgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+ICA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmlkPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJ0b3BcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPnRvcDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IHJpZ2h0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5pZDwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwicmlnaHRcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPnJpZ2h0PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gYm90dG9tID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmlkPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJib3R0b21cIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmJvdHRvbTxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IGxlZnQgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+aWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImxlZnRcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmxlZnQ8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj47XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiB0b3BMZWZ0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmlkPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJ0b3BMZWZ0XCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjVweDwvc3Bhbj4nfX0gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJ0cmlnZ2VyXCI8L3NwYW4+Jmd0Ozwvc3Bhbj50b3AgbGVmdDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IHRvcFJpZ2h0ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmlkPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJ0b3BSaWdodFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3ttYXJnaW46PC9zcGFuPiAnPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj41cHg8L3NwYW4+J319IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+Y2xhc3NOYW1lPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJidHJpZ2dlclwiPC9zcGFuPiZndDs8L3NwYW4+dG9wIHJpZ2h0PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gcmlnaHRUb3AgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+aWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cInJpZ2h0VG9wXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjVweDwvc3Bhbj4nfX0gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJ0cmlnZ2VyXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5yaWdodCB0b3A8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj47XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiByaWdodEJvdHRvbSA9IDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5pZDwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwicmlnaHRCb3R0b21cIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPnJpZ2h0IGJvdHRvbTxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IGJvdHRvbUxlZnQgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+aWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJvdHRvbUxlZnRcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmJvdHRvbSBsZWZ0PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+O1xuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gYm90dG9tUmlnaHQgPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+aWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJvdHRvbVJpZ2h0XCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjVweDwvc3Bhbj4nfX0gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJ0cmlnZ2VyXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5ib3R0b20gcmlnaHQ8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj47XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBsZWZ0VG9wID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmlkPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJsZWZ0VG9wXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjVweDwvc3Bhbj4nfX0gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJ0cmlnZ2VyXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5sZWZ0IHRvcDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcbjxzcGFuIGNsYXNzPVwiaGxqcy1rZXl3b3JkXCI+Y29uc3Q8L3NwYW4+IGxlZnRCb3R0b20gPSA8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+aWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImxlZnRCb3R0b21cIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmxlZnQgYm90dG9tPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+O1xuXG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBDb250ZW50ID0gPHNwYW4gY2xhc3M9XCJobGpzLWZ1bmN0aW9uXCI+PHNwYW4gY2xhc3M9XCJobGpzLXBhcmFtc1wiPigpPC9zcGFuPiA9Jmd0Ozwvc3Bhbj4gKFxuICAgIDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+aDQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpblRvcDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MDwvc3Bhbj59fSZndDs8L3NwYW4+YmFsbG9vbiB0aXRsZTxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+aDQ8L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmhyPC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgYmFsbG9vbiBjb250ZW50XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPlxuKTtcblxuPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gQXBwID0gPHNwYW4gY2xhc3M9XCJobGpzLWZ1bmN0aW9uXCI+PHNwYW4gY2xhc3M9XCJobGpzLXBhcmFtc1wiPigpPC9zcGFuPiA9Jmd0Ozwvc3Bhbj4gKFxuICAgIDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7cGFkZGluZ0xlZnQ6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjMyMDwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+cGFkZGluZ1RvcDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MTAwPC9zcGFuPn19Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luTGVmdDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NzU8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt0b3BMZWZ0fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwidGxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3RvcH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cInRcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3RvcFJpZ2h0fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwidHJcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5kaXY8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj44MDwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+ZmxvYXQ6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5sZWZ0PC9zcGFuPid9fSZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e2xlZnRUb3B9PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmFsaWduPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJsdFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmFsaWduRWRnZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyVHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiY2xpY2tcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7d2lkdGg6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjMwMDwvc3Bhbj59fSZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkNvbnRlbnQ8L3NwYW4+LyZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXI8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57bGVmdH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e2xlZnRCb3R0b219PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmFsaWduPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJsYlwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmFsaWduRWRnZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyVHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiY2xpY2tcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7d2lkdGg6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjMwMDwvc3Bhbj59fSZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkNvbnRlbnQ8L3NwYW4+LyZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7d2lkdGg6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjgwPC9zcGFuPiwgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5tYXJnaW5MZWZ0Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4yOTA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntyaWdodFRvcH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cInJ0XCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ25FZGdlPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXJUeXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJjbGlja1wiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3t3aWR0aDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MzAwPC9zcGFuPn19Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+Q29udGVudDwvc3Bhbj4vJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntyaWdodH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cInJcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3JpZ2h0Qm90dG9tfTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwicmJcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5hbGlnbkVkZ2U8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlclR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNsaWNrXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e3dpZHRoOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj4zMDA8L3NwYW4+fX0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5Db250ZW50PC9zcGFuPi8mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5kaXY8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbkxlZnQ6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjgwPC9zcGFuPiwgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGVhcjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmJvdGg8L3NwYW4+J319Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXI8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57Ym90dG9tTGVmdH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJsXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ25FZGdlPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXJUeXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJjbGlja1wiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3t3aWR0aDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MzAwPC9zcGFuPn19Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+Q29udGVudDwvc3Bhbj4vJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntib3R0b219PC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmFsaWduPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJiXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ25FZGdlPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXJUeXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJjbGlja1wiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3t3aWR0aDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MzAwPC9zcGFuPn19Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+Q29udGVudDwvc3Bhbj4vJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntib3R0b21SaWdodH08L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ248L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJyXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+YWxpZ25FZGdlPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnRyaWdnZXJUeXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+XCJjbGlja1wiPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3t3aWR0aDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+MzAwPC9zcGFuPn19Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+Q29udGVudDwvc3Bhbj4vJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QmFsbG9vbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPlxuKTtcblxuUmVhY3RET00ucmVuZGVyKDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkFwcDwvc3Bhbj4gLyZndDs8L3NwYW4+LCBtb3VudE5vZGUpO1xuXG48L3NwYW4+PC9kaXY+PC9jb2RlPjwvcHJlPlxuYC5yZXBsYWNlKC97YmFja3F1b3RlfS9nLCAnYCcpLnJlcGxhY2UoL3tkb2xsYXJ9L2csICckJyk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgY29uc3QgcmVsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQtZGVtby1yZWxvYWRpbmcnKTtcblxuICBpZiAoIXdpbmRvdy5oYXNBZGRTdGF0dXNIYW5kbGVyKSB7XG4gICAgbW9kdWxlLmhvdC5hZGRTdGF0dXNIYW5kbGVyKHN0YXR1cyA9PiB7XG4gICAgICB3aW5kb3cuaGFzQWRkU3RhdHVzSGFuZGxlciA9IHRydWU7XG4gICAgICBpZiAoc3RhdHVzID09PSAnY2hlY2snKSB7XG4gICAgICAgIHJlbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgICAgcmVsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL2JhbGxvb24vZGVtby9hbGlnbm1lbnQubWQiXSwic291cmNlUm9vdCI6IiJ9