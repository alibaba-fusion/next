import { Form as MeetForm } from '@alifd/meet-react';
import NextForm from '../index';

const Form = MeetForm ? MeetForm : NextForm;

export default Form;
