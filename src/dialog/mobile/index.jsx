import { Dialog as MeetDialog } from '@alifd/meet-react';
import NextDialog from '../index';

const Dialog = MeetDialog ? MeetDialog : NextDialog;

export default Dialog;
