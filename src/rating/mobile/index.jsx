import { Rating as MeetRating } from '@alifd/meet-react';
import NextRating from '../index';

const Rating = MeetRating ? MeetRating : NextRating;

export default Rating;
