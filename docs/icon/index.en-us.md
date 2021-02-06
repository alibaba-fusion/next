# Icon

-   category: Components
-   family: General
-   type: Display
-   cols: 1

---

## API

### Icon

| Param | Descripiton  | Type  | Default Value |
| ---- | ---------------------------------------------------- | -------- | ------------ |
| size | To set the icon size<br><br>**option**:<br>'xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit' | Enum   | 'medium' |
| type | Specify which icon to display                         | String   | -        |

<!-- api-extra-start -->

### Icon.createFromIconfontCN

If you want to use svg icon, use `Icon.createFromIconfontCN`.

```js
import { Icon } from '@alifd/next';

const CustomIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
});

// CustomIcon have the same props as Icon, e.g. size
ReactDOM.render(
    <div>
        <CustomIcon type="icon-store" size="small"/>
        <CustomIcon type="icon-gift"/>
        <CustomIcon type="icon-pic" size="large"/>
    </div>
, mountNode);
```
<!-- api-extra-end -->
