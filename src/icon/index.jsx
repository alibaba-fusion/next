import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';
import Icon from './icon';

Icon.createFromIconfontCN = createFromIconfontCN;

export default ConfigProvider.config(Icon);
