import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';

import Calendar from '../../calendar2';
import TimePanel from './time-panel';

class DatePanel extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        panelMode: PT.any,
        value: SharedPT.date,
        disabledDate: PT.func,
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: SharedPT.disabledTime,
        dateCellRender: PT.func,
    };
    static defaultProps = {
        showTime: false,
        resetTime: false,
    };

    onTimeSelect = v => {
        const { value } = this.props;

        func.invoke(this.props, 'onSelect', [setTime(value || datejs(), v)]);
    };

    handleSelect = v => {
        if (!this.props.resetTime) {
            v = setTime(v, this.props.value || datejs());
        }

        func.invoke(this.props, 'onSelect', [v]);
    };

    handlePanelChange = (v, mode) => {
        func.invoke(this.props, 'onPanelChange', [v, mode]);
    };

    render() {
        const {
            mode,
            panelMode,
            prefix,
            showTime,
            value,
            disabledDate,
            disabledTime,
            timePanelProps,
            dateCellRender,
            ...restProps
        } = this.props;

        const className = classnames(`${prefix}date-picker2-panel`, {
            [`${prefix}date-time-picker2-panel`]: showTime,
        });

        let _disabledTime;
        if (showTime && mode === panelMode && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value) : disabledTime;
            if (typeof _disabledTime !== 'object') {
                _disabledTime = null;
            }
        }

        return (
            <div className={className}>
                <Calendar
                    {...obj.pickProps(Calendar.propTypes, restProps)}
                    shape="panel"
                    value={value}
                    panelMode={mode}
                    colNum={showTime ? 6 : undefined}
                    onSelect={this.handleSelect}
                    onPanelChange={this.handlePanelChange}
                    disabledDate={disabledDate}
                    dateCellRender={dateCellRender}
                />
                {showTime && mode === panelMode ? (
                    <TimePanel
                        {...obj.pickProps(TimePanel.propTypes, restProps)}
                        prefix={prefix}
                        value={value}
                        onSelect={this.onTimeSelect}
                        disabledTime={disabledTime}
                        timePanelProps={{ ..._disabledTime, ...timePanelProps }}
                    />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);
