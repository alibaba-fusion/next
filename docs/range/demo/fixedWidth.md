# 固定宽度滑动

- order: 0

默认双滑块(`slider` 为 `double`)，且指定 `defaultValue`为区间值下可用。范围不可被改变，拖动所选区域改变始末滑块位置。

:::lang=en-us
# fixedWidth

- order: 0

It means `slider` is `double`, and `defaultValue` is a interval. The scope can not be changed, drag the selected area to change the position of the start and end slider.

:::


---

````jsx
import { Range } from '@alifd/next';

const style = {
    marginBottom: '15px'
};

const styleX3 = {
    marginBottom: '45px'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [10, 300]
        };

    }

    //Controlled. onChange will be triggered when startValue isn't equal to endValue after sliding
    onChange(value) {
        console.log('onChange value:', value);
        this.setState({value});
    }

    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
    onProcess(value) {
        // this.setState({value});
        console.log('onProcess: ', value);
    }

    render() {
        return (
            <div style={{width: '400px', margin: '50px'}}>
                <h4>fixedWidth basic</h4>
                <Range fixedWidth defaultValue={[20, 40]} style={style} />
                <h4>fixedWidth basic with tooltipVisible</h4>
                <Range tooltipVisible fixedWidth defaultValue={[70, 90]} style={styleX3} />
                <Range disabled tooltipVisible fixedWidth defaultValue={[70, 90]} style={style} />
                <h4>fixedWidth with marks</h4>
                <Range fixedWidth step={10} defaultValue={[20, 40]} marks={10} style={styleX3} />
                <Range fixedWidth step={2} defaultValue={[60, 80]} marks={[0, 30, 100]} style={style} marksPosition="below" />
                <h4>fixedWidth with 0.01 step</h4>
                <Range fixedWidth defaultValue={[0.6, 0.7]} min={0.5} max={1} step={0.01}/>
                <div style={{width: '400px', marginTop: '50px'}}>
                    <p>range 0 ~ 1024</p>
                    <Range fixedWidth value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        onProcess={this.onProcess.bind(this)}
                        min={0} max={1024} marks={[0, 1024]} />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, mountNode);

````
