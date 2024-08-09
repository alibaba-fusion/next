import { Card as MeetCard } from '@alifd/meet-react';
import NextCard from '../index';

var Card = MeetCard ? MeetCard : NextCard;

export default Card;