import React from 'react';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from './index';

const customCache = new Set();

/** Icon.createFromIconfontCN
 *  @description 通过自定义 iconfont源来使用使用svg格式的图片，默认有缓存处理，也可以通过设置 id 手动进行缓存（注意若页面上已经有同名 id 的 dom 元素，Icon将不再加载当前远程icon资源）
 *  @order 1
 */
export default function createFromIconfontCN(options = {}) {
    const { scriptUrl, extraCommonProps = {}, id } = options;
    let hasExist = customCache.has(scriptUrl);

    if ('id' in options && document.getElementById(id)) {
        hasExist = true;
    }

    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */
    if (
        typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function' &&
        typeof scriptUrl === 'string' &&
        scriptUrl.length &&
        !hasExist
    ) {
        const script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        if ('id' in options) {
            script.setAttribute('id', id);
        }

        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }

    const Iconfont = props => {
        const {
            type,
            size,
            children,
            className,
            prefix = 'next-',
            ...others
        } = props;

        // component > children > type
        let content = null;
        if (props.type) {
            content = <use xlinkHref={`#${type}`} />;
        }
        if (children) {
            content = children;
        }

        const classes = cx(
            {
                [`${prefix}icon-remote`]: true,
            },
            className
        );

        return (
            <Icon size={size}>
                <svg
                    className={classes}
                    focusable={false}
                    {...others}
                    {...extraCommonProps}
                >
                    {content}
                </svg>
            </Icon>
        );
    };

    Iconfont.displayName = 'Iconfont';

    return ConfigProvider.config(Iconfont);
}
