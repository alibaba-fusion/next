"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisabledCompatibleTrigger = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function getDisabledCompatibleTrigger(element) {
    if (element.type.displayName === 'Config(Button)' && element.props.disabled) {
        var displayStyle = element.props.style && element.props.style.display
            ? element.props.style.display
            : 'inline-block';
        var child = react_1.default.cloneElement(element, {
            style: tslib_1.__assign(tslib_1.__assign({}, element.props.style), { pointerEvents: 'none' }),
        });
        return (
        // eslint-disable-next-line
        react_1.default.createElement("span", { style: { display: displayStyle, cursor: 'not-allowed' } }, child));
    }
    return element;
}
exports.getDisabledCompatibleTrigger = getDisabledCompatibleTrigger;
