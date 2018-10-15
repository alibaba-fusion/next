import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Menu from '../../../src/menu';
import TreeSelect from '../../../src/tree-select';
import TimePicker from '../../../src/time-picker';
import '../../../src/demo-helper/style.js';
import '../../../src/menu/style.js';
import '../../../src/tree-select/style.js';
import '../../../src/time-picker/style.js';
import '../../../src/core/popup.scss';

class PopupDemo extends React.Component {
    render() {
        const tdStyle = {
            verticalAlign: 'top'
        };

        const style = {
            width: '200px'
        };
        const popupContainer = trigger => trigger.parentNode;

        return (
            <table style={{ height: '300px' }}>
                <tbody>
                    <tr>
                        <td style={tdStyle}>
                            <Menu className="next-popup" style={style}>
                                <Menu.Item key="1">Item 1</Menu.Item>
                                <Menu.Item key="2">Item 2</Menu.Item>
                                <Menu.Item key="3">Item 3</Menu.Item>
                                <Menu.Item key="4">Item 4</Menu.Item>
                                <Menu.Item key="5">Item 5</Menu.Item>
                            </Menu>
                        </td>
                        <td style={tdStyle}>
                            <TreeSelect style={style} visible treeDefaultExpandAll popupContainer={popupContainer} popupClassName="next-popup">
                                <TreeSelect.Node key="1" label="Node 1" />
                                <TreeSelect.Node key="2" label="Node 2">
                                    <TreeSelect.Node key="2-1" label="Node 2-1" />
                                    <TreeSelect.Node key="2-2" label="Node 2-2" />
                                </TreeSelect.Node>
                            </TreeSelect>
                        </td>
                        <td style={tdStyle}>
                            <TimePicker style={style} visible popupContainer={popupContainer} popupClassName="next-popup" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

window.renderDemo = function () {
    ReactDOM.render(
        <Demo title="Popup">
            <tr>
                <td style={{ height: '40px', fontSize: '14px', paddingLeft: '20px' }}>
                    配置该浮层的 Shadow\Corner\Border，会涉及到联动的组件一起改变的有：Menu、TreeSelect、CascaderSelect、TimePicker、DatePicker
                </td>
            </tr>
            <DemoGroup label={false}>
                <PopupDemo />
            </DemoGroup>
        </Demo>, document.getElementById('container'));
};

renderDemo();

initDemo('popup');
