import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Icon, Button } from '@alifd/next';

function handleClick(e) {
    e.stopPropagation();
    // download template
}
ReactDOM.render(
    <div>
        <Upload.Dragger
            listType="image"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            onDragOver={onDragOver}
            onDrop={onDrop}
        />
        <br />
        <Upload.Dragger
            listType="image"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <div className="next-upload-drag">
                <p className="next-upload-drag-icon">
                    <Icon type="upload" />
                </p>
                <p className="next-upload-drag-text">
                    click to{' '}
                    <Button text onClick={handleClick}>
                        download template
                    </Button>{' '}
                    or drag file here
                </p>
                <p className="next-upload-drag-hint">supports docx, xls, PDF </p>
            </div>
        </Upload.Dragger>
    </div>,

    mountNode
);

function onDragOver() {
    console.log('dragover callback');
}

function onDrop(fileList) {
    console.log('drop callback : ', fileList);
}
