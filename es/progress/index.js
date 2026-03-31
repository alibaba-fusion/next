import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Progress from './view/progress';
export default ConfigProvider.config(Progress, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'progressive', 'Progress');
            var type = props.type, others = __rest(props, ["type"]);
            props = __assign({ progressive: type === 'progressive' }, others);
        }
        if ('showInfo' in props) {
            deprecated('showInfo', 'textRender', 'Progress');
            var showInfo = props.showInfo, others = __rest(props, ["showInfo"]);
            if (showInfo) {
                props = others;
            }
            else {
                props = __assign({ textRender: function () { return false; } }, others);
            }
        }
        if ('suffix' in props) {
            deprecated('suffix', 'textRender', 'Progress');
            var suffix_1 = props.suffix, others = __rest(props, ["suffix"]);
            props = __assign({ textRender: function () { return suffix_1; } }, others);
        }
        return props;
    },
});
