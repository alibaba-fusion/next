import React from 'react';
import Upload from '../index';
import type { ObjectFile } from '../types';

const DragUpload = Upload.Dragger;

const defaultValue: ObjectFile[] = [
    {
        name: 'IMG.png',
        state: 'done',
        size: 1024,
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

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

function triggerUploadEvent(filename?: string) {
    cy.get('input[type="file"]').trigger('change', {
        target: { files: [buildFile(filename)] },
        force: true,
    });
}

describe('Upload', () => {
    describe('render', () => {
        it('should render a wrapper upload', () => {
            cy.mount(<Upload listType="text" defaultValue={defaultValue} />);
            cy.get('.next-upload');
            cy.get('.next-upload-list-item').should('have.length', 1);
        });
    });
    describe('behavior', () => {
        it('should support defaultValue', () => {
            cy.mount(
                <Upload
                    listType="card"
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    defaultValue={defaultValue}
                />
            );
            cy.get('.next-upload-list-item').should('have.length', 1);
            cy.get('.next-upload-list-item-name').first().should('contain', 'IMG.png');
        });
        it('can be changed by uploading a new file', () => {
            cy.mount(
                <Upload
                    listType="card"
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    defaultValue={defaultValue}
                />
            );
            triggerUploadEvent();
            cy.get('.next-upload-list-item').should('have.length', 2);
            cy.get('.next-upload-list-item-name').first().should('contain', 'IMG.png');
        });

        it('should support limit', () => {
            // limit = 2 上传 4 个文件 结果应该是 2 个成功 2 个失败
            if (
                !(
                    typeof atob === 'function' &&
                    typeof Blob === 'function' &&
                    typeof File === 'function'
                )
            ) {
                return;
            }

            let success = 0,
                fail = 0;
            const isPass = () => {
                expect(success).to.equal(2);
                expect(fail).to.equal(2);
            };
            const onSuccess = () => {
                success++;
                isPass();
            };
            const onError = () => {
                fail++;
                isPass();
            };

            const files = ['1', '2', '3', '4'].map(value => buildFile(value));

            cy.mount(
                <Upload
                    autoUplod={false}
                    limit={2}
                    multiple
                    onSuccess={onSuccess}
                    onError={onError}
                />
            );
            cy.get('input').trigger('change', { target: { files: files }, force: true });
        });

        it('should support upload again, when an upload fails', () => {
            cy.intercept('POST', '/upload-endpoint', {
                statusCode: 200,
                body: '{"success": false}',
            }).as('uploadRequest');

            let uploaderRef: ReturnType<InstanceType<typeof Upload>['getInstance']>;
            const saveUploaderRef = (ref: InstanceType<typeof Upload> | null) => {
                if (!ref) return;
                uploaderRef = ref.getInstance();
            };

            const onSubmit = () => {
                uploaderRef.startUpload();
            };

            const beforeUpload = cy.spy().as('beforeUpload');
            cy.mount(
                <div>
                    <Upload
                        action="/upload-endpoint"
                        autoUpload={false}
                        ref={saveUploaderRef}
                        listType="image"
                        beforeUpload={beforeUpload}
                        useDataURL
                    >
                        <button className="upload-btn" style={{ marginBottom: 8 }}>
                            Select File
                        </button>
                    </Upload>
                    <br />
                    <button className="submit-btn" onClick={onSubmit}>
                        Upload
                    </button>
                </div>
            );

            cy.get('input[type="file"]').trigger('change', {
                target: { files: [buildFile()] },
                force: true,
            });

            cy.get('.submit-btn').trigger('click');
            cy.get('@beforeUpload').should('have.been.calledOnce');
            cy.get('.submit-btn').trigger('click');
            cy.get('@beforeUpload').should('have.been.calledTwice');
        });

        it('should support onPreview events when listType is set to card and isPreview is set to true', () => {
            const onPreview = cy.spy().as('onPreviewSpy');
            cy.mount(
                <Upload
                    listType="card"
                    isPreview
                    defaultValue={defaultValue}
                    onPreview={onPreview}
                />
            );
            cy.get('.next-upload-list-item-thumbnail > img').first().trigger('click');
            cy.get('@onPreviewSpy').should('have.been.calledOnce');
        });

        it('should support onChange/onRemove events', () => {
            const onChange = cy.spy().as('onChangeSpy');
            const onRemove = cy.spy().as('onRemoveSpy');

            cy.mount(
                <Upload
                    listType="text"
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            );
            cy.get('i.next-icon-close').first().trigger('click', { force: true });
            cy.get('@onChangeSpy').should('have.been.calledOnce');
            cy.get('@onRemoveSpy').should('have.been.calledOnce');
        });
    });

    describe('[render] drag', () => {
        it('should render a drag upload', () => {
            cy.mount(<DragUpload />);
            cy.get('.next-upload-drag');

            if (typeof Blob === 'function' && typeof File === 'function') {
                const blob = new Blob(['hello'], { type: 'text/plain' });
                const file = new File([blob], 'test.png', { type: 'image/png' });

                cy.get('div.next-upload-inner').trigger('dragover', {
                    dataTransfer: { files: [file] },
                });
                cy.get('div.next-upload-inner').trigger('dragleave', {
                    dataTransfer: { files: [file] },
                });
                cy.get('div.next-upload-inner').trigger('drop', {
                    dataTransfer: { files: [file] },
                });
            }
        });

        // issue: Shell phone model menu icon should hidde, close #3886
        it('should hidden upload Dragger when file length === limit', () => {
            cy.mount(
                <Upload.Dragger
                    listType="image"
                    limit={1}
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );

            cy.get('.next-upload-drag').should('have.length', 1);
            cy.get('.next-upload-inner').should('have.length', 1);
            cy.get('.next-upload-inner').should('have.class', 'next-hidden');
        });

        it('should support itemRender', () => {
            const itemRender = () => <div className="test">test</div>;
            cy.mount(
                <Upload
                    itemRender={itemRender}
                    listType="card"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            ).as('upload');
            cy.get('.test').should('have.length', 1);

            cy.rerender('upload', {
                itemRender,
                listType: 'image',
            });
            cy.get('.test').should('have.length', 1);
        });

        it('should support itemRender on Dragger', () => {
            const itemRender = () => <div className="test">test</div>;
            cy.mount(
                <Upload.Dragger
                    itemRender={itemRender}
                    listType="card"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            cy.get('.test').should('have.length', 1);
        });
    });

    describe('[behavior] Upload Request', () => {
        it('should support header', () => {
            const testUrl = '/upload-endpoint';
            cy.intercept('POST', testUrl, req => {
                expect(req.headers['test-head']).to.equal('test-head');
                // 解析请求体字符串，这里简化处理，仅针对文本数据
                const bodyParts = req.body.split('\r\n\r\n');
                const testDataIndex = bodyParts.findIndex((part: string) =>
                    part.includes('name="test-data"')
                );
                const testDataPart = bodyParts[testDataIndex + 1].split('\r\n')[0];
                const testDataValue = testDataPart.trim();
                expect(testDataValue).to.equal('test-data');

                req.reply({
                    statusCode: 200,
                    body: {
                        success: true,
                        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        test: 123,
                    },
                });
            }).as('fileUpload');

            cy.mount(
                <Upload
                    action={testUrl}
                    data={{ 'test-data': 'test-data' }}
                    headers={{ 'test-head': 'test-head' }}
                />
            );

            triggerUploadEvent();
            cy.wait('@fileUpload');
        });

        it('should support custom request', () => {
            const testUrl = '/upload-endpoint';
            const customRequest = cy.spy().as('customRequest');

            cy.intercept('POST', testUrl, req => {
                req.reply({
                    statusCode: 200,
                    body: {
                        success: true,
                        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        test: 123,
                    },
                });
            }).as('fileUpload');

            cy.mount(<Upload autoUplod={false} request={customRequest} action={testUrl} />);

            triggerUploadEvent();
            cy.get('@customRequest').should('have.been.called');
        });

        it('should throw error when response json invalid', () => {
            const testUrl = '/upload/files/beforeUpload';

            cy.intercept('POST', testUrl, {
                statusCode: 200,
                body: '{"succe3}',
            }).as('uploadRequest');

            const onErrorSpy = cy.spy().as('onErrorSpy');

            cy.mount(<Upload autoUplod={false} onError={onErrorSpy} action={testUrl} />);

            triggerUploadEvent();
            cy.wait('@uploadRequest');

            cy.get('@onErrorSpy').should('have.been.called');
        });

        it('should throw error when response.success=false', () => {
            cy.intercept('POST', '/upload-endpoint', {
                statusCode: 200,
                body: '{"success": false}',
            }).as('uploadRequest');

            const onErrorSpy = cy.spy().as('onErrorSpy');

            cy.mount(<Upload autoUplod={false} onError={onErrorSpy} action="/upload-endpoint" />);

            triggerUploadEvent();
            cy.wait('@uploadRequest');

            cy.get('@onErrorSpy').should('have.been.called');
        });

        it('should throw error when return false in BeforeUpload', () => {
            const beforeUpload = () => false;
            const onErrorSpy = cy.spy().as('onErrorSpy');

            cy.mount(<Upload autoUplod={false} onError={onErrorSpy} beforeUpload={beforeUpload} />);
            triggerUploadEvent();
            cy.get('@onErrorSpy').should('have.been.called');
        });

        it('should throw error when return Promise.resolve(false) in BeforeUpload', () => {
            const beforeUpload = () => Promise.resolve(false);
            const onErrorSpy = cy.spy().as('onErrorSpy');

            cy.mount(<Upload autoUplod={false} onError={onErrorSpy} beforeUpload={beforeUpload} />);
            triggerUploadEvent();
            cy.get('@onErrorSpy').should('have.been.called');
        });

        it('should throw error when return Promise.reject() in BeforeUpload', () => {
            const beforeUpload = () => Promise.reject({});
            const onErrorSpy = cy.spy().as('onErrorSpy');

            cy.mount(<Upload autoUplod={false} onError={onErrorSpy} beforeUpload={beforeUpload} />);
            triggerUploadEvent();
            cy.get('@onErrorSpy').should('have.been.called');
        });
    });
});
