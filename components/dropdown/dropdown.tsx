import React, { Component, Children } from 'react';
import * as PropTypes from 'prop-types';
import Overlay from '../overlay';
import { func } from '../util';
import type { DropdownProps, DropdownState } from './types';

const { noop, makeChain, bindCtx } = func;
const Popup = Overlay.Popup;

export default class Dropdown extends Component<DropdownProps, DropdownState> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        trigger: PropTypes.node,
        triggerType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        disabled: PropTypes.bool,
        align: PropTypes.string,
        offset: PropTypes.array,
        delay: PropTypes.number,
        autoFocus: PropTypes.bool,
        hasMask: PropTypes.bool,
        autoClose: PropTypes.bool,
        cache: PropTypes.bool,
        animation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    };
    static defaultProps = {
        prefix: 'next-',
        pure: false,
        defaultVisible: false,
        autoClose: false,
        onVisibleChange: noop,
        triggerType: 'hover',
        disabled: false,
        align: 'tl bl',
        offset: [0, 0],
        delay: 200,
        hasMask: false,
        cache: false,
        onPosition: noop,
    };
    static displayName = 'Dropdown';

    constructor(props: DropdownProps) {
        super(props);

        this.state = {
            visible: 'visible' in props ? props.visible : props.defaultVisible || false,
            autoFocus: 'autoFocus' in props ? props.autoFocus : false,
        };

        bindCtx(this, ['onTriggerKeyDown', 'onMenuClick', 'onVisibleChange']);
    }

    static getDerivedStateFromProps(nextProps: DropdownProps) {
        const state: Partial<DropdownState> = {};

        if ('visible' in nextProps) {
            state.visible = nextProps.visible;
        }

        return state;
    }

    getVisible(props = this.props) {
        return 'visible' in props ? props.visible : this.state.visible;
    }

    onMenuClick() {
        const { autoClose } = this.props;

        if (!('visible' in this.props) && autoClose) {
            this.setState({
                visible: false,
            });
        }
        this.onVisibleChange(false, 'fromContent');
    }

    onVisibleChange(visible: boolean, from: string) {
        this.setState({ visible });

        this.props.onVisibleChange!(visible, from);
    }

    onTriggerKeyDown() {
        let autoFocus: boolean | undefined = true;

        if ('autoFocus' in this.props) {
            autoFocus = this.props.autoFocus;
        }

        this.setState({
            autoFocus,
        });
    }

    render() {
        const { rtl, autoClose, trigger } = this.props;

        const child = Children.only(this.props.children);
        let content = child;
        if (
            typeof child.type === 'function' &&
            (child.type as typeof child.type & { isNextMenu: boolean }).isNextMenu
        ) {
            content = React.cloneElement(child, {
                onItemClick: makeChain(this.onMenuClick, child.props.onItemClick),
            });
        } else if (autoClose) {
            content = React.cloneElement(child, {
                onClick: makeChain(this.onMenuClick, child.props.onClick),
            });
        }

        const newTrigger = React.cloneElement(trigger!, {
            onKeyDown: makeChain(this.onTriggerKeyDown, trigger!.props.onKeyDown),
        });

        return (
            <Popup
                {...this.props}
                rtl={rtl}
                autoFocus={this.state.autoFocus}
                trigger={newTrigger}
                visible={this.getVisible()}
                onVisibleChange={this.onVisibleChange}
                canCloseByOutSideClick
            >
                {content}
            </Popup>
        );
    }
}
