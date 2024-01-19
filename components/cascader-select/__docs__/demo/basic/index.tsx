import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return <CascaderSelect dataSource={this.state.data} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
