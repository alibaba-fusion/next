import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoFunctionDefineForObject, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import Box from '../../../box';
import Button from '../../../button';
import Avatar from '../../../avatar';
import Divider from '../../../divider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import '../../../box/style';
import '../../../button/style';
import '../../../divider/style';
import '../../../avatar/style';
import List from '../../index';

const i18nMap = {
    'zh-cn': {
        list: '列表',
        normal: '正常',
        small: '小列表',
    },
    'en-us': {
        list: 'List',
        normal: 'Normal',
        small: '小列表',
    },
};

interface DemoFunction {
    [index: string]: DemoFunctionDefineForObject;
}

type I18nMap = Record<string, string>;

interface RenderProps {
    i18nMap: I18nMap;
}

class RenderList extends React.Component<
    RenderProps,
    {
        demoFunction: DemoFunction;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            demoFunction: {},
        };
    }

    onFunctionChange = (demoFunction: DemoFunction) => {
        this.setState({ demoFunction });
    };

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;
        const actions = (
            <Box
                direction="row"
                align="center"
                style={{ whiteSpace: 'nowrap', height: '100%', paddingLeft: 100 }}
            >
                <Button text type="primary">
                    编辑
                </Button>
                <Divider direction="ver" />
                <Button text type="primary">
                    订阅
                </Button>
                <Divider direction="ver" />
                <Button text type="primary">
                    删除
                </Button>
            </Box>
        );

        return (
            <Demo
                title={i18nMap.list}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title={i18nMap.list}>
                    <DemoGroup label={i18nMap.small}>
                        <List size={'small'} header={<div>Notifications</div>}>
                            <List.Item
                                extra={'$20'}
                                media={
                                    <Avatar
                                        src={
                                            'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'
                                        }
                                    />
                                }
                                title="Title"
                            >
                                List Item 1
                            </List.Item>
                            <List.Item
                                extra={'$20'}
                                title="Title"
                                media={
                                    <Avatar
                                        src={
                                            'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'
                                        }
                                    />
                                }
                            >
                                List Item 2
                            </List.Item>
                            <List.Item
                                extra={'$20'}
                                title="Title"
                                media={
                                    <Avatar
                                        src={
                                            'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'
                                        }
                                    />
                                }
                            >
                                List Item 3
                            </List.Item>
                            <List.Item
                                extra={'$20'}
                                title="Title"
                                media={
                                    <Avatar
                                        src={
                                            'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'
                                        }
                                    />
                                }
                            >
                                List Item 4
                            </List.Item>
                            <List.Item
                                extra={'$20'}
                                title="Title"
                                media={
                                    <Avatar
                                        src={
                                            'https://img.alicdn.com/tfs/TB1JLwHvHj1gK0jSZFOXXc7GpXa-200-200.png'
                                        }
                                    />
                                }
                            >
                                List Item 5
                            </List.Item>
                        </List>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.normal}>
                        <List>
                            <List.Item
                                extra={actions}
                                media={
                                    <img
                                        width="161"
                                        height="108"
                                        src={
                                            'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
                                        }
                                    />
                                }
                                title="构建一套产品化设计系统"
                            >
                                <p style={{ margin: '12px 0' }}>
                                    随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易”
                                    的过程中，网站 UI
                                    构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配”
                                    …
                                </p>
                                <div>谢瑶 3 小时前更新</div>
                            </List.Item>
                            <List.Item
                                extra={actions}
                                title="构建一套产品化设计系统"
                                media={
                                    <img
                                        width="161"
                                        height="108"
                                        src={
                                            'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
                                        }
                                    />
                                }
                            >
                                <p style={{ margin: '12px 0' }}>
                                    随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易”
                                    的过程中，网站 UI
                                    构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配”
                                    …
                                </p>
                                <div>谢瑶 3 小时前更新</div>
                            </List.Item>
                            <List.Item
                                extra={actions}
                                title="构建一套产品化设计系统"
                                media={
                                    <img
                                        width="161"
                                        height="108"
                                        src={
                                            'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
                                        }
                                    />
                                }
                            >
                                <p style={{ margin: '12px 0' }}>
                                    随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易”
                                    的过程中，网站 UI
                                    构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配”
                                    …
                                </p>
                                <div>谢瑶 3 小时前更新</div>
                            </List.Item>
                            <List.Item
                                extra={actions}
                                title="构建一套产品化设计系统"
                                media={
                                    <img
                                        width="161"
                                        height="108"
                                        src={
                                            'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
                                        }
                                    />
                                }
                            >
                                <p style={{ margin: '12px 0' }}>
                                    随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易”
                                    的过程中，网站 UI
                                    构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配”
                                    …
                                </p>
                                <div>谢瑶 3 小时前更新</div>
                            </List.Item>
                            <List.Item
                                extra={actions}
                                title="构建一套产品化设计系统"
                                media={
                                    <img
                                        width="161"
                                        height="108"
                                        src={
                                            'https://img.alicdn.com/tfs/TB1R5fio4v1gK0jSZFFXXb0sXXa-322-216.png'
                                        }
                                    />
                                }
                            >
                                <p style={{ margin: '12px 0' }}>
                                    随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易”
                                    的过程中，网站 UI
                                    构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配”
                                    …
                                </p>
                                <div>谢瑶 3 小时前更新</div>
                            </List.Item>
                        </List>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render(i18nMap: I18nMap, lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <RenderList i18nMap={i18nMap} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('list');
