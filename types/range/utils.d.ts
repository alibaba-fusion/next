import type { RangeValueType } from './types';
export declare function inRange(value: number, range: RangeValueType, min: number): boolean;
export declare function getPercent(min: number, max: number, value: number): number;
export declare function getPrecision(step: number): number;
export declare function isEqual(left: RangeValueType, right: RangeValueType): boolean;
export declare function getDragging(current: number, preValue: [number, number]): 'lower' | 'upper';
