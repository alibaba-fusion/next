# 支持国际化的组件

- order: 2

展示目前 Next 组件中支持国际化的组件。

:::lang=en-us
# Components that support internationalization

- order: 2

Show the components that support internationalization in the current Next components.
:::

---

````jsx
import { ConfigProvider, Button, Radio, Calendar, Card, DatePicker, Dialog, Pagination, TimePicker, Timeline, Transfer, Select, Upload, Table } from '@alifd/next';

import enUS from '@alifd/next/lib/locale/en-us';
import zhCN from '@alifd/next/lib/locale/zh-cn';

// If the application directly imports the next-with-locales.js file from cdn
// it need to import locale file in the following way
// import { locales } from '@alifd/next';
// const enUS = locales['en-us'];
// const zhCN = locales['zh-cn'];

const RangePicker = DatePicker.RangePicker;

const transferDataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content ${i}`,
            value: `${i}`,
            disabled: i % 4 === 0
        });
    }

    return dataSource;
})();

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'en-us'
        };

        this.changeLang = this.changeLang.bind(this);
        this.showDialog = this.showDialog.bind(this);
    }

    changeLang(lang) {
        this.setState({
            lang
        });
    }

    showDialog() {
        Dialog.confirm({
            title: 'Confirm',
            content: 'Are you sure you want to delete all alert e-mails waiting in queue?'
        });
    }

    render() {
        const locale = this.state.lang === 'en-us' ? enUS : zhCN;

        return (
            <div>
                <div className="change-locale">
                    <span style={{ marginRight: 16 }}>Change locale of components: </span>
                    <Radio.Group shape="button" size="large" defaultValue="en-us" onChange={this.changeLang}>
                        <Radio key="en" value="en-us">English</Radio>
                        <Radio key="cn" value="zh-cn">中文</Radio>
                    </Radio.Group>
                </div>
                <ConfigProvider locale={locale}>
                    <div className="locale-components">
                        <Button type="primary" onClick={this.showDialog}>Show Dialog</Button>
                        <Select style={{ width: '150px' }} dataSource={['hello', 'bye']} />
                        <DatePicker />
                        <TimePicker />
                        <RangePicker />
                        <Calendar style={{ width: '350px', padding: '12px', border: '1px solid #C4C6CF', borderRadius: '3px' }} shape="card" />
                        <Pagination defaultCurrent={2} />
                        <Transfer dataSource={transferDataSource} defaultValue={['3']} defaultLeftChecked={['1']} titles={['Source', 'Target']} />
                        <Table style={{ width: '500px' }} dataSource={[]}>
                            <Table.Column title="Name" dataIndex="name" filters={[{ label: 'Filter 1', value: '1' }, { label: 'Filter 2', value: '2' }]} />
                            <Table.Column title="Age" dataIndex="age" />
                        </Table>
                        <Card style={{ width: '300px' }} title="Title">
                            <div style={{ height: '250px', background: '#F7F8FA' }}></div>
                        </Card>
                        <Timeline fold={[{foldArea: [1, 2], foldShow: true}]}>
                            <Timeline.Item title="Signed" content="Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service" time={'2016-06-10 10:30:00'} state="process"/>
                            <Timeline.Item title="Ship" content="Express has arrived in Hangzhou, Zhejiang Binjiang company" time={'2016-06-10 09:30:00'} />
                            <Timeline.Item title="Ship" content="Zhejiang Hangzhou Riverside company sent a member for you to send pieces" time={'2016-06-10 09:03:00'} />
                            <Timeline.Item title="Ship" content="Zhejiang Hangzhou Transshipment Center has been issued" time={'2016-06-10 06:10:00'} />
                        </Timeline>
                        <Upload.Dragger style={{ width: '500px' }}
                            listType="image"
                            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp" />
                    </div>
                </ConfigProvider>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.change-locale {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;
}

.locale-components > * {
    margin: 16px 0;
    display: block;
}
````
