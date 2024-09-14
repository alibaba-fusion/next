// @ts-expect-error fixme: meet-react does not export Util but Utils
import { Util as MeetUtil } from '@alifd/meet-react';
import * as NextUtil from '../index';
var Util = MeetUtil ? MeetUtil : NextUtil;
export default Util;
