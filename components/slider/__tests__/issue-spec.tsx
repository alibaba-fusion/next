import React, { useState } from 'react';
import Slider from '../index';
import '../style';

describe('Issue', () => {
    it('should support scale', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        class App extends React.Component {
            render() {
                return (
                    <div className="App2" style={{ transform: 'scale(0.5)' }}>
                        <Slider
                            autoplay={false}
                            slideDirection="ver"
                            slidesToShow={3}
                            slidesToScroll={1}
                            dots={false}
                            arrowPosition="inner"
                            arrowDirection="ver"
                            className="ver-slick"
                        >
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <div key={index} className="custom-slider">
                                    <div
                                        style={{
                                            background: '#4f74b3',
                                            color: '#fff',
                                            lineHeight: '100px',
                                            textAlign: 'center',
                                            fontSize: '36px',
                                            boxSizing: 'border-box',
                                            marginTop: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            }
        }
        cy.mount(<App />);
        cy.then(() => {
            const sliderList = document.querySelectorAll<HTMLElement>('.next-slick-list');
            expect(sliderList[0].style.height).to.equal(`${sliderList[0].clientHeight}px`);
        });
    });

    // https://github.com/alibaba-fusion/next/issues/4533
    it('should not affect index after calling onChange hook', () => {
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));
        function DemoSlider() {
            const [idx, setIdx] = useState(0);
            const settings = {
                infinite: false,
                arrowPosition: 'outer' as const,
                dots: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                waitForAnimate: false,
                onChange: function (index: number) {
                    setIdx(index);
                },
            };

            return <Slider {...settings}>{slides}</Slider>;
        }
        cy.mount(<DemoSlider />);
        cy.get('.next-slick-slide[data-index="0"]').should('have.class', 'next-slick-active');
        cy.get('.next-slick-next').click({ force: true });
        cy.get('.next-slick-slide[data-index="1"]', { timeout: 800 }).should(
            'have.class',
            'next-slick-active'
        );
        cy.get('.next-slick-next').click({ force: true });
        cy.get('.next-slick-slide[data-index="2"]', { timeout: 800 }).should(
            'have.class',
            'next-slick-active'
        );
    });

    it('The last element covers on top when the Slider component is set to fade effect,close #4710', () => {
        const settings = {
            arrowPosition: 'outer' as const,
            dots: false,
            animation: 'fade',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'custom-slide',
        };
        const clickSpy = cy.spy().as('onClick');
        cy.mount(
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6].map(function (d) {
                    return (
                        <div key={d}>
                            <h3 onClick={clickSpy}>{d}</h3>
                        </div>
                    );
                })}
            </Slider>
        );
        cy.get('.next-slick-next').click({ force: true });
        cy.get('.next-slick-list', { timeout: 800 }).then($element => {
            const element = $element[0];
            element.scrollIntoView();
            const boundingRect = element.getBoundingClientRect();
            const clientX = boundingRect.left + boundingRect.width / 2;
            const clientY = boundingRect.top + boundingRect.height / 2;

            const clickedElement = document.elementFromPoint(clientX, clientY);
            cy.wrap(clickedElement).click({ force: true });
            cy.wrap(clickedElement).should('have.text', '2');
            cy.get('@onClick').should('have.been.called');
        });
    });
});
