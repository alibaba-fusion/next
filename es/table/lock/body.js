import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import FixedBody from '../fixed/body';
/* eslint-disable react/prefer-stateless-function */
var LockBody = /** @class */ (function (_super) {
    __extends(LockBody, _super);
    function LockBody() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onBodyScroll = function (event) {
            _this.context.onLockBodyScroll(event);
        };
        return _this;
    }
    LockBody.prototype.componentDidMount = function () {
        this.context.getLockNode('body', findDOMNode(this), this.context.lockType);
    };
    LockBody.prototype.render = function () {
        var event = {
            onLockScroll: this.onBodyScroll,
        };
        return React.createElement(FixedBody, __assign({}, this.props, event));
    };
    LockBody.propTypes = __assign({}, FixedBody.propTypes);
    LockBody.contextTypes = __assign(__assign({}, FixedBody.contextTypes), { getLockNode: PropTypes.func, onLockBodyScroll: PropTypes.func, lockType: PropTypes.oneOf(['left', 'right']) });
    return LockBody;
}(React.Component));
export default LockBody;
