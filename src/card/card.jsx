/* eslint-disable valid-jsdoc */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import nextLocale from '../locale/zh-cn';
import { obj } from '../util';

const { pickOthers } = obj;

/** Card */
export default class Card extends React.Component {
    static displayName = 'Card';

    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 卡片的标题
         */
        title: PropTypes.node,
        /**
         * 卡片的副标题
         */
        subTitle: PropTypes.node,
        /**
         * 是否显示标题的项目符号
         */
        showTitleBullet: PropTypes.bool,
        /**
         * 是否展示头部的分隔线
         */
        showHeadDivider: PropTypes.bool,
        /**
         * 内容区域的固定高度
         */
        contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 标题区域的用户自定义内容
         */
        extra: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.node,
        locale: PropTypes.object
    };

    static defaultProps = {
        prefix: 'next-',
        showTitleBullet: true,
        showHeadDivider: true,
        contentHeight: 120,
        locale: nextLocale.Card
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            needMore: false,
            expand: false,
            contentHeight: 'auto'
        };
    }

    componentDidMount() {
        this._setNeedMore();
        this._setContentHeight();
    }

    componentDidUpdate() {
        this._setContentHeight();
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {
                expand: !prevState.expand
            };
        });
    }

    // 是否展示 More 按钮
    _setNeedMore() {
        const { contentHeight } = this.props;
        const childrenHeight = this._getNodeChildrenHeight(this.content);
        this.setState({
            needMore: contentHeight !== 'auto' && childrenHeight > contentHeight
        });
    }

    // 设置 Body 的高度
    _setContentHeight() {
        if (this.state.expand) {
            const childrenHeight = this._getNodeChildrenHeight(this.content);
            this.content.style.height = `${childrenHeight}px`; // get the real height
        } else {
            const el = ReactDOM.findDOMNode(this.footer);
            let height = this.props.contentHeight;

            if (el) {
                height = height - el.getBoundingClientRect().height;
            }

            this.content.style.height = `${height}px`;
        }
    }

    _getNodeChildrenHeight(node) {
        if (!node) {
            return 0;
        }

        const contentChildNodes = node.childNodes;
        const length = contentChildNodes.length;

        if (!length) {
            return 0;
        }

        const lastNode = contentChildNodes[length - 1];

        return lastNode.offsetTop + lastNode.offsetHeight;
    }

    _contentRefHandler = (ref) => {
        this.content = ref;
    }

    saveFooter = (ref) => {
        this.footer = ref;
    }

    render() {
        const {
            prefix,
            className,
            title,
            subTitle,
            extra,
            showTitleBullet,
            showHeadDivider,
            children,
            locale,
            rtl,
        } = this.props;
        const { needMore, expand } = this.state;

        const cardCls = classNames({
            [`${prefix}card`]: true,
            [`${prefix}card-show-divider`]: showHeadDivider,
            [`${prefix}card-hide-divider`]: !showHeadDivider
        }, className);

        const headCls = classNames({
            [`${prefix}card-head`]: true,
            [`${prefix}card-head-show-bullet`]: showTitleBullet
        });

        const others = pickOthers(Object.keys(Card.propTypes), this.props);

        others.dir = rtl ? 'rtl' : undefined;

        const headExtra = extra ? <div className={`${prefix}card-extra`}>{extra}</div> : null;

        return (
            <div {...others} className={cardCls}>
                {
                    title ?
                        <div className={headCls}>
                            <div className={`${prefix}card-head-main`}>
                                <div className={`${prefix}card-title`}>
                                    {title}
                                    {subTitle ? <span className={`${prefix}card-subtitle`}>{subTitle}</span> : null}
                                </div>
                                {headExtra}
                            </div>
                        </div> :
                        null
                }
                <div className={`${prefix}card-body`}>
                    <div className={`${prefix}card-content`} ref={this._contentRefHandler}>
                        {children}
                    </div>
                    {
                        needMore ?
                            <div className={`${prefix}card-footer`} ref={this.saveFooter} onClick={this.handleToggle}>
                                <Button text type="primary">
                                    {expand ? locale.fold : locale.expand}
                                    <Icon type="arrow-down" size="xs" className={expand ? 'expand' : ''} />
                                </Button>
                            </div> :
                            null
                    }
                </div>
            </div>
        );
    }
}
