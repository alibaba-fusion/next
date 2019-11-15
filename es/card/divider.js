import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';

/**
 * Card.Divider
 * @order 4
 */
var CardDivider = (_temp = _class = function (_PureComponent) {
    _inherits(CardDivider, _PureComponent);

    function CardDivider() {
        _classCallCheck(this, CardDivider);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    CardDivider.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            Component = _props.component,
            className = _props.className,
            others = _objectWithoutProperties(_props, ['prefix', 'component', 'className']);

        return React.createElement(Component, _extends({}, others, {
            className: classNames(prefix + 'card-divider', className)
        }));
    };

    return CardDivider;
}(PureComponent), _class.propTypes = {
    prefix: PropTypes.string,
    /**
     * 设置标签类型
     */
    component: PropTypes.elementType,
    className: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    component: 'hr'
}, _temp);


export default ConfigProvider.config(CardDivider);