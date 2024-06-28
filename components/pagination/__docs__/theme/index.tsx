import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import '../../style';
import Pagination from '../../index';
import Field from '../../../field';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

// import demo helper
// import component

const demo = {
    pagButton: {
        label: '翻页按钮',
        value: 'showAll',
        enum: [
            { label: '显示文字和ICON', value: 'showAll' },
            { label: '只显示ICON', value: 'iconOnly' },
            { label: '无边框', value: 'noBorder' },
        ],
    },
};
/* eslint-disable */
class NormalFunctionDemo extends React.Component {
    field = new Field(this, {
        values: {
            demo: Object.assign({}, demo),
        },
    });
    render() {
        const { init, getValue } = this.field;
        let shape = '';
        let functionVal = getValue('demo').pagButton.value;
        if (functionVal === 'showAll') {
            shape = 'normal';
        } else if (functionVal === 'iconOnly') {
            shape = 'arrow-only';
        } else if (functionVal === 'noBorder') {
            shape = 'no-border';
        }

        const { locale } = this.props;
        return (
            <Demo
                title="Normal"
                {...init('demo', {
                    valueName: 'demoFunction',
                    trigger: 'onFunctionChange',
                })}
            >
                <Demo title="Basic">
                    <DemoGroup label="Normal(L)">
                        <Pagination locale={locale} defaultCurrent={2} size="large" shape={shape} />
                    </DemoGroup>
                    <DemoGroup label="Normal(M)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="medium"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="Normal(S)">
                        <Pagination locale={locale} defaultCurrent={2} size="small" shape={shape} />
                    </DemoGroup>
                    <DemoGroup label="With Filter(L)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="large"
                            pageSizeSelector="filter"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="With Filter(M)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="medium"
                            pageSizeSelector="filter"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="With Filter(S)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="small"
                            pageSizeSelector="filter"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="With Dropdown(L)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="large"
                            pageSizeSelector="dropdown"
                            pageSizePosition="end"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="With Dropdown(M)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="medium"
                            pageSizeSelector="dropdown"
                            pageSizePosition="end"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="With Dropdown(S)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="small"
                            pageSizeSelector="dropdown"
                            pageSizePosition="end"
                            shape={shape}
                        />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

class SimpleFunctionDemo extends React.Component {
    field = new Field(this, {
        values: {
            demo: Object.assign({}, demo),
        },
    });
    render() {
        const { init, getValue } = this.field;
        let shape = '';
        let functionVal = getValue('demo').pagButton.value;
        if (functionVal === 'showAll') {
            shape = 'normal';
        } else if (functionVal === 'iconOnly') {
            shape = 'arrow-only';
        } else if (functionVal === 'noBorder') {
            shape = 'no-border';
        }
        const { locale } = this.props;
        return (
            <Demo
                title="Simple"
                {...init('demo', {
                    valueName: 'demoFunction',
                    trigger: 'onFunctionChange',
                })}
            >
                <Demo title="Basic">
                    <DemoGroup label="Normal(L)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="large"
                            type="simple"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="Normal(M)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="medium"
                            type="simple"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="Normal(S)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="small"
                            type="simple"
                            shape={shape}
                        />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

class MiniFunctionDemo extends React.Component {
    field = new Field(this, {
        values: {
            demo: Object.assign({}, demo),
        },
    });
    render() {
        const { init, getValue } = this.field;
        let shape = '';
        let functionVal = getValue('demo').pagButton.value;
        if (functionVal === 'showAll') {
            shape = 'normal';
        } else if (functionVal === 'iconOnly') {
            shape = 'arrow-only';
        } else if (functionVal === 'noBorder') {
            shape = 'no-border';
        }
        const { locale } = this.props;
        return (
            <Demo
                title="Mini"
                {...init('demo', {
                    valueName: 'demoFunction',
                    trigger: 'onFunctionChange',
                })}
            >
                <Demo title="Basic">
                    <DemoGroup label="Normal(L)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="large"
                            type="mini"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="Normal(M)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="medium"
                            type="mini"
                            shape={shape}
                        />
                    </DemoGroup>
                    <DemoGroup label="Normal(S)">
                        <Pagination
                            locale={locale}
                            defaultCurrent={2}
                            size="small"
                            type="mini"
                            shape={shape}
                        />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}
window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div>
                <NormalFunctionDemo />
                <SimpleFunctionDemo />
                <MiniFunctionDemo />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo();

initDemo('pagination');
