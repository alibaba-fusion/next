import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import '../../style';
import Collapse from '../../index';

interface i18nContent {
    title: string;
    content: string;
}

const Panel = Collapse.Panel;

const i18nMap = {
    'zh-cn': {
        title: '这是区块的标题',
        content:
            '人总是要犯错误、受挫折、伤脑筋的，不过决不能停滞不前；应该完成的任务，即使为它牺牲生命，也要完成。社会之河的圣水就是因为被一股永不停滞的激流推动向前才得以保持洁净。这意味着河岸偶尔也会被冲垮，短时间造成损失，可是如果怕河堤溃决，便设法永远堵死这股激流，那只会招致停滞和死亡。',
    },
    'en-us': {
        title: 'Panel Header ',
        content:
            "People always make mistakes, frustrated, nerve-racking, but cannot remain stagnant; should finish the task, even if it's life, but also to complete. Society of holy water because the river is a never-ending stream of pushing forward was able to keep clean. This means that sometimes river was washed away, causing short-term losses, but if the fear of embankments break, they managed to always blocked this torrent, it will only lead to stagnation and death.",
    },
} as { [key: string]: i18nContent };

function render(i18n: i18nContent) {
    const title = i18n.title;
    const content = i18n.content;
    ReactDOM.render(
        <div className="demo-container">
            <h2>手风琴 Collapse</h2>

            <Demo title="Collapse">
                <DemoGroup label="Normal">
                    {/*<Collapse onChange={this.onChange.bind(this)} dataSource={this.state.list} />*/}
                    <Collapse expandedKeys={['1']}>
                        <Panel
                            title={
                                <div>
                                    {title}1<br />
                                    {title}1<br />
                                    {title}1
                                </div>
                            }
                        >
                            {content}
                        </Panel>
                        <Panel title={`${title}2`}>
                            {content}
                            {/* --------- this is for config platform ----------- */}
                            <div style={{ display: 'none' }}>
                                {/* @ts-expect-error div has no type  */}
                                <div type="arrow-right" className="next-collapse-unfold-icon" />
                            </div>
                            {/* --------- this is for config platform ----------- */}
                        </Panel>
                        <Panel title={`${title}3`}>{content}</Panel>
                        <Panel title={`${title}4`}>{content}</Panel>
                    </Collapse>
                </DemoGroup>
                <DemoGroup label="Disabled">
                    <Collapse disabled>
                        <Panel title={`${title}1`}>{content}</Panel>
                        <Panel title={`${title}2`}>{content}</Panel>
                        <Panel title={`${title}3`}>{content}</Panel>
                        <Panel title={`${title}4`}>{content}</Panel>
                    </Collapse>
                </DemoGroup>
            </Demo>
        </div>,
        document.getElementById('container')
    );
}

(window as any).renderDemo = function (lang: string) {
    render(i18nMap[lang]);
};

window.renderDemo('en-us');

initDemo('collapse');
