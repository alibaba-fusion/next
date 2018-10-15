import assert from 'power-assert';
import sinon from 'sinon';
import request from '../../src/upload/runtime/request';

let xhr;
let requests;

const empty = () => {};
const option = {
    onSuccess: empty,
    action: 'upload.do',
    data: { a: 1, b: 2 },
    filename: 'a.png',
    file: {
        name: 'a.png'
    },
    headers: { from: 'hello' }
};

describe('request', () => {
    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        requests = [];
        xhr.onCreate = req => requests.push(req);

        option.onError = empty;
        option.onSuccess = empty;
    });

    afterEach(() => {
        xhr.restore();
    });

    it('upload request success', done => {
        if (typeof FormData !== 'undefined') {
            option.onError = done;
            option.onSuccess = ret => {
                assert.deepEqual(ret, { success: true });
                done();
            };
            request(option);
            requests[0].respond(200, {}, '{"success": true}');
        } else {
            done();
        }
    });

    it('upload request timeout for 5e3', done => {
        if (typeof FormData !== 'undefined') {
            // option.onError = ret => {
            //     done();
            // };
            option.onSuccess = ret => {
                assert.deepEqual(ret, { success: true });
                done();
            };
            option.timeout = 5e3;
            request(option);
            requests[0].respond(200, {}, '{"success": true}');
        } else {
            done();
        }
    });

    // it('upload request timeout for 1e3', done => {
    //     if (typeof FormData !== 'undefined') {
    //         option.onError = ret => {
    //             assert(ret.toString() === 'Error: Upload abort for exceeding time (timeout: 1000ms)');
    //             done();
    //         }
    //         option.onSuccess = ret => {
    //             assert.deepEqual(ret, { success: true });
    //             done();
    //         };
    //         option.timeout = 1e3;
    //         request(option);
    //     } else {
    //         done();
    //     }
    // });

    it('40x code should be error', function(done) {
        if (typeof FormData !== 'undefined') {
            option.onError = e => {
                assert(e.toString().indexOf('404') !== -1);
                done();
            };

            // option.onSuccess = () => done('404 should throw error');
            request(option);
            requests[0].respond(404, {}, 'Not found');
        } else {
            done();
        }

    });

    it('get headers', () => {
        if (typeof FormData !== 'undefined') {
            request(option);
            assert.deepEqual(requests[0].requestHeaders, {
                "X-Requested-With":"XMLHttpRequest",
                from: 'hello'
            });
        }
    });
});
