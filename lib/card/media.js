"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var warning = util_1.log.warning;
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /** @class */ (function (_super) {
    tslib_1.__extends(CardMedia, _super);
    function CardMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardMedia.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, style = _a.style, className = _a.className, component = _a.component, image = _a.image, src = _a.src, others = tslib_1.__rest(_a, ["prefix", "style", "className", "component", "image", "src"]);
        var Component = component;
        if (!('children' in others || Boolean(image || src))) {
            warning('either `children`, `image` or `src` prop must be specified.');
        }
        var isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
        var composedStyle = !isMediaComponent && image ? tslib_1.__assign({ backgroundImage: "url(\"".concat(image, "\")") }, style) : style;
        return (react_1.default.createElement(Component, tslib_1.__assign({}, others, { style: composedStyle, className: (0, classnames_1.default)("".concat(prefix, "card-media"), className), src: isMediaComponent ? image || src : undefined })));
    };
    CardMedia.displayName = 'CardMedia';
    CardMedia.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        /**
         * 背景图片地址
         */
        image: prop_types_1.default.string,
        /**
         * 媒体源文件地址
         */
        src: prop_types_1.default.string,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
    };
    CardMedia.defaultProps = {
        prefix: 'next-',
        component: 'div',
        style: {},
    };
    return CardMedia;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardMedia);
