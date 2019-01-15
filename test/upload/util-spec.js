import assert from 'power-assert';
import {uid, fileToObject, getFileItem, removeFileItem, previewFile, errorCode} from '../../src/upload/util';

describe('util function test', () => {
    it('uid generate', () => {
        const uidNumber = uid();
        assert(typeof uidNumber === 'string');
    });

    it('fileToObject', () => {
        const file = {
            lastModified: 22334,
            lastModifiedDate: 11223,
            name: 'cjk.png',
            size: 12345,
            type: 'image/png',
            uid: 123,
            // error: null,
            percent: 0,
            // originFileObj: null,
        };
        assert(fileToObject(file).uid === file.uid);
    });

    it('getFileItem', () => {
        const file = {uid: 1, 1: 1};
        const files =[file, {uid: 2, 2: 2}];
        assert(getFileItem(file, files) === file);
    });

    it('removeFileItem remove one', () => {
        const file = {uid: 1, 1: 1};
        const files =[file, {uid: 2, 2: 2}];
        assert(removeFileItem(file, files).length === files.length - 1);
    });
    it('removeFileItem not find one to remove', () => {
        const file = {uid: 1, 1: 1};
        const files =[{uid: 3, 3: 3}, {uid: 2, 2: 2}];
        assert(removeFileItem(file, files) === null);
    });

    it('previewFile', (done) => {
        if (!window.FileReader || !window.File || !window.Blob) {
            done();
            return;
        }

        const json = JSON.stringify({hello: "world"}, null, 2);
        const blob = new Blob([json], {type : 'application/json'});
        previewFile(blob, (dataurl) => {
            const data = 'data:application/json;base64,ewogICJoZWxsbyI6ICJ3b3JsZCIKfQ==';
            assert(dataurl === data);
            done();
        })
    });
    it('errCode', () => {
        const code = {
            EXCEED_LIMIT: 'EXCEED_LIMIT',
            BEFOREUPLOAD_REJECT: 'BEFOREUPLOAD_REJECT',
            RESPONSE_FAIL: 'RESPONSE_FAIL',
        };
        assert.deepStrictEqual(code, errorCode);
    })

});
