# tooltip

- order: 7

一般用于文字超长溢出等场景

:::lang=en-us
# tooltip

- order: 7

It is generally used in the scene of text overflow.

:::

---

````jsx
import { Button, Balloon, Table } from '@alifd/next';

const Tooltip = Balloon.Tooltip;

const dataSource = [{
    name: 'Li Bai',
    intro: `Li Bai (Chinese: 李白; pinyin: Lǐ Bái; 701–762), also known as Li Bo, courtesy name Taibai (Chinese: 太白), art name Qinglian Jushi (Chinese: 青蓮居士), was a Chinese poet acclaimed from his own day to the present as a genius and a romantic figure who took traditional poetic forms to new heights.`,
    id: 100306660940,
}, {
    name: 'William Shakespeare',
    intro: `William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the "Bard of Avon" (or simply "the Bard").`,
    id: 100306660941,
}]
const render = (value, index, record) => {
    const intro = <div style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{value}</div>;
    return <Tooltip trigger={intro} align="br">{value}</Tooltip>;
};

const App = () => (
    <Table dataSource={dataSource} tableLayout="fixed">
        <Table.Column title="ID" dataIndex="id" width={100}/>
        <Table.Column title="Name" dataIndex="name" width={200}/>
        <Table.Column title="Intro" dataIndex="intro" cell={render} width={400}/>
    </Table>
);

ReactDOM.render(<App />, mountNode);

````

````css
.code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
}
````
