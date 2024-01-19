import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import classNames from 'classnames';
/* eslint-disable react/prop-types, react/no-multi-comp */

// prevent onBlur
function preventDefault(e) {
    e.preventDefault();
}

class CustomMenu extends React.Component {
    data = [
        {
            label: 'value1',
            value: 1,
        },
        {
            label: 'value2',
            value: 2,
        },
    ];

    onClick(item) {
        this.props.onChange(item);
    }

    renderItems() {
        return this.data.map(item => (
            <li onClick={this.onClick.bind(this, item)} key={item.value}>
                {item.label}
            </li>
        ));
    }

    render() {
        const { className, ...others } = this.props;
        const cls = classNames('overlay-content', className);

        return (
            <ul className={cls} {...others}>
                {this.renderItems()}
            </ul>
        );
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    handleSelect = value => {
        this.setState({
            value,
            visible: false,
        });
    };

    onVisibleChange = visible => {
        this.setState({
            visible,
        });
    };

    render() {
        const popupContent = (
            <div style={{ border: '1px solid', background: 'white' }}>
                <div
                    style={{
                        borderBottom: '1px solid',
                        background: 'white',
                        padding: 10,
                        fontSize: '12px',
                    }}
                >
                    custom header
                </div>
                <CustomMenu onChange={this.handleSelect} onMouseDown={preventDefault} />
                <div
                    style={{
                        borderTop: '1px solid',
                        background: 'white',
                        padding: 10,
                        fontSize: '12px',
                    }}
                >
                    custom footer
                </div>
            </div>
        );
        const popupProps = {
            triggerClickKeycode: [13, 32, 40], // enter, space, down-arrow
        };

        return (
            <div className="demo-container">
                <Select
                    placeholder="custom popupContent"
                    visible={this.state.visible}
                    onVisibleChange={this.onVisibleChange}
                    value={this.state.value}
                    popupProps={popupProps}
                    popupContent={popupContent}
                    style={{ width: 200 }}
                />
            </div>
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
