# 3. Asynchronous Content Update and Remind

With JavaScript, you can dynamically change parts of a page without reloading the entire page. These changes are usually visible to a normal user, but not directly communicated to a screen-reader.

Considering the content which has dynamic update without reloading the page, is usually an area, in order to make these content updates accessible for screen-reader, we will mark these regions with `live region` label. In practice, `live region` is generally used as a message to remind, for example, open Twitter and right-click to inspect page elements, you will find:

```markup
<div id="sr-event-log" class="visuallyhidden" aria-live="polite">
    <p>New twitter, press . to read</p>
</div>
```

Although you can't see this in web page（for the use of `class="visuallyhidden"`), but screen-reader can read "New twitter, press . to read" aloud when new twitter has come out.

## 1. live region

### `aria-live` attribute

`ARIA` provides `aria-live` attribute to remind user of the content update. Following is three options that `aria-live` can be set：

| `aria-live` | Usage |
| :--- | :--- |
| off | Default, indicates that an area is not live and will not report changes |
| polite | Updates should be reported at appropriate time, such as when the user stops typing |
| assertive | Report the update to the user immediately. Because this is abrupt, the `assertive` value should be used only for an important update of the content, and the user should be notified of that immediately |

We recommand using `aria-live=polite`, as we can see in the example of Twitter, they also use the option of `aria-live=polite`.

`aria-live=assertive` is usually used in error message scenario and immediate feedback, for example in Emirates' [ticketing website](https://www.emirates.com/cn/chinese/), we can inspect the HTML code:

```markup
<div aria-live="assertive" 
    class="screen-reader-text" 
    id="search-flight-departure">
    2 results
</div>
```

This part of the HTML code corresponds to the ticket website of the search box of the starting location, in `aria-live=assertive` mode, the user input the location name to search, screen-reader can instantly give feedback and read the result.

Developers also need to know that screen-reader make different response according to different `aria-live` value, for example:

```markup
<p aria-atomic="true" aria-live="polite">
  There is <span id="num">0</span> characters.
<p>
```

After typing `abc`，`aria-live=polite` gives the following response:

```text
abc
There is 3 characters.
```

while `aria-live=assertive` gives the following response:

```text
a
There is 1 characters.
b
There is 2 characters.
c
There is 3 characters.
```

### `aria-atomic` attribute

`aria-atomic` is attribute of `live region`, its value can be `true` or `false`.

When `aria-atomic=true`, after the update of `live region`, screen-reader will announce `live region` as a whole, when `aria-atomic=false`, screen-reader only annouce the change in `live region`. We can test it in Safari web browser:

```markup
<p aria-atomic="true" aria-live="polite">
  Today is <span id="day">Monday</span>
<p>

// if we change Monday into Friday，
// aria-atomic="true"  will be annouced as " Today is Friday "
// aria-atomic="false" will be annouced as " Friday " 
```

### `aria-busy` attribute

`aria-busy` is attribute of `live region`, its value can be `true` or `false`. When `aria-busy=true`, the update of region won't inform user immediately. When `aria-busy` is set to `false`, the update will be informed to the user. For example, when many changes happen to `ul`:

```markup
<ul aria-atomic="true" 
    aria-busy="true" 
    aria-live="polite">
```

We can set `aria-busy` to `true` at first, and after the complete update, we set it to `false`. This prevents the screen-reader from constantly alerting the user before the content area is updated completely.

### `aria-relevant` attribute

`aria-relevant` is attribute of `live region`, it is used to response to the changes happen in `live region`. By default `aria-relevant="text additions"`, its value can be following set:

| `aria-relevant` attribute | Changes that need to be made in response |
| :--- | :--- |
| additions | new DOM node in `live region` |
| removals | delete DOM node in `live region` |
| text | text change in `live region` |
| all | all of the above |

For example, only by add DOM node in `live region`, the AT will inform the user. It won't inform user when delete DOM node or change the text:

```markup
<ul aria-relevant="additions"
    aria-atomic="true"
    aria-live="polite">
```

## 2. Practice

In this section, we will demonstrate how to implement accessibility support for form content updates and alerts through Fusion Design components. We will consider the following aspects:

