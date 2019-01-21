import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Loading from '../../src/loading/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Test', () => {
    describe('render', () => {
        it('should render', () => {
            const wrapper = mount(<Loading />);
            assert(wrapper.find('.next-loading').length === 1);
        });
        it('size', () => { 
            const wrapper1 = mount(<Loading/>);
            assert(wrapper1.find('.next-loading-fusion-reactor').length === 1);

            const wrapper2 = mount(<Loading size="medium"/>);
            assert(wrapper2.find('.next-loading-medium-fusion-reactor').length === 1);
        });
    });

    describe('behavior', () => {
      it('should support tip', () => {
          const wrapper = mount(<Loading tip="hello world"/>);
          assert(wrapper.find('.next-loading-tip-content').text() === 'hello world');
      });
      it('should support indicator', () => {
        const indicator = <div className="custom-loading-dom"></div>;
        const wrapper = mount(<Loading tip="hello world" indicator={indicator}/>);
        assert(wrapper.find('.next-loading-indicator').contains(indicator));
    });
      it('should support visible', () => {
          const wrapper = mount(<Loading tip="hello world"/>);
          assert(wrapper.find('.next-loading').hasClass('next-open'));
          const wrapper2 = mount(<Loading tip="hello world" visible={false}/>);
          assert(!wrapper2.find('.next-loading').hasClass('next-open'));
      });
      it('should support inline', () => {
        const wrapper = mount(<Loading tip="hello world"/>);
        assert(wrapper.find('.next-loading').hasClass('next-loading-inline'));
        const wrapper2 = mount(<Loading tip="hello world" inline={false}/>);
        assert(!wrapper2.find('.next-loading').hasClass('next-loading-inline'));
    });
    });
});
