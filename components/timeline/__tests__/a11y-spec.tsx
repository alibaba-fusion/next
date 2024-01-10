import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timeline from '../index';
import '../style';
import { testReact, unmount } from '../../util/__tests__/legacy/a11y/validate';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach*/

Enzyme.configure({ adapter: new Adapter() });

const Item = Timeline.Item;

describe('Timeline A11y', () => {
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
            <Timeline>
                <Item content="2016-10-03" state="process" title="签收" />
                <Item content="2016-10-02" title="发货" />
                <Item content="2016-10-01" title="下单" />
            </Timeline>
        );
        return wrapper;
    });

    it('should not have any violations when using fold', async () => {
        wrapper = await testReact(
            <Timeline
                fold={[
                    { foldArea: [1, 2], foldShow: false },
                    { foldArea: [4], foldShow: false },
                ]}
            >
                <Item content="2016-10-06" state="process" />
                <Item content="2016-10-05" />
                <Item content="2016-10-04" />
                <Item content="2016-10-03" />
                <Item content="2016-10-02" />
                <Item content="2016-10-01" />
            </Timeline>
        );
        return wrapper;
    });

    it('should not have any violations when using timeLeft', async () => {
        wrapper = await testReact(
            <Timeline>
                <Item timeLeft="2017-10-23" content="2016-10-03" state="process" title="签收" />
                <Item timeLeft="2017-10-23" content="2016-10-02" title="发货" />
                <Item timeLeft="2017-10-23" content="2016-10-01" title="下单" />
            </Timeline>
        );
        return wrapper;
    });
});
