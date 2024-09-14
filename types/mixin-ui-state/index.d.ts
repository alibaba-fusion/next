import React, {
    Component,
    type HTMLAttributes,
    type DetailedReactHTMLElement,
    type ReactHTMLElement,
    type ReactSVGElement,
    type DOMElement,
    type DOMAttributes,
    type FunctionComponentElement,
    type CElement,
    type ComponentState,
    type ReactElement,
} from 'react';
type ClonableElement<P = unknown> =
    | DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>
    | ReactHTMLElement<HTMLElement>
    | ReactSVGElement
    | DOMElement<DOMAttributes<Element>, Element>
    | FunctionComponentElement<P>
    | CElement<P, Component<P, ComponentState>>
    | ReactElement<P>;
export interface UIStateProps {
    onFocus?: (...rest: unknown[]) => unknown;
    onBlur?: (...rest: unknown[]) => unknown;
}
export interface UIStateState {
    focused?: boolean;
}
/**
 * UIState 为一些特殊元素的状态响应提供了标准的方式，
 * 尤其适合 CSS 无法完全定制的控件，比如 checkbox，radio 等。
 * 若组件 disable 则自行判断是否需要绑定状态管理。
 * 注意：disable 不会触发事件，请使用 resetUIState 还原状态
 */
declare class UIState<
    P extends UIStateProps = UIStateProps,
    S extends UIStateState = UIStateState,
> extends Component<P, S> {
    constructor(props: P & UIStateProps);
    getStateElement(
        base: ClonableElement<P & UIStateProps>
    ): React.ReactElement<React.DOMAttributes<Element>, string | React.JSXElementConstructor<any>>;
    getStateClassName(): string;
    resetUIState(): void;
    _onUIFocus(): void;
    _onUIBlur(): void;
}
export default UIState;
