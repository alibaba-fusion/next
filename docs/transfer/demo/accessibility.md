# 无障碍

- order: 6


通过设置`locale`去修改对无障碍支持，默认已经设置并且`moveToLeft`和`moveToRight`值是一样的，请参考`ARIA and KeyBoard`。

:::lang=en-us


By setting the `locale` to modify on accessibility support,The default is set,The default `moveToLeft` and `moveToRight` values are the same,Please refer to `ARIA and KeyBoard`.

# Addon

- order: 6

:::
---

````jsx
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content${i}`,
            value: `${i}`,
        });
    }

    return dataSource;
})();

const obj = {
    items: '项',
    item: '项',
    moveAll: '移动全部',
    searchPlaceholder: '请输入',
    moveToLeft: '撤销选中元素',
    moveToRight: '提交选中元素'
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return (
            <Transfer defaultValue={['2']} dataSource={dataSource} defaultLeftChecked={['1']} locale={obj} onChange={this.handleChange} titles={['Title', 'Title']} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
