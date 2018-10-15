# 最大长度

- order: 5

最大长度 hasLimitHint 会展现限制数字; cutString 可控制是否要切割字符串, 用于只展示最大长度


:::lang=en-us

# Addon

- order: 5


the prop `hasLimitHint` will limit the number of characters
:::
---


````jsx
import { Input } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: 10,
            control: 'maxLen control'
        };
    }

    onChange(v) {
        console.log(v);
        this.setState({
            control: v
        });
    }

    onKeyDown(e, opts) {
        console.log('onKeyDown', opts);
    }

    render() {
        return (<div>
            <Input
                maxLength={10}
                size="large"
                placeholder="Large"
                value={this.state.control}
                hasLimitHint
                aria-label="input max length 10"
                onChange={this.onChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)} /><br /><br />

            <Input
                maxLength={20}
                placeholder="medium"
                hasLimitHint
                cutString={false}
                aria-label="input max length 20"
                onChange={(v) => {
                    this.setState({control: v});
                    console.log(v);
                }}
                onKeyDown={(e, opts) => {
                    console.log('onKeyDown', opts);
                }} /><br /><br />

            <Input
                hasLimitHint
                size="small"
                placeholder="small"
                maxLength={100}
                aria-label="input max length 100" /><br /><br />

            <Input.TextArea
                placeholder="TextArea"
                maxLength={100}
                rows={4}
                hasLimitHint
                aria-label="input max length 100" /><br /><br />

            <Input maxLength={5} placeholder="Original maxLength" aria-label="input max length 5" />
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````
