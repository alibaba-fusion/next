/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface {{ name }}Props extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * children
     */
    children?: React.ReactNode;

}

export default class {{ name }} extends React.Component<{{ name }}Props, any> {}
