import React from 'react';
import Timeline from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

const Item = Timeline.Item;

describe('Timeline A11y', () => {
    it('should not have any violations', async () => {
        await testReact(
            <Timeline>
                <Item content="2016-10-03" state="process" title="签收" />
                <Item content="2016-10-02" title="发货" />
                <Item content="2016-10-01" title="下单" />
            </Timeline>
        );
    });

    it('should not have any violations when using fold', async () => {
        await testReact(
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
    });

    it('should not have any violations when using timeLeft', async () => {
        await testReact(
            <Timeline>
                <Item timeLeft="2017-10-23" content="2016-10-03" state="process" title="签收" />
                <Item timeLeft="2017-10-23" content="2016-10-02" title="发货" />
                <Item timeLeft="2017-10-23" content="2016-10-01" title="下单" />
            </Timeline>
        );
    });
});
