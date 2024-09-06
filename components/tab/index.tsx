import ConfigProvider from '../config-provider';
import Tab from './tab';
import Item from './tabs/tab-item';
import { assignSubComponent } from '../util/component';
import type { TabProps } from '../tab/types';

export type { TabProps, ItemProps } from './types';

const TabPane = ConfigProvider.config(Item, {
    transform: (props, deprecated) => {
        deprecated('Tab.TabPane', 'Tab.Item', 'Tab');
        return props;
    },
});

const TabWithSub = assignSubComponent(Tab, {
    Item,
    TabPane: TabPane,
});

export default ConfigProvider.config(TabWithSub, {
    transform: (props: TabProps, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Tab');
            const { type, ...others } = props;
            props = { shape: type, ...others };
        }
        if ('resDirection' in props) {
            const { resDirection, ...others } = props;

            let excessMode: TabProps['excessMode'];
            if (resDirection === 'horizontal') {
                deprecated('resDirection=horizontal', 'excessMode=slide', 'Tab');

                excessMode = 'slide';
            } else if (resDirection === 'vertical') {
                deprecated('resDirection=vertical', 'excessMode=dropdown', 'Tab');

                excessMode = 'dropdown';
            }
            props = { excessMode, ...others };
        }
        if ('tabBarExtraContent' in props) {
            deprecated('tabBarExtraContent', 'extra', 'Tab');
            const { tabBarExtraContent, ...others } = props;
            props = { extra: tabBarExtraContent, ...others };
        }

        return props;
    },
});
