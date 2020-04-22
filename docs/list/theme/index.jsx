import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import Box from '../../../src/box';
import Button from '../../../src/button';
import Avatar from '../../../src/avatar';
import Divider from '../../../src/divider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/list/style.js';
import '../../../src/box/style.js';
import '../../../src/button/style.js';
import '../../../src/divider/style.js';
import '../../../src/avatar/style.js';
import List from '../../../src/list';

const i18nMap = {
    'zh-cn': {
        'list': '列表',
        normal: '正常',
        small: '小列表'
    },
    'en-us': {
        'list': 'List',
        normal: 'Normal',
        small: '小列表'
    },
};

class RenderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {

            }
        };
    }

    onFunctionChange = (demoFunction) => {
        this.setState({ demoFunction });
    }

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;
        const actions = (<Box direction="row" align="center" style={{whiteSpace: 'nowrap', height: '100%', paddingLeft: 100}}>
            <Button text type="primary">编辑</Button>
            <Divider direction="ver" />
            <Button text type="primary">订阅</Button>
            <Divider direction="ver" />
            <Button text type="primary">删除</Button>
        </Box>);

        return (<Demo title={i18nMap.list} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title={i18nMap.list}>
                <DemoGroup label={i18nMap.small}>
                    <List size={"small"} header={<div>Notifications</div>}>
                        <List.Item extra={'$20'} media={<Avatar src={'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'}/>} title="Title">List Item 1</List.Item>
                        <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'}/>}>List Item 2</List.Item>
                        <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'}/>}>List Item 3</List.Item>
                        <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'}/>}>List Item 4</List.Item>
                        <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'}/>}>List Item 5</List.Item>
                    </List>
                </DemoGroup>
                <DemoGroup label={i18nMap.normal}>
                    <List>
                        <List.Item extra={actions} media={<img width="161" height="108" src={'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'}/>} title="构建一套产品化设计系统">
                            <p style={{margin: '12px 0'}}>随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …</p>
                            <div>谢瑶 3 小时前更新</div>
                        </List.Item>
                        <List.Item extra={actions} title="构建一套产品化设计系统" media={<img width="161" height="108" src={'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'}/>}>
                            <p style={{margin: '12px 0'}}>随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …</p>
                            <div>谢瑶 3 小时前更新</div>
                        </List.Item>
                        <List.Item extra={actions} title="构建一套产品化设计系统" media={<img width="161" height="108" src={'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'}/>}>
                            <p style={{margin: '12px 0'}}>随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …</p>
                            <div>谢瑶 3 小时前更新</div>
                        </List.Item>
                        <List.Item extra={actions} title="构建一套产品化设计系统" media={<img width="161" height="108" src={'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'}/>}>
                            <p style={{margin: '12px 0'}}>随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …</p>
                            <div>谢瑶 3 小时前更新</div>
                        </List.Item>
                        <List.Item extra={actions} title="构建一套产品化设计系统" media={<img width="161" height="108" src={'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'}/>}>
                            <p style={{margin: '12px 0'}}>随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …</p>
                            <div>谢瑶 3 小时前更新</div>
                        </List.Item>
                    </List>
                </DemoGroup>
            </Demo>
        </Demo>);
    }

}

function render(i18nMap, lang) {
    ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <RenderList i18nMap={i18nMap} />
        </div>
    </ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('list');
