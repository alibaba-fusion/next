# 所有按钮类型

- order: 99
- debug: true

按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。

:::lang=en-us
# Type

- order: 0

The types of button includes: primary, secondary, normal. Each one used to describe the importance level of a button.

:::

---

````jsx
import { Button } from '@alifd/next';

ReactDOM.render(<div>
    <Button size="small">Normal</Button> &nbsp;<Button size="small" type="normal" model="solid">Normal Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="normal" model="outline">Normal Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="normal" model="text">Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button>Normal</Button> &nbsp;<Button type="normal" model="solid">Normal Solid</Button> &nbsp;&nbsp;
    <Button type="normal" model="outline">Normal Outline</Button>&nbsp;&nbsp;
    <Button type="normal" model="text">Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large">Normal</Button> &nbsp;<Button size="large" type="normal" model="solid">Normal Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="normal" model="outline">Normal Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="normal" model="text">Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="small" disabled>Normal</Button> &nbsp;<Button size="small" type="normal" model="solid" disabled>Normal Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="normal" model="outline" disabled>Normal Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="normal" model="text" disabled>Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button disabled>Normal</Button> &nbsp;<Button type="normal" model="solid" disabled>Normal Solid</Button> &nbsp;&nbsp;
    <Button type="normal" model="outline" disabled>Normal Outline</Button>&nbsp;&nbsp;
    <Button type="normal" model="text" disabled>Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" disabled>Normal</Button> &nbsp;<Button size="large" type="normal" model="solid" disabled>Normal Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="normal" model="outline" disabled>Normal Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="normal" model="text" disabled>Normal Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <hr/>
    <Button size="small" type="primary" model="solid">primary Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="primary" model="outline">primary Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="primary" model="text">primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="primary" model="solid">primary Solid</Button> &nbsp;&nbsp;
    <Button type="primary" model="outline">primary Outline</Button>&nbsp;&nbsp;
    <Button type="primary" model="text">primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="primary" model="solid">primary Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="primary" model="outline">primary Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="primary" model="text">primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="small" type="primary" model="solid" disabled>primary Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="primary" model="outline" disabled>primary Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="primary" model="text" disabled>primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="primary" model="solid" disabled>primary Solid</Button> &nbsp;&nbsp;
    <Button type="primary" model="outline" disabled>primary Outline</Button>&nbsp;&nbsp;
    <Button type="primary" model="text" disabled>primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="primary" model="solid" disabled>primary Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="primary" model="outline" disabled>primary Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="primary" model="text" disabled>primary Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <hr/>
    <Button size="small" type="warning" model="solid">warning Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="warning" model="outline">warning Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="warning" model="text">warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="warning" model="solid">warning Solid</Button> &nbsp;&nbsp;
    <Button type="warning" model="outline">warning Outline</Button>&nbsp;&nbsp;
    <Button type="warning" model="text">warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="warning" model="solid">warning Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="warning" model="outline">warning Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="warning" model="text">warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="small" type="warning" model="solid" disabled>warning Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="warning" model="outline" disabled>warning Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="warning" model="text" disabled>warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="warning" model="solid" disabled>warning Solid</Button> &nbsp;&nbsp;
    <Button type="warning" model="outline" disabled>warning Outline</Button>&nbsp;&nbsp;
    <Button type="warning" model="text" disabled>warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="warning" model="solid" disabled>warning Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="warning" model="outline" disabled>warning Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="warning" model="text" disabled>warning Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <div style={{backgroundColor: '#222'}}>
    <hr/>
    <Button size="small" type="inverse" model="solid">inverse Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="inverse" model="outline">inverse Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="inverse" model="text">inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="inverse" model="solid">inverse Solid</Button> &nbsp;&nbsp;
    <Button type="inverse" model="outline">inverse Outline</Button>&nbsp;&nbsp;
    <Button type="inverse" model="text">inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="inverse" model="solid">inverse Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="inverse" model="outline">inverse Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="inverse" model="text">inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="small" type="inverse" model="solid" disabled>inverse Solid</Button> &nbsp;&nbsp;
    <Button size="small" type="inverse" model="outline" disabled>inverse Outline</Button>&nbsp;&nbsp;
    <Button size="small" type="inverse" model="text" disabled>inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button type="inverse" model="solid" disabled>inverse Solid</Button> &nbsp;&nbsp;
    <Button type="inverse" model="outline" disabled>inverse Outline</Button>&nbsp;&nbsp;
    <Button type="inverse" model="text" disabled>inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <Button size="large" type="inverse" model="solid" disabled>inverse Solid</Button> &nbsp;&nbsp;
    <Button size="large" type="inverse" model="outline" disabled>inverse Outline</Button>&nbsp;&nbsp;
    <Button size="large" type="inverse" model="text" disabled>inverse Text</Button>&nbsp;&nbsp;
    <br/><br/>
    <hr/>
    </div>
    <br /><br /><br/>
    <Button type="normal">Normal</Button> &nbsp;&nbsp;
    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
    <Button type="secondary">Secondary</Button>
    <br /><br />
    <Button type="normal" text loading>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" text loading>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" text loading>Secondary</Button>
    <br /><br />
    <Button type="normal" text warning loading>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" text warning loading>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" text warning loading>Secondary</Button>
    <br /><br />
    <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" warning>Secondary</Button>
    <br /><br />
    <div className="ghost-light-background">
        <Button ghost="light">Ghost light</Button>
    </div>
    <div className="ghost-dark-background">
        <Button ghost="dark">Ghost dark</Button>
    </div>
    <div className="ghost-light-background">
        <Button ghost="light" text>Ghost light</Button>
    </div>
    <div className="ghost-dark-background">
        <Button ghost="dark" text>Ghost dark</Button>
    </div>
    <div className="ghost-light-background">
        <Button ghost="light" warning>Ghost light</Button>
    </div>
    <div className="ghost-dark-background">
        <Button ghost="dark" warning>Ghost dark</Button>
    </div>
    <hr/>
    <Button type="normal" model="solid">Normal Solid</Button> => <Button>Default Default</Button>
    &lt;---------&gt;
    <Button type="normal">Normal Default</Button>  => <Button>Default Default</Button>
    <br/><br/>
    <Button type="normal" model="outline">Normal Outline</Button> => <Button model="outline">Default Outline</Button>
    &lt;---------&gt;
    <Button type="normal" model="outline">Normal Outline</Button> => <Button model="outline">Default Outline</Button>
    <br/><br/>
    <Button type="normal" model="text">Normal modelText</Button> => <Button model="text">Default modelText</Button>
    &lt;---------&gt;
    <Button type="normal" text>Normal Text</Button> => <Button text>Default Text</Button>
    <br/><br/>
    <Button type="primary" model="solid">Prirmary Solid</Button> => <Button type="primary">Prirmary Default</Button>
    &lt;---------&gt;
    <Button type="primary">Prirmary Default</Button>
    <br/><br/>
    <Button type="primary" model="outline">Primary Outline</Button>
    &lt;---------&gt;
    <Button type="secondary">Secondary modelDefault</Button>
    <br/><br/>
    <Button type="primary" model="text">Primary modelText</Button>
    &lt;---------&gt;
    <Button type="primary" text>Primary Text</Button>
    <br/><br/>
    <Button type="warning" model="solid">Warning Solid</Button> => <Button type="warning">Warning Default</Button>
    &lt;---------&gt;
    <Button type="normal" warning>Normal Warning</Button> => <Button warning>Default Warning</Button>
    <br/><br/>
    <Button type="warning" model="outline">Warning Outline</Button>
    &lt;---------&gt;
    <Button type="primary" warning>Primary Warning</Button>
    <br/><br/>
    <Button type="warning" model="text">Warning modelText</Button>
    &lt;---------&gt;
    <Button type="warning" model="text">modelText</Button>
    <br/><br/>
    <Button type="secondary" text>Secondary Text</Button>
    &lt;---------&gt;
    <Button type="secondary" model="text">Secondary modelText</Button>
</div>, mountNode);
````

````css
.ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #EBECF0;
    margin-bottom: 20px;
    padding-left:10px;
    box-sizing: border-box;
}
.ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left:10px;
    box-sizing: border-box;
}
````
