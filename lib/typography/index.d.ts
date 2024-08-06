import Typography from './typography';
import { TypographyProps, TitleProps, TextProps, ParagraphProps } from './types';
declare const WithSubTypography: typeof Typography & {
    Text: import("../config-provider/types").ConfiguredComponentClass<TextProps & import("../config-provider/types").ComponentCommonProps, import("./text").Text, {}>;
    Paragraph: import("../config-provider/types").ConfiguredComponentClass<ParagraphProps & import("../config-provider/types").ComponentCommonProps, import("./paragraph").Paragraph, {}>;
    H1: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
    H2: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
    H3: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
    H4: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
    H5: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
    H6: import("../config-provider/types").ConfiguredComponentClass<TitleProps & import("../config-provider/types").ComponentCommonProps, import("./types").TitleClass, {}>;
};
export type { TypographyProps, TitleProps, TextProps, ParagraphProps };
export default WithSubTypography;
