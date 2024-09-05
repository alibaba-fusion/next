import React from 'react';
import Card from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Card A11y', () => {
    it('should not have any violations when default', async () => {
        await testReact(
            <Card title="Simple Card">
                <div className="card-placeholder" />
            </Card>
        );
    });

    it('should not have any violations when displaying images', async () => {
        await testReact(
            <Card className="image-card" contentHeight="auto">
                <img
                    src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"
                    alt="father day"
                />
                <div className="custom-card">
                    <h3>Father's Day</h3>
                    <p>Thank you, papa</p>
                </div>
            </Card>
        );
    });

    it('should not have any violations when setting height', async () => {
        const commonProps = {
            style: { width: 300 },
            title: 'Title',
            subTitle: 'Sub-title',
        };

        await testReact(
            <div>
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
            </div>
        );
    });

    it('should not have any violations when setting title off', async () => {
        const commonProps = {
            style: { width: 300 },
            title: 'Title',
        };

        await testReact(
            <Card {...commonProps} showTitleBullet={false}>
                Card Content
            </Card>
        );
    });
});
