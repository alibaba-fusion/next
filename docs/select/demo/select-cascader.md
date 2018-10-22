# 级联选择

- order: 4

使用 Select 构建级联选择框

:::lang=en-us

# cascader select

- order: 4

make a cascader by select
:::
---

````jsx
import { Select } from '@alifd/next';

const provinceData = ['Zhejiang', 'Hubei', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            disabled: true
        };

        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
    }

    handleProvinceChange(value) {
        const data = cityData[value];
        this.setState({data, province: value, city: '', disabled: !data});
    }

    handleCityChange(value) {
        this.setState({city: value});
        console.log(this.state.province, value);
    }

    render() {
        const {data, disabled, province, city} = this.state;

        return (
            <div className="demo-container">
                <Select placeholder="Select Province" dataSource={provinceData} value={province} onChange={this.handleProvinceChange} />
                <Select placeholder="Select City" dataSource={data} value={city} onChange={this.handleCityChange} disabled={disabled}/>
            </div>
        );
    }
}

ReactDOM.render(<Demo/>, mountNode);
````

````css
.next-select {
    margin-right:10px;
}

.demo-container {
    background-color: #F8F8F8;
    padding: 16px;
}
````
