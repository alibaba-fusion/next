<button>[回到页面内容指引](../content-creation.md)</button>

使用JavaScript，可以动态地更改页面的某些部分，而不需要重新加载整个页面，例如，动态地更新搜索结果列表，或者显示不需要用户交互的警告或通知。


虽然这些更改对于视觉正常的用户通常是可视的，但是对于使用读屏软件的用户来说，可能并不明显。

`ARIA live region`填补了这一空白，并提供了一种方式，能能通过辅助技术传达动态内容的更改。

# aria-live的简单应用

考虑到无需重新加载页面即可更新的动态内容，通常是一个区域，为了能使得这些内容的更新被使用读屏软件的用户知晓，我们应该将这些区域标记为live region。那么什么是live region？我们又应该如何进行设计呢？

下面是相关ARIA live region属性的列表及其描述。

aria-live属性值 | 使用场景
-------------- | ------
off | 默认值，表明一个区域不是实时的，不会报读变化
polite | 更新内容应当在适当时刻报读，比如在用户停止输入时
assertive | 立即向用户报读更新内容。由于这是突兀的， assertive值应当仅用于更新内容是重要的，应立即通知给用户的情况

比如在下面例子中的无序列表中的文本的增加或减少，都会在适当的时刻通知给用户。

```
<ul aria-live="polite">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>item 3</li>
</ul>
```

我们还需要通过`aria-controls`将控件与它所控制的区域关联起来。区域的标识就像div中的id一样，多个区域可以使用空格与控件关联，例如 aria-controls="myRegionID1 myRegionsID2"。

下面让我们看一个直观的例子，在这个例子中，我们使用下拉框来控制页面内容的更新，完整的代码与预览效果[请点击](https://codepen.io/skysuka/pen/VRWgVy)。

<img src="https://mdn.mozillademos.org/files/15815/Web_Accessibility_ARIA_ARIA_Live_Regions.png" alt="例子图片">

我们可以看到这是一个简单的页面，上半部分时选择行星，下半部分是对该行星的描述。当改变行星选项，并点击Go按钮时，下半部分的信息也会发生相应的变化，此时，读屏软件可以为我们读出下半部分已经发生变化的信息。

值得注意的是，由于我们设置了`aria-live="polite`，因此读屏器会等到用户暂停操作之后，再去宣读发生变化的内容。因此在下拉列表里进行选择时，并不会马上让读屏器宣布哪些内容发生了变化。

```
// HTML

<fieldset>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet&hellip;</option>
    <option value="mercury">Mercury</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>
```

# aria-live的其他注意事项

请参考[live regions 的高级应用](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Advanced_Live_Regions)

# 参考资料
- [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)