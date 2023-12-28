import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import BodyComponent from '../base/body';
var ListBody = /** @class */ (function (_super) {
    __extends(ListBody, _super);
    function ListBody() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onScroll = function (e) {
            var onFixedScrollSync = _this.context.onFixedScrollSync;
            onFixedScrollSync && onFixedScrollSync(e);
        };
        return _this;
    }
    ListBody.prototype.componentDidMount = function () {
        var getNode = this.context.getNode;
        getNode && getNode('body', findDOMNode(this));
    };
    ListBody.prototype.render = function () {
        return React.createElement(BodyComponent, __assign({ component: "div", onScroll: this.onScroll }, this.props));
    };
    ListBody.contextTypes = {
        getNode: PropTypes.func,
        onFixedScrollSync: PropTypes.func,
    };
    return ListBody;
}(React.Component));
export default ListBody;
