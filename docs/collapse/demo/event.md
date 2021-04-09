# 展开事件

- order: 5

1. 所有的Panel不传入 Key ,自动分配 key 为index
2. 任意一个 Panel 手动传入 key , 则不分配 key .
3. 建议所有的 Panel 都传入 key 或者都不传 key 

:::lang=en-us
# Expaned Event

- order: 5

1. if all Panels have no key, key will be allocated to index.
2. if some Panels have key, key won't be allocated.
3. Strongly recommand all Panels have no key or every Panel has a key.

:::
---

````jsx
import { Collapse } from '@alifd/next';

const Panel = Collapse.Panel;

class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expandedKeys: []
        };
    }

    onExpand(expandedKeys) {
        this.setState({
            expandedKeys
        });
    }

    onClick(key) {
        console.log('clicked', key);
    }
    render() {
        return (
            <Collapse onExpand={this.onExpand.bind(this)} expandedKeys={this.state.expandedKeys} >
                <Panel title="simple tile" onClick={this.onClick}>
                    Promotions are marketing campaigns ran by Marketplace. Participate to sale your products during that promotion and make a profit
                </Panel>
                <Panel title="What are Promotion Products?">
                    Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range. You can choose which products should be available for the promotion. Not all Products of you will be available, because Promotions will only attract certain Product areas.
                </Panel>
                <Panel title="Why can i not submit a higher price?">
                    The Promotion requires a certain price to make sure that our customers are attracted.
                </Panel>
                <Panel title="What is Promo Stock?">
                    Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.
                </Panel>
            </Collapse>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
