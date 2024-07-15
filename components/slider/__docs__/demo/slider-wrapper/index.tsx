import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Slider, Select } from '@alifd/next';
import { type SelectProps } from '@alifd/meet-react/lib/select/types';

const { Option } = Select;

const Demo = () => {
    const [autoplay, onSelectAutoplay] = useState(false);
    const [autoplaySpeed, onSelectAutoplaySpeed] = useState(1000);

    const onSelectAutoplayChange: SelectProps['onChange'] = value => {
        onSelectAutoplay(value);
    };
    const onSelectAutoplaySpeedChange: SelectProps['onChange'] = value => {
        onSelectAutoplaySpeed(value);
    };

    return (
        <div>
            <Select placeholder="Autoplay" onChange={onSelectAutoplayChange}>
                <Option value>True</Option>
                <Option value={false}>False</Option>
            </Select>
            <br />
            <br />
            <Select placeholder="Autoplay Speed" onChange={onSelectAutoplaySpeedChange}>
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
