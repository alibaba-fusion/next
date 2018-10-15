import ConfigProvider from '../config-provider';
import Rating from './rating';

export default ConfigProvider.config(Rating, {
    transform: (props, deprecated) => {
        if ('type' in props) {
            deprecated('type', 'showGrade', 'Rating');

            const { type, ...others } = props;
            props = { showGrade: type === 'grade', ...others };
        }

        return props;
    }
});
