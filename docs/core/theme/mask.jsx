import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Dialog from '../../../src/dialog';
import '../../../src/demo-helper/style.js';
import '../../../src/dialog/style.js';
import '../../../src/core/mask.scss';

class MaskDemo extends React.Component {
    findContainer() {
        return document.querySelector('#mask-demo-container');
    }

    afterOpen() {
        document.querySelector('#mask-demo-container .next-overlay-backdrop').classList.add('next-mask');
    }

    render() {
        const overlayProps = {
            target: this.findContainer,
            container: this.findContainer,
            afterOpen: this.afterOpen
        };

        return (
            <div id="mask-demo-container" style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Dialog visible overlayProps={overlayProps} isFullScreen title="Welcome to Alibaba.com" footer={false}>
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

window.renderDemo = function () {
    ReactDOM.render(
        <Demo title="Mask">
            <DemoGroup label={false}>
                <MaskDemo />
            </DemoGroup>
        </Demo>, document.getElementById('container'));
};

renderDemo();

initDemo('mask');
