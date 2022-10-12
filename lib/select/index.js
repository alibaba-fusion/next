'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _autoComplete = require('./auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

var _optionGroup = require('./option-group');

var _optionGroup2 = _interopRequireDefault(_optionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_select2.default.AutoComplete = _configProvider2.default.config(_autoComplete2.default, {
    componentName: 'Select'
});

_select2.default.Option = _option2.default;
_select2.default.OptionGroup = _optionGroup2.default;

// compatible with 0.x version
/* istanbul ignore next */
function _transform(props, deprecated) {
    var shape = props.shape,
        container = props.container,
        multiple = props.multiple,
        filterBy = props.filterBy,
        overlay = props.overlay,
        safeNode = props.safeNode,
        noFoundContent = props.noFoundContent,
        others = (0, _objectWithoutProperties3.default)(props, ['shape', 'container', 'multiple', 'filterBy', 'overlay', 'safeNode', 'noFoundContent']);


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
            safeNode: safeNode
        };
    }

    return newprops;
}

// compatible with 0.x version: Select.Combobox
_select2.default.Combobox = _configProvider2.default.config(_select2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        deprecated('Select.Combobox', '<Select showSearch={true}/>', 'Select');

        var newprops = _transform(props, deprecated);
        if (props.onInputUpdate) {
            newprops.onSearch = props.onInputUpdate;
            newprops.showSearch = true;
        }
        return newprops;
    }
});

exports.default = _configProvider2.default.config(_select2.default, {
    transform: _transform,
    exportNames: ['focusInput', 'handleSearchClear']
});
module.exports = exports['default'];