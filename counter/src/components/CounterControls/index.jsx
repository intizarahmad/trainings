import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
const index = (props) => {
    return (
        <div className="counter-controls" onClick={props.clicked}>
           {props.label}
        </div>
    );
};

index.propTypes = {
    clicked: PropTypes.func
} 
export default index;