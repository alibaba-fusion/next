import React from 'react';
import ReactDOM from 'react-dom';
import Field from '../../../field';
import '../../../demo-helper/style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import Search from '../../index';

const i18nMaps = {
    'en-us': {
        title: 'Search',
        products: 'Products',
        suppliers: 'Suppliers',
    },
    'zh-cn': {
        title: '搜索',
        products: '产品',
        suppliers: '供应',
    },
};

const demo = {
    hasMenu: {
        label: '菜单',
        name: 'hasMenu',
        value: 'true',
        enum: [
            { label: '显示', value: 'true' },
            { label: '隐藏', value: 'false' },
        ],
    },
    buttonText: {
        label: '按钮文字',
        name: 'buttonText',
        value: 'true',
        enum: [
            { label: '显示', value: 'true' },
            { label: '隐藏', value: 'false' },
        ],
    },
};

const style = {
    width: 380,
};
interface DemoProps {
    i18n: { title: string; products: string; suppliers: string };
}
interface FieldValue {
    hasMenu: { value: string };
    buttonText: { value: string };
}
class FunctionDemo extends React.Component<DemoProps> {
    field = new Field(this, {
        values: {
            demo: demo,
        },
    });

    render() {
        const { i18n } = this.props;
        const { init, getValue } = this.field;
        const newValue: FieldValue | undefined = getValue('demo');
        const hasMenu = newValue?.hasMenu.value === 'true';
        const filter = hasMenu
            ? [
                  {
                      label: `${i18n.products}`,
                      value: 'Products',
                  },
                  {
                      label: `${i18n.suppliers}`,
                      value: 'Suppliers',
                  },
              ]
            : [];

        const buttonText = newValue?.buttonText.value === 'true';

        const title = buttonText ? i18n.title : '';

        return (
            <div className="demo-container">
                <h2>{i18n.title}</h2>

                <Demo
                    title="Basic"
                    {...init('demo', {
                        initValue: demo,
                        valueName: 'demoFunction',
                        trigger: 'onFunctionChange',
                    })}
                >
                    <Demo title="Primary" block={false}>
                        <DemoHead cols={['L', 'M']} />
                        <DemoGroup label="Normal">
                            <Search
                                filter={filter}
                                searchText={title}
                                type="primary"
                                size="large"
                                style={style}
                            />
                            <Search
                                filter={filter}
                                searchText={title}
                                type="primary"
                                style={style}
                            />
                        </DemoGroup>
                    </Demo>
                    <Demo title="Secondary" block>
                        <DemoHead cols={['L', 'M']} />

                        <DemoGroup label="Normal">
                            <Search
                                filter={filter}
                                searchText={title}
                                type="secondary"
                                size="large"
                                style={style}
                            />
                            <Search
                                filter={filter}
                                searchText={title}
                                type="secondary"
                                style={style}
                            />
                        </DemoGroup>
                    </Demo>

                    <Demo title="Normal" block>
                        <DemoHead cols={['L', 'M']} />

                        <DemoGroup label="Normal">
                            <Search
                                filter={filter}
                                searchText={title}
                                type="normal"
                                size="large"
                                style={style}
                            />
                            <Search
                                filter={filter}
                                searchText={title}
                                type="normal"
                                size="medium"
                                style={style}
                            />
                        </DemoGroup>
                    </Demo>
                    <div>
                        <Demo title="Dark" block defaultBackground="dark">
                            <DemoHead cols={['L', 'M']} />
                            <DemoGroup label="Normal">
                                <Search
                                    filter={filter}
                                    searchText={title}
                                    type="dark"
                                    size="large"
                                    style={style}
                                />
                                <Search
                                    filter={filter}
                                    searchText={title}
                                    type="dark"
                                    size="medium"
                                    style={style}
                                />
                            </DemoGroup>
                        </Demo>
                    </div>
                </Demo>

                <Demo title="Simple">
                    <Demo title="Normal" block>
                        <DemoHead cols={['L', 'M']} />

                        <DemoGroup label="Normal">
                            <Search
                                filter={filter}
                                searchText={i18n.title}
                                type="normal"
                                size="large"
                                shape="simple"
                                style={style}
                            />
                            <Search
                                filter={filter}
                                searchText={i18n.title}
                                type="normal"
                                size="medium"
                                shape="simple"
                                style={style}
                            />
                        </DemoGroup>
                    </Demo>
                    <Demo title="Focused" block>
                        <DemoHead cols={['L', 'M']} />

                        <DemoGroup label="Normal">
                            <Search
                                className="next-search-focus"
                                searchText={i18n.title}
                                type="normal"
                                size="large"
                                shape="simple"
                                style={style}
                            />
                            <Search
                                className="next-search-focus"
                                searchText={i18n.title}
                                type="normal"
                                size="medium"
                                shape="simple"
                                style={style}
                            />
                        </DemoGroup>
                    </Demo>
                    <div>
                        <Demo title="Dark" block defaultBackground="dark">
                            <DemoHead cols={['L', 'M']} />
                            <DemoGroup label="Normal">
                                <Search
                                    filter={filter}
                                    searchText={i18n.title}
                                    type="dark"
                                    size="large"
                                    shape="simple"
                                    style={style}
                                />
                                <Search
                                    filter={filter}
                                    searchText={i18n.title}
                                    type="dark"
                                    size="medium"
                                    shape="simple"
                                    style={style}
                                />
                            </DemoGroup>
                        </Demo>
                    </div>
                </Demo>
            </div>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <FunctionDemo i18n={i18nMaps[lang]} />
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo();

initDemo('search');
