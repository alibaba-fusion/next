import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import simulateEvent from 'simulate-event';
import assert from 'power-assert';
import sinon from 'sinon';
import Range from '../index';

/* eslint-disable react/no-multi-comp */

Enzyme.configure({ adapter: new Adapter() });

describe('Range ', () => {
    afterEach(() => {
        //清楚所有浮层
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-balloon-tooltip'));
        nodeListArr.forEach((node, index) => {
            node.parentNode.removeChild(node);
        });
    });

    it('defaultValue', () => {
        const wrapperSingle = mount(<Range defaultValue={10} />);
        const wrapperDouble = mount(<Range slider="double" defaultValue={[10, 30]} />);

        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '10%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '20%',
            left: '10%',
        });
        wrapperSingle.setProps({
            defaultValue: 20,
        });
        wrapperDouble.setProps({
            defaultValue: [30, 40],
        });
        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '10%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '20%',
            left: '10%',
        });
    });
    it('value', () => {
        const wrapperSingle = mount(<Range value={10} />);
        const wrapperDouble = mount(<Range value={[10, 30]} />);

        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '10%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '20%',
            left: '10%',
        });
        wrapperSingle.setProps({
            value: 20,
        });
        wrapperDouble.setProps({
            value: [30, 40],
        });
        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '20%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '10%',
            left: '30%',
        });
    });
    it('min max', () => {
        const wrapper = mount(<Range min={10} value={20} max={30} />);
        assert.deepEqual(wrapper.find('.next-range-selected').props().style, {
            width: '50%',
            left: '0%',
        });
    });
    it('disabled', () => {
        const wrapper = mount(<Range disabled value={20} />);
        assert(wrapper.find('.next-range.disabled').length === 1);
    });
    it('step', () => {
        const wrapper1 = mount(<Range value={20} step={10} />);
        const wrapper2 = mount(<Range min={0} max={1} step={0.01} />);
        wrapper2.find('.next-range').simulate('mousedown', { pageX: 1 });

        // 这里模拟的pageX 无效
        simulateEvent.simulate(document, 'mousemove', { pageX: 2 });
        simulateEvent.simulate(document, 'mouseup');
        //TODO
        assert(wrapper1.props().step === 10);
        assert(wrapper2.props().step === 0.01);
    });

    it('hasTip === true and tipRender', () => {
        const tipRender = sinon.spy();
        const wrapper = mount(<Range value={20} hasTip tipRender={tipRender} />);

        wrapper.find('.next-range-slider').simulate('mouseenter');

        assert(tipRender.called);
    });

    it('hasTip === false', done => {
        const wrapper1 = mount(<Range disabled value={20} hasTip={false} />);

        wrapper1.find('.next-range-slider').simulate('mouseenter');

        assert(document.querySelector('.next-balloon-tooltip') === null);
        done();
    });
    it('marks', () => {
        const wrapper = mount(<Range defaultValue={30} marks={[3, 26, 37, 100]} />);
        const wrapper2 = mount(<Range defaultValue={30} marks={10} />);

        const wrapper3 = mount(
            <Range defaultValue={26} marks={{ 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' }} />
        );

        assert(wrapper.find('.next-range-scale-item').length === 4);
        assert(wrapper.find('.next-range-scale-item.activated').length === 2);
        assert(wrapper.find('.next-range-scale-item').first().props().style.left === '3%');
        assert(wrapper.find('.next-range-scale-item').at(1).props().style.left === '26%');
        assert(wrapper.find('.next-range-scale-item').at(2).props().style.left === '37%');
        assert(wrapper2.find('.next-range-scale-item').length === 11);
        assert(wrapper3.find('.next-range-scale-item').length === 4);
        assert(wrapper3.find('.next-range-mark-text').first().text() === '0°C');
    });

    it('laptop dragging onChange onProcess', done => {
        let changeValue = 0;
        let processValue = 0;
        let onChangeCall = 0;
        let processCall = 0;
        const wrapper = mount(
            <Range
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={function (value) {
                    // console.log('onChange', value);
                    changeValue = value;
                    onChangeCall++;
                }}
                onProcess={function (value) {
                    // console.log('onProcess', value);
                    processValue = value;
                    processCall++;
                }}
                min={0}
                max={100}
            />
        );

        const RangeInstance = wrapper.find('Range').at(0).instance();
        RangeInstance._onMouseDown({
            button: 0,
            pageX: 10,
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._move({
            pageX: 20,
            type: 'mousemove',
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._end();

        assert(processValue === 20);
        assert(processCall === 1);
        assert(onChangeCall === 1);
        done();
    });

    it('mobile dragging onChange onProcess', done => {
        let changeValue = 0;
        let processValue = 0;
        let onChangeCall = 0;
        let processCall = 0;
        const wrapper = mount(
            <Range
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={function (value) {
                    // console.log('onChange', value);
                    changeValue = value;
                    onChangeCall++;
                }}
                onProcess={function (value) {
                    // console.log('onProcess', value);
                    processValue = value;
                    processCall++;
                }}
                min={0}
                max={100}
            />
        );

        const RangeInstance = wrapper.find('Range').at(0).instance();
        RangeInstance._onTouchStart({
            targetTouches: [{ pageX: 10 }],
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._move({
            targetTouches: [{ pageX: 20 }],
            type: 'touchmove',
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._end();

        assert(processValue === 20);
        assert(processCall === 1);
        assert(onChangeCall === 1);
        done();
    });

    it('exchange upper and lower', done => {
        let changeValue = 0;

        const wrapper = mount(
            <Range
                slider="double"
                defaultValue={[10, 20]}
                style={{ width: 100 }}
                marks={[0, 100]}
                onChange={function (value) {
                    // console.log('onChange', value);
                    changeValue = value;
                }}
                min={0}
                max={100}
            />
        );

        const RangeInstance = wrapper.find('Range').at(0).instance();
        RangeInstance._onMouseDown({
            button: 0,
            pageX: 10,
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._move({
            pageX: 30,
            type: 'mousemove',
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._end();

        assert(changeValue[0] === 20);
        assert(changeValue[1] === 30);

        RangeInstance._onMouseDown({
            button: 0,
            pageX: 30,
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._move({
            pageX: 0,
            type: 'mousemove',
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        RangeInstance._end();

        assert(changeValue[0] === 0);
        assert(changeValue[1] === 20);
        done();
    });

    it('value bigger max', () => {
        const wrapperSingle = mount(<Range value={100} max={10} min={1} />);
        const wrapperDouble = mount(<Range slider="double" value={[100, 200]} max={10} min={1} />);

        assert.deepEqual(wrapperSingle.find('.next-range-slider').props().style, {
            zIndex: 100,
            left: '100%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-slider').at(0).props().style, {
            zIndex: 100,
            left: '100%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-slider').at(1).props().style, {
            zIndex: 100,
            left: '100%',
        });
    });

    it('set value === undefined for reset ', () => {
        const wrapperSingle = mount(<Range value={10} min={2} />);
        const wrapperDouble = mount(<Range value={[10, 30]} />);

        wrapperSingle.setProps({
            value: undefined,
        });
        wrapperDouble.setProps({
            value: undefined,
        });
        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '0%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '0%',
            left: '0%',
        });
    });
    it('reverse  ', () => {
        const wrapperSingle = mount(<Range defaultValue={10} reverse />);
        const wrapperDouble = mount(<Range slider="double" defaultValue={[10, 30]} reverse />);

        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '90%',
            left: '10%',
        });
        assert(wrapperDouble.find('.next-range-selected').length === 2);
    });

    it('fixedWidth ', () => {
        const wrapperSingle = mount(<Range fixedWidth defaultValue={[20, 40]} />);

        assert.deepEqual(wrapperSingle.find('.next-range-frag').props().style, {
            left: '20%',
            right: '60%',
        });
    });

    it('fixedWidth no tip', () => {
        const wrapper = mount(<Range fixedWidth hasTip={false} defaultValue={[20, 40]} />);

        const RangeInstance = wrapper.find('Range').at(0).instance();

        assert(RangeInstance.dom.querySelector('.next-balloon-tooltip') === null);
    });

    it('fixedWidth dragging should have active class', () => {
        const wrapper = mount(
            <Range marks={[0, 100]} marksPosition="below" fixedWidth defaultValue={[20, 40]} />
        );

        const RangeInstance = wrapper.find('Range').at(0).instance();

        RangeInstance._onMouseDown({
            button: 0,
            pageX: 10,
            stopPropagation: () => {},
            preventDefault: () => {},
        });
        assert(RangeInstance.dom.querySelector('.next-range-active') !== null);
    });

    it(' fixedWidth tooltip enter+down+leave+up', () => {
        const wrapper = mount(<Range fixedWidth defaultValue={[20, 40]} />);
        let parent = document.createElement('div');
        document.body.appendChild(parent);

        ReactDOM.render(<Range fixedWidth defaultValue={[20, 40]} />, parent);

        assert(document.querySelector('.next-balloon-tooltip') === null);
        // wrapper.find('.next-range-frag').simulate('mousedown');
        ReactTestUtils.Simulate.mouseDown(document.querySelectorAll('.next-range-frag')[0], {
            button: 0,
        });
        assert(document.querySelector('.next-balloon-tooltip') !== null);
        simulateEvent.simulate(document, 'mouseup');

        // enzyme simulate 不支持 addEventListener 添加的事件冒泡(an anti-pattern in React),导致 mouseup 的case很难测
        // https://github.com/airbnb/enzyme/issues/426
        // assert(document.querySelector('.next-balloon-tooltip') === null);

        wrapper.unmount();

        document.body.removeChild(parent);
        parent = null;
    });

    it(' fixedWidth tooltipVisible === true, always has tooltip', () => {
        const wrapper = mount(<Range tooltipVisible fixedWidth defaultValue={[20, 40]} />);

        const RangeInstance = wrapper.find('Range').at(0).instance();
        assert(RangeInstance.dom.querySelector('.next-balloon-tooltip') !== null);

        wrapper.find('.next-range-frag').simulate('mouseenter');
        wrapper.find('.next-range-frag').simulate('mouseleave');
        wrapper.find('.next-range-frag').simulate('mousedown');
        wrapper.find('.next-range-frag').simulate('mouseenter');
        wrapper.find('.next-range-frag').simulate('mouseleave');
        wrapper.find('.next-range-frag').simulate('mouseup');

        assert(RangeInstance.dom.querySelector('.next-balloon-tooltip') !== null);
    });

    it('keymove right', () => {
        const aSpy = sinon.spy();
        const wrapper = mount(<Range defaultValue={2} hasTip onChange={aSpy} />);

        wrapper.find('.next-range-slider').simulate('keyDown', { keyCode: 39 });
        assert(aSpy.called);
    });

    it('keymove left', () => {
        const aSpy = sinon.spy();
        const wrapper = mount(<Range defaultValue={2} hasTip onChange={aSpy} />);

        wrapper.find('.next-range-slider').simulate('keyDown', { keyCode: 37 });
        assert(aSpy.called);
    });

    it('keymove right at rightmost', () => {
        const aSpy = sinon.spy();
        const wrapper = mount(
            <Range defaultValue={100} min={1} max={100} hasTip onChange={aSpy} />
        );

        wrapper.find('.next-range-slider').simulate('keyDown', { keyCode: 39 });
        assert(!aSpy.called);
    });

    it('rtl', () => {
        const wrapperSingle = mount(<Range rtl value={10} />);
        const wrapperDouble = mount(<Range rtl value={[10, 30]} />);
        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '10%',
            left: '90%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').props().style, {
            width: '20%',
            left: '70%',
        });
    });

    it('rtl & reverse', () => {
        const wrapperSingle = mount(<Range rtl reverse value={10} />);
        const wrapperDouble = mount(<Range rtl reverse slider="double" value={[10, 30]} />);
        assert.deepEqual(wrapperSingle.find('.next-range-selected').props().style, {
            width: '90%',
            left: '0%',
        });
        assert.deepEqual(wrapperDouble.find('.next-range-selected').at(0).props().style, {
            width: '70%',
            left: 0,
        });
    });

    it('should isPreview', () => {
        const wrapperSingle = mount(<Range isPreview value={30} />);
        const wrapperDouble = mount(<Range isPreview value={[10, 40]} />);

        assert(wrapperSingle.getDOMNode().innerText === '30');
        assert(wrapperDouble.getDOMNode().innerText === '10~40');
    });

    it('should renderPreview', () => {
        const wrapperSingle = mount(<Range isPreview renderPreview={() => 'single'} value={30} />);
        const wrapperDouble = mount(
            <Range isPreview renderPreview={() => 'double'} value={[10, 40]} />
        );

        assert(wrapperSingle.getDOMNode().innerText === 'single');
        assert(wrapperDouble.getDOMNode().innerText === 'double');
    });
});
