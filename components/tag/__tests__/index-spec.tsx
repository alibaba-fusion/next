import React, { createRef } from 'react';
import type { MountReturn } from 'cypress/react';
import Tag from '../index';
import '../style';

const { Selectable: TagCheckable, Group: TagGroup, Closable: TagClosable } = Tag;

const PRESET_COLORS = {
    blue: '#4494F9',
    green: '#46BC15',
    orange: '#FF9300',
    red: '#FF3000',
    turquoise: '#01C1B2',
    yellow: '#FCCC12',
};

describe('Tag', () => {
    describe('render', () => {
        it('should render nothing if tag is unvisible', () => {
            const ref = createRef<InstanceType<typeof Tag>>();
            cy.mount(<Tag animation={false} ref={ref} />);
            cy.then(() => {
                const ins = ref.current?.getInstance()?.getInstance();
                cy.wrap(ins).should('be.ok');
                ins?.setState({ visible: false });
            });
            cy.get('.next-tag').should('not.exist');
        });

        it('should render tag body if tag is visible', () => {
            cy.mount(<Tag />);
            cy.get('.next-tag-body').should('exist').and('have.length', 1);
        });

        it('should contain tail if tag is closable and type is not normal', () => {
            cy.mount(<Tag closable type="primary" />);
            cy.get('.next-tag-close-btn').should('exist').and('have.length', 1);
        });

        it('`afterAppear` should be called when tag appeared', () => {
            const afterAppearCb = cy.spy();
            cy.mount(<Tag afterAppear={afterAppearCb} animation />);
            cy.then(() => {
                cy.wrap(afterAppearCb).should('be.calledOnce');
            });
        });

        it('`afterLeave` should be called when tag leaved', () => {
            const afterLeaveCb = cy.spy();
            cy.mount(<Tag afterClose={afterLeaveCb} closable />);
            cy.get('.next-tag-close-btn').click();
            cy.then(() => {
                cy.wrap(afterLeaveCb).should('be.calledOnce');
            });
            cy.mount(<Tag afterClose={afterLeaveCb} closable animation />);
            cy.get('.next-tag-close-btn').click();
            cy.then(() => {
                cy.wrap(afterLeaveCb).should('be.calledTwice');
            });
        });
    });

    describe('behavior', () => {
        it('should emit `onClick` method if tag body clicked', () => {
            const onClickCb = cy.spy();
            cy.mount(<Tag onClick={onClickCb} />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onClickCb).should('be.calledOnce');
            });
        });

        it('should hidden tag if tag is closable and closeArea is `tag`', () => {
            const onCloseCb = cy.spy();
            cy.mount(<Tag onClose={onCloseCb} closable closeArea="tag" />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onCloseCb).should('be.calledOnce');
            });
        });

        it('should emit `onClose` method if tail clicked', () => {
            const onCloseCb = cy.spy();
            cy.mount(<Tag closable type="primary" onClose={onCloseCb} />);
            cy.get('.next-tag-close-btn').click();
            cy.then(() => {
                cy.wrap(onCloseCb).should('be.calledOnce');
            });
        });

        it('tag should be destroyed after unmount', () => {
            cy.mount(<Tag />);
            cy.get('.next-tag').should('exist');
            cy.mount(<div></div>);
            cy.get('.next-tag').should('not.exist');
        });
    });

    describe('color', () => {
        // 预设颜色值匹配
        Object.entries(PRESET_COLORS).forEach(([name]) => {
            it(`should render preset ${name} color when type is primay`, () => {
                cy.mount(<Tag closable type="primary" color={name} />);

                // 背景一致，且颜色是白色
                cy.get('.next-tag').should('have.class', `next-tag-${name}`);
            });
        });

        Object.entries(PRESET_COLORS).forEach(([name]) => {
            it(`should render preset ${name} color when type is normal`, () => {
                cy.mount(<Tag color={name} />);
                // 背景透明 25%，字体颜色不变
                cy.get('.next-tag').should('have.class', `next-tag-${name}-inverse`);
            });
        });

        it('should render custom color ', () => {
            cy.mount(<Tag color={'#ff0'} />);
            cy.get('.next-tag').should('have.css', 'color', 'rgb(255, 255, 255)');
            cy.get('.next-tag').should('have.css', 'background-color', 'rgb(255, 255, 0)');
            cy.get('.next-tag').should('have.css', 'border-color', 'rgb(255, 255, 0)');
        });

        it('should render as primary type when type is normal but custom color is set', () => {
            cy.mount(<Tag color={'#ff0'} type="normal" />);

            cy.get('.next-tag').should('have.css', 'color', 'rgb(255, 255, 255)');
            cy.get('.next-tag').should('have.css', 'background-color', 'rgb(255, 255, 0)');
            cy.get('.next-tag').should('have.css', 'border-color', 'rgb(255, 255, 0)');
        });
    });
});

