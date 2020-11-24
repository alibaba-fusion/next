import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../shared-prop-types';

import { func } from '../../util';
import { call } from '../util';

const { bindCtx } = func;

class TimePanel extends React.Component {
    static propTypes = {
        value: SharedPT.date,
        disabled: PT.bool,
        showTime: PT.bool,
    };

    constructor(props) {
        super(props);
        bindCtx(this, 'onChange');
    }

    onChange(v) {
        console.log('TimePanel', v);
        call(this.props, 'onChange', v);
    }

    render() {
        const { onChange } = this;
        const { value } = this.props;
        return <div>TimePanel</div>;
    }
}

export default polyfill(React.memo(TimePanel));
