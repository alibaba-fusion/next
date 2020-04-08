'use strict';

exports.__esModule = true;

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

exports.default = Base;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Base(props) {
    var _class, _temp;

    var componentName = props.componentName;
    var Shell = (_temp = _class = function (_Component) {
        (0, _inherits3.default)(Shell, _Component);

        function Shell() {
            (0, _classCallCheck3.default)(this, Shell);
            return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
        }

        Shell.prototype.getChildContext = function getChildContext() {
            var collapse = this.props.collapse;


            return {
                isCollapse: collapse
            };
        };

        Shell.prototype.render = function render() {
            var _classnames;

            var _props = this.props,
                prefix = _props.prefix,
                className = _props.className,
                miniable = _props.miniable,
                device = _props.device,
                direction = _props.direction,
                children = _props.children,
                collapse = _props.collapse,
                triggerProps = _props.triggerProps,
                onCollapseChange = _props.onCollapseChange,
                component = _props.component,
                align = _props.align,
                others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'className', 'miniable', 'device', 'direction', 'children', 'collapse', 'triggerProps', 'onCollapseChange', 'component', 'align']);


            var Tag = component;

            var cls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'shell-' + componentName.toLowerCase()] = true, _classnames[prefix + 'shell-collapse'] = !!collapse, _classnames[prefix + 'shell-mini'] = miniable, _classnames[prefix + 'shell-nav-' + align] = componentName === 'Navigation' && direction === 'hoz' && align, _classnames[className] = !!className, _classnames));

            var newChildren = children;
            if (componentName === 'Content') {
                newChildren = _react2.default.createElement(
                    'div',
                    { className: prefix + 'shell-content-inner' },
                    children
                );
            }

            if (componentName === 'Page') {
                return children;
            }

            if (['ToolDock'].indexOf(componentName) > -1 || componentName === 'Navigation' && direction === 'ver') {
                Tag = 'aside';
            }

            return _react2.default.createElement(
                Tag,
                (0, _extends3.default)({ className: cls }, others),
                newChildren
            );
        };

        return Shell;
    }(_react.Component), _class.displayName = componentName, _class._typeMark = 'Shell_' + componentName, _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
        prefix: _propTypes2.default.string,
        collapse: _propTypes2.default.bool,
        miniable: _propTypes2.default.bool,
        component: _propTypes2.default.string,
        trigger: _propTypes2.default.node,
        triggerProps: _propTypes2.default.object,
        direction: _propTypes2.default.oneOf(['hoz', 'ver']),
        align: _propTypes2.default.oneOf(['left', 'right', 'center']),
        /**
         * 弹层显示或隐藏时触发的回调函数
         * @param {Boolean} collapse 弹层是否显示
         */
        onCollapseChange: _propTypes2.default.func
    }), _class.defaultProps = {
        prefix: 'next-',
        component: 'div',
        onCollapseChange: function onCollapseChange() {}
    }, _class.childContextTypes = {
        isCollapse: _propTypes2.default.bool
    }, _temp);
    Shell.displayName = 'Shell';


    return _configProvider2.default.config(Shell);
}
module.exports = exports['default'];