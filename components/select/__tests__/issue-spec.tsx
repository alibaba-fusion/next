import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Field from '../../field';
import Select from '../index';
import '../style';

/* eslint-disable react/no-multi-comp,no-undef */

describe('issue in AutoComplete', () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
        document.body.appendChild(div);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    // it('should fix #80', function(done) {
    //     let opened, closed;
    //     const onOpen = () => {
    //         opened = true;
    //     }
    //     const onClose = () => {
    //         closed = true;
    //     }

    //     class App extends React.Component {
    //         state = {}
    //         render() {
    //             const dataSource = [{
    //                 value: 1,
    //                 label: 'jack'
    //             }, {
    //                 value: 2,
    //                 label: 'lucy'
    //             }];
    //             return <Select.AutoComplete value={12}
    //                 dataSource={dataSource}
    //                 fillProps="label"
    //                 visible={this.state.visible}
    //                 popupProps={{onOpen, onClose}} />;
    //         }
    //         componentDidMount() {
    //             this.setState({
    //                 visible: true
    //             }, () => {
    //                 setTimeout(() => {
    //                     this.setState({
    //                         visible: false
    //                     });
    //                 });
    //             });
    //         }
    //     }
    //     ReactDOM.render(<App/>, div);
    //     setTimeout(() => {
    //         assert(opened);
    //         // assert(closed);
    //         done();
    //     }, 300);
    // });

    it('should fix #93', () => {
        let clicked = false;
        const onChange = value => {
            clicked = true;
        };
        class App extends React.Component {
            state = {
                value: 1,
            };
            render() {
                const dataSource = [
                    {
                        value: 1,
                        label: 'jack',
                    },
                    {
                        value: 2,
                        label: 'lucy',
                    },
                ];
                return (
                    <div>
                        <button id="btn_93" onClick={this.setValue}>
                            set value
                        </button>
                        <Select
                            value={this.state.value}
                            dataSource={dataSource}
                            visible
                            onChange={onChange}
                        />
                    </div>
                );
            }

            setValue = () => {
                this.setState({
                    value: 1,
                });
            };
        }
        ReactDOM.render(<App />, div);
        const node = document.body.querySelector('.next-menu-item');
        ReactTestUtils.Simulate.click(node);
        assert(clicked === false);
        const node2 = document.body.querySelectorAll('.next-menu-item')[1];
        ReactTestUtils.Simulate.click(node2);
        clicked = false;
        ReactTestUtils.Simulate.click(div.querySelector('#btn_93'));
        ReactTestUtils.Simulate.click(node2);
        assert(clicked);
    });

    // it('should trigger onChange when clear value', () => {
    //      let clicked = false, value = '';
    //      const onChange = (val) => {
    //          clicked = true;
    //          value = val;
    //      }
    //      class App extends React.Component {
    //         state = {}
    //         render() {
    //             const dataSource = [{
    //                 value: 1,
    //                 label: 'jack'
    //             }, {
    //                 value: 2,
    //                 label: 'lucy'
    //             }];
    //             return <Select value={1} dataSource={dataSource} visible onChange={onChange} hasClear/>;
    //         }
    //     }
    //     ReactDOM.render(<App/>, div);
    //
    //     const node = div.querySelector('i.next-icon-delete-filling');
    //     ReactTestUtils.Simulate.click(node);
    //     assert(clicked);
    //     assert(value === null);
    // });

    it('should escape special char when filter local', () => {
        const dataSource = [
            { label: '[测试]文案11', value: '1' },
            { label: '[tag]文案22', value: '2' },
        ];
        ReactDOM.render(
            <Select dataSource={dataSource} showSearch visible style={{ width: '300px' }} />,
            div
        );
        const input = document.body.querySelector('.next-select input');
        input.value = 't';
        ReactTestUtils.Simulate.change(input);
        assert(document.body.querySelectorAll('.next-menu-item').length === 1);
    });
});
