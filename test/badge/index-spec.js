import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import co from 'co';
import { support } from '../../src/util';
import Badge from '../../src/badge';
import '../../src/badge/style.js';

Enzyme.configure({ adapter: new Adapter() });
// import util from '../../src/util';

describe('Badge', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Badge />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it("should have next-badge-not-a-wrapper class if don't pass children", () => {
        let badge = wrapper.find('.next-badge');
        assert(badge.hasClass('next-badge-not-a-wrapper'));
        badge = wrapper.setProps({ children: <a>some link</a> });
        assert(!badge.hasClass('next-badge-not-a-wrapper'));
    });

    it('should receive className prop', () => {
        wrapper.setProps({ className: 'custom' });
        const badge = wrapper.find('.next-badge');
        assert(badge.hasClass('custom'));
    });

    it('should receive style prop', () => {
        wrapper.setProps({ dot: true, style: { color: 'red' } });
        assert(wrapper.find('sup').prop('style').color === 'red');
    });

    it('should render by dot and align', () => {
        wrapper.setProps({ dot: true });
        assert(wrapper.find('sup').hasClass('next-badge-dot'));
        wrapper.setProps({ align: 'left' });
        // assert(wrapper.find('sup').hasClass('next-badge-dot-left'));
        assert(wrapper.find('.next-badge').prop('align') === 'left');
    });

    it('should receive content prop', () => {
        wrapper.setProps({ content: 'hot' });
        assert(wrapper.find('sup').hasClass('next-badge-custom'));
        assert(wrapper.find('sup').text() === 'hot');
    });

    class Test extends React.Component {
        state = {
            count: 0,
        };

        handleKeyDown(e) {
            this.setState({
                count: parseInt(e.target.value, 10),
            });
        }

        render() {
            return (
                <div>
                    <input id="input" onKeyDown={::this.handleKeyDown} />
                    <Badge count={this.state.count} />
                </div>
            );
        }
    }
    const expectStyle = (number, removeTransition, position) => {
        const style = number.style;
        const transformTo = position * 16;
        if (support.animation) {
            const expectTransition = transition => {
                // compatible firefox
                if (removeTransition) {
                    return transition === 'none' || 'none 0s ease 0s';
                }
                return (
                    transition ===
                        'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)' ||
                    'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
                );
            };
            return (
                expectTransition(style.transition) &&
                style.transform === `translateY(-${transformTo}px)` &&
                style.WebkitTransform === `translateY(-${transformTo}px)`
            );
        }

        return parseInt(style.top, 10) === -transformTo;
    };
    const delay = time => new Promise(resolve => setTimeout(resolve, time));

    it('should render by count part one', () => {
        return co(function*() {
            const div = document.createElement('div');
            document.body.appendChild(div);

            ReactDOM.render(<Test />, div);
            const enterNumber = num => {
                const input = document.querySelector('#input');
                input.value = num.toString();
                ReactTestUtils.Simulate.keyDown(input, {
                    key: 'Enter',
                    keyCode: 13,
                    which: 13,
                });
            };

            assert(document.querySelector('.next-badge sup') === null);

            enterNumber(1);
            assert(
                expectStyle(
                    document.querySelector(
                        '.next-badge .next-badge-scroll-number-only'
                    ),
                    true,
                    11
                )
            );

            enterNumber(2);
            assert(
                expectStyle(
                    document.querySelector(
                        '.next-badge .next-badge-scroll-number-only'
                    ),
                    false,
                    12
                )
            );
            yield delay(350);
            assert(
                expectStyle(
                    document.querySelector(
                        '.next-badge .next-badge-scroll-number-only'
                    ),
                    true,
                    12
                )
            );

            enterNumber(1);
            assert(
                expectStyle(
                    document.querySelector(
                        '.next-badge .next-badge-scroll-number-only'
                    ),
                    true,
                    11
                )
            );
            yield delay(350);

            enterNumber(0);
            yield delay(350);
            assert(document.querySelector('.next-badge sup') === null);

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        });
    });

    it('should render by count part two', () => {
        return co(function*() {
            const div = document.createElement('div');
            document.body.appendChild(div);

            ReactDOM.render(<Test />, div);
            const enterNumber = num => {
                const input = document.querySelector('#input');
                input.value = num.toString();
                ReactTestUtils.Simulate.keyDown(input, {
                    key: 'Enter',
                    keyCode: 13,
                    which: 13,
                });
            };

            enterNumber(9);
            yield delay(350);
            enterNumber(10);
            assert(
                expectStyle(
                    document.querySelectorAll(
                        '.next-badge .next-badge-scroll-number-only'
                    )[0],
                    false,
                    11
                )
            );
            assert(
                expectStyle(
                    document.querySelectorAll(
                        '.next-badge .next-badge-scroll-number-only'
                    )[1],
                    true,
                    20
                )
            );

            enterNumber(9);
            assert(
                expectStyle(
                    document.querySelectorAll(
                        '.next-badge .next-badge-scroll-number-only'
                    )[0],
                    false,
                    9
                )
            );
            yield delay(350);

            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        });
    });

    it('should render by overflowCount', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        ReactDOM.render(<Test />, div);
        const enterNumber = num => {
            const input = document.querySelector('#input');
            input.value = num.toString();
            ReactTestUtils.Simulate.keyDown(input, {
                key: 'Enter',
                keyCode: 13,
                which: 13,
            });
        };

        enterNumber(100);
        assert(document.querySelector('.next-badge sup').innerHTML === '99+');

        enterNumber(99);
        assert(
            expectStyle(
                document.querySelectorAll(
                    '.next-badge .next-badge-scroll-number-only'
                )[0],
                false,
                9
            )
        );
        assert(
            expectStyle(
                document.querySelectorAll(
                    '.next-badge .next-badge-scroll-number-only'
                )[1],
                false,
                9
            )
        );

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });
});
