import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';
import Shell from '../index';
import Search from '../../search/index';
import '../style';
import '../../search/style';
import './index.scss';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Shell A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        unmount();
    });

    it('should not have any violations', async () => {
        wrapper = await testReact(
            <Shell className={'iframe-hack'} style={{ border: '1px solid #eee' }}>
                <Shell.Branding>
                    <div className="rectangular" />
                    <span style={{ marginLeft: 10 }}>App Name</span>
                </Shell.Branding>
                <Shell.Navigation direction="hoz">
                    <Search key="2" shape="simple" type="dark" placeholder="Search" style={{ width: '200px' }} />
                </Shell.Navigation>
                <Shell.Action>
                    <img
                        src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                        className="avatar"
                        alt="用户头像"
                    />
                    <span style={{ marginLeft: 10 }}>MyName</span>
                </Shell.Action>

                <Shell.Content>
                    <div style={{ minHeight: 1200, background: '#fff' }} />
                </Shell.Content>

                <Shell.Footer>
                    <span>Alibaba Fusion</span>
                    <span>@ 2019 Alibaba Piecework 版权所有</span>
                </Shell.Footer>
            </Shell>
        );
        return wrapper;
    });
});
