import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '../grid';
import { obj } from '../util';
import Error from './error';
import { getFieldInitCfg } from './enhance';

var Row = Grid.Row,
    Col = Grid.Col;

/** Form.Item
 *  @description 手动传递了 wrapCol labelCol 会使用 Grid 辅助布局; labelAlign='top' 会强制禁用 Grid
 *  @order 1
 */

var Item = (_temp = _class = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  /**
   * 从子元素里面提取表单组件
   */
  Item.prototype.getNames = function getNames() {
    var children = React.Children.toArray(this.props.children);
    return children.filter(function (c) {
      return c.props && ('name' in c.props || 'data-meta' in c.props);
    }).map(function (c) {
      return c.props.name || c.props.id;
    });
  };

  Item.prototype.getHelper = function getHelper() {
    var help = this.props.help;
    var _formField = this.context._formField;

    return React.createElement(
      Error,
      { name: help === undefined ? this.getNames() : undefined, field: _formField },
      help
    );
  };

  Item.prototype.getState = function getState() {
    var validateState = this.props.validateState;

    if (validateState) {
      return validateState;
    }

    if (this.context._formField) {
      var getState = this.context._formField.getState;

      var names = this.getNames();
      if (!names.length) {
        return '';
      }

      return getState(names[0]);
    }

    return undefined;
  };

  Item.prototype.getSize = function getSize() {
    return this.props.size || this.context._formSize;
  };

  Item.prototype.getItemLabel = function getItemLabel() {
    var _classNames;

    var _props = this.props,
        id = _props.id,
        required = _props.required,
        _props$asterisk = _props.asterisk,
        asterisk = _props$asterisk === undefined ? required : _props$asterisk,
        label = _props.label,
        labelCol = _props.labelCol,
        wrapperCol = _props.wrapperCol,
        prefix = _props.prefix,
        labelAlign = _props.labelAlign,
        labelTextAlign = _props.labelTextAlign;


    if (!label) {
      return null;
    }

    var ele = React.createElement(
      'label',
      { htmlFor: id || this.getNames()[0], required: asterisk, key: 'label' },
      label
    );

    var cls = classNames((_classNames = {}, _classNames[prefix + 'form-item-label'] = true, _classNames[prefix + 'left'] = labelTextAlign === 'left', _classNames));

    if ((wrapperCol || labelCol) && labelAlign !== 'top') {
      return React.createElement(
        Col,
        _extends({}, labelCol, { className: cls }),
        ele
      );
    }

    return React.createElement(
      'div',
      { className: cls },
      ele
    );
  };

  Item.prototype.getItemWrapper = function getItemWrapper() {
    var _this2 = this;

    var _props2 = this.props,
        hasFeedback = _props2.hasFeedback,
        labelCol = _props2.labelCol,
        wrapperCol = _props2.wrapperCol,
        children = _props2.children,
        extra = _props2.extra,
        labelAlign = _props2.labelAlign,
        prefix = _props2.prefix;


    var state = this.getState();

    var childrenProps = { size: this.getSize() };
    if (state && (state === 'error' || hasFeedback)) {
      childrenProps.state = state;
    }

    if (labelAlign === 'inset') {
      childrenProps.label = this.getItemLabel();
    }

    var ele = React.Children.map(children, function (child) {
      if (child && typeof child.type === 'function' && child.type._typeMark !== 'form_error') {
        var extraProps = childrenProps;
        if (_this2.context._formField && 'name' in child.props && !('data-meta' in child.props)) {
          extraProps = _this2.context._formField.init(child.props.name, _extends({}, getFieldInitCfg(_this2.props, child.type.displayName), {
            props: child.props
          }), childrenProps);
        } else {
          extraProps = _extends({}, child.props, extraProps);
        }

        return React.cloneElement(child, extraProps);
      }
      return child;
    });

    var help = this.getHelper();

    if ((wrapperCol || labelCol) && labelAlign !== 'top') {
      return React.createElement(
        Col,
        _extends({}, wrapperCol, { className: prefix + 'form-item-control', key: 'item' }),
        ele,
        ' ',
        help,
        ' ',
        extra
      );
    }

    return React.createElement(
      'div',
      { className: prefix + 'form-item-control' },
      ele,
      ' ',
      help,
      ' ',
      extra
    );
  };

  Item.prototype.render = function render() {
    var _classNames2;

    var _props3 = this.props,
        className = _props3.className,
        labelAlign = _props3.labelAlign,
        style = _props3.style,
        prefix = _props3.prefix,
        wrapperCol = _props3.wrapperCol,
        labelCol = _props3.labelCol;

    var state = this.getState();
    var size = this.getSize();

    var itemClassName = classNames((_classNames2 = {}, _classNames2[prefix + 'form-item'] = true, _classNames2['' + prefix + labelAlign] = labelAlign, _classNames2['has-' + state] = !!state, _classNames2['' + prefix + size] = !!size, _classNames2['' + className] = !!className, _classNames2));

    // 垂直模式并且左对齐才用到
    var Tag = (wrapperCol || labelCol) && labelAlign !== 'top' ? Row : 'div';
    var label = labelAlign === 'inset' ? null : this.getItemLabel();

    return React.createElement(
      Tag,
      _extends({}, obj.pickOthers(Item.propTypes, this.props), { className: itemClassName, style: style }),
      label,
      this.getItemWrapper()
    );
  };

  return Item;
}(React.Component), _class.propTypes = {
  /**
   * 样式前缀
   */
  prefix: PropTypes.string,
  /**
   * label 标签的文本
   */
  label: PropTypes.node,
  /**
   * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
   */
  labelCol: PropTypes.object,
  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol: PropTypes.object,
  /**
   * 自定义提示信息，如不设置，则会根据校验规则自动生成.
   */
  help: PropTypes.node,
  /**
   * 校验状态，如不设置，则会根据校验规则自动生成
   * @enumdesc , 成功, 失败, 校验中
   */
  validateState: PropTypes.oneOf(['error', 'success', 'loading']),
  /**
   * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持
   */
  hasFeedback: PropTypes.bool, //TODO: hasFeedback => validateStatus=[error,success,loading]
  /**
   * 自定义内联样式
   */
  style: PropTypes.object,
  id: PropTypes.string,
  children: PropTypes.node,
  /**
   * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
   */
  extra: PropTypes.node,
  /**
   * 单个Item的size自定义，优先级高于Form的size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
   */
  size: PropTypes.oneOf(['large', 'small', 'medium']),
  /**
   * 标签的位置
   * @enumdesc 上, 左, 内
   */
  labelAlign: PropTypes.oneOf(['top', 'left', 'inset']),
  /**
   * 标签的左右对齐方式
   * @enumdesc 左, 右
   */
  labelTextAlign: PropTypes.oneOf(['left', 'right']),
  /**
   * 扩展class
   */
  className: PropTypes.string,
  /**
   * [表单校验] 不能为空
   */
  required: PropTypes.bool,
  /**
   * required 的星号是否显示
   */
  asterisk: PropTypes.bool,
  /**
   * required 自定义错误信息
   */
  requiredMessage: PropTypes.string,
  /**
   * required 自定义触发方式
   */
  requiredTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * [表单校验] 最小值
   */
  min: PropTypes.number,
  /**
   * [表单校验] 最大值
   */
  max: PropTypes.number,
  /**
   * min/max 自定义错误信息
   */
  minmaxMessage: PropTypes.string,
  /**
   * min/max 自定义触发方式
   */
  minmaxTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * [表单校验] 字符串最小长度 / 数组最小个数
   */
  minLength: PropTypes.number,
  /**
   * [表单校验] 字符串最大长度 / 数组最大个数
   */
  maxLength: PropTypes.number,
  /**
   * minLength/maxLength 自定义错误信息
   */
  minmaxLengthMessage: PropTypes.string,
  /**
   * minLength/maxLength 自定义触发方式
   */
  minmaxLengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * [表单校验] 字符串精确长度 / 数组精确个数
   */
  length: PropTypes.number,
  /**
   * length 自定义错误信息
   */
  lengthMessage: PropTypes.string,
  /**
   * length 自定义触发方式
   */
  lengthTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * 正则校验
   */
  pattern: PropTypes.any,
  /**
   * [表单校验] 四种常用的 pattern
   */
  format: PropTypes.oneOf(['number', 'email', 'url', 'tel']),
  /**
   * format 自定义错误信息
   */
  formatMessage: PropTypes.string,
  /**
   * format 自定义触发方式
   */
  formatTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * [表单校验] 自定义校验函数
   */
  validator: PropTypes.func
}, _class.defaultProps = {
  prefix: 'next-',
  hasFeedback: false
}, _class.contextTypes = {
  _formField: PropTypes.object,
  _formSize: PropTypes.oneOf(['large', 'small', 'medium'])
}, _class._typeMark = 'form_item', _temp);
Item.displayName = 'Item';
export { Item as default };