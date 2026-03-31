"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
/**
 * Avatar
 */
var Avatar = /** @class */ (function (_super) {
    tslib_1.__extends(Avatar, _super);
    function Avatar() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            isImgExist: true,
        };
        _this.handleImgLoadError = function () {
            var onError = _this.props.onError;
            var errorFlag = onError ? onError() : undefined;
            if (errorFlag !== false) {
                _this.setState({ isImgExist: false });
            }
        };
        _this.getIconSize = function (avatarSize) {
            return typeof avatarSize === 'number' ? avatarSize / 2 : avatarSize;
        };
        return _this;
    }
    Avatar.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.src !== this.props.src) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ isImgExist: true });
        }
    };
    Avatar.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, size = _b.size, icon = _b.icon, alt = _b.alt, srcSet = _b.srcSet, shape = _b.shape, src = _b.src, imgProps = _b.imgProps;
        var isImgExist = this.state.isImgExist;
        var children = this.props.children;
        var others = util_1.obj.pickOthers(Avatar.propTypes, this.props);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "avatar")] = true,
            _a["".concat(prefix, "avatar-").concat(shape)] = !!shape,
            _a["".concat(prefix, "avatar-image")] = src && isImgExist,
            _a["".concat(prefix, "avatar-").concat(size)] = typeof size === 'string',
            _a), className);
        var sizeStyle = typeof size === 'number'
            ? {
                width: size,
                height: size,
                lineHeight: "".concat(size, "px"),
                fontSize: icon ? size / 2 : 18,
            }
            : {};
        var iconSize = this.getIconSize(size);
        if (src) {
            if (isImgExist) {
                children = (react_1.default.createElement("img", tslib_1.__assign({}, imgProps, { src: src, srcSet: srcSet, onError: this.handleImgLoadError, alt: alt })));
            }
            else {
                children = react_1.default.createElement(icon_1.default, { type: 'picture', size: iconSize });
            }
        }
        else if (typeof icon === 'string') {
            children = react_1.default.createElement(icon_1.default, { type: icon, size: iconSize });
        }
        else if (icon) {
            var newIconSize = 'size' in icon.props ? icon.props.size : iconSize;
            children = react_1.default.cloneElement(icon, { size: newIconSize });
        }
        return (react_1.default.createElement("span", tslib_1.__assign({}, others, { className: cls, style: tslib_1.__assign(tslib_1.__assign({}, sizeStyle), style) }), children));
    };
    Avatar.propTypes = {
        prefix: prop_types_1.default.string,
        children: prop_types_1.default.any,
        className: prop_types_1.default.string,
        size: prop_types_1.default.oneOfType([
            prop_types_1.default.oneOf(['small', 'medium', 'large']),
            prop_types_1.default.number,
        ]),
        shape: prop_types_1.default.oneOf(['circle', 'square']),
        icon: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
        src: prop_types_1.default.string,
        onError: prop_types_1.default.func,
        alt: prop_types_1.default.string,
        srcSet: prop_types_1.default.string,
    };
    Avatar.defaultProps = {
        prefix: 'next-',
        size: 'medium',
        shape: 'circle',
    };
    return Avatar;
}(react_1.Component));
exports.default = config_provider_1.default.config(Avatar);
