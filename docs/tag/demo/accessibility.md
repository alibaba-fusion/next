# 无障碍

- order: 3

请参考`ARIA and KeyBoard`。

:::lang=en-us

Please refer to `ARIA and KeyBoard`.

# Addon

- order: 3

:::
---

````jsx
import { Tag, Icon } from '@alifd/next';

const {Group: TagGroup} = Tag;


const dataType = ['全部', '衣服', '手机', '化妆品'];


class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
        this.onclick = this.onclick.bind(this);
    }
    onclick(v) {
        this.setState({name: v.item});
    }
    render() {
        return (<div>
            <TagGroup>
                {dataType.map(item =>   <Tag type="normal" key={item} size="medium"  onClick={() => this.onclick({item})} >{ item }</Tag>) }
            </TagGroup>
            {this.state.name}
        </div>);
    }
}
ReactDOM.render(<Demo />, mountNode);

````