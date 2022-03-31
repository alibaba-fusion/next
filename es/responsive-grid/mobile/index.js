import { ResponsiveGrid as MeetResponsiveGrid } from '@alifd/meet-react';
import NextResponsiveGrid from '../index';

var ResponsiveGrid = MeetResponsiveGrid ? MeetResponsiveGrid : NextResponsiveGrid;

export default ResponsiveGrid;