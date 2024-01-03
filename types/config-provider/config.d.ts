import {
    ComponentClass,
    FunctionComponent,
    ForwardRefExoticComponent,
    ComponentProps,
    ComponentRef,
    StaticLifecycle,
} from 'react';
import { Locale } from '../locale/types';
import type { ConfigOptions, ComponentCommonProps, ConfiguredComponent } from './types';
export declare function initLocales(locales?: Record<string, Locale>): void;
export declare function setLanguage(language: string): void;
export declare function setLocale(locale: Partial<Locale>): void;
export declare function setDirection(dir: 'ltr' | 'rtl'): void;
export declare function getLocale(): Partial<Locale>;
export declare function getLanguage(): string;
export declare function getDirection(): boolean | undefined;
export type ExcludeComponentStatics =
    | 'prototype'
    | 'contextType'
    | keyof StaticLifecycle<unknown, unknown>;
declare function config<
    C extends ComponentClass | ForwardRefExoticComponent<unknown> | FunctionComponent,
    R = C extends ComponentClass
        ? InstanceType<C>
        : C extends ForwardRefExoticComponent<unknown>
          ? ComponentRef<C>
          : unknown,
>(
    Component: C,
    options?: ConfigOptions<ComponentProps<C>>
): typeof ConfiguredComponent<ComponentProps<C> & ComponentCommonProps, R> & {
    [K in Exclude<keyof C, ExcludeComponentStatics>]: C[K];
};
export { config };
