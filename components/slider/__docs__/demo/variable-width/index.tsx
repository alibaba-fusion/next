import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide variable-width',
    arrowPosition: 'outer',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};

ReactDOM.render(
    <Slider {...settings}>
        <div style={{ width: 100 }}>
            <p>100</p>
        </div>
        <div style={{ width: 200 }}>
            <p>200</p>
        </div>
        <div style={{ width: 75 }}>
            <p>75</p>
        </div>
        <div style={{ width: 300 }}>
            <p>300</p>
        </div>
        <div style={{ width: 225 }}>
            <p>225</p>
        </div>
        <div style={{ width: 175 }}>
            <p>175</p>
        </div>
    </Slider>,
    mountNode
);
