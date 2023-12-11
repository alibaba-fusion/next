import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Affix, Button } from '@alifd/next';

class Demo extends React.Component {
    _containerRefHandler(ref) {
        this.container = ref;
    }

    render() {
        return (
            <div className="custom-affix-container" ref={this._containerRefHandler.bind(this)}>
                <div className="affix-wrapper">
                    <Affix container={() => this.container} offsetTop={0} useAbsolute>
                        <Button type="secondary">Absolute Position Affixed</Button>
                    </Affix>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
