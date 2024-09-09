import React from 'react';
import Balloon from '../index';
import '../style';

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

describe('balloon v2', () => {
    it('balloon align t', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="t"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom').should('exist');
    });
    it('balloon align tl', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="tl"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom-left').should('exist');
    });
    it('balloon align tr', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="tr"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-bottom-right').should('exist');
    });
    it('balloon align b', () => {
        //bottom

        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="b"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top').should('exist');
    });
    it('balloon align bl', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="bl"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top-left').should('exist');
    });
    it('balloon align br', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="br"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-top-right').should('exist');
    });
    it('balloon align l', () => {
        //left
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="l"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right').should('exist');
    });
    it('balloon align lt', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="lt"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right-top').should('exist');
    });
    it('balloon align lb', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="lb"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-right-bottom').should('exist');
    });
    it('balloon align r', () => {
        //right
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="r"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left').should('exist');
    });
    it('balloon align rt', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="rt"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left-top').should('exist');
    });
    it('balloon align rb', () => {
        cy.mount(
            <div style={{ width: 300, height: 300, padding: 150 }}>
                <Balloon
                    v2
                    trigger={<span>trigger</span>}
                    align="rb"
                    autoAdjust={false}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('span').trigger('click');
        cy.get('.next-balloon-left-bottom').should('exist');
    });

    it('onClose shuld be called with closeIcon', () => {
        const onClose = cy.spy().as('onClose');
        cy.mount(
            <div style={{ padding: '100px' }}>
                <Balloon
                    v2
                    trigger={<button>trigger</button>}
                    align="rb"
                    triggerType="click"
                    onClose={onClose}
                >
                    i am balloon content
                </Balloon>
            </div>
        );
        cy.get('button').trigger('click');
        cy.get('.next-balloon-close').should('exist');

        cy.get('.next-balloon-close').trigger('click');
        cy.wrap(onClose).should('have.been.calledOnce');
    });
});

describe('Balloon v2', () => {
    describe('closable', () => {
        it('closable: true', () => {
            cy.mount(
                <Balloon
                    visible
                    closable
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('exist');
        });

        it('closable: false', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('not.exist');
        });
    });

    describe('safeNode', () => {
        it('safeNode', () => {
            function Demo() {
                return (
                    <div>
                        <button id="safe" className="safeButton">
                            safeButton
                        </button>
                        <Balloon
                            trigger={<span className="balloon">trigger</span>}
                            id="balloon"
                            safeNode="safe"
                            triggerType="click"
                            v2
                        >
                            i am balloon content
                        </Balloon>
                    </div>
                );
            }
            cy.mount(<Demo />);
            cy.get('.balloon').trigger('click');
            cy.get('.safeButton').trigger('click');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.get('.next-balloon').should('exist');
        });
    });
    describe('type', () => {
        it('type: normal', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-normal').should('exist');
        });
        it('type: primary', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="primary"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-primary').should('exist');
        });
    });
    describe('trigger ,triggerType', () => {
        it('should has the trigger element', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );

            cy.get('.triggerSpan').should('have.text', 'trigger');
        });
        it('triggerType can set click', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon').should('exist');
        });

        it('triggerType can set hover', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="hover"
                    v2
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseover');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.get('.next-balloon').should('exist');
        });

        it('trigger can be string', () => {
            cy.mount(
                <Balloon v2 closable={false} type="normal" trigger="trigger" triggerType="hover">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseover');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.get('.next-balloon').should('exist');
        });

        // trigger 不传，默认用空的<span></span>填充
        it('trigger default is span', () => {
            cy.mount(
                <Balloon v2 triggerType="click">
                    trigger
                </Balloon>
            );
            cy.get('span').should('have.length', 1);
        });
    });
});
