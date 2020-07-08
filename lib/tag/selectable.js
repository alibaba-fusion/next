'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../util');

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;

/**
 * Tag.Selectable
 */

var Selectable = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Selectable, _Component);

    function Selectable(props) {
        (0, _classCallCheck3.default)(this, Selectable);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked || false
        };

        bindCtx(_this, ['handleClick']);
        return _this;
    }

    Selectable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (props.checked !== undefined && props.checked !== state.checked) {
            return {
                checked: props.checked
            };
        }

        return null;
    };

    Selectable.prototype.handleClick = function handleClick(e) {
        e && e.preventDefault();
        // IE9 不支持 pointer-events，还是可能会触发 click 事件
        if (this.props.disabled) {
            return false;
        }

        var checked = this.state.checked;


        this.setState({
            checked: !checked
        });

        this.props.onChange(!checked, e);
    };

    Selectable.prototype.render = function render() {
        var attrFilterTarget = ['checked', 'defaultChecked', 'onChange', 'className',
        // 防止这些额外的参数影响 tag 的类型
        '_shape', 'closable'];

        var others = _util.obj.pickOthers(attrFilterTarget, this.props);
        var isChecked = 'checked' in this.props ? this.props.checked : this.state.checked;
        var clazz = (0, _classnames2.default)(this.props.className, {
            checked: isChecked
        });
        return _react2.default.createElement(_tag2.default, (0, _extends3.default)({}, others, {
            role: 'checkbox',
            _shape: 'checkable',
            'aria-checked': isChecked,
            className: clazz,
            onClick: this.handleClick
        }));
    };

    return Selectable;
}(_react.Component), _class.propTypes = {
    /**
     * 标签是否被选中，受控用法
     * tag checked or not, a controlled way
     */
    checked: _propTypes2.default.bool,
    /**
     * 标签是否默认被选中，非受控用法
     * tag checked or not by default, a uncontrolled way
     */
    defaultChecked: _propTypes2.default.bool,
    /**
     * 选中状态变化时触发的事件
     * @param {Boolean} checked 是否选中
     * @param {Event} e Dom 事件对象
     */
    onChange: _propTypes2.default.func,
    /**
     * 标签是否被禁用
     */
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.any
}, _class.defaultProps = {
    onChange: noop
}, _temp);
Selectable.displayName = 'Selectable';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Selectable);
module.exports = exports['default'];