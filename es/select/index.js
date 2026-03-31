import { __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Select from './select';
import AutoComplete from './auto-complete';
import Option from './option';
import OptionGroup from './option-group';
import { assignSubComponent } from '../util/component';
// compatible with 0.x version
function transform(props, deprecated) {
    var shape = props.shape, container = props.container, multiple = props.multiple, filterBy = props.filterBy, overlay = props.overlay, safeNode = props.safeNode, noFoundContent = props.noFoundContent, others = __rest(props, ["shape", "container", "multiple", "filterBy", "overlay", "safeNode", "noFoundContent"]);
    var newprops = others;
    if (shape === 'arrow-only') {
        deprecated('shape=arrow-only', 'hasBorder=false', 'Select');
        newprops.hasBorder = false;
    }
    if (container) {
        deprecated('container', 'popupContainer', 'Select');
        newprops.popupContainer = container;
    }
    if (multiple) {
        deprecated('multiple', 'mode=multiple', 'Select');
        newprops.mode = 'multiple';
    }
    if (filterBy) {
        deprecated('filterBy', 'filter', 'Select');
        newprops.filter = filterBy;
    }
    if (overlay) {
        deprecated('overlay', 'popupContent', 'Select');
        newprops.popupContent = overlay;
        newprops.autoWidth = false;
    }
    if (noFoundContent) {
        deprecated('noFoundContent', 'notFoundContent', 'Select');
        newprops.notFoundContent = noFoundContent;
    }
    if (safeNode) {
        deprecated('safeNode', 'popupProps={safeNode}', 'Select');
        newprops.popupProps = {
            safeNode: safeNode,
        };
    }
    return newprops;
}
var SelectWithSub = assignSubComponent(Select, {
    AutoComplete: ConfigProvider.config(AutoComplete, {
        componentName: 'Select',
    }),
    Option: Option,
    OptionGroup: OptionGroup,
    // compatible with 0.x version: Select.Combobox
    Combobox: ConfigProvider.config(Select, {
        transform: function (props, deprecated) {
            deprecated('Select.Combobox', '<Select showSearch={true}/>', 'Select');
            var newprops = transform(props, deprecated);
            if (props.onInputUpdate) {
                newprops.onSearch = props.onInputUpdate;
                newprops.showSearch = true;
            }
            return newprops;
        },
    }),
});
export default ConfigProvider.config(SelectWithSub, {
    transform: transform,
    exportNames: ['focusInput', 'handleSearchClear'],
});
