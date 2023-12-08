import assert from 'power-assert';
import simulateEvents from 'simulate-event';
import * as events from '../../src/util/events';

describe('src/events.js', function() {
    let element;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('should support on method', function() {
        let flag = false;
        let handler = events.on(element, 'click', function(e) {
            flag = true;
            assert(e.target === element);
        });

        simulateEvents.simulate(element, 'click');
        assert(flag);
        flag = false;
        handler.off();
        simulateEvents.simulate(element, 'click');
        assert(!flag);
    });

    it('should support once method', function() {
        let flag = false;
        events.once(element, 'click', function(e) {
            flag = true;
            assert(e.target === element);
        });

        simulateEvents.simulate(element, 'click');
        assert(flag);
        flag = false;
        simulateEvents.simulate(element, 'click');
        assert(!flag);
    });
});
