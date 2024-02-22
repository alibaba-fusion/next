import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import Enzyme, { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import { dom } from '../../util';
import Drawer from '../index';
import ConfigProvider from '../../config-provider';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */
const { hasClass, getStyle } = dom;

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

class DrawerDemo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <button id="open-drawer" onClick={this.onOpen} type="primary">
                    打开抽屉
                </button>
                <Drawer
                    v2
                    title="欢迎来到 Alibaba.com"
                    visible={this.state.visible}
                    onClose={this.onClose}
                    {...this.props}
                >
                    开启您的贸易生活从 Alibaba.com 开始
                </Drawer>
            </div>
        );
    }
}

describe('Drawer v2', () => {
    let wrapper;
    const delay = time => new Promise(resolve => setTimeout(resolve, time));

    beforeEach(() => {
        const overlay = document.querySelectorAll('.next-overlay-wrapper');
        overlay.forEach(dom => {
            document.body.removeChild(dom);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should show and hide', async () => {
        wrapper = render(<DrawerDemo animation={false} />);
        const btn = document.getElementById('open-drawer');
        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(document.querySelector('.next-drawer'));
        const closeLink = document.querySelector('.next-drawer-close');
        ReactTestUtils.Simulate.click(closeLink);
        await delay(20);

        assert(!document.querySelector('.next-drawer'));
    });

    it('should support placement', () => {
        ['top', 'left', 'bottom', 'right'].forEach(dir => {
            wrapper && wrapper.unmount();

            wrapper = render(<Drawer v2 visible placement={dir} />);
            assert(hasClass(document.querySelector('.next-drawer-wrapper'), `next-drawer-${dir}`));
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', async () => {
        wrapper = render(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Drawer v2 title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Drawer>
                </div>
            </ConfigProvider>
        );

        await delay(20);
        assert(document.querySelector('#dialog-popupcontainer > .next-overlay-wrapper'));
    });

    it('should support headerStyle/bodyStyle', () => {
        wrapper = render(
            <Drawer
                v2
                visible
                title="test"
                headerStyle={{ background: 'blue' }}
                bodyStyle={{ background: 'red' }}
                closeable={false}
            >
                body
            </Drawer>
        );

        assert(getStyle(document.querySelector('.next-drawer-header'), 'background'), 'blue');
        assert(getStyle(document.querySelector('.next-drawer-body'), 'background'), 'red');
    });

    it('quick-calling should should support set prefix for dialog', () => {
        const { hide } = Drawer.show({
            v2: true,
            prefix: 'test-',
            title: 'Title',
            content: <span className="drawer-quick-content" />,
        });

        assert(hasClass(document.querySelector('.test-drawer'), 'test-closeable'));
        assert(document.querySelector('.drawer-quick-content'));

        hide();
    });
});
