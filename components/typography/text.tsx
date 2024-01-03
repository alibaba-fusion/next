import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { TextProps } from './types';
/**
 * Typography.Text
 */
class Text extends React.Component<TextProps> {
    static propTypes = {
        prefix: PropTypes.string,
        delete: PropTypes.bool,
        mark: PropTypes.bool,
        underline: PropTypes.bool,
        strong: PropTypes.bool,
        code: PropTypes.bool,
        component: PropTypes.elementType,
        children: PropTypes.node,
        rtl: PropTypes.bool,
    };
    static defaultProps = {
        prefix: 'next-',
        delete: false,
        mark: false,
        underline: false,
        strong: false,
        code: false,
        component: 'span',
        rtl: false,
    };

    wrapChildren(children: React.ReactNode, wrapper: keyof JSX.IntrinsicElements): React.ReactNode {
        return React.createElement(wrapper, {}, children);
    }

    render() {
        const {
            prefix,
            className,
            component,
            strong,
            underline,
            delete: deleteProp,
            code,
            mark,
            rtl,
            children,
            ...others
        } = this.props;

        const Component = component as React.ElementType;
        let formattedChildren = children;
        if (strong) {
            formattedChildren = this.wrapChildren(formattedChildren, 'strong');
        }
        if (underline) {
            formattedChildren = this.wrapChildren(formattedChildren, 'u');
        }
        if (deleteProp) {
            formattedChildren = this.wrapChildren(formattedChildren, 'del');
        }
        if (code) {
            formattedChildren = this.wrapChildren(formattedChildren, 'code');
        }
        if (mark) {
            formattedChildren = this.wrapChildren(formattedChildren, 'mark');
        }
        if (rtl) {
            others.dir = 'rtl';
        }

        const cls = classNames(`${prefix}typography`, className);

        return (
            <Component {...others} className={cls}>
                {formattedChildren}
            </Component>
        );
    }
}

export default ConfigProvider.config(Text);
