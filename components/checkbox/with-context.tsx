import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PrivateCheckboxProps } from './checkbox';
import { CheckboxProps } from './types';

export interface CheckboxContext {
    onChange: (
        value: string | number | boolean | undefined,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    __group__: boolean;
    selectedValue: PrivateCheckboxProps['value'][];
    disabled: boolean;
    prefix: string;
}

export default function withCheckboxContext(
    Checkbox: React.ComponentType<PrivateCheckboxProps>
): React.ComponentType<CheckboxProps> {
    return class WrappedComp extends React.Component<CheckboxProps> {
        static displayName = 'Checkbox';
        static contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            selectedValue: PropTypes.array,
            disabled: PropTypes.bool,
            prefix: PropTypes.string,
        };

        render() {
            return <Checkbox {...this.props} context={this.context} />;
        }
    };
}
