import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/message/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import Message from '../../../src/message';

const i18nMap = {
    'en-us': {
        title: 'Title',
        content: 'This item already has the label "travel". You can add a new label.'
    },
    'zh-cn': {
        title: '标题',
        content: '现在不是一个买房的低点，建议慎重考虑。'
    }
};

const shapes = ['inline', 'addon', 'toast'];
const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasTitle: {
                    label: '有无标题',
                    value: 'true',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
                },
                closeable: {
                    label: '有无关闭按钮',
                    value: 'false',
                    enum: [{
                        label: '有',
                        value: 'true'
                    }, {
                        label: '无',
                        value: 'false'
                    }]
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
        // eslint-disable-next-line
        const { i18n } = this.props;
        const { demoFunction } = this.state;
        const title = demoFunction.hasTitle.value === 'true' ? i18n.title : null;
        const closeable = demoFunction.closeable.value === 'true';

        const style = {
            lineHeight: 1.7,
            fontSize: '14px',
            margin: 0
        };

        const newChildren = shapes.map(shape => {
            const content = types.map(type => {
                const children = ['large', 'medium'].map(size => (
                    <Message type={type} title={title} shape={shape} size={size} closeable={closeable} key={`${shape}-${type}-${size}`}>
                        <p style={style}>{i18n.content}</p>
                    </Message>
                ));
                return (<DemoGroup label={type} key={type}>{children}</DemoGroup>);
            });
            return (
                <Demo title={shape} key={shape}>
                    <DemoHead cols={['L', 'M']} />
                    {content}
                </Demo>
            );
        });

        return (
            <Demo title="normal" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                {newChildren}
            </Demo>
        );
    }
}

function render(i18n) {
    ReactDOM.render((
        <div className="demo-container">
            <FunctionDemo i18n={i18n} />
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function (lang) {
    lang = lang || 'en-us';
    render(i18nMap[lang]);
};
window.renderDemo();
initDemo('message');
