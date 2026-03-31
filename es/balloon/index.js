import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Balloon from './balloon';
import Tooltip from './tooltip';
import Inner from './inner';
import { assignSubComponent } from '../util/component';
var BalloonWithSub = assignSubComponent(Balloon, {
    Tooltip: ConfigProvider.config(Tooltip, {
        transform: function (props, deprecated) {
            if ('text' in props) {
                deprecated('text', 'children', 'Tooltip');
                var text = props.text, others = __rest(props, ["text"]);
                props = __assign({ children: text }, others);
            }
            return props;
        },
    }),
    Inner: Inner,
});
export default ConfigProvider.config(BalloonWithSub, {
    transform: function (props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');
            var alignment = props.alignment, others = __rest(props, ["alignment"]);
            props = __assign({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange(visible, [type = "closeClick"])', 'Balloon');
            var onCloseClick_1 = props.onCloseClick, onVisibleChange_1 = props.onVisibleChange, others = __rest(props, ["onCloseClick", "onVisibleChange"]);
            var newOnVisibleChange = function (visible, type) {
                if (type === 'closeClick') {
                    onCloseClick_1();
                }
                if (onVisibleChange_1) {
                    onVisibleChange_1(visible, type);
                }
            };
            props = __assign({ onVisibleChange: newOnVisibleChange }, others);
        }
        return props;
    },
});
