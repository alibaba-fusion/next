import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import Card from '../../../src/card';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/demo-helper/style.js';
import '../../../src/card/style.js';

/*eslint-disable*/
const i18nMap = {
    'zh-cn': {
        card: '卡片',
        normal: '基本',
        title: '标题',
        subTitle: '副标题',
        link: '链接',
        noUnderline: '无标题分隔线',
        noExpand: '已展开',
    },
    'en-us': {
        card: 'Card',
        normal: 'Normal',
        title: 'Title',
        subTile: 'description',
        link: 'Link',
        noUnderline: 'No Header Line',
        noExpand: 'Expanded',
    }
};

const cardStyle = {
    width: 300,
};

const placeholderStyle = {
    height: '250px',
    textAlign: 'center'
};

const extendPlaceholderStyle = {
    height: '120px',
    textAlign: 'center'
};

function CardDemo({ locale, noBullet, noSubtitle, noLink, demoFunction, onFunctionChange }) {
    const commonProps = {
        style: cardStyle,
        showTitleBullet: !noBullet,
        subTitle: noSubtitle ? '' : locale.subTile,
        extra: noLink ? '' : locale.link,
    };

    return (
        <Demo title={locale.card} demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
            <DemoGroup label={locale.normal}>
                <Card {...commonProps} title={locale.title}>
                    <div style={placeholderStyle}></div>
                </Card>
            </DemoGroup>
            <DemoGroup label={locale.noUnderline}>
                <Card {...commonProps} title={locale.title} showHeadDivider={false}>
                    <div style={placeholderStyle}></div>
                </Card>
            </DemoGroup>
            <DemoGroup label={locale.noExpand}>
                <Card {...commonProps} title={locale.title} showHeadDivider={false} contentHeight="auto">
                    <div style={extendPlaceholderStyle}></div>
                </Card>
            </DemoGroup>
        </Demo>
    )
}

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                showBullet: {
                    label: '标题标识',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ],
                },
                showSubTitle: {
                    label: '副标题',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ],
                },
                showLink: {
                    label: '有无链接',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ],
                },
            },
        };
    }

    onFunctionChange = (ret) => {
        this.setState({
            demoFunction: ret,
        });
    }

    render() {
        const { title, locale } = this.props;
        const { demoFunction } = this.state;

        const noBullet = demoFunction.showBullet.value === 'false';
        const noSubtitle = demoFunction.showSubTitle.value === 'false';
        const noLink = demoFunction.showLink.value === 'false';
        const cardDemoProps = {
            locale,
            noBullet,
            noSubtitle,
            noLink,
            demoFunction,
            onFunctionChange: this.onFunctionChange,
        };

        return (<CardDemo {...cardDemoProps} />);
    }
}

function render(i18n, lang) {
    return ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}><div className="demo-container">
        <FunctionDemo title={i18n.card} locale={i18n} />
    </div></ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('card');
