import React, { useState, useRef, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/lib/select';

const Option = Select.Option;

const onChange: SelectProps['onChange'] = function (value) {
    console.log(value);
};

function generateItem(index: number) {
    return { label: `option${index}`, value: `option${index}` };
}

function generateOption(index: number) {
    return <Option key={`option${index}`} value={`option${index}`}>{`option${index}`}</Option>;
}

function generateData(len: number, isOption?: false): { label: string; value: string }[];
function generateData(len: number, isOption: true): ReactElement[];
function generateData(len: number, isOption?: boolean) {
    const data = [];

    for (let i = 0; i < len; i++) {
        isOption ? data.push(generateOption(i)) : data.push(generateItem(i));
    }

    return data;
}
function generateAppendItems(start: number, end: number) {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push(generateItem(i));
    }
    return arr;
}

function App() {
    const [dataSource, setDataSource] = useState(generateData(30));
    const dataSourceRef = useRef(dataSource);
    dataSourceRef.current = dataSource;
    const onScroll: NonNullable<SelectProps['menuProps']>['onScroll'] = e => {
        const currentDataSource = dataSourceRef.current;
        const length = currentDataSource.length;
        const target = e.target as HTMLDivElement;
        const scrollHeight = target.scrollHeight; // 内容总高度
        const clientHeight = target.clientHeight; // 窗口高度
        const scrollTop = target.scrollTop; //滚动高度
        console.log(scrollTop, clientHeight, scrollHeight);

        if (scrollTop + clientHeight === scrollHeight) {
            // 到达底部
            const otherData = generateAppendItems(length, length + 10);

            setDataSource(currentDataSource.concat(otherData));
        }
    };
    return (
        <div>
            <Select
                dataSource={generateData(100)}
                useVirtual
                onChange={onChange}
                defaultValue="option0"
            />
            <br />
            <br />
            <Select useVirtual onChange={onChange} defaultValue="option50">
                {generateData(100, true)}
            </Select>
            <br />
            <br />
            <div>Infinite scroll loading</div>
            <Select
                style={{ width: 300 }}
                tagInline
                mode="multiple"
                dataSource={dataSource}
                useVirtual
                menuProps={{ onScroll }}
                onChange={onChange}
                defaultValue={['option0']}
            />
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
