import * as React from 'react';
import { type PrivateCheckboxProps } from './checkbox';
import { type CheckboxProps } from './types';
export interface CheckboxContext {
    onChange: (
        value: string | number | boolean | undefined,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    __group__: boolean;
    selectedValue: CheckboxProps['value'][];
    disabled: boolean;
    prefix: string;
}
export default function withCheckboxContext(
    Checkbox: React.ComponentType<PrivateCheckboxProps>
): React.ComponentType<CheckboxProps>;
