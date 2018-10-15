# 国际化

- order: 2

展示如何配合 ConfigProvider 实现具有国际化能力的组件。

:::lang=en-us
# Internationalization

- order: 2

Demo how to use ConfigProvider to implement components with international capabilities.
:::

---

````jsx
import { ConfigProvider, Button, Select } from '@alifd/next';
import PropTypes from 'prop-types';

const { config, getContextProps } = ConfigProvider;
const { Option } = Select;

const locales = {
    'zh-cn': {
        ClickMe: {
            clickMe: '点我！'
        },
        Toast: {
            close: '关闭'
        }
    },
    'en-us': {
        ClickMe: {
            clickMe: 'click me!'
        },
        Toast: {
            close: 'close'
        }
    }
};

class ClickMe extends React.Component {
    static propTypes = {
        locale: PropTypes.object,
        onClick: PropTypes.func
    };

    static defaultProps = {
        locale: locales['zh-cn'].ClickMe,
        onClick: () => {}
    };

    render() {
        const { locale, onClick } = this.props;
        return (
            <Button onClick={onClick}>{locale.clickMe}</Button>
        );
    }
}

class Toast extends React.Component {
    static propTypes = {
        locale: PropTypes.object,
        afterClose: PropTypes.func
    };

    static defaultProps = {
        locale: locales['zh-cn'].Toast,
        afterClose: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            visible: false
        });
        this.props.afterClose();
    }

    render() {
        return (
            <div className="toast">
                <Button type="primary" onClick={this.handleClose}>
                    {this.props.locale.close}
                </Button>
            </div>
        );
    }
}
Toast.create = (props = {}) => {
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);

    const closeChain = () => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    };

    const newLocale = getContextProps(props, 'Toast').locale;

    ReactDOM.render(<Toast afterClose={closeChain} locale={newLocale} />, mountNode);
};

const NewClickMe = config(ClickMe);
const NewToast = config(Toast);

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'zh-cn'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    handleClick() {
        NewToast.create();
    }

    handleChangeLanguage(language) {
        this.setState({
            language
        });
    }

    render() {
        const { language } = this.state;

        return (
            <ConfigProvider locale={locales[language]}>
                <div>
                    <div className="select-language">
                        <Select value={language} onChange={this.handleChangeLanguage}>
                            <Option value="zh-cn">zh-cn</Option>
                            <Option value="en-us">en-us</Option>
                        </Select>
                    </div>
                    <NewClickMe onClick={this.handleClick} />
                </div>
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.toast {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: white;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .32);
}

.toast .next-btn {
    margin: auto;
}

.select-language {
    margin-bottom: 20px;
}
````
