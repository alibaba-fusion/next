import Text from './text';
import Paragraph from './paragraph';
import Typography from './typography';
import createTitle from './title';
import { TypographyProps, TitleProps, TextProps, ParagraphProps } from './types';

const WithSubTypography = Typography as typeof Typography & {
    H1: ReturnType<typeof createTitle>;
    H2: ReturnType<typeof createTitle>;
    H3: ReturnType<typeof createTitle>;
    H4: ReturnType<typeof createTitle>;
    H5: ReturnType<typeof createTitle>;
    H6: ReturnType<typeof createTitle>;
    Text: typeof Text;
    Paragraph: typeof Paragraph;
};

WithSubTypography.Text = Text;
WithSubTypography.Paragraph = Paragraph;
WithSubTypography.H1 = createTitle('h1');
WithSubTypography.H2 = createTitle('h2');
WithSubTypography.H3 = createTitle('h3');
WithSubTypography.H4 = createTitle('h4');
WithSubTypography.H5 = createTitle('h5');
WithSubTypography.H6 = createTitle('h6');

export type { TypographyProps, TitleProps, TextProps, ParagraphProps };

export default WithSubTypography;
