import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@alifd/next';

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'] as const;
const inherit = 'inherit';
ReactDOM.render(
    <div>
        <ul className="icon-sizes">
            {sizes.map((size, index) => (
                <li key={index}>
                    <Icon type="smile" size={size} />
                    <span>{size}</span>
                </li>
            ))}
        </ul>

        <span>{inherit}</span>
        <h4>
            Shall I compare thee to a summer's day? <Icon type="smile" size={inherit} />{' '}
            <Icon type="set" size={inherit} />
        </h4>
        <h3>
            Thou art more lovely and more temperate. <Icon type="smile" size={inherit} />{' '}
            <Icon type="set" size={inherit} />
        </h3>
        <h2>
            Rough winds do shake the darling buds of May, <Icon type="smile" size={inherit} />{' '}
            <Icon type="set" size={inherit} />
        </h2>
        <h1>
            And summer's lease hath all too short a date. <Icon type="smile" size={inherit} />{' '}
            <Icon type="set" size={inherit} />
        </h1>
    </div>,
    mountNode
);
