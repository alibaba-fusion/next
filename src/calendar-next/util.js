import { datejs } from '../util';
import { CALENDAR_MODE } from './constant';
// export function isCurYear(v) {
//     return v.Year() === datejs().Year();
// }

// export function isCurMonth(v) {
//     return isCurYear(v) && v.month() === datejs().month();
// }

// export function isCurDate(v) {
//     return isCurMonth(v) && v.date() === datejs().date();
// }

// export function isToday(v) {
//     return isCurDate(v);
// }

export function isSame(v0, v1, p) {
    const precisions = ['year', 'quarter', 'month', 'week', 'date', 'hour', 'minute', 'second'];

    // 同一天对应的是date日期单位
    // datejs().day() 对应的是星期几
    if (p === 'day') {
        p = 'date';
    }

    const idx = precisions.indexOf(p);

    for (let i = 0; i <= idx; i++) {
        const m = precisions[i];

        if (v0[m]() !== v1[m]()) {
            return false;
        }
    }
    return true;
}
