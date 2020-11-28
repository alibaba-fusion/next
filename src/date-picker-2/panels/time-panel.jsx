import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import TimePickerPanel from '../../time-picker-2/panel';
import SharedPT from '../prop-types';

class TimePanel extends React.PureComponent {
    static propTypes = {
        prefix: PT.string,
        value: SharedPT.date,
        onSelect: PT.func,
    };

    static defaultProps = {
        prefix: 'next-',
    };

    render() {
        const { prefix, value, onSelect } = this.props;

        return (
            <div className={`${prefix}date-time-panel`}>
                <div className={`${prefix}picker-header`}>
                    <div className={`${prefix}picker-header-text-field`}>
                        {value ? value.format('HH:mm:ss') : null}
                    </div>
                </div>
                <div className={`${prefix}picker-body`}>
                    <TimePickerPanel value={value} onSelect={onSelect} />
                </div>
            </div>
        );
    }
}

export default polyfill(TimePanel);
