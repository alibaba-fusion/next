// @ts-expect-error meet-react does not export Affix
import { Grid as MeetGrid } from '@alifd/meet-react';
import NextGrid from '../index';
var Grid = MeetGrid ? MeetGrid : NextGrid;
export default Grid;
