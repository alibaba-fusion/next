import { Card as MeetCard } from '@alifd/meet-react';
import NextCard from '../index';
// @ts-expect-error meet-react does not export Card
var Card = MeetCard ? MeetCard : NextCard;
export default Card;
