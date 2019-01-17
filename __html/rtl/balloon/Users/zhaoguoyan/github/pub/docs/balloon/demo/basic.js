webpackJsonp([6],[
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
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(198);


/***/ }),
/* 198 */
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

var defaultTrigger = React.createElement(_button2.default, { className: 'btrigger', style: { margin: '5px' } }, 'default style');
var primary = React.createElement(_button2.default, { className: 'btrigger', style: { margin: '5px' } }, 'primary style');

var Demo = function Demo() {
    return React.createElement('div', { className: 'container' }, React.createElement(_balloon2.default, { trigger: defaultTrigger, closable: false }, 'default'), React.createElement(_balloon2.default, { type: 'primary', trigger: primary, triggerType: 'click' }, 'primary'));
};

ReactDOM.render(React.createElement(Demo, null), mountNode);

// HOT RELOAD CODE
var componentDesc = document.querySelector('#component-desc');
componentDesc.innerHTML = '\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002';
var componentBody = document.querySelector('#component-body');
componentBody.innerHTML = '<pre><code class="language-jsx"><div class="hljs"><span class="hljs-keyword">import</span> { Button, Balloon } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@alifd/next\'</span>;\n\n\n\n<span class="hljs-keyword">const</span> defaultTrigger = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}}&gt;</span>default style<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n<span class="hljs-keyword">const</span> primary = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"btrigger"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{margin:</span> \'<span class="hljs-attr">5px</span>\'}}&gt;</span>primary style<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;\n\n\n<span class="hljs-keyword">const</span> Demo = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"container"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span>  <span class="hljs-attr">trigger</span>=<span class="hljs-string">{defaultTrigger}</span> <span class="hljs-attr">closable</span>=<span class="hljs-string">{false}</span>&gt;</span>\n            default\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Balloon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">{primary}</span>  <span class="hljs-attr">triggerType</span>=<span class="hljs-string">"click"</span>&gt;</span>\n            primary\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Balloon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n);\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Demo</span> /&gt;</span>, mountNode);\n\n</span></div></code></pre>\n'.replace(/{backquote}/g, '`').replace(/{dollar}/g, '$');

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
],[197]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jbGFzc25hbWVzQDIuMi42QGNsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5SZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy91dGlsL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL21haW4uc2Nzcz83MDIyIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3V0aWxzL2ZpbmQtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9pbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vYWxpZ25NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzP2ViYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvbWFpbi5zY3NzPzJjNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhbGxvb24vbWFpbi5zY3NzPzhlM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9pY29uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vbWFpbi5zY3NzPzBhZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9hbmltYXRlL3N0eWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy5tb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2dldC1jb250ZXh0LXByb3BzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9rZXljb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L292ZXJsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L2dhdGV3YXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3Bvc2l0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19vYmplY3QtYXNzaWduQDQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25maWcuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9faG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NAMi41LjVAaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZm9jdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NvbnN1bWVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLXByb3ZpZGVyL2NhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9pY29uL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9iYWxsb29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3V0aWxzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vdmVybGF5L3BvcHVwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi90b29sdGlwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFsbG9vbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL292ZXJsYXkvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9iYWxsb29uL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vdmlldy9idXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9idXR0b24vdmlldy9ncm91cC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9iYWxsb29uL2RlbW8vYmFzaWMubWQiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCIkJHR5cGVvZiIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIl9kb20iLCJfZW52IiwiX2V2ZW50cyIsIl9mdW5jIiwiX2xvZyIsIl9vYmplY3QiLCJfc3RyaW5nIiwiX3N1cHBvcnQiLCJfZm9jdXMiLCJkb20iLCJldmVudHMiLCJmdW5jIiwibG9nIiwib2JqIiwic3RyIiwic3VwcG9ydCIsImZvY3VzIiwiZ3VpZCIsIl9ndWlkIiwiS0VZQ09ERSIsIl9LRVlDT0RFIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJhcmdUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJrZXkiLCJjYWxsIiwiam9pbiIsImRlZmF1bHQiLCJkZWZpbmUiLCJ3aW5kb3ciLCJjaGlsZENvbnRleHRDYWNoZSIsIkNhY2hlIiwiQ29uZmlnUHJvdmlkZXIiLCJhcmdzIiwiYWRkIiwiZ2V0IiwiZ2V0Q2hpbGRDb250ZXh0IiwicHJvcHMiLCJwcmVmaXgiLCJsb2NhbGUiLCJwdXJlIiwid2FybmluZyIsInJ0bCIsIm5leHRQcmVmaXgiLCJuZXh0TG9jYWxlIiwibmV4dFB1cmUiLCJuZXh0UnRsIiwibmV4dFdhcm5pbmciLCJjb21wb25lbnRXaWxsTW91bnQiLCJzZXRNb21lbnRMb2NhbGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmUiLCJtb21lbnQiLCJlIiwibW9tZW50TG9jYWxlIiwicmVuZGVyIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29uZmlnIiwib3B0aW9ucyIsImdldENvbnRleHRQcm9wcyIsImRpc3BsYXlOYW1lIiwicm9vdCIsImluaXRMb2NhbGVzIiwic2V0TGFuZ3VhZ2UiLCJzZXRMb2NhbGUiLCJzZXREaXJlY3Rpb24iLCJnZXRMYW5ndWFnZSIsImdldExvY2FsZSIsImdldERpcmVjdGlvbiIsIkNvbnN1bWVyIiwiZ2V0Q29udGV4dCIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImlkIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInR5cGVPZiIsImlzQXJyYXlMaWtlIiwiaXNQcm9taXNlIiwiaXNQbGFpbk9iamVjdCIsInNoYWxsb3dFcXVhbCIsImVhY2giLCJwaWNrT3RoZXJzIiwicGlja0F0dHJzV2l0aCIsIk9iamVjdCIsInByb3RvdHlwZSIsInJlcGxhY2UiLCJ0eXBlIiwidGhlbiIsImN0b3IiLCJjb25zdHJ1Y3RvciIsInByb3QiLCJvYmpBIiwib2JqQiIsImNvbXBhcmUiLCJrZXlBIiwia2V5cyIsImtleUIiLCJsZW4iLCJoYXNDYWxsYmFjayIsInZhbEEiLCJ2YWxCIiwicmV0IiwiY2FsbGJhY2siLCJkaXJlY3Rpb24iLCJyZXZlcnNlZCIsInZhbHVlIiwiX2lzSW5PYmoiLCJpbmRleE9mIiwiaG9sZFByb3BzIiwib3RoZXJzIiwibWF0Y2giLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImZpbmROb2RlIiwidGFyZ2V0IiwicGFyYW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZXJyIiwibm9vcCIsIkJhbGxvb25Jbm5lciIsImNsb3NhYmxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpc1Rvb2x0aXAiLCJhbGlnbiIsIm9uQ2xvc2UiLCJhbGlnbkVkZ2UiLCJhbGlnbk1hcCIsImVkZ2VNYXAiLCJub3JtYWxNYXAiLCJfcHJlZml4IiwiYXJyb3ciLCJ1bmRlZmluZWQiLCJSZWFjdCIsImNvbnRleHRUeXBlcyIsImFueSIsInQiLCJydGxBbGlnbiIsInRyT3JpZ2luIiwicnRsVHJPcmlnaW4iLCJvZmZzZXQiLCJyIiwiYiIsImwiLCJ0bCIsInRyIiwicnQiLCJyYiIsImJsIiwiYnIiLCJsdCIsImxiIiwiT3ZlcmxheSIsIkdhdGV3YXkiLCJQb3NpdGlvbiIsIlBvcHVwIiwiZXhwb3J0TmFtZXMiLCJJY29uIiwic2l6ZSIsIm90aGVyIiwiZGlyIiwib25lT2YiLCJfdHlwZU1hcmsiLCJjb250ZXh0IiwibmV3UHJlZml4IiwibG9jYWxlRnJvbUNvbnRleHQiLCJuZXdMb2NhbGUiLCJuZXdQdXJlIiwibmV3UnRsIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJnZXRTdHlsZSIsInNldFN0eWxlIiwic2Nyb2xsYmFyIiwiZ2V0T2Zmc2V0IiwiaGFzRE9NIiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9mb3JjZSIsInRyaW0iLCJ0b2dnbGUiLCJmbGFnIiwibWF0Y2hlcyIsIm1hdGNoZXNGbiIsIl9ib2R5IiwiYm9keSIsImhlYWQiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsInNlbGVjdG9yIiwiX2dldENvbXB1dGVkU3R5bGUiLCJub2RlVHlwZSIsImdldENvbXB1dGVkU3R5bGUiLCJQSVhFTF9QQVRURVJOIiwicmVtb3ZlUGl4ZWwiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJfZ2V0U3R5bGVWYWx1ZSIsInRvTG93ZXJDYXNlIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0ZXN0IiwicGFyc2VGbG9hdCIsImZsb2F0TWFwIiwiY3NzRmxvYXQiLCJzdHlsZUZsb2F0IiwiZmxvYXQiLCJuYW1lIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbCIsInNjcm9sbERpdiIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbGJhckhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJjYW1lbGNhc2UiLCJoeXBoZW5hdGUiLCIkMCIsIiQxIiwidG9VcHBlckNhc2UiLCJpZVZlcnNpb24iLCJkb2N1bWVudE1vZGUiLCJpc1Byb2R1Y3Rpb24iLCJQUk9EVUNUSU9OX0VOViIsInJlc3VsdCIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiRVNDQVBFIiwiTEVGVF9BUlJPVyIsIlVQX0FSUk9XIiwiUklHSFRfQVJST1ciLCJET1dOX0FSUk9XIiwiQ09OVFJPTCIsIk9QVElPTiIsIkNNRCIsIkNPTU1BTkQiLCJERUxFVEUiLCJzYXZlTGFzdEZvY3VzTm9kZSIsImdldEZvY3VzTm9kZUxpc3QiLCJiYWNrTGFzdEZvY3VzTm9kZSIsIm1ha2VDaGFpbiIsImJpbmRDdHgiLCJpc1Njcm9sbERpc3BsYXkiLCJzY3JvbGxiYXJTdHlsZSIsImhhc1Njcm9sbCIsImRvYyIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsInByZWZpeGVzIiwiZ2V0U3R5bGVQcm9wZXJ0eSIsIm1vZGFscyIsImJvZHlPdmVyZmxvd1kiLCJib2R5UGFkZGluZ1JpZ2h0Iiwic2F2ZUNvbnRlbnRSZWYiLCJyZWYiLCJjb250ZW50UmVmIiwic2F2ZUdhdGV3YXlSZWYiLCJnYXRld2F5UmVmIiwic3RhdGUiLCJ2aXNpYmxlIiwic3RhdHVzIiwiYW5pbWF0aW9uIiwiZ2V0QW5pbWF0aW9uIiwibGFzdEFsaWduIiwidGltZW91dE1hcCIsImJlZm9yZU9wZW4iLCJlbnRlciIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRG9jdW1lbnRFdmVudHMiLCJvdmVybGF5TWFuYWdlciIsImFkZE92ZXJsYXkiLCJfaXNNb3VudGVkIiwid2lsbE9wZW4iLCJ3aWxsQ2xvc2UiLCJiZWZvcmVDbG9zZSIsInNldFN0YXRlIiwibGVhdmUiLCJwcmV2UHJvcHMiLCJvcGVuIiwiY2xvc2UiLCJhZGRBbmltYXRpb25FdmVudHMiLCJ3cmFwcGVyTm9kZSIsImdldFdyYXBwZXJOb2RlIiwic2V0VGltZW91dCIsIm9uT3BlbiIsImFmdGVyT3BlbiIsImFmdGVyQ2xvc2UiLCJyZW1vdmVPdmVybGF5Iiwic2V0Rm9jdXNOb2RlIiwiX2lzRGVzdHJveWVkIiwicmVtb3ZlRG9jdW1lbnRFdmVudHMiLCJmb2N1c1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfYW5pbWF0aW9uIiwib2ZmIiwiZ2V0QW5pbWF0aW9uQnlBbGlnbiIsImluIiwib3V0IiwiZ2V0Q29udGVudE5vZGUiLCJvbiIsImVuZCIsImhhbmRsZUFuaW1hdGVFbmQiLCJiaW5kIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsInRpbWUiLCJoYW5kbGVQb3NpdGlvbiIsIm5lZWRBZGp1c3QiLCJvbkxlYXZlZCIsIm9uRW50ZXJlZCIsIm9uRW50ZXJpbmciLCJvbkxlYXZpbmciLCJkaXNhYmxlU2Nyb2xsIiwib3ZlcmZsb3dZIiwicGFkZGluZ1JpZ2h0IiwiaW5kZXgiLCJzcGxpY2UiLCJhdXRvRm9jdXMiLCJfaGFzRm9jdXNlZCIsImZvY3VzTm9kZUxpc3QiLCJnZXRDb250ZW50IiwiZ2V0Q2hpbGROb2RlIiwiY2FuQ2xvc2VCeUVzYyIsIl9rZXlkb3duRXZlbnRzIiwiaGFuZGxlRG9jdW1lbnRLZXlEb3duIiwiY2FuQ2xvc2VCeU91dFNpZGVDbGljayIsIl9jbGlja0V2ZW50cyIsImhhbmRsZURvY3VtZW50Q2xpY2siLCJrZXlDb2RlIiwiaXNDdXJyZW50T3ZlcmxheSIsIm9uUmVxdWVzdENsb3NlIiwic2FmZU5vZGUiLCJzYWZlTm9kZXMiLCJ1bnNoaWZ0IiwiaGFuZGxlTWFza0NsaWNrIiwiY2FuQ2xvc2VCeU1hc2siLCJnZXRJbnN0YW5jZSIsInByb3BDaGlsZHJlbiIsImNvbnRhaW5lciIsImhhc01hc2siLCJiZWZvcmVQb3NpdGlvbiIsIm9uUG9zaXRpb24iLCJ3cmFwcGVyU3R5bGUiLCJwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb24iLCJzaG91bGRVcGRhdGVQb3NpdGlvbiIsImNhY2hlIiwid3JhcHBlckNsYXNzTmFtZSIsIm9uTWFza01vdXNlRW50ZXIiLCJvbk1hc2tNb3VzZUxlYXZlIiwic3RhdGVWaXNpYmxlIiwiY2hpbGQiLCJjaGlsZENsYXp6IiwiRXJyb3IiLCJjbG9uZUVsZW1lbnQiLCJ3cmFwcGVyQ2xhenoiLCJuZXdXcmFwcGVyU3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwiYXJyYXkiLCJWSUVXUE9SVCIsInNhdmVDaGlsZFJlZiIsImNvbnRhaW5lck5vZGUiLCJnZXRDb250YWluZXJOb2RlIiwiZm9yY2VVcGRhdGUiLCJ0YXJnZXROb2RlIiwicGxhY2UiLCJzZXRQb3NpdGlvbiIsIm5lZWRMaXN0ZW5SZXNpemUiLCJoYW5kbGVSZXNpemUiLCJyZXNpemVUaW1lb3V0IiwiY29udGVudE5vZGUiLCJnZXRUYXJnZXROb2RlIiwicmVzdWx0QWxpZ24iLCJwaW5FbGVtZW50IiwiYmFzZUVsZW1lbnQiLCJpc1J0bCIsInNwbGl0IiwiYXNzaWduIiwiY2hlY2tQcm9wVHlwZXMiLCJwcmludFdhcm5pbmciLCJ0ZXh0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsIngiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJudW1iZXIiLCJzeW1ib2wiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJzdGFjayIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsImxvY2F0aW9uIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm4iLCJ0ZXN0MyIsImZvckVhY2giLCJsZXR0ZXIiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJlbXB0eUZ1bmN0aW9uIiwic2hpbSIsImdldFNoaW0iLCJnZXREaXNwbGF5TmFtZSIsImdsb2JhbExvY2FsZXMiLCJjdXJyZW50R2xvYmFsTGFuZ3VhZ2UiLCJjdXJyZW50R2xvYmFsTG9jYWxlIiwiY3VycmVudEdsb2JhbFJ0bCIsImxvY2FsZXMiLCJsYW5ndWFnZSIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRTdGF0ZSIsIkNvbmZpZ2VkQ29tcG9uZW50IiwiX2dldEluc3RhbmNlIiwiX2RlcHJlY2F0ZWQiLCJfaW5zdGFuY2UiLCJmaWVsZCIsImRlcHJlY2F0ZWQiLCJjb250ZXh0UHJvcHMiLCJuZXdDb250ZXh0UHJvcHMiLCJyZWR1Y2UiLCJuZXdPdGhlcnMiLCJ0cmFuc2Zvcm0iLCJSRUFDVF9TVEFUSUNTIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwiS05PV05fU1RBVElDUyIsImNhbGxlciIsImNhbGxlZSIsImFyaXR5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50IiwiZGVzY3JpcHRvciIsIm9uY2UiLCJldmVudE5hbWUiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX2ZuIiwicHJvbWlzZUNhbGwiLCJmbnMiLCJjaGFpbmVkRnVuY3Rpb24iLCJqIiwiY3R4IiwibnMiLCJmbk5hbWUiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImNhdGNoIiwiaW5zdGVhZCIsImNvbXBvbmVudCIsIm1zZyIsImFuaW1hdGlvbkVuZEV2ZW50TmFtZXMiLCJXZWJraXRBbmltYXRpb24iLCJPQW5pbWF0aW9uIiwidHJhbnNpdGlvbkV2ZW50TmFtZXMiLCJXZWJraXRUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiX3N1cHBvcnRFbmQiLCJuYW1lcyIsImVsIiwiX3N1cHBvcnRDU1MiLCJmbGV4IiwiY2xlYXJMYXN0Rm9jdXNOb2RlIiwibGltaXRUYWJSYW5nZSIsIl9pc1Zpc2libGUiLCJ2aXNpYmlsaXR5IiwicGFyZW50Tm9kZSIsIl9pc0ZvY3VzYWJsZSIsIm5vZGVOYW1lIiwidGFiSW5kZXgiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImhhc1RhYkluZGV4IiwiaXNOYU4iLCJkaXNhYmxlZCIsInJlcyIsIm5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsIm1ldGhvZCIsImxhc3RGb2N1c0VsZW1lbnQiLCJhY3RpdmVFbGVtZW50IiwidGFiTm9kZUxpc3QiLCJtYXhJbmRleCIsInRhcmdldEluZGV4Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVzdGFtcCIsIm5vdyIsIm1hcEtleXMiLCJmbiIsIm5ld0tleSIsInJlcGxhY2VLZXkiLCJwMSIsInAyIiwidHJhbnNmb3JtQ29udGV4dCIsIl9yb290IiwiX3N0b3JlIiwiTWFwIiwiZW1wdHkiLCJoYXMiLCJkZWZhdWx0VmFsdWUiLCJzZXQiLCJ1cGRhdGUiLCJkZWxldGUiLCJsb2NhbHMiLCJob3QiLCJhY2NlcHQiLCJuZXdDb250ZW50IiwiZGlzcG9zZSIsImNzcyIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJjdXJyZW50RGlyIiwicGF0aG5hbWUiLCJmaXhlZENzcyIsImZ1bGxNYXRjaCIsIm9yaWdVcmwiLCJ1bnF1b3RlZE9yaWdVcmwiLCJvIiwibmV3VXJsIiwiQmFsbG9vbiIsIlRvb2x0aXAiLCJJbm5lciIsImFsaWdubWVudCIsIm9uQ2xvc2VDbGljayIsIm9uVmlzaWJsZUNoYW5nZSIsIm5ld09uVmlzaWJsZUNoYW5nZSIsInJlYXNvbiIsImRlZmF1bHRWaXNpYmxlIiwiX29uQ2xvc2UiLCJfb25Qb3NpdGlvbiIsIl9vblZpc2libGVDaGFuZ2UiLCJfY29udGVudElkIiwidHJpZ2dlciIsIm5ld0FsaWduIiwicmVzQWxpZ24iLCJhbGlnbktleSIsInRyaWdnZXJUeXBlIiwiZGVsYXkiLCJzYWZlSWQiLCJvbkNsaWNrIiwib25Ib3ZlciIsInBvcHVwQ29udGFpbmVyIiwicG9wdXBTdHlsZSIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBQcm9wcyIsIl9vZmZzZXQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJfc3R5bGUiLCJ0cmlnZ2VyUHJvcHMiLCJuZXdUcmlnZ2VyIiwiYWxsT3ZlcmxheXMiLCJvdmVybGF5IiwiZ2V0UGFnZVgiLCJzY3JvbGxMZWZ0IiwiZ2V0UGFnZVkiLCJzY3JvbGxUb3AiLCJfZ2V0RWxlbWVudFJlY3QiLCJlbGVtIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIl9nZXRWaWV3cG9ydFNpemUiLCJleHBlY3RlZEFsaWduIiwiX2dldEV4cGVjdGVkQWxpZ24iLCJpc1BpbkZpeGVkIiwiaXNCYXNlRml4ZWQiLCJmaXJzdFBvc2l0aW9uUmVzdWx0IiwicGluRWxlbWVudFBvaW50cyIsIl9ub3JtYWxpemVQb3NpdGlvbiIsImJhc2VFbGVtZW50UG9pbnRzIiwicGluRWxlbWVudFBhcmVudE9mZnNldCIsIl9nZXRQYXJlbnRPZmZzZXQiLCJiYXNlRWxlbWVudE9mZnNldCIsIl9nZXRMZWZ0VG9wIiwiX3NldFBpbkVsZW1lbnRQb3N0aW9uIiwiX2lzSW5WaWV3cG9ydCIsImluVmlld3BvcnRMZWZ0IiwiX21ha2VFbGVtZW50SW5WaWV3cG9ydCIsImluVmlld3BvcnRUb3AiLCJwYXJlbnQiLCJfZ2V0RWxlbWVudE9mZnNldCIsImRvY0VsZW1lbnQiLCJNYXRoIiwibWF4IiwicG9pbnRzIiwiX25vcm1hbGl6ZUVsZW1lbnQiLCJfbm9ybWFsaXplWFkiLCJfeHlDb252ZXJ0ZXIiLCJtIiwiZCIsImlzVmlld3BvcnQiLCJkb2NDbGllbnRMZWZ0IiwiY2xpZW50TGVmdCIsImRvY0NsaWVudFRvcCIsImNsaWVudFRvcCIsIl9yZXBsYWNlQWxpZ25EaXIiLCJjIiwicmVnRXhwIiwidmlld3BvcnRTaXplIiwiZWxlbWVudFJlY3QiLCJwb3N0aW9uIiwib2Zmc2V0UGFyZW50V2lkdGgiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiaGFuZGxlVHJpZ2dlckNsaWNrIiwiY2FuQ2xvc2VCeVRyaWdnZXIiLCJoYW5kbGVUcmlnZ2VyS2V5RG93biIsImhhbmRsZVRyaWdnZXJNb3VzZUVudGVyIiwiX21vdXNlTm90Rmlyc3RPbk1hc2siLCJfaGlkZVRpbWVyIiwiX3Nob3dUaW1lciIsImhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlIiwiaGFuZGxlVHJpZ2dlckZvY3VzIiwiaGFuZGxlVHJpZ2dlckJsdXIiLCJfaXNGb3J3YXJkQ29udGVudCIsImhhbmRsZUNvbnRlbnRNb3VzZURvd24iLCJoYW5kbGVDb250ZW50TW91c2VFbnRlciIsImhhbmRsZUNvbnRlbnRNb3VzZUxlYXZlIiwiaGFuZGxlTWFza01vdXNlRW50ZXIiLCJoYW5kbGVNYXNrTW91c2VMZWF2ZSIsImhhbmRsZVJlcXVlc3RDbG9zZSIsInJlbmRlclRyaWdnZXIiLCJ0cmlnZ2VyVHlwZXMiLCJvbktleURvd24iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkZvY3VzIiwib25CbHVyIiwicmVuZGVyQ29udGVudCIsIm9uTW91c2VEb3duIiwicmVuZGVyUG9ydGFsIiwiZm9sbG93VHJpZ2dlciIsImZpbmRUcmlnZ2VyTm9kZSIsIkJ1dHRvbiIsIkdyb3VwIiwiQnV0dG9uR3JvdXAiLCJuZXdUeXBlIiwiZ2hvc3QiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwibm9ybWFsIiwiZGFyayIsImxpZ2h0IiwibWFwSWNvblNpemUiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwib25Nb3VzZVVwIiwiYnV0dG9uIiwiYmx1ciIsImJ1dHRvblJlZkhhbmRsZXIiLCJodG1sVHlwZSIsImxvYWRpbmciLCJpY29uU2l6ZSIsImdob3N0VHlwZSIsImJ0bkNscyIsImNvdW50IiwiY2xvbmVkQ2hpbGRyZW4iLCJpY29uQ2xzIiwiVGFnTmFtZSIsInRhZ0F0dHJzIiwiaHJlZiIsImdyb3VwQ2xzIiwiY2xvbmVDaGlsZHJlbiIsImRlZmF1bHRUcmlnZ2VyIiwibWFyZ2luIiwiRGVtbyIsIlJlYWN0RE9NIiwiY29tcG9uZW50RGVzYyIsImNvbXBvbmVudEJvZHkiLCJyZWxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw4Qjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQU9BLElBQUlBLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxNQUFJQyxxQkFBc0IsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUN4QkEsT0FBT0MsR0FEaUIsSUFFeEJELE9BQU9DLEdBQVAsQ0FBVyxlQUFYLENBRnVCLElBR3ZCLE1BSEY7O0FBS0EsTUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxNQUFULEVBQWlCO0FBQ3BDLFdBQU8sUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixJQUNMQSxXQUFXLElBRE4sSUFFTEEsT0FBT0MsUUFBUCxLQUFvQkwsa0JBRnRCO0FBR0QsR0FKRDs7QUFNQTtBQUNBO0FBQ0EsTUFBSU0sc0JBQXNCLElBQTFCO0FBQ0FDLFNBQU9DLE9BQVAsR0FBaUJDLG1CQUFPQSxDQUFDLEVBQVIsRUFBcUNOLGNBQXJDLEVBQXFERyxtQkFBckQsQ0FBakI7QUFDRCxDQWhCRCxNQWdCTztBQUNMO0FBQ0E7QUFDQUMsU0FBT0MsT0FBUCxHQUFpQkMsbUJBQU9BLENBQUMsRUFBUixHQUFqQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7O0lBQVlDLEk7O0FBQ1o7O0lBQVlDLEk7O0FBQ1o7O0lBQVlDLE87O0FBQ1o7O0lBQVlDLEs7O0FBQ1o7O0lBQVlDLEk7O0FBQ1o7O0lBQVlDLE87O0FBQ1o7O0lBQVlDLE87O0FBQ1o7O0lBQVlDLFE7O0FBQ1o7O0lBQVlDLE07O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFF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QyxFQUFwQyxvQkFBdkI7QUFDQSxJQUFNM0IsVUFBVSxvQkFBQyxTQUFELFdBQVEsV0FBUixZQUE2QixPQUFPLEVBQUMyQixRQUFyQyxLQUFvQyxFQUFwQyxvQkFBaEI7O0FBR0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsV0FDVCw2QkFBSyxXQUFMLGVBQ0ksb0JBQUMsVUFBRCxXQUFVLFNBQVYsZ0JBQW1DLFVBQW5DLG1CQURKLEVBSUksb0JBQUMsVUFBRCxXQUFTLE1BQVQsV0FBd0IsU0FBeEIsU0FBMkMsYUFBM0MscUJBSkosQ0FEUztBQUFiOztBQVdBQyxnQkFBZ0IsMEJBQWhCQSxJQUFnQixDQUFoQkE7O0FBR0E7QUFDQSxJQUFNQyxnQkFBZ0J2cUIsdUJBQXRCLGlCQUFzQkEsQ0FBdEI7QUFDQXVxQjtBQUNBLElBQU1DLGdCQUFnQnhxQix1QkFBdEIsaUJBQXNCQSxDQUF0QjtBQUNBd3FCLDBCQUEwQiwrOUVBQTFCQSxHQUEwQixDQUExQkE7O0FBd0JBLElBQUk3MEIsSUFBSixFQUFnQjtBQUNkQTs7QUFFQSxRQUFNODBCLFlBQVl6cUIsdUJBQWxCLHNCQUFrQkEsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDMUgsT0FBTCxxQkFBaUM7QUFDL0IzQyxvQ0FBNEIsa0JBQVU7QUFDcEMyQztBQUNBLGdCQUFJMlMsV0FBSixTQUF3QjtBQUN0QndmO0FBREYsbUJBRU8sSUFBSXhmLFdBQUosUUFBdUI7QUFDNUJ3ZjtBQUNEO0FBTkg5MEI7QUFRRDtBQUNGLEMiLCJmaWxlIjoiL1VzZXJzL3poYW9ndW95YW4vZ2l0aHViL3B1Yi9kb2NzL2JhbGxvb24vZGVtby9iYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LlJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBfZG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCAqIGFzIF9lbnYgZnJvbSAnLi9lbnYnO1xuaW1wb3J0ICogYXMgX2V2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBfZnVuYyBmcm9tICcuL2Z1bmMnO1xuaW1wb3J0ICogYXMgX2xvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgKiBhcyBfb2JqZWN0IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCAqIGFzIF9zdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0ICogYXMgX3N1cHBvcnQgZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCAqIGFzIF9mb2N1cyBmcm9tICcuL2ZvY3VzJztcbmltcG9ydCBfZ3VpZCBmcm9tICcuL2d1aWQnO1xuaW1wb3J0IF9LRVlDT0RFIGZyb20gJy4va2V5Y29kZSc7XG5cbmV4cG9ydCBjb25zdCBkb20gPSBfZG9tO1xuZXhwb3J0IGNvbnN0IGVudiA9IF9lbnY7XG5leHBvcnQgY29uc3QgZXZlbnRzID0gX2V2ZW50cztcbmV4cG9ydCBjb25zdCBmdW5jID0gX2Z1bmM7XG5leHBvcnQgY29uc3QgbG9nID0gX2xvZztcbmV4cG9ydCBjb25zdCBvYmogPSBfb2JqZWN0O1xuZXhwb3J0IGNvbnN0IHN0ciA9IF9zdHJpbmc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydCA9IF9zdXBwb3J0O1xuZXhwb3J0IGNvbnN0IGZvY3VzID0gX2ZvY3VzO1xuZXhwb3J0IGNvbnN0IGd1aWQgPSBfZ3VpZDtcbmV4cG9ydCBjb25zdCBLRVlDT0RFID0gX0tFWUNPREU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbmRleC5qcyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fY2xhc3NuYW1lc0AyLjIuNkBjbGFzc25hbWVzL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2V0Q29udGV4dFByb3BzIGZyb20gJy4vZ2V0LWNvbnRleHQtcHJvcHMnO1xuaW1wb3J0IHtcbiAgICBjb25maWcsXG4gICAgaW5pdExvY2FsZXMsXG4gICAgc2V0TGFuZ3VhZ2UsXG4gICAgc2V0TG9jYWxlLFxuICAgIHNldERpcmVjdGlvbixcbiAgICBnZXRMb2NhbGUsXG4gICAgZ2V0TGFuZ3VhZ2UsXG4gICAgZ2V0RGlyZWN0aW9uXG59IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBDb25zdW1lciBmcm9tICcuL2NvbnN1bWVyJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlJztcblxuY29uc3QgY2hpbGRDb250ZXh0Q2FjaGUgPSBuZXcgQ2FjaGUoKTtcblxuLyoqXG4gKiBDb25maWdQcm92aWRlclxuICogQHByb3BzRXh0ZW5kcyBmYWxzZVxuICovXG5jbGFzcyBDb25maWdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagt+W8j+exu+WQjeeahOWTgeeJjOWJjee8gFxuICAgICAgICAgKi9cbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog5Zu96ZmF5YyW5paH5qGI5a+56LGh77yM5bGe5oCn5Li657uE5Lu255qEIGRpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK8gUHVyZSBSZW5kZXIg5qih5byP77yM5Lya5o+Q6auY5oCn6IO977yM5L2G5piv5Lmf5Lya5bim5p2l5Ymv5L2c55SoXG4gICAgICAgICAqL1xuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuWcqOW8gOWPkeaooeW8j+S4i+aYvuekuue7hOS7tuWxnuaAp+iiq+W6n+W8g+eahCB3YXJuaW5nIOaPkOekulxuICAgICAgICAgKi9cbiAgICAgICAgd2FybmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK8gcnRsIOaooeW8j1xuICAgICAgICAgKi9cbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe7hOS7tuagkVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHdhcm5pbmc6IHRydWVcbiAgICB9O1xuXG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICBuZXh0UHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBuZXh0TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBuZXh0UHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5leHRSdGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBuZXh0V2FybmluZzogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Lyg5YWl57uE5Lu277yM55Sf5oiQ5Y+XIENvbmZpZ1Byb3ZpZGVyIOaOp+WItueahCBIT0Mg57uE5Lu2XG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IENvbXBvbmVudCDnu4Tku7bnsbtcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDlj6/pgInpoblcbiAgICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fSBIT0NcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZmlnID0gKENvbXBvbmVudCwgb3B0aW9ucykgPT4ge1xuICAgICAgICByZXR1cm4gY29uZmlnKENvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOS8oOWFpee7hOS7tueahCBwcm9wcyDlkowgZGlzcGxheU5hbWXvvIzlvpfliLDlkowgY2hpbGRDb250ZXh0IOiuoeeul+i/h+eahOWMheWQq+aciSBwcmVpZngvbG9jYWxlL3B1cmUg55qE5a+56LGh77yM5LiA6Iis55So5LqO6YCa6L+H6Z2Z5oCB5pa55rOV55Sf5oiQ6ISx56a757uE5Lu25qCR55qE57uE5Lu2XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOe7hOS7tueahCBwcm9wc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXNwbGF5TmFtZSDnu4Tku7bnmoQgZGlzcGxheU5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDmlrDnmoQgY29udGV4dCBwcm9wc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb250ZXh0UHJvcHMgPSAocHJvcHMsIGRpc3BsYXlOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0UHJvcHMocHJvcHMsIGNoaWxkQ29udGV4dENhY2hlLnJvb3QoKSB8fCB7fSwgZGlzcGxheU5hbWUpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW5pdExvY2FsZXMgPSBpbml0TG9jYWxlcztcbiAgICBzdGF0aWMgc2V0TGFuZ3VhZ2UgPSBzZXRMYW5ndWFnZTtcbiAgICBzdGF0aWMgc2V0TG9jYWxlID0gc2V0TG9jYWxlO1xuICAgIHN0YXRpYyBzZXREaXJlY3Rpb24gPSBzZXREaXJlY3Rpb247XG4gICAgc3RhdGljIGdldExhbmd1YWdlID0gZ2V0TGFuZ3VhZ2U7XG4gICAgc3RhdGljIGdldExvY2FsZSA9IGdldExvY2FsZTtcbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uO1xuICAgIHN0YXRpYyBDb25zdW1lciA9IENvbnN1bWVyO1xuXG4gICAgc3RhdGljIGdldENvbnRleHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmV4dFByZWZpeCwgbmV4dExvY2FsZSwgbmV4dFB1cmUsIG5leHRSdGwsIG5leHRXYXJuaW5nIH0gPSBjaGlsZENvbnRleHRDYWNoZS5yb290KCkgfHwge307XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZpeDogbmV4dFByZWZpeCxcbiAgICAgICAgICAgIGxvY2FsZTogbmV4dExvY2FsZSxcbiAgICAgICAgICAgIHB1cmU6IG5leHRQdXJlLFxuICAgICAgICAgICAgcnRsOiBuZXh0UnRsLFxuICAgICAgICAgICAgd2FybmluZzogbmV4dFdhcm5pbmdcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgY2hpbGRDb250ZXh0Q2FjaGUuYWRkKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGNoaWxkQ29udGV4dENhY2hlLmdldCh0aGlzLCB7fSksIHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgbG9jYWxlLCBwdXJlLCB3YXJuaW5nLCBydGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHRQcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIG5leHRMb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICAgIG5leHRQdXJlOiBwdXJlLFxuICAgICAgICAgICAgbmV4dFJ0bDogcnRsLFxuICAgICAgICAgICAgbmV4dFdhcm5pbmc6IHdhcm5pbmdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0TW9tZW50TG9jYWxlKHRoaXMucHJvcHMubG9jYWxlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhbGUgIT09IG5leHRQcm9wcy5sb2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TW9tZW50TG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjaGlsZENvbnRleHRDYWNoZS5hZGQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgY2hpbGRDb250ZXh0Q2FjaGUuZ2V0KHRoaXMsIHt9KSwgdGhpcy5nZXRDaGlsZENvbnRleHQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2hpbGRDb250ZXh0Q2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vbWVudExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgbGV0IG1vbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnQgJiYgbG9jYWxlKSB7XG4gICAgICAgICAgICBtb21lbnQubG9jYWxlKGxvY2FsZS5tb21lbnRMb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9pbmRleC5qc3giLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5SZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiLyoqXG4gKiDojrflj5blr7nosaHnmoTnsbvlnotcbiAqIEBwYXJhbSAgeyp9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICpcbiAqIEBleGFtcGxlXG4gKiB0eXBlT2YoW10pID09PSAnQXJyYXknXG4gKiB0eXBlT2YoKSA9PT0gJ1VuZGVmaW5lZCdcbiAqIHR5cGVPZigxKSA9PT0gJ051bWJlcidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xdL2csICcnKTtcbn1cblxuLyoqXG4gKiDliKTmlq3mmK/lkKbmmK/mlbDnu4TmiJbnsbvmlbDnu4Tlr7nosaFcbiAqIEBwYXJhbSAgeyp9ICBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqIGlzQXJyYXlMaWtlKFtdKSA9PT0gdHJ1ZVxuICogaXNBcnJheUxpa2UoYXJndW1lbnRzKSA9PT0gdHJ1ZVxuICogaXNBcnJheUxpa2UodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlIChvYmopIHtcbiAgICBjb25zdCBsZW5ndGggPSAhIW9iaiAmJiAnbGVuZ3RoJyBpbiBvYmogJiYgb2JqLmxlbmd0aDtcbiAgICBjb25zdCB0eXBlID0gdHlwZU9mKG9iaik7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ0FycmF5JyB8fCBsZW5ndGggPT09IDAgfHxcbiAgICAgICAgKHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iaik7XG59XG5cbi8qKlxuICog5Yik5pat5a+56LGh5piv5ZCm5piv5LiA5LiqcHJvbWlzZe+8jOWNs+aYr+WQpuWPr+S7peeUqC50aGVuXG4gKiBAcGFyYW0gIHsqfSAgb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcbiAgICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiDmmK/lkKbmmK/kuIDkuKrnuq/lh4DnmoTlr7nosaFcbiAqIEBwYXJhbSAgeyp9ICBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcmVmZXJlbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gICAgaWYgKHR5cGVPZihvYmopICE9PSAnT2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcblxuICAgIGlmICh0eXBlb2YgY3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuXG4gICAgaWYgKHR5cGVPZihwcm90KSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghcHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDlr7nosaHmtYXmr5TovoNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqQVxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpCXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIFtjb21wYXJlXSDmiYvliqjosIPnlKjmlrnms5Xmr5TovoNcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAg5a+56LGh5rWF5q+U6L6D5piv5ZCm55u4562JXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5zaGFsbG93RXF1YWwoe2E6IDEwMH0sIHthOiAxMDB9KTsgLy8gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsIChvYmpBLCBvYmpCLCBjb21wYXJlKSB7XG4gICAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8g5YW25Lit5LiA5Liq5LiN5pivb2JqZWN077yM5YiZ5LiN55u4562JXG4gICAgaWYgKCFvYmpBIHx8ICFvYmpCIHx8ICh0eXBlb2Ygb2JqQSArIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0b2JqZWN0JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGtleUEgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgICBjb25zdCBrZXlCID0gT2JqZWN0LmtleXMob2JqQik7XG4gICAgY29uc3QgbGVuID0ga2V5QS5sZW5ndGg7XG5cbiAgICAvLyBrZXkg5pWw6YeP5LiN5LiA6Ie05YiZ5LiN55u4562JXG4gICAgaWYgKGxlbiAhPT0ga2V5Qi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gdHlwZW9mIGNvbXBhcmUgPT09ICdmdW5jdGlvbic7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleUFbaV07XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsQSA9IG9iakFba2V5XTtcbiAgICAgICAgY29uc3QgdmFsQiA9IG9iakJba2V5XTtcblxuICAgICAgICBjb25zdCByZXQgPSBoYXNDYWxsYmFjayA/IGNvbXBhcmUodmFsQSwgdmFsQiwga2V5KSA6IHZvaWQgMDtcblxuICAgICAgICBpZiAocmV0ID09PSBmYWxzZSB8fCByZXQgPT09IHZvaWQgMCAmJiB2YWxBICE9PSB2YWxCKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDpgY3ljoblr7nosaHmiJbmlbDnu4TvvIzmiJbogIXnsbvmlbDnu4TvvIzkvovlpoJSZWFjdOS4reeahGNoaWxkcmVu5a+56LGh44CBYXJndW1lbnRz562JXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9ICAgb2JqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgZm4obiwgaSkgb3IgZm4odmFsLCBrZXkpXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgW2RpcmVjdGlvbiA9IDFdIOaYr+WQpuWAkuW6j+mBjeWOhu+8jOWPquWvueaVsOe7hOacieaViFxuICogQHJldHVybiB7T2JqZWN0fEFycmF5fVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyDpgY3ljobmlbDnu4RcbiAqIG9iamVjdC5lYWNoKFsxMDAsIDIwMCwgMzAwXSwgKG4sIGkpID0+IGNvbnNvbGUubG9nKG4sIGkpKTtcbiAqIC8vIOmBjeWOhmpzb27lr7nosaFcbiAqIG9iamVjdC5lYWNoKHthOiAxMDAsIGI6IDIwMH0sICh2YWx1ZSwga2V5KSA9PiBjb25zb2xlLmxvZyhrZXksIHZhbHVlKSk7XG4gKiAvLyDpgY3ljoZSZWFjdOWtkOiKgueCuVxuICogb2JqZWN0LmVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4gY29uc29sZS5sb2coY2hpbGQpKTtcbiAqIC8vIOmBjeWOhmFyZ3VtZW50c1xuICogb2JqZWN0LmVhY2goYXJndW1lbnRzLCAoYXJnLCBpKSA9PiBjb25zb2xlLmxvZyhhcmcpKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhY2ggKG9iaiwgY2FsbGJhY2ssIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHJldmVyc2VkID0gZGlyZWN0aW9uID09PSAtMTtcbiAgICBjb25zdCBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGxldCB2YWx1ZSxcbiAgICAgICAgaSA9IHJldmVyc2VkID8gbGVuZ3RoIC0gMSA6IDA7XG5cbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aCAmJiBpID49IDA7IHJldmVyc2VkID8gaS0tIDogaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmpbaV0sIG9ialtpXSwgaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbi8vIEBwcml2YXRlIOWIpOaWrWtleeaYr+WQpuWcqOaVsOe7hOaIluWvueixoeS4rVxuY29uc3QgX2lzSW5PYmogPSAoa2V5LCBvYmosIGlzQXJyYXkpID0+IGlzQXJyYXkgPyAob2JqLmluZGV4T2Yoa2V5KSA+IC0xKSAgOiAoa2V5IGluIG9iaik7XG5cbi8qKlxuICog6L+H5ruk5Ye65YW25a6D5bGe5oCnXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGhvbGRQcm9wcyDov4fmu6TnmoTlj4Lnhaflr7nosaHvvIzmnIDnu4jnmoTnu5Pmnpzlj6rkv53nlZnkuI3lnKjlj4Lnhaflr7nosaHkuK3nmoRrZXlcbiAqIEBwYXJhbSAge09iamVjdH0gcHJvcHMgICAgIOiiq+i/h+a7pOeahOWvueixoVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgb3RoZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5waWNrT3RoZXJzKEZvb0NvbXBvbmVudC5wcm9wVHlwZXMsIHRoaXMucHJvcHMpO1xuICogb2JqZWN0LnBpY2tPdGhlcnMoWydjbGFzc05hbWUnLCAnb25DaGFuZ2UnXSwgdGhpcy5wcm9wcyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaWNrT3RoZXJzIChob2xkUHJvcHMsIHByb3BzKSB7XG4gICAgY29uc3Qgb3RoZXJzID0ge307XG4gICAgY29uc3QgaXNBcnJheSA9IHR5cGVPZihob2xkUHJvcHMpID09PSAnQXJyYXknO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKCFfaXNJbk9iaihrZXksIGhvbGRQcm9wcywgaXNBcnJheSkpIHtcbiAgICAgICAgICAgIG90aGVyc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdGhlcnM7XG59XG5cbi8qKlxuICog6L+H5ruk5Ye65bimcHJlZml455qE5bGe5oCnXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhvbGRQcm9wcyDov4fmu6TnmoTlj4Lnhaflr7nosaHvvIzmnIDnu4jnmoTnu5Pmnpzlj6rkv53nlZnkuI3lnKjlj4Lnhaflr7nosaHkuK3nmoRrZXlcbiAqIEBwYXJhbSAge3N0cmluZ30gcHJlZml4ICAgIOWMheWQq+eahOWtl+espuS4slxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgb3RoZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIG9iamVjdC5waWNrQXR0cnNXaXRoKEZvb0NvbXBvbmVudC5wcm9wVHlwZXMsICdkYXRhLScpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja0F0dHJzV2l0aCAoaG9sZFByb3BzLCBwcmVmaXgpIHtcbiAgICBjb25zdCBvdGhlcnMgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGhvbGRQcm9wcykge1xuICAgICAgICBpZiAoa2V5Lm1hdGNoKHByZWZpeCkpIHtcbiAgICAgICAgICAgIG90aGVyc1trZXldID0gaG9sZFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3RoZXJzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvb2JqZWN0LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICog5bC65a+4IOWfuuehgOWwuuWvuFxcbiAqIOWRveWQjeiDveWcqOivreS5ieeahOWJjeaPkOS4i+eugOWNleWwseWwvemHj+eugOWNlSwg6L+Z6YeM5Y+v5Lul5pivIHNpemUtMngsIHNwYWNlLTJ4LCBzaXplLWJhc2UgLi4uXFxuICog5LiN6L+H5Y+v5Lul5Zyo6K+t5LmJ55qE5YmN5o+Q5LiL5YGa55qE5pu057K+566A5LiA5LqbLCDkuo7mmK/nlKjkuoZzMiwgczHnrYlcXG4gKiDlj6/nlKjlj5jph486IGAkczEgLSAkczhgXFxuICogQGV4YW1wbGUgc2NzcyAtIOS9v+eUqFxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiAkczEgIWRlZmF1bHQ7XFxuICogICB9XFxuICpcXG4gKiBAZXhhbXBsZSBjc3MgLSBDU1Mg6L6T5Ye6XFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6IDRweCAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKi9cXG4ubmV4dC1pY29uW2Rpcj1cXFwicnRsXFxcIl06OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5leHRJY29uO1xcbiAgc3JjOiB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIuZW90PyNpZWZpeFxcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzUxNTc3MV9lbWNuczUwNTR4M3doZnIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTE1NzcxX2VtY25zNTA1NHgzd2hmci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLy9hdC5hbGljZG4uY29tL3QvZm9udF81MTU3NzFfZW1jbnM1MDU0eDN3aGZyLnN2ZyNOZXh0SWNvblxcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7IH1cXG5cXG4ubmV4dC1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBOZXh0SWNvbjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxcbiAgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm5leHQtaWNvbi1zbWlsZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUZcXFwiOyB9XFxuICAubmV4dC1pY29uLWNyeTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NURcXFwiOyB9XFxuICAubmV4dC1pY29uLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi13YXJuaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcHJvbXB0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwQ1xcXCI7IH1cXG4gIC5uZXh0LWljb24tZXJyb3I6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjBEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1oZWxwOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY3M1xcXCI7IH1cXG4gIC5uZXh0LWljb24tY2xvY2s6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjIxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zdWNjZXNzLWZpbGxpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNBXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZWxldGUtZmlsbGluZzpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjNcXFwiOyB9XFxuICAubmV4dC1pY29uLWZhdm9yaXRlcy1maWxsaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tYWRkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NVxcXCI7IH1cXG4gIC5uZXh0LWljb24tbWludXM6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjAxXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy11cDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjVcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvd246YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjNEXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRFxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjE5XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hcnJvdy1kb3VibGUtbGVmdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NTlcXFwiOyB9XFxuICAubmV4dC1pY29uLWFycm93LWRvdWJsZS1yaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NUVcXFwiOyB9XFxuICAubmV4dC1pY29uLXN3aXRjaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2QjNcXFwiOyB9XFxuICAubmV4dC1pY29uLXNvcnRpbmc6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjM0XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1kZXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNjZW5kaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VsZWN0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzMlxcXCI7IH1cXG4gIC5uZXh0LWljb24tc2VtaS1zZWxlY3Q6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjMzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZWFyY2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjU2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1jbG9zZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjZcXFwiOyB9XFxuICAubmV4dC1pY29uLWVsbGlwc2lzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY1NFxcXCI7IH1cXG4gIC5uZXh0LWljb24tcGljdHVyZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MzFcXFwiOyB9XFxuICAubmV4dC1pY29uLWNhbGVuZGFyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwN1xcXCI7IH1cXG4gIC5uZXh0LWljb24tYXNoYmluOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzOVxcXCI7IH1cXG4gIC5uZXh0LWljb24tdXBsb2FkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTdFRVxcXCI7IH1cXG4gIC5uZXh0LWljb24tZG93bmxvYWQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjI4XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1zZXQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjgzXFxcIjsgfVxcbiAgLm5leHQtaWNvbi1lZGl0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYzQlxcXCI7IH1cXG4gIC5uZXh0LWljb24tcmVmcmVzaDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2NzdcXFwiOyB9XFxuICAubmV4dC1pY29uLWZpbHRlcjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXEU2MjdcXFwiOyB9XFxuICAubmV4dC1pY29uLWF0dGFjaG1lbnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjY1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hY2NvdW50OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7IH1cXG4gIC5uZXh0LWljb24tZW1haWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA1XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1hdG06YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxFNjA2XFxcIjsgfVxcbiAgLm5leHQtaWNvbi1sb2FkaW5nOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTY0NlxcXCI7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHM6YmVmb3JlIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XFxuICAubmV4dC1pY29uLm5leHQteHhzIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTRweDsgfVxcbiAgICAubmV4dC1pY29uLm5leHQteHhzOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4OyB9IH1cXG5cXG4ubmV4dC1pY29uLm5leHQteHM6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtc21hbGw6YmVmb3JlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4ubmV4dC1pY29uLm5leHQtbWVkaXVtOmJlZm9yZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LWxhcmdlOmJlZm9yZSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXhsOmJlZm9yZSB7XFxuICB3aWR0aDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLm5leHQtaWNvbi5uZXh0LXh4bDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5uZXh0LWljb24ubmV4dC14eHhsOmJlZm9yZSB7XFxuICB3aWR0aDogNjRweDtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9pY29uL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmROb2RlKHRhcmdldCwgcGFyYW0pIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0KHBhcmFtKTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGFyZ2V0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS91dGlscy9maW5kLW5vZGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtmdW5jLCBvYmp9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQge25vcm1hbE1hcCwgZWRnZU1hcH0gZnJvbSAnLi9hbGlnbk1hcCc7XG5cbi8qKlxuICogQ3JlYXRlZCBieSB4aWFjaGkgb24gMTcvMi8xMC5cbiAqL1xuXG5jb25zdCB7bm9vcH0gPSBmdW5jO1xuXG5jbGFzcyBCYWxsb29uSW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNUb29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcHVyZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgb25DbG9zZTogbm9vcCxcbiAgICAgICAgYWxpZ246ICdiJyxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIGFsaWduRWRnZTogZmFsc2UsXG4gICAgICAgIHB1cmU6IGZhbHNlXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3ByZWZpeCwgY2xvc2FibGUsIGNsYXNzTmFtZSwgc3R5bGUsIGlzVG9vbHRpcCwgYWxpZ24sIHR5cGUsIG9uQ2xvc2UsIGFsaWduRWRnZSwgY2hpbGRyZW4sIHJ0bCwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYWxpZ25NYXAgPSBhbGlnbkVkZ2UgPyBlZGdlTWFwIDogbm9ybWFsTWFwO1xuICAgICAgICBsZXQgX3ByZWZpeCA9IHByZWZpeDtcblxuICAgICAgICBpZiAoaXNUb29sdGlwKSB7XG4gICAgICAgICAgICBfcHJlZml4ID0gYCR7X3ByZWZpeH1iYWxsb29uLXRvb2x0aXBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3ByZWZpeCA9IGAke19wcmVmaXh9YmFsbG9vbmA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBbYCR7X3ByZWZpeH1gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS0ke3R5cGV9YF06IHR5cGUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tbWVkaXVtYF06IHRydWUsXG4gICAgICAgICAgICBbYCR7X3ByZWZpeH0tJHthbGlnbk1hcFthbGlnbl0uYXJyb3d9YF06IGFsaWduTWFwW2FsaWduXSxcbiAgICAgICAgICAgIFtgJHtfcHJlZml4fS1jbG9zYWJsZWBdOiBjbG9zYWJsZSxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHJvbGU9XCJ0b29sdGlwXCIgZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9IHsuLi5vYmoucGlja090aGVycyhPYmplY3Qua2V5cyhCYWxsb29uSW5uZXIucHJvcFR5cGVzKSwgb3RoZXJzKX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xvc2FibGUgP1xuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9e2Ake19wcmVmaXh9LWNsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgc2l6ZT1cInNtYWxsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+IDogbnVsbH1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvb25Jbm5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2lubmVyLmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSB4aWFjaGkgb24gMTcvMS8xNy5cbiAqL1xuXG5jb25zdCBub3JtYWxNYXAgPSB7XG4gICAgdDoge1xuICAgICAgICBhbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdiYyB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWxpZ246ICdjbCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnY3IgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICBiOiB7XG4gICAgICAgIGFsaWduOiAndGMgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsOiB7XG4gICAgICAgIGFsaWduOiAnY3IgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfSxcbiAgICB0bDoge1xuICAgICAgICBhbGlnbjogJ2JyIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMjAsIC0xMl1cbiAgICB9LFxuICAgIHRyOiB7XG4gICAgICAgIGFsaWduOiAnYmwgdGMnLFxuICAgICAgICBydGxBbGlnbjogJ2JyIHRjJyxcbiAgICAgICAgYXJyb3c6ICdib3R0b20tbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIG9mZnNldDogWy0yMCwgLTEyXVxuICAgIH0sXG4gICAgcnQ6IHtcbiAgICAgICAgYWxpZ246ICdibCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnYnIgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDIwXVxuICAgIH0sXG4gICAgcmI6IHtcbiAgICAgICAgYWxpZ246ICd0bCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIC0yMF1cbiAgICB9LFxuICAgIGJsOiB7XG4gICAgICAgIGFsaWduOiAndHIgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RsIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtcmlnaHQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFsyMCwgMTJdXG4gICAgfSxcbiAgICBicjoge1xuICAgICAgICBhbGlnbjogJ3RsIGJjJyxcbiAgICAgICAgcnRsQWxpZ246ICd0ciBiYycsXG4gICAgICAgIGFycm93OiAndG9wLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFstMjAsIDEyXVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgYWxpZ246ICdiciBjbCcsXG4gICAgICAgIHJ0bEFsaWduOiAnYmwgY3InLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LWJvdHRvbScsXG4gICAgICAgIHRyT3JpZ2luOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMjBdXG4gICAgfSxcbiAgICBsYjoge1xuICAgICAgICBhbGlnbjogJ3RyIGNsJyxcbiAgICAgICAgcnRsQWxpZ246ICd0bCBjcicsXG4gICAgICAgIGFycm93OiAncmlnaHQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbLTEyLCAtMjBdXG4gICAgfVxufTtcbmNvbnN0IGVkZ2VNYXAgPSB7XG4gICAgdDoge1xuICAgICAgICBhbGlnbjogJ2JjIHRjJyxcbiAgICAgICAgcnRsQWxpZ246ICdiYyB0YycsXG4gICAgICAgIGFycm93OiAnYm90dG9tJyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20nLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbScsXG4gICAgICAgIG9mZnNldDogWzAsIC0xMl1cbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWxpZ246ICdjbCBjcicsXG4gICAgICAgIHJ0bEFsaWduOiAnY3IgY2wnLFxuICAgICAgICBhcnJvdzogJ2xlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3JpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICBiOiB7XG4gICAgICAgIGFsaWduOiAndGMgYmMnLFxuICAgICAgICBydGxBbGlnbjogJ3RjIGJjJyxcbiAgICAgICAgYXJyb3c6ICd0b3AnLFxuICAgICAgICB0ck9yaWdpbjogJ3RvcCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMTJdXG4gICAgfSxcbiAgICBsOiB7XG4gICAgICAgIGFsaWduOiAnY3IgY2wnLFxuICAgICAgICBydGxBbGlnbjogJ2NsIGNyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAncmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2xlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfSxcbiAgICB0bDoge1xuICAgICAgICBhbGlnbjogJ2JsIHRsJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciB0cicsXG4gICAgICAgIGFycm93OiAnYm90dG9tLWxlZnQnLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFswLCAtMTJdXG4gICAgfSxcbiAgICB0cjoge1xuICAgICAgICBhbGlnbjogJ2JyIHRyJyxcbiAgICAgICAgcnRsQWxpZ246ICdibCB0bCcsXG4gICAgICAgIGFycm93OiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgdHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgLTEyXVxuICAgIH0sXG4gICAgcnQ6IHtcbiAgICAgICAgYWxpZ246ICd0bCB0cicsXG4gICAgICAgIHJ0bEFsaWduOiAndHIgdGwnLFxuICAgICAgICBhcnJvdzogJ2xlZnQtdG9wJyxcbiAgICAgICAgdHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgb2Zmc2V0OiBbMTIsIDBdXG4gICAgfSxcbiAgICByYjoge1xuICAgICAgICBhbGlnbjogJ2JsIGJyJyxcbiAgICAgICAgcnRsQWxpZ246ICdiciBibCcsXG4gICAgICAgIGFycm93OiAnbGVmdC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICdib3R0b20gcmlnaHQnLFxuICAgICAgICBvZmZzZXQ6IFsxMiwgMF1cbiAgICB9LFxuICAgIGJsOiB7XG4gICAgICAgIGFsaWduOiAndGwgYmwnLFxuICAgICAgICBydGxBbGlnbjogJ3RyIGJyJyxcbiAgICAgICAgYXJyb3c6ICd0b3AtbGVmdCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIGxlZnQnLFxuICAgICAgICBydGxUck9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgYnI6IHtcbiAgICAgICAgYWxpZ246ICd0ciBicicsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgYmwnLFxuICAgICAgICBhcnJvdzogJ3RvcC1yaWdodCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWzAsIDEyXVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgYWxpZ246ICd0ciB0bCcsXG4gICAgICAgIHJ0bEFsaWduOiAndGwgdHInLFxuICAgICAgICBhcnJvdzogJ3JpZ2h0LXRvcCcsXG4gICAgICAgIHRyT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgcnRsVHJPcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgICAgIG9mZnNldDogWy0xMiwgMF1cbiAgICB9LFxuICAgIGxiOiB7XG4gICAgICAgIGFsaWduOiAnYnIgYmwnLFxuICAgICAgICBydGxBbGlnbjogJ2JsIGJyJyxcbiAgICAgICAgYXJyb3c6ICdyaWdodC1ib3R0b20nLFxuICAgICAgICB0ck9yaWdpbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICAgIHJ0bFRyT3JpZ2luOiAnYm90dG9tIGxlZnQnLFxuICAgICAgICBvZmZzZXQ6IFstMTIsIDBdXG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBub3JtYWxNYXAsXG4gICAgZWRnZU1hcFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWxsb29uL2FsaWduTWFwLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dExlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgem9vbU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5Eb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRJblVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5VcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kSW5XaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IC4xOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kSW5XaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IC4xOyB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXRVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZE91dFVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcCAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3AgMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wIDA7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBleHBhbmRPdXREb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC42KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kT3V0RG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b20gMDtcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XFxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZXhwYW5kT3V0V2l0aEZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBleHBhbmRPdXRXaXRoRmFkZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG4uZmFkZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZUluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5mYWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFkZU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmZhZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi56b29tSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi56b29tT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmRJbkRvd247XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kT3V0VXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0VXA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjE1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluVXA7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kSW5VcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5leHBhbmRPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kT3V0RG93bjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1lbnRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmV4cGFuZC1lbnRlci1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDsgfVxcbiAgLmV4cGFuZC1lbnRlci1hY3RpdmUgPiAqIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXhwYW5kSW5XaXRoRmFkZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZEluV2l0aEZhZGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IFxcXCJmb3J3YXJkc1xcXCI7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWxlYXZlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZXhwYW5kLWxlYXZlLWFjdGl2ZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0OyB9XFxuICAuZXhwYW5kLWxlYXZlLWFjdGl2ZSA+ICoge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPdXRXaXRoRmFkZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZE91dFdpdGhGYWRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBcXFwiZm9yd2FyZHNcXFwiO1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9hbmltYXRlL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LW92ZXJsYXktd3JhcHBlciAubmV4dC1vdmVybGF5LWlubmVyIHtcXG4gIHotaW5kZXg6IDEwMDE7IH1cXG5cXG4ubmV4dC1vdmVybGF5LXdyYXBwZXIgLm5leHQtb3ZlcmxheS1iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4ubmV4dC1vdmVybGF5LXdyYXBwZXIub3BlbmVkIC5uZXh0LW92ZXJsYXktYmFja2Ryb3Age1xcbiAgb3BhY2l0eTogMC4yOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyPz9yZWYtLTItMSEuL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliPz9yZWYtLTItMiEuL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYiEuL3NyYy9vdmVybGF5L21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKipcXG4gKiDlsLrlr7gg5Z+656GA5bC65a+4XFxuICog5ZG95ZCN6IO95Zyo6K+t5LmJ55qE5YmN5o+Q5LiL566A5Y2V5bCx5bC96YeP566A5Y2VLCDov5nph4zlj6/ku6XmmK8gc2l6ZS0yeCwgc3BhY2UtMngsIHNpemUtYmFzZSAuLi5cXG4gKiDkuI3ov4flj6/ku6XlnKjor63kuYnnmoTliY3mj5DkuIvlgZrnmoTmm7Tnsr7nroDkuIDkupssIOS6juaYr+eUqOS6hnMyLCBzMeetiVxcbiAqIOWPr+eUqOWPmOmHjzogYCRzMSAtICRzOGBcXG4gKiBAZXhhbXBsZSBzY3NzIC0g5L2/55SoXFxuICogICAuZWxlbWVudCB7XFxuICogICAgIHBhZGRpbmc6ICRzMSAhZGVmYXVsdDtcXG4gKiAgIH1cXG4gKlxcbiAqIEBleGFtcGxlIGNzcyAtIENTUyDovpPlh7pcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogNHB4ICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqL1xcbi5uZXh0LWJhbGxvb24ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB6LWluZGV4OiAwO1xcbiAgLyogc2l6ZSAqL1xcbiAgLyog5bim5YWz6Zet5oyJ6ZKu55qE5Y+z5L6ncGFkZGluZ+WPmOWkpyAqLyB9XFxuICAubmV4dC1iYWxsb29uICosXFxuICAubmV4dC1iYWxsb29uICo6YmVmb3JlLFxcbiAgLm5leHQtYmFsbG9vbiAqOmFmdGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5uZXh0LWJhbGxvb24tcHJpbWFyeSB7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBib3JkZXItY29sb3I6ICM0NDk0Rjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIHJpZ2h0OiAxMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBjb2xvcjogIzk5OTk5OTsgfVxcbiAgICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeSAubmV4dC1iYWxsb29uLWNsb3NlIC5uZXh0LWljb24ge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDsgfVxcbiAgICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5IC5uZXh0LWJhbGxvb24tY2xvc2UgOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeTphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ5NEY5O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XFxuICAgICAgei1pbmRleDogLTE7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tcmlnaHQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICBsZWZ0OiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgbGVmdDogLTdweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0LWJvdHRvbTphZnRlciB7XFxuICAgICAgcmlnaHQ6IC03cHg7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgICByaWdodDogMTJweDtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uLW5vcm1hbCB7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBib3JkZXItY29sb3I6ICNEQ0RFRTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJvcmRlci13aWR0aDogMXB4OyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEycHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSAubmV4dC1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7IH1cXG4gICAgICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2UgLm5leHQtaWNvbjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4OyB9XFxuICAgICAgLm5leHQtYmFsbG9vbi1ub3JtYWwgLm5leHQtYmFsbG9vbi1jbG9zZSA6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWw6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RDREVFMztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIHotaW5kZXg6IC0xOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIHJpZ2h0OiAtN3B4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b206YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgICAgdG9wOiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgICAgdG9wOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgICAgYm90dG9tOiAxMnB4O1xcbiAgICAgIGxlZnQ6IC03cHg7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgIC5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTJweDtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgICByaWdodDogLTdweDtcXG4gICAgICBib3R0b206IDEycHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgICAubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgICB0b3A6IC03cHg7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gICAgLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5uZXh0LWJhbGxvb24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4OyB9XFxuICAubmV4dC1iYWxsb29uLWNsb3NhYmxlIHtcXG4gICAgcGFkZGluZzogMTZweCA0MHB4IDE2cHggMTZweDsgfVxcblxcbi5uZXh0LWJhbGxvb24tdG9vbHRpcCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHotaW5kZXg6IDA7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJvcmRlci1jb2xvcjogI0RDREVFMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC8qIHNpemUgKi8gfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwICosXFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKjpiZWZvcmUsXFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAgKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RFRTM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjc7XFxuICAgIHotaW5kZXg6IC0xOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgIHRvcDogY2FsYyg1MCUgKyAtN3B4KTtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtYm90dG9tOmFmdGVyIHtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBsZWZ0OiBjYWxjKDUwJSArIC03cHgpO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICB0b3A6IGNhbGMoNTAlICsgLTdweCk7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0LWJvdHRvbTphZnRlciB7XFxuICAgIGJvdHRvbTogMTJweDtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXAtcmlnaHQtdG9wOmFmdGVyIHtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgYm90dG9tOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLXRvcC1sZWZ0OmFmdGVyIHtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC10b3AtcmlnaHQ6YWZ0ZXIge1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIGJvdHRvbTogLTdweDtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1ib3R0b20tcmlnaHQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgYm90dG9tOiAtN3B4O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcC1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7IH1cXG5cXG4ubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgLyog5bim5YWz6Zet5oyJ6ZKu55qE5Y+z5L6ncGFkZGluZ+WPmOWkpyAqLyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkgLm5leHQtYmFsbG9vbi1jbG9zZSB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC10b3A6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1wcmltYXJ5Lm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLXRvcC1yaWdodDphZnRlciB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMnB4OyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXByaW1hcnkubmV4dC1iYWxsb29uLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tcHJpbWFyeS5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsIC5uZXh0LWJhbGxvb24tY2xvc2Uge1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICByaWdodDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1sZWZ0LXRvcDphZnRlciB7XFxuICAgIHJpZ2h0OiAtN3B4O1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tbGVmdC1ib3R0b206YWZ0ZXIge1xcbiAgICByaWdodDogLTdweDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLm5leHQtYmFsbG9vbltkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi1ub3JtYWwubmV4dC1iYWxsb29uLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IGluaGVyaXQ7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tcmlnaHQtYm90dG9tOmFmdGVyIHtcXG4gICAgbGVmdDogLTdweDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IGluaGVyaXQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi10b3AtbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDEycHg7IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tbm9ybWFsLm5leHQtYmFsbG9vbi1ib3R0b20tbGVmdDphZnRlciB7XFxuICAgIHJpZ2h0OiAxMnB4O1xcbiAgICBsZWZ0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLW5vcm1hbC5uZXh0LWJhbGxvb24tYm90dG9tLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb25bZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tY2xvc2FibGUge1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA0MHB4OyB9XFxuXFxuLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ge1xcbiAgLyogc2l6ZSAqLyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtdG9wOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWxlZnQtYm90dG9tOmFmdGVyIHtcXG4gICAgcmlnaHQ6IC03cHg7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yaWdodDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLXJpZ2h0LXRvcDphZnRlciB7XFxuICAgIGxlZnQ6IC03cHg7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0OyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1yaWdodC1ib3R0b206YWZ0ZXIge1xcbiAgICBsZWZ0OiAtN3B4O1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLWxlZnQ6YWZ0ZXIge1xcbiAgICByaWdodDogMTJweDtcXG4gICAgbGVmdDogYXV0bzsgfVxcbiAgLm5leHQtYmFsbG9vbi10b29sdGlwW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1iYWxsb29uLXRvb2x0aXAtdG9wLXJpZ2h0OmFmdGVyIHtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1sZWZ0OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDEycHg7XFxuICAgIGxlZnQ6IGF1dG87IH1cXG4gIC5uZXh0LWJhbGxvb24tdG9vbHRpcFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYmFsbG9vbi10b29sdGlwLWJvdHRvbS1yaWdodDphZnRlciB7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHJpZ2h0OiBhdXRvOyB9XFxuICAubmV4dC1iYWxsb29uLXRvb2x0aXBbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJhbGxvb24tdG9vbHRpcC1tZWRpdW0ge1xcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2JhbGxvb24vbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBDb25maWdQcm92aWRlciBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCBHYXRld2F5IGZyb20gJy4vZ2F0ZXdheSc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XG5cbk92ZXJsYXkuR2F0ZXdheSA9IEdhdGV3YXk7XG5PdmVybGF5LlBvc2l0aW9uID0gUG9zaXRpb247XG5PdmVybGF5LlBvcHVwID0gQ29uZmlnUHJvdmlkZXIuY29uZmlnKFBvcHVwLCB7XG4gICAgZXhwb3J0TmFtZXM6IFsnb3ZlcmxheSddXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKE92ZXJsYXksIHtcbiAgICBleHBvcnROYW1lczogWydnZXRDb250ZW50JywgJ2dldENvbnRlbnROb2RlJ11cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL292ZXJsYXkvaW5kZXguanN4IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbi9zdHlsZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcbiAqIOWwuuWvuCDln7rnoYDlsLrlr7hcXG4gKiDlkb3lkI3og73lnKjor63kuYnnmoTliY3mj5DkuIvnroDljZXlsLHlsL3ph4/nroDljZUsIOi/memHjOWPr+S7peaYryBzaXplLTJ4LCBzcGFjZS0yeCwgc2l6ZS1iYXNlIC4uLlxcbiAqIOS4jei/h+WPr+S7peWcqOivreS5ieeahOWJjeaPkOS4i+WBmueahOabtOeyvueugOS4gOS6mywg5LqO5piv55So5LqGczIsIHMx562JXFxuICog5Y+v55So5Y+Y6YePOiBgJHMxIC0gJHM4YFxcbiAqIEBleGFtcGxlIHNjc3MgLSDkvb/nlKhcXG4gKiAgIC5lbGVtZW50IHtcXG4gKiAgICAgcGFkZGluZzogJHMxICFkZWZhdWx0O1xcbiAqICAgfVxcbiAqXFxuICogQGV4YW1wbGUgY3NzIC0gQ1NTIOi+k+WHulxcbiAqICAgLmVsZW1lbnQge1xcbiAqICAgICBwYWRkaW5nOiA0cHggIWRlZmF1bHQ7XFxuICogICB9XFxuICovXFxuLm5leHQtYnRuIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgLm5leHQtYnRuICosXFxuICAubmV4dC1idG4gKjpiZWZvcmUsXFxuICAubmV4dC1idG4gKjphZnRlciB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAubmV4dC1idG46Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5uZXh0LWJ0biwgLm5leHQtYnRuOmFjdGl2ZSwgLm5leHQtYnRuOmZvY3VzLCAubmV4dC1idG46aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5uZXh0LWJ0biB7XFxuICAvKiDlsLrlr7jnu7TluqYgKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qIOaZrumAmuaMiemSriAqL1xcbiAgLyog5pmu6YCa5oCB56aB55So5qC35byPICovXFxuICAvKiDorablkYrmjInpkq4gKi9cXG4gIC8qIOaWh+acrOaMiemSriAqL1xcbiAgLyogbG9hZGluZyAqL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgLyog5bm954G15oyJ6ZKuICovXFxuICAvKiDnu4TlkIggKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi8gfVxcbiAgLm5leHQtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5uZXh0LWJ0bjphZnRlciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTsgfVxcbiAgICAubmV4dC1idG4gLm5leHQtaWNvbi5uZXh0LXhzOmJlZm9yZSB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuICAgIC5uZXh0LWJ0bi5ob3ZlciwgLm5leHQtYnRuOmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAubmV4dC1idG4ubmV4dC1zbWFsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LXNtYWxsLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgIGxlZnQ6IDhweDtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtbWVkaXVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICBsZWZ0OiAxMnB4O1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzhweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgbGVmdDogMTZweDtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgLm5leHQtYnRuLm5leHQtbGFyZ2UubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1jb2xvcjogI0M0QzZDRjsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOmxpbmssIC5uZXh0LWJ0bi5uZXh0LWJ0bi1ub3JtYWw6dmlzaXRlZCwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbC52aXNpdGVkIHtcXG4gICAgICBjb2xvcjogIzMzMzMzMzsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOmZvY3VzLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsLmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tbm9ybWFsOmFjdGl2ZSwgLm5leHQtYnRuLm5leHQtYnRuLW5vcm1hbC5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjc7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjQTBBMkFEO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnkge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4NEZGO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5LCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeTpsaW5rLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeTp2aXNpdGVkLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeS52aXNpdGVkIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeTpmb2N1cywgLm5leHQtYnRuLm5leHQtYnRuLXByaW1hcnk6aG92ZXIsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5LmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tcHJpbWFyeTphY3RpdmUsIC5uZXh0LWJ0bi5uZXh0LWJ0bi1wcmltYXJ5LmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNzFGNztcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1jb2xvcjogIzU1ODRGRjsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5LCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OmxpbmssIC5uZXh0LWJ0bi5uZXh0LWJ0bi1zZWNvbmRhcnk6dmlzaXRlZCwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeS52aXNpdGVkIHtcXG4gICAgICBjb2xvcjogIzU1ODRGRjsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OmZvY3VzLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5LmhvdmVyLCAubmV4dC1idG4ubmV4dC1idG4tc2Vjb25kYXJ5OmFjdGl2ZSwgLm5leHQtYnRuLm5leHQtYnRuLXNlY29uZGFyeS5hY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTcxRjc7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjM0U3MUY3O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLmRpc2FibGVkLCAubmV4dC1idG5bZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRTZFN0VCOyB9XFxuICAgIC5uZXh0LWJ0bi5kaXNhYmxlZCwgLm5leHQtYnRuLmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi5kaXNhYmxlZDp2aXNpdGVkLCAubmV4dC1idG4uZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuW2Rpc2FibGVkXSwgLm5leHQtYnRuW2Rpc2FibGVkXTpsaW5rLCAubmV4dC1idG5bZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bltkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgY29sb3I6ICNDQ0NDQ0M7IH1cXG4gICAgLm5leHQtYnRuLmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4uZGlzYWJsZWQ6aG92ZXIsIC5uZXh0LWJ0bi5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLmRpc2FibGVkLmFjdGl2ZSwgLm5leHQtYnRuW2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuW2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuW2Rpc2FibGVkXS5ob3ZlciwgLm5leHQtYnRuW2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bltkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICBjb2xvcjogI0NDQ0NDQztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0U2RTdFQjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi13YXJuaW5nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcbiAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzMDAwO1xcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGMzAwMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnksIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnk6bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeTp2aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5OmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTcyQjAwO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0RDREVFMzsgfVxcbiAgICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5LmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF0sIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgICBjb2xvcjogI0NDQ0NDQzsgfVxcbiAgICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeS5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnkuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNEQ0RFRTM7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkYzMDAwOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWw6bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjRkYzMDAwOyB9XFxuICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmZvY3VzLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWw6aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5ob3ZlciwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsOmFjdGl2ZSwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzJCMDA7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNFNzJCMDA7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgICAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U2RTdFQjsgfVxcbiAgICAgICAgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZC52aXNpdGVkLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF06dmlzaXRlZCwgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsW2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDpmb2N1cywgLm5leHQtYnRuLXdhcm5pbmcubmV4dC1idG4tbm9ybWFsLmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWwuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZDphY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbC5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF06aG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bi13YXJuaW5nLm5leHQtYnRuLW5vcm1hbFtkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4td2FybmluZy5uZXh0LWJ0bi1ub3JtYWxbZGlzYWJsZWRdLmFjdGl2ZSB7XFxuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZBO1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNFNkU3RUI7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLXRleHQge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5ob3ZlciwgLm5leHQtYnRuLXRleHQ6aG92ZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnksIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXByaW1hcnk6bGluaywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeTp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5LnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICM1NTg0RkY7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OmZvY3VzLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5LmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1wcmltYXJ5OmFjdGl2ZSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tcHJpbWFyeS5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMzRTcxRjc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5LCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnk6bGluaywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmZvY3VzLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1zZWNvbmRhcnk6aG92ZXIsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLXNlY29uZGFyeS5ob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5OmFjdGl2ZSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tc2Vjb25kYXJ5LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzU1ODRGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWwsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbDpsaW5rLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLW5vcm1hbDpob3ZlciwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbm9ybWFsLmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWw6YWN0aXZlLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1ub3JtYWwuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjNTU4NEZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2Uge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgcGFkZGluZzogMCAwO1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tYWxvbmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1sYXJnZS5uZXh0LWJ0bi1sb2FkaW5nID4gLm5leHQtaWNvbiB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0ge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgcGFkZGluZzogMCAwO1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1hbG9uZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4OyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LW1lZGl1bS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmcgPiAubmV4dC1pY29uIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMDtcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGJvcmRlci13aWR0aDogMDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdDpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LXNtYWxsID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWFsb25lOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDsgfVxcbiAgICAgICAgLm5leHQtYnRuLXRleHQubmV4dC1zbWFsbC5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyA+IC5uZXh0LWljb24ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5kaXNhYmxlZCwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQ6bGluaywgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQudmlzaXRlZCwgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF06bGluaywgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOnZpc2l0ZWQsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXS52aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDOyB9XFxuICAgICAgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi10ZXh0LmRpc2FibGVkOmhvdmVyLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZC5ob3ZlciwgLm5leHQtYnRuLXRleHQuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4tdGV4dC5kaXNhYmxlZC5hY3RpdmUsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTpmb2N1cywgLm5leHQtYnRuLXRleHRbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4tdGV4dFtkaXNhYmxlZF0uaG92ZXIsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXTphY3RpdmUsIC5uZXh0LWJ0bi10ZXh0W2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmcsIC5uZXh0LWJ0bi10ZXh0Lm5leHQtYnRuLWxvYWRpbmc6bGluaywgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZzp2aXNpdGVkLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nLnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgICAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOmZvY3VzLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nLmhvdmVyLCAubmV4dC1idG4tdGV4dC5uZXh0LWJ0bi1sb2FkaW5nOmFjdGl2ZSwgLm5leHQtYnRuLXRleHQubmV4dC1idG4tbG9hZGluZy5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5uZXh0LWJ0bi1sb2FkaW5nIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBOZXh0SWNvbjtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXEU2NDZcXFwiO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdDaXJjbGUgMnMgaW5maW5pdGUgbGluZWFyOyB9XFxuICAubmV4dC1idG4tZ2hvc3Qge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcbiAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGOyB9XFxuICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazpmb2N1cywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcms6aG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyazphY3RpdmUsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxcbiAgICAgICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkOnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdOmxpbmssIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0udmlzaXRlZCB7XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cXG4gICAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFyay5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQuaG92ZXIsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrLmRpc2FibGVkOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmsuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1kYXJrW2Rpc2FibGVkXTpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWRhcmtbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF06YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tZGFya1tkaXNhYmxlZF0uYWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodDpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cXG4gICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodDpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQ6YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkyKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzMzMzMzMztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZDpsaW5rLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6dmlzaXRlZCwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLnZpc2l0ZWQsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF0sIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodFtkaXNhYmxlZF06bGluaywgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXTp2aXNpdGVkLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdLnZpc2l0ZWQge1xcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuICAgICAgICAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6Zm9jdXMsIC5uZXh0LWJ0bi1naG9zdC5uZXh0LWJ0bi1saWdodC5kaXNhYmxlZDpob3ZlciwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0LmRpc2FibGVkLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQ6YWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHQuZGlzYWJsZWQuYWN0aXZlLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOmZvY3VzLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdLmhvdmVyLCAubmV4dC1idG4tZ2hvc3QubmV4dC1idG4tbGlnaHRbZGlzYWJsZWRdOmFjdGl2ZSwgLm5leHQtYnRuLWdob3N0Lm5leHQtYnRuLWxpZ2h0W2Rpc2FibGVkXS5hY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLm5leHQtYnRuLWdyb3VwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpob3ZlciwgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuOmZvY3VzLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46YWN0aXZlLCAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4uYWN0aXZlIHtcXG4gICAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG4uZGlzYWJsZWQsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bltkaXNhYmxlZF0ge1xcbiAgICAgICAgei1pbmRleDogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgLm5leHQtYnRuLm5leHQtYnRuIHtcXG4gICAgICBtYXJnaW46IDAgMCAwIC0xcHg7IH1cXG4gICAgLm5leHQtYnRuLWdyb3VwIC5uZXh0LWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxcbiAgICAubmV4dC1idG4tZ3JvdXAgPiAubmV4dC1idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XFxuICAgIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XFxuICAgICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLm5leHQtYnRuLWdyb3VwID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCkuZGlzYWJsZWQsIC5uZXh0LWJ0bi1ncm91cCA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpW2Rpc2FibGVkXSB7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI0U2RTdFQjsgfVxcblxcbi8qIOe7hOWQiCAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4ubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSAubmV4dC1idG4ubmV4dC1idG4ge1xcbiAgbWFyZ2luOiAwIC0xcHggMCAwOyB9XFxuXFxuLm5leHQtYnRuLWdyb3VwW2Rpcj1cXFwicnRsXFxcIl0gPiAubmV4dC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDsgfVxcblxcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxcblxcbi5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cXG4gIC5uZXh0LWJ0bi1ncm91cFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLXByaW1hcnk6bm90KDpmaXJzdC1jaGlsZCk6aG92ZXIge1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpLmRpc2FibGVkLCAubmV4dC1idG4tZ3JvdXBbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1wcmltYXJ5Om5vdCg6Zmlyc3QtY2hpbGQpW2Rpc2FibGVkXSB7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI0U2RTdFQjsgfVxcblxcbi8qIOWwuuWvuOe7tOW6piAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtc21hbGxbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1zbWFsbFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiA4cHg7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4ubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1tZWRpdW1bZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi5uZXh0LW1lZGl1bVtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbWVkaXVtW2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDEycHg7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cXG4ubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXSA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4ubmV4dC1sYXJnZVtkaXI9XFxcInJ0bFxcXCJdLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7IH1cXG4gICAgLm5leHQtYnRuLm5leHQtbGFyZ2VbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWJ0bi1sb2FkaW5nOmFmdGVyIHtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi8qIOaWh+acrOaMiemSriAqL1xcbi5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1sYXJnZSB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbGFyZ2UgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdDpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcbiAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cXG4gICAgLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LWxhcmdlLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LW1lZGl1bSB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWZpcnN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0gPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tbGFzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtID4gLm5leHQtYnRuLWljb24ubmV4dC1pY29uLWxhc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1tZWRpdW0ubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMTZweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtbWVkaXVtLm5leHQtYnRuLWxvYWRpbmc6YWZ0ZXIge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLm5leHQtYnRuLXRleHRbZGlyPVxcXCJydGxcXFwiXS5uZXh0LXNtYWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1maXJzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwgPiAubmV4dC1idG4taWNvbi5uZXh0LWljb24tZmlyc3Q6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5uZXh0LWJ0bi10ZXh0W2Rpcj1cXFwicnRsXFxcIl0ubmV4dC1zbWFsbCA+IC5uZXh0LWJ0bi1pY29uLm5leHQtaWNvbi1sYXN0OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMTZweDsgfVxcbiAgICAubmV4dC1idG4tdGV4dFtkaXI9XFxcInJ0bFxcXCJdLm5leHQtc21hbGwubmV4dC1idG4tbG9hZGluZzphZnRlciB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/P3JlZi0tMi0xIS4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWI/P3JlZi0tMi0yIS4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliIS4vc3JjL2J1dHRvbi9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbi8qKlxuICogSWNvblxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjIflrprmmL7npLrlk6rnp43lm77moIdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjIflrprlm77moIflpKflsI9cbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3h4cycsICd4cycsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneGwnLCAneHhsJywgJ3h4eGwnXSksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBzaXplOiAnbWVkaXVtJ1xuICAgIH07XG5cbiAgICBzdGF0aWMgX3R5cGVNYXJrID0gJ2ljb24nO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG4gICAgICAgIGNvbnN0IHsgcHJlZml4LCB0eXBlLCBzaXplLCBjbGFzc05hbWUsIHJ0bCwgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGN4KHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbmBdOiB0cnVlLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uLSR7dHlwZX1gXTogISF0eXBlLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0ke3NpemV9YF06ICEhc2l6ZSxcbiAgICAgICAgICAgIFtjbGFzc05hbWVdOiAhIWNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocnRsICYmIFsnYXJyb3ctbGVmdCcsICdhcnJvdy1yaWdodCcsICdhcnJvdy1kb3VibGUtbGVmdCcsICdhcnJvdy1kb3VibGUtcmlnaHQnLCAnc3dpdGNoJywgJ3NvcnRpbmcnLCAnZGVzY2VuZGluZycsICdhc2NlbmRpbmcnXS5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgb3RoZXIuZGlyID0gJ3J0bCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGkgey4uLm90aGVyfSBjbGFzc05hbWU9e2NsYXNzZXN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnUHJvdmlkZXIuY29uZmlnKEljb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb24vaW5kZXguanN4IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW5pbWF0ZS9zdHlsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm1vbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbmRvdy5tb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb250ZXh0UHJvcHMocHJvcHMsIGNvbnRleHQsIGRpc3BsYXlOYW1lKSB7XG4gICAgY29uc3QgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgcnRsIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IG5leHRQcmVmaXgsIG5leHRMb2NhbGUsIG5leHRQdXJlLCBuZXh0V2FybmluZywgbmV4dFJ0bCB9ID0gY29udGV4dDtcblxuICAgIGNvbnN0IG5ld1ByZWZpeCA9IHByZWZpeCB8fCBuZXh0UHJlZml4O1xuXG4gICAgbGV0IGxvY2FsZUZyb21Db250ZXh0O1xuICAgIGlmIChuZXh0TG9jYWxlKSB7XG4gICAgICAgIGxvY2FsZUZyb21Db250ZXh0ID0gbmV4dExvY2FsZVtkaXNwbGF5TmFtZV07XG4gICAgICAgIGlmIChsb2NhbGVGcm9tQ29udGV4dCkge1xuICAgICAgICAgICAgbG9jYWxlRnJvbUNvbnRleHQubW9tZW50TG9jYWxlID0gbmV4dExvY2FsZS5tb21lbnRMb2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5ld0xvY2FsZTtcbiAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgIG5ld0xvY2FsZSA9IHsgLi4uKGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KSwgLi4ubG9jYWxlIH07XG4gICAgfSBlbHNlIGlmIChsb2NhbGVGcm9tQ29udGV4dCkge1xuICAgICAgICBuZXdMb2NhbGUgPSBsb2NhbGVGcm9tQ29udGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQdXJlID0gdHlwZW9mIHB1cmUgPT09ICdib29sZWFuJyA/IHB1cmUgOiBuZXh0UHVyZTtcbiAgICBjb25zdCBuZXdSdGwgPSB0eXBlb2YgcnRsID09PSAnYm9vbGVhbicgPyBydGwgOiBuZXh0UnRsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJlZml4OiBuZXdQcmVmaXgsXG4gICAgICAgIGxvY2FsZTogbmV3TG9jYWxlLFxuICAgICAgICBwdXJlOiBuZXdQdXJlLFxuICAgICAgICBydGw6IG5ld1J0bCxcbiAgICAgICAgd2FybmluZzogbmV4dFdhcm5pbmdcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9nZXQtY29udGV4dC1wcm9wcy5qc3giLCJpbXBvcnQge2NhbWVsY2FzZSwgaHlwaGVuYXRlfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQge2VhY2h9IGZyb20gJy4vb2JqZWN0JztcblxuLyoqXG4gKiDmmK/lkKbog73kvb/nlKggRE9NIOaWueazlVxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBoYXNET00gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhIXdpbmRvdy5kb2N1bWVudCAmJiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG5cbi8qKlxuICog6IqC54K55piv5ZCm5YyF5ZCr5oyH5a6aIGNsYXNzTmFtZVxuICogQHBhcmFtICB7RWxlbWVudH0gIG5vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogZG9tLmhhc0NsYXNzKGRvY3VtZW50LmJvZHksICdmb28nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTmFtZS5pbmRleE9mKGNsYXNzTmFtZSkgPiAtMTtcbiAgICB9XG59XG5cbi8qKlxuICog5re75YqgIGNsYXNzTmFtZVxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lLCBfZm9yY2UpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWhhc0RPTSB8fCAhbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAoX2ZvcmNlID09PSB0cnVlIHx8ICFoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIG5vZGUuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB9XG59XG5cbi8qKlxuICog56e76ZmkIGNsYXNzTmFtZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtICB7U3RyaW5nfSBjbGFzc05hbWVcbiAqXG4gKiBAZXhhbXBsZVxuICogZG9tLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdmb28nKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzIChub2RlLCBjbGFzc05hbWUsIF9mb3JjZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChfZm9yY2UgPT09IHRydWUgfHwgaGFzQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSkge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NOYW1lLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcbiAgICB9XG59XG5cbi8qKlxuICog5YiH5o2iIGNsYXNzTmFtZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtICB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICDmiafooYzlkI7oioLngrnkuIrmmK/lkKbov5jmnInmraQgY2xhc3NOYW1lXG4gKlxuICogQGV4YW1wbGVcbiAqIGRvbS50b2dnbGVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZm9vJyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmxhZyA9IGhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgICAgIGZsYWcgPyByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUsIHRydWUpIDogYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gIWZsYWc7XG4gICAgfVxufVxuXG4vKipcbiAqIOWFg+e0oOaYr+WQpuWMuemFjSBDU1Mg6YCJ5oup5ZmoXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlICAgICAgIERPTSDoioLngrlcbiAqIEBwYXJhbSAge1N0cmluZ30gIHNlbGVjdG9yICAgQ1NTIOmAieaLqeWZqFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogZG9tLm1hdGNoZXMobW91bnROb2RlLCAnLmNvbnRhaW5lcicpOyAvLyBib29sZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtYXRjaGVzRm4gPSBudWxsO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKGhhc0RPTSkge1xuICAgICAgICBjb25zdCBfYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICAgICAgbWF0Y2hlc0ZuID0gX2JvZHkubWF0Y2hlcyA/ICdtYXRjaGVzJyA6XG4gICAgICAgICAgICBfYm9keS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgPyAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJyA6XG4gICAgICAgICAgICAgICAgX2JvZHkubXNNYXRjaGVzU2VsZWN0b3IgPyAnbXNNYXRjaGVzU2VsZWN0b3InIDpcbiAgICAgICAgICAgICAgICAgICAgX2JvZHkubW96TWF0Y2hlc1NlbGVjdG9yID8gJ21vek1hdGNoZXNTZWxlY3RvcicgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCFoYXNET00gfHwgIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzRm4gPyBub2RlW21hdGNoZXNGbl0oc2VsZWN0b3IpIDogZmFsc2U7XG4gICAgfTtcbn0oKTtcblxuLyoqXG4gKiDojrflj5blhYPntKDorqHnrpflkI7nmoTmoLflvI9cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDoge307XG59XG5cbmNvbnN0IFBJWEVMX1BBVFRFUk4gPSAvbWFyZ2lufHBhZGRpbmd8d2lkdGh8aGVpZ2h0fG1heHxtaW58b2Zmc2V0fHNpemUvaTtcbmNvbnN0IHJlbW92ZVBpeGVsID0ge2xlZnQ6IDEsIHRvcDogMSwgcmlnaHQ6IDEsIGJvdHRvbTogMX07XG5cbi8qKlxuICog5qCh6aqM5bm25L+u5q2j5YWD57Sg55qE5qC35byP5bGe5oCn5YC8XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIF9nZXRTdHlsZVZhbHVlIChub2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLm9mZnNldEhlaWdodCB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnd2lkdGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vZmZzZXRXaWR0aCB8fCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodHlwZSBpbiByZW1vdmVQaXhlbCkpIHtcbiAgICAgICAgLy8g5bGe5oCn5YC85piv5ZCm6ZyA6KaB5Y675o6JIHB4IOWNleS9je+8jOi/memHjOWBh+WumuatpOexu+eahOWxnuaAp+WAvOmDveaYryBweCDkuLrljZXkvY3nmoRcbiAgICAgICAgcmVtb3ZlUGl4ZWxbdHlwZV0gPSBQSVhFTF9QQVRURVJOLnRlc3QodHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZVBpeGVsW3R5cGVdID8gKHBhcnNlRmxvYXQodmFsdWUpIHx8IDApIDogdmFsdWU7XG59XG5cbmNvbnN0IGZsb2F0TWFwID0ge2Nzc0Zsb2F0OiAxLCBzdHlsZUZsb2F0OiAxLCBmbG9hdDogMX07XG5cbi8qKlxuICog6I635Y+W5YWD57Sg6K6h566X5ZCO55qE5qC35byPXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIERPTSDoioLngrlcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSDlsZ7mgKflkI1cbiAqIEByZXR1cm4ge051bWJlcnxPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZSAobm9kZSwgbmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICAvLyDlpoLmnpzkuI3mjIflrprlsZ7mgKflkI3vvIzliJnov5Tlm57lhajpg6jlgLxcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgbmFtZSA9IGZsb2F0TWFwW25hbWVdID8gJ2Nzc0Zsb2F0JyBpbiBub2RlLnN0eWxlID8gJ2Nzc0Zsb2F0JyA6ICdzdHlsZUZsb2F0JyA6IG5hbWU7XG5cbiAgICByZXR1cm4gX2dldFN0eWxlVmFsdWUobm9kZSwgbmFtZSwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShoeXBoZW5hdGUobmFtZSkpIHx8IG5vZGUuc3R5bGVbY2FtZWxjYXNlKG5hbWUpXSk7XG59XG5cbi8qKlxuICog6K6+572u5YWD57Sg55qE5qC35byPXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgIERPTSDoioLngrlcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZSAg5bGe5oCn5ZCN77yM5oiW6ICF5piv5LiA5Liq5a+56LGh77yM5YyF5ZCr5aSa5Liq5bGe5oCnXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlIOWxnuaAp+WAvFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyDorr7nva7ljZXkuKrlsZ7mgKflgLxcbiAqIGRvbS5zZXRTdHlsZShtb3VudE5vZGUsICd3aWR0aCcsIDEwMCk7XG4gKiAvLyDorr7nva7lpJrmnaHlsZ7mgKflgLxcbiAqIGRvbS5zZXRTdHlsZShtb3VudE5vZGUsIHtcbiAqICAgICB3aWR0aDogMTAwLFxuICogICAgIGhlaWdodDogMjAwXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlIChub2RlLCBuYW1lLCB2YWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NIHx8ICFub2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDmibnph4/orr7nva7lpJrkuKrlgLxcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZWFjaChuYW1lLCAodmFsLCBrZXkpID0+IHNldFN0eWxlKG5vZGUsIGtleSwgdmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZSA9IGZsb2F0TWFwW25hbWVdID8gJ2Nzc0Zsb2F0JyBpbiBub2RlLnN0eWxlID8gJ2Nzc0Zsb2F0JyA6ICdzdHlsZUZsb2F0JyA6IG5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIFBJWEVMX1BBVFRFUk4udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zdHlsZVtjYW1lbGNhc2UobmFtZSldID0gdmFsdWU7IC8vIElFOCBzdXBwb3J0XG4gICAgfVxufVxuXG4vKipcbiAqIOiOt+WPlum7mOiupOeahOa7muWKqOadoeWkp+Wwj1xuICogQHJldHVybiB7T2JqZWN0fSB3aWR0aCwgaGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxiYXIgKCkge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgc2V0U3R5bGUoc2Nyb2xsRGl2LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgIHRvcDogJy05OTk5cHgnXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbGJhckhlaWdodCA9IHNjcm9sbERpdi5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEaXYuY2xpZW50SGVpZ2h0O1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBzY3JvbGxiYXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzY3JvbGxiYXJIZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIOiOt+WPluWFg+e0oOi3neemu+inhuWPo+mhtumDqOWSjOW3pui+ueeahOWBj+enu+i3neemu1xuICogQHJldHVybiB7T2JqZWN0fSB0b3AsIGxlZnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldCAobm9kZSkge1xuICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbiA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZG9tLmpzIiwiLyoqXG4gKiDlsIblrZfnrKbkuLLovazljJbkuLrpqbzls7DlvI/lhpnms5VcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIOS+i++8mi13ZWJraXQtdHJhbnNpdGlvblxuICogQHJldHVybiB7U3RyaW5nfSAgICAg5L6L77yaV2Via2l0VHJhbnNpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxjYXNlIChzdHIpIHtcbiAgICBpZiAoIS8tLy50ZXN0KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIHN0ciB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oW2Etel0pL2csICgkMCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xufVxuXG4vKipcbiAqIOWwhumpvOWzsOW8j+Wtl+espuS4sui9rOWMluS4uui/nuWtl+espuWGmeazlVxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIg5L6L77yaV2Via2l0VHJhbnNpdGlvblxuICogQHJldHVybiB7U3RyaW5nfSAgICAg5L6L77yaLXdlYmtpdC10cmFuc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeXBoZW5hdGUgKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAkMCA9PiBgLSR7JDAudG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3N0cmluZy5qcyIsIi8qKlxuICogSUXmtY/op4jlmajnmoTmuLLmn5PlvJXmk47niYjmnKzlj7dcbiAqIOazqOaEj++8muatpOWxnuaAp+S4jua1j+iniOWZqOeJiOacrOWPt+S4jeWQjO+8jElF55qE5riy5p+T5byV5pOO54mI5pys5Y+35piv5Y+v5Lul6YCa6L+HSFRNTCBoZWFkZXLmiJbmiYvliqjorr7nva7ljrvmm7TmlLnnmoRcbiAqIEB0eXBlIHtOdW1iZXJ9IDYgfiAxMFxuICovXG5leHBvcnQgY29uc3QgaWVWZXJzaW9uID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiDliKTmlq3mmK/lkKbmmK/nlJ/kuqfnjq/looNcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNQcm9kdWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFBST0RVQ1RJT05fRU5WID0gJ3Byb2R1Y3Rpb24nO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFBST0RVQ1RJT05fRU5WKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFBST0RVQ1RJT05fRU5WKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGllVmVyc2lvbixcbiAgICBpc1Byb2R1Y3Rpb24sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZW52LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcblxuICAgIC8vIHZlcnNpb24gMC54XG4gICAgRVNDQVBFOiAyNyxcbiAgICBMRUZUX0FSUk9XOiAzNyxcbiAgICBVUF9BUlJPVzogMzgsXG4gICAgUklHSFRfQVJST1c6IDM5LFxuICAgIERPV05fQVJST1c6IDQwLFxuXG4gICAgLy8gTWFjT1NcbiAgICBDT05UUk9MOiAxNyxcbiAgICBPUFRJT046IDE4LFxuICAgIENNRDogOTEsXG4gICAgQ09NTUFORDogOTEsXG4gICAgREVMRVRFOiA4LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2tleWNvZGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGRvbSwgZXZlbnRzLCBmdW5jLCBzdXBwb3J0LCBmb2N1cywgS0VZQ09ERSwgZ3VpZCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG92ZXJsYXlNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgR2F0ZXdheSBmcm9tICcuL2dhdGV3YXknO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vcG9zaXRpb24nO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBzYXZlTGFzdEZvY3VzTm9kZSwgZ2V0Rm9jdXNOb2RlTGlzdCwgYmFja0xhc3RGb2N1c05vZGUgfSA9IGZvY3VzO1xuY29uc3QgeyBtYWtlQ2hhaW4sIG5vb3AsIGJpbmRDdHggfSA9IGZ1bmM7XG5cbmNvbnN0IGlzU2Nyb2xsRGlzcGxheSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzY3JvbGxiYXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsICc6Oi13ZWJraXQtc2Nyb2xsYmFyJyk7XG4gICAgICAgIHJldHVybiAhc2Nyb2xsYmFyU3R5bGUgfHwgc2Nyb2xsYmFyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpICE9PSAnbm9uZSc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgZXJyb3IgZm9yIGZpcmVmb3hcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBoYXNTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiBkb2Muc2Nyb2xsSGVpZ2h0ID4gZG9jLmNsaWVudEhlaWdodCAmJiBkb20uc2Nyb2xsYmFyKCkud2lkdGggPiAwICYmIGlzU2Nyb2xsRGlzcGxheShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpICYmIGlzU2Nyb2xsRGlzcGxheShkb2N1bWVudC5ib2R5KTtcbn07XG5jb25zdCBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcbmNvbnN0IGdldFN0eWxlUHJvcGVydHkgPSAobm9kZSwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlc1tpXSArIG5hbWUpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgbW9kYWxzID0gW107XG5sZXQgYm9keU92ZXJmbG93WSwgYm9keVBhZGRpbmdSaWdodDtcblxuLyoqXG4gKiBPdmVybGF5XG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmmL7npLrlvLnlsYJcbiAgICAgICAgICovXG4gICAgICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC6K+35rGC5YWz6Zet5pe26Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOW8ueWxguWFs+mXreeahOadpea6kFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBET00g5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBvblJlcXVlc3RDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3nmoTlj4LnhaflhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldDogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguebuOWvueS6juWPgueFp+WFg+e0oOeahOWumuS9jSwg6K+m6KeB5byA5Y+R5oyH5Y2X55qEW+WumuS9jemDqOWIhl0oI+WumuS9jSlcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55u45a+55LqO5Y+C54Wn5YWD57Sg5a6a5L2N55qE5b6u6LCDXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa4suafk+e7hOS7tueahOWuueWZqO+8jOWmguaenOaYr+WHveaVsOmcgOimgei/lOWbniByZWbvvIzlpoLmnpzmmK/lrZfnrKbkuLLliJnmmK/or6UgRE9NIOeahCBpZO+8jOS5n+WPr+S7peebtOaOpeS8oOWFpSBET00g6IqC54K5XG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmmL7npLrpga7nvalcbiAgICAgICAgICovXG4gICAgICAgIGhhc01hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5pSv5oyBIGVzYyDmjInplK7lhbPpl63lvLnlsYJcbiAgICAgICAgICovXG4gICAgICAgIGNhbkNsb3NlQnlFc2M6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye75by55bGC5aSW55qE5Yy65Z+f5piv5ZCm5YWz6Zet5by55bGC77yM5LiN5pi+56S66YGu572p5pe255Sf5pWIXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5T3V0U2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeCueWHu+mBrue9qeWMuuWfn+aYr+WQpuWFs+mXreW8ueWxgu+8jOaYvuekuumBrue9qeaXtueUn+aViFxuICAgICAgICAgKi9cbiAgICAgICAgY2FuQ2xvc2VCeU1hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5YmN6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOaXtuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguaJk+W8gOWQjuinpuWPkeS6i+S7tueahOWbnuiwg+WHveaVsCwg5aaC5p6c5pyJ5Yqo55S777yM5YiZ5Zyo5Yqo55S757uT5p2f5ZCO6Kem5Y+RXG4gICAgICAgICAqL1xuICAgICAgICBhZnRlck9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YWz6Zet5YmN6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhbPpl63ml7bop6blj5Hkuovku7bnmoTlm57osIPlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5YWz6Zet5ZCO6Kem5Y+R5LqL5Lu255qE5Zue6LCD5Ye95pWwLCDlpoLmnpzmnInliqjnlLvvvIzliJnlnKjliqjnlLvnu5PmnZ/lkI7op6blj5FcbiAgICAgICAgICovXG4gICAgICAgIGFmdGVyQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5a6a5L2N5a6M5oiQ5YmN6Kem5Y+R55qE5LqL5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBiZWZvcmVQb3NpdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3lrozmiJDml7bop6blj5HnmoTkuovku7ZcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDlrprkvY3nmoTlj4LmlbBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY29uZmlnLmFsaWduIOWvuem9kOaWueW8j++8jOWmgiBbJ2NjJywgJ2NjJ13vvIjlpoLmnpzlvIDlkK8gbmVlZEFkanVzdO+8jOWPr+iDveWSjOmihOWFiOiuvue9rueahCBhbGlnbiDkuI3lkIzvvIlcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy50b3Ag6Led56a76KeG5Y+j6aG26YOo6Led56a7XG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcubGVmdCDot53nprvop4blj6Plt6bkvqfot53nprtcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGUg5a6a5L2N5Y+C54Wn55qE5a655Zmo6IqC54K5XG4gICAgICAgICAqL1xuICAgICAgICBvblBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuWcqOavj+asoeW8ueWxgumHjeaWsOa4suafk+WQjuW8uuWItuabtOaWsOWumuS9jeS/oeaBr++8jOS4gOiIrOeUqOS6juW8ueWxguWGheWuueWMuuWfn+Wkp+Wwj+WPkeeUn+WPmOWMluaXtu+8jOS7jemcgOS/neaMgeWOn+adpeeahOWumuS9jeaWueW8j1xuICAgICAgICAgKi9cbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5omT5byA5pe25piv5ZCm6K6p5YW25Lit55qE5YWD57Sg6Ieq5Yqo6I635Y+W54Sm54K5XG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5b2T5by55bGC55Sx5LqO6aG16Z2i5rua5Yqo562J5oOF5Ya15LiN5Zyo5Y+v6KeG5Yy65Z+f5pe277yM5piv5ZCm6Ieq5Yqo6LCD5pW05a6a5L2N5Lul5Ye6546w5Zyo5Y+v6KeG5Yy65Z+fXG4gICAgICAgICAqL1xuICAgICAgICBuZWVkQWRqdXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuemgeeUqOmhtemdoua7muWKqFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpmpDol4/ml7bmmK/lkKbkv53nlZnlrZDoioLngrlcbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWuieWFqOiKgueCue+8jOW9k+eCueWHuyBkb2N1bWVudCDnmoTml7blgJnvvIzlpoLmnpzljIXlkKvor6XoioLngrnliJnkuI3kvJrlhbPpl63lvLnlsYLvvIzlpoLmnpzmmK/lh73mlbDpnIDopoHov5Tlm54gcmVm77yM5aaC5p6c5piv5a2X56ym5Liy5YiZ5piv6K+lIERPTSDnmoQgaWTvvIzkuZ/lj6/ku6Xnm7TmjqXkvKDlhaUgRE9NIOiKgueCue+8jOaIluiAheS7peS4iuWAvOe7hOaIkOeahOaVsOe7hFxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZU5vZGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnmoTmoLnoioLngrnnmoTmoLflvI/nsbtcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLnmoTmoLnoioLngrnnmoTlhoXogZTmoLflvI9cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjee9ruWKqOeUu+eahOaSreaUvuaWueW8j++8jOaUr+aMgSB7IGluOiAnZW50ZXItY2xhc3MnLCBvdXQ6ICdsZWF2ZS1jbGFzcycgfSDnmoTlr7nosaHlj4LmlbDvvIzlpoLmnpzorr7nva7kuLogZmFsc2XvvIzliJnkuI3mkq3mlL7liqjnlLtcbiAgICAgICAgICogQGRlZmF1bHQgeyBpbjogJ2V4cGFuZEluRG93bicsIG91dDogJ2V4cGFuZE91dFVwJyB9XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSksXG4gICAgICAgIG9uTWFza01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbk1hc2tNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcmVmaXg6ICduZXh0LScsXG4gICAgICAgIHB1cmU6IGZhbHNlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IG5vb3AsXG4gICAgICAgIHRhcmdldDogUG9zaXRpb24uVklFV1BPUlQsXG4gICAgICAgIGFsaWduOiAndGwgYmwnLFxuICAgICAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICAgICAgaGFzTWFzazogZmFsc2UsXG4gICAgICAgIGNhbkNsb3NlQnlFc2M6IHRydWUsXG4gICAgICAgIGNhbkNsb3NlQnlPdXRTaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIGNhbkNsb3NlQnlNYXNrOiB0cnVlLFxuICAgICAgICBiZWZvcmVPcGVuOiBub29wLFxuICAgICAgICBvbk9wZW46IG5vb3AsXG4gICAgICAgIGFmdGVyT3Blbjogbm9vcCxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IG5vb3AsXG4gICAgICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgICAgIGFmdGVyQ2xvc2U6IG5vb3AsXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uOiBub29wLFxuICAgICAgICBvblBvc2l0aW9uOiBub29wLFxuICAgICAgICBvbk1hc2tNb3VzZUVudGVyOiBub29wLFxuICAgICAgICBvbk1hc2tNb3VzZUxlYXZlOiBub29wLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgIG5lZWRBZGp1c3Q6IHRydWUsXG4gICAgICAgIGRpc2FibGVTY3JvbGw6IGZhbHNlLFxuICAgICAgICBjYWNoZTogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgc3RhdHVzOiAnbm9uZScsXG4gICAgICAgICAgICBhbmltYXRpb246IHRoaXMuZ2V0QW5pbWF0aW9uKHByb3BzKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGFzdEFsaWduID0gcHJvcHMuYWxpZ247XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbXG4gICAgICAgICAgICAnaGFuZGxlUG9zaXRpb24nLFxuICAgICAgICAgICAgJ2hhbmRsZUFuaW1hdGVFbmQnLFxuICAgICAgICAgICAgJ2hhbmRsZURvY3VtZW50S2V5RG93bicsXG4gICAgICAgICAgICAnaGFuZGxlRG9jdW1lbnRDbGljaycsXG4gICAgICAgICAgICAnaGFuZGxlTWFza0NsaWNrJyxcbiAgICAgICAgICAgICdiZWZvcmVPcGVuJyxcbiAgICAgICAgICAgICdiZWZvcmVDbG9zZSdcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0TWFwID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmVmb3JlT3BlbigpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRpb24gJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGREb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkICYmIG5leHRQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2lsbE9wZW4gPSAhdGhpcy5wcm9wcy52aXNpYmxlICYmIG5leHRQcm9wcy52aXNpYmxlO1xuICAgICAgICBjb25zdCB3aWxsQ2xvc2UgPSB0aGlzLnByb3BzLnZpc2libGUgJiYgIW5leHRQcm9wcy52aXNpYmxlO1xuICAgICAgICBpZiAod2lsbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlT3BlbigpO1xuICAgICAgICAgICAgbmV4dFByb3BzLmJlZm9yZU9wZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWxsQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgICAgIG5leHRQcm9wcy5iZWZvcmVDbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5hbmltYXRpb24gfHwgbmV4dFByb3BzLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbmV4dFByb3BzLmFuaW1hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dFByb3BzLmFuaW1hdGlvbiAhPT0gZmFsc2UgJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh3aWxsT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2lsbENsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBjb25zdCBvcGVuID0gIXByZXZQcm9wcy52aXNpYmxlICYmIHRoaXMucHJvcHMudmlzaWJsZTtcbiAgICAgICAgY29uc3QgY2xvc2UgPSBwcmV2UHJvcHMudmlzaWJsZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRpb24gJiYgc3VwcG9ydC5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChvcGVuIHx8IGNsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlck9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlckNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHdyYXBwZXJOb2RlLCAnb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheU1hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNOb2RlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgb3ZlcmxheU1hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c1RpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlZm9yZUNsb3NlKCk7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5hbmltYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QW5pbWF0aW9uQnlBbGlnbihwcm9wcy5hbGlnbik7XG4gICAgfVxuXG4gICAgZ2V0QW5pbWF0aW9uQnlBbGlnbihhbGlnbikge1xuICAgICAgICBzd2l0Y2ggKGFsaWduWzBdKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbjogJ2V4cGFuZEluRG93bicsXG4gICAgICAgICAgICAgICAgICAgIG91dDogJ2V4cGFuZE91dFVwJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbjogJ2V4cGFuZEluVXAnLFxuICAgICAgICAgICAgICAgICAgICBvdXQ6ICdleHBhbmRPdXREb3duJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGluOiAnZXhwYW5kSW5Eb3duJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0OiAnZXhwYW5kT3V0VXAnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFuaW1hdGlvbkV2ZW50cygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGd1aWQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IGV2ZW50cy5vbihub2RlLCBzdXBwb3J0LmFuaW1hdGlvbi5lbmQsIHRoaXMuaGFuZGxlQW5pbWF0ZUVuZC5iaW5kKHRoaXMsIGlkKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBhbmltYXRpb25EZWxheSArIGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dE1hcFtpZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0ZUVuZChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpbWUgKiAxMDAwICsgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVBvc2l0aW9uKGNvbmZpZykge1xuICAgICAgICBjb25zdCBhbGlnbiA9IGNvbmZpZy5hbGlnbi5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKCEoJ2FuaW1hdGlvbicgaW4gdGhpcy5wcm9wcykgJiYgdGhpcy5wcm9wcy5uZWVkQWRqdXN0ICYmIHRoaXMubGFzdEFsaWduICE9PSBhbGlnbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmdldEFuaW1hdGlvbkJ5QWxpZ24oYWxpZ24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdEFsaWduID0gYWxpZ247XG4gICAgfVxuXG4gICAgaGFuZGxlQW5pbWF0ZUVuZChpZCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0TWFwW2lkXSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE1hcFtpZF0pO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRpbWVvdXRNYXBbaWRdO1xuXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbi5vZmYoKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnbGVhdmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbkxlYXZlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnZW50ZXJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub25FbnRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgc3RhdHVzOiAnZW50ZXJpbmcnXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHNldFN0YXRlIGNhbGxiYWNrIChzZWNvbmQgYXJndW1lbnQpIG5vdyBmaXJlcyBpbW1lZGlhdGVseSBhZnRlciBjb21wb25lbnREaWRNb3VudCAvIGNvbXBvbmVudERpZFVwZGF0ZSBpbnN0ZWFkIG9mIGFmdGVyIGFsbCBjb21wb25lbnRzIGhhdmUgcmVuZGVyZWQuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FbnRlcmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6ICdsZWF2aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uTGVhdmluZygpO1xuICAgIH1cblxuICAgIG9uRW50ZXJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICBkb20uYWRkQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICBvbkxlYXZpbmcoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJOb2RlID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mod3JhcHBlck5vZGUsICdvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25FbnRlcmVkKCkge1xuICAgICAgICBvdmVybGF5TWFuYWdlci5hZGRPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnNldEZvY3VzTm9kZSgpO1xuICAgICAgICB0aGlzLnByb3BzLmFmdGVyT3BlbigpO1xuICAgIH1cblxuICAgIG9uTGVhdmVkKCkge1xuICAgICAgICBvdmVybGF5TWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgICB0aGlzLnNldEZvY3VzTm9kZSgpO1xuICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBiZWZvcmVPcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICAgICAgICBpZiAobW9kYWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICBib2R5T3ZlcmZsb3dZID0gYm9keS5zdHlsZS5vdmVyZmxvd1k7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1Njcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlQYWRkaW5nUmlnaHQgPSBib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7ZG9tLmdldFN0eWxlKGJvZHksICdwYWRkaW5nUmlnaHQnKSArIGRvbS5zY3JvbGxiYXIoKS53aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9tLnNldFN0eWxlKGJvZHksIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFscy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmVmb3JlQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbW9kYWxzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RhbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBib2R5T3ZlcmZsb3dZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNTY3JvbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gYm9keVBhZGRpbmdSaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRvbS5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCBzdHlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keU92ZXJmbG93WSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgYm9keVBhZGRpbmdSaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEZvY3VzTm9kZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSAmJiAhdGhpcy5faGFzRm9jdXNlZCkge1xuICAgICAgICAgICAgc2F2ZUxhc3RGb2N1c05vZGUoKTtcbiAgICAgICAgICAgIC8vIOi/meS4quaXtuWAmeW+iOWPr+iDveS4iuS4gOS4quW8ueWxgueahOWFs+mXreS6i+S7tui/mOacquinpuWPke+8jOWvvOiHtOeEpueCueW3sue7j+WbnuWIsOinpuWPkeeahOWFg+e0oFxuICAgICAgICAgICAgLy8g6L+Z6YeM5bu25pe25aSE55CG5LiA5LiL77yM5bu25pe255qE5pe26Ze05Li6IGRvY3VtZW50LmNsaWNrIOaNleiOt+inpuWPkeeahOW7tuaXtuaXtumXtFxuICAgICAgICAgICAgdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzTm9kZUxpc3QgPSBnZXRGb2N1c05vZGVMaXN0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzTm9kZUxpc3RbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnZpc2libGUgJiYgdGhpcy5faGFzRm9jdXNlZCkge1xuICAgICAgICAgICAgYmFja0xhc3RGb2N1c05vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZWY7XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzLmNvbnRlbnRSZWYpO1xuICAgIH1cblxuICAgIGdldFdyYXBwZXJOb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYXRld2F5UmVmID8gdGhpcy5nYXRld2F5UmVmLmdldENoaWxkTm9kZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeUVzYykge1xuICAgICAgICAgICAgdGhpcy5fa2V5ZG93bkV2ZW50cyA9IGV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5RG93bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FuQ2xvc2VCeU91dFNpZGVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMgPSBldmVudHMub24oZG9jdW1lbnQsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVEb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2tleWRvd25FdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWRvd25FdmVudHMub2ZmKCk7XG4gICAgICAgICAgICB0aGlzLl9rZXlkb3duRXZlbnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2xpY2tFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrRXZlbnRzLm9mZigpO1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tFdmVudHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRG9jdW1lbnRLZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSAmJiBlLmtleUNvZGUgPT09IEtFWUNPREUuRVNDICYmIG92ZXJsYXlNYW5hZ2VyLmlzQ3VycmVudE92ZXJsYXkodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoJ2tleWJvYXJkJywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3QgeyBzYWZlTm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHNhZmVOb2RlcyAgPSBBcnJheS5pc0FycmF5KHNhZmVOb2RlKSA/IFsuLi5zYWZlTm9kZV0gOiBbc2FmZU5vZGVdO1xuICAgICAgICAgICAgc2FmZU5vZGVzLnVuc2hpZnQoKCkgPT4gdGhpcy5nZXRXcmFwcGVyTm9kZSgpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYWZlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZmluZE5vZGUoc2FmZU5vZGVzW2ldLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAvLyBIQUNLOiDlpoLmnpzop6blj5Hngrnlh7vnmoToioLngrnmmK/lvLnlsYLlhoXpg6jnmoToioLngrnvvIzlubbkuJTlnKjooqvngrnlh7vlkI7nq4vljbPplIDmr4HvvIzpgqPkuYjmraTml7bml6Dms5Xkvb/nlKggbm9kZS5jb250YWlucyhlLnRhcmdldClcbiAgICAgICAgICAgICAgICAvLyDmnaXliKTmlq3mraTml7bngrnlh7vnmoToioLngrnmmK/lkKbmmK/lvLnlsYLlhoXpg6jnmoToioLngrnvvIzpop3lpJbliKTmlq1cbiAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiAobm9kZSA9PT0gZS50YXJnZXQgfHwgbm9kZS5jb250YWlucyhlLnRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAoZS50YXJnZXQgIT09IGRvY3VtZW50ICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgnZG9jQ2xpY2snLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1hc2tDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbkNsb3NlQnlNYXNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCdtYXNrQ2xpY2snLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVDb250ZW50UmVmID0gKHJlZikgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSByZWY7XG4gICAgfVxuXG4gICAgc2F2ZUdhdGV3YXlSZWYgPSAocmVmKSA9PiB7XG4gICAgICAgIHRoaXMuZ2F0ZXdheVJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICAvLyDlhbzlrrnov4fljrvnmoTnlKjms5U6IHRoaXMucG9wdXBSZWYuZ2V0SW5zdGFuY2UoKS5vdmVybGF5LmdldEluc3RhbmNlKCkuZ2V0Q29udGVudE5vZGUoKVxuICAgIGdldEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByZWZpeCwgY2xhc3NOYW1lLCBzdHlsZSwgY2hpbGRyZW46IHByb3BDaGlsZHJlbixcbiAgICAgICAgICAgIHRhcmdldCwgYWxpZ24sIG9mZnNldCwgY29udGFpbmVyLCBoYXNNYXNrLCBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgYmVmb3JlUG9zaXRpb24sIG9uUG9zaXRpb24sIHdyYXBwZXJTdHlsZSwgcnRsLFxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IHByb3BTaG91bGRVcGRhdGVQb3NpdGlvbixcbiAgICAgICAgICAgIGNhY2hlLCB3cmFwcGVyQ2xhc3NOYW1lLCBvbk1hc2tNb3VzZUVudGVyLCBvbk1hc2tNb3VzZUxlYXZlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZpc2libGU6IHN0YXRlVmlzaWJsZSwgc3RhdHVzLCBhbmltYXRpb24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gc3RhdGVWaXNpYmxlIHx8IChjYWNoZSAmJiB0aGlzLl9pc01vdW50ZWQpID8gcHJvcENoaWxkcmVuIDogbnVsbDtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDbGF6eiA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9b3ZlcmxheS1pbm5lcmBdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFthbmltYXRpb24uaW5dOiBzdGF0dXMgPT09ICdlbnRlcmluZycsXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvbi5vdXRdOiBzdGF0dXMgPT09ICdsZWF2aW5nJyxcbiAgICAgICAgICAgICAgICBbY2hpbGQucHJvcHMuY2xhc3NOYW1lXTogISFjaGlsZC5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXQgcmVmIGJ5IHN0cmluZyBpbiBPdmVybGF5LCB1c2UgZnVuY3Rpb24gaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNoaWxkQ2xhenosXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsuLi5jaGlsZC5wcm9wcy5zdHlsZSwgLi4uc3R5bGV9LFxuICAgICAgICAgICAgICAgIHJlZjogbWFrZUNoYWluKHRoaXMuc2F2ZUNvbnRlbnRSZWYsIGNoaWxkLnJlZiksXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogIXN0YXRlVmlzaWJsZSAmJiBjYWNoZSAmJiB0aGlzLl9pc01vdW50ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVQb3NpdGlvbiA9IHN0YXR1cyA9PT0gJ2xlYXZpbmcnID8gZmFsc2UgOiBwcm9wU2hvdWxkVXBkYXRlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3NpdGlvbiB7Li4uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLCB0YXJnZXQsIGFsaWduLCBvZmZzZXQsIG5lZWRBZGp1c3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9zaXRpb246IG1ha2VDaGFpbih0aGlzLmhhbmRsZVBvc2l0aW9uLCBvblBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uLCBydGxcbiAgICAgICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlckNsYXp6ID0gY2xhc3NuYW1lcyhbXG4gICAgICAgICAgICAgICAgYCR7cHJlZml4fW92ZXJsYXktd3JhcHBlcmAsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBuZXdXcmFwcGVyU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogc3RhdGVWaXNpYmxlID8gJycgOiAnbm9uZSdcbiAgICAgICAgICAgIH0sIHdyYXBwZXJTdHlsZSk7XG5cbiAgICAgICAgICAgIGNoaWxkcmVuID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhenp9IHN0eWxlPXtuZXdXcmFwcGVyU3R5bGV9IGRpcj17cnRsID8gJ3J0bCcgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAgICB7aGFzTWFzayA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fW92ZXJsYXktYmFja2Ryb3BgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWFza0NsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17b25NYXNrTW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e29uTWFza01vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPXtydGwgPyAncnRsJyA6IHVuZGVmaW5lZH0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8R2F0ZXdheSB7Li4uKHtjb250YWluZXIsIHRhcmdldCwgY2hpbGRyZW59KX0gcmVmPXt0aGlzLnNhdmVHYXRld2F5UmVmfSAvPjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9vdmVybGF5LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUsIGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZnVuYyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBtYWtlQ2hhaW4gfSA9IGZ1bmM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhdGV3YXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogKCkgPT4gZG9jdW1lbnQuYm9keVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gdGhpcy5nZXRDb250YWluZXJOb2RlKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gdGhpcy5nZXRDb250YWluZXJOb2RlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZShwcm9wcykge1xuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZmluZE5vZGUocHJvcHMudGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKHByb3BzLmNvbnRhaW5lciwgdGFyZ2V0Tm9kZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGROb2RlKCkge1xuICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcy5jaGlsZCk7XG4gICAgfVxuXG4gICAgc2F2ZUNoaWxkUmVmID0gcmVmID0+IHtcbiAgICAgICAgdGhpcy5jaGlsZCA9IHJlZjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuID8gQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsO1xuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNldCByZWYgYnkgc3RyaW5nIGluIEdhdGV3YXksIHVzZSBmdW5jdGlvbiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICByZWY6IG1ha2VDaGFpbih0aGlzLnNhdmVDaGlsZFJlZiwgY2hpbGQucmVmKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkLCB0aGlzLmNvbnRhaW5lck5vZGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L2dhdGV3YXkuanN4IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmdW5jLCBkb20sIGV2ZW50cyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4vdXRpbHMvcG9zaXRpb24nO1xuaW1wb3J0IGZpbmROb2RlIGZyb20gJy4vdXRpbHMvZmluZC1ub2RlJztcblxuY29uc3QgeyBub29wLCBiaW5kQ3R4IH0gPSBmdW5jO1xuY29uc3QgeyBnZXRTdHlsZSB9ID0gZG9tO1xuY29uc3QgcGxhY2UgPSBwb3NpdGlvbi5wbGFjZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBWSUVXUE9SVCA9IHBvc2l0aW9uLlZJRVdQT1JUO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICB0YXJnZXQ6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgICAgICBvZmZzZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgYmVmb3JlUG9zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvblBvc2l0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbmVlZEFkanVzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5lZWRMaXN0ZW5SZXNpemU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWxpZ246ICd0bCBibCcsXG4gICAgICAgIG9mZnNldDogWzAsIDBdLFxuICAgICAgICBiZWZvcmVQb3NpdGlvbjogbm9vcCxcbiAgICAgICAgb25Qb3NpdGlvbjogbm9vcCxcbiAgICAgICAgbmVlZEFkanVzdDogdHJ1ZSxcbiAgICAgICAgbmVlZExpc3RlblJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IGZhbHNlLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgYmluZEN0eCh0aGlzLCBbJ2hhbmRsZVJlc2l6ZSddKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5lZWRMaXN0ZW5SZXNpemUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoJ2FsaWduJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLmFsaWduICE9PSB0aGlzLnByb3BzLmFsaWduIHx8IG5leHRQcm9wcy5zaG91bGRVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFVwZGF0ZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmVlZExpc3RlblJlc2l6ZSkge1xuICAgICAgICAgICAgZXZlbnRzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBhbGlnbiwgb2Zmc2V0LCBiZWZvcmVQb3NpdGlvbiwgb25Qb3NpdGlvbiwgbmVlZEFkanVzdCwgcnRsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGJlZm9yZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSB0aGlzLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdldE5vZGUoKTtcbiAgICAgICAgaWYgKGNvbnRlbnROb2RlICYmIHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFsaWduID0gcGxhY2Uoe1xuICAgICAgICAgICAgICAgIHBpbkVsZW1lbnQ6IGNvbnRlbnROb2RlLFxuICAgICAgICAgICAgICAgIGJhc2VFbGVtZW50OiB0YXJnZXROb2RlLFxuICAgICAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBuZWVkQWRqdXN0LFxuICAgICAgICAgICAgICAgIGlzUnRsOiBydGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGdldFN0eWxlKGNvbnRlbnROb2RlLCAndG9wJyk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZ2V0U3R5bGUoY29udGVudE5vZGUsICdsZWZ0Jyk7XG5cbiAgICAgICAgICAgIG9uUG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIGFsaWduOiByZXN1bHRBbGlnbi5zcGxpdCgnICcpLFxuICAgICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICB9LCBjb250ZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb250ZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFRhcmdldE5vZGUoKSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IHBvc2l0aW9uLlZJRVdQT1JUID8gcG9zaXRpb24uVklFV1BPUlQgOiBmaW5kTm9kZSh0YXJnZXQsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9wb3NpdGlvbi5qc3giLCJpbXBvcnQgJy4uL2FuaW1hdGUvc3R5bGUuanMnO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS9zdHlsZS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3Byb3AtdHlwZXNAMTUuNi4yQHByb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19vYmplY3QtYXNzaWduQDQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19wcm9wLXR5cGVzQDE1LjYuMkBwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9fcHJvcC10eXBlc0AxNS42LjJAcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IG9iaiwgbG9nIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgZ2V0Q29udGV4dFByb3BzIGZyb20gJy4vZ2V0LWNvbnRleHQtcHJvcHMnO1xuXG5jb25zdCB7IHNoYWxsb3dFcXVhbCB9ID0gb2JqO1xuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG5sZXQgZ2xvYmFsTG9jYWxlcztcbmxldCBjdXJyZW50R2xvYmFsTGFuZ3VhZ2UgPSAnemgtY24nO1xubGV0IGN1cnJlbnRHbG9iYWxMb2NhbGUgPSB7fTtcbmxldCBjdXJyZW50R2xvYmFsUnRsID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TG9jYWxlcyhsb2NhbGVzKSB7XG4gICAgZ2xvYmFsTG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgY3VycmVudEdsb2JhbExvY2FsZSA9IGxvY2FsZXNbY3VycmVudEdsb2JhbExhbmd1YWdlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgaWYgKGdsb2JhbExvY2FsZXMpIHtcbiAgICAgICAgY3VycmVudEdsb2JhbExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIGN1cnJlbnRHbG9iYWxMb2NhbGUgPSBnbG9iYWxMb2NhbGVzW2xhbmd1YWdlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgY3VycmVudEdsb2JhbExvY2FsZSA9IHtcbiAgICAgICAgLi4uKGdsb2JhbExvY2FsZXMgPyBnbG9iYWxMb2NhbGVzW2N1cnJlbnRHbG9iYWxMYW5ndWFnZV0gOiB7fSksXG4gICAgICAgIC4uLmxvY2FsZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaXJlY3Rpb24oZGlyKSB7XG4gICAgY3VycmVudEdsb2JhbFJ0bCA9IGRpciA9PT0gJ3J0bCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRHbG9iYWxMb2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gY3VycmVudEdsb2JhbExhbmd1YWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBjdXJyZW50R2xvYmFsUnRsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKENvbXBvbmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoXG4gICAgICAgICAgICBuZXh0UHJvcHMsXG4gICAgICAgICAgICBuZXh0U3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wdXJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8XG4gICAgICAgICAgICAgICAgICAgICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYXNzIENvbmZpZ2VkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihDb21wb25lbnQucHJvcFR5cGVzIHx8IHt9KSxcbiAgICAgICAgICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgICB9O1xuICAgICAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICAgICAgLi4uKENvbXBvbmVudC5jb250ZXh0VHlwZXMgfHwge30pLFxuICAgICAgICAgICAgbmV4dFByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIG5leHRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgICBuZXh0UHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICBuZXh0UnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIG5leHRXYXJuaW5nOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2dldEluc3RhbmNlID0gdGhpcy5fZ2V0SW5zdGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlY2F0ZWQgPSB0aGlzLl9kZXByZWNhdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfZ2V0SW5zdGFuY2UocmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IHJlZjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIG9wdGlvbnMuZXhwb3J0TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmV4cG9ydE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5faW5zdGFuY2VbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSBmaWVsZC5iaW5kKHRoaXMuX2luc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2RlcHJlY2F0ZWQoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5uZXh0V2FybmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsb2cuZGVwcmVjYXRlZCguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcmVmaXgsIGxvY2FsZSwgcHVyZSwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgbmV4dFByZWZpeCxcbiAgICAgICAgICAgICAgICBuZXh0TG9jYWxlID0ge30sXG4gICAgICAgICAgICAgICAgbmV4dFB1cmUsXG4gICAgICAgICAgICAgICAgbmV4dFJ0bFxuICAgICAgICAgICAgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tcG9uZW50TmFtZSB8fCBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dFByb3BzID0gZ2V0Q29udGV4dFByb3BzKFxuICAgICAgICAgICAgICAgIHsgcHJlZml4LCBsb2NhbGUsIHB1cmUsIHJ0bCB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dExvY2FsZTogeyAuLi5jdXJyZW50R2xvYmFsTG9jYWxlLCAuLi5uZXh0TG9jYWxlIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHRQdXJlLFxuICAgICAgICAgICAgICAgICAgICBuZXh0UnRsOiB0eXBlb2YgbmV4dFJ0bCA9PT0gJ2Jvb2xlYW4nID8gbmV4dFJ0bCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R2xvYmFsUnRsID09PSB0cnVlID8gdHJ1ZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRleHRQcm9wcyA9IFsncHJlZml4JywgJ2xvY2FsZScsICdwdXJlJywgJ3J0bCddLnJlZHVjZShcbiAgICAgICAgICAgICAgICAocmV0LCBuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dFByb3BzW25hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W25hbWVdID0gY29udGV4dFByb3BzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3T3RoZXJzID0gb3B0aW9ucy50cmFuc2Zvcm0gP1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNmb3JtKG90aGVycywgdGhpcy5fZGVwcmVjYXRlZCkgOlxuICAgICAgICAgICAgICAgIG90aGVycztcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdDb250ZXh0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5fZ2V0SW5zdGFuY2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDb25maWdlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGBDb25maWcoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpYyhDb25maWdlZENvbXBvbmVudCwgQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBDb25maWdlZENvbXBvbmVudDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY29uZmlnLmpzeCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL19ob2lzdC1ub24tcmVhY3Qtc3RhdGljc0AyLjUuNUBob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi8qKlxuICog5Y+W5raI5LqL5Lu257uR5a6aXG4gKiBAcGFyYW0gIHsqfSAgIG5vZGUgICAgICAgRE9N6IqC54K55oiW5Lu75L2V5Y+v5Lul57uR5a6a5LqL5Lu255qE5a+56LGhXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnROYW1lICDkuovku7blkI1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgIOWbnuiwg+aWueazlVxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbdXNlQ2FwdHVyZT1mYWxzZV0g5piv5ZCm5byA5ZCv5LqL5Lu25o2V6I635LyY5YWIXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZmYgKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnu5Hlrprkuovku7ZcbiAqIEBwYXJhbSAgeyp9ICAgbm9kZSAgICAgICBET03oioLngrnmiJbku7vkvZXlj6/ku6Xnu5Hlrprkuovku7bnmoTlr7nosaFcbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudE5hbWUgIOS6i+S7tuWQjVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAg5Zue6LCD5pa55rOVXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIHVzZUNhcHR1cmUg5piv5ZCm5byA5ZCv5LqL5Lu25o2V6I635LyY5YWIXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAg6L+U5Zue55qEb2JqZWN05Lit5YyF5ZCr5LiA5Liqb2Zm5pa55rOV77yM55So5LqO5Y+W5raI5LqL5Lu255uR5ZCsXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGhhbmRsZXIgPSBldmVudHMub24oZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgZSA9PiB7XG4gKiAgICAgLy8gaGFuZGxlIGNsaWNrIC4uLlxuICogfSk7XG4gKiAvLyDlj5bmtojkuovku7bnu5HlrppcbiAqIGhhbmRsZXIub2ZmKCk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbiAobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2ZmOiAoKSA9PiBvZmYobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSlcbiAgICB9O1xufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tu+8jOWPquaJp+ihjOS4gOasoeWQjumUgOavgVxuICogQHBhcmFtICB7Kn0gICBub2RlICAgICAgIERPTeiKgueCueaIluS7u+S9leWPr+S7pee7keWumuS6i+S7tueahOWvueixoVxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50TmFtZSAg5LqL5Lu25ZCNXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICDlm57osIPmlrnms5VcbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgdXNlQ2FwdHVyZSDmmK/lkKblvIDlkK/kuovku7bmjZXojrfkvJjlhYhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICDov5Tlm57nmoRvYmplY3TkuK3ljIXlkKvkuIDkuKpvZmbmlrnms5XvvIznlKjkuo7lj5bmtojkuovku7bnm5HlkKxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UgKG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICByZXR1cm4gb24obm9kZSwgZXZlbnROYW1lLCBmdW5jdGlvbiBfX2ZuICguLi5hcmdzKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIC8vIOeUseS6jmFkZEV2ZW50TGlzdGVuZXLkuK3nmoTlj4LmlbBvcHRpb25z5Y+q5ZyoQ2hyb21lIDU144CBRmlyZWZveChHZWNrbynku6XkuIrniYjmnKzmlK/mjIHvvIzmlYXov5jmmK/nlKjkvKDnu5/nmoTmlrnms5Xlrp7njrBvbmNlXG4gICAgICAgIG9mZihub2RlLCBldmVudE5hbWUsIF9fZm4sIHVzZUNhcHR1cmUpO1xuICAgIH0sIHVzZUNhcHR1cmUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZXZlbnRzLmpzIiwiaW1wb3J0IHtpc1Byb21pc2V9IGZyb20gJy4vb2JqZWN0JztcblxuLyoqXG4gKiDkuIDkuKrnqbrmlrnms5XvvIzov5Tlm57lhaXlj4LmnKzouqvmiJbnqbrlr7nosaFcbiAqL1xuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiDlsIZO5Liq5pa55rOV5ZCI5bm25Li65LiA5Liq6ZO+5byP6LCD55So55qE5pa55rOVXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgIOWQiOW5tuWQjueahOaWueazlVxuICog5Y+C6ICDIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXRpbC9cbiAqXG4gKiBAZXhhbXBsZVxuICogZnVuYy5tYWtlQ2hhaW4odGhpcy5oYW5kbGVDaGFuZ2UsIHRoaXMucHJvcHMub25DaGFuZ2UpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNoYWluICguLi5mbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBmbnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm5zW2ldICYmIGZuc1tpXS5hcHBseSkge1xuICAgICAgICAgICAgICAgIGZuc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICog5om56YeP5pS55Y+Y5pa55rOV55qE5LiK5LiL5paHXG4gKiDmraTmlrnms5XlnKhyZWFjdOe7hOS7tuS4reW+iOacieeUqO+8jOWcqGNvbnN0cnVjdG9y5Lit5om56YeP5bCG57uE5Lu25LiK55qE5pa55rOV5omn6KGM5LiK5LiL5paH57uR5a6a5Yiw57uE5Lu25pys6LqrXG4gKiDms6jmhI/vvJrnlKhiaW5k5pS55Y+Y5Ye95pWw6L+Q6KGM55qE5LiK5LiL5paH5Y+q5Lya55Sf5pWI5LiA5qyhXG4gKiBAcGFyYW0gIHtPYmplY3R9IGN0eCDmlrnms5XmjILovb3nmoTlr7nosaHku6Xlj4rmiafooYznmoTkuIrkuIvmlodcbiAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59IGZucyDmlrnms5XlkI3liJfooahcbiAqXG4gKiBAZXhhbXBsZVxuICogZnVuYy5iaW5kQ3R4KHRoaXMsIFsnaGFuZGxlQ2xpY2snLCAnaGFuZGxlQ2hhbmdlJ10pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEN0eCAoY3R4LCBmbnMsIG5zKSB7XG4gICAgaWYgKHR5cGVvZiBmbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZucyA9IFtmbnNdO1xuICAgIH1cblxuICAgIC8vIOaWueazleeahOaMgui9veepuumXtO+8jOWmguaenOS4jeS8oO+8jOm7mOiupOS4jmN0eOebuOWQjFxuICAgIG5zID0gbnMgfHwgY3R4O1xuXG4gICAgZm5zLmZvckVhY2goZm5OYW1lID0+IHtcbiAgICAgICAgLy8g6L+Z6YeM5LiN6KaB5re75Yqg56m65pa55rOV5Yik5pat77yM55Sx6LCD55So6ICF5L+d6K+B5q2j56Gu5oCn77yM5ZCm5YiZ5Ye65LqG6Zeu6aKY5peg5rOV5o6S5p+lXG4gICAgICAgIG5zW2ZuTmFtZV0gPSBuc1tmbk5hbWVdLmJpbmQoY3R4KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDnlKjkuo7miafooYzlm57osIPmlrnms5XlkI7nmoTpgLvovpFcbiAqIEBwYXJhbSAgeyp9IHJldCAgICAgICAgICAgIOWbnuiwg+aWueazleaJp+ihjOe7k+aenFxuICogQHBhcmFtICB7RnVuY3Rpb259IHN1Y2Nlc3Mg5omn6KGM57uT5p6c6L+U5Zue6Z2eZmFsc2XnmoTlm57osINcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbZmFpbHVyZT1ub29wXSDmiafooYznu5Pmnpzov5Tlm55mYWxzZeeahOWbnuiwg1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZUNhbGwgKHJldCwgc3VjY2VzcywgZmFpbHVyZSA9IG5vb3ApIHtcbiAgICBpZiAoaXNQcm9taXNlKHJldCkpIHtcbiAgICAgICAgcmV0dXJuIHJldC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGZhaWx1cmUoZSk7XG4gICAgICAgICAgICAvLyB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0ICE9PSBmYWxzZSA/IHN1Y2Nlc3MocmV0KSA6IGZhaWx1cmUocmV0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Z1bmMuanMiLCJpbXBvcnQgeyBpc1Byb2R1Y3Rpb24gfSBmcm9tICcuL2Vudic7XG5cbi8qIGVzbGludCBuby1jb25zb2xlOiAwICovXG5cbi8qKlxuICog5Y+N5a+55L2/55So5p+Q5LiA5pa55rOV5oiW5bGe5oCn55qE6K2m5ZGKXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BzICAgICDov4fml7bnmoTlsZ7mgKfmiJbmlrnms5XlkI1cbiAqIEBwYXJhbSAge1N0cmluZ30gaW5zdGVhZCAgIOabv+S7o+eahOWxnuaAp+aIluaWueazleWQjVxuICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnQg57uE5Lu25ZCNXG4gKlxuICogQGV4YW1wbGVcbiAqIGxvZy5kZXByZWNhdGVkKCdvbkJlZm9yZUNsb3NlJywgJ2JlZm9yZUNsb3NlJywgJ0RpYWxvZycpO1xuICogLy8gV2FybmluZzogb25CZWZvcmVDbG9zZSBpcyBkZXByZWNhdGVkIGF0IFsgRGlhbG9nIF0sIHVzZSBbIGJlZm9yZUNsb3NlIF0gaW5zdGVhZCBvZiBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZWQgKHByb3BzLCBpbnN0ZWFkLCBjb21wb25lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghaXNQcm9kdWN0aW9uKCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgV2FybmluZzogWyAke3Byb3BzfSBdIGlzIGRlcHJlY2F0ZWQgYXQgWyAke2NvbXBvbmVudH0gXSwgYCArXG4gICAgICAgICAgICBgdXNlIFsgJHtpbnN0ZWFkfSBdIGluc3RlYWQgb2YgaXQuYFxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiDmjqfliLblj7DorablkYrml6Xlv5dcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nIChtc2cpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgV2FybmluZzogJHttc2d9YCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nLmpzIiwiaW1wb3J0IHtoYXNET019IGZyb20gJy4vZG9tJztcbmltcG9ydCB7ZWFjaH0gZnJvbSAnLi9vYmplY3QnO1xuXG5jb25zdCBhbmltYXRpb25FbmRFdmVudE5hbWVzID0ge1xuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcbn07XG5cbmNvbnN0IHRyYW5zaXRpb25FdmVudE5hbWVzID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbn07XG5cbi8qKlxuICog5piv5ZCm5pSv5oyB5p+Q5Lqb5Yqo5pWI5LqL5Lu277yM5aaC5p6c5pSv5oyB77yM6L+U5Zue55u45bqU55qEZW5k5LqL5Lu25ZCNXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7T2JqZWN0PFN0cmluZz59IG5hbWVzXG4gKiBAcmV0dXJuIHtPYmplY3R8ZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIF9zdXBwb3J0RW5kIChuYW1lcykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaGFzRE9NKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByZXQgPSBmYWxzZTtcblxuICAgIGVhY2gobmFtZXMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoZWwuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXQgPSB7ZW5kOiB2YWx9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIOaYr+WQpuaUr+aMgeafkOS6m0NTU+WxnuaAp1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge09iamVjdDxBcnJheTxTdHJpbmc+Pn0gbmFtZXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgIGlzIHN1cHBvcnRcbiAqL1xuZnVuY3Rpb24gX3N1cHBvcnRDU1MgKG5hbWVzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFoYXNET00pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgZWFjaChuYW1lcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGVhY2godmFsLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0IHx8IGVsLnN0eWxlW2tleV0gPT09IGl0ZW07XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQgd2lsbCBiZSB0aHJvdyBlcnJvciB3aGVuIHNldCB1bmtub3duIHByb3BlcnR5IHVuZGVyIElFOFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFyZXQ7IC8vIOWmguaenOacieS4gOS4quaUr+aMgeWwsei/lOWbnmZhbHNl77yM5ZCO6Z2i5LiN6ZyA6KaB5YaN5Yik5patXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhcmV0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiDmmK/lkKbmlK/mjIFhbmltYXRpb27ku6Xlj4rliqjnlLvnu5PmnZ/kuovku7blkI1cbiAqIEB0eXBlIHtPYmplY3R8ZmFsc2V9XG4gKiBAcHJvcGVydHkge1N0cmluZ30gZW5kIOWKqOeUu+e7k+adn+S6i+S7tuWQjVxuICovXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0gX3N1cHBvcnRFbmQoYW5pbWF0aW9uRW5kRXZlbnROYW1lcyk7XG5cbi8qKlxuICog5piv5ZCm5pSv5oyBdHJhbnNpdGlvbuS7peWPiui/h+a7pOaViOaenOe7k+adn+S6i+S7tuWQjVxuICogQHR5cGUge09iamVjdHxmYWxzZX1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBlbmQg6L+H5rih5pWI5p6c57uT5p2f5LqL5Lu25ZCNXG4gKi9cbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uID0gX3N1cHBvcnRFbmQodHJhbnNpdGlvbkV2ZW50TmFtZXMpO1xuXG4vKipcbiAqIOaYr+WQpuaUr+aMgWZsZXjlsZ7mgKdcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgZmxleCA9IF9zdXBwb3J0Q1NTKHtcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCAnLXdlYmtpdC1mbGV4JywgJy1tb3otZmxleCcsICctbXMtZmxleGJveCddXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3N1cHBvcnQuanMiLCJpbXBvcnQgS0VZQ09ERSBmcm9tICcuL2tleWNvZGUnO1xuaW1wb3J0IHtlYWNofSBmcm9tICcuL29iamVjdCc7XG5cbi8qKlxuICog55So5LqO5YiH5o2i6aG16Z2i5YWD57Sg55qE54Sm54K5XG4gKi9cblxuXG4vKipcbiAqIOWFg+e0oOaYr+WQpuWPr+ingVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtFbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIF9pc1Zpc2libGUobm9kZSkge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBkb2N1bWVudC5ib2R5IHx8IG5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiDlhYPntKDmmK/lkKblj6/ku6Xojrflj5bnhKbngrlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gICB7RWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBfaXNGb2N1c2FibGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHRhYkluZGV4ID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgICBjb25zdCBoYXNUYWJJbmRleCA9ICFpc05hTih0YWJJbmRleCkgJiYgdGFiSW5kZXggPiAtMTtcblxuICAgIGlmIChfaXNWaXNpYmxlKG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmRpc2FibGVkICYmIG5vZGUudHlwZSAhPT0gJ2hpZGRlbic7XG4gICAgICAgIH0gZWxzZSBpZiAoWydzZWxlY3QnLCAndGV4dGFyZWEnLCAnYnV0dG9uJ10uaW5kZXhPZihub2RlTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmRpc2FibGVkO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGVOYW1lID09PSAnYScpIHtcbiAgICAgICAgICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBoYXNUYWJJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIOWIl+WHuuiDveiOt+WPlueEpueCueeahOWtkOiKgueCuVxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZSDlrrnlmajoioLngrlcbiAqIEByZXR1cm4ge0FycmF5PEVsZW1lbnQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9jdXNOb2RlTGlzdChub2RlKSB7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgY29uc3Qgbm9kZUxpc3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcblxuICAgIGVhY2gobm9kZUxpc3QsIGl0ZW0gPT4ge1xuICAgICAgICBpZiAoX2lzRm9jdXNhYmxlKGl0ZW0pKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvLWZvY3VzJykgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgICAgICAgICByZXNbbWV0aG9kXShpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKF9pc0ZvY3VzYWJsZShub2RlKSkge1xuICAgICAgICByZXMudW5zaGlmdChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyDnlKjkuo7orrDlvZXkuIrkuIDmrKHojrflvpfnhKbngrnnmoTml6DntKBcbmxldCBsYXN0Rm9jdXNFbGVtZW50ID0gbnVsbDtcblxuLyoqXG4gKiDkv53lrZjmnIDov5HkuIDmrKHojrflvpfnhKbngrnnmoTml6DntKBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMYXN0Rm9jdXNOb2RlKCkge1xuICAgIGxhc3RGb2N1c0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xufVxuXG4vKipcbiAqIOa4hemZpOeEpueCueiusOW9lVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMYXN0Rm9jdXNOb2RlKCkge1xuICAgIGxhc3RGb2N1c0VsZW1lbnQgPSBudWxsO1xufVxuXG4vKipcbiAqIOWwneivleWwhueEpueCueWIh+aNouWIsOS4iuS4gOS4quWFg+e0oFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja0xhc3RGb2N1c05vZGUoKSB7XG4gICAgaWYgKGxhc3RGb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOWFg+e0oOWPr+iDveW3sue7j+iiq+enu+WKqOS6hlxuICAgICAgICAgICAgbGFzdEZvY3VzRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgLi4uXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICog5Zyo6ZmQ5Yi255qE6IyD5Zu05YaF5YiH5o2i54Sm54K5XG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIOWuueWZqOiKgueCuVxuICogQHBhcmFtICB7RXZlbnR9IGUgICAgICDplK7nm5jkuovku7ZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0VGFiUmFuZ2Uobm9kZSwgZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuVEFCKSB7XG4gICAgICAgIGNvbnN0IHRhYk5vZGVMaXN0ID0gZ2V0Rm9jdXNOb2RlTGlzdChub2RlKTtcbiAgICAgICAgY29uc3QgbWF4SW5kZXggPSB0YWJOb2RlTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRhYk5vZGVMaXN0LmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRJbmRleCA9IGluZGV4ICsgKGUuc2hpZnRLZXkgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPCAwICYmICh0YXJnZXRJbmRleCA9IG1heEluZGV4KTtcbiAgICAgICAgICAgIHRhcmdldEluZGV4ID4gbWF4SW5kZXggJiYgKHRhcmdldEluZGV4ID0gMCk7XG4gICAgICAgICAgICB0YWJOb2RlTGlzdFt0YXJnZXRJbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2ZvY3VzLmpzIiwibGV0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbi8qKlxuICog55Sf5oiQ5YWo5bGA5ZSv5LiA55qEaWRcbiAqIEBwYXJhbSAge1N0cmluZ30gW3ByZWZpeD0nJ10g5YmN57yA5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKlxuICogQGV4YW1wbGVcbiAqIGd1aWQoKTsgLy8gajdqdjUwOWNcbiAqIGd1aWQoJ3ByZWZpeC0nKTsgLy8gcHJlZml4LWo3anY1MDlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBwcmVmaXggPSBwcmVmaXggfHwgJyc7XG5cbiAgICByZXR1cm4gcHJlZml4ICsgKHRpbWVzdGFtcCsrKS50b1N0cmluZygzNik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9ndWlkLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHZhbHVlcyBhcyBvYmplY3QgYW5kIGtleXNcbiAqIGdlbmVyYXRlZCBieSBydW5uaW5nIGVhY2ggb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5XG4gKiBvZiBvYmplY3QgdGhydSBpdGVyYXRlZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IG1hcEtleXMgPSAob2JqLCBmbikgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IGZuKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlcGxhY2Ugc3BlY2lmaWMga2V5IHdpdGggcHJlZml4IGBuZXh0YFxuICogYW5kIGxvd2VyY2FzZSBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlIHJlc3VsdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgcmVwbGFjZUtleSA9IGtleSA9PlxuICAgIGtleS5yZXBsYWNlKC9eKG5leHQpKFtBLVpdKS8sIChtYXRjaCwgcDEsIHAyKSA9PiBwMi50b0xvd2VyQ2FzZSgpKTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRyYW5zZm9ybUNvbnRleHQgPSBzb3VyY2UgPT4gbWFwS2V5cyhzb3VyY2UsIHJlcGxhY2VLZXkpO1xuXG4vKipcbiAqIENvbnN1bWVyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqL1xuY29uc3QgQ29uc3VtZXIgPSAoeyBjaGlsZHJlbiB9LCBjb250ZXh0KSA9PlxuICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHRyYW5zZm9ybUNvbnRleHQoY29udGV4dCkpIDogbnVsbDtcblxuLyoqXG4gKiBQcm9wVHlwZXNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKi9cbkNvbnN1bWVyLnByb3BUeXBlcyA9IHtcbiAgICAvLyBSZW5kZXIgY29udGV4dCBhcyBmdW5jdGlvblxuICAgIC8vIEZ1bmN0aW9uKGNvbnRleHQ6IG9iamVjdCk6IFJlYWN0RWxlbWVudFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBDb250ZXh0VHlwZXMgKGxlZ2FjeSBjb250ZXh0KVxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqL1xuQ29uc3VtZXIuY29udGV4dFR5cGVzID0ge1xuICAgIG5leHRQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV4dExvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBuZXh0UHVyZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV3UnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuZXh0V2FybmluZzogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN1bWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy1wcm92aWRlci9jb25zdW1lci5qc3giLCJjbGFzcyBDYWNoZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdG9yZSA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLnNpemUgPT09IDA7XG4gICAgfVxuXG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuaGFzKGtleSk7XG4gICAgfVxuXG4gICAgZ2V0KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuaGFzKGtleSkgPyB0aGlzLl9zdG9yZS5nZXQoa2V5KSA6IHRoaXMucm9vdCgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnIHx8IHJlcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlIDogcmVzO1xuICAgIH1cblxuICAgIGFkZChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmUuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9yZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIHRoaXMuX3N0b3JlLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIHJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5nZXQodGhpcy5fcm9vdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWctcHJvdmlkZXIvY2FjaGUuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb24vbWFpbi5zY3NzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwiaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgQmFsbG9vbiBmcm9tICcuL2JhbGxvb24nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBJbm5lciBmcm9tICcuL2lubmVyJztcblxuQmFsbG9vbi5Ub29sdGlwID0gQ29uZmlnUHJvdmlkZXIuY29uZmlnKFRvb2x0aXAsIHtcbiAgICB0cmFuc2Zvcm06IChwcm9wcywgZGVwcmVjYXRlZCkgPT4ge1xuICAgICAgICBpZiAoJ3RleHQnIGluIHByb3BzKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVkKCd0ZXh0JywgJ2NoaWxkcmVuJywgJ1Rvb2x0aXAnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdGV4dCwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgICAgICAgICAgIHByb3BzID0geyBjaGlsZHJlbjogdGV4dCwgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5CYWxsb29uLklubmVyID0gSW5uZXI7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhCYWxsb29uLCB7XG4gICAgdHJhbnNmb3JtOiAocHJvcHMsIGRlcHJlY2F0ZWQpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmFsaWdubWVudCkge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnYWxpZ25tZW50JywgJ2FsaWduRWRnZScsICdCYWxsb29uJyk7XG4gICAgICAgICAgICBjb25zdCB7IGFsaWdubWVudCwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgICAgICAgICAgIHByb3BzID0geyBhbGlnbkVkZ2U6IGFsaWdubWVudCA9PT0gJ2VkZ2UnLCAuLi5vdGhlcnMgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMub25DbG9zZUNsaWNrKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVkKCdvbkNsb3NlQ2xpY2snLCAnb25WaXNpYmxlQ2hhbmdlJywgJ0JhbGxvb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHsgb25DbG9zZUNsaWNrLCBvblZpc2libGVDaGFuZ2UsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gICAgICAgICAgICBjb25zdCBuZXdPblZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSwgcmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ2Nsb3NlQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlLCByZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm9wcyA9IHsgb25WaXNpYmxlQ2hhbmdlOiBuZXdPblZpc2libGVDaGFuZ2UsIC4uLm90aGVycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCB7ZnVuYywgb2JqLCBsb2d9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IEJhbGxvb25Jbm5lciBmcm9tICcuL2lubmVyJztcbmltcG9ydCB7bm9ybWFsTWFwLCBlZGdlTWFwfSBmcm9tICcuL2FsaWduTWFwJztcblxuY29uc3Qge25vb3B9ID0gZnVuYztcbmNvbnN0IHtQb3B1cH0gPSBPdmVybGF5O1xuXG5sZXQgYWxpZ25NYXAgPSBub3JtYWxNYXA7XG5cbi8qKiBCYWxsb29uICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsb29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwdXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcnRsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiHquWumuS5ieexu+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ5YaF5pWb5qC35byPXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa1ruWxgueahOWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLflvI/nsbvlnotcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ25vcm1hbCcsICdwcmltYXJ5J10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5b2T5YmN5pi+56S655qE54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgum7mOiupOaYvuekuueahOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5Zyo5pi+56S65ZKM6ZqQ6JeP6Kem5Y+R55qE5LqL5Lu2XG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmlzaWJsZSDlvLnlsYLmmK/lkKbpmpDol4/lkozmmL7npLpcbiAgICAgICAgICovXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlh7rlsYLlr7npvZDmlrnlvI9cbiAgICAgICAgICovXG4gICAgICAgIGFsaWduRWRnZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbmmL7npLrlhbPpl63mjInpkq5cbiAgICAgICAgICovXG4gICAgICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWHuuWxguS9jee9rlxuICAgICAgICAgKiBAZW51bWRlc2Mg5LiKLCDlj7MsIOS4iywg5bemLCDkuIrlt6YsIOS4iuWPsywg5LiL5bemLCDkuIvlj7MsIOW3puS4iiwg5bem5LiLLCDlj7PkuIosIOWPs+S4iyDlj4rlhbYg5Lik5Lik57uE5ZCIXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndCcsICdyJywgJ2InLCAnbCcsICd0bCcsICd0cicsICdibCcsICdicicsICdsdCcsICdsYicsICdydCcsICdyYiddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguebuOWvueS6jnRyaWdnZXLnmoTlrprkvY3nmoTlvq7osINcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5YWD57SgXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R6KGM5Li6XG4gICAgICAgICAqIOm8oOagh+aCrOa1riwg6I635Y+W5Yiw54Sm54K5LCDpvKDmoIfngrnlh7soJ2hvdmVyJ++8jCdmb2N1cyfvvIwnY2xpY2snKeaIluiAheWug+S7rOe7hOaIkOeahOaVsOe7hO+8jOWmgiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJUeXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcblxuICAgICAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS7u+S9lXZpc2libGXkuLpmYWxzZeaXtuS8muinpuWPkeeahOS6i+S7tlxuICAgICAgICAgKi9cbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm6L+b6KGM6Ieq5Yqo5L2N572u6LCD5pW0XG4gICAgICAgICAqL1xuICAgICAgICBuZWVkQWRqdXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxguWcqOinpuWPkeS7peWQjueahOW7tuaXtuaYvuekuiwg5Y2V5L2N5q+r56eSIG1zXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa1ruWxguWFs+mXreWQjuinpuWPkeeahOS6i+S7tiwg5aaC5p6c5pyJ5Yqo55S777yM5YiZ5Zyo5Yqo55S757uT5p2f5ZCO6Kem5Y+RXG4gICAgICAgICAqL1xuICAgICAgICBhZnRlckNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8uuWItuabtOaWsOWumuS9jeS/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgc2hvdWxkVXBkYXRlUG9zaXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5Ye6546w5ZCO5piv5ZCm6Ieq5YqoZm9jdXPliLDlhoXpg6jnrKzkuIDkuKrlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlronlhajoioLngrk65a+55LqOdHJpZ2dldFR5cGXkuLpjbGlja+eahOa1ruWxgizkvJrlnKjngrnlh7vpmaTkuobmta7lsYLlpJbnmoTlhbblroPljLrln5/ml7blhbPpl63mta7lsYIuc2FmZU5vZGXnlKjkuo7mt7vliqDkuI3op6blj5HlhbPpl63nmoToioLngrksIOWAvOWPr+S7peaYr2RvbeiKgueCueeahGlk5oiW6ICF5piv6IqC54K555qEZG9t5a+56LGhXG4gICAgICAgICAqL1xuICAgICAgICBzYWZlTm9kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeUqOadpeaMh+WumnNhZmVOb2Rl6IqC54K555qEaWTvvIzlkoxzYWZlTm9kZemFjeWQiOS9v+eUqFxuICAgICAgICAgKi9cbiAgICAgICAgc2FmZUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6YWN572u5Yqo55S755qE5pKt5pS+5pa55byPXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbiDov5vlnLrliqjnlLtcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG91dCDlh7rlnLrliqjnlLtcbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC55qEZG9t6IqC54K55YWz6Zet5pe25piv5ZCm5Yig6ZmkXG4gICAgICAgICAqL1xuICAgICAgICBjYWNoZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjIflrprmta7lsYLmuLLmn5PnmoTniLboioLngrksIOWPr+S7peS4uuiKgueCuWlk55qE5a2X56ym5Liy77yM5Lmf5Y+v5Lul6L+U5Zue6IqC54K555qE5Ye95pWw44CCXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgICAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu2c3R5bGXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tmNsYXNzTmFtZe+8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tuWxnuaAp++8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGCaWQsIOS8oOWFpeWAvOaJjeS8muaUr+aMgeaXoOmanOeijVxuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgcHVyZTogZmFsc2UsXG4gICAgICAgIHR5cGU6ICdub3JtYWwnLFxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdFZpc2libGU6IGZhbHNlLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICAgICAgYWxpZ25FZGdlOiBmYWxzZSxcbiAgICAgICAgYWxpZ246ICdiJyxcbiAgICAgICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgICAgIHRyaWdnZXI6IDxzcGFuPjwvc3Bhbj4sXG4gICAgICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgICAgIGFmdGVyQ2xvc2U6IG5vb3AsXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICAgICAgbmVlZEFkanVzdDogZmFsc2UsXG4gICAgICAgIHRyaWdnZXJUeXBlOiAnaG92ZXInLFxuICAgICAgICBzYWZlTm9kZTogdW5kZWZpbmVkLFxuICAgICAgICBzYWZlSWQ6IG51bGwsXG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgaW46ICd6b29tSW4nLFxuICAgICAgICAgICAgb3V0OiAnem9vbU91dCdcbiAgICAgICAgfSxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBwb3B1cFN0eWxlOiB7fSxcbiAgICAgICAgcG9wdXBDbGFzc05hbWU6ICcnLFxuICAgICAgICBwb3B1cFByb3BzOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbGlnbjogcHJvcHMuYWxpZ24sXG4gICAgICAgICAgICB2aXNpYmxlOiAndmlzaWJsZScgaW4gcHJvcHMgPyBwcm9wcy52aXNpYmxlIDogcHJvcHMuZGVmYXVsdFZpc2libGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fb25DbG9zZSA9IHRoaXMuX29uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fb25Qb3NpdGlvbiA9IHRoaXMuX29uUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fb25WaXNpYmxlQ2hhbmdlID0gdGhpcy5fb25WaXNpYmxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fY29udGVudElkID0gcHJvcHMuaWQ7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCd2aXNpYmxlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnYWxpZ24nIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWxpZ246IG5leHRQcm9wcy5hbGlnblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25WaXNpYmxlQ2hhbmdlKHZpc2libGUsIHRyaWdnZXIpIHtcbiAgICAgICAgLy8gTm90IENvbnRyb2xsZWRcbiAgICAgICAgaWYgKCEoJ3Zpc2libGUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25WaXNpYmxlQ2hhbmdlKHZpc2libGUsIHRyaWdnZXIpO1xuXG4gICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25DbG9zZShlKSB7XG4gICAgICAgIHRoaXMuX29uVmlzaWJsZUNoYW5nZShmYWxzZSwgJ2Nsb3NlQ2xpY2snKTtcblxuICAgICAgICAvL+W/hemhu+WKoOS4inByZXZlbnREZWZhdWx0LOWQpuWImeWNlea1i0lF5LiL5oql6ZSZLOWHuueOsGZ1bGwgcGFnZSByZWxvYWQg5byC5bi4XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBfb25Qb3NpdGlvbihyZXMpIHtcbiAgICAgICAgY29uc3QgeyBydGwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGFsaWduTWFwID0gdGhpcy5wcm9wcy5hbGlnbkVkZ2UgPyBlZGdlTWFwIDogbm9ybWFsTWFwO1xuICAgICAgICBjb25zdCBuZXdBbGlnbiA9IHJlcy5hbGlnbi5qb2luKCcgJyk7XG4gICAgICAgIGxldCByZXNBbGlnbjtcblxuICAgICAgICBsZXQgYWxpZ25LZXkgPSAnYWxpZ24nO1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBhbGlnbktleSA9ICdydGxBbGlnbic7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGlnbk1hcCkge1xuICAgICAgICAgICAgaWYgKGFsaWduTWFwW2tleV1bYWxpZ25LZXldID09PSBuZXdBbGlnbikge1xuICAgICAgICAgICAgICAgIHJlc0FsaWduID0ga2V5O1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNBbGlnbiA9IHJlc0FsaWduIHx8IHRoaXMuc3RhdGUuYWxpZ247XG4gICAgICAgIGlmIChyZXNBbGlnbiAhPT0gdGhpcy5zdGF0ZS5hbGlnbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWxpZ246IHJlc0FsaWduXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBwcmVmaXgsIGNsYXNzTmFtZSwgYWxpZ25FZGdlLFxuICAgICAgICAgICAgdHJpZ2dlciwgdHJpZ2dlclR5cGUsIGNoaWxkcmVuLCBjbG9zYWJsZSxcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uLCBkZWxheSwgbmVlZEFkanVzdCxcbiAgICAgICAgICAgIHNhZmVJZCwgYXV0b0ZvY3VzLCBzYWZlTm9kZSwgb25DbGljaywgb25Ib3ZlcixcbiAgICAgICAgICAgIGFuaW1hdGlvbiwgb2Zmc2V0LCBzdHlsZSwgY29udGFpbmVyLCBwb3B1cENvbnRhaW5lciwgY2FjaGUsIHBvcHVwU3R5bGUsIHBvcHVwQ2xhc3NOYW1lLCBwb3B1cFByb3BzLCBydGwsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBsb2cuZGVwcmVjYXRlZCgnY29udGFpbmVyJywgJ3BvcHVwQ29udGFpbmVyJywgJ0JhbGxvb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWxpZ24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgYWxpZ25NYXAgPSBhbGlnbkVkZ2UgPyBlZGdlTWFwIDogbm9ybWFsTWFwO1xuICAgICAgICBjb25zdCBfcHJlZml4ID0gdGhpcy5jb250ZXh0LnByZWZpeCB8fCBwcmVmaXg7XG5cbiAgICAgICAgbGV0IHRyT3JpZ2luID0gJ3RyT3JpZ2luJztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgdHJPcmlnaW4gPSAncnRsVHJPcmlnaW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgX29mZnNldCA9IFthbGlnbk1hcFthbGlnbl0ub2Zmc2V0WzBdICsgb2Zmc2V0WzBdLCBhbGlnbk1hcFthbGlnbl0ub2Zmc2V0WzFdICsgb2Zmc2V0WzFdXTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYWxpZ25NYXBbYWxpZ25dW3RyT3JpZ2luXTtcbiAgICAgICAgY29uc3QgX3N0eWxlID0gey4uLnt0cmFuc2Zvcm1PcmlnaW59LCAuLi5zdHlsZX07XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9ICg8QmFsbG9vbklubmVyXG4gICAgICAgICAgICB7Li4ub2JqLnBpY2tPdGhlcnMoT2JqZWN0LmtleXMoQmFsbG9vbi5wcm9wVHlwZXMpLCBvdGhlcnMpfVxuICAgICAgICAgICAgaWQ9e3RoaXMuX2NvbnRlbnRJZH1cbiAgICAgICAgICAgIHByZWZpeD17X3ByZWZpeH1cbiAgICAgICAgICAgIGNsb3NhYmxlPXtjbG9zYWJsZX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXtfc3R5bGV9XG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgcnRsPXtydGx9XG4gICAgICAgICAgICBhbGlnbkVkZ2U9e2FsaWduRWRnZX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JhbGxvb25Jbm5lcj4pO1xuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJQcm9wcyA9IHt9O1xuICAgICAgICB0cmlnZ2VyUHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHRoaXMuX2NvbnRlbnRJZDtcbiAgICAgICAgdHJpZ2dlclByb3BzLnRhYkluZGV4ID0gJzAnO1xuXG4gICAgICAgIGNvbnN0IG5ld1RyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwgdHJpZ2dlclByb3BzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgey4uLnBvcHVwUHJvcHN9XG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17dGhpcy5fY29udGVudElkID8gbmV3VHJpZ2dlciA6IHRyaWdnZXJ9XG4gICAgICAgICAgICAgICAgY2FjaGU9e2NhY2hlfVxuICAgICAgICAgICAgICAgIHNhZmVJZD17c2FmZUlkfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlPXt0cmlnZ2VyVHlwZX1cbiAgICAgICAgICAgICAgICBhbGlnbj17YWxpZ25NYXBbYWxpZ25dLmFsaWdufVxuICAgICAgICAgICAgICAgIG9mZnNldD17X29mZnNldH1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbj17dGhpcy5fb25Qb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIG9uSG92ZXI9e29uSG92ZXJ9XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZT17dGhpcy5wcm9wcy5hZnRlckNsb3NlfVxuICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5fb25WaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uPXtzaG91bGRVcGRhdGVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBuZWVkQWRqdXN0PXtuZWVkQWRqdXN0fVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17YW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIGRlbGF5PXtkZWxheX1cbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cbiAgICAgICAgICAgICAgICBzYWZlTm9kZT17c2FmZU5vZGV9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyPXtwb3B1cENvbnRhaW5lciB8fCBjb250YWluZXJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3B1cENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17cG9wdXBTdHlsZX1cbiAgICAgICAgICAgICAgICBydGw9e3J0bH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vYmFsbG9vbi5qc3giLCJjb25zdCBvdmVybGF5TWFuYWdlciA9IHtcbiAgICBhbGxPdmVybGF5czogW10sXG5cbiAgICBhZGRPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVPdmVybGF5KG92ZXJsYXkpO1xuICAgICAgICB0aGlzLmFsbE92ZXJsYXlzLnVuc2hpZnQob3ZlcmxheSk7XG4gICAgfSxcblxuICAgIGlzQ3VycmVudE92ZXJsYXkob3ZlcmxheSkge1xuICAgICAgICByZXR1cm4gb3ZlcmxheSAmJiB0aGlzLmFsbE92ZXJsYXlzWzBdID09PSBvdmVybGF5O1xuICAgIH0sXG5cbiAgICByZW1vdmVPdmVybGF5KG92ZXJsYXkpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuYWxsT3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hbGxPdmVybGF5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvdmVybGF5TWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L21hbmFnZXIuanMiLCJpbXBvcnQge2RvbX0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmNvbnN0IFZJRVdQT1JUID0gJ3ZpZXdwb3J0JztcblxuLy8gSUU4IG5vdCBzdXBwb3J0IHBhZ2VYT2Zmc2V0XG5jb25zdCBnZXRQYWdlWCA9ICgpID0+IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbmNvbnN0IGdldFBhZ2VZID0gKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbi8qKlxuICogQHByaXZhdGUgZ2V0IGVsZW1lbnQgcmVjdFxuICogQHBhcmFtICAgICAgIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJuICAgICAge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldEVsZW1lbnRSZWN0IChlbGVtKSB7XG4gICAgbGV0IG9mZnNldFRvcCA9IDAsXG4gICAgICAgIG9mZnNldExlZnQgPSAwO1xuXG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuXG4gICAgZG8ge1xuICAgICAgICBpZiAoIWlzTmFOKGVsZW0ub2Zmc2V0VG9wKSkge1xuICAgICAgICAgICAgb2Zmc2V0VG9wICs9IGVsZW0ub2Zmc2V0VG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOYU4oZWxlbS5vZmZzZXRMZWZ0KSkge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdCArPSBlbGVtLm9mZnNldExlZnQ7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlICgoZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50KSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IG9mZnNldFRvcCAtIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSxcbiAgICAgICAgbGVmdDogb2Zmc2V0TGVmdCAtIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQpLFxuICAgICAgICBoZWlnaHQ6IG9mZnNldEhlaWdodCxcbiAgICAgICAgd2lkdGg6IG9mZnNldFdpZHRoXG4gICAgfTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZSBnZXQgdmlld3BvcnQgc2l6ZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0Vmlld3BvcnRTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG5cbiAgICBzdGF0aWMgVklFV1BPUlQgPSBWSUVXUE9SVDtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgc3RhdGljIHBsYWNlIG1ldGhvZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgcHJvcHNcbiAgICAgKiAgICAgQHBhcmFtICB7RE9NfSAgICAgIHByb3BzLnBpbkVsZW1lbnRcbiAgICAgKiAgICAgQHBhcmFtICB7RE9NfSAgICAgIHByb3BzLmJhc2VFbGVtZW50XG4gICAgICogICAgIEBwYXJhbSAge1N0cmluZ30gICBwcm9wcy5hbGlnblxuICAgICAqICAgICBAcGFyYW0gIHtOdW1iZXJ9ICAgcHJvcHMub2Zmc2V0XG4gICAgICogICAgIEBwYXJhbSAge0Jvb2xlYW59ICBwcm9wcy5uZWVkQWRqdXN0XG4gICAgICogICAgIEBwYXJhbSAge0Jvb2xlYW59ICBwcm9wcy5pc1J0bFxuICAgICAqIEByZXR1cm4ge1Bvc2l0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBwbGFjZSA9IHByb3BzID0+IG5ldyBQb3NpdGlvbihwcm9wcykuc2V0UG9zaXRpb24oKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5waW5FbGVtZW50ID0gcHJvcHMucGluRWxlbWVudDtcbiAgICAgICAgdGhpcy5iYXNlRWxlbWVudCA9IHByb3BzLmJhc2VFbGVtZW50O1xuICAgICAgICB0aGlzLmFsaWduID0gcHJvcHMuYWxpZ24gfHwgJ3RsIHRsJztcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwcm9wcy5vZmZzZXQgfHwgWzAsIDBdO1xuICAgICAgICB0aGlzLm5lZWRBZGp1c3QgPSBwcm9wcy5uZWVkQWRqdXN0IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUnRsID0gcHJvcHMuaXNSdGwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHBpbkVsZW1lbnQgPSB0aGlzLnBpbkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJhc2VFbGVtZW50ID0gdGhpcy5iYXNlRWxlbWVudDtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRBbGlnbiA9IHRoaXMuX2dldEV4cGVjdGVkQWxpZ24oKTtcbiAgICAgICAgbGV0IGlzUGluRml4ZWQsIGlzQmFzZUZpeGVkLCBmaXJzdFBvc2l0aW9uUmVzdWx0O1xuICAgICAgICBpZiAocGluRWxlbWVudCA9PT0gVklFV1BPUlQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLmdldFN0eWxlKHBpbkVsZW1lbnQsICdwb3NpdGlvbicpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBkb20uc2V0U3R5bGUocGluRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgICBpc1BpbkZpeGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1BpbkZpeGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFzZUVsZW1lbnQgPT09IFZJRVdQT1JUIHx8IGRvbS5nZXRTdHlsZShiYXNlRWxlbWVudCwgJ3Bvc2l0aW9uJykgIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGlzQmFzZUZpeGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0Jhc2VGaXhlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qC55o2u5pyf5pyb55qE5a6a5L2NXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwZWN0ZWRBbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYWxpZ24gPSBleHBlY3RlZEFsaWduW2ldO1xuICAgICAgICAgICAgY29uc3QgcGluRWxlbWVudFBvaW50cyA9IHRoaXMuX25vcm1hbGl6ZVBvc2l0aW9uKHBpbkVsZW1lbnQsIGFsaWduLnNwbGl0KCcgJylbMF0sIGlzUGluRml4ZWQpO1xuICAgICAgICAgICAgY29uc3QgYmFzZUVsZW1lbnRQb2ludHMgPSB0aGlzLl9ub3JtYWxpemVQb3NpdGlvbihiYXNlRWxlbWVudCwgYWxpZ24uc3BsaXQoJyAnKVsxXSwgaXNQaW5GaXhlZCk7XG4gICAgICAgICAgICBjb25zdCBwaW5FbGVtZW50UGFyZW50T2Zmc2V0ID0gdGhpcy5fZ2V0UGFyZW50T2Zmc2V0KHBpbkVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgYmFzZUVsZW1lbnRPZmZzZXQgPSAoaXNQaW5GaXhlZCAmJiBpc0Jhc2VGaXhlZCkgPyB0aGlzLl9nZXRMZWZ0VG9wKGJhc2VFbGVtZW50KSA6IGJhc2VFbGVtZW50UG9pbnRzLm9mZnNldCgpO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gYmFzZUVsZW1lbnRPZmZzZXQudG9wICsgYmFzZUVsZW1lbnRQb2ludHMueSAtIHBpbkVsZW1lbnRQYXJlbnRPZmZzZXQudG9wIC0gcGluRWxlbWVudFBvaW50cy55O1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGJhc2VFbGVtZW50T2Zmc2V0LmxlZnQgKyBiYXNlRWxlbWVudFBvaW50cy54IC0gcGluRWxlbWVudFBhcmVudE9mZnNldC5sZWZ0ICAtIHBpbkVsZW1lbnRQb2ludHMueDtcbiAgICAgICAgICAgIHRoaXMuX3NldFBpbkVsZW1lbnRQb3N0aW9uKHBpbkVsZW1lbnQsIHtsZWZ0LCB0b3B9LCB0aGlzLm9mZnNldCk7XG5cbiAgICAgICAgICAgIGlmICghZmlyc3RQb3NpdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGZpcnN0UG9zaXRpb25SZXN1bHQgPSB7bGVmdCwgdG9wfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luVmlld3BvcnQocGluRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxpZ247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpblZpZXdwb3J0TGVmdCA9IHRoaXMuX21ha2VFbGVtZW50SW5WaWV3cG9ydChwaW5FbGVtZW50LCBmaXJzdFBvc2l0aW9uUmVzdWx0LmxlZnQsICdMZWZ0JywgaXNQaW5GaXhlZCk7XG4gICAgICAgIGNvbnN0IGluVmlld3BvcnRUb3AgPSB0aGlzLl9tYWtlRWxlbWVudEluVmlld3BvcnQocGluRWxlbWVudCwgZmlyc3RQb3NpdGlvblJlc3VsdC50b3AsICdUb3AnLCBpc1BpbkZpeGVkKTtcblxuICAgICAgICB0aGlzLl9zZXRQaW5FbGVtZW50UG9zdGlvbihwaW5FbGVtZW50LCB7bGVmdDogaW5WaWV3cG9ydExlZnQsIHRvcDogaW5WaWV3cG9ydFRvcH0pO1xuICAgICAgICByZXR1cm4gZXhwZWN0ZWRBbGlnblswXTtcbiAgICB9XG5cbiAgICBfZ2V0UGFyZW50T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICBpZiAocGFyZW50ID09PSBkb2N1bWVudC5ib2R5ICYmIGRvbS5nZXRTdHlsZShwYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldChwYXJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2Zmc2V0LnRvcCArPSBwYXJzZUZsb2F0KGRvbS5nZXRTdHlsZShwYXJlbnQsICdib3JkZXItdG9wLXdpZHRoJyksIDEwKTtcbiAgICAgICAgb2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUocGFyZW50LCAnYm9yZGVyLWxlZnQtd2lkdGgnKSwgMTApO1xuICAgICAgICBvZmZzZXQub2Zmc2V0UGFyZW50ID0gcGFyZW50O1xuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cblxuICAgIF9tYWtlRWxlbWVudEluVmlld3BvcnQocGluRWxlbWVudCwgbnVtYmVyLCB0eXBlLCBpc1BpbkZpeGVkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudW1iZXI7XG4gICAgICAgIGNvbnN0IGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFBhcmVudCA9IHBpbkVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgaWYgKGlzUGluRml4ZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgJiYgZG9tLmdldFN0eWxlKG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB3aGVuIGRpdidzIG9mZnNldFBhcmVudCBpcyBkb2N1bWVudC5ib2R5LCB3ZSBzZXQgbmV3IHBvc2l0aW9uIHJlc3VsdC5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBNYXRoLm1heChkb2NFbGVtZW50W2BzY3JvbGwke3R5cGV9YF0sIGRvY3VtZW50LmJvZHlbYHNjcm9sbCR7dHlwZX1gXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9ub3JtYWxpemVQb3NpdGlvbihlbGVtZW50LCBhbGlnbiwgaXNQaW5GaXhlZCkge1xuICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLl9ub3JtYWxpemVFbGVtZW50KGVsZW1lbnQsIGlzUGluRml4ZWQpO1xuICAgICAgICB0aGlzLl9ub3JtYWxpemVYWShwb2ludHMsIGFsaWduKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cblxuICAgIF9ub3JtYWxpemVYWShwb2ludHMsIGFsaWduKSB7XG4gICAgICAgIGNvbnN0IHggPSBhbGlnbi5zcGxpdCgnJylbMV07XG4gICAgICAgIGNvbnN0IHkgPSBhbGlnbi5zcGxpdCgnJylbMF07XG5cbiAgICAgICAgcG9pbnRzLnggPSB0aGlzLl94eUNvbnZlcnRlcih4LCBwb2ludHMsICd3aWR0aCcpO1xuICAgICAgICBwb2ludHMueSA9IHRoaXMuX3h5Q29udmVydGVyKHksIHBvaW50cywgJ2hlaWdodCcpO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuXG4gICAgX3h5Q29udmVydGVyKGFsaWduLCBwb2ludHMsIHR5cGUpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYWxpZ24ucmVwbGFjZSgvdHxsL2dpLCAnMCUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL2MvZ2ksICc1MCUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL2J8ci9naSwgJzEwMCUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXGQrKSUvZ2ksIGZ1bmN0aW9uKG0sIGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzLnNpemUoKVt0eXBlXSAqIChkIC8gMTAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHJlcywgMTApIHx8IDA7XG4gICAgfVxuXG4gICAgX2dldExlZnRUb3AoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUoZWxlbWVudCwgJ2xlZnQnKSkgfHwgMCxcbiAgICAgICAgICAgIHRvcDogcGFyc2VGbG9hdChkb20uZ2V0U3R5bGUoZWxlbWVudCwgJ3RvcCcpKSB8fCAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX25vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCwgaXNQaW5GaXhlZCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sIGlzVmlld3BvcnQgPSAoZWxlbWVudCA9PT0gVklFV1BPUlQpLCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHJlc3VsdC5vZmZzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNQaW5GaXhlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBnZXRQYWdlWCgpLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGdldFBhZ2VZKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RWxlbWVudE9mZnNldChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXN1bHQuc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRvY0VsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZG9jRWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZ2V0RWxlbWVudE9mZnNldChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgY29uc3QgZG9jQ2xpZW50TGVmdCA9IChkb2NFbGVtZW50LmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgICBjb25zdCBkb2NDbGllbnRUb3AgPSAoZG9jRWxlbWVudC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIChnZXRQYWdlWCgpIC0gZG9jQ2xpZW50TGVmdCksXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgKGdldFBhZ2VZKCkgLSBkb2NDbGllbnRUb3ApXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgb3ZlcmZsb3cgdG8gY2FsY3VsYXRlIHRoZSBkZXNpcmVkIHBvc2l0aW9uaW5nXG4gICAgX2dldEV4cGVjdGVkQWxpZ24oKSB7XG4gICAgICAgIGNvbnN0IGFsaWduID0gdGhpcy5pc1J0bCA/IHRoaXMuX3JlcGxhY2VBbGlnbkRpcih0aGlzLmFsaWduLCAvbHxyL2csIHtsOiAncicsIHI6ICdsJ30pIDogdGhpcy5hbGlnbjtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRBbGlnbiA9IFthbGlnbl07XG5cbiAgICAgICAgaWYgKHRoaXMubmVlZEFkanVzdCkge1xuICAgICAgICAgICAgaWYgKC90fGIvZy50ZXN0KGFsaWduKSkge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkQWxpZ24ucHVzaCh0aGlzLl9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIC90fGIvZywge3Q6ICdiJywgYjogJ3QnfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9sfHIvZy50ZXN0KGFsaWduKSkge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkQWxpZ24ucHVzaCh0aGlzLl9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIC9sfHIvZywge2w6ICdyJywgcjogJ2wnfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9jL2cudGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvYyg/PSB8JCkvZywge2M6ICdsJ30pKTtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsaWduLnB1c2godGhpcy5fcmVwbGFjZUFsaWduRGlyKGFsaWduLCAvYyg/PSB8JCkvZywge2M6ICdyJ30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGVjdGVkQWxpZ24ucHVzaCh0aGlzLl9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIC9sfHJ8dHxiL2csIHtsOiAncicsIHI6ICdsJywgdDogJ2InLCBiOiAndCd9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cGVjdGVkQWxpZ247XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGFsaWduIG9yZGVyLlxuICAgIF9yZXBsYWNlQWxpZ25EaXIoYWxpZ24sIHJlZ0V4cCwgbWFwKSB7XG4gICAgICAgIHJldHVybiBhbGlnbi5yZXBsYWNlKHJlZ0V4cCwgcmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXBbcmVzXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0aW5nIGVsZW1lbnQgaXMgaW4gdGhlIHdpbmRvd++8jCB3ZSB3YW50IHRvIGFkanVzdCBwb3NpdGlvbiBsYXRlci5cbiAgICBfaXNJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRTaXplID0gX2dldFZpZXdwb3J0U2l6ZSgpO1xuICAgICAgICAvLyBBdm9pZCBhbmltYXRlIHByb2JsZW0gdGhhdCB1c2Ugb2Zmc2V0V2lkdGggaW5zdGVhZCBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3QuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gX2dldEVsZW1lbnRSZWN0KGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gKGVsZW1lbnRSZWN0LmxlZnQgPj0gMCAmJiBlbGVtZW50UmVjdC5sZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCA8PSB2aWV3cG9ydFNpemUud2lkdGggJiZcbiAgICAgICAgICAgIGVsZW1lbnRSZWN0LnRvcCA+PSAwICYmIGVsZW1lbnRSZWN0LnRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IHZpZXdwb3J0U2l6ZS5oZWlnaHQpO1xuICAgIH1cbiAgICAvLyDlnKjov5nph4zlgZpSVEzliKTmlq0gdG9wLWxlZnQg5a6a5L2N6L2s5YyW5Li6562J5pWI55qEIHRvcC1yaWdodOWumuS9jVxuICAgIF9zZXRQaW5FbGVtZW50UG9zdGlvbihwaW5FbGVtZW50LCBwb3N0aW9uLCBvZmZzZXQgPSBbMCwgMF0pIHtcbiAgICAgICAgY29uc3Qge3RvcCwgbGVmdH0gPSBwb3N0aW9uO1xuICAgICAgICBpZiAoIXRoaXMuaXNSdGwpIHtcbiAgICAgICAgICAgIGRvbS5zZXRTdHlsZShwaW5FbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgbGVmdDogYCR7bGVmdCArIG9mZnNldFswXX1weGAsXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0b3AgKyBvZmZzZXRbMV19cHhgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmFuc2ZlciB7bGVmdCx0b3B9IGVxdWFseSB0byB7cmlnaHQsdG9wfVxuICAgICAgICBjb25zdCBwaW5FbGVtZW50UGFyZW50T2Zmc2V0ID0gdGhpcy5fZ2V0UGFyZW50T2Zmc2V0KHBpbkVsZW1lbnQpO1xuICAgICAgICBjb25zdCB7d2lkdGg6IG9mZnNldFBhcmVudFdpZHRofSA9ICBfZ2V0RWxlbWVudFJlY3QocGluRWxlbWVudFBhcmVudE9mZnNldC5vZmZzZXRQYXJlbnQpO1xuICAgICAgICBjb25zdCB7d2lkdGh9ID0gX2dldEVsZW1lbnRSZWN0KHBpbkVsZW1lbnQpO1xuICAgICAgICBjb25zdCByaWdodCA9IG9mZnNldFBhcmVudFdpZHRoIC0gKGxlZnQgKyB3aWR0aCk7XG4gICAgICAgIGRvbS5zZXRTdHlsZShwaW5FbGVtZW50LCB7XG4gICAgICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICByaWdodDogYCR7cmlnaHQgKyBvZmZzZXRbMF19cHhgLFxuICAgICAgICAgICAgdG9wOiBgJHt0b3AgKyBvZmZzZXRbMV19cHhgLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3ZlcmxheS91dGlscy9wb3NpdGlvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZ1bmMsIEtFWUNPREUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSc7XG5cbmNvbnN0IHsgbm9vcCwgbWFrZUNoYWluLCBiaW5kQ3R4IH0gPSBmdW5jO1xuXG4vKipcbiAqIE92ZXJsYXkuUG9wdXBcbiAqIEBkZXNjcmlwdGlvbiDnu6fmib8gT3ZlcmxheSDnmoQgQVBJ77yM6Zmk6Z2e54m55Yir6K+05piOXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlhoXlrrlcbiAgICAgICAgICovXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOinpuWPkeW8ueWxguaYvuekuuaIlumakOiXj+eahOWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlvLnlsYLmmL7npLrmiJbpmpDol4/nmoTmk43kvZznsbvlnovvvIzlj6/ku6XmmK8gJ2NsaWNrJ++8jCdob3ZlcifvvIwnZm9jdXMn77yM5oiW6ICF5a6D5Lus57uE5oiQ55qE5pWw57uE77yM5aaCIFsnaG92ZXInLCAnZm9jdXMnXVxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclR5cGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5b2T5YmN5piv5ZCm5pi+56S6XG4gICAgICAgICAqL1xuICAgICAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgum7mOiupOaYr+WQpuaYvuekulxuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5pi+56S65oiW6ZqQ6JeP5pe26Kem5Y+R55qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmlzaWJsZSDlvLnlsYLmmK/lkKbmmL7npLpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg6Kem5Y+R5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5p2l5rqQXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIERPTeS6i+S7tlxuICAgICAgICAgKi9cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiuvue9ruatpOWxnuaAp++8jOW8ueWxguaXoOazleaYvuekuuaIlumakOiXj1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC5pi+56S65oiW6ZqQ6JeP55qE5bu25pe25pe26Ze077yI5Lul5q+r56eS5Li65Y2V5L2N77yJ77yM5ZyoIHRyaWdnZXJUeXBlIOiiq+iuvue9ruS4uiBob3ZlciDml7bnlJ/mlYhcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Kem5Y+R5YWD57Sg5piv5ZCm5Y+v5Lul5YWz6Zet5by55bGCXG4gICAgICAgICAqL1xuICAgICAgICBjYW5DbG9zZUJ5VHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYLlrprkvY3nmoTlj4LnhaflhYPntKBcbiAgICAgICAgICogQGRlZmF1bHQgdGFyZ2V0IOWxnuaAp++8jOWNs+inpuWPkeWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBzYWZlTm9kZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpui3n+maj3RyaWdnZXLmu5rliqhcbiAgICAgICAgICovXG4gICAgICAgIGZvbGxvd1RyaWdnZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBjb250YWluZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGhhc01hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHRyaWdnZXJUeXBlOiAnaG92ZXInLFxuICAgICAgICBkZWZhdWx0VmlzaWJsZTogZmFsc2UsXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBkZWxheTogMjAwLFxuICAgICAgICBjYW5DbG9zZUJ5VHJpZ2dlcjogdHJ1ZSxcbiAgICAgICAgZm9sbG93VHJpZ2dlcjogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lcjogKCkgPT4gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0eXBlb2YgcHJvcHMudmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5kZWZhdWx0VmlzaWJsZSA6IHByb3BzLnZpc2libGVcbiAgICAgICAgfTtcblxuICAgICAgICBiaW5kQ3R4KHRoaXMsIFtcbiAgICAgICAgICAgICdoYW5kbGVUcmlnZ2VyQ2xpY2snLCAnaGFuZGxlVHJpZ2dlcktleURvd24nLFxuICAgICAgICAgICAgJ2hhbmRsZVRyaWdnZXJNb3VzZUVudGVyJywgJ2hhbmRsZVRyaWdnZXJNb3VzZUxlYXZlJyxcbiAgICAgICAgICAgICdoYW5kbGVUcmlnZ2VyRm9jdXMnLCAnaGFuZGxlVHJpZ2dlckJsdXInLFxuICAgICAgICAgICAgJ2hhbmRsZUNvbnRlbnRNb3VzZUVudGVyJywgJ2hhbmRsZUNvbnRlbnRNb3VzZUxlYXZlJyxcbiAgICAgICAgICAgICdoYW5kbGVDb250ZW50TW91c2VEb3duJywgJ2hhbmRsZVJlcXVlc3RDbG9zZScsXG4gICAgICAgICAgICAnaGFuZGxlTWFza01vdXNlRW50ZXInLCAnaGFuZGxlTWFza01vdXNlTGVhdmUnXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgWydfdGltZXInLCAnX2hpZGVUaW1lcicsICdfc2hvd1RpbWVyJ10uZm9yRWFjaCh0aW1lID0+IHtcbiAgICAgICAgICAgIHRoaXNbdGltZV0gJiYgY2xlYXJUaW1lb3V0KHRoaXNbdGltZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVWaXNpYmxlQ2hhbmdlKHZpc2libGUsIHR5cGUsIGUpIHtcbiAgICAgICAgaWYgKCEoJ3Zpc2libGUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25WaXNpYmxlQ2hhbmdlKHZpc2libGUsIHR5cGUsIGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUgJiYgIXRoaXMucHJvcHMuY2FuQ2xvc2VCeVRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSghdGhpcy5zdGF0ZS52aXNpYmxlLCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyS2V5RG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBLRVlDT0RFLkVOVEVSKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyaWdnZXJDbGljayhlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyaWdnZXJNb3VzZUVudGVyKGUpIHtcbiAgICAgICAgdGhpcy5fbW91c2VOb3RGaXJzdE9uTWFzayA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9oaWRlVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2hvd1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSh0cnVlLCAnZnJvbVRyaWdnZXInLCBlKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUoZSwgdHlwZSkge1xuICAgICAgICBpZiAodGhpcy5fc2hvd1RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlLCB0eXBlIHx8ICdmcm9tVHJpZ2dlcicsIGUpO1xuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmlnZ2VyRm9jdXMoZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodHJ1ZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJpZ2dlckJsdXIoZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzRm9yd2FyZENvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSwgJ2Zyb21UcmlnZ2VyJywgZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNGb3J3YXJkQ29udGVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbnRlbnRNb3VzZURvd24oKSB7XG4gICAgICAgIHRoaXMuX2lzRm9yd2FyZENvbnRlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZUNvbnRlbnRNb3VzZUVudGVyKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb250ZW50TW91c2VMZWF2ZShlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUoZSwgJ2Zyb21Db250ZW50Jyk7XG4gICAgfVxuXG4gICAgaGFuZGxlTWFza01vdXNlRW50ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2VOb3RGaXJzdE9uTWFzaykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lcik7XG4gICAgICAgICAgICB0aGlzLl9oaWRlVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VOb3RGaXJzdE9uTWFzayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTWFza01vdXNlTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuX21vdXNlTm90Rmlyc3RPbk1hc2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSh0eXBlLCBlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSwgdHlwZSwgZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyVHJpZ2dlcigpIHtcbiAgICAgICAgY29uc3QgeyB0cmlnZ2VyLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBrZXk6ICd0cmlnZ2VyJyxcbiAgICAgICAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS52aXNpYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgeyB0cmlnZ2VyVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJUeXBlcyA9IEFycmF5LmlzQXJyYXkodHJpZ2dlclR5cGUpID8gdHJpZ2dlclR5cGUgOiBbdHJpZ2dlclR5cGVdO1xuICAgICAgICAgICAgY29uc3QgeyBvbkNsaWNrLCBvbktleURvd24sIG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRyaWdnZXIucHJvcHM7XG4gICAgICAgICAgICB0cmlnZ2VyVHlwZXMuZm9yRWFjaCh0cmlnZ2VyVHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cmlnZ2VyVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrLCBvbkNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uS2V5RG93biA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJLZXlEb3duLCBvbktleURvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hvdmVyJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlRW50ZXIgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VFbnRlciwgb25Nb3VzZUVudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uTW91c2VMZWF2ZSA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUxlYXZlLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRm9jdXMgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVUcmlnZ2VyRm9jdXMsIG9uRm9jdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25CbHVyID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlVHJpZ2dlckJsdXIsIG9uQmx1cik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0cmlnZ2VyLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgdHJpZ2dlclR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJUeXBlcyA9IEFycmF5LmlzQXJyYXkodHJpZ2dlclR5cGUpID8gdHJpZ2dlclR5cGUgOiBbdHJpZ2dlclR5cGVdO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIGNvbnN0IHsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlIH0gPSBjb250ZW50LnByb3BzO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIGtleTogJ3BvcnRhbCdcbiAgICAgICAgfTtcblxuICAgICAgICB0cmlnZ2VyVHlwZXMuZm9yRWFjaCh0cmlnZ2VyVHlwZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRyaWdnZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlRG93biA9IG1ha2VDaGFpbih0aGlzLmhhbmRsZUNvbnRlbnRNb3VzZURvd24sIG9uTW91c2VEb3duKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG92ZXInOlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbk1vdXNlRW50ZXIgPSBtYWtlQ2hhaW4odGhpcy5oYW5kbGVDb250ZW50TW91c2VFbnRlciwgb25Nb3VzZUVudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3VzZUxlYXZlID0gbWFrZUNoYWluKHRoaXMuaGFuZGxlQ29udGVudE1vdXNlTGVhdmUsIG9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNvbnRlbnQsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3J0YWwoKSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0LCBzYWZlTm9kZSwgZm9sbG93VHJpZ2dlciwgdHJpZ2dlclR5cGUsIGhhc01hc2ssIHdyYXBwZXJTdHlsZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2NvbnRhaW5lcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmaW5kVHJpZ2dlck5vZGUgPSAoKSA9PiAoZmluZERPTU5vZGUodGhpcykgfHwge30pO1xuICAgICAgICBjb25zdCBzYWZlTm9kZXMgPSBBcnJheS5pc0FycmF5KHNhZmVOb2RlKSA/IFsuLi5zYWZlTm9kZV0gOiBbc2FmZU5vZGVdO1xuICAgICAgICBzYWZlTm9kZXMudW5zaGlmdChmaW5kVHJpZ2dlck5vZGUpO1xuXG4gICAgICAgIGNvbnN0IG5ld1dyYXBwZXJTdHlsZSA9IHdyYXBwZXJTdHlsZSB8fCB7fTtcblxuICAgICAgICBpZiAoZm9sbG93VHJpZ2dlcikge1xuICAgICAgICAgICAgY29udGFpbmVyID0gdHJpZ2dlciA9PiB0cmlnZ2VyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBuZXdXcmFwcGVyU3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJUeXBlID09PSAnaG92ZXInICYmIGhhc01hc2spIHtcbiAgICAgICAgICAgIG90aGVycy5vbk1hc2tNb3VzZUVudGVyID0gdGhpcy5oYW5kbGVNYXNrTW91c2VFbnRlcjtcbiAgICAgICAgICAgIG90aGVycy5vbk1hc2tNb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVNYXNrTW91c2VMZWF2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8T3ZlcmxheSB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICAgIGtleT1cIm92ZXJsYXlcIlxuICAgICAgICAgICAgICAgIHJlZj17b3ZlcmxheSA9PiAodGhpcy5vdmVybGF5ID0gb3ZlcmxheSl9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgIHRhcmdldD17dGFyZ2V0IHx8IGZpbmRUcmlnZ2VyTm9kZX1cbiAgICAgICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICBzYWZlTm9kZT17c2FmZU5vZGVzfVxuICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17bmV3V3JhcHBlclN0eWxlfVxuICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlPXt0cmlnZ2VyVHlwZX1cbiAgICAgICAgICAgICAgICBoYXNNYXNrPXtoYXNNYXNrfVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVHJpZ2dlcigpLFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQb3J0YWwoKVxuICAgICAgICBdO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L3BvcHVwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQgQmFsbG9vbklubmVyIGZyb20gJy4vaW5uZXInO1xuaW1wb3J0IHtub3JtYWxNYXAgYXMgYWxpZ25NYXB9IGZyb20gJy4vYWxpZ25NYXAnO1xuXG5jb25zdCB7UG9wdXB9ID0gT3ZlcmxheTtcblxuLyoqIEJhbGxvb24uVG9vbHRpcCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagt+W8j+exu+WQjeeahOWTgeeJjOWJjee8gFxuICAgICAgICAgKi9cbiAgICAgICAgcHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKipcbiAgICAgICAgICog6Ieq5a6a5LmJ57G75ZCNXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoh6rlrprkuYnlhoXogZTmoLflvI9cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9vbHRpcOeahOWGheWuuVxuICAgICAgICAgKi9cbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICAgICAgICogQGVudW1kZXNjIOS4iiwg5Y+zLCDkuIssIOW3piwg5LiK5bemLCDkuIrlj7MsIOS4i+W3piwg5LiL5Y+zLCDlt6bkuIosIOW3puS4iywg5Y+z5LiKLCDlj7PkuIsg5Y+K5YW2IOS4pOS4pOe7hOWQiFxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3QnLCAncicsICdiJywgJ2wnLCAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbHQnLCAnbGInLCAncnQnLCAncmInXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HlhYPntKBcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6blj5HooYzkuLpcbiAgICAgICAgICog6byg5qCH5oKs5rWuLCDojrflj5bliLDnhKbngrksIOm8oOagh+eCueWHuygnaG92ZXIn77yMJ2ZvY3VzJ++8jCdjbGljaycp5oiW6ICF5a6D5Lus57uE5oiQ55qE5pWw57uE77yM5aaCIFsnaG92ZXInLCAnZm9jdXMnXVxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclR5cGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5by55bGC57uE5Lu2c3R5bGXvvIzpgI/kvKDnu5lQb3B1cFxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tmNsYXNzTmFtZe+8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8ueWxgue7hOS7tuWxnuaAp++8jOmAj+S8oOe7mVBvcHVwXG4gICAgICAgICAqL1xuICAgICAgICBwb3B1cFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCmcHVyZSByZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHB1cmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyH5a6a5rWu5bGC5riy5p+T55qE54i26IqC54K5LCDlj6/ku6XkuLroioLngrlpZOeahOWtl+espuS4su+8jOS5n+WPr+S7pei/lOWbnuiKgueCueeahOWHveaVsOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvLnlsYJpZCwg5Lyg5YWl5YC85omN5Lya5pSv5oyB5peg6Zqc56KNXG4gICAgICAgICAqL1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHJpZ2dlclR5cGU6ICdob3ZlcicsXG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgYWxpZ246ICdiJyxcbiAgICAgICAgdHJpZ2dlcjogPHNwYW4+PC9zcGFuPlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5fY29udGVudElkID0gcHJvcHMuaWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgYWxpZ24sIHN0eWxlLCBwcmVmaXgsIHRyaWdnZXIsIGNoaWxkcmVuLCBwb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgIHBvcHVwUHJvcHMsIHBvcHVwQ2xhc3NOYW1lLCBwb3B1cFN0eWxlLCB0cmlnZ2VyVHlwZSwgcnRsLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgdHJPcmlnaW4gPSAndHJPcmlnaW4nO1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBvdGhlcnMucnRsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyT3JpZ2luID0gJ3J0bFRyT3JpZ2luJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGFsaWduTWFwW2FsaWduXVt0ck9yaWdpbl07XG4gICAgICAgIGNvbnN0IF9vZmZzZXQgPSBhbGlnbk1hcFthbGlnbl0ub2Zmc2V0O1xuICAgICAgICBjb25zdCBfc3R5bGUgPSB7dHJhbnNmb3JtT3JpZ2luLCAuLi5zdHlsZX07XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9ICg8QmFsbG9vbklubmVyXG4gICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgaWQ9e3RoaXMuX2NvbnRlbnRJZH1cbiAgICAgICAgICAgIHByZWZpeD17cHJlZml4fVxuICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgaXNUb29sdGlwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXtfc3R5bGV9XG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XG4gICAgICAgICAgICBydGw9e3J0bH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JhbGxvb25Jbm5lcj4pO1xuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJQcm9wcyA9IHt9O1xuICAgICAgICB0cmlnZ2VyUHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHRoaXMuX2NvbnRlbnRJZDtcbiAgICAgICAgdHJpZ2dlclByb3BzLnRhYkluZGV4ID0gJzAnO1xuXG4gICAgICAgIGNvbnN0IG5ld1RyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwgdHJpZ2dlclByb3BzKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgey4uLnBvcHVwUHJvcHN9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyPXtwb3B1cENvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXt0aGlzLl9jb250ZW50SWQgPyBuZXdUcmlnZ2VyIDogdHJpZ2dlcn1cbiAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZT17dHJpZ2dlclR5cGV9XG4gICAgICAgICAgICAgICAgYWxpZ249e2FsaWduTWFwW2FsaWduXS5hbGlnbn1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9e19vZmZzZXR9XG4gICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3B1cENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17cG9wdXBTdHlsZX1cbiAgICAgICAgICAgICAgICBydGw9e3J0bH1cbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVQb3NpdGlvblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi90b29sdGlwLmpzeCIsImltcG9ydCAnLi4vYW5pbWF0ZS9zdHlsZS5qcyc7XG5pbXBvcnQgJy4uL292ZXJsYXkvc3R5bGUuanMnO1xuaW1wb3J0ICcuLi9pY29uL3N0eWxlLmpzJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhbGxvb24vc3R5bGUuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMTguMkBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAyLjEuNkBwb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9fZmFzdC1zYXNzLWxvYWRlckAxLjQuN0BmYXN0LXNhc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvbWFpbi5zY3NzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjE4LjJAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMi4xLjZAcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvX2Zhc3Qtc2Fzcy1sb2FkZXJAMS40LjdAZmFzdC1zYXNzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdmVybGF5L21haW4uc2NzcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFsbG9vbi9tYWluLnNjc3MiLCJpbXBvcnQgQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi92aWV3L2J1dHRvbic7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi92aWV3L2dyb3VwJztcblxuQnV0dG9uLkdyb3VwID0gQnV0dG9uR3JvdXA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyLmNvbmZpZyhCdXR0b24sIHtcbiAgICB0cmFuc2Zvcm06IChwcm9wcywgZGVwcmVjYXRlZCkgPT4ge1xuICAgICAgICBpZiAoJ3NoYXBlJyBpbiBwcm9wcykge1xuICAgICAgICAgICAgZGVwcmVjYXRlZCgnc2hhcGUnLCAndGV4dCB8IHdhcm5pbmcgfCBnaG9zdCcsICdCdXR0b24nKTtcblxuICAgICAgICAgICAgY29uc3QgeyBzaGFwZSwgdHlwZSwgLi4ub3RoZXJzIH0gPSBwcm9wcztcblxuICAgICAgICAgICAgbGV0IG5ld1R5cGUgPSB0eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdsaWdodCcgfHwgdHlwZSA9PT0gJ2RhcmsnIHx8ICh0eXBlID09PSAnc2Vjb25kYXJ5JyAmJiBzaGFwZSA9PT0gJ3dhcm5pbmcnKSkge1xuICAgICAgICAgICAgICAgIG5ld1R5cGUgPSAnbm9ybWFsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGdob3N0O1xuICAgICAgICAgICAgaWYgKHNoYXBlID09PSAnZ2hvc3QnKSB7XG4gICAgICAgICAgICAgICAgZ2hvc3QgPSAoe1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiAnZGFyaycsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQ6ICdsaWdodCdcbiAgICAgICAgICAgICAgICB9KVt0eXBlIHx8IEJ1dHRvbi5kZWZhdWx0UHJvcHMudHlwZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzaGFwZSA9PT0gJ3RleHQnO1xuICAgICAgICAgICAgY29uc3Qgd2FybmluZyA9IHNoYXBlID09PSAnd2FybmluZyc7XG5cbiAgICAgICAgICAgIHByb3BzID0geyB0eXBlOiBuZXdUeXBlLCBnaG9zdCwgdGV4dCwgd2FybmluZywgLi4ub3RoZXJzIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmpzeCIsImltcG9ydCAnLi4vaWNvbi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24vc3R5bGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZnVuY3Rpb24gbWFwSWNvblNpemUoc2l6ZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgICBsYXJnZTogJ3NtYWxsJyxcbiAgICAgICAgbWVkaXVtOiAneHMnLFxuICAgICAgICBzbWFsbDogJ3hzJyxcbiAgICB9KVtzaXplXTtcbn1cblxuLyoqIEJ1dHRvbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmjInpkq7nmoTnsbvlnotcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ25vcm1hbCddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaMiemSrueahOWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICAgICAgICAvKipcbiAgICAgICAgICog5oyJ6ZKu5LitIEljb24g55qE5bC65a+477yM55So5LqO5pu/5LujIEljb24g55qE6buY6K6k5aSn5bCPXG4gICAgICAgICAqL1xuICAgICAgICBpY29uU2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHhzJywgJ3hzJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICd4bCcsICd4eGwnLCAneHh4bCddKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW9kyBjb21wb25lbnQgPSAnYnV0dG9uJyDml7bvvIzorr7nva4gYnV0dG9uIOagh+etvueahCB0eXBlIOWAvFxuICAgICAgICAgKi9cbiAgICAgICAgaHRtbFR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3N1Ym1pdCcsICdyZXNldCcsICdidXR0b24nXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7moIfnrb7nsbvlnotcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2EnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorr7nva7mjInpkq7nmoTovb3lhaXnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li65bm954G15oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICBnaG9zdDogUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCBmYWxzZSwgJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKbkuLrmlofmnKzmjInpkq5cbiAgICAgICAgICovXG4gICAgICAgIHRleHQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5Li66K2m5ZGK5oyJ6ZKuXG4gICAgICAgICAqL1xuICAgICAgICB3YXJuaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvKipcbiAgICAgICAgICog54K55Ye75oyJ6ZKu55qE5Zue6LCDXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIEV2ZW50IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25Nb3VzZVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHByZWZpeDogJ25leHQtJyxcbiAgICAgICAgdHlwZTogJ25vcm1hbCcsXG4gICAgICAgIHNpemU6ICdtZWRpdW0nLFxuICAgICAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNvbXBvbmVudDogJ2J1dHRvbicsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBnaG9zdDogZmFsc2UsXG4gICAgICAgIHRleHQ6IGZhbHNlLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fVxuICAgIH07XG5cbiAgICBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbi5ibHVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBidXR0b25SZWZIYW5kbGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgY2xhc3NOYW1lLCB0eXBlLCBzaXplLCBodG1sVHlwZSwgbG9hZGluZywgdGV4dCwgd2FybmluZywgZ2hvc3QsIGNvbXBvbmVudCwgaWNvblNpemUsIGNoaWxkcmVuLCBydGwsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZ2hvc3RUeXBlID0gWydsaWdodCcsICdkYXJrJ10uaW5kZXhPZihnaG9zdCkgPj0gMCA/IGdob3N0IDogJ2RhcmsnO1xuXG4gICAgICAgIGNvbnN0IGJ0bkNscyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG5gXTogdHJ1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9JHtzaXplfWBdOiBzaXplLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4tJHt0eXBlfWBdOiB0eXBlICYmICFnaG9zdCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLXRleHRgXTogdGV4dCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLXdhcm5pbmdgXTogd2FybmluZyxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWxvYWRpbmdgXTogbG9hZGluZyxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWdob3N0YF06IGdob3N0LFxuICAgICAgICAgICAgW2Ake3ByZWZpeH1idG4tJHtnaG9zdFR5cGV9YF06IGdob3N0LFxuICAgICAgICAgICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb3VudCA9IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY2xvbmVkQ2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZC50eXBlLl90eXBlTWFyayA9PT0gJ2ljb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNscyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fWJ0bi1pY29uYF06ICFpY29uU2l6ZSwgLy8g5aaC5p6c55So5oi35rKh5pyJ5LygIGljb25TaXpl77yM5YiZ5L2/55So6K+l5qC35byP5qCH6K6wIGljb24g5Li6IGJ1dHRvbiDpooTorr7lsLrlr7hcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uLWZpcnN0YF06IGNvdW50ID4gMSAmJiBpbmRleCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH1pY29uLWxhc3RgXTogY291bnQgPiAxICYmIGluZGV4ID09PSBjb3VudCAtIDEsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9aWNvbi1hbG9uZWBdOiBjb3VudCA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgW2NoaWxkLnByb3BzLmNsYXNzTmFtZV06ICEhY2hpbGQucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGljb25DbHMsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGljb25TaXplIHx8IG1hcEljb25TaXplKHNpemUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgVGFnTmFtZSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgdGFnQXR0cnMgPSB7XG4gICAgICAgICAgICAuLi5vdGhlcnMsXG4gICAgICAgICAgICB0eXBlOiBodG1sVHlwZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYnRuQ2xzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFRhZ05hbWUgPT09ICdhJykge1xuICAgICAgICAgICAgZGVsZXRlIHRhZ0F0dHJzLnR5cGU7XG5cbiAgICAgICAgICAgIGlmICh0YWdBdHRycy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YWdBdHRycy5vbkNsaWNrOyAvLyBhIOagh+etvueahCBvbkNsaWNrIOa1j+iniOWZqOm7mOiupOS4jeS8muemgeeUqFxuICAgICAgICAgICAgICAgIHRhZ0F0dHJzLmhyZWYgJiYgZGVsZXRlIHRhZ0F0dHJzLmhyZWY7IC8vIGEg5qCH562+5Zyo56aB55So54q25oCB5LiL5peg6Lez6L2sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhZ05hbWUgey4uLnRhZ0F0dHJzfSBkaXI9e3J0bCA/ICdydGwnIDogdW5kZWZpbmVkfSBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZVVwfSByZWY9e3RoaXMuYnV0dG9uUmVmSGFuZGxlcn0gcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIHtjbG9uZWRDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvVGFnTmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL3ZpZXcvYnV0dG9uLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENvbmZpZ1Byb3ZpZGVyIGZyb20gJy4uLy4uL2NvbmZpZy1wcm92aWRlcic7XG5cbi8qKlxuICogQnV0dG9uLkdyb3VwXG4gKi9cbmNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBydGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu5/kuIDorr7nva4gQnV0dG9uIOe7hOS7tueahOaMiemSruWkp+Wwj1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJlZml4OiAnbmV4dC0nLFxuICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByZWZpeCwgY2xhc3NOYW1lLCBzaXplLCBjaGlsZHJlbiwgcnRsLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBDbHMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9YnRuLWdyb3VwYF06IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsb25lQ2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIG90aGVycy5kaXIgPSAncnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi5vdGhlcnN9IGNsYXNzTmFtZT17Z3JvdXBDbHN9PlxuICAgICAgICAgICAgICAgIHtjbG9uZUNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlci5jb25maWcoQnV0dG9uR3JvdXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi92aWV3L2dyb3VwLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4xOC4yQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDIuMS42QHBvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL19mYXN0LXNhc3MtbG9hZGVyQDEuNC43QGZhc3Qtc2Fzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL21haW4uc2NzcyIsIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uJztcbmltcG9ydCAnLi4vLi4vLi4vc3JjL2J1dHRvbi9zdHlsZS5qcyc7XG5cblxuaW1wb3J0IEJhbGxvb24gZnJvbSAnLi4vLi4vLi4vc3JjL2JhbGxvb24nO1xuaW1wb3J0ICcuLi8uLi8uLi9zcmMvYmFsbG9vbi9zdHlsZS5qcyc7XG5cblxuXG5cbmNvbnN0IGRlZmF1bHRUcmlnZ2VyID0gPEJ1dHRvbiBjbGFzc05hbWU9XCJidHJpZ2dlclwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319PmRlZmF1bHQgc3R5bGU8L0J1dHRvbj47XG5jb25zdCBwcmltYXJ5ID0gPEJ1dHRvbiBjbGFzc05hbWU9XCJidHJpZ2dlclwiIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319PnByaW1hcnkgc3R5bGU8L0J1dHRvbj47XG5cblxuY29uc3QgRGVtbyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8QmFsbG9vbiAgdHJpZ2dlcj17ZGVmYXVsdFRyaWdnZXJ9IGNsb3NhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICBkZWZhdWx0XG4gICAgICAgIDwvQmFsbG9vbj5cbiAgICAgICAgPEJhbGxvb24gdHlwZT1cInByaW1hcnlcIiB0cmlnZ2VyPXtwcmltYXJ5fSAgdHJpZ2dlclR5cGU9XCJjbGlja1wiPlxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICA8L0JhbGxvb24+XG4gICAgPC9kaXY+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoPERlbW8gLz4sIG1vdW50Tm9kZSk7XG5cblxuLy8gSE9UIFJFTE9BRCBDT0RFXG5jb25zdCBjb21wb25lbnREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvbmVudC1kZXNjJyk7XG5jb21wb25lbnREZXNjLmlubmVySFRNTCA9IGDmnIDnroDljZXnmoTnlKjms5XjgIJgO1xuY29uc3QgY29tcG9uZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb25lbnQtYm9keScpO1xuY29tcG9uZW50Qm9keS5pbm5lckhUTUwgPSBgPHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWpzeFwiPjxkaXYgY2xhc3M9XCJobGpzXCI+PHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5pbXBvcnQ8L3NwYW4+IHsgQnV0dG9uLCBCYWxsb29uIH0gPHNwYW4gY2xhc3M9XCJobGpzLWtleXdvcmRcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+J0BhbGlmZC9uZXh0Jzwvc3Bhbj47XG5cblxuXG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBkZWZhdWx0VHJpZ2dlciA9IDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImJ0cmlnZ2VyXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj57e21hcmdpbjo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPjVweDwvc3Bhbj4nfX0mZ3Q7PC9zcGFuPmRlZmF1bHQgc3R5bGU8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj47XG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBwcmltYXJ5ID0gPHNwYW4gY2xhc3M9XCJ4bWxcIj48c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0OzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPmNsYXNzTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiYnRyaWdnZXJcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPnt7bWFyZ2luOjwvc3Bhbj4gJzxzcGFuIGNsYXNzPVwiaGxqcy1hdHRyXCI+NXB4PC9zcGFuPid9fSZndDs8L3NwYW4+cHJpbWFyeSBzdHlsZTxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7LzxzcGFuIGNsYXNzPVwiaGxqcy1uYW1lXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjtcblxuXG48c3BhbiBjbGFzcz1cImhsanMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiBEZW1vID0gPHNwYW4gY2xhc3M9XCJobGpzLWZ1bmN0aW9uXCI+PHNwYW4gY2xhc3M9XCJobGpzLXBhcmFtc1wiPigpPC9zcGFuPiA9Jmd0Ozwvc3Bhbj4gKFxuICAgIDxzcGFuIGNsYXNzPVwieG1sXCI+PHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDs8c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbGFzc05hbWU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cImNvbnRhaW5lclwiPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e2RlZmF1bHRUcmlnZ2VyfTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj5jbG9zYWJsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPntmYWxzZX08L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIGRlZmF1bHRcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJobGpzLXRhZ1wiPiZsdDsvPHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiZndDs8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5CYWxsb29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cImhsanMtYXR0clwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVwiaGxqcy1zdHJpbmdcIj5cInByaW1hcnlcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cImhsanMtc3RyaW5nXCI+e3ByaW1hcnl9PC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJobGpzLWF0dHJcIj50cmlnZ2VyVHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XCJobGpzLXN0cmluZ1wiPlwiY2xpY2tcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPkJhbGxvb248L3NwYW4+Jmd0Ozwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImhsanMtdGFnXCI+Jmx0Oy88c3BhbiBjbGFzcz1cImhsanMtbmFtZVwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcig8c3BhbiBjbGFzcz1cInhtbFwiPjxzcGFuIGNsYXNzPVwiaGxqcy10YWdcIj4mbHQ7PHNwYW4gY2xhc3M9XCJobGpzLW5hbWVcIj5EZW1vPC9zcGFuPiAvJmd0Ozwvc3Bhbj4sIG1vdW50Tm9kZSk7XG5cbjwvc3Bhbj48L2Rpdj48L2NvZGU+PC9wcmU+XG5gLnJlcGxhY2UoL3tiYWNrcXVvdGV9L2csICdgJykucmVwbGFjZSgve2RvbGxhcn0vZywgJyQnKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuICBjb25zdCByZWxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1kZW1vLXJlbG9hZGluZycpO1xuXG4gIGlmICghd2luZG93Lmhhc0FkZFN0YXR1c0hhbmRsZXIpIHtcbiAgICBtb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoc3RhdHVzID0+IHtcbiAgICAgIHdpbmRvdy5oYXNBZGRTdGF0dXNIYW5kbGVyID0gdHJ1ZTtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdjaGVjaycpIHtcbiAgICAgICAgcmVsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdpZGxlJykge1xuICAgICAgICByZWxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3MvYmFsbG9vbi9kZW1vL2Jhc2ljLm1kIl0sInNvdXJjZVJvb3QiOiIifQ==