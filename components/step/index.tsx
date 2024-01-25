import ConfigProvider from '../config-provider';
import Step from './view/step';
import type { StepProps, ItemProps } from './types';

export type { StepProps, ItemProps };

export default ConfigProvider.config(Step, {
    transform: (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');

            const { type, direction, labelPlacement, ...others } = props;
            const resolvedDirection =
                direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            const resolvedLabelPlacement =
                labelPlacement === 'vertical'
                    ? 'ver'
                    : labelPlacement === 'horizontal'
                      ? 'hoz'
                      : labelPlacement;
            props = {
                shape: type,
                direction: resolvedDirection,
                labelPlacement: resolvedLabelPlacement,
                ...others,
            };
        }

        return props;
    },
});
