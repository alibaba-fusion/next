# 自定义滑块标签

- order: 5

通过 tipRender 自定义滑块标签提示

:::lang=en-us
# tipRender

- order: 5

tipRender demo.

:::

---

````jsx
import { Range } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 128
        };

    }

    // This callback will be triggered when startValue and endValue aren't equal after moving.
    onChange(value) {
        console.log('onChange value:', value);
    }

    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You can call setState here when using a controlled component.
    onProcess(value) {
        console.log('onProcess');
        this.setState({value});
    }

    formatter(value) {
        return `0 ~ ${value}`;
    }
    render() {
        return (
            <div style={{margin: '50px'}}>
                <Range defaultValue={256} tipRender={this.formatter.bind(this)} value={this.state.value} onChange={this.onChange.bind(this)} onProcess={this.onProcess.bind(this)} min={0} max={1024} marks={[0, 1024]} />
            </div>
        );
    }

}

ReactDOM.render(<App />, mountNode);
````
