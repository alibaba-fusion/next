"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = require("../config-provider");
var card_1 = require("./card");
var header_1 = require("./header");
var bullet_header_1 = require("./bullet-header");
var media_1 = require("./media");
var divider_1 = require("./divider");
var content_1 = require("./content");
var collapse_content_1 = require("./collapse-content");
var actions_1 = require("./actions");
card_1.default.Header = header_1.default;
card_1.default.Media = media_1.default;
card_1.default.Divider = divider_1.default;
card_1.default.Content = content_1.default;
card_1.default.Actions = actions_1.default;
card_1.default.BulletHeader = bullet_header_1.default;
card_1.default.CollaspeContent = collapse_content_1.default;
card_1.default.CollapseContent = collapse_content_1.default;
exports.default = config_provider_1.default.config(card_1.default, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
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
