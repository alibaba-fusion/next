import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

function extraFooterRender() {
    return <div className="extra-footer">额外页脚扩展区</div>;
}

ReactDOM.render(
    <div>
        <DatePicker2 extraFooterRender={extraFooterRender} showOk />
        <br />
        <br />
        <RangePicker extraFooterRender={extraFooterRender} />
    </div>,
    mountNode
);
