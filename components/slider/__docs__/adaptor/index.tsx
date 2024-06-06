import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Slider } from '@alifd/next';

const colors = ['#7732bb', '#047cc0', '#00884b', '#e3bc13', '#db7c00', '#aa231f'];

export default {
    name: 'Slider',
    shape: ['banner', 'card'],
    editor: shape => ({
        props: [
            ...(shape === 'card'
                ? [
                      {
                          name: 'level',
                          label: 'Orientation',
                          type: Types.enum,
                          options: [
                              { label: 'Vertical', value: 'ver' },
                              { label: 'Horizontal', value: 'hoz' },
                          ],
                          default: 'hoz',
                      },
                  ]
                : []),
            {
                name: 'arrow',
                type: Types.bool,
                default: true,
            },
            {
                name: 'dot',
                type: Types.bool,
                default: true,
            },
            {
                name: 'arrowSize',
                type: Types.enum,
                options: ['large', 'medium'],
                default: 'medium',
            },
            {
                name: 'width',
                type: Types.number,
                default: 500,
            },
            {
                name: 'height',
                type: Types.number,
                default: 150,
            },
            {
                name: 'imageNumber',
                type: Types.number,
                default: 4,
            },
        ],
    }),
    adaptor: ({
        shape,
        level = 'hoz',
        arrow,
        dot,
        arrowSize,
        width,
        height,
        imageNumber,
        style,
        ...others
    }) => {
        const slides = [];

        for (let i = 0; i < imageNumber; i++) {
            const slideWidth = level === 'ver' || shape === 'banner' ? width : width / imageNumber;
            const slideHeight = level === 'ver' ? height / imageNumber : height;
            slides.push(
                <div key={i}>
                    <div
                        style={{
                            backgroundColor: colors[i % colors.length],
                            color: '#fff',
                            fontSize: shape === 'banner' ? 36 : 24,
                            lineHeight: `${slideHeight}px`,
                            textAlign: 'center',
                            width: slideWidth,
                            height: slideHeight,
                        }}
                    >
                        Slide {i + 1}
                    </div>
                </div>
            );
        }

        return (
            <Slider
                {...others}
                style={{
                    width,
                    ...style,
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
    demoOptions: demo => {
        if (demo.node.props.level === 'ver') {
            demo.node.props.height = 600;
            demo.node.props.width = 150;
        }
        return demo;
    },
};
