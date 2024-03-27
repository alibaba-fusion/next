import React, { useState } from 'react';
import Icon from '../../icon';
import Button from '../../button/index';
import Step from '../index';
import '../style';
import type { StepStatus } from '../types';

const StepItem = Step.Item;
describe('Step', () => {
    describe('render', () => {
        it('should support rtl', () => {
            cy.mount(
                <Step current={1} rtl>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-circle').should('have.attr', 'dir', 'rtl');
        });
        it('should render with default props', () => {
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            cy.get('.next-step-circle').should('have.length', 1);
            cy.get('.next-step-horizontal').should('have.length', 1);
        });

        it('should render with element title', () => {
            const title = <span>测试</span>;
            cy.mount(
                <Step current={1}>
                    <StepItem title={title} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item-title').should('have.html', '<span>测试</span>');
        });

        it('should render with element content', () => {
            const content = <span>测试</span>;
            cy.mount(
                <Step current={1}>
                    <StepItem title="标题1" content={content} />
                </Step>
            );
            cy.get('.next-step-item-content').should('have.html', '<span>测试</span>');
        });

        it('should render with diffrent types', () => {
            cy.mount(
                <Step current={1} shape="arrow">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-arrow').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            cy.get('.next-step-dot').should('have.length', 1);
        });

        it('should render with diffrent directions', () => {
            cy.mount(
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-vertical').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="dot" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-vertical').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="arrow" direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-vertical').should('have.length', 0);
        });

        it('should render with labelPlacement', () => {
            cy.mount(
                <Step current={1} labelPlacement="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-label-vertical').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="dot" labelPlacement="hoz">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-label-horizontal').should('have.length', 1);
        });

        it('should render when direction and labelPlacement are both hoz', () => {
            const steps = ['知道自己不懂', '不知道自己懂', '知道自己懂了'].map((item, index) => (
                <Step.Item key={index} title={item} itemRender={() => <Icon type="smile" />} />
            ));
            cy.mount(
                <Step current={1} shape="circle" direction="hoz" labelPlacement="hoz">
                    {steps}
                </Step>
            );
            cy.get('.next-step-horizontal').should('have.length', 1);
            cy.get('.next-step-label-horizontal').should('have.length', 1);
        });

        it('should render with icon ', () => {
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-icon-atm').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-icon-atm').should('have.length', 1);
        });

        it('should render with custom node ', () => {
            function itemRender(index: number) {
                return (
                    <div className="custom-node">
                        <span>{index + 1}</span>
                    </div>
                );
            }

            cy.mount(
                <Step current={1} itemRender={itemRender}>
                    <StepItem title="步骤1" icon="atm" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.custom-node').should('have.length', 3);
        });

        it('should render with progress ', () => {
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-progress-circle.next-step-item-progress').should('have.length', 1);
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" icon="atm" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-progress-circle.next-step-item-progress').should('have.length', 1);
            cy.mount(
                <Step current={1} shape="dot">
                    <StepItem title="步骤1" percent={40} />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-progress-circle.next-step-item-progress').should('have.length', 0);
        });

        it('should render step.item with itemRender', () => {
            const steps = ['one', 'two', 'three', 'four'];
            const itemRender = (index: number, status: StepStatus) => {
                return status === 'finish' ? <Icon type="good" /> : index + 1;
            };
            cy.mount(
                <Step current={2} animation={false} itemRender={itemRender}>
                    {steps.map(item => (
                        <Step.Item key={item} title={item} />
                    ))}
                </Step>
            );
            cy.get('.next-icon-good').should('have.length', 2);
        });

        it('should stretch work', () => {
            cy.mount(
                <Step current={1} stretch shape="dot" labelPlacement="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item')
                .eq(0)
                .should('have.attr', 'style', 'width: calc(50% - 50px);');
            cy.get('.next-step-item').eq(2).should('have.attr', 'style', 'width: auto;');
        });
    });

    describe('action', () => {
        it('should click step node with transitionEnd', () => {
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item-node').eq(2).click();
            cy.get('.next-step-item-node')
                .eq(2)
                .should('have.attr', 'class', 'next-step-item-node clicked');

            cy.get('.next-step-item-node').eq(2).trigger('transitionEnd');
            cy.get('.next-step-item-node')
                .eq(2)
                .should('have.attr', 'class', 'next-step-item-node');
        });

        it('should change current step', () => {
            cy.mount(
                <Step current={1} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item')
                .eq(0)
                .should(
                    'have.attr',
                    'class',
                    'next-step-item next-step-item-finish next-step-item-first'
                );
            cy.get('.next-step-item')
                .eq(1)
                .should('have.attr', 'class', 'next-step-item next-step-item-process');

            cy.mount(
                <Step current={2} direction="ver">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            cy.get('.next-step-item')
                .eq(2)
                .should(
                    'have.attr',
                    'class',
                    'next-step-item next-step-item-process next-step-item-last'
                );
        });
        it('should change labelPlacement', () => {
            cy.mount(
                <Step current={1}>
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            cy.get('.next-step-label-vertical').should('have.length', 1);
            cy.get('.next-step-item')
                .eq(0)
                .then(dom => {
                    const containerRect = dom
                        .find('.next-step-item-container')
                        .get(0)
                        .getBoundingClientRect();
                    const bodyRect = dom
                        .find('.next-step-item-body')
                        .get(0)
                        .getBoundingClientRect();
                    cy.wrap(bodyRect.top >= containerRect.top + containerRect.height).should(
                        'be.true'
                    );
                });
            cy.mount(
                <Step current={1} labelPlacement="hoz">
                    <StepItem title="步骤1" />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );

            cy.get('.next-step-label-horizontal').should('have.length', 1);
            cy.get('.next-step-item')
                .eq(0)
                .then(dom => {
                    const containerRect = dom
                        .find('.next-step-item-container')
                        .get(0)
                        .getBoundingClientRect();
                    const bodyRect = dom
                        .find('.next-step-item-body')
                        .get(0)
                        .getBoundingClientRect();
                    cy.wrap(bodyRect.top >= containerRect.top).should('be.true');
                    cy.wrap(bodyRect.top < containerRect.top + containerRect.height).should(
                        'be.true'
                    );
                });
        });

        it('should trigger click event', () => {
            const click = cy.spy();
            cy.mount(
                <Step current={1}>
                    <StepItem
                        title="步骤1"
                        onClick={index => {
                            click(index);
                        }}
                    />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item-first .next-step-item-node').trigger('click');
            cy.then(() => {
                cy.wrap(click.callCount).should('eq', 1);
                cy.wrap(click.firstCall).should('be.calledWith', 0);
            });

            cy.mount(
                <Step current={1} direction="ver">
                    <StepItem
                        title="步骤1"
                        onClick={index => {
                            click(index);
                        }}
                    />
                    <StepItem title="步骤2" />
                    <StepItem title="步骤3" />
                </Step>
            );
            cy.get('.next-step-item-first .next-step-item-node-placeholder').trigger('click');
            cy.then(() => {
                cy.wrap(click.callCount).should('eq', 2);
                cy.wrap(click.secondCall).should('be.calledWith', 0);
            });
        });

        it('should resize when content changed', () => {
            const StepContent = () => {
                const [conditions, setConditions] = useState<number[]>([]);
                const createNewSelectItem = () => {
                    setConditions(pre => pre.concat(1));
                };
                return (
                    <div>
                        {conditions.map((_, index) => (
                            <div
                                key={`step-content-${index}`}
                                id={`step-content-${index}`}
                                style={{
                                    width: '100%',
                                    maxWidth: 200,
                                    height: 20,
                                    background: '#2196f3',
                                    margin: '10px 0',
                                }}
                            />
                        ))}
                        <Button id="add-content-btn" onClick={createNewSelectItem}>
                            add new div
                        </Button>
                    </div>
                );
            };

            cy.mount(
                <Step current={1} shape="circle">
                    <StepItem title="步骤1" content={<StepContent />} />
                    <StepItem title="步骤2" icon="smile" content="this is a description" />
                    <StepItem title="步骤3" />
                </Step>
            );

            let originHeight: number | undefined;
            cy.get('.next-step').then($step => {
                originHeight = $step.outerHeight();
                cy.get('#add-content-btn').click();
                cy.get('[id^="step-content-"]').should('have.length', 1);
                cy.get('#add-content-btn').click();
                cy.get('[id^="step-content-"]').should('have.length', 2);
            });

            cy.get('.next-step').then($step => {
                const changedHeight = $step.outerHeight();
                cy.wrap(changedHeight).should('be.greaterThan', originHeight);
            });
        });
    });
});
