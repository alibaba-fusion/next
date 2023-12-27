// @ts-expect-error meet-react does not export Paragraph
import { Paragraph as MeetParagraph } from '@alifd/meet-react';
import NextParagraph from '../index';

const Paragraph = MeetParagraph ? MeetParagraph : NextParagraph;

export default Paragraph;
