import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import Field from '../../../field';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Slider from '../../index';
import '../../style';

// import demo helper

// import slider

const i18nMap = {
    'zh-cn': {
        large: '大箭头',
        medium: '中等箭头',
        normal: '无箭头',
        widthDots: '有无导航锚点',
        widthArrow: '有无箭头',
        show: '显示',
        hide: '隐藏',
    },
    'en-us': {
        large: 'Large Arrow',
        medium: 'Medium Arrow',
        normal: 'Normal',
        widthDots: 'With Dots',
        widthArrow: 'With Arrows',
        show: 'show',
        hide: 'hide',
    },
};

const bigSlides = [
    {
        url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
        text: {
            'zh-cn': '手机淘宝皮肤征集',
            'en-us': 'Call for Mobile Taobao skin design',
        },
    },
    {
        url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
        text: {
            'zh-cn': '阿里公益T恤设计大赛',
            'en-us': 'T-shirt design competition of Alibaba public welfare',
        },
    },
    {
        url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
        text: {
            'zh-cn': '淘公仔设计大赛',
            'en-us': 'Amoy doll design competition',
        },
    },
    {
        url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
        text: {
            'zh-cn': '磁带播放器换肤设计大赛',
            'en-us': 'Tape player skin design competition',
        },
    },
];

const smallSlides = [
    {
        url: 'https://img.alicdn.com/bao/uploaded/i3/TB1YHwUNpXXXXaNXXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
        text: {
            'zh-cn': '样品',
            'en-us': 'sample',
        },
    },
    {
        url: 'https://img.alicdn.com/bao/uploaded/i3/TB1SyBLNpXXXXb4aXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
        text: {
            'zh-cn': '样品',
            'en-us': 'sample',
        },
    },
    {
        url: 'https://img.alicdn.com/bao/uploaded/i3/TB1NllZLXXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
        text: {
            'zh-cn': '样品',
            'en-us': 'sample',
        },
    },
    {
        url: 'https://img.alicdn.com/bao/uploaded/i4/TB1v3A7KpXXXXa0aXXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
        text: {
            'zh-cn': '样品',
            'en-us': 'sample',
        },
    },
    {
        url: 'https://img.alicdn.com/bao/uploaded/i2/TB1FOfLMVXXXXacapXXXXXXXXXX_!!0-item_pic.jpg_150x150q120.jpg',
        text: {
            'zh-cn': '样品',
            'en-us': 'sample',
        },
    },
];

const bigSlideStyle = {
    width: '100%',
};

const smallSlideStyle = {
    width: '25%',
};

const smallImgStyle = {
    display: 'block',
    width: '130px',
};

const smallVerticalSlideStyle = {
    width: '150px',
    height: '150px',
};

const smallSizeImg = {
    width: '120px',
    height: '120px',
};
const mediumWdth = '500px';

interface SliderBannerDemoProps {
    i18n: any;
}

interface SliderCardDemoProps {
    i18n: any;
}

class SliderBannerDemo extends React.Component<SliderBannerDemoProps> {
    static propTypes = {
        i18n: PropTypes.object,
    };
    private field: any;
    constructor(props: SliderBannerDemoProps) {
        super(props);
        // const { i18n } = props;
        this.setField();
    }
    setField() {
        this.field = new Field(this, {
            values: {
                demo: {
                    widthDots: {
                        label: '有无导航锚点',
                        name: 'withDots',
                        value: 'true',
                        enum: [
                            { label: '显示', value: 'true' },
                            { label: '隐藏', value: 'false' },
                        ],
                    },
                    widthArrow: {
                        label: '有无箭头',
                        name: 'widthArrow',
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
        // const { demoFunction } = this.state;
        const { init, getValue } = this.field;
        const { i18n } = this.props;
        const { medium, large } = i18n;
        const widthDots = getValue('demo').widthDots.value === 'true';
        const widthArrow = getValue('demo').widthArrow.value === 'true';
        return (
            <Demo
                title="Banner Simple"
                {...init('demo', {
                    valueName: 'demoFunction',
                    trigger: 'onFunctionChange',
                })}
            >
                <Demo title="Basic">
                    <DemoGroup label={medium}>
                        <div style={{ width: mediumWdth }}>
                            <Slider infinite={false} arrows={widthArrow} dots={widthDots}>
                                {bigSlides.map((item, index) => (
                                    <div key={index}>
                                        {/* @ts-expect-error item数据结构类型不正确*/}
                                        <img style={bigSlideStyle} src={item.url} alt={item.text} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>

                    <DemoGroup label={large}>
                        <div style={{ width: '600px' }}>
                            <Slider
                                infinite={false}
                                arrows={widthArrow}
                                arrowSize="large"
                                dots={widthDots}
                            >
                                {bigSlides.map((item, index) => (
                                    <div key={index}>
                                        {/* @ts-expect-error item数据结构类型不正确*/}
                                        <img style={bigSlideStyle} src={item.url} alt={item.text} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}
/* eslint-disable */
class SliderCardDemo extends React.Component<SliderCardDemoProps> {
    static propTypes = {
        i18n: PropTypes.object,
    };
    render() {
        const { i18n } = this.props;
        const { medium, large } = i18n;
        return (
            <Demo title="card slider">
                <Demo title="horizontal">
                    <DemoGroup label={medium}>
                        <div style={{ width: mediumWdth }}>
                            <Slider
                                slidesToShow={4}
                                arrowPosition="outer"
                                dots={false}
                                infinite={false}
                            >
                                {smallSlides.map((item, index) => (
                                    <div style={smallSizeImg} key={index}>
                                        <img
                                            key={index}
                                            src={item.url}
                                            // @ts-expect-error item数据结构类型不正确
                                            alt={item.text}
                                            style={smallSizeImg}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={large}>
                        <div style={{ width: '600px' }}>
                            <Slider
                                slidesToShow={4}
                                arrowPosition="outer"
                                arrowSize="large"
                                dots={false}
                                infinite={false}
                            >
                                {smallSlides.map((item, index) => (
                                    <div style={smallSlideStyle} key={index}>
                                        {/* @ts-expect-error item数据结构类型不正确*/}
                                        <img src={item.url} alt={item.text} style={smallImgStyle} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>
                </Demo>
                <Demo title="vertical">
                    <DemoGroup label={medium}>
                        <div>
                            <Slider
                                slideDirection="ver"
                                slidesToShow={2}
                                slidesToScroll={1}
                                dots={false}
                                arrowPosition="outer"
                                arrowDirection="ver"
                                style={{ width: '120px' }}
                            >
                                {smallSlides.map((item, index) => (
                                    <div style={smallSizeImg} key={index}>
                                        <img
                                            style={smallSizeImg}
                                            key={index}
                                            src={item.url}
                                            // @ts-expect-error item数据结构类型不正确
                                            alt={item.text}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={large}>
                        <div>
                            <Slider
                                slideDirection="ver"
                                slidesToShow={2}
                                slidesToScroll={1}
                                dots={false}
                                arrowPosition="outer"
                                arrowDirection="ver"
                                arrowSize="large"
                                style={{ width: '150px' }}
                            >
                                {smallSlides.map((item, index) => (
                                    <div style={smallVerticalSlideStyle} key={index}>
                                        {/* @ts-expect-error item数据结构类型不正确*/}
                                        <img src={item.url} alt={item.text} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <SliderBannerDemo i18n={i18nMap[lang]} />
                <SliderCardDemo i18n={i18nMap[lang]} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
};

window.renderDemo('en-us');

initDemo('slider');
