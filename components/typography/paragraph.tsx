import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Text from './text';
import { ParagraphProps } from './types';

/**
 * Typography.Paragraph
 */
class Paragraph extends React.Component<ParagraphProps> {
    static propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
    };
    static defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
        component: 'p',
    };

    render() {
        const { prefix, className, component, ...others } = this.props;

        const cls = classNames(`${prefix}typography-paragraph`, className);

        return <Text {...others} className={cls} component={component} />;
    }
}

export default ConfigProvider.config(Paragraph);
