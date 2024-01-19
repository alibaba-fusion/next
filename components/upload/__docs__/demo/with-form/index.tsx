import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button, Field, Form, Box } from '@alifd/next';

const FormItem = Form.Item;

const value = [
    {
        name: 'pic.png',
        fileName: 'pic.png',
        state: 'done',
        size: 1000,
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

class App extends React.Component {
    field = new Field(this);

    setValues = () => {
        this.field.setValues({
            upload: [...value],
        });
    };

    getValues = () => {
        const values = this.field.getValues();
        console.log(values);
    };

    render() {
        return (
            <Form field={this.field}>
                <FormItem required>
                    <Upload
                        listType="text"
                        name="upload"
                        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                        defaultValue={value}
                    >
                        <Button>Upload</Button>
                    </Upload>
                </FormItem>
                <Box direction="row" spacing={20}>
                    <Button onClick={this.setValues} type="primary" style={{ margin: '0 0 10px' }}>
                        Set Data
                    </Button>
                    <Button onClick={this.getValues} type="primary" style={{ margin: '0 0 10px' }}>
                        Get Data
                    </Button>
                    <Button
                        onClick={() => this.field.reset()}
                        type="primary"
                        style={{ margin: '0 0 10px' }}
                    >
                        Reset
                    </Button>
                    <Button
                        onClick={() => this.field.validate()}
                        type="primary"
                        style={{ margin: '0 0 10px' }}
                    >
                        Validate
                    </Button>
                </Box>
            </Form>
        );
    }
}

ReactDOM.render(<App />, mountNode);
