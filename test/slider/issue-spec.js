import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
import Slider from '../../src/slider/index';
import '../../src/slider/style.js';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

describe('Issue', () => {
    let dataSource = [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }],
        table,
        timeout,
        wrapper;

    it('should support scale', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        class App extends React.Component {
            render() {
                return (
                    <div className="App2" style={{transform: 'scale(0.5)'}}>
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
                                    <div style={{
                                        background: '#4f74b3',
                                        color: '#fff',
                                        lineHeight: '100px',
                                        textAlign: 'center',
                                        fontSize: '36px',
                                        boxSizing: 'border-box',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                    }}>{item}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            }
        }

        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                const sliderList = container.querySelectorAll('.next-slick-list');
                assert(sliderList[0].style.height === `${sliderList[0].clientHeight}px`);

                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 100);
        });
    });
});
