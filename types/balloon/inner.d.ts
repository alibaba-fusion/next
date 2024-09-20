import React from 'react';
import PropTypes from 'prop-types';
import type { BalloonInnerProps } from './types';
declare class BalloonInner extends React.Component<BalloonInnerProps> {
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        closable: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        alignEdge: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        style: PropTypes.Requireable<any>;
        align: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        isTooltip: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        pure: PropTypes.Requireable<boolean>;
        v2: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        closable: boolean;
        onClose: () => void;
        locale: Partial<{
            close: string;
        }> & {
            momentLocale?: string | undefined;
        };
        align: string;
        type: string;
        alignEdge: boolean;
        pure: boolean;
    };
    render(): React.JSX.Element;
}
export default BalloonInner;
