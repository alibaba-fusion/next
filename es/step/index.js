import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import ConfigProvider from '../config-provider';
import Step from './view/step';
import StepItem from './view/step-item';

Step.Item = StepItem;

export default ConfigProvider.config(Step, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');

            var _props = props,
                type = _props.type,
                others = _objectWithoutProperties(_props, ['type']);

            props = _extends({ shape: type }, others);
        }

        return props;
    }
});