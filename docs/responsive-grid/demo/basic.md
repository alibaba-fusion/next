# 基本

- order: 0

简单的栅格布局展示。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of ResponsiveGrid component.

:::
---

````jsx
import { ResponsiveGrid } from '@alifd/next';

const { Cell } = ResponsiveGrid;

ReactDOM.render(
    <div>
        <div className="list">
            <div className="list" style={{display: 'flex'}}>
              <div className="list-item" style={{display: 'inline-block', width: '100%'}}>
                <ResponsiveGrid gap={10} device="desktop">
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
              <div className="list-item" style={{display: 'inline-block', width: '100%', margin: '0 20px 20px'}}>
                <ResponsiveGrid gap={10} device="tablet">
                  <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={{desktop: 4, tablet: 8}} >4 tablet: 8</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                </ResponsiveGrid>
              </div>
              <div className="list-item" style={{display: 'inline-block', width: '100%'}}>
                <ResponsiveGrid gap={10} device="phone">
                  <Cell className="mygrid grid-12" colSpan={12}>12</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-6" colSpan={6}>6</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-4" colSpan={4}>4</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={3}>3</Cell>
                  <Cell className="mygrid grid-3" colSpan={{desktop: 3, phone: 2}}>3 phone: 2</Cell>
                </ResponsiveGrid>
              </div>
            </div>
        </div>
    </div>
    , mountNode);
````

````css
.list {
  position: relative;
}
.list-item {
  position: relative;
  background: #ddd;
  border: 1px solid #eee;
  margin-bottom: 20px;
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
  background: red;
}
.grid-6 {
  background: purple;
}
.grid-4 {
  background: orange;
}
.grid-3 {
  background: green;
}
````
