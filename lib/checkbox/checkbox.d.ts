import * as React from 'react';
import { type CheckboxContext } from './with-context';
import type { CheckboxProps } from './types';
export interface PrivateCheckboxProps extends CheckboxProps {
    context: CheckboxContext;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<(CheckboxProps | (CheckboxProps & {
    children?: React.ReactNode;
})) & import("../config-provider/types").ComponentCommonProps, React.Component<CheckboxProps, any, any>, {}>;
export default _default;
