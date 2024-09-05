import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '@alifd/next';

interface Pane {
    key: string;
    title: string;
    desc: string;
    img: string;
}

function CustomTabItem({ title, desc, img }: { title: string; desc: string; img: string }) {
    return (
        <div className="custom-tab-item">
            <div className="tab-title">
                <img className="tab-img" src={img} />
                {title}
            </div>
            <div className="tab-desc">{desc}</div>
        </div>
    );
}

const panes: Pane[] = [
    {
        key: 'e-checking',
        title: 'Alipay',
        desc: 'The fee to be paid is $15',
        img: 'https://img.alicdn.com/imgextra/i4/O1CN01WZitW51tO7ueHnfEt_!!6000000005891-2-tps-200-200.png',
    },
    {
        key: 'brand-card',
        title: 'Bank Card',
        desc: 'The fee to be paid is $17',
        img: 'https://img.alicdn.com/imgextra/i2/O1CN01NRazFH1nqATF6ywsJ_!!6000000005140-2-tps-200-200.png',
    },
];

ReactDOM.render(
    <Tab shape="wrapped" tabRender={(key, props) => <CustomTabItem key={key} {...props} />}>
        {panes.map(pane => (
            <Tab.Item {...pane} tabStyle={{ height: '60px' }}>
                {pane.desc}
            </Tab.Item>
        ))}
    </Tab>,
    mountNode
);
