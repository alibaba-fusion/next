import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import { assignSubComponent } from '../util/component';
import Card from './card';
import CardHeader from './header';
import CardBulletHeader from './bullet-header';
import CardMedia from './media';
import CardDivider from './divider';
import CardContent from './content';
import CollapseContent from './collapse-content';
import CardActions from './actions';
var WithSubCard = assignSubComponent(Card, {
    Header: CardHeader,
    Media: CardMedia,
    Divider: CardDivider,
    Content: CardContent,
    Actions: CardActions,
    BulletHeader: CardBulletHeader,
    /**
     * typo of CollapseContent
     * @deprecated Use CollapseContent instead
     */
    CollaspeContent: CollapseContent,
    CollapseContent: CollapseContent,
});
export default ConfigProvider.config(WithSubCard, {
    transform: function (props, deprecated) {
        if ('titlePrefixLine' in props) {
            deprecated('titlePrefixLine', 'showTitleBullet', 'Card');
            var titlePrefixLine = props.titlePrefixLine, others = __rest(props, ["titlePrefixLine"]);
            props = __assign({ showTitleBullet: titlePrefixLine }, others);
        }
        if ('titleBottomLine' in props) {
            deprecated('titleBottomLine', 'showHeadDivider', 'Card');
            var titleBottomLine = props.titleBottomLine, others = __rest(props, ["titleBottomLine"]);
            props = __assign({ showHeadDivider: titleBottomLine }, others);
        }
        if ('bodyHeight' in props) {
            deprecated('bodyHeight', 'contentHeight', 'Card');
            var bodyHeight = props.bodyHeight, others = __rest(props, ["bodyHeight"]);
            props = __assign({ contentHeight: bodyHeight }, others);
        }
        return props;
    },
});
