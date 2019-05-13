import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import assert from 'power-assert';
import Field from '../../src/field';
import Select from '../../src/select/index';
import '../../src/select/style.js';

/* eslint-disable react/no-multi-comp,no-undef */

Enzyme.configure({ adapter: new Adapter() });

describe('Select', () => {
    let wrapper;

    beforeEach(() => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper = mount(<Select dataSource={dataSource} />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;

        const nodeListArr = [].slice.call(
            document.querySelectorAll('.next-overlay-wrapper')
        );

        nodeListArr.forEach(node => {
            node.parentNode.removeChild(node);
        });
    });

    it('should render from dataSource', () => {
        const dataSource = [{ label: 'xxx', value: 'yyy' }];
        wrapper.setProps({
            dataSource,
            visible: true,
        });
        assert(document.querySelectorAll('.next-menu-item').length === 1);
        wrapper.setProps({
            value: 'yyy',
        });
        wrapper.update();

        assert(wrapper.find('.next-select em').text() === 'xxx');
    });

    it('should support empty value from dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: 'empty', value: '' },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
        });
        assert(document.querySelectorAll('.next-menu-item').length === 2);
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        wrapper.update();

        assert(wrapper.find('span.next-select em').text() === 'xxx');
        wrapper.setProps({
            value: '',
        });
        assert(wrapper.find('span.next-select em').text() === 'empty');
    });

    it('should support async dataSource', () => {
        const DATASOURCE = [
            { label: 'TT1', value: 'test1' },
            { label: 'TT2', value: 'test2' },
            { label: 'TT3', value: 'test3' },
        ];

        const wrapper = mount(<Select defaultValue="test2" />);

        wrapper.setProps({
            dataSource: DATASOURCE,
        });

        wrapper.update();

        assert(wrapper.find('.next-select em').text() === 'TT2');
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
        wrapper = mount(<App />);
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
        assert(wrapper.find('span.next-select em').text() === 'bbb');
    });

    it('should not change text while under controlled', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: 0 },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
            value: 0,
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        assert(wrapper.find('span.next-select em').text() === 'empty');
    });

    it('should support not string value', done => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        const onChange = value => {
            assert(value === 123);
            done();
        };
        wrapper.setProps({
            dataSource,
            visible: true,
            onChange,
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
    });

    it('should support special value', () => {
        const dataSource = [
            { label: 'xxx', value: 0 },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            value: 0,
        });
        wrapper.update();
        assert(wrapper.find('span.next-select em').text() === 'xxx');
    });

    it('should support useDetailValue with mode=single', () => {
        const dataSource = [
            { label: 'xxx', value: 0 },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            useDetailValue: true,
            value: { label: 'xxx', value: 0 },
        });
        wrapper.update();
        assert(wrapper.find('span.next-select em').text() === 'xxx');
    });

    it('should support useDetailValue with mode=multiple', () => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            useDetailValue: true,
            mode: 'multiple',
            value: [{ label: 'xxx', value: '0' }],
        });
        wrapper.update();
        assert(wrapper.find('span.next-select div.next-tag').length === 1);
    });

    it('should support useDetailValue with mode=multiple and showSearch', done => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        wrapper.setProps({
            dataSource,
            useDetailValue: true,
            showSearch: true,
            mode: 'multiple',
            value: [{ label: 'xxx', value: '0' }],
            onChange: function(value) {
                assert(value.length === 2);
            },
            onSearchClear: function(value) {
                done();
            },
        });
        wrapper.update();
        assert(wrapper.find('span.next-select div.next-tag').length === 1);

        wrapper.simulate('click');
        const input = wrapper.find('input').instance();
        input.value = 'e';
        wrapper.find('input').simulate('change');
        wrapper.find('input').simulate('keydown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
        });
    });

    it('should support render from options', () => {
        wrapper.setProps({
            children: [<Select.Option value={123}>123label</Select.Option>],
            visible: true,
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        assert(React.Children.toArray(wrapper.props().children).length === 1);
        wrapper.update();

        assert(wrapper.find('span.next-select em').text() === '123label');
    });

    it('should support children null', () => {
        wrapper.setProps({
            children: [
                <Select.Option value={123}>123label</Select.Option>,
                null,
            ],
            visible: true,
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        assert(React.Children.toArray(wrapper.props().children).length === 1);
        wrapper.update();

        assert(wrapper.find('span.next-select em').text() === '123label');
    });

    it('should support fillProps', () => {
        wrapper.setProps({
            visible: true,
            fillProps: 'value',
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        wrapper.update();

        assert(wrapper.find('.next-select em').text() === 'yyy');
    });

    it('should support disabled', () => {
        wrapper.setProps({
            disabled: true,
            popupProps: { cache: false },
        });
        wrapper.find('.next-select').simulate('click');
        // because popup-menu has been cache
        wrapper.update();
        assert(document.querySelectorAll('.next-menu-item').length === 0);
    });

    it('should support multiple', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            visible: true,
            dataSource,
            mode: 'multiple',
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        wrapper.update();
        const foo = wrapper.find('.next-tag-body');
        assert(wrapper.find('.next-tag-body').text() === 'xxx');
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
        wrapper.update();
        assert(
            wrapper
                .find('.next-tag-body')
                .at(1)
                .text() === 'empty'
        );
        wrapper.setProps({
            fillProps: 'value',
        });
        assert(
            wrapper
                .find('.next-tag-body')
                .at(0)
                .text() === '123'
        );
        assert(
            wrapper
                .find('.next-tag-body')
                .at(1)
                .text() === ''
        );
    });

    it('should support showSearch', () => {
        wrapper.setProps({
            showSearch: true,
            defaultVisible: true,
        });
        // assert(document.querySelectorAll('.next-select-search').length === 1);
        // document.querySelectorAll('input')[0].value = 'zzzz';
        // ReactTestUtils.Simulate.change(document.querySelectorAll('input')[0]);
        // assert(document.querySelectorAll('.next-menu-item').length === 0);
    });

    it('should support keyCode up & down', done => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
        });
        wrapper.find('input').simulate('keydown', { keyCode: 40 });
        wrapper.update();
        assert(
            document.querySelectorAll('.next-menu-item.next-focused').length ===
                1
        );
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        wrapper.update();
        assert(wrapper.find('span.next-select em').text() === 'empty');

        wrapper.find('input').simulate('keydown', { keyCode: 38 });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        assert(wrapper.find('span.next-select em').text() === 'xxx');

        // delete
        wrapper.find('input').simulate('keydown', { keyCode: 8 });

        wrapper.find('input').simulate('keydown', { keyCode: 27 });
        wrapper.find('input').simulate('keydown', { keyCode: 32 });
        wrapper.find('input').simulate('keydown', { keyCode: 9 });

        done();
    });

    it('should support popupClassName', () => {
        wrapper.setProps({
            popupClassName: 'menu-customize',
            visible: true,
        });
        assert(!!document.querySelector('.menu-customize'));
    });

    it('should support tags', done => {
        wrapper.setProps({
            mode: 'tag',
            onChange: function(value) {
                assert(value[0] === 'j');
                // input will be update async
            },
            onSearchClear: function(value) {
                done();
            },
        });

        wrapper.simulate('click');
        const input = wrapper.find('input').instance();
        input.value = 'j';
        wrapper.find('input').simulate('change');
        wrapper.find('input').simulate('keydown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
        });
    });

    it('should support tags delete', done => {
        wrapper.setProps({
            mode: 'tag',
            value: ['yyy'],
            onChange: function(value) {
                assert(value.length === 0);
                done();
            },
        });

        wrapper.find('input').simulate('keydown', {
            key: 'backSpace',
            keyCode: 8,
        });
    });

    it('should support tags delete by click', done => {
        wrapper.setProps({
            mode: 'tag',
            value: ['yyy'],
            onChange: function(value) {
                assert(value.length === 0);
                done();
            },
        });

        wrapper.find('div.next-tag .next-tag-close-btn').simulate('click');
    });

    it('should support mode=tag with visible=false', done => {
        wrapper.setProps({
            mode: 'tag',
            visible: false,
            value: ['yyy'],
            onChange: function(value) {
                assert(value.length === 2);
                assert(value[1] === 'bbb');
                done();
            },
        });

        wrapper.find('input').simulate('change', { target: { value: 'bbb' } });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
    });

    it('should support mode=tag with hasClear', done => {
        wrapper.setProps({
            mode: 'tag',
            hasClear: true,
            value: ['yyy'],
            onChange: function(value) {
                assert(value === undefined);
                done();
            },
        });

        wrapper.find('i.next-icon-delete-filling').simulate('click');
    });

    it('should support onChange with mode=single ', done => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
            onChange: (v, e, item) => {
                assert(v === 1);
                assert(item.value === 1);
                done();
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
    });

    it('should support onChange with mode=multiple ', done => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: 1 },
        ];
        wrapper.setProps({
            dataSource,
            mode: 'multiple',
            visible: true,
            onChange: (v, e, item) => {
                assert(v.length === 1);
                assert(item.length === 1);
                done();
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
    });

    it('should support useDetailValue onChange with mode=single ', done => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            useDetailValue: true,
            visible: true,
            onChange: v => {
                assert(v.label === 'empty');
                done();
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
    });

    it('should support useDetailValue onChange with mode=multiple ', done => {
        const dataSource = [
            { label: 'xxx', value: '0' },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            useDetailValue: true,
            mode: 'multiple',
            visible: true,
            onChange: v => {
                assert(v.length === 1);
                done();
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[1]
        );
    });

    it('should support hiddenSelected', done => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        wrapper.setProps({
            dataSource,
            mode: 'multiple',
            visible: true,
            hiddenSelected: true,
            onVisibleChange: v => {
                assert(v === false);
                done();
            },
        });

        wrapper.find('input').simulate('keydown', { keyCode: 40 });
        wrapper.find('input').simulate('keydown', { keyCode: 40 });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        wrapper.update();
    });

    // 输入aaa 回车，不关闭弹层
    it('should not close popup while searching and searchValue not in dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        wrapper.setProps({
            dataSource,
            mode: 'single',
            popupProps: { cache: false },
            showSearch: true,
        });

        // a 回车，搜索到值，弹层关闭
        wrapper.find('input').simulate('change', { target: { value: 'a' } });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        wrapper.update();
        assert(wrapper.instance().getInstance().state.visible === false);

        // aaa 回车，搜索不到值，弹层打开状态
        wrapper.find('input').simulate('change', { target: { value: 'aaa' } });
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        wrapper.update();
        assert(
            document.querySelectorAll(
                '.next-select-menu .next-select-menu-empty-content'
            ).length === 1
        );
        assert(wrapper.instance().getInstance().state.visible === true);
    });

    it('should fix tags mode issue #62', () => {
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    dataSource: [
                        {
                            value: '测试',
                            label: '测试',
                            time: 123,
                        },
                    ],
                    value: ['测试'],
                };
            }
            render() {
                return (
                    <div>
                        <Select
                            size="large"
                            value={this.state.value}
                            dataSource={this.state.dataSource}
                            onChange={this.onChange.bind(this)}
                            onSearch={this.onSearch.bind(this)}
                            mode="tag"
                            filterLocal={false}
                        />
                    </div>
                );
            }
            onSearch(value) {
                let options;
                if (!value || value.indexOf('@') > 0) {
                    options = [];
                } else {
                    options = ['126.com', '163.com', 'gmail.com'].map(mail => {
                        return {
                            label: `${value}@${mail}`,
                            value: `${value}@${mail}`,
                            time: Math.random(),
                        };
                    });
                }
                this.setState({ dataSource: options });
            }

            onChange(value, item) {
                this.setState({ value });
            }
        }

        wrapper = mount(<App />);
        const input = wrapper.find('input').instance();
        input.value = '测试';
        wrapper.find('input').simulate('change');
        assert(/测试/.test(input.value));
    });

    it('should support select all and unselect all', () => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
            mode: 'multiple',
            hasSelectAll: true,
        });

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-select-all')[0]
        );
        assert(
            document.querySelectorAll('.next-menu-icon-selected').length === 3
        );

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-select-menu-item')[0]
        );

        assert(
            document.querySelectorAll('.next-menu-icon-selected').length === 1
        );

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-select-all')[0]
        );

        assert(
            document.querySelectorAll('.next-menu-icon-selected').length === 3
        );

        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-select-all')[0]
        );

        assert(
            document.querySelectorAll('.next-menu-icon-selected').length === 0
        );
    });
});

