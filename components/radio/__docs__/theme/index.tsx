import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../demo-helper/style';
import {
    Demo,
    DemoGroup,
    DemoHead,
    initDemo,
    type DemoFunctionDefineForObject,
} from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import Radio from '../../index';
import Field from '../../../field';

const i18nMap = {
    'zh-cn': {
        label: '文本',
        withLabel: '带有 label',
        number: '按钮数量',
        editLabel: '编辑文本',
        dataSource: [
            {
                value: 'gcellone',
                label: '单元格一',
            },
            {
                value: 'gcelltwo',
                label: '单元格二',
            },
            {
                value: 'gcellthree',
                label: '单元格三',
            },
            {
                value: 'gcellfour',
                label: '单元格四',
            },
        ],
    },
    'en-us': {
        label: 'label',
        withLabel: 'With Label',
        number: 'Number Of Buttons',
        editLabel: 'Edit Label',
        dataSource: [
            {
                value: 'gcellone',
                label: 'Cell 1',
            },
            {
                value: 'gcelltwo',
                label: 'Cell 2',
            },
            {
                value: 'gcellthree',
                label: 'Cell 3',
            },
            {
                value: 'gcellfour',
                label: 'Cell 4',
            },
        ],
    },
};
const RadioGroup = Radio.Group;

interface DemoProps {
    i18n: (typeof i18nMap)[keyof typeof i18nMap];
}

// default radio
class RadioDefaultDemo extends React.Component<DemoProps> {
    static propTypes = {
        i18n: PropTypes.object,
    };
    field: Field;
    constructor(props: DemoProps) {
        super(props);
        this.field = new Field(this, {
            values: {
                demo: {
                    radiolabel: {
                        label: '标签',
                        name: 'radiolabel',
                        value: 'true',
                        enum: [
                            { label: '显示', value: 'true' },
                            { label: '隐藏', value: 'false' },
                        ],
                    },
                },
            },
        });
    }
    render() {
        const { init, getValue } = this.field;
        const { i18n } = this.props;
        const label =
            getValue<{ radiolabel: DemoFunctionDefineForObject }>('demo')!.radiolabel.value ===
            'true'
                ? i18n.label
                : null;
        return (
            <Demo
                {...init('demo', {
                    valueName: 'demoFunction',
                    trigger: 'onFunctionChange',
                })}
                title="Radio Default"
            >
                <Demo title="Basic">
                    <DemoGroup label="Normal">
                        <RadioGroup>
                            <Radio checked={false}>{label}</Radio>
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Hover">
                        <RadioGroup>
                            <Radio checked={false} className="hovered">
                                {label}
                            </Radio>
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <RadioGroup defaultValue={1}>
                            <Radio value={1}>{label}</Radio>
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Selected & Hover">
                        <RadioGroup defaultValue={1}>
                            <Radio value={1} className="hovered">
                                {label}
                            </Radio>
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Disabled & Normal">
                        <RadioGroup>
                            <Radio disabled>{label}</Radio>
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Disabled & Selected">
                        <RadioGroup value={1}>
                            <Radio disabled checked value={1}>
                                {label}
                            </Radio>
                        </RadioGroup>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

// button radio
class RadioButtonDemo extends React.Component<DemoProps> {
    static propTypes = {
        i18n: PropTypes.object,
    };
    render() {
        const { i18n } = this.props;
        //const {init, getValue} = this.field;
        //const number = getValue('demo').value;
        const dataSource = i18n.dataSource.slice(0, 3);

        const disabledRadio = dataSource.map((d, i) => (
            <Radio key={`hover${d.value}`} value={d.value} disabled={i === 1}>
                {d.label}
            </Radio>
        ));
        const disabledSelectedRadio = dataSource.map(d => (
            <Radio key={`hover${d.value}`} value={d.value} disabled>
                {d.label}
            </Radio>
        ));

        return (
            <Demo title="Radio button">
                <Demo title={'Button'}>
                    <DemoHead cols={['L', 'M', 'S']} />
                    <DemoGroup label="Normal">
                        <RadioGroup dataSource={dataSource} shape="button" size="large" value="" />
                        <RadioGroup dataSource={dataSource} shape="button" size="medium" value="" />
                        <RadioGroup dataSource={dataSource} shape="button" size="small" value="" />
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <RadioGroup
                            dataSource={dataSource}
                            shape="button"
                            size="large"
                            value="gcellone"
                        />
                        <RadioGroup
                            dataSource={dataSource}
                            shape="button"
                            size="medium"
                            value="gcellone"
                        />
                        <RadioGroup
                            dataSource={dataSource}
                            shape="button"
                            size="small"
                            value="gcellone"
                        />
                    </DemoGroup>
                    <DemoGroup label="Disabled">
                        <RadioGroup shape="button" size="large" value="gcellone">
                            {disabledRadio}
                        </RadioGroup>
                        <RadioGroup shape="button" size="medium" value="gcellone">
                            {disabledRadio}
                        </RadioGroup>
                        <RadioGroup shape="button" size="small" value="gcellone">
                            {disabledRadio}
                        </RadioGroup>
                    </DemoGroup>
                    <DemoGroup label="Disabled & Selected">
                        <RadioGroup shape="button" size="large" value="gcellone">
                            {disabledSelectedRadio}
                        </RadioGroup>
                        <RadioGroup shape="button" size="medium" value="gcellone">
                            {disabledSelectedRadio}
                        </RadioGroup>
                        <RadioGroup shape="button" size="small" value="gcellone">
                            {disabledSelectedRadio}
                        </RadioGroup>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    const i18n = i18nMap[lang];
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <RadioDefaultDemo i18n={i18n} />
                <RadioButtonDemo i18n={i18n} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo();
initDemo('radio');
