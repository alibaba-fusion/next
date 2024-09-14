import { __assign } from "tslib";
import React from 'react';
export function getDisabledCompatibleTrigger(element) {
    if (element.type.displayName === 'Config(Button)' && element.props.disabled) {
        var displayStyle = element.props.style && element.props.style.display
            ? element.props.style.display
            : 'inline-block';
        var child = React.cloneElement(element, {
            style: __assign(__assign({}, element.props.style), { pointerEvents: 'none' }),
        });
        return (
        // eslint-disable-next-line
        React.createElement("span", { style: { display: displayStyle, cursor: 'not-allowed' } }, child));
    }
    return element;
}
