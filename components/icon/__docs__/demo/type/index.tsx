import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Icon } from '@alifd/next';

import CopyToClipboard from 'react-copy-to-clipboard';

const types = [
    'smile',
    'cry',
    'success',
    'warning',
    'prompt',
    'error',
    'help',
    'clock',
    'success-filling',
    'delete-filling',
    'favorites-filling',
    'add',
    'minus',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-double-left',
    'arrow-double-right',
    'switch',
    'sorting',
    'descending',
    'ascending',
    'select',
    'semi-select',
    'loading',
    'search',
    'close',
    'ellipsis',
    'picture',
    'calendar',
    'ashbin',
    'upload',
    'download',
    'set',
    'edit',
    'refresh',
    'filter',
    'attachment',
    'account',
    'email',
    'atm',
    'copy',
    'exit',
    'eye',
    'eye-close',
    'toggle-left',
    'toggle-right',
    'lock',
    'unlock',
    'chart-pie',
    'chart-bar',
    'form',
    'detail',
    'list',
    'dashboard',
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
                </CopyToClipboard>
            ))}
        </ul>
        {customTypes.length ? (
            <div>
                <div className="icon-list-custom-title">Custom Icon</div>
                <ul className="icon-list">
                    {customTypes.map((type, index) => (
                        <CopyToClipboard
                            key={index}
                            text={`<Icon type="${type}" />`}
                            onCopy={handleCopy}
                        >
                            <li>
                                <Icon type={type} size="xl" />
                                <span>{type}</span>
                            </li>
                        </CopyToClipboard>
                    ))}
                </ul>
            </div>
        ) : null}
    </div>,
    mountNode
);
