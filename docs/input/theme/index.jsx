import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import  Input  from '../../../src/input';
import '../../../src/input/style.js';

// import demo helper

// import Input


// 中英文文案
const i18nMap = {
    'zh-cn': {
        large: '大',
        medium: '中',
        small: '小',
        focus: '输入态',
        error: '错误',
        disabled: '禁用',
        password: '密码',
        feedback: '反馈',
        loading: '加载中',
        success: '成功',
        clear: '清除',
        multiple: '多行',
        long: '比较长的字符串！',
        alibaba: '阿里巴巴',
        label: '标签:',
    },
    'en-us': {
        large: 'large',
        medium: 'medium',
        small: 'small',
        focus: 'focus',
        error: 'error',
        disabled: 'disabled',
        password: 'password',
        feedback: 'feedback',
        loading: 'loading',
        success: 'success',
        clear: 'clear',
        multiple: 'multiple line',
        long: 'long long string!',
        alibaba: 'alibaba',
        label: 'Label'
    }
};

// 渲染实际的组件 Demo, 切换中英文
function render(i18n) {
    return ReactDOM.render(<div style={{minWidth: 702, overflow: 'hidden'}}>
        <Demo title="Textfield" block>
            <DemoHead cols={['L', 'M', 'S']}/>

            <DemoGroup label="Normal">
                <Input placeholder={i18n.large} size="large"/>
                <Input placeholder={i18n.medium}/>
                <Input placeholder={i18n.small} size="small"/>
            </DemoGroup>
            <DemoGroup label="Focused">
                <Input value={i18n.focus} size="large" className="next-focus"/>
                <Input value={i18n.focus} className="next-focus"/>
                <Input value={i18n.focus} size="small" className="next-focus"/>
            </DemoGroup>
            <DemoGroup label="Disabled">
                <Input disabled value={i18n.disabled} size="large"/>
                <Input disabled value={i18n.disabled}/>
                <Input disabled value={i18n.disabled} size="small"/>
            </DemoGroup>
            <DemoGroup label="Error">
                <Input state="error" value={i18n.error} size="large"/>
                <Input state="error" value={i18n.error}/>
                <Input state="error" value={i18n.error} size="small"/>
            </DemoGroup>
            <DemoGroup label="Password">
                <Input htmlType="password" value={i18n.password} size="large"/>
                <Input htmlType="password" value={i18n.password}/>
                <Input htmlType="password" value={i18n.password} size="small"/>
            </DemoGroup>
            <DemoGroup label="Success">
                <Input value={i18n.success} size="large" state="success"/>
                <Input value={i18n.success} state="success"/>
                <Input value={i18n.success} size="small" state="success"/>
            </DemoGroup>
            <DemoGroup label="Loading">
                <Input value={i18n.loading} size="large" state="loading"/>
                <Input value={i18n.loading} state="loading"/>
                <Input value={i18n.loading} size="small" state="loading"/>
            </DemoGroup>
            <DemoGroup label="Clear">
                <Input value={i18n.clear} size="large" hasClear/>
                <Input value={i18n.clear} hasClear/>
                <Input value={i18n.clear} size="small" hasClear/>
            </DemoGroup>
            <DemoGroup label="Max Length">
                <Input value={i18n.large} size="large" hasLimitHint maxLength={5}/>
                <Input value={i18n.medium} hasLimitHint maxLength={5}/>
                <Input value={i18n.small} size="small" hasLimitHint maxLength={5}/>
            </DemoGroup>
            <DemoGroup label="Label">
                <Input label={i18n.label} id="label1" value={i18n.large} size="large" />
                <Input label={i18n.label} id="label2" value={i18n.medium} />
                <Input label={i18n.label} id="label3" value={i18n.small} size="small" />
            </DemoGroup>
        </Demo>
        <Demo title="Textarea" block>
            <DemoGroup label="Textarea">
                <Input.TextArea placeholder={i18n.multiple}/>
            </DemoGroup>
            <DemoGroup label="Disabled">
                <Input.TextArea disabled value={i18n.multiple} />
            </DemoGroup>
            <DemoGroup label="Max Length">
                <Input.TextArea value={i18n.multiple} hasLimitHint maxLength={20}/>
            </DemoGroup>
        </Demo>
        <Demo title="Addon" block>
            <DemoHead cols={['L', 'M', 'S']}/>
            <DemoGroup label="Normal">
                <Input addonTextBefore="http://" addonTextAfter=".com" size="large" value={i18n.alibaba} style={{width: 200}}/>
                <Input addonTextBefore="http://" addonTextAfter=".com" size="medium" value={i18n.alibaba} style={{width: 200}}/>
                <Input addonTextBefore="http://" addonTextAfter=".com" size="small" value={i18n.alibaba} style={{width: 200}}/>
            </DemoGroup>
        </Demo>

    </div>, document.getElementById('container'));
}

// 给配置平台调用, 切换中英文
window.renderDemo = function (lang) {
    lang = lang || 'en-us';

    render(i18nMap[lang]);
};

// 进行 DEMO 的初始化渲染
renderDemo();

initDemo('input');
