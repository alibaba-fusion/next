import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Collapse from '../../src/collapse/index';
import '../../src/collapse/style';
import a11y from '../util/a11y';

Enzyme.configure({ adapter: new Adapter() });


const Panel = Collapse.Panel;

describe('Collapse A11y', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        a11y.afterEach();
    });

    it('should not have any violations for children rendered component', (done) => {
        wrapper = a11y.test(<Collapse>
            <Panel title="Pannel Title">
                Pannel Content
            </Panel>
            <Panel title="Pannel Title">
                Pannel Content
            </Panel>
            <div>others</div>
        </Collapse>, done);
    });

    it('should not have any violations for data rendered component', (done) => {

        let list = [
            {
                title: '',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            },
            {
                title: 'Well, hello there',
                content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            }
        ];
        wrapper = a11y.test(<Collapse dataSource={list} />, done, { incomplete: true });
    });
});
