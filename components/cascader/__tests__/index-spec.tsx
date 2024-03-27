import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    type Dispatch,
    type SetStateAction,
} from 'react';
import cloneDeep from 'lodash.clonedeep';
import type { SinonSpy } from 'cypress/types/sinon';
import Cascader, { type CascaderDataItem, type CascaderProps } from '../index';
import '../style';

function freeze(dataSource: NonNullable<CascaderProps['dataSource']>) {
    return dataSource.map(item => {
        const { children } = item;
        children && freeze(children);
        return Object.freeze({ ...item });
    });
}

const ChinaArea: NonNullable<CascaderProps['dataSource']> = [
    {
        value: '2973',
        label: '陕西',
        children: [
            {
                value: '2974',
                label: '西安',
                children: [
                    { value: '2975', label: '西安市' },
                    { value: '2976', label: '高陵县' },
                ],
            },
            {
                value: '2980',
                label: '铜川',
                children: [
                    { value: '2981', label: '铜川市' },
                    { value: '2982', label: '宜君县' },
                ],
            },
        ],
    },
    {
        value: '3078',
        label: '四川',
    },
];

function compareDOMAndData(value: string, expandedValue: string[]) {
    const getTarget = (col: number, row: number, data = ChinaArea) => {
        const expanded = [...expandedValue];
        while (col !== 0) {
            const index = expanded.shift();
            const newData = data.find(item => item.value === index);
            data = newData?.children as CascaderDataItem[];
            col--;
        }
        return data[row];
    };
    cy.get('ul.next-cascader-menu').each(($menu, i) => {
        cy.wrap($menu)
            .find('li.next-cascader-menu-item')
            .each(($item, j) => {
                const target = getTarget(i, j);
                const targetLabel = target.label;
                cy.wrap($item).should('have.text', targetLabel);
                const curValue = target.value;
                if (curValue === value) {
                    cy.wrap($item).should('have.class', 'next-selected');
                }
                if (curValue === expandedValue[i]) {
                    cy.wrap($item).should('have.class', 'next-expanded');
                }
            });
    });
}

function compareIndeterminate(item: ReturnType<typeof cy.get>) {
    item.find('.next-checkbox-wrapper')
        .should('have.class', 'indeterminate')
        .should('not.have.class', 'checked');
}

function compareChecked(item: ReturnType<typeof cy.get>) {
    item.find('.next-checkbox-wrapper')
        .should('have.class', 'checked')
        .should('not.have.class', 'indeterminate');
}

function compareNotChecked(item: ReturnType<typeof cy.get>) {
    item.find('.next-checkbox-wrapper')
        .should('not.have.class', 'checked')
        .should('not.have.class', 'indeterminate');
}

function findItem(menuIndex: number, itemIndex?: number) {
    if (itemIndex !== undefined) {
        return cy
            .get('ul.next-cascader-menu')
            .eq(menuIndex)
            .find('li.next-cascader-menu-item')
            .eq(itemIndex);
    }
    return cy.get('ul.next-cascader-menu').eq(menuIndex).find('li.next-cascader-menu-item');
}

function checkItem(item: ReturnType<typeof cy.get>) {
    return item.find('input').click({ force: true });
}

function filter$Source(data: Record<string, any>[]) {
    if (!data) return;

    return [...data].map(it => {
        const item = {
            ...it,
        };
        delete item._source;
        return item;
    });
}
function sortByValue<T extends string[] | (Record<string, unknown> & { value?: string })[]>(
    data: T,
    isValue = false
): T {
    if (!isValue) {
        data.forEach(d => {
            if (typeof d === 'object') {
                delete d.children;
            }
        });
    }

    return data.sort((prev, next) => {
        if (isValue) {
            return Number(prev) - Number(next);
        }
        if (typeof prev === 'object' && typeof next === 'object') {
            return Number(prev.value) - Number(next.value);
        }
        return -1;
    }) as T;
}

