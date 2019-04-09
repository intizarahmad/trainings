import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
const CounterHeader = (props) => {
    return (
        <div className="header">
           Current Value: {props.label}
        </div>
    );
};
CounterHeader.propTypes = {
    label : PropTypes.number
}
export default CounterHeader;