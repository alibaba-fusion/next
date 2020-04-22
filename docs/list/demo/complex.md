# 大列表

- order: 0

页面级列表展示

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of List component.

:::
---

````jsx
import { List, Avatar, Box, Button, Divider } from '@alifd/next';

const actions = (
    <Box direction="row" align="center" style={{whiteSpace: 'nowrap', height: '100%', paddingLeft: 100}}>
        <Button text type="primary">编辑</Button>
        <Divider direction="ver" />
        <Button text type="primary">订阅</Button>
        <Divider direction="ver" />
        <Button text type="primary">删除</Button>
    </Box>
);

ReactDOM.render(
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
, mountNode);
````

````css

````
