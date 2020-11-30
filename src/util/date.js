import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import 'dayjs/locale/zh-cn';

dayjs.extend(advancedFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.locale('zh-cn');

const datejs = dayjs;
datejs.isSelf = dayjs.isDayjs;

dayjs.localeData();

export default datejs;
