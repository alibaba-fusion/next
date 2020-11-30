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

    render() {
        const { prefix, value, onSelect } = this.props;

        return (
            <div className={`${prefix}calendar2-right ${prefix}calendar2-panel`}>
                <div className={`${prefix}calendar2-header`}>
                    <div className={`${prefix}calendar2-header-text-field`}>
                        {value ? value.format('HH:mm:ss') : null}
                    </div>
                </div>
                <div className={`${prefix}calendar2-body`}>
                    <TimePickerPanel value={value} onSelect={onSelect} />
                </div>
            </div>
        );
    }
}

export default polyfill(TimePanel);
