import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import type { TabContentProps } from '../types';
declare class TabContent extends PureComponent<TabContentProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        activeKey: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        lazyLoad: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
    };
    render(): React.JSX.Element;
}
export default TabContent;
