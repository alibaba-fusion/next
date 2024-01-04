import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect, Icon } from '@alifd/next';

function Demo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(e => console.log(e));
    }, []);

    let timeId;
    const duration = 1000;
    function handleSearch(searchVal) {
        setLoading(true);

        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            if (searchVal) {
                const item = { ...data[0].children[0].children[0] };
                item.label = `${searchVal}_${item.label}`;
                item.value = `${Date.now()}`;

                data[0].children[0].children[0] = item;

                setData([...data]);
            }

            timeId = undefined;
            setLoading(false);
        }, duration);
    }

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
