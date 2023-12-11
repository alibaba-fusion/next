import US from '../en-us';
import JP from '../ja-jp';
import CN from '../zh-cn';
import HK from '../zh-hk';
import TW from '../zh-tw';
import VI from '../vi-vn';
import IT from '../it-it';
import PT from '../pt-pt';
import KR from '../ko-kr';
import MY from '../ms-my';
import TH from '../th-th';
import ID from '../id-id';
import { ComponentLocaleObject, Locale } from '../types';

function getKeys(object: Locale | ComponentLocaleObject, parent = '') {
    const keys: string[] = [];
    for (const key in object) {
        if (!object.hasOwnProperty(key) || key === 'momentLocale') continue;
        const value = object[key];
        keys.push(parent ? `${parent}.${key}` : key);

        if (Array.isArray(value)) {
            keys.push(`${key}_length_${value.length}`);
        } else if (typeof value === 'object') {
            keys.push(getKeys(value as ComponentLocaleObject, key));
        }
    }
    return keys.join(',');
}

describe('Locale', () => {
    it('should be the same keys', () => {
        const usKeys = getKeys(US);
        const jpKeys = getKeys(JP);
        const cnKeys = getKeys(CN);
        const hkKeys = getKeys(HK);
        const twKeys = getKeys(TW);
        const viKeys = getKeys(VI);
        const itKeys = getKeys(IT);
        const ptKeys = getKeys(PT);
        const krKeys = getKeys(KR);
        const myKeys = getKeys(MY);
        const thKeys = getKeys(TH);
        const idKeys = getKeys(ID);

        assert(
            usKeys === jpKeys &&
                jpKeys === cnKeys &&
                cnKeys === hkKeys &&
                hkKeys === twKeys &&
                twKeys === viKeys &&
                viKeys === itKeys &&
                itKeys === ptKeys &&
                ptKeys === krKeys &&
                krKeys === myKeys &&
                myKeys === thKeys &&
                thKeys === idKeys
        );
    });
});
