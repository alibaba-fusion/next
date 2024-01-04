import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import { MountReturn } from 'cypress/react';
import Dropdown from '../index';
import Menu from '../../menu';
import { KEYCODE } from '../../util';
import '../../menu/style';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

describe('Dropdown', () => {
    it('should render by defaultVisible', () => {
        // const initialLen = document.querySelectorAll('.next-overlay-wrapper').length;
        const onHandleVisible = cy.spy();

        cy.mount(
            <Dropdown
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                trigger={<a className="trigger">Hello dropdown</a>}
                onVisibleChange={onHandleVisible}
                animation={false}
                triggerType="click"
            >
                {menu}
            </Dropdown>
        );

        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);
        cy.get('.trigger').click();
        cy.wrap(onHandleVisible).should('be.calledOnce');

        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen + 1);
        cy.get('.next-menu-item').first().click();
        cy.wrap(onHandleVisible).should('be.calledTwice');
        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);
    });

    it('should render by visible', () => {
        const onHandleVisible = cy.spy();

        cy.mount(
            <Dropdown
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                trigger={<a className="trigger">Hello dropdown</a>}
                onVisibleChange={onHandleVisible}
                animation={false}
                triggerType="click"
            >
                {menu}
            </Dropdown>
        ).as('dropdown');
        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);

        cy.get('.trigger').click();
        cy.wrap(onHandleVisible).should('be.calledOnce');
        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen + 1);
        // triggered = false;

        cy.get<MountReturn>('@dropdown').then(({ component, rerender }) => {
            return rerender(React.cloneElement(component, { visible: false }));
        });
        cy.get('.next-overlay-wrapper').should('not.exist');

        cy.get<MountReturn>('@dropdown').then(({ component, rerender }) => {
            return rerender(React.cloneElement(component, { visible: true }));
        });
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.next-menu-item').first().click();
        cy.wrap(onHandleVisible).should('be.calledTwice').should('be.calledWith', false);
        // assert(document.querySelectorAll('.next-overlay-wrapper').length === initialLen);
        // triggered = false;
    });

    it('should trigger custom menu click event', () => {
        const onClick = cy.spy();
        cy.mount(
            <Dropdown
                defaultVisible
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                trigger={<a className="trigger">Hello dropdown</a>}
                animation={false}
            >
                <Menu onItemClick={onClick}>
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                </Menu>
            </Dropdown>
        );

        cy.get('.next-menu-item').first().click();
        cy.wrap(onClick).should('be.calledOnce').should('be.calledWith', '0-0');
    });

    //     it('should only focus when triggered by keyboard', done => {
    //         const mountNode = document.createElement('div');
    //         document.body.appendChild(mountNode);

    //         ReactDOM.render(
    //             <Dropdown
    //                 defaultVisible
    //                 trigger={<button className="trigger">Hello dropdown</button>}
    //                 animation={false}
    //             >
    //                 <Menu>
    //                     <Menu.Item>Option 1</Menu.Item>
    //                     <Menu.Item>Option 2</Menu.Item>
    //                     <Menu.Item>Option 3</Menu.Item>
    //                     <Menu.Item>Option 4</Menu.Item>
    //                 </Menu>
    //             </Dropdown>,
    //             mountNode
    //         );

    //         const trigger = document.querySelector('.trigger');

    //         trigger.focus();
    //         trigger.click();

    //         setTimeout(() => {
    //             assert(
    //                 document.activeElement !==
    //                     document.querySelectorAll('.next-menu-item')[0]
    //             );

    //             ReactTestUtils.Simulate.keyDown(trigger, {
    //                 keyCode: KEYCODE.SPACE,
    //             });

    //             setTimeout(() => {
    //                 assert(
    //                     document.activeElement ===
    //                         document.querySelectorAll('.next-menu-item')[0]
    //                 );

    //                 ReactDOM.unmountComponentAtNode(mountNode);
    //                 document.body.removeChild(mountNode);

    //                 done();
    //             }, 200);
    //         }, 200);
    //     });

    it('autoFocus=false should not have any activeElement', done => {
        cy.document().then(document => {
            // 创建新的 div 元素
            const mountNode = document.createElement('div');
            // 添加该 div 到 body 中
            document.body.appendChild(mountNode);

            // eslint-disable-next-line react/no-deprecated
            ReactDOM.render(
                <Dropdown
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={false}
                    trigger={<button className="trigger">Hello dropdown</button>}
                    animation={false}
                >
                    <Menu>
                        <Menu.Item>Option 1</Menu.Item>
                        <Menu.Item>Option 2</Menu.Item>
                        <Menu.Item>Option 3</Menu.Item>
                        <Menu.Item>Option 4</Menu.Item>
                    </Menu>
                </Dropdown>,
                mountNode
            );

            cy.get('.trigger').focus();
            ReactTestUtils.Simulate.keyDown(document.activeElement as Element, {
                keyCode: KEYCODE.DOWN,
            });

            setTimeout(() => {
                assert(document.activeElement !== document.querySelectorAll('.next-menu-item')[0]);

                // eslint-disable-next-line react/no-deprecated
                ReactDOM.unmountComponentAtNode(mountNode);
                document.body.removeChild(mountNode);

                done();
            }, 200);
        });
    });

    // 官网 demo 已经不生效了，不知道为啥单测能过, Overlay v2 需要确认下
    // it('autoFocus=true should have any activeElement when triggered by keyboard', done => {
    //     const mountNode = document.createElement('div');
    //     document.body.appendChild(mountNode);

    //     ReactDOM.render(
    //         <Dropdown
    //             autoFocus
    //             triggerType="click"
    //             trigger={<button className="trigger">Hello dropdown</button>}
    //             animation={false}
    //         >
    //             <Menu>
    //                 <Menu.Item>Option 1</Menu.Item>
    //                 <Menu.Item>Option 2</Menu.Item>
    //                 <Menu.Item>Option 3</Menu.Item>
    //                 <Menu.Item>Option 4</Menu.Item>
    //             </Menu>
    //         </Dropdown>,
    //         mountNode
    //     );

    //     const trigger = document.querySelector('.trigger');

    //     trigger.click();

    //     setTimeout(() => {
    //         assert(
    //             document.activeElement ===
    //                 document.querySelectorAll('.next-menu-item')[0]
    //         );

    //         ReactDOM.unmountComponentAtNode(mountNode);
    //         document.body.removeChild(mountNode);

    //         done();
    //     }, 200);
    // });
});
