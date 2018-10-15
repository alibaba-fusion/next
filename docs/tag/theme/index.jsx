import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import Tag from '../../../src/tag';
import '../../../src/tag/style.js';
import '../../../src/icon/style.js';

/* eslint-disable */

// import demo helper

// import tag

const i18nMap = {
    'zh-cn': {
        large: '大号标签',
        medium: '中等标签',
        small: '小号标签',
    },
    'en-us': {
        large: 'large tag',
        medium: 'medium tag',
        small: 'small tag',
    },
};

function render(i18n) {
    return ReactDOM.render((
        <div className="demo-container">
            <Demo title="Default">
                <Demo title="normal">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag type="normal" size="large">{i18n.large}</Tag>
                        <Tag type="normal" size="medium">{i18n.medium}</Tag>
                        <Tag type="normal" size="small">{i18n.small}</Tag>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag type="normal" size="large" className="hover">{i18n.large}</Tag>
                        <Tag type="normal" size="medium" className="hover">{i18n.medium}</Tag>
                        <Tag type="normal" size="small" className="hover">{i18n.small}</Tag>
                    </DemoGroup>
                    <DemoGroup label="disabled">
                        <Tag type="normal" size="large" disabled>{i18n.large}</Tag>
                        <Tag type="normal" size="medium" disabled>{i18n.medium}</Tag>
                        <Tag type="normal" size="small" disabled>{i18n.small}</Tag>
                    </DemoGroup>
                </Demo>

                <Demo title="primary">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag type="primary" size="large">{i18n.large}</Tag>
                        <Tag type="primary" size="medium">{i18n.medium}</Tag>
                        <Tag type="primary" size="small">{i18n.small}</Tag>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag type="primary" size="large" className="hover">{i18n.large}</Tag>
                        <Tag type="primary" size="medium" className="hover">{i18n.medium}</Tag>
                        <Tag type="primary" size="small" className="hover">{i18n.small}</Tag>
                    </DemoGroup>
                    <DemoGroup label="disabled">
                        <Tag type="primary" size="large" disabled>{i18n.large}</Tag>
                        <Tag type="primary" size="medium" disabled>{i18n.medium}</Tag>
                        <Tag type="primary" size="small" disabled>{i18n.small}</Tag>
                    </DemoGroup>
                </Demo>
            </Demo>
            <Demo title="Selectable">
                <Demo title="normal">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag.Selectable type="normal" size="large" checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="medium" checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="small" checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag.Selectable type="normal" size="large" className="hover" checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="medium" className="hover" checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="small" className="hover" checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>

                    <DemoGroup label="disabled">
                        <Tag.Selectable type="normal" size="large" disabled checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="medium" disabled checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="normal" size="small" disabled checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>
                </Demo>

                <Demo title="primary">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag.Selectable type="primary" size="large" checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="medium" checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="small" checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag.Selectable type="primary" size="large" className="hover" checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="medium" className="hover" checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="small" className="hover" checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>

                    <DemoGroup label="disabled">
                        <Tag.Selectable type="primary" size="large" disabled checked>{i18n.large}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="medium" disabled checked>{i18n.medium}</Tag.Selectable>
                        <Tag.Selectable type="primary" size="small" disabled checked>{i18n.small}</Tag.Selectable>
                    </DemoGroup>
                </Demo>
            </Demo>
            <Demo title="Deletable">
                <Demo title="normal">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag.Closable type="normal" size="large">{i18n.large}</Tag.Closable>
                        <Tag.Closable type="normal" size="medium">{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="normal" size="small">{i18n.small}</Tag.Closable>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag.Closable type="normal" size="large" className="hover">{i18n.large}</Tag.Closable>
                        <Tag.Closable type="normal" size="medium" className="hover">{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="normal" size="small" className="hover">{i18n.small}</Tag.Closable>
                    </DemoGroup>

                    <DemoGroup label="disabled">
                        <Tag.Closable type="normal" size="large" disabled>{i18n.large}</Tag.Closable>
                        <Tag.Closable type="normal" size="medium" disabled>{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="normal" size="small" disabled>{i18n.small}</Tag.Closable>
                    </DemoGroup>
                </Demo>

                <Demo title="primary">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="normal">
                        <Tag.Closable type="primary" size="large">{i18n.large}</Tag.Closable>
                        <Tag.Closable type="primary" size="medium">{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="primary" size="small">{i18n.small}</Tag.Closable>
                    </DemoGroup>

                    <DemoGroup label="hover">
                        <Tag.Closable type="primary" size="large" className="hover">{i18n.large}</Tag.Closable>
                        <Tag.Closable type="primary" size="medium" className="hover">{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="primary" size="small" className="hover">{i18n.small}</Tag.Closable>
                    </DemoGroup>

                    <DemoGroup label="disabled">
                        <Tag.Closable type="primary" size="large" disabled closable>{i18n.large}</Tag.Closable>
                        <Tag.Closable type="primary" size="medium" disabled closable>{i18n.medium}</Tag.Closable>
                        <Tag.Closable type="primary" size="small" disabled closable>{i18n.small}</Tag.Closable>
                    </DemoGroup>
                </Demo>
            </Demo>
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function (lang) {
    lang = lang || 'en-us';
    render(i18nMap[lang]);
};

window.renderDemo('en-us');

initDemo('tag');
