import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import {func, obj} from '../util';
import Panel from './panel';

/** Collapse */
class Collapse extends React.Component {
    static propTypes = {
        /**
         * 样式前缀
         */
        prefix: PropTypes.string,
        /**
         * 组件接受行内样式
         */
        style: PropTypes.object,
        /**
         * 使用数据模型构建
         */
        dataSource: PropTypes.array,
        /**
         * 默认展开keys
         */
        defaultExpandedKeys: PropTypes.array,
        /**
         * 受控展开keys
         */
        expandedKeys: PropTypes.array,
        /**
         * 展开状态发升变化时候的回调
         */
        onExpand: PropTypes.func,
        /**
         * 所有禁用
         */
        disabled: PropTypes.bool,
        /**
         * 扩展class
         */
        className: PropTypes.string,
        /**
         * 手风琴模式，一次只能打开一个
         */
        accordion: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        accordion: false,
        prefix: 'next-',
        onExpand: func.noop,
    };

    static contextTypes = {
        prefix: PropTypes.string,
    };

    constructor(props) {
        super(props);

        let expandedKeys;
        if ('expandedKeys' in props) {
            expandedKeys = props.expandedKeys;
        } else {
            expandedKeys = props.defaultExpandedKeys;
        }

        this.state = {
            expandedKeys: typeof expandedKeys === 'undefined' ? [] : expandedKeys
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('expandedKeys' in nextProps) {
            this.setState({
                expandedKeys: typeof nextProps.expandedKeys === 'undefined' ? [] : nextProps.expandedKeys
            });
        }
    }

    onItemClick(key) {
        let expandedKeys = this.state.expandedKeys;
        if (this.props.accordion) {
            expandedKeys = expandedKeys[0] === key ? [] : [key];
        } else {
            expandedKeys = [...expandedKeys];
            const index = expandedKeys.indexOf(key);
            const isExpanded = index > -1;
            if (isExpanded) {
                expandedKeys.splice(index, 1);
            } else {
                expandedKeys.push(key);
            }
        }
        this.setExpandedKey(expandedKeys);
    }

    getProps(item, index, key) {
        const expandedKeys = this.state.expandedKeys;
        const {title} = item;
        let disabled = this.props.disabled;

        if (!disabled) {
            disabled = item.disabled;
        }

        let isExpanded = false;


        if (this.props.accordion) {
            isExpanded = expandedKeys[0] === key;
        } else {
            isExpanded = expandedKeys.some(expandedKey => {
                if (expandedKey === null || expandedKey === undefined || key === null || key === undefined) {
                    return false;
                }

                if (expandedKey === key || expandedKey.toString() === key.toString()) {
                    return true;
                }
                return false;
            });
        }

        return {
            key,
            title,
            isExpanded,
            disabled,
            onClick: disabled ? null : () => {
                this.onItemClick(key);
                if ('onClick' in item) {
                    item.onClick(key);
                }
            },
        };
    }

    getItemsByDataSource() {
        const {props} = this;
        const {dataSource} = props;
        // 是否有dataSource.item传入过key
        const hasKeys = dataSource.some(item => 'key' in item);

        return dataSource.map((item, index) => {
            // 传入过key就用item.key 没传入则统一使用index为key
            const key = hasKeys ? item.key :  `${index}`;
            return (<Panel {...this.getProps(item, index, key)} key={key}>
                {item.content}
            </Panel>);
        });
    }

    getItemsByChildren() {
        // 是否有child传入过key
        const allKeys = React.Children.map(this.props.children, child => child.key);
        const hasKeys = Boolean(allKeys.length);

        return React.Children.map(this.props.children, (child, index) => {
            if (child && typeof child.type === 'function' && child.type.isNextPanel) {
                // 传入过key就用child.key 没传入则统一使用index为key
                const key = hasKeys ? child.key : `${index}`;
                return React.cloneElement(child, this.getProps(child.props, index, key));
            } else {
                return child;
            }
        });
    }

    setExpandedKey(expandedKeys) {
        if (!('expandedKeys' in this.props)) {
            this.setState({expandedKeys});
        }
        this.props.onExpand(this.props.accordion ? expandedKeys[0] : expandedKeys);
    }

    render() {
        const {prefix, className, style, disabled, dataSource} = this.props;
        const collapseClassName = classNames({
            [`${prefix}collapse`]: true,
            [`${prefix}collapse-disabled`]: disabled,
            [className]: Boolean(className),
        });

        const others = obj.pickOthers(Collapse.propTypes, this.props);
        return (
            <div className={collapseClassName} style={style} {...others} role="presentation">
                {dataSource ? this.getItemsByDataSource() : this.getItemsByChildren()}
            </div>
        );
    }
}

export default ConfigProvider.config(Collapse);
