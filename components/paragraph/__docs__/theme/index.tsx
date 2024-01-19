import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import Paragraph from '../../index';
import '../../style';

const i18nMap = {
    'zh-cn': {
        short: '等你，在雨中，在造虹的雨中。蝉声沉落，蛙声升起。一池的红莲如红焰，在雨中。你来不来都一样，竟感觉。每朵莲都像你。尤其隔着黄昏，隔着这样的细雨。永恒，刹那，刹那，永恒。',
        long: '雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶儿却绿得发亮，小草儿也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。在乡下，小路上，石桥边，有撑起伞慢慢走着的人，地里还有工作的农民，披着蓑戴着笠。他们的房屋，稀稀疏疏的在雨里静默着。天上风筝渐渐多了，地上孩子也多了。城里乡下，家家户户，老老小小，也赶趟儿似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事去。“一年之计在于春”，刚起头儿，有的是工夫，有的是希望。',
    },
    'en-us': {
        short: 'A paragraph is the most basic unit in the article. It has a relatively complete meaning in the content; in the article, the segment has the mark of the change.',
        long: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
};

function render(i18n: any) {
    ReactDOM.render(
        <div className="demo-container">
            <Demo title="Default">
                <Demo title="Normal">
                    <DemoHead cols={['M', 'S']} />
                    <DemoGroup label="Short">
                        <Paragraph type="short" size="medium">
                            {i18n.short}
                        </Paragraph>
                        <Paragraph type="short" size="small">
                            {i18n.short}
                        </Paragraph>
                    </DemoGroup>
                    <DemoGroup label="Long">
                        <Paragraph type="long" size="medium">
                            {i18n.long}
                        </Paragraph>
                        <Paragraph type="long" size="small">
                            {i18n.long}
                        </Paragraph>
                    </DemoGroup>
                </Demo>
            </Demo>
        </div>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang) {
    lang = lang || 'en-us';
    render(i18nMap[lang]);
};

window.renderDemo('en-us');

initDemo('paragraph');
