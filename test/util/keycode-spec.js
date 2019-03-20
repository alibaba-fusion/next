import assert from 'power-assert';
import KEYCODE from '../../src/util/keycode';

describe('src/keycode.js', function() {
    it("KEYCODE's value should be correct", function() {
        assert(KEYCODE.BACKSPACE === 8);
        assert(KEYCODE.TAB === 9);
        assert(KEYCODE.ENTER === 13);
        assert(KEYCODE.SHIFT === 16);
        assert(KEYCODE.CTRL === 17);
        assert(KEYCODE.ALT === 18);
        assert(KEYCODE.ESC === 27);
        assert(KEYCODE.SPACE === 32);
        assert(KEYCODE.END === 35);
        assert(KEYCODE.HOME === 36);
        assert(KEYCODE.LEFT === 37);
        assert(KEYCODE.UP === 38);
        assert(KEYCODE.RIGHT === 39);
        assert(KEYCODE.DOWN === 40);
        assert(KEYCODE.CMD === 91);

        // alias
        assert(KEYCODE.LEFT_ARROW === KEYCODE.LEFT);
        assert(KEYCODE.UP_ARROW === KEYCODE.UP);
        assert(KEYCODE.RIGHT_ARROW === KEYCODE.RIGHT);
        assert(KEYCODE.DOWN_ARROW === KEYCODE.DOWN);
        assert(KEYCODE.CONTROL === KEYCODE.CTRL);
        assert(KEYCODE.OPTION === KEYCODE.ALT);
        assert(KEYCODE.COMMAND === KEYCODE.CMD);
        assert(KEYCODE.DELETE === KEYCODE.BACKSPACE);
    });
});
