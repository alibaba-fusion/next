import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func, datejs, obj } from '../util';
import defaultLocale from '../locale/zh-cn';

import { CALENDAR_MODE, CALENDAR_SHAPE } from './constant';

import ConfigProvider from '../config-provider';
import HeaderPanel from './panels/header';
import DateView from './panels/date-view';

const { bindCtx } = func;

class Calendar extends React.Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        type: PT.any,
        shape: PT.any,
        value: PT.any,
        defaultValue: PT.any,
        panelDate: PT.any,
        defaultVisibleValue: PT.any,
        showHeader: PT.bool,
        disabledDate: PT.func,
        onSelect: PT.func,
        onChange: PT.func,
        validRange: PT.any,
        onPanelChange: PT.func,
        mode: PT.any,
        cellProps: PT.object,
        cellClassName: PT.func,
    };

    static defaultProps = {
        shape: CALENDAR_SHAPE.FULLSCREEN,
        locale: defaultLocale,
        showHeader: true,
        mode: CALENDAR_MODE.MONTH,
    };

    constructor(props) {
        super(props);

        const { defaultValue, mode } = props;

        const value = obj.get('value', props, defaultValue);
        const defaultVisibleValue = obj.get('defaultVisibleValue', props, value || datejs());
        const panelDate = obj.get('panelDate', props, defaultVisibleValue);

        this.state = {
            value,
            panelDate,
            mode,
        };

        bindCtx(this, ['onPanelChange', 'onChange', 'onDateSelect']);

        this.getFromPropOrState = obj.getFromPropOrState.bind(this);
    }

    switchMode(mode) {
        const { DATE, MONTH, YEAR, YEAR_RANGE } = CALENDAR_MODE;
        switch (mode) {
            case MONTH:
                return DATE;
            case YEAR:
                return MONTH;
            case YEAR_RANGE:
                return YEAR;
            default:
                return mode;
        }
    }

    // -------> event handles

    onDateSelect(value) {
        // if (this.props.mode === this.state.mode && this.props.panel !== CALENDAR_SHAPE.PANEL) {
        this.onChange(value);
        // } else {
        //     this.onPanelChange(value, this.switchMode(this.state.mode));
        // }
    }

    onPanelChange(value, mode) {
        this.setState({
            mode,
            panelDate: value,
        });
        console.log('onPanelChange', value);

        func.call(this.props, 'onPanelChange', [value]);
    }

    onChange(value) {
        this.setState({
            value,
            panelDate: value,
        });

        func.call(this.props, 'onChange', [value]);
    }

    // -------> render

    render() {
        let { value, panelDate } = this.getFromPropOrState(['value', 'panelDate']);
        const { shape, showHeader, type } = this.props;
        const { mode } = this.state;

        panelDate = datejs(panelDate);

        if (value) {
            value = datejs(value);
        }

        const dateViewProps = {
            mode,
            type,
            value,
            panelDate,
            onSelect: this.onDateSelect,
            onPanelChange: this.onPanelChange,
            ...this.props.cellProps,
        };

        // TODO: 属性透传
        if ('cellClassName' in this.props) {
            dateViewProps.disabledDate = this.props.disabledDate;
            dateViewProps.cellClassName = this.props.cellClassName;
        }

        return (
            <div className={`calendar calendar-${shape}`}>
                {showHeader ? (
                    <HeaderPanel
                        mode={mode}
                        shape={shape}
                        value={value}
                        panelDate={panelDate}
                        onPanelChange={this.onPanelChange}
                    />
                ) : null}
                <DateView startOnSunday {...dateViewProps} />
            </div>
        );
    }
}

export default polyfill(Calendar);
