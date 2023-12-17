import { Paragraph as MeetParagraph } from '@alifd/meet-react';
import NextParagraph from '../index';

const Paragraph = MeetParagraph ? MeetParagraph : NextParagraph;

export default Paragraph;
