import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';

import { func } from '../../util';
import { call } from '../util';
import Calendar from '../../calendar-2';

const { bindCtx } = func;

class DatePanel extends React.Component {
    static propTypes = {
        mode: SharedPT.mode,
        value: SharedPT.date,
        showTime: PT.bool,
    };

    constructor(props) {
        super(props);
        bindCtx(this, 'onChange');
    }

    onChange(v) {
        call(this.props, 'onChange', v);
    }

    render() {
        const { onChange } = this;
        const { value, mode } = this.props;
        return <Calendar panelMode={mode} value={value} shape="panel" onChange={onChange} />;
    }
}

export default polyfill(DatePanel);
