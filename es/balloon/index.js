import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import ConfigProvider from '../config-provider';
import Balloon from './balloon';
import Tooltip from './tooltip';
import Inner from './inner';
import { log } from '../util';

Balloon.Tooltip = ConfigProvider.config(Tooltip, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');

            var _props = props,
                text = _props.text,
                others = _objectWithoutProperties(_props, ['text']);

            props = _extends({ children: text }, others);
        }

        return props;
    }
});
Balloon.Inner = Inner;

export default ConfigProvider.config(Balloon, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');

            var _props2 = props,
                alignment = _props2.alignment,
                others = _objectWithoutProperties(_props2, ['alignment']);

            props = _extends({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange(visible, [type = "closeClick"])', 'Balloon');

            var _props3 = props,
                onCloseClick = _props3.onCloseClick,
                onVisibleChange = _props3.onVisibleChange,
                _others = _objectWithoutProperties(_props3, ['onCloseClick', 'onVisibleChange']);

            var newOnVisibleChange = function newOnVisibleChange(visible, type) {
                if (type === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, type);
                }
            };
            props = _extends({ onVisibleChange: newOnVisibleChange }, _others);
        }

        if ('triggerType' in props) {
            var triggerType = Array.isArray(props.triggerType) ? [].concat(props.triggerType) : [props.triggerType];

            if (triggerType.indexOf('focus') > -1) {
                log.warning('triggerType[focus] is deprecated at [Balloon], use triggerType[hover, click] instead of it. If focus is desired maybe you should use [Balloon.Tooltip]');
            }
        }

        return props;
    }
});