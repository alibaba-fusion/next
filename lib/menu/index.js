'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _menu = require('./view/menu');

var _menu2 = _interopRequireDefault(_menu);

var _subMenu = require('./view/sub-menu');

var _subMenu2 = _interopRequireDefault(_subMenu);

var _selectableItem = require('./view/selectable-item');

var _selectableItem2 = _interopRequireDefault(_selectableItem);

var _checkboxItem = require('./view/checkbox-item');

var _checkboxItem2 = _interopRequireDefault(_checkboxItem);

var _radioItem = require('./view/radio-item');

var _radioItem2 = _interopRequireDefault(_radioItem);

var _popupItem = require('./view/popup-item');

var _popupItem2 = _interopRequireDefault(_popupItem);

var _group = require('./view/group');

var _group2 = _interopRequireDefault(_group);

var _divider = require('./view/divider');

var _divider2 = _interopRequireDefault(_divider);

var _create = require('./view/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.SubMenu = _subMenu2.default;
_menu2.default.Item = _selectableItem2.default;
_menu2.default.CheckboxItem = _checkboxItem2.default;
_menu2.default.RadioItem = _radioItem2.default;
_menu2.default.PopupItem = _popupItem2.default;
_menu2.default.Group = _group2.default;
_menu2.default.Divider = _divider2.default;
_menu2.default.create = _create2.default;

/* istanbul ignore next */
var transform = function transform(props, deprecated) {
    if ('indentSize' in props) {
        deprecated('indentSize', 'inlineIndent', 'Menu');

        var _props = props,
            indentSize = _props.indentSize,
            others = (0, _objectWithoutProperties3.default)(_props, ['indentSize']);

        props = (0, _extends3.default)({ inlineIndent: indentSize }, others);
    }

    if ('onDeselect' in props) {
        deprecated('onDeselect', 'onSelect', 'Menu');
        if (props.onDeselect) {
            var _props2 = props,
                onDeselect = _props2.onDeselect,
                onSelect = _props2.onSelect,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['onDeselect', 'onSelect']);

            var newOnSelect = function newOnSelect(selectedKeys, item, extra) {
                if (!extra.select) {
                    onDeselect(extra.key);
                }
                if (onSelect) {
                    onSelect(selectedKeys, item, extra);
                }
            };

            props = (0, _extends3.default)({ onSelect: newOnSelect }, _others);
        }
    }

    return props;
};

exports.default = _configProvider2.default.config(_menu2.default, {
    transform: transform
});
module.exports = exports['default'];