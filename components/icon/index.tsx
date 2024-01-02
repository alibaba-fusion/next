import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';
import Icon from './icon';
import { IconProps, IconOptions } from './types';

Icon.createFromIconfontCN = createFromIconfontCN;

export type { IconProps, IconOptions as iconOptions };
export default ConfigProvider.config(Icon);
