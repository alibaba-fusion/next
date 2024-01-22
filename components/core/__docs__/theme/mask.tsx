import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Dialog from '../../../dialog';
import '../../../demo-helper/style';
import '../../../dialog/style';
import '../../mask.scss';

class MaskDemo extends React.Component {
    findContainer() {
        return document.querySelector('#mask-demo-container');
    }

    afterOpen() {
        document
            .querySelector('#mask-demo-container .next-overlay-backdrop')
            .classList.add('next-mask');
    }

    render() {
        const overlayProps = {
            target: this.findContainer,
            container: this.findContainer,
            afterOpen: this.afterOpen,
        };

        return (
            <div
                id="mask-demo-container"
                style={{ width: '100%', height: '400px', position: 'relative' }}
            >
                <Dialog
                    animation={false}
                    visible
                    overlayProps={overlayProps}
                    isFullScreen
                    title="Welcome to Alibaba.com"
                    footer={false}
                >
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
        </Demo>,
        document.getElementById('container')
    );
};

renderDemo();

initDemo('mask');
