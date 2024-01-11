import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
type _dayjs = typeof dayjs;
export interface dayjsWithIsSelf extends _dayjs {
    isSelf: _dayjs['isDayjs'];
}
declare const datejs: dayjsWithIsSelf;
export default datejs;
