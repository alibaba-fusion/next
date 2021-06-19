import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Upload from '../../src/upload/index';
import request from '../../src/upload/runtime/request';
import { func } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });

const CardUpload = Upload.Card;
const DragUpload = Upload.Dragger;

const defaultValue = [
    {
        name: 'IMG.png',
        state: 'done',
        size: 1024,
        url:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

function fixBinary(bin) {
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

function triggerUploadEvent(wrapper, done, callback) {
    if (
        typeof atob === 'function' &&
        typeof Blob === 'function' &&
        typeof File === 'function'
    ) {
        // 模拟文件上传
        const file = buildFile();
        wrapper.find('input').simulate('change', { target: { files: [file] } });
        callback && callback(wrapper);
    } else {
        done();
    }
}

describe('CardUpload', () => {
    let requests;
    let xhr;

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        requests = [];
        xhr.onCreate = req => requests.push(req);
    });

    afterEach(() => {
        xhr.restore();
    });

    describe('[behavior]', () => {
        it('should support prefix', () => {
            const wrapper = mount(<CardUpload prefix="test-" />);
            assert(wrapper.find('div.test-upload').length === 1);
        });
        it('should support controlled `value`', () => {
            const wrapper = mount(<CardUpload value={[]} />);
            assert(wrapper.props().value.length === 0);
            assert(wrapper.find('div.next-upload-list-item').length === 1);

            wrapper.setProps({
                value: [
                    {
                        name: 'IMG_20140109_121958.jpg',
                        state: 'uploading',
                        url:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        imgURL:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    },
                ],
            });

            assert(wrapper.props().value.length === 1);
            assert(wrapper.find('div.next-upload-list-item').length === 2);
        });
        it('should support showDownload', () => {
            const wrapper = mount(<CardUpload value={[]} />);
            wrapper.setProps({
                value: [
                    {
                        name: 'IMG_20140109_121958.jpg',
                        state: 'done',
                        url:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        imgURL:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    }
                ],
            });

            assert(wrapper.find('i.next-upload-tool-download-icon').length === 1);

            wrapper.setProps({
                showDownload: false
            });

            assert(wrapper.find('i.next-upload-tool-download-icon').length === 0);
        });
        it('should support reUpload', () => {
            const wrapper = mount(<CardUpload value={[]} />);
            wrapper.setProps({
                value: [
                    {
                        name: 'IMG_20140109_121958.jpg',
                        state: 'error',
                        url:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        imgURL:
                            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                    }
                ],
            });

            assert(wrapper.find('i.next-upload-tool-reupload-icon').length === 0);

            wrapper.setProps({
                reUpload: true
            });

            assert(wrapper.find('i.next-upload-tool-reupload-icon').length === 1);
        });
    });

    describe('[request]', () => {
        it('should support header', done => {
            const formatter = res => {
                assert(res.test === 123);
                done();
            };
            const wrapper = mount(
                <CardUpload
                    autoUplod={false}
                    data={{ 'test-data': 'test-data' }}
                    headers={{ 'test-head': 'test-head' }}
                    formatter={formatter}
                />
            );
            triggerUploadEvent(wrapper, done, () => {
                const request = requests[0];

                assert(request.requestHeaders['test-head'] === 'test-head');
                assert(request.requestBody.get('test-data') === 'test-data');

                requests[0].respond(
                    200,
                    {},
                    '{"success": true, "url":"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg", "test": 123}'
                );
            });
        });
        it('should support onChange/onRemove events', done => {
            const onChange = sinon.spy();
            const onRemove = sinon.spy();
            const wrapper = mount(
                <CardUpload
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            );

            wrapper
                .find('i.next-icon-ashbin')
                .at(0)
                .simulate('click');
            assert(onRemove.calledOnce);
            assert(onChange.calledOnce);
            assert(wrapper.find('.next-upload-list-item-wrapper').length === 2);
            done();
        });
        it('should support onChange/onCancel events', done => {
            const onChange = sinon.spy();
            const onCancel = sinon.spy();
            const wrapper = mount(
                <CardUpload
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                    onChange={onChange}
                    onCancel={onCancel}
                />
            );

            wrapper
                .find('.next-upload-list-item-handler .next-btn')
                .at(0)
                .simulate('click');
            assert(onCancel.calledOnce);
            assert(onChange.calledOnce);
            assert(wrapper.find('.next-upload-list-item-wrapper').length === 2);
            done();
        });
        it('should support change Data/Action/Headers in BeforeUpload', done => {
            class App extends React.Component {
                constructor() {
                    super();
                    this.state = {
                        action: '/upload/files/123',
                        data: { 'test-data': 'test-data' },
                        headers: { 'test-head': 'test-head' },
                    };
                }

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
                            {...this.state}
                        />
                    );
                }
            }
            const wrapper = mount(<App />);

            triggerUploadEvent(wrapper, done, () => {
                const request = requests[0];
                assert(request.url === '/upload/files/beforeUpload');
                assert(request.requestHeaders['test-head'] === 'beforeUpload');
                assert(request.requestBody.get('test-data') === 'beforeUpload');
                done();
            });
        });
    });
});
