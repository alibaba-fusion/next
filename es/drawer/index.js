import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

import ConfigProvider from '../config-provider';
import Drawer1 from './drawer';
import Drawer2 from './drawer-v2';

import Inner from './inner';

import { show, withContext } from './show';

var Drawer = function (_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer() {
        _classCallCheck(this, Drawer);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Drawer.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = _objectWithoutProperties(_props, ['v2']);

        if (v2) {
            return React.createElement(Drawer2, others);
        } else {
            return React.createElement(Drawer1, others);
        }
    };

    return Drawer;
}(React.Component);

Drawer.displayName = 'Drawer';


Drawer.Inner = Inner;
Drawer.show = show;
Drawer.withContext = withContext;

export default ConfigProvider.config(Drawer);