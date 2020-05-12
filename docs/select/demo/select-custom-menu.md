# 定制弹窗布局

- order: 7

通过 `MenuProps` 自定义 `Select` 弹窗的头部和底部（注意 `MenuProps.header` 不能与 `hasSelectAll` 同时出现, `MenuProps.header` 优先级更高）

:::lang=en-us
# custom popup render

- order: 0

simple usage
:::
---

````jsx
import { Select, Divider, Icon, Button, Input } from '@alifd/next';

const Option = Select.Option;

const dataSource = [
    {value: '10001', label: 'Lucy King'},
    {value: 10002, label: 'Lily King'},
    {value: 10003, label: 'Tom Cat', disabled: true},
];

const generateData = (base, total) => {
    const arr = [];
    for(let i = 0; i< total; i++) {
        arr.push(`extra-${base + i}`);
    }
    return arr;
};

class App extends React.Component {
    state = {
        dataSource,
    };
    loadMore = () => {
        const ds = this.state.dataSource;
        this.setState({
            dataSource: [ ...ds, ...generateData(ds.length, 5)]
        });
    }
    
    render() {
        const menuProps = {
            focusable: false,
            header: <div style={{padding: '0 4px', textAlign:'center'}}>
                <div style={{paddingBottom: 4}}>
                    <Input style={{width: '100%'}} 
                    ref={ref => this.inputRef = ref}
                        onClick={e => console.log(/onclick/)} 
                        onMouseDown={e => {console.log(/onMouseDown/); this.inputRef.focus();}} 
                        />
                </div>
                <Divider style={{marginTop:0, marginBottom: 4}}/>
            </div>,
            footer: <div style={{padding: '0 4px', textAlign:'center'}}>
                <Divider style={{marginBottom:0, marginTop: 4}}/>
                <Button text type="primary" onClick={this.loadMore}>Load More...</Button>
            </div>
        };
        return (<Select hasSelectAll mode="multiple"  dataSource={this.state.dataSource} style={{width: 200}}
            menuProps={menuProps} 
            popupAutoFocus
         / >);
    }
};

ReactDOM.render(<App />, mountNode);
````
