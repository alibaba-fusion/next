import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/badge/style.js';
import Badge from '../../../src/badge';
import '../../../src/icon/style.js';
import Icon from '../../../src/icon';

// import demo helper

// import badge


const badgeExampleStyle = {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#eee',
    display: 'inline-block'
};

const i18nMap = {
    'zh-cn': {
        badge: '徽标',
        normal: '正常',
        unreadCombo: '未读组合',
        unreadText: '未读文本'
    },
    'en-us': {
        badge: 'Badge',
        normal: 'normal',
        unreadCombo: 'Unread Combo',
        unreadText: 'Unread Text'
    },
};

class RenderBadge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasChildren: {
                    label: 'Badge使用',
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
        const unreadComboChild = hasChildren === true ? null : <Icon type="email" />;
        const unreadTextChild = hasChildren === true ? null : <a href="#" style={badgeExampleStyle}></a>;

        return (<Demo title={i18nMap.badge} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title={i18nMap.unreadCombo}>
                <DemoGroup label={i18nMap.normal}>
                    <Badge dot>
                        {
                            unreadComboChild
                        }
                    </Badge>
                </DemoGroup>
            </Demo>
            <Demo title={i18nMap.unreadText}>
                <DemoGroup label={i18nMap.normal}>
                    <Badge count={25} >
                        {
                            unreadTextChild
                        }
                    </Badge>
                </DemoGroup>
            </Demo>
        </Demo>);
    }

}

function render(i18nMap, lang) {
    ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <RenderBadge i18nMap={i18nMap} />
        </div>
    </ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('badge');
