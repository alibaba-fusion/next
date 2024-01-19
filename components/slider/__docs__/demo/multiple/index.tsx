import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
    <div style={{ width: '25%' }} key={item}>
        <h4 className="h4">{item}</h4>
    </div>
));

ReactDOM.render(
    <div style={{ width: '600px' }}>
        <div className="demo-item-title">slide one picture one at a time</div>
        <Slider slidesToShow={4} arrowPosition="outer" dots={false} lazyLoad>
            {slides}
        </Slider>

        <div className="demo-item-title">slide multiple picture one at a time</div>
        <Slider slidesToShow={4} slidesToScroll={4} arrowPosition="outer" lazyLoad dots={false}>
            {slides}
        </Slider>
    </div>,
    mountNode
);
