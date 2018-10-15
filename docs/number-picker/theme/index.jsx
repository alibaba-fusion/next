import '../../../src/demo-helper/style.js';
import {Demo, DemoGroup, DemoHead, initDemo} from '../../../src/demo-helper';
import NumberPicker from '../../../src/number-picker';
import '../../../src/number-picker/style.js';

// import demo helper

// import number-picker

ReactDOM.render((
    <div className="demo-container">
        <Demo title="NumberPicker" block>
            <Demo title="normal" block>
                <DemoHead cols={['large', 'medium']}/>

                <DemoGroup label="normal">
                    <NumberPicker defaultValue={0} size="large"/>
                    <NumberPicker defaultValue={0} />
                </DemoGroup>
                <DemoGroup label="disabled">
                    <NumberPicker defaultValue={0} size="large" disabled/>
                    <NumberPicker defaultValue={0} disabled/>
                </DemoGroup>
            </Demo>

            <Demo title="inline" block>
                <DemoHead cols={['large', 'medium']}/>

                <DemoGroup label="normal">
                    <NumberPicker defaultValue={0} size="large" type="inline"/>
                    <NumberPicker defaultValue={0} type="inline"/>
                </DemoGroup>
                <DemoGroup label="disabled">
                    <NumberPicker defaultValue={0} size="large" type="inline" disabled/>
                    <NumberPicker defaultValue={0} type="inline" disabled/>
                </DemoGroup>
            </Demo>

        </Demo>
    </div>
), document.getElementById('container'));

initDemo('number-picker');
