import { Form as MeetForm } from '@alifd/meet-react';
import NextForm from '../index';

var Form = MeetForm ? MeetForm : NextForm;

export default Form;