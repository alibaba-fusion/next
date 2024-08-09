import type { IconOptions, IconSvgProps } from './types';
/** Icon.createFromIconfontCN
 *  通过自定义 iconfont源来使用使用svg格式的图片
 */
export default function createFromIconfontCN(
    options: IconOptions
): import('../config-provider/types').ConfiguredComponentClass<
    IconSvgProps & import('../config-provider/types').ComponentCommonProps,
    undefined,
    {}
>;
