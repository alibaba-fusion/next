import ConfigProvider from '../config-provider';
import Step from './view/step';
import StepItem from './view/step-item';
import type { StepProps, ItemProps } from './types';
import { assignSubComponent } from '../util/component';

export type { StepProps, ItemProps };
const WithStepItem = assignSubComponent(Step, { StepItem });

export default ConfigProvider.config(WithStepItem, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');
            const { type, direction, labelPlacement, ...others } = props as {
                type: unknown;
                direction: unknown;
                labelPlacement: unknown;
                [key: string]: unknown;
            };
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
            } as StepProps;
        }

        return props;
    },
});
