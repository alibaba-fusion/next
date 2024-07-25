import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import VirtualList from '../index';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function () {
        inc = this;
    });
    return {
        setProps: props => {
            const clonedElement = React.cloneElement(element, props);
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        instance: () => {
            return inc;
        },
        find: selector => {
            return container.querySelectorAll(selector);
        },
    };
};

const generateData = len => {
    const dataSource = [];

    for (let i = 0; i < len; i++) {
        dataSource.push(
            <li key={`${i}-test`} style={{ lineHeight: '20px' }}>
                {i}
            </li>
        );
    }

    return dataSource;
};

describe('VirtualList', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should render', () => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList>{generateData(10)}</VirtualList>
                </div>
            );
        }

        wrapper = render(<App />);
        assert(wrapper.find('li').length === 10);
    });

    it('should render much more', () => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList>{generateData(100)}</VirtualList>
                </div>
            );
        }

        wrapper = render(<App />);
        assert(wrapper.find('li').length < 20);
    });

    it('should support jumpIndex', done => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList
                        jumpIndex={50}
                        itemSizeGetter={() => {
                            return 20;
                        }}
                    >
                        {generateData(100)}
                    </VirtualList>
                </div>
            );
        }

        wrapper = render(<App />);
        setTimeout(() => {
            assert(wrapper.find('li')[0].innerText > 40);
            done();
        }, 100);
    });
});
