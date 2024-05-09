import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
import type { RadioItemProps } from '../types';

export default class RadioItem extends Component<RadioItemProps> {
    static menuChildType = 'item';

    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        helper: PropTypes.node,
        children: PropTypes.node,
    };

    static defaultProps = {
        checked: false,
        disabled: false,
        onChange: () => {},
    };

    render() {
        return <CheckableItem role="menuitemradio" checkType="radio" {...this.props} />;
    }
}
