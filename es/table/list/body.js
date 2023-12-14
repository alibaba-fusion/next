import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';

var ListBody = (_temp2 = _class = function (_React$Component) {
    _inherits(ListBody, _React$Component);

    function ListBody() {
        var _temp, _this, _ret;

        _classCallCheck(this, ListBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onScroll = function (e) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;

            onFixedScrollSync && onFixedScrollSync(e);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    ListBody.prototype.componentDidMount = function componentDidMount() {
        var getNode = this.context.getNode;

        getNode && getNode('body', findDOMNode(this));
    };

    ListBody.prototype.render = function render() {
        return React.createElement(BodyComponent, _extends({ component: 'div', onScroll: this.onScroll }, this.props));
    };

    return ListBody;
}(React.Component), _class.contextTypes = {
    getNode: PropTypes.func,
    onFixedScrollSync: PropTypes.func
}, _temp2);
ListBody.displayName = 'ListBody';
export { ListBody as default };