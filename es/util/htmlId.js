/**
 * Replace characters not allowed for HTML id attributes
 */
export function escapeForId(text) {
    if (!text) {
        return '';
    }
    if (typeof text === 'object') {
        text = JSON.stringify(text);
    }
    else if (typeof text !== 'string') {
        text = String(text);
    }
    return text.replace(/['"]/gm, '').replace(/[\s'"]/gm, '-');
}
/**
 * Generate a string to be used for HTML id attributes
 *
 * @param prefix - prefix text for the id. Important because without one, eventually there will be 2 elements with the same id on the same page
 * @param max - range for the random number generator. Defaults to 1,000,000, but can be set higher if necessary.
 */
export function randomId(prefix, max) {
    if (max === void 0) { max = 1000000; }
    var rand = Math.ceil(Math.random() * max);
    return prefix ? "".concat(escapeForId(prefix), "-").concat(rand) : rand.toString(10);
}
