# 预览态

- order: 5

设置  `isPreview` 和 `renderPreview` 属性后，评分组件仅展示模式，渲染自定义内容。


:::lang=en-us
# Preview Mode

- order: 5

Rating component can only display score when you set `isPreview` and `renderPreview` attribute, and render the custom content.

:::
---

````jsx
import { Rating, Button } from '@alifd/next';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPreview: false };
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setState({ isPreview: !this.state.isPreview })}>切换预览</Button>
        <br />
        <br />
        <Rating defaultValue={3.5} isPreview={this.state.isPreview} renderPreview={(value) => `Rating: ${value}`} />
      </div>
    );
  }
}

ReactDOM.render(<Preview />, mountNode);
````
