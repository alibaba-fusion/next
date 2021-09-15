import { dom } from '../util';

const isScrollDisplay = function(element) {
    try {
        const scrollbarStyle = window.getComputedStyle(element, '::-webkit-scrollbar');
        return !scrollbarStyle || scrollbarStyle.getPropertyValue('display') !== 'none';
    } catch (e) {
        // ignore error for firefox
    }

    return true;
};

export function hasScroll(containerNode) {
    const parentNode = containerNode.parentNode;

    return (
        parentNode &&
        parentNode.scrollHeight > parentNode.clientHeight &&
        dom.scrollbar().width > 0 &&
        isScrollDisplay(parentNode) &&
        isScrollDisplay(containerNode)
    );
}

/**
 * 获取默认的滚动条大小
 * @return {Number} width
 */
export function getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.className += 'just-to-get-scrollbar-size';

    dom.setStyle(scrollDiv, {
        position: 'absolute',
        width: '100px',
        height: '100px',
        overflow: 'scroll',
        top: '-9999px',
    });
    document.body && document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
}
