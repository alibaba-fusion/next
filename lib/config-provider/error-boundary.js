"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
function DefaultUI() {
    // fixme: string is not a valid react component return type
    return '';
}
DefaultUI.propTypes = {
    error: prop_types_1.default.object,
    errorInfo: prop_types_1.default.object,
};
var ErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
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
            return react_1.default.createElement(FallbackUI, { error: this.state.error, errorInfo: this.state.errorInfo });
        }
        // Normally, just render children
        return this.props.children;
    };
    ErrorBoundary.propTypes = {
        children: prop_types_1.default.element,
        afterCatch: prop_types_1.default.func,
        fallbackUI: prop_types_1.default.func,
    };
    return ErrorBoundary;
}(react_1.Component));
exports.default = ErrorBoundary;
