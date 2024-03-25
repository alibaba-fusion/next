import React from 'react';
import PropTypes from 'prop-types';
import type { OptionProps } from './types';

/**
 * Select.Option
 */
export default class Option extends React.Component<OptionProps> {
    static propTypes = {
        /**
         * 选项值
         */
        value: PropTypes.any.isRequired,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        children: PropTypes.any,
    };

    static _typeMark = 'next_select_option';

    render() {
        return this.props.children;
    }
}
