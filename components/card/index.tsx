import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Card from './card';
import CardHeader from './header';
import CardBulletHeader from './bullet-header';
import CardMedia from './media';
import CardDivider from './divider';
import CardContent from './content';
import CollaspeContent from './collapse-content';
import CardActions from './actions';

export type {
    CardProps,
    CardMediaProps,
    CardHeaderProps,
    CardContentProps,
    CardDividerProps,
    CardActionsProps,
    CardBulletHeaderProps,
    CardCollaspeContentProps,
    CardCollapseContentProps,
} from './types';

const WithSubCard = assignSubComponent(Card, {
    Header: CardHeader,
    Media: CardMedia,
    Divider: CardDivider,
    Content: CardContent,
    Actions: CardActions,
    BulletHeader: CardBulletHeader,
    CollaspeContent: CollaspeContent,
    CollapseContent: CollaspeContent,
});

export default ConfigProvider.config(WithSubCard, {
    transform: (props, deprecated) => {
        if ('titlePrefixLine' in props) {
            deprecated('titlePrefixLine', 'showTitleBullet', 'Card');
            const { titlePrefixLine, ...others } = props;
            props = { showTitleBullet: titlePrefixLine as boolean, ...others };
        }
        if ('titleBottomLine' in props) {
            deprecated('titleBottomLine', 'showHeadDivider', 'Card');
            const { titleBottomLine, ...others } = props;
            props = { showHeadDivider: titleBottomLine as boolean, ...others };
        }
        if ('bodyHeight' in props) {
            deprecated('bodyHeight', 'contentHeight', 'Card');
            const { bodyHeight, ...others } = props;
            props = { contentHeight: bodyHeight as number | string, ...others };
        }

        return props;
    },
});
