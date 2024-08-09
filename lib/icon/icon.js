"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = require("react");
var util_1 = require("../util");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * Icon
 */
var Icon = /** @class */ (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, type = _b.type, size = _b.size, className = _b.className, rtl = _b.rtl, style = _b.style, children = _b.children;
        var others = util_1.obj.pickOthers(Object.assign({}, Icon.propTypes), this.props);
        var classes = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "icon")] = true,
            _a["".concat(prefix, "icon-").concat(type)] = !!type,
            _a["".concat(prefix).concat(size)] = !!size && typeof size === 'string',
            _a[className] = !!className,
            _a));
        if (rtl &&
            type &&
            [
                'arrow-left',
                'arrow-right',
                'arrow-double-left',
                'arrow-double-right',
                'switch',
                'sorting',
                'descending',
                'ascending',
            ].indexOf(type) !== -1) {
            others.dir = 'rtl';
        }
        var sizeStyle = typeof size === 'number'
            ? {
                width: size,
                height: size,
                lineHeight: "".concat(size, "px"),
                fontSize: size,
            }
            : {};
        return (React.createElement("i", tslib_1.__assign({}, others, { style: tslib_1.__assign(tslib_1.__assign({}, sizeStyle), style), className: classes }), children));
    };
    Icon.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { type: PropTypes.string, children: PropTypes.node, size: PropTypes.oneOfType([
            PropTypes.oneOf([
                'xxs',
                'xs',
                'small',
                'medium',
                'large',
                'xl',
                'xxl',
                'xxxl',
                'inherit',
            ]),
            PropTypes.number,
        ]), className: PropTypes.string, style: PropTypes.object });
    Icon.defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };
    Icon.displayName = 'Icon';
    Icon._typeMark = 'icon';
    return Icon;
}(react_1.Component));
exports.default = Icon;
