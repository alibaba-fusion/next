# 事件

- order: 3

onChange,onProcess事件

:::lang=en-us
# Change

- order: 3

onChange,onProcess callbacks

:::
---

````jsx
import { Range } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 128,
            value2: 300,
            doubleValue: [200, 300]
        };

    }

    //Controlled. onChange will be triggered when startValue isn't equal to endValue after sliding
    onChange(value) {
        console.log('onChange value:', value);
        this.setState({value});
    }

    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
    onProcess(value) {
        console.log('onProcess: ', value);
    }

    onChangeDouble(doubleValue) {
        console.log('onChange doubleValue:', doubleValue);
        this.setState({doubleValue});
    }

    onProcessDouble(doubleValue) {
        console.log('onProcess: ', doubleValue);
    }

    render() {
        return (
            <div style={{width: '400px', margin: '50px'}}>
                <p>range 0 ~ 1024</p>
                <div style={{width: '400px', marginTop: '50px'}}>

                    <Range value={this.state.value} onChange={this.onChange.bind(this)}
                        onProcess={this.onProcess.bind(this)}
                        min={0} max={1024} marks={[0, 1024]} />
                </div>

                <p>with value and without onChange</p>
                <div style={{width: '400px', marginTop: '50px'}}>

                    <Range value={this.state.value2}
                        onProcess={this.onProcess.bind(this)}
                        min={0} max={1024} marks={[0, 1024]} />
                </div>


                <p>double slider controlled</p>
                <div style={{width: '400px', marginTop: '50px'}}>

                    <Range slider="double" value={this.state.doubleValue} onChange={this.onChangeDouble.bind(this)}
                        onProcess={this.onProcessDouble.bind(this)}
                        min={0} max={1024} marks={[0, 1024]} />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, mountNode);
````
