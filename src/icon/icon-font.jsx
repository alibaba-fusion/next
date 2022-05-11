import React from 'react';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from './icon';

const customCache = new Set();

/** Icon.createFromIconfontCN
 *  @description 通过自定义 iconfont源来使用使用svg格式的图片
 *  @order 1
 */
export default function createFromIconfontCN(options = {}) {
    const { scriptUrl, extraCommonProps = {} } = options;
    let hasExist = customCache.has(scriptUrl);

    if (document.querySelector(`script[data-namespace="${scriptUrl}"]`)) {
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
        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }

    const Iconfont = props => {
        const { type, size, children, className, prefix = 'next-', ...others } = props;

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
                <svg className={classes} focusable={false} {...others} {...extraCommonProps}>
                    {content}
                </svg>
            </Icon>
        );
    };

    Iconfont.displayName = 'Iconfont';

    return ConfigProvider.config(Iconfont);
}
