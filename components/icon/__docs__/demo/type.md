# 图标列表

- order: 0

点击图标复制代码。

:::lang=en-us
# List of Icons

- order: 1

Click on the icon to copy the code.
:::
---

````jsx
import { Message, Icon } from '@alifd/next';


import CopyToClipboard from 'react-copy-to-clipboard';

const types = [
    'smile', 'cry', 'success', 'warning', 'prompt',
    'error', 'help', 'clock', 'success-filling', 'delete-filling',
    'favorites-filling', 'add', 'minus', 'arrow-up', 'arrow-down',
    'arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch',
    'sorting', 'descending', 'ascending', 'select', 'semi-select',
    'loading', 'search', 'close', 'ellipsis', 'picture',
    'calendar', 'ashbin', 'upload', 'download', 'set',
    'edit', 'refresh', 'filter', 'attachment', 'account',
    'email', 'atm', 'copy', 'exit', 'eye', 'eye-close', 'toggle-left', 'toggle-right',
    'lock', 'unlock','chart-pie', 'chart-bar', 'form', 'detail', 'list', 'dashboard',
];


let customTypes = [];

// The code here is for fusion dev display custom Icon components only
if (window.customIcons) {
    customTypes = window.customIcons;
}

const handleCopy = () => Message.success('Copied!');

ReactDOM.render(
    <div>
        <div className="icon-list-title">Click on the icon to copy the code.</div>
        <ul className="icon-list">
            {types.map((type, index) => (
                <CopyToClipboard key={index} text={`<Icon type="${type}" />`} onCopy={handleCopy}>
                    <li>
                        <Icon type={type} size="xl" />
                        <span>{type}</span>
                    </li>
                </CopyToClipboard>))}
        </ul>
        {
            customTypes.length ?
                <div>
                    <div className="icon-list-custom-title">Custom Icon</div>
                    <ul className="icon-list">
                        {
                            customTypes.map((type, index) => (
                                <CopyToClipboard key={index} text={`<Icon type="${type}" />`} onCopy={handleCopy}>
                                    <li>
                                        <Icon type={type} size="xl" />
                                        <span>{type}</span>
                                    </li>
                                </CopyToClipboard>))
                        }
                    </ul>
                </div> :
                null
        }

    </div>
    , mountNode);
````

````css
.icon-list-title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.icon-list li {
    display: inline-block;
    width: 140px;
    padding: 30px 0;
    color: #666;
    cursor: pointer;
}

.icon-list li:hover {
    color: #333;
    background-color: #f7f7f7;
}

.icon-list i {
    display: block;
    width: 32px;
    margin: 0 auto;
}

.icon-list span {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.icon-list-custom-title {
    margin: 20px 0 20px 10px;
    font-size: 20px;
    color: #333;
}
````
