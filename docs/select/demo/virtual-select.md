# 大数据

- order: 15

select 开启无限滚动可支持大数据的 dataSource，保证性能

:::lang=en-us
# virtual-select

- order: 15

select with virtual list
:::
---

````jsx
import { Select } from '@alifd/next';
import { useState, useRef } from 'react';

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};

function generateItem(index) {
    return {label: `option${index}`, value: `option${index}`};
}

function generateOption(index) {
    return <Option key={`option${index}`} value={`option${index}`}>{`option${index}`}</Option>;
}

function generateData(len, isOption) {
    const data = [];

    for (let i = 0; i < len; i++) {
        isOption ? data.push(generateOption(i)) : data.push(generateItem(i));
    }

    return data;
}
function generateAppendItems(start, end) {
    const arr = [];
    for(let i=start; i< end; i ++) {
        arr.push(generateItem(i));
    }
    return arr;
}

function App() {
    const [dataSource, setDataSource] = useState(generateData(30));
    const dataSourceRef = useRef(dataSource);
    dataSourceRef.current = dataSource;
    const onScroll = e => {
        const currentDataSource = dataSourceRef.current;
        const length = currentDataSource.length;
        const scrollHeight = e.target.scrollHeight; // 内容总高度
        const clientHeight = e.target.clientHeight; // 窗口高度
        const scrollTop = e.target.scrollTop;           //滚动高度
        console.log(scrollTop,clientHeight, scrollHeight);

        if ( scrollTop + clientHeight === scrollHeight) { // 到达底部
            const otherData = generateAppendItems(length, length + 10);

            setDataSource(currentDataSource.concat(otherData))
        }
    }
  return (
      <div>
          <Select dataSource={generateData(100)} useVirtual onChange={onChange} defaultValue="option0" />
          <br/>
          <br/>
          <Select useVirtual onChange={onChange} defaultValue="option50">
              {generateData(100, true)}
          </Select>
          <br />
          <br />
          <div>Infinite scroll loading</div>
          <Select
              style={{width: 300}}
              tagInline
              mode="multiple"
              dataSource={dataSource}
              useVirtual
              menuProps={{onScroll}}
              onChange={onChange}
              defaultValue={["option0"]}
          />
      </div>
  )
}

ReactDOM.render(<App />, mountNode);
````
