import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';
import Icon from './icon';
import { assignSubComponent } from '../util/component';
var IconWithSub = assignSubComponent(Icon, {
    createFromIconfontCN: createFromIconfontCN,
});
export default ConfigProvider.config(IconWithSub);
