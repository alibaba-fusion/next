import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/{{ dashName }}/style.js';
import {{ name }} from '../../../src/{{ dashName }}';

const i18nMap = {
    'zh-cn': {
        '{{ dashName }}': '{{ chineseName }}',
        normal: '正常'
    },
    'en-us': {
        '{{ dashName }}': '{{ name }}',
        normal: 'Normal',
    },
};

class Render{{ name }} extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasChildren: {
                    label: '{{ name }}使用',
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

        return (<Demo title={i18nMap['{{ dashName }}']} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title={i18nMap['{{ dashName }}']}>
                <DemoGroup label={i18nMap.normal}>
                    <{{ name }} hasChildren={hasChildren}/>
                </DemoGroup>
            </Demo>
        </Demo>);
    }

}

function render(i18nMap, lang) {
    ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <Render{{ name }} i18nMap={i18nMap} />
        </div>
    </ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('{{ dashName }}');
