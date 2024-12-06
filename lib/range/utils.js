"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDragging = exports.isEqual = exports.getPrecision = exports.getPercent = exports.inRange = void 0;
function inRange(value, range, min) {
    if (!Array.isArray(range)) {
        range = [min, range];
    }
    return value >= range[0] && value <= range[1];
}
exports.inRange = inRange;
function getPercent(min, max, value) {
    return ((value - min) * 100) / (max - min);
}
exports.getPercent = getPercent;
function getPrecision(step) {
    var precision = 0;
    var stepString = step.toString();
    if (stepString.indexOf('.') !== -1) {
        precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
}
exports.getPrecision = getPrecision;
function isEqual(left, right) {
    if (Array.isArray(left)) {
        // @ts-expect-error 增加对 right 前置判断
        return left[0] === right[0] && left[1] === right[1];
    }
    else {
        return left === right;
    }
}
exports.isEqual = isEqual;
function getDragging(current, preValue) {
    var dragging = 'upper';
    if (current > preValue[1]) {
        dragging = 'upper';
    }
    else if (current < preValue[0]) {
        dragging = 'lower';
    }
    else {
        var mid = (preValue[0] + preValue[1]) / 2;
        dragging = current < mid ? 'lower' : 'upper';
    }
    return dragging;
}
exports.getDragging = getDragging;
