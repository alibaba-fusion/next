import { ResponsiveGrid as MeetResponsiveGrid } from '@alifd/meet-react';
import NextResponsiveGrid from '../index';

const ResponsiveGrid = MeetResponsiveGrid ? MeetResponsiveGrid : NextResponsiveGrid;

export default ResponsiveGrid;
