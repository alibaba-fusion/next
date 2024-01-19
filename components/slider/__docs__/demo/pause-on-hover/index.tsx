import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide',
    arrowPosition: 'outer',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
