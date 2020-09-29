import React from 'react';
import PropTypes from 'prop-types';

export const Option = ({ children, ...props }) => {
    return <option { ...props }>{children}</option>;
};

Option.propTypes = {
    children: PropTypes.string
};

Option.defaultProps = {
    children: '',
};

export const Select = ({ size, children, ...props }) => {
    const selectSize = size !== '' ? ` form-control-${size}` : ``;
    return (
        <select className={`form-control${selectSize}`} {...props}>
            {children}
        </select>
    );
};

let optionType = PropTypes.shape({
    type: PropTypes.oneOf([Option]),
});

Select.propTypes = {
    size: PropTypes.oneOf(['sm', '', 'lg']),
    children: PropTypes.oneOfType([PropTypes.arrayOf(Option), optionType]),
};

Select.defaultProps = {
    size: ''
};