import Text from './text';
import Paragraph from './paragraph';
import Typography from './typography';
import createTitle from './title';
import { TypographyProps, TitleProps, TextProps, ParagraphProps } from './types';
import { assignSubComponent } from '../util/component';

const WithSubTypography = assignSubComponent(Typography, {
    Text,
    Paragraph,
    H1: createTitle('h1'),
    H2: createTitle('h2'),
    H3: createTitle('h3'),
    H4: createTitle('h4'),
    H5: createTitle('h5'),
    H6: createTitle('h6'),
});

export type { TypographyProps, TitleProps, TextProps, ParagraphProps };

export default WithSubTypography;
