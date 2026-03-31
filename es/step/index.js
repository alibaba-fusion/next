import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Step from './view/step';
import Item from './view/step-item';
import { assignSubComponent } from '../util/component';
var WithStepItem = assignSubComponent(Step, { Item: Item });
export default ConfigProvider.config(WithStepItem, {
    transform: function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            var _a = props, type = _a.type, others = __rest(_a, ["type"]);
            props = __assign({ shape: type }, others);
        }
        var _b = props, direction = _b.direction, labelPlacement = _b.labelPlacement;
        if (direction === 'vertical') {
            deprecated('direction="vertical"', 'direction="ver"', 'Step');
            props = __assign(__assign({}, props), { direction: 'ver' });
        }
        if (direction === 'horizontal') {
            deprecated('direction="horizontal"', 'direction="hoz"', 'Step');
            props = __assign(__assign({}, props), { direction: 'hoz' });
        }
        if (labelPlacement === 'vertical') {
            deprecated('labelPlacement="vertical"', 'labelPlacement="ver"', 'Step');
            props = __assign(__assign({}, props), { labelPlacement: 'ver' });
        }
        if (labelPlacement === 'horizontal') {
            deprecated('labelPlacement="horizontal"', 'labelPlacement="hoz"', 'Step');
            props = __assign(__assign({}, props), { labelPlacement: 'hoz' });
        }
        return props;
    },
});
