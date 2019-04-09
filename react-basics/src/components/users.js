import React, { Component } from 'react';
import './users.css';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state ={
            usersDetails : [
                {
                    id: '1',
                    name :'Intizar Ahmad',
                    designation: 'ML',
                    skills: 'React Js, NodeJs angular JS'
                },
                {
                    id: '1',
                    name :'Akash Agarwal',
                    designation: 'SSE',
                    skills: 'React Js, NodeJs angular JS'
                },
                {
                    id: '1',
                    name :'Ravi Yadav',
                    designation: 'ML',
                    skills: 'React Js, NodeJs angular JS'
                }
            ]
        } 
    }

    render() {
        const {usersDetails} = this.state;
        return (
            <div>
                <div className="card">
                    <h1>{usersDetails['0'].name}</h1>
                    <p className="title">{usersDetails['0'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div>
                <div className="card">
                    <h1>{usersDetails['1'].name}</h1>
                    <p className="title">{usersDetails['1'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div>
                <div className="card">
                    <h1>{usersDetails['2'].name}</h1>
                    <p className="title">{usersDetails['2'].designation}</p>
                    <p>{usersDetails['0'].skills}</p>
                    <p><button>Delete</button></p>
                </div>
            </div>
        );
    }
}

Users.propTypes = {

};

export default Users;