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
ReactDOM.render(
    <div>
        <Rating
            id="rating-a11y-1"
            defaultValue={3}
            readAs={val => starMap[val]}
            onChange={val => console.log('change:', val)}
            onHoverChange={val => console.log('hover:', val)}
        />
    </div>,
    mountNode
);
