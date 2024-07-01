import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Input } from '@alifd/next';
import { type UploadProps } from '@alifd/next/types/upload';
import { type InputProps } from '@alifd/next/types/input';

class App extends React.Component {
    uploaderRef: ReturnType<InstanceType<typeof Upload>['getInstance']>;
    onPaste: InputProps['onPaste'] = e => {
        e.preventDefault();
        const files = Array.from(e.clipboardData!.files);
        files!.length && this.uploaderRef!.selectFiles!(files);
    };

    saveUploaderRef = (ref: InstanceType<typeof Upload>) => {
        if (!ref) return;
        this.uploaderRef = ref.getInstance();
    };

    onChange: UploadProps['onChange'] = value => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <Input.TextArea
                    style={{ width: '100%', marginBottom: 10 }}
                    autoHeight={{ minRows: 4 }}
                    onPaste={this.onPaste}
                />
                <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    listType="image"
                    onChange={this.onChange}
                    ref={this.saveUploaderRef}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
