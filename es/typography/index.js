import Text from './text';
import Paragraph from './paragraph';
import Typography from './typography';
import createTitle from './title';
import { assignSubComponent } from '../util/component';
var WithSubTypography = assignSubComponent(Typography, {
    Text: Text,
    Paragraph: Paragraph,
    H1: createTitle('h1'),
    H2: createTitle('h2'),
    H3: createTitle('h3'),
    H4: createTitle('h4'),
    H5: createTitle('h5'),
    H6: createTitle('h6'),
});
export default WithSubTypography;
