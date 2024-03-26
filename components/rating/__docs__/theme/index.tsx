import '../../../demo-helper/style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import Rating from '../../index';

const i18nMap = {
    'zh-cn': {
        readonly: '只读',
        normal: '基本',
        grade: '等级',
        unselected: '未选中',
        hover: '悬浮',
        selected: '选中',
        gradeHoverLevelOne: '悬浮等级一',
        gradeSelectedLevelOne: '选中等级一',
        gradeHoverLevelTwo: '悬浮等级二',
        gradeSelectedLevelTwo: '选中等级二',
    },
    'en-us': {
        readonly: 'Readonly',
        normal: 'Normal',
        grade: 'Grade',
        unselected: 'Unselected',
        hover: 'Hover',
        selected: 'Selected',
        gradeHoverLevelOne: 'Hover Level 1',
        gradeSelectedLevelOne: 'Selected Level 1',
        gradeHoverLevelTwo: 'Hover Level 2',
        gradeSelectedLevelTwo: 'Selected Level 2',
    },
};

function render(i18n, lang) {
    return ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <Demo title={i18n.readonly}>
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label={i18n.normal}>
                        <Rating value={3.5} showInfo disabled size="large" />
                        <Rating value={3.5} showInfo disabled />
                        <Rating value={3.5} showInfo disabled size="small" />
                    </DemoGroup>
                </Demo>
                <Demo title={i18n.normal}>
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label={i18n.normal}>
                        <Rating size="large" />
                        <Rating />
                        <Rating size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.hover}>
                        <Rating value={4} className={'hover'} size="large" />
                        <Rating value={4} className={'hover'} />
                        <Rating value={4} className={'hover'} size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.selected}>
                        <Rating value={4} size="large" />
                        <Rating value={4} />
                        <Rating value={4} size="small" />
                    </DemoGroup>
                </Demo>
                <Demo title={i18n.grade}>
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label={i18n.normal}>
                        <Rating type="grade" size="large" />
                        <Rating type="grade" />
                        <Rating type="grade" size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.gradeHoverLevelOne}>
                        <Rating type="grade" value={2} className={'hover'} size="large" />
                        <Rating type="grade" value={2} className={'hover'} />
                        <Rating type="grade" value={2} className={'hover'} size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.gradeSelectedLevelOne}>
                        <Rating type="grade" value={2} size="large" />
                        <Rating type="grade" value={2} />
                        <Rating type="grade" value={2} size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.gradeHoverLevelTwo}>
                        <Rating type="grade" value={4} className={'hover'} size="large" />
                        <Rating type="grade" value={4} className={'hover'} />
                        <Rating type="grade" value={4} className={'hover'} size="small" />
                    </DemoGroup>
                    <DemoGroup label={i18n.gradeSelectedLevelTwo}>
                        <Rating type="grade" value={4} size="large" />
                        <Rating type="grade" value={4} />
                        <Rating type="grade" value={4} size="small" />
                    </DemoGroup>
                </Demo>
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('rating');
