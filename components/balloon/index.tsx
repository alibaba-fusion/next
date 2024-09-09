import ConfigProvider from '../config-provider';
import Balloon from './balloon';
import Tooltip from './tooltip';
import Inner from './inner';
import { assignSubComponent } from '../util/component';

const BalloonWithSub = assignSubComponent(Balloon, {
    Tooltip: ConfigProvider.config(Tooltip, {
        transform: (props, deprecated) => {
            if ('text' in props) {
                deprecated('text', 'children', 'Tooltip');
                const { text, ...others } = props;
                props = { children: text, ...others };
            }

            return props;
        },
    }),
    Inner,
});
export default ConfigProvider.config(BalloonWithSub, {
    transform: (props, deprecated) => {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');
            const { alignment, ...others } = props;
            props = { alignEdge: alignment === 'edge', ...others };
        }
        if (props.onCloseClick) {
            deprecated(
                'onCloseClick',
                'onVisibleChange(visible, [type = "closeClick"])',
                'Balloon'
            );
            const { onCloseClick, onVisibleChange, ...others } = props;
            const newOnVisibleChange = (visible: boolean, type: string) => {
                if (type === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, type);
                }
            };
            props = { onVisibleChange: newOnVisibleChange, ...others };
        }

        return props;
    },
});
