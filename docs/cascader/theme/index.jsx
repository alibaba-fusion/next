import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/cascader/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Cascader from '../../../src/cascader';

const i18nMap = {
    'en-us': {
        option: 'Option'
    },
    'zh-cn': {
        option: '选项'
    }
};

const createDataSource = (label, hasDisabled) => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        const level1 = {
            label: `${label} ${i}`,
            value: `${i}`,
            children: []
        };
        dataSource.push(level1);
        for (let j = 0; j < 10; j++) {
            const level2 = {
                label: `${label} ${i}-${j}`,
                value: `${i}-${j}`,
                children: []
            };
            level1.children.push(level2);
            for (let k = 0; k < 10; k++) {
                const level3 = {
                    label: `${label} ${i}-${j}-${k}`,
                    value: `${i}-${j}-${k}`
                };
                level2.children.push(level3);
            }
        }
    }

    if (hasDisabled) {
        dataSource[1].disabled = true;
    }

    return dataSource;
};

function render(lang = 'en-us') {
    const i18n = i18nMap[lang];
    const dataSource = createDataSource(i18n.option);
    const disabledDataSource = createDataSource(i18n.option, true);

    ReactDOM.render((
        <div className="demo-container">
            <Demo title="single">
                <DemoGroup label="normal">
                    <Cascader canOnlySelectLeaf listStyle={{ width: '120px' }} expandTriggerType="hover" dataSource={dataSource} />
                </DemoGroup>
                <DemoGroup label="selected">
                    <Cascader canOnlySelectLeaf listStyle={{ width: '120px' }} expandTriggerType="hover" dataSource={disabledDataSource} defaultValue="0-0-0" />
                </DemoGroup>
            </Demo>
            <Demo title="multiple">
                <DemoGroup label="normal">
                    <Cascader multiple listStyle={{ width: '140px' }} expandTriggerType="hover" dataSource={dataSource} />
                </DemoGroup>
                <DemoGroup label="selected">
                    <Cascader multiple listStyle={{ width: '140px' }} expandTriggerType="hover" dataSource={disabledDataSource} defaultValue="0-0-0" />
                </DemoGroup>
            </Demo>
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function(lang) {
    render(lang);
};

window.renderDemo();

initDemo('cascader');
