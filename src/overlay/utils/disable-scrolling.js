/**
 * To disable scrolling of target element.
 * See {@link https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily}
 * @return {Function} Function to remove event listeners to enable scrolling.
 */
export default function disableScrolling(target = window) {
    const keyCodes = [
        37, // left
        38, // up
        39, // right
        40, // down
        32, // spacebar
        33, // pageup
        34, // pagedown
        35, // end
        36, // home
    ];

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keyCodes.includes(e.keyCode)) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
        window.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
                get() {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) {
        // eslint-disable-next-line
    }

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    target.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    target.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    target.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    target.addEventListener('keydown', preventDefaultForScrollKeys, false);

    return function enableScroll() {
        target.removeEventListener('DOMMouseScroll', preventDefault, false);
        target.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        target.removeEventListener('touchmove', preventDefault, wheelOpt);
        target.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    };
}