describe('TagCheckable', () => {
    describe('render', () => {
        it('should contain `checked` class if tag is check state', () => {
            cy.mount(<TagCheckable checked />);
            cy.get('.next-tag').should('have.class', 'checked');
        });

        it('should update `checked` state when new props', () => {
            cy.mount(<TagCheckable checked />).as('tag');
            cy.get<MountReturn>('@tag').then(({ rerender }) => {
                return rerender(<TagCheckable checked={false} />);
            });
            cy.get('.next-tag').should('not.have.class', 'checked');
        });
    });

    describe('behavior', () => {
        it('emit `onChange` if click undisabled tag', () => {
            const onChangeCb = cy.spy();
            cy.mount(<TagCheckable onChange={onChangeCb} />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onChangeCb).should('be.calledOnce');
                cy.wrap(onChangeCb.firstCall.args[0]).should('be.true');
            });
        });

        it('`onChange` wont emit if click disabled tag', () => {
            const onChangeCb = cy.spy();
            cy.mount(<TagCheckable disabled onChange={onChangeCb} />);
            cy.get('.next-tag').click({ force: true });
            cy.then(() => {
                cy.wrap(onChangeCb).should('not.be.called');
            });
        });

        it('`onChange` passes checked state value', () => {
            const onChangeCb = cy.spy();
            cy.mount(<TagCheckable onChange={onChangeCb} />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onChangeCb.firstCall.args[0]).should('be.true');
            });
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onChangeCb.secondCall.args[0]).should('be.false');
            });
        });
    });
});

describe('TagClosable', () => {
    describe('render', () => {
        it('should contain `close` btn', () => {
            cy.mount(<TagClosable />);
            cy.get('.next-tag .next-tag-close-btn').should('exist');
        });
    });

    describe('behavior', () => {
        it('should emit `onClose` if click tail when closeArea is "tail"', () => {
            const onClose = cy.spy();
            cy.mount(<TagClosable closeArea="tail" onClose={onClose} />);
            cy.get('.next-tag-close-btn').click();
            cy.then(() => {
                cy.wrap(onClose).should('be.calledOnce');
            });
        });
        it('should not emit `onClose` if click tag when closeArea is "tail"', () => {
            const onClose = cy.spy();
            cy.mount(<TagClosable closeArea="tail" onClose={onClose} />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onClose).should('not.be.called');
            });
        });
        it('should emit `onClose` if click tag when closeArea is "tag"', () => {
            const onClose = cy.spy();
            cy.mount(<TagClosable closeArea="tag" onClose={onClose} />);
            cy.get('.next-tag').click();
            cy.then(() => {
                cy.wrap(onClose).should('be.calledOnce');
            });
        });
    });
});

describe('TagGroup', () => {
    describe('render', () => {
        it('should contain child node that pass in', () => {
            cy.mount(
                <TagGroup>
                    <div className="hello">Hello World</div>
                </TagGroup>
            );
            cy.get('.next-tag-group .hello').should('exist');
        });

        it('default prefix props is `next-`', () => {
            cy.mount(<TagGroup />);
            cy.get('.next-tag-group').should('exist');
        });
    });
});
