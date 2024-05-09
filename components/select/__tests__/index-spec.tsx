import React from 'react';
import { type SinonSpy } from 'cypress/types/sinon';
import Select, { type ObjectItem, type SelectProps } from '../index';
import '../style';

const { Option } = Select;

describe('Select', () => {
    beforeEach(() => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        cy.mount(<Select dataSource={dataSource} />).as('Demo');
    });

    it('should render from dataSource', () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('.next-menu-item').should('have.length', 1);
        cy.rerender('Demo', {
            value: 'yyy',
        });
        cy.get('.next-select em').should('have.text', 'xxx');
    });

    it('should support showDataSourceChildren to ignore dataSource children', () => {
        const dataSource = [
            {
                label: 'xxx',
                value: 'yyy',
                children: [
                    { label: 'xxx1', value: 'yyy1' },
                    { label: 'xxx2', value: 'yyy2' },
                ],
            },
            {
                label: 'label1',
                value: 'label1',
                children: [],
            },
        ];

        cy.rerender('Demo', {
            dataSource,
            visible: true,
            showDataSourceChildren: false,
        });

        cy.get('.next-menu-item').should('have.length', 2);
    });

    it('should support empty value from dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: 'empty', value: '' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('.next-menu-item').should('have.length', 2);
        cy.get('.next-menu-item').first().click();
        cy.get('.next-select em').should('have.text', 'xxx');
        cy.rerender('Demo', {
            value: '',
            dataSource,
        });
        cy.get('.next-select em').should('have.text', 'empty');
    });

    it('should support async dataSource', () => {
        const DATASOURCE = [
            { label: 'TT1', value: 'test1' },
            { label: 'TT2', value: 'test2' },
            { label: 'TT3', value: 'test3' },
        ];

        cy.mount(<Select defaultValue="test2" />).as('Demo2');

        cy.rerender('Demo2', {
            dataSource: DATASOURCE,
        });

        cy.get('.next-select em').should('have.text', 'TT2');
    });

    it('should support custom title', () => {
        const dataSource = [
            { label: 'xxx', value: 'yyy', title: 'abc' },
            { label: 'empty ', value: ' ', title: '' },
            { label: 'empty undefined', value: 'undefined', title: undefined },
            { label: 'empty null', value: 'null', title: null },
            { label: 'bbbbb', value: 'bbbbb' },
            { label: 'cccc', value: 'cccc' },
            { label: <span>dasbx</span>, value: 'ddddd' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('.next-menu-item').should('have.length', 7);
        cy.get('ul li').eq(0).should('have.attr', 'title', 'abc');
        cy.get('ul li').eq(1).should('have.attr', 'title', '');
        cy.get('ul li').eq(2).should('not.have.attr', 'title');
        cy.get('ul li').eq(3).should('not.have.attr', 'title');
        cy.get('ul li').eq(4).should('have.attr', 'title', 'bbbbb');
        cy.get('ul li').eq(5).should('have.attr', 'title', 'cccc');
        cy.get('ul li').eq(6).should('not.have.attr', 'title');
    });

    it('should support title in valueRender', () => {
        const handleValueRender = cy.spy().as('handleValueRender');
        const dataSource = [
            { label: 'xxx', value: 'yyy', title: 'abc' },
            { label: 'empty ', value: ' ', title: '' },
            { label: 'empty undefined', value: 'undefined', title: undefined },
            { label: 'empty null', value: 'null', title: null },
            { label: <span>dasbx</span>, value: 'ddddd' },
        ];

        class App extends React.Component {
            render() {
                return (
                    <Select
                        mode="multiple"
                        dataSource={dataSource}
                        defaultValue={['yyy', ' ', 'undefined', 'null', 'ddddd']}
                        valueRender={item => {
                            handleValueRender(item);
                            return item.label;
                        }}
                    />
                );
            }
        }

        cy.mount(<App />);

        cy.get('@handleValueRender').should('be.calledWithMatch', { title: 'abc' });
        cy.get('@handleValueRender').should('be.calledWithMatch', { title: '' });
        cy.get('@handleValueRender').should('be.calledWithMatch', { title: undefined });
        cy.get('@handleValueRender').should('be.calledWithMatch', { title: null });
        cy.get('@handleValueRender').should('be.calledWithMatch', { title: undefined });
    });

    it('should change display text while choose item and change dataSource', () => {
        const dataSource = ['abc', 'bbb'];
        class App extends React.Component {
            render() {
                return (
                    <Select
                        defaultValue={'0'}
                        visible
                        dataSource={dataSource.map((i, idx) => {
                            return { value: idx, label: i };
                        })}
                        onChange={() => {
                            this.setState({
                                a: 1,
                            });
                        }}
                    />
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-menu-item').eq(1).click();
        cy.get('.next-select em').should('have.text', 'bbb');
    });

    it('should not change text while under controlled', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: 0 },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            value: 0,
        });
        cy.get('.next-menu-item').first().click();
        cy.get('.next-select em').should('have.text', 'empty');
    });

    it('should support not string value', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').first().click();
        cy.get('@onChange').should('be.calledWith', 123);
    });

    it('should support special value', () => {
        const dataSource = [
            { label: 'xxx', value: 0 },
            { label: 'empty', value: false },
        ];
        cy.rerender('Demo', {
            dataSource,
            value: 0,
        });
        cy.get('span.next-select em').should('have.text', 'xxx');
    });

    it('should support useDetailValue with mode=single', () => {
        const dataSource = [
            { label: 'xxx', value: 0 },
            { label: 'empty', value: false },
        ];
        cy.rerender('Demo', {
            dataSource,
            useDetailValue: true,
            value: { label: 'xxx', value: 0 },
        });
        cy.get('span.next-select em').should('have.text', 'xxx');
    });

    it('should support useDetailValue with mode=multiple', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        cy.rerender('Demo', {
            dataSource,
            useDetailValue: true,
            mode: 'multiple',
            value: [{ label: 'xxx', value: '0' }],
        });
        cy.get('span.next-select div.next-tag').should('have.length', 1);
    });

    it('should support useDetailValue with mode=multiple and showSearch', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        const handleChange = cy.spy().as('onChange');
        const handleSearchClear = cy.spy().as('onSearchClear');

        cy.rerender('Demo', {
            dataSource,
            useDetailValue: true,
            showSearch: true,
            mode: 'multiple',
            value: [{ label: 'xxx', value: '0' }],
            onChange: handleChange,
            onSearchClear: handleSearchClear,
        });
        cy.get('span.next-select div.next-tag').should('have.length', 1);
        cy.get('input').type('e');
        cy.get('input').type('{enter}');
        cy.get('@onSearchClear').should('be.called');
        cy.get<SinonSpy>('@onChange').then($hc => {
            const [v] = $hc.args[0] as Parameters<NonNullable<SelectProps['onChange']>>;
            cy.wrap(v).should('have.length', 2);
        });
    });

    it('should support render from options', () => {
        cy.rerender('Demo', {
            /* key 有特殊含义，会影响测试的含义 */
            /* eslint-disable react/jsx-key */
            children: [<Select.Option value={123}>123label</Select.Option>],
            /* eslint-enable react/jsx-key */
            visible: true,
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('span.next-select em').should('have.text', '123label');
    });

    it('should renderPreview', () => {
        cy.mount(<Select isPreview dataSource={[]} value={null} />);
        cy.get('.next-form-preview').should('have.text', '');
    });

    it('preview and edit should keep same content without dataSource', () => {
        cy.mount(<Select dataSource={[]} value={1} />);
        cy.get('span.next-select em').should('have.text', '1');
        cy.mount(<Select isPreview dataSource={[]} value={1} />);
        cy.get('.next-form-preview').should('have.text', '1');
    });

    it('preview and edit should keep same content with ValueRender', () => {
        cy.mount(
            <Select
                dataSource={[{ label: 'test', value: '1' }]}
                valueRender={v => v.value}
                value={1}
            />
        );
        cy.get('span.next-select em').should('have.text', '1');

        cy.mount(
            <Select
                isPreview
                dataSource={[{ label: 'test', value: '1' }]}
                valueRender={v => v.value}
                value={1}
            />
        );
        cy.get('.next-form-preview').should('have.text', '1');
    });

    it('preview and edit should keep same content', () => {
        cy.mount(<Select dataSource={[{ label: 'test', value: '1' }]} value={1} />);
        cy.get('span.next-select em').should('have.text', 'test');
        cy.mount(<Select isPreview dataSource={[{ label: 'test', value: '1' }]} value={1} />);
        cy.get('.next-form-preview').should('have.text', 'test');
    });

    it('render preview content when use multiple select', () => {
        cy.mount(
            <Select
                dataSource={[{ label: '测试 111', value: 1 }]}
                value={[1]}
                mode="multiple"
                isPreview
            />
        );

        cy.get('.next-form-preview').should('have.text', '测试 111');
    });

    it('should renderPreview mode="tag"', () => {
        cy.mount(<Select isPreview mode="tag" dataSource={[]} value={null} />);
        cy.get('.next-form-preview').should('have.text', '');
    });

    it('should support children null', () => {
        cy.rerender('Demo', {
            /* key 有特殊含义，会影响测试的含义 */
            /* eslint-disable react/jsx-key */
            children: [<Select.Option value={123}>123label</Select.Option>, null],
            /* eslint-enable react/jsx-key */
            visible: true,
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('span.next-select em').should('have.text', '123label');
    });

    it('should support fillProps', () => {
        cy.rerender('Demo', {
            visible: true,
            fillProps: 'value',
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('span.next-select em').should('have.text', 'yyy');
    });

    it('should support fillProps=anything with empty dataSource', () => {
        cy.rerender('Demo', {
            value: 'jack',
            visible: true,
            fillProps: 'anything',
            dataSource: [],
        });
        cy.get('.next-select em').should('have.text', 'jack');
    });

    it('should support disabled', () => {
        cy.rerender('Demo', {
            disabled: true,
            popupProps: { cache: false },
        });
        cy.get('.next-select').click();
        cy.get('.next-menu-item').should('have.length', 0);
    });

    it('should support multiple', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        cy.rerender('Demo', {
            visible: true,
            dataSource,
            mode: 'multiple',
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('.next-tag-body').should('have.text', 'xxx');
        cy.get('.next-menu-item').eq(1).click();
        cy.get('.next-tag-body').eq(1).should('have.text', 'empty');
        cy.rerender('Demo', {
            visible: true,
            dataSource,
            mode: 'multiple',
            fillProps: 'value',
        });
        cy.get('.next-tag-body').eq(0).should('have.text', '123');
        cy.get('.next-tag-body').eq(1).should('have.text', '');
    });

    it('should show colorful Tag when dataSource item has color', () => {
        const dataSource = [
            { value: '10001', label: 'Lucy King', color: 'orange' },
            { value: 10002, label: 'Lily King', color: 'green' },
            { value: 10003, label: 'Tom Cat', disabled: true, color: 'blue' },
            {
                label: 'Special Group',
                children: [
                    { value: -1, label: 'FALSE', color: 'purple' },
                    { value: 0, label: 'ZERO', color: 'pink' },
                ],
            },
        ];
        class App extends React.Component {
            render() {
                return (
                    <Select
                        value={[10001, 10002, 10003]}
                        mode="multiple"
                        dataSource={dataSource}
                        useVirtual
                    />
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-tag').should('have.length', 3);
        cy.get('.next-tag').eq(0).should('have.css', 'backgroundColor', 'rgb(255, 147, 0)');
        cy.get('.next-tag').eq(1).should('have.css', 'backgroundColor', 'rgb(70, 188, 21)');
        cy.get('.next-tag').eq(2).should('have.css', 'backgroundColor', 'rgb(68, 148, 249)');
    });

    it('should support showSearch', () => {
        cy.rerender('Demo', {
            showSearch: true,
            visible: true,
        });
        cy.get('.next-select-trigger-search input').should('exist');
        cy.get('.next-select-trigger-search input').type('zzzz');
        cy.get('.next-menu-item').should('have.length', 0);
    });

    it('should support keyCode up & down', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('input').type('{downArrow}', { force: true });
        cy.get('.next-menu-item.next-focused').should('have.length', 1);
        cy.get('input').type('{enter}', { force: true });
        cy.get('span.next-select em').should('have.text', 'empty');
        cy.get('input').type('{upArrow}', { force: true });
        cy.get('input').type('{enter}', { force: true });
        cy.get('span.next-select em').should('have.text', 'xxx');
    });

    it('should support popupClassName', () => {
        cy.rerender('Demo', {
            popupClassName: 'menu-customize',
            visible: true,
        });
        cy.get('.menu-customize').should('exist');
    });

    it('should support tags', () => {
        const onChange = cy.spy().as('onChange');
        const onSearchClear = cy.spy().as('onSearchClear');
        cy.rerender('Demo', {
            mode: 'tag',
            onChange,
            onSearchClear,
        });
        cy.get('.next-select').click();
        cy.get('input').type('j');
        cy.get('input').type('{enter}');
        cy.get('@onChange').should('be.calledWith', ['j']);
        cy.get('@onSearchClear').should('be.called');
    });

    it('should support tags delete', () => {
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            mode: 'tag',
            value: ['yyy'],
            onChange,
        });
        cy.get('input').type('{backspace}');
        cy.get('@onChange').should('be.calledWith', []);
    });

    it('should support tags delete by click', () => {
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            mode: 'tag',
            value: ['yyy'],
            onChange,
        });
        cy.get('div.next-tag .next-tag-close-btn').click();
        cy.get('@onChange').should('be.calledWith', []);
    });

    it('should not delete disabled item with BACKSPACE', () => {
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            mode: 'tag',
            dataSource: [
                { value: '10001', label: 'Lucy King' },
                { value: '10003', label: 'Tom Cat', disabled: true },
            ],
            value: ['10001', '10003'],
            onChange,
        });
        cy.get('input').type('{backspace}');
        cy.get('@onChange').should('not.be.called');
        cy.get('div.next-tag .next-tag-close-btn').first().click();
        cy.get('@onChange').should('be.calledWith', ['10003']);
    });

    it('should support mode=tag with visible=false', () => {
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            mode: 'tag',
            visible: false,
            value: ['yyy'],
            onChange,
        });
        cy.get('input').type('bbb');
        cy.get('input').type('{enter}');
        cy.get('@onChange').should('be.calledWith', ['yyy', 'bbb']);
    });

    it('should support mode=tag with hasClear', () => {
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            mode: 'tag',
            hasClear: true,
            value: ['yyy'],
            onChange,
        });
        cy.get('i.next-icon-delete-filling').click({ force: true });
        cy.get('@onChange').should('be.calledWith', undefined);
    });

    it('should support maxTagCount', () => {
        const value = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
            { label: 'zzz', value: 1 },
            { label: 'yyy', value: 1 },
        ];
        cy.rerender('Demo', {
            visible: true,
            maxTagCount: 2,
            mode: 'tag',
            value,
        });
        cy.get('span.next-select div.next-tag').should('have.length', 3);
    });

    it('should support tagInline', () => {
        const value = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
            { label: 'zzz', value: 1 },
            { label: 'yyy', value: 1 },
        ];
        cy.rerender('Demo', {
            visible: true,
            tagInline: true,
            mode: 'tag',
            value,
        });
        cy.get('span.next-select .next-select-compact div.next-select-tag-compact').should(
            'have.length',
            1
        );
    });

    it('should support adjustTagSize', () => {
        const value = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
            { label: 'zzz', value: 1 },
            { label: 'yyy', value: 1 },
        ];
        cy.rerender('Demo', {
            visible: true,
            adjustTagSize: true,
            mode: 'tag',
            value,
        });
        cy.get('span.next-select span.next-select-values div.next-tag-medium').should(
            'have.length',
            4
        );
    });

    it('should support onChange with mode=single ', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').eq(1).click();
        cy.get<SinonSpy>('@onChange').then($hc => {
            const [v, e, item] = $hc.args[0] as Parameters<NonNullable<SelectProps['onChange']>>;
            cy.wrap(v).should('equal', 1);
            cy.wrap((item as ObjectItem).value).should('equal', 1);
        });
    });

    it('should support onChange with mode=multiple ', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            mode: 'multiple',
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').eq(1).click();
        cy.get<SinonSpy>('@onChange').then($hc => {
            const [v, e, item] = $hc.args[0] as Parameters<NonNullable<SelectProps['onChange']>>;
            cy.wrap(v).should('have.length', 1);
            cy.wrap(item).should('have.length', 1);
        });
    });

    it('should support useDetailValue onChange with mode=single ', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            useDetailValue: true,
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').eq(1).click();
        cy.get('@onChange').should('be.calledWithMatch', { label: 'empty' });
    });

    it('should support useDetailValue onChange with mode=multiple ', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            useDetailValue: true,
            mode: 'multiple',
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').eq(1).click();
        cy.get<SinonSpy>('@onChange').then($hc => {
            const [v] = $hc.args[0] as Parameters<NonNullable<SelectProps['onChange']>>;
            cy.wrap(v).should('have.length', 1);
        });
    });

    it('should support hiddenSelected', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        const onVisibleChange = cy.spy().as('onVisibleChange');
        cy.rerender('Demo', {
            dataSource,
            mode: 'multiple',
            visible: true,
            hiddenSelected: true,
            onVisibleChange,
        });
        cy.get('input').type('{downArrow}', { force: true });
        cy.get('input').type('{downArrow}', { force: true });
        cy.get('input').type('{enter}', { force: true });
        cy.get('@onVisibleChange').should('be.calledWith', false);
    });

    // 输入 aaa 回车，不关闭弹层
    it('should not close popup while searching and searchValue not in dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        cy.rerender('Demo', {
            dataSource,
            mode: 'single',
            popupProps: { cache: false },
            showSearch: true,
        });

        // a 回车，搜索到值，弹层关闭
        cy.get('input').type('a');
        cy.get('input').type('{enter}');
        cy.get('.next-select-menu').should('not.exist');

        // aaa 回车，搜索不到值，弹层打开状态
        cy.get('input').type('aaa');
        cy.get('input').type('{enter}');
        cy.get('.next-select-menu .next-select-menu-empty-content').should('have.length', 1);
        cy.get('.next-select-menu').should('exist');
    });

    it('should support select all and unselect all', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            mode: 'multiple',
            hasSelectAll: true,
        });
        cy.get('.next-select-all').click();
        cy.get('.next-menu-icon-selected').should('have.length', 3);

        cy.get('.next-select-menu-item').eq(0).click();
        cy.get('.next-menu-icon-selected').should('have.length', 1);

        cy.get('.next-select-all').click();
        cy.get('.next-menu-icon-selected').should('have.length', 3);

        cy.get('.next-select-all').click();
        cy.get('.next-menu-icon-selected').should('have.length', 0);
    });
});

