import type { ComponentType, ReactNode } from 'react';
import type { ComponentCommonProps } from '../config-provider/types';

export interface IconsType {
    [key: string]: ReactNode;
}

export interface CommonProps extends ComponentCommonProps {}

export type RequiredSome<Props extends object, HasDefaultKeys extends keyof Props> = Omit<
    Props,
    HasDefaultKeys
> &
    Required<Pick<Props, HasDefaultKeys>>;

export type ClassPropsWithDefault<
    Props extends object,
    DefaultProps extends { [k in keyof Props]?: unknown },
> = Readonly<RequiredSome<Props, Extract<keyof DefaultProps, keyof Props>>> &
    Readonly<Pick<DefaultProps, Exclude<keyof DefaultProps, keyof Props>>> &
    // eslint-disable-next-line @typescript-eslint/ban-types
    (Props extends { children: infer C } ? { children: C } : {});

interface REACT_STATICS {
    childContextTypes: true;
    contextType: true;
    contextTypes: true;
    defaultProps: true;
    displayName: true;
    getDefaultProps: true;
    getDerivedStateFromError: true;
    getDerivedStateFromProps: true;
    mixins: true;
    propTypes: true;
    type: true;
}

interface KNOWN_STATICS {
    name: true;
    length: true;
    prototype: true;
    caller: true;
    callee: true;
    arguments: true;
    arity: true;
}

interface MEMO_STATICS {
    $$typeof: true;
    compare: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
    type: true;
}

interface FORWARD_REF_STATICS {
    $$typeof: true;
    render: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
}

export type NonReactStatics<S extends React.ComponentType<any>, C extends object = object> = {
    [key in Exclude<
        keyof S,
        S extends React.MemoExoticComponent<any>
            ? keyof MEMO_STATICS | keyof C
            : S extends React.ForwardRefExoticComponent<any>
              ? keyof FORWARD_REF_STATICS | keyof C
              : keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
    >]: S[key];
};
