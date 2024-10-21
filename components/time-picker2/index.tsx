import React, { type ComponentRef, type LegacyRef } from 'react';

import { assignSubComponent } from '../util/component';
import ConfigProvider from '../config-provider';
import TimePicker from './time-picker';
import type { TimePickerProps, ValueType, RangePickerProps, PresetType } from './types';

const ConfigTimePicker = ConfigProvider.config(TimePicker);

const TimePickerWithSub = assignSubComponent(TimePicker, {
    RangePicker: React.forwardRef(
        (props: TimePickerProps, ref: LegacyRef<ComponentRef<typeof ConfigTimePicker>>) => (
            <ConfigTimePicker ref={ref} {...props} type="range" />
        )
    ),
});
TimePickerWithSub.RangePicker.displayName = 'RangePicker';

export default TimePickerWithSub;

export type { TimePickerProps, ValueType, RangePickerProps, PresetType };
