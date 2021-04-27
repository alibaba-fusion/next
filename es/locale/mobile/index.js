import { Locale as MeetLocale } from '@alifd/meet-react';
import NextLocale from '../index';

var Locale = MeetLocale ? MeetLocale : NextLocale;

export default Locale;