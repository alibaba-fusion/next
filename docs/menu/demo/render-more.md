# 自定义渲染更多

- order: 10

展示渲染更多 `renderMore` 用法

:::lang=en-us
# Menu render more

- order: 10

Demo the usage of `renderMore`.
:::

---

````jsx
import { Menu, Box, Typography } from '@alifd/next';

const { SubMenu, Item, PopupItem, Divider } = Menu;
const popupProps = {
    align: 'tc bc',
    triggerType: 'click'
};
const ds = [{
    title: '库存管理',
    children: [{
        title: '部门库存管理',
        link: ''
    },{
        title: '小二库存管理',
        link: ''
    }]
}, {
    title: '功能模块管理',
    children: [{
        title: '功能模块管理',
        link: ''
    },{
        title: '卡片管理',
        link: ''
    },{
        title: '首页布局',
        link: ''
    },{
        title: '页面管理',
        link: ''
    }]
}, {
    title: '系统管理',
    children: [{
        title: '角色管理',
        link: ''
    },{
        title: '标签管理',
        link: ''
    },{
        title: '字典管理',
        link: ''
    }]
}];

const Panel = props => {
    const { dataSource, ...others } = props;

    return (<div className="my-custom-content" {...others}>
        <Box direction="row">
            {dataSource.map((item, i) => {
                return (<Menu embeddable key={i}>
                <Menu.Item><div className="title">{item.title}</div></Menu.Item>
                <Divider />
                {item.dataSource.map((child, g) => {
                    const a = child.children && child.children.map((c, j) => {
                        return <Menu.Item key={j}><a href={c.link}>{c.title}</a></Menu.Item>;
                    });
                    return [<div className="sub-title" key={`title-${g}`}>{child.title}</div>, ...a];
                })}
                </Menu>);
            })}
        </Box>
    </div>);
};


const SubPanel = props => {
    const { dataSource, ...others } = props;

    return (<div className="my-custom-content" {...others}>
        <Box direction="row">
            {dataSource.map((item, i) => {
                return (<Menu embeddable key={i}>
                <div className="sub-title">{item.title}</div>
                {item.children.map((child, j) => {
                    return <Menu.Item key={j}><a href={child.link}>{child.title}</a></Menu.Item>;
                })}
                </Menu>);
            })}
        </Box>
    </div>);
};
ReactDOM.render(
    <Menu hozInLine direction="hoz" mode="popup" className="my-hoz-menu" popupClassName="my-hoz-menu"  popupProps={popupProps}
        renderMore={(more) => {
            const newDs = more.map((item, i) => {
                const data = item.props.children.props;
                return {
                    title: item.props.label,
                    dataSource: data.dataSource
                };
            });

            return (<PopupItem triggerType="click" key="0-more" label="更多" >
                <Panel dataSource={newDs}/>
            </PopupItem>);
        }}>
                <PopupItem key="0" label="Popup item 1" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="1" label="Popup item 2" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="2" label="Popup item 3" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="3" label="Popup item 4" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="4" label="Popup item 5" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="5" label="Popup item 6" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="6" label="Popup item 7" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="7" label="Popup item 8" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
                <PopupItem key="8" label="Popup item 9" noIcon>
                    <SubPanel dataSource={ds}/>
                </PopupItem>
    </Menu>
    , mountNode);
````

````css
.my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
    text-align: left;
}

.my-custom-content {
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 20px;
    text-align: left;
}

ul {
    list-style: none;
    padding-inline-start: 10px;
}
.title {
    font-size: 16px;
    font-weight: bold;
}
.sub-title {
    font-size: 12px;
    font-weight: normal;
    color: #999;
    padding-left: 20px;
}
````
