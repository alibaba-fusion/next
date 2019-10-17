import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';

export default function Base(props) {
    var _class, _temp;

    var componentName = props.componentName;
    var Shell = (_temp = _class = function (_Component) {
        _inherits(Shell, _Component);

        function Shell() {
            _classCallCheck(this, Shell);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
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
                others = _objectWithoutProperties(_props, ['prefix', 'className', 'miniable', 'device', 'direction', 'children', 'collapse', 'triggerProps', 'onCollapseChange', 'component']);

            var basePrefix = this.context.prefix || prefix;

            var Tag = component;

            var cls = classnames((_classnames = {}, _classnames[basePrefix + 'shell-' + componentName.toLowerCase()] = true, _classnames[basePrefix + 'shell-collapse'] = !!collapse, _classnames[basePrefix + 'shell-mini'] = miniable, _classnames[className] = !!className, _classnames));

            var newChildren = children;
            if (componentName === 'Content') {
                newChildren = React.createElement(
                    'div',
                    { className: basePrefix + 'shell-content-inner' },
                    children
                );
            }

            if (componentName === 'Page') {
                return children;
            }

            if (['ToolDock'].indexOf(componentName) > -1 || componentName === 'Navigation' && direction === 'ver') {
                Tag = 'aside';
            }

            return React.createElement(
                Tag,
                _extends({ className: cls }, others),
                newChildren
            );
        };

        return Shell;
    }(Component), _class.displayName = componentName, _class._typeMark = 'Shell_' + componentName, _class.propTypes = {
        prefix: PropTypes.string,
        collapse: PropTypes.bool,
        miniable: PropTypes.bool,
        component: PropTypes.string,
        trigger: PropTypes.node,
        triggerProps: PropTypes.object,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 弹层显示或隐藏时触发的回调函数
         * @param {Boolean} collapse 弹层是否显示
         */
        onCollapseChange: PropTypes.func
    }, _class.defaultProps = {
        prefix: 'next-',
        component: 'div',
        onCollapseChange: function onCollapseChange() {}
    }, _class.childContextTypes = {
        isCollapse: PropTypes.bool
    }, _class.contextTypes = {
        shellPrefix: PropTypes.string
    }, _temp);
    Shell.displayName = 'Shell';


    return ConfigProvider.config(Shell);
}