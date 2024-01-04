import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

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

const itemNodes = slides.map((item, index) => (
    <div key={index} className="slider-img-wrapper">
        <img draggable={false} src={item.url} alt={item.text} />
    </div>
));

ReactDOM.render(<Slider>{itemNodes}</Slider>, mountNode);
