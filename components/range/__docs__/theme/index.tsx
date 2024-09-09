import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import '../../style';
import Range from '../../index';

const i18nMap = {
    'zh-cn': {
        title: '范围',
    },
    'en-us': {
        title: 'Range',
    },
};

function ItemDemo({ title, marksPosition, ...others }) {
    return (
        <Demo title={title}>
            <DemoGroup label="Normal">
                <div style={{ width: '400px', margin: '10px' }}>
                    <Range {...others} marksPosition={marksPosition} />
                </div>
            </DemoGroup>
            <DemoGroup label="Hover">
                <div style={{ width: '400px', margin: '10px' }}>
                    <Range {...others} marksPosition={marksPosition} className="simulation-hover" />
                </div>
            </DemoGroup>
            <DemoGroup label="Clicked">
                <div style={{ width: '400px', margin: '10px' }}>
                    <Range {...others} marksPosition={marksPosition} className="simulation-click" />
                </div>
            </DemoGroup>
            <DemoGroup label="Disabled">
                <div style={{ width: '400px', margin: '10px' }}>
                    <Range {...others} disabled marksPosition={marksPosition} />
                </div>
            </DemoGroup>
        </Demo>
    );
}

ItemDemo.propTypes = {
    title: PropTypes.string,
    marksPosition: PropTypes.bool,
};

class OriginalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                marksPosition: {
                    label: '刻度显示位置',
                    value: 'above',
                    enum: [
                        { label: '上', value: 'above' },
                        { label: '下', value: 'below' },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction,
        });
    }

    render() {
        const { demoFunction } = this.state;
        const marksPosition = demoFunction.marksPosition.value;

        return (
            <Demo
                title="With Scale"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <ItemDemo
                    marksPosition={marksPosition}
                    title="Single"
                    defaultValue={3}
                    max={10}
                    scales={5}
                    marks={5}
                />
                <ItemDemo
                    marksPosition={marksPosition}
                    title="Double"
                    defaultValue={[20, 40]}
                    slider="double"
                    scales={10}
                    marks={10}
                />
                <ItemDemo
                    fixedWidth
                    marksPosition={marksPosition}
                    title="Double - fixedWidth"
                    defaultValue={[20, 40]}
                    slider="double"
                    scales={10}
                    marks={10}
                />
            </Demo>
        );
    }
}

function NormalRange() {
    return (
        <Demo title="Basic">
            <ItemDemo title="Single" defaultValue={3} max={10} />
            <ItemDemo title="Double" defaultValue={[20, 40]} slider="double" />
            <ItemDemo
                fixedWidth
                title="Double - fixedWidth"
                defaultValue={[20, 40]}
                slider="double"
            />
        </Demo>
    );
}

const render = i18n => {
    ReactDOM.render(
        <div className="demo-container">
            <NormalRange />
            <OriginalDemo />
        </div>,
        document.getElementById('container')
    );
};

window.renderDemo = function (lang) {
    lang = lang || 'en-us';

    render(i18nMap[lang]);
};

window.renderDemo();

initDemo('range');
