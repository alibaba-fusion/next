# 3. 步骤二：开发 Checklist

## 1. 开发 Checklist

对上节的知识了解后，我们为开发者提供一个改造的清单，我们所罗列的都是无障碍不可避免的问题，按照清单修改，页面基本支持无障碍，请开发者对如下规则进行阅读：

### 1.1 常规

* [ ] 设置 lang 让屏幕阅读器选择语言去读取，lang 参数值遵循[ISO\_639-1 规则](https://zh.wikipedia.org/wiki/ISO_639-1)。

  ```markup
  <html lang="en"></html>
  或
  <html xml:lang="en"></html>
  ```

* [ ] 标签属性的id需要全页面唯一
* [ ] 页面上的文本，要按照书写习惯添加标点符号。屏幕阅读器在读取文本标点符号适时出现停顿
* [ ] 当组件或元素聚焦时，要出现有聚焦的边框标志\(比如按钮聚焦时，有蓝色边框\)，使得与不聚焦状态做区别
* [ ] 所有按钮文本描述都是可读取的，icon 类按钮要有`aria-label`或`aria-labelledby`来辅助描述
* [ ] 视频需要以引入字幕文件的方式添加字幕，如下：

  ```markup
  <video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track
      label="English Captions"
      kind="captions"
      srclang="eN"
      src="captions.vtt"
      default
  />
  <track
      label="Subtitulos en español"
      kind="captions"
      srclang="es"
      src="subs.vtt"
  />
  </video>
  ```

* [ ] 对于一些文本属性，屏幕阅读器读取属性优先级如下\(只读取优先级最高的\)：aria-labelledby，aria-label，alt，title

  对于同一个元素 aria-labelledby，aria-label 只能使用一个\(在同时使用时，用户代理在生成可访问的名称属性时将为 aria-labelledby 分配更高的优先级\)。

* [ ] 非语义标签的键盘事件捕获，要使用onkeydown ，IE浏览器不会为非字母数字键触发按键事件
* [ ] 代码的逻辑顺序与显示的顺序要保持一致
* [ ] 需要能跳过页面重复出现的菜单，请参考上文[跳过多个页面重复出现的导航栏](https://github.com/alibaba-fusion/next/tree/56cf9e09e2cc0477e43a149dcc516c8e0a89c228/site/zh-cn/a11y/content-creation-link/page1.md)
* [ ] 关于元素的隐藏，请参考[详情](content-creation/page2.md)

### 1.2 语义化标签

* [ ] 务必使用语义化标签，并且body的直接子元素必须是以下几类标签，其次以下语义化标签与role为等价关系。对于更多语义化标签请[查阅](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

| 语义化标签 | role |
| :--- | ---: |
| header | banner |
| nav | navigation |
| main | main |
| article | article |
| aside | complementary |
| footer | contentinfo |

* [ ] 每个页面，有且仅有一个`<main>`标签或 role="main"的元素，并且为页面的主题内容
* [ ] 列表结构尽量使用 ul、ol、dl 结构组织内容
* [ ] 不使用语义化标签时，合理使用了`aria-*`与`role`来描述元素，请[参考](../yi-bei-jing-jie-shao/wai-aria.md)
* [ ] 要正确使用如下标签：

  ```text
  b    粗体文本
  em    着重文本
  i    斜体字
  strong 加重语气
  ins    删除文本
  del    下划线文本
  ```

* [ ] 标题要使用 h1~h5，不能出现 h 标签跳跃，遵循从 h1 到 h5 顺序

### 1.3 图片

* [ ] 图片要设置 alt 属性或者 longdesc 属性

  * 对于有意义的图片，要设置 alt 并且描述文字简洁，不冗余，例如 logo：

  ```markup
  <img src="logo.jpg" alt="this is logo" />
  ```

  * 对于无意义的图片，要设置 alt 为空，例如一些图标，装饰图片：

  ```markup
  <img src="icon.jpg" alt="" />
  ```

* [ ] 不要使用图片标题，使用文本标题

### 1.4 表单

* [ ] 表单元素的 label 要遵循约定关系[WCAG 用户输入目的的列表](https://w3c.github.io/WCAG21-zh/index.html#input-purposes) 遵循这些规范有助于浏览器自动回填数据、屏幕阅读器更好地传达信息
* [ ] 表单元素要遵循如下规则：

  使用 Tab 键可以顺序的切换表单元素

  对于 label 描述表单控件，例如日期，提供具体的格式，方便用户输入，例子如下：

  ```markup
  <label for="date">日期（日-月-年）</label>
  <input type="text" name="date" id="date" />
  ```

### 1.5 颜色和对比度

* [ ] 不要依赖单一元素。例如：在展示图片、表格时，用户要加入纹理或图案。保证色盲用户能辨别，不用担心颜色会影响他对数据的理解。

## 2. 参考文献

* [Princeton Content Creator Checklist](https://ux.princeton.edu/accessibility/accessibility-checklist)
* [MSU A11y Checklist](https://webaccess.msu.edu/Help_and_Resources/checklist.html)
* [The A11Y Project](https://a11yproject.com/)

