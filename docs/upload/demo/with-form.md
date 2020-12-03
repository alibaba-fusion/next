# 内容回填

- order: 6
- debug: true
  
:::lang=en-us
# Content fill

- order: 6

:::
---

````jsx
import { Upload, Button, Field, Form } from '@alifd/next';

const FormItem = Form.Item;

const value = [{
    name: 'pic.png',
    fileName: 'pic.png',
    state: 'done',
    size: 1000,
    downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}];

class App extends React.Component {

    field = new Field(this);

    setValues = () => {
        this.field.setValues({
            upload: [...value]
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
                <div>
                    <Button onClick={this.setValues} type="primary" style={{margin: '0 0 10px'}}>Set Data</Button>&nbsp;&nbsp;
                    <Button onClick={this.getValues} type="primary" style={{margin: '0 0 10px'}}>Get Data</Button>&nbsp;&nbsp;
                    <Button onClick={() => this.field.reset()} type="primary" style={{margin: '0 0 10px'}}>Reset</Button>&nbsp;&nbsp;
                    <Button onClick={() => this.field.validate()} type="primary" style={{margin: '0 0 10px'}}>Validate</Button>
                </div>
            </Form>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
