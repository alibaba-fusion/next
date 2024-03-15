import React, { Component, Children, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import { obj } from '../../util';
import ConfigProvider from '../../config-provider';
import nextLocale from '../../locale/zh-cn';
import type { TimelineProps, TimelineState } from '../types';

/** Timeline */
class Timeline extends Component<TimelineProps, TimelineState> {
    static displayName = 'Timeline';
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        fold: PropTypes.array,
        className: PropTypes.string,
        children: PropTypes.any,
        locale: PropTypes.object,
        animation: PropTypes.bool,
        mode: PropTypes.oneOf(['left', 'alternate']),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        fold: [],
        locale: nextLocale.Timeline,
        animation: true,
        mode: 'left',
    };

    constructor(props: TimelineProps) {
        super(props);

        this.state = {
            fold: props.fold!,
        };
    }

    static getDerivedStateFromProps(nextProps: TimelineProps, prevState: TimelineState) {
        const { innerUpdate, fold } = prevState;

        if (innerUpdate) {
            return {
                fold,
                innerUpdate: false,
            };
        }

        if ('fold' in nextProps) {
            return {
                fold: nextProps.fold,
            };
        }

        return null;
    }

    toggleFold(folderIndex: number, total: number) {
        const fold = this.state.fold.map(item => ({ ...item }));

        if (folderIndex) {
            for (let i = 0; i < fold.length; i++) {
                const { foldArea, foldShow } = fold[i];

                if (
                    (foldArea![1] && folderIndex === foldArea![1]) ||
                    (!foldArea![1] && folderIndex === total - 1)
                ) {
                    fold[i].foldShow = !foldShow;
                }
            }

            this.setState({ fold, innerUpdate: true });
        }
    }

    render() {
        const { prefix, rtl, className, children, locale, animation, mode, ...others } = this.props;
        const { fold } = this.state;

        // 修改子节点属性
        const childrenCount = React.Children.count(children);
        const isAlternateMode = mode === 'alternate';
        const getPositionCls = (idx: number) => {
            if (isAlternateMode) {
                return idx % 2 === 0
                    ? `${prefix}timeline-item-left`
                    : `${prefix}timeline-item-right`;
            }
            return `${prefix}timeline-item-left`;
        };

        const cloneChildren = Children.map(children, (child, i) => {
            let folderIndex = null;
            let foldNodeShow = false;

            fold.forEach(item => {
                const { foldArea, foldShow } = item;

                if (foldArea![0] && i >= foldArea![0] && (i <= foldArea![1] || !foldArea![1])) {
                    folderIndex = foldArea![1] || childrenCount - 1;
                    foldNodeShow = foldShow!;
                }
            });

            return React.cloneElement(child as ReactElement, {
                prefix: prefix,
                locale: locale,
                total: childrenCount,
                className: getPositionCls(i),
                index: i,
                folderIndex: folderIndex,
                foldShow: foldNodeShow,
                toggleFold:
                    folderIndex === i
                        ? this.toggleFold.bind(this, folderIndex, childrenCount)
                        : () => {},
                animation: animation,
            });
        });

        const timelineCls = classNames(
            {
                [`${prefix}timeline`]: true,
                [`${prefix}alternate`]: isAlternateMode,
            },
            className
        );

        if (rtl) {
            (others as TimelineProps & { dir: string }).dir = 'rtl';
        }

        return (
            <ul {...obj.pickOthers(Timeline.propTypes, others)} className={timelineCls}>
                {cloneChildren}
            </ul>
        );
    }
}

export default ConfigProvider.config(polyfill(Timeline));
