import type { RangeValueType } from './types';

export function inRange(value: number, range: RangeValueType, min: number) {
    if (!Array.isArray(range)) {
        range = [min, range];
    }

    return value >= range[0] && value <= range[1];
}

export function getPercent(min: number, max: number, value: number) {
    return ((value - min) * 100) / (max - min);
}

export function getPrecision(step: number) {
    let precision = 0;
    const stepString = step.toString();
    if (stepString.indexOf('.') !== -1) {
        precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
}

export function isEqual(left: RangeValueType, right: RangeValueType) {
    if (Array.isArray(left)) {
        // @ts-expect-error 增加对 right 前置判断
        return left[0] === right[0] && left[1] === right[1];
    } else {
        return left === right;
    }
}

export function getDragging(current: number, preValue: [number, number]) {
    let dragging: 'lower' | 'upper' = 'upper';

    if (current > preValue[1]) {
        dragging = 'upper';
    } else if (current < preValue[0]) {
        dragging = 'lower';
    } else {
        const mid = (preValue[0] + preValue[1]) / 2;

        dragging = current < mid ? 'lower' : 'upper';
    }

    return dragging;
}
