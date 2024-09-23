import React from 'react';
// @ts-expect-error next component theme
import theme from '__theme';

export default function Theme() {
    React.useEffect(() => {
        theme();
    }, []);
    return (
        <div>
            <div id="container"></div>
        </div>
    );
}
