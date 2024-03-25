import React from 'react';
import ReactDOM from 'react-dom';
import {
    Select,
    Button,
    Radio,
    Box,
    Balloon,
    TreeSelect,
    MenuButton,
    SplitButton,
    Drawer,
    Dialog,
    Message,
    DatePicker,
    DatePicker2,
    CascaderSelect,
} from '@alifd/next';
import 'whatwg-fetch';
import { type GroupProps } from '@alifd/next/lib/radio';
import { type SelectProps } from '@alifd/next/lib/select';
import { type DrawerProps } from '@alifd/next/lib/drawer';
import { type CascaderSelectProps } from '@alifd/next/lib/cascader-select';
import { type TreeSelectProps } from '@alifd/next/lib/tree-select';

const Tooltip = Balloon.Tooltip;
const menubuttonMenu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => (
    <MenuButton.Item key={item}>{item}</MenuButton.Item>
));
const splitbuttonMenu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => (
    <SplitButton.Item key={item}>{item}</SplitButton.Item>
));

const top = (
    <Button id="top" style={{ margin: '5px' }} className="btrigger">
        top
    </Button>
);
const right = (
    <Button id="right" style={{ margin: '5px' }} className="btrigger">
        right
    </Button>
);
const bottom = (
    <Button id="bottom" style={{ margin: '5px' }} className="btrigger">
        bottom
    </Button>
);
const left = (
    <Button id="left" style={{ margin: '5px' }} className="btrigger">
        left
    </Button>
);
const topLeft = (
    <Button id="topLeft" style={{ margin: '5px' }} className="btrigger">
        top left
    </Button>
);
const topRight = (
    <Button id="topRight" style={{ margin: '5px' }} className="btrigger">
        top right
    </Button>
);
const rightTop = (
    <Button id="rightTop" style={{ margin: '5px' }} className="btrigger">
        right top
    </Button>
);
const rightBottom = (
    <Button id="rightBottom" style={{ margin: '5px' }} className="btrigger">
        right bottom
    </Button>
);
const bottomLeft = (
    <Button id="bottomLeft" style={{ margin: '5px' }} className="btrigger">
        bottom left
    </Button>
);
const bottomRight = (
    <Button id="bottomRight" style={{ margin: '5px' }} className="btrigger">
        bottom right
    </Button>
);
const leftTop = (
    <Button id="leftTop" style={{ margin: '5px' }} className="btrigger">
        left top
    </Button>
);
const leftBottom = (
    <Button id="leftBottom" style={{ margin: '5px' }} className="btrigger">
        left bottom
    </Button>
);

const Content = () => (
    <div>
        <h4 style={{ marginTop: 0 }}>balloon title</h4>
        <hr />
        <p>balloon content</p>
    </div>
);

const AppBalloon = () => (
    <div style={{ paddingLeft: 320 }}>
        <div style={{ marginLeft: 75 }}>
            <Balloon
                trigger={topLeft}
                align="tl"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon trigger={top} align="t" alignEdge triggerType="click" style={{ width: 300 }}>
                <Content />
            </Balloon>
            <Balloon
                trigger={topRight}
                align="tr"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ width: 80, float: 'left' }}>
            <Balloon
                trigger={leftTop}
                align="lt"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon trigger={left} align="l" alignEdge triggerType="click" style={{ width: 300 }}>
                <Content />
            </Balloon>
            <Balloon
                trigger={leftBottom}
                align="lb"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ width: 80, marginLeft: 290 }}>
            <Balloon
                trigger={rightTop}
                align="rt"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon trigger={right} align="r" alignEdge triggerType="click" style={{ width: 300 }}>
                <Content />
            </Balloon>
            <Balloon
                trigger={rightBottom}
                align="rb"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
        <div style={{ marginLeft: 80, clear: 'both' }}>
            <Balloon
                trigger={bottomLeft}
                align="bl"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                trigger={bottom}
                align="b"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
            <Balloon
                trigger={bottomRight}
                align="br"
                alignEdge
                triggerType="click"
                style={{ width: 300 }}
            >
                <Content />
            </Balloon>
        </div>
    </div>
);

