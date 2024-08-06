import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Cascader from './cascader';
export default ConfigProvider.config(Cascader, {
    transform: function (props, deprecated) {
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'Cascader');
            var expandTrigger = props.expandTrigger, others = __rest(props, ["expandTrigger"]);
            props = __assign({ expandTriggerType: expandTrigger }, others);
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
