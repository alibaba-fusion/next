import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Tab from './tab';
import Item from './tabs/tab-item';
import { assignSubComponent } from '../util/component';
var TabPane = ConfigProvider.config(Item, {
    transform: function (props, deprecated) {
        deprecated('Tab.TabPane', 'Tab.Item', 'Tab');
        return props;
    },
});
var TabWithSub = assignSubComponent(Tab, {
    Item: Item,
    TabPane: TabPane,
});
export default ConfigProvider.config(TabWithSub, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Tab');
            var type = props.type, others = __rest(props, ["type"]);
            props = __assign({ shape: type }, others);
        }
        if ('resDirection' in props) {
            var resDirection = props.resDirection, others = __rest(props, ["resDirection"]);
            var excessMode = void 0;
            if (resDirection === 'horizontal') {
                deprecated('resDirection=horizontal', 'excessMode=slide', 'Tab');
                excessMode = 'slide';
            }
            else if (resDirection === 'vertical') {
                deprecated('resDirection=vertical', 'excessMode=dropdown', 'Tab');
                excessMode = 'dropdown';
            }
            props = __assign({ excessMode: excessMode }, others);
        }
        if ('tabBarExtraContent' in props) {
            deprecated('tabBarExtraContent', 'extra', 'Tab');
            var tabBarExtraContent = props.tabBarExtraContent, others = __rest(props, ["tabBarExtraContent"]);
            props = __assign({ extra: tabBarExtraContent }, others);
        }
        return props;
    },
});
