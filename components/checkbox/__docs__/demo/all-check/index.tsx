import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Divider } from '@alifd/next';
import type { CheckboxProps, GroupProps } from '@alifd/next/lib/checkbox';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const App = () => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange: GroupProps['onChange'] = (list: string[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (checked, e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>
            <Divider />
            <CheckboxGroup dataSource={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    );
};

ReactDOM.render(<App />, mountNode);
