import simulateEvents from 'simulate-event';
import * as events from '../events';

describe('src/events.js', function () {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('should support on method', function () {
        let flag = false;
        const handler = events.on(element, 'click', function (e: MouseEvent) {
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

    it('should support once method', function () {
        let flag = false;
        events.once(element, 'click', function (e: MouseEvent) {
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
