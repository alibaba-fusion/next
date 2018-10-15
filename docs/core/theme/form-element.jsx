import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Input from '../../../src/input';
import Select from '../../../src/select';
import TimePicker from '../../../src/time-picker';
import '../../../src/demo-helper/style.js';
import '../../../src/input/style.js';
import '../../../src/time-picker/style.js';
import '../../../src/select/style.js';
import '../../../src/core/form-element.scss';

const dataSource = [
    { label: 'AAAA', value: 'a' },
    { label: 'BBBB', value: 'b' },
    { label: 'CCCC', value: 'c' },
    { label: 'DDDD', value: 'd' }
];

class FormElementDemo extends React.Component {
    render() {
        const { size } = this.props;
        const elementProps = {
            className: 'next-form-element',
            size,
            style: {
                width: '200px'
            }
        };

        return (
            <table>
                <tbody>
                    <tr>
                        <td><Input placeholder="请输入" {...elementProps} /></td>
                        <td><Select {...elementProps} dataSource={dataSource} /></td>
                        <td><TimePicker {...elementProps} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

window.renderDemo = function () {

    ReactDOM.render(
        <Demo title="FormElement">
            <tr className="demo-group">
                <td className="label"></td>
                <td style={{ fontSize: '14px', height: '40px', lineHeight: '40px' }}>
                    配置该类容器的Size、Font、Icon(size)、Corner会涉及到联动的组件一起改变的有：Input、Select、TreeSelect、CascaderSelect、Timepicker、DatePicker、NumberPicker
                </td>
            </tr>
            <DemoGroup label="Large">
                <FormElementDemo size="large" />
            </DemoGroup>
            <DemoGroup label="Medium">
                <FormElementDemo />
            </DemoGroup>
            <DemoGroup label="Small">
                <FormElementDemo size="small"  />
            </DemoGroup>
        </Demo>, document.getElementById('container'));
};

renderDemo();

initDemo('form-element');
