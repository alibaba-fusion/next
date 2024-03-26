import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import { setTimeout } from 'timers';
import Rating from '../index';
import '../style';
import { KEYCODE } from '../../util';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Rating', () => {
    describe('render', () => {
        let wrapper, parent;

        beforeEach(() => {
            wrapper = mount(<Rating defaultValue={3.3} />);

            parent = document.createElement('div');
            document.body.appendChild(parent);
        });

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;

            document.body.removeChild(parent);
            parent = null;
        });

        it('should render correct when value < min value', () => {
            ReactDOM.render(<Rating value={-1} id="render-test-0" />, parent);
            // 16 x 0 + 4 x (0 + 1) = 0 + 4 = 4
            assert(
                document.querySelectorAll('#render-test-0 .next-rating-overlay')[0].style.width <=
                    '4px'
            );
        });

        it('should render correct rating', () => {
            ReactDOM.render(<Rating value={3} id="render-test-1" />, parent);

            // 16 x 3 + 4 x (3 + 1) = 48 + 16 = 64
            assert(
                document.querySelectorAll('#render-test-1 .next-rating-overlay')[0].style.width ===
                    '64px'
            );
        });

        it('should render correct when value > count', () => {
            ReactDOM.render(<Rating value={6} id="render-test-2" />, parent);

            // 16 x 5 + 4 x (5 + 1) = 80 + 24 = 104
            assert(
                parseInt(
                    document.querySelectorAll('#render-test-2 .next-rating-overlay')[0].style.width
                ) >= 104
            );
        });

        it('should render with different types', () => {
            // 覆盖componentWillReceiveProps的setState
            wrapper.setProps({ value: 3.3 });
            wrapper.setProps({ showGrade: true });
            assert(wrapper.find('.next-rating-grade-high').length === 1);
        });
    });

    describe('action', () => {
        let ret, hval, parent, rect, onChange, onHoverChange;

        beforeEach(() => {
            ret = -1;
            hval = -1;
            parent = document.createElement('div');
            document.body.appendChild(parent);
            onChange = function (val) {
                return (ret = val);
            };
            onHoverChange = function (val) {
                return (hval = val);
            };
        });

        afterEach(() => {
            document.body.removeChild(parent);
            parent = null;
            rect = null;
            onChange = null;
            onHoverChange = null;
        });

        it('should be controlled ', () => {
            ReactDOM.render(<Rating value={3} onChange={onChange} id="action-test-0" />, parent);
            rect = document.querySelectorAll('#action-test-0')[0].getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-0 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 1);
            assert(
                document.querySelectorAll('#action-test-0 .next-rating-overlay')[0].style.width ===
                    '64px'
            );
        });

        it('should trigger click event', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-1 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 1);
        });

        it('should allowClear={false} work', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-1 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 1);

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 1);
        });

        it('should allowClear={true} work', () => {
            ReactDOM.render(
                <Rating allowClear defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-1 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 1);

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 0);
        });

        it('should trigger click event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-1 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left + 1000,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === 5);
        });

        it('should trigger mouse event', done => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-2" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-2 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-2 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            setTimeout(() => {
                // 16 x 1 + 4 x (1 + 1) = 24
                assert(
                    document.querySelectorAll('#action-test-2 .next-rating-overlay')[0].style
                        .width === '24px'
                );
                done();
            }, 200);
        });

        it('should trigger mouse event when allow half', done => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-3" allowHalf />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-3 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-3 .next-rating-base')[0],
                {
                    pageX: rect.left + 2,
                    pageY: rect.top + 8,
                }
            );

            setTimeout(() => {
                // 16 * 0.5 + 4 x (0 + 1) = 12
                assert(
                    document.querySelectorAll('#action-test-3 .next-rating-overlay')[0].style
                        .width === '12px'
                );
                done();
            }, 200);
        });

        it('should trigger twice mouse over', done => {
            ReactDOM.render(<Rating defaultValue={3} id="action-test-4" />, parent);
            rect = document
                .querySelectorAll('#action-test-4 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-4 .next-rating-base')[0],
                {
                    pageX: rect.left + 4,
                    pageY: rect.top + 8,
                }
            );

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-4 .next-rating-base')[0],
                {
                    pageX: rect.left + 48,
                    pageY: rect.top + 8,
                }
            );

            setTimeout(() => {
                assert(
                    document.querySelectorAll('#action-test-4 .next-rating-overlay')[0].style
                        .width === '64px'
                );
                done();
            }, 300);
        });

        it('should trigger mouse leave', done => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-5" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-5 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-5 .next-rating-base')[0],
                {
                    pageX: rect.left + 4,
                    pageY: rect.top + 8,
                }
            );
            ReactTestUtils.Simulate.mouseLeave(
                document.querySelectorAll('#action-test-5 .next-rating-base')[0]
            );

            setTimeout(() => {
                // 16 x 3 + 4 x (3 + 1) = 48 + 16 = 64
                assert(
                    document.querySelectorAll('#action-test-5 .next-rating-overlay')[0].style
                        .width === '64px'
                );
                done();
            }, 100);
        });

        it('should render disabled rating', () => {
            ReactDOM.render(
                <Rating value={3} disabled onChange={onChange} id="action-test-6" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-6 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-6 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === -1);
            assert(
                document.querySelectorAll('#action-test-6 .next-rating-overlay')[0].style.width ===
                    '64px'
            );
        });

        it('should render readonly rating', () => {
            ReactDOM.render(
                <Rating value={3} readOnly onChange={onChange} id="action-test-6" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-6 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-6 .next-rating-base')[0],
                {
                    pageX: rect.left + 8,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === -1);
            assert(
                document.querySelectorAll('#action-test-6 .next-rating-overlay')[0].style.width ===
                    '64px'
            );
        });

        it('should renderPreview', () => {
            ReactDOM.render(
                <Rating
                    defaultValue={3}
                    onChange={onChange}
                    isPreview
                    id="action-preview"
                    renderPreview={() => 'preview rating'}
                />,
                parent
            );

            assert(document.querySelectorAll('#action-preview')[0].innerText === 'preview rating');
        });

        it('should trigger mouse over', done => {
            ReactDOM.render(<Rating id="action-test-7" onHoverChange={onHoverChange} />, parent);
            rect = document
                .querySelectorAll('#action-test-7 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-7 .next-rating-base')[0],
                {
                    pageX: rect.left + 4,
                    pageY: rect.top + 8,
                }
            );

            ReactTestUtils.Simulate.mouseOver(
                document.querySelectorAll('#action-test-7 .next-rating-base')[0],
                {
                    pageX: rect.left + 48,
                    pageY: rect.top + 8,
                }
            );

            setTimeout(() => {
                assert(hval === 3);
                done();
            }, 300);
        });

        it('should trigger keyboard right event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.RIGHT });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 4);
        });

        it('should trigger keyboard left event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.LEFT });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 2);
        });

        it('should trigger keyboard down event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.DOWN });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 4);
        });

        it('should trigger keyboard up event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.UP });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 2);
        });

        it('should ignore unsupported keyboard event correct', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.SPACE });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 3);
        });

        it('should trigger keyboard left event correct when value is 0', () => {
            ReactDOM.render(
                <Rating defaultValue={0} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.LEFT });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 5);
        });

        it('should trigger keyboard right event correct when value is the count of rating', () => {
            ReactDOM.render(
                <Rating defaultValue={5} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document.querySelector('#action-test-1');
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.RIGHT });
            ReactTestUtils.Simulate.keyDown(rect, { keyCode: KEYCODE.ENTER });

            assert(ret === 1);
        });

        it('should behave correct when click outside rating', () => {
            ReactDOM.render(
                <Rating defaultValue={3} onChange={onChange} id="action-test-1" />,
                parent
            );
            rect = document
                .querySelectorAll('#action-test-1 .next-rating-icon')[0]
                .getBoundingClientRect();

            ReactTestUtils.Simulate.click(
                document.querySelectorAll('#action-test-1 .next-rating-base')[0],
                {
                    pageX: rect.left - 1000,
                    pageY: rect.top + 8,
                }
            );

            assert(ret === -1);
        });

        it('should support rtl', () => {
            const wrapper = mount(
                <Rating rtl defaultValue={3} onChange={onChange} id="action-test-1" />
            );
            assert(wrapper.find('.next-rating').props().dir === 'rtl');
        });

        it('should support rtl in half mode', () => {
            const wrapper = mount(
                <Rating rtl allowHalf defaultValue={3} onChange={onChange} id="action-test-1" />
            );
            assert(wrapper.find('.next-rating').props().dir === 'rtl');
        });
    });
});
