import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from '../../src/slider/index';
import '../../src/slider/style';
import './index.scss';
import { unmount, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });

const slides = [1, 2, 3, 4].map((item, index) => (
    <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
        <h3>{item}</h3>
    </div>
));

const multiSlides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
    <div key={item}>
        <h3>{item}</h3>
    </div>
));
/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Slider A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <div>
                <Slider>{slides}</Slider>
            </div>
        );
        return wrapper;
    });

    it('should render single slider', async () => {
        wrapper = await testReact(
            <Slider>
                <div>single slider</div>
            </Slider>
        );
        return wrapper;
    });

    it('should render with lazyLoad', async () => {
        wrapper = await testReact(
            <Slider lazyLoad infinite={false}>
                {slides}
            </Slider>
        );
        return wrapper;
    });

    it('using vertical deprecated', async () => {
        wrapper = await testReact(
            <Slider dotsDirection="ver">{slides}</Slider>
        );
        return wrapper;
    });

    it('using slideDirection', async () => {
        wrapper = await testReact(
            <Slider slideDirection="ver">{slides}</Slider>
        );
        return wrapper;
    });

    it('should centerMode', async () => {
        const settings = {
            className: 'custom-slide center',
            centerMode: true,
            infinite: true,
            dots: false,
            arrowPosition: 'outer',
            centerPadding: '60px',
            slidesToShow: 3,
        };
        wrapper = await testReact(<Slider {...settings}>{multiSlides}</Slider>);
        return wrapper;
    });

    it('too more slidesToShow ', async () => {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 10,
            autoplaySpeed: 200,
        };
        wrapper = await testReact(<Slider {...settings}>{multiSlides}</Slider>);
        return wrapper;
    });
});
