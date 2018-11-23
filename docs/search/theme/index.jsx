import React from 'react';
import ReactDOM from 'react-dom';
import Field from '../../../src/field';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/search/style.js';
import Search from '../../../src/search';

// import demo helper


// import component


const i18nMaps = {
    'en-us': {
        title: 'Search',
        products: 'Products',
        suppliers: 'Suppliers'
    },
    'zh-cn': {
        title: '搜索',
        products: '产品',
        suppliers: '供应'
    }
};

const demo = {
    hasMenu: {
        label: '菜单',
        name: 'hasMenu',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}],
    },
    buttonText: {
        label: '按钮文字',
        name: 'buttonText',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}],
    }
};

const style = {
    width: 380
};

class FunctionDemo extends React.Component {
    field = new Field(this, {values: {
        demo: demo
    }});

    render() {
        const {i18n} = this.props;
        const {init, getValue} = this.field;
        const hasMenu = getValue('demo').hasMenu.value === 'true';
        const filter = hasMenu ? [
            {
                label: `${i18n.products}`,
                value: 'Products'
            }, {
                label: `${i18n.suppliers}`,
                value: 'Suppliers'
            }
        ] : [];

        const buttonText = getValue('demo').buttonText.value === 'true';

        const title = buttonText ? i18n.title : '';

        return (<div className="demo-container">
            <h2>{i18n.title}</h2>

            <Demo title="Basic" {...init('demo', {
                initValue: demo,
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <Demo title="Primary" block={false}>
                    <DemoHead cols={['L', 'M']}/>
                    <DemoGroup label="Normal">
                        <Search filter={filter} searchText={title} type="primary" size="large" style={style}    />
                        <Search filter={filter} searchText={title} type="primary"  style={style}   />
                    </DemoGroup>
                </Demo>
                <Demo title="Secondary" block>
                    <DemoHead cols={['L', 'M']}/>

                    <DemoGroup label="Normal">
                        <Search filter={filter} searchText={title} type="secondary" size="large" style={style}   />
                        <Search filter={filter} searchText={title} type="secondary" style={style}   />
                    </DemoGroup>
                </Demo>

                <Demo title="Normal" block>
                    <DemoHead cols={['L', 'M']}/>

                    <DemoGroup label="Normal">
                        <Search filter={filter} searchText={title} type="normal" size="large"  style={style}    />
                        <Search filter={filter} searchText={title} type="normal" size="medium"  style={style}    />
                    </DemoGroup>
                </Demo>
                <div>
                    <Demo title="Dark" block defaultBackground="dark">
                        <DemoHead cols={['L', 'M']}/>
                        <DemoGroup label="Normal" >
                            <Search filter={filter} searchText={title} type="dark" size="large" style={style}   />
                            <Search filter={filter} searchText={title} type="dark" size="medium" style={style}   />
                        </DemoGroup>
                    </Demo>
                </div>
            </Demo>

            <Demo title="Simple">
                <Demo title="Normal" block>
                    <DemoHead cols={['L', 'M']}/>

                    <DemoGroup label="Normal">
                        <Search filter={filter} searchText={i18n.title} type="normal" size="large" shape="simple" style={style}   />
                        <Search filter={filter} searchText={i18n.title} type="normal" size="medium" shape="simple" style={style}   />
                    </DemoGroup>
                </Demo>
                <div>
                    <Demo title="Dark" block defaultBackground="dark">
                        <DemoHead cols={['L', 'M']}/>
                        <DemoGroup label="Normal">
                            <Search filter={filter} searchText={i18n.title} type="dark" size="large" shape="simple" style={style}   />
                            <Search filter={filter} searchText={i18n.title} type="dark" size="medium" shape="simple" style={style}   />
                        </DemoGroup>
                    </Demo>
                </div>
            </Demo>
        </div>);
    }
}

window.renderDemo = function(lang = 'en-us') {
    ReactDOM.render((
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <FunctionDemo i18n={i18nMaps[lang]}/>
        </ConfigProvider>
    ), document.getElementById('container'));
};

window.renderDemo();

initDemo('search');
