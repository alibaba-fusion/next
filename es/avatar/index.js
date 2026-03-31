import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import { obj } from '../util';
/**
 * Avatar
 */
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var others = obj.pickOthers(Avatar.propTypes, this.props);
        var cls = classNames((_a = {},
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
                children = (React.createElement("img", __assign({}, imgProps, { src: src, srcSet: srcSet, onError: this.handleImgLoadError, alt: alt })));
            }
            else {
                children = React.createElement(Icon, { type: 'picture', size: iconSize });
            }
        }
        else if (typeof icon === 'string') {
            children = React.createElement(Icon, { type: icon, size: iconSize });
        }
        else if (icon) {
            var newIconSize = 'size' in icon.props ? icon.props.size : iconSize;
            children = React.cloneElement(icon, { size: newIconSize });
        }
        return (React.createElement("span", __assign({}, others, { className: cls, style: __assign(__assign({}, sizeStyle), style) }), children));
    };
    Avatar.propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        size: PropTypes.oneOfType([
            PropTypes.oneOf(['small', 'medium', 'large']),
            PropTypes.number,
        ]),
        shape: PropTypes.oneOf(['circle', 'square']),
        icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        src: PropTypes.string,
        onError: PropTypes.func,
        alt: PropTypes.string,
        srcSet: PropTypes.string,
    };
    Avatar.defaultProps = {
        prefix: 'next-',
        size: 'medium',
        shape: 'circle',
    };
    return Avatar;
}(Component));
export default ConfigProvider.config(Avatar);
