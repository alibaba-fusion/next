import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Icon from '../../src/icon';
import Slider from '../../src/slider/index';
import './index.scss';

/* eslint-disable */

Enzyme.configure({ adapter: new Adapter() });

function useFakeTimers() {
    const timer = sinon.useFakeTimers();
    performance.mark = () => void 0;
    performance.clearMarks = () => void 0;
    performance.measure = () => void 0;
    performance.clearMeasures = () => void 0;
    return timer;
}

describe('slider', function() {
    this.timeout(0);

    describe('render', () => {
        let wrapper, clock;
        const slides = [1, 2, 3, 4].map((item, index) => <div key={index} className="custom-slick-item" style={{ width: '500px' }}><h3>{item}</h3></div>);
        clock = useFakeTimers();

        afterEach(() => {
            const prevWrapper = wrapper;
            clock.restore();
            if (prevWrapper) {
                setTimeout(() => prevWrapper.unmount());
                wrapper = null;
            }
        });

        it('should basic render', () => {
            const wrapper = shallow(<Slider>{slides}</Slider>);
            assert(wrapper.props().arrowSize === 'medium');
            assert(wrapper.props().arrowPosition === 'inner');
            assert(wrapper.props().arrowDirection === 'hoz');
        });

        it('should render single slider', () => {
            const wrapper = mount(<Slider><div>single slider</div></Slider>);
            assert(wrapper.find('.next-slick-arrow').length === 0);
            assert(wrapper.find('.next-slick-dots').length === 0);
        });

        it('should render with lazyLoad', () => {
            const wrapper = mount(<Slider lazyLoad infinite={false}>{slides}</Slider>);
            assert(wrapper.find('.custom-slick-item').length === 1);
        })

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
        })

        it('infinite', () => {
            wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-arrow.disabled').length === 1);
        });

        it('should slickGoTo', () => {
            wrapper = mount(<Slider infinite={false} activeIndex={0}>{slides}</Slider>);
            wrapper.setProps({ activeIndex: 2 });
            assert(wrapper.find('.next-slick-slide').at(2).hasClass('next-slick-active'));
        });

        it('should autoplay', () => {
            clock = useFakeTimers();
            wrapper = mount(<Slider infinite={false} autoplay autoplaySpeed={200}>{slides}</Slider>);
            clock.tick(300);
            wrapper.update();
            assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
        });

        it('should fade', () => {
            clock = useFakeTimers();
            wrapper = mount(<Slider infinite={false} animation="fade" autoplay autoplaySpeed={200}>{slides}</Slider>);
            clock.tick(300);
            wrapper.update();
            assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
            // assert(wrapper.find('.next-slick-slide').at(1).node.style.position === 'relative');
        });

        it('should render with custom arrow', () => {
            const arrowStyle = {
                display: 'block',
                background: 'red',
                opacity: 1,
                margin: '0 20px',
            };

            const CustomNextArrow = (props) => {
                return <div {...props} style={arrowStyle} className="test-classname-right"><Icon type="arrow-double-right" /></div>;
            };

            const CustomPrevArrow = (props) => {
                return <div {...props} style={arrowStyle} className="test-classname-left"><Icon type="arrow-double-left" /></div>;
            };

            wrapper = mount(<Slider nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />}>{slides}</Slider>);
            assert(wrapper.find('.test-classname-right').length === 1);
            assert(wrapper.find('.test-classname-left').length === 1);
        });

        it('should rtl', () => {
            wrapper = mount(<Slider rtl infinite={false}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-slide').at(3).hasClass('next-slick-active'));
        });
    });

    describe('render multiple', () => {
        let wrapper;
        const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <div key={item}><h3>{item}</h3></div>);

        beforeEach(() => {

        });

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
            }
            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            assert(wrapper.find('.next-slick').length === 1);
        });

        it('too more slidesToShow ', () => {
            const clock = useFakeTimers();
            const settings = {
                slidesToShow: 5,
                slidesToScroll: 10,
                autoplaySpeed: 200,
            }
            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            clock.tick(2000);
            assert(wrapper.find('.next-slick').length === 1);
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

            wrapper = mount(<Slider {...settings}>
                <div style={{ width: 100 }}><p>100</p></div>
                <div style={{ width: 200 }}><p>200</p></div>
                <div style={{ width: 75 }}><p>75</p></div>
                <div style={{ width: 300 }}><p>300</p></div>
                <div style={{ width: 225 }}><p>225</p></div>
            </Slider>);

            assert(wrapper.find('.next-slick-center').length === 2);
        });
    });

    describe('action', () => {
        let wrapper, clock;
        const slides = [1, 2, 3, 4].map(item => <div key={item}><h3>{item}</h3></div>);

        beforeEach(() => {
            clock = useFakeTimers();
        });

        afterEach(() => {
            const prevWrapper = wrapper;
            clock.restore();
            if (prevWrapper) {
                setTimeout(() => prevWrapper.unmount());
                wrapper = null;
            }
        });

        it('should click next/prev arrow', () => {
            wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
            clock.tick(100);
            assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
            wrapper.find('.next-slick-arrow .next-slick-next').simulate('click');
            clock.tick(300);
            assert(wrapper.find('.next-slick-slide').at(1).hasClass('next-slick-active'));
            wrapper.find('.next-slick-prev').simulate('click');
        });

        it('should hover next/prev arrow', () => {
            wrapper = mount(<Slider infinite={false}>{slides}</Slider>);

            wrapper.find('.next-slick-arrow .next-slick-next').simulate('mouseEnter');
            clock.tick(300);
            wrapper.find('.next-slick-arrow .next-slick-next').simulate('mouseLeave');

            wrapper.find('.next-slick-arrow .next-slick-prev').simulate('mouseEnter');
            clock.tick(300);
            wrapper.find('.next-slick-arrow .next-slick-prev').simulate('mouseLeave');

            assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
        });

        it('should click dots', () => {
            wrapper = mount(<Slider infinite={false}>{slides}</Slider>);
            assert(wrapper.find('.next-slick-slide').at(0).hasClass('next-slick-active'));
            wrapper.find('.next-slick-dots-item button').at(2).simulate('click');
            clock.tick(300);
            assert(wrapper.find('.next-slick-dots-item').at(2).hasClass('active'));
            assert(wrapper.find('.next-slick-slide').at(2).hasClass('next-slick-active'));
        });

        it('should call onChange hook', () => {
            const settings = {
                infinite: false,
                onChange: (index) => {
                    assert(index === 1);
                }
            }

            wrapper = mount(<Slider {...settings}>{slides}</Slider>);
            wrapper.find('.next-slick-arrow .next-slick-next').simulate('click');
        });
    });
});
