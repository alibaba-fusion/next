import React from 'react';
import Upload from '../index';
import { type ObjectFile } from '../types';

const CardUpload = Upload.Card;

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

describe('CardUpload', () => {
    describe('[behavior]', () => {
        it('should support prefix', () => {
            cy.mount(<CardUpload prefix="test-" />);
            cy.get('div.test-upload').should('have.length', 1);
        });
        it('should support controlled `value`', () => {
            cy.mount(<CardUpload value={[]} />).as('Demo');

            cy.get('div.next-upload-list-item').should('have.length', 1);

            const files = [
                {
                    name: 'IMG_20140109_121958.jpg',
                    state: 'uploading',
                    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                },
            ];
            cy.rerender('Demo', { value: files });

            cy.get('div.next-upload-list-item').should('have.length', 2);
        });
        it('should support showDownload', () => {
            const files = [
                {
                    name: 'IMG_20140109_121958.jpg',
                    state: 'done',
                    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                },
            ];

            cy.mount(<CardUpload value={files} showDownload />).as('Demo');

            cy.get('i.next-upload-tool-download-icon').should('have.length', 1);

            cy.rerender('Demo', { value: files, showDownload: false });

            cy.get('i.next-upload-tool-download-icon').should('have.length', 0);
        });

        it('should support reUpload', () => {
            const files = [buildFile()];
            cy.mount(<CardUpload value={files} reUpload={false} />).as('Demo');

            cy.get('i.next-upload-tool-reupload-icon').should('have.length', 0);

            cy.rerender('Demo', { value: files, reUpload: true });

            cy.get('i.next-upload-tool-reupload-icon').should('have.length', 1);
        });
    });

    describe('[request]', () => {
        it('should support header', () => {
            const testUrl = '/upload-endpoint';
            cy.intercept('POST', testUrl, req => {
                expect(req.headers['test-head']).to.equal('test-head');
                expect(req.body.get('test-data')).to.equal('test-data');
                req.reply({
                    statusCode: 200,
                    body: {
                        success: true,
                        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        test: 123,
                    },
                });
            });

            cy.mount(
                <CardUpload
                    autoUplod={false}
                    data={{ 'test-data': 'test-data' }}
                    headers={{ 'test-head': 'test-head' }}
                />
            );

            cy.get('input[type="file"]').trigger('change', {
                target: { files: [buildFile()] },
                force: true,
            });
        });

        it('should support onChange/onRemove events', () => {
            const onChange = cy.spy().as('onChangeSpy');
            const onRemove = cy.spy().as('onRemoveSpy');

            cy.mount(
                <CardUpload
                    defaultValue={
                        [
                            {
                                uid: '0',
                                name: 'IMG.png',
                                state: 'done',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                            {
                                uid: '1',
                                name: 'IMG.png',
                                percent: 50,
                                state: 'uploading',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                            {
                                uid: '2',
                                name: 'IMG.png',
                                state: 'error',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                        ] as ObjectFile[]
                    }
                    onChange={onChange}
                    onRemove={onRemove}
                />
            );
            cy.get('i.next-icon-ashbin').first().trigger('click', { force: true });

            cy.get('@onChangeSpy').should('have.been.calledOnce');
            cy.get('@onRemoveSpy').should('have.been.calledOnce');

            cy.get('.next-upload-list-item-wrapper').should('have.length', 2);
        });

        it('should support onChange/onCancel events', () => {
            const onChange = cy.spy().as('onChangeSpy');
            const onCancel = cy.spy().as('onCancelSpy');

            cy.mount(
                <CardUpload
                    defaultValue={
                        [
                            {
                                uid: '0',
                                name: 'IMG.png',
                                state: 'done',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                            {
                                uid: '1',
                                name: 'IMG.png',
                                percent: 50,
                                state: 'uploading',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                            {
                                uid: '2',
                                name: 'IMG.png',
                                state: 'error',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                downloadURL:
                                    'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            },
                        ] as ObjectFile[]
                    }
                    onChange={onChange}
                    onCancel={onCancel}
                />
            );

            cy.get('.next-upload-list-item-handler .next-btn').first().trigger('click');
            cy.get('@onCancelSpy').should('have.been.calledOnce');
            cy.get('@onChangeSpy').should('have.been.calledOnce');
            cy.get('.next-upload-list-item-wrapper').should('have.length', 2);
        });

        it('should support change Data/Action/Headers in BeforeUpload', () => {
            class App extends React.Component {
                beforeUpload = () => {
                    return {
                        action: '/upload/files/beforeUpload',
                        data: { 'test-data': 'beforeUpload' },
                        headers: { 'test-head': 'beforeUpload' },
                    };
                };
                render() {
                    return (
                        <CardUpload
                            autoUplod={false}
                            beforeUpload={this.beforeUpload}
                            action="/upload/files/123"
                            data={{ 'test-data': 'test-data' }}
                            headers={{ 'test-head': 'test-head' }}
                        />
                    );
                }
            }
            cy.intercept('POST', '/upload/files/beforeUpload', req => {
                expect(req.headers['test-head']).to.equal('beforeUpload');

                // 解析请求体字符串，这里简化处理，仅针对文本数据
                const bodyParts = req.body.split('\r\n\r\n');
                const testDataIndex = bodyParts.findIndex((part: string) =>
                    part.includes('name="test-data"')
                );
                const testDataPart = bodyParts[testDataIndex + 1].split('\r\n')[0];
                const testDataValue = testDataPart.trim();
                expect(testDataValue).to.equal('beforeUpload');

                req.reply({
                    statusCode: 200,
                    body: { success: true },
                });
            }).as('uploadRequest');

            cy.mount(<App />);

            cy.get('input[type="file"]').trigger('change', {
                target: { files: [buildFile()] },
                force: true,
            });

            cy.wait('@uploadRequest').its('response.statusCode').should('eq', 200);
        });
    });
});
