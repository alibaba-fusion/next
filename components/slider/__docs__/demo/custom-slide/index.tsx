import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@alifd/next';
import PropTypes from 'prop-types';

const pages = [1, 2, 3, 4];

function Inner({ children, ...others }) {
    // Note that to transparently pass other attributes to the lower node, the Slider needs to perform the element's clone operation.
    return <div {...others}>{children}</div>;
}

Inner.propTypes = {
    children: PropTypes.any,
};

const slider = (
    <Slider>
        {pages.map((page, index) => {
            return (
                <Inner className="custom-inner" key={index}>
                    custom {page}
                </Inner>
            );
        })}
    </Slider>
);

ReactDOM.render(<div>{slider}</div>, mountNode);
