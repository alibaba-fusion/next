import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import '../../style';
import Breadcrumb from '../../index';
import Field from '../../../field';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

// import demo helper

// import component

// international

const i18nMap = {
    'en-us': {
        texts: ['Home', 'All Categories', "Women's Clothing", 'Blouses & Shirts', 'T-shirts'],
        results: 'Results',
        keyword: 'Keyword',
    },
    'zh-cn': {
        texts: ['首页', '所有分类', '女装', '上衣及衬衫', 'T恤'],
        results: '个结果',
        keyword: '关键字',
    },
};

const demo = {
    ellipsis: {
        label: '节点',
        value: 'normal',
        enum: [
            { label: '全部显示', value: 'normal' },
            { label: '节点省略', value: 'ellipsis' },
        ],
    },
};
/* eslint-disable */
class FunctionDemo extends React.Component {
    field = new Field(this, {
        values: {
            demo: demo,
        },
    });
    render() {
        const { texts, results, keyword } = this.props.i18n;
        const { init, getValue } = this.field;
        const maxNode = getValue('demo').ellipsis.value === 'normal' ? {} : { maxNode: 4 };
        return (
            <div className="demo-container">
                <Demo
                    title="Breadcrumb"
                    {...init('demo', {
                        valueName: 'demoFunction',
                        trigger: 'onFunctionChange',
                    })}
                >
                    <Demo title="Basic">
                        <DemoGroup label="Normal">
                            <Breadcrumb {...maxNode}>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[0]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[1]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[2]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[3]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[4]}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </DemoGroup>

                        <DemoGroup label="Keyword">
                            <Breadcrumb {...maxNode}>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[0]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[1]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[2]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item link="javascript:void(0);">
                                    {texts[3]}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {texts[4]}&nbsp;
                                    <b>78,999</b>
                                    &nbsp;{results}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </DemoGroup>
                    </Demo>
                </Demo>
            </div>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <FunctionDemo i18n={i18nMap[lang]} />
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo();
initDemo('breadcrumb');
