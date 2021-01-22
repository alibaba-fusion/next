import { Calendar as MeetCalendar } from '@alifd/meet-react';
import NextCalendar from '../index';

const Calendar = MeetCalendar ? MeetCalendar : NextCalendar;

export default Calendar;
