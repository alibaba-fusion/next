import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Rating } from '@alifd/next';

ReactDOM.render(
    <div>
        <Rating
            defaultValue={3.5}
            onChange={val => console.log('change:', val)}
            onHoverChange={val => console.log('hover:', val)}
        />
    </div>,
    mountNode
);
