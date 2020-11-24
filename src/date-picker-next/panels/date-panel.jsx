import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../shared-prop-types';

import { func } from '../../util';
import { call } from '../util';
import Calendar from '../../calendar-next';

const { bindCtx } = func;

class DatePanel extends React.Component {
    static propTypes = {
        value: SharedPT.date,
        disabled: PT.bool,
    };

    constructor(props) {
        super(props);
        bindCtx(this, 'onChange');
    }

    onChange(v) {
        console.log('[DatePanel]');
        call(this.props, 'onChange', v);
    }

    render() {
        const { onChange } = this;
        const { value } = this.props;
        return <Calendar value={value} shape="panel" onChange={onChange} />;
    }
}

export default polyfill(DatePanel);
