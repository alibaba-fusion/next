import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import CascaderSelect from '../../index';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

const i18nMap = {
    'en-us': {
        label: 'Label',
    },
    'zh-cn': {
        label: '标签：',
    },
};

const createDataSource = () => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        const level1 = {
            label: `${i}`,
            value: `${i}`,
            children: [],
        };
        dataSource.push(level1);
        for (let j = 0; j < 10; j++) {
            const level2 = {
                label: `${i}-${j}`,
                value: `${i}-${j}`,
                children: [],
            };
            level1.children.push(level2);
            for (let k = 0; k < 10; k++) {
                const level3 = {
                    label: `${i}-${j}-${k}`,
                    value: `${i}-${j}-${k}`,
                };
                level2.children.push(level3);
            }
        }
    }

    dataSource[1].disabled = true;

    return dataSource;
};

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasBorder: {
                    label: '有无边框',
                    value: 'true',
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
                inlineLabel: {
                    label: '是否内置标签',
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

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction,
        });
    }

    render() {
        const dataSource = createDataSource();
        // eslint-disable-next-line
        const { multiple, i18n } = this.props;
        const { demoFunction } = this.state;
        const hasBorder = demoFunction.hasBorder.value === 'true';
        const inlineLabel = demoFunction.inlineLabel.value === 'true';
        const cascaderSelectProps = {
            multiple,
            dataSource,
            hasBorder,
            style: { width: '300px' },
        };
        if (inlineLabel) {
            cascaderSelectProps.label = i18n.label;
        }

        return (
            <Demo
                title={multiple ? 'Multiple' : 'Single'}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title="Normal">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="Normal">
                        <CascaderSelect {...cascaderSelectProps} size="large" />
                        <CascaderSelect {...cascaderSelectProps} size="medium" />
                        <CascaderSelect {...cascaderSelectProps} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Expanded">
                        <CascaderSelect
                            {...cascaderSelectProps}
                            visible
                            size="large"
                            defaultValue="0-0-1"
                            style={{ width: '300px', marginBottom: '212px' }}
                            popupProps={{ needAdjust: false }}
                        />
                        <CascaderSelect
                            {...cascaderSelectProps}
                            visible
                            size="medium"
                            defaultValue="0-0-1"
                            style={{ width: '300px', marginBottom: '212px' }}
                            popupProps={{ needAdjust: false }}
                        />
                        <CascaderSelect
                            {...cascaderSelectProps}
                            visible
                            size="small"
                            defaultValue="0-0-1"
                            style={{ width: '300px', marginBottom: '212px' }}
                            popupProps={{ needAdjust: false }}
                        />
                    </DemoGroup>
                    <DemoGroup label="Disabled">
                        <CascaderSelect
                            {...cascaderSelectProps}
                            disabled
                            size="large"
                            defaultValue="0-0-1"
                        />
                        <CascaderSelect
                            {...cascaderSelectProps}
                            disabled
                            size="medium"
                            defaultValue="0-0-1"
                        />
                        <CascaderSelect
                            {...cascaderSelectProps}
                            disabled
                            size="small"
                            defaultValue="0-0-1"
                        />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render(lang = 'en-us') {
    const i18n = i18nMap[lang];

    ReactDOM.render(
        <ConfigProvider locale={lang === 'zh-cn' ? zhCN : enUS}>
            <div className="demo-container">
                <FunctionDemo i18n={i18n} />
                <FunctionDemo i18n={i18n} multiple />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang) {
    render(lang);
};

window.renderDemo();

initDemo('cascader-select');
