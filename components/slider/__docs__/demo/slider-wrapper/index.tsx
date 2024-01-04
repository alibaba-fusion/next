import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Slider, Select, Switch } from '@alifd/next';

const { Option } = Select;

const Demo = () => {
    const [autoplay, onSelectAutoplay] = useState(false);
    const [autoplaySpeed, onSelectAutoplaySpeed] = useState(1000);

    return (
        <div>
            <Select placeholder="Autoplay" onChange={onSelectAutoplay}>
                <Option value>True</Option>
                <Option value={false}>False</Option>
            </Select>
            <br />
            <br />
            <Select placeholder="Autoplay Speed" onChange={onSelectAutoplaySpeed}>
                <Option value={1000}>1 second</Option>
                <Option value={2000}>2 seconds</Option>
                <Option value={3000}>3 seconds</Option>
            </Select>
            <br />
            <br />
            <Slider autoplay={autoplay} autoplaySpeed={autoplaySpeed}>
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
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
