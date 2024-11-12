// @ts-expect-error meet-react does not export Loading
import { Loading as MeetLoading } from '@alifd/meet-react';
import NextLoading from '../index';
var Loading = MeetLoading ? MeetLoading : NextLoading;
export default Loading;
