import React from 'react';
import { Card } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

let index = 0;
export default {
    name: 'Card',
    editor: () => ({
        props: [{
            name: 'bullet',
            label: 'Label',
            type: Types.bool,
            default: false,
        }, {
            name: 'divider',
            type: Types.bool,
            default: true,
        }, {
            name: 'expand',
            label: 'Expanded',
            type: Types.bool,
            default: false
        }, {
            name: 'width',
            type: Types.number,
            default: 300,
        }, {
            name: 'height',
            label: 'Content Height',
            type: Types.number,
            default: 215,
        }, {
            name: 'title',
            type: Types.string,
            default: 'Title'
        }, {
            name: 'subTitle',
            label: 'Subtitle',
            type: Types.string,
            default: '',
        }, {
            name: 'extra',
            label: 'Extra Data',
            type: Types.string,
            default: '',
        }],
    }),
    adaptor: ({ bullet, divider, expand, width, height, title, subTitle, extra, style, ...others }) => {
        const cardStyle = {
            width: width === 0 ? '' : width,
            ...style,
        };

        return (
            <Card {...others} key={`${expand}_${index++}`} locale={{ expand: 'Fold' }} title={title} showTitleBullet={bullet} subTitle={subTitle} extra={extra} showHeadDivider={divider} contentHeight={expand ? 'auto' : height - 1} style={cardStyle}>
                <div style={{ height }}></div>
            </Card>
        );
    },
    content: () => ({
        options: [{
            name: 'bullet',
            options: ['show', 'hide'],
            default: 'hide'
        }, {
            name: 'divider',
            options: ['show', 'hide'],
            default: 'show'
        }, {
            name: 'expanded',
            options: ['yes', 'no'],
            default: 'no'
        }, {
            name: 'subTitle',
            options: ['show', 'hide'],
            default: 'hide'
        }, {
            name: 'link',
            options: ['show', 'hide'],
            default: 'hide'
        }],
        transform: (props, { bullet, divider, expanded, subTitle, link }) => {
            return {
                ...props,
                bullet: bullet === 'show',
                divider: divider === 'show',
                expand: expanded === 'yes',
                subTitle: subTitle === 'show' ? 'Sub Title' : '',
                extra: link === 'show' ? 'Link' : '',
            };
        }
    })
};
