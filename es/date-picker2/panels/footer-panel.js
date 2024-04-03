import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';

import SharedPT from '../prop-types';
import { func, obj } from '../../util';
import defaultLocale from '../../locale/zh-cn';

import Button from '../../button';

var renderNode = func.renderNode;


function normalizePreset(preset) {
    if (Array.isArray(preset)) {
        return preset;
    } else {
        return Object.keys(preset).map(function (key) {
            return {
                label: key,
                value: preset[key]
            };
        });
    }
}

var FooterPanel = (_temp = _class = function (_React$PureComponent) {
    _inherits(FooterPanel, _React$PureComponent);

    function FooterPanel(props) {
        _classCallCheck(this, FooterPanel);

        var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

        _this.renderRanges = function () {
            if (!_this.props.preset) {
                return null;
            }

            var preset = normalizePreset(_this.props.preset);

            return preset.map(function (_ref, index) {
                var label = _ref.label,
                    value = _ref.value,
                    restProps = _objectWithoutProperties(_ref, ['label', 'value']);

                var buttonProps = obj.pickProps(Button.propTypes, restProps);

                var handleClick = function handleClick() {
                    var date = typeof value === 'function' ? value() : value;
                    _this.props.onChange(date, 'CLICK_PRESET');
                };
                return React.createElement(
                    Button,
                    _extends({
                        text: preset.length === 1,
                        size: 'small',
                        type: preset.length === 1 ? 'primary' : 'secondary',
                        key: label + '-' + index
                        // onClick={() =>
                        //     func.invoke(this.props, 'onChange', [
                        //         typeof value === 'function' ? value() : value,
                        //         'CLICK_PRESET',
                        //     ])
                        // }
                        , onClick: handleClick
                    }, buttonProps),
                    label
                );
            });
        };

        _this.prefixCls = props.prefix + 'date-picker2-footer';
        return _this;
    }

    FooterPanel.prototype.render = function render() {
        var _classnames, _classnames2;

        var prefixCls = this.prefixCls;
        var _props = this.props,
            showOk = _props.showOk,
            locale = _props.locale,
            onOk = _props.onOk,
            oKable = _props.oKable,
            extraRender = _props.extraRender,
            className = _props.className;


        var classNames = classnames(prefixCls, className, (_classnames = {}, _classnames[prefixCls + '-with-actions'] = showOk, _classnames));

        var extraNode = renderNode(extraRender);
        var rangeNode = this.renderRanges();
        var actionsNode = React.createElement(
            Button,
            { size: 'small', disabled: !oKable, onClick: onOk, className: prefixCls + '-ok', type: 'primary' },
            locale.ok
        );

        var showFooter = showOk || extraNode || rangeNode;
        var rangesCls = classnames(prefixCls + '-preset', (_classnames2 = {}, _classnames2[prefixCls + '-preset-only'] = !showOk && !extraNode, _classnames2));

        return showFooter ? React.createElement(
            'div',
            { className: classNames },
            extraNode ? React.createElement(
                'div',
                { className: prefixCls + '-extra' },
                extraNode
            ) : null,
            rangeNode ? React.createElement(
                'div',
                { className: rangesCls },
                rangeNode
            ) : null,
            showOk ? React.createElement(
                'div',
                { className: prefixCls + '-actions' },
                actionsNode
            ) : null
        ) : null;
    };

    return FooterPanel;
}(React.PureComponent), _class.propTypes = {
    rtl: PT.bool,
    className: PT.string,
    prefix: PT.string,
    locale: PT.object,
    showOk: PT.bool,
    preset: PT.oneOfType([PT.array, PT.object]),
    onOk: PT.func,
    oKable: PT.bool,
    extraRender: SharedPT.render
}, _class.defaultProps = {
    locale: defaultLocale.DatePicker
}, _temp);


export default polyfill(FooterPanel);