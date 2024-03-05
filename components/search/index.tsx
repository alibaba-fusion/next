import ConfigProvider from '../config-provider';
import Search from './Search';

export type { SearchProps } from './types';

export default ConfigProvider.config(Search, {
    transform: (props, deprecated) => {
        const { onInputFocus, overlayVisible, combox, ...others } = props;

        const newprops = others;

        if (onInputFocus) {
            deprecated('onInputFocus', 'onFocus', 'Search');
            newprops.onFocus = onInputFocus;
        }
        if ('overlayVisible' in props) {
            deprecated('overlayVisible', 'visible', 'Search');
            newprops.visible = overlayVisible;
        }
        if (combox) {
            deprecated('combox', 'popupContent', 'Search');
            newprops.popupContent = combox;
        }

        return newprops;
    },
});
