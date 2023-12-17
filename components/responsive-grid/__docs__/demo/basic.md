# 基本

- order: 0

简单的栅格布局展示，Fusion Next推荐以PC为主要开发场景，自适配平板、手机端。默认使用12栅格布局。

只需进行如下设置，页面内容就可以根据自适应，遵循 12-8-4 设计原则。

- 将子元素按顺序排布；
- 指定子元素所占的比例（默认为1，即1/12）；
- 并配合屏幕大小（或ua信息）的改变设置device。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of ResponsiveGrid component.

:::
---

````jsx
import { ResponsiveGrid, Radio } from '@alifd/next';

const { Cell } = ResponsiveGrid;

const ds = ['desktop', 'tablet', 'phone'];

class Demo extends React.Component {
    state = {
        device: 'desktop',
    };
    onChange = (device) => {
        this.setState({
            device
        });
    };
    render() {
        const { device } = this.state;
        return (<div className="list">
            <Radio.Group shape="button" onChange={this.onChange} dataSource={ds} defaultValue="desktop"/>
            <br />
            <br />
            <div className={`list-item ${device}`}>
                <ResponsiveGrid gap={10} device={device}>
                  <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                </ResponsiveGrid>
            </div>
        </div>);
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.list {
  position: relative;
}
.list-item {
  position: relative;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.phone {
    width: 30%;
}
.tablet {
    width: 60%;
}
.child {
  width: 100%;
  height: 100%;
  background: 'red';
}
.mygrid {
  display: block;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.grid-12 {
  background: rgba(59, 154, 255, 0.25);
}
.grid-6 {
  background: rgba(59, 154, 255, 1);
}
.grid-4 {
  background: rgba(59, 154, 255, 0.25);
}
.grid-3 {
  background: rgba(59, 154, 255, 1);
}
````
