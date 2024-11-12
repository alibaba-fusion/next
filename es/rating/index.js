import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Rating from './rating';
export default ConfigProvider.config(Rating, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'showGrade', 'Rating');
            var type = props.type, others = __rest(props, ["type"]);
            props = __assign({ showGrade: type === 'grade' }, others);
        }
        var disabled = props.disabled, readOnly = props.readOnly;
        props.disabled = disabled || readOnly;
        return props;
    },
});
