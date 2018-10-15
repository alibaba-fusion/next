import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import '../../../src/loading/style.js';
import Loading from '../../../src/loading';

// import demo helper

// import component

const lightDemo = {
    textAlign: 'center',
    padding: '60px',
    display: 'block'
};

ReactDOM.render((
    <div className="demo-container">
        <h2>加载 Loading</h2>

        <Demo title="Loading">
            <DemoHead cols={['L', 'M']}/>
            <DemoGroup label="normal">
                <Loading>
                    <div style={lightDemo}></div>
                </Loading>
                <Loading size="medium">
                    <div style={lightDemo}></div>
                </Loading>
            </DemoGroup>
        </Demo>
    </div>
), document.getElementById('container'));

initDemo('loading');
