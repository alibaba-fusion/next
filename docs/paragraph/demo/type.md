# 长短文本

- order: 1

用于短文本和长文本的区分，短文本的行间距会更小(一般为三行以内)

:::lang=en-us
# long and short text

- order: 1

long for all text, short for those text within three lines

:::
---

````jsx
import { Paragraph } from '@alifd/next';

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

ReactDOM.render(<div>
    <Paragraph>{content}</Paragraph>
    <br/>
    <Paragraph type="short">{content}</Paragraph>
</div>, mountNode);
````
