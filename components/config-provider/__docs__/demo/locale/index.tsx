import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button, Select, CommonProps } from '@alifd/next';

const { config, getContextProps } = ConfigProvider;
const { Option } = Select;

const locales = {
    'zh-cn': {
        ClickMe: {
            clickMe: '点我！',
        },
        Toast: {
            close: '关闭',
        },
    },
    'en-us': {
        ClickMe: {
            clickMe: 'click me!',
        },
        Toast: {
            close: 'close',
        },
    },
};

class ClickMe extends React.Component<{ locale?: { clickMe: string }; onClick: () => void }> {
    static defaultProps = {
        locale: locales['zh-cn'].ClickMe,
        onClick: () => {},
    };

    render() {
        const { locale, onClick } = this.props;
        return <Button onClick={onClick}>{locale!.clickMe}</Button>;
    }
}

interface ToastProps extends CommonProps {
    afterClose?: () => unknown;
}

class Toast extends React.Component<ToastProps> {
    static defaultProps = {
        locale: locales['zh-cn'].Toast,
        afterClose: () => {},
    };
    static create = (props = {}) => {
        const mountNode = document.createElement('div');
        document.body.appendChild(mountNode);

        const closeChain = () => {
            ReactDOM.unmountComponentAtNode(mountNode);
            document.body.removeChild(mountNode);
        };

        const newLocale = getContextProps(props, 'Toast').locale;

        ReactDOM.render(<Toast afterClose={closeChain} locale={newLocale} />, mountNode);
    };

    constructor(props: ToastProps) {
        super(props);

        this.state = {
            visible: false,
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            visible: false,
        });
        this.props.afterClose!();
    }

    render() {
        return (
            <div className="toast">
                <Button type="primary" onClick={this.handleClose}>
                    {this.props.locale!.close}
                </Button>
            </div>
        );
    }
}

const NewClickMe = config(ClickMe);
const NewToast = config(Toast);

interface DemoState {
    language: 'zh-cn' | 'en-us';
}

class Demo extends React.Component<unknown, DemoState> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            language: 'zh-cn',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    handleClick() {
        (NewToast as unknown as typeof Toast).create();
    }

    handleChangeLanguage(language: DemoState['language']) {
        this.setState({
            language,
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
