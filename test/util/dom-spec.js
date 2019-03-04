import assert from 'power-assert';
import * as dom from '../../src/util/dom';

describe('src/dom.js', function() {
    describe('#dom.hasDOM', function() {
        it('hasDOM should be a boolean', function() {
            assert(typeof dom.hasDOM === 'boolean');
        });
    });

    describe('#addClass, #removeClass, #hasClass, #toggleClass, #matches', function() {
        const tag = document.createElement('small');
        document.body.appendChild(tag);

        it('hasClass should return a boolean', function() {
            assert(!dom.hasClass());
            assert(!dom.hasClass(tag, 'foo'));
        });

        it('addClass should works', function() {
            dom.addClass(tag, 'foo');
            assert(dom.hasClass(tag, 'foo'));
        });

        it('removeClass should works', function() {
            dom.removeClass(tag, 'foo');
            assert(!dom.hasClass(tag, 'foo'));
        });

        it('toggleClass should works', function() {
            assert(dom.toggleClass(tag, 'foo'));
            assert(!dom.toggleClass(tag, 'foo'));
        });

        it('matches should return a boolean', function() {
            assert(!dom.matches());
            assert(!dom.matches(tag, '.foo'));

            dom.addClass(tag, 'foo');
            assert(dom.matches(tag, '.foo'));
            assert(!dom.matches(tag, 'div.foo'));
            assert(dom.matches(tag, 'small.foo'));
        });

        document.body.removeChild(tag);
    });

    describe('mock IE env', function() {
        const tag = {
            className: '',
        };

        it('hasClass should return a boolean', function() {
            assert(!dom.hasClass());
            assert(!dom.hasClass(tag, 'bar'));
        });

        it('addClass should works', function() {
            dom.addClass(tag, 'bar');
            assert(dom.hasClass(tag, 'bar'));
        });

        it('removeClass should works', function() {
            dom.removeClass(tag, 'bar');
            assert(!dom.hasClass(tag, 'bar'));
        });

        it('toggleClass should works', function() {
            assert(dom.toggleClass(tag, 'bar'));
            assert(!dom.toggleClass(tag, 'bar'));
        });
    });

    describe('#setStyle, #getStyle', function() {
        let tag;

        beforeEach(() => {
            tag = document.createElement('small');
            tag.innerText = 'Hello';
            document.body.appendChild(tag);
        });

        afterEach(() => {
            document.body.removeChild(tag);
        });

        it('setStyle should works', function() {
            dom.setStyle(tag, 'width', 101);
            dom.setStyle(tag, {
                height: 150,
                margin: 10,
                float: 'left',
                fontSize: 15,
            });

            assert(typeof dom.getStyle(tag) === 'object');
            assert(dom.getStyle(tag, 'width') === 101);
            assert(dom.getStyle(tag, 'fontSize') === 15);
            assert(dom.getStyle(tag, 'padding') === 0);
        });

        it('height and width should return number', function() {
            assert(typeof dom.getStyle(tag, 'width') === 'number');
            assert(typeof dom.getStyle(tag, 'height') === 'number');
        });
    });

    describe('#scrollbar', function() {
        it('scrollbar() should contain width and height', function() {
            const scrollbar = dom.scrollbar();
            assert(typeof scrollbar.width === 'number');
            assert(typeof scrollbar.height === 'number');
        });
    });

    describe('#getOffset', function() {
        it('getOffset() should return top and left', function() {
            document.body.innerHTML = '';
            document.body.style.margin = 0;
            document.body.style.padding = 0;
            const div1 = document.createElement('div');
            div1.style.height = '100px';
            const div2 = document.createElement('div');
            div2.style.float = 'left';
            div2.style.width = '100px';
            div2.style.height = '100px';
            const div3 = document.createElement('div');
            div3.style.float = 'left';
            div3.style.width = '100px';
            div3.style.height = '100px';
            document.body.appendChild(div1);
            document.body.appendChild(div2);
            document.body.appendChild(div3);
            const offset = dom.getOffset(div3);
            assert(offset.top === 100);
            assert(offset.left === 100);
        });
    });
});
