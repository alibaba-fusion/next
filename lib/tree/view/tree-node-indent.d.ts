import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CommonProps } from '../../util/types';
export interface TreeNodeIndentProps {
    level: number;
    isLastChild: boolean[];
    showLine: boolean | undefined;
}
export default class TreeNodeIndent extends Component<TreeNodeIndentProps & Pick<CommonProps, 'prefix'>> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        level: PropTypes.Requireable<number>;
        isLastChild: PropTypes.Requireable<(boolean | null | undefined)[]>;
        showLine: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        isLastChild: never[];
    };
    render(): React.JSX.Element[];
}
