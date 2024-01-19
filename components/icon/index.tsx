import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';
import Icon from './icon';
import type { IconProps, IconOptions } from './types';
import { assignSubComponent } from '../util/component';

const IconWithSub = assignSubComponent(Icon, {
    createFromIconfontCN,
});

export type { IconProps, IconOptions };
export default ConfigProvider.config(IconWithSub);
