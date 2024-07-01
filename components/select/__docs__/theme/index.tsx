import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import Select, { type SelectProps } from '../../index';
import '../../style';
import '../../../demo-helper/style';
import Field from '../../../field';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

const i18nMaps = {
    'en-us': {
        option: 'Dynamic',
    },
    'zh-cn': {
        option: '动态选项',
    },
};

const demo = {
    label: {
        label: 'label',
        value: 'false',
        enum: [
            { label: '显示', value: 'true' },
            { label: '隐藏', value: 'false' },
        ],
    },
};

const itemRender: SelectProps['itemRender'] = (item, searchKey) => {
    let label = item.label as string;
    if (searchKey && searchKey.length) {
        const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(`(${key})`, 'i');
        label = label.replace(reg, x => `<span class="next-select-highlight">${x}</span>`);
    }

    return <span dangerouslySetInnerHTML={{ __html: label }} />;
};

class FunctionDemo extends React.Component<{ lang: keyof typeof i18nMaps }> {
    field = new Field(this, {
        values: {
            demo: demo,
        },
    });

    render() {
        const { lang } = this.props;
        const { init, getValue } = this.field;

        const i18n = i18nMaps[lang];

        const dataSource = [
            {
                label: `${i18n.option}1`,
                value: 'jack',
            },
            {
                label: `${i18n.option}2`,
                value: 'lucy',
            },
            {
                label: `${i18n.option}3`,
                value: 'gigi',
            },
            {
                label: 'Disabled',
                value: 'disabled',
                disabled: true,
            },
        ];

        const comboboxSource = [
            'Canada',
            'China',
            'Colombia',
            'Congo',
            'Georgia',
            'Germany',
            'Greece',
            'Grenada',
            'Guam',
            'Singapore',
            'South Korea',
            'Switzerland',
            'Uganda',
            'United Kingdom',
            'United States',
        ];

        const iconsConfigHelper = (
            <div className="next-select" style={{ display: 'none' }}>
                <div className="next-select-unfold-icon" />
            </div>
        );
        const selectProps = {
            dataSource,
            popupProps: { needAdjust: false },
            label: getValue<typeof demo>('demo')!.label.value === 'true' ? 'Label' : undefined,
        };

        const comboboxProps = {
            dataSource: comboboxSource,
            itemRender,
            popupProps: { needAdjust: false, style: { maxHeight: 160 } },
            hasArrow: true,
            label: getValue<typeof demo>('demo')!.label.value === 'true' ? 'Label' : undefined,
        };

        return (
            <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
                <div className="demo-container">
                    <Demo
                        {...init('demo', {
                            valueName: 'demoFunction',
                            trigger: 'onFunctionChange',
                        })}
                        title="Select"
                    >
                        <Demo title="Single">
                            <Demo title="With Border">
                                <DemoHead cols={['L', 'M', 'S']} />
                                <DemoGroup label="Normal">
                                    <Select size="large" {...selectProps} />
                                    <Select size="medium" {...selectProps} />
                                    <Select size="small" {...selectProps} />
                                </DemoGroup>
                                <DemoGroup label="Expand" height={200}>
                                    <div>
                                        <Select
                                            value="lucy"
                                            className="next-focus"
                                            visible
                                            size="large"
                                            {...selectProps}
                                        />
                                        {iconsConfigHelper}
                                    </div>
                                    <div>
                                        <Select
                                            value="lucy"
                                            className="next-focus"
                                            visible
                                            size="medium"
                                            {...selectProps}
                                        />
                                        {iconsConfigHelper}
                                    </div>
                                    <div>
                                        <Select
                                            value="lucy"
                                            className="next-focus"
                                            visible
                                            size="small"
                                            {...selectProps}
                                        />
                                        {iconsConfigHelper}
                                    </div>
                                </DemoGroup>
                                <DemoGroup label="Disabled">
                                    <Select size="large" value="lucy" disabled {...selectProps} />
                                    <Select size="medium" value="lucy" disabled {...selectProps} />
                                    <Select size="small" value="lucy" disabled {...selectProps} />
                                </DemoGroup>
                            </Demo>
                            <Demo title="No Border">
                                <DemoHead cols={['L', 'M', 'S']} />
                                <DemoGroup label="Normal">
                                    <Select hasBorder={false} size="large" {...selectProps} />
                                    <Select hasBorder={false} size="medium" {...selectProps} />
                                    <Select hasBorder={false} size="small" {...selectProps} />
                                </DemoGroup>
                                <DemoGroup label="Expand" height={200}>
                                    <Select
                                        hasBorder={false}
                                        value="lucy"
                                        className="next-focus"
                                        visible
                                        size="large"
                                        {...selectProps}
                                    />
                                    <Select
                                        hasBorder={false}
                                        value="lucy"
                                        className="next-focus"
                                        visible
                                        size="medium"
                                        {...selectProps}
                                    />
                                    <Select
                                        hasBorder={false}
                                        value="lucy"
                                        className="next-focus"
                                        visible
                                        size="small"
                                        {...selectProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Disabled">
                                    <Select
                                        hasBorder={false}
                                        size="large"
                                        value="lucy"
                                        disabled
                                        {...selectProps}
                                    />
                                    <Select
                                        hasBorder={false}
                                        size="medium"
                                        value="lucy"
                                        disabled
                                        {...selectProps}
                                    />
                                    <Select
                                        hasBorder={false}
                                        size="small"
                                        value="lucy"
                                        disabled
                                        {...selectProps}
                                    />
                                </DemoGroup>
                            </Demo>
                        </Demo>
                        <Demo title="Multiple">
                            <DemoHead cols={['L', 'M', 'S']} />
                            <DemoGroup label="Normal">
                                <Select
                                    mode="multiple"
                                    size="large"
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="medium"
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="small"
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                            </DemoGroup>
                            <DemoGroup label="Expand" height={200}>
                                <Select
                                    mode="multiple"
                                    size="large"
                                    value={['jack', 'lucy']}
                                    className="next-focus"
                                    visible
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="medium"
                                    value={['jack', 'lucy']}
                                    className="next-focus"
                                    visible
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="small"
                                    value={['jack', 'lucy']}
                                    className="next-focus"
                                    visible
                                    {...selectProps}
                                />
                            </DemoGroup>
                            <DemoGroup label="Disabled">
                                <Select
                                    mode="multiple"
                                    size="large"
                                    disabled
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="medium"
                                    disabled
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                                <Select
                                    mode="multiple"
                                    size="small"
                                    disabled
                                    value={['jack', 'lucy']}
                                    {...selectProps}
                                />
                            </DemoGroup>
                        </Demo>
                        <Demo title="Combobox">
                            <Demo title="Single">
                                <DemoHead cols={['L', 'M', 'S']} />
                                <DemoGroup label="Normal">
                                    <Select showSearch size="large" {...comboboxProps} />
                                    <Select showSearch size="medium" {...comboboxProps} />
                                    <Select showSearch size="small" {...comboboxProps} />
                                </DemoGroup>
                                <DemoGroup label="Expand" height={200}>
                                    <Select
                                        showSearch
                                        size="large"
                                        value="s"
                                        className="next-focus"
                                        visible
                                        {...comboboxProps}
                                    />
                                    <Select
                                        showSearch
                                        size="medium"
                                        value="s"
                                        className="next-focus"
                                        visible
                                        {...comboboxProps}
                                    />
                                    <Select
                                        showSearch
                                        size="small"
                                        value="s"
                                        className="next-focus"
                                        visible
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Selected">
                                    <Select
                                        showSearch
                                        size="large"
                                        value="United States"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        showSearch
                                        size="medium"
                                        value="United States"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        showSearch
                                        size="small"
                                        value="United States"
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Disabled">
                                    <Select showSearch size="large" disabled {...comboboxProps} />
                                    <Select showSearch size="medium" disabled {...comboboxProps} />
                                    <Select showSearch size="small" disabled {...comboboxProps} />
                                </DemoGroup>
                            </Demo>
                            <Demo title="Multiple">
                                <DemoHead cols={['L', 'M', 'S']} />
                                <DemoGroup label="Normal">
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="large"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="medium"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="small"
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Expand" height={220}>
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="large"
                                        value={['United States']}
                                        className="next-focus next-select-highlight"
                                        visible
                                        searchValue="C"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="medium"
                                        value={['United States']}
                                        className="next-focus next-select-highlight"
                                        visible
                                        searchValue="C"
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="small"
                                        value={['United States']}
                                        className="next-focus next-select-highlight"
                                        visible
                                        searchValue="C"
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Selected">
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="large"
                                        value={['United States', 'China']}
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="medium"
                                        value={['United States', 'China']}
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="small"
                                        value={['United States', 'China']}
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                                <DemoGroup label="Disabled">
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="large"
                                        value={['United States', 'China']}
                                        disabled
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="medium"
                                        value={['United States', 'China']}
                                        disabled
                                        {...comboboxProps}
                                    />
                                    <Select
                                        mode="multiple"
                                        showSearch
                                        size="small"
                                        value={['United States', 'China']}
                                        disabled
                                        {...comboboxProps}
                                    />
                                </DemoGroup>
                            </Demo>
                        </Demo>
                    </Demo>
                </div>
            </ConfigProvider>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(<FunctionDemo lang={lang} />, document.getElementById('container'));
};

window.renderDemo('en-us');

initDemo('select');
