import request from '../runtime/request';
import type { UploadOptions } from '../types';

function fixBinary(bin: string) {
    const length = bin.length;
    const buf = new ArrayBuffer(length);
    const arr = new Uint8Array(buf);
    for (let i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

function buildFile(filename = 'test') {
    const base64 =
        'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggkFBTzlUWEwwWTRPSHdBQUFBQkpSVTVFcmtKZ2dnPT0=';
    const binary = fixBinary(atob(base64));
    const blob = new Blob([binary], { type: 'image/png' });
    const file = new File([blob], `${filename}.png`, { type: 'image/png' });
    return file;
}

const empty = () => {};
const option: UploadOptions = {
    onSuccess: empty,
    onError: empty,
    action: '/upload/files/beforeUpload',
    data: { a: '1', b: ' 2' },
    filename: 'a.png',
    file: buildFile('a.png'),
    headers: { from: 'hello' },
};

describe('request', () => {
    beforeEach(() => {
        cy.intercept('POST', '/upload/files/beforeUpload', { success: true }).as('getData');
    });

    it('handles upload request success', () => {
        const onSuccess = cy.spy().as('onSuccess');
        option.onSuccess = onSuccess;
        request(option);

        cy.wait('@getData').then(() => {
            cy.get('@onSuccess').should('have.been.calledOnce');
        });
    });

    it('upload request timeout for 5e3', () => {
        option.timeout = 5e3;
        const onSuccess = cy.spy().as('onSuccess');
        option.onSuccess = onSuccess;
        request(option);

        cy.wait('@getData').then(() => {
            cy.get('@onSuccess').should('have.been.calledOnce');
        });
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

    it('get headers', () => {
        request(option);
        cy.wait('@getData').then(({ request }) => {
            expect(request.headers).to.have.property('x-requested-with', 'XMLHttpRequest');
            expect(request.headers).to.have.property('from', 'hello');
        });
    });
});

describe('request error', () => {
    beforeEach(() => {
        cy.intercept('POST', '/upload/files/beforeUpload', { forceNetworkError: true }).as(
            'getData'
        );
    });

    it('40x code should be error', () => {
        const onError = cy.spy().as('onError');
        option.onError = onError;
        request(option);

        cy.wait('@getData').then(() => {
            cy.get('@onError').should('have.been.calledOnce');
        });
    });
});
