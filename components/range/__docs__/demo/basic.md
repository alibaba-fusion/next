# 基本

- order: 0

基本滑块，当 `slider` 为 `double` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

:::lang=en-us
# Basic

- order: 0

Basic usage. When `slider` is `double`, render two sliders; when `disabled` is `true`, the slider is unusable.

:::


---

````jsx
import { Range, Switch } from '@alifd/next';


const style = {
    marginBottom: 20
};

const Demo = () => {
    const [disabled, setDisabled] = React.useState(false);

    return (<div style={{width: 400}}>
        <Range defaultValue={30} disabled={disabled} style={style}/>
        <Range slider="double" defaultValue={[20, 70]} disabled={disabled} style={style}/>

        <div style={{display: 'flex', alignItems: 'center'}}>
            Disabled: <Switch checked={disabled} onChange={setDisabled}/>
        </div>
    </div>);
};

ReactDOM.render(<Demo/>, mountNode);
````
