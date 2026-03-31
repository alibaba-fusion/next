"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var bullet_header_1 = tslib_1.__importDefault(require("./bullet-header"));
var collapse_content_1 = tslib_1.__importDefault(require("./collapse-content"));
var media_1 = tslib_1.__importDefault(require("./media"));
var actions_1 = tslib_1.__importDefault(require("./actions"));
var util_1 = require("../util");
var pickOthers = util_1.obj.pickOthers;
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, title = _b.title, subTitle = _b.subTitle, extra = _b.extra, showTitleBullet = _b.showTitleBullet, showHeadDivider = _b.showHeadDivider, children = _b.children, rtl = _b.rtl, contentHeight = _b.contentHeight, free = _b.free, actions = _b.actions, hasBorder = _b.hasBorder, media = _b.media;
        var cardCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "card")] = true,
            _a["".concat(prefix, "card-free")] = free,
            _a["".concat(prefix, "card-noborder")] = !hasBorder,
            _a["".concat(prefix, "card-show-divider")] = showHeadDivider,
            _a["".concat(prefix, "card-hide-divider")] = !showHeadDivider,
            _a), className);
        var others = pickOthers(Card.propTypes, this.props);
        others.dir = rtl ? 'rtl' : undefined;
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: cardCls }),
            media && react_1.default.createElement(media_1.default, null, media),
            react_1.default.createElement(bullet_header_1.default, { title: title, subTitle: subTitle, extra: extra, showTitleBullet: showTitleBullet }),
            free ? (children) : (react_1.default.createElement(collapse_content_1.default, { contentHeight: contentHeight }, children)),
            actions && react_1.default.createElement(actions_1.default, null, actions)));
    };
    Card.displayName = 'Card';
    Card.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, media: prop_types_1.default.node, title: prop_types_1.default.node, subTitle: prop_types_1.default.node, actions: prop_types_1.default.node, showTitleBullet: prop_types_1.default.bool, showHeadDivider: prop_types_1.default.bool, contentHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), extra: prop_types_1.default.node, free: prop_types_1.default.bool, hasBorder: prop_types_1.default.bool, className: prop_types_1.default.string, children: prop_types_1.default.node });
    Card.defaultProps = {
        prefix: 'next-',
        free: false,
        showTitleBullet: true,
        showHeadDivider: true,
        hasBorder: true,
        contentHeight: 120,
    };
    return Card;
}(react_1.Component));
exports.default = Card;
