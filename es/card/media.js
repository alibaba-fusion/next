import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { log } from '../util';
var warning = log.warning;
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /** @class */ (function (_super) {
    __extends(CardMedia, _super);
    function CardMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardMedia.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, style = _a.style, className = _a.className, component = _a.component, image = _a.image, src = _a.src, others = __rest(_a, ["prefix", "style", "className", "component", "image", "src"]);
        var Component = component;
        if (!('children' in others || Boolean(image || src))) {
            warning('either `children`, `image` or `src` prop must be specified.');
        }
        var isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
        var composedStyle = !isMediaComponent && image ? __assign({ backgroundImage: "url(\"".concat(image, "\")") }, style) : style;
        return (React.createElement(Component, __assign({}, others, { style: composedStyle, className: classNames("".concat(prefix, "card-media"), className), src: isMediaComponent ? image || src : undefined })));
    };
    CardMedia.displayName = 'CardMedia';
    CardMedia.propTypes = {
        prefix: PropTypes.string,
        /**
         * 设置标签类型
         */
        component: PropTypes.elementType,
        /**
         * 背景图片地址
         */
        image: PropTypes.string,
        /**
         * 媒体源文件地址
         */
        src: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
    };
    CardMedia.defaultProps = {
        prefix: 'next-',
        component: 'div',
        style: {},
    };
    return CardMedia;
}(Component));
export default ConfigProvider.config(CardMedia);
