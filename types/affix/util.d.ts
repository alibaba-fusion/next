export declare function getScroll(node: Window | Element, isVertical?: boolean): number;
export declare function getRect(node: Window | Element):
    | DOMRect
    | {
          top: number;
          left: number;
          bottom: number;
      };
export declare function getNodeHeight(node: Window | Element): number;