* `Input description` - When the screen reader focuses on the input box, it can read the label label text or an explanatory description. For specific usage, please refer to the following examples.
    * The binding method in HTML is to bind the for in the label to the id of the input box so that the screen-reader can read the label text. Using Fusion, we can set label properties and the child component name attribute in `FormItem` to realize the binding. The principle is to bind `fors` attributes of the label and input box id.
    * We can set `placeholder` to add description for input.[Refer](https://fusion.design/component).
    * We can set `aria-label` to add description for input.

* `Required` - When the screen-reader reads the text box, it prompts the user for mandatory fields.
    * For mandatory fields, we have to set `aria-required` attribute, inform the user by highlight. For example: `Input`、`DatePicker`

* `Format` - Prompt the user for the format of the data
    * For form, the user is prompted for the format of the input data. Funsion provides validation of the format, which can be specified using the `aria-label` attribute. For example: `<DatePicker aria-label="In the format of YYYY/MM/DD" />`

* `Notification of asynchronous content updates` - To realize notification of asynchronous content updates by using Fusion components combined with `aria-*` attribute
    * According to the characteristics of the Fusion component itself combined with `aria-live` properties to realize asynchronous update implementation. Prompt the user for input. For example: Input component, when the user enters '123456', the screen-reader will prompt: "your input is 123456, 6 characters in total". When the user deletes all characters, the prompt will be: "cannot be empty, please enter valid characters".

The following is an example of Fusion combined with accessibility. Source code can be found [here](https://codesandbox.io/s/6xz4zj9pxn).


```js
state = {
    size: 'medium',
    textTip: ''
}

changeHandle = (v, event)=>{
    const sign = event.target.name || event.target.id
    if(sign && ['username', 'remark'].includes(sign)) { 
        if(!v) { 
            this.setState({textTip: 'cannot be empty, please enter valid characters'});
        }else {
            const ariaText = 'your input is:' + (!v ? "": v) + 'total' + (!v ? 0 : v.length) + 'characters';
            this.setState({textTip: ariaText});
        }
    }else if(sign && sign === 'password') { 
        if(!v) { 
            this.setState({textTip: "cannot be empty, please enter valid characters"});
        }else {
            const ariaText = 'password total' + (!v ? 0 : v.length) + 'characters';
            this.setState({textTip: ariaText});
        }
    }else if(event.target.type == 'checkbox'){
        const ariaText = (v.length === 0) ? "you haven't choose a language" : ("you have choose the language:" + v.join(','));
        this.setState({textTip: ariaText});
    }
}

<Form {...formItemLayout} size={this.state.size} style={{maxWidth: '500px'}}>
    <FormItem required label="username:" aria-describedby="aria">
        <Input
            placeholder="Please enter your user name"
            name="username"
            aria-required="true"
            onChange={this.changeHandle}
        />
    </FormItem>

    <FormItem required label="Password:" aria-describedby="aria">
        <Input
            htmlType="password"
            placeholder="Please enter your password"
            aria-required="true"
            id="password"
            name="password"
            onChange={this.changeHandle}
        />
    </FormItem>

    <FormItem wrapperCol={{ offset: 2 }} label=" ">
        <span id="aria" aria-live="polite">
            <span aria-label={this.state.textTip} />
        </span>

        <Form.Submit
            validate
            type="primary"
            onClick={this.submitHandle}
            style={{ marginRight: 4 }}
        >
            Submit
        </Form.Submit>

        <Form.Reset style={{ marginLeft: 100 }}>Reset</Form.Reset>
    </FormItem>
</Form>
```

By setting the `aria-live`, we can make screen-reader automatically read the tips which shows how many characters user has entered below statements after the user enter a piece of writing and stop the input.

More example at [here](http://pauljadam.com/demos/aria-atomic-relevant.html).

## 3. Reference

* [aria-atomic & aria-relevant on aria-live regions](http://pauljadam.com/demos/aria-atomic-relevant.html)
* [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
* [Introduction to WAI ARIA](https://dev.opera.com/articles/introduction-to-wai-aria/)

