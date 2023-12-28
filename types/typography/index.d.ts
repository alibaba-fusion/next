import Text from './text';
import Paragraph from './paragraph';
import Typography from './typography';
import createTitle from './title';
import { TypographyProps, TitleProps, TextProps, ParagraphProps } from './types';
declare const WithSubTypography: typeof Typography & {
    H1: ReturnType<typeof createTitle>;
    H2: ReturnType<typeof createTitle>;
    H3: ReturnType<typeof createTitle>;
    H4: ReturnType<typeof createTitle>;
    H5: ReturnType<typeof createTitle>;
    H6: ReturnType<typeof createTitle>;
    Text: typeof Text;
    Paragraph: typeof Paragraph;
};
export type { TypographyProps, TitleProps, TextProps, ParagraphProps };
export default WithSubTypography;
