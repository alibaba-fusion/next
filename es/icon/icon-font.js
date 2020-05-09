import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from './index';

var customCache = new Set();

/** Icon.createFromIconfontCN
 *  @description 通过自定义 iconfont源来使用使用svg格式的图片，默认有缓存处理，也可以通过设置 id 手动进行缓存（注意若页面上已经有同名 id 的 dom 元素，Icon将不再加载当前远程icon资源）
 *  @order 1
 */
export default function createFromIconfontCN() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var scriptUrl = options.scriptUrl,
        _options$extraCommonP = options.extraCommonProps,
        extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP,
        id = options.id;

    var hasExist = customCache.has(scriptUrl);

    if ('id' in options && document.getElementById(id)) {
        hasExist = true;
    }

    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */
    if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !hasExist) {
        var script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        if ('id' in options) {
            script.setAttribute('id', id);
        }

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
            others = _objectWithoutProperties(props, ['type', 'size', 'children', 'className', 'prefix']);

        // component > children > type


        var content = null;
        if (props.type) {
            content = React.createElement('use', { xlinkHref: '#' + type });
        }
        if (children) {
            content = children;
        }

        var classes = cx((_cx = {}, _cx[prefix + 'icon-remote'] = true, _cx), className);

        return React.createElement(
            Icon,
            { size: size },
            React.createElement(
                'svg',
                _extends({
                    className: classes,
                    focusable: false
                }, others, extraCommonProps),
                content
            )
        );
    };

    Iconfont.displayName = 'Iconfont';

    return ConfigProvider.config(Iconfont);
}