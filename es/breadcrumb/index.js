import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import Item from './item';

/**
 * Breadcrumb
 */
var Breadcrumb = (_temp = _class = function (_Component) {
    _inherits(Breadcrumb, _Component);

    function Breadcrumb() {
        _classCallCheck(this, Breadcrumb);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Breadcrumb.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            className = _props.className,
            maxNode = _props.maxNode,
            children = _props.children,
            separator = _props.separator,
            component = _props.component,
            others = _objectWithoutProperties(_props, ['prefix', 'rtl', 'className', 'maxNode', 'children', 'separator', 'component']);
        // const clazz = classNames(``, className);


        var items = void 0;
        var length = Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            var breakpointer = length - maxNode + 1;
            items = [];

            Children.forEach(children, function (item, i) {
                var ariaProps = {};

                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                if (i && i === breakpointer) {
                    items.push(React.cloneElement(item, _extends({
                        separator: separator,
                        prefix: prefix,
                        key: i,
                        activated: i === length - 1
                    }, ariaProps, {
                        className: prefix + 'breadcrumb-text-ellipsis'
                    }), '...'));
                } else if (!i || i > breakpointer) {
                    items.push(React.cloneElement(item, _extends({
                        separator: separator,
                        prefix: prefix,
                        key: i
                    }, ariaProps, {
                        activated: i === length - 1
                    })));
                }
            });
        } else {
            items = Children.map(children, function (item, i) {
                var ariaProps = {};

                if (i === length - 1) {
                    ariaProps['aria-current'] = 'page';
                }

                return React.cloneElement(item, _extends({
                    separator: separator,
                    prefix: prefix,
                    activated: i === length - 1
                }, ariaProps, {
                    key: i
                }));
            });
        }

        if (rtl) {
            others.dir = 'rtl';
        }

        var BreadcrumbComponent = component;

        return React.createElement(
            BreadcrumbComponent,
            _extends({
                'aria-label': 'Breadcrumb',
                className: className
            }, others),
            React.createElement(
                'ul',
                { className: prefix + 'breadcrumb' },
                items
            )
        );
    };

    return Breadcrumb;
}(Component), _class.Item = Item, _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /*eslint-disable*/
    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     */
    children: function children(props, propName) {
        Children.forEach(props[propName], function (child) {
            if (!(child && typeof child.type === 'function' && child.type._typeMark === 'breadcrumb_item')) {
                throw new Error("Breadcrumb's children must be Breadcrumb.Item!");
            }
        });
    },
    /*eslint-enable*/
    /**
     * 面包屑最多显示个数，超出部分会被隐藏
     */
    maxNode: PropTypes.number,
    /**
     * 分隔符，可以是文本或 Icon
     */
    separator: PropTypes.node,
    /**
     * 设置标签类型
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.any
}, _class.defaultProps = {
    prefix: 'next-',
    maxNode: 100,
    separator: React.createElement(Icon, { type: 'arrow-right' }),
    component: 'nav'
}, _temp);
Breadcrumb.displayName = 'Breadcrumb';


export default ConfigProvider.config(Breadcrumb);