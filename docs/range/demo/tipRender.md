# tipRender

- order: 5

tipRender 示例

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
        return `$${value}`;
    }
    render() {
        return (
            <div style={{width: '400px', margin: '50px'}}>
                <p>Range 0 ~ 1024</p>
                <div style={{width: '400px', marginTop: '50px'}}>

                    <Range defaultValue={256} tipRender={this.formatter.bind(this)} value={this.state.value} onChange={this.onChange.bind(this)}
                        onProcess={this.onProcess.bind(this)}
                        min={0} max={1024} marks={[0, 1024]} />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, mountNode);
````
