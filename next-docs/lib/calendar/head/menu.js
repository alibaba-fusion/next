'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2; /* istanbul ignore file */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _menu = require('../../menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectMenu = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SelectMenu, _Component);

    function SelectMenu() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SelectMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.saveRef = function (ref) {
            _this.menuEl = ref;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    SelectMenu.prototype.componentDidMount = function componentDidMount() {
        this.scrollToSelectedItem();
    };

    SelectMenu.prototype.scrollToSelectedItem = function scrollToSelectedItem() {
        var _props = this.props,
            prefix = _props.prefix,
            dataSource = _props.dataSource,
            value = _props.value;


        var selectedIndex = dataSource.findIndex(function (item) {
            return item.value === value;
        });

        if (selectedIndex === -1) {
            return;
        }

        var itemSelector = '.' + prefix + 'menu-item';
        var menu = (0, _reactDom.findDOMNode)(this.menuEl);
        var targetItem = menu.querySelectorAll(itemSelector)[selectedIndex];
        if (targetItem) {
            menu.scrollTop = targetItem.offsetTop - Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) * targetItem.clientHeight;
        }
    };

    SelectMenu.prototype.render = function render() {
        var _props2 = this.props,
            prefix = _props2.prefix,
            dataSource = _props2.dataSource,
            onChange = _props2.onChange,
            value = _props2.value,
            className = _props2.className,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'dataSource', 'onChange', 'value', 'className']);

        return _react2.default.createElement(
            _menu2.default,
            (0, _extends3.default)({}, others, {
                ref: this.saveRef,
                selectMode: 'single',
                selectedKeys: [String(value)],
                onSelect: function onSelect(selectKeys) {
                    return onChange(Number(selectKeys[0]));
                },
                role: 'listbox',
                className: prefix + 'calendar-panel-menu ' + className
            }),
            dataSource.map(function (_ref) {
                var label = _ref.label,
                    value = _ref.value;
                return _react2.default.createElement(
                    _menu2.default.Item,
                    { key: value },
                    label
                );
            })
        );
    };

    return SelectMenu;
}(_react.Component), _class.isNextMenu = true, _class.propTypes = {
    dataSource: _propTypes2.default.arrayOf(_propTypes2.default.object),
    value: _propTypes2.default.number,
    prefix: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    children: _propTypes2.default.node
}, _temp2);
SelectMenu.displayName = 'SelectMenu';
exports.default = SelectMenu;
module.exports = exports['default'];