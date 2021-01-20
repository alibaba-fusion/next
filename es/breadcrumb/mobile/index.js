import { Breadcrumb as MeetBreadcrumb } from '@alifd/meet-react';
import NextBreadcrumb from '../index';

var Breadcrumb = MeetBreadcrumb ? MeetBreadcrumb : NextBreadcrumb;

export default Breadcrumb;