import ConfigProvider from '../config-provider';
import CascaderSelect from './cascader-select';

export type { CascaderSelectProps, CascaderSelectDataItem } from './types';

export default ConfigProvider.config(CascaderSelect, {
    exportNames: ['focus'],
    transform: (props, deprecated) => {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'CascaderSelect');
            const { shape, hasBorder, ...others } = props;
            props = { hasBorder: hasBorder ?? shape !== 'arrow-only', ...others };
        }

        if ('container' in props) {
            deprecated('container', 'popupContainer', 'CascaderSelect');
            const { container, ...others } = props;
            props = { popupContainer: container, ...others };
        }

        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'CascaderSelect');
            const { expandTrigger, expandTriggerType, ...others } = props;
            props = { expandTriggerType: expandTriggerType ?? expandTrigger, ...others };
        }

        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'CascaderSelect');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'CascaderSelect');
        }

        return props;
    },
});
