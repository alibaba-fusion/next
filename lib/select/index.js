"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var select_1 = tslib_1.__importDefault(require("./select"));
var auto_complete_1 = tslib_1.__importDefault(require("./auto-complete"));
var option_1 = tslib_1.__importDefault(require("./option"));
var option_group_1 = tslib_1.__importDefault(require("./option-group"));
var component_1 = require("../util/component");
// compatible with 0.x version
function transform(props, deprecated) {
    var shape = props.shape, container = props.container, multiple = props.multiple, filterBy = props.filterBy, overlay = props.overlay, safeNode = props.safeNode, noFoundContent = props.noFoundContent, others = tslib_1.__rest(props, ["shape", "container", "multiple", "filterBy", "overlay", "safeNode", "noFoundContent"]);
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
var SelectWithSub = (0, component_1.assignSubComponent)(select_1.default, {
    AutoComplete: config_provider_1.default.config(auto_complete_1.default, {
        componentName: 'Select',
    }),
    Option: option_1.default,
    OptionGroup: option_group_1.default,
    // compatible with 0.x version: Select.Combobox
    Combobox: config_provider_1.default.config(select_1.default, {
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
exports.default = config_provider_1.default.config(SelectWithSub, {
    transform: transform,
    exportNames: ['focusInput', 'handleSearchClear'],
});
