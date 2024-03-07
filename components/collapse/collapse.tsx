import React, { type Key, type ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { func, obj } from '../util';
import Panel from './panel';
import type { CollapseProps, DataItem, KeyType } from './types';

/** Collapse */
class Collapse extends React.Component<
    CollapseProps,
    {
        expandedKeys: KeyType[];
    }
> {
    static propTypes = {
        prefix: PropTypes.string,
        style: PropTypes.object,
        dataSource: PropTypes.array,
        defaultExpandedKeys: PropTypes.array,
        expandedKeys: PropTypes.array,
        onExpand: PropTypes.func,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        accordion: PropTypes.bool,
        children: PropTypes.node,
        id: PropTypes.string,
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        accordion: false,
        prefix: 'next-',
        onExpand: func.noop,
    };

    static contextTypes = {
        prefix: PropTypes.string,
    };

    constructor(props: CollapseProps) {
        super(props);

        let expandedKeys: KeyType[] | undefined;
        if ('expandedKeys' in props) {
            expandedKeys = props.expandedKeys;
        } else {
            expandedKeys = props.defaultExpandedKeys;
        }

        this.state = {
            expandedKeys: typeof expandedKeys === 'undefined' ? [] : expandedKeys,
        };
    }

    static getDerivedStateFromProps(props: CollapseProps) {
        if ('expandedKeys' in props) {
            return {
                expandedKeys: typeof props.expandedKeys === 'undefined' ? [] : props.expandedKeys,
            };
        }
        return null;
    }

    onItemClick(key: KeyType) {
        let expandedKeys = this.state.expandedKeys;
        if (this.props.accordion) {
            expandedKeys = String(expandedKeys[0]) === String(key) ? [] : [key];
        } else {
            expandedKeys = [...expandedKeys];
            const stringKey = String(key);
            const index = expandedKeys.findIndex(k => String(k) === stringKey);
            const isExpanded = index > -1;
            if (isExpanded) {
                expandedKeys.splice(index, 1);
            } else {
                expandedKeys.push(key);
            }
        }
        this.setExpandedKey(expandedKeys);
    }

    genratePanelId(itemId: string | undefined, index: number) {
        const { id: collapseId } = this.props;
        let id;
        if (itemId) {
            // 优先用 item 自带的 id
            id = itemId;
        } else if (collapseId) {
            // 其次用 collapseId 和 index 生成 id
            id = `${collapseId}-panel-${index}`;
        }
        return id;
    }
    getProps(item: DataItem, index: number, key: KeyType) {
        const expandedKeys = this.state.expandedKeys;
        const { title } = item;
        let disabled = this.props.disabled;

        if (!disabled) {
            disabled = item.disabled;
        }

        let isExpanded = false;

        if (this.props.accordion) {
            isExpanded = String(expandedKeys[0]) === String(key);
        } else {
            isExpanded = expandedKeys.some(expandedKey => {
                if (
                    expandedKey === null ||
                    expandedKey === undefined ||
                    key === null ||
                    key === undefined
                ) {
                    return false;
                }

                if (expandedKey === key || expandedKey.toString() === key.toString()) {
                    return true;
                }
                return false;
            });
        }

        const id = this.genratePanelId(item.id, index);
        return {
            key,
            title,
            isExpanded,
            disabled,
            id,
            onClick: disabled
                ? null
                : () => {
                      this.onItemClick(key);
                      if ('onClick' in item) {
                          item.onClick?.(key);
                      }
                  },
        };
    }

    getItemsByDataSource() {
        const { props } = this;
        const { dataSource } = props;
        // 是否有 dataSource.item 传入过 key
        const hasKeys = dataSource!.some(item => 'key' in item);

        return dataSource!.map((item, index) => {
            // 传入过 key 就用 item.key 没传入则统一使用 index 为 key
            const key = hasKeys ? item.key : `${index}`;
            return (
                // @ts-expect-error FIXME 这里要确保 key 一定存在才能正常运行，hasKeys 的判断方式需要改进
                <Panel {...this.getProps(item, index, key)} key={key}>
                    {item.content}
                </Panel>
            );
        });
    }

    getItemsByChildren() {
        // 是否有 child 传入过 key
        const allKeys = React.Children.map(
            this.props.children,
            (child: ReactElement) => child && child.key
        );
        const hasKeys = Boolean(allKeys && allKeys.length);

        return React.Children.map(this.props.children, (child: ReactElement, index) => {
            if (
                child &&
                typeof child.type === 'function' &&
                (child.type as typeof Panel).isNextPanel
            ) {
                // 传入过 key 就用 child.key 没传入则统一使用 index 为 key
                const key = hasKeys ? child.key : `${index}`;
                // @ts-expect-error FIXME 这里要确保 key 一定存在才能正常运行，hasKeys 的判断方式需要改进
                return React.cloneElement(child, this.getProps(child.props, index, key));
            } else {
                return child;
            }
        });
    }

    setExpandedKey(expandedKeys: KeyType[]) {
        if (!('expandedKeys' in this.props)) {
            this.setState({ expandedKeys });
        }
        this.props.onExpand?.(this.props.accordion ? expandedKeys[0] : expandedKeys);
    }

    render() {
        const { prefix, className, style, disabled, dataSource, id, rtl } = this.props;
        const collapseClassName = classNames({
            [`${prefix}collapse`]: true,
            [`${prefix}collapse-disabled`]: disabled,
            [className!]: className,
        });

        const others = obj.pickOthers(Collapse.propTypes, this.props);
        return (
            <div
                id={id}
                className={collapseClassName}
                style={style}
                {...others}
                role="presentation"
                dir={rtl ? 'rtl' : undefined}
            >
                {dataSource ? this.getItemsByDataSource() : this.getItemsByChildren()}
            </div>
        );
    }
}

export default polyfill(ConfigProvider.config(Collapse));
