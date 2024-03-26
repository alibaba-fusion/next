import React from 'react';
import ReactDOM from 'react-dom';
import { Rating } from '@alifd/next';

const starMap: Record<string, string> = {
    1: 'Bad',
    2: 'OK',
    3: 'Good',
    4: 'Great',
    5: 'Perfect',
};

ReactDOM.render(<Rating defaultValue={2} showGrade readAs={val => starMap[val]} />, mountNode);
