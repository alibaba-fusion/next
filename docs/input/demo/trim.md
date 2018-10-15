# 去除空格

- order: 6

onChange返回会自动去除头尾空字符


:::lang=en-us

# Auto Trim

- order: 6

onChange callback will return the trimmed text value
:::
---


````jsx
import { Input } from '@alifd/next';

class App extends React.Component {
    state = {
        value: ''
    }

    onChange(value) {
        console.log('onChange', value);
        this.setState({
            value
        });
    }

    onKeyDown(e, opts) {
        console.log('onKeyDown', opts);
    }

    render() {
        return (<div>
            <Input trim placeholder="cant not input space" aria-label="cant not input space"
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)} />
        </div>);
    }
}
ReactDOM.render(<App/>, mountNode);
````
