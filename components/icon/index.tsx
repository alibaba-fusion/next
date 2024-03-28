import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';
import Icon from './icon';
import { IconProps, IconOptions } from './types';

const WithFontIcon = Icon as typeof Icon & {
    createFromIconfontCN: typeof createFromIconfontCN;
};
WithFontIcon.createFromIconfontCN = createFromIconfontCN;

export type { IconProps, IconOptions };
export default ConfigProvider.config(WithFontIcon);
