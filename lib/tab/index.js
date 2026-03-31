"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var tab_1 = tslib_1.__importDefault(require("./tab"));
var tab_item_1 = tslib_1.__importDefault(require("./tabs/tab-item"));
var component_1 = require("../util/component");
var TabPane = config_provider_1.default.config(tab_item_1.default, {
    transform: function (props, deprecated) {
        deprecated('Tab.TabPane', 'Tab.Item', 'Tab');
        return props;
    },
});
var TabWithSub = (0, component_1.assignSubComponent)(tab_1.default, {
    Item: tab_item_1.default,
    TabPane: TabPane,
});
exports.default = config_provider_1.default.config(TabWithSub, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Tab');
            var type = props.type, others = tslib_1.__rest(props, ["type"]);
            props = tslib_1.__assign({ shape: type }, others);
        }
        if ('resDirection' in props) {
            var resDirection = props.resDirection, others = tslib_1.__rest(props, ["resDirection"]);
            var excessMode = void 0;
            if (resDirection === 'horizontal') {
                deprecated('resDirection=horizontal', 'excessMode=slide', 'Tab');
                excessMode = 'slide';
            }
            else if (resDirection === 'vertical') {
                deprecated('resDirection=vertical', 'excessMode=dropdown', 'Tab');
                excessMode = 'dropdown';
            }
            props = tslib_1.__assign({ excessMode: excessMode }, others);
        }
        if ('tabBarExtraContent' in props) {
            deprecated('tabBarExtraContent', 'extra', 'Tab');
            var tabBarExtraContent = props.tabBarExtraContent, others = tslib_1.__rest(props, ["tabBarExtraContent"]);
            props = tslib_1.__assign({ extra: tabBarExtraContent }, others);
        }
        return props;
    },
});
