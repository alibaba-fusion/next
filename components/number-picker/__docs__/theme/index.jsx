import '../../../src/demo-helper/style.js';
import {Demo, DemoGroup, DemoHead, initDemo} from '../../../src/demo-helper';
import NumberPicker from '../../../src/number-picker';
import '../../../src/number-picker/style.js';

// import demo helper

// import number-picker

ReactDOM.render((
    <div className="demo-container">
        <Demo title="Number Picker" block>
            <Demo title="Normal" block>
                <DemoHead cols={['Large', 'Medium', 'Small']}/>

                <DemoGroup label="Normal">
                    <NumberPicker defaultValue={0} size="large"/>
                    <NumberPicker defaultValue={0} />
                    <NumberPicker defaultValue={0} size="small"/>
                </DemoGroup>
                <DemoGroup label="Disabled">
                    <NumberPicker defaultValue={0} size="large" disabled/>
                    <NumberPicker defaultValue={0} disabled/>
                    <NumberPicker defaultValue={0} size="small" disabled/>
                </DemoGroup>
            </Demo>

            <Demo title="Inline" block>
                <DemoHead cols={['Large', 'Medium']}/>

                <DemoGroup label="Normal">
                    <NumberPicker defaultValue={0} size="large" type="inline"/>
                    <NumberPicker defaultValue={0} type="inline"/>
                    <NumberPicker defaultValue={0} size="small" type="inline"/>
                </DemoGroup>
                <DemoGroup label="Disabled">
                    <NumberPicker defaultValue={0} size="large" type="inline" disabled/>
                    <NumberPicker defaultValue={0} type="inline" disabled/>
                    <NumberPicker defaultValue={0} size="small" type="inline" disabled/>
                </DemoGroup>
            </Demo>

        </Demo>
    </div>
), document.getElementById('container'));

initDemo('number-picker');
