import React from 'react';
import PropTypes from 'prop-types';
import type { OptionGroupProps } from './types';
/**
 * Select.OptionGroup
 */
export default class OptionGroup extends React.Component<OptionGroupProps> {
    static propTypes: {
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<any>;
    };
    static _typeMark: string;
    static displayName: string;
    render(): React.ReactNode;
}
