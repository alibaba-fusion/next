import { __rest } from "tslib";
import ConfigProvider from '../config-provider';
import DatePicker from './date-picker';
import RangePicker from './range-picker';
import MonthPicker from './month-picker';
import YearPicker from './year-picker';
import WeekPicker from './week-picker';
import { assignSubComponent } from '../util/component';
var transform = function (props, deprecated) {
    var open = props.open, defaultOpen = props.defaultOpen, onOpenChange = props.onOpenChange, others = __rest(props, ["open", "defaultOpen", "onOpenChange"]);
    var newProps = others;
    delete newProps.formater;
    if ('open' in props) {
        deprecated('open', 'visible', 'DatePicker');
        newProps.visible = open;
        if ('visible' in props) {
            newProps.visible = props.visible;
        }
    }
    if ('defaultOpen' in props) {
        deprecated('defaultOpen', 'defaultVisible', 'DatePicker');
        newProps.defaultVisible = defaultOpen;
        if ('defaultVisible' in props) {
            newProps.defaultVisible = props.defaultVisible;
        }
    }
    if ('onOpenChange' in props && typeof onOpenChange === 'function') {
        deprecated('onOpenChange', 'onVisibleChange', 'DatePicker');
        newProps.onVisibleChange = onOpenChange;
        if ('onVisibleChange' in props) {
            newProps.onVisibleChange = props.onVisibleChange;
        }
    }
    if ('formater' in props) {
        deprecated('formater', 'format showTime.format', 'DatePicker');
    }
    if ('format' in props && typeof props.format !== 'string') {
        deprecated('format', 'format: PropTypes.string,', 'DatePicker');
    }
    if ('ranges' in props) {
        deprecated('ranges', 'footerRender: PropTypes.func', 'RangePicker');
    }
    return newProps;
};
var DatePickerWithSub = assignSubComponent(DatePicker, {
    RangePicker: ConfigProvider.config(RangePicker, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    MonthPicker: ConfigProvider.config(MonthPicker, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    YearPicker: ConfigProvider.config(YearPicker, {
        componentName: 'DatePicker',
        transform: transform,
    }),
    WeekPicker: ConfigProvider.config(WeekPicker, {
        componentName: 'DatePicker',
    }),
});
export default ConfigProvider.config(DatePickerWithSub, {
    transform: transform,
});
