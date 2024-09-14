import { __assign, __rest } from "tslib";
import * as React from 'react';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from './icon';
var customCache = new Set();
var ConfigIcon = ConfigProvider.config(Icon);
/** Icon.createFromIconfontCN
 *  通过自定义 iconfont源来使用使用svg格式的图片
 */
export default function createFromIconfontCN(options) {
    var scriptUrl = options.scriptUrl, _a = options.extraCommonProps, extraCommonProps = _a === void 0 ? {} : _a;
    var hasExist = customCache.has(scriptUrl);
    if (document.querySelector("script[data-namespace=\"".concat(scriptUrl, "\"]"))) {
        hasExist = true;
    }
    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */
    if (typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function' &&
        typeof scriptUrl === 'string' &&
        scriptUrl.length &&
        !hasExist) {
        var script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }
    var Iconfont = function (props) {
        var _a;
        var type = props.type, size = props.size, children = props.children, className = props.className, _b = props.prefix, prefix = _b === void 0 ? 'next-' : _b, others = __rest(props, ["type", "size", "children", "className", "prefix"]);
        // component > children > type
        var content = null;
        if (props.type) {
            content = React.createElement("use", { xlinkHref: "#".concat(type) });
        }
        if (children) {
            content = children;
        }
        var classes = cx((_a = {},
            _a["".concat(prefix, "icon-remote")] = true,
            _a), className);
        return (
        // FIXME: 这里理论上优先级是 props 中的 prefix 优先级更高，不过之前的行为一直是取上层 ConfigProvider 中的 prefix，
        // 先兼容之前的表现，will be fixed in 2.x
        // https://github.com/alibaba-fusion/next/issues/3906
        React.createElement(ConfigIcon, { size: size },
            React.createElement("svg", __assign({ className: classes, focusable: false }, others, extraCommonProps), content)));
    };
    Iconfont.displayName = 'Iconfont';
    return ConfigProvider.config(Iconfont);
}
