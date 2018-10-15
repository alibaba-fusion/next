import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Menu from '../../src/menu';
import Search from '../../src/search/Search';

Enzyme.configure({ adapter: new Adapter() });



describe('Search', () => {
    describe('render', () => {
        it('should accept type ', () => {
            let wrapper = mount(<Search type="secondary" />);

            assert(wrapper.props().type === 'secondary');
        });
        it('should accept value ', () => {
            const VALUE = '123';
            let wrapper = mount(<Search value={VALUE} />);

            assert(wrapper.find('input').props().value === VALUE);
        });
        it('should accept value=undefind ', () => {
            const VALUE = undefined;
            let wrapper = mount(<Search value={VALUE} />);

            assert(wrapper.find('input').props().value === '');
        });
        it('should accept simple icon ', () => {
            const VALUE = undefined;
            let wrapper = mount(<Search shape="simple" />);

            assert(wrapper.find('button').length === 0);
            assert(wrapper.find('.next-icon-search').length === 1);
        });
        it('should accept no-icon', () => {
            let wrapper = mount(<Search hasIcon={false} />);
            assert(wrapper.find('.next-icon').length === 0);
        });
        it('should accept search text', () => {
            const text = 'search';
            const SearchText = <span>{text}</span>;
            let wrapper = mount(<Search searchText={SearchText} />);

            assert(wrapper.find('.next-search-btn-text').length === 1);
            assert(wrapper.find('.next-search-btn-text').text() === text);
        });
    });

    describe('behavior', () => {
        it('simulates onChange/onSearch/onBlur events', () => {
            const onChange = sinon.spy();
            const onSearch = sinon.spy();
            const onBlur = sinon.spy();

            const wrapper = mount(
                <Search onChange={onChange} onSearch={onSearch} onBlur={onBlur} />
            );

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(onChange.calledOnce);
            wrapper.find('button').simulate('click');
            assert(onSearch.calledOnce);
            wrapper.find('input').simulate('keydown', { keyCode: 13 });
            assert(onSearch.calledTwice);

            wrapper.find('input').simulate('blur');
            wrapper.find('input').simulate('focus');
            // is this bug ? cant trigger blur
            //expect(onBlur.calledOnce).to.equal(true);

        });
        it('should support defaultValue ', (done) => {

            let onChange = (value) => {
                assert(value === '20');
            }, wrapper = mount(<Search defaultValue={"123"} onChange={onChange} />);

            wrapper.find('input').simulate('change', { target: { value: '20' } });
            assert(wrapper.find('input').prop('value') === '20');

            //  这里可以修改下 defauValue 确认下第二次修改是没有影响的
            wrapper.setProps({ value: '30' });
            assert(wrapper.find('input').prop('value') === '30');

            // 对于
            done();
        });

        it('should support onSearch ', (done) => {
            let onSearch = (value) => {
                assert(value === '123');
            }, wrapper = mount(<Search defaultValue={"123"} onSearch={onSearch} />);

            wrapper.find('input').simulate('keydown', { keyCode: 13 });

            done();
        });

        it('should support filter ', (done) => {
            let filter = [
                {
                    text: 'Products',
                    value: 'Products'
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                    default: true
                },
                {
                    text: 'Products2',
                    value: 'Products2'
                }];


            const FILTER_INDEX = 1;
            const onFilterChange = (value) => {
                assert(value === filter[FILTER_INDEX].value);
            };

            const wrapper = mount(<Search filter={filter} defaultValue={"123"}  onFilterChange={onFilterChange} />);
            // 点击
            wrapper.find('.next-search-left-addon .next-select-single').simulate('click');
            wrapper.find('.next-menu-item').at(FILTER_INDEX).simulate('click');

            filter = [
                {
                    text: 'Products',
                    value: 'Products'
                },
                {
                    text: 'newone',
                    value: 'newone',
                    default: true
                },
                {
                    text: 'Products2',
                    value: 'Products2'
                }];
            wrapper.setProps({ filter });
            wrapper.find('.next-search-left-addon .next-select-single').simulate('click');
            wrapper.find('.next-menu-item').at(FILTER_INDEX).simulate('click');

            done();
        });

        it('should support filterValue', (done) => {
            const FILTER_VALUE = 'Products1';

            const filter = [
                {
                    text: 'Products',
                    value: 'Products',
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                },
                {
                    text: 'Products2',
                    value: 'Products2'
                }
            ];

            const onSearch = (value, filterValue) => {
                assert(filterValue === FILTER_VALUE);
                done();
            }
            const wrapper = mount(<Search defaultValue={"123"} filter={filter} filterValue={FILTER_VALUE} onSearch={onSearch} />);
            assert(wrapper.find('.next-select-values em').text() === FILTER_VALUE);
            wrapper.find('button').simulate('click');

        });

        it('act in controlled way', (done) => {
            const filter = [
                {
                    text: 'Products',
                    value: 'Products',
                    default: true
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                },
                {
                    text: 'Products2',
                    value: 'Products2'
                }
            ];
            const FILTER_INDEX = 2;
            const FILTER_VALUE = filter[FILTER_INDEX].value;
            const VALUE = 'test';

            const onSearch = (value, filterValue) => {
                assert(value === VALUE);
                assert(filterValue === FILTER_VALUE);
                done();
            };

            const wrapper = mount(
                <Search onSearch={onSearch} />
            );

            wrapper.setProps({ value: VALUE, filterValue: FILTER_VALUE });
            wrapper.find('button').simulate('click');
        });
    });


    describe('CombobBox', () => {
        let wrapper;
        const dataSource = [
            {
                label: 'xxx',
                value: 'yyy'
            },
            {
                label: "Recent",
                value: "Recent"
            },
        ];


        beforeEach(() => {
            wrapper = mount(<Search dataSource={dataSource} />);
        });

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
        });

        it('should support DataSource ', (done) => {

            wrapper.find('input').simulate('click');
            assert(wrapper.find('.next-menu-item').length === dataSource.length);
            wrapper.find('input').simulate('change', { target: { value: 'y' } });

            const items = wrapper.find('.next-menu-item');
            assert(items.length === 1 && items.at(0).find('.next-menu-item-text').text() === 'xxx');

            items.at(0).simulate('click');
            assert(wrapper.find('input').prop('value') === 'yyy');

            done();
        });
        it('should support dataSource filter ', (done) => {

            wrapper.find('input').simulate('click');
            wrapper.find('input').simulate('change', { target: { value: 'y' } });

            const items = wrapper.find('.next-menu-item');
            assert(items.length === 1 && items.at(0).find('.next-menu-item-text').text() === dataSource[0].label);

            done();
        });
        it('should support dataSource value click ', (done) => {
            wrapper.find('input').simulate('click');
            wrapper.find('input').simulate('change', { target: { value: 'y' } });

            wrapper.find('.next-menu-item').at(0).simulate('click');
            assert(wrapper.find('input').prop('value') === dataSource[0].value);

            done();
        });
    });
});
