import React from 'react';
import PropTypes from 'prop-types';
import type { OptionProps } from './types';
/**
 * Select.Option
 */
export default class Option extends React.Component<OptionProps> {
    static propTypes: {
        value: PropTypes.Validator<any>;
        disabled: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
    };
    static _typeMark: string;
    static displayName: string;
    render(): React.ReactNode;
}
