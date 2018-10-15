import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import ConfigProvider from '../config-provider';
import Item from './item';

/**
 * Breadcrumb
 */
class Breadcrumb extends Component {
    static Item = Item;

    static propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        /**
         * 面包屑子节点，需传入 Breadcrumb.Item
         */
        children: (props, propName) => {
            Children.forEach(props[propName], child => {
                if (!(child && typeof child.type === 'function' && child.type._typeMark === 'breadcrumb_item')) {
                    throw new Error('Breadcrumb\'s children must be Breadcrumb.Item!');
                }
            });
        },
        /**
         * 面包屑最多显示个数，超出部分会被隐藏
         */
        maxNode: PropTypes.number,
        /**
         * 分隔符，可以是文本或 Icon
         */
        separator: PropTypes.node,
        className: PropTypes.any
    };

    static defaultProps = {
        prefix: 'next-',
        maxNode: 100,
        separator: <Icon type="arrow-right" />
    };

    render() {
        const {prefix, className, maxNode, children, separator, ...others} = this.props;
        const clazz = classNames(`${prefix}breadcrumb`, className);
        let items;
        const length = Children.count(children);

        if (maxNode > 1 && length > maxNode) {
            const breakpointer = length - maxNode + 1;
            items = [];

            Children.forEach(children, (item, i) => {
                if (i && i === breakpointer) {
                    items.push(React.cloneElement(item, {
                        separator,
                        prefix,
                        key: i,
                        activated: i === length - 1,
                        className: `${prefix}breadcrumb-text-ellipsis`
                    }, '...'));
                } else if (!i || i > breakpointer) {
                    items.push(React.cloneElement(item, {
                        separator,
                        prefix,
                        key: i,
                        activated: i === length - 1
                    }));
                }
            });
        } else {
            items = Children.map(children, (item, i) => {
                return React.cloneElement(item, {
                    separator,
                    prefix,
                    activated: i === length - 1,
                    key: i
                });
            });
        }

        return <div className={clazz} {...others}>{items}</div>;
    }
}

export default ConfigProvider.config(Breadcrumb);
