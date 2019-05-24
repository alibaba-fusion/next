# 结构化解析

- order: 12

使用 parseName 时设置默认值。
输入名称是 “值” 道具内的路径

:::lang=en-us
# Parse Array or Object

- order: 12

Set default values when using parseName. 
Input name is path inside `values` prop

:::
---

````jsx
import {Input, Button, Field, Form } from '@alifd/next';



class Demo extends React.Component {
  field = new Field(this, {
    parseName: true,
    values: {
      aaa: ['xxx', 'yyy'],
      bbb: {
        ccc: 'value c'
      }
    }
  });

	_handleValidate = () => {
    const {
      field: {
        validate
      }
    } = this;
    
    validate(['bbb.ccc']);
  };
  
  render() {
    const {
      field,
      field: {
        init,
      }
    } = this;

    console.log(this);
    
    return (<Form field={field}>
      <Button onClick={this._handleValidate}>validate</Button>
      <Form.Item label="aaa" key="aaa">
        <Input name="aaa.0"/>
      </Form.Item>
      <Form.Item label="ccc" key="ccc">
        <Input name="bbb.ccc"/>
      </Form.Item>
    </Form>);
  }
}

ReactDOM.render(<Demo/>, mountNode);
````

````css
.demo .next-btn {
    margin-right: 5px;
}
````
