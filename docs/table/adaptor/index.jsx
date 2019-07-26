import React from 'react';
import { Types, getChildren } from '@alifd/adaptor-helper';
import { Table } from '@alifd/next';

export default {
    name: 'Table',
    editor: () => ({
        props: [{
            name: 'border',
            type: Types.bool,
            default: false
        }, {
            name: 'stripe',
            type: Types.bool,
            default: false
        }, {
            name: 'select',
            type: Types.enum,
            options: ['checkbox', 'none'],
            default: 'none'
        }, {
            name: 'align',
            type: Types.enum,
            options: ['left', 'right', 'center'],
            default: 'left'
        }, {
            name: 'head',
            type: Types.enum,
            options: ['show', 'hide'],
            default: 'show'
        }, {
            name: 'width',
            type: Types.number,
            default: 800
        }],
        data: {
            default: 'Product | Price | Status\n2014 New Fashion Novelty Tank Slim Women\'s Fashion Dresses With Lace | US $2.5 | No Priced\nFree shipping women Casual dresses lady dress plus size 201 | US $2.5 | Already Priced'
        }
    }),
    adaptor: ({ border, stripe, select, align, head, width, data, style, ...others }) => {

        const list = data.split('\n').filter(v => !!v);
        let ths = [];
        const bodys = [];
        list.forEach((template, index) => {
          if (index === 0) {
            ths = template.split('|');
          } else {
            const column = {};
            template.split('|').forEach((value, index) => {
                column[`column_${index}`] = value;
            });
            bodys.push(column);
          }
        });

        return (
            <Table {...others} dataSource={bodys}  rowSelection={select === 'checkbox' ? { onChange: () => {}} : null} style={{ width, ...style }} hasBorder={border} hasHeader={head === 'show'} isZebra={stripe}>
                {
                    ths.map((label, index) => (
                        <Table.Column cell={value => value} align={align} title={label} key={`column_${index}`} dataIndex={`column_${index}`} />
                    ))
                }
            </Table>
        );
    }
};
