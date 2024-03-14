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
import classnames from 'classnames';
import { func } from '../util';

const { makeChain } = func;

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
class UIState<
    P extends UIStateProps = UIStateProps,
    S extends UIStateState = UIStateState,
> extends Component<P, S> {
    constructor(props: P & UIStateProps) {
        super(props);
        this.state = {} as S & UIStateState;
        (['_onUIFocus', '_onUIBlur'] as const).forEach(item => {
            this[item] = this[item].bind(this);
        });
    }
    // base 事件绑定的元素
    getStateElement(base: ClonableElement<P & UIStateProps>) {
        const { onFocus, onBlur } = this.props;
        return React.cloneElement(base, {
            onFocus: makeChain(this._onUIFocus, onFocus),
            onBlur: makeChain(this._onUIBlur, onBlur),
        });
    }
    // 获取状态 classname
    getStateClassName() {
        const { focused } = this.state;
        return classnames({
            focused,
        });
    }
    // 复原状态
    resetUIState() {
        this.setState({
            focused: false,
        });
    }
    _onUIFocus() {
        this.setState({
            focused: true,
        });
    }
    _onUIBlur() {
        this.setState({
            focused: false,
        });
    }
}

export default UIState;
