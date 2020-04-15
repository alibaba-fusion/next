'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createFromIconfontCN;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customCache = new Set();

function createFromIconfontCN() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var scriptUrl = options.scriptUrl,
        _options$extraCommonP = options.extraCommonProps,
        extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP;

    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */

    if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
        var script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }

    var Iconfont = function Iconfont(props) {
        var _cx;

        var type = props.type,
            size = props.size,
            children = props.children,
            className = props.className,
            _props$prefix = props.prefix,
            prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
            others = (0, _objectWithoutProperties3.default)(props, ['type', 'size', 'children', 'className', 'prefix']);

        // component > children > type

        var content = null;
        if (props.type) {
            content = _react2.default.createElement('use', { xlinkHref: '#' + type });
        }
        if (children) {
            content = children;
        }

        var classes = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'icon-remote'] = true, _cx), className);

        return _react2.default.createElement(
            _index2.default,
            { size: size },
            _react2.default.createElement(
                'svg',
                (0, _extends3.default)({
                    className: classes,
                    focusable: false
                }, others, extraCommonProps),
                content
            )
        );
    };

    Iconfont.displayName = 'Iconfont';

    return _configProvider2.default.config(Iconfont);
}
module.exports = exports['default'];