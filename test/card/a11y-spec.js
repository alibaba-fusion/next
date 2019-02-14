import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../../src/card/index';
import '../../src/card/style';
import { afterEach as a11yAfterEach, testReact } from '../util/a11y/validate';

Enzyme.configure({ adapter: new Adapter() });


/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Card A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11yAfterEach();
    });

    it('should not have any violations when default', async () => {
        wrapper = await testReact(<Card title="Simple Card">
            <div className="card-placeholder"></div>
        </Card>);
        return wrapper;
    });

    it('should not have any violations when displaying images', async () => {
        wrapper = await testReact(<Card className="image-card" contentHeight="auto">
            <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" alt="father day" />
            <div className="custom-card">
                <h3>Father's Day</h3>
                <p>Thank you, papa</p>
            </div>
        </Card>);
        return wrapper;
    });

    it('should not have any violations when setting height', async () => {
        const commonProps = {
            style: { width: 300 },
            title: 'Title',
            subTitle: 'Sub-title'
        };

        wrapper = await testReact(<div>
            <Card {...commonProps} contentHeight="auto">
                <div className="custom-content">
                    <p>Card content</p>
                    <p>Card content</p>
                </div>
            </Card>
            &nbsp;&nbsp;
            <Card {...commonProps} contentHeight={200}>
                <div className="custom-content">
                    <p>Card content</p>
                    <p>Card content</p>
                </div>
            </Card>
        </div>);
        return wrapper;
    });

    it('should not have any violations when setting title off', async () => {
        const commonProps = {
            style: { width: 300 },
            title: 'Title'
        };

        wrapper = await testReact(<Card {...commonProps} showTitleBullet={false}>
            Card Content
        </Card>);
        return wrapper;
    });
});
