import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Input } from '@alifd/next';

class App extends React.Component {
    onPaste = e => {
        e.preventDefault();
        const files = e.clipboardData.files;
        files.length && this.uploaderRef.selectFiles(files);
    };

    saveUploaderRef = ref => {
        if (!ref) return;
        this.uploaderRef = ref.getInstance();
    };

    onChange = value => {
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
