import ConfigProvider from '../config-provider';
import Step from './view/step';
import StepItem from './view/step-item';

Step.Item = StepItem;

export default ConfigProvider.config(Step, {
    transform: (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');

            const { type, ...others } = props;
            props = { shape: type, ...others };
        }

        return props;
    }
});
