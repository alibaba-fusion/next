import { Loading as MeetLoading } from '@alifd/meet-react';
import NextLoading from '../index';

const Loading = MeetLoading ? MeetLoading : NextLoading;

export default Loading;
