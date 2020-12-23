import { Locale as MeetLocale } from '@alifd/meet-react';
import NextLocale from '../index';

const Locale = MeetLocale ? MeetLocale : NextLocale;

export default Locale;
