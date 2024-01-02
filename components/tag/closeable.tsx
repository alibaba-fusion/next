import * as React from 'react';
import Tag from './tag';
import { CloseableProps } from './types';

/**
 * Tag.Closeable
 */
class Closeable extends React.Component<CloseableProps> {
    static defaultProps = {
        disabled: false,
        type: 'normal',
    };
    render() {
        const {
            disabled,
            className,
            closeArea,
            onClose,
            afterClose,
            onClick,
            type,
            size,
            children,
            rtl,
            ...others
        } = this.props;
        return (
            <Tag
                {...others}
                rtl={rtl}
                disabled={disabled}
                className={className}
                closeArea={closeArea}
                onClose={onClose}
                afterClose={afterClose}
                onClick={onClick}
                type={type}
                size={size}
                closable
            >
                {children}
            </Tag>
        );
    }
}
export { Closeable };
