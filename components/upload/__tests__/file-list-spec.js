import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import sinon from 'sinon';
import Upload from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('listType', () => {
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
        it('should not render upload file list', () => {
            const wrapper = mount(
                <Upload
                    listType="none"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            assert(wrapper.exists('.next-upload-list') === false);
        });
        it('should render text upload file list', () => {
            const wrapper = mount(
                <Upload
                    listType="text"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            assert(wrapper.exists('.next-upload-list') === true);
            assert(wrapper.find('.next-upload-list-item').length === 3);
        });
        it('should render card upload file list', () => {
            const wrapper = mount(
                <Upload
                    listType="card"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            assert(wrapper.exists('.next-upload-list') === true);
            assert(wrapper.find('.next-upload-list-item').length === 3);
        });
        it('should render image upload file list', () => {
            const wrapper = mount(
                <Upload
                    listType="image"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            assert(wrapper.exists('.next-upload-list') === true);
            assert(wrapper.find('.next-upload-list-item').length === 3);
        });
    });
});
