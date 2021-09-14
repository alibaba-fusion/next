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
        cellDomRef: T.any,
        col: T.any,
        hasLock: T.bool,
        asyncResizable: T.bool,
    };
    constructor() {
        super();

        this.cellMinWidth = 40;

        this.lastPageX = 0;
        this.tRight = 0;
        this.tLeft = 0;
        this.cellLeft = 0;
        this.startLeft = 0;
        this.changedPageX = 0;

        this.asyncResizeFlag = false;
    }
    static defaultProps = {
        onChange: () => {},
    };
    componentWillUnmount() {
        this.destory();
    }
    showResizeProxy = () => {
        this.props.resizeProxyDomRef.style.cssText = `display:block;left:${this.startLeft}px;`;
    };
    moveResizeProxy = () => {
        const moveLeft = this.startLeft + this.changedPageX;
        this.props.resizeProxyDomRef.style.cssText = `left:${moveLeft}px;display:block;`;
    };
    resetResizeProxy = () => {
        // when the mouse was not moved,don't change cell width
        if (this.asyncResizeFlag) {
            this.props.onChange(this.props.dataIndex, this.changedPageX);
        }
        this.changedPageX = 0;
        this.tRight = 0;
        this.asyncResizeFlag = false;
        this.props.resizeProxyDomRef.style.cssText = `display:none;`;
    };
    movingLimit = () => {
        // table right limit
        let moveLeft = this.startLeft + this.changedPageX;
        if (moveLeft > this.tRight) {
            moveLeft = this.tRight;
            this.changedPageX = this.tRight - this.startLeft;
        }

        // cell left limit
        if (moveLeft - this.cellLeft < this.cellMinWidth) {
            this.changedPageX = this.cellLeft + this.cellMinWidth - this.startLeft;
        }

        // table left limit
        if (moveLeft < 0) {
            this.changedPageX = 0 - this.startLeft;
        }

        if (this.props.col.width + this.changedPageX < this.cellMinWidth) {
            this.changedPageX = this.cellMinWidth - this.props.col.width;
        }
    };
    onMouseDown = e => {
        const { left: tableLeft, width: tableWidth } = this.props.tableEl.getBoundingClientRect();
        if (!this.props.cellDomRef) {
            return;
        }
        const { left: cellDomLeft } = this.props.cellDomRef.getBoundingClientRect();
        this.lastPageX = e.pageX;
        this.tLeft = tableLeft;
        this.tRight = tableWidth;
        this.startLeft = e.pageX - tableLeft;
        this.cellLeft = cellDomLeft - tableLeft;

        if (this.props.asyncResizable) this.showResizeProxy();
        events.on(document, 'mousemove', this.onMouseMove);
        events.on(document, 'mouseup', this.onMouseUp);
        this.unSelect();
    };
    onMouseMove = e => {
        const pageX = e.pageX;
        this.changedPageX = pageX - this.lastPageX;

        if (this.props.rtl) {
            this.changedPageX = -this.changedPageX;
        }

        if (this.props.hasLock) {
            if (!this.props.asyncResizable) {
                // when hasn't lock attribute, cellLeft will change
                this.cellLeft = this.props.cellDomRef.getBoundingClientRect().left - this.tLeft;
            }
        }
        this.movingLimit();

        // stop at here when async
        if (this.props.asyncResizable) {
            // asyncResizeFlag use to prevent just click without mouse move
            this.asyncResizeFlag = true;
            this.moveResizeProxy();
            return;
        }
        this.props.onChange(this.props.dataIndex, this.changedPageX);
        this.lastPageX = pageX;
    };
    onMouseUp = () => {
        if (this.props.asyncResizable) {
            this.resetResizeProxy();
        }
        this.startLeft = 0;
        this.destory();
    };
    destory() {
        events.off(document, 'mousemove', this.onMouseMove);
        events.off(document, 'mouseup', this.onMouseUp);
        this.select();
    }
    unSelect() {
        dom.setStyle(document.body, {
            userSelect: 'none',
            cursor: 'ew-resize',
        });
        document.body.setAttribute('unselectable', 'on');
    }
    select() {
        dom.setStyle(document.body, {
            userSelect: '',
            cursor: '',
        });
        document.body.removeAttribute('unselectable');
    }
    render() {
        const { prefix } = this.props;
        return <a className={`${prefix}table-resize-handler`} onMouseDown={this.onMouseDown} />;
    }
}

export default Resize;
