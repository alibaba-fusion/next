import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import Message from '../../index';

const i18nMap = {
    'en-us': {
        title: 'Title',
        content: 'This item already has the label "travel", You can add a new label.',
    },
    'zh-cn': {
        title: '标题',
        content: '现在不是一个买房的低点，建议慎重考虑。',
    },
};

const shapes = ['inline', 'addon', 'toast'];
const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];

const toFirstUpperCase = str => str && str.substring(0, 1).toUpperCase() + str.substring(1);

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasTitle: {
                    label: '有无标题',
                    value: 'true',
                    enum: [
                        {
                            label: '有',
                            value: 'true',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
                closeable: {
                    label: '有无关闭按钮',
                    value: 'false',
                    enum: [
                        {
                            label: '有',
                            value: 'true',
                        },
                        {
                            label: '无',
                            value: 'false',
                        },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction,
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
            margin: 0,
        };

        const newChildren = shapes.map(shape => {
            const content = types.map(type => {
                const children = ['large', 'medium'].map(size => (
                    <Message
                        type={type}
                        title={title}
                        shape={shape}
                        size={size}
                        closeable={closeable}
                        key={`${shape}-${type}-${size}`}
                    >
                        {i18n.content}
                    </Message>
                ));
                return (
                    <DemoGroup label={toFirstUpperCase(type)} key={type}>
                        {children}
                    </DemoGroup>
                );
            });
            return (
                <Demo title={toFirstUpperCase(shape)} key={shape}>
                    <DemoHead cols={['L', 'M']} />
                    {content}
                </Demo>
            );
        });

        return (
            <Demo
                title="Normal"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {newChildren}
            </Demo>
        );
    }
}

function render(i18n) {
    ReactDOM.render(
        <div className="demo-container">
            <FunctionDemo i18n={i18n} />
        </div>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang) {
    lang = lang || 'en-us';
    render(i18nMap[lang]);
};
window.renderDemo();
initDemo('message');
