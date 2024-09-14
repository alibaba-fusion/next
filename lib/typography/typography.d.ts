import React from 'react';
import PropTypes from 'prop-types';
import { TypographyProps } from './types';
/**
 * Typography
 */
declare class Typography extends React.Component<TypographyProps> {
    static propTypes: {
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    };
    static defaultProps: {
        component: string;
    };
    render(): React.JSX.Element;
}
export default Typography;
