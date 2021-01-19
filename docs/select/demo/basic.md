# 基本使用

- order: 0

最基本的使用、带清除、搜索功能的展示

:::lang=en-us
# Basic

- order: 0

simple usage, has clear, show search
:::
---

````jsx
import { Select, Button, Radio, TreeSelect, Drawer, Dialog, Message, DatePicker, DatePicker2, CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

const TreeNode = TreeSelect.Node;

const Option = Select.Option;

const onChange = function (value) {
    console.log(value);
};

const onToggleHighlightItem = function (item, type) {
    console.log(item, type);
};

const onFocus = () => {
  console.log('focus');
};

const onBlur = () => {
  console.log('blur');
};


class Demo extends React.Component {
    state = {
        visible: false,
        placement: 'right'
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = (reason) => {

        this.setState({
            visible: false
        });
    };

    onPlacementChange = dir => {
        this.setState({
            placement: dir
        });
    }

    render() {
        return (
            <div>
                <Radio.Group
                    dataSource={['right', 'bottom', 'left', 'top']}
                    defaultValue={'right'}
                    onChange={this.onPlacementChange}
                />
                <br/>
                <br/>
                <Button type="primary" onClick={this.onOpen}> open </Button>
                <Drawer
                    title="标题"
                    visible={this.state.visible}
                    placement={this.state.placement}
                    onClose={this.onClose}>
                    Start your business here by searching a popular product
                </Drawer>
            </div>
        );
    }
}


const popupCustomIcon = () => {
  Dialog.confirm({
    title: "Confirm",
    content: 'set icon as "warning" ',
    closeMode: ['mask', 'icon', 'esc'],
    messageProps: {
      type: "warning"
    },
    onOk: () => console.log("ok"),
    onCancel: () => console.log("cancel")
  });
};

const notice = () => {
  Message.notice('This is a Toast Message Notice');
};


class Demo3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    }

    render() {
        return <CascaderSelect dataSource={this.state.data} onChange={this.handleChange} />;
    }
}


class Demo4 extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    render() {
        return (
            <TreeSelect
                treeDefaultExpandAll
                onChange={this.handleChange}
                style={{ width: 200 }}
            >
                <TreeNode key="1" value="1" label="Component">
                    <TreeNode key="2" value="2" label="Form">
                        <TreeNode key="4" value="4" label="Input" />
                        <TreeNode key="5" value="5" label="Select" disabled />
                    </TreeNode>
                    <TreeNode key="3" value="3" label="Display">
                        <TreeNode key="6" value="6" label="Table" />
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        );
    }
}


ReactDOM.render(
  <div>
    Drawer:
    <br />
    <Demo />
    <br />
    Dialog:
    <br />
    <Button onClick={popupCustomIcon}>custom</Button>
    <br />
    <br />
    Toast:
    <br />
    <Button type="primary" onClick={notice}>
    Display Toast Message Notice
    </Button>
    <br />
    <br />
    Select:
    <br />
    <Select
      id="basic-demo"
      onChange={onChange}
      onToggleHighlightItem={onToggleHighlightItem}
      defaultValue="jack"
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="name is"
      style={{marginRight: 8}}
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>
    <br /><br />
    <DatePicker />
    <br /><br />
    <DatePicker2 />
    <br /><br />
    <Demo3 />
    <br /><br />
    <Demo4 />
    <br /><br />

  </div>,
  mountNode
);
````
