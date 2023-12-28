import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Step from './view/step';
import StepItem from './view/step-item';
Step.Item = StepItem;
export default ConfigProvider.config(Step, {
    transform: /* istanbul ignore next */ function (props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            var type = props.type, direction = props.direction, labelPlacement = props.labelPlacement, others = __rest(props, ["type", "direction", "labelPlacement"]);
            direction = direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            labelPlacement =
                labelPlacement === 'vertical' ? 'ver' : labelPlacement === 'horizontal' ? 'hoz' : labelPlacement;
            props = __assign({ shape: type, direction: direction, labelPlacement: labelPlacement }, others);
        }
        return props;
    },
});
