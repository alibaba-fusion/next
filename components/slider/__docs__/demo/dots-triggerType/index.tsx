import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider triggerType="click" arrows={false}>
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
        <br />
        <Slider triggerType="hover" arrows={false}>
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
