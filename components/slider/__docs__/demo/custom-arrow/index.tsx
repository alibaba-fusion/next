import React, { type HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import { Slider, Icon } from '@alifd/next';

const slides = [
    {
        url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
        text: 'Tape Player Skin Design Competition',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
        text: 'Mobile Phone Taobao Skin Call',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
        text: 'Design Enabling Public Welfare',
    },
    {
        url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
        text: 'Amoy Doll Design Competition',
    },
];

const arrowStyle = {
    display: 'block',
    background: 'red',
    opacity: 1,
    margin: '0 20px',
};

const CustomNextArrow = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} style={arrowStyle}>
            <Icon type="arrow-double-right" />
        </div>
    );
};

const CustomPrevArrow = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} style={arrowStyle}>
            <Icon type="arrow-double-left" />
        </div>
    );
};

ReactDOM.render(
    <Slider nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />} lazyLoad>
        {slides.map((item, index) => (
            <div key={index} className="slider-img-wrapper">
                <img src={item.url} alt={item.text} />
            </div>
        ))}
    </Slider>,
    mountNode
);
