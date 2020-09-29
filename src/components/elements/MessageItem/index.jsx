import React from 'react';
import PropTypes from 'prop-types';

export const MessageItem = ({type, message}) => {

    return (
        <div className={`alert alert-${type}`}>
            <div className="mt-2">
                {message}
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    type: PropTypes.oneOf(['warning', 'secondary', 'info']),
    message: PropTypes.string.isRequired
}

MessageItem.defaultProps = {
    type: 'secondary'
}