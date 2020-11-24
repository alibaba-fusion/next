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
        visibleValue: PT.any,
        defaultVisibleValue: PT.any,
        showHeader: PT.bool,
        disabledDate: PT.func,
        onSelect: PT.func,
        onChange: PT.func,
        validRange: PT.any,
        onPanelChange: PT.func,
        mode: PT.any,
    };

    static defaultProps = {
        shape: CALENDAR_SHAPE.FULLSCREEN,
        locale: defaultLocale,
        showHeader: true,
        mode: CALENDAR_MODE.DATE,
    };

    constructor(props) {
        super(props);

        const { defaultValue, mode } = props;

        const value = obj.get('value', props, defaultValue);
        const defaultVisibleValue = obj.get('defaultVisibleValue', props, value || datejs());
        const visibleValue = obj.get('visibleValue', props, defaultVisibleValue);

        this.state = {
            value,
            visibleValue,
            mode,
        };

        bindCtx(this, ['onModeChange', 'onSelect', 'onChange', 'onDateSelect']);

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

    onModeChange(mode) {
        console.log('onModeChange', mode, arguments);
        this.setState({
            mode: mode,
        });

        func.call(this.props, 'onModeChange', [mode]);
    }

    onDateSelect(value) {
        console.log('[Calendar]: onDateSelect');
        if (this.props.mode === this.state.mode) {
            this.onChange(value);
        } else {
            this.onSelect(value);
            this.onModeChange(this.switchMode(this.state.mode));
        }
    }

    onSelect(value) {
        this.setState({
            visibleValue: value,
        });
        console.log('onVisibleValueChange', value);
        func.call(this.props, 'onVisibleValueChange', [value]);
    }

    onChange(value) {
        this.setState({
            value,
            visibleValue: value,
        });

        func.call(this.props, 'onChange', [value]);
    }

    // -------> render

    render() {
        let { value, visibleValue } = this.getFromPropOrState(['value', 'visibleValue']);
        const { shape, showHeader, type, selectedState } = this.props;
        const { mode } = this.state;

        visibleValue = datejs(visibleValue);

        if (value) {
            value = datejs(value);
        }

        const dateViewProps = {
            mode,
            type,
            value,
            visibleValue,
            onSelect: this.onDateSelect,
            onModeChange: this.onModeChange,
        };

        // TODO: 属性透传
        if ('selectedState' in this.props) {
            dateViewProps.selectedState = this.props.selectedState;
        }

        return (
            <div className={`calendar calendar-${shape}`}>
                {showHeader ? (
                    <HeaderPanel
                        mode={mode}
                        shape={shape}
                        value={value}
                        visibleValue={visibleValue}
                        onModeChange={this.onModeChange}
                        onSelect={this.onSelect}
                    />
                ) : null}
                <DateView startOnSunday {...dateViewProps} />
            </div>
        );
    }
}

export default polyfill(Calendar);
