# 无障碍

- order: 16

请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 16

Please refer to `ARIA and KeyBoard`.

:::
---

````jsx
import { Upload, Button } from '@alifd/next';

ReactDOM.render([
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => {}}
        onChange={onChange}
        key="5"
    >
        <Button type="secondary" style={{margin: '0 0 10px'}}>upload </Button>
    </Upload>
], mountNode);
function onChange(info) {
    console.log('onChange callback : ', info);
}

````
