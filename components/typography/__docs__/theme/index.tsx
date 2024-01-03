import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import Typography from '../../index';
import '../../style';

const { Text, Paragraph, H1, H2, H3, H4, H5, H6 } = Typography;

const i18nMap = {
    'zh-cn': {
        paragraph:
            '雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶儿却绿得发亮，小草儿也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。在乡下，小路上，石桥边，有撑起伞慢慢走着的人，地里还有工作的农民，披着蓑戴着笠。他们的房屋，稀稀疏疏的在雨里静默着。天上风筝渐渐多了，地上孩子也多了。城里乡下，家家户户，老老小小，也赶趟儿似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事去。“一年之计在于春”，刚起头儿，有的是工夫，有的是希望。',
    },
    'en-us': {
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
};

function render(i18n: Record<string, string>, lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <Demo title="Typography">
                    <Demo title="Text">
                        <DemoGroup label="Normal">
                            <Text>Fusion Design</Text>
                        </DemoGroup>
                        <DemoGroup label="Mark">
                            <Text mark>Fusion Design</Text>
                        </DemoGroup>
                        <DemoGroup label="Code">
                            <Text code>Fusion Design</Text>
                        </DemoGroup>
                        <DemoGroup label="Underline">
                            <Text underline>Fusion Design</Text>
                        </DemoGroup>
                        <DemoGroup label="Delete">
                            <Text delete>Fusion Design</Text>
                        </DemoGroup>
                        <DemoGroup label="Strong">
                            <Text strong>Fusion Design</Text>
                        </DemoGroup>
                    </Demo>
                    <Demo title="Title">
                        <DemoGroup label="H1">
                            <H1>h1. Fusion Design</H1>
                        </DemoGroup>
                        <DemoGroup label="H2">
                            <H2>h2. Fusion Design</H2>
                        </DemoGroup>
                        <DemoGroup label="H3">
                            <H3>h3. Fusion Design</H3>
                        </DemoGroup>
                        <DemoGroup label="H4">
                            <H4>h4. Fusion Design</H4>
                        </DemoGroup>
                        <DemoGroup label="H5">
                            <H5>h5. Fusion Design</H5>
                        </DemoGroup>
                        <DemoGroup label="H6">
                            <H6>h6. Fusion Design</H6>
                        </DemoGroup>
                    </Demo>
                    <Demo title="Paragraph">
                        <DemoGroup label="Normal">
                            <Paragraph>{i18n.paragraph}</Paragraph>
                        </DemoGroup>
                    </Demo>
                </Demo>
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

window.renderDemo('en-us');

initDemo('typography');
