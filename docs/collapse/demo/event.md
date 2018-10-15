# 事件

- order: 4

1. 所有的Panel不传入Key,自动分配key为index
2. 任意一个Panel手动传入key,则不分配key.
3. 建议所有的Panel都传入key或者都不传key
:::lang=en-us
# Event

- order: 4

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
                    <ul>
                        <li>Promotions are marketing campaigns ran by Marketplace</li>
                        <li>Participate to sale your products during that promotion and make a profit</li>
                    </ul>
                </Panel>
                <Panel title="What are Promotion Products?">
                    <ul>
                        <li>Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range</li>
                        <li>You can choose which products should be available for the promotion</li>
                        <li>Not all Products of you will be available, because Promotions will only attract certain Product areas</li>
                    </ul>
                </Panel>
                <Panel title="Why can i not submit a higher price?">
                    <ul>
                        <li>The Promotion requires a certain price to make sure that our customers are attracted</li>
                    </ul>
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
