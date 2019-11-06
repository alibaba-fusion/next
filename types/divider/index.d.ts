/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface DividerProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * children
     */
    children?: React.ReactNode;

}

export default class Divider extends React.Component<DividerProps, any> {}
