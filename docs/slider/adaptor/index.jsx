import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Slider } from '@alifd/next';

const banners = [
    'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
    'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
    'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
    'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg'
];

const cards = [
    'https://img.alicdn.com/bao/uploaded/i3/TB1YHwUNpXXXXaNXXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
    'https://img.alicdn.com/bao/uploaded/i3/TB1SyBLNpXXXXb4aXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
    'https://img.alicdn.com/bao/uploaded/i3/TB1NllZLXXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
    'https://img.alicdn.com/bao/uploaded/i4/TB1v3A7KpXXXXa0aXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
    'https://img.alicdn.com/bao/uploaded/i2/TB1FOfLMVXXXXacapXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg'
];

export default {
    name: 'Slider',
    shape: ['banner', 'card'],
    editor: (shape) => ({
      props: [...(shape === 'card' ? [{
        name: 'level',
        type: Types.enum,
        options: [{ label: 'Vertical', value: 'ver'}, {label: 'Horizontal', value: 'hoz' }],
        default: 'hoz'
    }] : []), {
          name: 'arrow',
          type: Types.bool,
          default: true
      }, {
          name: 'dot',
          type: Types.bool,
          default: true
      }, {
          name: 'arrowSize',
          type: Types.enum,
          options: ['large', 'medium'],
          default: 'medium'
      }, {
          name: 'width',
          type: Types.number,
          default: 500
      }, {
          name: 'height',
          type: Types.number,
          default: 150
      }, {
          name: 'imageNumber',
          type: Types.number,
          default: 4
      }],
    }),
    adaptor: ({ shape, level = 'hoz', arrow, dot, arrowSize, width, height, imageNumber, style, ...others }) => {

        const slides = [];

        for (let i = 0; i < imageNumber; i++) {
            const images = shape === 'banner' ? banners : cards;
            const imageURL = images[i % images.length];
            slides.push(
                <div key={i}>
                    <img style={{ width:  level === 'ver' || shape === 'banner' ? width : width / imageNumber, height: level === 'ver'  ? height / imageNumber : height}} src={imageURL} alt="image" />
                </div>
            );
        }

        return (
            <Slider
                {...others}
                style={{
                    width,
                    ...style
                }}
                key={new Date().getTime()}
                slideDirection={level}
                arrowDirection={level}
                arrowPosition={shape === 'card' ? 'outer' : 'inner'}
                infinite={false}
                arrows={arrow}
                dots={dot}
                arrowSize={arrowSize}
                slidesToShow={shape === 'banner' ? 1 : imageNumber}
                slidesToScroll={1}
            >
                {slides}
            </Slider>
        );
    },
    demoOptions: (demo) => {
        if (demo.node.props.level === 'ver') {
            demo.node.props.height = 600;
            demo.node.props.width = 150;
        }
        return demo;
    }
};
