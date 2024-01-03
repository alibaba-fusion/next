import { ReactNode } from 'react';
import { ComponentCommonProps } from '../config-provider/types';
export interface IconsType {
    [key: string]: ReactNode;
}
export interface CommonProps extends ComponentCommonProps {}
