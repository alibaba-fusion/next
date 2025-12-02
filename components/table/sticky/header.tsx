import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Affix from '../../affix';
import type { StickyHeaderProps } from '../types';

export default class StickHeader extends React.Component<StickyHeaderProps> {
    static propTypes = {
        prefix: PropTypes.string,
    };
    static contextTypes = {
        Header: PropTypes.any,
        offsetTop: PropTypes.number,
        affixProps: PropTypes.object,
    };

    getAffixRef = (ref: InstanceType<typeof Affix> | null) => {
        this.props.affixRef && this.props.affixRef(ref);
    };

    render() {
        const { prefix } = this.props;
        const { Header, offsetTop, affixProps } = this.context;

        const newAffixProps = affixProps || {};
        const { className, ...others } = newAffixProps;
        const cls = classnames({
            [`${prefix}table-affix`]: true,
            className,
        });

        return (
            <Affix ref={this.getAffixRef} {...others} className={cls} offsetTop={offsetTop}>
                <Header {...this.props} />
            </Affix>
        );
    }
}
