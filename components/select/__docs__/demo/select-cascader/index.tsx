import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/types/select';

const provinceData = ['Zhejiang', 'Hubei', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class Demo extends React.Component {
    state = {
        data: [],
        disabled: true,
        province: undefined,
        city: undefined,
    };

    handleProvinceChange: SelectProps['onChange'] = value => {
        const data = cityData[value as keyof typeof cityData];
        this.setState({ data, province: value, city: '', disabled: !data });
    };

    handleCityChange: SelectProps['onChange'] = value => {
        this.setState({ city: value });
        console.log(this.state.province, value);
    };

    render() {
        const { data, disabled, province, city } = this.state;

        return (
            <div>
                <Select
                    placeholder="Select Province"
                    dataSource={provinceData}
                    value={province}
                    onChange={this.handleProvinceChange}
                    style={{ marginRight: 8 }}
                />
                <Select
                    placeholder="Select City"
                    dataSource={data}
                    value={city}
                    onChange={this.handleCityChange}
                    disabled={disabled}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
