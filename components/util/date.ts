import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as updateLocale from 'dayjs/plugin/updateLocale';
import * as localeData from 'dayjs/plugin/localeData';
import * as quarterOfYear from 'dayjs/plugin/quarterOfYear';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
import * as weekOfYear from 'dayjs/plugin/weekOfYear';
import 'dayjs/locale/zh-cn';

type _dayjs = typeof dayjs;

export interface dayjsWithIsSelf extends _dayjs {
    isSelf: _dayjs['isDayjs'];
}

dayjs.extend(advancedFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.locale('zh-cn');

const datejs = dayjs as dayjsWithIsSelf;
datejs.isSelf = dayjs.isDayjs;

dayjs.localeData();

export default datejs;
