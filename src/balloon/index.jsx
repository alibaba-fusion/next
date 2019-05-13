import ConfigProvider from '../config-provider';
import Balloon from './balloon';
import Tooltip from './tooltip';
import Inner from './inner';
import { log } from '../util';

Balloon.Tooltip = ConfigProvider.config(Tooltip, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');
            const { text, ...others } = props;
            props = { children: text, ...others };
        }

        return props;
    },
});
Balloon.Inner = Inner;

export default ConfigProvider.config(Balloon, {
    transform: /* istanbul ignore next */ (props, deprecated) => {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');
            const { alignment, ...others } = props;
            props = { alignEdge: alignment === 'edge', ...others };
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange', 'Balloon');
            const { onCloseClick, onVisibleChange, ...others } = props;
            const newOnVisibleChange = (visible, reason) => {
                if (reason === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, reason);
                }
            };
            props = { onVisibleChange: newOnVisibleChange, ...others };
        }

        if ('triggerType' in props) {
            const triggerType = Array.isArray(props.triggerType)
                ? [...props.triggerType]
                : [props.triggerType];

            if (triggerType.indexOf('focus') > -1) {
                log.warning(
                    'triggerType[focus] is deprecated at [Balloon], use triggerType[hover, click] instead of it. If focus is desired maybe you should use [Balloon.Tooltip]'
                );
            }
        }

        return props;
    },
});
