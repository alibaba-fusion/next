"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var component_1 = require("../util/component");
var card_1 = tslib_1.__importDefault(require("./card"));
var header_1 = tslib_1.__importDefault(require("./header"));
var bullet_header_1 = tslib_1.__importDefault(require("./bullet-header"));
var media_1 = tslib_1.__importDefault(require("./media"));
var divider_1 = tslib_1.__importDefault(require("./divider"));
var content_1 = tslib_1.__importDefault(require("./content"));
var collapse_content_1 = tslib_1.__importDefault(require("./collapse-content"));
var actions_1 = tslib_1.__importDefault(require("./actions"));
var WithSubCard = (0, component_1.assignSubComponent)(card_1.default, {
    Header: header_1.default,
    Media: media_1.default,
    Divider: divider_1.default,
    Content: content_1.default,
    Actions: actions_1.default,
    BulletHeader: bullet_header_1.default,
    /**
     * typo of CollapseContent
     * @deprecated Use CollapseContent instead
     */
    CollaspeContent: collapse_content_1.default,
    CollapseContent: collapse_content_1.default,
});
exports.default = config_provider_1.default.config(WithSubCard, {
    transform: function (props, deprecated) {
        if ('titlePrefixLine' in props) {
            deprecated('titlePrefixLine', 'showTitleBullet', 'Card');
            var titlePrefixLine = props.titlePrefixLine, others = tslib_1.__rest(props, ["titlePrefixLine"]);
            props = tslib_1.__assign({ showTitleBullet: titlePrefixLine }, others);
        }
        if ('titleBottomLine' in props) {
            deprecated('titleBottomLine', 'showHeadDivider', 'Card');
            var titleBottomLine = props.titleBottomLine, others = tslib_1.__rest(props, ["titleBottomLine"]);
            props = tslib_1.__assign({ showHeadDivider: titleBottomLine }, others);
        }
        if ('bodyHeight' in props) {
            deprecated('bodyHeight', 'contentHeight', 'Card');
            var bodyHeight = props.bodyHeight, others = tslib_1.__rest(props, ["bodyHeight"]);
            props = tslib_1.__assign({ contentHeight: bodyHeight }, others);
        }
        return props;
    },
});
