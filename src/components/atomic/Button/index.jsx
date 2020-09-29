import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, color, isBlock, size, ...props }) => {
    return (
        <button className={`btn btn-${color} ${size} ${ isBlock ? 'btn-block' : ''}`} type="button" {...props}>
            { children }
        </button>
    );
};

// Validacoes
Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'light', 'warning', 'success', 'danger', 'link'])
}

// valores default
Button.defaultProps = {
    color: 'primary',
    children: PropTypes.string,
    size: ''
}