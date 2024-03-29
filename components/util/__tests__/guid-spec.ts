import { guid } from '../guid';

describe('src/guid.js', function () {
    it('guid() will return a string', function () {
        assert(typeof guid() === 'string');
    });

    it('guid(prefix) will include prefix string in result', function () {
        assert(guid('foo-').indexOf('foo-') !== -1);
    });

    it('guid() will never repeat', function () {
        const map: Record<string, boolean> = {};
        let count = 1e4;
        while (count-- > 0) {
            map[guid()] = true;
        }
        assert(Object.keys(map).length === 1e4);
    });
});
