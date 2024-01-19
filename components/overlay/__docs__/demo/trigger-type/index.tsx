import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

const style = { marginLeft: 10 };
ReactDOM.render(
    <div>
        <Popup v2 trigger={<button style={style}>click</button>} triggerType="click">
            <span className="overlay-demo">Click to open Popup!</span>
        </Popup>
        <Popup v2 trigger={<button style={style}>hover</button>} triggerType="hover">
            <span className="overlay-demo">Hover to open Popup!</span>
        </Popup>
        <Popup
            v2
            trigger={<button style={style}>focus</button>}
            triggerType="focus"
            autoFocus={false}
        >
            <span className="overlay-demo">Focus to open Popup!</span>
        </Popup>
    </div>,
    mountNode
);
