import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import ConfigProvider from '../config-provider';
import Search from './Search';

export default ConfigProvider.config(Search, {
    transfrom: /* istanbul ignore next */function transfrom(props, deprecated) {
        var onInputFocus = props.onInputFocus,
            overlayVisible = props.overlayVisible,
            combox = props.combox,
            others = _objectWithoutProperties(props, ['onInputFocus', 'overlayVisible', 'combox']);

        var newprops = others;

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
    }
});