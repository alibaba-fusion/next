import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
import Slider from '../index';
import ReactTestUtils from 'react-dom/test-utils';
import '../style';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });
const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('Issue', () => {
    let dataSource = [
            { id: '1', name: 'test' },
            { id: '2', name: 'test2' },
        ],
        table,
        timeout,
        wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });
    it('should support scale', done => {
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

        ReactDOM.render(<App />, container, function () {
            setTimeout(() => {
                const sliderList = container.querySelectorAll('.next-slick-list');
                assert(sliderList[0].style.height === `${sliderList[0].clientHeight}px`);

                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 100);
        });
    });

    // https://github.com/alibaba-fusion/next/issues/4533
    it('should not affect index after calling onChange hook', async () => {
        const slides = [1, 2, 3, 4].map((item, index) => (
            <div key={index} className="custom-slick-item" style={{ width: '500px' }}>
                <h3>{item}</h3>
            </div>
        ));
        function DemoSlider() {
            const [idx, setIdx] = useState(0);
            const settings = {
                infinite: false,
                arrowPosition: 'outer',
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                onChange: function (index) {
                    setIdx(index);
                },
            };

            return <Slider {...settings}>{slides}</Slider>;
        }
        const root = document.createElement('div');
        document.body.appendChild(root);
        wrapper = mount(<DemoSlider />, { attachTo: root });

        const isIndexActive = index => {
            const el = root.querySelector(`.next-slick-slide[data-index="${index}"]`);
            return el && el.classList.contains('next-slick-active');
        };
        assert(isIndexActive(0));
        ReactTestUtils.Simulate.click(root.querySelector('.next-slick-next'));
        await delay(800);
        assert(isIndexActive(1));

        ReactTestUtils.Simulate.click(root.querySelector('.next-slick-next'));
        await delay(800);
        assert(isIndexActive(2));
    });

    it('The last element covers on top when the Slider component is set to fade effect,close #4710', async () => {
        const settings = {
            arrowPosition: 'outer',
            dots: false,
            animation: 'fade',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'custom-slide',
        };
        let i = 1;
        const root = document.createElement('div');
        document.body.appendChild(root);
        wrapper = mount(
            <Slider {...settings} >
                {[1, 2, 3, 4, 5, 6].map(function (d) {
                    return (
                        <div key={d}>
                            <h3
                                onClick={(e) => {
                                    assert(d === i);
                                }}
                            >
                                {d}
                            </h3>
                        </div>
                    );
                })}
            </Slider>,
            { attachTo: root }
        );
        ReactTestUtils.Simulate.click(root.querySelector('.next-slick-next'));
        await delay(800);
        i = 2;
        const element = root.querySelector('.next-slick-list');
        element.scrollIntoView()
        const boundingRect = element.getBoundingClientRect();
        const clientX = boundingRect.left + boundingRect.width / 2;
        const clientY = boundingRect.top + boundingRect.height / 2;

        const clickedElement = document.elementFromPoint(clientX, clientY);
        clickedElement.click();

    });
});