describe('Select Controlled', () => {
    beforeEach(() => {
        cy.mount(
            <Select value={undefined} showSearch dataSource={[{ label: 'xxx', value: 'yyy' }]} />
        ).as('Demo');
    });

    it('should support Modify value', () => {
        cy.rerender('Demo', {
            value: 'yyy',
        });

        cy.get('.next-select em').should('have.text', 'xxx');

        cy.rerender('Demo', {
            value: undefined,
        });

        cy.get('.next-select em').should('have.length', 0);
    });

    it('should support Modify searchValue', () => {
        cy.rerender('Demo', {
            searchValue: 'xy',
            visible: true,
            // 只有当 dataSource 触发变化时，searchValue 才会生效
            dataSource: [{ label: 'xxx', value: 'yyy' }],
        });

        cy.get('.next-select input').should('have.value', 'xy');
        cy.get('.next-select-menu .next-select-menu-empty-content').should('have.length', 1);

        cy.rerender('Demo', {
            searchValue: undefined,
            visible: true,
            // 只有当 dataSource 触发变化时，searchValue 才会生效
            dataSource: [{ label: 'xxx', value: 'yyy' }],
        });

        cy.get('.next-menu-item').should('have.length', 1);
    });
});

describe('AutoComplete', () => {
    beforeEach(() => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: '123', value: 444 },
        ];
        cy.mount(<Select.AutoComplete dataSource={dataSource} />).as('Demo');
    });

    it('should render from dataSource', () => {
        cy.rerender('Demo', {
            value: 'yyy',
            visible: true,
        });
        cy.get('input').should('have.value', 'yyy');
        cy.get('.next-menu-item').should('have.length', 2);
    });

    it('should support empty value from dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: 'empty', value: '' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('.next-menu-item').should('have.length', 2);
        cy.get('.next-menu-item').eq(0).click();
        cy.get('input').should('have.value', 'yyy');
        cy.rerender('Demo', {
            value: '',
        });
        cy.get('input').should('have.value', '');
    });

    it('should support not string value', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        const onChange = cy.spy().as('onChange');
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            onChange,
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('@onChange').should('be.calledWith', 123);
    });

    it('should render from options', () => {
        cy.rerender('Demo', {
            children: <Select.Option value="123">123</Select.Option>,
            value: '123',
            visible: true,
        });
        cy.get('.next-menu-item').eq(0).should('have.text', '123');
        cy.get('input').should('have.value', '123');
    });

    it('should support fillProps', () => {
        cy.rerender('Demo', {
            visible: true,
            fillProps: 'label',
        });
        cy.get('.next-menu-item').eq(0).click();
        cy.get('input').should('have.value', 'xxx');
    });

    it('should pass value to input from props', () => {
        cy.rerender('Demo', {
            value: 'yyyyx',
        });
        cy.get('input').should('have.value', 'yyyyx');
        cy.rerender('Demo', {
            value: 'yyy',
            fillProps: 'label',
        });
        cy.get('input').should('have.value', 'yyy');
    });

    it('should support filter', () => {
        cy.rerender('Demo', {
            defaultVisible: true,
        });
        cy.get('input').type('jkl');
        cy.get('.next-menu-item').should('have.length', 0);
        cy.get('input').clear();
        cy.get('input').type('y');
        cy.get('.next-menu-item').should('have.length', 1);
    });

    it('should support receive undefined value', () => {
        class App extends React.Component {
            state = {
                value: '',
            };
            componentDidMount() {
                this.setState({
                    value: undefined,
                });
            }
            render() {
                return <Select.AutoComplete dataSource={[]} value={this.state.value} multiple />;
            }
        }
        cy.mount(<App />);
        cy.get('.next-select').should('exist');
    });

    it('should support keyCode up & down', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
        });
        cy.get('input').type('{downArrow}');
        cy.get('input').type('{downArrow}');
        cy.get('.next-menu-item.next-focused').should('have.length', 1);
        cy.get('input').type('{enter}');
        cy.get('input').should('have.value', 'b');

        cy.get('input').type('{backspace}');
        cy.get('input').type('{upArrow}');
        cy.get('input').type('{enter}');
        cy.get('input').should('have.value', 'a');
    });

    it('should remove highlightKey while value changed', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        cy.rerender('Demo', {
            dataSource,
            visible: true,
            autoHighlightFirstItem: false,
        });
        cy.get('input').type('{downArrow}');
        cy.get('input').type('{downArrow}');
        cy.get('input').type('{enter}');
        cy.get('.next-menu-item.next-focused').should('have.length', 1);
        cy.get('input').clear();
        cy.get('.next-menu-item.next-focused').should('have.length', 0);
    });

    it('should input keyCode space with popupContent', () => {
        cy.rerender('Demo', {
            popupContent: <div>any</div>,
            visible: true,
        });
        cy.get('input').type(' ');
        cy.get('input').should('have.value', ' ');
    });

    it('should fix autoWidth bug', () => {
        class App extends React.Component {
            render() {
                return (
                    <Select placeholder="选择尺寸" style={{ float: 'right' }}>
                        <Option value="small">Small</Option>
                        <Option value="medium">MediumMediumMediumMediumMedium</Option>
                        <Option value="large">Large</Option>
                    </Select>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-select').click();
        cy.get('.next-select').then($el => {
            const select = $el.get(0);
            const rect = select.getBoundingClientRect();
            const left = parseFloat(
                document.querySelector<HTMLElement>('.next-select-single-menu')!.style.left
            );
            cy.wrap(left).should('equal', rect.left);
        });
    });

    it('should prevent scroll when click wrapper', () => {
        let prevScrollLeft: number | undefined;
        cy.mount(
            <div className="select-scroll-wrapper" style={{ width: 300, overflowX: 'scroll' }}>
                <Select
                    style={{ width: 540 }}
                    dataSource={[
                        { label: 'xxx', value: 'yyy' },
                        { label: 'empty', value: '' },
                    ]}
                />
            </div>
        );
        cy.get('.select-scroll-wrapper').then($el => {
            prevScrollLeft = $el.scrollLeft();
        });
        cy.get('.select-scroll-wrapper').click();
        cy.get('.select-scroll-wrapper').then($el => {
            const scrollLeft = $el.scrollLeft();
            cy.wrap(scrollLeft).should('equal', prevScrollLeft);
        });
    });

    describe('react api', () => {
        it('calls componentWillReceiveProps', () => {
            cy.rerender('Demo', { value: '30' });
            cy.get('input').should('have.value', '30');

            // value = undefined 时候清空数据
            cy.rerender('Demo', { value: undefined });
            cy.get('input').should('have.value', '');
        });
    });
});

describe('virtual list', function () {
    it('should works with showSearch', () => {
        const dataSource = [
            { label: '海关总署', value: '0000' },
            { label: '北京关区', value: '0100' },
            { label: '机场单证', value: '0101' },
            { label: '京监管处', value: '0102' },
            { label: '京关展览', value: '0103' },
            { label: '京一处', value: '0104' },
            { label: '京二处', value: '0105' },
            { label: '京关关税', value: '0106' },
            { label: '机场库区', value: '0107' },
            { label: '京通关处', value: '0108' },
        ];

        cy.mount(
            <Select
                placeholder="选择尺寸"
                useVirtual
                hasSelectAll
                tagInline
                mode="multiple"
                showSearch
                style={{ float: 'right' }}
                dataSource={dataSource}
            />
        );

        cy.get('.next-select').click();
        cy.get('input').type('fff');
        cy.get('input').type('{enter}');
        cy.get('.next-select').should('exist');
    });

    it('should works with onScroll', () => {
        const generateItems = (start: number, end: number) => {
            return new Array(end - start).fill(null).map((_, i) => ({
                label: `option${start + i}`,
                value: `option${start + i}`,
            }));
        };
        const scrollHandler = cy.spy().as('onScroll');
        function Spec() {
            const [ds, setDS] = React.useState(generateItems(0, 20));
            const dsRef = React.useRef(ds);
            dsRef.current = ds;
            const onScroll: NonNullable<SelectProps['menuProps']>['onScroll'] = e => {
                scrollHandler();
                const currentDataSource = dsRef.current;
                const length = currentDataSource.length;
                const target = e.target as HTMLElement;
                const scrollHeight = target.scrollHeight; // 内容总高度
                const offsetHeight = target.offsetHeight; // 窗口高度
                const scrollTop = target.scrollTop; //滚动高度
                if (scrollTop + offsetHeight >= scrollHeight - 40) {
                    // 到达底部
                    const otherData = generateItems(length, length + 20);

                    setDS(currentDataSource.concat(otherData));
                }
            };
            return <Select useVirtual dataSource={ds} menuProps={{ onScroll }} visible />;
        }
        cy.mount(<Spec />);
        cy.get('.next-select-menu-wrapper').as('menuWrapper').should('exist');
        cy.get('.next-select-menu-wrapper .next-menu-item[title="option10"]').should('exist');

        let page = 1;
        const pageSize = 20;
        const itemHeight = 32;
        const scrollToNextLimit = () => {
            cy.then(() => {
                cy.get('@menuWrapper').scrollTo(0, page * pageSize * itemHeight, { duration: 200 });
                cy.get(`.next-menu-item[title="option${page * pageSize + 2}"]`).should('exist');
                cy.then(() => {
                    page++;
                });
            });
        };
        scrollToNextLimit();
        scrollToNextLimit();
        scrollToNextLimit();
    });
});
