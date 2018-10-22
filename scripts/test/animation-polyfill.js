/* global window */
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        setTimeout(callback, 0);
    };
}
