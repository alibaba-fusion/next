import { Slider as MeetSlider } from '@alifd/meet-react';
import NextSlider from '../index';

const Slider = MeetSlider ? MeetSlider : NextSlider;

export default Slider;
