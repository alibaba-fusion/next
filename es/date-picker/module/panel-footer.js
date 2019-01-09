import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import Button from '../../button';
import { func } from '../../util';
import { PANEL } from '../util';

var PanelFooter = (_temp2 = _class = function (_React$PureComponent) {
    _inherits(PanelFooter, _React$PureComponent);

    function PanelFooter() {
        var _temp, _this, _ret;

        _classCallCheck(this, PanelFooter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.changePanel = function () {
            var _PANEL$DATE$PANEL$TIM;

            var targetPanel = (_PANEL$DATE$PANEL$TIM = {}, _PANEL$DATE$PANEL$TIM[PANEL.DATE] = PANEL.TIME, _PANEL$DATE$PANEL$TIM[PANEL.TIME] = PANEL.DATE, _PANEL$DATE$PANEL$TIM)[_this.props.panel];
            _this.props.onPanelChange(targetPanel);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    PanelFooter.prototype.render = function render() {
        var _PANEL$DATE$PANEL$TIM2;

        var _props = this.props,
            prefix = _props.prefix,
            locale = _props.locale,
            panel = _props.panel,
            value = _props.value,
            onPanelChange = _props.onPanelChange,
            onOk = _props.onOk;

        var panelBtnLabel = (_PANEL$DATE$PANEL$TIM2 = {}, _PANEL$DATE$PANEL$TIM2[PANEL.DATE] = locale.selectTime, _PANEL$DATE$PANEL$TIM2[PANEL.TIME] = locale.selectDate, _PANEL$DATE$PANEL$TIM2)[panel];

        var sharedBtnProps = {
            size: 'small',
            type: 'primary',
            disabled: !value
        };

        return React.createElement(
            'div',
            { className: prefix + 'date-picker-panel-footer' },
            onPanelChange ? React.createElement(
                Button,
                _extends({}, sharedBtnProps, { text: true, onClick: this.changePanel }),
                panelBtnLabel
            ) : null,
            React.createElement(
                Button,
                _extends({}, sharedBtnProps, { onClick: onOk }),
                locale.ok
            )
        );
    };

    return PanelFooter;
}(React.PureComponent), _class.defaultProps = {
    // onPanelChange: func.noop,
    onOk: func.noop
}, _temp2);


export default PanelFooter;