describe('Select Controlled', () => {
    class App extends React.Component {
        state = {};
        render() {
            return (
                <Select
                    value={this.state.value}
                    visible={this.state.visible}
                    searchValue={this.state.searchValue}
                    showSearch
                    dataSource={[{ label: 'xxx', value: 'yyy' }]}
                    onChange={this.onChange}
                />
            );
        }
        onChange = value => {
            this.setState({
                value,
            });
        };
    }

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should support Modify value', () => {
        wrapper.setState({
            value: 'yyy',
        });
        wrapper.update();

        assert(
            wrapper
                .find('.next-select em')
                .text()
                .trim() === 'xxx'
        );

        wrapper.setState({
            value: undefined,
        });
        wrapper.update();
        assert(wrapper.find('.next-select em').length === 0);
    });

    it('should support Modify searchValue', () => {
        wrapper.setState({
            searchValue: 'xy',
            visible: true,
        });

        wrapper.update();

        assert(wrapper.find('.next-select input').prop('value') === 'xy');
        assert(
            document.querySelectorAll(
                '.next-select-menu .next-select-menu-empty-content'
            ).length === 1
        );

        wrapper.setState({
            searchValue: undefined,
        });
        wrapper.update();
        assert(wrapper.find('.next-menu-item').length === 1);
    });
});

