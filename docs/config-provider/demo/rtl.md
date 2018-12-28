# 组件的RTL

- order: 2

组件RTL样式展示(目前部分支持)

:::lang=en-us
# Components with rtl

- order: 2

Show components with RTL(Partial supported currently).
:::

---

````jsx
import { ConfigProvider, Button, Radio, Menu, Calendar, DatePicker, Dialog, TimePicker, Timeline, Select } from '@alifd/next';

const { SubMenu, Item, Group, Divider } = Menu;
const RangePicker = DatePicker.RangePicker;

// Set global direction to 'rtl'. This affects the whole page
// ConfigProvider.setDirection('rtl');

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dir: 'rtl'
        };

        this.changeDir = this.changeDir.bind(this);
        this.showDialog = this.showDialog.bind(this);
    }

    changeDir(value) {
        this.setState({
            dir: value
        });
    }

    showDialog() {
        Dialog.confirm({
            title: 'Confirm',
            content: 'Are you sure you want to delete all alert e-mails waiting in queue?'
        });
    }

    render() {

        return (
            <div>
                <div className="change-rtl">
                    <span style={{ marginRight: 16 }}>Change direction of components: </span>
                    <Radio.Group shape="button" size="large" value={this.state.dir} onChange={this.changeDir}>
                        <Radio key="rtl" value="rtl">RTL</Radio>
                        <Radio key="ltr" value="ltr">LTR</Radio>
                    </Radio.Group>
                </div>
                <br />
                <hr />
                <ConfigProvider rtl={this.state.dir === 'rtl'}>
                    <div className="locale-components" dir={this.state.dir}>
                        <Button type="primary" onClick={this.showDialog}>Show Dialog</Button>
                        <Select style={{ width: '150px' }} dataSource={['hello', 'bye']} />
                        <RangePicker showTime/>
                        <Calendar style={{ width: '350px', padding: '12px', border: '1px solid #C4C6CF', borderRadius: '3px' }} shape="card" />

                        <Timeline fold={[{foldArea: [1, 2], foldShow: true}]}>
                            <Timeline.Item title="Signed" content="Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service" time={'2016-06-10 10:30:00'} state="process"/>
                            <Timeline.Item title="Ship" content="Express has arrived in Hangzhou, Zhejiang Binjiang company" time={'2016-06-10 09:30:00'} />
                            <Timeline.Item title="Ship" content="Zhejiang Hangzhou Riverside company sent a member for you to send pieces" time={'2016-06-10 09:03:00'} />
                            <Timeline.Item title="Ship" content="Zhejiang Hangzhou Transshipment Center has been issued" time={'2016-06-10 06:10:00'} />
                        </Timeline>

                        <Menu className="my-menu" defaultOpenKeys="sub-menu">
                            <Item key="1">Option 1</Item>
                            <Item disabled key="2">Disabled option 2</Item>
                            <Divider key="divider" />
                            <Group label="Group">
                                <Item key="group-1">Group option 1</Item>
                                <Item key="group-2">Group option 2</Item>
                            </Group>
                            <Divider />
                            <SubMenu key="sub-menu" label="Sub menu">
                                <Item key="sub-1">Sub option 1</Item>
                                <Item key="sub-2">Sub option 2</Item>
                                <Item disabled key="sub-3">
                                    <a href="https://www.taobao.com/" target="__blank">Disabled Option Link 3</a>
                                </Item>
                                <Item key="sub-4">
                                    <a href="https://www.taobao.com/" target="__blank">Option Link 4</a>
                                </Item>
                            </SubMenu>
                            <Item key="3" helper="CTRL+P">Option 3</Item>
                            <Item disabled key="4">
                                <a href="https://www.taobao.com/" target="__blank">Disabled Option Link</a>
                            </Item>
                            <Item key="5">
                                <a href="https://www.taobao.com/" target="__blank">Option Link</a>
                            </Item>
                        </Menu>
                    </div>
                </ConfigProvider>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.my-menu {
    width: 200px;
}

.change-locale {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;
}

.locale-components > * {
    margin: 16px 0;
    display: block;
}
````
