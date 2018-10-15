import React, {Component} from 'react';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import '../../../src/switch/style.js';
import Switch from '../../../src/switch';

const i18nMap = {
    'zh-cn': {
        checkedChildren: '开',
        unCheckedChildren: '关',
        showText: {
            label: '是否显示文字',
            value: 'false',
            enum: [{
                label: '是', value: 'true'
            }, {
                label: '否', value: 'false'
            }]
        }
    },
    'en-us': {
        checkedChildren: 'on',
        unCheckedChildren: 'off',
        showText: {
            label: 'show text',
            value: 'false',
            enum: [{
                label: 'yes', value: 'true'
            }, {
                label: 'no', value: 'false'
            }]
        }
    }
};

class ThemeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                showText: {
                    ...props.i18n.showText
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render() {
        const { demoFunction } = this.state;
        const {i18n} = this.props;
        const showText = demoFunction.showText.value;
        let props = {};
        if (showText === 'true') {
            props = {
                checkedChildren: i18n.checkedChildren,
                unCheckedChildren: i18n.unCheckedChildren
            };
        }

        return (
            <Demo title="Normal" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="Normal">
                    <DemoHead cols={['M', 'S']} />
                    <DemoGroup label="Off">
                        <Switch checked={false} {...props} />
                        <Switch checked={false} {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="On">
                        <Switch checked {...props} />
                        <Switch checked {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Disabled Off">
                        <Switch checked={false} disabled {...props} />
                        <Switch checked={false} {...props} disabled size="small" />
                    </DemoGroup>
                    <DemoGroup label="Disabled On">
                        <Switch checked disabled {...props} />
                        <Switch checked disabled {...props} size="small" />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render (i18n) {
    return ReactDOM.render((
        <div className="demo-container">
            <h2>Switch</h2>
            <ThemeDemo i18n={i18n} />
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function (lang) {
    render(i18nMap[lang]);
};

window.renderDemo('zh-cn');


initDemo('switch');
