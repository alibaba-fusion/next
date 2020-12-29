import { Breadcrumb as MeetBreadcrumb } from '@alifd/meet-react';
import NextBreadcrumb from '../index';

const Breadcrumb = MeetBreadcrumb ? MeetBreadcrumb : NextBreadcrumb;

export default Breadcrumb;
