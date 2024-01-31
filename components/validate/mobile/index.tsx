// @ts-expect-error meet 未导出 Validate
import { Validate as MeetValidate } from '@alifd/meet-react';
import NextValidate from '../index';

const Validate = MeetValidate ? MeetValidate : NextValidate;

export default Validate;
