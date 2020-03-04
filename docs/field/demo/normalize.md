# 自定义返回值

- order: 2

通过 `getValueFormatter` 自定义从组件获取 `value` 
通过 `setValueFormatter` 自定义转换 `value` 到组件

:::lang=en-us
# custom event value

- order: 2

custom get `value` by api `getValueFormatter`
custom set `value` by api `setValueFormatter`
:::
---


````jsx
import { Field, DatePicker, Switch } from '@alifd/next';


class App extends React.Component {

    field = new Field(this);

    render() {
        const init = this.field.init;

        return (<div>
            <Switch {...init('switch', { 
                getValueFormatter: (value) => value ? 1 : 0,
                setValueFormatter: (value) => value === 1
                })}/>
            <br/>
            <DatePicker {...init('time', { 
                getValueFormatter: (value) => value.format('YYYY-MM-DD'),
                setValueFormatter: (value) => moment(value, 'YYYY-MM-DD')
                })} />
            <br/>
            <pre style={{marginTop: 8}}>{JSON.stringify(this.field.getValues(), null, 2)}</pre>
        </div>);
    }
}


ReactDOM.render(<App/>, mountNode);
````
