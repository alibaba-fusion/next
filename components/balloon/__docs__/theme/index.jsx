import '../../../src/demo-helper/style.js';
import {Demo, DemoGroup, initDemo} from '../../../src/demo-helper';
import Balloon from '../../../src/balloon';
import '../../../src/balloon/style.js';
import '../../../src/icon/style.js';

const i18nMap = {
    'zh-cn': {
        title: '气泡弹层',
        tooltipContent: '提示浮层内可替换内容.',
        balloonContent: '气泡浮层内可替换内容',
        align: {
            label: '箭头方向',
            value: 'b',
            enum: [
                {label: '上', value: 'b'},
                {label: '下', value: 't'},
                {label: '左', value: 'r'},
                {label: '右', value: 'l'},
                {label: '上左', value: 'br'},
                {label: '上右', value: 'bl'},
                {label: '下左', value: 'tr'},
                {label: '下右', value: 'tl'},
                {label: '左上', value: 'rb'},
                {label: '左下', value: 'rt'},
                {label: '右上', value: 'lb'},
                {label: '右下', value: 'lt'},
            ]
        },
        closable: {
            label: '关闭按钮',
            value: 'true',
            enum: [
                {
                    label: '显示',
                    value: 'true'
                }, {
                    label: '隐藏',
                    value: 'false'
                }
            ]
        }
    },
    'en-us': {
        title: 'balloon',
        tooltipContent: 'Tool tip content replace holder.',
        balloonContent: 'Balloon content replace holder.',
        align: {
            label: 'direction',
            value: 'b',
            enum: [
                {label: 'top', value: 'b'},
                {label: 'bottom', value: 't'},
                {label: 'left', value: 'r'},
                {label: 'right', value: 'l'},
                {label: 'top left', value: 'br'},
                {label: 'top right', value: 'bl'},
                {label: 'bottom left', value: 'tr'},
                {label: 'bottom right', value: 'tl'},
                {label: 'left top', value: 'rb'},
                {label: 'left bottom', value: 'rt'},
                {label: 'right top', value: 'lb'},
                {label: 'right bottom', value: 'lt'},
            ]
        },
        closable: {
            label: 'closable',
            value: 'true',
            enum: [
                {
                    label: 'yes',
                    value: 'true'
                }, {
                    label: 'no',
                    value: 'false'
                }
            ]
        }
    }
};

class BalloonDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                align: {
                    label: '箭头方向',
                    value: 'b',
                    enum: [
                        {label: '上', value: 'b'},
                        {label: '下', value: 't'},
                        {label: '左', value: 'r'},
                        {label: '右', value: 'l'},
                        {label: '上左', value: 'br'},
                        {label: '上右', value: 'bl'},
                        {label: '下左', value: 'tr'},
                        {label: '下右', value: 'tl'},
                        {label: '左上', value: 'rb'},
                        {label: '左下', value: 'rt'},
                        {label: '右上', value: 'lb'},
                        {label: '右下', value: 'lt'},
                    ]
                },
                closable: {
                    label: '关闭按钮',
                    value: 'true',
                    enum: [
                        {
                            label: '显示',
                            value: 'true'
                        }, {
                            label: '隐藏',
                            value: 'false'
                        }
                    ]
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            demoFunction: {
                align: {
                    ...this.state.demoFunction.align,
                    ...nextProps.align
                },
                closable: {
                    ...this.state.demoFunction.closable,
                    ...nextProps.closable
                },
            }
        });
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render () {
        const {content} = this.props;
        const { demoFunction } = this.state;
        const align = demoFunction.align.value;
        const closable = demoFunction.closable.value === 'true';

        return (<Demo title="Balloon" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title="Normal">
                <DemoGroup label="Normal">
                    <Balloon.Inner style={{position: 'relative'}}
                        align={align} closable={closable}>
                        {content}
                    </Balloon.Inner>
                    <Balloon.Inner  style={{position: 'relative'}}
                        align={align} closable={closable} title={"Balloon Title"}>
                        {content}
                    </Balloon.Inner>
                </DemoGroup>
            </Demo>
            <Demo title="Primary">
                <DemoGroup label="Normal">
                    <Balloon.Inner style={{position: 'relative'}}
                        align={align} type="primary" closable={closable}>
                        {content}
                    </Balloon.Inner>
                    <Balloon.Inner style={{position: 'relative'}}
                        align={align} type="primary" closable={closable} title={"Balloon Title"}>
                        {content}
                    </Balloon.Inner>
                </DemoGroup>
            </Demo>
        </Demo>);
    }
}

class TooltipDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                align: {
                    label: '箭头方向',
                    value: 'b',
                    enum: [
                        {label: '上', value: 'b'},
                        {label: '下', value: 't'},
                        {label: '左', value: 'r'},
                        {label: '右', value: 'l'},
                        {label: '上左', value: 'br'},
                        {label: '上右', value: 'bl'},
                        {label: '下左', value: 'tr'},
                        {label: '下右', value: 'tl'},
                        {label: '左上', value: 'rb'},
                        {label: '左下', value: 'rt'},
                        {label: '右上', value: 'lb'},
                        {label: '右下', value: 'lt'},
                    ].slice(0, 8)
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            demoFunction: {
                align: {
                    ...this.state.demoFunction.align,
                    ...nextProps.align
                }
            }
        });
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render () {
        const {content} = this.props;
        const { demoFunction } = this.state;
        const align = demoFunction.align.value;

        return (<Demo title="Tooltip" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
            <Demo title="Tooltip">
                <DemoGroup label="Normal">
                    <Balloon.Inner
                        style={{position: 'relative'}}
                        closable={false}
                        align={align}
                        text={content}
                        isTooltip
                    >
                        {content}
                    </Balloon.Inner>
                </DemoGroup>
            </Demo>
        </Demo>);
    }
}


function render(i18n) {
    const tooltipContentText = i18n.tooltipContent;
    const balloonContentText = i18n.balloonContent;

    return ReactDOM.render((
        <div className="demo-container">
            <h2>{i18n.title}</h2>
            <BalloonDemo
                content={balloonContentText}
                align={i18n.align}
                closable={i18n.closable}
            />
            <TooltipDemo
                content={tooltipContentText}
                align={i18n.align}
            />
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang]);
};

window.renderDemo();


initDemo('balloon');
