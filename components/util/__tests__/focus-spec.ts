import * as focus from '../focus';

describe('src/focus.js', function () {
    let wrapper: HTMLElement;

    beforeEach(function () {
        wrapper = document.createElement('div');
        wrapper.innerHTML = `
<span class="form-title">Hello, World</span>
<div class="form-item">
  <label>Username</label>
  <input class="foo-input" type="text" />
  <input type="hidden" class="foo-hidden-input" type="text" />
</div>
<div class="form-item">
  <label>Password</label>
  <input type="password" class="foo-password" type="text" />
</div>
<div class="form-item">
  <label>Gender</label>
  <select class="foo-select">
    <option value="1"></option>
    <option value="2"></option>
  </select>
</div>
<div class="btn-group">
  <button type="button" class="foo-btn">click me!</button>
  <button type="button" disabled>disabled button</button>
</div>
<footer class="footer" tabindex="1">
  <a href="http://www.taobao.com" class="foo-link" data-auto-focus="true">www.taobao.com</a>
  <span class="hidden-text" style="display:none">Hi~</span>
</footer>
    `;
        document.body.appendChild(wrapper);
    });

    afterEach(function () {
        document.body.removeChild(wrapper);
    });

    describe('#getFocusNodeList', function () {
        const tabEvent = { keyCode: 9, preventDefault: () => undefined, shiftKey: false };
        const tabEventWithShift = {
            keyCode: 9,
            preventDefault: () => undefined,
            shiftKey: true,
        };

        it('getFocusNodeList should return a list', function () {
            const list = focus.getFocusNodeList(wrapper);
            assert(Array.isArray(list));
            assert(list.length === 6);
        });

        it('data-auto-focus should works', function () {
            const list = focus.getFocusNodeList(wrapper);
            assert(!!list[0].getAttribute('data-auto-focus'));
        });

        it('limitTabRange should works', function () {
            (wrapper.querySelector('.foo-password') as HTMLElement).focus();
            focus.limitTabRange(wrapper, tabEvent);
            assert(document.activeElement!.className === 'foo-select');

            focus.limitTabRange(wrapper, tabEvent);
            assert((document.activeElement!.className as string) === 'foo-btn');

            focus.limitTabRange(wrapper, tabEventWithShift);
            assert(document.activeElement!.className === 'foo-select');
        });

        it('backLastFocusNode should works', function () {
            (wrapper.querySelector('.foo-select') as HTMLElement).focus();
            focus.saveLastFocusNode();
            focus.limitTabRange(wrapper, tabEventWithShift);
            focus.limitTabRange(wrapper, tabEventWithShift);
            focus.limitTabRange(wrapper, tabEventWithShift);

            focus.backLastFocusNode();
            assert(document.activeElement!.className === 'foo-select');
            focus.clearLastFocusNode();
        });
    });
});
