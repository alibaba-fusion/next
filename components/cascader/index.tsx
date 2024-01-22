import ConfigProvider from '../config-provider';
import Cascader from './cascader';

export type { CascaderProps, CascaderDataItem, CascaderDataItemWithPosInfo } from './types';

export default ConfigProvider.config(Cascader, {
    transform: (props, deprecated) => {
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'Cascader');
            const { expandTrigger, ...others } = props;
            props = { expandTriggerType: expandTrigger, ...others };
        }

        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'Cascader');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'Cascader');
        }

        return props;
    },
    exportNames: ['setFocusValue'],
});
