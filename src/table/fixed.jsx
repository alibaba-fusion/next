import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dom } from '../util';
import HeaderComponent from './fixed/header';
import BodyComponent from './fixed/body';
import WrapperComponent from './fixed/wrapper';
import { statics } from './util';

export default function fixed(BaseComponent) {
    /** Table */
    class FixedTable extends React.Component {
        static FixedHeader = HeaderComponent;
        static FixedBody = BodyComponent;
        static FixedWrapper = WrapperComponent;
        static propTypes = {
            /**
             * 是否具有表头
             */
            hasHeader: PropTypes.bool,
            /**
             * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
             */
            fixedHeader: PropTypes.bool,
            /**
             * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
             */
            maxBodyHeight: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
            hasHeader: true,
            fixedHeader: false,
            maxBodyHeight: 200,
            components: {},
            refs: {},
            prefix: 'next-',
        };

        static childContextTypes = {
            fixedHeader: PropTypes.bool,
            maxBodyHeight: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            onBodyScroll: PropTypes.func,
            getNode: PropTypes.func,
        };

        getChildContext() {
            return {
                fixedHeader: this.props.fixedHeader,
                maxBodyHeight: this.props.maxBodyHeight,
                onBodyScroll: this.onBodyScroll,
                getNode: this.getNode,
            };
        }

        componentDidMount() {
            this.adjustFixedHeaderSize();
        }

        componentDidUpdate() {
            this.adjustFixedHeaderSize();
        }

        adjustFixedHeaderSize() {
            const { hasHeader, fixedHeader, maxBodyHeight } = this.props;
            if (hasHeader && fixedHeader && !this.props.lockType) {
                if (this.bodyNode.scrollHeight <= maxBodyHeight) {
                    dom.setStyle(this.headerNode, 'paddingRight', 0);
                } else {
                    dom.setStyle(
                        this.headerNode,
                        'paddingRight',
                        dom.scrollbar().width
                    );
                }
            }
        }

        getNode = (type, node, lockType) => {
            lockType = lockType
                ? lockType.charAt(0).toUpperCase() + lockType.substr(1)
                : '';
            this[`${type}${lockType}Node`] = node;
            if (type === 'header' && !lockType) {
                this.innerHeaderNode = this.headerNode.querySelector('div');
            }
        };

        onBodyScroll = () => {
            this.scrollTo(this.bodyNode.scrollLeft, this.bodyNode.scrollTop);
        };

        scrollTo(x) {
            if (this.innerHeaderNode) {
                this.innerHeaderNode.scrollLeft = x;
            }
        }

        render() {
            /* eslint-disable no-unused-vars, prefer-const */
            let {
                components,
                className,
                prefix,
                fixedHeader,
                maxBodyHeight,
                ...others
            } = this.props;
            if (fixedHeader) {
                components = { ...components };
                if (!components.Header) {
                    components.Header = HeaderComponent;
                }
                if (!components.Body) {
                    components.Body = BodyComponent;
                }
                if (!components.Wrapper) {
                    components.Wrapper = WrapperComponent;
                }
                className = classnames({
                    [`${prefix}table-fixed`]: true,
                    [className]: className,
                });
            }
            return (
                <BaseComponent
                    {...others}
                    components={components}
                    className={className}
                    prefix={prefix}
                />
            );
        }
    }
    statics(FixedTable, BaseComponent);
    return FixedTable;
}
