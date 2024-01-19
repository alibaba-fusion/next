import * as React from 'react';
import cx from 'classnames';
import ConfigProvider from '../config-provider';
import Icon from './icon';
import type { IconOptions, IconSvgProps } from './types';

const customCache = new Set();

const ConfigIcon = ConfigProvider.config(Icon);

/** Icon.createFromIconfontCN
 *  通过自定义 iconfont源来使用使用svg格式的图片
 */
export default function createFromIconfontCN(options: IconOptions) {
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

    const Iconfont = (props: IconSvgProps) => {
        const { type, size, children, className, prefix = 'next-', ...others } = props;

        // component > children > type
        let content: React.ReactNode = null;
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
            // FIXME: 这里理论上优先级是 props 中的 prefix 优先级更高，不过之前的行为一直是取上层 ConfigProvider 中的 prefix，
            // 先兼容之前的表现，will be fixed in 2.x
            // https://github.com/alibaba-fusion/next/issues/3906
            <ConfigIcon size={size}>
                <svg className={classes} focusable={false} {...others} {...extraCommonProps}>
                    {content}
                </svg>
            </ConfigIcon>
        );
    };

    Iconfont.displayName = 'Iconfont';

    return ConfigProvider.config(Iconfont);
}
