import React from 'react';
import { testReact } from '../../util/__tests__/a11y/validate';
import Icon from '../../icon';
import Step from '../index';
import '../style';

const StepItem = Step.Item;

describe('Step A11y', () => {
    it('should not have any violations', async () => {
        await testReact(
            <Step current={1}>
                <StepItem title="步骤1" />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
    });

    it('should not have any violations for element title', async () => {
        const title = <span>测试</span>;
        await testReact(
            <Step current={1}>
                <StepItem title={title} />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
    });

    it('should not have any violations for element content', async () => {
        const content = <span>测试</span>;
        await testReact(
            <Step current={1}>
                <StepItem title="标题1" content={content} />
            </Step>
        );
    });

    it('should not have any violations for different shapes', async () => {
        await testReact(
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
    });

    it('should not have any violations for vertical direction', async () => {
        await testReact(
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
    });

    it('should not have any violations for labelPlacement', async () => {
        await testReact(
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
    });

    it('should not have any violations for icon', async () => {
        await testReact(
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
    });

    it('should not have any violations for custom node', async () => {
        function itemRender(index: number) {
            return (
                <div className="custom-node">
                    <span>{index + 1}</span>
                </div>
            );
        }
        await testReact(
            <Step current={1} itemRender={itemRender}>
                <StepItem title="步骤1" icon="atm" />
                <StepItem title="步骤2" />
                <StepItem title="步骤3" />
            </Step>
        );
    });

    it('should not have any violations for progress', async () => {
        await testReact(
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
    });

    it('should not have any violations for step.item with itemRender', async () => {
        const steps = ['one', 'two', 'three', 'four'];
        const itemRender = (index: number, status: string) => {
            return status === 'finish' ? <Icon type="good" /> : index + 1;
        };
        await testReact(
            <Step current={2} animation={false} itemRender={itemRender}>
                {steps.map(item => (
                    <Step.Item key={item} title={item} />
                ))}
            </Step>
        );
    });
});
