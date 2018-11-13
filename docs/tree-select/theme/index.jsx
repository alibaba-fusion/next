import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/tree-select/style.js';
import { Demo, DemoHead, DemoGroup, initDemo } from '../../../src/demo-helper';
import TreeSelect from '../../../src/tree-select';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import ConfigProvider from '../../../src/config-provider';

const { Node: TreeNode } = TreeSelect;

const i18nMap = {
    'zh-cn': {
        trunk: '树干',
        branch: '数枝',
        leaf: '叶子',
        label: '标签：'
    },
    'en-us': {
        trunk: 'Trunk',
        branch: 'Branch',
        leaf: 'Leaf',
        label: 'Label'
    }
};

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                hasBorder: {
                    label: '边框',
                    value: 'true',
                    enum: [{
                        label: '显示',
                        value: 'true'
                    }, {
                        label: '隐藏',
                        value: 'false'
                    }]
                },
                inlineLabel: {
                    label: '是否内置标签',
                    value: 'false',
                    enum: [{
                        label: '显示',
                        value: 'true'
                    }, {
                        label: '隐藏',
                        value: 'false'
                    }]
                }
            }
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render() {
        console.log(this.state.demoFunction);
        // eslint-disable-next-line
        const { treeCheckable, i18n } = this.props;
        const { demoFunction } = this.state;
        const hasBorder = demoFunction.hasBorder.value === 'true';
        const inlineLabel = demoFunction.inlineLabel.value === 'true';
        const treeSelectProps = {
            treeDefaultExpandAll: true,
            treeCheckable,
            hasBorder,
            style: { width: '200px' },
            popupContainer: target => target.parentNode,
            children: (
                <TreeNode label={i18n.trunk} value="0" key="0">
                    <TreeNode label={i18n.branch} value="1" key="1">
                        <TreeNode label={i18n.branch} value="2" key="2">
                            <TreeNode label={i18n.leaf} value="3" key="3" />
                        </TreeNode>
                        <TreeNode label={i18n.leaf} value="4" key="4" />
                    </TreeNode>
                    <TreeNode label={i18n.branch} value="5" key="5">
                        <TreeNode label={i18n.leaf} value="6" key="6" />
                        <TreeNode label={i18n.leaf} value="7" key="7" />
                    </TreeNode>
                </TreeNode>
            )
        };
        if (inlineLabel) {
            treeSelectProps.label = i18n.label;
        }

        return (
            <Demo title={treeCheckable ? 'Checkable' : 'Selectable'} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="Normal">
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="Normal">
                        <TreeSelect {...treeSelectProps} size="large" />
                        <TreeSelect {...treeSelectProps} size="medium" />
                        <TreeSelect {...treeSelectProps} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Expanded">
                        <TreeSelect {...treeSelectProps} visible size="large" defaultValue="5" style={{ width: '200px', marginBottom: '212px' }} popupProps={{ needAdjust: false }} />
                        <TreeSelect {...treeSelectProps} visible size="medium" defaultValue="5" style={{ width: '200px', marginBottom: '212px' }} popupProps={{ needAdjust: false }} />
                        <TreeSelect {...treeSelectProps} visible size="small" defaultValue="5" style={{ width: '200px', marginBottom: '212px' }} popupProps={{ needAdjust: false }} />
                    </DemoGroup>
                    <DemoGroup label="Disabled">
                        <TreeSelect {...treeSelectProps} disabled size="large" defaultValue="5" />
                        <TreeSelect {...treeSelectProps} disabled size="medium" defaultValue="5" />
                        <TreeSelect {...treeSelectProps} disabled size="small" defaultValue="5" />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

window.renderDemo = function(lang = 'en-us') {
    const i18n = i18nMap[lang];
    ReactDOM.render((
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo i18n={i18n} />
                <FunctionDemo i18n={i18n} treeCheckable />
            </div>
        </ConfigProvider>
    ), document.getElementById('container'));
};

window.renderDemo();

initDemo('tree-select');
