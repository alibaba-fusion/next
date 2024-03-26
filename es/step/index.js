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
            var _a = props, type = _a.type, direction = _a.direction, labelPlacement = _a.labelPlacement, others = __rest(_a, ["type", "direction", "labelPlacement"]);
            var resolvedDirection = direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            var resolvedLabelPlacement = labelPlacement === 'vertical'
                ? 'ver'
                : labelPlacement === 'horizontal'
                    ? 'hoz'
                    : labelPlacement;
            props = __assign({ shape: type, direction: resolvedDirection, labelPlacement: resolvedLabelPlacement }, others);
        }
        return props;
    },
});
