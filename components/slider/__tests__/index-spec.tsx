import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import co from 'co';
import Icon from '../../icon';
import Slider from '../index';
import './index.scss';
import ConfigProvider from '../../config-provider';

/* eslint-disable */

Enzyme.configure({ adapter: new Adapter() });
const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('slider', function () {
    this.timeout(0);

    describe('render', () => {
        let wrapper;
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));

        afterEach(() => {
            const prevWrapper = wrapper;
            if (prevWrapper) {
                setTimeout(() => prevWrapper.unmount());
                wrapper = null;
            }
        });

        it('should not show render', () => {
            const wrapper = shallow(<Slider />);
            assert(wrapper.find('.next-slick').length === 0);
        });

        it('should basic render', () => {
            const wrapper = shallow(<Slider>{slides}</Slider>);
            assert(wrapper.props().arrowSize === 'medium');
            assert(wrapper.props().arrowPosition === 'inner');
            assert(wrapper.props().arrowDirection === 'hoz');
        });

        it('should render single slider', () => {
            const wrapper = mount(
                <Slider>
                    <div>single slider</div>
                </Slider>
            );
            assert(wrapper.find('.next-slick-arrow').length === 0);
            assert(wrapper.find('.next-slick-dots').length === 0);
        });

        it('should ConfigProvider work', () => {
            const wrapper = mount(
                <ConfigProvider prefix="ddd-">
                    <Slider>
                        <Icon type="account" />
                    </Slider>
                </ConfigProvider>
            );
            assert(wrapper.find('.ddd-icon-account').length > 0);
        });

        it('should render dots', () => {
            const wrapper = mount(
                <Slider
                    triggerType="hover"
                    dotsRender={(index, current) => {
                        console.log('current', current);
                        return <a className="my-dots">{index}</a>;
                    }}
                >
                    {slides}
                </Slider>
            );

            assert(wrapper.find('.next-slick-dots'));
            assert(wrapper.find('.my-dots').length === 4);
        });

        it('should render with lazyLoad', () => {
            const wrapper = mount(
                <Slider lazyLoad infinite={false}>
                    {slides}
                </Slider>
            );
            assert(wrapper.find('.custom-slick-item').length === 3);
        });

        it('using prefixCls deprecated', () => {
            const wrapper = mount(<Slider prefix="seu-">{slides}</Slider>);
            assert(wrapper.find('.seu-slick').length === 1);
        });

        it('using vertical deprecated', () => {
            wrapper = mount(<Slider dotsDirection="ver">{slides}</Slider>);
            assert(wrapper.find('.next-slick-dots.ver').length === 1);
        });

        it('using slideDirection', () => {
            wrapper = mount(<Slider slideDirection="ver">{slides}</Slider>);
            assert(wrapper.find('.next-slick-ver').length === 1);
        });

        it('infinite', () => {
            wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-arrow.disabled').length === 1);
        });

        it('should slickGoTo', () => {
            wrapper = mount(
                <Slider infinite={false} activeIndex={0}>
                    {slides}
                </Slider>
            );
            wrapper.setProps({ activeIndex: 2 });
            wrapper.update();
            assert(wrapper.find('.next-slick-slide').at(2).hasClass('next-slick-active'));
        });

        it('should autoplay', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider infinite={false} autoplay autoplaySpeed={200}>
                        {slides}
                    </Slider>
                );
                yield delay(300);
                wrapper.update();
                assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
            });
        });

        it('should fade', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider infinite={false} animation="fade" autoplay autoplaySpeed={200}>
                        {slides}
                    </Slider>
                );
                yield delay(300);
                wrapper.update();
                assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
            });
        });

        it('should render with custom arrow', () => {
            const arrowStyle = {
                display: 'block',
                background: 'red',
                opacity: 1,
                margin: '0 20px',
            };

            const CustomNextArrow = props => {
                return (
                    <div {...props} style={arrowStyle} className="test-classname-right">
                        <Icon type="arrow-double-right" />
                    </div>
                );
            };

            const CustomPrevArrow = props => {
                return (
                    <div {...props} style={arrowStyle} className="test-classname-left">
                        <Icon type="arrow-double-left" />
                    </div>
                );
            };

            wrapper = mount(
                <Slider nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />}>
                    {slides}
                </Slider>
            );
            assert(wrapper.find('.test-classname-right').length === 1);
            assert(wrapper.find('.test-classname-left').length === 1);
        });

        it('should rtl', () => {
            wrapper = mount(
                <Slider rtl infinite={false}>
                    {slides}
                </Slider>
            );
            assert(wrapper.find('.next-slick-slide').at(3).hasClass('next-slick-active'));
        });
    });

    describe('render multiple', () => {
        let wrapper;
        const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <div key={item}>
                <h3>{item}</h3>
            </div>
        ));

        beforeEach(() => {});

        afterEach(() => {
            if (wrapper) {
                wrapper.unmount();
                wrapper = null;
            }
        });

        it('should centerMode', () => {
            const settings = {
                className: 'custom-slide center',
                centerMode: true,
                infinite: true,
                dots: false,
                arrowPosition: 'outer',
                centerPadding: '60px',
                slidesToShow: 3,
            };
            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-center').length === 2);
        });

        it('should centerMode and not infinite', () => {
            const settings = {
                className: 'custom-slide center',
                centerMode: true,
                infinite: false,
                dots: false,
                arrowPosition: 'outer',
                centerPadding: '60px',
                slidesToShow: 3,
            };
            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-center').length === 1);
        });

        it('should infinite', () => {
            const settings = {
                slidesToShow: 3,
                slidesToScroll: 2,
            };
            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            assert(wrapper.find('.next-slick').length === 1);
        });

        it('too more slidesToShow ', () => {
            return co(function* () {
                const settings = {
                    slidesToShow: 5,
                    slidesToScroll: 10,
                    autoplaySpeed: 200,
                };
                wrapper = mount(<Slider {...settings}>{slides}</Slider>);
                yield delay(2000);
                assert(wrapper.find('.next-slick').length === 1);
            });
        });

        it('should variableWidth', () => {
            const settings = {
                className: 'custom-slide variable-width',
                arrowPosition: 'outer',
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                centerMode: true,
            };

            wrapper = mount(
                <Slider {...settings}>
                    <div style={{ width: 100 }}>
                        <p>100</p>
                    </div>
                    <div style={{ width: 200 }}>
                        <p>200</p>
                    </div>
                    <div style={{ width: 75 }}>
                        <p>75</p>
                    </div>
                    <div style={{ width: 300 }}>
                        <p>300</p>
                    </div>
                    <div style={{ width: 225 }}>
                        <p>225</p>
                    </div>
                </Slider>
            );

            assert(wrapper.find('.next-slick-center').length === 2);
        });
    });

    describe('action', () => {
        let wrapper;
        const slides = [1, 2, 3, 4].map(item => (
            <div key={item}>
                <h3>{item}</h3>
            </div>
        ));

        afterEach(() => {
            const prevWrapper = wrapper;
            if (prevWrapper) {
                setTimeout(() => prevWrapper.unmount());
                wrapper = null;
            }
        });

        it('should click next/prev arrow', () => {
            return co(function* () {
                wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
                yield delay(100);
                assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
                wrapper.find('.next-slick-arrow.next-slick-next').simulate('click');
                yield delay(300);
                assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
                wrapper.find('.next-slick-prev').simulate('click');
            });
        });

        it('should have correct disabled class for next/prev arrow', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider infinite={false} defaultActiveIndex={2} slidesToShow={5}>
                        {slides}
                    </Slider>
                );
                yield delay(100);
                assert(
                    wrapper.find('.next-slick-arrow.next-slick-next').at(0).hasClass('disabled')
                );
                assert(
                    !wrapper.find('.next-slick-arrow.next-slick-prev').at(0).hasClass('disabled')
                );
            });
        });

        it('should hover next/prev arrow', () => {
            return co(function* () {
                wrapper = mount(<Slider infinite={false}>{slides}</Slider>);

                wrapper.find('.next-slick-arrow.next-slick-next').simulate('mouseEnter');
                yield delay(300);
                wrapper.find('.next-slick-arrow.next-slick-next').simulate('mouseLeave');

                wrapper.find('.next-slick-arrow.next-slick-prev').simulate('mouseEnter');
                yield delay(300);
                wrapper.find('.next-slick-arrow.next-slick-prev').simulate('mouseLeave');

                assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
            });
        });

        it('should click dots', () => {
            return co(function* () {
                wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
                assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
                wrapper.find('.next-slick-dots-item button').at(2).simulate('click');
                yield delay(300);
                assert(wrapper.find('.next-slick-dots-item').at(2).hasClass('active'));
                assert(wrapper.find('.next-slick-slide').at(2).hasClass('next-slick-active'));
            });
        });

        it('should call onChange onBeforeChange hook', () => {
            const settings = {
                infinite: false,
                onChange: index => {
                    assert(index === 1);
                },
                onBeforeChange: (currentIndex, index) => {
                    assert(currentIndex === 0);
                    assert(index === 1);
                },
            };

            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            wrapper.find('.next-slick-arrow.next-slick-next').simulate('click');
        });
        it('should adaptiveHeight', () => {
            wrapper = mount(
                <Slider adaptiveHeight dotsDirection="ver" slideDirection="ver" activeIndex={0}>
                    <div className="slider-item" key={1}>
                        111111
                    </div>
                    <div className="slider-item" key={2}>
                        公告：22222222222222222222领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问1111史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问。工从引然所国引极二间响他两周消广放济候办片提广起两有动书断化管千积争擦到了传达了查看；
                    </div>
                    <div className="slider-item" key={3}>
                        3333
                    </div>
                    <div className="slider-item" key={4}>
                        44444444444
                    </div>
                </Slider>
            );
            wrapper.setProps({ activeIndex: 2 });
            wrapper.update();
            const height1 = wrapper.find('.next-slick-slide').at(0).instance().style.height;
            const height2 = wrapper.find('.next-slick-slide').at(1).instance().style.height;
            const height3 = wrapper.find('.next-slick-slide').at(3).instance().style.height;
            const newHeight = height1 + height2 + height3;
            assert(
                wrapper.find('.next-slick-track').instance().style.transform ===
                    `translate3d(0px, ${-newHeight}px, 0px)`
            );
        });
    });

    describe('action rtl', () => {
        let wrapper;
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));

        afterEach(() => {
            const prevWrapper = wrapper;
            if (prevWrapper) {
                setTimeout(() => prevWrapper.unmount());
                wrapper = null;
            }
        });

        it('should click next/prev arrow', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider rtl infinite={false}>
                        {slides}
                    </Slider>
                );
                yield delay(100);
                const len = wrapper.find('.next-slick-slide').length;

                assert(
                    wrapper
                        .find('.next-slick-slide')
                        .at(len - 1)
                        .hasClass('next-slick-active')
                );
                wrapper.find('.next-slick-arrow.next-slick-prev').simulate('click');
                yield delay(300);
                assert(
                    wrapper
                        .find('.next-slick-slide')
                        .at(len - 2)
                        .hasClass('next-slick-active')
                );
                wrapper.find('.next-slick-prev').simulate('click');
            });
        });

        it('should hover next/prev arrow', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider rtl infinite={false}>
                        {slides}
                    </Slider>
                );

                const len = wrapper.find('.next-slick-slide').length;
                wrapper.find('.next-slick-arrow.next-slick-prev').simulate('mouseEnter');
                yield delay(300);
                wrapper.find('.next-slick-arrow.next-slick-prev').simulate('mouseLeave');

                wrapper.find('.next-slick-arrow.next-slick-next').simulate('mouseEnter');
                yield delay(300);
                wrapper.find('.next-slick-arrow.next-slick-next').simulate('mouseLeave');

                assert(
                    wrapper
                        .find('.next-slick-slide')
                        .at(len - 1)
                        .hasClass('next-slick-active')
                );
            });
        });

        it('should click dots', () => {
            return co(function* () {
                wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
                assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
                wrapper.find('.next-slick-dots-item button').at(2).simulate('click');
                yield delay(300);
                assert(wrapper.find('.next-slick-dots-item').at(2).hasClass('active'));
                assert(wrapper.find('.next-slick-slide').at(2).hasClass('next-slick-active'));
            });
        });

        it('should call onChange hook', () => {
            const settings = {
                infinite: false,
                onChange: index => {
                    assert(index === 1);
                },
            };

            wrapper = mount(
                <Slider rtl {...settings}>
                    {slides}
                </Slider>
            );
            wrapper.find('.next-slick-arrow.next-slick-next').simulate('click');
        });

        it('should autoplay', () => {
            return co(function* () {
                wrapper = mount(
                    <Slider rtl autoplay infinite={false} autoplaySpeed={200}>
                        {slides}
                    </Slider>
                );
                yield delay(300);
                wrapper.update();
                const len = wrapper.find('.next-slick-slide').length;
                assert(
                    wrapper
                        .find('.next-slick-slide')
                        .at(len - 2)
                        .hasClass('next-slick-active')
                );
            });
        });

        it('should render with lazyLoad', () => {
            wrapper = mount(
                <Slider rtl lazyLoad infinite={false}>
                    {slides}
                </Slider>
            );

            assert(wrapper.find('.custom-slick-item').length === 3);
            wrapper.find('button.next-slick-next').simulate('click');
        });

        it('too more slidesToShow ', () => {
            return co(function* () {
                const settings = {
                    rtl: true,
                    slidesToShow: 2,
                    slidesToScroll: 10,
                    autoplaySpeed: 200,
                };
                wrapper = mount(<Slider {...settings}>{slides}</Slider>);
                yield delay(2000);
                assert(wrapper.find('.next-slick').length === 1);
            });
        });
    });
});
