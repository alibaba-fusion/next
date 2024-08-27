import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

const handlePageSizeChange = (size: number) => console.log(size);

const containerStyle = {
    height: '300px',
    padding: 0,
    width: '100%',
};

const boxStyle = {
    overflow: 'auto',
    position: 'relative' as const,
    width: '100%',
    height: '200px',
    border: '1px solid black',
};

const tempStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const parentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const popupProps = {
    align: 'bl tl',
};

ReactDOM.render(
    <div>
        <h3>default align - 'tl bl'</h3>
        <Pagination
            pageSizeSelector="dropdown"
            total={10}
            pageSizePosition="start"
            onPageSizeChange={handlePageSizeChange}
        />
        <h3>custom align - 'bl tl'</h3>
        <Pagination
            pageSizeSelector="dropdown"
            total={10}
            pageSizePosition="start"
            onPageSizeChange={handlePageSizeChange}
            popupProps={popupProps}
        />
        <h3>Inside parent with "overlflow: auto"</h3>
        <div style={containerStyle}>
            <div style={boxStyle}>
                <div style={tempStyle}>scroll down to see the example</div>
                <div style={parentStyle}>
                    <div>
                        <h3>default align - 'tl bl'</h3>
                        <Pagination
                            pageSizeSelector="dropdown"
                            total={10}
                            pageSizePosition="start"
                            onPageSizeChange={handlePageSizeChange}
                        />
                    </div>
                    <div>
                        <h3>custom align - 'bl tl'</h3>
                        <Pagination
                            pageSizeSelector="dropdown"
                            total={10}
                            pageSizePosition="start"
                            onPageSizeChange={handlePageSizeChange}
                            popupProps={popupProps}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>,
    mountNode
);
