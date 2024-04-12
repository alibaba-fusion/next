import { type ReactElement } from 'react';
import { type ScrollToFirstErrorOption } from './types';
export declare function cloneAndAddKey(element: ReactElement): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export declare function scrollToFirstError({ errorsGroup, options, instance }: ScrollToFirstErrorOption): void;
