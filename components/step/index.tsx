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
            const { type, ...others } = props as DeprecatedStepProps;
            props = {
                shape: type,
                ...others,
            } as StepProps;
        }

        const { direction, labelPlacement } = props as DeprecatedStepProps;
        if (direction === 'vertical') {
            deprecated('direction="vertical"', 'direction="ver"', 'Step');
            props = { ...props, direction: 'ver' };
        }
        if (direction === 'horizontal') {
            deprecated('direction="horizontal"', 'direction="hoz"', 'Step');
            props = { ...props, direction: 'hoz' };
        }
        if (labelPlacement === 'vertical') {
            deprecated('labelPlacement="vertical"', 'labelPlacement="ver"', 'Step');
            props = { ...props, labelPlacement: 'ver' };
        }
        if (labelPlacement === 'horizontal') {
            deprecated('labelPlacement="horizontal"', 'labelPlacement="hoz"', 'Step');
            props = { ...props, labelPlacement: 'hoz' };
        }

        return props;
    },
});
