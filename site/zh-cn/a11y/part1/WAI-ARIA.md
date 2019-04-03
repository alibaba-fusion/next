# 2. WAI-ARIA

## WAI-ARIA

## 1. 什么是`WAI-ARIA`

[ARIA](https://www.w3.org/TR/wai-aria-1.1/)是"Accessible Rich Internet Applications"的缩写。它是 W3C 的 Web 无障碍推进组织\(Web Accessibility Initiative / WAI\)在 2014 年 3 月 20 日发布的可访问富互联网应用实现指南。它定义了一组可用于其他元素的 HTML 特性，用于提供额外的语义化以及改善缺乏的可访问性。

[简单的总结一下](https://www.w3cplus.com/wai-aria/wai-aria.html)：

> * ARIA 是 W3C 的一个独立规范，帮助 Web 应用程序和 Web 页面变得更具可访问性
> * ARIA 是对 HTML 语义化的补充。它具备比现有的 HTML 语义化标签和属性更完善的表达能力，并让你页面中元素的关系和含义更明确
> * ARIA 规范为浏览器和解析 HTML 文档的辅助性技术提供了一种可以让人们以多种方式访问和使用 Web 的标准方法

## 2. `WAI-ARIA`的组成与使用规范

### 2.1 `ARIA`的组成

```javascript
<div role="button" aria-pressed="false">I'm a button</div>
```

从上面的例子中我们可以看到，ARIA 主要由两部分组成：

* `role`
  * 角色，用来表示元素的含义
* `aria-*`
  * 标记元素的属性、状态

#### `role`

关于`role`，我们需要知道它的取值不是随意的，而且大部分是为了补充HTML的语义，这些`role`的值可参阅下表，也可以[点击此处](http://whatsock.com/training/matrices/)获得完整的`role`分类与介绍：

| role | role | role | role |
| :--- | :--- | :--- | :--- |
| alert | alertdialog | application | directory |
| document | feed | grid | gridcell |
| group | log | marquee | menu |
| menubar | menuitemcheckbox | menuitemradio | none |
| note | presentation | scrollbar | search |
| status | switch | tab | tablist |
| tabpanel | timer | toolbar | tooltip |
| tree | treegrid | treeitem |  |

#### `aria-*`

`aria-*`往往是搭配`role`进行使用的。为了更方便读者理解如何进行搭配，我们总结了两种对`aria-*`进行分类的方式：

* 按照`全局属性`和`私有属性`分类

我们可以发现，有的`aria-*`可以被运用在所有的主语言元素上，即使此时`role`没有被使用。我们将这些`aira-*`被称作`global states and properties`，即全局状态或属性。

实际上，看似`role`没有被使用，其实它们是被应用在一个名为`roletype`的`role`上，`roletype`属于`base role`，能被所有的`role`继承。这些全局状态或属性的`aria-*`的取值可参见下表，也可以点击[此处](https://w3c.github.io/aria/#global_states)获取详细信息：

| aria-\* | aria-\* | aria-\* |
| :--- | :--- | :--- |
| aria-atomic | aria-busy \(state\) | aria-controls |
| aria-current \(state\) | aria-describedby | aria-details |
| aria-disabled \(state\) | aria-dropeffect | aria-errormessage |
| aria-flowto | aria-grabbed \(state\) | aria-haspopup |
| aria-hidden \(state\) | aria-invalid \(state\) | aria-keyshortcuts |
| aria-label | aria-labelledby | aria-live |
| aria-owns | aria-relevant | aria-roledescription |

除`全局属性`之外的其他属性，就不能随心所欲的混合搭配，比如`aria-valuemax`就不能用在`role=button`上，这需要遵守一定的规范，这些规范可以[在官网上](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties)找到官方说明，也可以[点击此处](http://whatsock.com/training/matrices/)获取比官网更直观易懂的aira role关系矩阵说明。

* 按照`required`和`supported`分类

我们可以将`aria-*`分为`required properties`与`supported properties`。

比如对于`role=button`，它有两个`supported properties`：`aria-expanded`与`aria-pressed`，我们可以选择添加或者不添加这两个属性。

比如对于`role=checkbox`，它有一个`required properties`：`aria-checked`，这个与`supported properties`不同，这个属性是必须添加的。

关于这些搭配的具体方式，我们可以[在官网上](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties)找到官方说明，也可以[点击此处](http://whatsock.com/training/matrices/)获取比官网更直观易懂的aira role关系矩阵说明。

#### `ARIA`组成小结

在上面的内容中我们介绍了`role`和`aria-*`，也提及了一些参考资源。在今后的使用中，有两张表格是每位开发者可以经常查阅的：

* [原生HTML标签与`role`的对照表](https://www.w3.org/TR/html-aria/#docconformance)
* [`role`与`aria-*`必填属性的对照表](http://whatsock.com/training/matrices/)

**另外并不是说在HTML中使用了**`ARIA`**，Web页面就可以提高可访问性、实现无障碍，如果没有用好，反而会把你带到另一个坑中，使你的页面可访问性更差。因此在使用**`ARIA`**时，我们需要仔细理解**`ARIA`**的使用规范。**

### 2.2 `ARIA`的使用规范

#### 1. `role`必须使用有效的值

开发者需要确保所有的`role`的取值都是有效的，有效的`role`取值可[参见上文内容](wai-aria.md#211-role)，比如：

```markup
<div role="button">I'm a button</div>            // 正确使用案例
<div role="bigbutton">I'm a big button</div>     // 错误使用案例，"bigbutton"不是一个 ARIA role
```

#### 2. `role`的特定嵌套关系

开发者在使用role的过程中需要注意，一些`role`必须被包含在特定的父元素中，一些`role`必须包含特定的子元素。比如：

```markup
// 正确使用案例，role=listitem 包含在 role=list 元素中
<div role="list"> 
    <span role="listitem">Rainbow Trout</span> 
    <span role="listitem">Brook Trout</span>
    <span role="listitem">Lake Trout</span>
</div>
```

```markup
// 错误使用案例，role=listitem 未包含在 role=list 元素中
<div> 
    <span role="listitem">Rainbow Trout</span> 
    <span role="listitem">Brook Trout</span>
    <span role="listitem">Lake Trout</span>
</div>
```

#### 3. `role`的使用不能改变原生语义

比如开发者想构建一个标签，可以按如下方式构建：

```markup
<div role=tab><h2>heading tab</h2></div>
```

但是不能按照如下方式构建:

```markup
<h2 role=tab>heading tab</h2>    // 错误案例，改变了原生语义
```

#### 4. `role`的使用不能产生冗余

比如下面添加了`role`是无用的，会带来信息的冗余：

```markup
<button role="button">press me</button>
```

#### 5. `aria-*`必须符合有效的名称

开发者不能使用一个不存在或者错误拼写的`aria-*`，比如：

```javascript
aria-hidden="true"      // 正确使用案例
aria-hide="true"        // 错误使用案例，不存在该属性
```

为了确保使用的是存在且拼写正确的属性名称，开发者可以参考以下资料：

* [The ARIA Role Matrices](http://whatsock.com/training/matrices/)
  * 推荐资料，建议保存链接以备日后频繁查询
* [Taxonomy of WAI-ARIA States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy)
  * 分类介绍了`widget attributes`, `live region attributes`, `drag-and-drop attributes`, `relationship attributes`
* [Definitions of States and Properties \(all aria-\* attributes\)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
  * WAI-ARIA状态和属性的字母顺序列表
* [State and Property Attributes](https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs)
* [State and Property Attribute Processing](https://www.w3.org/TR/wai-aria-1.1/#state_property_processing)
* [WAI-ARIA Attributes Module](https://www.w3.org/TR/wai-aria-1.1/#xhtml_mod)
* [WAI-ARIA Attributes XML Schema Module](https://www.w3.org/TR/wai-aria-1.1/#xhtml_schema_mod)

#### 6. `aria-*`必须使用有效的值

开发者在使用`aria-*`时，需要对其赋予有效的值，比如：

```javascript
aria-hidden="true"      // 正确使用案例
aria-hidden="yes"       // 错误使用案例，aria-hidden的可选值中无"yes"选择
```

为了确保使用的是允许的值，开发者可以参考以下资料：

* [W3C WAI-ARIA 1.1 Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_values)
  * 提供了ARIA状态和属性的允许取值

#### 7. `aria-*`的`required properties`必须提供

开发者需要检查`role`是否含有必须提供的`aria-*`。

我们可以在这张[表格](http://whatsock.com/training/matrices/)（建议保存这张表格以备日后频繁查询）中找到这些必须提供特定`aria-*`的`role`的详细说明，比如对于`role=heading`，它有一个必须要求提供的属性`aria-level`：

```markup
<div role="heading" aria-level="1">I'm a heading</div>    // 正确使用案例
<div role="heading" >I'm a heading</div>                  // 错误使用案例，未提供必需的aria-level属性
```

#### 8. `aria-labelledby`属性应引用存在于DOM中的元素

开发者在给`aria-labelledby`属性赋值时，应注意与DOM元素中的id值对应，比如：

```markup
<div id="test_one">it's a test</div>

<input type="text" aria-labelledby="test_one"></input>    // 正确使用案例
<input type="text" aria-labelledby="test_two"></input>    // 错误使用案例，文档中没有对应的id="test_two"
```

#### 9. `role=application`需谨慎使用

简而言之，真正会使用`role=application`的场景是非常罕见的，除非需要模拟真实的桌面应用程序，因为当使用`role=application`时，屏幕阅读器会停止拦截击键，并将所有击键直接传递给浏览器，这会使得用户无法轻松浏览页面，更具体的介绍请[参考此处](https://www.w3.org/TR/using-aria/#using-application)。

#### 10. `role="presentation"`或`aria-hidden="true"`不能用在可聚焦元素上

`role=presentation`或其同义词`role=none`，表示在它所在的元素中删除语义，在可聚焦元素上使用`role="presentation"`或`aria-hidden="true"`会导致该元素失去焦点，比如：

```markup
<button role=presentation>press me</button>     // 错误使用案例
<button aria-hidden="true">press me</button>    // 错误使用案例
```

#### 11. `ARIA`中使用的`id`必须唯一

重复的`id`是非常常见的一个错误，分配相同的`id`值会导致辅助技术忽略第二个实例，破坏内容的可访问性。

```markup
// 错误案例，使用了重复的id，应该修改其中的一个id值
<div role="button" id="hibutton">click me</div>
<div role="button" id="hibutton">click me again</div>
```

## 3. WAI-ARIA总结

需要注意的是，ARIA 规范仍然是一个工作草案，并不是所有的浏览器都实现这些属性（目前只有[Edge 浏览器做到了满分](https://www.html5accessibility.com/)），可能需要有多个属性来处理各种浏览器，并且实现上可能不一致。

## 4. 参考资料

* [WAI-ARIA basics](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility/WAI-ARIA_basics)
* [WAI-ARIA 无障碍 Web 规范](https://www.w3cplus.com/wai-aria/wai-aria.html)
* [各浏览器的可访问性支持情况](https://www.html5accessibility.com/)
* [ARIA 的使用规则](https://www.w3.org/TR/using-aria/#rule1)
* [List of axe 3.1 Rules](https://dequeuniversity.com/rules/axe/3.1)
* [WAI-ARIA 状态属性分类](https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy)
* [Role Attribute](https://www.w3.org/TR/wai-aria-1.1/#host_general_role)

