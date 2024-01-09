import ConfigProvider from '../config-provider';
import Step from './view/step';
import type { StepProps } from './types';

export type { StepProps };

export default ConfigProvider.config(Step, {
    transform: /* istanbul ignore next */ (
        props: StepProps,
        deprecated: (arg: string, arg2: string, arg3: string) => void
    ) => {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');

            // eslint-disable-next-line prefer-const
            let { type, direction, labelPlacement, ...others } = props;
            direction =
                direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            labelPlacement =
                labelPlacement === 'vertical'
                    ? 'ver'
                    : labelPlacement === 'horizontal'
                      ? 'hoz'
                      : labelPlacement;
            props = {
                shape: type as 'circle' | 'arrow' | 'dot' | undefined,
                direction,
                labelPlacement,
                ...others,
            };
        }

        return props;
    },
});
