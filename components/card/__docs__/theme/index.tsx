import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, initDemo, type DemoFunctionDefineForObject } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import Card from '../../index';
import Button from '../../../button';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../style';

/*eslint-disable*/
const i18nMap = {
    'zh-cn': {
        card: '卡片',
        normal: '基本',
        title: '标题',
        subTitle: '副标题',
        link: '链接',
        noUnderline: '无标题分隔线',
        bullet: '带标题标识',
    },
    'en-us': {
        card: 'Card',
        normal: 'Normal',
        title: 'Title',
        subTile: 'Description',
        link: 'Link',
        noUnderline: 'No Header Line',
        bullet: 'Bullet',
    },
};

const cardStyle = {
    width: 360,
};

const placeholderStyle = {
    textAlign: 'left',
    fontSize: '14px',
    color: '#666',
};

const extendPlaceholderStyle = {
    height: '120px',
    textAlign: 'center',
};
interface RenderCardState {
    demoFunction: Record<string, DemoFunctionDefineForObject>;
}

interface RenderCardProps {
    i18n?: Record<string, string>;
    locale: Record<string, string>;
    title?: string;
}
interface RenderCardDemoProps {
    locale: Record<string, string>;
    divider: string | unknown;
    noSubtitle: boolean;
    noLink: boolean;
    demoFunction: Record<string, DemoFunctionDefineForObject>;
    onFunctionChange: (ret: Record<string, DemoFunctionDefineForObject>) => void;
}
function CardDemo({
    locale,
    divider,
    noSubtitle,
    noLink,
    demoFunction,
    onFunctionChange,
}: RenderCardDemoProps) {
    const commonProps = {
        subTitle: noSubtitle ? '' : locale.subTile,
        extra: noLink ? (
            ''
        ) : (
            <Button text type="primary">
                {locale.link}
            </Button>
        ),
    };

    return (
        <Demo title={locale.card} demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
            <DemoGroup label={locale.normal}>
                <Card style={cardStyle} free>
                    <Card.Header title={locale.title} {...commonProps} />
                    {divider && <Card.Divider inset={divider === 'inset'} />}
                    <Card.Content>
                        Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium
                        quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos
                        temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.
                    </Card.Content>
                    {divider && <Card.Divider inset={divider === 'inset'} />}
                    <Card.Actions>
                        <Button text type="primary">
                            Action 1
                        </Button>
                        <Button text type="primary">
                            Action 2
                        </Button>
                    </Card.Actions>
                </Card>
            </DemoGroup>
        </Demo>
    );
}

class FunctionDemo extends React.Component<RenderCardProps, RenderCardState> {
    constructor(props: RenderCardProps) {
        super(props);
        this.state = {
            demoFunction: {
                divider: {
                    label: '分割线',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' },
                        { label: '内嵌', value: 'inset' },
                    ],
                },
                showSubTitle: {
                    label: '副标题',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' },
                    ],
                },
                showLink: {
                    label: '有无链接',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' },
                    ],
                },
            },
        };
    }

    onFunctionChange = (ret: Record<string, DemoFunctionDefineForObject>) => {
        this.setState({
            demoFunction: ret,
        });
    };

    render() {
        const { locale } = this.props;
        const { demoFunction } = this.state;

        const divider = demoFunction.divider.value === 'false' ? '' : demoFunction.divider.value;
        const noSubtitle = demoFunction.showSubTitle.value === 'false';
        const noLink = demoFunction.showLink.value === 'false';
        const cardDemoProps = {
            locale,
            divider,
            noSubtitle,
            noLink,
            demoFunction,
            onFunctionChange: this.onFunctionChange,
        };

        return <CardDemo {...cardDemoProps} />;
    }
}

function render(i18n: Record<string, string>, lang: string) {
    return ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo title={i18n.card} locale={i18n} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('card');
