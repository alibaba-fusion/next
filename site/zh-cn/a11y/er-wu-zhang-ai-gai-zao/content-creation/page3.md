# 3. 异步内容的更新及提醒

使用JavaScript，可以动态地更改页面的某些部分，而不需要重新加载整个页面，这些更改对于视觉正常的用户通常是可视的，但是对于使用读屏软件的用户来说，这一视觉上的变化并不能直接通过读屏软件传达。

考虑到无需重新加载页面即可更新的动态内容，通常是一个区域，为了能让这些内容的更新被使用读屏软件的用户知晓，我们将这些区域标记为`live region`。在实际应用中，`live region`一般用作消息提醒，比如打开Twitter，右键页面审查元素，你会发现：

```markup
<div id="sr-event-log" class="visuallyhidden" aria-live="polite">
    <p>有新的推文，按 . 以查看它们。</p>
</div>
```

虽然在网页中你看不到这段内容（因为`class="visuallyhidden"`，具体说明请见[此处](page2.md)），但是读屏软件（screen reader）可以在新Tweet出现时，朗读”有新的推文，按 . 以查看它们。“

## 1. live region区块

### `aria-live`属性

`ARIA`提供了`aria-live`这个属性来设定在网页更新时，该如何通知读屏软件使用者，下面是`aria-live`属性三种可以选用的设定：

| `aria-live`属性值 | 使用场景 |
| :--- | :--- |
| off | 默认值，表明一个区域不是实时的，不会报读变化 |
| polite | 更新内容应当在适当时刻报读，比如在用户停止输入时 |
| assertive | 立即向用户报读更新内容。由于这是突兀的，assertive值应当仅用于更新内容是重要的，应立即通知给用户的情况 |

我们推荐使用`aria-live=polite`，正如我们在上面的Twitter的例子中看到的那样，他们也使用了`aria-live=polite`的选项。

`aria-live=assertive`常用在一些错误提示的场景，有时也用于即时反馈信息，比如在阿联酋航空的[购票官网](https://www.emirates.com/cn/chinese/)上，有如下代码：

```markup
<div aria-live="assertive" 
    class="screen-reader-text" 
    id="search-flight-departure">
    2 找到的结果
</div>
```

这部分HTML代码对应的是购票官网上的出发地搜索框的提示信息，在`aria-live=assertive`模式下，使用者在输入地名进行搜索时，读屏器能即时给出反馈，朗读此时有几个找到的结果。

另外需要开发者注意的是，屏幕阅读器在阅读多条信息更新时，会根据不同的`aria-live`设定值做出不同的反馈，比如下面的字数统计场景：

```markup
<p aria-atomic="true" aria-live="polite">
  There is <span id="num">0</span> characters.
<p>
```

当在输入框输了三个字符`abc`后，`aria-live=polite`会给出如下提示：

```text
abc
There is 3 characters.
```

而`aria-live=assertive`则会给出如下提示：

```text
a
There is 1 characters.
b
There is 2 characters.
c
There is 3 characters.
```

### `aria-atomic`属性

`aria-atomic`是`live region`的非必要属性，它的取值可以是`true`或者`false`。

当`aria-atomic=true`时，`live region`更新后，辅助技术将把整个`live region`作为整体进行通报；若`aria-atomic=false`时，辅助技术只通报`live region`中更改的部分，比如我们可以在Safari浏览器中测试：

```markup
<p aria-atomic="true" aria-live="polite">
  Today is <span id="day">Monday</span>
<p>

// 若 Monday 变成了 Friday，
// aria-atomic=“true”  朗读为“ Today is Friday ”
// aria-atomic=“false” 朗读为“ Friday ”
```

### `aria-busy`属性

`aria-busy`也是`live region`的非必要属性，它的取值可以是`true`或者`false`。`aria-busy=true`时，区块的更新不会马上通知使用者，当`aria-busy`被置为`false`时，这些更新才会被通知给使用者。比如以下场景，`ul`有多个地方需要修改：

```markup
<ul aria-atomic="true" 
    aria-busy="true" 
    aria-live="polite">
```

我们可以先将`aria-busy`设为`true`, 等到全部内容更新完毕后再设成`false`，这样可以避免辅助工具在区域内容更新完毕前不断提醒使用者。

### `aria-relevant`屬性

`aria-relevant`也是`live region`的非必要属性，用来表示要对`live region`的哪些变化做出反应，默认情况下`aria-relevant="text additions"`，它的取值可以是以下属性的集合，采用空格分割：

| `aria-relevant`属性值 | 需要做出反应的变化 |
| :--- | :--- |
| additions | `live region`区块内有新增的DOM节点 |
| removals | `live region`区块内有减少的DOM节点 |
| text | `live region`区块中有文字变化 |
| all | 上面的所有变化 |

比如在下面的例子中，只有在`live region`区块中增加节点时，辅助技术才会告诉使用者，如果是移除节点或文字内容的变化，就不会告诉使用者：

```markup
<ul aria-relevant="additions"
    aria-atomic="true"
    aria-live="polite">
```

## 2. 实践例子

在这一节我们将结合Fusion Design的组件来说明如何实现异步内容更新的提醒，[点击此处](https://codesandbox.io/s/k010p7wy2v)浏览完整代码与页面demo。

```markup
<Form>
    <FormItem label="输入内容:">
        <Input.TextArea
        placeholder="分享生活点滴"
        name="contents"
        id="contents"
        aria-describedby="inputInfo" 
        aria-required="true"
        onChange={this.sizeCount}
        />
    </FormItem>

    <FormItem label=" ">
        <span id="inputInfo" aria-live="polite">
        已输入字符:
        </span>
    </FormItem>
</Form>
```

通过设置`aria-live`，我们能使得用户输入完一段文字并停止输入后，读屏软件能自动读出下方的提示语句，提示用户当前已经输入了多少字符。

更多关于内容更新提醒的实践例子可以[点击此处](http://pauljadam.com/demos/aria-atomic-relevant.html)进行尝试。

## 3. 参考资料

* [aria-atomic & aria-relevant on aria-live regions](http://pauljadam.com/demos/aria-atomic-relevant.html)
* [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
* [Introduction to WAI ARIA](https://dev.opera.com/articles/introduction-to-wai-aria/)

