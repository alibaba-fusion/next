import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';

function Demo() {
    const [data, setData] = useState<NonNullable<CascaderSelectProps['dataSource']>>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(e => console.log(e));
    }, []);

    let timeId: number | undefined;
    const duration = 1000;
    const handleSearch: CascaderSelectProps['onSearch'] = searchVal => {
        setLoading(true);

        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = window.setTimeout(() => {
            if (searchVal) {
                const item = { ...data[0].children![0].children![0] };
                item.label = `${searchVal}_${item.label}`;
                item.value = `${Date.now()}`;

                data[0].children![0].children![0] = item;

                setData([...data]);
            }

            timeId = undefined;
            setLoading(false);
        }, duration);
    };

    return (
        <CascaderSelect
            showSearch
            multiple
            onSearch={handleSearch}
            dataSource={data}
            style={{ width: 240 }}
            state={loading ? 'loading' : undefined}
            onChange={console.log}
        />
    );
}

ReactDOM.render(<Demo />, mountNode);
