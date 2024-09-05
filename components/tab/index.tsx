import ConfigProvider from '../config-provider';
import Tab from './tab';
import Item from './tabs/tab-item';

Tab.Item = Item;

Tab.TabPane = ConfigProvider.config(Item, {
    transform: (props, deprecated) => {
        deprecated('Tab.TabPane', 'Tab.Item', 'Tab');
        return props;
    },
}) as unknown as typeof Item;

type ShapeType = 'text' | 'pure' | 'wrapped' | 'capsule';

export default ConfigProvider.config(Tab, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Tab');
            const { type, ...others } = props;
            props = { shape: type as ShapeType, ...others };
        }
        if ('resDirection' in props) {
            const { resDirection, ...others } = props;

            let excessMode: 'slide' | 'dropdown' | undefined;
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
