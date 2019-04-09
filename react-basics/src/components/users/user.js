import React from 'react';

const user = (props) => {
    return (
        <div className="card">
            <h1>{props.userdetails.name}</h1>
            <p className="title">{props.userdetails.designation}</p>
            <p>{props.userdetails.skills}</p>
            <p><button onClick = {()=>props.onDelete(props.userdetails.id)}>Delete</button></p>
        </div>
    );
};

export default user;