import React from 'react';
import Radio from '../index';
import '../style';
import { testReact } from '../../util/__tests__/a11y/validate';

describe('Radio A11y', () => {
    it('should not have any violations for different states', async () => {
        await testReact(
            <div>
                <Radio defaultChecked label="test1">
                    test 1
                </Radio>
                &nbsp;
                <Radio checked label="test2">
                    test 1
                </Radio>
                &nbsp;
                <Radio disabled label="test3">
                    test 1
                </Radio>
                &nbsp;
                <Radio checked disabled label="test4">
                    test 1
                </Radio>
                &nbsp;
            </div>
        );
    });

    it('should not have any violations for Radio Group with children', async () => {
        await testReact(
            <Radio.Group value="watermelon">
                <Radio id="apple" value="apple" disabled>
                    苹果
                </Radio>
                <Radio id="pear" value="pear">
                    梨子
                </Radio>
                <Radio id="watermelon" value="watermelon">
                    西瓜
                </Radio>
            </Radio.Group>
        );
    });

    it('should not have any violations for Radio Group with datasource', async () => {
        const list = [
            {
                value: 'apple',
                label: '苹果',
                disabled: true,
            },
            {
                value: 'pear',
                label: '梨',
            },
            {
                value: 'orange',
                label: '橙子',
            },
        ];
        await testReact(<Radio.Group value={'apple'} dataSource={list} />);
    });

    it('should add tabIndex for first Radio Item', () => {
        cy.mount(
            <Radio.Group>
                <Radio id="pear" value="pear" checked>
                    ={true}
                    梨子
                </Radio>
                <Radio id="apple" value="apple" className="apple">
                    苹果
                </Radio>
            </Radio.Group>
        );
        cy.get('input#pear').should('have.prop', 'tabIndex', 0);
    });

    it('should not add tabIndex for non Radio Item', () => {
        cy.mount(
            <Radio.Group defaultValue={'pear'}>
                <div id="mywrapper">
                    <Radio id="pear" value="pear">
                        梨子
                    </Radio>
                </div>
                <div id="another" tabIndex={-100}>
                    <Radio id="apple" value="apple" className="apple">
                        苹果
                    </Radio>
                </div>
            </Radio.Group>
        );
        cy.get('div#mywrapper').should('have.prop', 'tabIndex', -1);
    });
});
