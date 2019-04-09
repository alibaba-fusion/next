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

#### 5. `role=application`需谨慎使用

简而言之，真正会使用`role=application`的场景是非常罕见的，除非需要模拟真实的桌面应用程序，因为当使用`role=application`时，屏幕阅读器会停止拦截击键，并将所有击键直接传递给浏览器，这会使得用户无法轻松浏览页面，更具体的介绍请[参考此处](https://www.w3.org/TR/using-aria/#using-application)。

#### 6. `role="presentation"`或`aria-hidden="true"`不能用在可聚焦元素上

`role=presentation`或其同义词`role=none`，表示在它所在的元素中删除语义，在可聚焦元素上使用`role="presentation"`或`aria-hidden="true"`会导致该元素失去焦点，比如：

```markup
<button role=presentation>press me</button>     // 错误使用案例
<button aria-hidden="true">press me</button>    // 错误使用案例
```

#### 7. `role=heading`的使用

我们使用`role=heading`来标识标题。应用`role="heading"`的元素会使AT（如屏幕阅读器）将其视为标题。

```markup
// 实现简单标题
<div role="heading">Global News items</div>
<p>a list of global news<p>

// 实现其他标题级别
<div role="heading" aria-level="7">Global News level 7/div>
<p>a list of global news</p>
```

原生的HTML只能实现级别6的标题，`role="heading"`和`aria-level`属性配合可以实现级别其他级别的标题。

#### 8. `role=region`的使用

当标准文档标记角色的语义无法对应待标记页面的某部分时，可使用通用region角色：`role=region`。这些区域可以通过使用`aria-labelledby`、`aria-label`或其他方式命名，这样可以帮助更好的建立起页面上内容信息之间的联系。

```markup
<div role="region" aria-label="weather portlet"> 
	Today's weather is very good for outing!
</div>
```

#### 9. 使用`role`的landmark标识页面区域

`landmark`用来表示区域的类型，部分内容如下，详情请点击[这里](https://www.w3.org/TR/WCAG20-TECHS/aria.html#ARIA11)：
| role | 说明 |
| :--- | ---: |
| banner |  页面主标题或内部标题的区域|
| complementary | 文档中支持主要内容的任何部分且独立 |
| contentinfo | 信息区域，例如版权和隐私声明的链接 |
| form | 表单区域 |
| main | 主要内容区域 |
| navigation | 导航区域 |
| search | web文档搜索工具 | 
| application | 声明为Web应用程序的区域 |

```markup
<form role="search">
    <label for="s6">search</label><input id="s6" type="text" size="20">
    ...
</form> 
```
在上面例子中，使用`role="search"`来标识为搜索表单。


#### 10. `aria-*`必须符合有效的名称

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

#### 11. `aria-*`必须使用有效的值

开发者在使用`aria-*`时，需要对其赋予有效的值，比如：

```javascript
aria-hidden="true"      // 正确使用案例
aria-hidden="yes"       // 错误使用案例，aria-hidden的可选值中无"yes"选择
```

为了确保使用的是允许的值，开发者可以参考以下资料：

* [W3C WAI-ARIA 1.1 Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_values)
  * 提供了ARIA状态和属性的允许取值

#### 12. `aria-*`的`required properties`必须提供

开发者需要检查`role`是否含有必须提供的`aria-*`。

我们可以在这张[表格](http://whatsock.com/training/matrices/)（建议保存这张表格以备日后频繁查询）中找到这些必须提供特定`aria-*`的`role`的详细说明，比如对于`role=heading`，它有一个必须要求提供的属性`aria-level`：

```markup
<div role="heading" aria-level="1">I'm a heading</div>    // 正确使用案例
<div role="heading" >I'm a heading</div>                  // 错误使用案例，未提供必需的aria-level属性
```

#### 13. `aria-labelledby`属性的使用

- 使用`aria-labelledby`进行链接

    使用`aria-labelledby`属性，开发者可以使用页面上的可见文本元素作为可聚焦元素（表单控件或链接）的标签。

    ```markup
    <h2 id="headline">Storms hit east coast</h2>

    <p>Torrential rain and gale force winds have struck the east coast, causing flooding in many coastal towns.
    <a id="p1" href="news.html" aria-labelledby="headline">Read more...</a></p>
    ```

    屏幕阅读器在阅读上述例子时表现如下："Read more... Storm hit east coast"，这对于通过链接来浏览页面的屏幕阅读器使用者非常有用，它提供了关于链接更多的信息。

- 使用`aria-labelledby`连接多个文本节点的标签

    ```markup
    <form>
        <p>
            <span id="timeout-label" tabindex="-1"><label for="timeout-duration">Extend time-out to</label></span>
            <input type="text" size="3" id="timeout-duration" value="20" 
            aria-labelledby="timeout-label timeout-duration timeout-unit" />
            <span id="timeout-unit" tabindex="-1"> minutes</span>
        </p>
    </form>
    ```

    在上面例子中，`input`标签通过使用`aria-labelledby`来引用文本标签。当聚焦到input时，屏幕阅读器会读取“Extend time-out to 20 minutes”。

- 使用`aria-labelledby`为非文本内容提供文本替代

    `aria-labelledby`属性通过使用与标注元素的ID属性匹配的ID引用值，将元素与页面上其他位置可见的文本相关联。

    ```markup
    <div role="img" aria-labelledby="star_num">
        <img src="fullstar.png" alt=""/>
        <img src="fullstar.png" alt=""/>
        <img src="fullstar.png" alt=""/>
        <img src="fullstar.png" alt=""/>
        <img src="emptystar.png" alt=""/>
    </div>

    <div id="star_num">4 of 5 stars are full</div>
    ```

- 使用`aria-labelledby`为用户界面控件提供名称

    ```markup
    <input name="searchtxt" type="text" aria-labelledby="searchbtn">
    <input name="searchbtn" id="searchbtn" type="submit" value="Search">
    ```

    在上面例子中，在没有使用label标签的情况下,通过`aria-labelledby`提供对标签描述。

- `aria-labelledby`属性应引用存在于DOM中的元素

    开发者在给`aria-labelledby`属性赋值时，应注意与DOM元素中的id值对应，比如：

    ```markup
    <div id="test_one">it's a test</div>

    <input type="text" aria-labelledby="test_one"></input>    // 正确使用案例
    <input type="text" aria-labelledby="test_two"></input>    // 错误使用案例，文档中没有对应的id="test_two"
    ```

#### 14. `aria-label`属性的使用

- 使用`aria-label`为区域提供标签描述

    ```markup
    <div role="region" aria-label="weather portlet"> 
        Today's weather is very good for outing!
    </div>
    ```

- 使用`aria-label`表明链接目的

    ```markup
    <h4>Neighborhood News</h4>
    <p>
        Seminole tax hike:  Seminole city managers are proposing a 75% increase in 
        property taxes for the coming fiscal year.
        <a href="taxhike.html" aria-label="Read more about Seminole tax hike">[Read more...]</a>
    </p>
    ```

    `aria-label`文本将覆盖链接中提供的文本，即屏幕阅读器将使用`aria-label`中提供的文本"Read more about Seminole tax hike"而不是链接文本"[Read more...]"。

- 使用`aria-label`提供不可见标签

    ```markup
    <div id="box">
    This is a pop-up box.
    <button aria-label="Close" onclick="document.getElementById('box').style.display='none';" class="close-button">X</button>
    </div>
    ```

    在上面的例子中，我们为弹出框中的包含'X'的按钮提供了屏幕阅读器可访问的名称，同时这个名称在页面中不可见。

#### 15. `aria-describedby`属性的使用

- 使用`aria-describedby`为用户界面控件提供描述性标签

    ```markup
    <p>
        <span id="fontDesc">Select the font faces and sizes to be used on this page</span>
        <button id="fontB" onclick="doAction('Fonts');" aria-describedby="fontDesc">Fonts</button>
    </p>

    <p>
        <span id="colorDesc">Select the colors to be used on this page</span>
        <button id="colorB" onclick="doAction('Colors');" aria-describedby="colorDesc">Colors</button>
    </p>
    ```

    在上面的例子中，我们使用了`aria-describedby`属性提供有关按钮的更多详细信息。

- 使用`aria-describedby`提供图像描述

    ```markup
    <img src="ladymacbeth.jpg" alt="Lady MacBeth" aria-describedby="p1">
    <p id="p1">This painting dates back to 1730 and is oil on canvas. It was created by 
    Jean-Guy Millome, and represents ...</p>
    ```

    在上面的例子中，我们使用了`aria-describedby`来给图像提供了长描述。

#### 16. `aria-required`属性的使用

`aria-required`属性表示输入框聚焦时，提示用户是否为必填项，属性的值可以是`true`或`false`。

```markup
<form action="#" method="post" id="login" onsubmit="return errorCheck()">
  <p>Note: [*]denotes mandatory field</p>
  <p>
    <label for="usrname">Login name: </label>
    <input type="text" name="usrname" id="usrname" aria-required="true"/>[*]
  </p>
  <p>
    <label for="pwd">Password</label>
    <input type="password" name="pwd" id="pwd" size="12" aria-required="true" />[*]
  </p>
  <p>
    <input type="submit" value="Login" id="next_btn" name="next_btn"/>
  </p>
</form>
```

在上面的例子中，用户名和密码的输入框被设置为`aria-required="true"`，因此是必须输入的值。

#### 17. 使用`aria-invalid`属性表明输入框数据是否有效

`aria-invalid`属性false代表验证通过，true代表验证不通过，例如

```markup
    // 表明验证的数据有效
    <input type="text" size="3" aria-invalid="false" />

    // 表明验证的数据无效
    <input type="text" size="3" aria-invalid="true" />
```

#### 18. `aria-alertdialog`属性的使用

开发者可以使用`role="alertdialog"`创建通知。

此通知应为模态，具有以下特征：

- `aria-label`或`aria-labelledby`属性为alertdialog提供了一个可访问的名称。
- `aria-describedby`提供对警报文本的引用。

```markup
<div role="alertdialog" aria-labelledby="alertHeading" aria-describedby="alertText">
<h1 id="alertHeading">Error</h1>
<div id="alertText">Employee's Birth Date is after their hire date. Please verify the birth date and hire date.</div>
<button>Save and Continue</button>
<button>Return to page and correct error</button>
</div>
```

#### 19. `ARIA`中使用的`id`必须唯一

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
* [Techniques for WCAG 2.0](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/#abstract)
* [ARIA Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/aria.html#ARIA1)
