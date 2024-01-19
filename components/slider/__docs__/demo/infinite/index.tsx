import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider slidesToShow={4} arrowPosition="outer" infinite={false} dots={false}>
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
        </Slider>

        <br />

        <Slider infinite={false} lazyLoad>
            <div>
                <h3 className="h3">1</h3>
            </div>
            <div>
                <h3 className="h3">2</h3>
            </div>
            <div>
                <h3 className="h3">3</h3>
            </div>
            <div>
                <h3 className="h3">4</h3>
            </div>
        </Slider>
    </div>,
    mountNode
);
