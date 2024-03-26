import type { ReactNode } from 'react';
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
    HasDefaultKeys extends keyof Props,
> = Readonly<RequiredSome<Props, HasDefaultKeys>> & Readonly<{ children?: ReactNode | undefined }>;
