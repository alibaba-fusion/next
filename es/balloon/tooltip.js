import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import BalloonInner from './inner';
import { normalMap as alignMap } from './alignMap';

var Popup = Overlay.Popup;

/** Balloon.Tooltip */

var Tooltip = (_temp = _class = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props, context) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this._contentId = props.id;
    return _this;
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        align = _props.align,
        style = _props.style,
        prefix = _props.prefix,
        trigger = _props.trigger,
        children = _props.children,
        popupContainer = _props.popupContainer,
        popupProps = _props.popupProps,
        popupClassName = _props.popupClassName,
        popupStyle = _props.popupStyle,
        triggerType = _props.triggerType,
        others = _objectWithoutProperties(_props, ['className', 'align', 'style', 'prefix', 'trigger', 'children', 'popupContainer', 'popupProps', 'popupClassName', 'popupStyle', 'triggerType']);

    var transformOrigin = alignMap[align].trOrigin;
    var _offset = alignMap[align].offset;
    var _style = _extends({ transformOrigin: transformOrigin }, style);

    var content = React.createElement(
      BalloonInner,
      _extends({}, others, {
        id: this._contentId,
        prefix: prefix,
        closable: false,
        isTooltip: true,
        className: className,
        style: _style,
        align: align
      }),
      children
    );

    var triggerProps = {};
    triggerProps['aria-describedby'] = this._contentId;
    triggerProps.tabIndex = '0';

    var newTrigger = React.cloneElement(trigger, triggerProps);

    return React.createElement(
      Popup,
      _extends({}, popupProps, {
        container: popupContainer,
        trigger: this._contentId ? newTrigger : trigger,
        triggerType: triggerType,
        align: alignMap[align].align,
        offset: _offset,
        delay: 0,
        className: popupClassName,
        style: popupStyle,
        shouldUpdatePosition: true
      }),
      content
    );
  };

  return Tooltip;
}(React.Component), _class.propTypes = {
  /**
   * 样式类名的品牌前缀
   */
  prefix: PropTypes.string,
  /**
   * 自定义类名
   */
  className: PropTypes.string,
  /**
   * 自定义内联样式
   */
  style: PropTypes.object,
  /**
   * tooltip的内容
   */
  children: PropTypes.any,
  /**
   * 弹出层位置
   * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
   */
  align: PropTypes.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
  /**
   * 触发元素
   */
  trigger: PropTypes.any,
  /**
   * 触发行为
   * 鼠标悬浮, 获取到焦点, 鼠标点击('hover'，'focus'，'click')或者它们组成的数组，如 ['hover', 'focus']
   */
  triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * 弹层组件style，透传给Popup
   */
  popupStyle: PropTypes.object,
  /**
   * 弹层组件className，透传给Popup
   */
  popupClassName: PropTypes.string,
  /**
   * 弹层组件属性，透传给Popup
   */
  popupProps: PropTypes.object,
  /**
   * 是否pure render
   */
  pure: PropTypes.bool,
  /**
   * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
   */
  popupContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * 弹层id, 传入值才会支持无障碍
   */
  id: PropTypes.string
}, _class.defaultProps = {
  triggerType: 'hover',
  prefix: 'next-',
  align: 'b',
  trigger: React.createElement('span', null)
}, _temp);
Tooltip.displayName = 'Tooltip';
export { Tooltip as default };