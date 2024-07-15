import React from 'react';
import Slider from '../index';
import '../style';
import './index.scss';
import { testReact } from '../../util/__tests__/a11y/validate';

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

describe('Slider A11y', () => {
    it('should not have any violations', async () => {
        await testReact(<Slider>{slides}</Slider>);
    });

    it('should not have any violations for single slider', async () => {
        await testReact(
            <Slider>
                <div>single slider</div>
            </Slider>
        );
    });

    it('should not have any violations with lazyLoad', async () => {
        await testReact(
            <Slider lazyLoad infinite={false}>
                {slides}
            </Slider>
        );
    });

    it('should not have any violations in vertical mode', async () => {
        await testReact(<Slider dotsDirection="ver">{slides}</Slider>);
    });

    it('should not have any violations when set slideDirection', async () => {
        await testReact(<Slider slideDirection="ver">{slides}</Slider>);
    });

    it('should not have any violations in centerMode', async () => {
        const settings = {
            className: 'custom-slide center',
            centerMode: true,
            infinite: true,
            dots: false,
            arrowPosition: 'outer' as const,
            centerPadding: '60px',
            slidesToShow: 3,
        };
        await testReact(<Slider {...settings}>{multiSlides}</Slider>);
    });
});
