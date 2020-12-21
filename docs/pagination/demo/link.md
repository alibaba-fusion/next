# 分页按钮链接

-   order: 10

可以通过指定 `link` 属性来设置页码按钮的跳转链接，方便 SEO，link 属性的值为一个包含 `{page}` 的模板字符串，Pagination 组件会将该占位符替换为具体的页码数字。

:::lang=en-us
# Pagination Button Link

-   order: 10

You can set the page link's jump url by specifying the `link` attribute. The value of the SEO, link attribute is a template string containing `{page}`, and the Pagination component replaces the placeholder with a specific page number.

:::
---

````jsx
import { Pagination } from '@alifd/next';

const format = `${window.location.href}#/{page}`;

ReactDOM.render(
    <Pagination defaultCurrent={2} link={format} />,
    mountNode
);
````
