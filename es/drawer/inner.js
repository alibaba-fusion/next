import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { obj } from '../util';

var pickOthers = obj.pickOthers;
var Inner = (_temp = _class = function (_Component) {
    _inherits(Inner, _Component);

    function Inner() {
        _classCallCheck(this, Inner);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Inner.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            closeable = _props.closeable,
            placement = _props.placement,
            children = _props.children,
            role = _props.role,
            rtl = _props.rtl;


        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = cx((_cx = {}, _cx[prefix + 'drawer'] = true, _cx[prefix + 'drawer-' + placement] = true, _cx[prefix + 'closeable'] = closeable, _cx[className] = !!className, _cx));

        var ariaProps = {
            role: role,
            'aria-modal': 'true'
        };

        return React.createElement(
            'div',
            _extends({}, ariaProps, {
                className: newClassName
            }, others, {
                dir: rtl ? 'rtl' : undefined
            }),
            children
        );
    };

    return Inner;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    closeable: PropTypes.bool,
    role: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    rtl: PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closeable: true,
    role: 'dialog'
}, _temp);
Inner.displayName = 'Inner';
export { Inner as default };