import { Rating as MeetRating } from '@alifd/meet-react';
import NextRating from '../index';

var Rating = MeetRating ? MeetRating : NextRating;

export default Rating;