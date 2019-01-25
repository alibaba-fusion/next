import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Upload from '../../src/upload/index';
import request from '../../src/upload/runtime/request'
import { func } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });

const CardUpload = Upload.Card;
const DragUpload = Upload.Dragger;

const defaultValue = [
    {
        name: 'IMG.png',
        state: 'done',
        size: 1024,
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    }
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
    const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggkFBTzlUWEwwWTRPSHdBQUFBQkpSVTVFcmtKZ2dnPT0=';
    const binary = fixBinary(atob(base64));
    const blob = new Blob([binary], { type: 'image/png' });
    const file = new File([blob], `${filename}.png`, { type: 'image/png' });
    return file;
}

function triggerUploadEvent(wrapper, done, callback) {
    if (typeof atob === 'function' && typeof Blob === 'function' && typeof File === 'function') {
        // 模拟文件上传
        const file = buildFile();
        wrapper.find('input').simulate('change', { target: { files: [file] } });
        callback && callback(wrapper);
    } else {
        done();
    }
}

describe('ImageUpload', () => {
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

    describe('render', () => {
        it('should render a imageList upload', () => {
            const wrapper = mount(<Upload listType="image" defaultValue={[
                {
                uid: '0',
                name: 'IMG.png',
                state: 'done',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
            }, {
                uid: '1',
                name: 'IMG.png',
                percent: 50,
                state: 'uploading',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
            }, {
                uid: '2',
                name: 'IMG.png',
                state: 'error',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
            }]} />);
            assert(wrapper.find('.next-upload-list.next-upload-list-image').length === 1);
            assert(wrapper.find('.next-upload-list-item').length === 3);
            ['next-upload-list-item-done', 'next-upload-list-item-uploading', 'next-upload-list-item-error'].forEach(className => {
                assert(wrapper.find(`.${className}`).length === 1);
            });
        });
        it('should render a imageList upload with error msg', () => {
            const wrapper = mount(<Upload listType="image" defaultValue={[{
                uid: '2',
                name: 'IMG.png',
                state: 'error',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                errorMsg: 'ErrorText'
            }]} />);
            assert(wrapper.find('.next-upload-list-item-error-with-msg').length === 1);
            assert(wrapper.find('.next-upload-list-item-error').length === 1);
            assert(wrapper.find('.next-upload-list-item-error-msg').length === 1);
            assert(wrapper.find('.next-upload-list-item-error-msg').at(0).text() === 'ErrorText');

        });
    });
});
