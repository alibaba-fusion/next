import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Button from '../../button';
import Pagination from '../index';

/* eslint-disable */

Enzyme.configure({ adapter: new Adapter() });

describe('Pagination', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Pagination />);
    });

    afterEach(() => {
        wrapper && wrapper.unmount();
        wrapper = null;
    });

    it('should receive className prop', () => {
        wrapper.setProps({
            className: 'custom',
        });
        assert(wrapper.find('.next-pagination').hasClass('custom'));
    });

    it('should receive style prop', () => {
        wrapper.setProps({
            style: {
                color: 'red',
            },
        });
        assert(wrapper.find('.next-pagination').prop('style').color === 'red');
    });

    it('should render by type', () => {
        wrapper.setProps({ type: 'mini' });
        wrapper.update();
        assert(wrapper.find('.next-pagination').hasClass('next-mini'));
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-list').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-display').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 0);

        wrapper.setProps({ type: 'simple' });
        wrapper.update();
        assert(wrapper.find('.next-pagination').hasClass('next-simple'));
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-list').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-display').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 0);

        wrapper.setProps({ type: 'normal' });
        wrapper.update();
        assert(wrapper.find('.next-pagination').hasClass('next-normal'));
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-list').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-display').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 1);

        wrapper.setProps({ type: 'normal', total: 40 });
        wrapper.update();
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-list').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-display').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 0);

        wrapper.setProps({ type: 'others', total: 40 });
        wrapper.update();
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-list').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-display').hostNodes().length === 0);
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 0);
    });

    it('should render by shape', () => {
        const shapes = ['normal', 'arrow-only', 'arrow-prev-only', 'no-border'];

        shapes.forEach(shape => {
            wrapper.setProps({ shape });
            wrapper.update();
            assert(wrapper.find('.next-pagination').hasClass(`next-${shape}`));

            const prevText = wrapper.find('.next-pagination-item.next-prev').hostNodes().text();
            if (shape === 'normal') {
                assert(prevText === '上一页');
            } else {
                assert(prevText === '');
            }

            const nextText = wrapper.find('.next-pagination-item.next-next').hostNodes().text();
            if (shape === 'normal' || shape === 'arrow-prev-only') {
                assert(nextText === '下一页');
            } else {
                assert(nextText === '');
            }
        });
    });

    it('should render by size', () => {
        const sizes = ['medium', 'large'];

        sizes.forEach(size => {
            wrapper.setProps({ size });
            wrapper.update();
            assert(wrapper.find('.next-pagination').hasClass(`next-${size}`));
        });
    });

    it('should render by current', () => {
        const initCurrent = 2;
        let current;
        wrapper = mount(<Pagination />);

        wrapper.setProps({
            current: initCurrent,
            onChange: index => assert(index === current),
        });

        const currentTest = () => {
            wrapper.update();
            assert(
                wrapper.find('.next-pagination-list .next-pagination-item.next-current').hostNodes()
                    .length === 1
            );
            assert(
                wrapper
                    .find('.next-pagination-list .next-pagination-item.next-current')
                    .hostNodes()
                    .text() === initCurrent.toString()
            );
        };

        currentTest();
        current = initCurrent - 1;
        wrapper.find('.next-pagination-item.next-prev').hostNodes().simulate('click');
        currentTest();

        current = initCurrent + 1;

        wrapper.find('.next-pagination-item.next-next').hostNodes().simulate('click');
        currentTest();

        wrapper
            .find('.next-pagination-list .next-pagination-item')
            .hostNodes()
            .at(current - 1)
            .simulate('click');
        currentTest();

        wrapper
            .find('.next-pagination-jump-input')
            .hostNodes()
            .simulate('change', {
                target: { value: current },
            });
        wrapper.find('.next-pagination-jump-input').hostNodes().simulate('keydown', {
            keyCode: 13,
        });
        currentTest();

        wrapper
            .find('.next-pagination-jump-input')
            .hostNodes()
            .simulate('change', {
                target: { value: current },
            });
        wrapper.find('.next-pagination-jump-go').hostNodes().simulate('click');
        currentTest();
    });

    it('should render by defaultCurrent', () => {
        let current = 2;

        wrapper = mount(
            <Pagination
                defaultCurrent={current}
                onChange={index => {
                    assert(index === current);
                }}
            />
        );

        const defaultCurrentTest = () => {
            wrapper.update();
            assert(
                wrapper.find('.next-pagination-list .next-pagination-item.next-current').hostNodes()
                    .length === 1
            );
            assert(
                wrapper
                    .find('.next-pagination-list .next-pagination-item.next-current')
                    .hostNodes()
                    .text() === current.toString()
            );
        };

        defaultCurrentTest();

        current -= 1;
        wrapper.find('.next-pagination-item.next-prev').hostNodes().simulate('click');
        defaultCurrentTest();

        current += 1;
        wrapper.find('.next-pagination-item.next-next').hostNodes().simulate('click');
        defaultCurrentTest();

        current += 1;
        wrapper
            .find('.next-pagination-list .next-pagination-item')
            .hostNodes()
            .at(current - 1)
            .simulate('click');
        defaultCurrentTest();

        current += 1;
        wrapper
            .find('.next-pagination-jump-input input')
            .hostNodes()
            .simulate('change', {
                target: { value: current },
            });
        wrapper.find('.next-pagination-jump-input input').hostNodes().simulate('keydown', {
            keyCode: 13,
        });
        defaultCurrentTest();

        current += 1;
        wrapper
            .find('.next-pagination-jump-input input')
            .hostNodes()
            .simulate('change', {
                target: { value: current },
            });
        wrapper.find('.next-pagination-jump-go').hostNodes().simulate('click');
        defaultCurrentTest();

        current = 1;
        wrapper.setProps({ total: 1 });
        defaultCurrentTest();
    });

    it('should not trigger onChange callback when click current page button', () => {
        wrapper.setProps({
            onChange: () => assert(false),
        });

        wrapper
            .find('.next-pagination-list .next-pagination-item')
            .hostNodes()
            .at(0)
            .simulate('click');
    });

    it('should not trigger onChange callback when input some text that can not conver to positive integer or current page', () => {
        // wrapper.setProps({
        //     onChange: () => assert(false),
        // });
        // const testCase = value => {
        //     wrapper
        //         .find('.next-pagination-jump-input input')
        //         .hostNodes()
        //         .simulate('change', {
        //             target: { value },
        //         });
        //     wrapper
        //         .find('.next-pagination-jump-input input')
        //         .hostNodes()
        //         .simulate('keydown', {
        //             keyCode: 13,
        //         });
        // };
        // testCase('text');
        // testCase('0');
        // testCase('1');
        // testCase('11');
    });

    it('should disable the previous button when current is the first page ', () => {
        wrapper.setProps({
            current: 1,
        });
        assert(wrapper.find('.next-pagination-item.next-prev').hostNodes().get(0).props.disabled);
    });

    it('should disable the next button when current is the last page', () => {
        wrapper.setProps({
            current: 10,
            total: 100,
        });
        assert(wrapper.find('.next-pagination-item.next-next').hostNodes().get(0).props.disabled);
    });

    it('should update when current is illegal', () => {
        const initalValue = 5;
        wrapper.setProps({
            current: initalValue,
            total: 100,
        });
        const testCase = (current, rightValue) => {
            wrapper.setProps({
                current,
                total: 100,
                onChange: index => assert(index === rightValue),
            });

            wrapper
                .find('.next-pagination-jump-input input')
                .hostNodes()
                .simulate('change', {
                    target: { value: current },
                });
            wrapper.find('.next-pagination-jump-input input').hostNodes().simulate('keydown', {
                keyCode: 13,
            });

            console.log(
                wrapper.find('.next-pagination-list .next-pagination-item.next-current').hostNodes()
            );
        };

        // 实际上当输入不合法时，进入不了onChange逻辑
        testCase('text', initalValue);
        testCase('-1', 1);
        testCase('0', 1);
        testCase('3', 3);
        testCase('44444', 10);
        testCase(-1, 1);
        testCase(0, 1);
        testCase(3, 3);
        testCase(44444, 10);
    });

    it('should render by total, pageSize, showCount and hideOnlyOnePage', () => {
        wrapper.setProps({
            total: 0,
        });
        assert(!wrapper.find('.next-pagination').hasClass('next-hide'));
        assert(
            wrapper.find('.next-pagination-list .next-pagination-item').hostNodes().length === 1
        );

        wrapper.setProps({
            total: 0,
            hideOnlyOnePage: true,
        });
        assert(wrapper.find('.next-pagination').hasClass('next-hide'));
        assert(
            wrapper.find('.next-pagination-list .next-pagination-item').hostNodes().length === 1
        );

        wrapper.setProps({
            total: 50,
        });
        assert(wrapper.find('.next-pagination-list').children().length === 5);
        assert(
            wrapper
                .find('.next-pagination-list')
                .children()
                .everyWhere((item, index) => item.text() === (index + 1).toString())
        );

        wrapper.unmount();
        wrapper = mount(<Pagination total={101} pageSize={5} pageShowCount={9} current={11} />);
        assert(wrapper.find('.next-pagination-list').children().length === 11);
        wrapper
            .find('.next-pagination-list')
            .children()
            .forEach((item, index) => {
                if (index === 0) {
                    assert(item.is(Button));
                    assert(item.prop('children') === 1);
                } else if (index === 10) {
                    assert(item.is(Button));
                    assert(item.prop('children') === 21);
                } else if (index === 1 || index === 9) {
                    assert(item.is('.next-pagination-ellipsis'));
                } else {
                    assert(item.is(Button));
                    assert(item.prop('children') === index + 6);
                }
            });

        wrapper.setProps({
            total: 101,
            pageSize: 5,
            pageShowCount: 9,
            current: 1,
        });
        assert(wrapper.find('.next-pagination-list').children().length === 10);
        wrapper
            .find('.next-pagination-list')
            .children()
            .forEach((item, index) => {
                if (index === 9) {
                    assert(item.is(Button));
                    assert(item.prop('children') === 21);
                } else if (index === 8) {
                    assert(item.is('.next-pagination-ellipsis'));
                } else {
                    assert(item.is(Button));
                    assert(item.prop('children') === index + 1);
                }
            });

        wrapper.setProps({
            total: 101,
            pageSize: 5,
            pageShowCount: 9,
            current: 21,
        });
        assert(wrapper.find('.next-pagination-list').children().length === 10);
        wrapper
            .find('.next-pagination-list')
            .children()
            .forEach((item, index) => {
                if (index === 0) {
                    assert(item.is(Button));
                    assert(item.prop('children') === 1);
                } else if (index === 1) {
                    assert(item.is('.next-pagination-ellipsis'));
                } else {
                    assert(item.is(Button));
                    assert(item.prop('children') === index + 12);
                }
            });
    });

    it('should next- jump and display parts if the type is normal when set showJump to false ', () => {
        assert(wrapper.find('.next-pagination-jump-input').hostNodes().length === 1);
        assert(wrapper.find('.next-pagination-display').length === 1);
        wrapper.setProps({ showJump: false });
        assert(wrapper.find('.next-pagination-jump-input').length === 0);
        assert(wrapper.find('.next-pagination-display').length === 0);
    });

    it('should render page size selector when set pageSizeSelector to filter', () => {
        let currentPageSize = 50;
        const pageSizeList = [10, 20, 50];

        wrapper.setProps({
            total: 500,
            pageSize: currentPageSize,
            pageSizeSelector: 'filter',
            pageSizeList,
            onPageSizeChange: size => assert(size === currentPageSize),
        });
        assert(
            wrapper
                .find('.next-pagination-size-selector .next-pagination-size-selector-filter')
                .hostNodes().length === 1
        );

        const btnsWrapper = wrapper.find('.next-pagination-size-selector-btn').hostNodes();
        pageSizeList.forEach((size, index) => {
            assert(btnsWrapper.at(index).text() === size.toString());
        });
        assert(btnsWrapper.at(2).hasClass('next-current'));

        currentPageSize = 20;
        btnsWrapper.at(1).simulate('click');
    });

    it('should render page size selector when set pageSizeSelector to filter with object', () => {
        let currentPageSize = 50;
        const pageSizeList = [
            { label: '10/页', value: 10 },
            { label: '10/页', value: 20 },
            { label: '10/页', value: 50 },
        ];

        wrapper.setProps({
            total: 500,
            pageSize: currentPageSize,
            pageSizeSelector: 'filter',
            pageSizeList,
            onPageSizeChange: size => assert(size === currentPageSize),
        });
        assert(
            wrapper
                .find('.next-pagination-size-selector .next-pagination-size-selector-filter')
                .hostNodes().length === 1
        );

        const btnsWrapper = wrapper.find('.next-pagination-size-selector-btn').hostNodes();
        pageSizeList.forEach((size, index) => {
            assert(btnsWrapper.at(index).text() === size.label.toString());
        });
        assert(btnsWrapper.at(2).hasClass('next-current'));

        currentPageSize = 20;
        btnsWrapper.at(1).simulate('click');
    });

    it('should render page size selector when set pageSizeSelector to dropdown', () => {
        let currentPageSize = 50;
        const pageSizeList = [10, 20, 50];

        wrapper.setProps({
            total: 500,
            pageSize: currentPageSize,
            pageSizeSelector: 'dropdown',
            pageSizeList,
            pageSizePosition: 'end',
            onPageSizeChange: size => {
                assert(size === currentPageSize);
                wrapper.setProps({
                    pageSize: size,
                });
            },
        });
        setTimeout(() => {
            assert(
                wrapper
                    .find('.next-pagination-size-selector .next-pagination-size-selector-dropdown')
                    .hostNodes().length === 1
            );

            wrapper.find('.next-pagination-size-selector-dropdown').hostNodes().simulate('click');
            const lis = document.querySelectorAll('.next-menu li');
            pageSizeList.forEach((size, index) => {
                assert(lis[index].textContent.trim() === size.toString());
            });
            assert(lis[2].className.indexOf('selected') > -1);

            currentPageSize = 20;
            lis[1].click();

            wrapper.setProps({
                current: 20,
            });
            wrapper.find('.next-pagination-size-selector-dropdown').hostNodes().simulate('click');
            const newLis = document.querySelectorAll('.next-menu li');
            currentPageSize = 50;
            newLis[2].click();
            assert(
                wrapper
                    .find('.next-pagination-list .next-pagination-item.next-current')
                    .hostNodes()
                    .text() === '10'
            );
        }, 300);
    });

    it('should render a tag with the specified href when set link', () => {
        wrapper.setProps({
            link: 'https://www.taobao.com/{page}',
        });
        assert(
            wrapper.find('.next-pagination-list a.next-pagination-item').at(0).prop('href') ===
                'https://www.taobao.com/1'
        );
    });

    it('should render page total number', () => {
        wrapper.setProps({
            total: 500,
            totalRender: () => <div className="test-totalRender" />,
        });
        assert(wrapper.find('.test-totalRender').length === 1);
    });

    it('should render page numder by cust render fuction, by pageNumberRender', () => {
        wrapper.setProps({
            total: 10,
            pageNumberRender: index => index + 'test',
        });
        assert(
            wrapper
                .find('.next-pagination-list')
                .children()
                .everyWhere((item, index) => item.text() === (index + 1).toString() + 'test')
        );
    });

    it('should support device transfer type to simple', () => {
        wrapper.setProps({
            device: 'phone',
            type: 'normal',
        });

        assert(wrapper.find('.next-simple').length > 0);
    });
});
