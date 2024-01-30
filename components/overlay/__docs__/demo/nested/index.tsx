import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Select, Balloon, DatePicker2 } from '@alifd/next';

const { Popup } = Overlay;
const { Tooltip } = Balloon;

const Demo = () => {
    return (
        <div>
            <Popup v2 trigger={<button>Popup Nest</button>} triggerType="click">
                <div className="overlay-demo">
                    <Popup v2 trigger={<button>Open second Popup</button>} triggerType="click">
                        <div className="overlay-demo">
                            <Popup
                                v2
                                trigger={<button>Open third Popup</button>}
                                triggerType="click"
                            >
                                <div className="overlay-demo">
                                    <p>Hello World From Third Overlay!</p>
                                </div>
                            </Popup>
                            <p>Hello World From Second Overlay!</p>
                        </div>
                    </Popup>
                    <p>Hello World From First Overlay!</p>
                </div>
            </Popup>
            <Popup
                v2
                trigger={<button style={{ marginLeft: 10 }}>Select Nest</button>}
                triggerType="click"
            >
                <div className="overlay-demo">
                    <Select
                        dataSource={['apple', 'banana', 'orange', 'grape']}
                        itemRender={d => (
                            <Tooltip
                                v2
                                trigger={<div style={{ width: '100%' }}>{d.value}</div>}
                                align="r"
                                onMouseDown={e => e.stopPropagation()}
                                onClick={e => e.stopPropagation()}
                            >
                                <span>{d.value}</span>
                            </Tooltip>
                        )}
                        popupProps={{ v2: true }}
                    />
                    <DatePicker2 popupProps={{ v2: true }} style={{ width: 120, marginLeft: 10 }} />
                    <br />
                    <br />
                    <DatePicker2.RangePicker popupProps={{ v2: true }} style={{ width: 240 }} />
                </div>
            </Popup>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
