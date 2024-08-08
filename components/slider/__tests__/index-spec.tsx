import React, { type HTMLAttributes } from 'react';
import Icon from '../../icon';
import Slider from '../index';
import './index.scss';
import ConfigProvider from '../../config-provider';
import '../style';

describe('slider', function () {
    this.timeout(0);

    describe('render', () => {
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));

        it('should not show render', () => {
            cy.mount(<Slider />);
            cy.get('.next-slick').should('have.length', 0);
        });

        it('should render single slider', () => {
            cy.mount(
                <Slider>
                    <div>single slider</div>
                </Slider>
            );
            cy.get('.next-slick-slide').should('exist');
            cy.get('.next-slick-arrow').should('have.length', 0);
            cy.get('.next-slick-dots').should('have.length', 0);
        });

        it('should ConfigProvider work', () => {
            cy.mount(
                <ConfigProvider prefix="ddd-">
                    <Slider>
                        <Icon type="account" />
                    </Slider>
                </ConfigProvider>
            );
            cy.get('.ddd-icon-account').should('exist');
        });

        it('should render dots', () => {
            cy.mount(
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
            cy.get('.next-slick-dots').should('exist');
            cy.get('.my-dots').should('have.length', 4);
        });

        it('should render with lazyLoad', () => {
            cy.mount(
                <Slider lazyLoad infinite={false}>
                    {slides}
                </Slider>
            );
            cy.get('.custom-slick-item').should('have.length', 3);
        });

        it('using prefixCls deprecated', () => {
            cy.mount(<Slider prefix="seu-">{slides}</Slider>);
            cy.get('.seu-slick').should('have.length', 1);
        });

        it('using vertical deprecated', () => {
            cy.mount(<Slider dotsDirection="ver">{slides}</Slider>);
            cy.get('.next-slick-dots.ver').should('have.length', 1);
        });

        it('using slideDirection', () => {
            cy.mount(<Slider slideDirection="ver">{slides}</Slider>);
            cy.get('.next-slick-ver').should('have.length', 1);
        });

        it('infinite', () => {
            cy.mount(<Slider infinite={false}>{slides}</Slider>);
            cy.get('.next-slick-arrow.disabled').should('have.length', 1);
        });

        it('should slickGoTo', () => {
            cy.mount(
                <Slider infinite={false} activeIndex={0}>
                    {slides}
                </Slider>
            ).as('Slider');
            cy.rerender('Slider', {
                activeIndex: 2,
            });
            cy.get('.next-slick-slide').eq(2).should('have.class', 'next-slick-active');
        });

        it('should autoplay', () => {
            cy.mount(
                <Slider infinite={false} autoplay autoplaySpeed={200}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide', { timeout: 300 })
                .eq(1)
                .should('have.class', 'next-slick-active');
        });

        it('should fade', () => {
            cy.mount(
                <Slider infinite={false} animation="fade" autoplay autoplaySpeed={200}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide', { timeout: 300 })
                .eq(1)
                .should('have.class', 'next-slick-active');
        });

        it('should render with custom arrow', () => {
            const arrowStyle = {
                display: 'block',
                background: 'red',
                opacity: 1,
                margin: '0 20px',
            };

            const CustomNextArrow = (props: HTMLAttributes<HTMLDivElement>) => {
                return (
                    <div {...props} style={arrowStyle} className="test-classname-right">
                        <Icon type="arrow-double-right" />
                    </div>
                );
            };

            const CustomPrevArrow = (props: HTMLAttributes<HTMLDivElement>) => {
                return (
                    <div {...props} style={arrowStyle} className="test-classname-left">
                        <Icon type="arrow-double-left" />
                    </div>
                );
            };

            cy.mount(
                <Slider nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />}>
                    {slides}
                </Slider>
            );
            cy.get('.test-classname-right').should('have.length', 1);
            cy.get('.test-classname-left').should('have.length', 1);
        });

        it('should rtl', () => {
            cy.mount(
                <Slider rtl infinite={false}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide').eq(3).should('have.class', 'next-slick-active');
        });
    });

    describe('render multiple', () => {
        const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <div key={item}>
                <h3>{item}</h3>
            </div>
        ));

        it('should centerMode', () => {
            const settings = {
                className: 'custom-slide center',
                centerMode: true,
                infinite: true,
                dots: false,
                arrowPosition: 'outer' as const,
                centerPadding: '60px',
                slidesToShow: 3,
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick-center').should('have.length', 2);
        });

        it('should centerMode and not infinite', () => {
            const settings = {
                className: 'custom-slide center',
                centerMode: true,
                infinite: false,
                dots: false,
                arrowPosition: 'outer' as const,
                centerPadding: '60px',
                slidesToShow: 3,
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick-center').should('have.length', 1);
        });

        it('should infinite', () => {
            const settings = {
                slidesToShow: 3,
                slidesToScroll: 2,
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick').should('have.length', 1);
        });

        it('too more slidesToShow ', () => {
            const settings = {
                slidesToShow: 5,
                slidesToScroll: 10,
                autoplaySpeed: 200,
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick', { timeout: 2000 }).should('have.length', 1);
        });

        it('should variableWidth', () => {
            const settings = {
                className: 'custom-slide variable-width',
                arrowPosition: 'outer' as const,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                centerMode: true,
            };

            cy.mount(
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
            cy.get('.next-slick-center').should('have.length', 2);
        });
    });

    describe('action', () => {
        const slides = [1, 2, 3, 4].map(item => (
            <div key={item}>
                <h3>{item}</h3>
            </div>
        ));

        it('should click next/prev arrow', () => {
            cy.mount(
                <Slider infinite={false} waitForAnimate={false}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide').eq(0).should('have.class', 'next-slick-active');
            cy.get('.next-slick-arrow.next-slick-next').click({ force: true });
            cy.get('.next-slick-slide', { timeout: 300 })
                .eq(1)
                .should('have.class', 'next-slick-active');
            cy.get('.next-slick-prev').click({ force: true });
            cy.get('.next-slick-slide', { timeout: 300 })
                .eq(0)
                .should('have.class', 'next-slick-active');
        });

        it('should have correct disabled class for next/prev arrow', () => {
            cy.mount(
                <Slider infinite={false} defaultActiveIndex={2} slidesToShow={5}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-arrow.next-slick-next').eq(0).should('have.class', 'disabled');
            cy.get('.next-slick-arrow.next-slick-prev').eq(0).should('not.have.class', 'disabled');
        });

        it('should hover next/prev arrow', () => {
            cy.mount(<Slider infinite={false}>{slides}</Slider>);
            cy.get('.next-slick-arrow.next-slick-next').trigger('mouseover', { force: true }); // React 的 mouseEnter 事件是通过监听 mouseover 实现的
            cy.get('.next-slick-arrow.next-slick-next', { timeout: 300 }).trigger('mouseout', {
                force: true,
            }); // React 的 mouseLeave 事件是通过监听 mouseout 实现的
            cy.get('.next-slick-arrow.next-slick-prev').trigger('mouseover', { force: true });
            cy.get('.next-slick-arrow.next-slick-prev', { timeout: 300 }).trigger('mouseout', {
                force: true,
            });
            cy.get('.next-slick-slide').eq(0).should('have.class', 'next-slick-active');
        });

        it('should click dots', () => {
            cy.mount(<Slider infinite={false}>{slides}</Slider>);
            cy.get('.next-slick-slide').eq(0).should('have.class', 'next-slick-active');
            cy.get('.next-slick-dots-item button').eq(2).click();
            cy.get('.next-slick-dots-item', { timeout: 300 }).eq(2).should('have.class', 'active');
            cy.get('.next-slick-slide').eq(2).should('have.class', 'next-slick-active');
        });

        it('should call onChange onBeforeChange hook', () => {
            const settings = {
                infinite: false,
                onChange: cy.spy().as('onChange'),
                onBeforeChange: cy.spy().as('onBeforeChange'),
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick-arrow.next-slick-next').click({ force: true });
            cy.get('@onBeforeChange').should('have.been.calledWith', 0, 1);
            cy.get('@onChange').should('have.been.calledWith', 1);
        });

        it('should adaptiveHeight', () => {
            cy.mount(
                <Slider adaptiveHeight dotsDirection="ver" slideDirection="ver" activeIndex={0}>
                    <div className="slider-item" key={1}>
                        111111
                    </div>
                    <div className="slider-item" key={2}>
                        公告：22222222222222222222
                        领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问
                        1111
                        史区领量小压海两五车她第满何感手变反称类际般一还提电要根已构议我较适术次业提九的本消除权作反一分展里较济选体被能住问。工从引然所国引极二间响他两周消广放济候办片提广起两有动书断化管千积争擦到了传达了查看；
                    </div>
                    <div className="slider-item" key={3}>
                        3333
                    </div>
                    <div className="slider-item" key={4}>
                        44444444444
                    </div>
                </Slider>
            ).as('Slider');
            cy.rerender('Slider', {
                activeIndex: 2,
            });
            cy.then(() => {
                const slides = document.querySelectorAll<HTMLElement>('.next-slick-slide');
                const height1 = Math.ceil(slides[0].getBoundingClientRect().height);
                const height2 = Math.ceil(slides[1].getBoundingClientRect().height);
                const height3 = Math.ceil(slides[2].getBoundingClientRect().height);
                const newHeight = height1 + height2 + height3;
                const transform =
                    document.querySelector<HTMLElement>('.next-slick-track')?.style.transform;
                expect(transform).to.equal(`translate3d(0px, ${-newHeight}px, 0px)`);
            });
        });
    });

    describe('action rtl', () => {
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));

        it('should click next/prev arrow', () => {
            cy.mount(
                <Slider rtl infinite={false} waitForAnimate={false}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide')
                .its('length')
                .then(length => {
                    cy.get('.next-slick-slide')
                        .eq(length - 1)
                        .should('have.class', 'next-slick-active');
                    cy.get('.next-slick-arrow.next-slick-prev').click({ force: true });
                    cy.get('.next-slick-slide', { timeout: 300 })
                        .eq(length - 2)
                        .should('have.class', 'next-slick-active');
                    cy.get('.next-slick-prev').click({ force: true });
                    cy.get('.next-slick-slide', { timeout: 300 })
                        .eq(length - 3)
                        .should('have.class', 'next-slick-active');
                });
        });

        it('should hover next/prev arrow', () => {
            cy.mount(
                <Slider rtl infinite={false}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide')
                .its('length')
                .then(length => {
                    cy.get('.next-slick-arrow.next-slick-prev').trigger('mouseover', {
                        force: true,
                    });
                    cy.get('.next-slick-arrow.next-slick-prev', { timeout: 300 }).trigger(
                        'mouseout',
                        { force: true }
                    );
                    cy.get('.next-slick-arrow.next-slick-next').trigger('mouseover', {
                        force: true,
                    });
                    cy.get('.next-slick-arrow.next-slick-next', { timeout: 300 }).trigger(
                        'mouseout',
                        { force: true }
                    );
                    cy.get('.next-slick-slide')
                        .eq(length - 1)
                        .should('have.class', 'next-slick-active');
                });
        });

        it('should click dots', () => {
            cy.mount(<Slider infinite={false}>{slides}</Slider>);
            cy.get('.next-slick-slide').eq(0).should('have.class', 'next-slick-active');
            cy.get('.next-slick-dots-item button').eq(2).click();
            cy.get('.next-slick-dots-item', { timeout: 300 }).eq(2).should('have.class', 'active');
            cy.get('.next-slick-slide').eq(2).should('have.class', 'next-slick-active');
        });

        it('should call onChange hook', () => {
            const settings = {
                onChange: cy.spy().as('onChange'),
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick-arrow.next-slick-next').click({ force: true });
            cy.get('@onChange').should('have.been.calledWith', 1);
        });

        it('should autoplay', () => {
            cy.mount(
                <Slider rtl autoplay infinite={false} autoplaySpeed={200}>
                    {slides}
                </Slider>
            );
            cy.get('.next-slick-slide', { timeout: 300 })
                .its('length')
                .then(length => {
                    cy.get('.next-slick-slide')
                        .eq(length - 2)
                        .should('have.class', 'next-slick-active');
                });
        });

        it('should render with lazyLoad', () => {
            cy.mount(
                <Slider rtl lazyLoad infinite={false}>
                    {slides}
                </Slider>
            );
            cy.get('.custom-slick-item').should('have.length', 3);
            cy.get('button.next-slick-next').click({ force: true });
            cy.get('.custom-slick-item').should('exist');
        });

        it('too more slidesToShow ', () => {
            const settings = {
                rtl: true,
                slidesToShow: 2,
                slidesToScroll: 10,
                autoplaySpeed: 200,
            };
            cy.mount(<Slider {...settings}>{slides}</Slider>);
            cy.get('.next-slick', { timeout: 2000 }).should('have.length', 1);
        });
    });
});
