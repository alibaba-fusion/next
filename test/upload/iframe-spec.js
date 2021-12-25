import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Upload from '../../src/upload/runtime/iframe-uploader';

Enzyme.configure({ adapter: new Adapter() });

describe('Iframe Upload', () => {
  describe('should render without crash', () => {
    const wrapper = mount(
      <Upload />
    );

    assert(wrapper.find('form').length);
  })
})

