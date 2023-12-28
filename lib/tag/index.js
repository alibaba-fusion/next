"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
var tag_1 = require("./tag");
var tag_group_1 = require("./tag-group");
var selectable_1 = require("./selectable");
var closeable_1 = require("./closeable");
var ConfigTag = config_provider_1.default.config(tag_1.default, {
    transfrom: /* istanbul ignore next */ function (props, deprecated) {
        var shape = props.shape, type = props.type;
        if (shape === 'selectable') {
            deprecated('shape=selectable', 'Tag.Selectable', 'Tag');
        }
        if (shape === 'deletable') {
            deprecated('shape=deletable', 'Tag.Closeable', 'Tag');
        }
        if (shape === 'link') {
            deprecated('shape=link', '<Tag><a href="x">x</a></Tag>', 'Tag');
        }
        if (shape === 'readonly' || shape === 'interactive') {
            util_1.log.warning("Warning: [ shape=".concat(shape, " ] is deprecated at [ Tag ]"));
        }
        if (type === 'secondary') {
            util_1.log.warning('Warning: [ type=secondary ] is deprecated at [ Tag ]');
        }
        ['count', 'marked', 'value', 'onChange'].forEach(function (key) {
            if (key in props) {
                util_1.log.warning("Warning: [ ".concat(key, " ] is deprecated at [ Tag ]"));
            }
        });
        if ('selected' in props || 'defaultSelected' in props) {
            util_1.log.warning('Warning: [ selected|defaultSelected  ] is deprecated at [ Tag ], use [ checked|defaultChecked ] at [ Tag.Selectable ] instead of it');
        }
        if ('closed' in props) {
            util_1.log.warning('Warning: [ closed  ] is deprecated at [ Tag ], use [ onClose ] at [ Tag.Closeable ] instead of it');
        }
        if ('onSelect' in props) {
            deprecated('onSelect', '<Tag.Selectable onChange/>', 'Tag');
        }
        if ('afterClose' in props) {
            util_1.log.warning('Warning: [ afterClose  ] is deprecated at [ Tag ], use [ afterClose ] at [ Tag.Closeable ] instead of it');
        }
        return props;
    },
});
ConfigTag.Group = config_provider_1.default.config(tag_group_1.default);
ConfigTag.Selectable = config_provider_1.default.config(selectable_1.default);
// 有的地方叫做 Closeable 有的地方用Closeable, 为了保持兼容 文档类出现 Closeable, Closeable可以继续用
ConfigTag.Closable = config_provider_1.default.config(closeable_1.default);
ConfigTag.Closeable = ConfigTag.Closable;
exports.default = ConfigTag;
