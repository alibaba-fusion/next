import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../menu';
import type { SelectMenuProps } from '../types';
export default class SelectMenu extends Component<SelectMenuProps> {
    static isNextMenu: boolean;
    static propTypes: {
        dataSource: PropTypes.Requireable<(object | null | undefined)[]>;
        value: PropTypes.Requireable<number>;
        prefix: PropTypes.Requireable<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    menuEl: InstanceType<typeof Menu> | null;
    componentDidMount(): void;
    scrollToSelectedItem(): void;
    saveRef: (ref: InstanceType<typeof Menu> | null) => void;
    render(): React.JSX.Element;
}
