import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const datejs = dayjs;
datejs.isSelf = dayjs.isDayjs;

export default datejs;
