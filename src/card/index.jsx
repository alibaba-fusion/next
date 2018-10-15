import ConfigProvider from '../config-provider';
import Card from './card';

export default ConfigProvider.config(Card, {
    transform: (props, deprecated) => {
        if ('titlePrefixLine' in props) {
            deprecated('titlePrefixLine', 'showTitleBullet', 'Card');
            const { titlePrefixLine, ...others } = props;
            props = { showTitleBullet: titlePrefixLine, ...others };
        }
        if ('titleBottomLine' in props) {
            deprecated('titleBottomLine', 'showHeadDivider', 'Card');
            const { titleBottomLine, ...others } = props;
            props = { showHeadDivider: titleBottomLine, ...others };
        }
        if ('bodyHeight' in props) {
            deprecated('bodyHeight', 'contentHeight', 'Card');
            const { bodyHeight, ...others } = props;
            props = { contentHeight: bodyHeight, ...others };
        }

        return props;
    }
});
