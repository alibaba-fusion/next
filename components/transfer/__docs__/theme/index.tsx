import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, DemoGroup, initDemo, type DemoFunctionDefineForObject } from '../../../demo-helper';
import Transfer from '../../index';
import type { TransferProps } from '../../types';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

const createDatasource = (lang: string) => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        let labelPrefix;
        switch (lang) {
            case 'zh-cn':
                labelPrefix = '内容';
                break;
            case 'en-us':
            default:
                labelPrefix = 'content';
        }

        dataSource.push({
            label: `${labelPrefix}${i}`,
            value: `${i}`,
            disabled: i % 4 === 0,
        });
    }

    return dataSource;
};

const i18nMap = {
    'en-us': {
        title: 'Title',
        dataSource: createDatasource('en-us'),
    },
    'zh-cn': {
        title: '标题',
        dataSource: createDatasource('zh-cn'),
    },
};

class FunctionDemo extends React.Component<
    TransferProps & {
        i18n: Record<string, any>;
    },
    {
        demoFunction: Record<string, DemoFunctionDefineForObject>;
    }
> {
    constructor(
        props: TransferProps & {
            i18n: Record<string, string>;
        }
    ) {
        super(props);
        this.state = {
            demoFunction: {
                showSearch: {
                    label: '有无搜索',
                    value: 'false',
                    enum: [
                        {
                            label: '有',
                            value: 'true',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction: Record<string, DemoFunctionDefineForObject>) {
        this.setState({
            demoFunction,
        });
    }
}

class NormalDemo extends FunctionDemo {
    render() {
        const { i18n } = this.props;
        const { title, dataSource } = i18n;
        const { demoFunction } = this.state;
        const showSearch = demoFunction!.showSearch.value === 'true';

        return (
            <Demo
                title="Normal"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <DemoGroup label="Normal">
                    <Transfer
                        showSearch={showSearch}
                        titles={[title, title]}
                        dataSource={dataSource}
                        defaultValue={['3']}
                        defaultLeftChecked={['1']}
                    />
                </DemoGroup>
            </Demo>
        );
    }
}

class SimpleDemo extends FunctionDemo {
    render() {
        const { i18n } = this.props;
        const { title, dataSource } = i18n;
        const { demoFunction } = this.state;
        const showSearch = demoFunction!.showSearch.value === 'true';

        return (
            <Demo
                title="Simple"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <DemoGroup label="Normal">
                    <Transfer
                        showSearch={showSearch}
                        mode="simple"
                        titles={[title, title]}
                        dataSource={dataSource}
                        defaultValue={['3']}
                        defaultLeftChecked={['1']}
                    />
                </DemoGroup>
            </Demo>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    const i18n = i18nMap[lang];

    ReactDOM.render(
        <ConfigProvider locale={lang === 'zh-cn' ? zhCN : enUS}>
            <div className="demo-container">
                <NormalDemo i18n={i18n} />
                <SimpleDemo i18n={i18n} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo();

initDemo('transfer');
