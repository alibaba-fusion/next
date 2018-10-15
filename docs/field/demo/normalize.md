# 自定义返回值

- order: 2

通过 `getValueFromEvent` 自定义从组件的 `Event` 获取 `value` 的方式

:::lang=en-us
# custom event value

- order: 2

custom `value` by api `getValueFromEvent`
:::
---


````jsx
import { Button, Input, Field } from '@alifd/next';


class App extends React.Component {

    field = new Field(this);

    normFile(list) {
        if (Array.isArray(list)) {
            return list;
        }
        return list && list.fileList;
    }

    normDate(date, strdate) {
        console.log('normDate:', date, strdate);
        return strdate;
    }

    render() {
        const init = this.field.init;

        return (<div>
            <Input {...init('name', { getValueFromEvent: (value) => {
                if (value.match(/##/)) {
                    return value;
                } else {
                    return `## title-${value}`;
                }
            }})} />
            <Button type="primary" onClick={() => {
                console.log(this.field.getValues());
            }}>getValues</Button>
        </div>);
    }
}


ReactDOM.render(<App/>, mountNode);
````
