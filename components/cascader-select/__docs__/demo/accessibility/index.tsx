import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

const data = [
    {
        value: '0100',
        label: '金庸',
        children: [
            { value: '0101', label: '飞狐外传' },
            { value: '0102', label: '雪山飞狐' },
            { value: '0103', label: '连城诀' },
            { value: '0104', label: '天龙八部' },
            { value: '0105', label: '射雕英雄传' },
            { value: '0106', label: '白马啸西风' },
            { value: '0107', label: '鹿鼎记' },
            { value: '0108', label: '笑傲江湖' },
            { value: '0109', label: '书剑恩仇录' },
            { value: '0110', label: '神雕侠侣' },
            { value: '0111', label: '侠客行' },
            { value: '0112', label: '倚天屠龙记' },
            { value: '0113', label: '碧血剑' },
            { value: '0114', label: '鸳鸯刀' },
        ],
    },
    {
        value: '0200',
        label: '古龙',
        children: [
            { value: '0201', label: '小李飞刀' },
            { value: '0202', label: '绝代双骄' },
            { value: '0203', label: '大旗英雄传' },
            { value: '0204', label: '英雄无泪' },
            { value: '0205', label: '边城浪子' },
            { value: '0206', label: '楚留香传奇' },
        ],
    },
    {
        children: [
            { value: '0301', label: '白发魔女传' },
            { value: '0302', label: '七剑下天山' },
            { value: '0303', label: '云海玉弓缘' },
        ],
        value: '0300',
        label: '梁羽生',
    },
];

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ data });
    }
    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }
    render() {
        return (
            <CascaderSelect
                dataSource={this.state.data}
                onChange={this.handleChange}
                listStyle={{ width: '200px', height: '256px' }}
                aria-labelledby="a11y-cascader-select"
            />
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
