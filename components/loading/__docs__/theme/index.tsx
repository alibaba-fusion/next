import ReactDOM from 'react-dom';
import React from 'react';
import '../../../demo-helper/style';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import '../../style';
import Loading from '../../index';

// import demo helper

// import component

const lightDemo = {
    textAlign: 'center' as const,
    padding: '60px',
    display: 'block',
};

ReactDOM.render(
    <div className="demo-container">
        <h2>加载 Loading</h2>

        <Demo title="Loading">
            <DemoHead cols={['L', 'M']} />
            <DemoGroup label="Normal">
                <Loading>
                    <div style={lightDemo}></div>
                </Loading>
                <Loading size="medium">
                    <div style={lightDemo}></div>
                </Loading>
            </DemoGroup>
        </Demo>
    </div>,
    document.getElementById('container')
);

initDemo('loading');
