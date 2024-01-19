import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider
            dotsClass="dots-cust"
            dotsDirection="hoz"
            arrows={false}
            dotsRender={(index, current) => {
                console.log('current', current);
                return <a>{index}</a>;
            }}
        >
            <div>
                <h3 className="h3">0</h3>
            </div>
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
