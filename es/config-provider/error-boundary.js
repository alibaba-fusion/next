import { __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
function DefaultUI() {
    // fixme: string is not a valid react component return type
    return '';
}
DefaultUI.propTypes = {
    error: PropTypes.object,
    errorInfo: PropTypes.object,
};
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: null, errorInfo: null };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        var afterCatch = this.props.afterCatch;
        if (typeof afterCatch === 'function') {
            afterCatch(error, errorInfo);
        }
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props.fallbackUI, FallbackUI = _a === void 0 ? DefaultUI : _a;
        if (this.state.errorInfo) {
            return React.createElement(FallbackUI, { error: this.state.error, errorInfo: this.state.errorInfo });
        }
        // Normally, just render children
        return this.props.children;
    };
    ErrorBoundary.propTypes = {
        children: PropTypes.element,
        afterCatch: PropTypes.func,
        fallbackUI: PropTypes.func,
    };
    return ErrorBoundary;
}(Component));
export default ErrorBoundary;
