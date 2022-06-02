import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func, obj } from '../util';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { normalMap, edgeMap } from './alignMap';

/**
 * Created by xiachi on 17/2/10.
 */

var noop = func.noop;
var BalloonInner = (_temp = _class = function (_React$Component) {
    _inherits(BalloonInner, _React$Component);

    function BalloonInner() {
        _classCallCheck(this, BalloonInner);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    BalloonInner.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefix = _props.prefix,
            closable = _props.closable,
            className = _props.className,
            style = _props.style,
            isTooltip = _props.isTooltip,
            align = _props.align,
            title = _props.title,
            type = _props.type,
            onClose = _props.onClose,
            alignEdge = _props.alignEdge,
            v2 = _props.v2,
            children = _props.children,
            rtl = _props.rtl,
            locale = _props.locale,
            others = _objectWithoutProperties(_props, ['prefix', 'closable', 'className', 'style', 'isTooltip', 'align', 'title', 'type', 'onClose', 'alignEdge', 'v2', 'children', 'rtl', 'locale']);

        var alignMap = alignEdge || v2 ? edgeMap : normalMap;
        var _prefix = prefix;

        if (isTooltip) {
            _prefix = _prefix + 'balloon-tooltip';
        } else {
            _prefix = _prefix + 'balloon';
        }

        var closableInTitle = closable && title !== undefined;
        var closableInContent = closable && title === undefined;

        var classes = classNames((_classNames = {}, _classNames['' + _prefix] = true, _classNames[_prefix + '-' + type] = type, _classNames[_prefix + '-medium'] = true, _classNames[_prefix + '-' + alignMap[align].arrow] = alignMap[align], _classNames[_prefix + '-closable'] = closableInContent, _classNames[className] = className, _classNames));

        var titleCls = classNames((_classNames2 = {}, _classNames2[prefix + 'balloon-title'] = true, _classNames2[_prefix + '-closable'] = closableInTitle, _classNames2));

        var closeIcon = React.createElement(
            'a',
            { role: 'button', 'aria-label': locale.close, tabIndex: '0', className: _prefix + '-close', onClick: onClose },
            React.createElement(Icon, { type: 'close', size: 'small' })
        );

        return React.createElement(
            'div',
            _extends({
                role: 'tooltip',
                'aria-live': 'polite',
                dir: rtl ? 'rtl' : undefined,
                className: classes,
                style: style
            }, obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            React.createElement(
                'div',
                { className: prefix + 'balloon-arrow' },
                React.createElement('div', { className: prefix + 'balloon-arrow-content' })
            ),
            title && React.createElement(
                'div',
                { className: titleCls },
                title,
                closableInTitle && closeIcon
            ),
            React.createElement(
                'div',
                { className: prefix + 'balloon-content' },
                children
            ),
            closableInContent && closeIcon
        );
    };

    return BalloonInner;
}(React.Component), _class.contextTypes = {
    prefix: PropTypes.string
}, _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    closable: PropTypes.bool,
    children: PropTypes.any,
    title: PropTypes.node,
    className: PropTypes.string,
    alignEdge: PropTypes.bool,
    onClose: PropTypes.func,
    style: PropTypes.any,
    align: PropTypes.string,
    type: PropTypes.string,
    isTooltip: PropTypes.bool,
    locale: PropTypes.object,
    pure: PropTypes.bool,
    v2: PropTypes.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closable: true,
    onClose: noop,
    locale: zhCN.Balloon,
    align: 'b',
    type: 'normal',
    alignEdge: false,
    pure: false
}, _temp);
BalloonInner.displayName = 'BalloonInner';


export default BalloonInner;