import ConfigProvider from '../config-provider';
import Dropdown from './dropdown';
import type { DropdownProps } from './types';

export type { DropdownProps };
export default ConfigProvider.config(Dropdown, {
    transform: (props, deprecated) => {
        if ('triggerType' in props) {
            const triggerType = Array.isArray(props.triggerType)
                ? [...props.triggerType]
                : [props.triggerType];

            if (triggerType.indexOf('focus') > -1) {
                deprecated('triggerType[focus]', 'triggerType[hover, click]', 'Balloon');
            }
        }

        return props;
    },
});
