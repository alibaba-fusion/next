import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div style={{ width: '200px' }}>
        <div className="demo-item-title">Vertical multi-picture mode</div>
        <Slider
            slideDirection="ver"
            slidesToShow={3}
            slidesToScroll={1}
            dots={false}
            arrowPosition="inner"
            arrowDirection="ver"
            className="ver-slick"
        >
            {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                    key={index}
                    className="custom-slider"
                    style={{ border: '1px solid transparent' }}
                >
                    <h3 className="h3">{item}</h3>
                </div>
            ))}
        </Slider>

        <div className="demo-item-title">Vertical single-picture mode</div>
        <Slider
            slideDirection="ver"
            dots={false}
            arrowPosition="inner"
            arrowDirection="ver"
            className="ver-slick"
        >
            {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="custom-slider">
                    <h3 className="h3">{item}</h3>
                </div>
            ))}
        </Slider>
    </div>,
    mountNode
);