describe('AutoComplete', () => {
    let wrapper;

    beforeEach(() => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: '123', value: 444 },
        ];
        wrapper = mount(<Select.AutoComplete dataSource={dataSource} />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('should render from dataSource', () => {
        wrapper.setProps({
            value: 'yyy',
        });
        assert(wrapper.find('input').prop('value') === 'yyy');

        wrapper.setProps({
            visible: true,
        });
        assert(document.querySelectorAll('.next-menu-item').length === 2);
    });

    it('should support empty value from dataSource', () => {
        const dataSource = [
            { label: 'xxx', value: 'yyy' },
            { label: 'empty', value: '' },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
        });
        assert(document.querySelectorAll('.next-menu-item').length === 2);
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        wrapper.update();

        assert(wrapper.find('input').prop('value') === 'yyy');
        wrapper.setProps({
            value: '',
        });
        assert(wrapper.find('input').prop('value') === '');
    });

    it('should support not string value', done => {
        const dataSource = [
            { label: 'xxx', value: 123 },
            { label: 'empty', value: false },
        ];
        const onChange = value => {
            assert(value === 123);
            done();
        };
        wrapper.setProps({
            dataSource,
            visible: true,
            onChange,
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
    });

    it('should render from options', () => {
        wrapper.setProps({
            children: <Select.Option value="123">123</Select.Option>,
        });
        assert(React.Children.toArray(wrapper.props().children).length === 1);
        wrapper.setProps({
            value: '123',
        });
        assert(wrapper.find('input').instance().value === '123');
    });

    it('should support fillProps', () => {
        wrapper.setProps({
            visible: true,
            fillProps: 'label',
        });
        ReactTestUtils.Simulate.click(
            document.querySelectorAll('.next-menu-item')[0]
        );
        assert(wrapper.find('input').instance().value === 'xxx');
    });

    it('should pass value to input from props', () => {
        wrapper.setProps({
            value: 'yyyyx',
        });
        assert(wrapper.find('input').instance().value === 'yyyyx');
        wrapper.setProps({
            value: 'yyy',
            fillProps: 'label',
        });
        assert(wrapper.find('input').instance().value === 'yyy');
    });

    it('should support filter', () => {
        wrapper.setProps({
            defaultVisible: true,
        });
        const input = wrapper.find('input').instance();
        input.value = 'jkl';
        wrapper.find('input').simulate('change');
        assert(document.querySelectorAll('.next-menu-item').length === 0);
        input.value = 'y';
        wrapper.find('input').simulate('change');
        assert(document.querySelectorAll('.next-menu-item').length === 1);
    });

    it('should support receive undefined value', () => {
        class App extends React.Component {
            state = {
                value: '',
            };
            render() {
                return (
                    <Select.AutoComplete
                        dataSource={[]}
                        value={this.state.value}
                        multiple
                    />
                );
            }
            componentDidMount() {
                this.setState({
                    value: undefined,
                });
            }
        }
        wrapper = mount(<App />);
    });

    it('should support keyCode up & down', () => {
        const dataSource = [
            { label: 'xxx', value: 'a' },
            { label: 'empty', value: 'b' },
        ];
        wrapper.setProps({
            dataSource,
            visible: true,
        });
        wrapper.find('input').simulate('keydown', { keyCode: 40 });
        wrapper.find('input').simulate('keydown', { keyCode: 40 });
        wrapper.update();
        assert(
            document.querySelectorAll('.next-menu-item.next-focused').length ===
                1
        );
        wrapper.find('input').simulate('keydown', { keyCode: 13 });
        wrapper.update();
        assert(wrapper.find('input').prop('value') === 'b');

        wrapper.find('input').simulate('keydown', { keyCode: 38 });
        wrapper.find('input').simulate('keydown', { keyCode: 27 });
        wrapper.find('input').simulate('keydown', { keyCode: 32 });
        wrapper.find('input').simulate('keydown', { keyCode: 8 });
        wrapper.find('input').simulate('keydown', { keyCode: 9 });

        // wrapper.find('input').simulate('keydown', {keyCode: 38});
        // wrapper.find('input').simulate('keydown', {keyCode: 13});
        // assert(wrapper.find('input').prop('value') === 'a');
    });

    // simulate keydown not work in test event
    // it('should input keyCode space with popupContent', () => {
    //     wrapper.setProps({
    //         popupContent: <div>any</div>,
    //         visible: true,
    //     });

    //     wrapper.find('input').simulate('keydown', { keyCode: 32 });

    //     wrapper.update();
    //     assert(wrapper.find('input').prop('value') === ' ');
    // });

    // it('should fix onChange conflict under IE9&IE10', () => {
    //     let changed = false,
    //         onChange = () => { changed = true };
    //     wrapper = mount(<Select.AutoComplete onChange={onChange}/>);
    //     const input = wrapper.find('input').instance();
    //     input.value = 'j';
    //     wrapper.find('input').simulate('change');
    //     assert(changed === false); // true
    // });

    it('should fix autoWidth bug', done => {
        class App extends React.Component {
            render() {
                return (
                    <Select placeholder="选择尺寸" style={{ float: 'right' }}>
                        <Option value="small">Small</Option>
                        <Option value="medium">
                            MediumMediumMediumMediumMedium
                        </Option>
                        <Option value="large">Large</Option>
                    </Select>
                );
            }
        }
        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);
        const select = div.querySelector('.next-select');
        ReactTestUtils.Simulate.click(select);
        setTimeout(() => {
            const rect = select.getBoundingClientRect();
            const left = parseFloat(
                document.querySelector('.next-menu').style.left,
                10
            );
            assert(rect.left === left);
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            done();
        }, 200);
    });

    describe('react api', () => {
        it('calls componentWillReceiveProps', done => {
            wrapper.setProps({ value: '30' });
            assert(wrapper.find('input').prop('value') === '30');

            // value = undefined 时候清空数据
            wrapper.setProps({ value: undefined });
            assert(wrapper.find('input').prop('value') === '');
            done();
        });
    });
});

describe('virtual list', () => {
    it('should works with showSearch', done => {
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

        const wrapper = mount(
            <Select
                placeholder="选择尺寸"
                useVirtual
                showSearch
                style={{ float: 'right' }}
                dataSource={dataSource}
            />
        );

        wrapper.update();
        wrapper.simulate('click');

        const input = wrapper.find('input').instance();
        input.value = 'fff';
        wrapper.find('input').simulate('change');
        wrapper.find('input').simulate('keydown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
        });
        setTimeout(() => {
            done();
        }, 200);
    });
});
