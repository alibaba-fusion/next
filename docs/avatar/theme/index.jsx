import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, initDemo, DemoHead } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/avatar/style.js';
import Avatar from '../../../src/avatar';

const i18nMap = {
    'zh-cn': {
        'avatar': '头像',
        circle: '圆形',
        square: '正方形',
        icon: '图标',
        img: '图片',
        letters: '文字',
    },
    'en-us': {
        'avatar': 'Avatar',
        circle: 'Normal',
        square: 'Square',
        icon: 'Icon',
        img: 'Image',
        letters: 'Letters',
    },
};

class RenderAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {

            }
        };
    }

    onFunctionChange = (demoFunction) => {
        this.setState({ demoFunction });
    }

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;

        return (<Demo title={i18nMap.avatar} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title={i18nMap.circle}>
                <DemoHead cols={['L', 'M', 'S']} />
                <DemoGroup label={i18nMap.icon}>
                    <Avatar icon="account" size="large" />
                    <Avatar icon="account" size="medium" />
                    <Avatar icon="account" size="small" />
                </DemoGroup>
                <DemoGroup label={i18nMap.img}>
                    <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" size="large" />
                    <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" size="medium" />
                    <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" size="small" />
                </DemoGroup>
                <DemoGroup label={i18nMap.letters}>
                    <Avatar size="large">U</Avatar>
                    <Avatar size="medium">U</Avatar>
                    <Avatar size="small">U</Avatar>
                </DemoGroup>
            </Demo>
            <Demo title={i18nMap.square}>
                <DemoHead cols={['L', 'M', 'S']} />
                <DemoGroup label={i18nMap.icon}>
                    <Avatar shape="square" size="large"  icon="account"/>
                    <Avatar shape="square" size="medium"  icon="account"/>
                    <Avatar shape="square" size="small"  icon="account"/>
                </DemoGroup>
                <DemoGroup label={i18nMap.img}>
                    <Avatar shape="square" size="large" src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"/>
                    <Avatar shape="square" size="medium" src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"/>
                    <Avatar shape="square" size="small" src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png"/>
                </DemoGroup>
                <DemoGroup label={i18nMap.letters}>
                    <Avatar shape="square" size="large">U</Avatar>
                    <Avatar shape="square" size="medium">U</Avatar>
                    <Avatar shape="square" size="small">U</Avatar>
                </DemoGroup>
            </Demo>
        </Demo>);
    }

}

function render(i18nMap, lang) {
    ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <RenderAvatar i18nMap={i18nMap} />
        </div>
    </ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('avatar');
