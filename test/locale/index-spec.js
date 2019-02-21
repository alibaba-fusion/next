/* eslint-disable */
import assert from 'power-assert';
import US from '../../src/locale/en-us';
import JP from '../../src/locale/ja-jp';
import CN from '../../src/locale/zh-cn';
import TW from '../../src/locale/zh-tw';

describe('Locale', () => {
    it('should be the same keys', () => {
        const usKeys = getKeys(US);
        const jpKeys = getKeys(JP);
        const cnKeys = getKeys(CN);
        const twKeys = getKeys(TW);
        assert(usKeys === jpKeys && jpKeys === cnKeys && cnKeys === twKeys);
    });
});

function getKeys(object, parent = '') {
    const keys = [];
    for (const key in object) {
        if (!object.hasOwnProperty(key) || key === 'momentLocale') return;
        const value = object[key];
        keys.push(parent ? `${parent}.${key}`: key);

        if (Array.isArray(value)) {
            keys.push(`${key}_length_${value.length}`)
        }else if (typeof value === 'object') {
            keys.push(getKeys(value, key));
        }
    }
    return keys.join(',');
}
