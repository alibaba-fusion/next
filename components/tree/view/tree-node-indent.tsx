import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import type { CommonProps } from '../../util/types';

export interface TreeNodeIndentProps {
    level: number;
    isLastChild: boolean[];
    showLine: boolean | undefined;
}
export default class TreeNodeIndent extends Component<
    TreeNodeIndentProps & Pick<CommonProps, 'prefix'>
> {
    static propTypes = {
        prefix: PropTypes.string,
        level: PropTypes.number,
        isLastChild: PropTypes.arrayOf(PropTypes.bool),
        showLine: PropTypes.bool,
    };

    static defaultProps = {
        isLastChild: [],
    };

    render() {
        const { prefix, level, isLastChild, showLine } = this.props;
        const indents = [];

        for (let i = 1; i < level; i++) {
            const classNames = cx(`${prefix}tree-node-indent-unit`, {
                [`${prefix}line`]: !isLastChild[i - 1] && showLine,
            });

            indents.push(<span className={classNames} key={i - 1} />);
        }

        return indents;
    }
}
