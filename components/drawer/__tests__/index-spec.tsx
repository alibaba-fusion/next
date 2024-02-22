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

describe('Drawer', () => {
    let wrapper;

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

    it('should show and hide', () => {
        wrapper = render(<DrawerDemo animation={false} />);
        const btn = document.getElementById('open-drawer');
        ReactTestUtils.Simulate.click(btn);

        assert(document.querySelector('.next-drawer'));
        const closeLink = document.querySelector('.next-drawer-close');
        ReactTestUtils.Simulate.click(closeLink);

        assert(!document.querySelector('.next-drawer'));
    });

    it('should support placement', () => {
        ['top', 'left', 'bottom', 'right'].forEach(dir => {
            wrapper && wrapper.unmount();

            wrapper = render(<Drawer visible placement={dir} />);
            assert(hasClass(document.querySelector('.next-drawer'), `next-drawer-${dir}`));
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', () => {
        wrapper = render(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Drawer title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Drawer>
                </div>
            </ConfigProvider>
        );

        const overlay = document.querySelector('#dialog-popupcontainer > .next-overlay-wrapper');
        assert(overlay);
    });

    it('should hide close link if set closeable to false', () => {
        wrapper = render(<Drawer visible closeable={false} />);
        assert(!document.querySelector('.next-drawer-close'));
    });

    it('should support headerStyle/bodyStyle', () => {
        wrapper = render(
            <Drawer
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
});
