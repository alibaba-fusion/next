import React from 'react';
import { Card, Button } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Card',
    editor: () => ({
        props: [
            {
                name: 'divider',
                type: Types.bool,
                default: true,
            },
            {
                name: 'width',
                type: Types.number,
                default: 300,
            },
            {
                name: 'height',
                label: 'height',
                type: Types.number,
                default: 215,
            },
            {
                name: 'title',
                type: Types.string,
                default: 'Title',
            },
            {
                name: 'subTitle',
                label: 'Subtitle',
                type: Types.string,
                default: '',
            },
            {
                name: 'extra',
                label: 'Extra Data',
                type: Types.string,
                default: '',
            },
        ],
        data: {
            default: '',
        },
    }),
    adaptor: ({
        bullet,
        divider,
        expand,
        width,
        height,
        title,
        subTitle,
        extra,
        style,
        data,
        ...others
    }: any) => {
        const cardStyle = {
            width: width === 0 ? '' : width,
            height: height === 0 ? 'auto' : height,
            ...style,
        };

        return (
            <Card free style={cardStyle} {...others}>
                <Card.Header
                    title={title}
                    subTitle={subTitle}
                    extra={
                        <Button text type="primary">
                            {extra}
                        </Button>
                    }
                />
                {divider && <Card.Divider />}
                <Card.Content>{data}</Card.Content>
            </Card>
        );
    },
    content: () => ({
        options: [
            {
                name: 'bullet',
                options: ['show', 'hide'],
                default: 'hide',
            },
            {
                name: 'divider',
                options: ['show', 'hide'],
                default: 'show',
            },
            {
                name: 'expanded',
                options: ['yes', 'no'],
                default: 'no',
            },
            {
                name: 'subTitle',
                options: ['show', 'hide'],
                default: 'hide',
            },
            {
                name: 'link',
                options: ['show', 'hide'],
                default: 'hide',
            },
        ],
        transform: (props: any, { bullet, divider, expanded, subTitle, link }: any) => {
            return {
                ...props,
                bullet: bullet === 'show',
                divider: divider === 'show',
                expand: expanded === 'yes',
                subTitle: subTitle === 'show' ? 'Sub Title' : '',
                extra: link === 'show' ? 'Link' : '',
            };
        },
    }),
};
