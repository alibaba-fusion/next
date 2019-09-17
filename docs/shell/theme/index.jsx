import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import Shell from '../../../src/shell';
import Nav from '../../../src/nav';
import Search from '../../../src/search';
import Icon from '../../../src/icon';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/demo-helper/style.js';
import '../../../src/shell/style.js';
import '../../../src/search/style.js';
import '../../../src/nav/style.js';

/* eslint-disable */
const i18nMap = {
    'zh-cn': {
        button: '按钮',
        light: 'Shell模版1 - light',
        dark: 'Shell模版2 - dark',
        brand: 'Shell模版3 - brand',
    },
    'en-us': {
        button: 'Button',
        light: 'Template 1 - light',
        dark: 'Template 2 - dark',
        brand: 'Template 3 - brand',
    }
};
class RenderShell extends React.Component {
    render() {
        const { type, i18n, demoFunction } = this.props;
        return (<Demo title={i18n[type]} key={type}>
            <DemoGroup label={'normal'}>
                <Shell style={{height: 500, width: 800}} device={demoFunction.device.value} type={type}>
                    {
                        demoFunction.branding.value === 'true'
                            ? <Shell.Branding>
                                <div style={{width: 32, height: 32,background: '#555'}}></div>
                                <span style={{marginLeft: 10}}>App Name</span>
                            </Shell.Branding>
                            : null
                    }

                    {
                        demoFunction.navigation.value !== 'false'
                            ?  <Shell.Navigation direction={demoFunction.navigation.value}>
                                <Nav type="primary" embeddable direction={demoFunction.navigation.value} hozInLine>
                                    <Nav.Item icon="account">Nav Item 1</Nav.Item>
                                    <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                                    <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                                    <Nav.Item icon="account">Nav Item 4</Nav.Item>
                                    <Nav.Item icon="account">Nav Item 5</Nav.Item>
                                    <Nav.Item icon="account">Nav Item 6</Nav.Item>
                                    <Nav.Item icon="account">Nav Item 7</Nav.Item>
                                </Nav>
                            </Shell.Navigation>
                            : null
                    }
                    {
                        demoFunction.actions.value === 'true'
                            ? <Shell.Action>
                                <Search key="2" shape="simple" type="dark" palceholder="Search" style={{width: '200px', marginRight: 20}}/>
                                <Icon type="ic_tongzhi" />
                                <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" style={{width: 32, height: 32, borderRadius: '50%', verticalAlign: 'middle'}} alt="用户头像" />
                                <span style={{marginLeft: 10}}>MyName</span>
                            </Shell.Action>
                            : null
                    }
                    {
                        demoFunction.localNav.value === 'true'
                            ? <Shell.LocalNavigation>
                                <Nav embeddable>
                                <Nav.SubNav label="Local Nav1">
                                    <Nav.Item>Local Nav1</Nav.Item>
                                </Nav.SubNav>
                                <Nav.SubNav label="Local Nav2">
                                    <Nav.Item>Local Nav2</Nav.Item>
                                </Nav.SubNav>
                                <Nav.SubNav label="Local Nav3">
                                    <Nav.Item>Local Nav3</Nav.Item>
                                </Nav.SubNav>
                                <Nav.Item>Local Nav4</Nav.Item>
                                <Nav.Item>Local Nav5</Nav.Item>
                                <Nav.Item>Local Nav6</Nav.Item>
                                <Nav.Item>Local Nav7</Nav.Item>
                                <Nav.Item>Local Nav8</Nav.Item>
                                <Nav.Item>Local Nav4</Nav.Item>
                                <Nav.Item>Local Nav5</Nav.Item>
                                <Nav.Item>Local Nav6</Nav.Item>
                                <Nav.Item>Local Nav7</Nav.Item>
                                <Nav.Item>Local Nav8</Nav.Item>
                                </Nav>
                            </Shell.LocalNavigation>
                            : null
                    }
                    <Shell.Content>
                        <div style={{minHeight: 1200, background: '#fff'}}></div>
                    </Shell.Content>

                    {
                        demoFunction.ancillary.value === 'true'
                            ? <Shell.Ancillary>
                            </Shell.Ancillary>
                            : null
                    }
                    {
                        demoFunction.tooldock.value === 'true'
                            ? <Shell.ToolDock>
                                <Shell.ToolDockItem>
                                <Icon type="calendar" />
                                </Shell.ToolDockItem>
                                <Shell.ToolDockItem>
                                <Icon type="atm" />
                                </Shell.ToolDockItem>
                                <Shell.ToolDockItem>
                                <Icon type="account" />
                                </Shell.ToolDockItem>
                            </Shell.ToolDock>
                            : null
                    }
                    {
                        demoFunction.footer.value === 'true'
                            ? <Shell.Footer>
                                <span>Alibaba Fusion</span>
                                <span>@ 2019 Alibaba Piecework 版权所有</span>
                            </Shell.Footer>
                            : null
                    }
                </Shell>
            </DemoGroup>
        </Demo>);
    }
}

const renderShell = (type, i18n, demoFunction) => {
    return <RenderShell type={type} i18n={i18n} demoFunction={demoFunction} />;
}

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                'device': {
                    label: 'Device',
                    value: 'desktop',
                    enum: [{
                        label: 'desktop',
                        value: 'desktop'
                    }, {
                        label: 'tablet',
                        value: 'tablet'
                    }, {
                        label: 'phone',
                        value: 'phone'
                    }]
                },
                'branding': {
                    label: 'Branding',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'actions': {
                    label: 'Actions',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'navigation': {
                    label: 'Applicaitoin Nav',
                    value: 'ver',
                    enum: [{
                        label: '侧栏',
                        value: 'ver'
                    }, {
                        label: '顶部',
                        value: 'hoz'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'localNav': {
                    label: 'Local Nav',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'appbar': {
                    label: 'Appbar',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'footer': {
                    label: 'Footer',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'ancillary': {
                    label: 'Ancillary',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                'tooldock': {
                    label: 'Tooldock',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
            }
        }
    }

    onFunctionChange = (ret) => {
        this.setState({
            demoFunction: ret,
        });
    }

    render() {
        const { title, locale, types, shellRender } = this.props;
        const { demoFunction } = this.state;

        return (<Demo title={title} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            {
                types.map(type => shellRender(type, locale, demoFunction))
            }
        </Demo>)
    }
}


function render(i18n, lang) {
    return ReactDOM.render(<ConfigProvider lang={lang === 'en-us' ? enUS : zhCN}><div className="demo-container">
        <FunctionDemo title={i18n.button} locale={i18n} shellRender={renderShell} types={['light', 'dark', 'brand']} />
    </div></ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('button');
