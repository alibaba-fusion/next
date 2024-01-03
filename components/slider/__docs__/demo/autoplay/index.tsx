import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div style={{ width: '600px' }}>
        <Slider
            slidesToShow={4}
            arrowPosition="outer"
            lazyLoad
            dots={false}
            autoplay
            autoplaySpeed={1000}
        >
            <div style={{ width: '25%' }}>
                <h4 className="h4">1</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">2</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">3</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">4</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">5</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">6</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">7</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">8</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">9</h4>
            </div>
        </Slider>
        <br />
        <Slider speed={1000} autoplay autoplaySpeed={2000}>
            <div style={{ width: '25%' }}>
                <h4 className="h4">1</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">2</h4>
            </div>
            <div style={{ width: '25%' }}>
                <h4 className="h4">3</h4>
            </div>
        </Slider>
    </div>,
    mountNode
);
