import React from 'react';
import { findDOMNode } from 'react-dom';
import T from 'prop-types';
import { events, dom } from '../../util';

class Resize extends React.Component {
    static propTypes = {
        prefix: T.string,
        rtl: T.bool,
        onChange: T.func,
        dataIndex: T.string,
        tableEl: T.any,
        resizeProxyDomRef: T.any,
        asyncResizable: T.bool,
    };
    static defaultProps = {
        onChange: () => {},
    };
    componentWillUnmount() {
        this.destory();
    }
    showResizeProxy = () => {
        const tLeft = this.props.tableEl.getBoundingClientRect().left;
        this.proxtStartLeft = this.lastPageX - tLeft;
        this.props.resizeProxyDomRef.style.cssText = `display:block;left:${this.proxtStartLeft}px;`;
    };
    moveResizeProxy = () => {
        this.props.resizeProxyDomRef.style.cssText = `left:${this.proxtStartLeft + this.changedPageX}px;display:block;`;
    };
    resetResizeProxy = () => {
        this.props.onChange(this.props.dataIndex, this.changedPageX);
        this.changedPageX = 0;
        this.proxtStartLeft = 0;
        this.props.resizeProxyDomRef.style.cssText = `display:none;`;
    };
    onMouseDown = e => {
        this.lastPageX = e.pageX;
        this.proxtStartLeft = 0;
        if (this.props.asyncResizable) this.showResizeProxy();
        events.on(document, 'mousemove', this.onMouseMove);
        events.on(document, 'mouseup', this.onMouseUp);
        this.unSelect();
    };
    onMouseMove = e => {
        const pageX = e.pageX;
        let changedPageX = pageX - this.lastPageX;

        if (this.props.rtl) {
            changedPageX = -changedPageX;
        }

        // stop at here when async
        if (this.props.asyncResizable) {
            this.changedPageX = changedPageX;
            this.moveResizeProxy();
            return;
        }
        this.props.onChange(this.props.dataIndex, changedPageX);
        this.lastPageX = pageX;
    };
    onMouseUp = () => {
        if (this.props.asyncResizable) {
            this.resetResizeProxy();
        }
        this.destory();
    };
    destory() {
        events.off(document, 'mousemove', this.onMouseMove);
        events.off(document, 'mouseup', this.onMouseMove);
        this.select();
    }
    unSelect() {
        dom.setStyle(document.body, {
            userSelect: 'none',
            cursor: 'ew-resize',
        });
        document.body.setAttribute('unselectable', 'on');
        dom.addClass(this.resizeRef, 'resizing');
    }
    select() {
        dom.setStyle(document.body, {
            userSelect: '',
            cursor: '',
        });
        document.body.removeAttribute('unselectable');
        dom.removeClass(this.resizeRef, 'resizing');
    }
    render() {
        const { prefix } = this.props;
        return (
            <a
                className={`${prefix}table-resize-handler`}
                ref={r => {
                    this.resizeRef = r;
                }}
                onMouseDown={this.onMouseDown}
            />
        );
    }
}

export default Resize;
