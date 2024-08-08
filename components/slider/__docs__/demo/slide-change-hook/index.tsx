import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide',
    arrowPosition: 'outer' as const,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    onChange: function (index: number) {
        console.log('change Slide index', index);
    },
};

ReactDOM.render(
    <Slider {...settings}>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
        <div>
            <h3>7</h3>
        </div>
        <div>
            <h3>8</h3>
        </div>
        <div>
            <h3>9</h3>
        </div>
    </Slider>,
    mountNode
);
