import React from 'react';
import ReactDOM from 'react-dom';

import { Tag } from '@alifd/next';

const { Group: TagGroup } = Tag;

const presetColors = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow'];
// set custom color with hex value, do not use color keywords
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

ReactDOM.render(
    <div className="tag-list">
        <h4>preset colors</h4>
        <TagGroup>
            {presetColors.map(color => (
                <Tag key={`p_n_${color}`} type="normal" color={color}>
                    {color}
                </Tag>
            ))}
        </TagGroup>

        <TagGroup>
            {presetColors.map(color => (
                <Tag key={`p_p_${color}`} type="primary" color={color}>
                    {color}
                </Tag>
            ))}
        </TagGroup>

        <h4>custom colors</h4>

        <TagGroup>
            {customColors.map(color => (
                <Tag key={`c_${color}`} color={color}>
                    {color}
                </Tag>
            ))}
        </TagGroup>
    </div>,
    mountNode
);
