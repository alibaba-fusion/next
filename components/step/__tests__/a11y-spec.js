import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { unmount, testReact } from '../../util/__tests__/legacy/a11y/validate';
import Icon from '../../icon';
import Step from '../index';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const StepItem = Step.Item;

/* eslint-disable no-undef, react/jsx-filename-extension */
describe('Step A11y', () => {
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
            <Step current={1}>
                <StepItem title="步骤1" />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
        return wrapper;
    });

    it('should not have any violations for element title', async () => {
        const title = <span>测试</span>;
        wrapper = await testReact(
            <Step current={1}>
                <StepItem title={title} />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
        return wrapper;
    });

    it('should not have any violations for element content', async () => {
        const content = <span>测试</span>;
        wrapper = await testReact(
            <Step current={1}>
                <StepItem title="标题1" content={content} />
            </Step>
        );
        return wrapper;
    });

    it('should not have any violations for different shapes', async () => {
        wrapper = await testReact(
            <div>
                <Step current={1} shape="arrow">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for vertical direction', async () => {
        wrapper = await testReact(
            <div>
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="dot" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="arrow" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for labelPlacement', async () => {
        wrapper = await testReact(
            <div>
                <Step current={1} labelPlacement="hoz">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="dot" labelPlacement="hoz">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for icon', async () => {
        wrapper = await testReact(
            <div>
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for custom node', async () => {
        function itemRender(index) {
            return (
                <div className="custom-node">
                    <span>{index + 1}</span>
                </div>
            );
        }
        wrapper = await testReact(
            <Step current={1} itemRender={itemRender}>
                <StepItem title="步骤1" icon="atm" />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
        return wrapper;
    });

    it('should not have any violations for progress', async () => {
        wrapper = await testReact(
            <div>
                <Step current={1}>
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            </div>
        );
        return wrapper;
    });

    it('should not have any violations for step.item with itemRender', async () => {
        const steps = ['one', 'two', 'three', 'four'];
        const itemRender = (index, status) => {
            return status === 'finish' ? <Icon type="good" /> : index + 1;
        };
        wrapper = await testReact(
            <Step current={2} animation={false} itemRender={itemRender}>
                {steps.map(item => (
                    <Step.Item key={item} title={item} />
                ))}
            </Step>
        );
        return wrapper;
    });
});
