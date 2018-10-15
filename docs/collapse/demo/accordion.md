# 手风琴

- order: 2

手风琴单例模式，每次只打开一个Panel。

:::lang=en-us
# Accordion

- order: 2

Accordion mode, you can only open at most one panel.
:::

---

````jsx
import { Collapse } from '@alifd/next';

const Panel = Collapse.Panel;

ReactDOM.render(<Collapse accordion>
    <Panel
        title="There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured.">
        <ul>
            <li>Promotions are marketing campaigns ran by Marketplace</li>
            <li>Participate to sale your products during that promotion and make a profit</li>
        </ul>
    </Panel>
    <Panel title="What are Promotion Products?">
        <ul>
            <li>Promotion Products is a service that helps you to promote products you list on Marketplace during a
                certain time range
            </li>
            <li>You can choose which products should be available for the promotion</li>
            <li>Not all Products of you will be available, because Promotions will only attract certain Product areas
            </li>
        </ul>
    </Panel>
    <Panel title="Why can i not submit a higher price?">
        <ul>
            <li>The Promotion requires a certain price to make sure that our customers are attracted</li>
        </ul>
    </Panel>
    <Panel title="What is Promo Stock?">
        Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo
        Stock value you commit to have this amount of stock available while Promotion is active.
    </Panel>
</Collapse>, mountNode);
````