function assertActiveElement() {
    let activeElement = document.activeElement;

    return (
        events: string,
        next: ReturnType<typeof cy.get> | (() => ReturnType<typeof cy.get>)
    ) => {
        cy.wrap(activeElement).type(events);
        next = typeof next === 'function' ? next() : next;
        next.then(($el: JQuery<HTMLElement>) => {
            const element = $el.get(0);
            cy.wrap(element).should('equal', document.activeElement);
            activeElement = element;
        });
    };
}

describe('Cascader', () => {
    it('should render single cascader', () => {
        const defaultValue = '2975';
        const defaultExpandedValue = ['2973', '2974'];
        const handleChange = cy.spy().as('handleChange');
        const handleExpand = cy.spy().as('handleExpand');
        cy.mount(
            <Cascader
                defaultValue={defaultValue}
                defaultExpandedValue={defaultExpandedValue}
                dataSource={ChinaArea}
                onChange={handleChange}
                onExpand={handleExpand}
            />
        );
        compareDOMAndData(defaultValue, defaultExpandedValue);

        findItem(1, 1)
            .click({ force: true })
            .then(() => {
                compareDOMAndData('2980', ['2973', '2980']);
                cy.get('@handleChange').should('have.been.calledOnce');
                cy.get<SinonSpy>('@handleChange').then($hc => {
                    const [v, d, e] = $hc.args[0] as Parameters<
                        NonNullable<CascaderProps['onChange']>
                    >;
                    cy.wrap(v).should('equal', '2980');
                    delete (d as CascaderDataItem).children;
                    delete (d as CascaderDataItem)._source;
                    cy.wrap(d).should('deep.equal', {
                        value: '2980',
                        label: '铜川',
                        pos: '0-0-1',
                    });
                    e.selectedPath!.forEach(d => {
                        delete d.children;
                        delete d._source;
                    });
                    cy.wrap(e).should('deep.equal', {
                        selectedPath: [
                            {
                                value: '2973',
                                label: '陕西',
                                pos: '0-0',
                            },
                            {
                                value: '2980',
                                label: '铜川',
                                pos: '0-0-1',
                            },
                        ],
                    });
                });
                cy.get('@handleExpand').should('have.been.calledOnce');
                cy.get('@handleExpand').should('have.been.calledWith', ['2973', '2980']);
            });
    });

    it('should render single cascader under control', () => {
        let VALUE = '2975';
        let EXPANDED = ['2973', '2974'];
        const handleChange = cy.spy().as('handleChange');
        const handleExpand = cy.spy().as('handleExpand');
        interface DemoRef {
            setDefaultValue: Dispatch<SetStateAction<string>>;
            setDefaultExpandedValue: Dispatch<SetStateAction<string[]>>;
        }
        const Demo = forwardRef<DemoRef>((props, ref) => {
            const [value, setValue] = useState(VALUE);
            const [expandedValue, setExpandedValue] = useState([...EXPANDED]);
            const [defaultValue, setDefaultValue] = useState('2973');
            const [defaultExpandedValue, setDefaultExpandedValue] = useState(['2973']);
            useImperativeHandle(ref, () => {
                return {
                    setValue,
                    setExpandedValue,
                    setDefaultValue,
                    setDefaultExpandedValue,
                };
            });

            return (
                <Cascader
                    defaultValue={defaultValue}
                    defaultExpandedValue={defaultExpandedValue}
                    value={value}
                    dataSource={ChinaArea}
                    expandedValue={expandedValue}
                    onChange={(...rest) => {
                        setValue(rest[0] as string);
                        VALUE = rest[0] as string;
                        handleChange(...rest);
                    }}
                    onExpand={ex => {
                        setExpandedValue(ex);
                        EXPANDED = ex;
                        handleExpand(ex);
                    }}
                />
            );
        });

        let demoRef: DemoRef | null;

        cy.mount(
            <Demo
                ref={c => {
                    demoRef = c;
                }}
            />
        );
        compareDOMAndData(VALUE, EXPANDED);

        findItem(1, 1)
            .click()
            .then(() => {
                compareDOMAndData(VALUE, EXPANDED);
                cy.get('@handleChange').should('be.calledOnce');
                cy.get('@handleExpand').should('be.calledOnce');
                demoRef!.setDefaultValue('2974');
                demoRef!.setDefaultExpandedValue(['2973', '2974']);
                compareDOMAndData(VALUE, EXPANDED);
            });
    });

    it('should not trigger onChange when click the selected item', () => {
        const handleChange = cy.spy().as('handleChange');
        cy.mount(
            <Cascader
                defaultValue="2980"
                defaultExpandedValue={['2973', '2980']}
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        findItem(1, 1).click();
        cy.get('@handleChange').should('not.be.called');
    });

    it('should support remove title', () => {
        const data = cloneDeep(ChinaArea);

        data[0].title = '';

        cy.mount(<Cascader dataSource={data} />);
        cy.get('.next-menu-item').eq(0).should('have.prop', 'title', '');
        cy.get('.next-menu-item').eq(1).should('have.prop', 'title', '四川');
    });

    it('could only select leaf item when set canOnlySelectLeaf to true', () => {
        const handleChange = cy.spy().as('handleChange');
        cy.mount(
            <Cascader
                defaultExpandedValue={['2973', '2974']}
                canOnlySelectLeaf
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );
        findItem(1, 1).click();
        cy.get('@handleChange').should('not.be.called');
    });

    it('could only check checkbox of leaf item when set canOnlyCheckLeaf to true', () => {
        cy.mount(
            <Cascader
                multiple
                defaultExpandedValue={['2973', '2974']}
                canOnlyCheckLeaf
                dataSource={ChinaArea}
            />
        );
        findItem(0, 0).find('.next-checkbox').should('not.exist');
        findItem(0, 1).find('.next-checkbox').should('exist');
    });

    it('should expand menu by hover when set expandTriggerType to hover', () => {
        let expandedValue;
        const handleExpand = cy.spy().as('handleExpand');
        cy.mount(
            <Cascader
                defaultValue="2975"
                defaultExpandedValue={['2973', '2974']}
                expandTriggerType="hover"
                dataSource={ChinaArea}
                onExpand={handleExpand}
            />
        );
        expandedValue = ['2973', '2980'];
        findItem(1, 1).trigger('mouseover', { force: true });
        cy.get('@handleExpand').should('be.calledWith', expandedValue);

        expandedValue = ['2973', '2974'];
        findItem(1, 1).trigger('mouseout', { force: true });
        cy.get('@handleExpand').should('be.calledWith', expandedValue);
    });

    it('should render multiple cascader', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];
        const handleChange = cy.spy().as('handleChange');
        cy.mount(
            <Cascader
                multiple
                defaultValue={['2975']}
                defaultExpandedValue={['2973', '2974']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );

        const item00 = findItem(0, 0);
        const item10 = findItem(1, 0);
        const item20 = findItem(2, 0);
        compareIndeterminate(item00);
        compareIndeterminate(item10);
        compareChecked(item20);

        checkItem(item00).then(() => {
            cy.get('@handleChange').should('be.called');
            cy.get<SinonSpy>('@handleChange').then($hc => {
                const [v, d, e] = $hc.args[0] as Parameters<NonNullable<CascaderProps['onChange']>>;
                const newD = filter$Source(d as CascaderDataItem[]);
                const item = {
                    ...e.currentData,
                };
                delete item._source;
                delete item.children;
                const newE = {
                    ...e,
                    currentData: item,
                    checkedData: filter$Source(e.checkedData!),
                    indeterminateData: filter$Source(e.indeterminateData!),
                };
                cy.wrap(sortByValue(v as string[], true)).should('deep.equal', ['2973']);
                cy.wrap(sortByValue(newD!)).should('deep.equal', [
                    { value: '2973', label: '陕西', pos: '0-0' },
                ]);
                newE.checkedData = sortByValue(newE.checkedData!);
                newE.indeterminateData = sortByValue(newE.indeterminateData!);
                cy.wrap(newE).should('deep.equal', {
                    checked: true,
                    currentData: { value: '2973', label: '陕西', pos: '0-0' },
                    checkedData: [
                        { value: '2973', label: '陕西', pos: '0-0' },
                        { value: '2974', label: '西安', pos: '0-0-0' },
                        { value: '2975', label: '西安市', pos: '0-0-0-0' },
                        { value: '2976', label: '高陵县', pos: '0-0-0-1' },
                        { value: '2980', label: '铜川', pos: '0-0-1' },
                    ],
                    indeterminateData: [],
                });
            });
            compareChecked(findItem(0, 0));
            [1, 2].forEach(index => {
                findItem(index).each(item => {
                    compareChecked(cy.wrap(item));
                });
            });
            checkItem(findItem(1, 0));
            cy.get('@handleChange').should('be.called');
            compareIndeterminate(findItem(0, 0));
            compareNotChecked(findItem(1, 0));
            findItem(2).each(item => {
                compareNotChecked(cy.wrap(item));
            });
        });
    });

    it('should render multiple cascader when set checkStrictly to true', () => {
        let curValue: any;
        let curData: any;
        let curExtra: any;
        const handleChange = cy.spy().as('handleChange');
        cy.mount(
            <Cascader
                checkStrictly
                multiple
                defaultValue={['2975']}
                defaultExpandedValue={['2973', '2974']}
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        );

        const item00 = findItem(0, 0);
        const item20 = findItem(2, 0);
        compareChecked(item20);
        const checkChange = ($hc: SinonSpy, value: any, data: any, extra: any, argsIndex = 0) => {
            const [v, d, e] = $hc.args[argsIndex] as Parameters<
                NonNullable<CascaderProps['onChange']>
            >;
            (d as CascaderDataItem[]).forEach(item => delete item._source);
            e.checkedData!.forEach(item => delete item._source);
            delete e.currentData!._source;
            cy.wrap(sortByValue(v as string[], true)).should('deep.equal', value);
            cy.wrap(sortByValue(d as CascaderDataItem[])).should('deep.equal', data);
            e.checkedData = sortByValue(e.checkedData!);
            cy.wrap(e).should('deep.equal', extra);
        };
        checkItem(item00).then(() => {
            curValue = ['2973', '2975'];
            curData = [
                { value: '2973', label: '陕西', pos: '0-0' },
                { value: '2975', label: '西安市', pos: '0-0-0-0' },
            ];
            curExtra = {
                checked: true,
                currentData: { value: '2973', label: '陕西', pos: '0-0' },
                checkedData: curData,
            };
            cy.get('@handleChange').should('be.called');
            cy.get<SinonSpy>('@handleChange').then($hc => {
                checkChange($hc, curValue, curData, curExtra);
            });
            compareChecked(findItem(0, 0));
            checkItem(findItem(2, 0)).then(() => {
                cy.get('@handleChange').should('be.called');
                curData = [{ value: '2973', label: '陕西', pos: '0-0' }];
                curExtra = {
                    checked: false,
                    currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
                    checkedData: [{ value: '2973', label: '陕西', pos: '0-0' }],
                };
                curValue = ['2973'];
                cy.get<SinonSpy>('@handleChange').then($hc => {
                    checkChange($hc, curValue, curData, curExtra, 1);
                });
                compareNotChecked(findItem(2, 0));
            });
        });
    });

    it('should compute expanded value auto if set value but not set expanded value', () => {
        cy.mount(<Cascader defaultValue={['2975']} dataSource={ChinaArea} />);
        findItem(0, 0).should('exist');
        findItem(1, 0).should('exist');
    });

    it('should load data asynchronously when set loadData', () => {
        const Demo = () => {
            const [dataSource, setDs] = useState<CascaderProps['dataSource']>([
                {
                    value: '2973',
                    label: '陕西',
                    isLeaf: false,
                },
            ]);
            function onLoadData() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        setDs([
                            {
                                value: '2973',
                                label: '陕西',
                                children: [
                                    {
                                        value: '2974',
                                        label: '西安',
                                        children: [
                                            {
                                                value: '2975',
                                                label: '西安市',
                                                isLeaf: true,
                                            },
                                            {
                                                value: '2976',
                                                label: '高陵县',
                                                isLeaf: true,
                                            },
                                        ],
                                    },
                                    {
                                        value: '2980',
                                        label: '铜川',
                                        children: [
                                            {
                                                value: '2981',
                                                label: '铜川市',
                                                isLeaf: true,
                                            },
                                            {
                                                value: '2982',
                                                label: '宜君县',
                                                isLeaf: true,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]);
                        resolve('');
                    }, 500);
                });
            }
            return <Cascader dataSource={dataSource} loadData={onLoadData} />;
        };

        cy.mount(<Demo />);
        findItem(0, 0)
            .click()
            .then(() => {
                findItem(0, 0).find('.next-cascader-menu-icon-loading').should('exist');
                findItem(1, 0).should('have.text', '西安');
                findItem(1, 1).should('have.text', '铜川');
            });
    });

    it('should support listClassName and listStyle', () => {
        cy.mount(
            <Cascader
                dataSource={ChinaArea}
                listStyle={{ width: '400px', height: '400px' }}
                listClassName="custom"
            />
        );

        cy.get('.next-cascader-menu-wrapper').should('have.css', 'width', '400px');
        cy.get('.next-cascader-menu-wrapper').should('have.css', 'height', '400px');
        cy.get('.next-cascader-menu').should('have.css', 'width', '400px');
        cy.get('.next-cascader-menu').should('have.css', 'height', '400px');
        cy.get('.next-cascader-menu-wrapper').should('have.class', 'custom');
    });

    it('should support keyboard', () => {
        cy.mount(<Cascader dataSource={ChinaArea} />);

        findItem(0, 0)
            .click()
            .then(() => {
                findItem(0, 0).then($el => {
                    cy.wrap($el.get(0)).should('equal', document.activeElement);
                });
                const assertAE = assertActiveElement();
                assertAE('{rightArrow}', () => findItem(1, 0));
                assertAE('{leftArrow}', findItem(0, 0));
                assertAE('{enter}', () => findItem(1, 0));
                assertAE('{esc}', findItem(0, 0));
                cy.get('.next-cascader-menu').should('have.length', 1);
            });
    });

    it('should set the style of the cascader inner node', () => {
        cy.mount(
            <Cascader
                id="cascader-style"
                defaultValue={['2975']}
                dataSource={ChinaArea}
                style={{ width: '700px' }}
                listStyle={{ width: '200px' }}
            />
        );

        cy.get('#cascader-style .next-cascader-inner').should('have.css', 'width', '600px');
        cy.get('.next-cascader-menu-wrapper').last().should('have.class', 'next-has-right-border');
    });

    it('support immutable data source', () => {
        cy.mount(<Cascader id="cascader-style" dataSource={freeze(ChinaArea)} immutable />);
    });

    it('should support rtl', () => {
        cy.mount(
            <Cascader
                id="cascader-style"
                rtl
                defaultValue={['2975']}
                dataSource={ChinaArea}
                style={{ width: '700px' }}
                listStyle={{ width: '200px' }}
            />
        );
        cy.get('#cascader-style').should('have.prop', 'dir', 'rtl');
    });

    // Fix https://github.com/alibaba-fusion/next/issues/4472
    it('Empty items at first level can collapse the next level panel while cross value', () => {
        const dataSource = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
                children: [
                    {
                        label: '2_1',
                        value: '2_1',
                    },
                ],
            },
        ];
        cy.mount(<Cascader value={['2_1']} multiple dataSource={dataSource} />);
        cy.get('.next-cascader-menu-wrapper').should('have.length', 2);
        cy.get('.next-menu-item[title="1"]').click();
        cy.get('.next-cascader-menu-wrapper').should('have.length', 1);
    });
});
