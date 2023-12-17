import { Card as MeetCard } from '@alifd/meet-react';
import NextCard from '../index';

const Card = MeetCard ? MeetCard : NextCard;

export default Card;
