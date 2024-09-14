import ConfigProvider from '../config-provider';
import { log } from '../util';
import Tag from './tag';
import Group from './tag-group';
import Selectable from './selectable';
import Closable from './closeable';
import { assignSubComponent } from '../util/component';
var ConfigTag = ConfigProvider.config(Tag, {
    transform: function (props, deprecated) {
        var _a = props, shape = _a.shape, type = _a.type;
        if (shape === 'selectable') {
            deprecated('shape=selectable', 'Tag.Selectable', 'Tag');
        }
        if (shape === 'deletable') {
            deprecated('shape=deletable', 'Tag.Closeable', 'Tag');
        }
        if (shape === 'link') {
            deprecated('shape=link', '<Tag><a href="x">x</a></Tag>', 'Tag');
        }
        if (shape === 'readonly' || shape === 'interactive') {
            log.warning("Warning: [ shape=".concat(shape, " ] is deprecated at [ Tag ]"));
        }
        if (type === 'secondary') {
            log.warning('Warning: [ type=secondary ] is deprecated at [ Tag ]');
        }
        ['count', 'marked', 'value', 'onChange'].forEach(function (key) {
            if (key in props) {
                log.warning("Warning: [ ".concat(key, " ] is deprecated at [ Tag ]"));
            }
        });
        if ('selected' in props || 'defaultSelected' in props) {
            log.warning('Warning: [ selected|defaultSelected  ] is deprecated at [ Tag ], use [ checked|defaultChecked ] at [ Tag.Selectable ] instead of it');
        }
        if ('closed' in props) {
            log.warning('Warning: [ closed  ] is deprecated at [ Tag ], use [ onClose ] at [ Tag.Closeable ] instead of it');
        }
        if ('onSelect' in props) {
            deprecated('onSelect', '<Tag.Selectable onChange/>', 'Tag');
        }
        if ('afterClose' in props) {
            log.warning('Warning: [ afterClose  ] is deprecated at [ Tag ], use [ afterClose ] at [ Tag.Closeable ] instead of it');
        }
        return props;
    },
});
var ConfigClosable = ConfigProvider.config(Closable);
var TagWithSub = assignSubComponent(ConfigTag, {
    Group: ConfigProvider.config(Group),
    Selectable: ConfigProvider.config(Selectable),
    // 有的地方叫做 Closeable 有的地方用 Closeable, 为了保持兼容 文档类出现 Closeable, Closeable 可以继续用
    Closable: ConfigClosable,
    Closeable: ConfigClosable,
});
export default TagWithSub;
