import { Upload as MeetUpload } from '@alifd/meet-react';
import NextUpload from '../index';

const Upload = MeetUpload ? MeetUpload : NextUpload;

export default Upload;
