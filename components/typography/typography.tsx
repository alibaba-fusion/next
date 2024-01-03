import React from 'react';
import PropTypes from 'prop-types';
import Text from './text';
import { TypographyProps } from './types';

/**
 * Typography
 */
class Typography extends React.Component<TypographyProps> {
    static propTypes = {
        component: PropTypes.elementType,
    };
    static defaultProps = {
        component: 'article',
    };

    render() {
        return <Text {...this.props} />;
    }
}

export default Typography;
