// /* eslint-disable */
// import React from 'react';
// import Enzyme, {mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({adapter: new Adapter()});
// import assert from 'power-assert';
// import sinon from 'sinon';
//
// import {Html5Uploader, IframeUploader} from '../../src/upload/runtime/index';
//
// const defaultFileList = [
//     {
//         name: 'IMG.png',
//         status: 'done',
//         size: 1024,
//         downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
//         fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
//         imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
//     }
// ];
//
// function fixBinary(bin) {
//     var length = bin.length;
//     var buf = new ArrayBuffer(length);
//     var arr = new Uint8Array(buf);
//     for (var i = 0; i < length; i++) {
//         arr[i] = bin.charCodeAt(i);
//     }
//     return buf;
// }
//
//
// /**
//  * autoUpload=true
//  * 1. 选择文件 => 自动上传当前选择 => 选择文件 => 自动上传当前选择
//  * 2. 选择文件 => 再选择文件 => 点击上传
//  *
//  * 1. 非受控：选择文件 => list展示新增 => 触发onChange
//  * 2. 受控：  选择文件 => list展示新增 =>  props.value 发生变化(上传完成)  => list 跟随 value 变化
//  * 2. 受控：  选择文件 => list展示新增 =>  props.value 发生变化(还在上传中) => list 跟随 value 变化 (value 数据可能旧的）
//  *
//  * remove a file （通过ref控制Upload的api实现删除，抛出onChange)
//  * 1. 非受控：选择文件 => list展示新增 => 删除（上传中/上传完成) => 直接删掉 => 触发onChange => list 变化
//  * 2. 受控：  选择文件 => list展示新增 => 删除（上传中/上传完成) => 触发onChange => props.value 发生变化数据变少 => 反应在list上面 => 上传完成
//  *
//  *
//  *
//  * autoUpload=false
//  * 1. 选择文件 => 点击上传 => 选择文件 => 点击上传
//  * 2. 选择文件 => 再选择文件 => 点击上传 => 合并上传
//  *
//  * remove a file （通过ref控制Upload的api实现删除，抛出onChange)
//  * 1. 非受控：选择文件 => list展示新增 => 删除（上传中/上传完成) => 直接删掉 => 触发onChange => list 变化 => 提交上传无任何操作
//  * 2. 受控：  选择文件 => list展示新增 => 删除（上传中/上传完成) => 触发onChange => props.value 发生变化 => 反应在list上面 => 上传完成
//  */
//
// describe('Upload New', () => {
//     describe('defaultValue & value', () => {
//         it('under control', () => {
//             // if value not changed
//         });
//     });
//     describe('autoUpload=true', () => {
//         describe('select files', () => {
//             it('one file before upload', () => {
//                 // select a file
//
//             });
//             // two files
//             it('should be two files after add another file', () => {
//                 // select another file
//             });
//
//             it('should be one files after remove one', () => {
//
//             });
//
//             //
//             it('should stop upload and removed in list while beforeUpload=false', () => {
//
//             });
//
//         });
//         // setValue from drag(file) , paste(file), crop(base64)
//         describe('setFiles', () => {
//             it('with empty list', () => {
//
//             });
//             it('while uploading', () => {
//
//             });
//             it('after uploading', () => {
//
//             });
//         });
//     });
//
//     describe('autoUpload=false upload by ref.startUpload', () => {
//         // setValue from drag and paste
//         describe('select files', () => {
//             it('one file while list is empty', () => {
//
//             });
//             // two files
//             it('should be two files after add another file', () => {
//                 // select another file
//             });
//
//             it('should be one files after remove one', () => {
//
//             });
//
//             // three files
//             it('select one file and then delete', () => {
//
//                 // select a file
//                 // delete a file
//                 // startUpload
//             });
//         });
//
//         // setValue from drag and paste
//         describe('setFiles', () => {
//             it('with empty list', () => {
//
//             });
//             it('while uploading', () => {
//
//             });
//             it('after uploading', () => {
//
//             })
//         });
//     });
// });
