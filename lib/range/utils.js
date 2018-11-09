'use strict';

exports.__esModule = true;
exports.inRange = inRange;
exports.getPercent = getPercent;
exports.getPrecision = getPrecision;
exports.isEqual = isEqual;
exports.getDragging = getDragging;
function inRange(value, range, min) {
    if (!Array.isArray(range)) {
        range = [min, range];
    }

    return value >= range[0] && value <= range[1];
}

function getPercent(min, max, value) {
    return (value - min) * 100 / (max - min);
}

function getPrecision(step) {
    var precision = 0;
    var stepString = step.toString();
    if (stepString.indexOf('.') !== -1) {
        precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
}

function isEqual(left, right) {
    if (Array.isArray(left)) {
        return left[0] === right[0] && left[1] === right[1];
    } else {
        return left === right;
    }
}

function getDragging(current, preValue) {
    var dragging = 'upper';

    if (current > preValue[1]) {
        dragging = 'upper';
    } else if (current < preValue[0]) {
        dragging = 'lower';
    } else {
        var mid = (preValue[0] + preValue[1]) / 2;

        dragging = current < mid ? 'lower' : 'upper';
    }

    return dragging;
}