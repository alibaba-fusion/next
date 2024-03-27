import ConfigProvider from '../config-provider';
import Step from './view/step';
import Item from './view/step-item';
import type { StepProps, ItemProps, DeprecatedStepProps } from './types';
import { assignSubComponent } from '../util/component';

export type { StepProps, ItemProps };

const WithStepItem = assignSubComponent(Step, { Item });

export default ConfigProvider.config(WithStepItem, {
    transform: (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            const { type, direction, labelPlacement, ...others } = props as DeprecatedStepProps;
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
