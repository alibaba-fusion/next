import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inRange, getPercent } from '../utils';
import type { RangeMarkProps } from '../types';

export default class Mark extends React.Component<RangeMarkProps> {
    static displayName = 'Mark';
    static propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        prefix: PropTypes.string,
        marks: PropTypes.object,
        marksPosition: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        min: 0,
        max: 100,
        value: 0,
        marksPosition: '',
        rtl: false,
    };

    _renderItems() {
        const { min, max, value, prefix, marks, rtl } = this.props;
        const items: React.ReactNode[] = [];

        Object.keys(marks).forEach((mark, i) => {
            const classes = classNames({
                [`${prefix}range-mark-text`]: true,
                // @ts-expect-error mark 为 string 类型，应该转换为 number
                activated: inRange(mark, value, min),
            });
            let style;
            if (rtl) {
                style = {
                    // @ts-expect-error mark 为 string 类型，应该转换为 number
                    right: `${getPercent(min, max, mark)}%`,
                    left: 'auto',
                };
            } else {
                style = {
                    // @ts-expect-error mark 为 string 类型，应该转换为 number
                    left: `${getPercent(min, max, mark)}%`,
                    right: 'auto',
                };
            }

            items.push(
                // "key" is for https://fb.me/react-warning-keys
                <span className={classes} style={style} key={i}>
                    {/* @ts-expect-error mark 为 string 类型，应该转换为 number */}
                    {marks[mark]}
                </span>
            );
        });

        return items;
    }

    render() {
        const { prefix, marksPosition } = this.props;
        const className =
            marksPosition === 'above' ? `${prefix}range-mark-above` : `${prefix}range-mark-below`;
        const classes = classNames(className, {
            [`${prefix}range-mark`]: true,
        });
        const items = this._renderItems();

        return <div className={classes}>{items}</div>;
    }
}
