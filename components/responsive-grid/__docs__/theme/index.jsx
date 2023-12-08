import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/responsive-grid/style.js';
import ResponsiveGrid from '../../../src/responsive-grid';

const i18nMap = {
    'zh-cn': {
        'responsive-grid': '栅格布局',
        normal: '正常'
    },
    'en-us': {
        'responsive-grid': 'ResponsiveGrid',
        normal: 'Normal',
    },
};

class RenderResponsiveGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasChildren: {
                    label: 'ResponsiveGrid使用',
                    value: 'false',
                    enum: [{
                        label: '不独立使用',
                        value: false
                    }, {
                        label: '独立使用',
                        value: true
                    }]
                }
            }
        };
    }

    onFunctionChange = (demoFunction) => {
        this.setState({ demoFunction });
    }

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;
        const hasChildren = demoFunction.hasChildren.value === 'true';

        return (<Demo title={i18nMap['responsive-grid']} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title={i18nMap['responsive-grid']}>
                <DemoGroup label={i18nMap.normal}>
                    <ResponsiveGrid hasChildren={hasChildren}/>
                </DemoGroup>
            </Demo>
        </Demo>);
    }

}

function render(i18nMap, lang) {
    ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <RenderResponsiveGrid i18nMap={i18nMap} />
        </div>
    </ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('responsive-grid');
