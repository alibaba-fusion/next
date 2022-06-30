import { Notification as MeetNotification } from '@alifd/meet-react';
import NextNotification from '../index';

var Notification = MeetNotification ? MeetNotification : NextNotification;

export default Notification;