const AppTriggr = () => (
    <div style={{ paddingLeft: 220 }}>
        <div style={{ marginLeft: 75 }}>
            <Tooltip trigger={topLeft} align="tl">
                text text
            </Tooltip>
            <Tooltip trigger={top} align="t">
                text text
            </Tooltip>
            <Tooltip trigger={topRight} align="tr">
                text text
            </Tooltip>
        </div>
        <div style={{ width: 80, float: 'left' }}>
            <Tooltip trigger={leftTop} align="lt">
                text text
            </Tooltip>
            <Tooltip trigger={left} align="l">
                text text
            </Tooltip>
            <Tooltip trigger={leftBottom} align="lb">
                text text
            </Tooltip>
        </div>
        <div style={{ width: 80, marginLeft: 290 }}>
            <Tooltip trigger={rightTop} align="rt">
                text text
            </Tooltip>
            <Tooltip trigger={right} align="r">
                text text
            </Tooltip>
            <Tooltip trigger={rightBottom} align="rb">
                text text
            </Tooltip>
        </div>
        <div style={{ marginLeft: 80, clear: 'both' }}>
            <Tooltip trigger={bottomLeft} align="bl">
                text text
            </Tooltip>
            <Tooltip trigger={bottom} align="b">
                text text
            </Tooltip>
            <Tooltip trigger={bottomRight} align="br">
                text text
            </Tooltip>
        </div>
    </div>
);

const TreeNode = TreeSelect.Node;

const Option = Select.Option;

const onChange: GroupProps['onChange'] = function (value) {
    console.log(value);
};

const onToggleHighlightItem: SelectProps['onToggleHighlightItem'] = function (item, type) {
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
        placement: 'right' as DrawerProps['placement'],
    };

    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onClose: DrawerProps['onClose'] = reason => {
        this.setState({
            visible: false,
        });
    };

    onPlacementChange: GroupProps['onChange'] = dir => {
        this.setState({
            placement: dir,
        });
    };

    render() {
        return (
            <div>
                <Radio.Group
                    dataSource={['right', 'bottom', 'left', 'top']}
                    defaultValue={'right'}
                    onChange={this.onPlacementChange}
                />
                <br />
                <br />
                <Button type="primary" onClick={this.onOpen}>
                    {' '}
                    open{' '}
                </Button>
                <Drawer
                    title="标题"
                    visible={this.state.visible}
                    placement={this.state.placement}
                    onClose={this.onClose}
                >
                    Start your business here by searching a popular product
                </Drawer>
            </div>
        );
    }
}

const popupCustomIcon = () => {
    Dialog.confirm({
        title: 'Confirm',
        content: 'set icon as "warning" ',
        closeMode: ['mask', 'close', 'esc'],
        messageProps: {
            type: 'warning',
        },
        onOk: () => console.log('ok'),
        onCancel: () => console.log('cancel'),
    });
};

const notice = () => {
    Message.notice('This is a Toast Message Notice');
};

class Demo3 extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return <CascaderSelect dataSource={this.state.data} onChange={this.handleChange} />;
    }
}

class Demo4 extends React.Component {
    handleChange: TreeSelectProps['onChange'] = (value, data) => {
        console.log(value, data);
    };

    render() {
        return (
            <TreeSelect treeDefaultExpandAll onChange={this.handleChange} style={{ width: 200 }}>
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
        MenuButton:
        <Box direction="row" spacing={20}>
            <MenuButton label="Document Edit">{menubuttonMenu}</MenuButton>
            <MenuButton type="primary" label="Document Edit">
                {menubuttonMenu}
            </MenuButton>
            <MenuButton type="secondary" label="Document Edit">
                {menubuttonMenu}
            </MenuButton>
        </Box>
        <br />
        SplitButton:
        <Box direction="row" spacing={20}>
            <SplitButton label="Edit Document">{splitbuttonMenu}</SplitButton>
            <SplitButton label="Edit Document" type="secondary">
                {splitbuttonMenu}
            </SplitButton>
            <SplitButton label="Edit Document" type="primary">
                {splitbuttonMenu}
            </SplitButton>
        </Box>
        <br />
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
            style={{ marginRight: 8 }}
        >
            <Option value="jack">Jack</Option>
            <Option value="frank">Frank</Option>
            <Option value="hugo">Hugo</Option>
        </Select>
        <br />
        <br />
        <DatePicker />
        <br />
        <br />
        <DatePicker2 />
        <br />
        <br />
        <DatePicker2.RangePicker />
        <br />
        <br />
        <Demo3 />
        <br />
        <br />
        <Demo4 />
        <br />
        <br />
        <AppBalloon />
        <br />
        <br />
        <AppTriggr />
    </div>,
    mountNode
);
