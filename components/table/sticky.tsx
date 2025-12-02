import React from 'react';
import PropTypes from 'prop-types';
import Header from './fixed/header';
import StickyHeader from './sticky/header';
import { statics } from './util';
import type { StickyTableProps } from './types';
import type Base from './base';

export default function sticky(BaseComponent: typeof Base) {
    /** Table */
    class StickyTable extends React.Component<StickyTableProps> {
        static StickyHeader = StickyHeader;
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        static childContextTypes = {
            Header: PropTypes.any,
            offsetTop: PropTypes.number,
            affixProps: PropTypes.object,
        };

        state = {};

        getChildContext() {
            return {
                Header: this.props.components!.Header || Header,
                offsetTop: this.props.offsetTop,
                affixProps: this.props.affixProps,
            };
        }

        render() {
            const { stickyHeader, offsetTop, affixProps, ...others } = this.props;
            let { components, maxBodyHeight, fixedHeader } = this.props;
            if (stickyHeader) {
                components = { ...components };
                components.Header = StickyHeader;
                fixedHeader = true;
                // @ts-expect-error maxBodyHeight 应先转为数字
                maxBodyHeight = Math.max(maxBodyHeight, 10000);
            }
            return (
                <BaseComponent
                    {...others}
                    components={components}
                    fixedHeader={fixedHeader}
                    maxBodyHeight={maxBodyHeight}
                />
            );
        }
    }
    return statics(StickyTable, BaseComponent);
}
