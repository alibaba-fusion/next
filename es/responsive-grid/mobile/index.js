// @ts-expect-error meet-react does not export ResponsiveGrid
import { ResponsiveGrid as MeetResponsiveGrid } from '@alifd/meet-react';
import NextResponsiveGrid from '../index';
var ResponsiveGrid = MeetResponsiveGrid ? MeetResponsiveGrid : NextResponsiveGrid;
export default ResponsiveGrid;
