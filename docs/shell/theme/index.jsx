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
        shell: '布局框架',
        light: 'Shell模版1 - light',
        dark: 'Shell模版2 - dark',
        brand: 'Shell模版3 - brand',
    },
    'en-us': {
        shell: 'Shell',
        light: 'Template 1 - light',
        dark: 'Template 2 - dark',
        brand: 'Template 3 - brand',
    }
};
class RenderShell extends React.Component {
    render() {
        const { type, i18n, demoFunction } = this.props;
        const device = demoFunction.device.value;
        const globalDir = demoFunction.navigation.value;
        let globalNavType = demoFunction.navigationType.value,
        //     localNavType = demoFunction.localNavType.value,
            // globalHozNavType = 'normal',
            localNavType = 'normal',
            logoStyle = {},
            shellStyle = {};

        switch(type) {
            case 'light':
                logoStyle = {width: 32, height: 32, background: '#000', opacity: '0.04'};
                // globalHozNavType = 'normal';
                break;
            case 'dark':
                logoStyle = {width: 32, height: 32, background: '#FFF', opacity: '0.2'};
                // globalHozNavType = globalDir === 'hoz' ? 'primary' : 'normal';
                break;
            case 'brand':
                logoStyle = {width: 32, height: 32, background: '#000', opacity: '0.04'};
                // globalHozNavType = globalDir === 'hoz' ? 'secondary' : 'normal';
                break;
            default:
                break;
        }

        switch(device) {
            case 'phone':
                shellStyle = {height: 500, width: 480, border: '1px solid #eee'};
                break;
            case 'tablet':
                shellStyle = {height: 500, width: 768, border: '1px solid #eee'};
                break;
            case 'desktop':
                shellStyle = {height: 500, width: 1000, border: '1px solid #eee'};
                break;
            default:
                break;
        }
        return (<Demo title={'Shell'} key={type}>
            <DemoGroup label={'default'}>
                <Shell style={shellStyle} device={device} type={type}>
                    {
                        demoFunction.branding.value === 'true'
                            ? <Shell.Branding>
                                <div style={logoStyle}></div>
                                <span style={{marginLeft: 10}}>App Name</span>
                            </Shell.Branding>
                            : null
                    }

                    {
                        demoFunction.navigation.value !== 'false'
                            ?  <Shell.Navigation direction={globalDir}>
                                <Nav type={globalNavType} embeddable direction={globalDir} hozInLine>
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
                                <Search key="2" shape='simple' palceholder="Search" style={{width: '160px', marginRight: 20}}/>
                                <Icon type="ic_tongzhi" />
                                <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" style={{width: 24, height: 24, borderRadius: '50%', verticalAlign: 'middle'}} alt="用户头像" />
                                <span style={{marginLeft: 10}}>Name</span>
                            </Shell.Action>
                            : null
                    }
                    {
                        demoFunction.localNav.value === 'true'
                            ? <Shell.LocalNavigation>
                                <Nav type={localNavType} embeddable>
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
                    {
                        demoFunction.appbar.value === 'true'
                            ? <Shell.AppBar>

                            </Shell.AppBar>
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
        const navigationType = props.type === 'dark' ? 'primary' : 'normal';

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
                'navigationType': {
                    label: 'App Nav Type',
                    value: navigationType,
                    enum: [{
                        label: 'normal',
                        value: 'normal'
                    }, {
                        label: 'primary',
                        value: 'primary'
                    }, {
                        label: 'secondary',
                        value: 'secondary'
                    }, {
                        label: 'line',
                        value: 'line'
                    }]
                },
                'localNav': {
                    label: 'Local Nav',
                    value: 'false',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                // 'localNavType': {
                //     label: 'Local Nav Type',
                //     value: 'normal',
                //     enum: [{
                //         label: 'normal',
                //         value: 'normal'
                //     }, {
                //         label: 'primary',
                //         value: 'primary'
                //     }, {
                //         label: 'secondary',
                //         value: 'secondary'
                //     }, {
                //         label: 'line',
                //         value: 'line'
                //     }]
                // },
                'appbar': {
                    label: 'Appbar',
                    value: 'false',
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
                    value: 'false',
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
                    value: 'false',
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
                    value: 'false',
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
        const { title, locale, type, shellRender } = this.props;
        const { demoFunction } = this.state;

        return (<Demo title={title} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            { shellRender(type, locale, demoFunction) }
        </Demo>)
    }
}


function render(i18n, lang) {
    return ReactDOM.render(<ConfigProvider lang={lang === 'en-us' ? enUS : zhCN}><div className="demo-container">
        {
            ['light', 'dark', 'brand'].map(type => {
                return <FunctionDemo key={type} type={type} title={i18n[type]} locale={i18n} shellRender={renderShell} />
            })
        }
    </div></ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('shell');
